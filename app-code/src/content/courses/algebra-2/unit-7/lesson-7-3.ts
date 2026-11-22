import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "alg2-u7-lesson-7-3",
  code: "7-3",
  title: "Geometric Series",
  goal: "I CAN derive and use finite geometric series sums, determine when an infinite geometric series converges, and model repeating decimals and payment streams.",
  standards: ["HSA-SSE.B.4", "HSF-BF.A.2"],
  vocabulary: [
    { term: "Geometric series", definition: "The sum of terms from a geometric sequence with a constant ratio between consecutive terms." },
    { term: "Common ratio", definition: "The constant factor by which each term of a geometric sequence is multiplied to obtain the next term." },
    { term: "Finite geometric series", definition: "A sum of a fixed, finite number of terms from a geometric sequence." },
    { term: "Infinite geometric series", definition: "A sum of infinitely many terms from a geometric sequence, which has a finite sum only when its terms approach zero." },
    { term: "Convergent series", definition: "An infinite series whose partial sums approach a finite limit." },
    { term: "Annuity", definition: "A sequence of equal payments or deposits made at regular time intervals." },
  ],
  concepts: [
    {
      id: "alg2-u7-finite-geometric-series",
      title: "Finite geometric series",
      skill: "Derive and apply the finite geometric series formula to calculate sums and solve contextual problems.",
      lesson: {
        sections: [
          {
            heading: "Deriving the finite sum formula",
            body: "Let $S_n=a+ar+ar^2+\\cdots+ar^{n-1}$. Multiplying by $r$ shifts every term one place: $rS_n=ar+ar^2+\\cdots+ar^n$. Subtracting the shifted sum cancels the middle terms, leaving $(1-r)S_n=a(1-r^n)$. When $r\\ne1$, divide by $1-r$ to obtain the finite geometric series formula. When $r=1$, all $n$ terms equal $a$, so the sum is $na$.",
          },
          {
            heading: "Using the formula",
            body: "Identify the first term $a$, common ratio $r$, and number of terms $n$. Then substitute into $S_n=a\\dfrac{1-r^n}{1-r}$ for $r\\ne1$. The equivalent form $S_n=a\\dfrac{r^n-1}{r-1}$ is also valid. A negative ratio is allowed and produces alternating signs; use parentheses around negative values when raising to a power.",
          },
          {
            heading: "Modeling repeated changes",
            body: "If an amount begins at $a$ and is multiplied by the same factor $r$ each period, the total across $n$ periods is a geometric sum. For example, repeated equal payments accumulated with interest form a geometric series when each earlier payment earns interest for one extra period. Be explicit about whether the first payment is made now or at the end of the first period, because this changes the exponents and timing.",
          },
        ],
        keyFormulas: [
          { name: "Finite geometric series", statement: "$S_n=a\\dfrac{1-r^n}{1-r}$ for $r\\ne1$; if $r=1$, then $S_n=na$." },
          { name: "Equivalent finite form", statement: "$S_n=a\\dfrac{r^n-1}{r-1}$ for $r\\ne1$." },
        ],
        workedExample: {
          problem: "Find the sum of the first five terms of $3+6+12+24+\\cdots$.",
          solution: "Here $a=3$, $r=2$, and $n=5$. Thus $S_5=3\\dfrac{1-2^5}{1-2}=3\\dfrac{-31}{-1}=93$. Checking the terms gives $3+6+12+24+48=93$.",
        },
      },
      questions: [
        {
          id: "alg2-u7-finite-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the sum of the first four terms of the geometric sequence $2,6,18,\\ldots$.",
          response: { type: "numeric", parts: [{ label: "Sum", answer: 80 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Finite geometric series", statement: "$S_n=a\\dfrac{1-r^n}{1-r}$ when $r\\ne1$." },
            ],
            steps: [
              { reasoning: "Identify the first term, common ratio, and number of terms.", working: "a=2,\\quad r=3,\\quad n=4", marks: 1, markCode: "B" },
              { reasoning: "Evaluate the four terms or use the finite sum formula.", working: "2+6+18+54=80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80$",
            commonErrors: ["Stopping at the three displayed terms and not finding the fourth.", "Adding the common ratio instead of multiplying by it."],
          },
        },
        {
          id: "alg2-u7-finite-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $7+21+63+189+567$ using a finite geometric series formula.",
          response: { type: "numeric", parts: [{ label: "Sum", answer: 847 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Finite geometric series", statement: "$S_n=a\\dfrac{1-r^n}{1-r}$ for $r\\ne1$." },
            ],
            steps: [
              { reasoning: "Identify the common ratio and the number of terms in the sum.", working: "a=7,\\quad r=3,\\quad n=5", marks: 1, markCode: "B" },
              { reasoning: "Substitute these values in the finite series formula.", working: "S_5=7\\frac{1-3^5}{1-3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the numerator and denominator and simplify.", working: "S_5=7\\frac{-242}{-2}=7(121)=847", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$847$",
            commonErrors: ["Using $n=4$ because there are four gaps between five terms.", "Using $r=2$ by confusing the difference with the ratio."],
          },
        },
        {
          id: "alg2-u7-finite-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student saves $\\$40$ in the first week and increases the amount saved each week by a factor of $1.5$. Find the total saved over 6 weeks. Round to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Total saved", answer: 831.25, tolerance: 0.01, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Finite geometric series", statement: "$S_n=a\\dfrac{1-r^n}{1-r}$ for $r\\ne1$." },
              { kind: "principle", name: "Currency rounding", statement: "Round the final monetary total to the nearest cent, not intermediate terms." },
            ],
            steps: [
              { reasoning: "Read the initial amount, growth factor, and number of weekly deposits.", working: "a=40,\\quad r=1.5,\\quad n=6", marks: 1, markCode: "B" },
              { reasoning: "Substitute into the finite geometric series formula.", working: "S_6=40\\frac{1-(1.5)^6}{1-1.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the powers and quotient without rounding intermediate values.", working: "(1.5)^6=11.390625;\\quad S_6=40\\frac{-10.390625}{-0.5}=831.25", marks: 1, markCode: "A" },
              { reasoning: "Round the calculated total to cents.", working: "\\$831.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The total saved is $\\$831.25$.",
            commonErrors: ["Using $n=5$ because the first deposit is considered week zero.", "Adding 1.5 dollars each week instead of multiplying by 1.5.", "Rounding each week's deposit before adding."],
          },
        },
        {
          id: "alg2-u7-finite-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "At the end of each month, Jordan deposits $\\$200$ into an account earning $1\\%$ interest per month. Assume each deposit earns interest starting in the following month. Find the account's deposit value at the end of month 4, just after the fourth deposit, by summing the accumulated value of each deposit.",
          parts: [
            { label: "a", prompt: "Write the accumulated value of the month 1 deposit at the end of month 4.", marks: 2 },
            { label: "b", prompt: "List the four deposit contributions at the end of month 4 and identify their common ratio when ordered from oldest to newest.", marks: 3 },
            { label: "c", prompt: "Write a finite geometric sum for the account value at the end of month 4.", marks: 2 },
            { label: "d", prompt: "Calculate the account value to the nearest cent and explain why the newest deposit earns no interest yet.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound growth", statement: "An amount earning a periodic rate $i$ is multiplied by $1+i$ for each completed earning period." },
              { kind: "formula", name: "Finite geometric series", statement: "$S_n=a\\dfrac{1-r^n}{1-r}$ for $r\\ne1$." },
            ],
            steps: [
              { part: "a", reasoning: "The first deposit earns interest during months 2, 3, and 4: three periods.", working: "200(1.01)^3=206.0602", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Count completed earning periods for each end-of-month deposit; each successive newer deposit has one fewer period.", working: "200(1.01)^3,\\;200(1.01)^2,\\;200(1.01),\\;200;\\quad r=\\frac{1}{1.01}", marks: 3, markCode: "M" },
              { part: "c", reasoning: "Factor out the newest deposit amount and express the contributions as a geometric series with the identified ratio.", working: "200\\left((1.01)^3+(1.01)^2+1.01+1\\right)", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Evaluate the four contributions; the fourth deposit is made at the end of month 4, so it has completed zero interest periods.", working: "200(1.030301+1.0201+1.01+1)=812.0802\\approx\\$812.08", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $200(1.01)^3=\\$206.0602$. (b) Contributions: $200(1.01)^3$, $200(1.01)^2$, $200(1.01)$, $200$; oldest-to-newest ratio $1/1.01$. (c) $200((1.01)^3+(1.01)^2+1.01+1)$. (d) $\\$812.08$; the newest deposit is made at the valuation time and has no completed interest period.",
            commonErrors: ["Giving the first deposit four months of interest instead of three.", "Giving the newest end-of-month deposit one full month of growth.", "Using the same ratio direction without matching the order of the listed terms."],
            examinerNote: "Part (c) gives an equivalent geometric sum in descending powers; a correctly ordered form using ratio $1/1.01$ also earns full credit.",
          },
        },
      ],
    },
    {
      id: "alg2-u7-infinite-geometric-series",
      title: "Infinite geometric series and applications",
      skill: "Determine convergence, find infinite sums, and apply geometric series to repeating decimals and payment streams.",
      lesson: {
        sections: [
          {
            heading: "When an infinite series has a sum",
            body: "The partial sums of an infinite geometric series approach a finite value exactly when the common ratio satisfies $|r|<1$. In that case, $r^n$ approaches 0 as $n$ grows, so the finite sum formula approaches $S_\\infty=\\dfrac{a}{1-r}$. If $|r|\\ge1$, the terms do not approach zero (except the all-zero case), so the series does not converge to a finite sum.",
          },
          {
            heading: "Repeating decimals",
            body: "A repeating decimal can be written as an infinite geometric series. For example, $0.272727\\ldots=0.27+0.0027+0.000027+\\cdots$ has first term $0.27$ and ratio $0.01$. Since $|0.01|<1$, its exact sum is $0.27/(1-0.01)=27/99=3/11$.",
          },
          {
            heading: "Annuities and loans",
            body: "Equal deposits or payments made at regular intervals can create a geometric series of present or future values. When finding a present value of equal end-of-period payments, earlier payments are discounted by successive powers of a factor less than 1. For a future value, earlier deposits accumulate by powers of a factor greater than 1; the finite sum formula still works for a finite number of payments. Clearly define the payment timing and the valuation date before choosing exponents.",
          },
        ],
        keyFormulas: [
          { name: "Infinite geometric series", statement: "$S_\\infty=\\dfrac{a}{1-r}$ when $|r|<1$." },
          { name: "Convergence condition", statement: "A geometric series converges to a finite sum when $|r|<1$; for $|r|\\ge1$ it diverges unless all terms are zero." },
        ],
        workedExample: {
          problem: "Write $0.454545\\ldots$ as a fraction using an infinite geometric series.",
          solution: "Separate the repeating blocks: $0.454545\\ldots=0.45+0.0045+0.000045+\\cdots$. Here $a=0.45$ and $r=0.01$, so $S_\\infty=0.45/(1-0.01)=0.45/0.99=45/99=5/11$.",
        },
      },
      questions: [
        {
          id: "alg2-u7-infinite-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Does the infinite geometric series $12+6+3+\\frac{3}{2}+\\cdots$ converge, and if so, what is its sum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It converges to $24$." },
              { id: "b", text: "It diverges because the terms are positive." },
              { id: "c", text: "It diverges because its common ratio is $2$." },
              { id: "d", text: "It converges to $18$." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Infinite geometric series", statement: "$S_\\infty=\\dfrac{a}{1-r}$ when $|r|<1$." },
            ],
            steps: [
              { reasoning: "Identify the common ratio and check the convergence condition.", working: "r=\\frac{1}{2},\\quad |r|<1", marks: 1, markCode: "M" },
              { reasoning: "Apply the infinite geometric sum formula.", working: "S_\\infty=\\frac{12}{1-\\frac12}=24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The series converges to $24$.",
            commonErrors: ["Treating a positive ratio as a reason for divergence.", "Adding only the first two or three terms and stopping."],
          },
        },
        {
          id: "alg2-u7-infinite-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the exact fraction represented by the repeating decimal $0.181818\\ldots$.",
          response: { type: "numeric", parts: [{ label: "Numerator", answer: 2 }, { label: "Denominator", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Repeating decimal as a series", statement: "A repeating block creates a geometric series whose common ratio is a power of 10 determined by the block length." },
              { kind: "formula", name: "Infinite geometric series", statement: "$S_\\infty=\\dfrac{a}{1-r}$ when $|r|<1$." },
            ],
            steps: [
              { reasoning: "Represent the repeating two-digit block as a geometric series.", working: "0.181818\\ldots=0.18+0.0018+0.000018+\\cdots", marks: 1, markCode: "M" },
              { reasoning: "Identify the first term and ratio and apply the infinite sum formula.", working: "a=0.18,\\quad r=0.01,\\quad S=\\frac{0.18}{1-0.01}=\\frac{18}{99}", marks: 1, markCode: "M" },
              { reasoning: "Reduce the fraction to lowest terms.", working: "\\frac{18}{99}=\\frac{2}{11}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.181818\\ldots=\\frac{2}{11}$",
            commonErrors: ["Using ratio $0.1$ instead of $0.01$ for a two-digit repeating block.", "Not reducing $18/99$ to lowest terms."],
          },
        },
        {
          id: "alg2-u7-infinite-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims that the infinite series $9-6+4-\\frac{8}{3}+\\cdots$ has a finite sum because its terms alternate in sign. Decide whether the series converges. If it converges, find the sum; if not, explain why not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Geometric convergence", statement: "An infinite geometric series converges to a finite sum if and only if $|r|<1$." },
              { kind: "formula", name: "Infinite geometric sum", statement: "$S_\\infty=\\dfrac{a}{1-r}$ only when $|r|<1$." },
            ],
            steps: [
              { reasoning: "Find the constant ratio by dividing a term by the previous term.", working: "r=\\frac{-6}{9}=-\\frac{2}{3}", marks: 1, markCode: "M" },
              { reasoning: "Check the magnitude of the ratio; alternation alone is not sufficient for convergence.", working: "|r|=\\frac{2}{3}<1", marks: 1, markCode: "R" },
              { reasoning: "Since the absolute ratio is less than 1, the series does converge and the formula applies.", working: "S_\\infty=\\frac{9}{1-(-\\frac{2}{3})}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the denominator and calculate the exact sum.", working: "S_\\infty=\\frac{9}{\\frac53}=\\frac{27}{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The series converges because $|r|=2/3<1$; its sum is $27/5$.",
            commonErrors: ["Claiming all alternating series converge without checking the ratio.", "Using $1-r=1-2/3$ instead of $1-(-2/3)$."],
          },
        },
        {
          id: "alg2-u7-infinite-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A community center places a $\\$500$ payment into an account at the end of each year for 4 years. The account earns $5\\%$ annual interest, and each payment earns interest starting in the year after it is deposited. Find the account value immediately after the fourth payment. Then consider the same sequence of annual $\\$500$ payments as a perpetual end-of-year stream valued immediately before the first payment; discount each payment back to that date at $5\\%$ per year.",
          parts: [
            { label: "a", prompt: "Write the four-year account value as a finite geometric sum, listing the exponents for the four deposits.", marks: 3 },
            { label: "b", prompt: "Use a finite geometric series formula to calculate the four-year account value to the nearest cent.", marks: 3 },
            { label: "c", prompt: "Write the present value of the perpetual end-of-year payments as an infinite geometric series and identify its first term and ratio.", marks: 2 },
            { label: "d", prompt: "Calculate the perpetual stream's present value and explain why the sum converges.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound interest", statement: "An amount earning an annual rate $i$ is multiplied by $1+i$ for each completed year." },
              { kind: "formula", name: "Finite geometric series", statement: "$S_n=a\\dfrac{1-r^n}{1-r}$ for $r\\ne1$." },
              { kind: "formula", name: "Infinite geometric series", statement: "$S_\\infty=\\dfrac{a}{1-r}$ when $|r|<1$." },
            ],
            steps: [
              { part: "a", reasoning: "The oldest deposit earns interest for three completed years; each later deposit earns one fewer year, and the last deposit earns none yet.", working: "500(1.05)^3+500(1.05)^2+500(1.05)+500", marks: 3, markCode: "M" },
              { part: "b", reasoning: "This finite geometric sequence has newest-to-oldest first term 500 and ratio 1.05 when ordered from newest to oldest; evaluate all four contributions.", working: "500\\left(1+1.05+(1.05)^2+(1.05)^3\\right)=500\\frac{(1.05)^4-1}{1.05-1}=2155.0625\\approx\\$2,155.06", marks: 3, markCode: "A" },
              { part: "c", reasoning: "Each payment is discounted one additional year relative to the previous payment; the first payment is discounted one year.", working: "\\frac{500}{1.05}+\\frac{500}{(1.05)^2}+\\frac{500}{(1.05)^3}+\\cdots;\\quad a=\\frac{500}{1.05},\\quad r=\\frac{1}{1.05}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "The discount ratio is less than 1, so the infinite series converges; apply the infinite sum formula and simplify.", working: "|r|=\\frac{1}{1.05}<1;\\quad S_\\infty=\\frac{500/1.05}{1-1/1.05}=\\frac{500}{0.05}=\\$10,000", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $500((1.05)^3+(1.05)^2+1.05+1)$. (b) Account value immediately after payment 4: $\\$2,155.06$. (c) Present-value series has $a=500/1.05$ and $r=1/1.05$. (d) Its sum is $\\$10,000$ because $|r|<1$.",
            commonErrors: ["Giving the first payment four years of growth rather than three.", "Giving the fourth payment interest before it has been deposited.", "Discounting the first perpetual end-of-year payment zero years instead of one year.", "Claiming the perpetual stream diverges because it has infinitely many payments without checking that the discounted terms approach zero."],
            examinerNote: "The four-year value is evaluated immediately after the fourth payment. The perpetual stream is a separate present-value question at the date immediately before its first payment.",
          },
        },
      ],
    },
  ],
};
