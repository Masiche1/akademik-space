import type { Lesson } from "../../../types.ts";

export const lesson67: Lesson = {
  id: "cieige-u6-lesson-6-7",
  code: "6-7",
  title: "Aggregate Demand, Supply and the Business Cycle",
  goal: "I CAN analyse AD/AS equilibrium, economic fluctuations and stabilisation policy.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 6: macroeconomics"],
  vocabulary: [
    {
      term: "Aggregate demand (AD)",
      definition: "Total spending on domestically produced goods/services.",
    },
    {
      term: "Aggregate supply (AS)",
      definition: "Total output an economy can produce.",
    },
    {
      term: "Business cycle",
      definition: "Fluctuations between boom and recession.",
    },
    {
      term: "Stagflation",
      definition: "High inflation combined with high unemployment.",
    },
    {
      term: "Output gap",
      definition: "Difference between actual and potential output.",
    },
    {
      term: "Recession",
      definition: "Two consecutive quarters of falling real GDP.",
    },
  ],
  concepts: [
    {
      id: "cieige-u6l7-c1-ad",
      title: "Aggregate demand and supply",
      skill: "Explain AD/AS components, equilibrium and shifts.",
      lesson: {
        sections: [
          {
            heading: "AD components",
            body: "**AD = C + I + G + (X − M)** — consumption, investment, government spending, net exports. AD slopes downward (wealth, interest rate, exchange rate effects). Shifts right with higher C/I/G/X or lower M; left with opposite. **AS** slopes upward (sticky wages/prices) then vertical at full capacity. Equilibrium where AD = AS.",
          },
          {
            heading: "AD/AS outcomes",
            body: "AD < AS → recessionary gap (unemployment). AD > AS → inflationary gap (price pressure). In long run, AS vertical at potential output — demand increases only raise prices, not output.",
          },
        ],
        keyFormulas: [
          { name: "AD", statement: "C + I + G + (X−M)" },
          {
            name: "AD slope",
            statement: "Downward — wealth/interest/exchange effects",
          },
          { name: "Equilibrium", statement: "AD = AS" },
        ],
        workedExample: {
          problem:
            "AD shifts right (higher government spending). Short-run vs long-run effects?",
          solution:
            "Short run: output and prices rise. Long run: AS vertical at potential → only prices rise (inflation), output unchanged.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l7c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Aggregate demand equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "G + T" },
              { id: "b", text: "C + I only" },
              { id: "c", text: "C + I + G + (X−M)" },
              { id: "d", text: "X − M only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "AD", statement: "C+I+G+NX." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** C+I+G+(X−M)",
            commonErrors: ["Missing component."],
          },
        },
        {
          id: "cieige-q-u6l7c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why does AD slope downward?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD slope",
                statement: "Wealth, interest, exchange effects.",
              },
            ],
            steps: [
              { reasoning: "One mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Another or clearer.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "As price level rises, real wealth falls, interest rates rise (reducing borrowing), and exports become dearer — all reducing quantity demanded.",
            commonErrors: ["Only one mechanism."],
          },
        },
        {
          id: "cieige-q-u6l7c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between short-run and long-run AS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AS curves",
                statement: "SR upward, LR vertical.",
              },
            ],
            steps: [
              { reasoning: "SR AS explained.", marks: 1, markCode: "M" },
              { reasoning: "LR AS explained.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Short-run AS slopes up (sticky wages/prices allow output response); long-run AS is vertical at potential output — only prices adjust, not output.",
            commonErrors: ["Treating them same."],
          },
        },
        {
          id: "cieige-q-u6l7c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "AD increases while economy is below full capacity. Analyse short-run and long-run effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "AD shift",
                statement: "SR: output+prices; LR: prices only.",
              },
            ],
            steps: [
              { reasoning: "SR: output↑, prices↑.", marks: 1, markCode: "M" },
              {
                reasoning: "LR: AS vertical → prices only.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Wage adjustment.", marks: 1, markCode: "A" },
              { reasoning: "Coherent answer.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Short run: spare capacity → output rises, moderate price rise. Long run: wages/prices adjust, AS shifts left → output back to potential, prices higher (inflation).",
            commonErrors: ["Ignoring LR adjustment."],
          },
        },
        {
          id: "cieige-q-u6l7c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Why can't demand management raise output above potential in the long run?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Potential output",
                statement: "LR AS vertical — supply-determined.",
              },
            ],
            steps: [
              {
                reasoning: "Potential output concept.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Why vertical.", marks: 1, markCode: "M" },
              { reasoning: "Only inflation results.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "At full capacity, extra demand only bids up prices — wages and input costs rise, shifting AS left until output returns to potential; only supply-side improvements raise potential output.",
            commonErrors: ["Thinking demand always works."],
          },
        },
        {
          id: "cieige-q-u6l7c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'potential output'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Potential output",
                statement: "Maximum sustainable output.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Determined by.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The maximum output an economy can sustainably produce at full employment — determined by resources, technology and institutions, not demand.",
            commonErrors: ["Confusing with actual GDP."],
          },
        },
        {
          id: "cieige-q-u6l7c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In AD = C+I+G+(X−M), 'X−M' represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Net exports" },
              { id: "b", text: "Consumption" },
              { id: "c", text: "Investment" },
              { id: "d", text: "Government spending" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "X−M", statement: "Net exports." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Net exports",
            commonErrors: ["Wrong component."],
          },
        },
        {
          id: "cieige-q-u6l7c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a fall in consumer confidence affect AD?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Confidence effect",
                statement: "C↓ → AD↓.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Multiplier effect.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lower confidence → less consumption → AD shifts left → output and employment fall — the 'animal spirits' channel amplifying downturns.",
            commonErrors: ["No AD link."],
          },
        },
        {
          id: "cieige-q-u6l7c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'cost-push' vs 'demand-pull' inflation in AD/AS terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation types",
                statement: "AS shift vs AD shift.",
              },
            ],
            steps: [
              { reasoning: "Demand-pull: AD>AS.", marks: 1, markCode: "M" },
              {
                reasoning: "Cost-push: AS shifts left.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Policy difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Demand-pull: AD shifts right past capacity → prices rise. Cost-push: AS shifts left (higher costs) → prices rise AND output falls — different causes needing different policies.",
            commonErrors: ["Treating same."],
          },
        },
        {
          id: "cieige-q-u6l7c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the effects of a positive supply shock (e.g. cheap oil) on AD/AS equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply shock",
                statement: "AS right → lower prices, higher output.",
              },
            ],
            steps: [
              { reasoning: "AS shift effect.", marks: 1, markCode: "M" },
              { reasoning: "Price effect.", marks: 1, markCode: "M" },
              { reasoning: "AD interaction.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cheap oil lowers costs → AS shifts right → output rises, prices fall; if AD also rises (cheaper energy boosts spending), even better — 'supply-side boom'.",
            commonErrors: ["Only price effect."],
          },
        },
        {
          id: "cieige-q-u6l7c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If aggregate demand shifts left while short-run AS is unchanged, equilibrium output and the price level both:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Move in opposite directions" },
              { id: "b", text: "Rise" },
              { id: "c", text: "Stay the same" },
              { id: "d", text: "Fall" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "AD shift",
                statement: "AD left → output↓, prices↓.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Both fall",
            commonErrors: ["Reversing direction."],
          },
        },
        {
          id: "cieige-q-u6l7c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the long run, when AS is vertical at potential output, an increase in AD causes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower prices" },
              { id: "b", text: "Higher output and higher prices equally" },
              {
                id: "c",
                text: "Higher prices but unchanged output",
              },
              { id: "d", text: "Higher output but unchanged prices" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LR AS",
                statement: "Vertical — only prices adjust.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Higher prices, unchanged output",
            commonErrors: ["Ignoring vertical AS."],
          },
        },
        {
          id: "cieige-q-u6l7c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "An economy already at full capacity experiences a rise in AD. The most likely result is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deflation" },
              { id: "b", text: "Demand-pull inflation" },
              { id: "c", text: "Lower unemployment" },
              { id: "d", text: "Higher output" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand-pull inflation",
                statement: "AD > capacity → prices rise.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Demand-pull inflation",
            commonErrors: ["Expecting more output."],
          },
        },
        {
          id: "cieige-q-u6l7c1-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain the 'wealth effect' on aggregate demand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wealth effect",
                statement: "Asset prices → spending.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "AD link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When asset prices (houses, shares) rise, people feel wealthier and spend more → consumption rises → AD shifts right; falling asset prices do the reverse.",
            commonErrors: ["No AD link."],
          },
        },
        {
          id: "cieige-q-u6l7c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the AD curve slopes downward, focusing on the interest rate effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest rate effect",
                statement: "Price level → real money demand → rates → spending.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              {
                reasoning: "Link to spending components.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "As the price level rises, the same money buys less, raising interest rates to restore money-market equilibrium → borrowing falls and saving rises → consumption and investment fall → quantity of AD demanded decreases.",
            commonErrors: ["Only naming effect without mechanism."],
          },
        },
        {
          id: "cieige-q-u6l7c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the short-run and long-run effects of a negative supply shock (e.g. a sharp rise in oil prices).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative supply shock",
                statement: "AS left → higher prices, lower output.",
              },
            ],
            steps: [
              { reasoning: "AS shift and price effect.", marks: 1, markCode: "M" },
              { reasoning: "Output/unemployment effect.", marks: 1, markCode: "M" },
              { reasoning: "SR vs LR distinction.", marks: 1, markCode: "M" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Oil price rise raises costs → AS shifts left → prices rise AND output falls (cost-push inflation + recession risk); in long run, wages adjust and AS may shift back, but if the shock persists it can cause stagflation.",
            commonErrors: ["Treating as demand shock."],
          },
        },
      ],
    },
    {
      id: "cieige-u6l7-c2-cycle",
      title: "Business cycle and stabilisation",
      skill: "Explain economic fluctuations, recession and policy responses.",
      lesson: {
        sections: [
          {
            heading: "Business cycle",
            body: "Economies fluctuate through **boom** (high growth, low unemployment, rising prices), **recession** (falling output, rising unemployment), **depression** (severe prolonged downturn), **recovery**. Causes: demand shocks, confidence cycles, investment volatility, external shocks. **Output gap** measures deviation from potential.",
          },
          {
            heading: "Stabilisation policy",
            body: "**Fiscal**: stimulus in recession (G↑/T↓), austerity in boom. **Monetary**: cut rates in recession, raise in boom. **Automatic stabilisers** cushion without action. Goal: smooth cycle, maintain full employment and price stability — 'fine-tuning' is hard due to lags and uncertainty.",
          },
        ],
        keyFormulas: [
          {
            name: "Recession",
            statement: "2 consecutive quarters of falling real GDP",
          },
          { name: "Output gap", statement: "Actual − potential output" },
          {
            name: "Stagflation",
            statement: "High inflation + high unemployment",
          },
        ],
        workedExample: {
          problem:
            "Economy in recession: GDP falling, unemployment rising. What policies?",
          solution:
            "Expansionary fiscal (G↑ or T↓) and monetary (cut rates) to boost AD — plus automatic stabilisers already cushioning.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l7c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recession is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High unemployment" },
              { id: "b", text: "Any GDP fall" },
              { id: "c", text: "Two consecutive quarters of falling real GDP" },
              { id: "d", text: "Falling prices" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recession",
                statement: "2 quarters falling GDP.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 2 quarters falling GDP",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "cieige-q-u6l7c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'stagflation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stagflation",
                statement: "High inflation + high unemployment.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why it's hard.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High inflation combined with high unemployment/stagnation — hardest to treat because policies for one worsen the other.",
            commonErrors: ["Confusing with normal inflation."],
          },
        },
        {
          id: "cieige-q-u6l7c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'output gap'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Output gap",
                statement: "Actual vs potential output.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Positive/negative.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Difference between actual and potential output — negative gap (recession, spare capacity) calls for stimulus; positive gap (overheating) calls for tightening.",
            commonErrors: ["Confusing with trade balance."],
          },
        },
        {
          id: "cieige-q-u6l7c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why is 'fine-tuning' the economy difficult?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fine-tuning",
                statement: "Lags and uncertainty.",
              },
            ],
            steps: [
              { reasoning: "Time lag problem.", marks: 1, markCode: "M" },
              { reasoning: "Data uncertainty.", marks: 1, markCode: "M" },
              { reasoning: "Unpredictable shocks.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Policy effects take 6-18 months, economic data is revised, and unpredictable shocks hit — by the time stimulus works, conditions may have reversed.",
            commonErrors: ["Assuming perfect control."],
          },
        },
        {
          id: "cieige-q-u6l7c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether governments should try to eliminate the business cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cycle debate",
                statement: "Stabilisation vs letting market adjust.",
              },
            ],
            steps: [
              { reasoning: "Case for intervention.", marks: 1, markCode: "M" },
              { reasoning: "Case against.", marks: 1, markCode: "M" },
              { reasoning: "Realistic assessment.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Eliminating cycles is unrealistic — but smoothing severe downturns via automatic stabilisers and timely stimulus reduces welfare losses; aim for stability not perfection.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l7c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two causes of economic fluctuations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cycle causes",
                statement: "Demand shocks, confidence, investment.",
              },
            ],
            steps: [
              { reasoning: "Two valid causes.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. changes in consumer/investor confidence (animal spirits) and external shocks (oil prices, financial crises) — both shift AD unpredictably.",
            commonErrors: ["Listing without explanation."],
          },
        },
        {
          id: "cieige-q-u6l7c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During a boom, unemployment typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Falls" },
              { id: "b", text: "Stays same" },
              { id: "c", text: "Becomes zero always" },
              { id: "d", text: "Rises" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Boom effect",
                statement: "Unemployment falls.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Falls",
            commonErrors: ["Reversing."],
          },
        },
        {
          id: "cieige-q-u6l7c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do automatic stabilisers help during a recession?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Automatic stabilisers",
                statement: "Progressive taxes + benefits cushion.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "M" },
              { reasoning: "Advantage.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tax revenues fall automatically while unemployment benefits rise — deficit widens without new legislation, cushioning disposable income and aggregate demand.",
            commonErrors: ["Thinking they need legislation."],
          },
        },
        {
          id: "cieige-q-u6l7c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a 'depression' worse than a recession?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depression",
                statement: "Severe prolonged downturn.",
              },
            ],
            steps: [
              { reasoning: "Definition/difference.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Depression = severe, prolonged recession (e.g. 1930s Great Depression) — mass unemployment, bank failures, output collapse; much harder to recover from.",
            commonErrors: ["Treating same as recession."],
          },
        },
        {
          id: "cieige-q-u6l7c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should governments prioritise low unemployment or low inflation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy trade-off",
                statement: "Phillips curve trade-off.",
              },
            ],
            steps: [
              { reasoning: "Unemployment case.", marks: 1, markCode: "M" },
              { reasoning: "Inflation case.", marks: 1, markCode: "M" },
              { reasoning: "Phillips curve.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Short-run trade-off exists (Phillips curve) but long-run no permanent trade-off — low stable inflation with high employment is achievable; priority depends on circumstances.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l7c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The business cycle describes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fluctuations of output between boom and recession" },
              { id: "b", text: "Steady economic growth" },
              { id: "c", text: "Changes in interest rates" },
              { id: "d", text: "Trade between countries" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business cycle",
                statement: "Boom-recession fluctuations.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Boom-recession fluctuations",
            commonErrors: ["Confusing with trend growth."],
          },
        },
        {
          id: "cieige-q-u6l7c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A negative output gap indicates that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Actual output is below potential output" },
              { id: "b", text: "Exports exceed imports" },
              { id: "c", text: "Actual output exceeds potential" },
              { id: "d", text: "The economy is at full capacity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Output gap",
                statement: "Actual − potential output.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Output below potential",
            commonErrors: ["Reversing sign."],
          },
        },
        {
          id: "cieige-q-u6l7c2-13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Stagflation creates a policy dilemma because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cannot be measured" },
              { id: "b", text: "It always resolves quickly" },
              {
                id: "c",
                text: "Policies to cut inflation tend to worsen unemployment, and vice versa",
              },
              { id: "d", text: "It only affects exports" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stagflation dilemma",
                statement: "Inflation and unemployment policies conflict.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Policies conflict",
            commonErrors: ["Not seeing the trade-off."],
          },
        },
        {
          id: "cieige-q-u6l7c2-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the main stages of the business cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cycle stages",
                statement: "Boom, recession, depression, recovery.",
              },
            ],
            steps: [
              { reasoning: "Stages named.", marks: 1, markCode: "M" },
              { reasoning: "Order/description.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Boom (peak growth, low unemployment) → recession (falling output) → depression (severe prolonged downturn) → recovery (output rising again).",
            commonErrors: ["Missing stages."],
          },
        },
        {
          id: "cieige-q-u6l7c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how discretionary fiscal policy can be used to smooth the business cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Counter-cyclical fiscal",
                statement: "Stimulus in recession, restraint in boom.",
              },
            ],
            steps: [
              { reasoning: "Recession response.", marks: 1, markCode: "M" },
              { reasoning: "Boom response.", marks: 1, markCode: "M" },
              { reasoning: "Difficulty noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "In recession: raise G or cut T to boost AD. In boom: reduce deficit/austerity to cool demand — but lags and uncertainty make timing hard.",
            commonErrors: ["One direction only."],
          },
        },
        {
          id: "cieige-q-u6l7c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should central banks target inflation or employment? Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy target",
                statement: "Price stability vs employment mandate.",
              },
            ],
            steps: [
              { reasoning: "Inflation targeting case.", marks: 1, markCode: "M" },
              { reasoning: "Employment targeting case.", marks: 1, markCode: "M" },
              { reasoning: "Conflict/compatibility.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Inflation targeting gives credibility and anchors expectations but may neglect unemployment; employment targeting risks inflation — many banks use inflation target with employment considered, as low stable inflation supports jobs long-run.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
