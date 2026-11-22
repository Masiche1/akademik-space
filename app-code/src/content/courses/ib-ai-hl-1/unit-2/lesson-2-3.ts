import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "aihl-u2-lesson-2-3",
  code: "2-3",
  title: "Linearizing Data",
  goal: "I CAN use logarithms to linearize power and exponential data, find the parameters of the model, and use $R^2$ to judge which model fits best.",
  standards: ["AHL 2.10", "AHL 4.13"],
  vocabulary: [
    {
      term: "Linearization",
      definition:
        "Transforming variables, usually with logarithms, so that a curved relationship becomes a straight line.",
    },
    {
      term: "Log-log plot",
      definition:
        "A plot of $\\ln y$ against $\\ln x$. It is a straight line when $y=ax^b$.",
    },
    {
      term: "Semi-log plot",
      definition:
        "A plot of $\\ln y$ against $x$. It is a straight line when $y=ka^x$.",
    },
    {
      term: "Residual",
      definition:
        "The difference between an observed value and the value predicted by the model: $y_{\\text{obs}}-y_{\\text{pred}}$.",
    },
    {
      term: "Coefficient of determination",
      definition:
        "$R^2=1-\\dfrac{SS_{\\text{res}}}{SS_{\\text{tot}}}$, the proportion of the variation in $y$ explained by the model.",
    },
  ],
  concepts: [
    {
      id: "aihl-u2-linearize",
      title: "Log-log and semi-log linearization",
      skill:
        "Linearize $y=ax^b$ and $y=ka^x$ and use gradient and intercept to find the parameters.",
      lesson: {
        sections: [
          {
            heading: "Power models: log-log",
            body: "Take natural logarithms of $y=ax^b$: $\\ln y=\\ln a+b\\ln x$. Plotting $\\ln y$ against $\\ln x$ gives a straight line with gradient $b$ and vertical intercept $\\ln a$. So $a=e^{\\text{intercept}}$. Square-root, area and inverse-square laws are power models.",
          },
          {
            heading: "Exponential models: semi-log",
            body: "Take natural logarithms of $y=ka^x$: $\\ln y=\\ln k+(\\ln a)x$. Plotting $\\ln y$ against $x$ gives a straight line with gradient $\\ln a$ and intercept $\\ln k$. So $a=e^{\\text{gradient}}$ and $k=e^{\\text{intercept}}$. A quick test: if $\\ln y$ against $x$ is straight the data is exponential, and if $\\ln y$ against $\\ln x$ is straight the data is a power law.",
          },
        ],
        keyFormulas: [
          {
            name: "Power model",
            statement: "$y=ax^b\\Rightarrow\\ln y=b\\ln x+\\ln a$",
          },
          {
            name: "Exponential model",
            statement: "$y=ka^x\\Rightarrow\\ln y=(\\ln a)x+\\ln k$",
          },
        ],
        workedExample: {
          problem:
            "A plot of $\\ln y$ against $\\ln x$ has gradient 3 and intercept $\\ln 2$. Find the model.",
          solution: "$\\ln y=3\\ln x+\\ln2=\\ln(2x^3)$, so $y=2x^3$.",
        },
      },
      questions: [
        {
          id: "aihl-u2-linearize-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Data follow the model $y=ax^b$. Which graph is a straight line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y$ against $x$" },
              { id: "b", text: "$y$ against $\\ln x$" },
              { id: "c", text: "$\\ln y$ against $\\ln x$" },
              { id: "d", text: "$\\ln y$ against $x$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power law of logarithms",
                statement: "$\\ln(ax^b)=\\ln a+b\\ln x$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Taking logarithms gives $\\ln y=b\\ln x+\\ln a$, linear in $\\ln x$.",
                working: "\\ln y=b\\ln x+\\ln a",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $\\ln y$ against $\\ln x$",
            commonErrors: [
              "Confusing semi-log (for exponentials) with log-log (for power functions).",
            ],
          },
        },
        {
          id: "aihl-u2-linearize-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A graph of $\\ln y$ against $\\ln x$ is a straight line $\\ln y=2.5\\ln x+1.2$. The data follow $y=ax^b$. Find $b$ and $a$, giving $a$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$b$", answer: 2.5 },
              { label: "$a$", answer: 3.32, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power law of logarithms",
                statement: "$\\ln y=b\\ln x+\\ln a$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compare with $\\ln y=b\\ln x+\\ln a$; the gradient is $b$.",
                working: "b=2.5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The intercept is $\\ln a$.",
                working: "\\ln a=1.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiate: $e^{1.2}=3.3201$.",
                working: "a=3.32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$b=2.5$, $a\\approx3.32$",
            commonErrors: ["Giving $a=1.2$ without exponentiating."],
          },
        },
        {
          id: "aihl-u2-linearize-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A graph of $\\ln y$ against $x$ is the straight line $\\ln y=0.4x+2$. The data follow $y=ka^x$. Find $k$ and $a$, each to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: 7.39, tolerance: 0.005 },
              { label: "$a$", answer: 1.49, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Exponential linearization",
                statement: "$\\ln y=(\\ln a)x+\\ln k$",
              },
            ],
            steps: [
              {
                reasoning: "The intercept is $\\ln k$.",
                working: "\\ln k=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiate: $e^2=7.389$.",
                working: "k=7.39",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The gradient is $\\ln a$.",
                working: "\\ln a=0.4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiate: $e^{0.4}=1.4918$.",
                working: "a=1.49",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y\\approx7.39\\times1.49^x$",
            commonErrors: [
              "Taking $a=0.4$.",
              "Swapping the roles of gradient and intercept.",
            ],
          },
        },
        {
          id: "aihl-u2-linearize-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "A scientist measures the time $T$ (in days) for a type of fermentation to complete at three sizes $d$ (in cm) of container. The results are $(d,T)=(1,2),\\ (4,16),\\ (9,54)$. She suspects a power model $T=ad^b$.",
          parts: [
            {
              label: "a",
              prompt: "Show that if $T=ad^b$ then $\\ln T=b\\ln d+\\ln a$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the gradient of the line through the points $(\\ln1,\\ln2)$ and $(\\ln4,\\ln16)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Hence find $a$ and $b$ and state the model.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Use the model to predict $T$ for $d=25$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Show that an exponential model $T=ka^d$ is not suitable, by examining the gradients of $\\ln T$ against $d$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) gradient", answer: 1.5 },
              { label: "(c) $a$", answer: 2 },
              { label: "(c) $b$", answer: 1.5 },
              {
                label: "(d) $T$ when $d=25$ (days)",
                answer: 250,
                unit: "days",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Laws of logarithms",
                statement: "$\\ln(PQ)=\\ln P+\\ln Q$ and $\\ln(P^b)=b\\ln P$.",
              },
              {
                kind: "principle",
                name: "Linearization",
                statement:
                  "A model is linear in transformed variables exactly when the gradients between points are constant.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Take the natural logarithm of both sides and use the product law.",
                working: "\\ln T=\\ln(ad^b)=\\ln a+\\ln d^b",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Use the power law (AG).",
                working: "\\ln T=b\\ln d+\\ln a",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Compute the coordinates $(0,0.693)$ and $(1.386,2.773)$.",
                working:
                  "(\\ln1,\\ln2)=(0,0.693),\\;(\\ln4,\\ln16)=(1.386,2.773)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Gradient $=\\dfrac{2.773-0.693}{1.386-0}$, which is $\\dfrac{\\ln8}{\\ln4}=\\dfrac32$.",
                working: "m=1.50",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "The gradient of the log-log line is $b$.",
                working: "b=1.5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "The intercept at $\\ln d=0$ is $\\ln a=\\ln2$.",
                working: "\\ln a=0.693",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "State the model. Check with $d=9$: $2\\times27=54$.",
                working: "a=2,\\;T=2d^{1.5}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Substitute $d=25$, using $25^{1.5}=125$.",
                working: "T=2\\times25^{1.5}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "T=250",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "For an exponential model $\\ln T$ against $d$ is a line. Gradient from $d=1$ to $4$: $\\frac{2.773-0.693}{3}$.",
                working: "0.693",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Gradient from $d=4$ to $9$: $\\frac{3.989-2.773}{5}$.",
                working: "0.243",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "The gradients are not equal, so the points do not lie on a straight line and an exponential model is unsuitable.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $1.5$. (c) $a=2$, $b=1.5$, $T=2d^{1.5}$. (d) $250$ days. (e) gradients $0.693$ and $0.243$ differ.",
            commonErrors: [
              "Using $\\log_{10}$ for some values and $\\ln$ for others.",
              "Reporting $a=\\ln2$ instead of $e^{\\ln2}=2$.",
            ],
            examinerNote:
              "Any consistent logarithm base is acceptable for the linearization.",
          },
        },
        {
          id: "aihl-u2-linearize-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Data follow the model $y=ka^x$. Which graph produces a straight line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y$ against $\\ln x$" },
              { id: "b", text: "$\\ln y$ against $x$" },
              { id: "c", text: "$\\ln y$ against $\\ln x$" },
              { id: "d", text: "$y$ against $x$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Exponential linearization",
                statement: "$\\ln y=(\\ln a)x+\\ln k$, which is linear in $x$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Taking logarithms of $y=ka^x$ gives $\\ln y=\\ln k+(\\ln a)x$.",
                working: "\\ln y=(\\ln a)x+\\ln k",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is linear in $x$, so plot $\\ln y$ against $x$.",
                working: "\\ln y\\text{ vs }x",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $\\ln y$ against $x$",
            commonErrors: [
              "Choosing the log-log plot, which linearizes power models instead.",
            ],
          },
        },
        {
          id: "aihl-u2-linearize-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For data following $y=ax^b$, a plot of $\\ln y$ against $\\ln x$ is a straight line. What does the gradient of this line represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{b}$" },
              { id: "b", text: "$a$" },
              { id: "c", text: "$b$" },
              { id: "d", text: "$\\ln a$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power law of logarithms",
                statement:
                  "$\\ln y=b\\ln x+\\ln a$; gradient $=b$, intercept $=\\ln a$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compare $\\ln y=b\\ln x+\\ln a$ with $y=mx+c$: the gradient is the coefficient of $\\ln x$.",
                working: "m=b",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The intercept $\\ln a$ gives $a$, not the gradient.",
                working: "c=\\ln a",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $b$",
            commonErrors: ["Thinking the gradient gives $a$ or $\\ln a$."],
          },
        },
        {
          id: "aihl-u2-linearize-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For data following $y=ka^x$, a plot of $\\ln y$ against $x$ is a straight line. What does the vertical intercept of this line represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\ln k$" },
              { id: "b", text: "$a$" },
              { id: "c", text: "$k$" },
              { id: "d", text: "$\\ln a$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Exponential linearization",
                statement:
                  "$\\ln y=(\\ln a)x+\\ln k$; intercept $=\\ln k$, gradient $=\\ln a$.",
              },
            ],
            steps: [
              {
                reasoning: "At $x=0$ the line has value $\\ln k$.",
                working: "\\text{intercept}=\\ln k",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiating gives $k=e^{\\text{intercept}}$.",
                working: "k=e^{\\ln k}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\ln k$",
            commonErrors: [
              "Reporting $k$ directly; the intercept must be exponentiated.",
            ],
          },
        },
        {
          id: "aihl-u2-linearize-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A plot of $\\ln y$ against $\\ln x$ for a set of data is a straight line. Which model best describes the data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=ka^x$" },
              { id: "b", text: "$y=mx+c$" },
              { id: "c", text: "$y=ax^b$" },
              { id: "d", text: "$y=ax^2+bx+c$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power law of logarithms",
                statement: "$\\ln(ax^b)=\\ln a+b\\ln x$ is linear in $\\ln x$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A straight line in $\\ln y$ vs $\\ln x$ means $\\ln y=b\\ln x+\\ln a$.",
                working: "\\ln y=b\\ln x+\\ln a",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiating gives $y=ax^b$, a power model.",
                working: "y=e^{\\ln a}x^b=ax^b",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $y=ax^b$",
            commonErrors: [
              "Confusing with the semi-log plot that linearizes $y=ka^x$.",
            ],
          },
        },
        {
          id: "aihl-u2-linearize-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Data follow $y=ax^b$ with $a=5$. A plot of $\\ln y$ against $\\ln x$ is a straight line. What is its vertical intercept?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$\\ln 5\\approx1.61$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$e^5\\approx148$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power law of logarithms",
                statement:
                  "$\\ln y=b\\ln x+\\ln a$; the intercept is $\\ln a$.",
              },
            ],
            steps: [
              {
                reasoning: "The intercept equals $\\ln a=\\ln5$.",
                working: "\\ln5\\approx1.609",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is not $a=5$ itself; exponentiating recovers $a$.",
                working: "e^{1.609}=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $\\ln 5\\approx1.61$",
            commonErrors: [
              "Reporting the intercept as $a=5$ without taking the logarithm.",
            ],
          },
        },
        {
          id: "aihl-u2-linearize-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A plot of $\\ln y$ against $\\ln x$ is the straight line $\\ln y=-2\\ln x+1.5$. The data follow $y=ax^b$. Which model is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=e^{-2}x^{1.5}\\approx0.135x^{1.5}$" },
              { id: "b", text: "$y=e^{2}x^{1.5}\\approx7.39x^{1.5}$" },
              { id: "c", text: "$y=1.5x^{-2}$" },
              { id: "d", text: "$y=e^{1.5}x^{-2}\\approx4.48x^{-2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power law of logarithms",
                statement:
                  "$\\ln y=b\\ln x+\\ln a$, so $b$ is the gradient and $a=e^{\\text{intercept}}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gradient $=-2$ gives $b=-2$; intercept $1.5$ gives $a=e^{1.5}\\approx4.48$.",
                working: "b=-2,\\ a=e^{1.5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hence $y\\approx4.48x^{-2}$.",
                working: "y=4.48x^{-2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $y=e^{1.5}x^{-2}\\approx4.48x^{-2}$",
            commonErrors: [
              "Swapping gradient and intercept, or using $a=1.5$ instead of $e^{1.5}$.",
            ],
          },
        },
        {
          id: "aihl-u2-linearize-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A plot of $\\ln y$ against $\\ln x$ is the straight line $\\ln y=1.5\\ln x-0.7$. The data follow $y=ax^b$. Find $b$ and $a$, giving $a$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$b$", answer: 1.5 },
              { label: "$a$", answer: 0.497, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power law of logarithms",
                statement: "$\\ln y=b\\ln x+\\ln a$.",
              },
            ],
            steps: [
              {
                reasoning: "The gradient is the coefficient of $\\ln x$.",
                working: "b=1.5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The intercept is $\\ln a=-0.7$.",
                working: "\\ln a=-0.7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiate: $a=e^{-0.7}=0.4966$.",
                working: "a=0.497",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$b=1.5$, $a\\approx0.497$",
            commonErrors: [
              "Giving $a=-0.7$ or $a=e^{0.7}$; the sign of the intercept matters.",
            ],
          },
        },
        {
          id: "aihl-u2-linearize-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A plot of $\\ln y$ against $x$ is the straight line $\\ln y=-0.3x+4$. The data follow $y=ka^x$. Find $k$ and $a$, each to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: 54.6, tolerance: 0.05 },
              { label: "$a$", answer: 0.741, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Exponential linearization",
                statement: "$\\ln y=(\\ln a)x+\\ln k$.",
              },
            ],
            steps: [
              {
                reasoning: "The intercept is $\\ln k=4$.",
                working: "\\ln k=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiate: $k=e^4=54.598$.",
                working: "k=54.6",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The gradient is $\\ln a=-0.3$.",
                working: "\\ln a=-0.3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiate: $a=e^{-0.3}=0.7408$.",
                working: "a=0.741",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y\\approx54.6(0.741)^x$",
            commonErrors: ["Reporting $a=-0.3$ instead of $e^{-0.3}$."],
          },
        },
        {
          id: "aihl-u2-linearize-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Data follow the model $y=2.5x^{1.5}$. Use the model to predict the value of $y$ when $x=8$.",
          response: {
            type: "numeric",
            parts: [{ label: "$y$", answer: 56.6, tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power model",
                statement:
                  "$y=ax^b$; substitute the given $x$ and evaluate the power.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $x=8$.",
                working: "y=2.5(8^{1.5})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate $8^{1.5}=8\\sqrt8=16\\sqrt2\\approx22.63$.",
                working: "8^{1.5}\\approx22.63",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply.",
                working: "y=2.5\\times22.63=56.6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y\\approx56.6$",
            commonErrors: ["Computing $8^{1.5}$ as $8\\times1.5=12$."],
          },
        },
        {
          id: "aihl-u2-linearize-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A plot of $\\ln y$ against $\\ln x$ is a straight line passing through the points $(1,3)$ and $(3,7)$. The data follow $y=ax^b$. Find $b$ and $a$, giving $a$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$b$", answer: 2 },
              { label: "$a$", answer: 2.72, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power law of logarithms",
                statement:
                  "$\\ln y=b\\ln x+\\ln a$; gradient $=b$, intercept $=\\ln a$.",
              },
            ],
            steps: [
              {
                reasoning: "Gradient $=\\frac{7-3}{3-1}=2$.",
                working: "b=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The gradient of the log-log line is $b$.",
                working: "b=2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Using $(1,3)$: $3=2(1)+\\ln a$, so $\\ln a=1$.",
                working: "\\ln a=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponentiate: $a=e\\approx2.718$.",
                working: "a=2.72",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$b=2$, $a\\approx2.72$",
            commonErrors: [
              "Using the points $(x,y)$ directly as $(\\ln x,\\ln y)$ coordinates without realising they already are transformed values.",
            ],
          },
        },
        {
          id: "aihl-u2-linearize-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A quantity follows the exponential model $y=3(1.2)^x$. Use the model to predict $y$ when $x=10$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "$y$", answer: 18.6, tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Exponential model",
                statement: "$y=ka^x$; substitute and evaluate the power.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $x=10$.",
                working: "y=3(1.2^{10})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $1.2^{10}\\approx6.1917$.",
                working: "1.2^{10}\\approx6.192",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 3.",
                working: "y=18.6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y\\approx18.6$",
            commonErrors: ["Computing $1.2^{10}$ as $1.2\\times10=12$."],
          },
        },
        {
          id: "aihl-u2-linearize-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Three measurements are $(x,y)=(2,5),(4,20),(8,80)$. A scientist suspects a power model $T=ax^b$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the gradient of the line through $(\\ln2,\\ln5)$ and $(\\ln4,\\ln20)$, and through $(\\ln4,\\ln20)$ and $(\\ln8,\\ln80)$.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Hence find $a$ and $b$ and state the model.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Use the model to predict $y$ when $x=16$.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power law of logarithms",
                statement: "$\\ln y=b\\ln x+\\ln a$.",
              },
              {
                kind: "principle",
                name: "Linearization",
                statement:
                  "Equal gradients between consecutive log-log points confirm a power model.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Coordinates: $(0.693,1.609)$, $(1.386,2.996)$, $(2.079,4.382)$.",
                working: "(0.693,1.609),(1.386,2.996),(2.079,4.382)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "First gradient $=\\frac{2.996-1.609}{1.386-0.693}=\\frac{1.386}{0.693}=2$.",
                working: "m_1=2.00",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Second gradient $=\\frac{4.382-2.996}{2.079-1.386}=\\frac{1.386}{0.693}=2$.",
                working: "m_2=2.00",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Constant gradient 2 gives $b=2$.",
                working: "b=2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Intercept: $\\ln a=1.609-2(0.693)=0.223$, so $a=e^{0.223}=1.25$; model $y=1.25x^2$.",
                working: "a=1.25,\\ y=1.25x^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Predict: $y=1.25(16^2)=1.25\\times256$.",
                working: "y=320",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) gradients both 2. (b) $a=1.25$, $b=2$, $y=1.25x^2$. (c) $y=320$.",
            commonErrors: [
              "Reporting $a=e^{0.223}$ without evaluating, or using gradient 2 as $a$.",
            ],
            examinerNote:
              "Accept $\\log_{10}$ throughout; gradients and intercepts adjust consistently.",
          },
        },
        {
          id: "aihl-u2-linearize-q17",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "Data are recorded as $(x,y)=(1,4),(2,12),(3,36),(4,108)$. A student proposes either an exponential model $y=ka^x$ or a power model $y=cx^d$.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that the gradients between consecutive points of $\\ln y$ against $x$ are all equal to $\\ln 3$.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Hence find $k$ and $a$ and state the exponential model.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Use the model to predict $y$ when $x=6$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain, with reference to the log-log plot, why the power model is unsuitable for these data.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Laws of logarithms",
                statement: "$\\ln(PQ)=\\ln P+\\ln Q$ and $\\ln(P^b)=b\\ln P$.",
              },
              {
                kind: "principle",
                name: "Linearization",
                statement:
                  "A model is appropriate when the transformed points lie on a straight line, i.e. consecutive gradients are equal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Compute $\\ln y$ values: $\\ln4=1.386$, $\\ln12=2.485$, $\\ln36=3.584$, $\\ln108=4.682$.",
                working: "1.386,2.485,3.584,4.682",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Each successive difference is $\\approx1.099=\\ln3$, and $\\Delta x=1$ each time.",
                working: "\\Delta\\ln y=1.099=\\ln3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Hence every gradient equals $\\ln3$ (AG).",
                working: "m=\\ln3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The gradient of the semi-log line is $\\ln a$, so $\\ln a=\\ln3$ and $a=3$.",
                working: "a=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The intercept at $x=0$ is $\\ln k=\\ln4$, so $k=4$.",
                working: "k=4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the model: $y=4\\cdot3^x$.",
                working: "y=4(3^x)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $x=6$: $3^6=729$.",
                working: "y=4\\times729",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "y=2916",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "For a power model, plot $\\ln y$ against $\\ln x$: the points $(0,1.386),(0.693,2.485),(1.099,3.584),(1.386,4.682)$.",
                working: "(0,1.386),(0.693,2.485),(1.099,3.584),(1.386,4.682)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "The gradients between consecutive points are $\\frac{1.099}{0.693}=1.585$, then $\\frac{1.099}{0.406}=2.707$, then $\\frac{1.098}{0.287}=3.83$ — not equal.",
                working: "1.585,\\ 2.71,\\ 3.83",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The log-log points are not collinear, so the power model is unsuitable.",
                working: "\\text{gradients differ}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) all gradients $\\ln3$. (b) $k=4$, $a=3$, $y=4\\cdot3^x$. (c) $y=2916$. (d) log-log gradients $1.585, 2.71, 3.83$ are not equal.",
            commonErrors: [
              "Reporting $a=\\ln3$ instead of $3$.",
              "Not comparing successive gradients in (d).",
            ],
            examinerNote:
              "Any consistent logarithm base is acceptable; values of $\\ln$ may be replaced by $\\log_{10}$ consistently.",
          },
        },
      ],
    },
    {
      id: "aihl-u2-choose-models-r2",
      title: "Choosing models and $R^2$",
      skill:
        "Compare models using $R^2$ and residuals, and judge when a model is appropriate.",
      lesson: {
        sections: [
          {
            heading: "The coefficient of determination",
            body: "$R^2=1-\\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$, where $SS_{\\text{res}}=\\sum(y-\\hat y)^2$ and $SS_{\\text{tot}}=\\sum(y-\\bar y)^2$. It lies between 0 and 1 for a regression with an intercept; a value near 1 means the model explains most of the variation. For linear regression $R^2=r^2$, the square of Pearson's coefficient. GDCs report $R^2$ for many regression types.",
          },
          {
            heading: "Residuals and judgement",
            body: "A high $R^2$ alone does not prove that a model is correct. Plot or list the residuals: they should scatter randomly around zero. A pattern, such as positive then negative then positive, shows that the model has the wrong shape. Also think about context and about extrapolation, which can be unreliable far outside the data.",
          },
        ],
        keyFormulas: [
          {
            name: "Coefficient of determination",
            statement:
              "$R^2=1-\\dfrac{\\sum(y-\\hat y)^2}{\\sum(y-\\bar y)^2}$",
          },
          { name: "Residual", statement: "$y_{\\text{obs}}-y_{\\text{pred}}$" },
        ],
        workedExample: {
          problem:
            "A linear regression has $r=-0.9$. Find $R^2$ and interpret it.",
          solution:
            "$R^2=(-0.9)^2=0.81$. So $81\\%$ of the variation in $y$ is explained by the linear model.",
        },
      },
      questions: [
        {
          id: "aihl-u2-choose-models-r2-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A model has $R^2=0.96$. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The model predicts 96% of values exactly." },
              {
                id: "b",
                text: "96% of the variation in $y$ is explained by the model.",
              },
              { id: "c", text: "The correlation coefficient is 0.96." },
              {
                id: "d",
                text: "There is a 4% chance that the model is wrong.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "$R^2$",
                statement:
                  "$R^2$ is the proportion of the variation in $y$ explained by the model.",
              },
            ],
            steps: [
              {
                reasoning: "This is the definition of $R^2$.",
                working: "R^2=0.96=96\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: [
              "Treating $R^2$ as the proportion of correct predictions.",
            ],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A linear regression has Pearson's correlation coefficient $r=-0.9$. Find $R^2$.",
          response: {
            type: "numeric",
            parts: [{ label: "$R^2$", answer: 0.81 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Linear $R^2$",
                statement: "For linear regression $R^2=r^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Square the correlation coefficient; the sign disappears.",
                working: "R^2=(-0.9)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "R^2=0.81",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$R^2=0.81$",
            commonErrors: ["Giving $-0.81$ or $-0.9$."],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Data: $(x,y)=(1,3),(2,5),(3,8),(4,12)$. A model is $\\hat y=2.5x+0.5$. Using $R^2=1-\\dfrac{SS_{\\text{res}}}{SS_{\\text{tot}}}$, find $R^2$ for this model to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "$R^2$", answer: 0.946, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coefficient of determination",
                statement:
                  "$R^2=1-\\frac{\\sum(y-\\hat y)^2}{\\sum(y-\\bar y)^2}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Predictions are $3,\\,5.5,\\,8,\\,10.5$, so the residuals are $0,\\,-0.5,\\,0,\\,1.5$. Sum their squares.",
                working: "SS_{res}=0+0.25+0+2.25=2.5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The mean of $y$ is $\\frac{28}{4}=7$.",
                working: "\\bar y=7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sum the squared deviations.",
                working: "SS_{tot}=16+4+1+25=46",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute.",
                working: "R^2=1-\\frac{2.5}{46}=0.946",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$R^2\\approx0.946$",
            commonErrors: [
              "Using residuals without squaring them: they sum to 1, not 2.5.",
              "Using $\\hat y$ instead of $\\bar y$ in $SS_{\\text{tot}}$.",
            ],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "The number of bacteria $y$ (in thousands) is measured at times $t=0,1,2,3,4$ hours: $50,\\,65,\\,85,\\,110,\\,143$. A linear model $y=23.1t+44.4$ has $R^2=0.978$. An exponential model $y=50\\times1.3^t$ is also proposed.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the value predicted by the linear model at $t=4$ and the residual at $t=4$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the value predicted by the exponential model at $t=4$ and the residual at $t=4$, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find all five residuals for the linear model and state what their pattern shows about its suitability.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Explain why $R^2=0.978$ does not prove that the linear model is appropriate.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) linear prediction at $t=4$",
                answer: 136.8,
                tolerance: 0.05,
              },
              {
                label: "(a) linear residual at $t=4$",
                answer: 6.2,
                tolerance: 0.05,
              },
              {
                label: "(b) exponential prediction at $t=4$",
                answer: 143,
                tolerance: 0.5,
              },
              {
                label: "(b) exponential residual at $t=4$",
                answer: 0.195,
                tolerance: 0.0005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Residual",
                statement: "Residual $=y_{\\text{obs}}-y_{\\text{pred}}$.",
              },
              {
                kind: "principle",
                name: "Residual pattern",
                statement:
                  "A good model has residuals scattered randomly about zero; a systematic pattern indicates the wrong form of model.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Substitute $t=4$.",
                working: "23.1(4)+44.4=136.8",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Observed minus predicted.",
                working: "143-136.8=6.2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$1.3^4=2.8561$.",
                working: "50\\times2.8561=142.805\\approx143",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Observed minus predicted.",
                working: "143-142.805=0.195",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Compute each residual, e.g. $50-44.4=5.6$ and $65-67.5=-2.5$.",
                working: "5.6,\\;-2.5,\\;-5.6,\\;-3.7,\\;6.2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The signs are positive, negative, negative, negative, positive: a U-shaped pattern, so the data are curved and the linear model has the wrong shape.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "$R^2$ measures only the proportion of variation explained, and can be high even for a curved relationship over a short range.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "The systematic residual pattern, and the much smaller residuals of the exponential model, show that the exponential model is better, so extrapolating with the linear model would underestimate future growth.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 136.8, residual 6.2. (b) 143, residual 0.195. (c) $5.6,-2.5,-5.6,-3.7,6.2$; U-shape so linear unsuitable. (d) high $R^2$ does not exclude a systematic pattern.",
            commonErrors: [
              "Computing predicted minus observed, giving the wrong sign of the residual.",
            ],
            examinerNote:
              "Residuals of the opposite sign (predicted minus observed) are accepted if consistently defined.",
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A regression model has $R^2=0.85$. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is an 85% chance the model is correct." },
              { id: "b", text: "The correlation coefficient is 0.85." },
              {
                id: "c",
                text: "85% of the variation in $y$ is explained by the model.",
              },
              {
                id: "d",
                text: "The model predicts 85% of the data points exactly.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "$R^2$",
                statement:
                  "$R^2$ is the proportion of the variation in $y$ explained by the model.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$R^2=0.85$ means 85% of the variation is explained.",
                working: "R^2=0.85=85\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It does not mean exact predictions or a probability of correctness.",
                working: "\\text{definition of }R^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: [
              "Interpreting $R^2$ as a percentage of correct predictions.",
            ],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a linear regression, how is $R^2$ related to Pearson's correlation coefficient $r$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$R^2=1-r$" },
              { id: "b", text: "$R^2=|r|$" },
              { id: "c", text: "$R^2=r$" },
              { id: "d", text: "$R^2=r^2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Linear $R^2$",
                statement:
                  "For linear regression $R^2=r^2$, the square of Pearson's coefficient.",
              },
            ],
            steps: [
              {
                reasoning: "Recall the identity for straight-line fits.",
                working: "R^2=r^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The square removes the sign, so $R^2\\ge0$ always.",
                working: "R^2\\ge0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $R^2=r^2$",
            commonErrors: ["Reporting $R^2=r$ or keeping the negative sign."],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A residual for a data point $(x,y)$ with predicted value $\\hat y$ is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{y}{\\hat y}$" },
              { id: "b", text: "$y+\\hat y$" },
              { id: "c", text: "$\\hat y-y$" },
              { id: "d", text: "$y-\\hat y$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Residual",
                statement: "Residual $=y_{\\text{obs}}-y_{\\text{pred}}$.",
              },
            ],
            steps: [
              {
                reasoning: "The residual is observed minus predicted.",
                working: "y_{\\text{obs}}-y_{\\text{pred}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The sign convention must be applied consistently.",
                working: "y-\\hat y",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $y-\\hat y$",
            commonErrors: [
              "Reversing the order to $\\hat y-y$; acceptable only if used consistently.",
            ],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The residuals of a model, listed in order of increasing $x$, are $+2,+1,-1,-2,-3,+1,+3$. What does this pattern suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The data are constant." },
              {
                id: "b",
                text: "The model has the wrong shape; residuals show a systematic trend.",
              },
              { id: "c", text: "$R^2$ must be negative." },
              {
                id: "d",
                text: "The model fits well; residuals scatter randomly.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Residual pattern",
                statement:
                  "A good model has residuals scattered randomly about zero; a trend indicates the wrong form of model.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The residuals drift from positive to negative and back: a systematic pattern, not random scatter.",
                working: "+,+,-,-,-,+,+",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This indicates the model has the wrong shape even if $R^2$ is high.",
                working:
                  "\\text{systematic trend}\\Rightarrow\\text{wrong shape}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The model has the wrong shape.",
            commonErrors: [
              "Judging fit by $R^2$ alone without inspecting residuals.",
            ],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A linear regression has Pearson's correlation coefficient $r=0.6$. Find $R^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.3$" },
              { id: "b", text: "$0.6$" },
              { id: "c", text: "$-0.36$" },
              { id: "d", text: "$0.36$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Linear $R^2$",
                statement: "For linear regression $R^2=r^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Square the correlation coefficient: $R^2=r^2=0.6^2$.",
                working: "R^2=0.6^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "R^2=0.36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $R^2=0.36$",
            commonErrors: ["Giving $R^2=0.6$ or keeping the sign of $r$."],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A model fitted to data has $R^2=0.97$. Which statement is the most appropriate conclusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "97% of the predictions are exact." },
              {
                id: "b",
                text: "The model is definitely the correct model for the data.",
              },
              {
                id: "c",
                text: "The model will predict accurately for any $x$ outside the data range.",
              },
              {
                id: "d",
                text: "The model explains most of the variation, but residuals and context should still be checked.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Judgement",
                statement:
                  "A high $R^2$ measures explained variation only; residuals, context and extrapolation must also be considered.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$R^2=0.97$ shows the model explains 97% of the variation in $y$.",
                working: "R^2=0.97",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It does not prove correctness or reliable extrapolation; residuals must be inspected.",
                working: "\\text{check residuals and context}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Treating a high $R^2$ as proof of model validity."],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For the data $(x,y)=(1,2),(2,4),(3,5),(4,9)$, a model $\\hat y=2x$ is proposed. Using $R^2=1-\\dfrac{SS_{\\text{res}}}{SS_{\\text{tot}}}$, find $R^2$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "$R^2$", answer: 0.923, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coefficient of determination",
                statement:
                  "$R^2=1-\\frac{\\sum(y-\\hat y)^2}{\\sum(y-\\bar y)^2}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Predictions are $2,4,6,8$; residuals are $0,0,-1,1$. Sum of squares.",
                working: "SS_{res}=0+0+1+1=2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Mean of $y$: $\\bar y=\\frac{20}{4}=5$.",
                working: "\\bar y=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Squared deviations: $9+1+0+16=26$.",
                working: "SS_{tot}=26",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute.",
                working: "R^2=1-\\frac{2}{26}=0.923",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$R^2\\approx0.923$",
            commonErrors: [
              "Using $\\hat y$ in place of $\\bar y$ when computing $SS_{\\text{tot}}$.",
            ],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A model $\\hat y=x+1$ is fitted to the data $(1,3),(2,3),(3,6)$. Find the residual for each data point.",
          response: {
            type: "numeric",
            parts: [
              { label: "Residual at $x=1$", answer: 1 },
              { label: "Residual at $x=2$", answer: 0 },
              { label: "Residual at $x=3$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Residual",
                statement: "Residual $=y_{\\text{obs}}-y_{\\text{pred}}$.",
              },
            ],
            steps: [
              {
                reasoning: "Predictions: $\\hat y=2,3,4$.",
                working: "\\hat y=2,3,4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract observed minus predicted for each point.",
                working: "3-2=1,\\ 3-3=0,\\ 6-4=2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the three residuals.",
                working: "1,0,2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1,\\ 0,\\ 2$",
            commonErrors: ["Reversing the sign to $-1,0,-2$."],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A linear regression has Pearson's correlation coefficient $r=-0.75$. Find $R^2$ to 3 decimal places and state what percentage of the variation in $y$ is explained by the model.",
          response: {
            type: "numeric",
            parts: [{ label: "$R^2$", answer: 0.563, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Linear $R^2$",
                statement: "For linear regression $R^2=r^2$.",
              },
            ],
            steps: [
              {
                reasoning: "Square $r$, removing the negative sign.",
                working: "R^2=(-0.75)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "R^2=0.5625\\approx0.563",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Interpret as a percentage.",
                working: "56.3\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$R^2\\approx0.563$, i.e. about $56.3\\%$ of the variation explained.",
            commonErrors: ["Keeping the negative sign: $R^2=-0.5625$."],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A model has $R^2=0.9$ and $SS_{\\text{tot}}=50$. Find $SS_{\\text{res}}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$SS_{\\text{res}}$", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coefficient of determination",
                statement: "$R^2=1-\\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute into the formula: $0.9=1-\\frac{SS_{\\text{res}}}{50}$.",
                working: "\\frac{SS_{res}}{50}=0.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange.",
                working: "SS_{res}=50(0.1)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "SS_{res}=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$SS_{\\text{res}}=5$",
            commonErrors: [
              "Computing $SS_{\\text{res}}=0.9\\times50=45$, which confuses $R^2$ with the residual ratio.",
            ],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A model has residuals $1,-2,0,3$ and $SS_{\\text{tot}}=20$. Find $SS_{\\text{res}}$ and $R^2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$SS_{\\text{res}}$", answer: 14 },
              { label: "$R^2$", answer: 0.3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coefficient of determination",
                statement:
                  "$SS_{\\text{res}}=\\sum(y-\\hat y)^2$ and $R^2=1-\\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$.",
              },
            ],
            steps: [
              {
                reasoning: "Square each residual and add.",
                working: "SS_{res}=1+4+0+9=14",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into the $R^2$ formula.",
                working: "R^2=1-\\frac{14}{20}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "R^2=0.3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$SS_{\\text{res}}=14$, $R^2=0.3$",
            commonErrors: ["Summing residuals without squaring: $1-2+0+3=2$."],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Data $(x,y)=(1,4),(2,5),(3,9),(4,14)$ are fitted with the model $\\hat y=3x+1$.",
          parts: [
            {
              label: "a",
              prompt: "Find the residual for each data point.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find $SS_{\\text{res}}$ and $SS_{\\text{tot}}$, and hence $R^2$ to 3 significant figures.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Comment on whether the residuals suggest the model has the correct shape.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Residual",
                statement: "Residual $=y_{\\text{obs}}-y_{\\text{pred}}$.",
              },
              {
                kind: "formula",
                name: "Coefficient of determination",
                statement:
                  "$R^2=1-\\frac{\\sum(y-\\hat y)^2}{\\sum(y-\\bar y)^2}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Predictions are $4,7,10,13$.",
                working: "\\hat y=4,7,10,13",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Residuals: $0,-2,-1,1$.",
                working: "0,-2,-1,1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sum squared residuals: $0+4+1+1=6$.",
                working: "SS_{res}=6",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Mean of $y$ is $\\frac{32}{4}=8$; squared deviations $16+9+1+36=62$.",
                working: "SS_{tot}=62",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Substitute: $R^2=1-\\frac{6}{62}=0.903$.",
                working: "R^2=0.903",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The residuals $0,-2,-1,1$ are small and show no strong trend, so the linear shape is reasonable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0,-2,-1,1$. (b) $SS_{\\text{res}}=6$, $SS_{\\text{tot}}=62$, $R^2\\approx0.903$. (c) Residuals are small with no clear pattern; model shape is acceptable.",
            commonErrors: ["Computing residuals as predicted minus observed."],
          },
        },
        {
          id: "aihl-u2-choose-models-r2-q17",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "The values $y$ at times $t=0,1,2,3,4$ are $5,10,20,40,80$. A linear model $\\hat y=18t-5$ is fitted, giving $R^2=0.837$. An exponential model $y=5\\times2^t$ is also proposed.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the value predicted by the linear model and the residual at each of the five times.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Find the residuals for the exponential model at each time.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "For the linear model, $SS_{\\text{tot}}=3720$ and $SS_{\\text{res}}=605$. Verify that $R^2\\approx0.837$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Hence decide which model is more appropriate, giving two reasons for your choice.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Residual",
                statement: "Residual $=y_{\\text{obs}}-y_{\\text{pred}}$.",
              },
              {
                kind: "formula",
                name: "Coefficient of determination",
                statement:
                  "$R^2=1-\\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$.",
              },
              {
                kind: "principle",
                name: "Residual pattern",
                statement:
                  "Random residuals indicate a good model; a systematic pattern indicates the wrong shape.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Linear predictions: $-5,13,31,49,67$.",
                working: "-5,13,31,49,67",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Residuals: $5-(-5)=10$, $10-13=-3$, $20-31=-11$, $40-49=-9$, $80-67=13$.",
                working: "10,-3,-11,-9,13",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All five residuals listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The exponential model predicts $5,10,20,40,80$ exactly.",
                working: "\\hat y=5,10,20,40,80",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "All residuals are 0, so $SS_{\\text{res}}=0$ and $R^2=1$ for the exponential model.",
                working: "0,0,0,0,0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Compute the ratio.",
                working: "\\frac{605}{3720}=0.1626",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Subtract from 1.",
                working: "R^2=1-0.1626=0.837",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "This matches the stated value.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The exponential model is better: its residuals are all zero and $R^2=1$.",
                working: "R^2=1>0.837",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The linear residuals show a clear trend (large positive at the ends, negative in the middle), indicating the wrong shape; the doubling pattern of the data confirms exponential growth.",
                working: "\\text{systematic residual pattern}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) predictions $-5,13,31,49,67$; residuals $10,-3,-11,-9,13$. (b) all residuals 0. (c) $R^2=0.837$ verified. (d) The exponential model: exact fit, $R^2=1$, and the linear residuals show a systematic pattern.",
            commonErrors: [
              "Computing residuals as predicted minus observed.",
              "Choosing the linear model because $R^2=0.837$ is 'high' without comparing models.",
            ],
            examinerNote:
              "Accept either consistent sign convention for residuals if applied throughout.",
          },
        },
      ],
    },
  ],
};
