module.exports = [
  {
    file: "lesson-12-1.ts",
    exportName: "lesson121",
    lesson: {
      id: "ebz11-u12-lesson-12-1",
      code: "12-1",
      title: "Factors of Production and Productivity",
      goal: "I CAN classify the factors of production and explain how productivity affects business performance.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — Business Operations",
        "4BS0 5.2 Production",
        "4BS0 5.3 Factors of production",
      ],
      vocabulary: [
        { term: "Land", definition: "Natural resources used in production, including buildings and sites." },
        { term: "Labour", definition: "Human effort used to produce goods or services." },
        { term: "Capital", definition: "Man-made resources such as machinery, equipment and tools." },
        { term: "Enterprise", definition: "The entrepreneur or manager who organises the other factors." },
        { term: "Productivity", definition: "Output produced per unit of input, usually per worker or per hour." },
      ],
      concepts: [
        {
          id: "ebz11-u12-factors",
          title: "The Four Factors of Production",
          skill: "Classify resources as land, labour, capital or enterprise.",
          sections: [
            {
              heading: "Land, labour, capital and enterprise",
              body: "**Land** includes natural resources such as soil, water, minerals and space, as well as buildings and sites used for production. **Labour** is the human input — workers, managers and skilled specialists. **Capital** is man-made equipment such as machinery, vehicles, computers and tools. **Enterprise** is the individual or team that combines the other factors, takes risks and makes decisions.\n\nAll businesses need a combination of these factors. A bakery uses premises and ovens (land and capital), bakers (labour), and an owner-manager who organises production and finds customers (enterprise).",
            },
            {
              heading: "Scarcity and opportunity cost",
              body: "Resources are scarce, so choosing more of one factor usually means less of another. A restaurant with limited capital may employ more workers but fewer automated machines. Every choice has an **opportunity cost** — the next best alternative given up.\n\nThe mix of factors affects efficiency, cost, quality and flexibility. Choosing more capital may raise output but increase fixed costs; choosing more labour may add flexibility but ongoing wage costs.",
            },
          ],
          keyFormulas: [
            { name: "Factors of production", statement: "Land + Labour + Capital + Enterprise" },
            { name: "Opportunity cost", statement: "Value of the best alternative forgone" },
          ],
          workedExample: {
            problem: "A mobile coffee van uses a van, coffee machine, two baristas and an owner who plans routes. Classify the factors.",
            solution: "Van and machine = capital; route stops and workspace = land; baristas = labour; owner organising routes and sales = enterprise.",
          },
          questions: [
            {
              id: "ebz11-u12-factors-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which factor of production is represented by the entrepreneur who organises resources and takes risks?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Land" },
                  { id: "b", text: "Labour" },
                  { id: "c", text: "Capital" },
                  { id: "d", text: "Enterprise" },
                ],
                correctChoiceId: "d",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Enterprise", statement: "The organiser who combines factors and takes risks." },
                ],
                steps: [
                  { reasoning: "Organising resources and risk-taking is enterprise.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(d)** Enterprise",
                commonErrors: ["Confusing enterprise with capital."],
              },
            },
            {
              id: "ebz11-u12-factors-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Explain the difference between land and capital, giving one example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Land and capital", statement: "Land is natural/site resource; capital is man-made." },
                ],
                steps: [
                  { reasoning: "Land = natural resources or site, e.g. farmland or premises.", marks: 1, markCode: "AO1" },
                  { reasoning: "Capital = man-made equipment, e.g. machinery or vehicles.", marks: 1, markCode: "AO1" },
                  { reasoning: "The key difference is natural/site versus produced equipment.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Land is natural/site; capital is man-made equipment.",
                commonErrors: ["Treating buildings only as land without explaining capital."],
              },
            },
            {
              id: "ebz11-u12-factors-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Classify each resource for a pizza restaurant: dough mixers, pizza chefs, the restaurant building, the owner-manager, flour and delivery scooters.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Factor classification", statement: "Assign resources to land, labour, capital or enterprise." },
                ],
                steps: [
                  { reasoning: "Dough mixers and delivery scooters are capital.", marks: 1, markCode: "AO1" },
                  { reasoning: "Pizza chefs are labour.", marks: 1, markCode: "AO1" },
                  { reasoning: "Restaurant building and flour are land/natural resources.", marks: 1, markCode: "AO1" },
                  { reasoning: "Owner-manager is enterprise.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Mixers/scooters=capital; chefs=labour; building/flour=land; owner=enterprise.",
                commonErrors: ["Classifying all equipment as land."],
              },
            },
            {
              id: "ebz11-u12-factors-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why scarcity of factors of production creates opportunity cost for a growing business.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Scarcity", statement: "Limited resources force choices." },
                  { kind: "principle", name: "Opportunity cost", statement: "Best alternative forgone." },
                ],
                steps: [
                  { reasoning: "Land, labour, capital and enterprise are limited.", marks: 1, markCode: "AO2" },
                  { reasoning: "A growing business cannot use every factor in every way.", marks: 1, markCode: "AO2" },
                  { reasoning: "Choosing one use means giving up another use.", marks: 1, markCode: "AO2" },
                  { reasoning: "For example, capital spent on a van cannot buy a machine.", marks: 1, markCode: "AO2" },
                  { reasoning: "The forgone benefit is the opportunity cost.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Scarcity forces choices; every choice has a forgone alternative.",
                commonErrors: ["Defining opportunity cost as only money spent."],
              },
            },
            {
              id: "ebz11-u12-factors-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A successful family bakery must decide whether to buy a second oven or hire two more bakers. Evaluate the factors of production involved in each option.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Factor mix", statement: "Different factors create different cost, capacity and flexibility outcomes." },
                ],
                steps: [
                  { reasoning: "The oven is capital: high initial cost but may raise capacity consistently.", marks: 1, markCode: "AO2" },
                  { reasoning: "Bakers are labour: flexible but add ongoing wage costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both options require enterprise to organise production and demand.", marks: 1, markCode: "AO2" },
                  { reasoning: "Premises/land must support either option.", marks: 1, markCode: "AO2" },
                  { reasoning: "Buying the oven may be better if demand is stable and capital is available.", marks: 1, markCode: "AO3" },
                  { reasoning: "Hiring may be better if demand fluctuates or skills differ.", marks: 1, markCode: "AO3" },
                  { reasoning: "The best choice depends on cost, demand and opportunity cost.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Evaluate capital versus labour using cost, demand and flexibility.",
                commonErrors: ["Ignoring opportunity cost.", "Assuming one option is always best."],
              },
            },
            {
              id: "ebz11-u12-factors-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A school canteen wants to increase output. It can invest in a faster till system, recruit more lunchtime staff, extend opening hours or improve staff training. Discuss how the factors of production and productivity are affected by these options.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Production choices", statement: "Different factors affect output, cost and quality differently." },
                  { kind: "skill", name: "Evaluation", statement: "Judge options against business needs." },
                ],
                steps: [
                  { reasoning: "A faster till system adds capital and can raise throughput.", marks: 1, markCode: "AO2" },
                  { reasoning: "More staff increases labour but also wage costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Extending hours changes use of land/time rather than adding a new factor.", marks: 1, markCode: "AO2" },
                  { reasoning: "Training improves labour productivity without necessarily adding workers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Enterprise is needed to coordinate the chosen option.", marks: 1, markCode: "AO2" },
                  { reasoning: "Capital may give consistent gains if demand is high.", marks: 1, markCode: "AO3" },
                  { reasoning: "Labour is more flexible if demand varies.", marks: 1, markCode: "AO3" },
                  { reasoning: "Training can improve quality as well as speed.", marks: 1, markCode: "AO3" },
                  { reasoning: "Opening longer may increase fixed costs if sales do not rise.", marks: 1, markCode: "AO3" },
                  { reasoning: "Best answer links factor choice to cost, output and demand.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Choose the factor mix that balances output, cost, quality and demand.",
                commonErrors: ["Listing options without evaluation.", "Ignoring costs."],
              },
            },
          ],
        },
        {
          id: "ebz11-u12-productivity",
          title: "Productivity and Efficiency",
          skill: "Calculate productivity and explain how efficiency can be improved.",
          sections: [
            {
              heading: "Measuring productivity",
              body: "**Productivity** measures how much output is produced from inputs. Labour productivity is usually output divided by workers or hours worked. Higher productivity means more output for the same input, which can lower unit costs and improve competitiveness.\n\nProductivity can rise through better training, new technology, improved motivation, better organisation or reduced waste. It can fall through poor management, low motivation, outdated equipment or inefficiency.",
            },
            {
              heading: "Improving efficiency",
              body: "Businesses can raise productivity by training workers, improving processes, motivating staff, maintaining equipment and using appropriate technology. Efficiency means using resources without unnecessary waste.\n\nProductivity measures should be interpreted carefully: higher output per worker is useful but does not always mean better quality, customer satisfaction or long-term performance.",
            },
          ],
          keyFormulas: [
            { name: "Labour productivity", statement: "Output / number of workers or labour hours" },
            { name: "Efficiency", statement: "Output achieved with minimum waste" },
          ],
          workedExample: {
            problem: "A workshop produces 1,200 units using 40 workers. What is output per worker?",
            solution: "Productivity = 1,200 / 40 = 30 units per worker.",
          },
          questions: [
            {
              id: "ebz11-u12-productivity-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A factory produces 1,200 units using 40 workers. Calculate labour productivity in units per worker.",
              response: {
                type: "numeric",
                parts: [{ label: "productivity", answer: 30, unit: "units per worker" }],
              },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Labour productivity", statement: "Output / workers." },
                ],
                steps: [
                  { reasoning: "Use output divided by workers: 1,200 / 40.", marks: 1, markCode: "AO1" },
                  { reasoning: "Calculate 30 units per worker.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "30 units per worker",
                commonErrors: ["Dividing workers by output."],
              },
            },
            {
              id: "ebz11-u12-productivity-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "What is productivity and why does higher productivity matter to a business?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Productivity", statement: "Output per input." },
                ],
                steps: [
                  { reasoning: "Productivity = output produced per worker or hour.", marks: 1, markCode: "AO1" },
                  { reasoning: "Higher productivity can reduce unit costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "It can improve competitiveness and profit.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Output per input; higher productivity lowers costs and improves competitiveness.",
                commonErrors: ["Confusing productivity with total output only."],
              },
            },
            {
              id: "ebz11-u12-productivity-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Give two ways a business can increase labour productivity and explain one limitation of each.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Raising productivity", statement: "Training, technology, motivation and organisation." },
                ],
                steps: [
                  { reasoning: "Training improves skills and reduces errors.", marks: 1, markCode: "AO2" },
                  { reasoning: "Limitation: training costs time and money.", marks: 1, markCode: "AO2" },
                  { reasoning: "New technology can speed up work.", marks: 1, markCode: "AO2" },
                  { reasoning: "Limitation: high capital cost and possible job losses.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Training and technology raise productivity but involve costs.",
                commonErrors: ["Only one method.", "No limitation."],
              },
            },
            {
              id: "ebz11-u12-productivity-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why measuring productivity per worker may be more useful than measuring only total output.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Productivity measurement", statement: "Per-worker output shows efficiency, not just size." },
                ],
                steps: [
                  { reasoning: "Total output can rise simply by hiring more workers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Output per worker shows how efficiently labour is used.", marks: 1, markCode: "AO2" },
                  { reasoning: "It helps compare performance over time or between sites.", marks: 1, markCode: "AO2" },
                  { reasoning: "It can reveal whether new systems improve efficiency.", marks: 1, markCode: "AO2" },
                  { reasoning: "It must still be judged with quality and cost measures.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Per-worker productivity measures efficiency rather than just total production.",
                commonErrors: ["Confusing output growth with efficiency."],
              },
            },
            {
              id: "ebz11-u12-productivity-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Discuss the drawbacks of measuring a business's success only by labour productivity.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Productivity limits", statement: "One measure cannot capture quality, welfare or all costs." },
                ],
                steps: [
                  { reasoning: "Output per worker ignores quality of the product.", marks: 1, markCode: "AO2" },
                  { reasoning: "It may ignore customer satisfaction and complaints.", marks: 1, markCode: "AO2" },
                  { reasoning: "Rushed work can raise output but increase errors or waste.", marks: 1, markCode: "AO2" },
                  { reasoning: "It may encourage overwork and lower motivation.", marks: 1, markCode: "AO2" },
                  { reasoning: "It ignores capital productivity and total profit.", marks: 1, markCode: "AO3" },
                  { reasoning: "Some businesses need flexible, creative work rather than speed.", marks: 1, markCode: "AO3" },
                  { reasoning: "A balanced view should include quality, cost and stakeholder effects.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Labour productivity is useful but incomplete without quality, cost and welfare measures.",
                commonErrors: ["Assuming higher productivity always means better business."],
              },
            },
            {
              id: "ebz11-u12-productivity-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A bakery wants to raise productivity without cutting jobs. It can invest in staff training or a new automated oven. Evaluate both options.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Productivity improvement", statement: "Training improves skills; equipment improves speed." },
                  { kind: "skill", name: "Evaluation", statement: "Balance gains against cost, flexibility and staff effects." },
                ],
                steps: [
                  { reasoning: "Training improves skills and reduces errors.", marks: 1, markCode: "AO2" },
                  { reasoning: "Training is cheaper than major equipment.", marks: 1, markCode: "AO2" },
                  { reasoning: "Training keeps jobs and builds capability.", marks: 1, markCode: "AO2" },
                  { reasoning: "Training may take time before gains appear.", marks: 1, markCode: "AO2" },
                  { reasoning: "The oven can increase output speed and consistency.", marks: 1, markCode: "AO2" },
                  { reasoning: "The oven has high capital and maintenance costs.", marks: 1, markCode: "AO3" },
                  { reasoning: "The oven may suit only standard products.", marks: 1, markCode: "AO3" },
                  { reasoning: "A mixed approach can combine both.", marks: 1, markCode: "AO3" },
                  { reasoning: "Demand and product variety should guide the choice.", marks: 1, markCode: "AO3" },
                  { reasoning: "Best decision depends on cost, capacity and staff needs.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Choose training for flexible skill gains or equipment for speed, ideally combining both.",
                commonErrors: ["Only listing benefits.", "Ignoring costs and flexibility."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u12-factors-productivity-notes",
      title: "Factors of production and productivity — notes",
      summary: "Land, labour, capital and enterprise are scarce resources; productivity measures output per input.",
      sections: [
        { heading: "Key idea", body: "Every business combines four factors: land, labour, capital and enterprise." },
        { heading: "Productivity", body: "Output divided by workers or hours shows efficiency; higher productivity can lower unit costs." },
        { heading: "Improvement", body: "Training, technology, motivation and process improvements can raise productivity; measure it with quality and cost in mind." },
      ],
    },
  },
  {
    file: "lesson-12-2.ts",
    exportName: "lesson122",
    lesson: {
      id: "ebz11-u12-lesson-12-2",
      code: "12-2",
      title: "Capital, Labour and Specialisation",
      goal: "I CAN compare capital-intensive and labour-intensive production and evaluate specialisation.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — Business Operations",
        "4BS0 5.2 Production",
        "4BS0 5.3 Factors of production",
      ],
      vocabulary: [
        { term: "Capital-intensive", definition: "Production using relatively more capital than labour." },
        { term: "Labour-intensive", definition: "Production using relatively more labour than capital." },
        { term: "Specialisation", definition: "Workers or businesses focusing on narrow tasks or products." },
        { term: "Job rotation", definition: "Workers moving between different tasks to reduce boredom." },
      ],
      concepts: [
        {
          id: "ebz11-u12-intensity",
          title: "Capital-Intensive and Labour-Intensive Production",
          skill: "Compare production methods based on the balance of capital and labour.",
          sections: [
            {
              heading: "Capital-intensive production",
              body: "Capital-intensive businesses rely heavily on machinery, equipment and technology. Examples include car plants, breweries, bottling lines and automated warehouses.\n\n**Advantages**: consistent output, high speed, lower unit costs at high volume, less dependence on scarce labour. **Disadvantages**: high initial investment, maintenance costs, less flexible for small batches, possible job losses and vulnerability to breakdowns.",
            },
            {
              heading: "Labour-intensive production",
              body: "Labour-intensive businesses rely mainly on workers. Examples include restaurants, hair salons, care services, tailoring and craft production.\n\n**Advantages**: flexible, lower capital cost, easier to adapt products, workers can handle varied tasks. **Disadvantages**: higher labour costs, slower output, quality may vary, harder to scale quickly.",
            },
          ],
          keyFormulas: [
            { name: "Capital per worker", statement: "Capital equipment used / number of workers" },
            { name: "Production choice", statement: "Match capital and labour to product, volume and demand" },
          ],
          workedExample: {
            problem: "A bakery can buy a dough machine or hire two extra bakers. Which is more capital-intensive?",
            solution: "Buying the dough machine increases capital relative to labour, so the bakery becomes more capital-intensive.",
          },
          questions: [
            {
              id: "ebz11-u12-intensity-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which business is most likely to be capital-intensive?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A hairdressing salon" },
                  { id: "b", text: "A car assembly plant" },
                  { id: "c", text: "A gardening service" },
                  { id: "d", text: "A tutoring agency" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Capital-intensive", statement: "Relatively high capital use." },
                ],
                steps: [
                  { reasoning: "Car assembly uses heavy machinery and robots.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Car assembly plant",
                commonErrors: ["Confusing labour-intensive services with factories."],
              },
            },
            {
              id: "ebz11-u12-intensity-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give one example of a capital-intensive business and one of a labour-intensive business.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Intensity examples", statement: "Machines versus workers." },
                ],
                steps: [
                  { reasoning: "Capital-intensive example: car factory or bottling plant.", marks: 1, markCode: "AO1" },
                  { reasoning: "Labour-intensive example: restaurant, salon or care service.", marks: 1, markCode: "AO1" },
                  { reasoning: "Examples should match the capital/labour balance.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Factory = capital-intensive; service/craft = labour-intensive.",
                commonErrors: ["Using businesses with both capital and labour without judging balance."],
              },
            },
            {
              id: "ebz11-u12-intensity-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two advantages of capital-intensive production for a large manufacturer.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Capital intensity", statement: "Machines can raise speed and consistency at scale." },
                ],
                steps: [
                  { reasoning: "Machines produce output quickly and consistently.", marks: 1, markCode: "AO2" },
                  { reasoning: "High volume can reduce unit costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Less dependence on skilled labour shortages.", marks: 1, markCode: "AO2" },
                  { reasoning: "Quality may be more standardised.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Speed, consistency, lower unit costs and less labour dependence.",
                commonErrors: ["Only saying machines are efficient without explaining why."],
              },
            },
            {
              id: "ebz11-u12-intensity-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Compare the suitability of capital-intensive and labour-intensive production for a business making custom wooden furniture.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Production intensity", statement: "Custom low-volume work favours flexibility." },
                ],
                steps: [
                  { reasoning: "Custom furniture has varied designs and small batches.", marks: 1, markCode: "AO2" },
                  { reasoning: "Labour-intensive craft workers can adapt to customer requests.", marks: 1, markCode: "AO2" },
                  { reasoning: "Capital-intensive machines suit repeat production better.", marks: 1, markCode: "AO2" },
                  { reasoning: "Skilled labour may command higher prices for craftsmanship.", marks: 1, markCode: "AO2" },
                  { reasoning: "A mixed approach may balance efficiency and customisation.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Labour-intensive or mixed production is more suitable for custom, varied furniture.",
                commonErrors: ["Choosing automation without considering customisation."],
              },
            },
            {
              id: "ebz11-u12-intensity-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Evaluate whether a small bakery should become more capital-intensive as it grows.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Growth and intensity", statement: "Higher volume may justify machines, but costs and flexibility matter." },
                ],
                steps: [
                  { reasoning: "Growth may create enough demand for machines to pay off.", marks: 1, markCode: "AO2" },
                  { reasoning: "Machines can raise consistency and output.", marks: 1, markCode: "AO2" },
                  { reasoning: "Initial capital cost may be too high for a small bakery.", marks: 1, markCode: "AO2" },
                  { reasoning: "Maintenance and breakdowns create new risks.", marks: 1, markCode: "AO2" },
                  { reasoning: "Less flexibility may be a problem if demand varies.", marks: 1, markCode: "AO3" },
                  { reasoning: "Staff may need retraining or fewer workers may be needed.", marks: 1, markCode: "AO3" },
                  { reasoning: "Decision should depend on volume, cash flow and product type.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Capital intensity can help only if demand is stable enough to justify the investment.",
                commonErrors: ["Ignoring financing and demand risk."],
              },
            },
            {
              id: "ebz11-u12-intensity-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A clothing company currently employs 100 machinists. It can invest in automated cutting and sewing lines, keep labour-intensive production, or use a mixed system. Evaluate the three options.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Production systems", statement: "Compare cost, output, flexibility and employment." },
                  { kind: "skill", name: "Evaluation", statement: "Reach a justified recommendation." },
                ],
                steps: [
                  { reasoning: "Automation raises speed and consistency.", marks: 1, markCode: "AO2" },
                  { reasoning: "Automation requires large capital investment.", marks: 1, markCode: "AO2" },
                  { reasoning: "Labour-intensive production is flexible for designs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Labour-intensive production has higher unit labour costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "A mixed system can automate standard items and use workers for custom work.", marks: 1, markCode: "AO2" },
                  { reasoning: "Automation may reduce jobs and affect morale.", marks: 1, markCode: "AO3" },
                  { reasoning: "Machines may struggle with frequent design changes.", marks: 1, markCode: "AO3" },
                  { reasoning: "Mixed systems balance cost and flexibility.", marks: 1, markCode: "AO3" },
                  { reasoning: "The best option depends on order volume and product range.", marks: 1, markCode: "AO3" },
                  { reasoning: "A justified recommendation should weigh all three options.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Choose automation for standard high-volume output, labour for flexibility, or a mixed system for balance.",
                commonErrors: ["No recommendation.", "Ignoring employment effects."],
              },
            },
          ],
        },
        {
          id: "ebz11-u12-specialisation",
          title: "Division of Labour and Specialisation",
          skill: "Explain the benefits and drawbacks of dividing work into specialised tasks.",
          sections: [
            {
              heading: "Division of labour",
              body: "**Division of labour** splits production into narrow tasks so workers or businesses become specialists. In a car plant, one worker fits doors, another installs engines and another checks quality.\n\n**Benefits**: faster output, higher skill in each task, simpler training, easier to introduce machinery and potential cost savings. **Drawbacks**: boredom and monotony, reduced flexibility, dependence on other workers, coordination problems and vulnerability if one task fails.",
            },
            {
              heading: "Managing specialisation",
              body: "Businesses can reduce drawbacks through **job rotation** (workers move between tasks), **job enlargement** (more tasks per worker), teamworking, incentives and good communication.\n\nSpecialisation can also occur between businesses — one firm makes components, another assembles the final product. This can improve efficiency but creates supply-chain dependence.",
            },
          ],
          keyFormulas: [
            { name: "Division of labour", statement: "Splitting work into specialised tasks" },
            { name: "Job rotation", statement: "Moving workers between tasks to reduce monotony" },
          ],
          workedExample: {
            problem: "A bakery divides cake production into mixing, baking, icing and packing. Explain two benefits.",
            solution: "Workers become faster at repeated tasks and training is simpler, raising productivity.",
          },
          questions: [
            {
              id: "ebz11-u12-specialisation-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is division of labour?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Sharing profits equally" },
                  { id: "b", text: "Splitting production into specialised tasks" },
                  { id: "c", text: "Hiring more managers" },
                  { id: "d", text: "Working longer hours" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Division of labour", statement: "Production split into specialised tasks." },
                ],
                steps: [
                  { reasoning: "Division of labour = specialised repeated tasks.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Specialised tasks",
                commonErrors: ["Confusing with teamwork."],
              },
            },
            {
              id: "ebz11-u12-specialisation-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give one benefit and one drawback of specialisation for workers.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Specialisation", statement: "Efficiency versus boredom and dependence." },
                ],
                steps: [
                  { reasoning: "Benefit: workers become skilled and faster at one task.", marks: 1, markCode: "AO2" },
                  { reasoning: "Drawback: repetitive work can cause boredom.", marks: 1, markCode: "AO2" },
                  { reasoning: "Workers may depend on others to complete the product.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Benefit = skill/speed; drawback = boredom/dependence.",
                commonErrors: ["Only one side."],
              },
            },
            {
              id: "ebz11-u12-specialisation-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two ways a business can reduce the drawbacks of specialisation.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Managing specialisation", statement: "Job rotation, enlargement, teamwork and incentives." },
                ],
                steps: [
                  { reasoning: "Job rotation lets workers move between tasks.", marks: 1, markCode: "AO2" },
                  { reasoning: "This reduces boredom and builds flexibility.", marks: 1, markCode: "AO2" },
                  { reasoning: "Job enlargement gives workers more varied tasks.", marks: 1, markCode: "AO2" },
                  { reasoning: "Teamwork and incentives can improve motivation and coordination.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Rotate jobs, enlarge roles and use teamwork/incentives.",
                commonErrors: ["Repeating benefits of specialisation instead of solutions."],
              },
            },
            {
              id: "ebz11-u12-specialisation-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why specialisation may be less suitable for a small business making personalised gifts.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Specialisation limits", statement: "Narrow tasks suit repeat production, not varied work." },
                ],
                steps: [
                  { reasoning: "Personalised gifts require varied designs and tasks.", marks: 1, markCode: "AO2" },
                  { reasoning: "Specialisation is best where tasks repeat many times.", marks: 1, markCode: "AO2" },
                  { reasoning: "A small business may not have enough workers to split tasks.", marks: 1, markCode: "AO2" },
                  { reasoning: "Workers may need broad skills to handle whole orders.", marks: 1, markCode: "AO2" },
                  { reasoning: "Flexibility is more valuable than narrow speed gains.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Varied, low-volume work needs flexible workers rather than narrow specialisation.",
                commonErrors: ["Assuming specialisation always increases efficiency."],
              },
            },
            {
              id: "ebz11-u12-specialisation-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Discuss the impact of division of labour on productivity and employee motivation.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Specialisation effects", statement: "Can raise output but may reduce satisfaction." },
                ],
                steps: [
                  { reasoning: "Repeated tasks can make workers faster.", marks: 1, markCode: "AO2" },
                  { reasoning: "Skill in one task can reduce errors.", marks: 1, markCode: "AO2" },
                  { reasoning: "Training is quicker for narrow tasks.", marks: 1, markCode: "AO2" },
                  { reasoning: "Monotony can lower motivation and increase absenteeism.", marks: 1, markCode: "AO2" },
                  { reasoning: "Dependence on other workers can cause coordination delays.", marks: 1, markCode: "AO3" },
                  { reasoning: "One bottleneck can stop the whole production line.", marks: 1, markCode: "AO3" },
                  { reasoning: "Businesses should balance efficiency with job design.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Specialisation raises productivity but can harm motivation if jobs are poorly designed.",
                commonErrors: ["One-sided answer."],
              },
            },
            {
              id: "ebz11-u12-specialisation-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A furniture factory wants to increase output. It could introduce an assembly line with narrow tasks, keep craftspeople making whole pieces, or use teams where each team completes entire products. Evaluate the three approaches.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Work organisation", statement: "Compare efficiency, flexibility, motivation and coordination." },
                  { kind: "skill", name: "Evaluation", statement: "Recommend a justified approach." },
                ],
                steps: [
                  { reasoning: "Assembly line maximises repetition and speed.", marks: 1, markCode: "AO2" },
                  { reasoning: "Assembly line suits standardised high-volume products.", marks: 1, markCode: "AO2" },
                  { reasoning: "Craft production allows high quality and customisation.", marks: 1, markCode: "AO2" },
                  { reasoning: "Craft production is slower and harder to scale.", marks: 1, markCode: "AO2" },
                  { reasoning: "Teams can combine variety with responsibility.", marks: 1, markCode: "AO2" },
                  { reasoning: "Teams need good coordination and leadership.", marks: 1, markCode: "AO3" },
                  { reasoning: "Assembly line may cause boredom and dependency.", marks: 1, markCode: "AO3" },
                  { reasoning: "Craft production may be too costly for mass market.", marks: 1, markCode: "AO3" },
                  { reasoning: "The best approach depends on product standardisation and volume.", marks: 1, markCode: "AO3" },
                  { reasoning: "A justified recommendation should balance efficiency and worker needs.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Use assembly lines for standard volume, crafts for premium custom work, or teams for balanced flexibility.",
                commonErrors: ["No evaluation.", "Ignoring motivation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u12-intensity-specialisation-notes",
      title: "Capital, labour and specialisation — notes",
      summary: "Choose the capital/labour balance and level of specialisation that fit product, volume and demand.",
      sections: [
        { heading: "Intensity", body: "Capital-intensive uses machines; labour-intensive uses workers. High volume favours capital; variation favours labour." },
        { heading: "Specialisation", body: "Narrow tasks can raise speed and skill but may cause boredom, dependence and coordination problems." },
        { heading: "Management", body: "Job rotation, job enlargement, teamwork and incentives can reduce specialisation drawbacks." },
      ],
    },
  },
  {
    file: "lesson-12-3.ts",
    exportName: "lesson123",
    lesson: {
      id: "ebz11-u12-lesson-12-3",
      code: "12-3",
      title: "Location Decisions and Relocation",
      goal: "I CAN evaluate the factors influencing where a business locates and why it may relocate.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — Business Activity and Influences on Business",
        "4BS0 1.4 Decisions on location",
      ],
      vocabulary: [
        { term: "Location decision", definition: "Choosing where a business will operate." },
        { term: "Market proximity", definition: "Distance to customers and ease of reaching them." },
        { term: "Labour supply", definition: "Availability of workers with needed skills." },
        { term: "Raw materials", definition: "Inputs needed before production begins." },
        { term: "Relocation", definition: "Moving a business from one location to another." },
        { term: "E-commerce", definition: "Buying and selling online, reducing reliance on a prime shop location." },
        { term: "Free trade zone", definition: "Area where businesses may receive tax or customs advantages." },
      ],
      concepts: [
        {
          id: "ebz11-u12-location",
          title: "Factors Influencing Location",
          skill: "Evaluate market, labour, materials, transport, cost and legal factors in location choices.",
          sections: [
            {
              heading: "Market, labour and materials",
              body: "Businesses often locate near **customers** to reduce transport costs and improve service, especially retailers and restaurants. They may locate near **labour** where workers are plentiful or skilled, such as technology hubs. **Raw materials** matter for bulky or heavy inputs — a steel plant may be near ore and coal, while a bakery may locate near flour suppliers.\n\n**Transport links** affect access to markets, suppliers and workers. Good road, rail, port or airport connections can reduce distribution costs.",
            },
            {
              heading: "Costs, competition, infrastructure and legal controls",
              body: "**Costs** include rent, rates, wages and utilities. Cheaper locations attract cost-sensitive businesses, but may be far from markets. **Competitors and clusters** can help through shared suppliers and labour pools, but also increase rivalry. **Infrastructure** includes broadband, power, water and waste disposal.\n\n**Legal and planning controls** can encourage or restrict location through zoning, environmental rules, trade blocs and incentives such as free trade zones.",
            },
          ],
          keyFormulas: [
            { name: "Location factors", statement: "Market + labour + materials + transport + cost + legal" },
            { name: "Trade-off", statement: "Lower costs may mean greater distance from customers" },
          ],
          workedExample: {
            problem: "A coffee shop is choosing between a busy high street and a cheaper industrial estate. Identify two relevant factors.",
            solution: "High street gives market proximity; industrial estate gives lower rent but may reduce footfall.",
          },
          questions: [
            {
              id: "ebz11-u12-location-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which factor is most important for a high-street retailer choosing a location?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Distance from competitors" },
                  { id: "b", text: "Proximity to customers" },
                  { id: "c", text: "Access to raw materials" },
                  { id: "d", text: "Availability of farmland" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Market proximity", statement: "Retailers need access to customers." },
                ],
                steps: [
                  { reasoning: "Retail sales depend on customer footfall and access.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Proximity to customers",
                commonErrors: ["Applying raw-material factors to retail."],
              },
            },
            {
              id: "ebz11-u12-location-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give two location factors a manufacturing business should consider.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Location factors", statement: "Inputs, transport, labour, cost and legal controls." },
                ],
                steps: [
                  { reasoning: "Proximity to raw materials or suppliers.", marks: 1, markCode: "AO1" },
                  { reasoning: "Transport links for distributing finished goods.", marks: 1, markCode: "AO1" },
                  { reasoning: "Availability of labour and suitable premises.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Materials/suppliers, transport, labour and premises.",
                commonErrors: ["Only customer proximity for a manufacturer."],
              },
            },
            {
              id: "ebz11-u12-location-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain why a software company might locate in a city with many universities.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Labour supply", statement: "Location near skilled workers reduces recruitment difficulty." },
                ],
                steps: [
                  { reasoning: "Universities supply graduates with relevant skills.", marks: 1, markCode: "AO2" },
                  { reasoning: "Access to a large labour pool improves recruitment.", marks: 1, markCode: "AO2" },
                  { reasoning: "City infrastructure and transport support business links.", marks: 1, markCode: "AO2" },
                  { reasoning: "Proximity to clients and partners may help sales.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Skilled labour supply, infrastructure and client access.",
                commonErrors: ["Ignoring labour skills."],
              },
            },
            {
              id: "ebz11-u12-location-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Compare the location needs of a supermarket and a shipbuilding firm.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Location by activity", statement: "Different industries weight factors differently." },
                ],
                steps: [
                  { reasoning: "Supermarket needs customer access and parking.", marks: 1, markCode: "AO2" },
                  { reasoning: "Shipbuilder needs deep-water port and heavy transport links.", marks: 1, markCode: "AO2" },
                  { reasoning: "Supermarket relies on distribution from depots.", marks: 1, markCode: "AO2" },
                  { reasoning: "Shipbuilder needs large site and specialist labour.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both need labour, but different skills and volumes.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Retail prioritises customers; shipbuilding prioritises port access, space and heavy logistics.",
                commonErrors: ["Using identical factors without weighting."],
              },
            },
            {
              id: "ebz11-u12-location-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A business is choosing between a cheap location far from customers and an expensive location near customers. Evaluate the decision.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Location trade-off", statement: "Cost savings must be weighed against access and sales." },
                ],
                steps: [
                  { reasoning: "Cheap location lowers rent and possibly wages.", marks: 1, markCode: "AO2" },
                  { reasoning: "Distance may reduce footfall and impulse sales.", marks: 1, markCode: "AO2" },
                  { reasoning: "Transport costs for customers or deliveries may rise.", marks: 1, markCode: "AO2" },
                  { reasoning: "Near customers can support higher sales and service.", marks: 1, markCode: "AO2" },
                  { reasoning: "For a retailer, market access may outweigh rent savings.", marks: 1, markCode: "AO3" },
                  { reasoning: "For a warehouse, cheap location may be better if delivery links are good.", marks: 1, markCode: "AO3" },
                  { reasoning: "Decision depends on product, distribution and demand.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Choose based on whether cost savings exceed lost sales and extra transport costs.",
                commonErrors: ["Assuming cheap is always better."],
              },
            },
            {
              id: "ebz11-u12-location-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A food manufacturer must choose where to build a new factory. Evaluate the importance of raw materials, labour, transport, costs, competition and government incentives.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Location evaluation", statement: "Weight each factor for the specific business." },
                ],
                steps: [
                  { reasoning: "Raw materials matter if inputs are bulky or perishable.", marks: 1, markCode: "AO2" },
                  { reasoning: "Labour availability affects production and wages.", marks: 1, markCode: "AO2" },
                  { reasoning: "Transport links affect input delivery and product distribution.", marks: 1, markCode: "AO2" },
                  { reasoning: "Costs include land, rent, utilities and taxes.", marks: 1, markCode: "AO2" },
                  { reasoning: "Competitors nearby may create rivalry or a skilled labour pool.", marks: 1, markCode: "AO2" },
                  { reasoning: "Government incentives can reduce costs but may have conditions.", marks: 1, markCode: "AO3" },
                  { reasoning: "Environmental and planning rules may restrict options.", marks: 1, markCode: "AO3" },
                  { reasoning: "Market access matters if products are fresh or customer-specific.", marks: 1, markCode: "AO3" },
                  { reasoning: "A scorecard can compare locations across factors.", marks: 1, markCode: "AO3" },
                  { reasoning: "Final recommendation should justify the highest-weighted factors.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Select the location that best balances input access, labour, transport, cost, competition and incentives.",
                commonErrors: ["Ignoring legal or environmental factors."],
              },
            },
          ],
        },
        {
          id: "ebz11-u12-relocation",
          title: "Relocation and E-commerce",
          skill: "Explain why businesses relocate and how online selling affects location.",
          sections: [
            {
              heading: "Why businesses relocate",
              body: "Businesses relocate to reduce costs, access cheaper labour or premises, move closer to markets, receive government incentives, expand capacity or escape declining areas. Relocation may involve **push factors** (high costs, poor infrastructure, congestion) and **pull factors** (lower costs, incentives, better links).\n\nRelocation has costs: removal expenses, disruption, loss of customers, retraining and possible redundancy. It is worthwhile only if long-term benefits exceed short-term costs.",
            },
            {
              heading: "E-commerce and changing markets",
              body: "**E-commerce** allows businesses to sell online, reducing the need for a prime high-street location. However, businesses still need warehouses, delivery networks, IT systems and customer service. A click-and-collect store or fulfilment centre may replace a traditional shop.\n\nRelocation decisions must also respond to changing customer behaviour, transport costs and local competition. Moving can open new markets or reduce costs, but only if the benefits outweigh disruption.",
            },
          ],
          keyFormulas: [
            { name: "Push factors", statement: "Reasons to leave a location" },
            { name: "Pull factors", statement: "Reasons attracting a business to a new location" },
          ],
          workedExample: {
            problem: "A retailer closes a city-centre store and opens an online fulfilment centre in a cheaper region. Explain two location effects.",
            solution: "Lower operating costs improve margins; online reach reduces dependence on footfall but requires logistics investment.",
          },
          questions: [
            {
              id: "ebz11-u12-relocation-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which is a pull factor encouraging a business to relocate?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Rising local rents" },
                  { id: "b", text: "Government relocation grants" },
                  { id: "c", text: "Poor transport links" },
                  { id: "d", text: "Increasing congestion" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Pull factor", statement: "Attraction of a new location." },
                ],
                steps: [
                  { reasoning: "Grants attract businesses to a location.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Government relocation grants",
                commonErrors: ["Confusing push and pull factors."],
              },
            },
            {
              id: "ebz11-u12-relocation-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give two costs a business may face when relocating.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Relocation costs", statement: "Financial and operational disruption." },
                ],
                steps: [
                  { reasoning: "Physical removal and fit-out costs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Disruption to trading and possible customer loss.", marks: 1, markCode: "AO1" },
                  { reasoning: "Staff may need retraining or may leave.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Removal costs, disruption and staff issues.",
                commonErrors: ["Only mentioning rent."],
              },
            },
            {
              id: "ebz11-u12-relocation-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain how e-commerce changes the importance of a business's location.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "E-commerce location", statement: "Online sales reduce need for prime retail sites but increase logistics needs." },
                ],
                steps: [
                  { reasoning: "Customers can buy online without visiting a shop.", marks: 1, markCode: "AO2" },
                  { reasoning: "A prime high-street location becomes less essential.", marks: 1, markCode: "AO2" },
                  { reasoning: "Warehouses and delivery networks become more important.", marks: 1, markCode: "AO2" },
                  { reasoning: "Businesses still need reliable IT and customer service.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "E-commerce shifts importance from shop location to logistics and online systems.",
                commonErrors: ["Claiming location no longer matters."],
              },
            },
            {
              id: "ebz11-u12-relocation-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Compare the location needs of a high-street shop and an online fulfilment centre.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Location by sales channel", statement: "Shops need footfall; fulfilment centres need logistics." },
                ],
                steps: [
                  { reasoning: "High-street shop needs customer access and visibility.", marks: 1, markCode: "AO2" },
                  { reasoning: "Shop needs parking and convenient transport links.", marks: 1, markCode: "AO2" },
                  { reasoning: "Fulfilment centre needs space and cheap land.", marks: 1, markCode: "AO2" },
                  { reasoning: "Centre needs delivery links to customers nationwide.", marks: 1, markCode: "AO2" },
                  { reasoning: "Centre needs IT systems and reliable suppliers.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Shop prioritises footfall; fulfilment centre prioritises space, cost and logistics.",
                commonErrors: ["Using identical factors for both."],
              },
            },
            {
              id: "ebz11-u12-relocation-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A town-centre shop is losing customers to online retailers. Discuss whether it should relocate to a cheaper out-of-town site.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Relocation decision", statement: "Weigh lower costs against loss of footfall and access." },
                ],
                steps: [
                  { reasoning: "Online competition reduces town-centre sales.", marks: 1, markCode: "AO2" },
                  { reasoning: "Out-of-town rent may be lower.", marks: 1, markCode: "AO2" },
                  { reasoning: "Parking and access may be easier for car customers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Losing footfall may reduce impulse purchases.", marks: 1, markCode: "AO2" },
                  { reasoning: "Relocation costs may be high for a small shop.", marks: 1, markCode: "AO3" },
                  { reasoning: "Online selling may be a better response than moving.", marks: 1, markCode: "AO3" },
                  { reasoning: "Decision depends on customer behaviour and product type.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Relocation may cut costs but risks losing customers; online selling may be more effective.",
                commonErrors: ["Ignoring online competition."],
              },
            },
            {
              id: "ebz11-u12-relocation-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A software firm must decide whether to keep its office near universities and city clients or move to a cheaper suburb with better transport links. Evaluate the relocation decision.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Relocation evaluation", statement: "Weigh cost, labour, access, disruption and growth." },
                  { kind: "skill", name: "Evaluation", statement: "Recommend a justified location." },
                ],
                steps: [
                  { reasoning: "City location gives access to graduates and clients.", marks: 1, markCode: "AO2" },
                  { reasoning: "City rent and wages may be higher.", marks: 1, markCode: "AO2" },
                  { reasoning: "Suburb offers lower costs and transport links.", marks: 1, markCode: "AO2" },
                  { reasoning: "Suburb may reduce access to university talent pools.", marks: 1, markCode: "AO2" },
                  { reasoning: "Relocation costs and staff disruption are significant.", marks: 1, markCode: "AO2" },
                  { reasoning: "Remote/hybrid working may reduce location dependence.", marks: 1, markCode: "AO3" },
                  { reasoning: "Growth plans should influence the choice.", marks: 1, markCode: "AO3" },
                  { reasoning: "Client relationships and brand image may favour the city.", marks: 1, markCode: "AO3" },
                  { reasoning: "Staff morale and retention affect the decision.", marks: 1, markCode: "AO3" },
                  { reasoning: "Best choice depends on skills, cost and long-term strategy.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Keep city access for talent/clients or move for cost if skills and clients can still be reached.",
                commonErrors: ["No recommendation.", "Ignoring relocation costs."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u12-location-notes",
      title: "Location decisions — notes",
      summary: "Location depends on market, labour, materials, transport, cost, competition, infrastructure and legal controls.",
      sections: [
        { heading: "Key idea", body: "Different businesses weight location factors differently: retailers need customers; manufacturers need inputs and transport." },
        { heading: "Relocation", body: "Push factors drive businesses away; pull factors attract them. Relocation has costs and benefits." },
        { heading: "Online and relocation", body: "E-commerce reduces dependence on prime shop sites but increases logistics needs; relocation balances push and pull factors." },
      ],
    },
  },
];
