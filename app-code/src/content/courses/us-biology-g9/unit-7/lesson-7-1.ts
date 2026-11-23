import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "bio9-u7-lesson-7-1",
  code: "7-1",
  title: "Cellular Respiration",
  goal: "I CAN describe the stages of cellular respiration, compare aerobic and anaerobic respiration, and calculate ATP yield.",
  standards: [
    "HS-LS1-6",
    "HS-LS1-7",
    "HS-LS2-4",
    "CCC: Energy and Matter",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Cellular respiration",
      definition: "Process of breaking down glucose to release energy as ATP.",
    },
    {
      term: "Glycolysis",
      definition:
        "First stage of respiration; glucose split into pyruvate in cytoplasm.",
    },
    {
      term: "Krebs cycle",
      definition:
        "Second stage; pyruvate oxidized producing NADH, FADH₂ and CO₂.",
    },
    {
      term: "Electron transport chain",
      definition:
        "Final stage; electrons flow through complexes producing most ATP.",
    },
    {
      term: "ATP",
      definition: "Adenosine triphosphate — cell's energy currency.",
    },
    {
      term: "NADH/FADH₂",
      definition: "Electron carriers that deliver electrons to the ETC.",
    },
    {
      term: "Anaerobic respiration",
      definition:
        "Respiration without oxygen — fermentation (lactic acid or alcoholic).",
    },
  ],
  concepts: [
    {
      id: "bio9-u7-respiration-stages",
      title: "Stages of aerobic respiration",
      skill:
        "Describe glycolysis, the Krebs cycle and the electron transport chain.",
      lesson: {
        sections: [
          {
            heading: "Glycolysis",
            body: "**Glycolysis** occurs in the cytoplasm, no oxygen required:\n\n- Glucose (6C) → 2 pyruvate (3C each).\n- Net yield: 2 ATP + 2 NADH.\n- Investment phase uses 2 ATP; payoff phase produces 4 ATP → net 2.\n- Also produces 2 NADH.",
          },
          {
            heading: "Krebs cycle and ETC",
            body: "**Krebs cycle** (mitochondrial matrix): pyruvate → acetyl-CoA + CO₂; produces NADH, FADH₂, ATP (or GTP).\n\n**Electron transport chain** (inner mitochondrial membrane): NADH/FADH₂ donate electrons → O₂ final acceptor → water. Energy released pumps H⁺ → ATP synthase makes ~34 ATP.",
          },
        ],
        keyFormulas: [
          {
            name: "Glycolysis",
            statement: "$C_6H_{12}O_6 → 2$ pyruvate; net 2 ATP + 2 NADH.",
          },
          {
            name: "Overall equation",
            statement: "$C_6H_{12}O_6 + 6O_2 → 6CO_2 + 6H_2O + ~36$ ATP.",
          },
          {
            name: "ETC",
            statement: "NADH/FADH₂ → O₂ → H₂O; ~34 ATP via chemiosmosis.",
          },
        ],
        workedExample: {
          problem:
            "Where do the 2 NADH from glycolysis go in aerobic respiration?",
          solution:
            "They deliver electrons to the ETC, contributing to ATP production.",
        },
      },
      questions: [
        {
          id: "bio9-u7-resp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the net ATP yield from glycolysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 ATP" },
              { id: "b", text: "4 ATP" },
              { id: "c", text: "36 ATP" },
              { id: "d", text: "0 ATP" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Glycolysis yield",
                statement:
                  "4 ATP produced − 2 ATP invested = net 2 ATP + 2 NADH.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Glycolysis produces 4 ATP but invests 2 → net 2 ATP.",
                evidence: "net 2",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 2 ATP.",
            commonErrors: ["Choosing (b): that's gross, not net."],
          },
        },
        {
          id: "bio9-u7-resp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the overall equation for aerobic cellular respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Respiration equation",
                statement: "$C_6H_{12}O_6 + 6O_2 → 6CO_2 + 6H_2O + ATP$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Glucose + oxygen → carbon dioxide + water + energy.",
                evidence: "equation",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "About 36 ATP produced per glucose.",
                evidence: "ATP",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "$C_6H_{12}O_6 + 6O_2 → 6CO_2 + 6H_2O + ~36ATP$.",
            commonErrors: ["Writing products reversed."],
          },
        },
        {
          id: "bio9-u7-resp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of the electron transport chain in ATP production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "ETC",
                statement: "Electron flow pumps protons → chemiosmosis → ATP.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NADH/FADH₂ donate electrons to complexes in inner membrane.",
                evidence: "electrons",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Energy released pumps H⁺ from matrix to intermembrane space.",
                evidence: "H⁺ gradient",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "H⁺ flows back through ATP synthase → produces ATP (chemiosmosis).",
                evidence: "synthase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Oxygen is final electron acceptor → forms water.",
                evidence: "O₂",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Electrons → proton gradient → ATP synthase → ~34 ATP.",
            commonErrors: ["Not mentioning chemiosmosis."],
          },
        },
        {
          id: "bio9-u7-resp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace one glucose molecule through aerobic respiration.",
          parts: [
            { label: "a", prompt: "Glycolysis products?", marks: 2 },
            {
              label: "b",
              prompt: "Krebs cycle location and products?",
              marks: 2,
            },
            { label: "c", prompt: "ETC location and products?", marks: 2 },
            { label: "d", prompt: "Total ATP?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Respiration stages",
                statement: "Glycolysis → Krebs → ETC.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "2 pyruvate + 2 ATP + 2 NADH (cytoplasm).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Mitochondrial matrix; NADH, FADH₂, CO₂, GTP.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Inner membrane; ~34 ATP + H₂O; O₂ final acceptor.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "~36-38 ATP total per glucose.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 2 pyruvate+2ATP+2NADH (b) Matrix: NADH/FADH₂/CO₂ (c) Membrane: ~34ATP+H₂O (d) ~36-38.",
            commonErrors: ["Wrong locations."],
          },
        },
      ],
    },
    {
      id: "bio9-u7-fermentation",
      title: "Fermentation and Anaerobic Respiration",
      skill:
        "Compare lactic acid and alcoholic fermentation and explain when they occur.",
      lesson: {
        sections: [
          {
            heading: "Fermentation",
            body: "When oxygen is absent, cells use **fermentation** — glycolysis followed by regeneration of NAD⁺ so glycolysis can continue.\n\n- **Lactic acid fermentation**: pyruvate → lactate; in muscle cells during intense exercise, some bacteria.\n- **Alcoholic fermentation**: pyruvate → ethanol + CO₂; in yeast, used in brewing/bread.",
          },
          {
            heading: "ATP yield",
            body: "Fermentation yields only **2 ATP per glucose** (from glycolysis) — far less than aerobic respiration (~36). However, it allows ATP production without oxygen.",
          },
        ],
        keyFormulas: [
          {
            name: "Fermentation",
            statement: "Glycolysis + NAD⁺ regeneration; no O₂ needed.",
          },
          {
            name: "Lactic acid",
            statement: "Pyruvate → lactate; muscle/bacteria.",
          },
          { name: "Alcoholic", statement: "Pyruvate → ethanol + CO₂; yeast." },
          { name: "Yield", statement: "2 ATP/glucose vs ~36 aerobic." },
        ],
        workedExample: {
          problem: "Why do muscles cramp during intense exercise?",
          solution:
            "Oxygen debt → lactic acid fermentation → lactate buildup → cramps/fatigue.",
        },
      },
      questions: [
        {
          id: "bio9-u7-ferm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of fermentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce more ATP" },
              { id: "b", text: "Regenerate NAD⁺ for glycolysis" },
              { id: "c", text: "Use oxygen" },
              { id: "d", text: "Make glucose" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fermentation purpose",
                statement: "Regenerates NAD⁺ so glycolysis continues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fermentation's key role is regenerating NAD⁺ from NADH, allowing glycolysis to keep producing ATP.",
                evidence: "NAD⁺",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Regenerate NAD⁺ for glycolysis.",
            commonErrors: ["Choosing (a): fermentation yields less ATP."],
          },
        },
        {
          id: "bio9-u7-ferm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between lactic acid and alcoholic fermentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fermentation types",
                statement: "Lactate vs ethanol+CO₂ products.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lactic acid: pyruvate → lactate; in muscles/bacteria.",
                evidence: "lactic",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Alcoholic: pyruvate → ethanol + CO₂; in yeast.",
                evidence: "alcoholic",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both regenerate NAD⁺ and yield 2 ATP.",
                evidence: "shared",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Lactic → lactate (muscle/bacteria); alcoholic → ethanol+CO₂ (yeast).",
            commonErrors: ["Swapping the products."],
          },
        },
        {
          id: "bio9-u7-ferm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does fermentation produce far less ATP than aerobic respiration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fermentation efficiency",
                statement: "Only glycolysis operates; no Krebs/ETC.",
              },
            ],
            steps: [
              {
                reasoning: "Only glycolysis runs — produces 2 ATP net.",
                evidence: "glycolysis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "No Krebs cycle or ETC without oxygen.",
                evidence: "no ETC",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Most energy remains in pyruvate/lactate/ethanol products.",
                evidence: "energy left",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Aerobic respiration extracts ~36 ATP via full oxidation.",
                evidence: "36",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Only glycolysis runs (2 ATP) vs full pathway (~36 ATP).",
            commonErrors: ["Saying fermentation is equally efficient."],
          },
        },
        {
          id: "bio9-u7-ferm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Yeast in bread dough produces CO₂.",
          parts: [
            { label: "a", prompt: "What process produces the CO₂?", marks: 2 },
            { label: "b", prompt: "What else is produced?", marks: 2 },
            { label: "c", prompt: "Why does dough rise?", marks: 2 },
            { label: "d", prompt: "What happens to the ethanol?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Alcoholic fermentation",
                statement: "Yeast: glucose → ethanol + CO₂ + 2 ATP.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Alcoholic fermentation by yeast.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Ethanol + CO₂ + 2 ATP per glucose.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "CO₂ gas forms bubbles → dough expands/rises.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Ethanol evaporates during baking; CO₂ escapes leaving pores.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Alcoholic fermentation (b) Ethanol+CO₂+ATP (c) CO₂ bubbles (d) Evaporates.",
            commonErrors: ["Not connecting CO₂ to rising."],
          },
        },
      ],
    },
    {
      id: "bio9-u7-photosynthesis",
      title: "Photosynthesis",
      skill:
        "Describe light-dependent and light-independent reactions and the overall equation.",
      lesson: {
        sections: [
          {
            heading: "Overall equation",
            body: "**Photosynthesis**: $6CO_2 + 6H_2O + light → C_6H_{12}O_6 + 6O_2$.\n\nOccurs in chloroplasts; two stages:\n- **Light-dependent reactions** (thylakoid membranes): capture light energy → ATP + NADPH + O₂.\n- **Calvin cycle** (stroma): uses ATP + NADPH to fix CO₂ into glucose.",
          },
          {
            heading: "Key details",
            body: "- **Photosystems I & II** absorb light; electrons flow to produce NADPH and ATP.\n- **Photolysis of water** provides electrons and releases O₂.\n- **Rubisco** enzyme fixes CO₂ in Calvin cycle.\n- **Chlorophyll** absorbs red and blue light; reflects green.",
          },
        ],
        keyFormulas: [
          {
            name: "Equation",
            statement: "$6CO_2 + 6H_2O + light → C_6H_{12}O_6 + 6O_2$",
          },
          {
            name: "Light reactions",
            statement: "Thylakoid: light → ATP + NADPH + O₂.",
          },
          {
            name: "Calvin cycle",
            statement: "Stroma: CO₂ + ATP + NADPH → glucose.",
          },
          {
            name: "Photosystems",
            statement: "PSII → PSI electron flow → NADPH + ATP.",
          },
        ],
        workedExample: {
          problem:
            "Where does the oxygen released in photosynthesis come from?",
          solution: "From photolysis of water — not from CO₂.",
        },
      },
      questions: [
        {
          id: "bio9-u7-photo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the overall equation for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C_6H_{12}O_6 + O_2 → CO_2 + H_2O$" },
              { id: "b", text: "$CO_2 + H_2O + light → C_6H_{12}O_6 + O_2$" },
              { id: "c", text: "$O_2 + glucose → CO_2 + water$" },
              { id: "d", text: "$CO_2 → O_2 + carbon$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photosynthesis",
                statement: "$6CO_2 + 6H_2O + light → C_6H_{12}O_6 + 6O_2$",
              },
            ],
            steps: [
              {
                reasoning: "CO₂ + water + light → glucose + oxygen.",
                evidence: "equation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** $CO_2 + H_2O + light → glucose + O_2$.",
            commonErrors: ["Choosing (a): that's respiration reversed."],
          },
        },
        {
          id: "bio9-u7-photo-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between light-dependent and light-independent reactions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photosynthesis stages",
                statement:
                  "Light reactions on thylakoids; Calvin cycle in stroma.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Light-dependent: on thylakoid membranes; need light; produce ATP, NADPH, O₂.",
                evidence: "light rxns",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Light-independent (Calvin): in stroma; fix CO₂ using ATP/NADPH → glucose.",
                evidence: "Calvin",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Light reactions supply energy; Calvin cycle uses it to build sugar.",
                evidence: "coupling",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Light rxns: ATP/NADPH/O₂ on thylakoids; Calvin: CO₂→glucose in stroma.",
            commonErrors: ["Saying Calvin cycle needs light directly."],
          },
        },
        {
          id: "bio9-u7-photo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why plants release oxygen but consume carbon dioxide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photosynthesis gases",
                statement: "CO₂ consumed for sugar; O₂ released from water.",
              },
            ],
            steps: [
              {
                reasoning: "CO₂ is fixed into glucose during Calvin cycle.",
                evidence: "CO₂ in",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Water is split during light reactions (photolysis).",
                evidence: "H₂O split",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Oxygen released comes from water, not CO₂.",
                evidence: "O₂ from H₂O",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Net effect: consumes CO₂, releases O₂.",
                evidence: "net",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "CO₂ → sugar; H₂O → O₂ released.",
            commonErrors: ["Saying O₂ comes from CO₂."],
          },
        },
        {
          id: "bio9-u7-photo-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare photosynthesis and cellular respiration across four features.",
          parts: [
            { label: "a", prompt: "Organism?", marks: 1 },
            { label: "b", prompt: "Reactants/products?", marks: 2 },
            { label: "c", prompt: "Energy?", marks: 2 },
            { label: "d", prompt: "Cellular location?", marks: 2 },
            { label: "e", prompt: "Relationship?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photo vs respiration",
                statement: "Opposite processes coupled through atmosphere.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Photosynthesis: plants/algae. Respiration: all organisms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Photo: CO₂+H₂O→glucose+O₂. Respiration: glucose+O₂→CO₂+H₂O.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Photo stores energy (endergonic); respiration releases it (exergonic).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Photo: chloroplasts. Respiration: cytoplasm + mitochondria.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning:
                  "They are essentially reverse processes — products of one are reactants of other.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Plants vs all (b) CO₂→sugar vs sugar→CO₂ (c) Stores vs releases (d) Chloroplasts vs mitochondria (e) Reverses.",
            commonErrors: ["Not noting they're coupled processes."],
          },
        },
      ],
    },
    {
      id: "bio9-u7-energy-coupling",
      title: "Energy Coupling and Ecosystems",
      skill:
        "Explain how photosynthesis and respiration couple energy flow through ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Energy flow",
            body: "Photosynthesis and respiration form the foundation of ecosystem energy flow:\n\n- **Producers** (plants): photosynthesize → store energy in glucose.\n- **Consumers**: eat producers/other consumers → release energy via respiration.\n- **Decomposers**: break down dead matter → return nutrients to soil.\n\nOnly ~10% of energy transfers between trophic levels (10% rule); rest lost as heat.",
          },
          {
            heading: "Global significance",
            body: "- Photosynthesis produces nearly all atmospheric O₂.\n- It fixes ~120 billion tons of carbon per year.\n- Respiration by all organisms releases CO₂ back.\n- Together they regulate atmospheric gases and climate.",
          },
        ],
        keyFormulas: [
          {
            name: "10% rule",
            statement: "Only ~10% energy transfers between trophic levels.",
          },
          {
            name: "Energy flow",
            statement: "Sun → producers → consumers → decomposers → heat.",
          },
          {
            name: "Carbon cycle",
            statement: "Photosynthesis fixes CO₂; respiration releases it.",
          },
        ],
        workedExample: {
          problem: "Why are there fewer top predators than prey?",
          solution:
            "10% energy rule — each level gets only 10% of previous level's energy.",
        },
      },
      questions: [
        {
          id: "bio9-u7-coupling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 10% rule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10% of species go extinct" },
              {
                id: "b",
                text: "Only ~10% energy transfers between trophic levels",
              },
              { id: "c", text: "Plants use 10% of sunlight" },
              { id: "d", text: "10% of carbon is fixed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "10% rule",
                statement: "~90% energy lost as heat between levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only ~10% of energy passes to next trophic level; rest lost as heat.",
                evidence: "10%",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Only ~10% energy transfers between trophic levels.",
            commonErrors: ["Misinterpreting as species extinction."],
          },
        },
        {
          id: "bio9-u7-coupling-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace energy flow through a simple food chain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy flow",
                statement:
                  "Sun → producer → primary consumer → secondary consumer → heat.",
              },
            ],
            steps: [
              {
                reasoning: "Sunlight → plant via photosynthesis.",
                evidence: "sun→plant",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Plant → herbivore → carnivore via consumption.",
                evidence: "consumption",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Each level loses ~90% as heat; decomposers return nutrients.",
                evidence: "heat",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Sun → producer → herbivore → carnivore → heat (+decomposers).",
            commonErrors: ["Not mentioning heat loss."],
          },
        },
        {
          id: "bio9-u7-coupling-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how photosynthesis and respiration regulate atmospheric gases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Gas regulation",
                statement:
                  "Photo consumes CO₂/releases O₂; respiration reverses.",
              },
            ],
            steps: [
              {
                reasoning: "Photosynthesis consumes CO₂, releases O₂.",
                evidence: "photo gases",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Respiration consumes O₂, releases CO₂.",
                evidence: "resp gases",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Together they balance atmospheric O₂ and CO₂.",
                evidence: "balance",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Disruption (e.g., fossil fuels) → greenhouse effect.",
                evidence: "disruption",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Photo and respiration balance atmospheric gases; disruption → climate change.",
            commonErrors: ["Not noting the balance."],
          },
        },
        {
          id: "bio9-u7-coupling-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A grassland ecosystem: 10,000 kcal of sunlight hits grass.",
          parts: [
            {
              label: "a",
              prompt: "How much energy reaches primary consumers?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How much reaches secondary consumers?",
              marks: 2,
            },
            { label: "c", prompt: "Where does most energy go?", marks: 2 },
            {
              label: "d",
              prompt: "Why can't energy be recycled like matter?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "10% rule application",
                statement: "Each level gets 10% of previous.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$10,000 \\times 0.10 = 1,000$ kcal to herbivores.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$1,000 \\times 0.10 = 100$ kcal to carnivores.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "~90% lost as heat at each step; also unused/reflected.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Energy degrades to unusable heat (2nd law); matter cycles but energy flows one way.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 1,000 kcal (b) 100 kcal (c) Heat (d) Energy degrades to heat.",
            commonErrors: ["Not applying 10% rule correctly."],
          },
        },
      ],
    },
  ],
};
