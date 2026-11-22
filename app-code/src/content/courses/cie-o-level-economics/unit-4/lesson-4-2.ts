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
            { id: "a", text: "Jobs / population × 100" },
            { id: "b", text: "Unemployed / population × 100" },
            { id: "c", text: "Unemployed / labour force × 100" },
            { id: "d", text: "Unemployed / GDP × 100" },
          ], correctChoiceId: "c" },
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
        {
          id: "olec-u4-un-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Unemployment is best defined as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "People working part time" },
            { id: "b", text: "People studying full time" },
            { id: "c", text: "People able and willing to work but without jobs" },
            { id: "d", text: "People who have retired" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Unemployment", statement: "Able and willing, no job." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u4-un-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A country has a labour force of 50 million and 2 million unemployed. (a) What is the unemployment rate in percent? (b) If unemployment rises to 2.5 million, what is the new rate in percent?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 4, unit: "percent" },
            { label: "b", answer: 5, unit: "percent" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Unemployment rate", statement: "Unemployed / labour force x 100." }], steps: [
            { part: "a", reasoning: "2/50 x 100 = 4%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "2.5/50 x 100 = 5%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 4% (b) 5%" },
        },
        {
          id: "olec-u4-un-q7", difficulty: "core", totalMarks: 1,
          stem: "Structural unemployment is mainly caused by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A temporary fall in consumer demand" },
            { id: "b", text: "A mismatch between workers' skills and available jobs" },
            { id: "c", text: "Seasonal changes in demand" },
            { id: "d", text: "Workers moving between jobs" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Structural unemployment", statement: "Skills/industry mismatch." }], steps: [{ reasoning: "Correct cause.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u4-un-q8", difficulty: "core", totalMarks: 3,
          stem: "A labour force of 40 million has 1.2 million unemployed. 0.4 million unemployed people then find jobs, and the labour force grows to 44 million with unemployment unchanged at 0.8 million. (a) What was the initial unemployment rate in percent? (b) What is the rate after people find jobs in percent? (c) What is the rate after the labour force grows in percent?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3, unit: "percent" },
            { label: "b", answer: 2, unit: "percent" },
            { label: "c", answer: 1.82, unit: "percent", tolerance: 0.01 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Unemployment rate", statement: "Unemployed / labour force x 100." }], steps: [
            { part: "a", reasoning: "1.2/40 x 100 = 3%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "0.8/40 x 100 = 2%.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "0.8/44 x 100 = 1.82%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 3% (b) 2% (c) 1.82%" },
        },
        {
          id: "olec-u4-un-q9", difficulty: "core", totalMarks: 2,
          stem: "Distinguish between cyclical and seasonal unemployment.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Cyclical vs seasonal", statement: "Demand cycle vs seasons." }], steps: [
            { reasoning: "Cyclical unemployment rises in recessions when demand falls; seasonal is predictable (tourism, farming).", marks: 1, markCode: "AO1" },
            { reasoning: "Clear distinction made.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Cyclical = downturn-driven; seasonal = predictable seasonal patterns." },
        },
        {
          id: "olec-u4-un-q10", difficulty: "core", totalMarks: 3,
          stem: "In an economy with a labour force of 30 million: frictional unemployment is 0.6 million, structural 0.9 million, cyclical 0.3 million and seasonal 0.2 million. (a) How many people are unemployed in millions? (b) What is the unemployment rate in percent? (c) How many people are employed in millions?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2, unit: "million" },
            { label: "b", answer: 6.67, unit: "percent", tolerance: 0.01 },
            { label: "c", answer: 28, unit: "million" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Unemployment calculation", statement: "Sum types, apply formula." }], steps: [
            { part: "a", reasoning: "0.6 + 0.9 + 0.3 + 0.2 = 2.0 million.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "2/30 x 100 = 6.67%.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "30 - 2 = 28 million employed.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 2 million (b) 6.67% (c) 28 million" },
        },
        {
          id: "olec-u4-un-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two costs of unemployment to an economy.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Unemployment costs", statement: "Economic and social." }], steps: [
            { reasoning: "Lost output — unemployed workers produce nothing, reducing GDP.", marks: 1, markCode: "AO2" },
            { reasoning: "Wasted resources — skills and labour go unused.", marks: 1, markCode: "AO2" },
            { reasoning: "Social costs — poverty, crime and health problems may rise.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of two costs.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Lost output and wasted resources, plus social problems such as poverty and ill health." },
        },
        {
          id: "olec-u4-un-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A labour force of 60 million has an unemployment rate of 5% in year one, falling to 3% in year two. (a) How many people were unemployed in year one in millions? (b) How many were unemployed in year two in millions? (c) How many jobs were created in millions? (d) How many people were employed in year two in millions?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3, unit: "million" },
            { label: "b", answer: 1.8, unit: "million" },
            { label: "c", answer: 1.2, unit: "million" },
            { label: "d", answer: 58.2, unit: "million" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Unemployment change", statement: "Rate applied to labour force." }], steps: [
            { part: "a", reasoning: "5% of 60m = 3.0 million.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "3% of 60m = 1.8 million.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "3.0 - 1.8 = 1.2 million jobs created.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "60 - 1.8 = 58.2 million employed.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 3m (b) 1.8m (c) 1.2m (d) 58.2m" },
        },
        {
          id: "olec-u4-un-q13", difficulty: "challenge", totalMarks: 5,
          stem: "Evaluate the view that some unemployment is inevitable in a modern economy.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Full employment debate", statement: "Frictional unemployment is normal." }], steps: [
            { reasoning: "Frictional unemployment occurs as workers move between jobs — normal and short-term.", marks: 1, markCode: "AO2" },
            { reasoning: "Seasonal unemployment is predictable in some industries.", marks: 1, markCode: "AO1" },
            { reasoning: "Some structural unemployment reflects changing technology and industries.", marks: 1, markCode: "AO2" },
            { reasoning: "But cyclical unemployment is avoidable through demand management.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement — full employment means only frictional/seasonal remains.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Some frictional and seasonal unemployment is inevitable; cyclical unemployment can be reduced by policy." },
        },
        {
          id: "olec-u4-un-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Full employment is said to exist when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Government employment is at maximum" },
            { id: "b", text: "Every adult has a job" },
            { id: "c", text: "Nobody is unemployed at all" },
            { id: "d", text: "Only frictional and seasonal unemployment remain" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Full employment", statement: "Natural rate only." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u4-un-q15", difficulty: "foundation", totalMarks: 1,
          stem: "Cyclical unemployment tends to rise when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Workers search for better jobs" },
            { id: "b", text: "Tourist season ends" },
            { id: "c", text: "The economy enters a recession and demand falls" },
            { id: "d", text: "An industry is automated" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Cyclical unemployment", statement: "Downturn-driven." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u4-un-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Unemployment review.",
          parts: [
            { label: "a", prompt: "Write the unemployment rate formula.", marks: 1 },
            { label: "b", prompt: "Define structural unemployment.", marks: 1 },
            { label: "c", prompt: "A factory closes and workers cannot find similar jobs. Identify the type of unemployment and explain.", marks: 2 },
            { label: "d", prompt: "Give two costs of unemployment.", marks: 2 },
            { label: "e", prompt: "Explain how government policy can reduce cyclical unemployment.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Unemployment", statement: "Types, costs and policy." },
          ], steps: [
            { part: "a", reasoning: "Unemployed / labour force x 100.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Skills/industry mismatch.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Structural unemployment — declining industry.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Lost output/wasted resources.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two costs named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Fiscal stimulus or lower interest rates boost demand.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Higher demand → firms hire more workers.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) formula (b) structural (c) structural ex (d) costs (e) policy" },
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
            { id: "a", text: "Exchange rates" },
            { id: "b", text: "Government spending and taxation" },
            { id: "c", text: "Interest rates" },
            { id: "d", text: "Trade agreements" },
          ], correctChoiceId: "b" },
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
        {
          id: "olec-u4-pol-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Monetary policy is conducted by the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Local councils" },
            { id: "b", text: "Central bank" },
            { id: "c", text: "Ministry of finance" },
            { id: "d", text: "Stock exchange" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Monetary policy", statement: "Central bank role." }], steps: [{ reasoning: "Central bank controls interest rates and money supply.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u4-pol-q6", difficulty: "foundation", totalMarks: 1,
          stem: "To reduce inflation, the central bank is most likely to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increase government spending" },
            { id: "b", text: "Cut taxes" },
            { id: "c", text: "Raise interest rates" },
            { id: "d", text: "Lower interest rates" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Monetary policy", statement: "Higher rates reduce demand." }], steps: [{ reasoning: "Higher rates reduce borrowing and spending, easing inflation.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-pol-q7", difficulty: "core", totalMarks: 2,
          stem: "A government raises spending on infrastructure by $8 billion and cuts taxes by $2 billion to stimulate the economy. (a) By how much does total government spending change in billions of dollars? (b) By how much does the budget deficit change in billions of dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 8, unit: "billion dollars" },
            { label: "b", answer: 10, unit: "billion dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Fiscal stimulus", statement: "G up, T down." }], steps: [
            { part: "a", reasoning: "Spending rises by $8 billion.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Higher spending plus lower tax revenue widens the deficit by $10 billion.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 8 (b) 10" },
        },
        {
          id: "olec-u4-pol-q8", difficulty: "core", totalMarks: 2,
          stem: "Explain how lower interest rates can help reduce cyclical unemployment.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Monetary policy", statement: "Lower rates boost demand." }], steps: [
            { reasoning: "Cheaper borrowing encourages spending and investment.", marks: 1, markCode: "AO2" },
            { reasoning: "Higher demand leads firms to hire more workers.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Lower rates boost borrowing and demand, so firms expand output and hire more workers." },
        },
        {
          id: "olec-u4-pol-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which is a likely drawback of expansionary fiscal policy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It reduces economic growth" },
            { id: "b", text: "It may increase the budget deficit and inflation" },
            { id: "c", text: "It lowers aggregate demand" },
            { id: "d", text: "It always reduces inflation" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Policy trade-off", statement: "Stimulus side-effects." }], steps: [{ reasoning: "Extra spending can widen the deficit and stoke inflation.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-pol-q10", difficulty: "core", totalMarks: 2,
          stem: "A country has a GDP of $500 billion and government spending of $125 billion. (a) What percentage of GDP is government spending? (b) If government spending rises to $150 billion with GDP unchanged, what is the new percentage?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 25, unit: "percent" },
            { label: "b", answer: 30, unit: "percent" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Government spending", statement: "Share of GDP." }], steps: [
            { part: "a", reasoning: "125 / 500 x 100 = 25%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "150 / 500 x 100 = 30%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 25% (b) 30%" },
        },
        {
          id: "olec-u4-pol-q11", difficulty: "foundation", totalMarks: 1,
          stem: "Monetary policy involves controlling…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Government spending" },
            { id: "b", text: "Trade tariffs" },
            { id: "c", text: "Interest rates and the money supply" },
            { id: "d", text: "Taxation" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Monetary policy", statement: "Rates + money supply." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u4-pol-q12", difficulty: "core", totalMarks: 3,
          stem: "Explain how a government can use fiscal policy to control demand-pull inflation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Fiscal policy", statement: "Reduce demand." }], steps: [
            { reasoning: "Reduce government spending and/or raise taxes.", marks: 1, markCode: "AO2" },
            { reasoning: "Lower demand reduces pressure on prices.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Cut spending or raise taxes to reduce aggregate demand and ease inflation." },
        },
        {
          id: "olec-u4-pol-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why policies designed to reduce unemployment may worsen inflation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Policy trade-off", statement: "Demand vs inflation." }], steps: [
            { reasoning: "Stimulus policies raise aggregate demand to create jobs.", marks: 1, markCode: "AO2" },
            { reasoning: "Higher demand can push up prices, causing inflation.", marks: 1, markCode: "AO2" },
            { reasoning: "The economy cannot always maximise growth, jobs and low inflation at once.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Boosting demand to cut unemployment can overheat the economy and raise inflation — a policy trade-off." },
        },
        {
          id: "olec-u4-pol-q14", difficulty: "core", totalMarks: 2,
          stem: "A country's central bank raises its interest rate from 3% to 5%. (a) By how many percentage points did the rate rise? (b) What is the percentage increase in the interest rate?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2, unit: "percentage points" },
            { label: "b", answer: 66.67, unit: "percent", tolerance: 0.01 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Interest rates", statement: "Change calculation." }], steps: [
            { part: "a", reasoning: "5 - 3 = 2 percentage points.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "2 / 3 x 100 = 66.67%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 2 (b) 66.67%" },
        },
        {
          id: "olec-u4-pol-q15", difficulty: "challenge", totalMarks: 1,
          stem: "Contractionary monetary policy typically involves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Raising interest rates and reducing the money supply" },
            { id: "b", text: "Increasing government spending" },
            { id: "c", text: "Cutting income tax" },
            { id: "d", text: "Lowering interest rates" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Monetary policy", statement: "Contractionary tools." }], steps: [{ reasoning: "Higher rates and less money reduce spending.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-pol-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Government policy — extended review.",
          parts: [
            { label: "a", prompt: "Define fiscal policy.", marks: 1 },
            { label: "b", prompt: "Define monetary policy.", marks: 1 },
            { label: "c", prompt: "Explain how expansionary fiscal policy affects the economy.", marks: 2 },
            { label: "d", prompt: "Explain how contractionary monetary policy affects inflation.", marks: 2 },
            { label: "e", prompt: "Explain why governments must balance policy objectives.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Policy", statement: "Fiscal, monetary and trade-offs." },
          ], steps: [
            { part: "a", reasoning: "Government spending and taxation.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Interest rates and money supply.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "More spending or tax cuts boost aggregate demand.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Raises growth and employment but may cause inflation/deficit.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Higher interest rates reduce borrowing and spending.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Lower demand eases inflationary pressure.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Policies to cut unemployment can raise inflation; tightening can raise unemployment.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Can't maximise all objectives at once.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear judgement.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) fiscal def (b) monetary def (c) expansionary effects (d) contractionary effects (e) balance objectives" },
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
