import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "s7-u5-lesson-5-3",
  code: "5-3",
  title: "Digestive and Immune Systems",
  goal: "I CAN trace the path of food through digestion, explain how nutrients are absorbed, and describe how the immune system defends the body.",
  standards: [
    "MS-LS1-3",
    "MS-LS1-5",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Digestive system",
      definition: "The organs that break down food and absorb nutrients.",
    },
    {
      term: "Enzyme",
      definition:
        "A protein that speeds up chemical reactions, such as breaking down food.",
    },
    {
      term: "Small intestine",
      definition:
        "The organ where most digestion and nutrient absorption occurs.",
    },
    {
      term: "Villi",
      definition:
        "Finger-like projections in the small intestine that increase surface area for absorption.",
    },
    {
      term: "Immune system",
      definition:
        "The body's defense system against pathogens and foreign substances.",
    },
    {
      term: "Antibody",
      definition:
        "A protein produced by white blood cells that binds to specific pathogens.",
    },
    {
      term: "Pathogen",
      definition: "A disease-causing organism such as a bacterium or virus.",
    },
  ],
  concepts: [
    {
      id: "s7-u5-digestion",
      title: "Digestion and nutrient absorption",
      skill:
        "Trace food through the digestive system and explain mechanical and chemical digestion.",
      lesson: {
        sections: [
          {
            heading: "The digestive tract",
            body: "Food travels through a long tube called the **alimentary canal**:\n\n- **Mouth**: teeth grind food (mechanical); saliva contains amylase enzyme that begins starch digestion (chemical).\n- **Esophagus**: muscular tube that pushes food to the stomach by peristalsis.\n- **Stomach**: churning mixes food with gastric juice (HCl and pepsin) to form chyme.\n- **Small intestine**: most digestion and absorption occurs here; bile and pancreatic enzymes break down fats, proteins and carbohydrates.\n- **Large intestine**: absorbs water; forms feces.\n- **Rectum/anus**: waste exits.",
          },
          {
            heading: "Absorption in the small intestine",
            body: "The small intestine has **villi** and microvilli that increase surface area enormously. Nutrients pass through villi into capillaries and lymph vessels.\n\n- Simple sugars and amino acids → absorbed into blood.\n- Fatty acids and glycerol → absorbed into lymph, then blood.\n\nThe liver processes absorbed nutrients, storing glucose as glycogen and detoxifying harmful substances.",
          },
        ],
        keyFormulas: [
          {
            name: "Digestive organs",
            statement:
              "Mouth → esophagus → stomach → small intestine → large intestine → rectum.",
          },
          {
            name: "Mechanical vs chemical digestion",
            statement:
              "Mechanical: physical breakdown. Chemical: enzymes break molecules.",
          },
          {
            name: "Villi",
            statement:
              "Increase surface area for nutrient absorption in small intestine.",
          },
        ],
        workedExample: {
          problem: "Why does the small intestine have villi?",
          solution:
            "Villi increase surface area, allowing more nutrients to be absorbed into the blood and lymph.",
        },
      },
      questions: [
        {
          id: "s7-u5-digestion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does most nutrient absorption occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mouth" },
              { id: "b", text: "Stomach" },
              { id: "c", text: "Small intestine" },
              { id: "d", text: "Large intestine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Small intestine",
                statement: "Site of most digestion and absorption.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The small intestine has villi and receives bile/pancreatic enzymes for complete digestion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Small intestine.",
            commonErrors: [
              "Choosing (d): the large intestine absorbs water, not nutrients.",
            ],
          },
        },
        {
          id: "s7-u5-digestion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between mechanical and chemical digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mechanical digestion",
                statement: "Physical breakdown of food into smaller pieces.",
              },
              {
                kind: "definition",
                name: "Chemical digestion",
                statement:
                  "Enzymes break food molecules into smaller chemical units.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mechanical digestion: chewing, churning, peristalsis — physical only.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Chemical digestion: enzymes (amylase, pepsin, lipase) break molecules chemically.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Both work together to prepare food for absorption.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Mechanical: physical breakdown. Chemical: enzymatic breakdown of molecules.",
            commonErrors: [
              "Saying mechanical digestion changes chemical composition.",
            ],
          },
        },
        {
          id: "s7-u5-digestion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of bile and pancreatic enzymes in digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bile",
                statement:
                  "Made in liver, stored in gallbladder; emulsifies fats.",
              },
              {
                kind: "definition",
                name: "Pancreatic enzymes",
                statement:
                  "Break down carbohydrates, proteins and fats in small intestine.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bile emulsifies fats, breaking large fat droplets into smaller droplets.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Smaller droplets give lipase more surface area to digest fats.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Pancreatic enzymes (amylase, trypsin, lipase) complete chemical digestion.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Together they ensure fats, proteins and carbohydrates are fully broken down for absorption.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Bile emulsifies fats; pancreatic enzymes complete chemical digestion of all macronutrients.",
            commonErrors: ["Saying bile contains enzymes; it only emulsifies."],
          },
        },
        {
          id: "s7-u5-digestion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A person eats a meal and nutrients enter the bloodstream.",
          parts: [
            {
              label: "a",
              prompt:
                "Trace the path of a glucose molecule from mouth to blood.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain where and how glucose is absorbed.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What does the liver do with absorbed glucose?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why is the small intestine so long and folded?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Digestive tract",
                statement:
                  "Food passes through mouth → stomach → small intestine → large intestine.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Mouth → esophagus → stomach → small intestine → villi → capillaries → blood.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Glucose is absorbed through villi in the small intestine into blood capillaries.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Liver stores glucose as glycogen or releases it as needed; also processes toxins.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Length and folds (villi) increase surface area for absorption.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Mouth→esophagus→stomach→small intestine→villi→blood (b) Absorbed via villi (c) Stores as glycogen (d) More surface area.",
            commonErrors: [
              "Skipping the small intestine; saying absorption happens in stomach.",
            ],
          },
        },
      ],
    },
    {
      id: "s7-u5-immune",
      title: "The immune system",
      skill:
        "Describe how the immune system identifies and destroys pathogens using physical barriers, white blood cells and antibodies.",
      lesson: {
        sections: [
          {
            heading: "First line of defense: barriers",
            body: "The body prevents infection through physical and chemical barriers:\n\n- **Skin**: waterproof barrier that blocks most pathogens.\n- **Mucus**: traps pathogens in airways and digestive tract.\n- **Stomach acid**: kills many swallowed bacteria.\n- **Cilia**: hair-like cells that sweep mucus and trapped particles out of airways.",
          },
          {
            heading: "Second line: white blood cells",
            body: "If pathogens break through barriers, **white blood cells** respond:\n\n- **Phagocytes** engulf and digest pathogens.\n- **Lymphocytes** (B cells and T cells) produce **antibodies** that bind to specific pathogens, marking them for destruction.\n- **Memory cells** remember previous infections, enabling faster response on re-exposure (the basis of vaccination).",
          },
          {
            heading: "Active vs passive immunity",
            body: "- **Active immunity**: the body produces its own antibodies after infection or vaccination; lasts long.\n- **Passive immunity**: antibodies are transferred from another source (e.g., mother's milk or antivenom); short-lived.",
          },
        ],
        keyFormulas: [
          {
            name: "First line of defense",
            statement: "Skin, mucus, stomach acid, cilia — barriers.",
          },
          {
            name: "Second line",
            statement:
              "White blood cells: phagocytes engulf; lymphocytes produce antibodies.",
          },
          {
            name: "Memory cells",
            statement: "Remember pathogens for faster future response.",
          },
        ],
        workedExample: {
          problem: "Why does a vaccine protect against disease?",
          solution:
            "The vaccine introduces weakened or dead pathogens, triggering antibody production and memory cells without causing disease.",
        },
      },
      questions: [
        {
          id: "s7-u5-immune-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the first line of defense against infection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Antibodies" },
              { id: "b", text: "White blood cells" },
              { id: "c", text: "Skin and mucus" },
              { id: "d", text: "Memory cells" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First line of defense",
                statement:
                  "Physical and chemical barriers like skin and mucus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Skin, mucus, stomach acid and cilia are barriers that prevent pathogens from entering.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Skin and mucus.",
            commonErrors: [
              "Choosing (a): antibodies are part of the adaptive response, not the first line.",
            ],
          },
        },
        {
          id: "s7-u5-immune-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how antibodies help fight infection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antibody",
                statement:
                  "Protein produced by lymphocytes that binds to specific pathogens.",
              },
            ],
            steps: [
              {
                reasoning: "Antibodies bind to specific antigens on pathogens.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This marks pathogens for destruction by phagocytes or complement proteins.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Antibodies are highly specific — each type targets one antigen.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Antibodies bind to specific pathogens, marking them for destruction by other immune cells.",
            commonErrors: [
              "Saying antibodies kill pathogens directly; they mark them for destruction.",
            ],
          },
        },
        {
          id: "s7-u5-immune-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how vaccination provides immunity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vaccination",
                statement:
                  "Introducing weakened/dead pathogens to trigger immune response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vaccine contains weakened or dead pathogens or their antigens.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The immune system responds as if infected, producing antibodies and memory cells.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Memory cells enable faster, stronger response on real exposure.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The person is protected without experiencing the disease.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Vaccine triggers antibody and memory cell production; memory cells enable rapid response to real infection.",
            commonErrors: [
              "Saying the vaccine contains live virulent pathogens.",
            ],
          },
        },
        {
          id: "s7-u5-immune-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A person is exposed to the same virus twice, a year apart.",
          parts: [
            {
              label: "a",
              prompt: "Why might the second exposure cause milder symptoms?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Name the cells responsible for this faster response.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain the role of antibodies in both exposures.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What would happen if memory cells were destroyed?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Memory cells",
                statement:
                  "Lymphocytes that remember previous infections for faster response.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Memory cells from first exposure recognize the virus immediately.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Antibody production is faster and stronger.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "The virus is destroyed before causing severe symptoms.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Memory B cells and memory T cells.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "First exposure: antibodies produced slowly; second: memory cells trigger rapid antibody production.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "The body would respond as slowly as first time; no lasting immunity.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Memory cells enable faster antibody response (b) Memory B and T cells (c) Rapid vs slow antibody production (d) Slow response, no lasting immunity.",
            commonErrors: ["Saying the virus is different the second time."],
          },
        },
      ],
    },
  ],
};
