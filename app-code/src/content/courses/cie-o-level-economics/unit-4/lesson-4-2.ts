import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "olec-u4-lesson-4-2",
  code: "4-2",
  title: "Unemployment",
  goal: "I CAN distinguish between types of unemployment and their causes.",
  standards: ["2281 4.2"],
  vocabulary: [
    { term: "Unemployment", definition: "People able and willing to work but without jobs." },
    { term: "Unemployment rate", definition: "Unemployed / labour force × 100." },
    { term: "Frictional unemployment", definition: "Temporary unemployment while searching for a job." },
    { term: "Structural unemployment", definition: "Mismatched skills or industries declining." },
    { term: "Cyclical unemployment", definition: "Unemployment during economic downturns." },
    { term: "Seasonal unemployment", definition: "Unemployment during certain seasons." },
    { term: "Full employment", definition: "Only frictional/seasonal unemployment remains." },
  ],
  concepts: [
    {
      id: "olec-u4-unemployment",
      title: "Types of unemployment",
      skill: "Explain frictional, structural, cyclical and seasonal unemployment.",
      lesson: {
        sections: [
          { heading: "Measuring unemployment", body: "Unemployment rate = unemployed / labour force × 100. Includes those actively seeking work." },
          { heading: "Types", body: "- **Frictional**: between jobs — normal, short-term.\n- **Structural**: skills mismatch or declining industries — needs retraining or relocation.\n- **Cyclical**: economic downturn — demand falls.\n- **Seasonal**: predictable patterns (tourism, farming)." },
          { heading: "Costs", body: "Lost output, wasted resources, social problems, lower incomes. Government may use policies to reduce cyclical unemployment." },
        ],
        keyFormulas: [
          { name: "Unemployment rate", statement: "Unemployed / Labour force × 100" },
        ],
        workedExample: {
          problem: "A factory closes permanently and workers can't find similar jobs elsewhere. What type of unemployment?",
          solution: "Structural — the industry declined and skills may not transfer.",
        },
      },
      questions: [
        {
          id: "olec-u4-un-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Unemployment rate equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unemployed / labour force × 100" }, { id: "b", text: "Unemployed / population × 100" }, { id: "c", text: "Jobs / population × 100" }, { id: "d", text: "Unemployed / GDP × 100" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Unemployment rate", statement: "Formula." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u4-un-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish frictional and structural unemployment.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Unemployment types", statement: "Frictional vs structural." }], steps: [
            { reasoning: "Frictional=searching between jobs; structural=skills/industry mismatch.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Frictional = temporary job search; structural = mismatch/declining industry." },
        },
        {
          id: "olec-u4-un-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain cyclical unemployment.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cyclical unemployment", statement: "Demand falls." }], steps: [
            { reasoning: "Occurs during economic downturns/recessions.", marks: 1, markCode: "AO2" },
            { reasoning: "Demand for goods falls → firms cut output → lay off workers.", marks: 1, markCode: "AO2" },
            { reasoning: "Rises when economy recovers.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Cyclical unemployment rises in recessions as demand falls, and falls in booms." },
        },
        {
          id: "olec-u4-un-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Unemployment review.",
          parts: [
            { label: "a", prompt: "Unemployment rate formula?", marks: 1 },
            { label: "b", prompt: "Define frictional unemployment.", marks: 1 },
            { label: "c", prompt: "Define structural unemployment.", marks: 1 },
            { label: "d", prompt: "Define cyclical unemployment.", marks: 1 },
            { label: "e", prompt: "Give an example of seasonal unemployment.", marks: 1 },
            { label: "f", prompt: "Two costs of unemployment?", marks: 2 },
            { label: "g", prompt: "What is full employment?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Unemployment", statement: "Types, costs and concepts." },
          ], steps: [
            { part: "a", reasoning: "Unemployed/labour force × 100.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Temporary job search.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Skills/industry mismatch.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Downturn demand fall.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Tourism, farming, construction.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Lost output, social problems, lower income.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "g", reasoning: "Only frictional/seasonal remains.", marks: 1, markCode: "AO1" },
            { part: "g", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) formula (b) frictional (c) structural (d) cyclical (e) seasonal ex (f) costs (g) full emp" },
        },
      ],
    },
    {
      id: "olec-u4-policy",
      title: "Government Policy Responses",
      skill: "Explain fiscal and monetary policy for managing unemployment and growth.",
      lesson: {
        sections: [
          { heading: "Fiscal policy", body: "Government spending and taxation. To fight unemployment: increase spending or cut taxes (stimulus). To control inflation: reduce spending or raise taxes." },
          { heading: "Monetary policy", body: "Central bank controls interest rates and money supply. Lower rates → cheaper borrowing → more spending → growth. Higher rates → less spending → control inflation." },
          { heading: "Trade-offs", body: "Policies have trade-offs: stimulus may cause inflation; tightening may cause unemployment. Governments balance objectives." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Unemployment is rising. What fiscal policy could the government use?",
          solution: "Increase government spending on infrastructure or cut income tax to boost demand and create jobs.",
        },
      },
      questions: [
        {
          id: "olec-u4-pol-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Fiscal policy involves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Government spending and taxation" }, { id: "b", text: "Interest rates" }, { id: "c", text: "Exchange rates" }, { id: "d", text: "Trade agreements" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Fiscal policy", statement: "G+T." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u4-pol-q2", difficulty: "core", totalMarks: 2,
          stem: "To reduce cyclical unemployment, the central bank could…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Monetary policy", statement: "Lower rates." }], steps: [
            { reasoning: "Cut interest rates to boost borrowing and spending.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct policy.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Lower interest rates — cheaper borrowing boosts demand." },
        },
        {
          id: "olec-u4-pol-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the trade-off between growth and inflation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Policy trade-off", statement: "Growth vs inflation." }], steps: [
            { reasoning: "Stimulus boosts growth but may cause inflation.", marks: 1, markCode: "AO2" },
            { reasoning: "Tightening controls inflation but slows growth.", marks: 1, markCode: "AO2" },
            { reasoning: "Can't maximise both simultaneously.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Stimulus → growth+inflation; tightening → low inflation+slow growth. Trade-off exists." },
        },
        {
          id: "olec-u4-pol-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Policy review.",
          parts: [
            { label: "a", prompt: "Define fiscal policy.", marks: 1 },
            { label: "b", prompt: "Define monetary policy.", marks: 1 },
            { label: "c", prompt: "How does fiscal policy fight unemployment?", marks: 2 },
            { label: "d", prompt: "How does monetary policy fight inflation?", marks: 2 },
            { label: "e", prompt: "Explain a policy trade-off.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Policy", statement: "Fiscal, monetary, trade-offs." },
          ], steps: [
            { part: "a", reasoning: "G spending + taxation.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Interest rates + money supply.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "More spending or tax cuts boost demand.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Creates jobs.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Raise rates → less borrowing/spending.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Controls demand/inflation.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Stimulus→inflation; tightening→unemployment.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Can't maximise both.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear trade-off.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) fiscal (b) monetary (c) fiscal→jobs (d) monetary→inflation (e) trade-off" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u4-4-2-notes", title: "Unemployment and policy — notes", summary: "Types of unemployment and government responses.",
      sections: [
        { heading: "Unemployment", body: "Rate = unemployed/labour force. Types: frictional, structural, cyclical, seasonal." },
        { heading: "Policy", body: "Fiscal = G+T; monetary = interest rates. Trade-offs between growth, unemployment, inflation." },
      ] },
  ],
};
