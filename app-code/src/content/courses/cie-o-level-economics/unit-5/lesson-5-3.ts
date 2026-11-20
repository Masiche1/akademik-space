import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olec-u5-lesson-5-3",
  code: "5-3",
  title: "Globalisation",
  goal: "I CAN explain globalisation and its effects on economies.",
  standards: ["2281 5.3"],
  vocabulary: [
    { term: "Globalisation", definition: "Increasing integration of world economies." },
    { term: "Multinational corporation (MNC)", definition: "Company operating in multiple countries." },
    { term: "Offshoring", definition: "Moving production to lower-cost countries." },
    { term: "Outsourcing", definition: "Contracting work to external providers." },
    { term: "Developed country", definition: "High-income, industrialised economy." },
    { term: "Developing country", definition: "Lower-income, less industrialised economy." },
  ],
  concepts: [
    {
      id: "olec-u5-globalisation",
      title: "Globalisation",
      skill: "Explain causes and effects of globalisation.",
      lesson: {
        sections: [
          { heading: "What is globalisation?", body: "Increased flows of goods, services, capital, labour and information across borders. Driven by technology, trade liberalisation, MNCs." },
          { heading: "Benefits", body: "Consumers get cheaper goods and more variety; developing countries gain jobs and investment; economic growth." },
          { heading: "Costs", body: "Developed countries lose jobs to offshoring; developing countries may face exploitation; inequality may widen; environmental damage." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A UK company moves its call centre to India. What is this called and what are two effects?",
          solution: "Offshoring — UK jobs lost but costs reduced; India gains jobs and investment.",
        },
      },
      questions: [
        {
          id: "olec-u5-gl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Globalisation refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increasing integration of world economies" }, { id: "b", text: "A single world government" }, { id: "c", text: "Only trade in goods" }, { id: "d", text: "Population growth" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Globalisation", statement: "Integration." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-gl-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two causes of globalisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Globalisation causes", statement: "Drivers." }], steps: [
            { reasoning: "Technology, trade agreements, MNCs — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: technology, trade liberalisation, MNCs." },
        },
        {
          id: "olec-u5-gl-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one benefit and one cost of globalisation for developing countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Globalisation effects", statement: "Pros/cons." }], steps: [
            { reasoning: "Benefit: jobs and investment from MNCs.", marks: 1, markCode: "AO2" },
            { reasoning: "Cost: exploitation or environmental damage.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Jobs/investment gained but risk exploitation or environmental harm." },
        },
        {
          id: "olec-u5-gl-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Globalisation review.",
          parts: [
            { label: "a", prompt: "Define globalisation.", marks: 1 },
            { label: "b", prompt: "Name two causes.", marks: 2 },
            { label: "c", prompt: "Offshoring vs outsourcing?", marks: 2 },
            { label: "d", prompt: "Two benefits?", marks: 2 },
            { label: "e", prompt: "Two costs?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Globalisation", statement: "Concepts and effects." },
          ], steps: [
            { part: "a", reasoning: "Integration of world economies.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Technology, trade agreements, MNCs.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Offshore=move production; outsource=contract out.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Cheaper goods; jobs/investment for developing.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two benefits.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Job losses; inequality/exploitation.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two costs.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) def (b) causes (c) off/out (d) benefits (e) costs" },
        },
      ],
    },
    {
      id: "olec-u5-mncs",
      title: "Multinationals and Development",
      skill: "Explain the role of MNCs in development and their criticisms.",
      lesson: {
        sections: [
          { heading: "MNCs and development", body: "MNCs bring investment, jobs, technology and export earnings to developing countries. They may also pay low wages and repatriate profits." },
          { heading: "Criticisms", body: "Profit repatriation, tax avoidance, exploitative labour, environmental damage, crowding out local firms." },
          { heading: "Aid and debt", body: "Development aid and debt relief aim to help poorer countries. Aid can fund infrastructure; debt burdens limit spending on health and education." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An MNC builds a factory in a developing country. Give one benefit and one criticism.",
          solution: "Benefit: jobs and technology transfer. Criticism: profits may be repatriated, limiting local benefit.",
        },
      },
      questions: [
        {
          id: "olec-u5-mnc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A multinational corporation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A company operating in multiple countries" }, { id: "b", text: "A government agency" }, { id: "c", text: "A trade union" }, { id: "d", text: "A single-country firm" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "MNC", statement: "Multi-country." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u5-mnc-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two ways MNCs help developing countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "MNC benefits", statement: "Contributions." }], steps: [
            { reasoning: "Investment, jobs, technology, exports — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: investment, jobs, technology transfer, export earnings." },
        },
        {
          id: "olec-u5-mnc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one criticism of MNCs in developing countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "MNC criticisms", statement: "Drawbacks." }], steps: [
            { reasoning: "Profit repatriation limits local benefit.", marks: 1, markCode: "AO2" },
            { reasoning: "Tax avoidance reduces government revenue.", marks: 1, markCode: "AO2" },
            { reasoning: "Low wages/exploitation concerns.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Profit repatriation, tax avoidance, or exploitative labour practices." },
        },
        {
          id: "olec-u5-mnc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "MNCs and development review.",
          parts: [
            { label: "a", prompt: "Define MNC.", marks: 1 },
            { label: "b", prompt: "Two benefits for developing countries?", marks: 2 },
            { label: "c", prompt: "Two criticisms?", marks: 2 },
            { label: "d", prompt: "What is development aid?", marks: 1 },
            { label: "e", prompt: "Why is debt a problem for developing countries?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "MNCs/development", statement: "Role, aid, debt." },
          ], steps: [
            { part: "a", reasoning: "Multi-country company.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Investment/jobs/technology/exports.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Repatriation/tax avoidance/exploitation.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Government/charity transfers to poorer countries.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Interest payments crowd out health/education spending.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Limits development investment.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) benefits (c) criticisms (d) aid (e) debt problem" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u5-5-3-notes", title: "Globalisation — notes", summary: "Globalisation, MNCs, aid and debt.",
      sections: [
        { heading: "Globalisation", body: "Integration of economies; benefits (cheap goods, jobs) vs costs (job losses, inequality)." },
        { heading: "Development", body: "MNCs bring investment but repatriate profits; aid helps; debt burdens limit spending." },
      ] },
  ],
};
