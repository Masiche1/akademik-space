module.exports = [
  {
    file: "lesson-13-1.ts", exportName: "lesson131",
    lesson: {
      id: "ecn11-u13-lesson-13-1", code: "13-1",
      title: "Demand for and Supply of Labour",
      goal: "I CAN explain the derived demand for labour and the factors determining labour supply.",
      standards: [
        "Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure",
        "4EC1: labour markets",
      ],
      vocabulary: [
        { term: "Derived demand", definition: "Demand for labour that arises from demand for the goods or services labour produces." },
        { term: "Marginal revenue product (MRP)", definition: "The extra revenue a firm gains from employing one more worker." },
        { term: "Marginal product of labour (MPL)", definition: "The extra output produced by one additional worker." },
        { term: "Labour supply", definition: "The number of workers willing and able to work at each wage rate." },
        { term: "Labour force participation", definition: "The proportion of the working-age population in work or seeking work." },
        { term: "Wage elasticity of labour supply", definition: "Responsiveness of labour supply to a change in the wage rate." },
      ],
      concepts: [
        {
          id: "ecn11-u13-demandlab",
          title: "Derived demand for labour",
          skill: "Explain derived demand and the factors that shift the demand for labour.",
          sections: [
            {
              heading: "Derived demand and MRP",
              body: "Firms do not demand labour for its own sake — they demand it because labour **produces output** that can be sold. This is **derived demand**: demand for workers depends on demand for the final product. A rise in demand for cars increases demand for car workers.\n\nFirms hire up to the point where the **marginal revenue product (MRP)** of labour equals the wage. MRP = marginal product of labour (MPL) × price of output. If MRP exceeds the wage, hiring another worker adds more revenue than cost, so the firm expands; if MRP falls below the wage, it contracts.",
            },
            {
              heading: "Shifts in labour demand",
              body: "Labour demand rises when: **product demand** rises; **labour productivity** improves (technology, training); the **price of output** rises; or the **cost of substitute inputs** (e.g. machinery) rises. It falls when firms expect weaker sales, when labour becomes more expensive relative to capital, or when production moves abroad. Labour demand is generally **inelastic** in the long run because firms cannot easily substitute machines for people.",
            },
          ],
          keyFormulas: [
            { name: "MRP", statement: "MRP = MPL × price of output" },
            { name: "Hiring rule", statement: "Hire while MRP ≥ wage" },
          ],
          workedExample: {
            problem: "A worker adds 4 units of output per day; each unit sells for £10. The wage is £30/day. Should the firm hire?",
            solution: "MRP = 4 × £10 = £40 > £30 wage — yes, the worker adds more revenue than cost.",
          },
          questions: [
            {
              id: "ecn11-u13-demandlab-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is derived demand for labour?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Demand created by workers' unions" },
                  { id: "b", text: "Demand for labour arising from demand for the output it produces" },
                  { id: "c", text: "Demand for imported labour" },
                  { id: "d", text: "Demand for jobs advertised online" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Derived demand", statement: "Labour demand comes from output demand." },
                ],
                steps: [
                  { reasoning: "Firms hire labour to produce goods/services that are then sold.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** From demand for the output produced",
                commonErrors: ["Thinking workers are demanded for their own sake."],
              },
            },
            {
              id: "ecn11-u13-demandlab-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Define the marginal revenue product (MRP) of labour.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "MRP", statement: "Extra revenue from one more worker." },
                ],
                steps: [
                  { reasoning: "The additional revenue a firm gains by employing one more worker.", marks: 1, markCode: "AO1" },
                  { reasoning: "MRP = marginal product of labour × price of output.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Extra revenue from hiring one more worker; MRP = MPL × price.",
                commonErrors: ["Confusing MRP with the wage."],
              },
            },
            {
              id: "ecn11-u13-demandlab-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why a rise in consumer demand for smartphones would increase demand for electronics workers.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Derived demand", statement: "Output demand drives labour demand." },
                ],
                steps: [
                  { reasoning: "Firms expect to sell more smartphones → need more output.", marks: 1, markCode: "AO2" },
                  { reasoning: "To produce more, firms hire additional workers (labour is derived demand).", marks: 1, markCode: "AO2" },
                  { reasoning: "Labour demand curve shifts right → more workers employed, possibly higher wages.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Higher product demand → higher labour demand for producers.",
                commonErrors: ["No derived-demand link."],
              },
            },
            {
              id: "ecn11-u13-demandlab-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A car firm installs robots that can weld twice as fast as human welders.",
              parts: [
                { label: "a", prompt: "Explain the likely effect on demand for human welders.", marks: 3 },
                { label: "b", prompt: "Explain one factor that might limit the fall in welder employment.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Labour-capital substitution", statement: "Cheaper/faster machines reduce labour demand." },
                ],
                steps: [
                  { reasoning: "(a) Robots raise productivity per unit of capital; human labour becomes relatively more expensive.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Firms substitute capital for labour → demand for human welders falls.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Welders may still be needed for complex/ bespoke work robots cannot do; demand for car output may rise, increasing total labour demand.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) substitution reduces welder demand (b) complementarity or output growth may offset",
                commonErrors: ["Assuming technology always destroys all jobs."],
              },
            },
            {
              id: "ecn11-u13-demandlab-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Analyse how a government's subsidised apprenticeship scheme might affect the demand for and supply of skilled labour.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Skills policy", statement: "Training affects both sides of the labour market." },
                ],
                steps: [
                  { reasoning: "Demand side: more skilled workers raise productivity → firms may demand more skilled labour.", marks: 2, markCode: "AO2" },
                  { reasoning: "Supply side: apprenticeships increase the number of trained workers entering the market.", marks: 2, markCode: "AO2" },
                  { reasoning: "Net effect on wages is ambiguous — depends on which side shifts more.", marks: 1, markCode: "AO3" },
                  { reasoning: "In the long run, better skills can raise productivity and growth.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Raises skilled labour supply and possibly demand; wage effect ambiguous; long-run productivity gain.",
                commonErrors: ["One-sided analysis (only supply or only demand)."],
              },
            },
            {
              id: "ecn11-u13-demandlab-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define derived demand for labour.", marks: 1 },
                { label: "b", prompt: "State the formula for MRP and explain each term.", marks: 3 },
                { label: "c", prompt: "Explain the hiring rule firms use for labour.", marks: 2 },
                { label: "d", prompt: "Give two factors that increase the demand for labour.", marks: 2 },
                { label: "e", prompt: "Give one reason labour demand may be price inelastic.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Labour demand", statement: "Derived demand, MRP, hiring rule, shifts." },
                ],
                steps: [
                  { reasoning: "(a) Labour demand arising from demand for the output produced.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) MRP = MPL × price; MPL = extra output per worker; price = output price.", marks: 3, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Hire while MRP ≥ wage; stop when MRP < wage.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) e.g. higher product demand; higher labour productivity.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Hard to substitute capital for labour in the short run; labour is a small share of costs.", marks: 1, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "(a) output-driven (b) MRP=MPL×price (c) MRP≥wage (d) demand/productivity (e) substitution limits",
                commonErrors: ["Confusing MPL and MRP; wrong hiring rule."],
              },
            },
          ],
        },
        {
          id: "ecn11-u13-supplylab",
          title: "Supply of labour",
          skill: "Explain the determinants of labour supply and its wage elasticity.",
          sections: [
            {
              heading: "What determines labour supply",
              body: "**Labour supply** is the number of people willing and able to work at each wage. It depends on: **participation** — the share of working-age people in work or seeking it; **demographics** — age structure and population size; **wages and benefits** — higher wages attract workers but may reduce hours (income vs substitution effect); **education/training** — skills affect employability; and **social factors** — culture, childcare availability, discrimination.",
            },
            {
              heading: "Wage elasticity of labour supply",
              body: "If a small wage rise causes a large increase in labour supplied, supply is **elastic** — common where many people are not currently working (e.g. parents re-entering, retirees). If supply barely responds, it is **inelastic** — e.g. for highly specialised professionals or where only few workers have the skills. In the **long run** supply is more elastic because people can retrain and migrate; in the **short run** it is more inelastic.",
            },
          ],
          keyFormulas: [
            { name: "Labour supply", statement: "Workers willing and able to work at each wage" },
            { name: "Elastic supply", statement: "Large change in quantity supplied for a small wage change" },
          ],
          workedExample: {
            problem: "A wage rise in nursing leads many unemployed qualified nurses to apply for posts. Is labour supply elastic or inelastic here?",
            solution: "Elastic — a modest wage rise drew a large increase in quantity supplied because many trained nurses were available.",
          },
          questions: [
            {
              id: "ecn11-u13-supplylab-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does labour supply measure?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The number of jobs advertised" },
                  { id: "b", text: "The number of workers willing and able to work at each wage" },
                  { id: "c", text: "The number of unemployed people" },
                  { id: "d", text: "Total hours worked in the economy" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Labour supply", statement: "Willing and able workers at each wage." },
                ],
                steps: [
                  { reasoning: "Labour supply = workers willing and able to supply labour at each wage rate.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Willing and able workers per wage",
                commonErrors: ["Confusing supply with demand for labour."],
              },
            },
            {
              id: "ecn11-u13-supplylab-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is labour force participation?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Participation", statement: "Share of working-age population in work or seeking work." },
                ],
                steps: [
                  { reasoning: "Proportion of working-age population that is employed or unemployed and seeking work.", marks: 1, markCode: "AO1" },
                  { reasoning: "Excludes students, retirees, carers not seeking work.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Share of working-age people in work or seeking work.",
                commonErrors: ["Including all adults regardless of activity."],
              },
            },
            {
              id: "ecn11-u13-supplylab-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why labour supply might be elastic for unskilled workers but inelastic for specialist surgeons.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Elasticity of labour supply", statement: "Depends on availability of substitute workers." },
                ],
                steps: [
                  { reasoning: "Many people can do unskilled work → wage rise attracts large numbers → elastic.", marks: 1, markCode: "AO2" },
                  { reasoning: "Few people have surgical qualifications → even high wages cannot quickly expand supply → inelastic.", marks: 1, markCode: "AO2" },
                  { reasoning: "Skills and training take time → specialist supply responds slowly.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Elastic where many can substitute; inelastic where skills are scarce.",
                commonErrors: ["Ignoring the role of skills/qualifications."],
              },
            },
            {
              id: "ecn11-u13-supplylab-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A government introduces subsidised childcare. Analyse the effect on labour supply.",
              parts: [
                { label: "a", prompt: "Explain the direct effect on labour supply.", marks: 3 },
                { label: "b", prompt: "Explain one possible limitation of this policy.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Childcare and labour supply", statement: "Lower childcare costs raise participation." },
                ],
                steps: [
                  { reasoning: "(a) Parents (especially mothers) previously unable to work can now afford childcare.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Labour supply curve shifts right; participation rises; may increase hours worked.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Cost to government; quality/availability of places may limit effect; some may still choose not to work.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) raises participation/supply (b) cost and availability limits",
                commonErrors: ["Ignoring the cost side."],
              },
            },
            {
              id: "ecn11-u13-supplylab-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Discuss whether a higher minimum wage would increase or decrease the quantity of labour supplied.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Wage and labour supply", statement: "Higher wages can attract workers but also reduce hours (income vs substitution effects)." },
                ],
                steps: [
                  { reasoning: "Substitution effect: higher wage makes work more attractive vs leisure → more labour supplied.", marks: 2, markCode: "AO2" },
                  { reasoning: "Income effect: higher wage lets workers earn the same income in fewer hours → less labour supplied.", marks: 2, markCode: "AO2" },
                  { reasoning: "Net effect is ambiguous — depends on which effect dominates for the group.", marks: 1, markCode: "AO3" },
                  { reasoning: "For low-wage workers the substitution effect often dominates → supply may rise slightly.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Ambiguous: substitution effect raises supply, income effect lowers it; net depends on context.",
                commonErrors: ["One-sided answer; ignoring income/substitution effects."],
              },
            },
            {
              id: "ecn11-u13-supplylab-q6", difficulty: "challenge", totalMarks: 8,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define labour supply.", marks: 1 },
                { label: "b", prompt: "Name three factors that affect labour supply.", marks: 3 },
                { label: "c", prompt: "Explain what is meant by wage elasticity of labour supply.", marks: 2 },
                { label: "d", prompt: "Give one reason labour supply is usually more elastic in the long run.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Labour supply", statement: "Definition, determinants, elasticity." },
                ],
                steps: [
                  { reasoning: "(a) Workers willing and able to work at each wage.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) e.g. wages, demographics, education/training, childcare, benefits.", marks: 3, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Responsiveness of quantity of labour supplied to a change in wage.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) People can retrain, migrate or change careers over time.", marks: 2, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) willing+able (b) wages/demographics/skills (c) wage responsiveness (d) retraining/migration",
                commonErrors: ["Confusing labour supply with labour demand."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u13-demandlab-notes", title: "Labour demand and supply — notes",
      summary: "Labour demand is derived from output demand; MRP decides hiring. Supply depends on participation, skills and wages.",
      sections: [
        { heading: "Derived demand", body: "Firms hire labour to produce output; MRP = MPL × price; hire while MRP ≥ wage." },
        { heading: "Shifts", body: "Product demand, productivity, output price and capital costs shift labour demand." },
        { heading: "Supply side", body: "Participation, demographics, skills, childcare and benefits determine supply; elasticity depends on substitutes." },
      ],
    },
  },
  {
    file: "lesson-13-2.ts", exportName: "lesson132",
    lesson: {
      id: "ecn11-u13-lesson-13-2", code: "13-2",
      title: "Wage Determination",
      goal: "I CAN explain how wages are determined in competitive labour markets and analyse wage differentials.",
      standards: [
        "Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure",
        "4EC1: labour markets",
      ],
      vocabulary: [
        { term: "Wage rate", definition: "The price of labour — payment per hour or per unit of work." },
        { term: "Equilibrium wage", definition: "The wage at which the quantity of labour demanded equals the quantity supplied." },
        { term: "Wage differential", definition: "A difference in pay between jobs or workers." },
        { term: "Compensating differential", definition: "Extra pay for unpleasant or risky working conditions." },
        { term: "Efficiency wage", definition: "A wage above equilibrium paid to motivate workers and reduce turnover." },
        { term: "Monopsony", definition: "A labour market with a single dominant employer." },
      ],
      concepts: [
        {
          id: "ecn11-u13-wagedet",
          title: "Wage determination in competitive markets",
          skill: "Explain how wages are set where many firms compete for workers.",
          sections: [
            {
              heading: "The competitive labour market",
              body: "With many firms and many workers, the wage is set by **supply and demand** for labour — just like any market. The **equilibrium wage** occurs where labour demanded equals labour supplied. If wages are above equilibrium, labour supply exceeds demand → unemployment. If below, demand exceeds supply → labour shortages and upward wage pressure. Firms hire until MRP = wage.",
            },
            {
              heading: "Shifts in labour market equilibrium",
              body: "A rise in **labour demand** (stronger product demand, higher productivity) shifts demand right → higher wages and more employment. A rise in **labour supply** (more workers, immigration, higher participation) shifts supply right → lower wages, more employment. A fall in supply (retirement, emigration, reduced training) shifts supply left → higher wages, less employment. Policy like the minimum wage can push wages above the free-market equilibrium.",
            },
          ],
          keyFormulas: [
            { name: "Equilibrium", statement: "Quantity of labour demanded = quantity supplied" },
            { name: "Hiring rule", statement: "MRP = wage at profit-maximising employment" },
          ],
          workedExample: {
            problem: "Demand for warehouse workers rises while supply stays constant. What happens to wages and employment?",
            solution: "Demand shifts right → equilibrium wage rises and equilibrium employment increases.",
          },
          questions: [
            {
              id: "ecn11-u13-wagedet-q1", difficulty: "foundation", totalMarks: 2,
              stem: "In a competitive labour market, what determines the wage rate?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Government decree" },
                  { id: "b", text: "Supply and demand for labour" },
                  { id: "c", text: "The firm's profit target" },
                  { id: "d", text: "Workers' union demands" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Wage determination", statement: "Supply and demand for labour set wages." },
                ],
                steps: [
                  { reasoning: "Like other markets, the labour market price (wage) is set by supply and demand.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Supply and demand for labour",
                commonErrors: ["Ignoring the market mechanism."],
              },
            },
            {
              id: "ecn11-u13-wagedet-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is the equilibrium wage in a labour market?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Equilibrium wage", statement: "Wage where labour demanded equals labour supplied." },
                ],
                steps: [
                  { reasoning: "The wage at which quantity of labour demanded equals quantity supplied.", marks: 1, markCode: "AO1" },
                  { reasoning: "No labour shortage or unemployment at this wage.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Wage where labour demand equals labour supply.",
                commonErrors: ["Confusing with minimum wage."],
              },
            },
            {
              id: "ecn11-u13-wagedet-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what happens to wages and employment if demand for labour increases while supply stays the same.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Labour market shifts", statement: "Demand increase → higher wage, higher employment." },
                ],
                steps: [
                  { reasoning: "Demand curve shifts right.", marks: 1, markCode: "AO2" },
                  { reasoning: "New equilibrium: higher wage rate.", marks: 1, markCode: "AO2" },
                  { reasoning: "New equilibrium: more workers employed.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Wage rises and employment rises.",
                commonErrors: ["Wrong direction of shift."],
              },
            },
            {
              id: "ecn11-u13-wagedet-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A country's population ages: fewer young workers enter the labour market while demand for care workers rises.",
              parts: [
                { label: "a", prompt: "Explain the effect on the equilibrium wage for care workers.", marks: 3 },
                { label: "b", prompt: "Explain one way the government could increase labour supply.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Labour market equilibrium", statement: "Demand up + supply down → wage pressure." },
                ],
                steps: [
                  { reasoning: "(a) Demand for care workers rises (right shift); supply of young workers falls (left shift).", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Both shifts push the equilibrium wage up; employment change is ambiguous.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) e.g. raise retirement age, subsidise training, encourage participation of older workers or immigrants.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) wage rises; employment ambiguous (b) raise participation/retraining",
                commonErrors: ["Ignoring one of the two shifts."],
              },
            },
            {
              id: "ecn11-u13-wagedet-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Analyse the likely effects of a large inflow of migrant workers on wages and employment in a low-skilled sector.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Labour supply shock", statement: "More workers → supply right → wage pressure down, employment up." },
                ],
                steps: [
                  { reasoning: "Labour supply curve shifts right (more workers available).", marks: 2, markCode: "AO2" },
                  { reasoning: "Equilibrium wage falls; quantity of labour employed rises.", marks: 2, markCode: "AO2" },
                  { reasoning: "Existing low-skilled workers may see wage cuts or reduced hours — possible job displacement.", marks: 1, markCode: "AO3" },
                  { reasoning: "Effects depend on whether migrants fill vacancies or compete directly; demand may also rise if migrants consume goods/services.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Supply up → wages down, employment up; possible wage pressure on incumbents.",
                commonErrors: ["One-sided answer; ignoring demand-side effects."],
              },
            },
            {
              id: "ecn11-u13-wagedet-q6", difficulty: "challenge", totalMarks: 8,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define equilibrium wage.", marks: 1 },
                { label: "b", prompt: "Explain how firms decide how many workers to hire.", marks: 2 },
                { label: "c", prompt: "State two factors that shift labour demand.", marks: 2 },
                { label: "d", prompt: "State two factors that shift labour supply.", marks: 2 },
                { label: "e", prompt: "Explain why wages above equilibrium can cause unemployment.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Wage determination", statement: "Equilibrium, hiring, shifts, unemployment." },
                ],
                steps: [
                  { reasoning: "(a) Wage where labour demanded = labour supplied.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Hire until MRP = wage; stop when MRP < wage.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) e.g. product demand, productivity, output price, capital costs.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) e.g. wages offered, demographics, participation, training, migration.", marks: 2, markCode: "AO1", part: "d" },
                  { reasoning: "(e) Wage floor above equilibrium → labour supplied exceeds demanded → surplus of workers.", marks: 1, markCode: "AO2", part: "e" },
                ],
                finalAnswer: "(a) D=S (b) MRP=wage (c) demand factors (d) supply factors (e) surplus labour",
                commonErrors: ["Confusing shifts of demand and supply."],
              },
            },
          ],
        },
        {
          id: "ecn11-u13-wagefail",
          title: "Wage differentials and labour market failure",
          skill: "Explain why wages differ between workers and jobs, and identify labour market failures.",
          sections: [
            {
              heading: "Why wages differ",
              body: "Wage differentials arise from: **human capital** — education, skills and experience raise productivity and pay; **discrimination** — unequal pay by gender, ethnicity or age; **geography** — wages differ by region and cost of living; **job characteristics** — unpleasant or risky work commands a **compensating differential**; **bargaining power** — unions or scarce skills raise wages; and **monopsony** — a single dominant employer can pay below competitive wages.",
            },
            {
              heading: "Labour market failures",
              body: "Labour markets can fail like other markets. **Monopsony power** lets one employer restrict wages below the competitive level. **Information failure** means workers may not know market rates or face hidden discrimination. **Discrimination** creates unjustified pay gaps unrelated to productivity. **Efficiency wages** — paying above equilibrium — can raise motivation and reduce turnover, but may also price workers out of jobs. Some differentials are economically justified (skills); others reflect market failure or unfairness.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "Miners earn more than office workers. Is this always unfair?",
            solution: "Not necessarily — mining may involve danger and discomfort, so a compensating differential is economically justified; but if the gap exceeds risk compensation, other factors (skills, unions) also matter.",
          },
          questions: [
            {
              id: "ecn11-u13-wagefail-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a wage differential?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The difference between gross and net pay" },
                  { id: "b", text: "A difference in pay between jobs or workers" },
                  { id: "c", text: "The gap between wages and profits" },
                  { id: "d", text: "Pay differences caused only by unions" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Wage differential", statement: "Pay differences between jobs/workers." },
                ],
                steps: [
                  { reasoning: "Wage differentials are differences in pay rates between occupations, regions or groups.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Pay differences between jobs or workers",
                commonErrors: ["Confusing with tax deductions."],
              },
            },
            {
              id: "ecn11-u13-wagefail-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is a compensating differential?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Compensating differential", statement: "Extra pay for unpleasant/risky conditions." },
                ],
                steps: [
                  { reasoning: "Additional pay offered to compensate for unpleasant, dangerous or inconvenient work.", marks: 1, markCode: "AO1" },
                  { reasoning: "e.g. mining, offshore work, night shifts.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Extra pay for risky or unpleasant working conditions.",
                commonErrors: ["Confusing with efficiency wage."],
              },
            },
            {
              id: "ecn11-u13-wagefail-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why a software engineer typically earns more than a retail assistant.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Wage differentials", statement: "Pay reflects productivity, skills and demand." },
                ],
                steps: [
                  { reasoning: "Software engineering requires scarce, high human capital (degree, coding skills).", marks: 1, markCode: "AO2" },
                  { reasoning: "Engineers' MRP is high — they create valuable output firms pay for.", marks: 1, markCode: "AO2" },
                  { reasoning: "Demand for engineers exceeds supply of qualified people → higher equilibrium wage.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Scarce skills → high MRP → high demand vs limited supply → higher wage.",
                commonErrors: ["No economic mechanism."],
              },
            },
            {
              id: "ecn11-u13-wagefail-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A town has only one large employer. Workers report wages below what similar towns pay.",
              parts: [
                { label: "a", prompt: "Identify the labour market problem.", marks: 2 },
                { label: "b", prompt: "Explain why wages are below competitive levels.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Monopsony", statement: "Single employer restricts wages below competitive level." },
                ],
                steps: [
                  { reasoning: "(a) Monopsony — one dominant employer in the local labour market.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) With one buyer of labour, the firm faces the labour supply curve — hiring more raises the wage for all workers.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Profit-maximising monopsonist hires where MRP = marginal cost of labour (above the wage) → wage below competitive level.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) monopsony (b) single employer pays below competitive wage to maximise profit",
                commonErrors: ["Calling it a monopoly without explaining wage-setting."],
              },
            },
            {
              id: "ecn11-u13-wagefail-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Evaluate whether all wage differentials are economically justified.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Justified vs unjustified differentials", statement: "Some reflect productivity; others reflect failure or discrimination." },
                ],
                steps: [
                  { reasoning: "Justified: differentials for skills, experience, productivity, compensating differentials for risk/discomfort.", marks: 2, markCode: "AO2" },
                  { reasoning: "Unjustified: discrimination (gender, ethnicity), monopsony power, information failure about market rates.", marks: 2, markCode: "AO2" },
                  { reasoning: "Justified differentials reward factors that raise output; unjustified ones reduce efficiency and fairness.", marks: 1, markCode: "AO3" },
                  { reasoning: "Policy (equal pay laws, minimum wage, unionisation) can reduce unjustified gaps.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Some differentials reflect productivity/compensation; others reflect discrimination or market power.",
                commonErrors: ["All-or-nothing answer."],
              },
            },
            {
              id: "ecn11-u13-wagefail-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define wage differential.", marks: 1 },
                { label: "b", prompt: "Give two economically justified reasons for wage differentials.", marks: 2 },
                { label: "c", prompt: "Define monopsony and explain its effect on wages.", marks: 2 },
                { label: "d", prompt: "Explain what discrimination in the labour market means.", marks: 2 },
                { label: "e", prompt: "Give one policy to reduce unjustified wage gaps.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Wage differentials", statement: "Definitions, justification, market failure." },
                ],
                steps: [
                  { reasoning: "(a) Difference in pay between jobs or workers.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) e.g. skills/human capital; compensating differentials for risk or unpleasant work.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Single dominant employer; pays below competitive wage to maximise profit.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) Unequal pay/hiring based on characteristics unrelated to productivity (gender, ethnicity, age).", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) e.g. equal pay legislation, minimum wage, anti-discrimination enforcement.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "(a) pay gaps (b) skills/compensation (c) single employer→low wage (d) unfair pay (e) equal pay law",
                commonErrors: ["Treating all differentials as unfair."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u13-wagedet-notes", title: "Wage determination — notes",
      summary: "Competitive labour markets set wages by supply and demand; differentials reflect skills, risk, geography or market failure.",
      sections: [
        { heading: "Equilibrium", body: "Wage where labour demanded = supplied; firms hire until MRP = wage." },
        { heading: "Shifts", body: "Product demand, productivity, participation, migration and demographics shift the equilibrium." },
        { heading: "Differentials", body: "Skills, compensating differentials justify some gaps; discrimination and monopsony do not." },
      ],
    },
  },
  {
    file: "lesson-13-3.ts", exportName: "lesson133",
    lesson: {
      id: "ecn11-u13-lesson-13-3", code: "13-3",
      title: "Minimum Wage, Trade Unions and Policy",
      goal: "I CAN evaluate the effects of minimum wages and trade union activity on labour markets.",
      standards: [
        "Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure",
        "4EC1: labour markets and government intervention",
      ],
      vocabulary: [
        { term: "Minimum wage", definition: "A legal floor below which wages cannot be paid." },
        { term: "National minimum wage (NMW)", definition: "The statutory minimum hourly rate set by government." },
        { term: "Trade union", definition: "An organisation of workers that negotiates pay and conditions collectively." },
        { term: "Collective bargaining", definition: "Negotiation between employers and unions over pay and conditions." },
        { term: "Strike", definition: "A collective withdrawal of labour to press demands." },
        { term: "Monopsony power", definition: "A dominant employer's ability to set wages below competitive levels." },
      ],
      concepts: [
        {
          id: "ecn11-u13-minwage",
          title: "Minimum wage",
          skill: "Analyse the effects of a minimum wage on employment, wages and poverty.",
          sections: [
            {
              heading: "How a minimum wage works",
              body: "A **minimum wage** sets a legal floor on pay. If set **below** the equilibrium wage, it has no effect. If set **above** equilibrium, it creates a **surplus of labour**: more workers want jobs at that wage than firms are willing to hire → unemployment among low-skilled workers. However, some evidence suggests small increases above equilibrium may have limited job losses, especially where employers have monopsony power or can raise prices/productivity.",
            },
            {
              heading: "Evaluating the minimum wage",
              body: "**Benefits**: raises incomes of low-paid workers; reduces poverty and inequality; may boost motivation/productivity; counteracts monopsony power. **Costs**: possible job losses for low-skilled workers; higher labour costs may raise prices; may encourage informal work; small firms may struggle. The effect depends on how far the minimum wage is above equilibrium and the state of the labour market.",
            },
          ],
          keyFormulas: [
            { name: "Minimum wage", statement: "Legal floor on the wage rate" },
            { name: "Above-equilibrium wage", statement: "Labour supplied > labour demanded → unemployment" },
          ],
          workedExample: {
            problem: "Equilibrium wage for cleaners is £8/hour; NMW is set at £10/hour. What is the likely effect?",
            solution: "Wage floor above equilibrium → labour supplied exceeds demanded → some cleaners lose jobs or hours; remaining workers earn £10.",
          },
          questions: [
            {
              id: "ecn11-u13-minwage-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a minimum wage?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The average wage in an industry" },
                  { id: "b", text: "A legal floor below which wages cannot be paid" },
                  { id: "c", text: "The wage set by a trade union" },
                  { id: "d", text: "The highest wage an employer may pay" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Minimum wage", statement: "Legal floor on wages." },
                ],
                steps: [
                  { reasoning: "Minimum wage = statutory minimum hourly rate employers must pay.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Legal floor on wages",
                commonErrors: ["Confusing with maximum wage."],
              },
            },
            {
              id: "ecn11-u13-minwage-q2", difficulty: "foundation", totalMarks: 2,
              stem: "When does a minimum wage have no effect on employment?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Minimum wage", statement: "Only binds if above equilibrium." },
                ],
                steps: [
                  { reasoning: "If the minimum wage is below the equilibrium wage, firms already pay more — no effect.", marks: 1, markCode: "AO1" },
                  { reasoning: "Only a binding (above-equilibrium) minimum wage changes outcomes.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "When set below the equilibrium wage.",
                commonErrors: ["Saying it always reduces employment."],
              },
            },
            {
              id: "ecn11-u13-minwage-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why a minimum wage set above the equilibrium wage can cause unemployment.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Wage floor", statement: "Above-equilibrium wage → labour surplus." },
                ],
                steps: [
                  { reasoning: "At the higher wage, more workers want jobs (supply rises along curve).", marks: 1, markCode: "AO2" },
                  { reasoning: "Firms hire fewer workers because labour is now more expensive relative to MRP.", marks: 1, markCode: "AO2" },
                  { reasoning: "Quantity of labour supplied exceeds quantity demanded → unemployment among low-wage workers.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Wage floor above equilibrium → surplus of labour → unemployment.",
                commonErrors: ["Saying all workers benefit regardless."],
              },
            },
            {
              id: "ecn11-u13-minwage-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A government raises the minimum wage from £9 to £11 per hour.",
              parts: [
                { label: "a", prompt: "Explain one benefit for low-paid workers.", marks: 2 },
                { label: "b", prompt: "Explain one risk for employment.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Minimum wage evaluation", statement: "Higher pay vs possible job losses." },
                ],
                steps: [
                  { reasoning: "(a) Workers who keep jobs earn more → higher incomes, less poverty.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) If above equilibrium, firms cut jobs or hours for low-skilled workers.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Small firms may raise prices or reduce hiring; informal work may rise.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) higher pay for retained workers (b) possible job losses/hours cuts",
                commonErrors: ["No employment mechanism."],
              },
            },
            {
              id: "ecn11-u13-minwage-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Some economists argue the minimum wage has little effect on jobs; others argue it causes significant unemployment. Discuss both views.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Minimum wage debate", statement: "Textbook model vs empirical evidence." },
                ],
                steps: [
                  { reasoning: "Model view: wage floor above equilibrium → surplus labour → unemployment (esp. low-skilled).", marks: 2, markCode: "AO2" },
                  { reasoning: "Evidence view: modest increases often show small or no job losses; firms may absorb costs via prices, productivity or monopsony correction.", marks: 2, markCode: "AO2" },
                  { reasoning: "Effect depends on the size of the increase and labour market conditions.", marks: 1, markCode: "AO3" },
                  { reasoning: "Conclusion: context matters; large jumps above equilibrium are riskier.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Theory predicts job losses; evidence suggests modest effects depend on context.",
                commonErrors: ["One-sided answer; no evaluation."],
              },
            },
            {
              id: "ecn11-u13-minwage-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define minimum wage.", marks: 1 },
                { label: "b", prompt: "Explain when it has no effect.", marks: 1 },
                { label: "c", prompt: "Explain the unemployment mechanism when set above equilibrium.", marks: 2 },
                { label: "d", prompt: "Give two benefits of a minimum wage.", marks: 2 },
                { label: "e", prompt: "Give two costs of a minimum wage.", marks: 2 },
                { label: "f", prompt: "Reach a judgement on whether the minimum wage is worthwhile.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Minimum wage", statement: "Definition, mechanism, evaluation." },
                ],
                steps: [
                  { reasoning: "(a) Legal floor on the wage rate.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) When set below the equilibrium wage.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Labour supplied > demanded → surplus → unemployment.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) e.g. higher pay for low earners; reduced poverty/inequality; counters monopsony.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) e.g. possible job losses; higher prices or reduced hours for small firms.", marks: 2, markCode: "AO2", part: "e" },
                  { reasoning: "(f) Judgement weighing pay gains vs employment risk; depends on level set.", marks: 1, markCode: "AO3", part: "f" },
                ],
                finalAnswer: "(a) floor (b) below eq (c) surplus labour (d)-(e) pros/cons (f) context-dependent",
                commonErrors: ["No judgement; only one side."],
              },
            },
          ],
        },
        {
          id: "ecn11-u13-unions",
          title: "Trade unions and collective bargaining",
          skill: "Explain the role of trade unions and evaluate their effect on wages and employment.",
          sections: [
            {
              heading: "What trade unions do",
              body: "**Trade unions** are organisations of workers that negotiate with employers through **collective bargaining** over pay, hours and conditions. They can: negotiate higher wages and better conditions; provide legal support and redundancy payments; lobby government on labour issues. If bargaining fails, unions may call a **strike** — a collective withdrawal of labour — which can force employers to concede but costs workers pay and may harm the firm's competitiveness.",
            },
            {
              heading: "Evaluating union power",
              body: "**Benefits**: unions counter employer power (especially monopsony), raise wages for members, improve safety and conditions, reduce turnover. **Costs**: higher wages may reduce employment if demand for labour is elastic; strikes disrupt production; union demands may make firms less competitive; benefits may go mainly to already-secure 'insider' workers, widening gaps with non-members. Effects depend on union density, bargaining power and labour market conditions.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A factory's union negotiates a 5% pay rise. The firm says it will have to cut 20 jobs. Analyse.",
            solution: "Union bargaining raised wages; if labour demand is elastic, higher wages reduce employment — a classic union trade-off.",
          },
          questions: [
            {
              id: "ecn11-u13-unions-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is collective bargaining?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Workers negotiating individually with employers" },
                  { id: "b", text: "Unions negotiating pay and conditions on behalf of members" },
                  { id: "c", text: "Government setting wages by law" },
                  { id: "d", text: "Employers competing for workers" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Collective bargaining", statement: "Union-employer negotiation." },
                ],
                steps: [
                  { reasoning: "Unions negotiate pay and conditions collectively on behalf of members.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Union-employer negotiation",
                commonErrors: ["Confusing with individual negotiation."],
              },
            },
            {
              id: "ecn11-u13-unions-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is a strike?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Strike", statement: "Collective withdrawal of labour." },
                ],
                steps: [
                  { reasoning: "Workers collectively stop working to press demands in negotiations.", marks: 1, markCode: "AO1" },
                  { reasoning: "Costs workers pay; can halt production.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "A collective withdrawal of labour to press demands.",
                commonErrors: ["Describing a protest or demonstration."],
              },
            },
            {
              id: "ecn11-u13-unions-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain one way trade unions can improve working conditions for their members.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Union benefits", statement: "Collective bargaining improves pay/conditions." },
                ],
                steps: [
                  { reasoning: "Negotiate higher wages through collective bargaining — more bargaining power than individuals.", marks: 1, markCode: "AO2" },
                  { reasoning: "Negotiate safer conditions, reasonable hours, holiday entitlement.", marks: 1, markCode: "AO2" },
                  { reasoning: "Provide legal support and represent members in disputes.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Higher pay, better conditions, legal support via collective bargaining.",
                commonErrors: ["No mechanism of union action."],
              },
            },
            {
              id: "ecn11-u13-unions-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A union secures a 10% pay rise for factory workers. Evaluate the likely effects.",
              parts: [
                { label: "a", prompt: "Explain one benefit for workers.", marks: 2 },
                { label: "b", prompt: "Explain one possible cost for the firm and employment.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Union wage effects", statement: "Higher member pay vs employment/cost risks." },
                ],
                steps: [
                  { reasoning: "(a) Members earn more; motivation and retention may improve.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Higher wage costs may reduce profits or raise prices.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) If labour demand is elastic, firm may cut jobs or hours; competitiveness may fall.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) higher pay/motivation (b) cost pressure, possible job cuts",
                commonErrors: ["Ignoring the employment elasticity."],
              },
            },
            {
              id: "ecn11-u13-unions-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Discuss whether trade unions help or harm the wider economy.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Union impact", statement: "Worker gains vs efficiency costs." },
                ],
                steps: [
                  { reasoning: "Help: raise pay for members, improve conditions, reduce inequality for covered workers, counter monopsony power.", marks: 2, markCode: "AO2" },
                  { reasoning: "Harm: higher labour costs may reduce employment if demand elastic; strikes disrupt output; may benefit 'insider' members at expense of others.", marks: 2, markCode: "AO2" },
                  { reasoning: "Net effect depends on union density, bargaining power and labour market conditions.", marks: 1, markCode: "AO3" },
                  { reasoning: "Conclusion: unions can correct power imbalances but may impose efficiency costs.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Unions raise member pay/conditions but may cost jobs and competitiveness — context-dependent.",
                commonErrors: ["One-sided answer."],
              },
            },
            {
              id: "ecn11-u13-unions-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Answer all parts.",
              parts: [
                { label: "a", prompt: "Define trade union and collective bargaining.", marks: 2 },
                { label: "b", prompt: "State two benefits of union membership for workers.", marks: 2 },
                { label: "c", prompt: "Explain how unions can raise wages.", marks: 2 },
                { label: "d", prompt: "Explain one possible cost of union power for the economy.", marks: 2 },
                { label: "e", prompt: "Suggest one alternative to strikes in disputes.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Trade unions", statement: "Definitions, benefits, costs, alternatives." },
                ],
                steps: [
                  { reasoning: "(a) Union = workers' organisation; bargaining = collective negotiation of pay/conditions.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) e.g. higher pay; better conditions/safety; legal support.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Collective bargaining gives workers more power vs employer; threatens strike action.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) e.g. higher labour costs → job losses if demand elastic; strike disruption.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) e.g. mediation, arbitration, negotiation, work-to-rule.", marks: 1, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "(a) defs (b) pay/conditions (c) bargaining power (d) job loss/disruption (e) mediation/arbitration",
                commonErrors: ["Only describing unions positively or negatively."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u13-minwage-notes", title: "Minimum wage and unions — notes",
      summary: "Minimum wages and unions redistribute bargaining power to workers; evaluate pay gains against employment and efficiency costs.",
      sections: [
        { heading: "Minimum wage", body: "Binds only above equilibrium; can raise pay but risk unemployment — effect is context-dependent." },
        { heading: "Unions", body: "Collective bargaining raises member pay/conditions; strikes are the ultimate lever but costly." },
        { heading: "Evaluation", body: "Both correct employer power but may impose efficiency costs — weigh equity vs employment." },
      ],
    },
  },
];
