import type { Lesson } from "../../../types.ts";

export const lesson56: Lesson = {
  id: "cieige-u5-lesson-5-6",
  code: "5-6",
  title: "Labour Markets, Wages and Unemployment",
  goal: "I CAN analyse labour demand/supply, wage determination and causes of unemployment.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 5: factor markets"],
  vocabulary: [
    {
      term: "Derived demand",
      definition:
        "Demand for labour derived from demand for the product it produces.",
    },
    {
      term: "Marginal revenue product (MRP)",
      definition: "Extra revenue from employing one more worker.",
    },
    { term: "Wage rate", definition: "Price of labour per unit of time." },
    {
      term: "Monopsony",
      definition: "Single buyer of labour — employer with wage-setting power.",
    },
    {
      term: "Unemployment",
      definition:
        "Workers willing and able to work at prevailing wages but without jobs.",
    },
    { term: "Real wage", definition: "Nominal wage adjusted for inflation." },
  ],
  concepts: [
    {
      id: "cieige-u5l6-c1-labour",
      title: "Labour demand and wages",
      skill:
        "Explain derived demand, MRP and wage determination in labour markets.",
      lesson: {
        sections: [
          {
            heading: "Labour demand",
            body: "Labour demand is **derived demand** — firms hire workers to produce goods people want. A profit-maximising firm hires up to where **MRP = wage rate** (M). MRP = marginal product × marginal revenue. As more workers are hired, diminishing returns reduce MRP — labour demand slopes downward.",
          },
          {
            heading: "Wage determination",
            body: "Equilibrium wage where labour demand = labour supply. Shifts: demand shifts with product demand, productivity, technology; supply shifts with population, wages elsewhere, training. **Monopsony** (single employer) sets wage below competitive level — exploits labour supply curve.",
          },
        ],
        keyFormulas: [
          { name: "MRP", statement: "Marginal product × marginal revenue" },
          { name: "Hiring rule", statement: "Hire where MRP = wage" },
          {
            name: "Labour demand slope",
            statement: "Downward — diminishing MRP",
          },
        ],
        workedExample: {
          problem:
            "If wage = $15/hr and MRP = $20 for the 10th worker but $12 for the 11th, should the firm hire the 11th?",
          solution:
            "No — MRP ($12) < wage ($15), so the 11th worker costs more than they earn; hire up to where MRP = wage.",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l6c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Labour demand is 'derived' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always high" },
              { id: "b", text: "It comes from government" },
              { id: "c", text: "Workers derive wages" },
              {
                id: "d",
                text: "It depends on demand for the product workers produce",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Derived demand",
                statement: "Depends on product demand.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Depends on product demand",
            commonErrors: ["Thinking it's independent."],
          },
        },
        {
          id: "cieige-q-u5l6c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is MRP?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MRP",
                statement: "Extra revenue from one more worker.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formula given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Marginal revenue product = marginal product of labour × marginal revenue — the extra revenue earned by employing one more worker.",
            commonErrors: ["Confusing with average product."],
          },
        },
        {
          id: "cieige-q-u5l6c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does labour demand slope downward?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Downward labour demand",
                statement: "Diminishing MRP.",
              },
            ],
            steps: [
              {
                reasoning: "Diminishing returns mechanism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "MRP falls with more workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Firms hire less at higher wages.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Diminishing returns mean each extra worker adds less output/revenue — MRP falls, so firms hire fewer workers at higher wages → downward-sloping demand.",
            commonErrors: ["Confusing with supply curve."],
          },
        },
        {
          id: "cieige-q-u5l6c1-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A firm hires where MRP = wage. Explain the logic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Hiring rule",
                statement: "MRP=wage maximises profit.",
              },
            ],
            steps: [
              { reasoning: "MRP>wage → hire more.", marks: 1, markCode: "M" },
              { reasoning: "MRP<wage → hire fewer.", marks: 1, markCode: "M" },
              { reasoning: "Equilibrium logic.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hire while MRP > wage (worker adds more than costs); stop when MRP = wage — beyond that, extra workers cost more than they earn.",
            commonErrors: ["Thinking firms hire all willing workers."],
          },
        },
        {
          id: "cieige-q-u5l6c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a monopsonist employer sets wages below competitive levels.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopsony",
                statement: "Single buyer faces upward-sloping supply.",
              },
            ],
            steps: [
              {
                reasoning: "Mechanism: faces labour supply curve.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Marginal cost of labour rises.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Hires where MRP = MCL.", marks: 1, markCode: "A" },
              {
                reasoning: "Result: lower wage, lower employment.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Monopsonist faces upward-sloping labour supply; hiring more raises wage on ALL workers, so MCL > wage. It hires where MRP=MCL, paying below competitive wage with fewer workers.",
            commonErrors: ["Treating like perfect competition."],
          },
        },
        {
          id: "cieige-q-u5l6c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'monopsony'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monopsony",
                statement: "Single buyer of labour.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A market with a single buyer of labour — e.g. a dominant employer in a small town — which can set wages below competitive levels.",
            commonErrors: ["Confusing with monopoly."],
          },
        },
        {
          id: "cieige-q-u5l6c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Labour demand slopes downward because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government policy" },
              { id: "b", text: "Diminishing marginal revenue product" },
              { id: "c", text: "Worker preferences" },
              { id: "d", text: "Rising wages" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labour demand",
                statement: "Diminishing MRP.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Diminishing MRP",
            commonErrors: ["Wrong mechanism."],
          },
        },
        {
          id: "cieige-q-u5l6c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does improved technology affect labour demand?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology and labour",
                statement:
                  "Ambiguous — depends on substitution/complementarity.",
              },
            ],
            steps: [
              { reasoning: "Two possible effects.", marks: 1, markCode: "M" },
              {
                reasoning: "Substitution vs complement.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ambiguous: automation may substitute for labour (demand falls) or complement it (skilled labour demand rises); net effect depends on whether workers are substitutes or complements to the technology.",
            commonErrors: ["One-directional claim."],
          },
        },
        {
          id: "cieige-q-u5l6c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'real wage' and why it matters for labour markets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Real wage",
                statement: "Nominal wage adjusted for inflation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why it matters.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Real wage = nominal wage ÷ price level — matters because workers care about purchasing power, not just nominal pay; inflation erodes real wages even if nominal rises.",
            commonErrors: ["Confusing with nominal wage."],
          },
        },
        {
          id: "cieige-q-u5l6c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the effects of a trade union on wages and employment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Union effects",
                statement: "Raises wages but may reduce employment.",
              },
            ],
            steps: [
              { reasoning: "Wage-raising mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Employment effect.", marks: 1, markCode: "M" },
              { reasoning: "Countervailing factors.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unions bargain for higher wages, shifting labour supply left — raises wages but may reduce employment; offset if productivity rises or monopsony power existed.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l6c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A profit-maximising firm hires labour up to the point where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All workers are hired" },
              { id: "b", text: "MRP = maximum" },
              { id: "c", text: "Wage = price" },
              { id: "d", text: "MRP = wage rate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Hiring rule",
                statement: "MRP = wage.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** MRP = wage rate",
            commonErrors: ["Hiring all willing workers."],
          },
        },
        {
          id: "cieige-q-u5l6c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The wage rate is $15 per hour. The 5th worker has MRP = $18 and the 6th worker has MRP = $12. (a) Find the net gain from hiring the 5th worker. (b) Find the net gain (or loss) from hiring the 6th worker.",
          response: {
            type: "numeric",
            parts: [
              { label: "Net gain from 5th worker", answer: 3, unit: "$" },
              { label: "Net gain from 6th worker", answer: -3, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Hiring decision",
                statement: "Net gain = MRP − wage.",
              },
            ],
            steps: [
              {
                reasoning: "5th worker: 18 − 15 = $3 gain — hire.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "6th worker: 12 − 15 = −$3 loss — do not hire.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $3 (b) −$3",
            commonErrors: ["Hiring the 6th worker anyway."],
          },
        },
        {
          id: "cieige-q-u5l6c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The labour supply curve slopes upward because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Productivity always rises" },
              {
                id: "b",
                text: "Higher wages attract more workers and more hours",
              },
              { id: "c", text: "Firms demand more labour" },
              { id: "d", text: "Wages are fixed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labour supply",
                statement: "Higher wage → more labour supplied.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Higher wages attract more labour",
            commonErrors: ["Confusing with demand curve."],
          },
        },
        {
          id: "cieige-q-u5l6c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'derived demand' for labour with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Derived demand",
                statement: "Labour demand depends on product demand.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Mechanism: product demand → output → hiring.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Firms hire workers to produce goods, so labour demand depends on demand for the product — e.g. rising demand for cars increases demand for car workers; falling demand reduces hiring.",
            commonErrors: ["Thinking labour demand is independent."],
          },
        },
        {
          id: "cieige-q-u5l6c1-15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A worker's marginal product is 8 units and marginal revenue is $4 per unit. (a) Find the worker's MRP. (b) If the wage is $20 per hour, find how much MRP exceeds the wage.",
          response: {
            type: "numeric",
            parts: [
              { label: "MRP", answer: 32, unit: "$" },
              { label: "MRP − wage", answer: 12, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "MRP",
                statement: "MRP = marginal product × marginal revenue.",
              },
            ],
            steps: [
              {
                reasoning: "MRP = 8 × 4 = $32.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "MRP − wage = 32 − 20 = $12 — hire this worker.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $32 (b) $12",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cieige-q-u5l6c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the effect of a large increase in labour supply (e.g. immigration) on the equilibrium wage and employment in a labour market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labour supply shift",
                statement: "Supply↑ → lower wage, higher employment.",
              },
            ],
            steps: [
              {
                reasoning: "Labour supply curve shifts right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equilibrium wage falls, employment rises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Existing workers may be worse off.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Demand-side factors may offset.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Coherent analysis.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Increased labour supply shifts the supply curve right — equilibrium wage falls and total employment rises; existing workers may see lower wages unless demand also increases (e.g. via higher output or investment).",
            commonErrors: ["Assuming wages must rise."],
          },
        },
      ],
    },
    {
      id: "cieige-u5l6-c2-unemployment",
      title: "Types and causes of unemployment",
      skill:
        "Distinguish unemployment types and analyse their causes and policies.",
      lesson: {
        sections: [
          {
            heading: "Types of unemployment",
            body: "**Frictional** — between jobs, search time. **Structural** — skills/locations mismatch, technology change. **Demand-deficient (cyclical)** — recession reduces demand. **Seasonal** — predictable variations (tourism, agriculture). **Real wage** — wages above equilibrium reduce employment.",
          },
          {
            heading: "Causes and policy",
            body: "Unemployment results from insufficient aggregate demand (cyclical), structural change, frictional search, or wage rigidities. Policies: demand stimulus (fiscal/monetary), supply-side (training, labour market flexibility), information services.",
          },
        ],
        keyFormulas: [
          {
            name: "Unemployment rate",
            statement: "Unemployed ÷ labour force × 100",
          },
          {
            name: "Types",
            statement: "Frictional, structural, cyclical, seasonal, real wage",
          },
        ],
        workedExample: {
          problem: "A recession raises unemployment from 5% to 10%. What type?",
          solution:
            "Demand-deficient/cyclical — falling aggregate demand reduces output and jobs across the economy.",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l6c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Frictional unemployment is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seasonal work gaps" },
              { id: "b", text: "Temporary job-search unemployment" },
              { id: "c", text: "Skills mismatch" },
              { id: "d", text: "Recession unemployment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frictional unemployment",
                statement: "Search time between jobs.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Job-search unemployment",
            commonErrors: ["Confusing with structural."],
          },
        },
        {
          id: "cieige-q-u5l6c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'structural unemployment'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural unemployment",
                statement: "Mismatch between skills/jobs.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unemployment caused by mismatch between workers' skills/locations and available jobs — e.g. factory workers displaced by automation.",
            commonErrors: ["Confusing with cyclical."],
          },
        },
        {
          id: "cieige-q-u5l6c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'demand-deficient' (cyclical) unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cyclical unemployment",
                statement: "Falling aggregate demand.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "When it occurs.", marks: 1, markCode: "M" },
              { reasoning: "Policy response.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When aggregate demand falls (recession), firms produce less and lay off workers — rises in downturns, falls in booms; addressed by demand stimulus.",
            commonErrors: ["Confusing with structural."],
          },
        },
        {
          id: "cieige-q-u5l6c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Calculate: labour force = 30m, employed = 27m. Find unemployment rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Unemployment rate",
                statement: "(LF−E)/LF ×100.",
              },
            ],
            steps: [
              {
                reasoning: "Unemployed = 30−27 = 3m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Rate = 3/30 ×100 = 10%.", marks: 1, markCode: "M" },
              { reasoning: "Method correct.", marks: 1, markCode: "A" },
              { reasoning: "Units stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unemployed = 3m; rate = (3/30) × 100 = 10%.",
            commonErrors: ["Using population instead of labour force."],
          },
        },
        {
          id: "cieige-q-u5l6c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate supply-side policies for reducing structural unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply-side policies",
                statement: "Training, flexibility vs cost/time.",
              },
            ],
            steps: [
              { reasoning: "Policy examples.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Training and labour-market flexibility can reduce structural unemployment but take time, cost money and may not match job locations — best combined with demand-side support.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l6c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is some frictional unemployment considered 'healthy'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Frictional unemployment",
                statement: "Workers move to better matches.",
              },
            ],
            steps: [
              { reasoning: "Matching mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Efficiency argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "It allows workers to search for better-matched jobs — reduces mismatches and improves productivity; only problematic if prolonged.",
            commonErrors: ["Viewing all unemployment as bad."],
          },
        },
        {
          id: "cieige-q-u5l6c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Seasonal unemployment occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only manufacturing" },
              { id: "b", text: "Only services" },
              {
                id: "c",
                text: "Industries with predictable demand variations",
              },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Seasonal unemployment",
                statement: "Predictable variations.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Predictable demand variations",
            commonErrors: ["Confusing with cyclical."],
          },
        },
        {
          id: "cieige-q-u5l6c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does automation cause unemployment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Automation",
                statement: "Substitutes labour → structural unemployment.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Type of unemployment.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Machines replace routine tasks → workers displaced → structural unemployment; requires retraining for complementary roles.",
            commonErrors: ["Confusing with cyclical."],
          },
        },
        {
          id: "cieige-q-u5l6c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 'hysteresis' in unemployment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hysteresis",
                statement: "Unemployment persists after cause removed.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unemployment stays high even after demand recovers — long-term unemployment erodes skills and confidence, making re-employment harder; needs active labour-market policies.",
            commonErrors: ["Thinking unemployment self-corrects."],
          },
        },
        {
          id: "cieige-q-u5l6c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare demand-side and supply-side policies for reducing unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand vs supply",
                statement: "Stimulus vs flexibility.",
              },
            ],
            steps: [
              { reasoning: "Demand-side approach.", marks: 1, markCode: "M" },
              { reasoning: "Supply-side approach.", marks: 1, markCode: "M" },
              {
                reasoning: "Which unemployment type each suits.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Demand-side (fiscal/monetary stimulus) suits cyclical unemployment; supply-side (training, flexibility) suits structural — complementary, not substitutes.",
            commonErrors: ["One-size-fits-all."],
          },
        },
        {
          id: "cieige-q-u5l6c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cyclical (demand-deficient) unemployment rises during:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Harvest seasons" },
              { id: "b", text: "Economic booms" },
              { id: "c", text: "Periods of full employment" },
              { id: "d", text: "Recessions and economic downturns" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cyclical unemployment",
                statement: "Rises when aggregate demand falls.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Recessions",
            commonErrors: ["Confusing with structural."],
          },
        },
        {
          id: "cieige-q-u5l6c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country's labour force is 25 million and 1.5 million are unemployed. (a) Calculate the unemployment rate. (b) If 200,000 people then find jobs, calculate the new unemployment rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "Initial unemployment rate", answer: 6, unit: "%" },
              { label: "New unemployment rate", answer: 5.2, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Unemployment rate",
                statement: "Unemployed ÷ labour force × 100.",
              },
            ],
            steps: [
              {
                reasoning: "1.5m ÷ 25m × 100 = 6%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unemployed = 1.3m → 1.3m ÷ 25m × 100 = 5.2%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 6% (b) 5.2%",
            commonErrors: ["Using total population."],
          },
        },
        {
          id: "cieige-q-u5l6c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Structural unemployment is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A temporary recession" },
              { id: "b", text: "Mismatch between workers' skills and available jobs" },
              { id: "c", text: "Seasonal demand changes" },
              { id: "d", text: "Workers changing jobs voluntarily" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural unemployment",
                statement: "Skills/locations mismatch.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Skills/jobs mismatch",
            commonErrors: ["Confusing with frictional."],
          },
        },
        {
          id: "cieige-q-u5l6c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between frictional and structural unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unemployment types",
                statement: "Search time vs mismatch.",
              },
            ],
            steps: [
              {
                reasoning: "Frictional defined correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Structural defined correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Key difference identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Frictional is short-term unemployment while searching for a better job match; structural is a longer-term mismatch between workers' skills/locations and the jobs available — frictional is largely voluntary/healthy, structural requires retraining or relocation.",
            commonErrors: ["Treating them as the same."],
          },
        },
        {
          id: "cieige-q-u5l6c2-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The most appropriate policy for cyclical unemployment is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cutting government spending" },
              { id: "b", text: "Raising interest rates" },
              { id: "c", text: "Reducing the money supply" },
              { id: "d", text: "Expansionary fiscal or monetary policy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cyclical unemployment policy",
                statement: "Boost aggregate demand.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Expansionary demand policy",
            commonErrors: ["Using contractionary policy."],
          },
        },
        {
          id: "cieige-q-u5l6c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate active labour market policies (e.g. training schemes, job centres, wage subsidies) for reducing unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Active labour market policies",
                statement: "Improve matching and skills vs cost.",
              },
            ],
            steps: [
              {
                reasoning: "Policy examples given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Benefits: better matching, skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limitations: cost, time lags.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Active labour market policies improve matching and skills, especially against structural unemployment, but are costly and slow-acting — most effective combined with demand-side measures for cyclical unemployment.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
