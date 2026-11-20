import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edial-maths-u6-lesson-6-2",
  code: "6-2",
  title: "Correlation, Regression and Discrete Random Variables",
  goal: "I CAN interpret correlation and regression lines and calculate expectations and variances of discrete random variables.",
  standards: [
    "WST01 S1",
    "Correlation and regression",
    "Discrete random variables",
  ],
  vocabulary: [
    {
      term: "Product moment correlation coefficient",
      definition:
        "$r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$, measuring linear correlation between $-1$ and $1$.",
    },
    {
      term: "Regression line",
      definition:
        "The least-squares line $y=a+bx$ predicting $y$ from $x$, with $b=\\frac{S_{xy}}{S_{xx}}$ and $a=\\bar{y}-b\\bar{x}$.",
    },
    {
      term: "Discrete random variable",
      definition:
        "A variable taking a countable set of values with associated probabilities, described by its probability mass function.",
    },
    {
      term: "Expectation",
      definition: "$E(X)=\\sum xP(X=x)$ — the long-run average value of $X$.",
    },
    {
      term: "Variance of a random variable",
      definition: "$\\text{Var}(X)=E(X^2)-[E(X)]^2=\\sum x^2P(X=x)-\\mu^2$.",
    },
  ],
  concepts: [
    {
      id: "edial-maths-u6-correlation-regression",
      title: "Correlation and regression",
      skill:
        "Calculate and interpret the product moment correlation coefficient and find the equation of the regression line of $y$ on $x$.",
      lesson: {
        sections: [
          {
            heading: "The product moment correlation coefficient",
            body: "With $S_{xx}=\\sum(x-\\bar{x})^2$, $S_{yy}=\\sum(y-\\bar{y})^2$ and $S_{xy}=\\sum(x-\\bar{x})(y-\\bar{y})$:\n\n$$r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$$\n\n$r$ lies in $[-1,1]$: $r=1$ perfect positive linear correlation, $r=-1$ perfect negative, $r=0$ no linear correlation. Values near $\\pm1$ indicate strong linear association.",
          },
          {
            heading: "The regression line",
            body: "The least-squares regression line of $y$ on $x$ is $y=a+bx$ where $b=\\frac{S_{xy}}{S_{xx}}$ and $a=\\bar{y}-b\\bar{x}$. It minimises the sum of squared vertical deviations. To predict $y$ for a new $x$, substitute into the equation — but only within or near the range of observed data (interpolation, not extrapolation).",
          },
          {
            heading: "Correlation is not causation",
            body: "A high $|r|$ shows association, not cause. Both variables may depend on a third factor. Also, $r$ measures only **linear** association — a curved relationship can have $r\\approx0$.",
          },
        ],
        keyFormulas: [
          {
            name: "PMCC",
            statement: "$r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$",
          },
          {
            name: "Regression coefficients",
            statement: "$b=\\frac{S_{xy}}{S_{xx}}$, $a=\\bar{y}-b\\bar{x}$",
          },
        ],
        workedExample: {
          problem:
            "Given $n=10$, $\\bar{x}=4$, $\\bar{y}=7$, $S_{xx}=20$, $S_{yy}=45$, $S_{xy}=25$, find $r$ and the regression line of $y$ on $x$.",
          solution:
            "$r=\\frac{25}{\\sqrt{20\\times45}}=\\frac{25}{30}=\\frac56\\approx0.833$. $b=\\frac{25}{20}=1.25$, $a=7-1.25\\times4=2$. Line: $y=1.25x+2$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u6-corr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scatter diagram shows points lying exactly on a line sloping downwards from left to right. What is the value of $r$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-1$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$-0.5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PMCC",
                statement: "$r=-1$ for perfect negative linear correlation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Points on a downward straight line give perfect negative correlation, $r=-1$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $-1$",
            commonErrors: ["Thinking $r$ must be positive."],
          },
        },
        {
          id: "edial-maths-u6-corr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For a data set, $S_{xx}=18$, $S_{yy}=32$ and $S_{xy}=20$. Find the product moment correlation coefficient $r$.",
          response: {
            type: "numeric",
            parts: [{ label: "r", answer: 0.83333, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PMCC",
                statement: "$r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute into the formula.",
                working:
                  "r=\\frac{20}{\\sqrt{18\\times32}}=\\frac{20}{\\sqrt{576}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify the denominator.",
                working: "\\sqrt{576}=24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "r=\\frac{20}{24}=\\frac56\\approx0.833",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$r=\\frac56\\approx0.833$",
            commonErrors: [
              "Using $S_{xy}$ in the denominator.",
              "Forgetting the square root.",
            ],
          },
        },
        {
          id: "edial-maths-u6-corr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The regression line of $y$ on $x$ for a data set is $y=2x+5$. The means are $\\bar{x}=3$ and $\\bar{y}=11$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Regression line",
                statement:
                  "$y=a+bx$ with $b=\\frac{S_{xy}}{S_{xx}}$, $a=\\bar{y}-b\\bar{x}$; the line passes through $(\\bar{x},\\bar{y})$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Verify consistency: $2\\times3+5=11=\\bar{y}$ — the line passes through the mean point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Find the predicted value at $x=7$.",
                working: "y=2(7)+5=19",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interpret the gradient: each unit increase in $x$ is associated with a $2$-unit increase in $y$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "State the prediction and interpretation.",
                working: "y=19",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$y=19$ at $x=7$; gradient $2$ means $y$ increases by $2$ per unit $x$",
            commonErrors: [
              "Using $x=\\bar{x}$ for prediction instead of the required value.",
              "Interpreting the intercept as a physical quantity.",
            ],
          },
        },
        {
          id: "edial-maths-u6-corr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For $10$ data pairs, $\\bar{x}=5$, $\\bar{y}=8$, $S_{xx}=30$, $S_{yy}=50$, $S_{xy}=25$.",
          parts: [
            {
              label: "a",
              prompt: "Find $r$ and comment on the correlation.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Find the regression line of $y$ on $x$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Use the regression line to predict $y$ when $x=8$, and state one reason why this prediction may be unreliable.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PMCC",
                statement: "$r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$.",
              },
              {
                kind: "formula",
                name: "Regression line",
                statement:
                  "$b=\\frac{S_{xy}}{S_{xx}}$, $a=\\bar{y}-b\\bar{x}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Compute $r$.",
                working:
                  "r=\\frac{25}{\\sqrt{30\\times50}}=\\frac{25}{\\sqrt{1500}}=\\frac{25}{38.73}\\approx0.6455",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Evaluate more precisely: $\\sqrt{1500}=10\\sqrt{15}\\approx38.73$; $r\\approx0.646$.",
                working: "r\\approx0.646",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Comment: moderate positive linear correlation.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Gradient $b=\\frac{25}{30}=\\frac56$.",
                working: "b=\\frac56",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Intercept $a=8-\\frac56\\times5=8-\\frac{25}{6}=\\frac{23}{6}$.",
                working: "a=\\frac{23}{6}\\approx3.83",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the line.",
                working: "y=\\frac56x+\\frac{23}{6}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $x=8$.",
                working:
                  "y=\\frac56(8)+\\frac{23}{6}=\\frac{40+23}{6}=\\frac{63}{6}=10.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the prediction.",
                working: "y=10.5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reason: $x=8$ is outside/near the edge of the observed range (extrapolation), or correlation does not imply the relationship holds for new data.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Conclude with the caveat.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $r\\approx0.646$, moderate positive correlation (b) $y=\\frac56x+\\frac{23}{6}$ (c) $y=10.5$; unreliable if $x=8$ is outside the data range",
            commonErrors: [
              "Arithmetic slips in $r$.",
              "Using $S_{yy}$ instead of $S_{xx}$ for $b$.",
              "Ignoring the extrapolation caveat.",
            ],
            examinerNote:
              "Accept $r=0.65$; the line can be written $6y=5x+23$.",
          },
        },
      ],
    },
    {
      id: "edial-maths-u6-discrete-rv",
      title: "Discrete random variables",
      skill:
        "Find $E(X)$ and $Var(X)$ for discrete random variables and apply linear transformations.",
      lesson: {
        sections: [
          {
            heading: "Probability mass functions",
            body: "A discrete random variable $X$ takes values $x_1,x_2,\\ldots$ with probabilities $P(X=x_i)$ summing to $1$. The **expectation** is $E(X)=\\sum x_iP(X=x_i)$ and the **variance** is $\\text{Var}(X)=\\sum x_i^2P(X=x_i)-[E(X)]^2$.",
          },
          {
            heading: "Linear transformations",
            body: "For constants $a$ and $b$: $E(aX+b)=aE(X)+b$ and $\\text{Var}(aX+b)=a^2\\text{Var}(X)$ — note the variance is unaffected by $b$ and scaled by $a^2$. Standard deviation is $\\sqrt{\\text{Var}}$.",
          },
          {
            heading: "Worked pattern",
            body: "Tabulate $x$, $P(X=x)$, $xP(X=x)$ and $x^2P(X=x)$; sum the columns to get $E(X)$ and $E(X^2)$; then $\\text{Var}(X)=E(X^2)-[E(X)]^2$.",
          },
        ],
        keyFormulas: [
          { name: "Expectation", statement: "$E(X)=\\sum xP(X=x)$" },
          { name: "Variance", statement: "$\\text{Var}(X)=E(X^2)-[E(X)]^2$" },
          {
            name: "Linear transform",
            statement:
              "$E(aX+b)=aE(X)+b$; $\\text{Var}(aX+b)=a^2\\text{Var}(X)$",
          },
        ],
        workedExample: {
          problem:
            "A random variable $X$ has distribution $P(X=1)=0.3$, $P(X=2)=0.5$, $P(X=4)=0.2$. Find $E(X)$ and $\\text{Var}(X)$.",
          solution:
            "$E(X)=1(0.3)+2(0.5)+4(0.2)=0.3+1.0+0.8=2.1$. $E(X^2)=1(0.3)+4(0.5)+16(0.2)=0.3+2.0+3.2=5.5$. $\\text{Var}=5.5-2.1^2=5.5-4.41=1.09$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u6-rv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A random variable $X$ takes values $1, 2, 3$ with probabilities $0.2, 0.5, 0.3$. What is $E(X)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.1$" },
              { id: "b", text: "$2.0$" },
              { id: "c", text: "$1.9$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expectation",
                statement: "$E(X)=\\sum xP(X=x)$.",
              },
            ],
            steps: [
              {
                reasoning: "$E(X)=1(0.2)+2(0.5)+3(0.3)=0.2+1.0+0.9=2.1$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $2.1$",
            commonErrors: ["Adding probabilities instead of weighting by $x$."],
          },
        },
        {
          id: "edial-maths-u6-rv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A random variable $X$ has $E(X)=4$ and $\\text{Var}(X)=9$. Find $E(3X+2)$ and $\\text{Var}(3X+2)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "E(3X+2)", answer: 14 },
              { label: "Var(3X+2)", answer: 81 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Linear transformations",
                statement:
                  "$E(aX+b)=aE(X)+b$; $\\text{Var}(aX+b)=a^2\\text{Var}(X)$.",
              },
            ],
            steps: [
              {
                reasoning: "Expectation: $3(4)+2=14$.",
                working: "E(3X+2)=3(4)+2=14",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Variance: $3^2\\times9=81$ (the $+2$ does not affect variance).",
                working: "\\text{Var}(3X+2)=9\\times9=81",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E(3X+2)=14$, $\\text{Var}(3X+2)=81$",
            commonErrors: [
              "Multiplying variance by $3$ instead of $9$.",
              "Adding $2$ inside the variance.",
            ],
          },
        },
        {
          id: "edial-maths-u6-rv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A random variable $X$ has distribution: $P(X=0)=0.1$, $P(X=1)=0.4$, $P(X=2)=0.3$, $P(X=3)=0.2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Variance",
                statement: "$\\text{Var}(X)=E(X^2)-[E(X)]^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$E(X)=0(0.1)+1(0.4)+2(0.3)+3(0.2)=0.4+0.6+0.6=1.6$.",
                working: "E(X)=1.6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E(X^2)=0+1(0.4)+4(0.3)+9(0.2)=0.4+1.2+1.8=3.4$.",
                working: "E(X^2)=3.4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Variance: $3.4-1.6^2=3.4-2.56=0.84$.",
                working: "\\text{Var}=0.84",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State $E(X)$ and $\\text{Var}(X)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E(X)=1.6$, $\\text{Var}(X)=0.84$",
            commonErrors: [
              "Forgetting to square $x$ in $E(X^2)$.",
              "Using $[E(X)]^2$ instead of $E(X)^2$ notation confusion.",
            ],
          },
        },
        {
          id: "edial-maths-u6-rv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A game costs £2 to play. A player rolls a fair die and wins £5 if the score is $6$, £2 if the score is $5$ or $4$, and nothing otherwise.",
          parts: [
            {
              label: "a",
              prompt:
                "Let $W$ be the winnings before subtracting the cost. Write down the distribution of $W$.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Find $E(W)$ and $\\text{Var}(W)$.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Find the expected profit $E(W-2)$ and interpret the result.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expectation and variance",
                statement:
                  "$E(X)=\\sum xP(X=x)$; $\\text{Var}(X)=E(X^2)-[E(X)]^2$.",
              },
              {
                kind: "formula",
                name: "Linear transform",
                statement: "$E(W-2)=E(W)-2$; variance unchanged by shift.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$P(W=5)=\\frac16$ (score 6); $P(W=2)=\\frac26=\\frac13$ (scores 4,5); $P(W=0)=\\frac36=\\frac12$ (scores 1,2,3).",
                working: "W=5:\\tfrac16;\\ W=2:\\tfrac13;\\ W=0:\\tfrac12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Verify probabilities sum to 1: $\\frac16+\\frac13+\\frac12=1$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "State the distribution.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$E(W)=5(\\frac16)+2(\\frac13)+0(\\frac12)=\\frac56+\\frac43=\\frac{5+8}{6}=\\frac{13}{6}$.",
                working: "E(W)=\\frac{13}{6}\\approx2.17",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$E(W^2)=25(\\frac16)+4(\\frac13)+0=\\frac{25}{6}+\\frac{8}{6}=\\frac{33}{6}=5.5$.",
                working: "E(W^2)=5.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\text{Var}(W)=5.5-\\left(\\frac{13}{6}\\right)^2=5.5-\\frac{169}{36}=\\frac{198-169}{36}=\\frac{29}{36}$.",
                working: "\\text{Var}(W)=\\frac{29}{36}\\approx0.806",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State $E(W)$ and $\\text{Var}(W)$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Profit $=W-2$, so $E(W-2)=\\frac{13}{6}-2=\\frac{1}{6}$.",
                working: "E(W-2)=\\frac{13}{6}-\\frac{12}{6}=\\frac16",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Interpret: expected profit is $\\frac16$ pound $\\approx16.7$ pence per game.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Note the game is favourable to the player on average.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $P(W=5)=\\frac16$, $P(W=2)=\\frac13$, $P(W=0)=\\frac12$ (b) $E(W)=\\frac{13}{6}\\approx2.17$, $\\text{Var}(W)=\\frac{29}{36}\\approx0.806$ (c) $E(W-2)=\\frac16\\approx0.167$ pounds",
            commonErrors: [
              "Mismatching winnings to scores.",
              "Forgetting probabilities must sum to 1.",
              "Applying variance shift incorrectly — $\\text{Var}(W-2)=\\text{Var}(W)$.",
            ],
            examinerNote:
              "Accept decimal forms; £ amounts to 2 d.p. if required.",
          },
        },
      ],
    },
  ],
};
