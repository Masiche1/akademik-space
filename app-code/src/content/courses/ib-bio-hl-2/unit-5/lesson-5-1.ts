import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "biohl-u5-lesson-5-1",
  code: "5-1",
  title: "Population Dynamics",
  goal: "I CAN distinguish exponential from logistic population growth, apply the equations $\\frac{dN}{dt}=rN$ and $\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$, and analyse density-dependent and density-independent limiting factors.",
  standards: ["Paper 1", "Paper 2", "Paper 3", "AHL C.4"],
  vocabulary: [
    { term: "Population", definition: "A group of organisms of the same species living in the same area at the same time." },
    { term: "Intrinsic rate of increase", definition: "The per-capita growth rate $r$ of a population under ideal conditions with unlimited resources." },
    { term: "Carrying capacity", definition: "The maximum population size $K$ that an environment can sustain indefinitely given available resources." },
    { term: "Exponential growth", definition: "Unlimited growth where $\\frac{dN}{dt}=rN$ and $N=N_0e^{rt}$, producing a J-shaped curve." },
    { term: "Logistic growth", definition: "Growth limited by resources, described by $\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$, producing an S-shaped curve." },
    { term: "Density-dependent factor", definition: "A limiting factor whose effect intensifies as population density rises, such as food shortage, disease or predation." },
  ],
  concepts: [
    {
      id: "biohl-u5-population-growth",
      title: "Exponential and logistic growth",
      skill: "Apply exponential and logistic growth equations and interpret the phases of the logistic curve.",
      lesson: {
        sections: [
          {
            heading: "Exponential growth",
            body: "When resources are unlimited, each individual reproduces at the same rate, so the population grows by a constant proportion per unit time: **$\\frac{dN}{dt}=rN$**, where $r$ is the intrinsic rate of increase. Integrating gives **$N=N_0e^{rt}$** — an accelerating J-shaped curve seen in bacteria in fresh medium or introduced species with no predators.",
          },
          {
            heading: "Logistic growth",
            body: "Real populations cannot grow forever: as $N$ approaches the **carrying capacity** $K$, resources run short and growth slows. The logistic equation **$\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$** makes the growth rate zero at $N=K$ and negative above it. The resulting S-shaped curve has three phases: a lag phase (slow start), a log/exponential phase (rapid growth) and a plateau phase near $K$.",
          },
          {
            heading: "Overshoot and limitations",
            body: "Populations can **overshoot** $K$ — e.g. deer populations that outstrip food and then crash below $K$. The logistic model assumes $K$ is constant, but $K$ itself fluctuates with climate, disease and resource availability, so real populations often oscillate around carrying capacity rather than settling smoothly.",
          },
        ],
        keyFormulas: [
          { name: "Exponential growth", statement: "$\\frac{dN}{dt}=rN$ and $N=N_0e^{rt}$" },
          { name: "Logistic growth", statement: "$\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$" },
          { name: "Carrying capacity", statement: "Growth rate $= 0$ when $N = K$; negative when $N > K$" },
        ],
        workedExample: {
          problem: "A population of deer has $r = 0.4\\ \\text{yr}^{-1}$ and carrying capacity $K = 2000$. At $N = 500$, find the instantaneous growth rate under the logistic model.",
          solution: "$\\frac{dN}{dt} = rN\\left(1-\\frac{N}{K}\\right) = 0.4 \\times 500 \\times \\left(1-\\frac{500}{2000}\\right) = 0.4 \\times 500 \\times 0.75 = 150\\ \\text{deer per year}$.",
        },
      },
      questions: [
        {
          id: "biohl-u5-population-growth-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A bacterial culture grows in a flask of sterile nutrient broth with unlimited food and space. Which growth model describes this situation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Logistic growth limited by carrying capacity" },
              { id: "b", text: "Zero growth because bacteria cannot reproduce" },
              { id: "c", text: "Exponential growth $\\frac{dN}{dt}=rN$" },
              { id: "d", text: "Declining growth because nutrients are finite" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Exponential growth", statement: "When resources are unlimited, $\\frac{dN}{dt}=rN$ and $N=N_0e^{rt}$." },
            ],
            steps: [
              { reasoning: "Unlimited food and space mean no resource limitation — the exponential model applies.", working: "\\text{unlimited resources}", marks: 1, markCode: "M" },
              { reasoning: "The correct equation is $\\frac{dN}{dt}=rN$, giving a J-shaped curve.", working: "N = N_0 e^{rt}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Exponential growth $\\frac{dN}{dt}=rN$",
            commonErrors: ["Assuming all growth is logistic — logistic growth requires a finite carrying capacity."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-growth-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In the logistic growth equation $\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$, what happens to the instantaneous growth rate when the population equals the carrying capacity $K$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It becomes negative" },
              { id: "b", text: "It is at its maximum" },
              { id: "c", text: "It is zero" },
              { id: "d", text: "It equals $rK$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Logistic growth", statement: "Growth rate $= rN(1-N/K)$; at $N=K$ the factor $(1-N/K)=0$." },
            ],
            steps: [
              { reasoning: "Substitute $N = K$ into the equation.", working: "1 - \\frac{K}{K}", marks: 1, markCode: "M" },
              { reasoning: "The resource-limitation term becomes $1 - 1 = 0$, so the whole growth rate is zero.", working: "= 0", marks: 1, markCode: "M" },
              { reasoning: "At $N=K$ births balance deaths — the population is stable at carrying capacity.", working: "\\text{stable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It is zero",
            commonErrors: ["Thinking growth is fastest at $K$ — it is actually fastest at $N=K/2$; at $K$ it stops."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-growth-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A reintroduced population of wolves has $N_0 = 50$, $r = 0.3\\ \\text{yr}^{-1}$ and $K = 500$. Using exponential growth $N = N_0 e^{rt}$, estimate the population after $t = 10$ years if resources were unlimited. Give your answer to the nearest whole number.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1\\,005$" },
              { id: "b", text: "$1\\,500$" },
              { id: "c", text: "$335$" },
              { id: "d", text: "$100$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Exponential growth", statement: "$N = N_0 e^{rt}$ where $r$ is the intrinsic rate of increase and $t$ the time in years." },
            ],
            steps: [
              { reasoning: "Substitute $N_0 = 50$, $r = 0.3$, $t = 10$.", working: "N = 50 e^{0.3 \\times 10}", marks: 1, markCode: "M" },
              { reasoning: "Compute the exponent: $0.3 \\times 10 = 3$.", working: "e^{3}", marks: 1, markCode: "M" },
              { reasoning: "$e^3 \\approx 20.086$, so $N = 50 \\times 20.086 \\approx 1\\,004$.", working: "50 \\times 20.086 \\approx 1004", marks: 1, markCode: "A" },
              { reasoning: "Nearest whole number is about $1\\,005$ — note this exceeds $K$, showing why exponential growth cannot persist.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1\\,005$",
            commonErrors: ["Using $N = N_0(1+r)^t$ gives $50(1.3)^{10} \\approx 1\\,378$ — that is discrete growth, not the continuous exponential model asked for."],
            examinerNote: "M1 M1 A1 A1. FT applies for rounding.",
          },
        },
        {
          id: "biohl-u5-population-growth-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A population of fish in a lake has intrinsic rate of increase $r = 0.5\\ \\text{yr}^{-1}$ and carrying capacity $K = 10\\,000$. At the start of the year the population is $N = 2\\,000$.",
          parts: [
            { label: "a", prompt: "Calculate the instantaneous growth rate $\\frac{dN}{dt}$ using the logistic equation.", marks: 2 },
            { label: "b", prompt: "Calculate the growth rate if the population were instead $N = 5\\,000$, and explain why it differs.", marks: 2 },
            { label: "c", prompt: "State the population size at which growth would be fastest and find that maximum growth rate.", marks: 2 },
            { label: "d", prompt: "Evaluate the limitations of using this single logistic model to predict the fishery's future, mentioning at least two real-world factors.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Logistic growth", statement: "$\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$; growth is fastest at $N=K/2$ where $\\frac{dN}{dt}=\\frac{rK}{4}$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $N=2000$, $K=10000$, $r=0.5$ into the logistic equation.", working: "\\frac{dN}{dt}=0.5\\times2000\\times\\left(1-\\frac{2000}{10000}\\right)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This gives $0.5 \\times 2000 \\times 0.8 = 800$ fish per year.", working: "= 800\\ \\text{yr}^{-1}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "At $N=5000$: $\\frac{dN}{dt}=0.5\\times5000\\times(1-0.5)=0.5\\times5000\\times0.5$.", working: "0.5\\times5000\\times0.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The rate is $1\\,250$ per year — higher than at $N=2000$ because growth peaks at $N=K/2=5000$.", working: "= 1250\\ \\text{yr}^{-1}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Growth is fastest when $N=K/2=5000$; at this point $1-N/K=0.5$ maximises the product $N(1-N/K)$.", working: "N = K/2 = 5000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Maximum rate $= \\frac{rK}{4} = \\frac{0.5 \\times 10000}{4} = 1\\,250$ fish per year.", working: "\\frac{rK}{4}=1250", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The model assumes constant $K$ and $r$; fishing pressure, disease, climate change and food-web effects all alter them.", working: "\\text{fishing, disease, climate}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It also ignores time lags, age structure and stochastic events — predictions are only reliable near equilibrium.", working: "\\text{model limits}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $800$ fish yr$^{-1}$; (b) $1\\,250$ fish yr$^{-1}$ — faster because $N=5000=K/2$ is where growth peaks; (c) maximum at $N=5000$, rate $1\\,250$ yr$^{-1}$; (d) the model assumes constant $K$ and $r$, ignoring fishing, disease, climate and age structure",
            commonErrors: ["Assuming growth is fastest at $N=K$ — it is zero there; the maximum is at $N=K/2$."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-population-growth-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the exponential growth equation $N = N_0 e^{rt}$, what does the symbol $r$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The intrinsic rate of increase per unit time" },
              { id: "b", text: "The number of offspring produced per individual" },
              { id: "c", text: "The population size at time zero" },
              { id: "d", text: "The carrying capacity of the environment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intrinsic rate of increase", statement: "$r$ is the per-capita growth rate of a population under ideal conditions with unlimited resources." },
            ],
            steps: [
              { reasoning: "Identify $r$ as the per-capita (intrinsic) growth rate under ideal conditions.", working: "r = \\text{intrinsic rate}", marks: 1, markCode: "M" },
              { reasoning: "Carrying capacity is $K$ and $N_0$ is the initial size, so only option (b) fits.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The intrinsic rate of increase per unit time",
            commonErrors: ["Confusing $r$ with $K$ — $r$ is a rate, $K$ is a population size."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-growth-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For the logistic equation $\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$, at which population size is the instantaneous growth rate greatest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$N = \\frac{K}{2}$" },
              { id: "b", text: "$N = 0$" },
              { id: "c", text: "$N = K$" },
              { id: "d", text: "$N = 2K$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Maximum logistic growth", statement: "The product $N(1-N/K)$ is maximised when $N = K/2$, giving $\\frac{dN}{dt}=\\frac{rK}{4}$." },
            ],
            steps: [
              { reasoning: "Growth is zero at $N=0$ and $N=K$, and negative above $K$ — the maximum lies between.", working: "\\text{max at } N=K/2", marks: 1, markCode: "M" },
              { reasoning: "The product $N(1-N/K)$ is greatest when $N=K/2$.", working: "\\frac{dN}{dt}=\\frac{rK}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $N = \\frac{K}{2}$",
            commonErrors: ["Choosing $N=K$ — growth is zero there, not maximum."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-growth-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A population of rabbits introduced to a new reserve grows rapidly for the first two years, then levels off as food and space become limiting. Which growth curve does this describe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A logistic S-shaped curve" },
              { id: "b", text: "A declining curve" },
              { id: "c", text: "A linear growth curve" },
              { id: "d", text: "An exponential J-shaped curve" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Logistic growth", statement: "Growth slows as $N$ approaches $K$, producing an S-shaped (sigmoid) curve with lag, log and plateau phases." },
            ],
            steps: [
              { reasoning: "Rapid initial growth reflects the log/exponential phase of the logistic curve.", working: "\\text{log phase}", marks: 1, markCode: "M" },
              { reasoning: "The subsequent levelling off as resources limit growth is the plateau phase near $K$.", working: "\\text{plateau at } K", marks: 1, markCode: "M" },
              { reasoning: "An S-shaped (sigmoid) logistic curve matches this pattern.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A logistic S-shaped curve",
            commonErrors: ["Choosing exponential — exponential growth never levels off; the plateau shows resource limitation."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-growth-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A deer population rises above the carrying capacity $K$ after a mild winter. According to the logistic equation $\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$, what happens next?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The growth rate becomes negative and the population declines" },
              { id: "b", text: "Growth stops and the population stays constant" },
              { id: "c", text: "Growth accelerates because resources are abundant" },
              { id: "d", text: "The population immediately crashes to zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Logistic growth above $K$", statement: "When $N>K$, the factor $(1-N/K)$ is negative, so $\\frac{dN}{dt}<0$ and the population decreases." },
            ],
            steps: [
              { reasoning: "Substituting $N>K$ makes $1-N/K$ negative while $rN$ stays positive.", working: "1-\\frac{N}{K}<0", marks: 1, markCode: "M" },
              { reasoning: "A negative growth rate means the population declines back towards $K$.", working: "\\frac{dN}{dt}<0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The growth rate becomes negative and the population declines",
            commonErrors: ["Assuming growth simply stops — above $K$ the equation predicts an actual decline."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-growth-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A fish population has intrinsic rate of increase $r = 0.5\\ \\text{yr}^{-1}$ and carrying capacity $K = 1600$. Calculate the instantaneous growth rate $\\frac{dN}{dt}$ when the population is $N = 400$ individuals.",
          response: { type: "numeric", parts: [{ label: "Growth rate (individuals per year)", answer: 150 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Logistic growth", statement: "$\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$." },
            ],
            steps: [
              { reasoning: "Substitute $r=0.5$, $N=400$ and $K=1600$ into the logistic equation.", working: "\\frac{dN}{dt}=0.5\\times400\\times\\left(1-\\frac{400}{1600}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the resource-limitation term: $1-0.25=0.75$.", working: "0.5\\times400\\times0.75", marks: 1, markCode: "M" },
              { reasoning: "Compute the growth rate: $200 \\times 0.75 = 150$ individuals per year.", working: "= 150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150$ individuals per year",
            commonErrors: ["Using $N=K$ values wrongly — check $N/K = 400/1600 = 0.25$, not $0.4$."],
          },
        },
        {
          id: "biohl-u5-population-growth-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A colony of bacteria starts at $N_0 = 50$ individuals with intrinsic rate of increase $r = 0.2\\ \\text{hr}^{-1}$. Assuming unlimited resources, calculate the population size after $t = 10$ hours using $N = N_0 e^{rt}$.",
          response: { type: "numeric", parts: [{ label: "Population after 10 hours", answer: 369.45, tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Exponential growth", statement: "$N = N_0 e^{rt}$ where $r$ is the intrinsic rate of increase and $t$ the elapsed time." },
            ],
            steps: [
              { reasoning: "Substitute $N_0=50$, $r=0.2$ and $t=10$ into the exponential equation.", working: "N = 50 e^{0.2 \\times 10}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the exponent: $0.2 \\times 10 = 2$, so $N = 50e^2$.", working: "50 e^{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $e^2 \\approx 7.389$.", working: "e^2 \\approx 7.389", marks: 1, markCode: "A" },
              { reasoning: "Compute $N \\approx 50 \\times 7.389 = 369.45$, about $369$ individuals.", working: "50 \\times 7.389 \\approx 369.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$369.45$ (about $369$) individuals",
            commonErrors: ["Using $N = N_0(1+r)^t$ — that is discrete growth; the continuous model uses $e^{rt}$."],
          },
        },
        {
          id: "biohl-u5-population-growth-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A population of mice has $N_0 = 100$, intrinsic rate of increase $r = 0.25\\ \\text{yr}^{-1}$ and carrying capacity $K = 2000$. (a) Calculate the population size after $t = 4$ years if resources were unlimited. (b) Calculate the maximum possible growth rate under the logistic model.",
          response: { type: "numeric", parts: [{ label: "Population after 4 years (exponential)", answer: 271.83, tolerance: 0.5 }, { label: "Maximum logistic growth rate (individuals per year)", answer: 125 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Exponential and logistic growth", statement: "$N=N_0e^{rt}$; maximum logistic growth $= \\frac{rK}{4}$ at $N=K/2$." },
            ],
            steps: [
              { reasoning: "For part (a), substitute into $N=N_0e^{rt}$: $100e^{0.25\\times4}=100e^1$.", working: "100 e^{1}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $e \\approx 2.718$.", working: "e \\approx 2.718", marks: 1, markCode: "M" },
              { reasoning: "$N \\approx 271.83$ mice.", working: "100 \\times 2.718 \\approx 271.8", marks: 1, markCode: "A" },
              { reasoning: "For part (b), maximum logistic growth occurs at $N=K/2$ with rate $\\frac{rK}{4}$.", working: "\\frac{rK}{4}", marks: 1, markCode: "M" },
              { reasoning: "Compute $\\frac{0.25 \\times 2000}{4} = 125$ individuals per year.", working: "\\frac{0.25 \\times 2000}{4} = 125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $271.83$ mice; (b) $125$ individuals per year",
            commonErrors: ["Using the exponential result for part (b) — the maximum logistic rate depends only on $r$ and $K$."],
          },
        },
        {
          id: "biohl-u5-population-growth-q12",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A population of seals has $N_0 = 80$, $r = 0.3\\ \\text{yr}^{-1}$. Calculate the population size after $t = 2$ years assuming unlimited resources ($N = N_0 e^{rt}$).",
          response: { type: "numeric", parts: [{ label: "Population after 2 years", answer: 145.8, tolerance: 0.3 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Exponential growth", statement: "$N = N_0 e^{rt}$." },
            ],
            steps: [
              { reasoning: "Substitute and evaluate the exponent: $N = 80e^{0.3\\times2} = 80e^{0.6}$.", working: "80 e^{0.6}", marks: 1, markCode: "M" },
              { reasoning: "$e^{0.6} \\approx 1.822$, so $N \\approx 145.8$ seals.", working: "80 \\times 1.822 \\approx 145.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$145.8$ seals (about $146$)",
            commonErrors: ["Computing $e^{0.3}$ instead of $e^{0.6}$ — the exponent is $rt = 0.6$."],
          },
        },
        {
          id: "biohl-u5-population-growth-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 5,
          stem: "A yeast culture initially contains $100$ cells and grows exponentially according to $N = N_0 e^{rt}$. After $6$ hours the culture contains $800$ cells.",
          response: { type: "numeric", parts: [{ label: "Intrinsic rate of increase $r$ (hr$^{-1}$)", answer: 0.347, tolerance: 0.001 }, { label: "Population doubling time (hours)", answer: 2, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Exponential growth", statement: "$N=N_0e^{rt}$; doubling time $t_d = \\frac{\\ln 2}{r}$." },
            ],
            steps: [
              { reasoning: "Substitute the data: $800 = 100e^{6r}$, so $e^{6r}=8$.", working: "800 = 100 e^{6r} \\Rightarrow e^{6r}=8", marks: 1, markCode: "M" },
              { reasoning: "Take natural logs: $6r = \\ln 8 = 2.079$.", working: "6r = \\ln 8", marks: 1, markCode: "M" },
              { reasoning: "$r = \\frac{\\ln 8}{6} \\approx 0.347\\ \\text{hr}^{-1}$.", working: "r \\approx 0.347", marks: 1, markCode: "A" },
              { reasoning: "Doubling time $t_d = \\frac{\\ln 2}{r}$.", working: "t_d = \\frac{\\ln 2}{r}", marks: 1, markCode: "M" },
              { reasoning: "$t_d = \\frac{0.693}{0.347} \\approx 2.0$ hours.", working: "t_d \\approx 2.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r \\approx 0.347\\ \\text{hr}^{-1}$; doubling time $\\approx 2.0$ hours",
            commonErrors: ["Using $\\log_{10}$ instead of $\\ln$ — the exponential model requires natural logarithms."],
          },
        },
        {
          id: "biohl-u5-population-growth-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A population has $r = 0.6\\ \\text{yr}^{-1}$ and $K = 10\\,000$. When the population is still small ($N = 50$), calculate the instantaneous growth rate $\\frac{dN}{dt}$ using the logistic equation.",
          response: { type: "numeric", parts: [{ label: "Growth rate (individuals per year)", answer: 29.85, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Logistic growth", statement: "$\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$; at small $N$ the rate approaches $rN$." },
            ],
            steps: [
              { reasoning: "Substitute $r=0.6$, $N=50$ and $K=10\\,000$ into the logistic equation.", working: "\\frac{dN}{dt}=0.6\\times50\\times\\left(1-\\frac{50}{10000}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $1-0.005 = 0.995$.", working: "0.6\\times50\\times0.995", marks: 1, markCode: "M" },
              { reasoning: "Compute $30 \\times 0.995 = 29.85$ individuals per year.", working: "= 29.85", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$29.85$ individuals per year",
            commonErrors: ["Dropping the $(1-N/K)$ term entirely — at small $N$ it is close to 1 but not exactly 1."],
          },
        },
        {
          id: "biohl-u5-population-growth-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "A population of Soay sheep introduced to an island grows rapidly for several years, levels off, then oscillates mildly around a relatively stable size. A student claims this is 'perfect logistic growth'.",
          parts: [
            { label: "a", prompt: "Name the three phases of logistic population growth.", marks: 2 },
            { label: "b", prompt: "Explain why $\\frac{dN}{dt}=0$ when $N=K$.", marks: 2 },
            { label: "c", prompt: "Define 'overshoot' and state one consequence for the population.", marks: 2 },
            { label: "d", prompt: "Discuss one reason why real populations oscillate rather than staying exactly at $K$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Logistic growth phases", statement: "Lag phase, log (exponential) phase and plateau phase; growth is zero at $N=K$." },
            ],
            steps: [
              { part: "a", reasoning: "The three phases are the lag phase (slow start), the log/exponential phase (rapid growth) and the plateau phase near $K$.", working: "\\text{lag, log, plateau}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three must be named correctly for full credit.", working: "\\text{3 phases}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "When $N=K$, the factor $(1-N/K)=1-1=0$, so the whole growth rate becomes zero.", working: "1-\\frac{K}{K}=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "At $K$ births balance deaths — the population is in dynamic equilibrium.", working: "\\text{births = deaths}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Overshoot is when a population temporarily exceeds $K$ because growth momentum carries it past the resource limit.", working: "N > K \\text{ temporarily}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A consequence is a crash: resources are depleted, so the population falls below $K$ before recovering.", working: "\\text{crash below } K", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The logistic model assumes $K$ and $r$ are constant, but climate, disease, food availability and predation all fluctuate.", working: "K, r \\text{ not constant}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Density-dependent and density-independent factors therefore push the population above and below $K$ — oscillation rather than a fixed plateau.", working: "\\text{oscillation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) lag, log and plateau phases; (b) at $N=K$ the $(1-N/K)$ term is zero so growth stops; (c) overshoot is temporary growth above $K$, followed by a resource-driven crash; (d) fluctuating $K$ and $r$ (climate, disease, resources) cause oscillations — 'perfect logistic growth' is an idealisation",
            commonErrors: ["Describing overshoot as permanent — it is temporary and is followed by a decline below $K$."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-population-growth-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 6,
          stem: "Conservationists plan to reintroduce a species of eagle to a region where it was extinct. They must choose between modelling future numbers with $N = N_0 e^{rt}$ or the logistic equation $\\frac{dN}{dt}=rN\\left(1-\\frac{N}{K}\\right)$.",
          parts: [
            { label: "a", prompt: "State the key assumption of each model that determines when it is appropriate.", marks: 2 },
            { label: "b", prompt: "Explain why the exponential model predicts an impossibly large population in the long term.", marks: 2 },
            { label: "c", prompt: "Evaluate the use of the logistic model for managing this reintroduction programme.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Model assumptions", statement: "Exponential growth assumes unlimited resources; logistic growth assumes a finite carrying capacity $K$." },
            ],
            steps: [
              { part: "a", reasoning: "The exponential model assumes resources are unlimited (no $K$); the logistic model assumes a finite carrying capacity that limits growth.", working: "\\text{unlimited vs finite } K", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Exponential is appropriate only for short times or small populations; logistic is appropriate once resources become limiting.", working: "\\text{short vs long term}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$N=N_0e^{rt}$ grows without bound because there is no limiting factor — it predicts numbers far exceeding what the habitat can support.", working: "N \\to \\infty", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Real prey (rabbits, fish) are finite, so an eagle population cannot grow exponentially forever.", working: "\\text{finite prey}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The logistic model is more realistic — it predicts stabilisation near $K$ — but $K$ is hard to estimate and may change with habitat management.", working: "\\text{realistic but } K \\text{ uncertain}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It should therefore be used with sensitivity analysis and updated census data rather than as a fixed prediction.", working: "\\text{update with data}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) exponential assumes unlimited resources; logistic assumes finite $K$; (b) $N=N_0e^{rt}$ has no limiting term so it grows without bound, exceeding available prey; (c) logistic is more realistic for long-term management but requires a well-estimated $K$ and ongoing data",
            commonErrors: ["Claiming the exponential model is 'wrong' — it is correct early in colonisation before resources limit growth."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c).",
          },
        },
      ],
    },
    {
      id: "biohl-u5-population-factors",
      title: "Limiting factors, survivorship and age structure",
      skill: "Distinguish density-dependent from density-independent factors and interpret survivorship curves and age-structure diagrams.",
      lesson: {
        sections: [
          {
            heading: "Density-dependent and density-independent factors",
            body: "**Density-dependent factors** intensify as population density rises: food and space competition, disease transmission, predation and waste accumulation. They regulate populations around carrying capacity — the logistic curve's plateau reflects them. **Density-independent factors** act regardless of density: storms, floods, fires, frost and pollutants. A single frost can kill the same proportion of a dense or sparse population.",
          },
          {
            heading: "Survivorship curves",
            body: "A **survivorship curve** plots the proportion of a cohort surviving to each age. **Type I** (humans, large mammals): low early mortality, most die old — heavy parental investment. **Type II** (birds, rodents): roughly constant mortality at all ages. **Type III** (fish, oysters, many plants): massive early mortality, few survivors reach old age — produces enormous numbers of offspring.",
          },
          {
            heading: "Age structure and population prediction",
            body: "An **age-structure diagram** (population pyramid) shows the number or proportion of individuals in each age class. A broad base with few old individuals indicates rapid growth (many young); a narrow base with bulging middle indicates an ageing, possibly declining population. Dependency ratio — young plus old versus working-age — affects resource demand and is used in demography and conservation planning.",
          },
        ],
        keyFormulas: [
          { name: "Density-dependent", statement: "Effect scales with density: food, disease, predation, space, waste" },
          { name: "Density-independent", statement: "Effect is density-blind: weather, natural disasters, pollution" },
          { name: "Type III survivorship", statement: "Very high juvenile mortality, few reach adulthood" },
        ],
        workedExample: {
          problem: "A population of rabbits is hit by a severe winter storm that kills 30% of individuals, followed by an outbreak of myxomatosis that kills a further 40%. Classify each factor and explain their different mechanisms.",
          solution: "The winter storm is **density-independent**: cold kills a similar proportion whether the population is dense or sparse. Myxomatosis spread is **density-dependent**: transmission requires contact, so infection rate rises with density — a denser rabbit population would suffer a higher disease mortality.",
        },
      },
      questions: [
        {
          id: "biohl-u5-population-factors-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a density-independent limiting factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spread of disease" },
              { id: "b", text: "Predation by a specialist predator" },
              { id: "c", text: "Competition for food" },
              { id: "d", text: "A volcanic eruption" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Density-independent factor", statement: "A limiting factor whose impact does not depend on population density, e.g. weather events or disasters." },
            ],
            steps: [
              { reasoning: "Food competition, disease and predation all intensify with density — they are density-dependent.", working: "\\text{density-dependent}", marks: 1, markCode: "M" },
              { reasoning: "A volcanic eruption kills organisms regardless of how dense the population is — density-independent.", working: "\\text{volcano}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A volcanic eruption",
            commonErrors: ["Including predation as density-independent — specialist predators often regulate density-dependently."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-factors-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A fish species produces millions of eggs but most larvae die before adulthood; survivors then live for decades with low adult mortality. Which survivorship curve does this describe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Type III — high juvenile mortality" },
              { id: "b", text: "No survivorship curve applies" },
              { id: "c", text: "Type I — low juvenile mortality" },
              { id: "d", text: "Type II — constant mortality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Type III survivorship", statement: "Extremely high early mortality; few offspring reach adulthood, compensated by enormous fecundity." },
            ],
            steps: [
              { reasoning: "Millions of eggs with most larvae dying is extreme juvenile mortality — the Type III signature.", working: "\\text{high juvenile mortality}", marks: 1, markCode: "M" },
              { reasoning: "Low adult mortality after the juvenile bottleneck fits Type III, not Type I (which has low juvenile mortality) or Type II (constant).", working: "\\text{low adult mortality}", marks: 1, markCode: "M" },
              { reasoning: "Option (c) correctly identifies the curve.", working: "\\text{option c}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Type III — high juvenile mortality",
            commonErrors: ["Choosing Type I because adults live long — Type I also has LOW juvenile mortality, the opposite pattern."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-factors-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An age-structure diagram for a human population shows a narrow base of children, a bulging middle of working-age adults and a large elderly segment. What does this most likely indicate about the population's future?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A population recovering from a mass extinction" },
              { id: "b", text: "Rapid growth because many children will be born" },
              { id: "c", text: "A stable population with balanced age classes" },
              { id: "d", text: "An ageing population likely to decline or shrink in size" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Age-structure diagram", statement: "Population pyramid showing numbers in each age class; a narrow base with large older cohorts signals an ageing, declining population." },
            ],
            steps: [
              { reasoning: "Few children means low future birth cohorts; many elderly means high mortality ahead.", working: "\\text{few births, many deaths}", marks: 1, markCode: "M" },
              { reasoning: "The bulging middle will age into the elderly class, increasing dependency and reducing growth.", working: "\\text{ageing cohort}", marks: 1, markCode: "M" },
              { reasoning: "This pyramid shape predicts decline or zero/negative growth — typical of developed countries.", working: "\\text{decline}", marks: 1, markCode: "R" },
              { reasoning: "Option (c) correctly interprets the structure.", working: "\\text{option c}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** An ageing population likely to decline or shrink in size",
            commonErrors: ["Interpreting any pyramid as growth — pyramid shape must be read: broad base = growth, narrow base = decline."],
            examinerNote: "M1 M1 R1 A1.",
          },
        },
        {
          id: "biohl-u5-population-factors-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A national park monitors a deer population through a year with three events: a harsh winter with deep snow, an outbreak of tick-borne disease, and a drought that reduces available forage. Winter deer density was about 15 per km$^2$; spring density peaked near 40 per km$^2$ after fawning.",
          parts: [
            { label: "a", prompt: "Classify the winter snow, the disease outbreak and the drought as density-dependent or density-independent, with justification.", marks: 2 },
            { label: "b", prompt: "Explain why the disease outbreak likely had a greater effect at the higher spring density.", marks: 2 },
            { label: "c", prompt: "Predict which event would most strongly regulate the population around carrying capacity and justify your choice.", marks: 2 },
            { label: "d", prompt: "Evaluate how a manager should interpret a single-year population count when planning culling quotas.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Density dependence", statement: "Density-dependent factors (disease, food) intensify with density and regulate populations near $K$; density-independent factors (weather) act regardless." },
            ],
            steps: [
              { part: "a", reasoning: "Winter snow and drought act regardless of density (density-independent); the forage shortage from drought becomes density-dependent competition at high density.", working: "\\text{snow/drought independent}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Disease transmission needs contact, so its effect intensifies at high density — density-dependent.", working: "\\text{disease dependent}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "At 40 deer per km$^2$ contact rates are higher, so ticks and disease transmit faster than at 15 per km$^2$.", working: "\\text{higher contact}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This is the defining feature of density dependence: per-capita effect rises with density.", working: "\\text{density effect}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Disease and forage competition (density-dependent) regulate near $K$ because their effect strengthens exactly when numbers exceed resources.", working: "\\text{dependent regulate}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Snow causes crashes but does not feedback on density — it cannot hold the population at $K$.", working: "\\text{no feedback}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A single count cannot separate density-dependent regulation from a one-off weather crash — it may reflect either mechanism.", working: "\\text{ambiguous count}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Quotas should therefore be based on multi-year monitoring data that reveal the population's trend and carrying capacity.", working: "\\text{multi-year data}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) snow and drought are density-independent (though drought's forage effect becomes density-dependent at high density), disease is density-dependent; (b) higher density raises contact and transmission rates; (c) disease and forage competition regulate near $K$ via density feedback; (d) single counts cannot distinguish regulation from stochastic crashes — use multi-year data",
            commonErrors: ["Labelling every harmful event as density-dependent — weather events act regardless of density."],
            examinerNote: "M1 A1 (a), M1 A1 (b), R1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-population-factors-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a density-dependent limiting factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volcanic ash fall" },
              { id: "b", text: "Competition for limited nesting sites" },
              { id: "c", text: "A severe frost" },
              { id: "d", text: "A hurricane" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Density-dependent factor", statement: "A factor whose per-capita effect intensifies as population density increases, e.g. competition, disease, predation." },
            ],
            steps: [
              { reasoning: "Frost, hurricanes and ash fall kill similar proportions regardless of density — density-independent.", working: "\\text{weather = independent}", marks: 1, markCode: "M" },
              { reasoning: "Competition for nesting sites worsens as more individuals share the same sites — density-dependent.", working: "\\text{competition}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Competition for limited nesting sites",
            commonErrors: ["Selecting any harmful event — only factors whose effect scales with density are density-dependent."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-factors-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which feature is characteristic of a Type I survivorship curve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mortality concentrated entirely in middle age" },
              { id: "b", text: "Low juvenile mortality with most individuals surviving to old age" },
              { id: "c", text: "Very high juvenile mortality and few survivors reaching old age" },
              { id: "d", text: "A constant mortality rate at every age" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Type I survivorship", statement: "Low early mortality; most of the cohort survives to old age, typical of large mammals with heavy parental investment." },
            ],
            steps: [
              { reasoning: "Recall the three survivorship types: Type I = low juvenile, low old-age mortality spread; Type II = constant; Type III = high juvenile.", working: "\\text{I, II, III}", marks: 1, markCode: "M" },
              { reasoning: "Low juvenile mortality with most surviving to old age is the Type I signature.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Low juvenile mortality with most individuals surviving to old age",
            commonErrors: ["Confusing Type I with Type III — Type III has massive early mortality."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-factors-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In human demography, what does the dependency ratio measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The proportion of the population that is too young or too old to work, relative to the working-age population" },
              { id: "b", text: "The ratio of births to deaths in a population" },
              { id: "c", text: "The percentage of the population living in urban areas" },
              { id: "d", text: "The rate of immigration per thousand people" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dependency ratio", statement: "The ratio of dependents (young and elderly) to the working-age population, indicating the support burden on producers." },
            ],
            steps: [
              { reasoning: "Dependents are individuals too young or too old to be economically active.", working: "\\text{young + old}", marks: 1, markCode: "M" },
              { reasoning: "The ratio compares dependents with the working-age (productive) population.", working: "\\text{dependents : workers}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) correctly defines the dependency ratio.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The proportion of the population that is too young or too old to work, relative to the working-age population",
            commonErrors: ["Confusing dependency ratio with birth or death rate — it is an age-structure measure."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-factors-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A rodent population of 2000 crashes to 300 after a single hurricane, then slowly recovers over two years as survivors breed. How should the hurricane be classified as a limiting factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Density-dependent, because the crash was severe" },
              { id: "b", text: "Density-independent, because its impact does not depend on how crowded the population was" },
              { id: "c", text: "Neither — it is not a biological factor" },
              { id: "d", text: "Density-dependent, because recovery depends on density" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Density-independent factor", statement: "A factor (e.g. storms, floods, frost) that affects a similar proportion of a population regardless of its density." },
            ],
            steps: [
              { reasoning: "A hurricane kills organisms whether the population is dense or sparse — its effect is density-blind.", working: "\\text{density-blind}", marks: 1, markCode: "M" },
              { reasoning: "Classification depends on the factor's mechanism, not the size of the crash it caused.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Density-independent, because its impact does not depend on how crowded the population was",
            commonErrors: ["Judging by severity — a catastrophic but density-blind event is still density-independent."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-population-factors-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A fish species lays 2000 eggs in a season. Monitoring shows that 150 of these eggs develop into adults. Calculate the percentage survival from egg to adult.",
          response: { type: "numeric", parts: [{ label: "Percentage survival", answer: 7.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Survivorship", statement: "The proportion of a cohort surviving to each age; $7.5\\%$ survival is characteristic of a Type III strategy." },
            ],
            steps: [
              { reasoning: "Divide the number surviving by the cohort size: $150/2000 = 0.075$.", working: "\\frac{150}{2000}", marks: 1, markCode: "M" },
              { reasoning: "Convert the fraction to a percentage: $0.075 \\times 100$.", working: "0.075 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives $7.5\\%$ survival.", working: "= 7.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.5\\%$",
            commonErrors: ["Inverting the fraction — survival is survivors divided by the starting cohort, not the reverse."],
          },
        },
        {
          id: "biohl-u5-population-factors-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country has a population of $12\\,000$. Age data show $3000$ people aged $0-14$ and $2000$ aged $65+$; the remainder are aged $15-64$. Calculate (a) the number of dependents and (b) the dependency ratio.",
          response: { type: "numeric", parts: [{ label: "Number of dependents", answer: 5000 }, { label: "Dependency ratio", answer: 0.71, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dependency ratio", statement: "Dependents (aged $0-14$ and $65+$) divided by the working-age population (aged $15-64$)." },
            ],
            steps: [
              { reasoning: "Dependents are the young plus the elderly: $3000 + 2000$.", working: "3000 + 2000", marks: 1, markCode: "M" },
              { reasoning: "This gives $5000$ dependents.", working: "= 5000", marks: 1, markCode: "A" },
              { reasoning: "Working-age population $= 12\\,000 - 5000 = 7000$; dependency ratio $= 5000/7000$.", working: "\\frac{5000}{7000}", marks: 1, markCode: "M" },
              { reasoning: "The ratio is $\\approx 0.71$ (about $71$ dependents per $100$ workers).", working: "\\approx 0.71", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5000$ dependents; (b) dependency ratio $\\approx 0.71$",
            commonErrors: ["Dividing dependents by total population — the denominator is the working-age population only."],
          },
        },
        {
          id: "biohl-u5-population-factors-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A population of $5000$ rabbits at the start of a year experiences $1200$ births, $800$ deaths, $150$ immigrants and $100$ emigrants. Calculate the population size at the end of the year.",
          response: { type: "numeric", parts: [{ label: "Population at end of year", answer: 5450 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Population change", statement: "$\\Delta N = (\\text{births} + \\text{immigration}) - (\\text{deaths} + \\text{emigration})$." },
            ],
            steps: [
              { reasoning: "Net change $= (1200 + 150) - (800 + 100) = 1350 - 900 = +450$.", working: "(1200+150)-(800+100) = 450", marks: 1, markCode: "M" },
              { reasoning: "Add the net change to the starting population: $5000 + 450$.", working: "5000 + 450", marks: 1, markCode: "M" },
              { reasoning: "The end-of-year population is $5450$.", working: "= 5450", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5450$ rabbits",
            commonErrors: ["Subtracting immigration or adding emigration — immigration adds and emigration subtracts."],
          },
        },
        {
          id: "biohl-u5-population-factors-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A sea turtle lays a clutch of $2000$ eggs. Only $50$ hatchlings survive to adulthood. Calculate (a) the percentage survival and (b) the percentage mortality from egg to adult.",
          response: { type: "numeric", parts: [{ label: "Percentage survival", answer: 2.5, unit: "%" }, { label: "Percentage mortality", answer: 97.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Survivorship", statement: "Survival $= \\frac{\\text{survivors}}{\\text{cohort}} \\times 100\\%$; mortality is the complement." },
            ],
            steps: [
              { reasoning: "Survival $= \\frac{50}{2000} \\times 100\\% = 2.5\\%$.", working: "\\frac{50}{2000} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives $2.5\\%$ survival.", working: "= 2.5\\%", marks: 1, markCode: "A" },
              { reasoning: "Mortality is the remainder: $100\\% - 2.5\\%$.", working: "100 - 2.5", marks: 1, markCode: "M" },
              { reasoning: "Mortality $= 97.5\\%$ — extreme early loss indicates a Type III strategy.", working: "= 97.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.5\\%$ survival; (b) $97.5\\%$ mortality",
            commonErrors: ["Reporting mortality as $50/2000$ — that is the survival fraction; mortality is its complement."],
          },
        },
        {
          id: "biohl-u5-population-factors-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 5,
          stem: "A population of $2000$ voles experiences an annual mortality rate of $8\\%$ and $300$ births during the year. There is no migration.",
          response: { type: "numeric", parts: [{ label: "Number of deaths", answer: 160 }, { label: "Population at end of year", answer: 2140 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Population change", statement: "Deaths $= \\text{mortality rate} \\times \\text{population}$; $\\Delta N = \\text{births} - \\text{deaths}$ when migration is absent." },
            ],
            steps: [
              { reasoning: "Calculate deaths: $0.08 \\times 2000$.", working: "0.08 \\times 2000", marks: 1, markCode: "M" },
              { reasoning: "This gives $160$ deaths.", working: "= 160", marks: 1, markCode: "A" },
              { reasoning: "Net change $= 300 - 160 = +140$.", working: "300 - 160 = 140", marks: 1, markCode: "M" },
              { reasoning: "Add the net change to the starting population: $2000 + 140$.", working: "2000 + 140", marks: 1, markCode: "M" },
              { reasoning: "The end-of-year population is $2140$.", working: "= 2140", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$160$ deaths; end-of-year population $2140$",
            commonErrors: ["Applying the $8\\%$ mortality to the post-birth population — the rate applies to the starting population of 2000."],
          },
        },
        {
          id: "biohl-u5-population-factors-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A species with a Type II survivorship curve has a constant annual mortality of $50\\%$. Starting with a cohort of $1000$ newborns, how many individuals survive to age 2 years?",
          response: { type: "numeric", parts: [{ label: "Survivors at age 2", answer: 250 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Type II survivorship", statement: "Constant mortality rate at all ages; each year a fixed proportion of the cohort dies." },
            ],
            steps: [
              { reasoning: "After one year $500$ survive; after two years $500 \\times 0.5$.", working: "1000 \\times 0.5^2", marks: 1, markCode: "M" },
              { reasoning: "This gives $250$ survivors.", working: "= 250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$250$ individuals",
            commonErrors: ["Subtracting $50\\%$ once — two years of constant mortality require applying the factor twice."],
          },
        },
        {
          id: "biohl-u5-population-factors-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "Three survivorship curves are compared: Species A (elephants), Species B (songbirds), Species C (oysters).",
          parts: [
            { label: "a", prompt: "Match each species to its likely survivorship type (I, II or III).", marks: 2 },
            { label: "b", prompt: "Explain why a Type III species produces so many offspring.", marks: 2 },
            { label: "c", prompt: "Relate survivorship type to the level of parental investment in each strategy.", marks: 2 },
            { label: "d", prompt: "Evaluate how survivorship curve data could inform a conservation breeding programme.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Survivorship curves", statement: "Type I: low juvenile mortality (elephants); Type II: constant mortality (many birds); Type III: extreme juvenile mortality (oysters)." },
            ],
            steps: [
              { part: "a", reasoning: "Elephants show Type I (heavy parental care, few young, most survive); songbirds Type II (roughly constant mortality); oysters Type III (massive spawn, huge early loss).", working: "\\text{I, II, III}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three matches must be correct.", working: "\\text{correct matching}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Because almost all offspring die early, a Type III species must produce enormous numbers to ensure a few reach adulthood and replace parents.", working: "\\text{high fecundity}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This is an r-selected strategy: many cheap offspring, little parental care.", working: "r\\text{-selected}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Type I species invest heavily per offspring (gestation, protection) so few are needed; Type III invest almost nothing per offspring.", working: "\\text{investment vs number}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Parental investment trades off against offspring number across the three strategies.", working: "\\text{trade-off}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The curve reveals the life stage where mortality is highest — the 'bottleneck' — so captive rearing should target that stage.", working: "\\text{target bottleneck}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "For Type III species, protecting eggs/larvae in captivity can raise effective survival enormously; for Type I, adult survival matters more.", working: "\\text{stage-specific care}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) elephants Type I, songbirds Type II, oysters Type III; (b) massive early mortality requires enormous offspring numbers (r-selection); (c) heavy parental investment in Type I vs minimal in Type III; (d) curve data identify the mortality bottleneck so captive programmes can target the vulnerable stage",
            commonErrors: ["Assuming all species should maximise offspring number — Type I species maximise offspring quality instead."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-population-factors-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 6,
          stem: "A human population pyramid shows a broad base of children under 15, a moderate working-age bulge and very few people over 65. The country's total population is growing.",
          parts: [
            { label: "a", prompt: "Interpret what this age structure predicts about future population growth.", marks: 2 },
            { label: "b", prompt: "Explain how the dependency ratio will change as the large child cohort matures.", marks: 2 },
            { label: "c", prompt: "Evaluate one economic implication of this demographic trend for the government.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Age-structure pyramid", statement: "A broad base indicates many young people and rapid future growth; few elderly indicates low current old-age dependency." },
            ],
            steps: [
              { part: "a", reasoning: "The broad base means a large cohort will reach reproductive age, so births will remain high — continued rapid growth.", working: "\\text{large future cohort}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Few elderly means low current old-age dependency, but the pyramid shape predicts expansion for decades.", working: "\\text{expansion}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "As children mature they first join the working-age group, lowering the youth dependency ratio.", working: "\\text{youth dep falls}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Later they themselves age, so old-age dependency rises — the ratio follows a predictable 'demographic transition' pattern.", working: "\\text{then old-age dep rises}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A growing young population requires massive investment in schools, healthcare and later jobs — a 'youth dividend' if jobs exist, a burden if they do not.", working: "\\text{investment demand}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Governments must expand education and employment; failure risks unemployment and social instability.", working: "\\text{policy need}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) broad base predicts sustained rapid growth as the child cohort reproduces; (b) youth dependency falls as they enter work, then old-age dependency rises as they retire; (c) large demands for education, jobs and healthcare — a youth dividend if managed well, a burden if not",
            commonErrors: ["Reading the pyramid backwards — a broad base signals growth, not decline."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c).",
          },
        },
      ],
    },
  ],
};
