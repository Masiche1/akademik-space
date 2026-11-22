import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "esc7-u1-lesson-1-3",
  code: "1-3",
  title: "Human Body Systems",
  goal: "I CAN describe how the body's organ systems work together to maintain life.",
  standards: ["Edexcel KS3 Science — Biology"],
  vocabulary: [
    {
      term: "Organ system",
      definition: "A group of organs working together to perform a function.",
    },
    {
      term: "Circulatory system",
      definition:
        "Heart, blood vessels and blood — transports substances around the body.",
    },
    {
      term: "Respiratory system",
      definition: "Lungs and airways — exchanges oxygen and carbon dioxide.",
    },
    {
      term: "Homeostasis",
      definition:
        "Maintaining stable internal conditions despite external changes.",
    },
  ],
  concepts: [
    {
      id: "esc7-u1-systems",
      title: "Major Body Systems",
      skill:
        "Describe the functions of the circulatory, respiratory, digestive and nervous systems.",
      lesson: {
        sections: [
          {
            heading: "Body systems overview",
            body: "**Circulatory**: heart pumps blood through vessels — delivers oxygen/nutrients, removes waste. **Respiratory**: lungs exchange gases — oxygen in, carbon dioxide out. **Digestive**: mouth→stomach→intestines break down food, absorb nutrients. **Nervous**: brain, spinal cord, nerves — detects stimuli and coordinates responses.\n\n**Systems work together**: digestion releases glucose → blood transports it → respiration releases energy → nervous system controls it all. Remove one system and others fail.",
          },
          {
            heading: "Homeostasis",
            body: "The body maintains stable conditions: **temperature** (sweating/cooling, shivering/warming), **blood glucose** (insulin/glucagon), **water balance** (kidneys/thirst). Homeostasis uses **negative feedback** — when levels deviate, mechanisms restore them.\n\n**Disease** occurs when systems fail: infection, genetic disorders, lifestyle diseases (heart disease, diabetes). Healthy systems = healthy body.",
          },
        ],
        keyFormulas: [
          {
            name: "System functions",
            statement:
              "Circulatory=transport, respiratory=gases, digestive=nutrition, nervous=control.",
          },
          {
            name: "Homeostasis",
            statement:
              "Maintaining stable internal conditions via negative feedback.",
          },
        ],
        workedExample: {
          problem: "What happens to breathing rate during exercise and why?",
          solution:
            "Rate increases — muscles need more oxygen; respiratory system works faster to supply it and remove CO₂.",
        },
      },
      questions: [
        {
          id: "esc7-u1-systems-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the function of the circulatory system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exchanges gases" },
              { id: "b", text: "Transports substances around the body" },
              { id: "c", text: "Digests food" },
              { id: "d", text: "Controls movement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circulatory system",
                statement: "Heart+blood vessels transport substances.",
              },
            ],
            steps: [
              {
                reasoning: "Circulatory = transport system.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Transports substances",
            commonErrors: ["Confusing with digestive."],
          },
        },
        {
          id: "esc7-u1-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the digestive and circulatory systems work together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System interdependence",
                statement:
                  "Digestion releases nutrients; circulation transports them.",
              },
            ],
            steps: [
              {
                reasoning: "Digestion breaks food into absorbable nutrients.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Nutrients enter blood via circulatory system.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Blood delivers to body cells.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Digestion releases nutrients → blood absorbs and transports them to cells.",
            commonErrors: ["Systems independent view.", "No transport link."],
          },
        },
        {
          id: "esc7-u1-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is homeostasis and give one example?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homeostasis",
                statement:
                  "Maintaining stable internal conditions via negative feedback.",
              },
            ],
            steps: [
              {
                reasoning: "Defined: stable internal conditions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example given (temperature/glucose/water).",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "AO2" },
              { reasoning: "Coherent answer.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Homeostasis = maintaining stable internal conditions; e.g. sweating cools body when too hot.",
            commonErrors: ["Vague definition.", "No example."],
          },
        },
        {
          id: "esc7-u1-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "During intense exercise, multiple body systems respond.",
          parts: [
            {
              label: "a",
              prompt: "Explain the respiratory system's response.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the circulatory system's response.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why these systems must work together.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exercise response",
                statement:
                  "Respiratory supplies O₂; circulatory delivers it to muscles.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Breathing rate increases.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) More O₂ in, more CO₂ out.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Reason: muscles need more energy.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Heart rate increases.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) Faster delivery of O₂/glucose to muscles.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) Removes CO₂/waste faster.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Systems interdependent — need coordination.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) faster breathing for O₂ (b) faster heart rate for delivery (c) coordinated response needed",
            commonErrors: ["Single system focus.", "No coordination link."],
          },
        },
      ],
    },
    {
      id: "esc7-u1-health",
      title: "Health and Disease",
      skill:
        "Explain how lifestyle, pathogens and the immune system affect health.",
      lesson: {
        sections: [
          {
            heading: "Health and lifestyle",
            body: "**Health** = physical, mental and social wellbeing — not just absence of disease. **Lifestyle factors**: balanced diet (nutrients for growth/repair), exercise (cardiovascular health, mood), sleep (restoration), avoiding smoking/alcohol/drugs.\n\n**Nutrition**: carbohydrates (energy), proteins (growth/repair), fats (insulation/energy store), vitamins/minerals (various functions), fibre (digestion), water (all processes). Deficiencies cause specific diseases — scurvy (vit C), rickets (vit D), anaemia (iron).",
          },
          {
            heading: "Pathogens and immunity",
            body: "**Pathogens** (bacteria, viruses, fungi, protozoa) cause infectious disease. **Transmission**: direct contact, droplets, contaminated food/water, vectors (mosquitoes). **Body defences**: skin/mucus (barriers), white blood cells (phagocytosis — engulf pathogens; antibody production), stomach acid.\n\n**Vaccination** introduces weakened/disabled pathogens → immune system produces antibodies → memory cells → faster future response. **Antibiotics** kill bacteria (not viruses). Antibiotic resistance arises from overuse — a growing global threat.",
          },
        ],
        keyFormulas: [
          {
            name: "Health definition",
            statement: "Physical + mental + social wellbeing.",
          },
          {
            name: "Immune defences",
            statement:
              "Barriers + white blood cells + antibodies + vaccination.",
          },
        ],
        workedExample: {
          problem: "Why can't antibiotics treat viral infections like flu?",
          solution:
            "Antibiotics target bacterial structures/processes; viruses lack these and replicate inside cells — different biology requires different treatment.",
        },
      },
      questions: [
        {
          id: "esc7-u1-health-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are pathogens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disease-causing microorganisms" },
              { id: "b", text: "White blood cells" },
              { id: "c", text: "Antibiotics" },
              { id: "d", text: "Vaccines" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pathogens",
                statement: "Microorganisms causing disease.",
              },
            ],
            steps: [
              {
                reasoning: "Pathogens = disease-causing microbes.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Disease-causing microorganisms",
            commonErrors: ["Confusing with immune cells."],
          },
        },
        {
          id: "esc7-u1-health-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does vaccination protect against disease?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vaccination",
                statement:
                  "Weakened pathogens trigger antibody production + memory cells for faster future response.",
              },
            ],
            steps: [
              {
                reasoning: "Vaccine introduces weakened/disabled pathogen.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Immune system produces antibodies/memory cells.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Faster response on real infection.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Vaccine stimulates antibody production + memory cells → faster immune response to real pathogen.",
            commonErrors: ["Vaccine = medicine view.", "No memory mechanism."],
          },
        },
        {
          id: "esc7-u1-health-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is antibiotic resistance a serious global health threat?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antibiotic resistance",
                statement:
                  "Overuse selects resistant bacteria → infections become untreatable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Overuse kills susceptible bacteria, resistant survive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Resistant strains multiply/spread.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Infections become untreatable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Threat to modern medicine.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Resistance renders antibiotics useless → previously treatable infections become deadly; requires new drug development.",
            commonErrors: [
              "Resistance is individual view.",
              "No selection mechanism.",
            ],
          },
        },
        {
          id: "esc7-u1-health-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A person eats a balanced diet, exercises regularly but still gets frequent colds.",
          parts: [
            {
              label: "a",
              prompt: "Explain two ways lifestyle supports immunity.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two other factors affecting illness.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why 'health' isn't just absence of disease.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health factors",
                statement:
                  "Lifestyle, genetics, environment, pathogens all affect health.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Nutrition supports immune function.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Exercise improves circulation/immune cells.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Sleep allows immune repair.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Genetics, stress, environment, pathogen exposure.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Two valid factors.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(c) Health includes mental/social wellbeing.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) nutrition/exercise/sleep support immunity (b) genetics/stress/environment (c) health = physical+mental+social",
            commonErrors: [
              "Lifestyle = guaranteed health view.",
              "Only physical health.",
            ],
          },
        },
      ],
    },
  ],
};
