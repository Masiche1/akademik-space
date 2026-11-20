import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "aahl-u5-lesson-5-3",
  code: "5-3",
  title: "Related Rates and Optimization",
  goal: "I CAN connect rates of change using the chain rule, and use higher derivatives to optimise and classify points on curves.",
  standards: ["AHL 5.14", "AHL 5.12"],
  vocabulary: [
    {
      term: "Related rates",
      definition:
        "Problems where several quantities change with time and are linked by an equation, so their rates are linked by the chain rule.",
    },
    {
      term: "Chain rule",
      definition: "$\\frac{dy}{dt}=\\frac{dy}{dx}\\times\\frac{dx}{dt}$.",
    },
    { term: "Stationary point", definition: "A point where $f'(x)=0$." },
    {
      term: "Point of inflection",
      definition:
        "A point where the concavity changes; there $f''(x)=0$ and $f''$ changes sign.",
    },
    {
      term: "Second derivative test",
      definition:
        "At a stationary point, $f''>0$ gives a local minimum and $f''<0$ a local maximum; $f''=0$ is inconclusive.",
    },
    {
      term: "Global extremum",
      definition:
        "The greatest or least value of a function over its whole domain.",
    },
  ],
  concepts: [
    {
      id: "aahl-u5-related-rates",
      title: "Related rates",
      skill:
        "Set up a relationship between variables, differentiate with respect to time and substitute the instant of interest.",
      lesson: {
        sections: [
          {
            heading: "Method",
            body: "1. Write an equation linking the variables. 2. Differentiate both sides with respect to $t$, using the chain rule (for example $\\frac{d}{dt}r^2=2r\\frac{dr}{dt}$). 3. Only after differentiating, substitute the values at the instant of interest. Substituting first turns a changing quantity into a constant and destroys the rate.",
          },
          {
            heading: "Reducing the number of variables",
            body: "If the equation has too many variables (such as $V=\\frac13\\pi r^2h$ for a cone), eliminate one with a geometric relation, such as similar triangles, before differentiating. Signs matter: a decreasing quantity has a negative rate.",
          },
        ],
        keyFormulas: [
          {
            name: "Chain rule for rates",
            statement: "$\\dfrac{dy}{dt}=\\dfrac{dy}{dx}\\cdot\\dfrac{dx}{dt}$",
          },
          {
            name: "Sphere",
            statement: "$V=\\tfrac43\\pi r^3,\\quad A=4\\pi r^2$",
          },
        ],
        workedExample: {
          problem:
            "A circle's radius grows at 2 cm/s. Find the rate of change of the area when $r=5$.",
          solution:
            "$A=\\pi r^2$, so $\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}=2\\pi(5)(2)=20\\pi$ cm$^2$/s.",
        },
      },
      questions: [
        {
          id: "aahl-u5-related-rates-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The radius of a circle increases at a rate of $2$ cm s$^{-1}$. Find the rate at which the area is increasing when the radius is $5$ cm.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20\\pi$ cm$^2$ s$^{-1}$" },
              { id: "b", text: "$10\\pi$ cm$^2$ s$^{-1}$" },
              { id: "c", text: "$50\\pi$ cm$^2$ s$^{-1}$" },
              { id: "d", text: "$25\\pi$ cm$^2$ s$^{-1}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dA}{dt}=\\frac{dA}{dr}\\frac{dr}{dt}$",
              },
            ],
            steps: [
              {
                reasoning: "$A=\\pi r^2$ gives $\\frac{dA}{dr}=2\\pi r$.",
                working: "\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $r=5$, $\\frac{dr}{dt}=2$.",
                working: "2\\pi(5)(2)=20\\pi",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $20\\pi$",
            commonErrors: [
              "Using $\\pi r\\frac{dr}{dt}$ (option b).",
              "Using $A\\times\\frac{dr}{dt}$ (option c).",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A spherical balloon is inflated so that its volume increases at $72\\pi$ cm$^3$ s$^{-1}$. Find the rate at which the radius is increasing when the radius is $3$ cm.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\frac{dr}{dt}$ (cm s$^{-1}$)", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dV}{dt}=\\frac{dV}{dr}\\frac{dr}{dt}$",
              },
              {
                kind: "formula",
                name: "Volume of a sphere",
                statement: "$V=\\frac43\\pi r^3$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate the volume with respect to $r$.",
                working: "\\frac{dV}{dr}=4\\pi r^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the rate and the radius.",
                working: "72\\pi=4\\pi(3)^2\\frac{dr}{dt}=36\\pi\\frac{dr}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "\\frac{dr}{dt}=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2$ cm s$^{-1}$",
            commonErrors: [
              "Using the surface area formula for $V$.",
              "Substituting $r=3$ into $V$ before differentiating.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A ladder of length $5$ m rests against a vertical wall. The foot of the ladder slides away from the wall at $0.5$ m s$^{-1}$. When the foot is $3$ m from the wall, find the speed at which the top of the ladder is moving down the wall.",
          response: {
            type: "numeric",
            parts: [{ label: "Speed (m s$^{-1}$)", answer: 0.375 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Pythagoras",
                statement: "$x^2+y^2=25$",
              },
              {
                kind: "law",
                name: "Implicit differentiation with respect to time",
                statement: "$\\frac{d}{dt}x^2=2x\\frac{dx}{dt}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate $x^2+y^2=25$ with respect to $t$.",
                working: "2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "When $x=3$, $y=\\sqrt{25-9}=4$.",
                working: "y=4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $\\frac{dx}{dt}=0.5$.",
                working: "3(0.5)+4\\frac{dy}{dt}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solve: $\\frac{dy}{dt}$ is negative, so the top moves down at $\\frac38$.",
                working: "\\frac{dy}{dt}=-\\frac38=-0.375",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.375$ m s$^{-1}$",
            commonErrors: [
              "Giving a positive $\\frac{dy}{dt}$ and missing the interpretation of direction.",
              "Using $y=3$.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 11,
          stem: "A container is an inverted cone with its vertex at the bottom, height $6$ m and top radius $3$ m. Water flows in at a constant rate of $2\\pi$ m$^3$ per minute. At time $t$ minutes the depth is $h$ m and the water surface has radius $r$ m.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that the volume of water is $V=\\dfrac{\\pi h^3}{12}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the rate at which the depth is increasing when $h=4$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Find the rate at which the radius $r$ of the water surface is increasing at that instant.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find the rate at which the area of the water surface is increasing when $h=4$, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Find the time taken to fill the container from empty.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $\\frac{dh}{dt}$", answer: 0.5 },
              { label: "(c) $\\frac{dr}{dt}$", answer: 0.25 },
              { label: "(d) $\\frac{dA}{dt}$", answer: 3.14, tolerance: 0.005 },
              { label: "(e) time (minutes)", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Similar triangles",
                statement: "$\\frac rh=\\frac36$, so $r=\\frac h2$.",
              },
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dV}{dt}=\\frac{dV}{dh}\\frac{dh}{dt}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Use similar triangles to eliminate $r$ in $V=\\frac13\\pi r^2h$.",
                working: "r=\\frac h2,\\quad V=\\frac13\\pi\\frac{h^2}{4}h",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify.",
                working: "V=\\frac{\\pi h^3}{12}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Differentiate with respect to $h$.",
                working: "\\frac{dV}{dh}=\\frac{\\pi h^2}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Apply the chain rule with $h=4$.",
                working: "2\\pi=4\\pi\\frac{dh}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Solve.",
                working: "\\frac{dh}{dt}=0.5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Differentiate $r=\\frac h2$ with respect to $t$.",
                working: "\\frac{dr}{dt}=\\frac12\\frac{dh}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Substitute.",
                working: "0.25",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$A=\\pi r^2=\\frac{\\pi h^2}{4}$, so $\\frac{dA}{dt}=\\frac{\\pi h}{2}\\frac{dh}{dt}$.",
                working: "\\frac{\\pi(4)}{2}(0.5)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "\\pi\\approx3.14",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Full volume at $h=6$.",
                working: "V=\\frac{\\pi(216)}{12}=18\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Constant inflow gives the time.",
                working: "\\frac{18\\pi}{2\\pi}=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $0.5$ m/min. (c) $0.25$ m/min. (d) $3.14$ m$^2$/min. (e) $9$ minutes.",
            commonErrors: [
              "Differentiating $\\frac13\\pi r^2 h$ treating $r$ as constant.",
              "Using $r=3$ instead of $r=\\frac h2$ at the instant.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The edge of a cube is increasing at $2$ cm s$^{-1}$. Find the rate of change of the volume when the edge is $2$ cm.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$ cm$^3$ s$^{-1}$" },
              { id: "b", text: "$12$ cm$^3$ s$^{-1}$" },
              { id: "c", text: "$8$ cm$^3$ s$^{-1}$" },
              { id: "d", text: "$16$ cm$^3$ s$^{-1}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dV}{dt}=\\frac{dV}{ds}\\frac{ds}{dt}$",
              },
              {
                kind: "formula",
                name: "Volume of a cube",
                statement: "$V=s^3$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dV}{ds}=3s^2$, so $\\frac{dV}{dt}=3s^2\\frac{ds}{dt}$.",
                working: "3s^2\\frac{ds}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $s=2$, $\\frac{ds}{dt}=2$.",
                working: "3(4)(2)=24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $24$ cm$^3$ s$^{-1}$",
            commonErrors: [
              "Using $s^2\\frac{ds}{dt}$ (forgetting the factor 3).",
              "Using $3s^3\\frac{ds}{dt}$.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A spherical balloon has radius $2$ cm increasing at $1$ cm s$^{-1}$. Find the rate of change of its volume at this instant, to 2 decimal places.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\frac{dV}{dt}$", answer: 50.27, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dV}{dt}=\\frac{dV}{dr}\\frac{dr}{dt}$",
              },
              {
                kind: "formula",
                name: "Volume of a sphere",
                statement: "$V=\\frac43\\pi r^3$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate the volume.",
                working: "\\frac{dV}{dr}=4\\pi r^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $r=2$, $\\frac{dr}{dt}=1$.",
                working: "4\\pi(4)(1)=16\\pi",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "\\approx50.27",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$16\\pi\\approx50.27$ cm$^3$ s$^{-1}$",
            commonErrors: [
              "Using the surface area $4\\pi r^2$ as the volume.",
              "Differentiating $\\frac43\\pi r^3$ as $4\\pi r^2$ correctly but substituting $r=2$ into $V$ first.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The radius of a circle is decreasing at $1$ cm s$^{-1}$. Find the rate of change of the area when the radius is $4$ cm.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\frac{dA}{dt}$", answer: -25.13, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dA}{dt}=\\frac{dA}{dr}\\frac{dr}{dt}$",
              },
              {
                kind: "property",
                name: "Sign of rate",
                statement:
                  "A decreasing quantity has a negative rate of change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$A=\\pi r^2$ gives $\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}$.",
                working: "2\\pi r\\frac{dr}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $r=4$ and $\\frac{dr}{dt}=-1$.",
                working: "2\\pi(4)(-1)=-8\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interpret the negative sign: the area is decreasing.",
                working: "-8\\pi",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Evaluate.",
                working: "\\approx-25.13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-8\\pi\\approx-25.13$ cm$^2$ s$^{-1}$",
            commonErrors: [
              "Giving a positive answer and missing the decreasing interpretation.",
              "Using $\\pi r\\frac{dr}{dt}$.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A cube has edge length $s$ cm, increasing at $2$ cm s$^{-1}$. Show that when $s=3$, the volume is increasing at $54$ cm$^3$ s$^{-1}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dV}{dt}=\\frac{dV}{ds}\\frac{ds}{dt}$",
              },
              {
                kind: "formula",
                name: "Volume of a cube",
                statement: "$V=s^3$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Write the volume and differentiate with respect to $t$.",
                working: "V=s^3\\Rightarrow\\frac{dV}{dt}=3s^2\\frac{ds}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $s=3$, $\\frac{ds}{dt}=2$.",
                working: "3(9)(2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "54",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the conclusion with units.",
                working:
                  "\\frac{dV}{dt}=54\\ \\text{cm}^3\\text{s}^{-1}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: $54$ cm$^3$ s$^{-1}$",
            commonErrors: [
              "Substituting $s=3$ into $V$ before differentiating.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A spherical balloon has radius $2$ cm increasing at $3$ cm s$^{-1}$. Find the rate of change of its surface area at this instant, to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\frac{dA}{dt}$", answer: 150.8, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dA}{dt}=\\frac{dA}{dr}\\frac{dr}{dt}$",
              },
              {
                kind: "formula",
                name: "Surface area of a sphere",
                statement: "$A=4\\pi r^2$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate the surface area.",
                working: "\\frac{dA}{dr}=8\\pi r",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the chain rule.",
                working: "\\frac{dA}{dt}=8\\pi r\\frac{dr}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $r=2$, $\\frac{dr}{dt}=3$.",
                working: "8\\pi(2)(3)=48\\pi",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "\\approx150.8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$48\\pi\\approx150.8$ cm$^2$ s$^{-1}$",
            commonErrors: [
              "Using $4\\pi r$ instead of $8\\pi r$.",
              "Using the volume formula for the surface area.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Why must values be substituted into a related-rates equation only after differentiating?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Because substituting first turns changing quantities into constants, so the rates of change disappear.",
              },
              {
                id: "b",
                text: "Because differentiation is not allowed on equations.",
              },
              {
                id: "c",
                text: "Because the variables cannot be differentiated with respect to $t$.",
              },
              {
                id: "d",
                text: "Because substituting first makes the equation easier.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Related rates method",
                statement:
                  "Differentiate first, then substitute the instant of interest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substituting values before differentiating removes the variables, so no rate terms appear.",
                working:
                  "\\text{substitute first}\\Rightarrow\\text{constant equation}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only option (a) states this correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Thinking the order does not matter."],
          },
        },
        {
          id: "aahl-u5-related-rates-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "A right-angled triangle has legs $x$ and $y$ and hypotenuse $h$. At one instant $x=5$, $y=12$, $h=13$, with $\\frac{dx}{dt}=3$ and $\\frac{dy}{dt}=-4$. Find $\\frac{dh}{dt}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\frac{dh}{dt}$", answer: -2.54, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Pythagoras",
                statement: "$x^2+y^2=h^2$",
              },
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{d}{dt}x^2=2x\\frac{dx}{dt}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate $x^2+y^2=h^2$ with respect to $t$.",
                working: "2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=2h\\frac{dh}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "x\\frac{dx}{dt}+y\\frac{dy}{dt}=h\\frac{dh}{dt}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute the values.",
                working: "5(3)+12(-4)=13\\frac{dh}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "15-48=13\\frac{dh}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\frac{dh}{dt}=-\\frac{33}{13}\\approx-2.54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\frac{33}{13}\\approx-2.54$",
            commonErrors: [
              "Using $x^2+y^2=h$ instead of $h^2$.",
              "Forgetting that $\\frac{dy}{dt}$ is negative.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Water is poured into a cylindrical tank of radius $2$ m at a rate of $5$ m h$^{-1}$ increase in height. Find the rate at which the volume is increasing.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\frac{dV}{dt}$", answer: 62.83, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume of a cylinder",
                statement: "$V=\\pi r^2h$",
              },
              {
                kind: "law",
                name: "Chain rule",
                statement:
                  "$\\frac{dV}{dt}=\\pi r^2\\frac{dh}{dt}$ when $r$ is constant",
              },
            ],
            steps: [
              {
                reasoning: "With $r$ fixed, differentiate $V=\\pi r^2h$.",
                working: "\\frac{dV}{dt}=\\pi r^2\\frac{dh}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $r=2$, $\\frac{dh}{dt}=5$.",
                working: "\\pi(4)(5)=20\\pi",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "\\approx62.83",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20\\pi\\approx62.83$ m$^3$ h$^{-1}$",
            commonErrors: [
              "Differentiating $\\pi r^2h$ as if both $r$ and $h$ varied.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A solid cube of ice has edge length $s$ cm, melting so that $\\frac{ds}{dt}=-0.1$ cm s$^{-1}$.",
          parts: [
            {
              label: "a",
              prompt: "Show that $\\dfrac{dV}{dt}=-0.3s^2$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find $\\dfrac{dV}{dt}$ when $s=4$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find $\\dfrac{dA}{dt}$ when $s=4$, where $A=6s^2$ is the surface area.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find the time taken for the edge to decrease from $4$ cm to $2$ cm.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Find the volume of ice lost in this time.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $\\frac{dV}{dt}$", answer: -4.8 },
              { label: "(c) $\\frac{dA}{dt}$", answer: -4.8 },
              { label: "(d) time (s)", answer: 20 },
              { label: "(e) volume lost", answer: 56 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{d}{dt}s^n=ns^{n-1}\\frac{ds}{dt}$",
              },
              { kind: "formula", name: "Cube", statement: "$V=s^3$, $A=6s^2$" },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$V=s^3$ gives $\\frac{dV}{dt}=3s^2\\frac{ds}{dt}=3s^2(-0.1)$.",
                working: "-0.3s^2\\quad\\text{(AG)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the simplified result.",
                working: "\\frac{dV}{dt}=-0.3s^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $s=4$.",
                working: "-0.3(16)=-4.8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the value with sign.",
                working: "-4.8",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\frac{dA}{dt}=12s\\frac{ds}{dt}$; substitute.",
                working: "12(4)(-0.1)=-4.8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the value.",
                working: "-4.8",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Use constant rate: time $=\\frac{\\Delta s}{ds/dt}$.",
                working: "\\frac{4-2}{0.1}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "20\\ \\text{s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Volume lost $=s_1^3-s_2^3=64-8$.",
                working: "56\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $-4.8$ cm$^3$ s$^{-1}$. (c) $-4.8$ cm$^2$ s$^{-1}$. (d) $20$ s. (e) $56$ cm$^3$.",
            commonErrors: [
              "Dropping the negative sign for the melting rate.",
              "Using $A=6s^3$ instead of $6s^2$.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The side length $s$ of a square is decreasing at $0.5$ cm s$^{-1}$. Find the rate of change of the area when $s=6$ cm.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\frac{dA}{dt}$", answer: -6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dA}{dt}=\\frac{dA}{ds}\\frac{ds}{dt}$",
              },
              {
                kind: "formula",
                name: "Area of a square",
                statement: "$A=s^2$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate the area.",
                working: "\\frac{dA}{dt}=2s\\frac{ds}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $s=6$, $\\frac{ds}{dt}=-0.5$.",
                working: "2(6)(-0.5)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "-6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-6$ cm$^2$ s$^{-1}$",
            commonErrors: [
              "Giving a positive answer despite the decreasing side.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A sphere has volume $V=\\frac43\\pi r^3$ and surface area $A=4\\pi r^2$. Show that $\\dfrac{dV}{dt}=A\\dfrac{dr}{dt}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dV}{dt}=\\frac{dV}{dr}\\frac{dr}{dt}$",
              },
              {
                kind: "formula",
                name: "Sphere",
                statement: "$V=\\frac43\\pi r^3$, $A=4\\pi r^2$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate $V$ with respect to $r$.",
                working: "\\frac{dV}{dr}=4\\pi r^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the chain rule.",
                working: "\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recognise $4\\pi r^2=A$.",
                working: "=A\\frac{dr}{dt}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the conclusion.",
                working: "\\frac{dV}{dt}=A\\frac{dr}{dt}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: $\\frac{dV}{dt}=A\\frac{dr}{dt}$",
            commonErrors: [
              "Using the volume formula $V$ in place of $\\frac{dV}{dr}$.",
              "Substituting numerical values before differentiating.",
            ],
          },
        },
        {
          id: "aahl-u5-related-rates-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A spherical balloon is being inflated. At time $t$, its radius is $r$ and its volume is $V=\\frac43\\pi r^3$.",
          parts: [
            {
              label: "a",
              prompt: "Show that $\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Given that $\\frac{dV}{dt}=48\\pi$, find $\\frac{dr}{dt}$ when $r=2$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find $\\frac{dA}{dt}$ at the same instant, where $A=4\\pi r^2$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If instead $r=2$ and $\\frac{dr}{dt}=3$, find $\\frac{dV}{dt}$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{dV}{dt}=\\frac{dV}{dr}\\frac{dr}{dt}$",
              },
              {
                kind: "formula",
                name: "Sphere",
                statement: "$V=\\frac43\\pi r^3$, $A=4\\pi r^2$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Differentiate $V$ with respect to $t$.",
                working:
                  "\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Show the intermediate step.",
                working: "\\frac{dV}{dr}=4\\pi r^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute into the rate equation.",
                working: "48\\pi=4\\pi(4)\\frac{dr}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Solve.",
                working: "\\frac{dr}{dt}=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$\\frac{dA}{dt}=8\\pi r\\frac{dr}{dt}$; substitute $r=2$, $\\frac{dr}{dt}=3$.",
                working: "8\\pi(2)(3)=48\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the value.",
                working: "48\\pi",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Substitute into $\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}$.",
                working: "4\\pi(4)(3)=48\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State the value.",
                working: "48\\pi",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) shown. (b) $3$. (c) $48\\pi$. (d) $48\\pi$.",
            commonErrors: [
              "Using $4\\pi r$ for $\\frac{dA}{dt}$ instead of $8\\pi r\\frac{dr}{dt}$.",
              "Substituting $r=2$ before differentiating.",
            ],
            examinerNote:
              "Note the consistency: in (b), (c) and (d) all three give the same instant effectively.",
          },
        },
        {
          id: "aahl-u5-related-rates-q17",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A right-angled triangle has legs $x$ and $y$ and hypotenuse $h=17$. At one instant $x=8$, $y=15$, with $\\frac{dx}{dt}=2$ and $\\frac{dy}{dt}=-3$. Find $\\frac{dh}{dt}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\frac{dh}{dt}$", answer: -1.71, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Pythagoras",
                statement: "$x^2+y^2=h^2$",
              },
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{d}{dt}x^2=2x\\frac{dx}{dt}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Differentiate $x^2+y^2=h^2$ with respect to $t$ and simplify.",
                working: "x\\frac{dx}{dt}+y\\frac{dy}{dt}=h\\frac{dh}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the values.",
                working: "8(2)+15(-3)=17\\frac{dh}{dt}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "16-45=17\\frac{dh}{dt}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "\\frac{dh}{dt}=-\\frac{29}{17}\\approx-1.71",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\frac{29}{17}\\approx-1.71$",
            commonErrors: [
              "Using $h=13$ from a different triangle.",
              "Forgetting the negative sign of $\\frac{dy}{dt}$.",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u5-higher-optimization",
      title: "Higher derivatives and optimization",
      skill:
        "Use first and second derivatives to find and classify extrema and inflection points, including for families of functions.",
      lesson: {
        sections: [
          {
            heading: "Classifying points",
            body: "Solve $f'(x)=0$ for stationary points. If $f''>0$ it is a minimum; if $f''<0$ a maximum. If $f''=0$ the test fails: check the sign of $f'$ on either side. A point of inflection needs $f''$ to change sign, not just to equal zero ($x^4$ has $f''(0)=0$ but a minimum at 0).",
          },
          {
            heading: "Global optimisation and parameters",
            body: "For a problem on a restricted domain, compare the values at stationary points with the values at the endpoints. For a family such as $f_n(x)=x^ne^{-x}$ keep $n$ symbolic; your answers are expressions in $n$ that you can check with a particular value.",
          },
        ],
        keyFormulas: [
          {
            name: "Second derivative test",
            statement:
              "$f'(a)=0,\\ f''(a)>0\\Rightarrow$ minimum; $f''(a)<0\\Rightarrow$ maximum",
          },
          {
            name: "Inflection",
            statement: "$f''(a)=0$ and $f''$ changes sign at $a$",
          },
        ],
        workedExample: {
          problem:
            "Find the minimum value of $f(x)=x+\\frac{4}{x^2}$ for $x>0$.",
          solution:
            "$f'(x)=1-\\frac{8}{x^3}=0$ gives $x=2$. $f''(x)=\\frac{24}{x^4}>0$, a minimum. $f(2)=2+1=3$.",
        },
      },
      questions: [
        {
          id: "aahl-u5-higher-optimization-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=xe^x$. Find $f''(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+2)e^x$" },
              { id: "b", text: "$(x+1)e^x$" },
              { id: "c", text: "$xe^x$" },
              { id: "d", text: "$(2x+1)e^x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$(uv)'=u'v+uv'$",
              },
            ],
            steps: [
              {
                reasoning: "First derivative by the product rule.",
                working: "f'(x)=e^x+xe^x=(x+1)e^x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Differentiate again.",
                working: "f''(x)=e^x+(x+1)e^x=(x+2)e^x",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $(x+2)e^x$",
            commonErrors: [
              "Stopping at the first derivative.",
              "Differentiating $x$ and $e^x$ separately and multiplying.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the minimum value of $f(x)=x+\\dfrac{4}{x^2}$ for $x>0$, justifying that it is a minimum.",
          response: {
            type: "numeric",
            parts: [{ label: "Minimum value", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second derivative test",
                statement: "$f'(a)=0$ and $f''(a)>0$ gives a local minimum.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate and set to zero.",
                working: "f'(x)=1-\\frac{8}{x^3}=0\\Rightarrow x=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Test: $f''(x)=\\frac{24}{x^4}>0$, so a minimum.",
                working: "f''(2)=\\frac{24}{16}>0",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Evaluate.",
                working: "f(2)=2+1=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$",
            commonErrors: [
              "Writing $\\frac{4}{x^2}$ as $4x^2$ before differentiating.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find the maximum value of $f(x)=xe^{-x^2}$ for $x>0$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Maximum value", answer: 0.429, tolerance: 0.0005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product and chain rules",
                statement: "$\\frac{d}{dx}e^{-x^2}=-2xe^{-x^2}$",
              },
              {
                kind: "principle",
                name: "First derivative test",
                statement:
                  "$f'$ changes from positive to negative at a maximum.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate.",
                working: "f'(x)=e^{-x^2}-2x^2e^{-x^2}=e^{-x^2}(1-2x^2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve $f'=0$ with $x>0$.",
                working: "x=\\frac1{\\sqrt2}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "$f'>0$ before and $f'<0$ after, so a maximum.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Evaluate.",
                working: "f=\\frac{e^{-1/2}}{\\sqrt2}\\approx0.429",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.429$",
            commonErrors: ["Omitting the factor $2x$ from the chain rule."],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "For each integer $n\\ge2$ the function $f_n$ is defined by $f_n(x)=x^ne^{-x}$ for $x\\ge0$. Let $M_n$ denote the maximum value of $f_n$.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that $f_n'(x)=x^{n-1}e^{-x}(n-x)$ and hence show that the maximum of $f_n$ occurs at $x=n$, so that $M_n=n^ne^{-n}$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Show that $f_n''(x)=x^{n-2}e^{-x}\\left(x^2-2nx+n(n-1)\\right)$ and hence show that the graph has points of inflection at $x=n\\pm\\sqrt n$.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Find the value of $n$ for which the horizontal distance between the two points of inflection is $6$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Hence, or otherwise, prove that $M_{n+1}>M_n$ for all integers $n\\ge2$. You may use $\\left(1+\\frac1n\\right)^n\\ge2$ and $e<4$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$(uv)'=u'v+uv'$",
              },
              {
                kind: "principle",
                name: "Inflection",
                statement: "$f''=0$ with a sign change.",
              },
              {
                kind: "formula",
                name: "Quadratic formula",
                statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Product rule.",
                working:
                  "f_n'(x)=nx^{n-1}e^{-x}-x^ne^{-x}=x^{n-1}e^{-x}(n-x)\\quad\\text{(AG)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "For $x>0$ the factor $x^{n-1}e^{-x}>0$, so $f_n'=0$ only at $x=n$; $f_n'>0$ for $x<n$ and $<0$ for $x>n$, a maximum.",
                working: "x=n",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning: "Substitute.",
                working: "M_n=n^ne^{-n}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Differentiate $f_n'=e^{-x}(nx^{n-1}-x^n)$ with the product rule.",
                working:
                  "f_n''=e^{-x}\\left(-nx^{n-1}+x^n\\right)+e^{-x}\\left(n(n-1)x^{n-2}-nx^{n-1}\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Factor out $x^{n-2}e^{-x}$.",
                working:
                  "f_n''=x^{n-2}e^{-x}\\left(x^2-2nx+n(n-1)\\right)\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Solve the quadratic factor $=0$; discriminant $4n^2-4n(n-1)=4n$.",
                working: "x=\\frac{2n\\pm\\sqrt{4n}}{2}=n\\pm\\sqrt n",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The quadratic factor has distinct roots so it changes sign at each; the other factors are positive, so $f_n''$ changes sign: inflection.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Distance between the roots.",
                working: "(n+\\sqrt n)-(n-\\sqrt n)=2\\sqrt n=6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Solve.",
                working: "n=9",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Form the ratio.",
                working:
                  "\\frac{M_{n+1}}{M_n}=\\frac{(n+1)^{n+1}e^{-(n+1)}}{n^ne^{-n}}=\\frac{(n+1)}{e}\\left(\\frac{n+1}{n}\\right)^n",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Use $\\left(1+\\frac1n\\right)^n\\ge2$ and $n+1\\ge3$.",
                working: "\\ge\\frac{3\\times2}{e}=\\frac6e",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Since $e<4$, $\\frac6e>\\frac64>1$, so $M_{n+1}>M_n$.",
                working: "\\frac6e>1",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a), (b) shown. (c) $n=9$. (d) proved.",
            commonErrors: [
              "Using $e\\approx2$ to show ratio $>1$ (the bound $e<4$ is sufficient only when the ratio is large enough).",
              "Treating $f''=0$ as sufficient for inflection.",
            ],
            examinerNote:
              "Check with $n=2$: $M_2=4e^{-2}\\approx0.541$ and $M_3=27e^{-3}\\approx1.344$; inflection at $2\\pm\\sqrt2$.",
          },
        },
        {
          id: "aahl-u5-higher-optimization-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=x^3-3x$. Which are the $x$-coordinates of the stationary points of $f$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=\\pm1$" },
              { id: "b", text: "$x=0$ and $x=3$" },
              { id: "c", text: "$x=\\pm\\sqrt3$" },
              { id: "d", text: "$x=1$ only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stationary point",
                statement: "$f'(x)=0$.",
              },
            ],
            steps: [
              {
                reasoning: "$f'(x)=3x^2-3=3(x-1)(x+1)$.",
                working: "3x^2-3=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "x=\\pm1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $x=\\pm1$",
            commonErrors: ["Solving $3x^2-3=0$ as $x=\\pm\\sqrt3$."],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the local minimum value of $f(x)=x^3-12x$, justifying your answer.",
          response: {
            type: "numeric",
            parts: [{ label: "Minimum value", answer: -16 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second derivative test",
                statement: "$f'(a)=0$, $f''(a)>0$ gives a local minimum.",
              },
            ],
            steps: [
              {
                reasoning: "Solve $f'(x)=3x^2-12=0$.",
                working: "x=\\pm2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f''(x)=6x$; $f''(2)=12>0$ so $x=2$ is a minimum.",
                working: "f''(2)=12>0",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Evaluate $f(2)$.",
                working: "8-24=-16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-16$",
            commonErrors: [
              "Choosing $x=-2$ (a maximum) as the minimum.",
              "Reporting $x=2$ instead of $f(2)$.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Find the local maximum value of $f(x)=x^3-6x^2+9x+1$.",
          response: {
            type: "numeric",
            parts: [{ label: "Maximum value", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "First derivative test",
                statement:
                  "$f'$ changes from positive to negative at a maximum.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate and factorise.",
                working: "f'(x)=3x^2-12x+9=3(x-1)(x-3)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stationary points at $x=1$ and $x=3$; $f'$ goes $+\\to-$ at $x=1$.",
                working: "x=1\\ \\text{is a maximum}",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Evaluate $f(1)$.",
                working: "1-6+9+1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the value.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$",
            commonErrors: [
              "Reporting the minimum value at $x=3$.",
              "Arithmetic slip in $f(1)$.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Find and classify the stationary points of $f(x)=x^3-3x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second derivative test",
                statement: "$f''(a)>0$ gives a minimum; $f''(a)<0$ a maximum.",
              },
            ],
            steps: [
              {
                reasoning: "Solve $f'(x)=3x^2-3=0$.",
                working: "x=\\pm1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute $f''(x)=6x$.",
                working: "f''(x)=6x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Classify: $f''(-1)=-6<0$ maximum; $f''(1)=6>0$ minimum.",
                working: "(-1,2)\\ \\text{max},\\ (1,-2)\\ \\text{min}",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Evaluate the function values.",
                working: "f(-1)=2,\\ f(1)=-2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maximum at $(-1,2)$; minimum at $(1,-2)$",
            commonErrors: [
              "Swapping the classification.",
              "Reporting only the $x$-coordinates.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the maximum value of $f(x)=xe^{-x}$ for $x\\ge0$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Maximum value", answer: 0.368, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$(uv)'=u'v+uv'$",
              },
              {
                kind: "principle",
                name: "First derivative test",
                statement:
                  "$f'$ changes from positive to negative at a maximum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f'(x)=e^{-x}-xe^{-x}=e^{-x}(1-x)$; since $e^{-x}>0$, $f'=0$ at $x=1$.",
                working: "x=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f'>0$ for $x<1$ and $f'<0$ for $x>1$: a maximum.",
                working: "f'(1)=0,\\ f''(1)<0",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Evaluate $f(1)=e^{-1}$.",
                working: "\\frac1e\\approx0.368",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac1e\\approx0.368$",
            commonErrors: [
              "Differentiating $e^{-x}$ as $e^{-x}$ (missing the minus sign).",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about points of inflection is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$f''(a)=0$ is necessary but not sufficient: $f''$ must change sign at $a$.",
              },
              {
                id: "b",
                text: "$f''(a)=0$ always gives a point of inflection.",
              },
              { id: "c", text: "A point of inflection requires $f'(a)=0$." },
              {
                id: "d",
                text: "$f''(a)=0$ and $f'''(a)=0$ are both required.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflection",
                statement: "$f''(a)=0$ and $f''$ changes sign at $a$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x^4$ has $f''(0)=0$ but a minimum at $0$, so $f''=0$ alone is not sufficient.",
                working: "f(x)=x^4\\ \\text{counterexample}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only option (a) states the correct condition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: [
              "Believing $f''(a)=0$ is sufficient for inflection.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Show that $f(x)=x^4$ has a local minimum at $x=0$ even though $f''(0)=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "First derivative test",
                statement:
                  "$f'$ changes from negative to positive at a minimum.",
              },
              {
                kind: "principle",
                name: "Second derivative test inconclusive",
                statement:
                  "$f''(a)=0$ does not decide the nature of the stationary point.",
              },
            ],
            steps: [
              {
                reasoning: "Compute the derivatives.",
                working: "f'(x)=4x^3,\\quad f''(x)=12x^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Note $f'(0)=0$ and $f''(0)=0$, so the second derivative test is inconclusive.",
                working: "f''(0)=0",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "For $x<0$, $f'(x)=4x^3<0$; for $x>0$, $f'(x)>0$.",
                working: "f'<0\\ \\text{then}\\ f'>0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f'$ changes from negative to positive at $x=0$.",
                working: "\\text{sign change }-\\to+",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Conclude.",
                working: "x=0\\ \\text{is a local minimum}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: local minimum at $x=0$",
            commonErrors: [
              "Claiming $f''(0)=0$ means no extremum.",
              "Not checking the sign of $f'$ on both sides.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the $x$-coordinate of the point of inflection of $f(x)=x^3-3x^2$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 1 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflection",
                statement: "$f''(a)=0$ with a sign change of $f''$.",
              },
            ],
            steps: [
              {
                reasoning: "$f'(x)=3x^2-6x$, $f''(x)=6x-6$.",
                working: "f''(x)=6x-6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve $f''(x)=0$.",
                working: "x=1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "$f''$ changes from negative to positive at $x=1$, confirming inflection.",
                working:
                  "f''<0\\ \\text{for}\\ x<1,\\ f''>0\\ \\text{for}\\ x>1",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$x=1$",
            commonErrors: [
              "Reporting the stationary points instead of the inflection.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Let $f(x)=x^3-3x^2-9x+5$.",
          parts: [
            { label: "a", prompt: "Find $f'(x)$ and factorise it.", marks: 2 },
            {
              label: "b",
              prompt: "Find the $x$-coordinates of the stationary points.",
              marks: 1,
            },
            { label: "c", prompt: "Classify each stationary point.", marks: 3 },
            {
              label: "d",
              prompt: "Find the local maximum value of $f$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second derivative test",
                statement: "$f''>0$ minimum, $f''<0$ maximum.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Differentiate.",
                working: "f'(x)=3x^2-6x-9",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Factorise.",
                working: "f'(x)=3(x-3)(x+1)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Solve $f'(x)=0$.",
                working: "x=-1\\ \\text{and}\\ x=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Compute $f''(x)=6x-6$.",
                working: "f''(x)=6x-6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Classify $x=-1$: $f''(-1)=-12<0$, maximum.",
                working: "(-1,\\ 10)\\ \\text{local max}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Classify $x=3$: $f''(3)=12>0$, minimum.",
                working: "(3,\\ -22)\\ \\text{local min}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Evaluate $f(-1)$.",
                working: "f(-1)=-1-3+9+5=10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State the maximum value.",
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $3(x-3)(x+1)$. (b) $x=-1,3$. (c) max at $(-1,10)$, min at $(3,-22)$. (d) $10$.",
            commonErrors: [
              "Classifying $x=-1$ as a minimum.",
              "Arithmetic error in $f(3)$: $27-27-27+5=-22$.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Find the greatest value of $f(x)=x+\\dfrac{4}{x}$ on the interval $1\\le x\\le4$.",
          response: {
            type: "numeric",
            parts: [{ label: "Greatest value", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global optimisation",
                statement:
                  "Compare stationary values with endpoint values on a closed interval.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate.",
                working: "f'(x)=1-\\frac{4}{x^2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve $f'(x)=0$ for $x>0$.",
                working: "x=2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Evaluate at stationary point and endpoints: $f(2)=4$, $f(1)=5$, $f(4)=5$.",
                working: "f(1)=5,\\ f(2)=4,\\ f(4)=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The greatest value is $5$.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$",
            commonErrors: [
              "Reporting the minimum value $4$ at $x=2$.",
              "Ignoring the endpoints.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Show that $f(x)=x^3-12x$ has a local maximum value of $16$ at $x=-2$ and a local minimum value of $-16$ at $x=2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second derivative test",
                statement: "$f''(a)<0$ maximum, $f''(a)>0$ minimum.",
              },
            ],
            steps: [
              {
                reasoning: "$f'(x)=3x^2-12=0$ gives $x=\\pm2$.",
                working: "x=\\pm2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$f''(x)=6x$: $f''(-2)=-12<0$ so $x=-2$ is a maximum.",
                working: "f''(-2)=-12<0",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Evaluate $f(-2)=16$; $f''(2)=12>0$ so $x=2$ is a minimum with $f(2)=-16$.",
                working: "f(-2)=16,\\ f(2)=-16",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State both conclusions.",
                working:
                  "\\text{max }16\\ \\text{at}\\ x=-2;\\ \\text{min}\\ -16\\ \\text{at}\\ x=2\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown",
            commonErrors: [
              "Swapping max and min values.",
              "Computing $f(-2)$ as $-16$.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "For each integer $n\\ge2$, define $f_n(x)=x^n-nx$.",
          parts: [
            {
              label: "a",
              prompt: "Show that $f_n'(x)=n(x^{n-1}-1)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "For even $n$, find the $x$-coordinates of the stationary points of $f_n$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Classify the stationary point at $x=1$ for even $n$, and find the minimum value $m_n$ of $f_n$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find the value of $n$ for which $m_n=-7$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Power rule",
                statement: "$\\frac{d}{dx}x^n=nx^{n-1}$",
              },
              {
                kind: "principle",
                name: "Second derivative test",
                statement: "$f''(a)>0$ gives a minimum.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Differentiate term by term.",
                working: "f_n'(x)=nx^{n-1}-n=n(x^{n-1}-1)\\quad\\text{(AG)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the factorised form.",
                working: "n(x^{n-1}-1)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Solve $x^{n-1}=1$; since $n-1$ is odd, $x=1$ is the only real solution ($x=-1$ gives $(-1)^{n-1}=-1\\ne1$).",
                working: "x=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Conclude that $x=1$ is the only stationary point for even $n$.",
                working: "x=1",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "$f_n''(x)=n(n-1)x^{n-2}$; at $x=1$, $f_n''(1)=n(n-1)>0$: minimum.",
                working: "f_n''(1)=n(n-1)>0",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Evaluate $f_n(1)=1-n$, so $m_n=1-n$.",
                working: "m_n=1-n",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Set $1-n=-7$.",
                working: "n=8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Verify $n=8$ is even and $\\ge2$.",
                working: "n=8\\ \\text{valid}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $x=1$. (c) minimum, $m_n=1-n$. (d) $n=8$.",
            commonErrors: [
              "Claiming $x=-1$ is also stationary for even $n$.",
              "Writing $m_n=n-1$ instead of $1-n$.",
            ],
          },
        },
        {
          id: "aahl-u5-higher-optimization-q17",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Find the maximum value of $f(x)=x^2e^{-x}$ for $x>0$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Maximum value", answer: 0.541, tolerance: 0.0005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product and chain rules",
                statement: "$\\frac{d}{dx}e^{-x}=-e^{-x}$",
              },
              {
                kind: "principle",
                name: "First derivative test",
                statement:
                  "$f'$ changes from positive to negative at a maximum.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate.",
                working: "f'(x)=2xe^{-x}-x^2e^{-x}=xe^{-x}(2-x)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For $x>0$, $f'=0$ only at $x=2$; $f'>0$ before and $f'<0$ after.",
                working: "x=2\\ \\text{maximum}",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Evaluate $f(2)=4e^{-2}$.",
                working: "4e^{-2}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Give the decimal.",
                working: "\\approx0.541",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4e^{-2}\\approx0.541$",
            commonErrors: [
              "Differentiating $e^{-x}$ as $e^{-x}$ (missing the minus sign).",
              "Reporting $f'(2)$ instead of $f(2)$.",
            ],
          },
        },
      ],
    },
  ],
};
