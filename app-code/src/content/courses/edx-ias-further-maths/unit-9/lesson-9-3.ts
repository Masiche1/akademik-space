import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "edxifm-u9-lesson-9-3",
  code: "9-3",
  title: "Poisson Tests and t-Tests",
  goal: "I CAN test hypotheses about Poisson rates and population means using t-tests.",
  standards: ["WST03 S3", "Further hypothesis tests"],
  vocabulary: [
    {
      term: "t-test",
      definition:
        "Test for a population mean when variance unknown; statistic $t=\\frac{\\bar x-\\mu_0}{s/\\sqrt n}\\sim t_{n-1}$.",
    },
    {
      term: "Poisson rate test",
      definition:
        "Hypothesis test on event rate $\\lambda$ using Poisson counts.",
    },
    {
      term: "t-test",
      definition:
        "Test for a population mean when variance unknown; statistic $t=\\frac{\\bar x-\\mu_0}{s/\\sqrt n}\\sim t_{n-1}$.",
    },
  ],
  concepts: [
    {
      id: "edxifm-u9-poisson-test",
      title: "Poisson Hypothesis Tests",
      skill:
        "Test hypotheses about Poisson rates using critical regions and p-values.",
      lesson: {
        sections: [
          {
            heading: "Testing a rate",
            body: "$H_0:\\lambda=\\lambda_0$ vs $H_1:\\lambda>\\lambda_0$ (or $<$, or $\\ne$). Observed count $X\\sim\\text{Po}(\\lambda_0)$ under $H_0$ (scaled for time/space). Compute p-value $P(X\\ge x_{\\text{obs}})$ etc.",
          },
          {
            heading: "Critical regions",
            body: "Find smallest $c$ with $P(X\\ge c)<\\alpha$ for upper-tail. Discrete distribution → actual significance may differ from nominal.",
          },
          {
            heading: "Two-sample comparison",
            body: "Compare rates from two Poisson samples via difference in means or chi-squared on counts — S3 extends S2 hypothesis testing to Poisson contexts.",
          },
        ],
        keyFormulas: [
          {
            name: "P-value",
            statement: "$p=P(X\\ge x_{\\text{obs}}\\mid H_0)$",
          },
        ],
        workedExample: {
          problem:
            "Claim mean rate $\\lambda=3$/hour; observed 8 in an hour. Test $H_1:\\lambda>3$ at $5\\%$.",
          solution:
            "$P(X\\ge8\\mid\\lambda=3)=1-P(X\\le7)\\approx1-0.988=0.012<0.05$ — reject $H_0$.",
        },
      },
      questions: [
        {
          id: "edxifm-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under $H_0:\\lambda=\\lambda_0$, the test statistic follows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poisson distribution" },
              { id: "b", text: "Normal only" },
              { id: "c", text: "Binomial only" },
              { id: "d", text: "Uniform" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Poisson test",
                statement: "Count $\\sim$ Poisson under $H_0$.",
              },
            ],
            steps: [{ reasoning: "Definition.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Poisson",
          },
        },
        {
          id: "edxifm-pt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $X\\sim\\text{Po}(3)$, find $P(X\\ge6)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tail probability",
                statement: "$1-P(X\\le5)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(X\\le5)\\approx0.916$; $P(X\\ge6)\\approx0.084$.",
                working: "0.084",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State value.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.084$",
            commonErrors: ["Wrong tail."],
          },
        },
        {
          id: "edxifm-pt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A machine averages $2$ breakdowns/week. After maintenance, $5$ breakdowns occur in a week. Test $H_1:\\lambda>2$ at $5\\%$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Poisson test",
                statement: "$X\\sim\\text{Po}(2)$ under $H_0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(X\\ge5)=1-P(X\\le4)=1-0.947=0.053>0.05$? Compute: $P(X\\le4)$ for Po(2) $=0.947$; tail $=0.053$.",
                working: "0.053",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Since $0.053>0.05$, just fails to reject at 5% (borderline).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State decision.", marks: 1, markCode: "A" },
              {
                reasoning: "Conclude: not significant at 5%.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Do not reject $H_0$ ($p\\approx0.053$)",
            commonErrors: ["Tail direction; boundary comparison."],
          },
        },
        {
          id: "edxifm-pt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A call centre claims mean $4$ calls/hour. Over $10$ hours, $52$ calls received. Test $H_0:\\lambda=4$ vs $H_1:\\lambda>4$ at $5\\%$.",
          parts: [
            {
              label: "a",
              prompt: "State the distribution of total calls under $H_0$.",
              marks: 2,
            },
            { label: "b", prompt: "Calculate the p-value.", marks: 4 },
            { label: "c", prompt: "State conclusion and interpret.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Poisson rate test",
                statement:
                  "Sum of Poissons is Poisson: total $\\sim\\text{Po}(40)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Total calls $T\\sim\\text{Po}(4\\times10)=\\text{Po}(40)$ under $H_0$.",
                working: "Po(40)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State distribution.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Observed $52$; p-value $=P(T\\ge52)$ with $T\\sim N(40,40)$ approx: $Z=\\frac{51.5-40}{\\sqrt{40}}=\\frac{11.5}{6.32}=1.82$; $P(Z>1.82)=0.034$.",
                working: "0.034",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State p-value $\\approx0.034$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Note normal approx acceptable for $\\lambda=40$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Or exact Poisson tables.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$0.034<0.05$ — reject $H_0$.",
                working: "reject",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State decision.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Conclusion: evidence rate exceeds $4$/hour.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "(a) $\\text{Po}(40)$ (b) $p\\approx0.034$ (c) reject $H_0$: rate $>4$/hr",
            commonErrors: ["Not scaling $\\lambda$; normal approx setup."],
          },
        },
      ],
    },
    {
      id: "edxifm-u9-ttest",
      title: "t-test for a population mean",
      skill:
        "Test $\\mu=\\mu_0$ when population variance is unknown using the t-distribution.",
      lesson: {
        sections: [
          {
            heading: "The test statistic",
            body: "With unknown $\\sigma$, use $t=\\frac{\\bar x-\\mu_0}{s/\\sqrt n}$ with $n-1$ degrees of freedom. For large $n>30$ the normal approximation is acceptable.",
          },
          {
            heading: "Critical values",
            body: "Compare $|t|$ with the $n-1$ critical value for the chosen tails and significance level. Reject $H_0$ if the statistic lies beyond the critical value.",
          },
          {
            heading: "Paired vs independent",
            body: "Paired data (before/after) use differences in a one-sample t-test on $\\bar d$. Independent samples require a two-sample t-test.",
          },
        ],
        keyFormulas: [
          {
            name: "t statistic",
            statement: "$t=\\frac{\\bar x-\\mu_0}{s/\\sqrt n}$, df $=n-1$",
          },
        ],
        workedExample: {
          problem:
            "Sample $n=10$, $\\bar x=52$, $s=5$. Test $\\mu=50$ two-tailed at $5\\%$.",
          solution:
            "$t=\\frac{52-50}{5/\\sqrt{10}}=\\frac{2}{1.581}=1.26$; critical value $t_{9,0.025}=2.26$; $1.26<2.26$ — do not reject $H_0$.",
        },
      },
      questions: [
        {
          id: "edxifm-tt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A one-sample t-test uses how many degrees of freedom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n-1$" },
              { id: "b", text: "$n$" },
              { id: "c", text: "$n-2$" },
              { id: "d", text: "$n+1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "df",
                statement: "One-sample t-test has $n-1$ degrees of freedom.",
              },
            ],
            steps: [{ reasoning: "Standard result.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $n-1$",
          },
        },
        {
          id: "edxifm-tt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sample $n=16$, $\\bar x=20$, $s=4$. Compute the t statistic for $\\mu_0=18$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "t stat",
                statement:
                  "$t=\\frac{\\bar x-\\mu_0}{s/\\sqrt n}$ with $n-1$ df.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$t=\\frac{20-18}{4/\\sqrt{16}}=\\frac{2}{1}=2$ with $15$ df.",
                working: "t=2, df=15",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State $t=2$.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t=2$, $15$ df",
            commonErrors: [
              "Using $n$ instead of $\\sqrt n$ in the denominator.",
            ],
          },
        },
        {
          id: "edxifm-tt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Data: $n=25$, $\\bar x=10.5$, $s=2$. Test $\\mu=10$ vs $\\mu>10$ at $5\\%$ one-tailed (critical $t_{24}=1.71$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "t-test",
                statement:
                  "One-tailed comparison of $|t|$ with the critical value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$t=\\frac{10.5-10}{2/\\sqrt{25}}=\\frac{0.5}{0.4}=1.25$.",
                working: "t=1.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1.25<1.71$ — do not reject $H_0$.",
                working: "no reject",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State decision.", marks: 1, markCode: "A" },
              {
                reasoning: "Conclude: insufficient evidence that $\\mu>10$.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Do not reject $H_0$",
            commonErrors: ["One-tailed vs two-tailed critical value."],
          },
        },
        {
          id: "edxifm-tt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A manufacturer claims mean fill $500$ ml, SD unknown. A sample of $n=20$ gives $\\bar x=498$, $s=4$.",
          parts: [
            {
              label: "a",
              prompt: "Compute the t statistic for $\\mu_0=500$ vs $\\mu<500$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "State the critical region at $5\\%$ one-tailed (critical $t_{19}=1.73$).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Conclude whether the claim is suspect.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "t-test",
                statement: "One-tailed lower test on the mean.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$t=\\frac{498-500}{4/\\sqrt{20}}=\\frac{-2}{0.894}=-2.24$.",
                working: "t=-2.24",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State $t\\approx-2.24$ with $19$ df.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "State value.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Reject if $t<-1.73$ (lower tail).",
                working: "t<-1.73",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State region.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Since $-2.24<-1.73$, the statistic is in the critical region.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Reject $H_0$ — evidence the mean is below $500$ ml.",
                working: "reject",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State decision.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Interpret: underfilling is suspected.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "(a) $t=-2.24$ (b) reject if $t<-1.73$ (c) reject $H_0$: underfilling",
            commonErrors: ["Sign direction; critical value side."],
          },
        },
      ],
    },
  ],
};
