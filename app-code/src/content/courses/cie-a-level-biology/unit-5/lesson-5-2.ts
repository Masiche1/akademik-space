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
              { id: "a", text: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP" },
              { id: "b", text: "C₆H₁₂O₆ → 2C₃H₆O₃ + ATP" },
              { id: "c", text: "C₆H₁₂O₆ + O₂ → C₂H₅OH + CO₂" },
              { id: "d", text: "6CO₂ + 6H₂O → C₆H₁₂O₆ + O₂" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Lactate + ATP" },
              { id: "b", text: "Ethanol + CO₂" },
              { id: "c", text: "CO₂ + water" },
              { id: "d", text: "Oxygen + ATP" },
            ],
            correctChoiceId: "a",
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
