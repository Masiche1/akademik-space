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
            { id: "a", text: "Maximum combinations of two goods" }, { id: "b", text: "Prices of goods" }, { id: "c", text: "Consumer preferences" }, { id: "d", text: "Government spending" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Underutilised resources" }, { id: "b", text: "Maximum efficiency" }, { id: "c", text: "Economic growth" }, { id: "d", text: "Full employment" },
          ], correctChoiceId: "a" },
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
