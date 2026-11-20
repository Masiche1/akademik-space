import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "econ-u4-lesson-4-2",
  code: "4-2",
  title: "Inflation",
  goal: "I CAN distinguish demand-pull and cost-push inflation, explain the costs of inflation, and evaluate policies used to control it.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    {
      term: "Inflation",
      definition: "A sustained increase in the general price level over time.",
    },
    {
      term: "CPI",
      definition:
        "Consumer Price Index — a measure of the average price of a basket of consumer goods and services.",
    },
    {
      term: "Demand-pull inflation",
      definition:
        "Inflation caused by aggregate demand exceeding aggregate supply capacity.",
    },
    {
      term: "Cost-push inflation",
      definition:
        "Inflation caused by rising production costs shifting aggregate supply left.",
    },
    {
      term: "Deflation",
      definition: "A sustained decrease in the general price level.",
    },
    {
      term: "Menu costs",
      definition:
        "The costs firms incur changing prices — reprinting menus, updating systems.",
    },
  ],
  concepts: [
    {
      id: "econ-u4-types-causes-inflation",
      title: "Types and Causes of Inflation",
      skill:
        "Distinguish demand-pull, cost-push and built-in inflation and explain their causes.",
      lesson: {
        sections: [
          {
            heading: "Measuring inflation",
            body: "Inflation is measured by the **CPI** (Consumer Price Index) or **RPI** — the % change in the price of a representative basket of goods. The inflation rate = $\\frac{CPI_{new} - CPI_{old}}{CPI_{old}} \\times 100$. **Deflation** is a sustained fall in prices; **disinflation** is a fall in the inflation rate (prices still rising, but slower); **hyperinflation** is extremely rapid inflation (>50% per month).",
          },
          {
            heading: "Demand-pull inflation",
            body: "**Demand-pull inflation** occurs when aggregate demand grows faster than aggregate supply — 'too much money chasing too few goods'. Causes: rapid AD growth, loose monetary/fiscal policy, consumer/ business confidence booms, or supply constraints. In an AD-AS diagram, AD shifts right beyond full-employment output.",
          },
          {
            heading: "Cost-push and built-in inflation",
            body: "**Cost-push inflation** results from rising costs of production (wages, raw materials, imported energy) shifting AS left — prices rise even with weak demand. **Built-in inflation** (wage-price spiral) occurs when workers demand higher wages to keep up with expected inflation, and firms pass costs on as higher prices — a self-fulfilling cycle.",
          },
        ],
        keyFormulas: [
          {
            name: "Inflation rate",
            statement: "$\\frac{CPI_{new}-CPI_{old}}{CPI_{old}} \\times 100$",
          },
          {
            name: "Demand-pull",
            statement: "AD > AS capacity → AD shifts right → inflation",
          },
          {
            name: "Cost-push",
            statement: "Costs rise → AS shifts left → inflation",
          },
        ],
        workedExample: {
          problem:
            "CPI rises from 100 to 103 over one year. Calculate the inflation rate.",
          solution: "Inflation rate = (103 − 100)/100 × 100 = 3%.",
        },
      },
      questions: [
        {
          id: "econ-u4-l42c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Demand-pull inflation is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rising production costs" },
              {
                id: "b",
                text: "Aggregate demand exceeding productive capacity",
              },
              { id: "c", text: "A fall in the money supply" },
              { id: "d", text: "Government budget surpluses" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demand-pull inflation",
                statement:
                  "AD growth outpaces AS capacity — too much demand chasing too little supply.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Demand-pull = excess aggregate demand relative to capacity.",
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
              "**(b)** Aggregate demand exceeding productive capacity",
            commonErrors: [
              "Confusing demand-pull (AD side) with cost-push (AS side).",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between inflation and disinflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inflation vs disinflation",
                statement:
                  "Inflation = rising prices; disinflation = falling inflation rate (prices still rising).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inflation is a sustained rise in the general price level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Disinflation means the inflation rate is falling — prices still rise but more slowly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Deflation is different again — an actual fall in the price level.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inflation = prices rising; disinflation = rate of rise slowing; deflation = prices falling.",
            commonErrors: [
              "Confusing disinflation with deflation — disinflation is not negative inflation.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The CPI rises from 105 to 108.4 over one year. Calculate the inflation rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "Inflation rate (%)", answer: 3.24, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inflation rate",
                statement:
                  "$\\frac{CPI_{new}-CPI_{old}}{CPI_{old}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Change in CPI = 108.4 − 105 = 3.4.",
                working: "108.4 - 105 = 3.4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by original CPI and multiply by 100.",
                working: "\\frac{3.4}{105} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inflation rate = 3.24%.",
                working: "= 3.24\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer stated with % symbol.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3.24%",
            commonErrors: ["Dividing by the new CPI instead of the old one."],
          },
        },
        {
          id: "econ-u4-l42c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes and consequences of cost-push inflation.",
          parts: [
            {
              label: "a",
              prompt: "Explain what causes cost-push inflation.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why cost-push inflation is difficult to control.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the consequences of cost-push inflation for the economy.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cost-push inflation",
                statement:
                  "Rising production costs shift AS left → prices rise, output falls.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Wage increases beyond productivity gains raise labour costs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Higher raw material or energy prices (e.g. oil) raise input costs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Imported inflation or exchange rate depreciation raises import costs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Monetary/fiscal tightening reduces demand but worsens unemployment — stagflation.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Supply-side policies are slow to take effect; costs may be outside government control.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Prices rise while output falls — worst of both worlds (stagflation).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Erodes real incomes, creates uncertainty, harms investment.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: particularly damaging because standard demand-management tools are ineffective.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Rising wages, input costs, imports. (b) Demand tools worsen unemployment; supply fixes are slow. (c) Stagflation — high inflation + low growth.",
            commonErrors: [
              "Treating cost-push like demand-pull — different causes and cures.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The CPI measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The price of all goods produced in a country" },
              {
                id: "b",
                text: "The average price of a representative basket of consumer goods and services",
              },
              { id: "c", text: "Total government spending" },
              { id: "d", text: "The exchange rate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CPI",
                statement:
                  "Consumer Price Index — average price of a basket of consumer goods and services.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The CPI tracks prices of goods and services typically bought by consumers.",
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
              "**(b)** The average price of a representative basket of consumer goods and services",
            commonErrors: [
              "Confusing CPI (consumer prices) with measures of total output like GDP.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Deflation is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fall in the inflation rate" },
              {
                id: "b",
                text: "A sustained decrease in the general price level",
              },
              { id: "c", text: "A rise in the cost of living" },
              { id: "d", text: "A fall in nominal GDP only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deflation",
                statement: "A sustained fall in the general price level.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deflation means prices are actually falling over time, not just rising more slowly.",
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
              "**(b)** A sustained decrease in the general price level",
            commonErrors: ["Confusing deflation with disinflation."],
          },
        },
        {
          id: "econ-u4-l42c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sudden doubling of world oil prices is most likely to cause which type of inflation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand-pull inflation" },
              { id: "b", text: "Cost-push inflation" },
              { id: "c", text: "Hyperinflation" },
              { id: "d", text: "Disinflation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cost-push inflation",
                statement:
                  "Higher input costs (e.g. oil) shift AS left → prices rise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Oil is a key input cost for many firms — higher prices raise production costs directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Firms pass costs on as higher prices — cost-push inflation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Cost-push inflation",
            commonErrors: [
              "Calling it demand-pull — the trigger is supply-side cost, not excess demand.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A wage-price spiral refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Workers demanding higher wages because they expect inflation, and firms raising prices to cover costs",
              },
              { id: "b", text: "Government spending causing prices to rise" },
              { id: "c", text: "Imports becoming more expensive" },
              { id: "d", text: "A fall in the money supply" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Built-in inflation",
                statement:
                  "Wage-price spiral — expected inflation drives wage demands, which drive prices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The spiral is self-reinforcing: higher expected inflation → higher wage demands → higher prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Workers demanding higher wages because they expect inflation, and firms raising prices",
            commonErrors: [
              "Confusing built-in inflation with one-off cost-push shocks.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Hyperinflation is typically defined as monthly inflation exceeding:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5%" },
              { id: "b", text: "10%" },
              { id: "c", text: "50%" },
              { id: "d", text: "100%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hyperinflation",
                statement:
                  "Extremely rapid inflation — conventionally defined as >50% per month.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hyperinflation is a technical term for runaway price increases far above normal rates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The conventional threshold is 50% per month.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 50%",
            commonErrors: [
              "Confusing hyperinflation with merely high inflation — the threshold is extreme.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how demand-pull inflation arises using the AD-AS framework.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain what happens when AD exceeds productive capacity.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Give two causes of such an AD increase.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand-pull inflation",
                statement:
                  "AD growth beyond AS capacity → firms raise prices → demand-pull inflation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "When AD rises faster than LRAS, the economy hits full capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Firms cannot expand output further — they respond by raising prices.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Result: inflation driven by excess demand ('too much money chasing too few goods').",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Any two: loose monetary policy (low rates), expansionary fiscal policy, consumer/business confidence booms, rising export demand.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Each raises a component of AD — C, I, G or X − M.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) AD beyond capacity → prices rise. (b) Loose policy, confidence booms, export demand.",
            commonErrors: [
              "Describing demand-pull as a supply-side phenomenon.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how imported inflation can occur in an economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imported inflation",
                statement:
                  "Rising world prices or currency depreciation raise import costs → domestic prices rise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If world prices of imported goods and raw materials rise, domestic firms face higher input costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Firms pass these costs on as higher prices for domestically produced goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A depreciation of the exchange rate makes imports more expensive, having the same effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is a form of cost-push inflation driven by external factors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Higher import/input costs or currency depreciation → firms raise prices → imported (cost-push) inflation.",
            commonErrors: [
              "Confusing imported inflation with inflation caused by domestic demand.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of a wage-price spiral and evaluate how it can be controlled.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain what a wage-price spiral is and why it is self-reinforcing.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why incomes policies (wage controls) often fail.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate alternative policies for controlling a wage-price spiral.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wage-price spiral",
                statement:
                  "Expected inflation → wage demands → higher costs → higher prices → higher expected inflation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Workers demand wage rises to protect real incomes against expected inflation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Firms face higher labour costs and raise prices to protect profits.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Higher prices validate inflation expectations — the cycle repeats (built-in inflation).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Wage controls are hard to enforce and create distortions — firms may cut jobs or find loopholes.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "They treat symptoms not causes; without credible anti-inflation policy expectations remain high.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Credible tight monetary/fiscal policy reduces inflation expectations at the source.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Supply-side policies raise productivity, reducing unit labour costs.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: incomes policies alone are ineffective — need credible demand restraint plus supply-side reform.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Expectations → wages → prices → expectations. (b) Controls distort and don't fix expectations. (c) Credible monetary/fiscal tightening plus supply-side policies.",
            commonErrors: [
              "Recommending wage freezes without addressing inflation expectations.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The CPI rises from 98 to 101.5 over one year. Calculate the inflation rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "Inflation rate (%)", answer: 3.57, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inflation rate",
                statement:
                  "$\\frac{CPI_{new}-CPI_{old}}{CPI_{old}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Change in CPI = 101.5 − 98 = 3.5.",
                working: "101.5 - 98 = 3.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by original CPI and multiply by 100.",
                working: "\\frac{3.5}{98} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inflation rate ≈ 3.57%.",
                working: "3.5 / 98 x 100 = 3.571",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer stated with % symbol.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3.57%",
            commonErrors: ["Dividing by the new CPI instead of the old one."],
          },
        },
        {
          id: "econ-u4-l42c1q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The CPI falls from 120 to 117.6 over one year. Calculate the inflation rate and state whether the economy is experiencing inflation or deflation.",
          response: {
            type: "numeric",
            parts: [{ label: "Inflation rate (%)", answer: -2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inflation rate",
                statement:
                  "$\\frac{CPI_{new}-CPI_{old}}{CPI_{old}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Change in CPI = 117.6 − 120 = −2.4.",
                working: "117.6 - 120 = -2.4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by original CPI and multiply by 100.",
                working: "-2.4 / 120 x 100 = -2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inflation rate = −2% — a negative rate means deflation.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer correct with sign and interpretation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "−2% — deflation",
            commonErrors: [
              "Reporting +2% — the CPI fell, so the rate is negative.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A country's CPI was 150 last year and is 156 this year. Last year's inflation rate was 4%. Calculate this year's inflation rate and state whether disinflation or rising inflation occurred.",
          response: {
            type: "numeric",
            parts: [{ label: "Inflation rate (%)", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inflation rate",
                statement:
                  "$\\frac{CPI_{new}-CPI_{old}}{CPI_{old}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Change in CPI = 156 − 150 = 6.",
                working: "156 - 150 = 6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inflation rate = 6/150 × 100 = 4%.",
                working: "6 / 150 x 100 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rate is unchanged at 4% — neither disinflation nor acceleration.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer correct.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Comparing to last year's 4% shows stability, not a change in trend.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4% — unchanged",
            commonErrors: [
              "Saying inflation rose or fell — the rate is the same as last year.",
            ],
          },
        },
        {
          id: "econ-u4-l42c1q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A developing country experiences rapidly rising prices after its government increases spending on infrastructure and wages rise across the economy.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain how each of the two described factors contributes to inflation.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Distinguish between the type of inflation each factor is most likely causing.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate which type of inflation is more damaging in this scenario.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation causes",
                statement:
                  "Government spending raises AD (demand-pull); wage rises raise costs (cost-push/built-in).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Higher government spending directly raises AD — demand-pull pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Wage increases raise firms' labour costs — cost-push pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "If wages chase expected inflation, a wage-price spiral (built-in) may emerge.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "Both effects compound — prices rise from both demand and cost sides.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Infrastructure spending → demand-pull; wage rises → cost-push or built-in inflation.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Cost-push is typically more damaging — it combines inflation with falling output (stagflation).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: the wage-driven component is more worrying because demand restraint won't fix it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Spending → AD up; wages → costs up. (b) Demand-pull vs cost-push/built-in. (c) Cost-push more damaging — stagflation risk.",
            commonErrors: [
              "Labelling all inflation as demand-pull — wage-driven inflation is cost-side.",
            ],
          },
        },
      ],
    },
    {
      id: "econ-u4-costs-policies-inflation",
      title: "Costs of Inflation and Policy Responses",
      skill:
        "Explain the costs of inflation (menu costs, shoe-leather costs, uncertainty, redistribution) and evaluate monetary and fiscal responses.",
      lesson: {
        sections: [
          {
            heading: "Costs of inflation",
            body: "Inflation imposes real costs: **menu costs** (firms updating prices), **shoe-leather costs** (people making extra transactions to avoid holding cash), **uncertainty** (hard to plan investment), **menu of redistribution** (debtors gain, creditors and savers on fixed incomes lose), and **international competitiveness** losses if inflation exceeds trading partners'. Low, stable inflation (~2%) is generally tolerated; high or volatile inflation is damaging.",
          },
          {
            heading: "Monetary and fiscal responses",
            body: "Central banks control inflation via **interest rates** — raising rates reduces AD and inflation expectations (the main tool for demand-pull). Governments use **fiscal policy** — reducing spending or raising taxes to cool AD. For cost-push, **supply-side policies** (productivity, labour market flexibility) address root causes. **Income policies** (wage-price controls) are generally ineffective long-term.",
          },
          {
            heading: "Trade-offs",
            body: "Reducing inflation via tighter policy usually raises unemployment — the **short-run Phillips curve** trade-off. Supply-side policies can reduce inflation without raising unemployment by increasing productive capacity, but they take time.",
          },
        ],
        keyFormulas: [
          {
            name: "Main inflation tool",
            statement: "Interest rates — reduce AD and expectations",
          },
          {
            name: "Key costs",
            statement:
              "Menu costs + shoe-leather costs + uncertainty + redistribution",
          },
          {
            name: "Trade-off",
            statement:
              "Lower inflation often means higher unemployment (short run)",
          },
        ],
        workedExample: {
          problem:
            "A central bank raises interest rates to fight 5% inflation. Explain the mechanism.",
          solution:
            "Higher rates increase borrowing costs and encourage saving → consumption and investment fall → AD decreases → downward pressure on prices. Expectations of lower future inflation reinforce the effect.",
        },
      },
      questions: [
        {
          id: "econ-u4-l42c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Menu costs are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Costs of importing goods" },
              { id: "b", text: "Costs firms incur changing their prices" },
              { id: "c", text: "Costs of unemployment" },
              { id: "d", text: "Government budget costs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Menu costs",
                statement:
                  "Costs of frequently updating prices — reprinting menus, changing labels, updating systems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Menu costs are the administrative costs of changing prices in an inflationary environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Costs firms incur changing their prices",
            commonErrors: [
              "Confusing menu costs with shoe-leather costs (transaction costs of holding less cash).",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how inflation redistributes income from savers to borrowers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation redistribution",
                statement:
                  "Fixed nominal debts lose real value; fixed incomes lose purchasing power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Borrowers repay fixed nominal amounts — inflation erodes the real value of repayments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Savers and those on fixed incomes lose purchasing power as prices rise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Result: redistribution from creditors/savers to debtors — often regressive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inflation erodes real value of fixed debts and incomes → savers lose, borrowers gain.",
            commonErrors: [
              "Ignoring that the redistribution depends on whether incomes/prices adjust.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why central banks target a low, stable rate of inflation (e.g. 2%) rather than zero inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation target",
                statement:
                  "Low positive inflation provides buffer against deflation and allows real wage adjustment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Zero inflation risks deflation — falling prices encourage delaying spending, hurting demand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A small positive rate gives room to cut real interest rates in recessions without hitting zero.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It allows relative wages and prices to adjust downward via lower nominal increases.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "2% is low enough to avoid the costs of high inflation while providing these buffers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Buffer against deflation + room for real rate cuts + wage flexibility → 2% target optimal.",
            commonErrors: [
              "Saying zero inflation is always best — it creates deflation risk.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of interest rate policy to control demand-pull inflation.",
          parts: [
            {
              label: "a",
              prompt: "Explain how higher interest rates reduce inflation.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the likely side effects of this policy.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether interest rate policy is sufficient to control inflation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest rate transmission",
                statement:
                  "Higher rates → less borrowing/more saving → lower C and I → lower AD → lower inflation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Higher rates raise cost of borrowing and reward saving.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Consumption and investment fall → AD decreases.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Lower AD reduces demand-pull inflationary pressure.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Side effect: higher unemployment as demand falls — the inflation-unemployment trade-off.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Also: higher exchange rate may hurt exporters; debt-servicing costs rise for governments/firms.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Effective for demand-pull inflation but slow (1-2 year lag).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Ineffective for cost-push inflation — would worsen unemployment without fixing supply.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: necessary but not sufficient — combine with supply-side policies for cost-push.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Rates up → AD down → inflation down. (b) Unemployment, exchange rate, debt costs. (c) Works for demand-pull; insufficient alone for cost-push.",
            commonErrors: [
              "Applying interest rate policy to cost-push inflation without recognising the trade-off.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Shoe-leather costs of inflation refer to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cost of updating price lists and menus" },
              {
                id: "b",
                text: "The cost of making extra transactions to reduce cash holdings",
              },
              { id: "c", text: "The cost of importing goods" },
              { id: "d", text: "The cost of unemployment benefits" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Shoe-leather costs",
                statement:
                  "Transaction costs from holding less cash — extra trips to the bank, more frequent purchases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inflation erodes the value of cash, so people hold less and transact more often.",
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
              "**(b)** The cost of making extra transactions to reduce cash holdings",
            commonErrors: [
              "Confusing shoe-leather costs with menu costs (price-changing costs).",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which group generally LOSES from unexpected inflation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Borrowers with fixed-rate mortgages" },
              { id: "b", text: "Savers on fixed incomes" },
              { id: "c", text: "Debtors repaying fixed nominal loans" },
              {
                id: "d",
                text: "Exporters in a country with higher inflation than rivals",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation redistribution",
                statement:
                  "Fixed nominal incomes and savings lose purchasing power; fixed debts lose real value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Savers and fixed-income earners see the real value of their money fall as prices rise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Savers on fixed incomes",
            commonErrors: [
              "Saying debtors always lose — inflation reduces the real burden of fixed nominal debt.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The primary tool used by central banks to control inflation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government spending cuts" },
              { id: "b", text: "Interest rate changes" },
              { id: "c", text: "Wage controls" },
              { id: "d", text: "Tariffs on imports" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monetary policy",
                statement:
                  "Central banks use interest rates to influence AD and inflation expectations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest rates are the central bank's main lever for influencing aggregate demand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Interest rate changes",
            commonErrors: [
              "Confusing fiscal tools (spending/taxes) with the central bank's monetary tool.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Which policy is most appropriate for tackling cost-push inflation caused by rising wages?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher interest rates to reduce demand" },
              { id: "b", text: "Supply-side policies to raise productivity" },
              { id: "c", text: "Increased government spending" },
              { id: "d", text: "Currency depreciation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cost-push policy",
                statement:
                  "Supply-side policies address the root cause — high unit labour costs — without causing unemployment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cost-push inflation comes from the supply side — demand restraint would worsen unemployment without fixing costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supply-side policies raise productivity so wages can rise without proportional price rises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Supply-side policies to raise productivity",
            commonErrors: [
              "Applying demand-side tools (interest rates) to a supply-side problem.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The short-run Phillips curve trade-off suggests that reducing inflation will typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduce unemployment permanently" },
              { id: "b", text: "Increase unemployment in the short run" },
              { id: "c", text: "Have no effect on unemployment" },
              { id: "d", text: "Increase inflation further" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation-unemployment trade-off",
                statement:
                  "Tighter policy lowers inflation but raises unemployment in the short run.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Demand restraint that lowers inflation also reduces output and jobs — the SRPC trade-off.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Increase unemployment in the short run",
            commonErrors: [
              "Thinking the trade-off is permanent — it only holds in the short run.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how inflation creates uncertainty that discourages investment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation uncertainty",
                statement:
                  "Unpredictable prices make it hard to calculate future costs and revenues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Firms cannot reliably forecast future prices, costs and demand when inflation is high or volatile.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This makes investment decisions risky — expected returns become uncertain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Firms respond by delaying or cancelling investment plans.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lower investment reduces long-run growth — an extra cost of inflation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unpredictable prices → uncertain returns → less investment → lower growth.",
            commonErrors: [
              "Only listing inflation costs — must explain the mechanism to investment.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how a central bank uses interest rates to reduce inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest rate transmission",
                statement:
                  "Higher rates → less borrowing/more saving → lower C and I → lower AD → lower inflation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher rates make borrowing more expensive and saving more attractive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consumption and investment fall → aggregate demand decreases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lower AD reduces demand-pull inflationary pressure; lower expected inflation reinforces the effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rates up → C and I down → AD down → inflation down.",
            commonErrors: [
              "Forgetting the expectations channel — credible policy reduces inflation expectations directly.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of fiscal policy (government spending and taxation) to control inflation.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain how contractionary fiscal policy reduces inflation.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain two limitations of using fiscal policy for inflation control.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate fiscal policy versus monetary policy for controlling inflation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contractionary fiscal policy",
                statement:
                  "Lower G or higher T reduces AD → reduces demand-pull inflation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cutting government spending or raising taxes reduces aggregate demand directly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Lower AD eases demand-pull inflationary pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Automatic stabilisers (progressive taxes, benefit cuts) also dampen demand as incomes rise.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Political constraints — governments face pressure to spend, making cuts unpopular and slow.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Ineffective for cost-push inflation — would worsen unemployment without fixing supply costs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Monetary policy is faster, more independent and directly targets inflation expectations.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Fiscal policy is blunter, politically constrained, and better suited to demand management broadly.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: monetary policy is the primary inflation tool; fiscal policy plays a supporting role.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Lower G/higher T → lower AD → lower inflation. (b) Political constraints, wrong tool for cost-push. (c) Monetary policy primary; fiscal supportive.",
            commonErrors: [
              "Treating fiscal and monetary policy as interchangeable for inflation.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The nominal interest rate is 6% and inflation is 2%. Calculate the real interest rate and explain its significance.",
          response: {
            type: "numeric",
            parts: [{ label: "Real interest rate (%)", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Real interest rate",
                statement: "Real rate ≈ nominal rate − inflation rate",
              },
            ],
            steps: [
              {
                reasoning: "Real rate = nominal − inflation = 6 − 2.",
                working: "6 - 2 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Real interest rate = 4%.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The real rate shows the true cost of borrowing and return to saving after inflation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer correct with explanation of significance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Real interest rate = 4%",
            commonErrors: [
              "Adding inflation instead of subtracting — real rate = nominal − inflation.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "If the price level doubles in one year, calculate the inflation rate.",
          response: {
            type: "numeric",
            parts: [{ label: "Inflation rate (%)", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inflation rate",
                statement:
                  "$\\frac{CPI_{new}-CPI_{old}}{CPI_{old}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "If prices double, CPI_new = 2 × CPI_old.",
                working: "CPI new = 2 x old",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Change = 2×old − old = old.",
                working: "change = old",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inflation rate = old/old × 100 = 100%.",
                working: "old / old x 100 = 100",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Answer correct — doubling prices means 100% inflation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "100%",
            commonErrors: [
              "Saying 200% — inflation is measured as the percentage increase, not the new level.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A government announces it will cut spending by $10bn to fight 6% inflation. Explain the likely effect on AD, the price level and unemployment, and state one reason the policy might be politically difficult.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contractionary fiscal policy",
                statement:
                  "Lower G reduces AD → lower inflation but higher unemployment.",
              },
            ],
            steps: [
              {
                reasoning: "AD falls as government spending decreases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lower AD reduces demand-pull inflationary pressure — the price level rises more slowly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But lower demand means lower output and higher unemployment — the trade-off.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Political difficulty: spending cuts mean fewer public services/jobs — unpopular with voters.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Also: cuts may hit vulnerable groups hardest, raising equity concerns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "AD down → inflation down but unemployment up; politically hard due to service/job cuts.",
            commonErrors: [
              "Ignoring the unemployment trade-off — disinflation has real costs.",
            ],
          },
        },
        {
          id: "econ-u4-l42c2q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate whether a central bank should tolerate moderate inflation (e.g. 3%) rather than pursue zero inflation.",
          parts: [
            {
              label: "a",
              prompt: "Explain the costs of moderate inflation for an economy.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the risks of pursuing zero inflation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate whether 3% inflation is an acceptable target.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation costs vs deflation risk",
                statement:
                  "Moderate inflation has small costs; zero inflation risks deflation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Menu costs, shoe-leather costs and mild redistribution from savers to borrowers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Slight loss of competitiveness if inflation exceeds trading partners'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "At 3% these costs are modest — far less damaging than high inflation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Zero inflation risks deflation — falling prices encourage delayed spending and debt deflation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "No room to cut real interest rates in a recession — monetary policy loses effectiveness at the zero bound.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "A small positive target provides buffer against deflation and wage flexibility.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But 3% is slightly above typical 2% targets — costs rise with the rate.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: tolerable short-term but 2% is a better long-run anchor — credibility matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Modest costs at 3%. (b) Zero risks deflation and policy paralysis. (c) Acceptable buffer but 2% preferable long-term.",
            commonErrors: [
              "Saying zero inflation is costless — deflation risk is real.",
            ],
          },
        },
      ],
    },
  ],
};
