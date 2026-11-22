import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "biohl-u2-lesson-2-1",
  code: "2-1",
  title:
    "Respiration: Glycolysis, the Krebs Cycle and the Electron Transport Chain",
  goal: "I CAN describe the reactions of glycolysis in detail, summarise the link reaction and Krebs cycle, and calculate ATP yields from chemiosmosis in the electron transport chain.",
  standards: ["Paper 1", "Paper 2", "AHL B.1"],
  vocabulary: [
    {
      term: "Substrate-level phosphorylation",
      definition:
        "The direct transfer of a phosphate group from a substrate to ADP to form ATP, without involvement of the electron transport chain.",
    },
    {
      term: "NADH",
      definition:
        "The reduced form of $NAD^+$, carrying high-energy electrons from glycolysis and the Krebs cycle to the electron transport chain.",
    },
    {
      term: "Link reaction",
      definition:
        "The reaction converting each pyruvate into acetyl CoA, releasing $CO_2$ and reducing $NAD^+$ to NADH, occurring in the mitochondrial matrix.",
    },
    {
      term: "Acetyl CoA",
      definition:
        "A two-carbon compound that carries the acetyl group into the Krebs cycle for complete oxidation.",
    },
    {
      term: "Chemiosmosis",
      definition:
        "ATP synthesis driven by a proton gradient across a membrane: protons flow back through ATP synthase.",
    },
    {
      term: "P/O ratio",
      definition:
        "The number of ATP molecules produced per atom of oxygen consumed (or per reduced coenzyme oxidised) in oxidative phosphorylation.",
    },
  ],
  concepts: [
    {
      id: "biohl-u2-glycolysis",
      title: "Glycolysis in detail",
      skill:
        "Describe the investment and payoff phases of glycolysis, its net yield of ATP and NADH, and the fate of pyruvate under aerobic and anaerobic conditions.",
      lesson: {
        sections: [
          {
            heading: "Investment and payoff",
            body: "Glycolysis occurs in the cytoplasm and converts one glucose (6 carbons) into two pyruvate molecules (3 carbons each) in ten enzyme-catalysed steps. In the investment phase the cell spends 2 ATP to phosphorylate glucose and split it into two triose phosphates. In the payoff phase each triose is oxidised, generating 2 NADH and 4 ATP by substrate-level phosphorylation, giving a net yield of 2 ATP and 2 NADH per glucose. No oxygen is required.",
          },
          {
            heading: "Pyruvate and $NAD^+$ regeneration",
            body: "Glycolysis can only continue while $NAD^+$ is available to accept electrons. Under aerobic conditions pyruvate enters the mitochondria for the link reaction and Krebs cycle. Under anaerobic conditions pyruvate is reduced — to lactate in animals or ethanol and $CO_2$ in yeast — regenerating $NAD^+$ so glycolysis can continue, but producing no further ATP.",
          },
          {
            heading: "Control of glycolysis",
            body: "Glycolysis is regulated mainly at the phosphofructokinase-1 (PFK-1) step, which is inhibited by high ATP and activated by AMP and fructose-2,6-bisphosphate. This control point ensures glycolysis slows when the cell has ample energy and speeds up when ATP demand is high. Hexokinase and pyruvate kinase provide additional control points.",
          },
        ],
        keyFormulas: [
          {
            name: "Glycolysis equation",
            statement:
              "Glucose $+ 2\\,ADP + 2\\,P_i + 2\\,NAD^+ \\rightarrow 2\\,\\text{pyruvate} + 2\\,ATP + 2\\,NADH + 2\\,H^+ + 2\\,H_2O$",
          },
          {
            name: "Net ATP",
            statement:
              "Investment phase costs 2 ATP; payoff phase returns 4 ATP; net yield is $4 - 2 = 2$ ATP per glucose.",
          },
          {
            name: "Scaling",
            statement: "Per glucose: $2$ pyruvate, $2$ net ATP, $2$ NADH.",
          },
        ],
        workedExample: {
          problem:
            "Glycolysis acts on 3 molecules of glucose. Calculate the total yield of pyruvate, ATP and NADH.",
          solution:
            "Each glucose gives $2$ pyruvate, $2$ net ATP and $2$ NADH, so $3$ glucose give $6$ pyruvate, $6$ ATP and $6$ NADH.",
        },
      },
      questions: [
        {
          id: "biohl-u2-glycolysis-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the net yield of ATP from the glycolysis of one molecule of glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$ ATP" },
              { id: "b", text: "$2$ ATP" },
              { id: "c", text: "$4$ ATP" },
              { id: "d", text: "$36$ ATP" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Net ATP yield",
                statement:
                  "Payoff phase produces 4 ATP; investment phase consumes 2; net is 2 ATP per glucose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The gross yield is 4 ATP but 2 ATP are consumed in the investment phase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net yield $= 4 - 2 = 2$ ATP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $2$ ATP",
            commonErrors: [
              "Quoting 4 ATP (gross) without subtracting the investment cost.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Glycolysis acts on 5 molecules of glucose. Calculate the total number of pyruvate molecules, net ATP molecules and NADH molecules produced.",
          response: {
            type: "numeric",
            parts: [
              { label: "Pyruvate molecules", answer: 10 },
              { label: "Net ATP molecules", answer: 10 },
              { label: "NADH molecules", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Per-glucose yield",
                statement:
                  "Each glucose yields $2$ pyruvate, $2$ net ATP and $2$ NADH.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply each per-glucose yield by 5.",
                working: "5 \\times 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pyruvate: $5 \\times 2 = 10$.",
                working: "10",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "ATP and NADH: each is also $5 \\times 2 = 10$.",
                working: "10,\\ 10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$ pyruvate, $10$ ATP, $10$ NADH",
            commonErrors: [
              "Forgetting that the ATP yield is net (2, not 4, per glucose).",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why $NAD^+$ must be regenerated during anaerobic respiration, and describe what happens to pyruvate in lactic acid fermentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "$NAD^+$ regeneration",
                statement:
                  "Glycolysis requires $NAD^+$ as an electron acceptor; without regeneration the pathway stops after the first glucose.",
              },
              {
                kind: "principle",
                name: "Fermentation",
                statement:
                  "Pyruvate is reduced to regenerate $NAD^+$ from NADH, allowing glycolysis to continue without oxygen.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Glycolysis produces NADH and consumes $NAD^+$; the supply of $NAD^+$ is limited.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Under anaerobic conditions the electron transport chain cannot reoxidise NADH.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Pyruvate acts as the electron acceptor, being reduced to lactate while NADH is oxidised back to $NAD^+$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This sustains glycolysis so a small net yield of 2 ATP per glucose continues.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$NAD^+$ is regenerated by reducing pyruvate to lactate, allowing glycolysis to continue anaerobically at 2 ATP per glucose.",
            commonErrors: [
              "Claiming fermentation produces additional ATP — it only regenerates $NAD^+$.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "This question investigates the energy bookkeeping of glycolysis. Recall that glycolysis has an investment phase (2 ATP consumed) and a payoff phase (4 ATP produced) per glucose.",
          parts: [
            {
              label: "a",
              prompt:
                "Define substrate-level phosphorylation and give one example within glycolysis.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why the net ATP yield of glycolysis is 2 rather than 4 per glucose.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Glycolysis acts on 4 molecules of glucose. Calculate the total net ATP and total NADH produced.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why the cell must regenerate $NAD^+$ for glycolysis to continue indefinitely.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Substrate-level phosphorylation",
                statement:
                  "Direct transfer of a phosphate group from a phosphorylated substrate to ADP to form ATP, e.g. 1,3-bisphosphoglycerate to 3-phosphoglycerate.",
              },
              {
                kind: "formula",
                name: "Net yield",
                statement: "Net ATP $= 4 - 2 = 2$ per glucose.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Substrate-level phosphorylation transfers a phosphate directly from a substrate to ADP.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Example: conversion of 1,3-bisphosphoglycerate or phosphoenolpyruvate to their dephosphorylated products yields ATP without the ETC.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Two ATP are invested to phosphorylate glucose and cleave it into two triose phosphates.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Four ATP are recovered in the payoff phase, so only 2 remain as net yield.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Each glucose gives 2 net ATP and 2 NADH.",
                working: "4 \\times 2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate: $8$ ATP and $8$ NADH.",
                working: "8 \\text{ ATP},\\ 8 \\text{ NADH}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Glycolysis consumes $NAD^+$ when oxidising glyceraldehyde-3-phosphate.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "If NADH is not reoxidised, $NAD^+$ runs out and the pathway stalls.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Direct phosphate transfer to ADP (e.g. PEP to pyruvate). (b) 2 invested, 4 recovered. (c) $8$ ATP, $8$ NADH. (d) $NAD^+$ is the electron acceptor and must be regenerated.",
            commonErrors: [
              "In (c), reporting 16 ATP by forgetting the investment cost.",
              "In (a), describing oxidative phosphorylation instead of substrate-level phosphorylation.",
            ],
            examinerNote:
              "Part (c) tests whether the candidate uses the net yield of 2 ATP per glucose.",
          },
        },
        {
          id: "biohl-u2-glycolysis-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Where does glycolysis occur in a eukaryotic cell, and does it require oxygen?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "In the thylakoid lumen and it does not require oxygen",
              },
              {
                id: "b",
                text: "In the cytoplasm and it does not require oxygen",
              },
              {
                id: "c",
                text: "In the mitochondrial matrix and it requires oxygen",
              },
              {
                id: "d",
                text: "In the inner mitochondrial membrane and it requires oxygen",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycolysis location",
                statement:
                  "Glycolysis is a cytoplasmic pathway that does not use oxygen directly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Glycolysis takes place in the cytoplasm of the cell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The pathway is anaerobic: it can proceed without oxygen, although oxygen later affects pyruvate oxidation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Cytoplasm; no oxygen is required.",
            commonErrors: [
              "Placing glycolysis in the mitochondrion — that is where the link reaction and Krebs cycle occur.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement best describes the regulation of phosphofructokinase-1 (PFK-1) in glycolysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "ATP inhibits PFK-1, while AMP and fructose-2,6-bisphosphate activate it",
              },
              {
                id: "b",
                text: "PFK-1 is inhibited by low glucose concentrations only",
              },
              {
                id: "c",
                text: "PFK-1 is regulated only by oxygen availability",
              },
              { id: "d", text: "ATP activates PFK-1, while AMP inhibits it" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allosteric control",
                statement:
                  "PFK-1 is the main control point of glycolysis, responding to cellular energy status.",
              },
            ],
            steps: [
              {
                reasoning:
                  "High ATP signals ample energy and inhibits PFK-1, slowing glycolysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "AMP and fructose-2,6-bisphosphate signal low energy or high demand and activate the enzyme.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** ATP inhibits PFK-1; AMP and fructose-2,6-bisphosphate activate it.",
            commonErrors: ["Reversing the effects of ATP and AMP on PFK-1."],
          },
        },
        {
          id: "biohl-u2-glycolysis-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For each triose phosphate processed in the payoff phase of glycolysis, which pair of events produces the ATP yield?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Photolysis of water and oxidative phosphorylation",
              },
              {
                id: "b",
                text: "Oxidation producing NADH and substrate-level phosphorylation producing ATP",
              },
              { id: "c", text: "The link reaction and the Krebs cycle" },
              { id: "d", text: "Reduction of $NADP^+$ and carbon fixation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Payoff phase",
                statement:
                  "Each triose phosphate is oxidised to pyruvate, generating NADH and ATP by substrate-level phosphorylation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Glyceraldehyde-3-phosphate is oxidised, reducing $NAD^+$ to NADH.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Two substrate-level phosphorylation steps produce ATP directly from ADP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Oxidation to NADH plus substrate-level phosphorylation to ATP.",
            commonErrors: [
              "Describing oxidative phosphorylation, which occurs later in mitochondria.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement correctly distinguishes substrate-level phosphorylation in glycolysis from oxidative phosphorylation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Both require oxygen and the mitochondrial electron transport chain",
              },
              {
                id: "b",
                text: "Substrate-level phosphorylation produces NADPH, while oxidative phosphorylation produces ATP",
              },
              {
                id: "c",
                text: "Substrate-level phosphorylation occurs only in photosynthesis",
              },
              {
                id: "d",
                text: "Substrate-level phosphorylation transfers phosphate directly to ADP without an electron transport chain; oxidative phosphorylation depends on a proton gradient",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Substrate-level phosphorylation",
                statement:
                  "A phosphate group is transferred directly from a substrate to ADP to form ATP.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In glycolysis, ATP is formed directly during enzyme-catalysed reactions such as phosphoenolpyruvate conversion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Oxidative phosphorylation instead uses the proton gradient across the inner mitochondrial membrane and ATP synthase.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Direct phosphate transfer versus proton-gradient-driven phosphorylation.",
            commonErrors: [
              "Assuming all ATP production requires oxygen or mitochondria.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Under anaerobic conditions in mammalian muscle, what is the immediate fate of pyruvate and why does it occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pyruvate is photolysed to release oxygen" },
              {
                id: "b",
                text: "Pyruvate is converted directly to glucose without using ATP",
              },
              {
                id: "c",
                text: "Pyruvate is reduced to lactate to regenerate $NAD^+$ so glycolysis can continue",
              },
              {
                id: "d",
                text: "Pyruvate enters the Krebs cycle and produces extra ATP",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lactate fermentation",
                statement:
                  "Pyruvate accepts electrons from NADH, forming lactate and regenerating $NAD^+$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without oxygen the electron transport chain cannot reoxidise NADH efficiently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reduction of pyruvate to lactate oxidises NADH back to $NAD^+$, sustaining glycolysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Pyruvate is reduced to lactate to regenerate $NAD^+$.",
            commonErrors: [
              "Claiming anaerobic respiration produces ATP after glycolysis.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Glycolysis acts on 7 molecules of glucose. Calculate the number of pyruvate molecules and the net number of ATP molecules produced.",
          response: {
            type: "numeric",
            parts: [
              { label: "Pyruvate molecules", answer: 14 },
              { label: "Net ATP molecules", answer: 14 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Per-glucose yield",
                statement: "Each glucose gives $2$ pyruvate and $2$ net ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply the per-glucose yields by 7.",
                working: "7 \\times 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both pyruvate and net ATP equal $14$.",
                working: "14,\\ 14",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$14$ pyruvate; $14$ net ATP",
            commonErrors: [
              "Using 4 ATP per glucose instead of the net yield of 2.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Glycolysis acts on 8 molecules of glucose. Calculate the total ATP consumed in the investment phase, the total ATP produced in the payoff phase and the net ATP yield.",
          response: {
            type: "numeric",
            parts: [
              { label: "ATP consumed", answer: 16 },
              { label: "ATP produced in payoff", answer: 32 },
              { label: "Net ATP", answer: 16 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Investment and payoff",
                statement:
                  "Per glucose, $2$ ATP are invested and $4$ ATP are produced, giving a net $2$ ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Investment ATP is $8 \\times 2$.",
                working: "16 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Payoff ATP is $8 \\times 4$.",
                working: "32 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net ATP is $32 - 16 = 16$.",
                working: "16 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$16$ ATP consumed; $32$ ATP produced; $16$ net ATP",
            commonErrors: [
              "Reporting 32 ATP as the net yield without subtracting the investment cost.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Yeast cells ferment the products of glycolysis anaerobically. If glycolysis acts on 5 molecules of glucose, calculate the number of ethanol molecules and carbon dioxide molecules produced by alcoholic fermentation.",
          response: {
            type: "numeric",
            parts: [
              { label: "Pyruvate molecules available", answer: 10 },
              { label: "Ethanol molecules", answer: 10 },
              { label: "Carbon dioxide molecules", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Alcoholic fermentation",
                statement:
                  "Each pyruvate is converted to ethanol and $CO_2$, regenerating $NAD^+$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Five glucose molecules give $5 \\times 2$ pyruvate.",
                working: "10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each pyruvate gives one ethanol molecule.",
                working: "10 \\text{ ethanol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Each pyruvate also gives one $CO_2$ molecule.",
                working: "10 \\text{ CO}_2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$ pyruvate, $10$ ethanol and $10$ $CO_2$",
            commonErrors: [
              "Forgetting that each glucose produces two pyruvate molecules.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Glycolysis acts on 4 molecules of glucose under anaerobic conditions in muscle. Calculate the net ATP produced, the pyruvate produced, the NADH produced in glycolysis and the NADH subsequently reoxidised during lactate formation.",
          response: {
            type: "numeric",
            parts: [
              { label: "Net ATP", answer: 8 },
              { label: "Pyruvate", answer: 8 },
              { label: "NADH produced", answer: 8 },
              { label: "NADH reoxidised", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Anaerobic glycolysis yields",
                statement:
                  "Per glucose: $2$ pyruvate, $2$ net ATP and $2$ NADH; fermentation reoxidises the NADH.",
              },
            ],
            steps: [
              {
                reasoning: "Net ATP is $4 \\times 2$.",
                working: "8 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pyruvate is $4 \\times 2$.",
                working: "8 \\text{ pyruvate}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Glycolysis produces $4 \\times 2$ NADH.",
                working: "8 \\text{ NADH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each NADH is reoxidised when pyruvate is reduced to lactate, so $8$ NADH are reoxidised.",
                working: "8 \\text{ NADH}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$8$ net ATP, $8$ pyruvate, $8$ NADH produced and $8$ NADH reoxidised",
            commonErrors: [
              "Assuming anaerobic glycolysis makes more ATP after fermentation.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Glycolysis acts on 10 molecules of glucose. Calculate the ATP invested, the ATP produced before investment is subtracted, the net ATP, the pyruvate molecules and the NADH molecules produced.",
          response: {
            type: "numeric",
            parts: [
              { label: "ATP invested", answer: 20 },
              { label: "ATP produced in payoff", answer: 40 },
              { label: "Net ATP", answer: 20 },
              { label: "Pyruvate", answer: 20 },
              { label: "NADH", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Glycolysis stoichiometry",
                statement:
                  "Per glucose: invest $2$ ATP, produce $4$ ATP, yield $2$ net ATP, $2$ pyruvate and $2$ NADH.",
              },
            ],
            steps: [
              {
                reasoning: "ATP invested is $10 \\times 2$.",
                working: "20 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ATP produced in the payoff phase is $10 \\times 4$.",
                working: "40 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net ATP is $40 - 20$.",
                working: "20 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Pyruvate equals $10 \\times 2$.",
                working: "20",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "NADH equals $10 \\times 2$.",
                working: "20 \\text{ NADH}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$20$ ATP invested, $40$ ATP produced, $20$ net ATP, $20$ pyruvate and $20$ NADH",
            commonErrors: [
              "Reporting 40 ATP as the final yield instead of the net 20 ATP.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Glycolysis acts on 9 molecules of glucose. Calculate the number of NADH molecules and the number of pyruvate molecules produced.",
          response: {
            type: "numeric",
            parts: [
              { label: "NADH molecules", answer: 18 },
              { label: "Pyruvate molecules", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Per-glucose yield",
                statement: "Each glucose gives $2$ NADH and $2$ pyruvate.",
              },
            ],
            steps: [
              {
                reasoning: "Scale the per-glucose yields by 9.",
                working: "9 \\times 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both answers are $18$.",
                working: "18,\\ 18",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$18$ NADH; $18$ pyruvate",
            commonErrors: [
              "Using the two triose phosphates as if they were pyruvate before the payoff phase.",
            ],
          },
        },
        {
          id: "biohl-u2-glycolysis-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A cell is deprived of oxygen for several minutes. Using your knowledge of glycolysis and fermentation, explain the metabolic consequences and why the ATP yield falls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anaerobic limitation",
                statement:
                  "Without oxygen, NADH cannot be efficiently reoxidised by the electron transport chain, so fermentation is needed.",
              },
              {
                kind: "principle",
                name: "ATP yield",
                statement:
                  "Only glycolysis continues, yielding 2 net ATP per glucose instead of about 32 ATP aerobically.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Glycolysis can still occur because it does not require oxygen directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "NADH produced in glycolysis must be reoxidised to regenerate $NAD^+$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Pyruvate is reduced to lactate or ethanol, allowing glycolysis to continue.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Fermentation produces no additional ATP beyond glycolysis.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The cell therefore receives only 2 net ATP per glucose rather than the full aerobic yield.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Over time the limited ATP supply can impair processes such as ion pumping and muscle contraction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Glycolysis continues with fermentation regenerating $NAD^+$, but ATP yield falls to 2 net ATP per glucose.",
            commonErrors: [
              "Claiming fermentation itself produces ATP or that glycolysis stops immediately without oxygen.",
            ],
          },
        },
      ],
    },
    {
      id: "biohl-u2-krebs-etc",
      title: "Krebs cycle, electron transport chain and chemiosmosis",
      skill:
        "Summarise the outputs of the link reaction and Krebs cycle and calculate ATP yields using P/O ratios for NADH and FADH2.",
      lesson: {
        sections: [
          {
            heading: "Link reaction and Krebs cycle",
            body: "Each of the two pyruvate molecules is decarboxylated and oxidised to acetyl CoA in the mitochondrial matrix, producing 1 $CO_2$ and 1 NADH per pyruvate. Each acetyl CoA then enters the Krebs cycle, which yields per turn: 3 NADH, 1 FADH2, 1 ATP (via GTP) and 2 $CO_2$. Per glucose, the two turns give 6 NADH, 2 FADH2, 2 ATP and 4 $CO_2$ in addition to the link-reaction products.",
          },
          {
            heading: "Electron transport chain and chemiosmosis",
            body: "NADH and FADH2 donate electrons to complexes in the inner mitochondrial membrane. Energy released pumps protons into the intermembrane space, creating an electrochemical gradient (the proton motive force). Protons flow back through ATP synthase, driving phosphorylation of ADP — this is chemiosmosis. Oxygen is the final electron acceptor, forming water. Theoretical P/O ratios are about 2.5 ATP per NADH and 1.5 per FADH2, giving a modern estimate of about 30-32 ATP per glucose.",
          },
          {
            heading: "The electron transport chain in detail",
            body: "The chain consists of four complexes (I to IV) embedded in the inner membrane. NADH reduces complex I and FADH2 reduces complex II; electrons then pass through coenzyme Q and cytochrome c to complex IV, which reduces oxygen to water. At complexes I, III and IV the energy released pumps protons into the intermembrane space, building the gradient that ATP synthase exploits.",
          },
        ],
        keyFormulas: [
          {
            name: "Per-glucose mitochondrial yield",
            statement:
              "$10$ NADH, $2$ FADH2 and $4$ ATP from substrate-level phosphorylation (2 glycolysis $+$ 2 Krebs).",
          },
          {
            name: "Total ATP",
            statement:
              "$ATP = 4 + 10\\,p_{NADH} + 2\\,p_{FADH_2}$, where $p$ is the ATP yield per reduced coenzyme.",
          },
          {
            name: "Aerobic total",
            statement:
              "With $p_{NADH}=2.5$ and $p_{FADH_2}=1.5$: $ATP = 4 + 25 + 3 = 32$ per glucose.",
          },
        ],
        workedExample: {
          problem:
            "Using P/O ratios of 2.5 for NADH and 1.5 for FADH2, calculate the total ATP yield from the complete aerobic respiration of one glucose.",
          solution:
            "Substrate-level ATP $= 4$; NADH contribution $= 10 \\times 2.5 = 25$; FADH2 contribution $= 2 \\times 1.5 = 3$. Total $= 4 + 25 + 3 = 32$ ATP.",
        },
      },
      questions: [
        {
          id: "biohl-u2-etc-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During aerobic respiration of one glucose, the majority of ATP is produced by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Substrate-level phosphorylation in glycolysis",
              },
              {
                id: "b",
                text: "Substrate-level phosphorylation in the Krebs cycle",
              },
              {
                id: "c",
                text: "Oxidative phosphorylation via the electron transport chain and chemiosmosis",
              },
              { id: "d", text: "The link reaction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oxidative phosphorylation",
                statement:
                  "Most ATP is made when the proton gradient drives ATP synthase, using electrons from NADH and FADH2.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Of about 32 ATP per glucose, roughly 28 come from the electron transport chain and chemiosmosis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Glycolysis and the Krebs cycle contribute only 4 ATP by substrate-level phosphorylation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Oxidative phosphorylation",
            commonErrors: ["Choosing glycolysis, which yields only 2 ATP net."],
          },
        },
        {
          id: "biohl-u2-etc-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Complete aerobic respiration of one glucose produces 10 NADH, 2 FADH2 and 4 ATP by substrate-level phosphorylation. Using P/O ratios of 2.5 ATP per NADH and 1.5 ATP per FADH2, calculate the total ATP yield per glucose.",
          response: {
            type: "numeric",
            parts: [{ label: "Total ATP", answer: 32 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ATP total",
                statement: "$ATP = 4 + 10(2.5) + 2(1.5) = 32$.",
              },
            ],
            steps: [
              {
                reasoning: "Compute the NADH contribution.",
                working: "10 \\times 2.5 = 25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the FADH2 contribution.",
                working: "2 \\times 1.5 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the substrate-level ATP.",
                working: "4 + 25 + 3 = 32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$32$ ATP",
            commonErrors: [
              "Using 3 and 2 as the P/O ratios (older textbook values) without checking the ratios given.",
              "Forgetting the 4 substrate-level ATP.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the mechanism of chemiosmosis in the mitochondrion, including the role of the proton gradient and ATP synthase.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chemiosmosis",
                statement:
                  "ATP synthesis is coupled to the flow of protons down their electrochemical gradient through ATP synthase.",
              },
              {
                kind: "principle",
                name: "Proton motive force",
                statement:
                  "Electron transport pumps protons into the intermembrane space, storing energy as a gradient.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Electron transfer through the ETC releases energy that pumps protons from the matrix into the intermembrane space.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This creates an electrochemical proton gradient (proton motive force) across the inner membrane.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Protons flow back into the matrix only through ATP synthase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The flow drives rotation of the synthase and phosphorylation of ADP to ATP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Proton pumping creates a gradient; protons returning through ATP synthase drive ATP formation.",
            commonErrors: [
              "Saying ATP is made directly by the electron transport chain rather than by ATP synthase using the gradient.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A eukaryotic cell respires glucose aerobically. The P/O ratios are 2.5 for NADH and 1.5 for FADH2.",
          parts: [
            {
              label: "a",
              prompt:
                "State the locations of the Krebs cycle and the electron transport chain in a eukaryotic cell.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the ATP contributed by the 6 NADH produced in the Krebs cycle alone.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why oxygen is essential for the electron transport chain to keep functioning.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Compare the ATP yield of aerobic respiration with that of anaerobic respiration of one glucose.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cellular locations",
                statement:
                  "Krebs cycle: mitochondrial matrix; electron transport chain: inner mitochondrial membrane.",
              },
              {
                kind: "principle",
                name: "Final electron acceptor",
                statement:
                  "Oxygen accepts electrons and protons at the end of the ETC to form water; without it the chain stalls.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The Krebs cycle occurs in the mitochondrial matrix.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "The electron transport chain is embedded in the inner mitochondrial membrane.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Multiply the 6 NADH by the P/O ratio.",
                working: "6 \\times 2.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "15 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Oxygen is the final electron acceptor at complex IV.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "If oxygen is absent the ETC backs up, the proton gradient collapses and NADH cannot be reoxidised.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Aerobic respiration yields about 32 ATP per glucose using the full ETC.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Anaerobic respiration yields only the 2 net ATP from glycolysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Matrix and inner membrane. (b) $15$ ATP. (c) Oxygen is the final acceptor; without it the chain stops. (d) $\\approx 32$ vs $2$ ATP.",
            commonErrors: [
              "In (b), using all 10 NADH instead of the 6 from the Krebs cycle alone.",
              "In (d), claiming anaerobic respiration yields 36 ATP.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What are the products of the link reaction for each pyruvate molecule that enters the mitochondrion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lactate, ATP and water" },
              { id: "b", text: "Acetyl CoA, oxygen and ATP" },
              { id: "c", text: "Acetyl CoA, $CO_2$ and NADH" },
              { id: "d", text: "Pyruvate, NADPH and $CO_2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Link reaction",
                statement:
                  "Pyruvate is decarboxylated and oxidised to acetyl CoA, releasing $CO_2$ and reducing $NAD^+$ to NADH.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The two-carbon acetyl group is transferred to coenzyme A.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One carbon is lost as $CO_2$ and one NADH is formed per pyruvate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Acetyl CoA, $CO_2$ and NADH",
            commonErrors: [
              "Including ATP — the link reaction produces NADH, not ATP.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Per turn of the Krebs cycle, which set of products is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$ NADH, $1$ FADH2, $1$ ATP and $2$ $CO_2$" },
              { id: "b", text: "$10$ NADH, $2$ FADH2, $4$ ATP and $6$ $CO_2$" },
              { id: "c", text: "$6$ NADH, $2$ FADH2, $2$ ATP and $4$ $CO_2$" },
              { id: "d", text: "$2$ NADH, $2$ FADH2, $2$ ATP and $1$ $CO_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Krebs cycle stoichiometry",
                statement:
                  "Each acetyl CoA turn yields $3$ NADH, $1$ FADH2, $1$ ATP/GTP and $2$ $CO_2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The cycle oxidises acetyl CoA completely to two $CO_2$ molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The reduced coenzymes and one substrate-level ATP/GTP complete the per-turn yield.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** $3$ NADH, $1$ FADH2, $1$ ATP and $2$ $CO_2$ per turn.",
            commonErrors: [
              "Quoting the whole-glucose totals rather than the per-turn values.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the final electron acceptor in the mitochondrial electron transport chain, and what product is formed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$CO_2$; bicarbonate is formed" },
              { id: "b", text: "$NAD^+$; NADH is formed" },
              { id: "c", text: "Pyruvate; lactate is formed" },
              { id: "d", text: "Oxygen; water is formed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Final electron acceptor",
                statement:
                  "Oxygen accepts electrons and protons at the end of the electron transport chain to form water.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Electrons pass down the chain to the final acceptor at complex IV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Oxygen is reduced to water, allowing the chain to continue.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Oxygen, producing water.",
            commonErrors: [
              "Naming $NAD^+$ as the final acceptor — it is the acceptor in glycolysis, not the ETC.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If the P/O ratio for NADH is 2.5 ATP per NADH, how many ATP are produced by oxidative phosphorylation from 8 NADH molecules?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$ ATP" },
              { id: "b", text: "$20$ ATP" },
              { id: "c", text: "$16$ ATP" },
              { id: "d", text: "$40$ ATP" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "P/O ratio",
                statement:
                  "ATP from a reduced coenzyme $=$ number of coenzymes $\\times$ ATP per coenzyme.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply the number of NADH by the P/O ratio.",
                working: "8 \\times 2.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the product.",
                working: "20 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $20$ ATP",
            commonErrors: [
              "Using 3 ATP per NADH from older textbook values instead of the stated 2.5.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Oligomycin inhibits ATP synthase in mitochondria. Which effect on respiration is most likely?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Oxygen is no longer the final electron acceptor",
              },
              { id: "b", text: "Pyruvate is converted directly to lactate" },
              {
                id: "c",
                text: "The proton gradient cannot be used to make ATP, so electron transport slows as the gradient builds",
              },
              { id: "d", text: "Glycolysis is inhibited in the cytoplasm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ATP synthase inhibition",
                statement:
                  "Blocking ATP synthase prevents proton return through the synthase, so the proton gradient rises and electron transport slows.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Oligomycin blocks the channel through which protons return to the matrix.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without ATP synthesis the gradient cannot dissipate, feedback-inhibiting the electron transport chain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Proton return and ATP synthesis are blocked, slowing electron transport.",
            commonErrors: [
              "Confusing oligomycin with cyanide, which blocks electron transfer at complex IV.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement correctly compares the mitochondrial and chloroplast electron transport systems?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Chloroplasts require oxygen as the final electron acceptor",
              },
              {
                id: "b",
                text: "Both use chemiosmosis, but mitochondria pump protons outward while chloroplasts pump protons into the thylakoid lumen",
              },
              {
                id: "c",
                text: "Mitochondria use light energy, while chloroplasts use NADH",
              },
              {
                id: "d",
                text: "Both produce NADPH as their main reduced coenzyme",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chemiosmotic comparison",
                statement:
                  "Both organelles use proton gradients and ATP synthase, but the membrane topology and electron donors differ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mitochondrial electron transport pumps protons from the matrix into the intermembrane space.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Chloroplast electron transport pumps protons from the stroma into the thylakoid lumen, where they drive photophosphorylation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Both use chemiosmosis with opposite proton-gradient orientations.",
            commonErrors: [
              "Assuming chloroplasts produce NADH or require oxygen as the final acceptor.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Complete aerobic respiration of 3 molecules of glucose occurs. Calculate the total $CO_2$ released by the link reaction and Krebs cycle and the total NADH produced by those two stages.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total $CO_2$", answer: 18 },
              {
                label: "Total NADH from link reaction and Krebs cycle",
                answer: 24,
              },
              {
                label:
                  "Total ATP by substrate-level phosphorylation in those stages",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Post-glycolysis yield per glucose",
                statement:
                  "Link reaction plus two Krebs turns give $6$ $CO_2$, $8$ NADH and $2$ substrate-level ATP per glucose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Per glucose, link and Krebs release $6$ $CO_2$; for 3 glucose this is $3 \\times 6$.",
                working: "18 \\text{ CO}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Per glucose, link and Krebs produce $8$ NADH; for 3 glucose this is $3 \\times 8$.",
                working: "24 \\text{ NADH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The Krebs cycle gives $2$ ATP per glucose, so 3 glucose give $6$ ATP.",
                working: "6 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$18$ $CO_2$, $24$ NADH and $6$ ATP",
            commonErrors: [
              "Including the 2 NADH from glycolysis in the NADH count for link reaction and Krebs cycle only.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "One glucose yields 10 NADH, 2 FADH2 and 4 substrate-level ATP. Using P/O ratios of 2.5 for NADH and 1.5 for FADH2, calculate the ATP from NADH, the ATP from FADH2, the substrate-level ATP and the total ATP yield.",
          response: {
            type: "numeric",
            parts: [
              { label: "ATP from NADH", answer: 25 },
              { label: "ATP from FADH2", answer: 3 },
              { label: "Substrate-level ATP", answer: 4 },
              { label: "Total ATP", answer: 32 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ATP total",
                statement: "$ATP = 4 + 10(2.5) + 2(1.5)$.",
              },
            ],
            steps: [
              {
                reasoning: "NADH contribution is $10 \\times 2.5$.",
                working: "25 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "FADH2 contribution is $2 \\times 1.5$.",
                working: "3 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substrate-level ATP is already given as 4.",
                working: "4 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add all contributions.",
                working: "4 + 25 + 3 = 32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25 + 3 + 4 = 32$ ATP",
            commonErrors: [
              "Forgetting to add the 4 substrate-level ATP molecules.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Complete aerobic respiration of 5 molecules of glucose occurs. Using P/O ratios of 2.5 for NADH and 1.5 for FADH2, calculate the total NADH produced, the total FADH2 produced, the substrate-level ATP produced and the total ATP yield.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total NADH", answer: 50 },
              { label: "Total FADH2", answer: 10 },
              { label: "Substrate-level ATP", answer: 20 },
              { label: "Total ATP", answer: 160 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scaling aerobic respiration",
                statement:
                  "Per glucose: $10$ NADH, $2$ FADH2 and $4$ substrate-level ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Total NADH is $5 \\times 10$.",
                working: "50 \\text{ NADH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total FADH2 is $5 \\times 2$.",
                working: "10 \\text{ FADH2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substrate-level ATP is $5 \\times 4$.",
                working: "20 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total ATP is $20 + 50(2.5) + 10(1.5) = 160$.",
                working: "20 + 125 + 15 = 160",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$50$ NADH, $10$ FADH2, $20$ substrate ATP and $160$ total ATP",
            commonErrors: [
              "Using per-glucose values for 5 glucose without multiplying by 5.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Complete aerobic respiration of 2 molecules of glucose occurs. Using the overall equation $C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O$, calculate the number of oxygen molecules consumed and the number of carbon dioxide molecules released.",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxygen molecules", answer: 12 },
              { label: "Carbon dioxide molecules", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Overall respiration equation",
                statement:
                  "Each glucose consumes $6$ $O_2$ and releases $6$ $CO_2$ and $6$ $H_2O$.",
              },
            ],
            steps: [
              {
                reasoning: "For 2 glucose, oxygen is $2 \\times 6$.",
                working: "12 \\text{ O}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Carbon dioxide is also $2 \\times 6$.",
                working: "12 \\text{ CO}_2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$12$ $O_2$ consumed and $12$ $CO_2$ released",
            commonErrors: [
              "Counting only the Krebs-cycle $CO_2$ and forgetting the 2 $CO_2$ from the link reaction.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Describe the sequence of events from pyruvate entry into the mitochondrion to ATP production by oxidative phosphorylation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mitochondrial respiration sequence",
                statement:
                  "Pyruvate is converted to acetyl CoA, oxidised in the Krebs cycle, and the reduced coenzymes drive chemiosmotic ATP synthesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pyruvate enters the mitochondrial matrix and is converted to acetyl CoA by the link reaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The link reaction releases $CO_2$ and produces NADH.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Acetyl CoA enters the Krebs cycle, producing NADH, FADH2, ATP and $CO_2$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "NADH and FADH2 donate electrons to complexes in the inner mitochondrial membrane.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Electron transport pumps protons into the intermembrane space, forming an electrochemical gradient.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Protons return through ATP synthase, driving phosphorylation of ADP to ATP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pyruvate → acetyl CoA → Krebs cycle → reduced coenzymes → electron transport → proton gradient → ATP synthase → ATP.",
            commonErrors: [
              "Placing the Krebs cycle on the inner membrane rather than in the matrix.",
            ],
          },
        },
        {
          id: "biohl-u2-etc-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A researcher adds two inhibitors to isolated mitochondria: cyanide, which blocks electron transfer at complex IV, and oligomycin, which blocks ATP synthase. Predict and explain the effects of each inhibitor on electron transport, proton gradient and ATP production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ETC blockade",
                statement:
                  "If electrons cannot reach oxygen, proton pumping stops and the proton motive force collapses.",
              },
              {
                kind: "principle",
                name: "Synthase blockade",
                statement:
                  "If ATP synthase is blocked, protons cannot return through the synthase, so the gradient rises and electron transport is inhibited by feedback.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cyanide prevents electrons from being passed to oxygen at complex IV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Electron transport stalls, so complexes I-III stop pumping protons.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The proton gradient dissipates because it is no longer maintained.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "ATP synthesis by ATP synthase falls because the proton motive force is lost.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Oligomycin blocks the proton channel of ATP synthase directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Protons accumulate in the intermembrane space because they cannot return through the synthase.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The large proton gradient makes further proton pumping energetically harder, slowing electron transport.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "ATP production stops even though electron carriers may initially remain reduced.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cyanide collapses the proton gradient by stopping electron flow; oligomycin traps the gradient and blocks ATP synthesis while slowing the ETC.",
            commonErrors: [
              "Claiming oligomycin blocks oxygen reduction — it blocks ATP synthase, not the electron transport chain directly.",
            ],
          },
        },
      ],
    },
  ],
};
