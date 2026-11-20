import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "bus-u2-lesson-2-3",
  code: "2-3",
  title: "Operations management",
  goal: "I CAN describe production methods, quality control, lean production techniques and inventory management.",
  standards: ["Paper 1", "Paper 2", "Topic 2.3"],
  vocabulary: [
    {
      term: "Operations management",
      definition:
        "Managing the processes that transform inputs into finished goods or services.",
    },
    {
      term: "Job production",
      definition: "Making one-off or customised products, e.g. a bespoke suit.",
    },
    {
      term: "Batch production",
      definition:
        "Making groups of identical items, e.g. a bakery producing 500 loaves.",
    },
    {
      term: "Flow production",
      definition:
        "Continuous mass production on an assembly line, e.g. car manufacturing.",
    },
    {
      term: "Quality control",
      definition:
        "Checking finished products to ensure they meet required standards.",
    },
    {
      term: "Quality assurance",
      definition:
        "Designing processes so defects are prevented from occurring.",
    },
    {
      term: "Lean production",
      definition: "Producing more with fewer resources by eliminating waste.",
    },
    {
      term: "Just-in-time (JIT)",
      definition:
        "Receiving materials only when needed in production, cutting storage costs.",
    },
  ],
  concepts: [
    {
      id: "bus-u2-production",
      title: "Production methods and quality",
      skill:
        "Compare job, batch and flow production and explain quality control and assurance.",
      lesson: {
        sections: [
          {
            heading: "Methods of production",
            body: "**Job production** makes one-off customised items — flexible but costly per unit. **Batch production** makes groups of identical products — balances flexibility and efficiency (bakeries, clothing runs). **Flow production** uses assembly lines for mass output — lowest unit cost but inflexible and vulnerable to breakdowns. The choice depends on volume, customisation and product type.",
          },
          {
            heading: "Quality: control vs assurance",
            body: "**Quality control** inspects finished goods and rejects defects — it detects problems after they occur. **Quality assurance** builds quality into the process: staff training, standardised procedures and supplier checks prevent defects. Total quality management (TQM) extends quality responsibility to every employee, improving reputation and reducing waste.",
          },
          {
            heading: "Matching method to market",
            body: "Luxury and bespoke markets suit job production; medium-volume standardised goods suit batch; mass consumer goods suit flow. Exam questions often ask you to justify a production method for a given scenario — look for clues about volume, customisation and cost pressure.",
          },
        ],
        keyFormulas: [
          {
            name: "Production methods",
            statement:
              "Job = one-off; Batch = groups; Flow = continuous mass production",
          },
          {
            name: "Quality approach",
            statement:
              "Control = inspect output; Assurance = prevent defects in process",
          },
        ],
        workedExample: {
          problem:
            "A car manufacturer builds 200,000 identical vehicles a year. Which production method fits and why?",
          solution:
            "Flow production: enormous volume of identical products makes assembly-line mass production the cheapest per unit, despite high setup costs and low flexibility.",
        },
      },
      questions: [
        {
          id: "bus-u2-prod-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Making identical products in large volumes on an assembly line is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Job production" },
              { id: "b", text: "Batch production" },
              { id: "c", text: "Flow production" },
              { id: "d", text: "Craft production" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flow production",
                statement: "Continuous mass production on an assembly line.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Assembly line + large volume of identical goods = flow production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Flow production",
            commonErrors: ["Confusing batch (groups) with flow (continuous)."],
          },
        },
        {
          id: "bus-u2-prod-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A furniture maker produces six dining tables to each customer's design. Which production method is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flow production" },
              { id: "b", text: "Batch production" },
              { id: "c", text: "Job production" },
              { id: "d", text: "Lean production" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Job production",
                statement:
                  "Making customised one-off products to individual orders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each customer's own design means customised, low-volume output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Job production",
            commonErrors: [
              "Choosing batch because six items are made — batch items are identical.",
            ],
          },
        },
        {
          id: "bus-u2-prod-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between quality control and quality assurance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quality control vs assurance",
                statement:
                  "Control inspects output; assurance designs defects out of the process.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quality control checks finished products and rejects those below standard.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It detects defects after they have occurred — waste has already happened.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Quality assurance prevents defects through process design, training and supplier standards.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: assurance is proactive, control is reactive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Control inspects output after production; assurance builds quality into the process.",
            commonErrors: ["Treating the two terms as identical."],
          },
        },
        {
          id: "bus-u2-prod-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A bakery produces 2,000 identical loaves each morning using batch methods.",
          parts: [
            {
              label: "a",
              prompt: "Explain why batch production suits this bakery.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe two quality assurance methods the bakery could use.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the bakery should switch to flow production.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Batch production",
                statement:
                  "Identical products in groups balance efficiency and flexibility.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Products are identical but volume is moderate — batch gives efficiency without full automation costs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Batches allow product variety (different breads) between runs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Staff training and standard recipes to ensure consistent quality.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Checking ingredients and suppliers before production begins.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any valid assurance method, e.g. hygiene standards — two required.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Flow suits very high volume but is inflexible; 2,000 loaves/day may not justify it.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on the switch.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Efficiency with flexibility for variety. (b) Training, ingredient checks, hygiene standards. (c) Probably not — volume too low for flow.",
            commonErrors: ["Assuming bigger always means flow production."],
          },
        },
        {
          id: "bus-u2-prod-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A bakery produces 400 identical loaves in one run before changing the recipe. This is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Job production" },
              { id: "b", text: "Batch production" },
              { id: "c", text: "Flow production" },
              { id: "d", text: "Lean production" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Batch production",
                statement:
                  "Making groups of identical products before switching to another batch.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identical loaves made in one run = batch production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Batch production",
            commonErrors: [
              "Confusing batch (groups of identical items) with job (one-offs).",
            ],
          },
        },
        {
          id: "bus-u2-prod-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Checking finished products and rejecting those below standard is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quality assurance" },
              { id: "b", text: "Quality control" },
              { id: "c", text: "Kaizen" },
              { id: "d", text: "Just-in-time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quality control",
                statement:
                  "Inspecting finished products and rejecting defects after production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inspecting output and rejecting defects = quality control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Quality control",
            commonErrors: [
              "Confusing control (inspect output) with assurance (prevent defects).",
            ],
          },
        },
        {
          id: "bus-u2-prod-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A tailor makes one custom suit to each customer's measurements. Which production method is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flow production" },
              { id: "b", text: "Batch production" },
              { id: "c", text: "Job production" },
              { id: "d", text: "Cell production" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Job production",
                statement:
                  "Making customised one-off products to individual orders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each suit is unique to a customer — job production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Job production",
            commonErrors: [
              "Choosing batch — batch items are identical, not customised.",
            ],
          },
        },
        {
          id: "bus-u2-prod-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The main disadvantage of flow production is that it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too flexible for mass markets" },
              { id: "b", text: "Inflexible and vulnerable to breakdowns" },
              { id: "c", text: "Only suitable for services" },
              { id: "d", text: "Unable to achieve low unit costs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flow production limits",
                statement:
                  "Assembly lines give low unit cost but cannot easily change products and a breakdown stops output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Flow lines are rigid — a stoppage halts the whole line and changes are costly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Inflexible and vulnerable to breakdowns",
            commonErrors: [
              "Confusing flow's low unit cost with its main weakness — inflexibility.",
            ],
          },
        },
        {
          id: "bus-u2-prod-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Total quality management (TQM) means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only managers inspect finished goods" },
              { id: "b", text: "Every employee is responsible for quality" },
              {
                id: "c",
                text: "Quality is checked only at the end of production",
              },
              { id: "d", text: "Defects are tolerated if costs are low" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Total quality management",
                statement:
                  "Quality responsibility extended to every employee in the organisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "TQM makes quality everyone's job, not just an inspection team's.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Every employee is responsible for quality",
            commonErrors: ["Confusing TQM with end-of-line quality control."],
          },
        },
        {
          id: "bus-u2-prod-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A potter makes 30 identical mugs per week for online sale. The most suitable production method is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flow production" },
              { id: "b", text: "Batch production" },
              { id: "c", text: "Job production" },
              { id: "d", text: "Just-in-time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Matching method to volume",
                statement:
                  "Identical products in small groups suit batch production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identical mugs in groups of 30 fit batch; volume is too low for flow and items are not one-off.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Batch production",
            commonErrors: [
              "Choosing flow for any identical product — flow needs very high volume.",
            ],
          },
        },
        {
          id: "bus-u2-prod-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of batch production over job production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Batch vs job",
                statement:
                  "Batch makes identical items in groups — more efficient than one-off job work.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Batch production spreads setup effort across many identical units, lowering cost per unit versus job production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Workers gain repetition and efficiency within each batch run.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trade-off: batch is less flexible than job — switching products means retooling.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: batch suits medium volumes of standardised goods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lower unit cost and greater efficiency than job production, with some loss of flexibility.",
            commonErrors: [
              "Comparing batch to flow instead of to job production.",
            ],
          },
        },
        {
          id: "bus-u2-prod-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two benefits of quality assurance compared with quality control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality assurance benefits",
                statement:
                  "Preventing defects avoids the waste of producing and rejecting bad output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Defects are prevented rather than detected, so fewer resources are wasted on rework or rejects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consistent processes build a reliable reputation and customer trust.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Quality control still has a role checking output, but it acts after waste has occurred.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: assurance is proactive and cheaper in the long run.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fewer defects and less waste, plus a stronger reputation — defects are prevented not caught.",
            commonErrors: [
              "Repeating the control-vs-assurance definition without explaining benefits.",
            ],
          },
        },
        {
          id: "bus-u2-prod-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "An electronics firm makes 20,000 identical phone cases a month using batch methods.",
          parts: [
            {
              label: "a",
              prompt: "Explain why batch production suits this firm.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe two quality assurance methods the firm could use.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the firm should switch to flow production.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Production method choice",
                statement:
                  "Batch balances efficiency and flexibility for medium-volume identical goods.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Identical cases at 20,000/month give batch economies without full assembly-line costs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Batches allow model changes between runs — flexibility flow lacks.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Staff training and standardised procedures to prevent defects.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Checking components and suppliers before production begins.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Any valid assurance method — two required.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Flow gives lowest unit cost at very high volume but is inflexible; 20,000/month may not justify it.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on the switch.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Efficiency with flexibility for model changes. (b) Training, supplier checks, standard procedures. (c) Probably not — batch already fits the volume.",
            commonErrors: [
              "Assuming higher volume always justifies flow production.",
            ],
          },
        },
        {
          id: "bus-u2-prod-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A furniture company must choose a production method for its new range.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the criteria used to choose between job, batch and flow production.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend a method for a firm making 500 customised chairs a month and justify it.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the impact of the choice on unit costs and flexibility.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Production method criteria",
                statement:
                  "Volume, customisation and product type determine the method.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Consider output volume — mass volumes suit flow, one-offs suit job.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Consider customisation needs — bespoke work suits job, standardised goods suit batch or flow.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Job production suits 500 customised chairs — each made to order.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justified by high customisation; batch or flow cannot easily vary each chair.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Batch acceptable if designs repeat in groups — must justify against scenario.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Job gives maximum flexibility but highest unit cost.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Flow/batch would cut unit costs but sacrifice the customisation customers pay for.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — method must match the value customers place on customisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Volume, customisation, product type. (b) Job production for customised chairs. (c) Flexibility vs unit cost trade-off.",
            commonErrors: [
              "Choosing a method without weighing cost against customisation.",
            ],
          },
        },
        {
          id: "bus-u2-prod-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A batch of 500 units costs 4,000 dollars to produce. Calculate the cost per unit.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost per unit", answer: 8, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Unit cost",
                statement: "Unit cost = total cost / number of units",
              },
            ],
            steps: [
              {
                reasoning: "Identify total cost and quantity.",
                working: "4000 / 500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide total cost by units produced.",
                working: "4000 / 500 = 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the unit cost.",
                working: "8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8$ per unit",
            commonErrors: [
              "Dividing 500 by 4,000 instead of cost by quantity.",
            ],
          },
        },
        {
          id: "bus-u2-prod-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm inspects 2,000 finished units and rejects $3\\%$ as defective. Calculate the number of acceptable units.",
          response: {
            type: "numeric",
            parts: [{ label: "Acceptable units", answer: 1940, unit: "units" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Quality control output",
                statement: "Acceptable units = total - (defect rate x total)",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the number of defective units.",
                working: "0.03 x 2000 = 60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract defects from total output.",
                working: "2000 - 60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the acceptable units.",
                working: "1940",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1,940$ units",
            commonErrors: [
              "Answering 60 (defects) instead of acceptable units.",
            ],
          },
        },
      ],
    },
    {
      id: "bus-u2-lean",
      title: "Lean production and inventory",
      skill:
        "Explain lean production techniques including JIT, kaizen and cell production, and inventory management methods.",
      lesson: {
        sections: [
          {
            heading: "Lean production and waste elimination",
            body: "**Lean production** aims to produce more with fewer resources by eliminating waste — overproduction, waiting, transport, defects. Key techniques: **kaizen** (continuous small improvements by all staff), **cell production** (teams complete whole products in cells rather than assembly lines), and **total quality management**. Lean cuts costs and improves flexibility.",
          },
          {
            heading: "Just-in-time (JIT)",
            body: "**JIT** delivers materials exactly when production needs them, cutting storage costs and highlighting defects immediately. It requires reliable suppliers and smooth production. Risks: a supply failure stops the whole line, and there is no buffer stock — JIT suits firms with dependable supply chains.",
          },
          {
            heading: "Inventory management",
            body: "**Inventory control** balances holding too much stock (storage costs, waste, obsolescence) against too little (stockouts, lost sales). Methods include **economic order quantity** calculations, **just-in-time** ordering, and safety stock buffers. Effective inventory management frees cash — often a business's largest use of working capital.",
          },
        ],
        keyFormulas: [
          {
            name: "Lean goal",
            statement: "Maximum output with minimum waste and resources",
          },
          {
            name: "JIT",
            statement:
              "Materials arrive only when needed — zero/low buffer stock",
          },
          {
            name: "Inventory trade-off",
            statement: "Holding costs vs stockout costs",
          },
        ],
        workedExample: {
          problem:
            "A car plant switches to JIT. Explain two benefits and one risk.",
          solution:
            "Benefits: storage costs fall and defects surface immediately. Risk: any supplier delay halts the production line because there is no buffer stock.",
        },
      },
      questions: [
        {
          id: "bus-u2-lean-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Receiving materials only when they are needed in production describes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kaizen" },
              { id: "b", text: "Just-in-time" },
              { id: "c", text: "Cell production" },
              { id: "d", text: "Quality control" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Just-in-time",
                statement:
                  "Materials are delivered only when needed in the production process.",
              },
            ],
            steps: [
              {
                reasoning: "Materials on demand = JIT.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Just-in-time",
            commonErrors: [
              "Confusing JIT with kaizen — kaizen is continuous improvement.",
            ],
          },
        },
        {
          id: "bus-u2-lean-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A factory holds 200,000 of inventory. Storage costs are 20% of inventory value per year. Calculate the annual storage cost.",
          response: {
            type: "numeric",
            parts: [{ label: "Storage cost", answer: 40000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Holding cost",
                statement:
                  "Holding cost = inventory value x storage cost percentage",
              },
            ],
            steps: [
              {
                reasoning: "Apply the holding cost formula.",
                working: "0.20 \\times 200000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply.",
                working: "40000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the cost.",
                working: "40000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$40000$ per year",
            commonErrors: ["Using 20 instead of 0.20 — gives 4,000,000."],
          },
        },
        {
          id: "bus-u2-lean-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why lean production can improve a firm's competitiveness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lean production benefits",
                statement:
                  "Less waste → lower costs, faster response, higher quality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Eliminating waste cuts costs per unit, allowing lower prices or higher margins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cell production and JIT improve flexibility and reduce defects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Continuous improvement (kaizen) keeps efficiency rising over time.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: lean methods directly improve cost, quality and responsiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lower costs, higher quality and greater flexibility improve competitiveness.",
            commonErrors: [
              "Listing lean techniques without linking them to competitiveness.",
            ],
          },
        },
        {
          id: "bus-u2-lean-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A furniture maker holds large stocks of timber and finishes to avoid running out.",
          parts: [
            {
              label: "a",
              prompt: "Explain two costs of holding excessive inventory.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how a just-in-time system could reduce these costs.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate the risks of switching fully to JIT.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inventory trade-off",
                statement:
                  "High stock costs money and space; low stock risks production stoppages.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Storage, insurance and handling costs rise with stock levels.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Capital tied up in stock cannot be used elsewhere; materials may deteriorate or become obsolete.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "JIT orders materials only when needed, so storage space and holding costs fall.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Cash previously locked in stock is freed for other uses.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Needs reliable suppliers delivering frequently and on time.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Risk: any supplier delay stops production; no buffer stock exists.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — JIT suits firms with dependable supply chains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Storage costs, tied-up capital, obsolescence. (b) Orders on demand cut holding costs and free cash. (c) Supply failure stops production — needs reliable suppliers.",
            commonErrors: ["Ignoring the risk side of JIT."],
          },
        },
        {
          id: "bus-u2-lean-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Making small continuous improvements suggested by all employees is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just-in-time" },
              { id: "b", text: "Kaizen" },
              { id: "c", text: "Cell production" },
              { id: "d", text: "Economic order quantity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kaizen",
                statement: "Continuous small improvements driven by all staff.",
              },
            ],
            steps: [
              {
                reasoning: "Continuous improvement by everyone = kaizen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Kaizen",
            commonErrors: [
              "Confusing kaizen (continuous improvement) with JIT (materials on demand).",
            ],
          },
        },
        {
          id: "bus-u2-lean-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Organising workers into teams that each complete a whole product is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flow production" },
              { id: "b", text: "Kaizen" },
              { id: "c", text: "Cell production" },
              { id: "d", text: "Quality control" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cell production",
                statement:
                  "Teams in cells each produce complete products rather than one assembly step.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Teams completing whole products in cells = cell production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Cell production",
            commonErrors: [
              "Confusing cell production with assembly-line flow production.",
            ],
          },
        },
        {
          id: "bus-u2-lean-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The main benefit of just-in-time inventory is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher storage costs" },
              { id: "b", text: "Lower storage costs and less waste" },
              { id: "c", text: "Eliminating all supplier risk" },
              { id: "d", text: "Larger buffer stocks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JIT benefits",
                statement:
                  "Materials arrive on demand, cutting storage and holding costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "JIT removes the need for large stock holdings, cutting costs and waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Lower storage costs and less waste",
            commonErrors: [
              "Confusing JIT's benefit (low stock) with its risk (no buffer).",
            ],
          },
        },
        {
          id: "bus-u2-lean-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The biggest risk of just-in-time production is that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quality always falls" },
              {
                id: "b",
                text: "A supplier delay can stop the whole production line",
              },
              { id: "c", text: "Inventory levels always rise" },
              { id: "d", text: "Staffing costs always increase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JIT risk",
                statement:
                  "With no buffer stock, any supply failure halts production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No safety stock means a late delivery stops the entire line.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** A supplier delay can stop the whole production line",
            commonErrors: [
              "Listing benefits of JIT instead of its key vulnerability.",
            ],
          },
        },
        {
          id: "bus-u2-lean-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Lean production aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximise waste in the process" },
              {
                id: "b",
                text: "Produce more output with fewer resources by eliminating waste",
              },
              { id: "c", text: "Increase stock levels for security" },
              { id: "d", text: "Slow down production to improve quality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lean production",
                statement: "Maximum output with minimum waste and resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lean = more output from fewer inputs by cutting waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Produce more output with fewer resources by eliminating waste",
            commonErrors: [
              "Associating lean with slowing down — it is about efficiency.",
            ],
          },
        },
        {
          id: "bus-u2-lean-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two types of waste that lean production seeks to eliminate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lean waste",
                statement:
                  "Waste includes overproduction, waiting, unnecessary transport and defects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Overproduction: making more than is needed ties up cash and storage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Waiting or transport: idle time and unnecessary movement add cost without value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Other valid waste: defects/rework, excess inventory — any two required.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: lean targets any activity that consumes resources without adding value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Overproduction, waiting, transport and defects — any two explained.",
            commonErrors: [
              "Listing lean techniques instead of types of waste.",
            ],
          },
        },
        {
          id: "bus-u2-lean-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how cell production differs from flow production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cell vs flow",
                statement:
                  "Cells have teams completing whole products; flow splits work across a line.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In flow production each worker or station performs one repetitive task on a moving line.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In cell production a team completes the entire product within a cell, seeing the whole process.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cells give flexibility and worker motivation; flow gives maximum speed at huge volumes.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: cells suit varied products; flow suits mass-produced identical goods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Flow = one task per station on a line; cells = teams making whole products.",
            commonErrors: [
              "Describing cell production without contrasting it with flow.",
            ],
          },
        },
        {
          id: "bus-u2-lean-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two benefits of just-in-time inventory management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JIT benefits",
                statement:
                  "Materials arrive on demand — less storage, less waste, freed cash.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Storage and holding costs fall because little or no stock is kept on site.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Capital previously locked in inventory is freed for other uses, improving cash flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Defects surface immediately rather than sitting unnoticed in stock.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: JIT cuts costs but depends on reliable suppliers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lower holding costs and freed working capital, plus faster defect detection.",
            commonErrors: ["Listing JIT risks instead of benefits."],
          },
        },
        {
          id: "bus-u2-lean-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A bicycle manufacturer is considering switching to just-in-time inventory.",
          parts: [
            {
              label: "a",
              prompt: "Explain two benefits JIT could bring to this firm.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe two risks the firm would face under JIT.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate whether JIT is suitable for this firm.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JIT trade-offs",
                statement:
                  "JIT cuts storage costs but removes the buffer against supply failure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Storage and insurance costs on frames, wheels and components would fall sharply.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Cash tied up in stock is freed for investment or working capital.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Any supplier delay stops the assembly line because there is no buffer stock.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Requires dependable, frequent deliveries — hard for bulky or imported components.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Quality problems are exposed immediately, so supplier quality must be excellent.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Suitable only if the firm can secure reliable suppliers and smooth demand.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — JIT suits firms with dependable supply chains, not all firms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Lower storage costs and freed cash. (b) Supply delays halt production; needs reliable suppliers. (c) Suitable only with dependable supply chain.",
            commonErrors: [
              "Discussing JIT without acknowledging the no-buffer-stock risk.",
            ],
          },
        },
        {
          id: "bus-u2-lean-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A retailer struggles with high inventory holding costs and frequent stockouts of popular lines.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the trade-off between holding too much and too little stock.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend an inventory management approach and justify it.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate how the chosen approach affects cash flow and customer service.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inventory trade-off",
                statement:
                  "Too much stock costs money; too little loses sales.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Excess stock ties up cash, incurs storage costs and risks obsolescence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Too little stock causes stockouts, lost sales and disappointed customers.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A balanced approach: reorder levels plus safety stock for popular lines, or JIT for stable items.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justified by needing both cost control and availability for fast-moving lines.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any coherent approach clearly justified earns the mark.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Lower stock frees cash for other uses and cuts storage spend.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But too-lean stock risks stockouts that damage customer service and sales.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — the optimum balances holding costs against stockout costs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Excess stock costs cash; shortages lose sales. (b) Reorder levels plus safety stock, justified. (c) Frees cash but risks stockouts if too lean.",
            commonErrors: [
              "Recommending maximum stock reduction without considering stockout costs.",
            ],
          },
        },
        {
          id: "bus-u2-lean-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm holds inventory worth 80,000 dollars and storage costs are $25\\%$ of inventory value per year. Calculate the annual storage cost.",
          response: {
            type: "numeric",
            parts: [{ label: "Storage cost", answer: 20000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Holding cost",
                statement:
                  "Holding cost = inventory value x storage cost percentage",
              },
            ],
            steps: [
              {
                reasoning: "Apply the holding cost formula.",
                working: "0.25 x 80000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply to find the annual cost.",
                working: "20000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the storage cost.",
                working: "20000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20000$ per year",
            commonErrors: ["Using 25 instead of 0.25 — gives 2,000,000."],
          },
        },
        {
          id: "bus-u2-lean-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A product uses 350 units per week and the firm places orders every two weeks. Assuming constant demand, calculate the order quantity.",
          response: {
            type: "numeric",
            parts: [{ label: "Order quantity", answer: 700, unit: "units" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Order quantity",
                statement:
                  "Order quantity = weekly demand x weeks between orders",
              },
            ],
            steps: [
              {
                reasoning: "Identify weekly demand and order interval.",
                working: "350 x 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply demand by the number of weeks covered.",
                working: "350 x 2 = 700",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the order quantity.",
                working: "700",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$700$ units",
            commonErrors: [
              "Ordering only one week's supply (350) instead of two.",
            ],
          },
        },
      ],
    },
  ],
};
