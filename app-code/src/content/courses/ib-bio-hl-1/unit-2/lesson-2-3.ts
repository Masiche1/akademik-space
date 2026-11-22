import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "biohl-u2-lesson-2-3",
  code: "2-3",
  title: "Photosynthesis: The Calvin Cycle and Limiting Factors",
  goal: "I CAN describe the three stages of the Calvin cycle and its ATP and NADPH requirements, and analyse how light intensity, carbon dioxide concentration and temperature act as limiting factors.",
  standards: ["Paper 1", "Paper 2", "AHL B.2"],
  vocabulary: [
    {
      term: "RuBisCO",
      definition:
        "Ribulose-1,5-bisphosphate carboxylase/oxygenase — the enzyme that catalyses the fixation of $CO_2$ onto RuBP in the Calvin cycle.",
    },
    {
      term: "RuBP",
      definition:
        "Ribulose-1,5-bisphosphate, the five-carbon acceptor molecule that RuBisCO carboxylates to begin carbon fixation.",
    },
    {
      term: "3-phosphoglycerate (3-PGA)",
      definition:
        "The three-carbon product of $CO_2$ fixation, which is phosphorylated and reduced to glyceraldehyde-3-phosphate (G3P).",
    },
    {
      term: "G3P",
      definition:
        "Glyceraldehyde-3-phosphate, the three-carbon sugar produced by the Calvin cycle that can be exported to make glucose or recycled to regenerate RuBP.",
    },
    {
      term: "Limiting factor",
      definition:
        "The environmental factor, when in shortest supply, that restricts the rate of photosynthesis even when others are in excess.",
    },
    {
      term: "Compensation point",
      definition:
        "The light intensity at which the rate of photosynthesis equals the rate of respiration, so there is no net carbon gain.",
    },
  ],
  concepts: [
    {
      id: "biohl-u2-calvin-cycle",
      title: "The Calvin cycle in detail",
      skill:
        "Describe carboxylation, reduction and RuBP regeneration, and calculate the ATP and NADPH requirements for fixing carbon dioxide.",
      lesson: {
        sections: [
          {
            heading: "Carboxylation and reduction",
            body: "In the stroma, RuBisCO attaches $CO_2$ to RuBP (a 5-carbon sugar), producing two molecules of the unstable 6-carbon intermediate that immediately splits into two molecules of 3-PGA. Each 3-PGA is then phosphorylated by ATP and reduced by NADPH to G3P — the reduction stage. Of every six G3P produced, one is exported to make glucose and five are recycled through a series of reactions (using further ATP) to regenerate three RuBP molecules, allowing the cycle to continue.",
          },
          {
            heading: "Stoichiometry of carbon fixation",
            body: "Fixing one $CO_2$ requires 1 RuBisCO reaction, 3 ATP (2 for reduction of 3-PGA plus share of RuBP regeneration) and 2 NADPH. Producing one glucose requires six turns of the cycle: $6CO_2$, $18$ ATP and $12$ NADPH. This is why the light reactions must supply ATP and NADPH in approximately a 3:2 ratio.",
          },
          {
            heading: "Photorespiration",
            body: "RuBisCO can also bind oxygen instead of carbon dioxide, especially at high temperatures and low $CO_2$. This oxygenase reaction produces phosphoglycolate, which must be recycled at the cost of ATP and NADPH and releases $CO_2$ — a wasteful process called photorespiration. C4 and CAM plants have evolved mechanisms to concentrate $CO_2$ around RuBisCO and suppress photorespiration.",
          },
        ],
        keyFormulas: [
          {
            name: "Per-$CO_2$ cost",
            statement: "Each $CO_2$ fixed consumes $3$ ATP and $2$ NADPH.",
          },
          {
            name: "Glucose cost",
            statement:
              "One glucose requires $6$ turns: $6\\,CO_2 + 18\\,ATP + 12\\,NADPH$.",
          },
          {
            name: "RuBP balance",
            statement:
              "Six G3P are produced per three $CO_2$ fixed; five G3P regenerate three RuBP and one is exported.",
          },
        ],
        workedExample: {
          problem:
            "Calculate the ATP and NADPH required to fix 9 molecules of $CO_2$ in the Calvin cycle.",
          solution:
            "Each $CO_2$ costs $3$ ATP and $2$ NADPH, so $9 \\times 3 = 27$ ATP and $9 \\times 2 = 18$ NADPH.",
        },
      },
      questions: [
        {
          id: "biohl-u2-calvin-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which enzyme catalyses the fixation of carbon dioxide onto RuBP in the Calvin cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA polymerase" },
              { id: "b", text: "RuBisCO" },
              { id: "c", text: "ATP synthase" },
              { id: "d", text: "$NADP^+$ reductase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RuBisCO",
                statement:
                  "Ribulose-1,5-bisphosphate carboxylase/oxygenase, the enzyme that fixes $CO_2$ onto RuBP.",
              },
            ],
            steps: [
              {
                reasoning: "RuBisCO catalyses the carboxylation of RuBP.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other options are unrelated to carbon fixation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** RuBisCO",
            commonErrors: [
              "Confusing RuBisCO with the light-reaction enzymes.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The Calvin cycle fixes 12 molecules of $CO_2$. Each $CO_2$ fixed consumes 3 ATP and 2 NADPH. Calculate the total ATP and total NADPH required.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total ATP", answer: 36 },
              { label: "Total NADPH", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Per-$CO_2$ cost",
                statement: "$3$ ATP and $2$ NADPH per $CO_2$ fixed.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply the per-$CO_2$ costs by 12.",
                working: "12 \\times 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate ATP.",
                working: "36 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate NADPH.",
                working: "12 \\times 2 = 24 \\text{ NADPH}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$36$ ATP; $24$ NADPH",
            commonErrors: [
              "Using the glucose-level figures (18 ATP, 12 NADPH) without scaling for 12 $CO_2$.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Calvin cycle regenerates RuBP and why this regeneration is essential for continuous carbon fixation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "RuBP regeneration",
                statement:
                  "Five of every six G3P produced are rearranged (using ATP) back into three RuBP molecules.",
              },
              {
                kind: "principle",
                name: "Cycle continuity",
                statement:
                  "RuBP is the $CO_2$ acceptor; without regeneration the cycle would run out of acceptor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For every three $CO_2$ fixed, six G3P are produced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Five G3P are converted back into three RuBP through a series of reactions.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "One G3P is exported for glucose synthesis.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Regeneration restores the acceptor so the cycle can continue fixing more $CO_2$.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Five of six G3P are recycled to three RuBP, maintaining the $CO_2$ acceptor pool for continuous fixation.",
            commonErrors: [
              "Claiming all six G3P go to glucose — only one is exported per three $CO_2$ fixed.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The Calvin cycle fixes carbon dioxide into carbohydrate in the stroma of chloroplasts. Each $CO_2$ fixed requires 3 ATP and 2 NADPH.",
          parts: [
            {
              label: "a",
              prompt: "State the role of RuBisCO in the cycle.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the ATP and NADPH needed to produce one glucose, which requires fixation of 6 $CO_2$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the light reactions must supply ATP and NADPH in a ratio close to 3:2 for efficient carbon fixation.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Suggest one consequence for the Calvin cycle if NADPH supply falls while ATP supply stays constant.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RuBisCO",
                statement:
                  "The enzyme that carboxylates RuBP, the first committed step of carbon fixation.",
              },
              {
                kind: "formula",
                name: "Glucose cost",
                statement: "$6\\,CO_2$ require $18$ ATP and $12$ NADPH.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "RuBisCO catalyses the attachment of $CO_2$ to RuBP.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "It is the primary carboxylating enzyme of the Calvin cycle.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Scale the per-$CO_2$ costs by 6.",
                working:
                  "6 \\times 3 = 18 \\text{ ATP};\\ 6 \\times 2 = 12 \\text{ NADPH}",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Evaluate.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Each $CO_2$ needs 3 ATP and 2 NADPH, a 3:2 ratio.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "If the light reactions produced a different ratio, one product would accumulate unused or run out, slowing fixation.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "3-PGA cannot be reduced to G3P without NADPH.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Carbon fixation stalls even though ATP is available, reducing carbohydrate production.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Catalyses $CO_2$ fixation onto RuBP. (b) $18$ ATP, $12$ NADPH. (c) Matches the 3:2 consumption ratio. (d) Reduction of 3-PGA halts; fixation slows.",
            commonErrors: [
              "In (b), forgetting to multiply by 6.",
              "In (d), claiming ATP shortage is the problem when NADPH is the limiting input.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What does RuBisCO catalyse when it acts as a carboxylase in the Calvin cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The phosphorylation of ADP" },
              { id: "b", text: "The photolysis of water" },
              { id: "c", text: "The reduction of 3-PGA to G3P" },
              { id: "d", text: "The attachment of $CO_2$ to RuBP" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RuBisCO carboxylase activity",
                statement:
                  "RuBisCO catalyses the carboxylation of RuBP by $CO_2$, producing two molecules of 3-PGA.",
              },
            ],
            steps: [
              {
                reasoning:
                  "RuBP is the five-carbon acceptor molecule in the Calvin cycle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Carboxylation adds $CO_2$ and the unstable six-carbon intermediate splits into two 3-PGA molecules.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** It attaches $CO_2$ to RuBP.",
            commonErrors: [
              "Confusing carboxylation with the reduction of 3-PGA.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When one RuBP molecule is carboxylated by RuBisCO, what is the immediate carbon product?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One molecule of RuBP" },
              { id: "b", text: "One molecule of glucose" },
              { id: "c", text: "Two molecules of G3P directly" },
              { id: "d", text: "Two molecules of 3-phosphoglycerate (3-PGA)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Carboxylation product",
                statement:
                  "RuBP plus $CO_2$ forms an unstable six-carbon intermediate that splits into two 3-PGA molecules.",
              },
            ],
            steps: [
              {
                reasoning: "RuBP has five carbons and $CO_2$ adds one carbon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The six-carbon intermediate immediately splits into two three-carbon 3-PGA molecules.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Two molecules of 3-PGA",
            commonErrors: [
              "Thinking the product is glucose directly — glucose is made later from exported G3P.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the reduction stage of the Calvin cycle, what converts 3-PGA into G3P?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen release" },
              {
                id: "b",
                text: "ATP phosphorylation followed by NADPH reduction",
              },
              { id: "c", text: "Cyclic electron flow alone" },
              { id: "d", text: "Photolysis of water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reduction stage",
                statement:
                  "3-PGA is phosphorylated by ATP and reduced by NADPH to form G3P.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ATP supplies the phosphate needed to form 1,3-bisphosphoglycerate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "NADPH provides the reducing power to convert the intermediate to G3P.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** ATP phosphorylation and NADPH reduction",
            commonErrors: [
              "Claiming RuBisCO reduces 3-PGA — RuBisCO catalyses carboxylation, not reduction.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is photorespiration and when is it most likely to occur?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Photosynthesis uses extra oxygen to make more ATP; it decreases at high temperature",
              },
              {
                id: "b",
                text: "The Calvin cycle stops completely; it occurs only in the dark",
              },
              {
                id: "c",
                text: "RuBisCO fixes $CO_2$ faster; it occurs only at low temperature",
              },
              {
                id: "d",
                text: "RuBisCO uses oxygen instead of $CO_2$, wasting ATP and NADPH; it increases at high temperature, high light and low $CO_2$",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photorespiration",
                statement:
                  "RuBisCO oxygenase activity produces phosphoglycolate and releases $CO_2$, consuming energy without net carbon fixation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At high temperature and low $CO_2$, RuBisCO increasingly binds oxygen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Recycling phosphoglycolate costs ATP and NADPH and releases $CO_2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Wasteful oxygenase activity of RuBisCO, favoured at high temperature and low $CO_2$.",
            commonErrors: [
              "Describing photorespiration as beneficial carbon fixation.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "How do C4 and CAM plants reduce the rate of photorespiration?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They eliminate RuBisCO from their chloroplasts",
              },
              {
                id: "b",
                text: "They increase oxygen concentration in leaf cells",
              },
              {
                id: "c",
                text: "They concentrate $CO_2$ around RuBisCO so that carboxylation is favoured over oxygenation",
              },
              {
                id: "d",
                text: "They photosynthesise only at night using light",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "C4 and CAM adaptation",
                statement:
                  "C4 and CAM plants raise the $CO_2$:O_2$ ratio at RuBisCO, suppressing photorespiration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C4 plants separate initial $CO_2$ fixation from the Calvin cycle spatially; CAM plants separate them temporally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both mechanisms deliver high $CO_2$ to RuBisCO, favouring carboxylation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** They concentrate $CO_2$ around RuBisCO.",
            commonErrors: [
              "Claiming these plants lack RuBisCO or photosynthesis.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q10",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "The Calvin cycle fixes 5 molecules of $CO_2$. Calculate the total ATP and total NADPH required.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total ATP", answer: 15 },
              { label: "Total NADPH", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Per-$CO_2$ cost",
                statement: "Each $CO_2$ fixed requires 3 ATP and 2 NADPH.",
              },
            ],
            steps: [
              {
                reasoning: "ATP is $5 \\times 3$.",
                working: "15 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $5 \\times 2$.",
                working: "10 \\text{ NADPH}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15$ ATP and $10$ NADPH",
            commonErrors: [
              "Using the glucose-level values without scaling to 5 $CO_2$.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "One molecule of glucose requires fixation of 6 molecules of $CO_2$. Calculate the number of Calvin-cycle turns, the ATP required and the NADPH required.",
          response: {
            type: "numeric",
            parts: [
              { label: "Calvin-cycle turns", answer: 6 },
              { label: "ATP required", answer: 18 },
              { label: "NADPH required", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Glucose cost",
                statement: "$6CO_2$ require $18$ ATP and $12$ NADPH.",
              },
            ],
            steps: [
              {
                reasoning:
                  "One turn fixes one $CO_2$, so glucose needs 6 turns.",
                working: "6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ATP is $6 \\times 3$.",
                working: "18 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $6 \\times 2$.",
                working: "12 \\text{ NADPH}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$ turns, $18$ ATP and $12$ NADPH",
            commonErrors: [
              "Answering 3 turns because glucose has 6 carbons — each $CO_2$ needs one turn.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The Calvin cycle fixes 9 molecules of $CO_2$. Calculate the total ATP required, the total NADPH required, the total 3-PGA molecules produced and the total G3P molecules produced before allocation.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total ATP", answer: 27 },
              { label: "Total NADPH", answer: 18 },
              { label: "3-PGA molecules", answer: 18 },
              { label: "G3P molecules", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calvin-cycle stoichiometry",
                statement:
                  "Each $CO_2$ gives two 3-PGA and ultimately two G3P before the five-to-one recycling allocation.",
              },
            ],
            steps: [
              {
                reasoning: "ATP is $9 \\times 3$.",
                working: "27 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $9 \\times 2$.",
                working: "18 \\text{ NADPH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each $CO_2$ gives 2 3-PGA, so 3-PGA is $9 \\times 2$.",
                working: "18 \\text{ 3-PGA}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Reduction of 3-PGA gives 2 G3P per $CO_2$, so G3P is also $18$.",
                working: "18 \\text{ G3P}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$27$ ATP, $18$ NADPH, $18$ 3-PGA and $18$ G3P",
            commonErrors: [
              "Counting only one G3P per $CO_2$ — two three-carbon products are formed per $CO_2$.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The Calvin cycle fixes 15 molecules of $CO_2$. Calculate the total ATP, the total NADPH and the number of G3P molecules produced before allocation.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total ATP", answer: 45 },
              { label: "Total NADPH", answer: 30 },
              { label: "G3P molecules", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Per-$CO_2$ cost",
                statement:
                  "Each $CO_2$ needs 3 ATP, 2 NADPH and yields 2 G3P before allocation.",
              },
            ],
            steps: [
              {
                reasoning: "ATP is $15 \\times 3$.",
                working: "45 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $15 \\times 2$.",
                working: "30 \\text{ NADPH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "G3P is $15 \\times 2$.",
                working: "30 \\text{ G3P}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$45$ ATP, $30$ NADPH and $30$ G3P",
            commonErrors: [
              "Reporting 15 G3P instead of 30 because each $CO_2$ gives two three-carbon products.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For every 3 molecules of $CO_2$ fixed, the Calvin cycle produces 6 G3P molecules, of which 5 are used to regenerate 3 RuBP and 1 is exported. If 9 molecules of $CO_2$ are fixed, calculate the G3P produced, the RuBP regenerated, the G3P exported and the RuBP molecules initially needed for fixation.",
          response: {
            type: "numeric",
            parts: [
              { label: "G3P produced", answer: 18 },
              { label: "RuBP regenerated", answer: 9 },
              { label: "G3P exported", answer: 3 },
              { label: "RuBP initially needed", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "RuBP balance",
                statement:
                  "Per 3 $CO_2$, 6 G3P are produced; 5 G3P regenerate 3 RuBP and 1 G3P is exported.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nine $CO_2$ is three sets of three, giving $3 \\times 6$ G3P.",
                working: "18 \\text{ G3P}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each set of three $CO_2$ regenerates 3 RuBP, so $3 \\times 3$ RuBP are regenerated.",
                working: "9 \\text{ RuBP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each set exports 1 G3P, giving $3 \\times 1$.",
                working: "3 \\text{ G3P}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "One RuBP is needed per $CO_2$, so 9 RuBP are initially required.",
                working: "9 \\text{ RuBP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$18$ G3P, $9$ RuBP regenerated, $3$ G3P exported and $9$ RuBP initially needed",
            commonErrors: [
              "Exporting all G3P instead of only one per three $CO_2$.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The Calvin cycle fixes 18 molecules of $CO_2$. Calculate the total ATP required, the total NADPH required, the total G3P produced, the G3P exported and the RuBP regenerated.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total ATP", answer: 54 },
              { label: "Total NADPH", answer: 36 },
              { label: "G3P produced", answer: 36 },
              { label: "G3P exported", answer: 6 },
              { label: "RuBP regenerated", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calvin-cycle scaling",
                statement:
                  "Per $CO_2$: 3 ATP, 2 NADPH and 2 G3P; per 3 $CO_2$: 3 RuBP regenerated and 1 G3P exported.",
              },
            ],
            steps: [
              {
                reasoning: "ATP is $18 \\times 3$.",
                working: "54 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $18 \\times 2$.",
                working: "36 \\text{ NADPH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "G3P produced is $18 \\times 2$.",
                working: "36 \\text{ G3P}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Eighteen $CO_2$ is six sets of three, exporting $6 \\times 1$ G3P.",
                working: "6 \\text{ G3P}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Each set of three regenerates 3 RuBP, giving $6 \\times 3$.",
                working: "18 \\text{ RuBP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$54$ ATP, $36$ NADPH, $36$ G3P, $6$ G3P exported and $18$ RuBP regenerated",
            commonErrors: [
              "Forgetting that only one G3P in five is exported for carbohydrate production.",
            ],
          },
        },
        {
          id: "biohl-u2-calvin-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The Calvin cycle fixes 24 molecules of $CO_2$. Calculate the total ATP required, the total NADPH required, the total G3P produced, the G3P exported for carbohydrate synthesis and the RuBP regenerated.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total ATP", answer: 72 },
              { label: "Total NADPH", answer: 48 },
              { label: "G3P produced", answer: 48 },
              { label: "G3P exported", answer: 8 },
              { label: "RuBP regenerated", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calvin-cycle scaling",
                statement:
                  "Per $CO_2$: 3 ATP, 2 NADPH and 2 G3P; per 3 $CO_2$: 3 RuBP regenerated and 1 G3P exported.",
              },
            ],
            steps: [
              {
                reasoning: "ATP is $24 \\times 3$.",
                working: "72 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $24 \\times 2$.",
                working: "48 \\text{ NADPH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "G3P produced is $24 \\times 2$.",
                working: "48 \\text{ G3P}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Twenty-four $CO_2$ is eight sets of three, exporting $8 \\times 1$ G3P.",
                working: "8 \\text{ G3P}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Each set regenerates 3 RuBP, giving $8 \\times 3$.",
                working: "24 \\text{ RuBP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$72$ ATP, $48$ NADPH, $48$ G3P, $8$ G3P exported and $24$ RuBP regenerated",
            commonErrors: [
              "Exporting all G3P instead of one per three $CO_2$.",
            ],
          },
        },
      ],
    },
    {
      id: "biohl-u2-limiting-factors",
      title: "Limiting factors and the compensation point",
      skill:
        "Explain how light intensity, carbon dioxide concentration and temperature limit photosynthesis, and interpret rate data including the compensation point.",
      lesson: {
        sections: [
          {
            heading: "Factors that limit the rate",
            body: "Photosynthesis is limited by whichever factor is in shortest supply. At low light intensity the rate rises almost linearly with light because the light reactions cannot supply enough ATP and NADPH; at high light the rate plateaus when the Calvin cycle or other factors become limiting. Carbon dioxide shows a similar saturating curve: increasing $CO_2$ raises the rate until RuBisCO is saturated. Temperature affects enzyme activity — the rate rises to an optimum then falls as enzymes denature.",
          },
          {
            heading: "Compensation point and data analysis",
            body: "Photosynthesis and respiration occur simultaneously. At the compensation point the rate of $CO_2$ uptake by photosynthesis equals the rate of $CO_2$ release by respiration, so there is no net exchange of carbon. Below this light intensity the plant loses carbon; above it the plant gains carbon. Interpreting such data requires reading rates at different light intensities and identifying where the photosynthesis and respiration curves cross.",
          },
          {
            heading: "Interactions between factors",
            body: "Limiting factors interact: raising light intensity only helps if $CO_2$ and temperature are also adequate, and warming only helps if light is sufficient. In practice the factor that is most limiting at a given moment sets the ceiling on the rate. Farmers and greenhouse growers exploit this by supplementing $CO_2$, adjusting temperature and providing optimal light to remove successive limitations.",
          },
        ],
        keyFormulas: [
          {
            name: "Net carbon exchange",
            statement:
              "Net $CO_2$ exchange $=$ photosynthetic uptake $-$ respiratory release.",
          },
          {
            name: "Compensation point",
            statement:
              "The light intensity at which photosynthetic rate equals respiratory rate (net exchange $= 0$).",
          },
          {
            name: "Limiting factor principle",
            statement:
              "The rate is set by the factor in shortest supply; increasing a non-limiting factor does not raise the rate.",
          },
        ],
        workedExample: {
          problem:
            "At a light intensity of 200 arbitrary units, a plant fixes $CO_2$ at 12 units per hour while respiration releases 4 units per hour. What is the net carbon exchange?",
          solution:
            "Net exchange $= 12 - 4 = 8$ units per hour uptake, so the plant is gaining carbon.",
        },
      },
      questions: [
        {
          id: "biohl-u2-limiting-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "At low light intensities, the rate of photosynthesis increases almost linearly with light intensity. The best explanation is that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Light directly increases the activity of RuBisCO",
              },
              {
                id: "b",
                text: "Higher light increases the $CO_2$ concentration in the leaf",
              },
              { id: "c", text: "Light converts $CO_2$ into glucose" },
              {
                id: "d",
                text: "Light limits the rate of the light-dependent reactions, which supply ATP and NADPH",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting factor",
                statement:
                  "The rate is limited by whichever factor is in shortest supply; at low light the light reactions are limiting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low light restricts ATP and NADPH production in the light reactions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increasing light raises these supplies, so the rate rises roughly proportionally.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Light limits the light reactions",
            commonErrors: [
              "Saying light acts directly on RuBisCO or $CO_2$ — it acts through the light-dependent reactions.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A plant is kept at a constant temperature and $CO_2$ concentration well above saturation while light intensity is increased. The rate of photosynthesis rises linearly at low light and then levels off at high light. Explain what the plateau indicates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting factor switch",
                statement:
                  "Once light is no longer limiting, another factor (here the Calvin cycle capacity or enzyme saturation) sets the maximum rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At low light the light reactions limit the supply of ATP and NADPH, so the rate rises with light.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "At high light the light reactions can supply enough ATP and NADPH.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The plateau shows a new limiting factor — the capacity of carbon fixation (RuBisCO/Calvin cycle) has been reached.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The plateau means light is no longer limiting; the Calvin cycle or enzyme capacity now limits the rate.",
            commonErrors: [
              "Claiming the plateau means light becomes inhibitory — it means another factor is now limiting.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the rate of photosynthesis falls at very high temperatures, even when light and $CO_2$ are in excess.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme denaturation",
                statement:
                  "High temperatures denature the enzymes of both the light reactions and the Calvin cycle, reducing their activity.",
              },
              {
                kind: "principle",
                name: "Photorespiration",
                statement:
                  "At high temperatures RuBisCO increasingly binds $O_2$ instead of $CO_2$, wasting energy in photorespiration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Enzymes have an optimum temperature; above it their three-dimensional shape is disrupted.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Denatured RuBisCO and other Calvin-cycle enzymes fix less $CO_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "High temperature also favours RuBisCO's oxygenase activity, causing photorespiration that consumes ATP and NADPH without fixing carbon.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Both effects reduce the net rate of photosynthesis despite excess light and $CO_2$.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "High temperatures denature enzymes and promote photorespiration, both of which reduce the net photosynthetic rate.",
            commonErrors: [
              "Claiming high temperature increases photosynthesis indefinitely.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student measures the net rate of carbon exchange of a leaf at different light intensities. At 50 units the net exchange is $-2$ units per hour (carbon loss); at 100 units it is $0$; at 200 units it is $+6$; at 400 units it is $+8$; at 800 units it is still $+8$.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the compensation point from the data and state what it means.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the photosynthetic rate at a light intensity of 200 units if the respiratory rate is 5 units per hour.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the net rate levels off between 400 and 800 units despite doubling light.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Predict the effect on the compensation point of increasing the $CO_2$ concentration around the leaf.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compensation point",
                statement:
                  "The light intensity at which photosynthetic and respiratory $CO_2$ rates are equal (net exchange zero).",
              },
              {
                kind: "principle",
                name: "Net exchange",
                statement: "Net $= $ photosynthesis $-$ respiration.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The compensation point is 100 units, where net exchange is zero.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "It means photosynthesis and respiration are balanced — no net carbon gain or loss.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Net $= $ photosynthesis $-$ respiration, so photosynthesis $= $ net $+$ respiration.",
                working: "6 + 5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "11 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "At high light another factor — $CO_2$ supply or Calvin-cycle capacity — becomes limiting.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Doubling light no longer increases the rate because the light reactions are no longer the bottleneck.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Higher $CO_2$ raises the photosynthetic rate at any given light intensity.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "The compensation point therefore shifts to a lower light intensity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 100 units; photosynthesis $=$ respiration. (b) $11$ units per hour. (c) Another factor becomes limiting. (d) Compensation point shifts lower.",
            commonErrors: [
              "In (b), answering 1 (subtracting respiration from net instead of adding).",
              "In (d), predicting the compensation point rises — more $CO_2$ means balance is reached at lower light.",
            ],
            examinerNote:
              "Part (b) tests the sign convention: net $+6$ with respiration 5 means gross photosynthesis is 11.",
          },
        },
        {
          id: "biohl-u2-limiting-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is meant by a limiting factor in photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The factor that always limits growth permanently",
              },
              { id: "b", text: "Any factor that has no effect on the rate" },
              { id: "c", text: "The factor present in the largest amount" },
              {
                id: "d",
                text: "The factor in shortest supply that restricts the rate even when other factors are adequate",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limiting factor",
                statement:
                  "The environmental factor in shortest supply sets the maximum rate of a process.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photosynthesis depends on light, $CO_2$ and temperature acting together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The factor in shortest supply becomes the bottleneck and limits the rate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** The factor in shortest supply that restricts the rate.",
            commonErrors: [
              "Choosing the most abundant factor rather than the limiting one.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Why does the rate of photosynthesis level off at very high carbon dioxide concentrations?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "High $CO_2$ denatures all chloroplast enzymes immediately",
              },
              {
                id: "b",
                text: "Light is no longer required for carbon fixation",
              },
              { id: "c", text: "Oxygen completely stops being released" },
              {
                id: "d",
                text: "RuBisCO and the Calvin cycle become saturated, so another factor limits the rate",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Saturating factor",
                statement:
                  "Once $CO_2$ is no longer limiting, the capacity of carbon fixation limits the rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Increasing $CO_2$ raises the rate until RuBisCO is saturated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Beyond saturation, another factor such as light or enzyme capacity sets the ceiling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Carbon fixation becomes saturated, so another factor limits the rate.",
            commonErrors: [
              "Assuming more $CO_2$ always increases photosynthesis without limit.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How does temperature affect the rate of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The rate increases linearly with temperature indefinitely",
              },
              {
                id: "b",
                text: "The rate rises to an optimum and then falls as enzymes denature",
              },
              {
                id: "c",
                text: "Temperature has no effect because light is the only limiting factor",
              },
              {
                id: "d",
                text: "The rate decreases continuously as temperature rises",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature and enzymes",
                statement:
                  "Enzyme activity rises to an optimum temperature and falls when enzymes denature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher temperature increases molecular movement and enzyme activity up to the optimum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Above the optimum, enzymes denature and the rate falls.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Rate rises to an optimum, then falls as enzymes denature.",
            commonErrors: ["Ignoring enzyme denaturation at high temperature."],
          },
        },
        {
          id: "biohl-u2-limiting-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "At light intensities below the compensation point, what happens to the plant's carbon balance?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Photosynthesis exceeds respiration, so the plant gains carbon",
              },
              {
                id: "b",
                text: "Respiration exceeds photosynthesis, so the plant loses carbon",
              },
              {
                id: "c",
                text: "Photosynthesis and respiration are exactly equal",
              },
              { id: "d", text: "No respiration occurs in the leaf" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compensation point",
                statement:
                  "Below the compensation point, respiratory $CO_2$ release exceeds photosynthetic uptake.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low light limits ATP and NADPH supply, reducing photosynthesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If respiration releases more $CO_2$ than photosynthesis absorbs, the plant loses carbon.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Respiration exceeds photosynthesis; the plant loses carbon.",
            commonErrors: [
              "Reversing the inequality — below compensation point the plant is a net carbon loser.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why might increasing light intensity fail to increase the rate of photosynthesis in a greenhouse with low $CO_2$?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "More light converts oxygen into carbon dioxide",
              },
              { id: "b", text: "Light always inhibits RuBisCO" },
              {
                id: "c",
                text: "$CO_2$ is the limiting factor, so extra light cannot raise the rate until $CO_2$ is increased",
              },
              { id: "d", text: "Respiration stops completely" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Factor interaction",
                statement:
                  "Increasing a non-limiting factor does not raise the rate when another factor is in shortest supply.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At low $CO_2$, carbon fixation is limited regardless of light supply.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only after $CO_2$ is raised can additional light improve the rate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** $CO_2$ remains limiting, so extra light has no effect.",
            commonErrors: [
              "Assuming light always increases photosynthesis independently of other factors.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q10",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A leaf fixes $CO_2$ at 12 units per hour while respiration releases 5 units per hour. Calculate the net rate of carbon exchange.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Net carbon exchange",
                answer: 7,
                unit: "units per hour uptake",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net exchange",
                statement:
                  "Net $CO_2$ exchange $=$ photosynthetic uptake $-$ respiratory release.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract respiratory release from photosynthetic uptake.",
                working: "12 - 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the net uptake.",
                working: "7 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$7$ units per hour net uptake",
            commonErrors: ["Adding respiration instead of subtracting it."],
          },
        },
        {
          id: "biohl-u2-limiting-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "At one light intensity a leaf has net carbon exchange $+8$ units per hour and respiration releases 4 units per hour. At a higher intensity the net exchange is $+10$ units per hour and respiration is still 4 units per hour. Calculate the photosynthetic rate at the first intensity, the photosynthetic rate at the second intensity and the increase in photosynthetic rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "Photosynthetic rate at first intensity", answer: 12 },
              { label: "Photosynthetic rate at second intensity", answer: 14 },
              { label: "Increase in photosynthetic rate", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net exchange",
                statement:
                  "Photosynthetic rate $=$ net exchange $+$ respiratory rate.",
              },
            ],
            steps: [
              {
                reasoning: "First photosynthetic rate is $8 + 4$.",
                working: "12 \\text{ units per hour}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second photosynthetic rate is $10 + 4$.",
                working: "14 \\text{ units per hour}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The increase is $14 - 12$.",
                working: "2 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$12$, $14$ and an increase of $2$ units per hour",
            commonErrors: [
              "Subtracting respiration from net instead of adding it to obtain gross photosynthesis.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A leaf shows net carbon exchange of $-3$ units per hour at a light intensity of 30 units, $0$ at 60 units and $+6$ at 90 units. The respiratory rate is 5 units per hour. Identify the compensation point and calculate the photosynthetic rate at 90 units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Compensation point light intensity",
                answer: 60,
                unit: "light units",
              },
              { label: "Net exchange at compensation point", answer: 0 },
              {
                label: "Photosynthetic rate at 90 units",
                answer: 11,
                unit: "units per hour",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compensation point",
                statement:
                  "The compensation point is where net exchange is zero.",
              },
              {
                kind: "formula",
                name: "Net exchange",
                statement:
                  "Photosynthetic rate $=$ net exchange $+$ respiratory rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Net exchange is zero at a light intensity of 60 units.",
                working: "60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At the compensation point net exchange is zero by definition.",
                working: "0",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "At 90 units, photosynthesis is $6 + 5$.",
                working: "11 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Compensation point at $60$ light units; photosynthetic rate $11$ units per hour at 90 units",
            commonErrors: [
              "Choosing 30 units because it shows carbon loss rather than balance.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A leaf at ambient $CO_2$ has photosynthetic rate 8 units per hour and respiration 3 units per hour. When $CO_2$ is raised, photosynthesis becomes 12 units per hour while respiration stays at 3 units per hour. Calculate the net exchange before and after the change, the increase in net exchange and the increase in photosynthetic rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "Net exchange before", answer: 5 },
              { label: "Net exchange after", answer: 9 },
              { label: "Increase in net exchange", answer: 4 },
              { label: "Increase in photosynthetic rate", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net exchange",
                statement: "Net exchange $=$ photosynthesis $-$ respiration.",
              },
            ],
            steps: [
              {
                reasoning: "Net exchange before is $8 - 3$.",
                working: "5 \\text{ units per hour}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net exchange after is $12 - 3$.",
                working: "9 \\text{ units per hour}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The increase in net exchange is $9 - 5$.",
                working: "4 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The increase in photosynthetic rate is $12 - 8$.",
                working: "4 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$5$ and $9$ units per hour net exchange; increase of $4$; photosynthetic rate increases by $4$",
            commonErrors: [
              "Forgetting that respiration is unchanged when calculating the increase.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A plant's photosynthetic rate is $0.05$ times light intensity up to 200 units, after which it is capped at 10 units per hour. Respiration is constant at 2 units per hour. Calculate the photosynthetic rate at 100 units, the photosynthetic rate at 200 units, the net exchange at 200 units, the compensation point light intensity and the net exchange at 400 units.",
          response: {
            type: "numeric",
            parts: [
              { label: "Photosynthetic rate at 100 units", answer: 5 },
              { label: "Photosynthetic rate at 200 units", answer: 10 },
              { label: "Net exchange at 200 units", answer: 8 },
              {
                label: "Compensation point light intensity",
                answer: 40,
                unit: "light units",
              },
              { label: "Net exchange at 400 units", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Light response model",
                statement:
                  "For $L \\leq 200$, photosynthesis $= 0.05L$; for higher light it is capped at $10$; net $=$ photosynthesis $-$ respiration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At 100 units, photosynthesis is $0.05 \\times 100$.",
                working: "5 \\text{ units per hour}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At 200 units, photosynthesis is $0.05 \\times 200$.",
                working: "10 \\text{ units per hour}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net exchange at 200 units is $10 - 2$.",
                working: "8 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "At the compensation point photosynthesis equals respiration, so $0.05L = 2$.",
                working: "L = 40",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "At 400 units the cap applies, so net exchange remains $10 - 2$.",
                working: "8 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$5$, $10$, $8$, compensation point at $40$ light units and $8$ units per hour",
            commonErrors: [
              "Using the uncapped linear equation at 400 units instead of applying the maximum rate.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how light intensity, carbon dioxide concentration and temperature interact as limiting factors of photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting factor interaction",
                statement:
                  "The rate is set by the factor in shortest supply; increasing a non-limiting factor does not raise the rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At low light, the light reactions cannot supply enough ATP and NADPH, so light limits the rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At higher light, carbon fixation may become limiting if $CO_2$ is low or RuBisCO is saturated.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Temperature affects enzyme activity and therefore both light reactions and the Calvin cycle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At low temperature enzymes are less active; at high temperature they denature and photorespiration increases.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Raising one factor only helps if the others are adequate to support the increased rate.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "In practice the factor currently in shortest supply sets the ceiling on photosynthetic rate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Light, $CO_2$ and temperature interact through enzyme and substrate supply; the scarcest factor limits the rate.",
            commonErrors: [
              "Treating the three factors as independent rather than interacting.",
            ],
          },
        },
        {
          id: "biohl-u2-limiting-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A leaf's net carbon exchange was measured at different light intensities. At 20 units the net exchange is $-1$ unit per hour; at 40 units it is $0$; at 60 units it is $+2$; at 80 units it is $+5$; at 100 units it is $+6$. Respiration is constant at 3 units per hour.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Compensation point light intensity",
                answer: 40,
                unit: "light units",
              },
              { label: "Photosynthetic rate at 20 units", answer: 2 },
              { label: "Photosynthetic rate at 80 units", answer: 8 },
              {
                label: "Increase in net exchange from 60 to 100 units",
                answer: 4,
              },
              { label: "Photosynthetic rate at 100 units", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compensation point",
                statement: "The light intensity at which net exchange is zero.",
              },
              {
                kind: "formula",
                name: "Net exchange",
                statement:
                  "Photosynthetic rate $=$ net exchange $+$ respiratory rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Net exchange is zero at a light intensity of 40 units.",
                working: "40 \\text{ light units}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At 20 units, photosynthesis is $-1 + 3$.",
                working: "2 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "At 80 units, photosynthesis is $5 + 3$.",
                working: "8 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Net exchange rises from $+2$ at 60 units to $+6$ at 100 units.",
                working: "6 - 2 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At 100 units, photosynthesis is $6 + 3$.",
                working: "9 \\text{ units per hour}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Compensation point at $40$ light units; photosynthetic rates $2$, $8$ and $9$ units per hour; net exchange increases by $4$ units per hour",
            commonErrors: [
              "Subtracting respiration from net exchange instead of adding it to obtain gross photosynthesis.",
            ],
          },
        },
      ],
    },
  ],
};
