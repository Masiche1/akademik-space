import type { Lesson } from "../../../types.ts";

export const lesson512: Lesson = {
  id: "cial-b-u5-lesson-5-2",
  code: "5-2",
  title: "Respiration",
  goal: "I CAN describe aerobic and anaerobic respiration and their yields.",
  standards: ["9700 Unit 15: respiration"],
  vocabulary: [
    {
      term: "Aerobic respiration",
      definition: "Complete oxidation of glucose using oxygen → max ATP.",
    },
    {
      term: "Anaerobic respiration",
      definition:
        "Partial oxidation without oxygen → less ATP + lactate/ethanol.",
    },
    {
      term: "Glycolysis",
      definition:
        "Glucose → pyruvate, producing small ATP — occurs in cytoplasm.",
    },
    {
      term: "Krebs cycle",
      definition: "Series of reactions producing NADH/FADH₂ — in mitochondria.",
    },
    {
      term: "Electron transport chain",
      definition: "Produces most ATP via oxidative phosphorylation.",
    },
    {
      term: "Lactate",
      definition:
        "Product of anaerobic respiration in animals; causes muscle fatigue.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u5-aerobic",
      title: "Aerobic respiration",
      skill: "Describe the stages and ATP yield of aerobic respiration.",
      lesson: {
        sections: [
          {
            heading: "Overview",
            body: "Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36 ATP. Occurs in cytoplasm (glycolysis) and mitochondria (Krebs + ETC).",
          },
          {
            heading: "Glycolysis",
            body: "Glucose → 2 pyruvate in cytoplasm. Net gain: 2 ATP + 2 NADH. Doesn't require oxygen — first stage of both aerobic and anaerobic.",
          },
          {
            heading: "Mitochondrial stages",
            body: "Pyruvate → acetyl-CoA (CO₂ released). Krebs cycle: produces NADH, FADH₂, CO₂, small ATP. Electron transport chain: NADH/FADH₂ donate electrons → H⁺ gradient → ATP synthase → ~30 ATP. Oxygen is final electron acceptor.",
          },
        ],
        keyFormulas: [
          {
            name: "Aerobic",
            statement: "C₆H₁₂O₆+6O₂→6CO₂+6H₂O+~36ATP; glycolysis+Krebs+ETC.",
          },
        ],
        workedExample: {
          problem: "Where does most ATP come from in aerobic respiration?",
          solution:
            "Electron transport chain (~30 of 36 ATP) via oxidative phosphorylation.",
        },
      },
      questions: [
        {
          id: "cial-b-u5-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the overall equation for aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C₆H₁₂O₆ → 2C₃H₆O₃ + ATP" },
              { id: "b", text: "6CO₂ + 6H₂O → C₆H₁₂O₆ + O₂" },
              { id: "c", text: "C₆H₁₂O₆ + O₂ → C₂H₅OH + CO₂" },
              { id: "d", text: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aerobic respiration",
                statement: "Glucose + oxygen → CO₂ + water + ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Complete oxidation with O₂.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Glucose+O₂→CO₂+H₂O+ATP",
            commonErrors: ["Confusing with photosynthesis (reversed)."],
          },
        },
        {
          id: "cial-b-u5-ar-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where does glycolysis occur?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycolysis",
                statement: "Occurs in cytoplasm; glucose→pyruvate.",
              },
            ],
            steps: [
              { reasoning: "Cytoplasm.", marks: 1, markCode: "M" },
              { reasoning: "Glucose → 2 pyruvate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cytoplasm; glucose→pyruvate.",
            commonErrors: ["Saying mitochondria."],
          },
        },
        {
          id: "cial-b-u5-ar-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does aerobic respiration produce more ATP than anaerobic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ATP yield",
                statement:
                  "Oxygen allows full oxidation via ETC → ~36 ATP vs 2 anaerobic.",
              },
            ],
            steps: [
              {
                reasoning: "Oxygen = final electron acceptor in ETC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ETC produces ~30 ATP via oxidative phosphorylation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anaerobic lacks ETC → only glycolysis ATP.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oxygen enables ETC → ~36 ATP vs 2 anaerobic.",
            commonErrors: ["Thinking anaerobic is just slower."],
          },
        },
        {
          id: "cial-b-u5-ar-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Aerobic respiration.",
          parts: [
            { label: "a", prompt: "Overall equation?", marks: 2 },
            { label: "b", prompt: "Where does glycolysis occur?", marks: 1 },
            { label: "c", prompt: "Why more ATP than anaerobic?", marks: 3 },
            { label: "d", prompt: "Name the mitochondrial stages.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aerobic",
                statement: "Equation+location+yield+stages.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "C₆H₁₂O₆+6O₂→6CO₂+6H₂O+ATP.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct products.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Cytoplasm.", marks: 1, markCode: "M" },
              {
                part: "c",
                reasoning: "Oxygen=final acceptor.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "ETC produces most ATP.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "36 vs 2 ATP.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Krebs cycle named.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "ETC named.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) equation (b) cytoplasm (c) O₂→ETC→36ATP (d) Krebs+ETC",
          },
        },
        {
          id: "cial-b-u5-ar-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation represents aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6CO_2+6H_2O\\rightarrow C_6H_{12}O_6+6O_2$" },
              { id: "b", text: "$C_6H_{12}O_6\\rightarrow2C_3H_6O_3+2ATP$" },
              { id: "c", text: "$C_6H_{12}O_6\\rightarrow2C_2H_5OH+2CO_2+2ATP$" },
              { id: "d", text: "$C_6H_{12}O_6+6O_2\\rightarrow6CO_2+6H_2O+ATP$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aerobic respiration",
                statement: "Glucose is fully oxidised using oxygen to carbon dioxide, water and ATP.",
              },
            ],
            steps: [
              { reasoning: "Aerobic respiration consumes oxygen and produces $CO_2$, water and ATP.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $C_6H_{12}O_6+6O_2\\rightarrow6CO_2+6H_2O+ATP$",
            commonErrors: ["Confusing respiration with photosynthesis."],
          },
        },
        {
          id: "cial-b-u5-ar-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does the Krebs cycle occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the nucleus" },
              { id: "b", text: "In the mitochondrial matrix" },
              { id: "c", text: "In the cytoplasm" },
              { id: "d", text: "In lysosomes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Krebs cycle",
                statement: "The Krebs cycle occurs in the mitochondrial matrix.",
              },
            ],
            steps: [
              { reasoning: "Krebs cycle is a mitochondrial stage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mitochondrial matrix",
            commonErrors: ["Placing Krebs cycle in cytoplasm."],
          },
        },
        {
          id: "cial-b-u5-ar-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which stage of aerobic respiration produces the largest amount of ATP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glycolysis only" },
              { id: "b", text: "Translation" },
              { id: "c", text: "Electron transport chain" },
              { id: "d", text: "Photolysis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ATP yield",
                statement: "Oxidative phosphorylation in the electron transport chain produces most ATP.",
              },
            ],
            steps: [
              { reasoning: "The ETC generates about 30 ATP per glucose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Electron transport chain",
            commonErrors: ["Thinking glycolysis produces most ATP."],
          },
        },
        {
          id: "cial-b-u5-ar-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the final electron acceptor in aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Glucose" },
              { id: "d", text: "Lactate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron acceptor",
                statement: "Oxygen accepts electrons at the end of the electron transport chain.",
              },
            ],
            steps: [
              { reasoning: "Oxygen forms water after accepting electrons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen",
            commonErrors: ["Confusing oxygen with carbon dioxide."],
          },
        },
        {
          id: "cial-b-u5-ar-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which products are formed in aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide, water and ATP" },
              { id: "b", text: "Lactate and ATP" },
              { id: "c", text: "Oxygen and glucose" },
              { id: "d", text: "Ethanol and carbon dioxide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aerobic products",
                statement: "Aerobic respiration produces $CO_2$, water and ATP.",
              },
            ],
            steps: [
              { reasoning: "Complete oxidation gives $CO_2$ and water.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $CO_2$, water and ATP",
            commonErrors: ["Naming anaerobic products."],
          },
        },
        {
          id: "cial-b-u5-ar-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What happens to pyruvate before entering the Krebs cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is converted directly to glucose" },
              { id: "b", text: "It becomes ethanol" },
              { id: "c", text: "It is converted to acetyl-CoA with $CO_2$ release" },
              { id: "d", text: "It is unchanged" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pyruvate oxidation",
                statement: "Pyruvate is converted to acetyl-CoA, releasing $CO_2$ and reducing NAD.",
              },
            ],
            steps: [
              { reasoning: "Acetyl-CoA enters the Krebs cycle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Converted to acetyl-CoA",
            commonErrors: ["Skipping the link reaction."],
          },
        },
        {
          id: "cial-b-u5-ar-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Aerobic respiration yields about $36$ ATP per glucose and anaerobic respiration about $2$ ATP per glucose. Calculate the difference in ATP yield per glucose.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 34 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ATP yield comparison",
                statement: "Difference $=$ aerobic ATP $-$ anaerobic ATP.",
              },
            ],
            steps: [
              { reasoning: "$36-2=34$ ATP per glucose.", marks: 1, markCode: "M" },
              { reasoning: "The aerobic advantage is 34 ATP per glucose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "34 ATP",
            commonErrors: ["Adding yields instead of subtracting."],
          },
        },
        {
          id: "cial-b-u5-ar-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using the approximate yields of $36$ ATP per glucose aerobically and $2$ ATP per glucose anaerobically, calculate the ATP produced from 5 glucose molecules aerobically.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 180 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ATP calculation",
                statement: "ATP $=$ number of glucose molecules $\\times$ ATP per glucose.",
              },
            ],
            steps: [
              { reasoning: "$5 \\times 36 = 180$ ATP.", marks: 1, markCode: "M" },
              { reasoning: "The aerobic yield is 180 ATP.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "180 ATP",
            commonErrors: ["Using the anaerobic yield."],
          },
        },
        {
          id: "cial-b-u5-ar-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the net ATP yield from glycolysis per glucose molecule?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycolysis",
                statement: "Glycolysis produces a net gain of 2 ATP and 2 NADH per glucose.",
              },
            ],
            steps: [
              { reasoning: "Glycolysis yields a net 2 ATP.", marks: 1, markCode: "M" },
              { reasoning: "The answer is 2 ATP.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 ATP",
            commonErrors: ["Counting gross ATP without subtracting investment."],
          },
        },
        {
          id: "cial-b-u5-ar-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The equation for aerobic respiration uses 6 oxygen molecules per glucose. How many oxygen molecules are required to respire 6 glucose molecules completely?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 36 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Aerobic equation",
                statement: "Each glucose requires 6 $O_2$ molecules.",
              },
            ],
            steps: [
              { reasoning: "$6 \\times 6 = 36$ oxygen molecules.", marks: 1, markCode: "M" },
              { reasoning: "36 $O_2$ molecules are required.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 oxygen molecules",
            commonErrors: ["Using 1 oxygen per glucose."],
          },
        },
        {
          id: "cial-b-u5-ar-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A cell produces approximately $72$ ATP by aerobic respiration. Using about $36$ ATP per glucose, calculate the number of glucose molecules respired.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ATP calculation",
                statement: "Glucose molecules $=$ ATP produced $\\div$ ATP per glucose.",
              },
            ],
            steps: [
              { reasoning: "$72 \\div 36 = 2$ glucose molecules.", marks: 1, markCode: "M" },
              { reasoning: "Two glucose molecules were respired.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 glucose molecules",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "cial-b-u5-ar-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the main stages of aerobic respiration and where each occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aerobic stages",
                statement: "Glycolysis occurs in cytoplasm; pyruvate oxidation, Krebs cycle and electron transport occur in mitochondria.",
              },
            ],
            steps: [
              { reasoning: "Glycolysis in cytoplasm converts glucose to pyruvate.", marks: 1, markCode: "M" },
              { reasoning: "Pyruvate oxidation and Krebs cycle occur in mitochondria.", marks: 1, markCode: "M" },
              { reasoning: "Electron transport chain produces most ATP using oxygen as final acceptor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glycolysis in cytoplasm; mitochondrial stages produce most ATP.",
            commonErrors: ["Placing all stages in mitochondria."],
          },
        },
      ],
    },
    {
      id: "cial-b-u5-anaerobic",
      title: "Anaerobic respiration",
      skill: "Describe anaerobic respiration in animals and microorganisms.",
      lesson: {
        sections: [
          {
            heading: "Animal anaerobic respiration",
            body: "Glucose → 2 lactate + 2 ATP (no oxygen). Occurs during vigorous exercise when O₂ demand exceeds supply. Lactate causes muscle fatigue and is transported to liver for conversion back to glucose (Cori cycle).",
          },
          {
            heading: "Microbial anaerobic respiration",
            body: "Yeast: glucose → ethanol + CO₂ + 2 ATP (fermentation). Bacteria: various products. Used in brewing, bread-making, yoghurt production.",
          },
          {
            heading: "Comparing aerobic and anaerobic",
            body: "Both start with glycolysis (2 ATP). Aerobic continues to mitochondria for ~36 ATP; anaerobic stops at lactate/ethanol for only 2 ATP. Anaerobic is rapid but inefficient.",
          },
        ],
        keyFormulas: [
          {
            name: "Anaerobic",
            statement:
              "Animals: glucose→lactate+2ATP; yeast: glucose→ethanol+CO₂+2ATP.",
          },
        ],
        workedExample: {
          problem: "Why do muscles fatigue during sprinting?",
          solution:
            "O₂ demand exceeds supply → anaerobic respiration → lactate accumulates → muscle pain/fatigue.",
        },
      },
      questions: [
        {
          id: "cial-b-u5-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of anaerobic respiration in animals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂ + water" },
              { id: "b", text: "Oxygen + ATP" },
              { id: "c", text: "Lactate + ATP" },
              { id: "d", text: "Ethanol + CO₂" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Animal anaerobic",
                statement: "Glucose→lactate+2ATP.",
              },
            ],
            steps: [
              { reasoning: "Lactate in animals.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lactate + ATP",
            commonErrors: ["Confusing with yeast (ethanol)."],
          },
        },
        {
          id: "cial-b-u5-an-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does anaerobic respiration produce less ATP?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anaerobic yield",
                statement:
                  "No oxygen → no ETC → only glycolysis ATP (2 vs 36).",
              },
            ],
            steps: [
              { reasoning: "Stops after glycolysis.", marks: 1, markCode: "M" },
              { reasoning: "Only 2 ATP vs 36.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No oxygen → no ETC → only 2 ATP.",
            commonErrors: ["Thinking it's just slower."],
          },
        },
        {
          id: "cial-b-u5-an-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare anaerobic respiration in animals and yeast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anaerobic comparison",
                statement: "Animals=lactate; yeast=ethanol+CO₂; both 2 ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Animals produce lactate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Yeast produces ethanol+CO₂.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both yield only 2 ATP.", marks: 1, markCode: "M" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Animals→lactate; yeast→ethanol+CO₂; both 2 ATP.",
            commonErrors: ["Same products for both."],
          },
        },
        {
          id: "cial-b-u5-an-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Anaerobic respiration.",
          parts: [
            { label: "a", prompt: "Animal products?", marks: 1 },
            { label: "b", prompt: "Yeast products?", marks: 1 },
            { label: "c", prompt: "Why less ATP?", marks: 3 },
            { label: "d", prompt: "When does anaerobic occur?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anaerobic",
                statement: "Products+yield+conditions.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Lactate+ATP.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Ethanol+CO₂+ATP.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "No oxygen→no ETC.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Only glycolysis ATP.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "2 vs 36 ATP.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "O₂ demand exceeds supply.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Vigorous exercise.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Lactate accumulates.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Fatigue results.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) lactate (b) ethanol+CO₂ (c) no ETC→2ATP (d) exercise→fatigue",
          },
        },
        {
          id: "cial-b-u5-an-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main product of anaerobic respiration in human muscle cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol" },
              { id: "b", text: "Lactate" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Starch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Animal anaerobic respiration",
                statement: "Animal cells produce lactate during anaerobic respiration.",
              },
            ],
            steps: [
              { reasoning: "Lactate accumulates when oxygen supply is insufficient.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lactate",
            commonErrors: ["Choosing ethanol, which is produced by yeast."],
          },
        },
        {
          id: "cial-b-u5-an-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which products are formed when yeast respires anaerobically?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose and ATP only" },
              { id: "b", text: "Water and oxygen" },
              { id: "c", text: "Lactate only" },
              { id: "d", text: "Ethanol and carbon dioxide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Yeast fermentation",
                statement: "Yeast produces ethanol and carbon dioxide anaerobically.",
              },
            ],
            steps: [
              { reasoning: "Alcoholic fermentation gives ethanol and $CO_2$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ethanol and carbon dioxide",
            commonErrors: ["Confusing yeast with animal cells."],
          },
        },
        {
          id: "cial-b-u5-an-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When does anaerobic respiration occur in human muscle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never in humans" },
              { id: "b", text: "When oxygen demand exceeds oxygen supply" },
              { id: "c", text: "When ATP is abundant" },
              { id: "d", text: "Only during sleep" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anaerobic conditions",
                statement: "Anaerobic respiration occurs when oxygen delivery cannot meet demand.",
              },
            ],
            steps: [
              { reasoning: "Vigorous exercise can create oxygen deficit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen demand exceeds supply",
            commonErrors: ["Thinking anaerobic respiration never occurs in humans."],
          },
        },
        {
          id: "cial-b-u5-an-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does anaerobic respiration produce only a small amount of ATP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The electron transport chain runs faster" },
              { id: "b", text: "All ATP is used immediately" },
              { id: "c", text: "Glucose is not used" },
              { id: "d", text: "Only glycolysis occurs because oxygen is absent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anaerobic yield",
                statement: "Without oxygen, the electron transport chain cannot operate, leaving only glycolysis ATP.",
              },
            ],
            steps: [
              { reasoning: "No oxygen means no oxidative phosphorylation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Only glycolysis occurs",
            commonErrors: ["Saying anaerobic respiration produces no ATP."],
          },
        },
        {
          id: "cial-b-u5-an-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens to lactate produced in muscles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is excreted unchanged in urine immediately" },
              { id: "b", text: "It is transported to the liver for conversion back to glucose" },
              { id: "c", text: "It becomes oxygen" },
              { id: "d", text: "It remains forever in muscle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lactate removal",
                statement: "Lactate is transported to the liver for conversion back to glucose.",
              },
            ],
            steps: [
              { reasoning: "The Cori cycle returns lactate to glucose metabolism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Converted in liver",
            commonErrors: ["Saying lactate is a permanent waste product."],
          },
        },
        {
          id: "cial-b-u5-an-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which industrial process uses anaerobic respiration in yeast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis" },
              { id: "b", text: "Bread-making and brewing" },
              { id: "c", text: "Osmosis" },
              { id: "d", text: "Diffusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Yeast fermentation",
                statement: "Ethanol and $CO_2$ production by yeast is used in brewing and bread-making.",
              },
            ],
            steps: [
              { reasoning: "Fermentation produces gas and alcohol.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Bread-making and brewing",
            commonErrors: ["Confusing respiration with photosynthesis."],
          },
        },
        {
          id: "cial-b-u5-an-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Anaerobic respiration yields about $2$ ATP per glucose. Calculate the total ATP produced from 10 glucose molecules.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ATP calculation",
                statement: "ATP $=$ glucose molecules $\\times$ ATP per glucose.",
              },
            ],
            steps: [
              { reasoning: "$10 \\times 2 = 20$ ATP.", marks: 1, markCode: "M" },
              { reasoning: "The anaerobic yield is 20 ATP.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 ATP",
            commonErrors: ["Using the aerobic yield of 36."],
          },
        },
        {
          id: "cial-b-u5-an-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Using approximate yields of $36$ ATP aerobically and $2$ ATP anaerobically per glucose, calculate how many times greater the aerobic yield is than the anaerobic yield.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 18 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Yield ratio",
                statement: "Ratio $=$ aerobic ATP $\\div$ anaerobic ATP.",
              },
            ],
            steps: [
              { reasoning: "$36 \\div 2 = 18$.", marks: 1, markCode: "M" },
              { reasoning: "Aerobic respiration yields 18 times as much ATP per glucose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18 times",
            commonErrors: ["Subtracting yields instead of finding the ratio."],
          },
        },
        {
          id: "cial-b-u5-an-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 5 glucose molecules are respired anaerobically, how many ATP molecules are produced using the approximate yield of $2$ ATP per glucose?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ATP calculation",
                statement: "ATP $=$ number of glucose molecules $\\times 2$.",
              },
            ],
            steps: [
              { reasoning: "$5 \\times 2 = 10$ ATP.", marks: 1, markCode: "M" },
              { reasoning: "The yield is 10 ATP.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 ATP",
            commonErrors: ["Using 36 ATP per glucose."],
          },
        },
        {
          id: "cial-b-u5-an-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In yeast fermentation, one glucose molecule produces ethanol and carbon dioxide. How many carbon dioxide molecules are produced per glucose molecule?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alcoholic fermentation",
                statement: "Glucose is converted to ethanol and one carbon dioxide molecule per glucose.",
              },
            ],
            steps: [
              { reasoning: "The fermentation equation has one $CO_2$ per glucose.", marks: 1, markCode: "M" },
              { reasoning: "Therefore the answer is 1 molecule.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 carbon dioxide molecule",
            commonErrors: ["Counting six $CO_2$ molecules from aerobic respiration."],
          },
        },
        {
          id: "cial-b-u5-an-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Animal anaerobic respiration converts one glucose molecule into two lactate molecules and two ATP. How many lactate molecules are produced from 4 glucose molecules?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Lactate production",
                statement: "Each glucose produces 2 lactate molecules.",
              },
            ],
            steps: [
              { reasoning: "$4 \\times 2 = 8$ lactate molecules.", marks: 1, markCode: "M" },
              { reasoning: "Eight lactate molecules are produced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 lactate molecules",
            commonErrors: ["Answering 4 by counting glucose molecules."],
          },
        },
        {
          id: "cial-b-u5-an-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why anaerobic respiration can be useful to muscle cells during vigorous exercise despite producing little ATP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anaerobic respiration",
                statement: "Anaerobic respiration rapidly regenerates ATP without oxygen but produces lactate.",
              },
            ],
            steps: [
              { reasoning: "It does not require oxygen, so it can continue when oxygen supply is limited.", marks: 1, markCode: "M" },
              { reasoning: "Glycolysis still produces ATP quickly for immediate muscle contraction.", marks: 1, markCode: "M" },
              { reasoning: "Lactate accumulation contributes to fatigue but the ATP allows short bursts of activity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anaerobic respiration provides rapid ATP without oxygen, enabling short bursts despite lactate formation.",
            commonErrors: ["Claiming anaerobic respiration is more efficient than aerobic."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u5-respiration-notes",
      title: "Respiration — revision notes",
      summary:
        "Aerobic and anaerobic respiration: stages, locations and ATP yields.",
      sections: [
        {
          heading: "Aerobic",
          body: "Cytoplasm: glycolysis (2 ATP). Mitochondria: pyruvate→Krebs→ETC (~30 ATP). Total ~36 ATP. Oxygen = final electron acceptor.",
        },
        {
          heading: "Anaerobic",
          body: "Animals: glucose→lactate+2ATP. Yeast: glucose→ethanol+CO₂+2ATP. Occurs when O₂ demand exceeds supply (exercise).",
        },
        {
          heading: "Exam checklist",
          body: "Can you write equations? Name locations? Compare yields? Explain when anaerobic occurs?",
        },
      ],
    },
  ],
};
