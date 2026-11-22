import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "olec-u1-lesson-1-2",
  code: "1-2",
  title: "Production Possibility Frontiers",
  goal: "I CAN interpret production possibility frontiers and explain opportunity cost.",
  standards: ["2281 1.2"],
  vocabulary: [
    { term: "Production possibility frontier (PPF)", definition: "Curve showing maximum output combinations of two goods." },
    { term: "Attainable", definition: "Output combinations within or on the PPF." },
    { term: "Unattainable", definition: "Output combinations beyond the PPF." },
    { term: "Inefficient", definition: "Output below the PPF — resources underused." },
    { term: "Economic growth", definition: "Outward shift of the PPF." },
    { term: "Opportunity cost", definition: "Amount of one good forgone to produce more of another." },
  ],
  concepts: [
    {
      id: "olec-u1-ppf",
      title: "PPF interpretation",
      skill: "Read and interpret points on a production possibility frontier.",
      lesson: {
        sections: [
          { heading: "What is a PPF?", body: "A curve showing all possible combinations of two goods an economy can produce with given resources and technology. Points on the curve = maximum efficiency; inside = inefficiency; outside = unattainable." },
          { heading: "Opportunity cost on PPF", body: "Moving along the PPF, producing more of one good requires giving up some of the other — the slope shows opportunity cost." },
          { heading: "Shifts", body: "PPF shifts outward = economic growth (more resources or better technology). Inward = decline." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An economy produces only guns and butter. Point A is inside the PPF. What does this mean?",
          solution: "Resources are underutilised — the economy could produce more of both goods. It's inefficient.",
        },
      },
      questions: [
        {
          id: "olec-u1-ppf-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A PPF shows…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Consumer preferences" },
            { id: "b", text: "Maximum combinations of two goods" },
            { id: "c", text: "Government spending" },
            { id: "d", text: "Prices of goods" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "PPF", statement: "Max combinations." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u1-ppf-q2", difficulty: "core", totalMarks: 2,
          stem: "What does a point inside the PPF indicate?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PPF", statement: "Inside = inefficient." }], steps: [
            { reasoning: "Resources underutilised — could produce more.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Inefficiency — resources not fully used." },
        },
        {
          id: "olec-u1-ppf-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what an outward shift of the PPF represents.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PPF shift", statement: "Growth." }], steps: [
            { reasoning: "Economic growth — more output possible.", marks: 1, markCode: "AO2" },
            { reasoning: "Caused by more resources or better technology.", marks: 1, markCode: "AO2" },
            { reasoning: "Both goods can now be produced in larger quantities.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Outward shift = economic growth from more resources or better technology." },
        },
        {
          id: "olec-u1-ppf-q4", difficulty: "challenge", totalMarks: 9,
          stem: "PPF review.",
          parts: [
            { label: "a", prompt: "Define PPF.", marks: 1 },
            { label: "b", prompt: "Point on PPF vs inside vs outside?", marks: 3 },
            { label: "c", prompt: "What does outward shift mean?", marks: 2 },
            { label: "d", prompt: "Why is opportunity cost shown on PPF?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "PPF", statement: "Curve interpretation." },
          ], steps: [
            { part: "a", reasoning: "Max output combinations.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "On=efficient, inside=inefficient, outside=unattainable.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Second point.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Third point.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Economic growth.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "More resources/technology.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Slope shows trade-off between goods.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "More of one = less of other.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 points (c) growth (d) slope=trade-off" },
        },
        {
          id: "olec-u1-ppf-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A point outside the PPF represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Full employment" },
            { id: "b", text: "Inefficiency" },
            { id: "c", text: "Economic growth" },
            { id: "d", text: "An unattainable output combination" },
          ], dorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "PPF", statement: "Outside = unattainable." }], steps: [{ reasoning: "Beyond current resources and technology.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u1-ppf-q6", difficulty: "core", totalMarks: 1,
          stem: "A point inside the PPF indicates that the economy is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Experiencing economic growth" },
            { id: "b", text: "Using resources fully" },
            { id: "c", text: "Inefficient — resources are underused" },
            { id: "d", text: "Productively efficient" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "PPF", statement: "Inside = inefficient." }], steps: [{ reasoning: "Could produce more of both goods.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u1-ppf-q7", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following would cause the PPF to shift outward?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A temporary fall in demand" },
            { id: "b", text: "Improved technology" },
            { id: "c", text: "A rise in consumer incomes" },
            { id: "d", text: "Higher prices for exports" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "PPF shift", statement: "Growth causes." }], steps: [{ reasoning: "Better technology raises productive capacity.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u1-ppf-q8", difficulty: "foundation", totalMarks: 1,
          stem: "A point on the PPF shows that the economy is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Growing economically" },
            { id: "b", text: "Inefficient" },
            { id: "c", text: "Using resources fully and productively efficient" },
            { id: "d", text: "Unable to produce more" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "PPF", statement: "On curve = efficient." }], steps: [{ reasoning: "Maximum output combinations achieved.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u1-ppf-q9", difficulty: "core", totalMarks: 1,
          stem: "The PPF assumes that the economy has a fixed supply of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Consumers" },
            { id: "b", text: "Resources and technology" },
            { id: "c", text: "Prices" },
            { id: "d", text: "Money" },
          ], borrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "PPF", statement: "Given resources and technology." }], steps: [{ reasoning: "Curve drawn for current resources and technology.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u1-ppf-q10", difficulty: "foundation", totalMarks: 2,
          stem: "An economy can produce either 100 tonnes of wheat or 50 tonnes of rice using all its resources. (a) What is the opportunity cost of 1 tonne of wheat in tonnes of rice? (b) What is the opportunity cost of 10 tonnes of wheat?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0.5, unit: "tonnes of rice" },
            { label: "b", answer: 5, unit: "tonnes of rice" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Trade-off along PPF." }], steps: [
            { part: "a", reasoning: "50 / 100 = 0.5 tonnes of rice per tonne of wheat.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "10 x 0.5 = 5 tonnes of rice forgone.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 0.5 (b) 5" },
        },
        {
          id: "olec-u1-ppf-q11", difficulty: "core", totalMarks: 2,
          stem: "A PPF shows an economy can produce a maximum of 200 computers or 100 phones. (a) What is the opportunity cost of 1 computer in terms of phones? (b) If the economy chooses to produce 150 computers, how many phones must it give up compared with producing only computers?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0.5, unit: "phones" },
            { label: "b", answer: 75, unit: "phones" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Trade-off ratio." }], steps: [
            { part: "a", reasoning: "100 / 200 = 0.5 phones per computer.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "150 x 0.5 = 75 phones forgone.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 0.5 (b) 75" },
        },
        {
          id: "olec-u1-ppf-q12", difficulty: "challenge", totalMarks: 2,
          stem: "After economic growth, an economy's maximum output of good A rises from 400 units to 500 units, while the maximum output of good B stays at 300 units. (a) By how many units did maximum output of A rise? (b) What is the percentage increase?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 100, unit: "units" },
            { label: "b", answer: 25, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "PPF shift", statement: "Outward shift measurement." }], steps: [
            { part: "a", reasoning: "500 - 400 = 100 units.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "100 / 400 x 100 = 25%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 100 (b) 25%" },
        },
        {
          id: "olec-u1-ppf-q13", difficulty: "challenge", totalMarks: 2,
          stem: "A country's PPF allows a maximum of 80 tanks or 120 cars. (a) What is the opportunity cost of producing 1 tank in terms of cars? (b) What is the opportunity cost of producing 10 tanks?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 1.5, unit: "cars" },
            { label: "b", answer: 15, unit: "cars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Trade-off ratio." }], steps: [
            { part: "a", reasoning: "120 / 80 = 1.5 cars per tank.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "10 x 1.5 = 15 cars forgone.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 1.5 (b) 15" },
        },
        {
          id: "olec-u1-ppf-q14", difficulty: "core", totalMarks: 2,
          stem: "State two reasons why an economy might operate inside its PPF.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PPF", statement: "Inefficiency causes." }], steps: [
            { reasoning: "Unemployment of labour or other resources.", marks: 1, markCode: "AO1" },
            { reasoning: "Underused capital, strikes, or poor management.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "Unemployment or underused resources; inefficiency." },
        },
        {
          id: "olec-u1-ppf-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what an inward shift of the PPF would indicate about an economy.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PPF shift", statement: "Inward = decline." }], steps: [
            { reasoning: "The economy's productive capacity has fallen.", marks: 1, markCode: "AO2" },
            { reasoning: "Maximum output of both goods is now lower.", marks: 1, markCode: "AO2" },
            { reasoning: "Caused by loss of resources or worse technology.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Inward shift = reduced productive capacity and lower potential output." },
        },
        {
          id: "olec-u1-ppf-q16", difficulty: "challenge", totalMarks: 9,
          stem: "PPF — extended review.",
          parts: [
            { label: "a", prompt: "Define a production possibility frontier.", marks: 1 },
            { label: "b", prompt: "Explain what points on, inside and outside the PPF each show.", marks: 3 },
            { label: "c", prompt: "What does an outward shift of the PPF represent?", marks: 2 },
            { label: "d", prompt: "Explain how the slope of the PPF shows opportunity cost.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "PPF", statement: "Interpretation and shifts." },
          ], steps: [
            { part: "a", reasoning: "Curve of maximum output combinations of two goods.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "On = efficient; inside = inefficient.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Inside = underused resources.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Outside = unattainable.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Economic growth — higher potential output.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "From more resources or better technology.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Slope shows trade-off between the two goods.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Moving along, more of one good means less of the other.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) definition (b) on/inside/outside (c) growth (d) slope = opportunity cost" },
        },
      ],
    },
    {
      id: "olec-u1-ppf-app",
      title: "PPF Applications",
      skill: "Apply PPF concepts to economic scenarios.",
      lesson: {
        sections: [
          { heading: "Real-world PPF", body: "Economies produce many goods, not just two — but the PPF concept applies: resources are limited, so choices must be made about what to produce." },
          { heading: "Unemployment", body: "If resources (especially labour) are underused, the economy operates inside the PPF — below potential output." },
          { heading: "Government choices", body: "Governments choose between guns (defence) and butter (consumer goods), healthcare and defence, etc. — all subject to opportunity cost." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A country shifts resources from consumer goods to military spending. Show on PPF.",
          solution: "Movement along the PPF toward more military goods and fewer consumer goods — opportunity cost of defence.",
        },
      },
      questions: [
        {
          id: "olec-u1-ppa-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Operating inside the PPF indicates…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Economic growth" },
            { id: "b", text: "Maximum efficiency" },
            { id: "c", text: "Full employment" },
            { id: "d", text: "Underutilised resources" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "PPF", statement: "Inside = underuse." }], steps: [{ reasoning: "Resources not fully used.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u1-ppa-q2", difficulty: "core", totalMarks: 2,
          stem: "How does unemployment relate to the PPF?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Unemployment", statement: "Below PPF." }], steps: [
            { reasoning: "Unemployed labour = unused resources = inside PPF.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct link.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Unemployment means resources aren't fully used — economy inside PPF." },
        },
        {
          id: "olec-u1-ppa-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a government faces an opportunity cost when choosing between defence and healthcare.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Government choice", statement: "Trade-offs." }], steps: [
            { reasoning: "Limited budget/resources.", marks: 1, markCode: "AO2" },
            { reasoning: "More defence = less healthcare (or vice versa).", marks: 1, markCode: "AO2" },
            { reasoning: "Must prioritise.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Limited resources force trade-offs between competing priorities." },
        },
        {
          id: "olec-u1-ppa-q4", difficulty: "challenge", totalMarks: 9,
          stem: "PPF applications review.",
          parts: [
            { label: "a", prompt: "What does inside PPF mean?", marks: 1 },
            { label: "b", prompt: "Unemployment and PPF?", marks: 2 },
            { label: "c", prompt: "Government opportunity cost example?", marks: 2 },
            { label: "d", prompt: "Why can't we have everything?", marks: 2 },
            { label: "e", prompt: "How does technology affect PPF?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "PPF applications", statement: "Real-world meaning." },
          ], steps: [
            { part: "a", reasoning: "Underutilised resources.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Unemployment = inside PPF.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Defence vs healthcare trade-off.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear example.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Scarcity forces choices.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Better tech → outward shift.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Correct effect.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) inside (b) unemployment (c) gov trade-off (d) scarcity (e) tech→growth" },
        },
        {
          id: "olec-u1-ppa-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A government increases spending on hospitals while keeping its total budget unchanged. What must happen to spending on other areas?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is unaffected" },
            { id: "b", text: "It rises automatically" },
            { id: "c", text: "Taxes are raised automatically" },
            { id: "d", text: "It must fall" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Government choice", statement: "Fixed budget = trade-off." }], steps: [{ reasoning: "Limited budget forces spending elsewhere to fall.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u1-ppa-q6", difficulty: "core", totalMarks: 2,
          stem: "A government has a total budget of $200 billion, split between education ($120 billion) and defence ($80 billion). (a) If defence spending rises by $10 billion and the total budget is unchanged, by how much must education spending fall in billions of dollars? (b) What percentage of the total budget is spent on defence?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 10, unit: "billion dollars" },
            { label: "b", answer: 40, unit: "percent" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Budget trade-off." }], steps: [
            { part: "a", reasoning: "Budget fixed: 10 billion extra for defence means 10 billion less for education.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "80 / 200 x 100 = 40%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 10 (b) 40%" },
        },
        {
          id: "olec-u1-ppa-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A major factory shuts down because of a long strike, leaving many workers idle. The economy is most likely operating…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Beyond its PPF" },
            { id: "b", text: "On a shifted PPF" },
            { id: "c", text: "Inside its PPF" },
            { id: "d", text: "On its PPF" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "PPF applications", statement: "Disruption = inside PPF." }], steps: [{ reasoning: "Idle workers mean underused resources.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u1-ppa-q8", difficulty: "core", totalMarks: 2,
          stem: "Explain why a government cannot produce unlimited amounts of both defence and consumer goods.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Scarcity", statement: "Limited resources." }], steps: [
            { reasoning: "Resources are limited, so more of one good means less of the other.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of the trade-off.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Scarcity of resources forces a trade-off between competing uses of the budget." },
        },
        {
          id: "olec-u1-ppa-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is most likely to cause an economy's PPF to shift outward?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Higher taxation on firms" },
            { id: "b", text: "A rise in the price of exports" },
            { id: "c", text: "A fall in consumer spending" },
            { id: "d", text: "Investment in education and new technology" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "PPF shift", statement: "Growth causes." }], steps: [{ reasoning: "Better skills and technology raise productive capacity.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u1-ppa-q10", difficulty: "core", totalMarks: 2,
          stem: "An economy can produce either 60 million tonnes of food or 30 million cars when using all its resources. (a) What is the opportunity cost of producing 1 million cars in tonnes of food? (b) What is the opportunity cost of producing 15 million cars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2, unit: "million tonnes of food" },
            { label: "b", answer: 30, unit: "million tonnes of food" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Trade-off ratio." }], steps: [
            { part: "a", reasoning: "60 / 30 = 2 million tonnes of food per million cars.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "15 x 2 = 30 million tonnes of food forgone.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 2 (b) 30" },
        },
        {
          id: "olec-u1-ppa-q11", difficulty: "foundation", totalMarks: 1,
          stem: "A point inside the PPF is most likely to result from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unemployment of resources" },
            { id: "b", text: "Rising consumer incomes" },
            { id: "c", text: "Improved technology" },
            { id: "d", text: "Higher export prices" },
          ], aorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "PPF applications", statement: "Inside = underuse." }], steps: [{ reasoning: "Unused resources keep output below potential.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u1-ppa-q12", difficulty: "core", totalMarks: 3,
          stem: "Explain how technological progress can shift an economy's PPF outward.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PPF shift", statement: "Technology = growth." }], steps: [
            { reasoning: "New technology raises productivity of existing resources.", marks: 1, markCode: "AO2" },
            { reasoning: "Maximum output of goods rises, shifting the PPF outward.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Better technology increases productive capacity, allowing more output — an outward PPF shift." },
        },
        {
          id: "olec-u1-ppa-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A government decides to shift resources from producing consumer goods to producing military equipment. Explain the effect on the economy's position on its PPF.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Government choice", statement: "Movement along PPF." }], steps: [
            { reasoning: "The economy moves along the PPF, not off it.", marks: 1, markCode: "AO2" },
            { reasoning: "Output of military goods rises.", marks: 1, markCode: "AO2" },
            { reasoning: "Output of consumer goods falls — the opportunity cost of defence.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Movement along the PPF toward more military goods and fewer consumer goods." },
        },
        {
          id: "olec-u1-ppa-q14", difficulty: "core", totalMarks: 2,
          stem: "A government has a $50 billion budget split as follows: healthcare $20 billion, defence $15 billion, education $15 billion. (a) What percentage of the budget is spent on healthcare? (b) If defence spending is to double with no extra funds, by how much in billions of dollars must spending on other areas be cut?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 40, unit: "percent" },
            { label: "b", answer: 15, unit: "billion dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Budget trade-off." }], steps: [
            { part: "a", reasoning: "20 / 50 x 100 = 40%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Defence rises by 15 billion, so other spending must fall by 15 billion.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 40% (b) 15" },
        },
        {
          id: "olec-u1-ppa-q15", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following best illustrates opportunity cost in government spending?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rising prices of imported goods" },
            { id: "b", text: "A fall in unemployment" },
            { id: "c", text: "Choosing more defence spending means less can be spent on healthcare" },
            { id: "d", text: "An increase in the money supply" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Opportunity cost", statement: "Forgone alternative." }], steps: [{ reasoning: "Extra defence requires sacrificing healthcare.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u1-ppa-q16", difficulty: "challenge", totalMarks: 9,
          stem: "PPF applications — extended review.",
          parts: [
            { label: "a", prompt: "Define opportunity cost.", marks: 1 },
            { label: "b", prompt: "Give an example of a government spending trade-off.", marks: 2 },
            { label: "c", prompt: "Explain what operating inside the PPF indicates.", marks: 2 },
            { label: "d", prompt: "What does an outward shift of the PPF represent?", marks: 2 },
            { label: "e", prompt: "Explain why scarcity means choices must be made.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "PPF applications", statement: "Scarcity, trade-offs and growth." },
          ], steps: [
            { part: "a", reasoning: "Amount of one good forgone to produce more of another.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "More defence means less healthcare (or similar).", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Clear example.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Resources underused — inefficient.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "E.g. unemployment keeps output below potential.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Economic growth — higher potential output.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "From more resources or better technology.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Wants exceed limited resources.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) opp cost (b) gov trade-off (c) inside=underuse (d) growth (e) scarcity→choice" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u1-1-2-notes", title: "PPF — notes", summary: "Interpreting production possibility frontiers.",
      sections: [
        { heading: "PPF", body: "Max output combinations; on=efficient, inside=inefficient, outside=unattainable; outward shift=growth." },
        { heading: "Applications", body: "Unemployment = inside PPF; government choices have opportunity costs; technology shifts PPF outward." },
      ] },
  ],
};
