import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olbus-u2-lesson-2-1",
  code: "2-1",
  title: "Market Research",
  goal: "I CAN explain the purpose and methods of market research.",
  standards: ["7100 2.1"],
  vocabulary: [
    { term: "Market research", definition: "Gathering and analysing information about markets and customers." },
    { term: "Primary research", definition: "Data collected first-hand by the business." },
    { term: "Secondary research", definition: "Data already collected by others." },
    { term: "Questionnaire", definition: "Written set of questions for customers." },
    { term: "Survey", definition: "Systematic collection of data from a sample." },
    { term: "Sample", definition: "Subset of the target population surveyed." },
    { term: "Target market", definition: "Specific group of customers a business aims to serve." },
  ],
  concepts: [
    {
      id: "olbus-u2-purpose",
      title: "Purpose of market research",
      skill: "Explain why businesses conduct market research.",
      lesson: {
        sections: [
          { heading: "Why research?", body: "Market research reduces uncertainty. It helps businesses understand customer needs, identify market size, assess competition, test new products and make informed decisions about the marketing mix." },
          { heading: "Benefits", body: "- Avoids wasted investment in unwanted products.\n- Identifies opportunities and threats.\n- Improves pricing, product design and promotion decisions.\n- Reduces risk of business failure." },
          { heading: "Target market", body: "Research helps define the target market — the specific group of customers most likely to buy, based on age, income, location or interests." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why would a restaurant conduct market research before opening?",
          solution: "To understand local customer preferences, assess competition, and decide on menu, prices and location.",
        },
      },
      questions: [
        {
          id: "olbus-u2-pu-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Market research is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gathering information about markets and customers" }, { id: "b", text: "Selling products" }, { id: "c", text: "Making products" }, { id: "d", text: "Managing staff" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Market research", statement: "Info gathering." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-pu-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two benefits of market research.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Benefits", statement: "Informed decisions." }], steps: [
            { reasoning: "Understand customer needs; reduce risk / identify opportunities.", marks: 1, markCode: "AO1" },
            { reasoning: "Two listed.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: understand needs, reduce risk, identify opportunities, improve decisions." },
        },
        {
          id: "olbus-u2-pu-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why market research is especially important for a new business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "New business", statement: "Higher uncertainty." }], steps: [
            { reasoning: "New businesses lack experience of the market.", marks: 1, markCode: "AO2" },
            { reasoning: "Research reduces risk of failure.", marks: 1, markCode: "AO2" },
            { reasoning: "Helps secure finance by proving viability.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Research compensates for lack of experience and reduces failure risk." },
        },
        {
          id: "olbus-u2-pu-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Market research purpose review.",
          parts: [
            { label: "a", prompt: "Define market research.", marks: 1 },
            { label: "b", prompt: "Name three benefits.", marks: 2 },
            { label: "c", prompt: "Define target market.", marks: 2 },
            { label: "d", prompt: "Why is research vital for new businesses?", marks: 2 },
            { label: "e", prompt: "Give an example of research informing a decision.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Market research", statement: "Purpose and application." },
          ], steps: [
            { part: "a", reasoning: "Gathering/analyzing market info.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Three benefits.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Specific customer group targeted.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Reduces uncertainty/risk.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Valid example given.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear link to decision.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 benefits (c) target def (d) risk reduction (e) example" },
        },
      ],
    },
    {
      id: "olbus-u2-methods",
      title: "Primary and Secondary Research",
      skill: "Distinguish between primary and secondary research methods and their uses.",
      lesson: {
        sections: [
          { heading: "Primary research", body: "Collected first-hand by the business: **questionnaires**, **interviews**, **observations**, **experiments**. Advantages: specific to needs, up-to-date. Disadvantages: costly, time-consuming." },
          { heading: "Secondary research", body: "Uses existing data: government statistics, market reports, competitor websites, newspapers, surveys by others. Advantages: cheap, quick. Disadvantages: may be outdated, not specific." },
          { heading: "Choosing", body: "Businesses often combine both — secondary for background, primary for specific questions." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A café wants to know if customers prefer oat or dairy milk. Which research type?",
          solution: "Primary research — a questionnaire or observation of actual customers gives specific, current data.",
        },
      },
      questions: [
        {
          id: "olbus-u2-mr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Primary research is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Data collected first-hand by the business" }, { id: "b", text: "Data from the internet" }, { id: "c", text: "Data from government reports" }, { id: "d", text: "Data from competitors" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Primary research", statement: "First-hand." }], steps: [{ reasoning: "Collected directly.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u2-mr-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two primary research methods.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Primary methods", statement: "Direct collection." }], steps: [
            { reasoning: "Questionnaires, interviews, observations, experiments — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: questionnaires, interviews, observations, experiments." },
        },
        {
          id: "olbus-u2-mr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Compare primary and secondary research — give one advantage of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Research comparison", statement: "Trade-offs." }], steps: [
            { reasoning: "Primary: specific and up-to-date; Secondary: cheap and quick.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Both advantages stated.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Primary = specific/current; secondary = cheap/fast." },
        },
        {
          id: "olbus-u2-mr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Research methods review.",
          parts: [
            { label: "a", prompt: "Define primary research.", marks: 1 },
            { label: "b", prompt: "Define secondary research.", marks: 1 },
            { label: "c", prompt: "Name two primary methods.", marks: 2 },
            { label: "d", prompt: "Name two secondary sources.", marks: 2 },
            { label: "e", prompt: "When would a business use each?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Research methods", statement: "Types, examples, use cases." },
          ], steps: [
            { part: "a", reasoning: "First-hand collection.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Existing data.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two methods.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Government stats, market reports, newspapers, competitor data — any two.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Primary for specific/current needs.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Secondary for background/general info.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear application.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) first-hand (b) existing (c) 2 methods (d) 2 sources (e) use cases" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u2-2-1-notes", title: "Market research — notes", summary: "Purpose and methods of market research.",
      sections: [
        { heading: "Purpose", body: "Reduce uncertainty, understand customers, identify opportunities, improve decisions." },
        { heading: "Methods", body: "Primary: questionnaires, interviews, observations (specific but costly). Secondary: existing data (cheap but may be outdated)." },
      ] },
  ],
};
