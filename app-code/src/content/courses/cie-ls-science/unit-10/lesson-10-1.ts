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
              { id: "a", text: "Organ" },
              { id: "b", text: "Organism" },
              { id: "c", text: "Cell" },
              { id: "d", text: "Tissue" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cils-u10-s7-b-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During photosynthesis, which gas do plants release into the air?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Hydrogen" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Photosynthesis",
                statement: "CO₂ + water → glucose + O₂.",
              },
            ],
            steps: [
              {
                reasoning: "Oxygen is the gas released during photosynthesis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Oxygen",
          },
        },
        {
          id: "cils-u10-s7-b-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A garden has 30 plants and 12 of them are flowering. What percentage of the plants are flowering? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Percentage",
                statement: "Percentage = part ÷ whole × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Fraction flowering = $\\frac{12}{30} = 0.4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$0.4 \\times 100 = 40\\%$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$40\\%$",
          },
        },
        {
          id: "cils-u10-s7-b-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair of substances are the raw materials (reactants) of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen and nitrogen" },
              { id: "b", text: "Glucose and oxygen" },
              { id: "c", text: "Starch and minerals" },
              { id: "d", text: "Carbon dioxide and water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Photosynthesis",
                statement: "Reactants: carbon dioxide and water.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plants take in CO₂ and water to make glucose.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Carbon dioxide and water",
          },
        },
        {
          id: "cils-u10-s7-b-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which part of a typical plant does most photosynthesis take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leaves" },
              { id: "b", text: "Roots" },
              { id: "c", text: "Flowers" },
              { id: "d", text: "Stem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis",
                statement: "Occurs mainly in leaf cells containing chloroplasts.",
              },
            ],
            steps: [
              {
                reasoning: "Leaves contain chloroplasts and are the main site.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Leaves",
          },
        },
        {
          id: "cils-u10-s7-b-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two adaptations of leaves that help them carry out photosynthesis efficiently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Leaf adaptations",
                statement:
                  "Large flat surface area, thin, rich in chloroplasts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Large, flat surface area absorbs more light and allows more gas exchange.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Thin leaves give a short diffusion distance for gases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Many chloroplasts containing chlorophyll maximise light absorption.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Large flat surface, thin for short diffusion distance, many chloroplasts",
          },
        },
        {
          id: "cils-u10-s7-b-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In respiration, 1 molecule of glucose reacts with 6 molecules of oxygen. How many molecules of oxygen react with 2 molecules of glucose? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Oxygen molecules", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Respiration",
                statement: "Glucose + 6O₂ → 6CO₂ + 6H₂O + energy.",
              },
            ],
            steps: [
              {
                reasoning: "Ratio is 6 oxygen molecules per glucose molecule.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$6 \\times 2 = 12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cils-u10-s7-b-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the main organs of the human digestive system in the correct order from mouth to anus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digestive system",
                statement:
                  "Mouth → oesophagus → stomach → small intestine → large intestine → anus.",
              },
            ],
            steps: [
              {
                reasoning: "Mouth, oesophagus and stomach named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Small intestine and large intestine named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct order shown from mouth to anus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mouth → oesophagus → stomach → small intestine → large intestine → anus",
          },
        },
        {
          id: "cils-u10-s7-b-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how photosynthesis and respiration are linked — how the products of one process are the reactants of the other.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas cycle",
                statement:
                  "Photosynthesis uses CO₂ and releases O₂; respiration uses O₂ and releases CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "Photosynthesis takes in CO₂ and releases O₂.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Respiration takes in O₂ and releases CO₂.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each process supplies the gases the other needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together they cycle carbon and oxygen through living things and the atmosphere.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Photosynthesis consumes CO₂ and releases O₂; respiration consumes O₂ and releases CO₂ — each supplies the other's reactants.",
          },
        },
        {
          id: "cils-u10-s7-b-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle is the site of respiration in cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chloroplast" },
              { id: "b", text: "Ribosome" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Mitochondrion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitochondrion",
                statement: "Organelle where respiration releases energy.",
              },
            ],
            steps: [
              {
                reasoning: "Mitochondria are the site of respiration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Mitochondrion",
          },
        },
        {
          id: "cils-u10-s7-b-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do all living cells need oxygen? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Respiration",
                statement: "Oxygen is needed for aerobic respiration.",
              },
            ],
            steps: [
              {
                reasoning: "Oxygen is a reactant in aerobic respiration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Aerobic respiration releases much more energy than without oxygen.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Oxygen is needed for aerobic respiration, which releases more energy",
          },
        },
        {
          id: "cils-u10-s7-b-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the path taken by an oxygen molecule from the air to a muscle cell.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oxygen transport",
                statement:
                  "Air → lungs → blood → heart → arteries → capillaries → cells.",
              },
            ],
            steps: [
              {
                reasoning: "Inhaled into the lungs and diffuses into blood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Blood carries oxygen to the heart, which pumps it out in arteries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Oxygen diffuses from capillaries into muscle cells.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Muscle cells use oxygen in respiration to release energy.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Lungs → blood → heart → arteries → capillaries → muscle cells for respiration",
          },
        },
        {
          id: "cils-u10-s7-b-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A plant absorbs 24 cm³ of carbon dioxide in 6 hours. What is the rate of absorption per hour? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Rate", answer: 4, unit: "cm³/h" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Rate",
                statement: "Rate = amount ÷ time.",
              },
            ],
            steps: [
              {
                reasoning: "Rate = $\\frac{24}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rate = $4\\ cm^3\\,h^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4\\ cm^3\\,h^{-1}$",
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
              { id: "a", text: "Lung" },
              { id: "b", text: "Kidney" },
              { id: "c", text: "Liver" },
              { id: "d", text: "Heart" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cils-u10-s7-h-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ filters the blood and produces urine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spleen" },
              { id: "b", text: "Liver" },
              { id: "c", text: "Kidney" },
              { id: "d", text: "Stomach" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kidneys",
                statement: "Filter blood and produce urine.",
              },
            ],
            steps: [
              {
                reasoning: "The kidneys filter blood to form urine.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Kidney",
          },
        },
        {
          id: "cils-u10-s7-h-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two functions of the brain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brain",
                statement: "Controls body processes and processes information.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two: controls body functions, processes senses/thoughts, coordinates movement.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Two correct functions named.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Controls body functions + processes information/thought",
          },
        },
        {
          id: "cils-u10-s7-h-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "At which level of organisation is the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "System" },
              { id: "b", text: "Cell" },
              { id: "c", text: "Tissue" },
              { id: "d", text: "Organ" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Levels of organisation",
                statement: "Cell → tissue → organ → system → organism.",
              },
            ],
            steps: [
              {
                reasoning: "The heart is made of tissues working together = organ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Organ",
          },
        },
        {
          id: "cils-u10-s7-h-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Put these in order of increasing complexity: system, cell, organ, tissue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Levels of organisation",
                statement: "Cell → tissue → organ → system → organism.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cell first, then tissue, organ and finally system.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cell → tissue → organ → system.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cell → tissue → organ → system",
          },
        },
        {
          id: "cils-u10-s7-h-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how the heart pumps blood around the body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heart",
                statement: "Chambers contract; valves prevent backflow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Atria receive blood and contract to fill the ventricles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ventricles contract to push blood out to the body and lungs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Valves open and close to keep blood flowing in one direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Atria fill ventricles → ventricles contract → valves keep blood flowing one way",
          },
        },
        {
          id: "cils-u10-s7-h-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's heart beats 72 times per minute. How many beats does the heart make in one hour? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Beats per hour", answer: 4320, unit: "beats" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Rate",
                statement: "Total = rate × time.",
              },
            ],
            steps: [
              {
                reasoning: "One hour = 60 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$72 \\times 60 = 4320$ beats.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4320 beats",
          },
        },
        {
          id: "cils-u10-s7-h-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which gas do the lungs remove from the blood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Carbon dioxide" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gas exchange",
                statement: "O₂ diffuses in; CO₂ diffuses out.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon dioxide is removed from blood in the lungs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Carbon dioxide",
          },
        },
        {
          id: "cils-u10-s7-h-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three organs of the human respiratory system and state the main function of one of them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Respiratory system",
                statement:
                  "Nose, trachea, bronchi, lungs — gas exchange.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Three organs named: nose/trachea/bronchi/lungs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Trachea/bronchi carry air to the lungs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lungs: oxygen enters blood and carbon dioxide leaves.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Nose, trachea, lungs (etc.); lungs exchange gases between air and blood",
          },
        },
        {
          id: "cils-u10-s7-h-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood cells mainly carry oxygen around the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "White blood cells" },
              { id: "b", text: "Platelets" },
              { id: "c", text: "Plasma cells" },
              { id: "d", text: "Red blood cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Red blood cells",
                statement: "Contain haemoglobin to carry oxygen.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Red blood cells contain haemoglobin and carry oxygen.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Red blood cells",
          },
        },
        {
          id: "cils-u10-s7-h-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the wall of the left ventricle is much thicker than the wall of the right ventricle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heart",
                statement:
                  "Thicker wall = stronger pump for greater distance/pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Left ventricle pumps blood to the whole body.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Right ventricle pumps blood only to the nearby lungs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Whole-body pumping needs higher pressure → thicker muscle wall.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Thicker wall generates the force needed for long-distance circulation.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Left ventricle pumps to whole body at high pressure, so its wall is thicker; right only pumps to lungs.",
          },
        },
        {
          id: "cils-u10-s7-h-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens in the body when you cut your finger, to prevent serious blood loss.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Blood clotting",
                statement: "Clotting seals wounds and stops bleeding.",
              },
            ],
            steps: [
              {
                reasoning: "Blood vessels constrict to reduce blood flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Platelets gather at the wound and form a plug.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A clot of fibrin seals the cut and stops bleeding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vessels narrow → platelets plug wound → fibrin clot seals it",
          },
        },
        {
          id: "cils-u10-s7-h-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Normal human body temperature is 37 °C. A patient has a temperature of 38.5 °C. How much higher is the patient's temperature? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 1.5, unit: "°C" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Subtraction",
                statement: "Difference = larger value − smaller value.",
              },
            ],
            steps: [
              {
                reasoning: "$38.5 - 37 = 1.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Difference is $1.5\\ °C$ higher.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1.5\\ °C$",
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
              { id: "a", text: "Chloroplast" },
              { id: "b", text: "Nucleus" },
              { id: "c", text: "Mitochondrion" },
              { id: "d", text: "Ribosome" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cils-u10-s7-mx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell structure contains the genetic material and controls the cell's activities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vacuole" },
              { id: "b", text: "Cell membrane" },
              { id: "c", text: "Cytoplasm" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleus",
                statement:
                  "Contains DNA and controls cell activities.",
              },
            ],
            steps: [
              {
                reasoning: "The nucleus contains genetic material.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Nucleus",
          },
        },
        {
          id: "cils-u10-s7-mx-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the food chain 'grass → grasshopper → bird', what type of consumer is the grasshopper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carnivore" },
              { id: "b", text: "Herbivore" },
              { id: "c", text: "Decomposer" },
              { id: "d", text: "Omnivore" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consumer types",
                statement:
                  "Herbivores eat plants; carnivores eat animals; omnivores eat both.",
              },
            ],
            steps: [
              {
                reasoning: "The grasshopper eats grass, so it is a herbivore.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Herbivore",
          },
        },
        {
          id: "cils-u10-s7-mx-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what diffusion is and why it happens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Diffusion",
                statement:
                  "Particles move from high to low concentration until evenly spread.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diffusion = net movement of particles down a concentration gradient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It happens because particles move randomly and spread out evenly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Particles move from high to low concentration due to random movement",
          },
        },
        {
          id: "cils-u10-s7-mx-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A food chain contains grass, rabbit and fox. 1000 kJ of energy is stored in the grass and 100 kJ reaches the fox. What percentage of the grass's energy reaches the fox? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Energy transfer",
                statement:
                  "Percentage = energy at level ÷ energy at base × 100.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{100}{1000} = 0.1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$0.1 \\times 100 = 10\\%$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10\\%$",
          },
        },
        {
          id: "cils-u10-s7-mx-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the route a red blood cell takes as it carries oxygen from the lungs to a muscle in the leg.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circulation",
                statement:
                  "Lungs → heart → arteries → capillaries at tissues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Picks up oxygen in the lungs and returns to the heart.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Heart pumps oxygenated blood out through arteries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Oxygen diffuses into muscle cells through capillaries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lungs → heart → arteries → capillaries → muscle cells",
          },
        },
        {
          id: "cils-u10-s7-mx-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process do all living cells use to release energy from food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Digestion" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Respiration" },
              { id: "d", text: "Diffusion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Respiration",
                statement: "Releases energy from food in all living cells.",
              },
            ],
            steps: [
              {
                reasoning: "Respiration releases energy in all cells.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Respiration",
          },
        },
        {
          id: "cils-u10-s7-mx-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a person's breathing rate and heart rate both increase during exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exercise response",
                statement:
                  "Muscles need more oxygen and energy → faster breathing and circulation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Muscles respire faster during exercise, needing more oxygen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lungs take in more air per breath → breathing rate rises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Heart beats faster to deliver oxygen-rich blood to muscles quickly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "More oxygen needed → faster breathing; heart pumps blood faster to muscles",
          },
        },
        {
          id: "cils-u10-s7-mx-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how photosynthesis in plants supports life throughout an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Producers",
                statement:
                  "Plants capture energy and produce food and oxygen for other organisms.",
              },
            ],
            steps: [
              {
                reasoning: "Plants convert sunlight into chemical energy (glucose).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Herbivores eat plants, passing energy up the food chain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Photosynthesis releases the oxygen animals need to respire.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without producers, no food or oxygen → ecosystem collapses.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Plants capture energy, provide food for consumers and release oxygen for respiration.",
          },
        },
        {
          id: "cils-u10-s7-mx-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many chambers does the human heart have? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Chambers", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heart",
                statement: "Four chambers: two atria and two ventricles.",
              },
            ],
            steps: [
              {
                reasoning: "Two atria + two ventricles = 4 chambers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u10-s7-mx-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which gas diffuses from the blood into the alveoli during gas exchange?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Water vapour" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Diffusion",
                statement: "Gases diffuse down their concentration gradient.",
              },
            ],
            steps: [
              {
                reasoning: "CO₂ concentration is higher in blood than alveoli.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Carbon dioxide",
          },
        },
        {
          id: "cils-u10-s7-mx-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A marathon runner collapses near the finish line. Explain, using ideas about gas exchange and energy release, what may have gone wrong in their body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exercise limits",
                statement:
                  "Oxygen supply can fail to meet muscle demand during hard exercise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Muscles demand more oxygen than breathing and circulation can supply.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cells switch to anaerobic respiration, releasing less energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lactic acid builds up, causing muscle fatigue and pain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Exhaustion and reduced oxygen delivery can cause collapse.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Oxygen demand exceeded supply → anaerobic respiration → less energy + lactic acid → fatigue and collapse",
          },
        },
        {
          id: "cils-u10-s7-mx-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ways the human body gets rid of waste products.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Excretion",
                statement:
                  "CO₂ via lungs, urea via kidneys, sweat via skin.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two: carbon dioxide exhaled by lungs; urine from kidneys; sweat from skin.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Two correct excretory routes named.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "CO₂ via lungs + urea via kidneys (or sweat via skin)",
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
