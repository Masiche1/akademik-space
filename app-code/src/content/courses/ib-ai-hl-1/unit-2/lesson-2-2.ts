import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "aihl-u2-lesson-2-2",
  code: "2-2",
  title: "Further Models",
  goal: "I CAN build and use exponential models with asymptotes, logistic models, and piecewise, rational and sinusoidal models, and interpret their parameters in context.",
  standards: ["AHL 2.9"],
  vocabulary: [
    {
      term: "Horizontal asymptote",
      definition:
        "A horizontal line that the graph of a function approaches as $x\\to\\infty$ or $x\\to-\\infty$ without necessarily reaching it.",
    },
    {
      term: "Logistic model",
      definition:
        "A model $P(t)=\\dfrac{L}{1+Ce^{-kt}}$ for growth that levels off at the carrying capacity $L$.",
    },
    {
      term: "Carrying capacity",
      definition:
        "The maximum population or quantity $L$ that a logistic model approaches in the long term.",
    },
    {
      term: "Piecewise function",
      definition:
        "A function defined by different rules on different intervals of its domain.",
    },
    {
      term: "Amplitude",
      definition:
        "For $y=a\\sin(b(x-c))+d$, the amplitude is $|a|$, half the distance between maximum and minimum.",
    },
    {
      term: "Rational model",
      definition:
        "A model of the form $\\dfrac{p(x)}{q(x)}$ where $p$ and $q$ are polynomials.",
    },
  ],
  concepts: [
    {
      id: "aihl-u2-exp-logistic",
      title: "Exponential models with asymptotes and logistic models",
      skill:
        "Use $y=A+Be^{-kt}$ and $P=\\frac{L}{1+Ce^{-kt}}$ to model change, interpreting the asymptote and parameters.",
      lesson: {
        sections: [
          {
            heading: "Exponential decay to a limit",
            body: "A cooling object or a charging battery approaches a limiting value. The model $T(t)=A+Be^{-kt}$ with $k>0$ has horizontal asymptote $y=A$, because $e^{-kt}\\to0$. At $t=0$ the value is $A+B$. Solve for the time at which a target value is reached by isolating the exponential and taking natural logarithms.",
          },
          {
            heading: "Logistic growth",
            body: "Populations are limited by resources. A logistic model $P(t)=\\frac{L}{1+Ce^{-kt}}$ starts at $\\frac{L}{1+C}$, grows quickly, then levels off at $L$. Growth is fastest when $P=\\frac L2$, and the rate of change satisfies $\\frac{dP}{dt}=kP\\left(1-\\frac PL\\right)$. The graph has two horizontal asymptotes, $y=0$ and $y=L$, and an S-shape.",
          },
        ],
        keyFormulas: [
          {
            name: "Exponential with asymptote",
            statement: "$y=A+Be^{-kt},\\; y\\to A$ as $t\\to\\infty$",
          },
          {
            name: "Logistic model",
            statement: "$P(t)=\\dfrac{L}{1+Ce^{-kt}}$",
          },
          {
            name: "Logistic rate",
            statement:
              "$\\dfrac{dP}{dt}=kP\\left(1-\\dfrac PL\\right)$, greatest at $P=\\dfrac L2$",
          },
        ],
        workedExample: {
          problem:
            "A drink cools according to $T=20+75e^{-0.1t}$, where $T$ is in degrees Celsius and $t$ in minutes. Find the initial temperature and the room temperature.",
          solution:
            "At $t=0$, $T=20+75=95$ degrees Celsius. As $t\\to\\infty$, $e^{-0.1t}\\to0$, so $T\\to20$: the room temperature is 20 degrees Celsius.",
        },
      },
      questions: [
        {
          id: "aihl-u2-exp-logistic-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A model for the value of an investment is $V(t)=50+30e^{-0.2t}$ for $t\\ge0$. What does $V$ approach as $t\\to\\infty$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$80$" },
              { id: "b", text: "$30$" },
              { id: "c", text: "$50$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Horizontal asymptote",
                statement:
                  "As $t\\to\\infty$, $e^{-kt}\\to0$ for $k>0$, so $V\\to A$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The exponential term tends to zero, leaving the constant.",
                working: "V\\to50+30(0)=50",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $50$",
            commonErrors: ["Choosing 80, the value at $t=0$."],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The temperature of a cup of tea is modelled by $T=20+75e^{-0.1t}$ degrees Celsius, where $t$ is the time in minutes. Find the time at which the temperature is 40 degrees Celsius, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$t$ (minutes)",
                answer: 13.2,
                tolerance: 0.05,
                unit: "minutes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Logarithm as inverse",
                statement: "$e^{u}=c \\iff u=\\ln c$ for $c>0$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $T=40$ and isolate the exponential term.",
                working: "75e^{-0.1t}=20\\Rightarrow e^{-0.1t}=\\frac{4}{15}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take natural logarithms.",
                working: "-0.1t=\\ln\\frac{4}{15}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve. $\\ln\\frac4{15}=-1.3218$.",
                working: "t=13.2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t\\approx13.2$ minutes",
            commonErrors: ["Dividing by 75 before subtracting 20."],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A population is modelled by $N(t)=\\dfrac{2000}{1+19e^{-0.5t}}$, where $t$ is in years. Find the time at which the population reaches 1000, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$t$ (years)",
                answer: 5.89,
                tolerance: 0.005,
                unit: "years",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Logistic model",
                statement:
                  "$N=\\frac{L}{1+Ce^{-kt}}$; half the carrying capacity is reached when $Ce^{-kt}=1$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $N=1000$.",
                working: "1000=\\frac{2000}{1+19e^{-0.5t}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange: $1+19e^{-0.5t}=2$.",
                working: "19e^{-0.5t}=1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Take natural logarithms.",
                working: "-0.5t=\\ln\\frac1{19}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve: $t=2\\ln19=5.889$.",
                working: "t=5.89",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t\\approx5.89$ years",
            commonErrors: ["Setting $1+19e^{-0.5t}=1000$."],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Fish are introduced into a lake. The number of fish after $t$ years is modelled by $P(t)=\\dfrac{800}{1+7e^{-0.4t}}$.",
          parts: [
            {
              label: "a",
              prompt: "Find the number of fish introduced into the lake.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write down the carrying capacity of the lake.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Find the time for the population to reach 400 fish, to 3 significant figures.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Determine the greatest rate of growth of the population, in fish per year, given that $\\dfrac{dP}{dt}=0.4P\\left(1-\\dfrac{P}{800}\\right)$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Find the population after 10 years, to the nearest fish, and comment on its value relative to the carrying capacity.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) initial number of fish", answer: 100 },
              { label: "(b) carrying capacity", answer: 800 },
              {
                label: "(c) time to reach 400 (years)",
                answer: 4.86,
                tolerance: 0.005,
              },
              {
                label: "(d) greatest growth rate (fish per year)",
                answer: 80,
                tolerance: 0.5,
              },
              {
                label: "(e) population after 10 years",
                answer: 709,
                tolerance: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Logistic model",
                statement:
                  "$P(0)=\\frac{L}{1+C}$, and $P\\to L$ as $t\\to\\infty$.",
              },
              {
                kind: "property",
                name: "Maximum growth",
                statement: "$kP(1-P/L)$ is greatest at $P=\\frac L2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Substitute $t=0$.",
                working: "P(0)=\\frac{800}{1+7}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "P(0)=100",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The exponential term tends to zero, so $P\\to800$.",
                working: "L=800",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Set $P=400$ and rearrange: $1+7e^{-0.4t}=2$.",
                working: "7e^{-0.4t}=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Take natural logarithms.",
                working: "-0.4t=\\ln\\frac17",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Solve: $t=\\frac{\\ln7}{0.4}=4.865$.",
                working: "t=4.86",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The rate is greatest when $P=\\frac L2=400$ (the maximum of the quadratic in $P$).",
                working:
                  "\\frac{dP}{dt}=0.4(400)\\left(1-\\frac{400}{800}\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "0.4\\times400\\times0.5=80",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Substitute $t=10$: $e^{-4}=0.018316$.",
                working: "P(10)=\\frac{800}{1+7(0.018316)}=709",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "The population is close to, but still below, the carrying capacity of 800, and still increasing slowly.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 100. (b) 800. (c) 4.86 years. (d) 80 fish per year. (e) 709, below 800.",
            commonErrors: [
              "Using $t=4.86$ for the maximum rate rather than the value of the rate itself.",
              "Forgetting that the lake population cannot exceed $L$.",
            ],
            examinerNote:
              "Award M1 in (d) for using $P=400$ or for a GDC maximum of the derivative.",
          },
        },
        {
          id: "aihl-u2-exp-logistic-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the model $y=A+Be^{-kt}$ with $k>0$, what is the horizontal asymptote?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=B$" },
              { id: "b", text: "$y=A$" },
              { id: "c", text: "$y=A+B$" },
              { id: "d", text: "$y=0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Horizontal asymptote",
                statement: "As $t\\to\\infty$, $e^{-kt}\\to0$, so $y\\to A$.",
              },
            ],
            steps: [
              {
                reasoning: "The exponential term vanishes for large $t$.",
                working: "e^{-kt}\\to0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only the constant $A$ remains.",
                working: "y\\to A",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $y=A$",
            commonErrors: [
              "Choosing $A+B$, which is the value at $t=0$, not the asymptote.",
            ],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the logistic model $P(t)=\\dfrac{L}{1+Ce^{-kt}}$, which parameter is the carrying capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C$" },
              { id: "b", text: "$L$" },
              { id: "c", text: "$\\dfrac{L}{1+C}$" },
              { id: "d", text: "$k$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement:
                  "The carrying capacity is the limiting value $L$ approached as $t\\to\\infty$.",
              },
            ],
            steps: [
              {
                reasoning: "As $t\\to\\infty$, $Ce^{-kt}\\to0$, so $P\\to L$.",
                working: "P\\to L",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{L}{1+C}$ is the initial value $P(0)$, not the capacity.",
                working: "P(0)=\\frac{L}{1+C}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $L$",
            commonErrors: [
              "Confusing the carrying capacity with the initial population.",
            ],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A population is modelled by $P(t)=\\dfrac{500}{1+4e^{-0.3t}}$. Find $P(0)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$500$" },
              { id: "b", text: "$125$" },
              { id: "c", text: "$100$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Logistic model",
                statement: "$P(0)=\\frac{L}{1+C}$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $t=0$: $e^0=1$.",
                working: "P(0)=\\frac{500}{1+4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "P(0)=100",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $100$",
            commonErrors: [
              "Using $C=4$ as the denominator alone, giving $\\frac{500}{4}=125$.",
            ],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a logistic model, the rate of growth is $\\dfrac{dP}{dt}=kP\\left(1-\\dfrac{P}{L}\\right)$. At what value of $P$ is the growth rate greatest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P=\\frac{L}{4}$" },
              { id: "b", text: "$P=L$" },
              { id: "c", text: "$P=0$" },
              { id: "d", text: "$P=\\frac{L}{2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Maximum growth",
                statement:
                  "The quadratic $kP(1-P/L)$ is greatest at its vertex $P=\\frac L2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Write the rate as a quadratic in $P$: $\\frac{k}{L}P(L-P)$, maximised halfway between 0 and $L$.",
                working: "P=\\frac{L}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At $P=0$ and $P=L$ the rate is zero; it peaks in between at $P=\\frac L2$.",
                working: "\\text{vertex at }P=\\tfrac L2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $P=\\frac{L}{2}$",
            commonErrors: [
              "Assuming growth is fastest at the carrying capacity, where the rate is actually zero.",
            ],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "The temperature of an engine block is modelled by $T=90+210e^{-0.05t}$ degrees Celsius, where $t$ is the time in minutes after the engine is switched off. Find the initial temperature.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Initial temperature",
                answer: 300,
                unit: "degrees Celsius",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Exponential with asymptote",
                statement: "$y=A+Be^{-kt}$; at $t=0$ the value is $A+B$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $t=0$.",
                working: "T(0)=90+210e^{0}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use $e^0=1$.",
                working: "T(0)=90+210",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add.",
                working: "T(0)=300",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$300^\\circ\\text{C}$",
            commonErrors: ["Reporting 210 or 90 instead of their sum."],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A radioactive sample decays according to $N=800e^{-0.25t}$, where $N$ is the mass in grams and $t$ is the time in years. Find the time at which $N=100$ grams, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$t$ (years)",
                answer: 8.32,
                tolerance: 0.005,
                unit: "years",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Logarithm as inverse",
                statement: "$e^{u}=c \\iff u=\\ln c$ for $c>0$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $N=100$.",
                working: "800e^{-0.25t}=100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by 800.",
                working: "e^{-0.25t}=\\frac18",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Take natural logarithms: $-0.25t=\\ln\\frac18=-\\ln8$.",
                working: "-0.25t=-2.0794",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve: $t=4\\ln8=8.3178$.",
                working: "t=8.32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t\\approx8.32$ years",
            commonErrors: ["Forgetting that $\\ln\\frac18$ is negative."],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A population of yeast is modelled by $N(t)=\\dfrac{1200}{1+11e^{-0.6t}}$, where $t$ is in hours. Find the time at which the population reaches 600, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$t$ (hours)",
                answer: 4.0,
                tolerance: 0.005,
                unit: "hours",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Logistic model",
                statement:
                  "Half the carrying capacity is reached when $Ce^{-kt}=1$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $N=600=\\frac{1200}{2}$.",
                working: "600=\\frac{1200}{1+11e^{-0.6t}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange: $1+11e^{-0.6t}=2$, so $11e^{-0.6t}=1$.",
                working: "11e^{-0.6t}=1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Take natural logarithms: $-0.6t=\\ln\\frac1{11}$.",
                working: "-0.6t=-2.3979",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve: $t=\\frac{\\ln11}{0.6}=3.997$.",
                working: "t=4.00",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t\\approx4.00$ hours",
            commonErrors: [
              "Setting the denominator equal to 600 rather than rearranging correctly.",
            ],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "For the model $T=A+Be^{-kt}$ with $A>0$, $B>0$ and $k>0$, which statement describes the behaviour as $t\\to\\infty$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$T$ grows without bound." },
              { id: "b", text: "$T$ approaches $A$ from above." },
              { id: "c", text: "$T$ approaches $B$." },
              { id: "d", text: "$T$ approaches $A$ from below." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Horizontal asymptote",
                statement:
                  "$T=A+Be^{-kt}\\to A$ from above when $B>0$, since $Be^{-kt}>0$ for all finite $t$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Since $B>0$ and $e^{-kt}>0$, the term $Be^{-kt}$ is always positive and decreases to 0.",
                working: "Be^{-kt}>0,\\ Be^{-kt}\\to0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hence $T$ stays above $A$ while approaching it.",
                working: "T\\to A^+",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $T$ approaches $A$ from above.",
            commonErrors: [
              "Ignoring the sign of $B$; if $B<0$ the approach would be from below.",
            ],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "The temperature of a cup of coffee is modelled by $T=25+80e^{-0.08t}$ degrees Celsius, where $t$ is the time in minutes.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the temperature when the coffee is first made ($t=0$).",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Find the time at which the temperature reaches $45^\\circ$C, to 3 significant figures.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain what the value 25 represents in this context.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Exponential with asymptote",
                statement:
                  "$T=A+Be^{-kt}$; $A$ is the long-term limiting temperature.",
              },
              {
                kind: "law",
                name: "Logarithm as inverse",
                statement: "Isolate $e^{-kt}$ and take $\\ln$ of both sides.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Substitute $t=0$: $T=25+80=105$.",
                working: "T(0)=105",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Set $T=45$ and isolate the exponential.",
                working: "80e^{-0.08t}=20\\Rightarrow e^{-0.08t}=\\frac14",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Take natural logarithms.",
                working: "-0.08t=\\ln\\frac14=-1.3863",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Solve: $t=\\frac{\\ln4}{0.08}=17.3$.",
                working: "t=17.3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "As $t\\to\\infty$, $e^{-0.08t}\\to0$, so $T\\to25$.",
                working: "T\\to25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The coffee cools towards the room temperature of $25^\\circ$C and never goes below it.",
                working: "\\text{room temperature}=25^\\circ\\text{C}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $105^\\circ$C. (b) $t\\approx17.3$ minutes. (c) The room temperature, $25^\\circ$C.",
            commonErrors: [
              "Setting $T=45$ as $25+80e^{-0.08t}=45$ but forgetting to divide by 80 before taking logarithms.",
            ],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A logistic model has carrying capacity $L=400$ and growth constant $k=0.5$, and $P(0)=50$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$C$", answer: 7 },
              { label: "$P(2)$", answer: 112, tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Logistic model",
                statement: "$P(0)=\\frac{L}{1+C}$, so $C=\\frac{L}{P(0)}-1$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $P(0)=50$ and $L=400$.",
                working: "50=\\frac{400}{1+C}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange: $1+C=8$, so $C=7$.",
                working: "C=7",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Evaluate $P(2)=\\frac{400}{1+7e^{-1}}$ with $e^{-1}=0.3679$.",
                working: "P(2)=\\frac{400}{1+7(0.3679)}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "P(2)\\approx112",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$C=7$, $P(2)\\approx112$",
            commonErrors: [
              "Writing $C=\\frac{L}{P(0)}=8$ instead of subtracting 1.",
            ],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "A colony of bacteria is modelled by $P(t)=\\dfrac{600}{1+5e^{-0.8t}}$, where $t$ is in hours and $P$ is the number of bacteria.",
          parts: [
            {
              label: "a",
              prompt: "Find the number of bacteria present initially.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write down the carrying capacity and state what it means in this context.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the time at which the population reaches half of the carrying capacity, to 3 significant figures.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Given that $\\dfrac{dP}{dt}=0.8P\\left(1-\\dfrac{P}{600}\\right)$, find the maximum rate of growth in bacteria per hour.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Find the population after 5 hours, to the nearest bacterium.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Logistic model",
                statement:
                  "$P(0)=\\frac{L}{1+C}$ and $P\\to L$ as $t\\to\\infty$.",
              },
              {
                kind: "property",
                name: "Maximum growth",
                statement: "$kP(1-P/L)$ is greatest when $P=\\frac L2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Substitute $t=0$: $e^0=1$.",
                working: "P(0)=\\frac{600}{1+5}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "P(0)=100",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "As $t\\to\\infty$, $5e^{-0.8t}\\to0$, so $P\\to600$.",
                working: "L=600",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Interpret: the environment can support at most about 600 bacteria.",
                working: "\\text{maximum sustainable population}=600",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Half capacity is $P=300$: $300=\\frac{600}{1+5e^{-0.8t}}$ gives $1+5e^{-0.8t}=2$.",
                working: "5e^{-0.8t}=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Take natural logarithms.",
                working: "-0.8t=\\ln\\frac15=-1.6094",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Solve: $t=\\frac{\\ln5}{0.8}=2.01$.",
                working: "t=2.01",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "The rate is greatest when $P=\\frac L2=300$.",
                working: "P=300",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Evaluate $0.8(300)\\left(1-\\frac{300}{600}\\right)$.",
                working: "0.8\\times300\\times0.5=120",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Substitute $t=5$: $e^{-4}=0.018316$.",
                working: "P(5)=\\frac{600}{1+5(0.018316)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Evaluate and round.",
                working: "P(5)=549.66\\approx550",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 100. (b) 600. (c) $t\\approx2.01$ hours. (d) 120 bacteria per hour. (e) 550 bacteria.",
            commonErrors: [
              "Using $P=600$ for the maximum growth rate; the maximum occurs at $P=300$.",
            ],
            examinerNote:
              "Accept GDC evaluation for (e); the key mark is recognising the population is still below 600.",
          },
        },
        {
          id: "aihl-u2-exp-logistic-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The voltage across a charging capacitor is modelled by $V=12+48e^{-0.2t}$ volts, where $t$ is in seconds. Find $V(10)$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$V(10)$ (volts)",
                answer: 18.5,
                tolerance: 0.05,
                unit: "volts",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Exponential with asymptote",
                statement:
                  "Evaluate $e^{-kt}$ numerically before substituting.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $t=10$: $e^{-2}=0.13534$.",
                working: "V(10)=12+48(0.13534)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the product.",
                working: "48(0.13534)=6.496",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add 12.",
                working: "V(10)=18.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$V(10)\\approx18.5$ volts",
            commonErrors: [
              "Computing $e^{-0.2\\times10}=e^{-2}$ incorrectly as $e^{-0.02}$.",
            ],
          },
        },
        {
          id: "aihl-u2-exp-logistic-q17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which model is most appropriate for a quantity that grows quickly at first and then levels off towards a maximum value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=ax^b$" },
              { id: "b", text: "$y=ka^x$" },
              { id: "c", text: "$P(t)=\\dfrac{L}{1+Ce^{-kt}}$" },
              { id: "d", text: "$y=A+Be^{-kt}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logistic model",
                statement:
                  "The logistic model produces S-shaped growth that levels off at the carrying capacity $L$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only the logistic model has an upper limit $L$ reached after rapid initial growth.",
                working: "P\\to L\\text{ as }t\\to\\infty",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The exponential model $ka^x$ grows without bound and $ax^b$ is a power law, not S-shaped.",
                working: "\\text{only logistic levels off}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $P(t)=\\dfrac{L}{1+Ce^{-kt}}$",
            commonErrors: [
              "Choosing $y=ka^x$, which grows exponentially without bound.",
            ],
          },
        },
      ],
    },
    {
      id: "aihl-u2-piecewise-rational-sinusoidal",
      title: "Piecewise, rational and sinusoidal models",
      skill:
        "Select and interpret piecewise, rational and sinusoidal models, solving for key values and exploring parameters.",
      lesson: {
        sections: [
          {
            heading: "Piecewise and sinusoidal models",
            body: "A piecewise model uses different rules on different intervals, such as a utility tariff. Check each boundary and use the rule for the interval in which the input lies. A sinusoidal model $y=a\\sin(b(t-c))+d$ has amplitude $|a|$, period $\\frac{2\\pi}{b}$ (radians), principal axis $y=d$, maximum $d+|a|$ and minimum $d-|a|$. Solve $y=$ target on the GDC and use the symmetry of the sine curve for the second solution in a cycle.",
          },
          {
            heading: "Rational models",
            body: "A rational function such as $C(t)=\\frac{pt}{t^2+q^2}$ models rise and fall, for example drug concentration: it is zero at $t=0$, reaches a peak, then tends to zero as $t\\to\\infty$ since the denominator grows faster. To find when it equals a target, multiply through by the denominator to obtain a polynomial equation. Use the GDC to find maxima, or differentiate.",
          },
        ],
        keyFormulas: [
          {
            name: "Sinusoidal model",
            statement: "$y=a\\sin(b(t-c))+d$, period $=\\dfrac{2\\pi}{b}$",
          },
          {
            name: "Maximum and minimum",
            statement: "$y_{\\max}=d+|a|,\\; y_{\\min}=d-|a|$",
          },
        ],
        workedExample: {
          problem:
            "A taxi charges $\\$5$ for the first 10 km and then $\\$0.80$ per km after that. Write the cost $C(x)$ for $x$ km.",
          solution:
            "$C(x)=5$ for $0<x\\le10$, and $C(x)=5+0.8(x-10)$ for $x>10$. Check the boundary: both rules give 5 at $x=10$, so the model is continuous.",
        },
      },
      questions: [
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "The height of the tide is modelled by $h=2.5\\cos(0.5t)+4$ metres. Find the maximum height.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.5$ m" },
              { id: "b", text: "$2.5$ m" },
              { id: "c", text: "$1.5$ m" },
              { id: "d", text: "$4$ m" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maximum of a sinusoid",
                statement: "$y_{\\max}=d+|a|$",
              },
            ],
            steps: [
              {
                reasoning: "Add the amplitude to the principal axis.",
                working: "4+2.5=6.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $6.5$ m",
            commonErrors: [
              "Giving the amplitude 2.5 as the maximum.",
              "Choosing the minimum 1.5.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A taxi charges $\\$5$ for the first 10 km and $\\$0.80$ for each additional km. Find the cost of a 25 km journey, in dollars.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost (\\$)", answer: 17, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piecewise function",
                statement:
                  "Use the rule that applies to the interval containing the input.",
              },
            ],
            steps: [
              {
                reasoning: "Since $25>10$, use the second rule.",
                working: "C(25)=5+0.8(25-10)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the extra distance charge.",
                working: "0.8\\times15=12",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Add the fixed charge.",
                working: "C=17",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$17$",
            commonErrors: ["Charging $\\$0.80$ for all 25 km."],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The depth of water in a harbour is modelled by $d(t)=6+2.4\\sin\\big(0.5(t-1)\\big)$ metres, where $t$ is the time in hours after midnight and the angle is in radians. Find the first time after midnight when the depth is 7 metres, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$t$ (hours)",
                answer: 1.86,
                tolerance: 0.005,
                unit: "hours",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Solving sinusoidal equations",
                statement:
                  "Isolate the sine, use the inverse sine (radians) for the first solution and $\\pi-$ that angle for the second.",
              },
            ],
            steps: [
              {
                reasoning: "Set $d=7$ and isolate the sine.",
                working: "2.4\\sin\\big(0.5(t-1)\\big)=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide.",
                working: "\\sin\\big(0.5(t-1)\\big)=\\frac{1}{2.4}=0.41667",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The smallest angle: $\\arcsin0.41667=0.4298$.",
                working: "0.5(t-1)=0.4298",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $t$. Check with GDC intersection.",
                working: "t=1+2(0.4298)=1.86",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t\\approx1.86$ hours",
            commonErrors: [
              "Using degrees mode on the GDC.",
              "Forgetting to double 0.4298 when dividing by 0.5.",
            ],
            examinerNote:
              "The second solution in this cycle is $t\\approx6.42$.",
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "A drug is injected and its concentration in the blood after $t$ hours is modelled by $C(t)=\\dfrac{20t}{t^2+4}$ milligrams per litre, for $t\\ge0$. A general family of models is $C(t)=\\dfrac{pt}{t^2+q^2}$, where $p$ and $q$ are positive constants.",
          parts: [
            {
              label: "a",
              prompt: "Show that $C(1)=C(4)$, and interpret this in context.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Use your GDC to find the maximum concentration and the time at which it occurs.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that $C(t)=3$ leads to $3t^2-20t+12=0$. Hence find the length of time for which the concentration is at least 3 milligrams per litre, to 3 significant figures.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "For the general model, show that the maximum concentration occurs at $t=q$ and that its value is $\\dfrac{p}{2q}$.",
              marks: 3,
            },
            {
              label: "e",
              prompt:
                "A new drug has a maximum concentration of 4 milligrams per litre, occurring after 3 hours. Find $p$ and $q$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) maximum concentration (mg per litre)", answer: 5 },
              { label: "(b) time of maximum (hours)", answer: 2 },
              {
                label: "(c) duration at least 3 (hours)",
                answer: 5.33,
                tolerance: 0.005,
              },
              { label: "(e) $p$", answer: 24 },
              { label: "(e) $q$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Quotient rule",
                statement:
                  "$\\frac{d}{dt}\\left(\\frac uv\\right)=\\frac{u'v-uv'}{v^2}$",
              },
              {
                kind: "principle",
                name: "Maximum",
                statement:
                  "At a maximum $C'(t)=0$ and $C'$ changes from positive to negative.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Evaluate both.",
                working: "C(1)=\\frac{20}{5}=4,\\quad C(4)=\\frac{80}{20}=4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "The concentration is 4 mg per litre both 1 hour and 4 hours after the injection: it rises and then falls.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Use the maximum function of the GDC on the graph.",
                working: "t=2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Evaluate: $C(2)=\\frac{40}{8}$.",
                working: "C=5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Set $C=3$ and multiply by the denominator.",
                working: "20t=3(t^2+4)\\Rightarrow3t^2-20t+12=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Solve: discriminant $400-144=256$, so $t=\\frac{20\\pm16}{6}$.",
                working: "t=\\tfrac23\\text{ or }6",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The concentration is at least 3 between the two roots: $6-\\frac23$.",
                working: "5.33\\text{ hours}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Differentiate using the quotient rule.",
                working: "C'(t)=\\frac{p(t^2+q^2)-pt(2t)}{(t^2+q^2)^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Simplify and set to zero; for $t>0$ the only solution is $t=q$.",
                working:
                  "C'(t)=\\frac{p(q^2-t^2)}{(t^2+q^2)^2}=0\\Rightarrow t=q",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$C'>0$ for $t<q$ and $C'<0$ for $t>q$, so it is a maximum, with value $C(q)=\\frac{pq}{2q^2}=\\frac{p}{2q}$ (AG).",
                working: "C(q)=\\frac{p}{2q}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning: "The maximum occurs at $t=q=3$.",
                working: "q=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Use $\\frac p{2q}=4$.",
                working: "p=4\\times6=24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) both equal 4. (b) maximum 5 mg per litre at $t=2$. (c) 5.33 hours. (d) shown. (e) $p=24$, $q=3$.",
            commonErrors: [
              "Taking only the root $t=6$ and ignoring the lower bound.",
              "Not checking the sign change in $C'(t)$.",
            ],
            examinerNote:
              "Check against (b): $p=20,q=2$ gives $t=2$ and $\\frac{20}{4}=5$. FT is given in (e) from (d).",
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the sinusoidal model $y=a\\sin\\big(b(t-c)\\big)+d$, with angles in radians, what is the period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2\\pi}{b}$" },
              { id: "b", text: "$\\frac{b}{2\\pi}$" },
              { id: "c", text: "$\\frac{\\pi}{b}$" },
              { id: "d", text: "$2\\pi b$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sinusoidal model",
                statement:
                  "$y=a\\sin(b(t-c))+d$ has period $\\frac{2\\pi}{b}$ radians.",
              },
            ],
            steps: [
              {
                reasoning: "One full cycle of $\\sin$ covers $2\\pi$ radians.",
                working: "\\text{argument change}=2\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Since the argument changes at rate $b$, the period is $\\frac{2\\pi}{b}$.",
                working: "T=\\frac{2\\pi}{b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{2\\pi}{b}$",
            commonErrors: [
              "Inverting the fraction: the period is $\\frac{2\\pi}{b}$, not $2\\pi b$.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the model $y=3\\sin(2t)+1$, find the maximum value of $y$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maximum of a sinusoid",
                statement: "$y_{\\max}=d+|a|$.",
              },
            ],
            steps: [
              {
                reasoning: "Here $a=3$ and $d=1$.",
                working: "a=3,\\ d=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Maximum $=1+3=4$ when $\\sin(2t)=1$.",
                working: "y_{\\max}=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $4$",
            commonErrors: [
              "Reporting the amplitude 3 or the minimum $1-3=-2$.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The depth of water in a harbour is modelled by $d(t)=6+2.4\\sin\\big(0.5(t-1)\\big)$ metres. What is the principal axis of this sinusoid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=2.4$" },
              { id: "b", text: "$y=8.4$" },
              { id: "c", text: "$y=6$" },
              { id: "d", text: "$y=3.6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Principal axis",
                statement:
                  "The principal axis of $y=a\\sin(b(t-c))+d$ is the line $y=d$.",
              },
            ],
            steps: [
              {
                reasoning: "Identify $d=6$ in the model.",
                working: "d=6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The principal axis is the midline between maximum and minimum.",
                working: "y=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $y=6$",
            commonErrors: [
              "Confusing the amplitude 2.4 or the maximum 8.4 with the midline.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A drug concentration is modelled by $C(t)=\\dfrac{20t}{t^2+4}$ for $t\\ge0$. What happens to $C(t)$ as $t\\to\\infty$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C(t)\\to20$" },
              { id: "b", text: "$C(t)\\to4$" },
              { id: "c", text: "$C(t)\\to0$" },
              { id: "d", text: "$C(t)\\to\\infty$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rational model behaviour",
                statement:
                  "When the denominator grows faster than the numerator, the fraction tends to 0.",
              },
            ],
            steps: [
              {
                reasoning: "For large $t$, $t^2+4$ dominates $20t$.",
                working: "\\frac{20t}{t^2+4}\\approx\\frac{20}{t}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hence $C(t)\\to0$ as $t\\to\\infty$.",
                working: "C(t)\\to0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $C(t)\\to0$",
            commonErrors: [
              "Choosing 20 or 4, the coefficients, rather than the limiting behaviour.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A function is defined by $f(x)=x+1$ for $x<2$ and $f(x)=5$ for $x\\ge2$. What is $f(2)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "undefined" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piecewise function",
                statement:
                  "Use the rule whose interval contains the input; check which inequality includes the boundary.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Since $x=2$ satisfies $x\\ge2$, the second rule applies.",
                working: "x=2\\ge2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore $f(2)=5$.",
                working: "f(2)=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $5$",
            commonErrors: [
              "Using the first rule because $2<2$ is false but the boundary was ignored.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which equation has amplitude 4 and period $\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=2\\sin(4t)$" },
              { id: "b", text: "$y=4\\sin\\left(\\frac{t}{2}\\right)$" },
              { id: "c", text: "$y=\\sin(4t)+4$" },
              { id: "d", text: "$y=4\\sin(2t)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amplitude",
                statement: "The amplitude of $y=a\\sin(bt)+d$ is $|a|$.",
              },
              {
                kind: "formula",
                name: "Period",
                statement: "The period is $\\frac{2\\pi}{b}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Amplitude 4 requires $|a|=4$; period $\\pi$ requires $\\frac{2\\pi}{b}=\\pi$, so $b=2$.",
                working: "a=4,\\ b=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only $y=4\\sin(2t)$ satisfies both.",
                working: "y=4\\sin(2t)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $y=4\\sin(2t)$",
            commonErrors: ["Option (d) has amplitude 1 and vertical shift 4."],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A parking garage charges $\\$3$ for the first hour and $\\$1.50$ for each additional hour or part thereof. Find the cost of parking for 5 hours, in dollars.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost (\\$)", answer: 9, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piecewise function",
                statement:
                  "Use the rule for the interval containing the input; here 5 hours falls in the second interval.",
              },
            ],
            steps: [
              {
                reasoning: "After the first hour there are 4 additional hours.",
                working: "5-1=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Charge for the additional hours.",
                working: "4\\times1.50=6",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Add the first-hour charge.",
                working: "C=3+6=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$9$",
            commonErrors: [
              "Charging $\\$1.50$ for all 5 hours, giving $\\$7.50$.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The depth of water in a port is modelled by $d(t)=5+1.8\\sin(0.4t)$ metres, where $t$ is the time in hours. Find the first time at which the depth is 6 metres, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$t$ (hours)",
                answer: 1.47,
                tolerance: 0.005,
                unit: "hours",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Solving sinusoidal equations",
                statement:
                  "Isolate the sine, use $\\arcsin$ for the first solution in a cycle.",
              },
            ],
            steps: [
              {
                reasoning: "Set $d=6$ and isolate the sine.",
                working: "1.8\\sin(0.4t)=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide.",
                working: "\\sin(0.4t)=\\frac{1}{1.8}=0.5556",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The smallest angle: $0.4t=\\arcsin0.5556=0.5890$.",
                working: "0.4t=0.5890",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $t$.",
                working: "t=\\frac{0.5890}{0.4}=1.47",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t\\approx1.47$ hours",
            commonErrors: ["Using degrees mode on the GDC for $\\arcsin$."],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For the model $y=4\\sin\\big(3(t-2)\\big)+7$, find the amplitude, the period (in radians of $t$) and the maximum value of $y$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Amplitude", answer: 4 },
              { label: "Period", answer: 2.094, tolerance: 0.001 },
              { label: "Maximum value of $y$", answer: 11 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amplitude",
                statement: "Amplitude $=|a|=4$.",
              },
              {
                kind: "formula",
                name: "Period and maximum",
                statement: "Period $=\\frac{2\\pi}{b}$; $y_{\\max}=d+|a|$.",
              },
            ],
            steps: [
              {
                reasoning: "The amplitude is $|a|$.",
                working: "|a|=4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Period $=\\frac{2\\pi}{3}=2.094$.",
                working: "T=\\frac{2\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Maximum $=d+|a|=7+4=11$.",
                working: "y_{\\max}=11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Amplitude $4$, period $\\frac{2\\pi}{3}\\approx2.09$, maximum $11$.",
            commonErrors: [
              "Using $b=3(t-2)$ and reporting period $\\frac{2\\pi}{3(t-2)}$.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The concentration of a drug is modelled by $C(t)=\\dfrac{12t}{t^2+9}$ milligrams per litre, for $t\\ge0$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Time of maximum concentration (hours)",
                answer: 3,
                unit: "hours",
              },
              {
                label: "Maximum concentration (mg per litre)",
                answer: 2,
                unit: "mg per litre",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Quotient rule",
                statement:
                  "$\\frac{d}{dt}\\left(\\frac uv\\right)=\\frac{u'v-uv'}{v^2}$",
              },
              {
                kind: "principle",
                name: "Maximum",
                statement:
                  "At a maximum $C'(t)=0$ with a sign change from positive to negative.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate using the quotient rule.",
                working: "C'(t)=\\frac{12(t^2+9)-12t(2t)}{(t^2+9)^2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify the numerator: $12(9-t^2)$.",
                working: "C'(t)=\\frac{12(9-t^2)}{(t^2+9)^2}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "For $t>0$, $C'(t)=0$ only when $t=3$; $C'>0$ before and $C'<0$ after, so it is a maximum.",
                working: "t=3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate: $C(3)=\\frac{36}{18}=2$.",
                working: "C(3)=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maximum $2$ mg per litre at $t=3$ hours.",
            commonErrors: [
              "Setting the denominator of $C'$ to zero instead of the numerator.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A function is defined by $f(x)=x^2$ for $x<2$ and $f(x)=2x+1$ for $x\\ge2$. Find the value of $x$ for which $f(x)=5$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piecewise function",
                statement:
                  "Solve within each interval and reject any solution that does not satisfy that interval's condition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First interval: $x^2=5$ gives $x=\\pm\\sqrt5\\approx\\pm2.24$, but $x<2$ is required, so both are rejected.",
                working: "x^2=5\\Rightarrow x=\\pm2.24\\ (\\text{rejected})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second interval: $2x+1=5$ gives $x=2$.",
                working: "2x+1=5\\Rightarrow x=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check the interval condition: $x=2\\ge2$ is satisfied.",
                working: "2\\ge2\\ \\checkmark",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Verify: $f(2)=2(2)+1=5$.",
                working: "f(2)=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=2$",
            commonErrors: [
              "Accepting $x=\\sqrt5$ from the first interval without checking $x<2$.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 7,
          stem: "The temperature inside a greenhouse is modelled by $T=18+6\\sin\\left(\\frac{\\pi}{12}(t-6)\\right)$ degrees Celsius, where $t$ is the number of hours after midnight and angles are in radians.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the maximum and minimum temperatures predicted by the model.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find the period of the model, in hours.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Find the first time after midnight at which the temperature reaches its maximum.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find the two times in the first 24 hours at which the temperature is $21^\\circ$C.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maximum and minimum of a sinusoid",
                statement: "$T_{\\max}=d+|a|$ and $T_{\\min}=d-|a|$.",
              },
              {
                kind: "formula",
                name: "Period",
                statement: "$T=\\frac{2\\pi}{b}$ with $b=\\frac{\\pi}{12}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Maximum $=18+6=24$.",
                working: "T_{\\max}=24",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Minimum $=18-6=12$.",
                working: "T_{\\min}=12",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Period $=\\frac{2\\pi}{\\pi/12}=24$ hours.",
                working: "T=24",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Maximum occurs when the sine equals 1: $\\frac{\\pi}{12}(t-6)=\\frac{\\pi}{2}$.",
                working: "\\frac{\\pi}{12}(t-6)=\\frac{\\pi}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Solve: $t-6=6$, so $t=12$ (noon).",
                working: "t=12",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Set $T=21$: $\\sin\\left(\\frac{\\pi}{12}(t-6)\\right)=\\frac12$, so the angle is $\\frac{\\pi}{6}$ or $\\frac{5\\pi}{6}$.",
                working: "\\sin\\theta=\\tfrac12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{\\pi}{12}(t-6)=\\frac{\\pi}{6}\\Rightarrow t=8$; $\\frac{\\pi}{12}(t-6)=\\frac{5\\pi}{6}\\Rightarrow t=16$.",
                working: "t=8\\text{ and }t=16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) max $24^\\circ$C, min $12^\\circ$C. (b) 24 hours. (c) $t=12$. (d) $t=8$ and $t=16$.",
            commonErrors: [
              "Using only the first solution of the sine equation in (d).",
              "Reporting the period as $\\frac{\\pi}{12}$.",
            ],
          },
        },
        {
          id: "aihl-u2-piecewise-rational-sinusoidal-q17",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "A sinusoidal model is given by $y=5\\sin\\big(0.5(t-2)\\big)+3$, where $t$ is in hours.",
          parts: [
            {
              label: "a",
              prompt:
                "State the amplitude, the period, the principal axis, the maximum and the minimum value of $y$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Find the two times in the first cycle after $t=2$ at which $y=6.5$, to 3 significant figures.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Describe the effect on the graph of changing the amplitude from 5 to 8, keeping all other parameters fixed.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find the value of $d$ that would make the minimum value of $y$ equal to 0 if $a=5$ and $b$ and $c$ are unchanged.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sinusoidal parameters",
                statement:
                  "$y=a\\sin(b(t-c))+d$: amplitude $|a|$, period $\\frac{2\\pi}{b}$, axis $y=d$, max $d+|a|$, min $d-|a|$.",
              },
              {
                kind: "property",
                name: "Solving sinusoidal equations",
                statement:
                  "Use $\\arcsin$ for the first solution and $\\pi-$ that angle for the second in the same cycle.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Amplitude $|a|=5$, period $\\frac{2\\pi}{0.5}=4\\pi\\approx12.6$, principal axis $y=d=3$.",
                working: "5,\\ 4\\pi,\\ y=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Maximum $=3+5=8$ and minimum $=3-5=-2$.",
                working: "y_{\\max}=8,\\ y_{\\min}=-2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "All five values stated correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Set $y=6.5$: $5\\sin(0.5(t-2))=3.5$, so $\\sin(0.5(t-2))=0.7$.",
                working: "\\sin\\big(0.5(t-2)\\big)=0.7",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "First angle: $0.5(t-2)=\\arcsin0.7=0.7754$, so $t=2+1.551=3.55$.",
                working: "t=3.55",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Second angle in the cycle: $\\pi-0.7754=2.366$, so $0.5(t-2)=2.366$ and $t=6.73$.",
                working: "t=6.73",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both times stated to 3 s.f.",
                working: "t=3.55\\text{ and }6.73",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Amplitude 8 means the graph stretches vertically so that the maximum becomes $3+8=11$ and the minimum $3-8=-5$.",
                working: "\\max=11,\\ \\min=-5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Period, axis and phase shift are unchanged; only the vertical extent changes.",
                working: "\\text{period, axis, shift unchanged}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Minimum $=d-|a|=d-5=0$.",
                working: "d-5=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Solve: $d=5$; the axis moves up to $y=5$.",
                working: "d=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) amplitude 5, period $4\\pi\\approx12.6$, axis $y=3$, max 8, min $-2$. (b) $t=3.55$ and $t=6.73$. (c) max 11, min $-5$; other parameters unchanged. (d) $d=5$.",
            commonErrors: [
              "Using degrees for $\\arcsin$.",
              "Forgetting the second solution $\\pi-\\arcsin(0.7)$ in (b).",
            ],
            examinerNote:
              "Accept answers from GDC intersection; FT in (d) from (a) is not required since $d$ is independent.",
          },
        },
      ],
    },
  ],
};
