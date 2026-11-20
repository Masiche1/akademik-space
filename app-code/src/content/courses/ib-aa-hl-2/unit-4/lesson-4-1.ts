import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "aahl-u4-lesson-4-1",
  code: "4-1",
  title: "Bayes' Theorem",
  goal: "I CAN use Bayes' theorem and the law of total probability to reverse conditional probabilities, including with counting methods.",
  standards: ["AHL 4.13", "AHL 1.10"],
  vocabulary: [
    {
      term: "Conditional probability",
      definition:
        "The probability of event $A$ given that event $B$ has occurred: $\\mathrm{P}(A \\mid B)=\\frac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(B)}$, with $\\mathrm{P}(B)>0$.",
    },
    {
      term: "Law of total probability",
      definition:
        "If $B_1, B_2, \\dots, B_n$ partition the sample space, then $\\mathrm{P}(A)=\\sum_i \\mathrm{P}(A \\mid B_i)\\mathrm{P}(B_i)$.",
    },
    {
      term: "Bayes' theorem",
      definition:
        "$\\mathrm{P}(B \\mid A)=\\frac{\\mathrm{P}(A \\mid B)\\mathrm{P}(B)}{\\mathrm{P}(A)}$, which reverses the direction of conditioning.",
    },
    {
      term: "Partition",
      definition:
        "A collection of mutually exclusive events whose union is the whole sample space.",
    },
    {
      term: "Independent events",
      definition:
        "Events $A$ and $B$ with $\\mathrm{P}(A \\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$, equivalently $\\mathrm{P}(A \\mid B)=\\mathrm{P}(A)$.",
    },
    {
      term: "Prior and posterior probability",
      definition:
        "The prior is the probability before evidence is observed; the posterior is the updated conditional probability after the evidence.",
    },
  ],
  concepts: [
    {
      id: "aahl-u4-bayes-theorem",
      title: "Bayes' theorem with two or three events",
      skill:
        "Use the law of total probability and Bayes' theorem to find reversed conditional probabilities.",
      lesson: {
        sections: [
          {
            heading: "Reversing a conditional probability",
            body: "Often we know $\\mathrm{P}(A \\mid B)$ but need $\\mathrm{P}(B \\mid A)$. Both come from the same intersection: $\\mathrm{P}(A \\cap B)=\\mathrm{P}(A \\mid B)\\mathrm{P}(B)=\\mathrm{P}(B \\mid A)\\mathrm{P}(A)$. Rearranging gives Bayes' theorem. The denominator $\\mathrm{P}(A)$ is usually not given directly and must be built with the law of total probability.",
          },
          {
            heading: "Building the denominator",
            body: "If $B$ and $B'$ partition the sample space, $\\mathrm{P}(A)=\\mathrm{P}(A \\mid B)\\mathrm{P}(B)+\\mathrm{P}(A \\mid B')\\mathrm{P}(B')$. For three events $B_1, B_2, B_3$ forming a partition there are three terms. A tree diagram makes this visible: multiply along each branch, then add the branches that end in $A$.",
          },
          {
            heading: "Interpreting the result",
            body: "A posterior probability can be much smaller than the test accuracy suggests when the prior is small. Always state which event is the condition and check that the posteriors over a partition sum to 1.",
          },
        ],
        keyFormulas: [
          {
            name: "Bayes' theorem (two events)",
            statement:
              "$\\mathrm{P}(B \\mid A)=\\dfrac{\\mathrm{P}(A \\mid B)\\mathrm{P}(B)}{\\mathrm{P}(A \\mid B)\\mathrm{P}(B)+\\mathrm{P}(A \\mid B')\\mathrm{P}(B')}$",
          },
          {
            name: "Bayes' theorem (partition)",
            statement:
              "$\\mathrm{P}(B_i \\mid A)=\\dfrac{\\mathrm{P}(A \\mid B_i)\\mathrm{P}(B_i)}{\\sum_j \\mathrm{P}(A \\mid B_j)\\mathrm{P}(B_j)}$",
          },
        ],
        workedExample: {
          problem:
            "$\\mathrm{P}(B)=0.3$, $\\mathrm{P}(A \\mid B)=0.6$, $\\mathrm{P}(A \\mid B')=0.1$. Find $\\mathrm{P}(B \\mid A)$.",
          solution:
            "$\\mathrm{P}(A)=0.6(0.3)+0.1(0.7)=0.18+0.07=0.25$. Then $\\mathrm{P}(B \\mid A)=\\frac{0.18}{0.25}=0.72$.",
        },
      },
      questions: [
        {
          id: "aahl-u4-bayes-theorem-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Events $A$ and $B$ are such that $\\mathrm{P}(A)=0.4$, $\\mathrm{P}(B \\mid A)=0.5$ and $\\mathrm{P}(B \\mid A')=0.2$. Find $\\mathrm{P}(A \\mid B)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{5}{8}$" },
              { id: "b", text: "$\\dfrac{1}{2}$" },
              { id: "c", text: "$\\dfrac{3}{8}$" },
              { id: "d", text: "$\\dfrac{2}{5}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(A \\mid B)=\\frac{\\mathrm{P}(B \\mid A)\\mathrm{P}(A)}{\\mathrm{P}(B)}$",
              },
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(B)=\\mathrm{P}(B \\mid A)\\mathrm{P}(A)+\\mathrm{P}(B \\mid A')\\mathrm{P}(A')$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find $\\mathrm{P}(B)$ by adding the two ways $B$ can occur.",
                working: "\\mathrm{P}(B)=0.5(0.4)+0.2(0.6)=0.20+0.12=0.32",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply Bayes' theorem.",
                working:
                  "\\mathrm{P}(A \\mid B)=\\frac{0.20}{0.32}=\\frac{5}{8}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{5}{8}$",
            commonErrors: [
              "Giving $\\mathrm{P}(B \\mid A)=\\frac12$ instead of reversing the conditioning.",
              "Using $0.2+0.2$ as the denominator by using $\\mathrm{P}(B\\mid A')$ without weighting by $\\mathrm{P}(A')$.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A factory has three machines $A$, $B$ and $C$ which produce $50\\%$, $30\\%$ and $20\\%$ of its items respectively. The proportions of defective items from each machine are $2\\%$, $3\\%$ and $5\\%$. An item is chosen at random and found to be defective. Find the probability that it was produced by machine $C$. Give your answer as a decimal to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\mathrm{P}(C \\mid D)$",
                answer: 0.345,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(D)=\\sum \\mathrm{P}(D \\mid M)\\mathrm{P}(M)$ over the partition $\\{A,B,C\\}$.",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(C \\mid D)=\\frac{\\mathrm{P}(D \\mid C)\\mathrm{P}(C)}{\\mathrm{P}(D)}$",
              },
            ],
            steps: [
              {
                reasoning: "Sum over the three machines.",
                working: "\\mathrm{P}(D)=0.5(0.02)+0.3(0.03)+0.2(0.05)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\mathrm{P}(D)=0.010+0.009+0.010=0.029",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Apply Bayes' theorem for machine $C$.",
                working: "\\mathrm{P}(C \\mid D)=\\frac{0.2(0.05)}{0.029}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "\\frac{0.010}{0.029}=\\frac{10}{29}\\approx 0.345",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{10}{29}\\approx 0.345$",
            commonErrors: [
              "Reporting $\\mathrm{P}(D \\mid C)=0.05$.",
              "Using $0.02+0.03+0.05=0.10$ as the denominator without weighting by production share.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A disease affects $1\\%$ of a population. A test gives a positive result for $95\\%$ of people who have the disease and for $8\\%$ of people who do not. Give answers to 3 significant figures.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the probability that a person who tests positive has the disease.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The same person takes a second, independent application of the test (independent given disease status) and again tests positive. Find the probability that the person has the disease.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $\\mathrm{P}(D \\mid +)$",
                answer: 0.107,
                tolerance: 0.001,
              },
              {
                label: "(b) $\\mathrm{P}(D \\mid ++)$",
                answer: 0.588,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(D \\mid +)=\\frac{\\mathrm{P}(+ \\mid D)\\mathrm{P}(D)}{\\mathrm{P}(+)}$",
              },
              {
                kind: "property",
                name: "Conditional independence",
                statement:
                  "Given disease status, the two test results are independent, so $\\mathrm{P}(++\\mid D)=0.95^2$ and $\\mathrm{P}(++\\mid D')=0.08^2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Apply Bayes with total probability in the denominator.",
                working:
                  "\\frac{0.01(0.95)}{0.01(0.95)+0.99(0.08)}=\\frac{0.0095}{0.0887}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "\\approx 0.107",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Both positives given disease: $0.95^2=0.9025$; given no disease: $0.08^2=0.0064$.",
                working:
                  "\\mathrm{P}(++\\mid D)=0.9025,\\quad \\mathrm{P}(++\\mid D')=0.0064",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Apply Bayes.",
                working:
                  "\\frac{0.01(0.9025)}{0.01(0.9025)+0.99(0.0064)}=\\frac{0.009025}{0.015361}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "\\approx 0.588",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.107$. (b) $0.588$.",
            commonErrors: [
              "Using $0.95$ as the answer to (a) (confusing sensitivity with the posterior).",
              "In (b), using the answer to (a) as a new prior but then also using the full test chain twice.",
            ],
            examinerNote:
              "Updating with the posterior from (a) as the new prior gives the same answer to (b).",
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "A diagnostic test is applied to a person. Let $D$ be the event that the person has a condition, with $\\mathrm{P}(D)=p$, where $0<p<1$. A positive result $+$ occurs with $\\mathrm{P}(+ \\mid D)=a$ and $\\mathrm{P}(+ \\mid D')=b$, where $0<b<a<1$. Repeated applications of the test give results that are independent given the status of the person.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that $\\mathrm{P}(D \\mid +)=\\dfrac{pa}{pa+(1-p)b}$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "For $p=0.02$, $a=0.9$ and $b=0.05$, find $\\mathrm{P}(D \\mid +)$ to 3 significant figures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that the posterior odds satisfy $\\dfrac{\\mathrm{P}(D \\mid +)}{\\mathrm{P}(D' \\mid +)}=\\dfrac{p}{1-p}\\times\\dfrac{a}{b}$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Hence, or otherwise, deduce that after $n$ independent positive results the posterior odds of $D$ are $\\dfrac{p}{1-p}\\left(\\dfrac{a}{b}\\right)^n$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Using the values in part (b), find the smallest $n$ for which $\\mathrm{P}(D \\mid n \\text{ positive results})>0.99$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(b) $\\mathrm{P}(D \\mid +)$",
                answer: 0.269,
                tolerance: 0.001,
              },
              { label: "(e) smallest $n$", answer: 3, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(D \\mid E)=\\frac{\\mathrm{P}(E \\mid D)\\mathrm{P}(D)}{\\mathrm{P}(E)}$",
              },
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(E)=\\mathrm{P}(E \\mid D)\\mathrm{P}(D)+\\mathrm{P}(E \\mid D')\\mathrm{P}(D')$",
              },
              {
                kind: "definition",
                name: "Odds",
                statement:
                  "Odds of $D$ given $E$ are $\\frac{\\mathrm{P}(D \\mid E)}{\\mathrm{P}(D' \\mid E)}$; $\\mathrm{P}(D\\mid E)>q$ iff odds $>\\frac{q}{1-q}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Write Bayes' theorem for $D$ given $+$.",
                working:
                  "\\mathrm{P}(D \\mid +)=\\frac{\\mathrm{P}(+ \\mid D)\\mathrm{P}(D)}{\\mathrm{P}(+)}=\\frac{ap}{\\mathrm{P}(+)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Expand $\\mathrm{P}(+)$ over the partition $\\{D, D'\\}$.",
                working: "\\mathrm{P}(+)=pa+(1-p)b",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Substitute to reach the given result.",
                working:
                  "\\mathrm{P}(D \\mid +)=\\frac{pa}{pa+(1-p)b}\\quad \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute the values.",
                working:
                  "\\frac{0.02(0.9)}{0.02(0.9)+0.98(0.05)}=\\frac{0.018}{0.067}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "\\approx 0.269",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "By the same argument $\\mathrm{P}(D' \\mid +)=\\frac{(1-p)b}{\\mathrm{P}(+)}$, with the same denominator.",
                working: "\\mathrm{P}(D' \\mid +)=\\frac{(1-p)b}{pa+(1-p)b}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Divide; the common denominator cancels.",
                working:
                  "\\frac{pa}{(1-p)b}=\\frac{p}{1-p}\\times\\frac{a}{b}\\quad \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Given the status, $n$ independent positives have probability $a^n$ if $D$ and $b^n$ if $D'$. These replace $a$ and $b$ in the argument of (c).",
                working:
                  "\\mathrm{P}(n\\,+ \\mid D)=a^n,\\quad \\mathrm{P}(n\\,+ \\mid D')=b^n",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Repeat the odds calculation of (c) with $a^n$ and $b^n$.",
                working:
                  "\\text{odds}=\\frac{p\\,a^n}{(1-p)\\,b^n}=\\frac{p}{1-p}\\left(\\frac{a}{b}\\right)^n",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "Probability above $0.99$ is equivalent to odds above $99$. Prior odds are $\\frac{0.02}{0.98}=\\frac{1}{49}$ and $\\frac ab=18$.",
                working: "\\frac{1}{49}\\,18^n>99",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Rearrange.",
                working: "18^n>4851",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "$18^2=324<4851$ and $18^3=5832>4851$.",
                working: "n=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $0.269$. (c) shown. (d) shown. (e) $n=3$.",
            commonErrors: [
              "In (e), converting $0.99$ to odds incorrectly (using $0.99$ rather than $99$).",
              "Treating the tests as independent without conditioning on disease status.",
            ],
            examinerNote:
              "Check: for $n=3$ odds are $\\frac{5832}{49}\\approx119$, so the probability is about $0.992>0.99$; for $n=2$ it is about $0.869$.",
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(B)=0.4$, $\\mathrm{P}(A \\mid B)=0.3$ and $\\mathrm{P}(A \\mid B')=0.6$. Find $\\mathrm{P}(B \\mid A)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{1}{4}$" },
              { id: "b", text: "$0.3$" },
              { id: "c", text: "$0.12$" },
              { id: "d", text: "$0.5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(B \\mid A)=\\frac{\\mathrm{P}(A \\mid B)\\mathrm{P}(B)}{\\mathrm{P}(A)}$",
              },
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(A)=\\mathrm{P}(A \\mid B)\\mathrm{P}(B)+\\mathrm{P}(A \\mid B')\\mathrm{P}(B')$",
              },
            ],
            steps: [
              {
                reasoning: "Build $\\mathrm{P}(A)$ from the two branches.",
                working: "\\mathrm{P}(A)=0.3(0.4)+0.6(0.6)=0.12+0.36=0.48",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply Bayes' theorem.",
                working: "\\mathrm{P}(B \\mid A)=\\frac{0.12}{0.48}=\\frac14",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac14$",
            commonErrors: [
              "Reporting $\\mathrm{P}(A \\mid B)=0.3$ without reversing the conditioning.",
              "Using $0.3+0.6=0.9$ as the denominator without weighting by the branch probabilities.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A disease affects $20\\%$ of a population. A test is positive for $90\\%$ of people who have the disease and for $10\\%$ of people who do not. A person chosen at random tests positive. Find the probability that the person has the disease.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{9}{13}$" },
              { id: "b", text: "$\\dfrac{9}{10}$" },
              { id: "c", text: "$\\dfrac{2}{3}$" },
              { id: "d", text: "$0.9$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(+)=\\mathrm{P}(+ \\mid D)\\mathrm{P}(D)+\\mathrm{P}(+ \\mid D')\\mathrm{P}(D')$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(D \\mid +)=\\frac{\\mathrm{P}(+ \\mid D)\\mathrm{P}(D)}{\\mathrm{P}(+)}$",
              },
            ],
            steps: [
              {
                reasoning: "Find the total probability of a positive result.",
                working: "\\mathrm{P}(+)=0.9(0.2)+0.1(0.8)=0.18+0.08=0.26",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply Bayes' theorem.",
                working:
                  "\\mathrm{P}(D \\mid +)=\\frac{0.18}{0.26}=\\frac{9}{13}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{9}{13}$",
            commonErrors: [
              "Answering $0.9$ (the sensitivity) instead of the posterior probability.",
              "Using $0.9\\times0.2=0.18$ as the answer without dividing by $\\mathrm{P}(+)$.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Events $A$ and $B$ satisfy $\\mathrm{P}(B)=0.5$, $\\mathrm{P}(A \\mid B)=0.4$ and $\\mathrm{P}(A \\mid B')=0.2$. Find $\\mathrm{P}(B \\mid A)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\mathrm{P}(B \\mid A)$",
                answer: 0.667,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(A)=\\mathrm{P}(A \\mid B)\\mathrm{P}(B)+\\mathrm{P}(A \\mid B')\\mathrm{P}(B')$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(B \\mid A)=\\frac{\\mathrm{P}(A \\mid B)\\mathrm{P}(B)}{\\mathrm{P}(A)}$",
              },
            ],
            steps: [
              {
                reasoning: "Find $\\mathrm{P}(A)$.",
                working: "\\mathrm{P}(A)=0.4(0.5)+0.2(0.5)=0.3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Identify the numerator $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A\\mid B)\\mathrm{P}(B)$.",
                working: "\\mathrm{P}(A\\cap B)=0.4(0.5)=0.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide.",
                working:
                  "\\mathrm{P}(B \\mid A)=\\frac{0.2}{0.3}=\\frac23\\approx0.667",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac23\\approx0.667$",
            commonErrors: [
              "Dividing $0.4$ by $0.3$ instead of using the joint probability $0.2$.",
              "Using $\\mathrm{P}(B')=0.5$ instead of the correct complement weight in the second branch.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Events $B_1$ and $B_2$ partition the sample space with $\\mathrm{P}(B_1)=0.6$ and $\\mathrm{P}(B_2)=0.4$. Given $\\mathrm{P}(A \\mid B_1)=0.2$ and $\\mathrm{P}(A \\mid B_2)=0.5$, find $\\mathrm{P}(A)$, $\\mathrm{P}(B_1 \\mid A)$ and $\\mathrm{P}(B_2 \\mid A)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(A)$", answer: 0.32 },
              { label: "$\\mathrm{P}(B_1 \\mid A)$", answer: 0.375 },
              { label: "$\\mathrm{P}(B_2 \\mid A)$", answer: 0.625 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(A)=\\mathrm{P}(A \\mid B_1)\\mathrm{P}(B_1)+\\mathrm{P}(A \\mid B_2)\\mathrm{P}(B_2)$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(B_i \\mid A)=\\frac{\\mathrm{P}(A \\mid B_i)\\mathrm{P}(B_i)}{\\mathrm{P}(A)}$",
              },
            ],
            steps: [
              {
                reasoning: "Sum the two branches.",
                working: "\\mathrm{P}(A)=0.2(0.6)+0.5(0.4)=0.12+0.20=0.32",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply Bayes' theorem for $B_1$.",
                working: "\\mathrm{P}(B_1 \\mid A)=\\frac{0.12}{0.32}=0.375",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Apply Bayes' theorem for $B_2$.",
                working: "\\mathrm{P}(B_2 \\mid A)=\\frac{0.20}{0.32}=0.625",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check the posteriors sum to 1.",
                working: "0.375+0.625=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\mathrm{P}(A)=0.32$, $\\mathrm{P}(B_1 \\mid A)=0.375$, $\\mathrm{P}(B_2 \\mid A)=0.625$",
            commonErrors: [
              "Using $0.2+0.5=0.7$ as $\\mathrm{P}(A)$ without weighting by branch probabilities.",
              "Finding only one posterior and forgetting that the two must sum to 1.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(A \\mid B)=0.8$, $\\mathrm{P}(B)=0.1$ and $\\mathrm{P}(A \\mid B')=0.2$. Find $\\mathrm{P}(B \\mid A)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{4}{13}$" },
              { id: "b", text: "$0.8$" },
              { id: "c", text: "$0.26$" },
              { id: "d", text: "$0.32$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(A)=\\mathrm{P}(A \\mid B)\\mathrm{P}(B)+\\mathrm{P}(A \\mid B')\\mathrm{P}(B')$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(B \\mid A)=\\frac{\\mathrm{P}(A \\mid B)\\mathrm{P}(B)}{\\mathrm{P}(A)}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Build $\\mathrm{P}(A)$: $0.8(0.1)+0.2(0.9)=0.08+0.18=0.26$.",
                working: "\\mathrm{P}(A)=0.08+0.18=0.26",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide the joint probability by $\\mathrm{P}(A)$: $\\frac{0.08}{0.26}=\\frac{8}{26}=\\frac{4}{13}$.",
                working: "\\frac{0.08}{0.26}=\\frac{4}{13}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{4}{13}$",
            commonErrors: [
              "Forgetting to weight the $B'$ branch by $\\mathrm{P}(B')=0.9$, giving $0.08+0.02=0.10$.",
              "Reporting $0.08$ (the joint probability) as the final answer.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Machine $M_1$ produces $40\\%$ of the items from a factory and machine $M_2$ produces the remaining $60\\%$. The proportions of defective items are $5\\%$ from $M_1$ and $2\\%$ from $M_2$. An item is chosen at random and found to be defective. Let $D$ denote the event that the item is defective.",
          parts: [
            { label: "a", prompt: "Find $\\mathrm{P}(D)$.", marks: 2 },
            {
              label: "b",
              prompt: "Find $\\mathrm{P}(M_1 \\mid D)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the probability that a non-defective item was produced by $M_2$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{P}(D)$", answer: 0.032 },
              { label: "(b) $\\mathrm{P}(M_1 \\mid D)$", answer: 0.625 },
              {
                label: "(c) $\\mathrm{P}(M_2 \\mid D')$",
                answer: 0.607,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(D)=\\mathrm{P}(D \\mid M_1)\\mathrm{P}(M_1)+\\mathrm{P}(D \\mid M_2)\\mathrm{P}(M_2)$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(M_i \\mid D)=\\frac{\\mathrm{P}(D \\mid M_i)\\mathrm{P}(M_i)}{\\mathrm{P}(D)}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Multiply along each branch and add.",
                working: "\\mathrm{P}(D)=0.05(0.4)+0.02(0.6)=0.020+0.012",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "\\mathrm{P}(D)=0.032",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Apply Bayes' theorem for $M_1$.",
                working: "\\mathrm{P}(M_1 \\mid D)=\\frac{0.020}{0.032}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify.",
                working: "=\\frac{20}{32}=0.625",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Find the joint probability of $M_2$ and non-defective.",
                working: "\\mathrm{P}(M_2 \\cap D')=0.6(0.98)=0.588",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Find $\\mathrm{P}(D')$.",
                working: "\\mathrm{P}(D')=1-0.032=0.968",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Divide.",
                working:
                  "\\mathrm{P}(M_2 \\mid D')=\\frac{0.588}{0.968}\\approx0.607",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.032$. (b) $0.625$. (c) $\\approx0.607$.",
            commonErrors: [
              "In (c), dividing by $\\mathrm{P}(D)=0.032$ instead of $\\mathrm{P}(D')$.",
              "Using $0.02$ as $\\mathrm{P}(D' \\mid M_2)$ instead of the complement $0.98$.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(A \\mid B)=0.9$, $\\mathrm{P}(B)=0.1$ and $\\mathrm{P}(B \\mid A')=0.3$. Find $\\mathrm{P}(B \\mid A)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.25$" },
              { id: "b", text: "$0.9$" },
              { id: "c", text: "$0.09$" },
              { id: "d", text: "$0.3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(A)=\\mathrm{P}(A \\mid B)\\mathrm{P}(B)+\\mathrm{P}(A \\mid B')\\mathrm{P}(B')$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(B \\mid A)=\\frac{\\mathrm{P}(A \\mid B)\\mathrm{P}(B)}{\\mathrm{P}(A)}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The second branch uses $\\mathrm{P}(A \\cap B')=\\mathrm{P}(B \\mid A')\\mathrm{P}(A')=0.3(0.9)=0.27$, so $\\mathrm{P}(A)=0.09+0.27=0.36$.",
                working: "\\mathrm{P}(A)=0.9(0.1)+0.3(0.9)=0.09+0.27=0.36",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply Bayes' theorem: $\\mathrm{P}(B \\mid A)=\\frac{0.09}{0.36}=\\frac14=0.25$.",
                working: "\\mathrm{P}(B \\mid A)=\\frac{0.09}{0.36}=0.25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.25$",
            commonErrors: [
              "Treating $\\mathrm{P}(B \\mid A')$ as $\\mathrm{P}(A \\mid B')$, which reverses the conditioning incorrectly.",
              "Forgetting to multiply by $\\mathrm{P}(A')=0.9$ in the second branch.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Two urns each contain 6 balls. Urn $P$ has 4 red and 2 blue balls; urn $Q$ has 3 red and 3 blue balls. An urn is chosen at random with equal probability and one ball is drawn. Given that the ball drawn is red, find the probability that it came from urn $P$. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\mathrm{P}(P \\mid R)$",
                answer: 0.571,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(R)=\\mathrm{P}(R \\mid P)\\mathrm{P}(P)+\\mathrm{P}(R \\mid Q)\\mathrm{P}(Q)$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(P \\mid R)=\\frac{\\mathrm{P}(R \\mid P)\\mathrm{P}(P)}{\\mathrm{P}(R)}$",
              },
            ],
            steps: [
              {
                reasoning: "Find the probability of red from each urn.",
                working:
                  "\\mathrm{P}(R \\mid P)=\\frac46,\\quad \\mathrm{P}(R \\mid Q)=\\frac36",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine with the equal urn probabilities.",
                working:
                  "\\mathrm{P}(R)=\\frac12\\cdot\\frac46+\\frac12\\cdot\\frac36=\\frac{2}{6}+\\frac{1.5}{6}=\\frac{7}{12}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Form the numerator $\\mathrm{P}(P\\cap R)=\\frac12\\cdot\\frac46=\\frac13$.",
                working: "\\mathrm{P}(P\\cap R)=\\frac13",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide and evaluate.",
                working:
                  "\\mathrm{P}(P \\mid R)=\\frac{1/3}{7/12}=\\frac{4}{7}\\approx0.571",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac47\\approx0.571$",
            commonErrors: [
              "Using $\\mathrm{P}(R \\mid P)=\\frac45$ by confusing the urn probabilities.",
              "Dividing $\\frac13$ by $\\frac12$ instead of by $\\mathrm{P}(R)=\\frac{7}{12}$.",
            ],
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "A person either has a condition $D$ or does not. The prior probability is $\\mathrm{P}(D)=p$, where $0<p<1$. A diagnostic test is positive with probability $0.8$ if $D$ is present and $0.1$ if $D$ is absent. Repeated applications of the test are independent given the person's status.",
          parts: [
            {
              label: "a",
              prompt: "Show that $\\mathrm{P}(D \\mid +)=\\dfrac{8p}{7p+1}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the value of $p$ for which $\\mathrm{P}(D \\mid +)=0.5$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the value of $p$ for which $\\mathrm{P}(D \\mid +)=0.9$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Show that after $n$ independent positive results the posterior odds of $D$ are $\\dfrac{p}{1-p}\\,8^{n}$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "For $p=0.1$, find the smallest value of $n$ for which $\\mathrm{P}(D \\mid n \\text{ positive results})>0.95$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $p$", answer: 0.111, tolerance: 0.001 },
              { label: "(c) $p$", answer: 0.529, tolerance: 0.001 },
              { label: "(e) smallest $n$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(D \\mid +)=\\frac{\\mathrm{P}(+ \\mid D)\\mathrm{P}(D)}{\\mathrm{P}(+)}$",
              },
              {
                kind: "law",
                name: "Law of total probability",
                statement: "$\\mathrm{P}(+)=0.8p+0.1(1-p)=0.7p+0.1$",
              },
              {
                kind: "definition",
                name: "Odds",
                statement:
                  "Posterior odds of $D$ are $\\frac{\\mathrm{P}(D \\mid E)}{\\mathrm{P}(D' \\mid E)}$; a probability above $q$ is equivalent to odds above $\\frac{q}{1-q}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply Bayes' theorem and expand the denominator.",
                working: "\\mathrm{P}(D \\mid +)=\\frac{0.8p}{0.8p+0.1(1-p)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Simplify $0.8p+0.1-0.1p=0.7p+0.1$ and multiply top and bottom by 10.",
                working: "=\\frac{8p}{7p+1}\\quad \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Set the posterior equal to $\\frac12$ and solve.",
                working:
                  "\\frac{8p}{7p+1}=\\frac12\\Rightarrow16p=7p+1\\Rightarrow p=\\frac19",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the value.",
                working: "p=\\frac19\\approx0.111",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Set the posterior equal to $\\frac9{10}$ and solve.",
                working:
                  "\\frac{8p}{7p+1}=\\frac9{10}\\Rightarrow80p=63p+9\\Rightarrow p=\\frac{9}{17}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the value.",
                working: "p=\\frac{9}{17}\\approx0.529",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Given the status, $n$ independent positives have probability $0.8^n$ if $D$ and $0.1^n$ if $D'$. The likelihood ratio is therefore $8^n$, which multiplies the prior odds.",
                working: "\\text{likelihood ratio}=\\frac{0.8^n}{0.1^n}=8^n",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Write the resulting odds.",
                working:
                  "\\text{odds}=\\frac{p}{1-p}\\cdot8^{n}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "A probability above $0.95$ is equivalent to odds above $19$. With $p=0.1$ the prior odds are $\\frac19$.",
                working: "\\frac19\\cdot8^n>19\\iff8^n>171",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Since $8^2=64<171$ and $8^3=512>171$, the smallest $n$ is 3.",
                working: "n=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $\\frac19\\approx0.111$. (c) $\\frac{9}{17}\\approx0.529$. (d) shown. (e) $n=3$.",
            commonErrors: [
              "In (e), converting $0.95$ to odds as $0.95$ rather than $19$.",
              "In (b) and (c), solving $8p=0.5(7p+1)$ but forgetting the $+1$ term.",
            ],
            examinerNote:
              "Check: for $n=3$ the odds are $\\frac{512}{9}\\approx56.9$, giving probability about $0.983>0.95$; for $n=2$ the odds are $\\frac{64}{9}\\approx7.1$, giving probability about $0.877<0.95$.",
          },
        },
        {
          id: "aahl-u4-bayes-theorem-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(B \\mid A)=0.5$, $\\mathrm{P}(A)=0.4$ and $\\mathrm{P}(B \\mid A')=0.25$. Find $\\mathrm{P}(A \\mid B)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{4}{7}$" },
              { id: "b", text: "$0.35$" },
              { id: "c", text: "$0.5$" },
              { id: "d", text: "$0.2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of total probability",
                statement:
                  "$\\mathrm{P}(B)=\\mathrm{P}(B \\mid A)\\mathrm{P}(A)+\\mathrm{P}(B \\mid A')\\mathrm{P}(A')$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(A \\mid B)=\\frac{\\mathrm{P}(B \\mid A)\\mathrm{P}(A)}{\\mathrm{P}(B)}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find $\\mathrm{P}(B)$: $0.5(0.4)+0.25(0.6)=0.20+0.15=0.35$.",
                working: "\\mathrm{P}(B)=0.35",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply Bayes' theorem: $\\mathrm{P}(A \\mid B)=\\frac{0.20}{0.35}=\\frac{4}{7}$.",
                working:
                  "\\mathrm{P}(A \\mid B)=\\frac{0.2}{0.35}=\\frac{4}{7}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{4}{7}$",
            commonErrors: [
              "Reporting $\\mathrm{P}(B)=0.35$ as the answer.",
              "Using $\\mathrm{P}(A')=0.4$ instead of $0.6$ in the second branch.",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u4-conditional-counting",
      title: "Conditional probability with counting methods",
      skill:
        "Compute conditional probabilities by counting arrangements and selections with combinations and permutations.",
      lesson: {
        sections: [
          {
            heading: "Equally likely outcomes",
            body: "When all outcomes are equally likely, $\\mathrm{P}(A)=\\frac{n(A)}{n(U)}$. Conditioning on $B$ restricts the sample space to $B$, so $\\mathrm{P}(A \\mid B)=\\frac{n(A \\cap B)}{n(B)}$. The total size of the sample space cancels, so you may count only within $B$.",
          },
          {
            heading: "Choosing the counting tool",
            body: "Use combinations $\\binom{n}{r}$ when order does not matter (committees, hands) and permutations ${}^nP_r$ when order matters (codes, numbers). Count each event with the multiplication principle, being careful with restrictions: fill the most restricted position first.",
          },
        ],
        keyFormulas: [
          {
            name: "Equally likely outcomes",
            statement: "$\\mathrm{P}(A \\mid B)=\\dfrac{n(A \\cap B)}{n(B)}$",
          },
          {
            name: "Combinations",
            statement: "$\\binom{n}{r}=\\dfrac{n!}{r!(n-r)!}$",
          },
        ],
        workedExample: {
          problem:
            "Two cards are chosen from 5 hearts and 3 spades. Given at least one is a heart, find the probability both are hearts.",
          solution:
            "$n(\\text{at least one heart})=\\binom82-\\binom32=28-3=25$. $n(\\text{both hearts})=\\binom52=10$. So the probability is $\\frac{10}{25}=\\frac25$.",
        },
      },
      questions: [
        {
          id: "aahl-u4-conditional-counting-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A bag contains 4 red and 3 blue counters. Two counters are drawn at random without replacement. Find the probability that both are red.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{2}{7}$" },
              { id: "b", text: "$\\dfrac{16}{49}$" },
              { id: "c", text: "$\\dfrac{4}{7}$" },
              { id: "d", text: "$\\dfrac{12}{49}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combinations",
                statement:
                  "$\\mathrm{P}=\\frac{\\binom{4}{2}}{\\binom{7}{2}}$ for an unordered selection.",
              },
            ],
            steps: [
              {
                reasoning: "Count favourable and total selections.",
                working: "\\frac{\\binom42}{\\binom72}=\\frac{6}{21}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "\\frac{2}{7}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac27$",
            commonErrors: [
              "Using $\\left(\\frac47\\right)^2$, which assumes replacement.",
              "Using $\\frac{4\\cdot 3}{49}$, mixing the denominators.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A committee of 4 people is chosen at random from 6 men and 4 women. Given that the committee contains at least 2 women, find the probability that it contains exactly 3 women. Give your answer as a decimal to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.209, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Conditional probability",
                statement:
                  "$\\mathrm{P}(A \\mid B)=\\frac{n(A\\cap B)}{n(B)}$; here $A\\subseteq B$ so $A \\cap B=A$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Count committees with exactly $k$ women as $\\binom4k\\binom6{4-k}$.",
                working:
                  "k=2:\\ 6\\times15=90,\\quad k=3:\\ 4\\times6=24,\\quad k=4:\\ 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add for at least two women.",
                working: "n(B)=90+24+1=115",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Form the conditional ratio.",
                working: "\\frac{24}{115}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\approx 0.209",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{24}{115}\\approx 0.209$",
            commonErrors: [
              "Dividing by $\\binom{10}{4}=210$ instead of $115$.",
              "Omitting the case of 4 women from $n(B)$.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Three-digit numbers are formed using three different digits chosen from $\\{1,2,3,4,5,6,7\\}$, and one such number is chosen at random. Let $A$ be the event that the number is even and $B$ the event that the number is greater than 500. Find $\\mathrm{P}(A \\mid B)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\mathrm{P}(A \\mid B)$",
                answer: 0.444,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplication principle",
                statement:
                  "Fill the restricted positions first, then the remaining ones.",
              },
              {
                kind: "formula",
                name: "Conditional probability",
                statement: "$\\mathrm{P}(A\\mid B)=\\frac{n(A\\cap B)}{n(B)}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Greater than 500 means the first digit is 5, 6 or 7; then 6 and 5 choices remain.",
                working: "n(B)=3\\times6\\times5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n(B)=90",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Split by first digit: 5 (last digit 2, 4 or 6: 3 choices), 6 (last digit 2 or 4: 2 choices), 7 (3 choices); the middle digit then has 5 choices.",
                working: "n(A\\cap B)=(3+2+3)\\times5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n(A\\cap B)=40",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Form the ratio.",
                working:
                  "\\mathrm{P}(A\\mid B)=\\frac{40}{90}=\\frac49\\approx0.444",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac49\\approx0.444$",
            commonErrors: [
              "Counting $n(A\\cap B)$ with 3 choices of last digit regardless of the first digit, ignoring that the digit 6 used first removes one even option.",
              "Dividing by $n(U)=210$.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 11,
          stem: "A box contains 5 red and 7 white balls. Three balls are drawn at random without replacement. Let $X$ be the event that exactly two of the three balls are red, and $Y$ the event that the first ball drawn is red.",
          parts: [
            { label: "a", prompt: "Find $\\mathrm{P}(X)$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{P}(X \\cap Y)$.", marks: 3 },
            {
              label: "c",
              prompt: "Hence find $\\mathrm{P}(Y \\mid X)$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Show that $X$ and $Y$ are not independent.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Use Bayes' theorem to find $\\mathrm{P}(X \\mid Y)$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $\\mathrm{P}(X)$",
                answer: 0.3182,
                tolerance: 0.001,
              },
              {
                label: "(b) $\\mathrm{P}(X\\cap Y)$",
                answer: 0.2121,
                tolerance: 0.001,
              },
              {
                label: "(c) $\\mathrm{P}(Y\\mid X)$",
                answer: 0.6667,
                tolerance: 0.001,
              },
              {
                label: "(e) $\\mathrm{P}(X\\mid Y)$",
                answer: 0.5091,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combinations",
                statement:
                  "$\\mathrm{P}(X)=\\frac{\\binom52\\binom71}{\\binom{12}{3}}$",
              },
              {
                kind: "formula",
                name: "Conditional probability",
                statement:
                  "$\\mathrm{P}(Y\\mid X)=\\frac{\\mathrm{P}(X\\cap Y)}{\\mathrm{P}(X)}$",
              },
              {
                kind: "definition",
                name: "Independence",
                statement:
                  "$X, Y$ independent iff $\\mathrm{P}(X\\cap Y)=\\mathrm{P}(X)\\mathrm{P}(Y)$.",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(X\\mid Y)=\\frac{\\mathrm{P}(Y\\mid X)\\mathrm{P}(X)}{\\mathrm{P}(Y)}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Choose 2 of 5 red and 1 of 7 white from all 3-subsets.",
                working:
                  "\\mathrm{P}(X)=\\frac{\\binom52\\binom71}{\\binom{12}{3}}=\\frac{10\\times7}{220}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify.",
                working: "\\frac{70}{220}=\\frac{7}{22}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "First ball red.",
                working: "\\mathrm{P}(Y)=\\frac{5}{12}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Given that, 4 red and 7 white remain; exactly one red among the next two.",
                working:
                  "\\frac{\\binom41\\binom71}{\\binom{11}{2}}=\\frac{28}{55}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Multiply.",
                working:
                  "\\mathrm{P}(X\\cap Y)=\\frac5{12}\\times\\frac{28}{55}=\\frac{7}{33}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply the definition of conditional probability.",
                working: "\\mathrm{P}(Y\\mid X)=\\frac{7/33}{7/22}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify.",
                working: "=\\frac{22}{33}=\\frac23",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Compare $\\mathrm{P}(Y\\mid X)$ with $\\mathrm{P}(Y)$.",
                working:
                  "\\mathrm{P}(Y\\mid X)=\\frac23\\neq\\frac5{12}=\\mathrm{P}(Y)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Since conditioning on $X$ changes the probability of $Y$, they are not independent.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning: "Apply Bayes' theorem using (a), (c).",
                working:
                  "\\mathrm{P}(X\\mid Y)=\\frac{\\frac23\\times\\frac7{22}}{\\frac5{12}}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Simplify: numerator $\\frac{7}{33}$, then multiply by $\\frac{12}{5}$.",
                working:
                  "\\frac{7}{33}\\times\\frac{12}{5}=\\frac{84}{165}=\\frac{28}{55}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac7{22}$. (b) $\\frac7{33}$. (c) $\\frac23$. (d) $\\frac23\\neq\\frac5{12}$. (e) $\\frac{28}{55}$.",
            commonErrors: [
              "In (b), using $\\frac{\\binom52\\binom71}{\\binom{12}3}$ again, forgetting that the first ball must be red.",
              "Concluding independence from similar-looking values.",
            ],
            examinerNote:
              "The value in (e) agrees with the direct calculation $\\frac{28}{55}$ in (b), a useful check.",
          },
        },
        {
          id: "aahl-u4-conditional-counting-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A bag contains 3 white and 4 black counters. Two counters are drawn at random without replacement. Find the probability that both are black.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{2}{7}$" },
              { id: "b", text: "$\\dfrac{4}{7}$" },
              { id: "c", text: "$\\dfrac{1}{2}$" },
              { id: "d", text: "$\\dfrac{8}{49}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combinations",
                statement:
                  "$\\mathrm{P}=\\frac{\\binom{4}{2}}{\\binom{7}{2}}$ for an unordered selection.",
              },
            ],
            steps: [
              {
                reasoning: "Count favourable and total selections.",
                working: "\\frac{\\binom42}{\\binom72}=\\frac{6}{21}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "\\frac{6}{21}=\\frac27",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac27$",
            commonErrors: [
              "Using $\\left(\\frac47\\right)^2$, which assumes replacement.",
              "Counting ordered draws and forgetting to divide consistently.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A committee of 2 people is chosen at random from 5 men and 3 women. Given that the committee contains at least one man, find the probability that both members are men.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.4$" },
              { id: "b", text: "$\\dfrac{5}{14}$" },
              { id: "c", text: "$0.5$" },
              { id: "d", text: "$0.25$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Conditional probability",
                statement:
                  "$\\mathrm{P}(A \\mid B)=\\frac{n(A\\cap B)}{n(B)}$; here $A\\subseteq B$ so $A\\cap B=A$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Count: both men $\\binom52=10$; at least one man is all committees except both women $\\binom82-\\binom32=28-3=25$.",
                working: "n(B)=25,\\quad n(A)=10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Form the ratio.",
                working: "\\frac{10}{25}=0.4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.4$",
            commonErrors: [
              "Dividing by $\\binom82=28$, ignoring the condition.",
              "Subtracting only the all-women case incorrectly.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A card is drawn at random from a standard 52-card deck and found to be a heart. A second card is then drawn without replacement. Find the probability that the second card is also a heart, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.235, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Conditional probability",
                statement:
                  "After the condition, 12 hearts remain among 51 cards.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Given the first card is a heart, 12 hearts and 39 other cards remain.",
                working: "12\\text{ hearts out of }51\\text{ cards}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Form the ratio.",
                working: "\\frac{12}{51}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify and evaluate.",
                working: "\\frac{12}{51}=\\frac{4}{17}\\approx0.235",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{4}{17}\\approx0.235$",
            commonErrors: [
              "Using $\\frac{13}{52}$ again, forgetting the first heart was removed.",
              "Using $\\frac{12}{52}$ instead of $\\frac{12}{51}.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Three-digit numbers are formed using three different digits chosen from $\\{1,2,3,4,5,6,7,8\\}$, and one such number is chosen at random. Given that the number is greater than 400, find the probability that it is even. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.486, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplication principle",
                statement: "Count restricted positions first.",
              },
              {
                kind: "formula",
                name: "Conditional probability",
                statement: "$\\mathrm{P}(A \\mid B)=\\frac{n(A\\cap B)}{n(B)}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Greater than 400: first digit 4, 5, 6, 7 or 8 (5 choices), then 7 and 6 choices remain.",
                working: "n(B)=5\\times7\\times6=210",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For even numbers the last digit is even; split by whether the first digit is even (4, 6, 8: 3 last-digit choices) or odd (5, 7: 4 choices).",
                working: "n(A\\cap B)=(3\\times3+2\\times4)\\times6=102",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Form the ratio.",
                working: "\\frac{102}{210}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify and evaluate.",
                working: "\\frac{102}{210}=\\frac{17}{35}\\approx0.486",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{17}{35}\\approx0.486$",
            commonErrors: [
              "Giving every first digit 3 choices of last digit, forgetting that a first digit of 6 removes one even option.",
              "Dividing by the total $8\\times7\\times6=336$.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A four-digit number is formed using four different digits chosen from $\\{0,1,2,3,4,5,6,7,8,9\\}$, with a non-zero first digit. Given that the number is odd, find the probability that it ends in the digit 5.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.2$" },
              { id: "b", text: "$0.1$" },
              { id: "c", text: "$0.25$" },
              { id: "d", text: "$0.5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Symmetry of equally likely outcomes",
                statement:
                  "Given the number is odd, the last digit is equally likely to be any of the five odd digits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For each choice of last digit the remaining three positions can be filled in the same number of ways, so the five odd endings are equally likely.",
                working: "\\text{5 equally likely odd endings}",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Exactly one of them ends in 5.",
                working: "\\frac15=0.2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.2$",
            commonErrors: [
              "Computing $\\mathrm{P}(\\text{ends in 5})$ unconditionally and dividing by $\\mathrm{P}(\\text{odd})$ incorrectly.",
              "Assuming the last digit is uniform over all ten digits rather than the five odd digits.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A box contains 5 spades and 7 hearts. Two cards are drawn at random without replacement. Let $H$ denote the event that at least one card is a heart.",
          parts: [
            {
              label: "a",
              prompt: "Find the probability that both cards are hearts.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find the probability that exactly one card is a spade.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Given that at least one card is a heart, find the probability that both cards are hearts.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) both hearts", answer: 0.318, tolerance: 0.001 },
              {
                label: "(b) exactly one spade",
                answer: 0.53,
                tolerance: 0.001,
              },
              { label: "(c) conditional", answer: 0.375 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combinations",
                statement:
                  "$\\mathrm{P}=\\frac{\\binom{n}{r}}{\\binom{N}{r}}$ counts for unordered selections.",
              },
              {
                kind: "formula",
                name: "Conditional probability",
                statement: "$\\mathrm{P}(A \\mid B)=\\frac{n(A\\cap B)}{n(B)}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Choose 2 hearts from 7 hearts out of all pairs from 12 cards.",
                working: "\\frac{\\binom72}{\\binom{12}{2}}=\\frac{21}{66}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify.",
                working: "\\frac{21}{66}=\\frac7{22}\\approx0.318",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Exactly one spade means one spade and one heart: $5\\times7=35$ ordered-by-type selections, or count directly.",
                working:
                  "\\frac{5\\times7}{\\binom{12}{2}}=\\frac{35}{66}\\approx0.530",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "\\frac{35}{66}\\approx0.530",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "At least one heart excludes the both-spades case: $66-\\binom52=66-10=56$.",
                working: "n(H)=56",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Both hearts implies at least one heart, so the favourable count is 21.",
                working: "\\frac{21}{56}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify.",
                working: "\\frac{21}{56}=\\frac38=0.375",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac7{22}\\approx0.318$. (b) $\\frac{35}{66}\\approx0.530$. (c) $\\frac38=0.375$.",
            commonErrors: [
              "In (c), dividing by $\\binom{12}{2}=66$ instead of 56.",
              "Counting 'at least one heart' as $66-\\binom72$ (removing the wrong case).",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A committee of 4 people is chosen at random from 5 teachers and 4 students. Given that the committee contains at least one teacher, find the probability that it contains exactly 2 teachers.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.48$" },
              { id: "b", text: "$\\dfrac{10}{21}$" },
              { id: "c", text: "$0.4$" },
              { id: "d", text: "$0.6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combinations",
                statement:
                  "Exactly 2 teachers and 2 students: $\\binom52\\binom42=10\\times6=60$.",
              },
              {
                kind: "formula",
                name: "Conditional probability",
                statement:
                  "At least one teacher excludes the all-student committee: $\\binom94-\\binom44=126-1=125$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Count the conditional sample space and the favourable committees.",
                working: "\\frac{60}{125}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "\\frac{60}{125}=0.48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.48$",
            commonErrors: [
              "Dividing by $\\binom94=126$ instead of 125.",
              "Counting $\\binom52\\binom42$ as 50 instead of 60.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "A club has 6 boys and 5 girls. A team of 4 members is chosen at random. Let $X$ be the event that the team contains exactly 2 boys, and $Y$ the event that the team contains at least one girl.",
          parts: [
            { label: "a", prompt: "Find $\\mathrm{P}(X)$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{P}(Y)$.", marks: 2 },
            { label: "c", prompt: "Find $\\mathrm{P}(X \\mid Y)$.", marks: 3 },
            {
              label: "d",
              prompt:
                "Determine whether $X$ and $Y$ are independent, justifying your answer.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $\\mathrm{P}(X)$",
                answer: 0.455,
                tolerance: 0.001,
              },
              {
                label: "(b) $\\mathrm{P}(Y)$",
                answer: 0.955,
                tolerance: 0.001,
              },
              {
                label: "(c) $\\mathrm{P}(X \\mid Y)$",
                answer: 0.476,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combinations",
                statement:
                  "$\\mathrm{P}(X)=\\frac{\\binom62\\binom52}{\\binom{11}{4}}=\\frac{15\\times10}{330}$",
              },
              {
                kind: "formula",
                name: "Conditional probability",
                statement:
                  "$\\mathrm{P}(X \\mid Y)=\\frac{n(X\\cap Y)}{n(Y)}$; since $X\\subseteq Y$, $n(X\\cap Y)=n(X)=150$.",
              },
              {
                kind: "definition",
                name: "Independence",
                statement:
                  "Independent iff $\\mathrm{P}(X\\cap Y)=\\mathrm{P}(X)\\mathrm{P}(Y)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Exactly 2 boys means 2 boys and 2 girls.",
                working:
                  "\\mathrm{P}(X)=\\frac{\\binom62\\binom52}{\\binom{11}{4}}=\\frac{150}{330}=\\frac5{11}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify.",
                working: "\\frac{150}{330}=\\frac5{11}\\approx0.455",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The complement of $Y$ is an all-boy team: $\\binom64=15$.",
                working: "n(Y)=330-15=315",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working:
                  "\\mathrm{P}(Y)=\\frac{315}{330}=\\frac{21}{22}\\approx0.955",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Every team with exactly 2 boys automatically has 2 girls, so $X\\cap Y=X$ and $n(X\\cap Y)=150$.",
                working: "n(X\\cap Y)=150",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Form the ratio.",
                working:
                  "\\mathrm{P}(X \\mid Y)=\\frac{150}{315}=\\frac{10}{21}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\frac{10}{21}\\approx0.476",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Since $X\\subseteq Y$, $\\mathrm{P}(X\\cap Y)=\\mathrm{P}(X)=\\frac5{11}$, while $\\mathrm{P}(X)\\mathrm{P}(Y)=\\frac5{11}\\times\\frac{21}{22}=\\frac{105}{242}$.",
                working: "\\frac5{11}\\neq\\frac{105}{242}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "The product rule fails, so the events are not independent (equivalently $\\mathrm{P}(X\\mid Y)\\neq\\mathrm{P}(X)$).",
                working:
                  "\\mathrm{P}(X\\mid Y)=\\frac{10}{21}\\neq\\frac5{11}=\\mathrm{P}(X)",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "(a) $\\frac5{11}\\approx0.455$. (b) $\\frac{21}{22}\\approx0.955$. (c) $\\frac{10}{21}\\approx0.476$. (d) Not independent.",
            commonErrors: [
              "In (c), dividing by $330$ instead of $315$.",
              "In (d), testing $\\mathrm{P}(X \\mid Y)=\\mathrm{P}(X)$ with the unrounded values and rounding too early.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A bag contains 2 red and 3 green balls. Three balls are drawn at random at once. Find the probability that at least one ball is red.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.9$" },
              { id: "b", text: "$0.8$" },
              { id: "c", text: "$0.7$" },
              { id: "d", text: "$0.6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Complementary counting",
                statement:
                  "$\\mathrm{P}(\\text{at least one red})=1-\\mathrm{P}(\\text{all green})$",
              },
            ],
            steps: [
              {
                reasoning:
                  "All three green is the only way to get no red: $\\binom33=1$ out of $\\binom53=10$.",
                working: "\\mathrm{P}(\\text{all green})=\\frac{1}{10}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract from 1.",
                working: "1-\\frac{1}{10}=0.9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.9$",
            commonErrors: [
              "Computing $1-\\binom32/\\binom53$ (choosing only 2 balls).",
              "Adding probabilities instead of using the complement.",
            ],
          },
        },
        {
          id: "aahl-u4-conditional-counting-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A committee of 5 people is chosen at random from 8 men and 6 women. Find the number of possible committees that contain exactly 3 men.",
          response: {
            type: "numeric",
            parts: [{ label: "Number of committees", answer: 840 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combinations",
                statement: "$\\binom83\\binom62=56\\times15$",
              },
            ],
            steps: [
              {
                reasoning: "Choose 3 men from 8.",
                working: "\\binom83=56",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Choose 2 women from 6 (the remaining places).",
                working: "\\binom62=15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the multiplication principle.",
                working: "56\\times15=840",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$840$",
            commonErrors: [
              "Using $\\binom85$ (choosing 5 men) or $\\binom63$ (wrong split of the 5 places).",
              "Forgetting that exactly 3 men means exactly 2 women.",
            ],
          },
        },
      ],
    },
  ],
};
