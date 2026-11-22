import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "aahl-u4-lesson-4-3",
  code: "4-3",
  title: "Distributions in Depth",
  goal: "I CAN combine normal and binomial models in multi-stage problems and investigate a family of probability density functions.",
  standards: ["SL 4.8", "SL 4.9", "AHL 4.14"],
  vocabulary: [
    {
      term: "Binomial distribution",
      definition:
        "$X \\sim \\mathrm{B}(n,p)$ counts successes in $n$ independent trials with constant success probability $p$; $\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$.",
    },
    {
      term: "Normal distribution",
      definition:
        "$X \\sim \\mathrm{N}(\\mu,\\sigma^2)$ is a symmetric bell-shaped continuous distribution with mean $\\mu$ and variance $\\sigma^2$.",
    },
    {
      term: "Standardization",
      definition:
        "The transformation $Z=\\frac{X-\\mu}{\\sigma}$, which gives $Z \\sim \\mathrm{N}(0,1)$.",
    },
    {
      term: "Inverse normal",
      definition:
        "Finding the value $x$ for which $\\mathrm{P}(X<x)$ equals a given probability.",
    },
    {
      term: "Family of pdfs",
      definition:
        "A collection of density functions sharing a form but depending on one or more parameters.",
    },
    {
      term: "Scale invariance",
      definition:
        "A property of a result that does not change when the variable is rescaled, e.g. a probability that does not depend on a parameter.",
    },
  ],
  concepts: [
    {
      id: "aahl-u4-multistage",
      title: "Multi-stage binomial and normal problems",
      skill:
        "Use a normal model to find a success probability, then use it in a binomial model.",
      lesson: {
        sections: [
          {
            heading: "Chaining the models",
            body: "Many problems first use a normal distribution to find the probability $p$ that one item meets a condition. If $n$ independent items are then examined, the number meeting the condition is $\\mathrm{B}(n,p)$. Keep $p$ unrounded (or to at least 4 significant figures) between stages.",
          },
          {
            heading: "Inverse problems",
            body: "When a probability is given and a parameter is unknown, standardize: $\\mathrm{P}(X<x)=q$ means $\\frac{x-\\mu}{\\sigma}=z_q$ where $\\Phi(z_q)=q$. For `at least one' in $n$ trials use $1-(1-p)^n$, and solve inequalities in $n$ by taking logarithms, remembering that dividing by a negative number reverses the inequality.",
          },
        ],
        keyFormulas: [
          {
            name: "Standardization",
            statement: "$Z=\\dfrac{X-\\mu}{\\sigma}\\sim \\mathrm{N}(0,1)$",
          },
          {
            name: "At least one success",
            statement: "$\\mathrm{P}(X\\ge1)=1-(1-p)^n$",
          },
        ],
        workedExample: {
          problem:
            "$X\\sim \\mathrm{N}(40,\\sigma^2)$ with $\\mathrm{P}(X>45)=0.15$. Find $\\mathrm{P}(35<X<45)$.",
          solution:
            "The distribution is symmetric about $40$ and $35$ and $45$ are both $5$ from the mean, so $\\mathrm{P}(X<35)=0.15$. Hence $\\mathrm{P}(35<X<45)=1-0.15-0.15=0.7$.",
        },
      },
      questions: [
        {
          id: "aahl-u4-multistage-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X\\sim \\mathrm{N}(40,\\sigma^2)$ and $\\mathrm{P}(X>45)=0.15$. Find $\\mathrm{P}(35<X<45)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.3$" },
              { id: "b", text: "$0.85$" },
              { id: "c", text: "$0.7$" },
              { id: "d", text: "$0.35$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Symmetry of the normal curve",
                statement: "$\\mathrm{P}(X<\\mu-d)=\\mathrm{P}(X>\\mu+d)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Since $35=40-5$ and $45=40+5$, the lower tail equals the upper tail.",
                working: "\\mathrm{P}(X<35)=\\mathrm{P}(X>45)=0.15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract both tails from the total probability.",
                working: "1-0.15-0.15=0.7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.7$",
            commonErrors: [
              "Subtracting only one tail, giving $0.85$.",
              "Giving the combined tail probability $0.3$.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The random variable $X\\sim \\mathrm{B}(10,0.3)$. Find $\\mathrm{P}(X\\ge2)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\mathrm{P}(X\\ge2)$",
                answer: 0.851,
                tolerance: 0.0005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Complementary events",
                statement: "$\\mathrm{P}(X\\ge2)=1-\\mathrm{P}(X\\le1)$",
              },
              {
                kind: "formula",
                name: "Binomial probability",
                statement: "$\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$",
              },
            ],
            steps: [
              {
                reasoning: "Use the complement.",
                working:
                  "\\mathrm{P}(X\\ge2)=1-\\mathrm{P}(X=0)-\\mathrm{P}(X=1)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the two probabilities.",
                working: "0.7^{10}+10(0.3)(0.7)^9\\approx0.02825+0.12106",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Subtract from 1.",
                working: "1-0.14931\\approx0.851",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.851$",
            commonErrors: [
              "Using $1-\\mathrm{P}(X\\le 2)$ (off-by-one on the complement).",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The masses of eggs are normally distributed with mean $60$ g and standard deviation $4$ g. An egg is classified as large if its mass exceeds $65$ g. A box contains 12 eggs chosen at random. Find the probability that a box contains at least 2 large eggs. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.367, tolerance: 0.002 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardization",
                statement: "$Z=\\frac{X-\\mu}{\\sigma}$",
              },
              {
                kind: "formula",
                name: "Binomial model",
                statement: "Number of large eggs $Y\\sim \\mathrm{B}(12,p)$",
              },
            ],
            steps: [
              {
                reasoning: "Find the probability that one egg is large.",
                working:
                  "p=\\mathrm{P}(X>65)=\\mathrm{P}(Z>1.25)\\approx0.10565",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Model the number of large eggs in a box.",
                working: "Y\\sim \\mathrm{B}(12,\\,0.10565)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use the complement of 0 or 1 large eggs.",
                working: "\\mathrm{P}(Y\\ge2)=1-\\mathrm{P}(Y\\le1)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "1-(0.26187+0.37123)\\approx0.367",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.367$",
            commonErrors: [
              "Rounding $p$ to $0.11$ early.",
              "Computing $\\mathrm{P}(Y>2)$ instead of $\\mathrm{P}(Y\\ge2)$.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "The mass $M$ grams of a packet of rice is normally distributed with mean $500$ and standard deviation $\\sigma$. It is known that $\\mathrm{P}(M<490)=0.1$. Packets are sold in boxes of 10, and packets in a box are independent. A packet is underweight if its mass is less than $490$ g.",
          parts: [
            {
              label: "a",
              prompt: "Find the value of $\\sigma$, to 3 significant figures.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Find the probability that a box contains exactly 2 underweight packets, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the probability that a box contains at least one underweight packet, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A shop buys $n$ packets. Find the smallest value of $n$ for which the probability of at least one underweight packet exceeds $0.95$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\sigma$", answer: 7.8, tolerance: 0.005 },
              { label: "(b) probability", answer: 0.194, tolerance: 0.0005 },
              { label: "(c) probability", answer: 0.651, tolerance: 0.0005 },
              { label: "(d) smallest $n$", answer: 29 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardization",
                statement:
                  "$\\mathrm{P}(M<490)=\\mathrm{P}\\left(Z<\\frac{490-500}{\\sigma}\\right)$",
              },
              {
                kind: "formula",
                name: "Binomial probability",
                statement:
                  "$Y\\sim \\mathrm{B}(10,0.1)$, $\\mathrm{P}(Y=r)=\\binom{10}{r}0.1^r0.9^{10-r}$",
              },
              {
                kind: "property",
                name: "Logarithms and inequalities",
                statement: "Dividing by $\\ln0.9<0$ reverses an inequality.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Use the inverse normal: the $z$-value with lower tail $0.1$.",
                working: "\\frac{490-500}{\\sigma}=-1.2816",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Rearrange.",
                working: "\\sigma=\\frac{10}{1.2816}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "\\sigma\\approx7.80",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The number of underweight packets is $Y\\sim \\mathrm{B}(10,0.1)$.",
                working: "\\mathrm{P}(Y=2)=\\binom{10}{2}(0.1)^2(0.9)^8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "45(0.01)(0.43047)\\approx0.194",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Use the complement.",
                working: "1-0.9^{10}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "1-0.34868\\approx0.651",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Write the inequality.",
                working: "1-0.9^n>0.95\\iff0.9^n<0.05",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Take logarithms; divide by $\\ln0.9<0$ and reverse the inequality.",
                working: "n>\\frac{\\ln0.05}{\\ln0.9}\\approx28.43",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$n$ is an integer.",
                working: "n=29",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $7.80$. (b) $0.194$. (c) $0.651$. (d) $n=29$.",
            commonErrors: [
              "Using $z=+1.2816$, giving a negative $\\sigma$.",
              "Forgetting to reverse the inequality in (d), giving $n<28.4$.",
            ],
            examinerNote:
              "Check: $0.9^{28}\\approx0.0523>0.05$ and $0.9^{29}\\approx0.0471<0.05$.",
          },
        },
        {
          id: "aahl-u4-multistage-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X\\sim \\mathrm{N}(50,16)$. Find $\\mathrm{P}(X<46)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.0228$" },
              { id: "b", text: "$0.8413$" },
              { id: "c", text: "$0.1587$" },
              { id: "d", text: "$0.5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardization",
                statement:
                  "$z=\\frac{x-\\mu}{\\sigma}$ with $\\sigma=\\sqrt{16}=4$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$z=\\frac{46-50}{4}=-1$ and $\\mathrm{P}(Z<-1)=0.1587$.",
                working: "z=-1 \\Rightarrow 0.1587",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.1587$",
            commonErrors: [
              "Using $\\sigma=16$ instead of $\\sigma=4$.",
              "Reading $\\mathrm{P}(Z>-1)=0.8413$ (the wrong tail).",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X\\sim \\mathrm{B}(8,0.25)$. Find $\\mathrm{P}(X=0)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.900$" },
              { id: "b", text: "$0.750$" },
              { id: "c", text: "$0.100$" },
              { id: "d", text: "$0.250$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Binomial probability",
                statement: "$\\mathrm{P}(X=0)=(1-p)^n$",
              },
            ],
            steps: [
              {
                reasoning: "No successes in 8 trials: $0.75^8\\approx0.1001$.",
                working: "0.75^8\\approx0.100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.100$",
            commonErrors: [
              "Using $p^n=0.25^8$ (probability of all successes).",
              "Computing $8(0.25)(0.75)^7$, which is $\\mathrm{P}(X=1)$.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "The random variable $X\\sim \\mathrm{B}(20,0.1)$. Find $\\mathrm{P}(X\\le1)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\mathrm{P}(X\\le1)$",
                answer: 0.392,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Binomial probability",
                statement: "$\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$",
              },
            ],
            steps: [
              {
                reasoning: "Sum the $r=0$ and $r=1$ terms.",
                working: "\\mathrm{P}(X\\le1)=0.9^{20}+20(0.1)(0.9)^{19}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate each term.",
                working: "0.12158+0.27017",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add.",
                working: "\\approx0.392",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.392$",
            commonErrors: [
              "Using $1-\\mathrm{P}(X\\ge2)$ and forgetting it includes $r=0,1$ only — same thing, but check the complement direction.",
              "Using $\\mathrm{P}(X<1)=\\mathrm{P}(X=0)$ only.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The lengths of steel rods are normally distributed with mean $120$ cm and standard deviation $3$ cm. A rod is defective if its length exceeds $126$ cm. Ten rods are chosen at random. Find the probability that at least one rod is defective. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.206, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardization",
                statement: "$p=\\mathrm{P}(X>126)=\\mathrm{P}(Z>2)$",
              },
              {
                kind: "formula",
                name: "Binomial model",
                statement: "Number of defective rods $Y\\sim\\mathrm{B}(10,p)$",
              },
            ],
            steps: [
              {
                reasoning: "Standardise the defect threshold.",
                working: "z=\\frac{126-120}{3}=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Read the tail probability.",
                working: "p=\\mathrm{P}(Z>2)\\approx0.0228",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Use the complement for at least one defective rod.",
                working: "\\mathrm{P}(Y\\ge1)=1-(1-0.0228)^{10}=1-0.9772^{10}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "1-0.9772^{10}\\approx0.206",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.206$",
            commonErrors: [
              "Computing $\\mathrm{P}(Y>1)$ instead of $\\mathrm{P}(Y\\ge1)$.",
              "Rounding $p$ to $0.02$ before raising to the 10th power.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X\\sim \\mathrm{N}(\\mu,\\sigma^2)$ satisfies $\\mathrm{P}(X<30)=0.5$. What is the value of $\\mu$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25$" },
              { id: "b", text: "$30$" },
              { id: "c", text: "It cannot be determined" },
              { id: "d", text: "$35$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Symmetry of the normal distribution",
                statement:
                  "The mean equals the median, so $\\mathrm{P}(X<\\mu)=0.5$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A cumulative probability of $0.5$ occurs at the mean.",
                working: "\\mu=30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\mu=30$",
            commonErrors: [
              "Thinking $\\sigma$ is needed — it cancels because the probability is 0.5.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The masses $X$ grams of bags of flour are normally distributed with mean $50$ and unknown standard deviation $\\sigma$. It is known that $\\mathrm{P}(X>55)=0.1$. Bags are packed in boxes of 20, and the masses of different bags are independent. A bag is underweight if its mass is less than $45$ g.",
          parts: [
            {
              label: "a",
              prompt:
                "Find $\\sigma$, giving your answer to 3 significant figures.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Find the probability $p$ that a single bag is underweight.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Find the probability that a box contains at least 3 underweight bags, giving your answer to 3 significant figures.",
              marks: 4,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\sigma$", answer: 7.8, tolerance: 0.005 },
              { label: "(b) $p$", answer: 0.1 },
              { label: "(c) probability", answer: 0.323, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardization",
                statement:
                  "$\\frac{55-50}{\\sigma}=z$ where $\\mathrm{P}(Z>z)=0.1$",
              },
              {
                kind: "formula",
                name: "Binomial model",
                statement:
                  "Number of underweight bags $Y\\sim\\mathrm{B}(20,p)$",
              },
              {
                kind: "property",
                name: "Complementary events",
                statement: "$\\mathrm{P}(Y\\ge3)=1-\\mathrm{P}(Y\\le2)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The $z$-value with upper tail $0.1$ is $1.2816$.",
                working: "\\frac{5}{\\sigma}=1.2816",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Rearrange.",
                working: "\\sigma=\\frac{5}{1.2816}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "\\sigma\\approx3.90",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "By symmetry about 50, $45$ and $55$ are equidistant, so $p=0.1$.",
                working: "p=0.1",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Model the count: $Y\\sim\\mathrm{B}(20,0.1)$ and use the complement.",
                working: "\\mathrm{P}(Y\\ge3)=1-\\mathrm{P}(Y\\le2)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Compute $\\mathrm{P}(Y=0),\\mathrm{P}(Y=1),\\mathrm{P}(Y=2)$.",
                working:
                  "0.9^{20}+20(0.1)(0.9)^{19}+\\binom{20}{2}(0.1)^2(0.9)^{18}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evaluate the sum: $0.12158+0.27017+0.28518=0.67693$.",
                working: "\\mathrm{P}(Y\\le2)\\approx0.677",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Subtract from 1.",
                working: "1-0.677\\approx0.323",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $\\sigma\\approx3.90$. (b) $p=0.1$. (c) $0.323$.",
            commonErrors: [
              "In (a), using $z=-1.2816$ and getting a negative $\\sigma$.",
              "In (c), computing $\\mathrm{P}(Y>3)$ instead of $\\mathrm{P}(Y\\ge3)$.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A biased coin has probability $p=0.08$ of landing heads on each toss, and tosses are independent. Find the smallest number of tosses $n$ required so that the probability of at least one head exceeds $0.9$.",
          response: {
            type: "numeric",
            parts: [{ label: "smallest $n$", answer: 28 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "At least one success",
                statement: "$\\mathrm{P}(X\\ge1)=1-(1-p)^n$",
              },
              {
                kind: "property",
                name: "Logarithms and inequalities",
                statement: "Dividing by $\\ln0.92<0$ reverses the inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Write the inequality.",
                working: "1-0.92^n>0.9\\iff0.92^n<0.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Take logarithms and divide by the negative $\\ln0.92$.",
                working:
                  "n>\\frac{\\ln0.1}{\\ln0.92}=\\frac{-2.3026}{-0.08338}\\approx27.6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Round up to the next integer.",
                working: "n=28",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Check: $0.92^{27}\\approx0.105>0.1$ and $0.92^{28}\\approx0.097<0.1$.",
                working: "\\text{verified}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$n=28$",
            commonErrors: [
              "Forgetting to reverse the inequality when dividing by $\\ln0.92<0$.",
              "Rounding 27.6 down to 27.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "The random variable $X\\sim \\mathrm{N}(\\mu,\\sigma^2)$ satisfies $\\mathrm{P}(X<35)=0.1587$ and $\\mathrm{P}(X>55)=0.1587$.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the two standardised equations involving $\\mu$ and $\\sigma$.",
              marks: 2,
            },
            { label: "b", prompt: "Find $\\mu$ and $\\sigma$.", marks: 3 },
            {
              label: "c",
              prompt:
                "Find $\\mathrm{P}(40<X<50)$, giving your answer to 3 significant figures.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Write down the value of $\\mathrm{P}(X>\\mu+\\sigma)$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $\\mu$", answer: 45 },
              { label: "(b) $\\sigma$", answer: 10 },
              { label: "(c) probability", answer: 0.383, tolerance: 0.001 },
              { label: "(d) probability", answer: 0.1587 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardization",
                statement:
                  "$z=\\frac{x-\\mu}{\\sigma}$ converts each probability to a standard normal statement.",
              },
              {
                kind: "property",
                name: "Symmetry of the standard normal",
                statement: "$\\mathrm{P}(Z<-1)=\\mathrm{P}(Z>1)=0.1587$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\mathrm{P}(X<35)=0.1587$ corresponds to $z=-1$.",
                working: "\\frac{35-\\mu}{\\sigma}=-1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\mathrm{P}(X>55)=0.1587$ corresponds to $z=1$.",
                working: "\\frac{55-\\mu}{\\sigma}=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Subtract the first equation from the second to eliminate $\\mu$.",
                working: "\\frac{20}{\\sigma}=2\\Rightarrow\\sigma=10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Back-substitute: $35-\\mu=-10$.",
                working: "\\mu=45",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State both values.",
                working: "\\mu=45,\\ \\sigma=10",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Standardise the bounds: $z=\\frac{40-45}{10}=-0.5$ and $z=\\frac{50-45}{10}=0.5$.",
                working: "z=-0.5\\ \\text{and}\\ z=0.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$\\mathrm{P}(-0.5<Z<0.5)=\\mathrm{P}(Z<0.5)-\\mathrm{P}(Z<-0.5)=0.6915-0.3085$.",
                working: "0.6915-0.3085",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "=0.383",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{(\\mu+\\sigma)-\\mu}{\\sigma}=1$, so the probability equals $\\mathrm{P}(Z>1)=0.1587$.",
                working: "0.1587",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "State the value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac{35-\\mu}{\\sigma}=-1$, $\\frac{55-\\mu}{\\sigma}=1$. (b) $\\mu=45$, $\\sigma=10$. (c) $0.383$. (d) $0.1587$.",
            commonErrors: [
              "Sign error: $\\mathrm{P}(X>55)=0.1587$ gives $z=+1$, not $-1$.",
              "Using $\\sigma^2=100$ as $\\sigma$ in the equations.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X\\sim \\mathrm{B}(5,0.6)$. Find $\\mathrm{P}(X=3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.6$" },
              { id: "b", text: "$0.432$" },
              { id: "c", text: "$0.346$" },
              { id: "d", text: "$0.216$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Binomial probability",
                statement: "$\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mathrm{P}(X=3)=\\binom53(0.6)^3(0.4)^2=10(0.216)(0.16)=0.3456$.",
                working: "10\\times0.216\\times0.16=0.3456",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.346$",
            commonErrors: [
              "Using $\\binom53=10$ incorrectly or omitting it.",
              "Swapping $p$ and $1-p$: computing $0.6^2(0.4)^3$ instead.",
            ],
          },
        },
        {
          id: "aahl-u4-multistage-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The masses of packets of sugar are normally distributed with mean $500$ g and variance $25$ g$^2$. Find $\\mathrm{P}(490<X<510)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.866$" },
              { id: "b", text: "$0.977$" },
              { id: "c", text: "$0.954$" },
              { id: "d", text: "$0.683$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardization",
                statement:
                  "$\\sigma=\\sqrt{25}=5$, so $z=\\pm2$ at the bounds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$z=\\frac{490-500}{5}=-2$ and $z=\\frac{510-500}{5}=2$; $\\mathrm{P}(-2<Z<2)=0.9772-0.0228=0.9544$.",
                working: "0.9772-0.0228=0.9544",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.954$",
            commonErrors: [
              "Using $\\sigma=25$ instead of $\\sigma=5$.",
              "Reading $\\mathrm{P}(-1<Z<1)=0.683$ (one-sigma interval).",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u4-pdf-family",
      title: "Investigating a family of pdfs",
      skill:
        "Generalise results for a parameterised pdf and prove that a probability is independent of the parameter.",
      lesson: {
        sections: [
          {
            heading: "Working with parameters",
            body: "When a pdf contains a parameter such as $a$, treat $a$ as a constant while integrating. The normalising constant is a function of $a$. Results for mean, mode and variance are then expressions in $a$, which you can test on a specific value as a check.",
          },
          {
            heading: "Spotting structure",
            body: "If $f$ is symmetric about $x=c$, then $\\mathrm{E}(X)=c$ without integrating. Rescaling the variable ($x=at$) often shows that a probability depends only on the shape, not on the scale parameter. Paper 3 questions reward this: compute a special case, conjecture a general form, then prove it.",
          },
        ],
        keyFormulas: [
          {
            name: "Symmetric pdf",
            statement: "If $f(c+u)=f(c-u)$ then $\\mathrm{E}(X)=c$",
          },
          {
            name: "Substitution $x=at$",
            statement: "$\\int_{p}^{q} g(x)\\,dx=a\\int_{p/a}^{q/a}g(at)\\,dt$",
          },
        ],
        workedExample: {
          problem: "$f(x)=6x(1-x)$ on $0\\le x\\le1$. Find $\\mathrm{E}(X)$.",
          solution:
            "$f$ is symmetric about $x=\\frac12$ (it is a downward parabola with zeros at $0$ and $1$), and $\\int_0^1 f=6\\left(\\frac12-\\frac13\\right)=1$, so $\\mathrm{E}(X)=\\frac12$.",
        },
      },
      questions: [
        {
          id: "aahl-u4-pdf-family-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=kx(2-x)$ for $0\\le x\\le2$, and $f(x)=0$ otherwise. Find $k$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac32$" },
              { id: "b", text: "$\\dfrac34$" },
              { id: "c", text: "$\\dfrac43$" },
              { id: "d", text: "$\\dfrac12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int f(x)\\,dx=1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Integrate $x(2-x)=2x-x^2$ over $[0,2]$ and set $k$ times this equal to 1.",
                working:
                  "k\\left[x^2-\\frac{x^3}{3}\\right]_0^2=k\\left(4-\\frac83\\right)=\\frac{4k}{3}=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "k=\\frac34",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac34$",
            commonErrors: [
              "Choosing $\\frac43$, the value of the integral rather than its reciprocal.",
            ],
          },
        },
        {
          id: "aahl-u4-pdf-family-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The continuous random variable $X$ has pdf $f(x)=6x(1-x)$ for $0\\le x\\le1$, and $f(x)=0$ otherwise. Find $\\mathrm{Var}(X)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\mathrm{Var}(X)$", answer: 0.05 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
              {
                kind: "property",
                name: "Symmetry",
                statement:
                  "$f$ is symmetric about $x=\\frac12$, so $\\mathrm{E}(X)=\\frac12$.",
              },
            ],
            steps: [
              {
                reasoning: "By symmetry about $\\frac12$.",
                working: "\\mathrm{E}(X)=\\frac12",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Set up $\\mathrm{E}(X^2)$.",
                working: "\\int_0^1 6x^3(1-x)\\,dx=6\\int_0^1(x^3-x^4)\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and evaluate.",
                working: "6\\left(\\frac14-\\frac15\\right)=\\frac{3}{10}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Subtract the squared mean.",
                working: "\\frac3{10}-\\frac14=\\frac1{20}=0.05",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac1{20}=0.05$",
            commonErrors: ["Forgetting to subtract $[\\mathrm{E}(X)]^2$."],
          },
        },
        {
          id: "aahl-u4-pdf-family-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\frac12\\sin x$ for $0\\le x\\le\\pi$, and $f(x)=0$ otherwise. Find $\\mathrm{Var}(X)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{Var}(X)$", answer: 0.467, tolerance: 0.0005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Symmetry",
                statement:
                  "$\\sin x$ is symmetric about $x=\\frac\\pi2$ on $[0,\\pi]$, so $\\mathrm{E}(X)=\\frac\\pi2$.",
              },
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
            ],
            steps: [
              {
                reasoning: "Symmetry gives the mean.",
                working: "\\mathrm{E}(X)=\\frac\\pi2",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Set up $\\mathrm{E}(X^2)$.",
                working:
                  "\\mathrm{E}(X^2)=\\frac12\\int_0^\\pi x^2\\sin x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate by parts twice (or use the GDC).",
                working: "\\int_0^\\pi x^2\\sin x\\,dx=\\pi^2-4",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning: "Combine.",
                working:
                  "\\frac{\\pi^2-4}{2}-\\frac{\\pi^2}{4}=\\frac{\\pi^2}{4}-2\\approx0.467",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{\\pi^2}{4}-2\\approx0.467$",
            commonErrors: [
              "Omitting the factor $\\frac12$ in $\\mathrm{E}(X^2)$.",
              "Calculator in degree mode.",
            ],
            examinerNote:
              "Check: $\\frac{\\pi^2-4}{2}\\approx2.935$ and $\\frac{\\pi^2}{4}\\approx2.467$.",
          },
        },
        {
          id: "aahl-u4-pdf-family-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "For each constant $a>0$, the continuous random variable $X$ has pdf $f(x)=kx(a-x)$ for $0\\le x\\le a$, and $f(x)=0$ otherwise, where $k$ depends on $a$.",
          parts: [
            { label: "a", prompt: "Show that $k=\\dfrac{6}{a^3}$.", marks: 3 },
            {
              label: "b",
              prompt:
                "Find the mode of $X$ in terms of $a$, justifying that it is a maximum.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Write down $\\mathrm{E}(X)$, justifying your answer.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Show that $\\mathrm{Var}(X)=\\dfrac{a^2}{20}$.",
              marks: 3,
            },
            {
              label: "e",
              prompt:
                "Hence, or otherwise, show that $\\mathrm{P}\\left(|X-\\mathrm{E}(X)|<\\sqrt{\\mathrm{Var}(X)}\\right)$ takes the same value for every $a$, and find this value to 3 significant figures.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int f=1$",
              },
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
              {
                kind: "property",
                name: "Substitution",
                statement:
                  "With $x=at$, $f(x)\\,dx=6t(1-t)\\,dt$, which contains no $a$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Set the area equal to 1.",
                working:
                  "k\\int_0^a(ax-x^2)\\,dx=k\\left[\\frac{ax^2}{2}-\\frac{x^3}{3}\\right]_0^a",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate at $a$.",
                working:
                  "k\\left(\\frac{a^3}{2}-\\frac{a^3}{3}\\right)=\\frac{ka^3}{6}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Set equal to 1 and solve.",
                working:
                  "\\frac{ka^3}{6}=1\\Rightarrow k=\\frac{6}{a^3}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Differentiate $f$ and set to zero.",
                working: "f'(x)=k(a-2x)=0\\Rightarrow x=\\frac a2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$f''(x)=-2k<0$ so this is a maximum; the mode is $\\frac a2$.",
                working: "f''(x)=-2k<0",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "$f(x)$ is a parabola with zeros at $0$ and $a$, hence symmetric about $x=\\frac a2$.",
                working:
                  "f\\left(\\tfrac a2+u\\right)=f\\left(\\tfrac a2-u\\right)",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "So the mean is the axis of symmetry.",
                working: "\\mathrm{E}(X)=\\frac a2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Set up $\\mathrm{E}(X^2)$.",
                working:
                  "\\mathrm{E}(X^2)=k\\int_0^a(ax^3-x^4)\\,dx=k\\left[\\frac{ax^4}{4}-\\frac{x^5}{5}\\right]_0^a",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate and substitute $k$.",
                working: "\\frac{6}{a^3}\\cdot\\frac{a^5}{20}=\\frac{3a^2}{10}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Subtract the squared mean.",
                working:
                  "\\frac{3a^2}{10}-\\frac{a^2}{4}=\\frac{a^2}{20}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "The interval is $\\left(\\frac a2-w a,\\ \\frac a2+wa\\right)$ with $w=\\frac1{\\sqrt{20}}$. Substituting $x=at$ gives $\\int 6t(1-t)\\,dt$ over $\\left(\\frac12-w,\\frac12+w\\right)$, containing no $a$, so the probability is independent of $a$.",
                working: "\\int_{1/2-w}^{1/2+w}6t(1-t)\\,dt",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "With $u=t-\\frac12$, $6t(1-t)=6\\left(\\frac14-u^2\\right)$; integrating from $-w$ to $w$ gives $3w-4w^3=\\frac{7}{5\\sqrt5}$.",
                working:
                  "6\\left[\\frac u4-\\frac{u^3}{3}\\right]_{-w}^{w}=3w-4w^3\\approx0.626",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $\\frac a2$. (c) $\\frac a2$. (d) shown. (e) independent of $a$; value $\\frac{7}{5\\sqrt5}\\approx0.626$.",
            commonErrors: [
              "Treating $a$ as a variable when integrating.",
              "Concluding independence from one numerical value of $a$ rather than showing $a$ cancels.",
            ],
            examinerNote:
              "Check with $a=1$: $w=0.2236$, $3w-4w^3=0.6708-0.0447=0.6261$.",
          },
        },
        {
          id: "aahl-u4-pdf-family-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=c$ for $2\\le x\\le5$, and $f(x)=0$ otherwise. Find the value of $c$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac17$" },
              { id: "b", text: "$\\dfrac15$" },
              { id: "c", text: "$\\dfrac13$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int_{-\\infty}^{\\infty}f(x)\\,dx=1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The pdf is constant on an interval of length 3, so its area is $3c$.",
                working: "3c=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $c$.",
                working: "c=\\frac13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac13$",
            commonErrors: [
              "Choosing $3$, the interval length rather than the reciprocal of it.",
              "Using $5-2=2$ as the length of the interval.",
            ],
          },
        },
        {
          id: "aahl-u4-pdf-family-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The continuous random variable $X$ has pdf $f(x)=kx$ for $0\\le x\\le4$, and $f(x)=0$ otherwise.",
          parts: [
            { label: "a", prompt: "Find the value of $k$.", marks: 1 },
            { label: "b", prompt: "Find $\\mathrm{P}(X<2)$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $k$", answer: 0.125 },
              { label: "(b) $\\mathrm{P}(X<2)$", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int_0^4 kx\\,dx=1$",
              },
              {
                kind: "property",
                name: "Probability as area",
                statement: "$\\mathrm{P}(X<2)=\\int_0^2 f(x)\\,dx$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The total area under the pdf is 1.",
                working: "k\\left[\\frac{x^2}{2}\\right]_0^4=8k=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Integrate the pdf from 0 to 2.",
                working:
                  "\\int_0^2 \\frac18x\\,dx=\\left[\\frac{x^2}{16}\\right]_0^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "\\frac{4}{16}=0.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $k=\\frac18=0.125$. (b) $\\mathrm{P}(X<2)=0.5$.",
            commonErrors: [
              "Using the interval length 4 as $k$ rather than solving the area equation.",
              "Integrating to $x=4$ instead of $x=2$ for the probability.",
            ],
          },
        },
        {
          id: "aahl-u4-pdf-family-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{3}{32}x(4-x)$ for $0\\le x\\le4$, and $f(x)=0$ otherwise. What is the mode of $X$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mode",
                statement:
                  "The mode is the value of $x$ at which the pdf is maximal.",
              },
              {
                kind: "technique",
                name: "Differentiation",
                statement: "Set $f'(x)=0$ and check the second derivative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Differentiate: $f'(x)=\\frac{3}{32}(4-2x)$, which is zero at $x=2$.",
                working: "\\frac{3}{32}(4-2x)=0\\Rightarrow x=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f''(x)=-\\frac{3}{16}<0$, so $x=2$ is a maximum.",
                working: "f''(x)=-\\frac{3}{16}<0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $x=2$",
            commonErrors: [
              "Choosing an endpoint such as $x=4$, where $f=0$.",
              "Reporting the roots $x=0$ and $x=4$ of $f$ rather than the maximum.",
            ],
          },
        },
        {
          id: "aahl-u4-pdf-family-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{x^2}{9}$ for $0\\le x\\le3$, and $f(x)=0$ otherwise.",
          parts: [
            { label: "a", prompt: "Find $\\mathrm{P}(X<1.5)$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{E}(X)$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{P}(X<1.5)$", answer: 0.125 },
              { label: "(b) $\\mathrm{E}(X)$", answer: 2.25 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Probability as area",
                statement: "$\\mathrm{P}(X<1.5)=\\int_0^{1.5}f(x)\\,dx$",
              },
              {
                kind: "formula",
                name: "Mean of a continuous variable",
                statement: "$\\mathrm{E}(X)=\\int xf(x)\\,dx$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Integrate the pdf from 0 to 1.5.",
                working:
                  "\\int_0^{1.5}\\frac{x^2}{9}\\,dx=\\left[\\frac{x^3}{27}\\right]_0^{1.5}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "\\frac{1.5^3}{27}=\\frac{3.375}{27}=0.125",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Set up the mean integral.",
                working:
                  "\\mathrm{E}(X)=\\int_0^3\\frac{x^3}{9}\\,dx=\\left[\\frac{x^4}{36}\\right]_0^3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "\\frac{81}{36}=\\frac94=2.25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.125$. (b) $\\mathrm{E}(X)=\\frac94=2.25$.",
            commonErrors: [
              "For (b), integrating $f$ instead of $xf$.",
              "Using $\\frac{1.5^3}{9}$ rather than dividing by the antiderivative denominator correctly.",
            ],
          },
        },
        {
          id: "aahl-u4-pdf-family-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The continuous random variable $X$ has pdf $f(x)=kx^2(3-x)$ for $0\\le x\\le3$, and $f(x)=0$ otherwise, where $k$ is a constant.",
          parts: [
            { label: "a", prompt: "Find the value of $k$.", marks: 2 },
            {
              label: "b",
              prompt: "Find the mode of $X$, justifying that it is a maximum.",
              marks: 2,
            },
            { label: "c", prompt: "Find $\\mathrm{E}(X)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int_0^3 kx^2(3-x)\\,dx=1$",
              },
              {
                kind: "definition",
                name: "Mode",
                statement:
                  "The mode is the value of $x$ at which the pdf is maximal.",
              },
              {
                kind: "formula",
                name: "Mean of a continuous variable",
                statement: "$\\mathrm{E}(X)=\\int xf(x)\\,dx$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Set the area equal to 1.",
                working:
                  "k\\int_0^3(3x^2-x^3)\\,dx=k\\left[x^3-\\frac{x^4}{4}\\right]_0^3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate and solve.",
                working:
                  "k\\left(27-\\frac{81}{4}\\right)=\\frac{27k}{4}=1\\Rightarrow k=\\frac4{27}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Differentiate the unnormalised shape $x^2(3-x)$.",
                working: "\\frac{d}{dx}(3x^2-x^3)=6x-3x^2=3x(2-x)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The interior stationary point is $x=2$, and the second derivative is negative there.",
                working: "6-6x\\big|_{x=2}=-6<0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Set up the mean integral with $k=\\frac4{27}$.",
                working: "\\mathrm{E}(X)=\\frac4{27}\\int_0^3(3x^3-x^4)\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working:
                  "\\frac4{27}\\left(\\frac{243}{4}-\\frac{243}{5}\\right)=\\frac4{27}\\times\\frac{243}{20}=\\frac95",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac4{27}$. (b) $x=2$. (c) $\\mathrm{E}(X)=\\frac95=1.8$.",
            commonErrors: [
              "Reporting $x=0$ as the mode because it is a boundary stationary point of the derivative factorisation.",
              "Forgetting the factor $k$ when computing the mean.",
            ],
          },
        },
        {
          id: "aahl-u4-pdf-family-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{x}{8}$ for $0\\le x\\le4$, and $f(x)=0$ otherwise. Find $\\mathrm{P}(X>2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$0.875$" },
              { id: "c", text: "$0.25$" },
              { id: "d", text: "$0.75$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Probability as area",
                statement: "$\\mathrm{P}(X>2)=\\int_2^4 f(x)\\,dx$",
              },
            ],
            steps: [
              {
                reasoning: "Integrate from 2 to 4.",
                working:
                  "\\int_2^4\\frac{x}{8}\\,dx=\\left[\\frac{x^2}{16}\\right]_2^4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "1-\\frac{4}{16}=\\frac34=0.75",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.75$",
            commonErrors: [
              "Integrating from 0 to 2, which gives $\\mathrm{P}(X<2)$.",
              "Using $\\frac{4-2}{8}=0.25$ as though the pdf were constant.",
            ],
          },
        },
        {
          id: "aahl-u4-pdf-family-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=12x^2(1-x)$ for $0\\le x\\le1$, and $f(x)=0$ otherwise. What is the mode of $X$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac12$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$\\dfrac13$" },
              { id: "d", text: "$\\dfrac23$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mode",
                statement:
                  "The mode is the value of $x$ at which the pdf is maximal.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate $12(x^2-x^3)$ and solve $f'(x)=0$.",
                working: "12(2x-3x^2)=12x(2-3x)=0\\Rightarrow x=\\frac23",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The second derivative at $x=\\frac23$ is negative, so this is the maximum.",
                working:
                  "f''\\left(\\frac23\\right)=24-72\\left(\\frac23\\right)=-24<0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac23$",
            commonErrors: [
              "Choosing $x=1$, an endpoint where $f=0$.",
              "Reporting the other root $x=0$ without checking which stationary point is a maximum.",
            ],
          },
        },
        {
          id: "aahl-u4-pdf-family-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "For each constant $a>0$, the continuous random variable $X$ has pdf $f(x)=c\\sin\\left(\\frac{\\pi x}{a}\\right)$ for $0\\le x\\le a$, where $c$ depends on $a$, and $f(x)=0$ otherwise.",
          parts: [
            {
              label: "a",
              prompt: "Show that $c=\\dfrac{\\pi}{2a}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Show that $\\mathrm{E}(X)=\\dfrac a2$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that $\\mathrm{Var}(X)=\\dfrac{a^2(\\pi^2-4)}{4\\pi^2}$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find $\\mathrm{P}\\left(\\left|X-\\mathrm{E}(X)\\right|<\\sqrt{\\mathrm{Var}(X)}\\right)$, giving your answer to 3 significant figures.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int_0^a c\\sin(\\pi x/a)\\,dx=1$",
              },
              {
                kind: "property",
                name: "Symmetry",
                statement:
                  "The pdf is symmetric about $x=\\frac a2$, so the mean is $\\frac a2$.",
              },
              {
                kind: "property",
                name: "Substitution",
                statement:
                  "With $x=at$, the probability integral contains no $a$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Integrate the sine over one half-period.",
                working:
                  "c\\int_0^a\\sin\\left(\\frac{\\pi x}{a}\\right)dx=c\\left[-\\frac{a}{\\pi}\\cos\\left(\\frac{\\pi x}{a}\\right)\\right]_0^a",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate the endpoints and solve.",
                working:
                  "c\\left(\\frac{a}{\\pi}+\\frac{a}{\\pi}\\right)=\\frac{2ac}{\\pi}=1\\Rightarrow c=\\frac{\\pi}{2a}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The function $\\sin(\\pi x/a)$ is symmetric about $x=\\frac a2$ on $[0,a]$, so the density is symmetric about the midpoint.",
                working:
                  "f\\left(\\frac a2+u\\right)=f\\left(\\frac a2-u\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A symmetric density has its mean at the axis of symmetry.",
                working: "\\mathrm{E}(X)=\\frac a2\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Substitute $x=at$; then $\\mathrm{E}(X)=a\\mathrm{E}(T)$ and $\\mathrm{Var}(X)=a^2\\mathrm{Var}(T)$, where $T$ has density $\\frac\\pi2\\sin(\\pi t)$ on $[0,1]$.",
                working: "f_T(t)=\\frac\\pi2\\sin(\\pi t)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "For this density, $\\mathrm{E}(T)=\\frac12$ and $\\mathrm{E}(T^2)=\\frac12-\\frac1{\\pi^2}$, giving $\\mathrm{Var}(T)=\\frac14-\\frac1{\\pi^2}=\\frac{\\pi^2-4}{4\\pi^2}$.",
                working:
                  "\\mathrm{Var}(T)=\\frac{\\pi^2-4}{4\\pi^2}\\Rightarrow \\mathrm{Var}(X)=\\frac{a^2(\\pi^2-4)}{4\\pi^2}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Write $w=\\sqrt{\\mathrm{Var}(T)}=\\frac{\\sqrt{\\pi^2-4}}{2\\pi}$; the required probability is the area under the $T$-density between $\\frac12-w$ and $\\frac12+w$.",
                working: "w=\\frac{\\sqrt{\\pi^2-4}}{2\\pi}\\approx0.3856",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "By symmetry this area is $\\cos(\\pi(\\frac12-w))=\\sin(\\pi w)\\approx0.936$.",
                working:
                  "\\sin\\left(\\frac{\\sqrt{\\pi^2-4}}{2}\\right)\\approx0.936",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) shown. (b) $\\frac a2$. (c) shown. (d) $0.936$.",
            commonErrors: [
              "Trying to integrate $x\\sin(\\pi x/a)$ by parts for the mean instead of using symmetry.",
              "Using degree mode when evaluating the final trigonometric probability.",
            ],
            examinerNote:
              "The final probability is independent of $a$ because the interval $\\mathrm{E}(X)\\pm\\sqrt{\\mathrm{Var}(X)}$ scales with $a$.",
          },
        },
      ],
    },
  ],
};
