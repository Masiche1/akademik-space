import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "esc11-u1-lesson-1-3",
  code: "1-3",
  title: "Microorganisms, Disease and Biotechnology",
  goal: "I CAN describe pathogens, immune responses and uses of microorganisms.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Biology (Y11)"],
  vocabulary: [
    {
      term: "Pathogen",
      definition:
        "Disease-causing microorganism — bacteria, virus, fungus, protozoa.",
    },
    {
      term: "Antibody",
      definition:
        "Protein produced by white blood cells that binds specific antigens.",
    },
    {
      term: "Antibiotic",
      definition:
        "Chemical that kills or stops bacteria — useless against viruses.",
    },
    {
      term: "Vaccination",
      definition: "Introducing weakened antigen to stimulate immune memory.",
    },
  ],
  concepts: [
    {
      id: "esc11-u1-disease",
      title: "Pathogens and the Immune System",
      skill: "Describe infection, immune responses and disease prevention.",
      lesson: {
        sections: [
          {
            heading: "Pathogens and transmission",
            body: "**Pathogens**: bacteria (TB, cholera — treatable with antibiotics), viruses (flu, HIV, COVID — NOT treatable with antibiotics), fungi (athlete's foot), protozoa (malaria).\n\n**Transmission**: droplet (sneeze/cough), faecal-oral (contaminated water/food), vector (mosquito→malaria), direct contact, airborne. **Prevent**: vaccination, hygiene, clean water, vector control.\n\n**Antibiotic resistance**: overuse → resistant strains evolve → MRSA etc. Finish prescriptions, don't self-medicate.",
          },
          {
            heading: "Immune response",
            body: "**White blood cells**: phagocytes engulf pathogens (phagocytosis); lymphocytes produce antibodies specific to antigens.\n\n**Antibody structure**: Y-shaped — variable ends bind antigen like lock-and-key; constant region signals destruction. **Memory cells**: survive infection → faster stronger response next time = immunity. **Vaccines**: weakened/dead pathogen or antigen fragments → stimulates antibodies + memory cells without disease.\n\n**HIV**: attacks helper T-lymphocytes → immune system collapses → AIDS. No cure/vaccine yet — antiretrovirals manage it.",
          },
        ],
        keyFormulas: [
          {
            name: "Antibody",
            statement:
              "Y-shaped protein — variable ends bind specific antigen.",
          },
          {
            name: "Vaccine",
            statement:
              "Stimulates antibodies + memory cells without causing disease.",
          },
        ],
        workedExample: {
          problem: "Why does a vaccine protect against future infection?",
          solution:
            "Vaccine antigen → antibodies + memory cells formed → on real exposure, faster stronger response destroys pathogen before symptoms.",
        },
      },
      questions: [
        {
          id: "esc11-u1-disease-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which pathogen type is NOT killed by antibiotics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bacteria" },
              { id: "b", text: "Virus" },
              { id: "c", text: "Protozoa" },
              { id: "d", text: "Fungus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antibiotics",
                statement: "Work on bacteria only — viruses unaffected.",
              },
            ],
            steps: [
              {
                reasoning: "Viruses not affected by antibiotics.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Virus",
            commonErrors: ["All microbes assumed affected."],
          },
        },
        {
          id: "esc11-u1-disease-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how antibodies provide immunity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antibodies",
                statement:
                  "Bind specific antigens → mark pathogens for destruction; memory cells persist.",
              },
            ],
            steps: [
              {
                reasoning: "Antibodies bind specific antigen.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Marks pathogen for phagocytes/complement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Memory cells → faster response next time.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Antibodies bind antigens, flag pathogens for destruction; memory cells give faster future response.",
            commonErrors: ["Antibodies kill directly view.", "No memory link."],
          },
        },
        {
          id: "esc11-u1-disease-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why antibiotic resistance is a growing problem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resistance",
                statement:
                  "Natural selection — resistant bacteria survive and multiply.",
              },
            ],
            steps: [
              {
                reasoning: "Random mutations create resistance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Antibiotic kills susceptible, resistant survive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Resistant population grows — harder to treat.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Overuse accelerates selection.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Selection pressure kills susceptible bacteria; resistant mutants survive, multiply — infections become untreatable.",
            commonErrors: ["Bacteria 'learn' view.", "No selection mechanism."],
          },
        },
        {
          id: "esc11-u1-disease-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Malaria is transmitted by mosquitoes.",
          parts: [
            {
              label: "a",
              prompt: "Name the pathogen and describe how it causes disease.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two control methods and evaluate one.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Malaria",
                statement:
                  "Plasmodium protozoa via mosquito — destroys red blood cells.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Plasmodium (protozoan parasite).",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Invades red blood cells → bursts them.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Causes fever, anaemia, organ damage.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Mosquito vector transmits between humans.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Two methods: bed nets, insecticide, drainage, drugs.",
                marks: 2,
                markCode: "AO4",
                part: "b",
              },
              {
                reasoning:
                  "(b) Evaluation: effective but resistance/cost issues.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) Plasmodium via mosquito, destroys RBCs (b) nets/insecticide/drainage — effective but resistance/cost limits",
            commonErrors: ["Virus assumed.", "No evaluation."],
          },
        },
      ],
    },
    {
      id: "esc11-u1-biotech",
      title: "Biotechnology",
      skill:
        "Describe fermentation, monoclonal antibodies and genetic engineering.",
      lesson: {
        sections: [
          {
            heading: "Fermentation and enzymes",
            body: "**Fermentation**: microorganisms (yeast/bacteria) produce useful products in fermenters — controlled temp, pH, oxygen, nutrients.\n\n**Uses**: yeast → ethanol + CO₂ (bread rises, brewing); bacteria → insulin, enzymes (pectinase, biological washing powders), antibiotics (penicillin from Penicillium), mycoprotein (Quorn), biofuels.\n\n**Enzymes in industry**: pectinase clarifies fruit juice; protease/lipase in biological detergents (work at low temps — energy saving); lactase produces lactose-free milk.",
          },
          {
            heading: "Monoclonal antibodies and genetic engineering",
            body: "**Monoclonal antibodies (mAbs)**: identical antibodies from one B-cell clone — produced by fusing B-cell with tumour cell (hybridoma) → unlimited identical antibodies. Uses: pregnancy tests, cancer targeting (drug delivery), diagnosing disease, COVID tests.\n\n**Genetic engineering**: isolate gene → insert into vector (plasmid) → host cell (bacteria) → produces protein. Uses: human insulin in bacteria (cheaper than animal), GMO crops (pest-resistant, herbicide-tolerant), gene therapy research.\n\n**Cloning**: nuclear transfer — adult cell nucleus into enucleated egg → embryo → surrogate (Dolly the sheep). Therapeutic cloning for stem cells.",
          },
        ],
        keyFormulas: [
          {
            name: "Fermentation",
            statement:
              "Microorganisms + controlled conditions → useful products (ethanol, insulin, enzymes).",
          },
          {
            name: "Genetic engineering",
            statement: "Gene → plasmid vector → host → protein product.",
          },
        ],
        workedExample: {
          problem: "How is human insulin made using biotechnology?",
          solution:
            "Human insulin gene inserted into bacterial plasmid → bacteria multiply → produce insulin → purified for medicine.",
        },
      },
      questions: [
        {
          id: "esc11-u1-biotech-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does fermentation produce with yeast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol and CO₂" },
              { id: "b", text: "Lactic acid only" },
              { id: "c", text: "Insulin" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Yeast fermentation",
                statement: "Glucose → ethanol + CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "Ethanol + CO₂ produced.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Ethanol and CO₂",
            commonErrors: ["Lactic acid = bacteria not yeast."],
          },
        },
        {
          id: "esc11-u1-biotech-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two conditions needed in an industrial fermenter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fermenter conditions",
                statement: "Optimal temp, pH, oxygen, nutrient supply.",
              },
            ],
            steps: [
              {
                reasoning: "Controlled temperature.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Controlled pH.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Nutrients/aeration supplied.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Optimal temperature, pH, oxygen supply, nutrients — controlled environment.",
            commonErrors: ["Room temp assumed.", "No pH/oxygen."],
          },
        },
        {
          id: "esc11-u1-biotech-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why monoclonal antibodies are useful in medicine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "mAbs",
                statement:
                  "Identical antibodies bind one antigen — target diseases specifically.",
              },
            ],
            steps: [
              {
                reasoning: "Identical = bind same antigen only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Targeted drug delivery to cancer cells.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Diagnostic tests (pregnancy, infections).",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Identical antibodies target specific antigens — drug delivery to cancer, diagnostics, immune therapy.",
            commonErrors: ["Random antibodies view.", "No targeting link."],
          },
        },
        {
          id: "esc11-u1-biotech-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Insulin was historically extracted from pigs; now made by bacteria.",
          parts: [
            {
              label: "a",
              prompt: "Describe the genetic engineering process.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Give two advantages of bacterial insulin.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GE insulin",
                statement:
                  "Human gene → bacteria → human insulin — identical product, cheaper.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Isolate human insulin gene.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Insert into bacterial plasmid vector.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Bacteria reproduce → produce insulin.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Purify insulin for use.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Cheaper to produce at scale.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(b) No animal-derived contamination risk; unlimited supply.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) gene→plasmid→bacteria→insulin→purify (b) cheaper, unlimited, pure human insulin",
            commonErrors: [
              "Animal insulin still used.",
              "Process steps missing.",
            ],
          },
        },
      ],
    },
  ],
};
