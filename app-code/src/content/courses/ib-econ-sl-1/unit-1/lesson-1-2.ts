import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "econ-u1-lesson-1-2",
  code: "1-2",
  title: "Factors of Production and the Production Possibility Frontier",
  goal: "I CAN classify the factors of production, interpret points on a production possibility frontier, and explain what causes it to shift.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Land", definition: "All natural resources used in production: soil, water, minerals, climate." },
    { term: "Labour", definition: "Human effort — physical and mental — used in production." },
    { term: "Capital", definition: "Man-made resources used to produce other goods and services (machinery, buildings, tools)." },
    { term: "Entrepreneurship", definition: "The factor that organises the other factors and takes risk to start and run a business." },
    { term: "Production possibility frontier (PPF)", definition: "A curve showing the maximum combinations of two goods an economy can produce with its available resources and technology." },
    { term: "Economic growth", definition: "An increase in the productive capacity of an economy, shown by an outward shift of the PPF." },
  ],
  concepts: [
    {
      id: "econ-u1-factors-production",
      title: "Factors of Production",
      skill: "Identify and classify land, labour, capital and entrepreneurship, and explain how factors earn income.",
      lesson: {
        sections: [
          {
            heading: "The four factors",
            body: "Production requires four **factors**. **Land** is every natural resource — farmland, oil, a worker's skills are *not* land. **Labour** is human effort, both physical and mental. **Capital** is man-made: machinery, factories, computers, roads. Note 'capital' does not mean money — money finances production but is not itself a factor. **Entrepreneurship** is the organising factor: the entrepreneur combines land, labour and capital, takes risks and earns profit or loss.",
          },
          {
            heading: "Factor payments",
            body: "Each factor earns an income: land earns **rent**, labour earns **wages** (or salaries), capital earns **interest**, and entrepreneurship earns **profit**. In national income accounting, total factor payments plus indirect taxes less subsidies approximate national income. The distribution of income depends on the quantity and productivity of each factor owned by households.",
          },
          {
            heading: "Quantity and quality of factors",
            body: "An economy's output depends on how many factors it has and how productive they are. More workers, more machines or better technology raise potential output. **Human capital** — education, training and health — raises labour productivity. Investment in capital goods and infrastructure also expands capacity over time.",
          },
        ],
        keyFormulas: [
          { name: "Factors of production", statement: "Land + Labour + Capital + Entrepreneurship" },
          { name: "Factor incomes", statement: "Rent + Wages + Interest + Profit" },
          { name: "Productivity", statement: "Output per unit of input" },
        ],
        workedExample: {
          problem: "Classify each item: a wheat field; a factory robot; a student's university degree; the owner who risks savings to open a restaurant.",
          solution: "Wheat field = land. Robot = capital. University degree raises human capital (labour). The restaurant owner = entrepreneurship.",
        },
      },
      questions: [
        {
          id: "econ-u1-l12c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is classified as capital in economics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A delivery truck" },
              { id: "b", text: "A plot of land" },
              { id: "c", text: "Money in a bank account" },
              { id: "d", text: "A farmer's physical strength" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Capital", statement: "Man-made resources used to produce goods and services; money is not capital." },
            ],
            steps: [
              { reasoning: "Capital is a produced resource used in further production — a delivery truck qualifies.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A delivery truck",
            commonErrors: ["Confusing money with capital — money is a medium of exchange, not a factor of production."],
          },
        },
        {
          id: "econ-u1-l12c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Match each factor of production to its factor income.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Factor incomes", statement: "Land→rent, labour→wages, capital→interest, entrepreneurship→profit." },
            ],
            steps: [
              { reasoning: "Land earns rent.", marks: 1, markCode: "M" },
              { reasoning: "Labour earns wages; capital earns interest.", marks: 1, markCode: "M" },
              { reasoning: "Entrepreneurship earns profit (or loss).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rent, wages, interest, profit respectively.",
            commonErrors: ["Saying land earns 'interest' or labour earns 'rent'."],
          },
        },
        {
          id: "econ-u1-l12c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how investment in education can raise an economy's productive capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Human capital", statement: "Education and training raise labour productivity and potential output." },
            ],
            steps: [
              { reasoning: "Education raises human capital: workers gain skills and knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Higher-skilled workers produce more per hour — labour productivity rises.", marks: 1, markCode: "M" },
              { reasoning: "Innovation and better techniques spread, raising total factor productivity.", marks: 1, markCode: "R" },
              { reasoning: "Over time potential output and living standards rise — an outward PPF shift.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Education raises human capital → higher labour productivity → outward PPF shift.",
            commonErrors: ["Claiming education only helps individuals, not the economy's capacity."],
          },
        },
        {
          id: "econ-u1-l12c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the importance of entrepreneurship as a factor of production.",
          parts: [
            { label: "a", prompt: "Define entrepreneurship and its factor income.", marks: 2 },
            { label: "b", prompt: "Explain the functions the entrepreneur performs.", marks: 3 },
            { label: "c", prompt: "Evaluate the importance of entrepreneurship compared with the other factors.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Entrepreneurship", statement: "The factor that organises resources and bears risk; earns profit." },
              { kind: "principle", name: "Entrepreneurial functions", statement: "Innovation, risk-taking, organisation, decision-making." },
            ],
            steps: [
              { part: "a", reasoning: "Entrepreneurship organises land, labour and capital to produce goods/services.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Its income is profit (or loss).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Takes risks: commits resources to uncertain ventures.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Innovates: introduces new products, methods or markets.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Organises and makes key decisions, coordinating other factors.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Without entrepreneurship, other factors remain uncombined — land, labour, capital alone produce nothing.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But capital and labour are quantitatively essential inputs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: entrepreneurship is the coordinating/innovating factor, indispensable but not sufficient alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Organises factors, earns profit. (b) Risk, innovation, organisation. (c) Indispensable coordinator but works with other factors.",
            commonErrors: ["Treating profit as guaranteed rather than a reward for risk."],
          },
        },
        {
          id: "econ-u1-l12c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which factor of production earns rent as its income?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capital" },
              { id: "b", text: "Labour" },
              { id: "c", text: "Land" },
              { id: "d", text: "Entrepreneurship" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Factor incomes", statement: "Land→rent, labour→wages, capital→interest, entrepreneurship→profit." },
            ],
            steps: [
              { reasoning: "Rent is the payment for the use of natural resources — land.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Land",
            commonErrors: ["Mixing up rent and interest."],
          },
        },
        {
          id: "econ-u1-l12c1q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A worker completing a university degree most directly increases the productivity of which factor of production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Labour" },
              { id: "b", text: "Land" },
              { id: "c", text: "Capital" },
              { id: "d", text: "Money" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Human capital", statement: "Education and training that raise labour productivity." },
            ],
            steps: [
              { reasoning: "A degree raises human capital — the skills embodied in labour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Labour",
            commonErrors: ["Classifying education as capital equipment rather than human capital."],
          },
        },
        {
          id: "econ-u1-l12c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In economics, money is not classified as capital because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is produced by the government only" },
              { id: "b", text: "It is not scarce" },
              { id: "c", text: "It is a medium of exchange and financing tool, not a resource used directly in production" },
              { id: "d", text: "It earns no income for its owner" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Capital", statement: "Man-made resources used to produce goods and services — money finances but is not itself a factor." },
            ],
            steps: [
              { reasoning: "Capital must be a resource used in production; money facilitates exchange and finance instead.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Money is a medium of exchange/financing tool, not a direct productive resource",
            commonErrors: ["Conflating financial capital with physical capital."],
          },
        },
        {
          id: "econ-u1-l12c1q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Classify each item as land, labour, capital or entrepreneurship: an oil reserve; a nurse's medical training; a delivery van; the manager who organises a new food-delivery venture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Factors of production", statement: "Land = natural resources; labour = human effort; capital = man-made productive resources; entrepreneurship = organising/risk-taking." },
            ],
            steps: [
              { reasoning: "Oil reserve = land (natural resource).", marks: 1, markCode: "M" },
              { reasoning: "Medical training = labour (human capital raises labour productivity).", marks: 1, markCode: "M" },
              { reasoning: "Delivery van = capital; venture manager = entrepreneurship.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Land, labour, capital, entrepreneurship respectively.",
            commonErrors: ["Classifying training as capital rather than labour, or the van as land."],
          },
        },
        {
          id: "econ-u1-l12c1q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In one year an economy records the following factor incomes: rent $200 billion, wages $800 billion, interest $100 billion and profit $50 billion. Calculate: (a) total factor income, and (b) the percentage of total factor income earned by labour.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total factor income ($ billion)", answer: 1150 },
              { label: "Labour share (%)", answer: 69.6, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total factor income", statement: "Sum of rent + wages + interest + profit" },
            ],
            steps: [
              { reasoning: "Add all factor incomes.", working: "200 + 800 + 100 + 50 = 1150", marks: 1, markCode: "M" },
              { reasoning: "Total factor income = $1,150 billion.", marks: 1, markCode: "A" },
              { reasoning: "Labour's share = wages / total x 100.", working: "800/1150 \\times 100 \\approx 69.6\\%", marks: 1, markCode: "M" },
              { reasoning: "Labour earns about 69.6% of total factor income.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1,150 billion; labour earns about 69.6%.",
            commonErrors: ["Using only wages in the total, or forgetting to multiply by 100."],
          },
        },
        {
          id: "econ-u1-l12c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the quantity and quality of the factors of production affect an economy's potential output.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quantity and quality of factors", statement: "More or more productive factors raise potential output." },
            ],
            steps: [
              { reasoning: "Quantity: more workers, machines or land allow more production.", marks: 1, markCode: "M" },
              { reasoning: "Quality: better-skilled labour, newer capital and improved technology raise output per unit of input.", marks: 1, markCode: "M" },
              { reasoning: "Human capital (education, health, training) specifically raises labour productivity.", marks: 1, markCode: "R" },
              { reasoning: "Higher quantity/quality factors shift the PPF outward — greater productive capacity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More and better factors raise potential output, shifting the PPF outward.",
            commonErrors: ["Covering only quantity or only quality."],
          },
        },
        {
          id: "econ-u1-l12c1q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the importance of investment in capital goods for an economy's growth.",
          parts: [
            { label: "a", prompt: "Define capital and state the income it earns.", marks: 2 },
            { label: "b", prompt: "Explain how capital investment raises productive capacity.", marks: 3 },
            { label: "c", prompt: "Evaluate the limitations of relying on capital investment for growth.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Capital", statement: "Man-made resources used to produce goods and services; earns interest." },
              { kind: "principle", name: "Investment and growth", statement: "New capital raises productivity and potential output over time." },
            ],
            steps: [
              { part: "a", reasoning: "Capital = man-made productive resources (machinery, buildings, infrastructure).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Its factor income is interest.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "New machinery raises labour productivity — more output per worker.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Infrastructure (roads, power) lowers costs and expands what firms can produce.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Over time this shifts the PPF outward — economic growth.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Capital depreciates and investment involves an opportunity cost of current consumption.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Investment may be misallocated or underused without complementary skills/institutions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: capital investment is essential for growth but must be complemented by other factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Man-made resources earning interest. (b) Raises productivity → outward PPF shift. (c) Depreciation, opportunity cost and complementarity limit it.",
            commonErrors: ["Ignoring depreciation or the opportunity cost of investment."],
          },
        },
        {
          id: "econ-u1-l12c1q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Entrepreneurship earns which factor income?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wages" },
              { id: "b", text: "Interest" },
              { id: "c", text: "Rent" },
              { id: "d", text: "Profit" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Factor incomes", statement: "Entrepreneurship earns profit (or loss)." },
            ],
            steps: [
              { reasoning: "Profit is the reward to the entrepreneur for organising resources and bearing risk.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Profit",
            commonErrors: ["Saying entrepreneurship earns a fixed wage."],
          },
        },
        {
          id: "econ-u1-l12c1q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of human capital?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A workforce of trained and certified engineers" },
              { id: "b", text: "A company's cash reserves in the bank" },
              { id: "c", text: "A fleet of new delivery trucks" },
              { id: "d", text: "A large plot of farmland" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Human capital", statement: "The skills, knowledge and health embodied in workers that raise productivity." },
            ],
            steps: [
              { reasoning: "Trained engineers embody skills and knowledge — human capital.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A workforce of trained and certified engineers",
            commonErrors: ["Confusing physical capital or money with human capital."],
          },
        },
        {
          id: "econ-u1-l12c1q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Distinguish between capital and money as economic concepts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Capital", statement: "Man-made resources used to produce goods and services." },
              { kind: "definition", name: "Money", statement: "A medium of exchange and store of value used to facilitate transactions." },
            ],
            steps: [
              { reasoning: "Capital is a factor of production — machinery, buildings, tools used to make goods.", marks: 1, markCode: "M" },
              { reasoning: "Money is not a factor; it is a financial asset used to buy goods and services.", marks: 1, markCode: "M" },
              { reasoning: "Capital directly contributes to production; money enables exchange and finance.", marks: 1, markCode: "M" },
              { reasoning: "Capital earns interest as a factor income; money itself earns no factor payment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Capital = productive resource (a factor); money = medium of exchange/financing tool.",
            commonErrors: ["Treating money in a bank account as capital."],
          },
        },
        {
          id: "econ-u1-l12c1q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A government with limited funds must choose between subsidising new machinery for factories or funding vocational training for workers.",
          parts: [
            { label: "a", prompt: "Identify which factors of production each option develops.", marks: 2 },
            { label: "b", prompt: "Compare how each option could raise productivity.", marks: 3 },
            { label: "c", prompt: "Evaluate which option is likely to raise productive capacity more.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Factors of production", statement: "Machinery develops capital; vocational training develops labour/human capital." },
              { kind: "principle", name: "Productivity", statement: "Output per unit of input — raised by better or more factors." },
            ],
            steps: [
              { part: "a", reasoning: "Machinery subsidies develop capital; training develops labour (human capital).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both aim to raise output per worker or per unit of input.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "New machinery can directly raise output per hour worked.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Training raises worker skill, enabling better use of existing capital.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complementarity: skilled workers may be needed to operate new machines effectively.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Valid evaluation, e.g. machinery gives faster gains but depreciates; training is slower but durable.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on which better suits the economy's needs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Machinery = capital; training = labour/human capital. (b) Both raise productivity via different routes. (c) Depends on context — often complementary.",
            commonErrors: ["Treating the two options as unrelated rather than complementary."],
          },
        },
        {
          id: "econ-u1-l12c1q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the entrepreneur earns profit rather than a fixed wage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Profit as reward for risk", statement: "The entrepreneur bears uncertainty and is rewarded with profit (or loss)." },
            ],
            steps: [
              { reasoning: "The entrepreneur commits resources to ventures with uncertain outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Other factors earn contracted payments (rent, wages, interest); the entrepreneur's reward is residual.", marks: 1, markCode: "M" },
              { reasoning: "If the venture succeeds, profit rewards the risk taken; failure means loss.", marks: 1, markCode: "M" },
              { reasoning: "Thus profit is variable and linked to performance and risk, not a fixed wage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Profit compensates the entrepreneur for organising factors and bearing risk — it is not guaranteed like a wage.",
            commonErrors: ["Treating profit as a guaranteed payment rather than a residual reward."],
          },
        },
      ],
    },
    {
      id: "econ-u1-ppf",
      title: "The Production Possibility Frontier",
      skill: "Interpret points on and shifts of the PPF and calculate opportunity cost along the frontier.",
      lesson: {
        sections: [
          {
            heading: "Reading the PPF",
            body: "The **PPF** shows the maximum output of two goods an economy can produce when all resources are fully and efficiently employed. A point **on** the curve = full employment and efficiency. A point **inside** = unemployed resources or inefficiency (recession). A point **outside** = currently unattainable. The curve is typically **bowed out** because resources are not perfectly substitutable between goods — opportunity cost rises as you produce more of one good.",
          },
          {
            heading: "Opportunity cost on the PPF",
            body: "Moving along the PPF, producing more of good X requires giving up some of good Y. The **slope** of the PPF measures opportunity cost. Because the curve bows outward, the opportunity cost of producing an extra unit of X **increases** — resources specialised in X are used first, then less suited resources.",
          },
          {
            heading: "Shifts of the PPF",
            body: "An **outward shift** (economic growth) is caused by more resources, better technology or improved productivity. An **inward shift** results from war, natural disaster, depletion of resources or a fall in the working population. A shift means the economy can produce more of **both** goods. Growth on the curve (moving to a better point) differs from growth of capacity (shifting the curve).",
          },
        ],
        keyFormulas: [
          { name: "Points on the PPF", statement: "On = efficient; inside = unemployed/inefficient; outside = unattainable" },
          { name: "Slope = opportunity cost", statement: "Steeper slope → higher opportunity cost of the good on the x-axis" },
          { name: "PPF shifts", statement: "Outward = growth; inward = reduced capacity" },
        ],
        workedExample: {
          problem: "An economy's PPF shows it can produce 100 units of consumer goods or 50 units of capital goods. If it produces 60 consumer goods, how many capital goods can it produce if the opportunity cost is constant?",
          solution: "Constant OC: 100 consumer goods cost 50 capital goods, so 60 consumer goods cost 60 × (50/100) = 30 capital goods. Answer: 20 capital goods.",
        },
      },
      questions: [
        {
          id: "econ-u1-l12c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A point inside the production possibility frontier indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unemployed resources or productive inefficiency" },
              { id: "b", text: "Full employment and productive efficiency" },
              { id: "c", text: "An impossible level of output" },
              { id: "d", text: "Economic growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PPF points", statement: "On = efficient; inside = unemployed/inefficient; outside = unattainable." },
            ],
            steps: [
              { reasoning: "A point inside the frontier means resources are not fully or efficiently used.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Unemployed resources or inefficiency",
            commonErrors: ["Confusing inside points with growth — growth shifts the whole curve outward."],
          },
        },
        {
          id: "econ-u1-l12c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why the PPF is typically bowed outward (concave to the origin).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Increasing opportunity cost", statement: "Resources are not perfectly substitutable between goods." },
            ],
            steps: [
              { reasoning: "Resources differ in suitability for different goods.", marks: 1, markCode: "M" },
              { reasoning: "As production of one good rises, less suitable resources must be diverted, raising opportunity cost.", marks: 1, markCode: "M" },
              { reasoning: "Hence the curve steepens — bowed outward shape.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resources are specialised; opportunity cost rises as output shifts toward one good.",
            commonErrors: ["Claiming the PPF must be a straight line — that assumes constant opportunity cost."],
          },
        },
        {
          id: "econ-u1-l12c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An economy can produce either 200 tonnes of wheat or 100 tonnes of steel with all its resources. If it chooses to produce 120 tonnes of wheat, and the PPF is a straight line, how much steel can it produce? Show your working.",
          response: {
            type: "numeric",
            parts: [{ label: "Steel (tonnes)", answer: 40 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear PPF opportunity cost", statement: "OC per unit = other good foregone / units produced" },
            ],
            steps: [
              { reasoning: "Each tonne of wheat costs 100/200 = 0.5 tonnes of steel.", working: "OC = 0.5\\text{ steel per wheat}", marks: 1, markCode: "M" },
              { reasoning: "120 tonnes of wheat costs 120 x 0.5 = 60 tonnes of steel.", working: "120 \\times 0.5 = 60", marks: 1, markCode: "M" },
              { reasoning: "Steel produced = 100 - 60 = 40 tonnes.", working: "100 - 60 = 40", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 tonnes of steel",
            commonErrors: ["Calculating steel foregone but forgetting to subtract from 100.", "Using 200/100 ratio incorrectly."],
          },
        },
        {
          id: "econ-u1-l12c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the usefulness of the PPF as a model of an economy's productive capacity.",
          parts: [
            { label: "a", prompt: "Explain what the PPF shows and what its slope represents.", marks: 2 },
            { label: "b", prompt: "Explain how economic growth is represented on the PPF.", marks: 3 },
            { label: "c", prompt: "Evaluate the limitations of the PPF model.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "PPF", statement: "Maximum combinations of two goods with available resources and technology." },
              { kind: "principle", name: "PPF limitations", statement: "Two goods only, fixed technology, no price information." },
            ],
            steps: [
              { part: "a", reasoning: "PPF shows maximum output combinations with full, efficient resource use.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Slope measures opportunity cost between the two goods.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Growth = outward shift from more resources, better technology or productivity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shift allows more of both goods — increased productive capacity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Distinguish from moving along the curve, which is just reallocation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only two goods — real economies produce many; oversimplification.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Assumes fixed technology and full information; ignores income distribution.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: useful for illustrating scarcity, choice and growth but highly simplified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Max output combos; slope = OC. (b) Outward shift = growth. (c) Simplified but pedagogically useful.",
            commonErrors: ["Confusing movement along the PPF with a shift of the PPF."],
          },
        },
        {
          id: "econ-u1-l12c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A point lying exactly on the production possibility frontier represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic growth" },
              { id: "b", text: "An unattainable combination of output" },
              { id: "c", text: "Unemployed resources" },
              { id: "d", text: "Full employment of resources and productive efficiency" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PPF points", statement: "On the frontier = all resources fully and efficiently employed." },
            ],
            steps: [
              { reasoning: "The frontier shows maximum output, so points on it use all resources efficiently.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Full employment and productive efficiency",
            commonErrors: ["Confusing on-curve points with inside points."],
          },
        },
        {
          id: "econ-u1-l12c2q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An outward shift of the PPF is most likely caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improved technology or an increase in resources" },
              { id: "b", text: "A change in consumer preferences" },
              { id: "c", text: "A rise in consumer prices" },
              { id: "d", text: "Higher wages for workers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "PPF shifts", statement: "Outward shift = more resources, better technology or higher productivity." },
            ],
            steps: [
              { reasoning: "Only changes in productive capacity shift the PPF — more resources or better technology.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Improved technology or an increase in resources",
            commonErrors: ["Thinking price or preference changes shift the PPF."],
          },
        },
        {
          id: "econ-u1-l12c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The slope of the PPF measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The level of unemployment" },
              { id: "b", text: "The market price of the goods" },
              { id: "c", text: "The rate of inflation" },
              { id: "d", text: "The opportunity cost of producing one good in terms of the other" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Slope = opportunity cost", statement: "The slope of the PPF shows how much of one good must be sacrificed for another." },
            ],
            steps: [
              { reasoning: "Moving along the PPF trades one good for another; the slope quantifies that trade-off.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The opportunity cost of producing one good in terms of the other",
            commonErrors: ["Confusing slope with price — the PPF shows physical trade-offs, not prices."],
          },
        },
        {
          id: "econ-u1-l12c2q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An economy's linear PPF shows it can produce a maximum of 80 consumer goods or 40 capital goods. If it chooses to produce 50 consumer goods, calculate: (a) the opportunity cost of 1 consumer good, and (b) the number of capital goods produced.",
          response: {
            type: "numeric",
            parts: [
              { label: "Opportunity cost of 1 consumer good (capital goods)", answer: 0.5 },
              { label: "Capital goods produced", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear PPF opportunity cost", statement: "OC per unit = max of other good / max of this good" },
            ],
            steps: [
              { reasoning: "Giving up all 40 capital goods to make all 80 consumer goods means each consumer good costs half a capital good.", working: "40/80 = 0.5", marks: 1, markCode: "M" },
              { reasoning: "Opportunity cost of 1 consumer good = 0.5 capital goods.", marks: 1, markCode: "A" },
              { reasoning: "50 consumer goods cost 50 x 0.5 = 25 capital goods.", working: "50 \\times 0.5 = 25", marks: 1, markCode: "M" },
              { reasoning: "Capital goods produced = 40 - 25 = 15.", working: "40 - 25 = 15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5 capital goods per consumer good; 15 capital goods produced.",
            commonErrors: ["Using 80/40 instead of 40/80 for the exchange rate."],
          },
        },
        {
          id: "econ-u1-l12c2q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why the PPF is usually drawn bowed outward rather than as a straight line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Increasing opportunity cost", statement: "Resources are not perfectly substitutable between two goods." },
            ],
            steps: [
              { reasoning: "Some resources are specialised for one good (e.g. fertile land for wheat).", marks: 1, markCode: "M" },
              { reasoning: "As production shifts toward one good, less suitable resources must be used, raising opportunity cost.", marks: 1, markCode: "M" },
              { reasoning: "A straight line would imply constant opportunity cost — unrealistic.", marks: 1, markCode: "R" },
              { reasoning: "Hence the bowed-out shape showing rising opportunity cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resource specialisation means opportunity cost rises as output shifts — bowed-out PPF.",
            commonErrors: ["Claiming the PPF is always straight or always bowed."],
          },
        },
        {
          id: "econ-u1-l12c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Distinguish between a movement along the PPF and a shift of the PPF, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Movement vs shift", statement: "Movement = reallocation with same resources; shift = changed productive capacity." },
            ],
            steps: [
              { reasoning: "Movement along: choosing a different combination of the same two goods with unchanged resources — e.g. more consumer goods, fewer capital goods.", marks: 1, markCode: "M" },
              { reasoning: "Shift: the whole frontier moves — caused by more resources, technology or productivity.", marks: 1, markCode: "M" },
              { reasoning: "Example of a shift: a new irrigation technique allows more of both food and cash crops.", marks: 1, markCode: "M" },
              { reasoning: "Key distinction: movement changes the mix; shift changes capacity — more of both goods possible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Movement = different mix on same curve; shift = new curve from changed capacity.",
            commonErrors: ["Calling a shift a 'movement' or vice versa."],
          },
        },
        {
          id: "econ-u1-l12c2q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine what causes the PPF to shift and the implications of an outward shift for an economy.",
          parts: [
            { label: "a", prompt: "State what the PPF represents and what a point on it means.", marks: 2 },
            { label: "b", prompt: "Explain three causes of an outward shift of the PPF.", marks: 3 },
            { label: "c", prompt: "Evaluate the implications of an outward shift for living standards.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "PPF", statement: "Maximum output combinations with available resources and technology." },
              { kind: "principle", name: "Causes of growth", statement: "More resources, better technology, improved productivity." },
            ],
            steps: [
              { part: "a", reasoning: "PPF = maximum combinations of two goods with full, efficient resource use.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "A point on it means resources are fully and efficiently employed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cause 1: increase in quantity of factors (labour, capital, land).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cause 2: improved technology raising productivity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cause 3: better education/health raising human capital and efficiency.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Outward shift allows more of both goods — potential rise in living standards.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But distribution matters: gains may be unequal; also possible environmental costs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: growth raises capacity but benefits depend on how output is used and distributed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Max output with full efficiency. (b) More factors, technology, human capital. (c) Raises capacity; benefits depend on distribution and sustainability.",
            commonErrors: ["Assuming an outward shift automatically raises everyone's living standards."],
          },
        },
        {
          id: "econ-u1-l12c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An economy has a linear PPF allowing a maximum of 120 units of good A or 60 units of good B. If it produces 90 units of good A, calculate: (a) the opportunity cost of 1 unit of good A, and (b) the output of good B.",
          response: {
            type: "numeric",
            parts: [
              { label: "Opportunity cost of 1 unit of good A (units of B)", answer: 0.5 },
              { label: "Output of good B", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear PPF opportunity cost", statement: "OC per unit = max of other good / max of this good" },
            ],
            steps: [
              { reasoning: "Each unit of A costs 60/120 = 0.5 units of B.", working: "60/120 = 0.5", marks: 1, markCode: "M" },
              { reasoning: "Opportunity cost of 1 unit of A = 0.5 units of B.", marks: 1, markCode: "A" },
              { reasoning: "90 units of A cost 90 x 0.5 = 45 units of B.", working: "90 \\times 0.5 = 45", marks: 1, markCode: "M" },
              { reasoning: "Good B produced = 60 - 45 = 15 units.", working: "60 - 45 = 15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5 units of B per unit of A; 15 units of B produced.",
            commonErrors: ["Using 120/60 instead of 60/120 for the exchange rate."],
          },
        },
        {
          id: "econ-u1-l12c2q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Define economic growth in terms of the production possibility frontier.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Economic growth", statement: "An increase in an economy's productive capacity." },
            ],
            steps: [
              { reasoning: "Economic growth is an increase in the economy's ability to produce goods and services.", marks: 1, markCode: "M" },
              { reasoning: "On the PPF this appears as an outward shift of the frontier.", marks: 1, markCode: "M" },
              { reasoning: "It allows more of both goods to be produced than before.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth = outward shift of the PPF, enabling more of both goods.",
            commonErrors: ["Confusing growth (shift) with a movement along the PPF."],
          },
        },
        {
          id: "econ-u1-l12c2q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following events would cause an inward shift of the PPF?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A major earthquake destroying factories and infrastructure" },
              { id: "b", text: "Inward migration of workers" },
              { id: "c", text: "A new labour-saving technology" },
              { id: "d", text: "Discovery of a large oil reserve" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inward PPF shift", statement: "Caused by war, natural disaster, resource depletion or falling workforce." },
            ],
            steps: [
              { reasoning: "An earthquake destroying capital stock reduces productive capacity — inward shift.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A major earthquake destroying factories and infrastructure",
            commonErrors: ["Choosing an event that increases capacity instead."],
          },
        },
        {
          id: "econ-u1-l12c2q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A country announces a major programme of investment in education and green technology.",
          parts: [
            { label: "a", prompt: "Predict the effect on the country's PPF.", marks: 2 },
            { label: "b", prompt: "Explain the mechanism by which this effect occurs.", marks: 3 },
            { label: "c", prompt: "Evaluate one constraint that might limit the PPF shift.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "PPF shift causes", statement: "More/better factors and improved technology shift the PPF outward." },
            ],
            steps: [
              { part: "a", reasoning: "The PPF should shift outward — greater productive capacity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The economy can then produce more of both goods.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Education raises human capital — workers become more productive.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Green technology improves efficiency and may create new industries.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Higher productivity per worker raises total potential output.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Valid constraint, e.g. time lags, financing costs, skills shortages or implementation failure.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation of that constraint's effect on the shift.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Outward PPF shift. (b) Higher human capital and productivity. (c) Time lags/costs may delay or limit it.",
            commonErrors: ["Predicting a movement along the PPF rather than a shift."],
          },
        },
        {
          id: "econ-u1-l12c2q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why a point inside the PPF indicates inefficiency, and give one real-world example of how an economy might reach such a point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inefficiency on the PPF", statement: "Inside points mean resources are unemployed or misallocated." },
            ],
            steps: [
              { reasoning: "The PPF shows maximum output; a point inside means less than the maximum is produced.", marks: 1, markCode: "M" },
              { reasoning: "This occurs when resources are unemployed (recession) or used inefficiently.", marks: 1, markCode: "M" },
              { reasoning: "Example: high unemployment during a recession leaves factories idle — output below capacity.", marks: 1, markCode: "M" },
              { reasoning: "Moving to the frontier would allow more of both goods without new resources.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inside points = wasted resources; e.g. recessionary unemployment leaves capacity unused.",
            commonErrors: ["Saying inside points are impossible — they are attainable but inefficient."],
          },
        },
      ],
    },
  ],
};
