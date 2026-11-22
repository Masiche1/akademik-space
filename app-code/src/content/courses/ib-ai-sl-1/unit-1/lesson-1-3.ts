import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "aisl-u1-lesson-1-3",
  code: "1-3",
  title: "Financial Mathematics",
  goal: "I CAN solve compound interest, depreciation, inflation, loan and annuity problems using the GDC finance solver, and solve systems of linear equations.",
  standards: ["SL 1.4", "SL 1.7", "SL 1.8"],
  vocabulary: [
    { term: "Compound interest", definition: "Interest calculated on the original amount and on the interest already added." },
    { term: "Nominal annual interest rate", definition: "The yearly rate quoted before compounding; with $k$ compounding periods per year each period earns $\\frac{r}{k}$." },
    { term: "Depreciation", definition: "A decrease in the value of an asset over time, often modelled by a fixed percentage per year." },
    { term: "Inflation", definition: "The percentage rate at which prices rise over time, reducing purchasing power." },
    { term: "Annuity", definition: "A sequence of equal payments made at regular intervals." },
    { term: "Amortization", definition: "Repaying a loan by regular payments that cover both interest and part of the principal." },
    { term: "Balance", definition: "The amount still owed on a loan, or held in an account, after a number of payments." },
  ],
  concepts: [
    {
      id: "aisl-u1-compound-interest",
      title: "Compound interest, depreciation and inflation",
      skill: "Use $FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}$ and the GDC finance solver for growth, decay, inflation and real values.",
      lesson: {
        sections: [
          {
            heading: "The compound interest formula",
            body: "An amount $PV$ invested for $n$ years at a nominal annual rate of $r\\%$ compounded $k$ times per year grows to $FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}$. Annual compounding has $k = 1$, monthly has $k = 12$. In the GDC finance solver, enter $N$ as the number of years, $I\\%$ as $r$, $PV$ as a negative number (money paid in), $PMT = 0$, $P/Y = C/Y = k$, then solve for $FV$.",
          },
          {
            heading: "Depreciation and inflation",
            body: "Depreciation of $d\\%$ per year uses a multiplier of $1 - \\frac{d}{100}$, so value $= V_0\\left(1 - \\frac{d}{100}\\right)^n$. Inflation of $i\\%$ per year uses the multiplier $1 + \\frac{i}{100}$, so a price rises to $P_0\\left(1+\\frac{i}{100}\\right)^n$. To compare a future amount in today's money, divide by the inflation multiplier.",
          },
          {
            heading: "Solving for time or rate",
            body: "To find how long a sum takes to reach a target, either use the finance solver for $N$ or take logarithms. When compounding is monthly, $N$ in months means $N$ in years is divided by 12 in the formula. Decide in context whether to round $n$ up.",
          },
        ],
        keyFormulas: [
          { name: "Compound interest", statement: "$FV = PV\\left(1 + \\dfrac{r}{100k}\\right)^{kn}$" },
          { name: "Depreciation", statement: "$V = V_0\\left(1 - \\dfrac{d}{100}\\right)^{n}$" },
        ],
        workedExample: {
          problem: "Find the value of $\\$3000$ after 5 years at $4\\%$ per annum compounded annually.",
          solution: "$FV = 3000(1.04)^5 = 3000 \\times 1.216653 = \\$3649.96$.",
        },
      },
      questions: [
        {
          id: "aisl-u1-compound-interest-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$\\$2000$ is invested at $4\\%$ per annum compounded annually for 3 years. Find the final value of the investment.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$6240.00$" },
              { id: "b", text: "$\\$2240.00$" },
              { id: "c", text: "$\\$2249.73$" },
              { id: "d", text: "$\\$5488.00$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}$ with $k = 1$." },
            ],
            steps: [
              { reasoning: "Substitute $PV = 2000$, $r = 4$, $n = 3$, $k = 1$.", working: "2000(1.04)^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $1.04^3 = 1.124864$.", working: "2249.728 = 2249.73", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\$2249.73$",
            commonErrors: ["Using simple interest: $2000 + 3(80) = 2240$.", "Multiplying by $1.4$ instead of $1.04$."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A new car costs $\\$24\\,000$ and depreciates in value by $15\\%$ each year. Find the value of the car after 4 years. Give your answer to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Value after 4 years ($\\$$)", answer: 12528.15, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Depreciation", statement: "$V = V_0\\left(1 - \\frac{d}{100}\\right)^n$" },
            ],
            steps: [
              { reasoning: "A $15\\%$ decrease means the multiplier is $0.85$.", working: "V = 24000(0.85)^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power: $0.85^4 = 0.52200625$.", working: "24000 \\times 0.52200625", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest cent.", working: "12\\,528.15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$12\\,528.15$",
            commonErrors: ["Using a multiplier of $0.15$.", "Subtracting $15\\%$ of the original value four times (linear depreciation)."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$\\$5000$ is invested at a nominal annual interest rate of $3.6\\%$, compounded monthly. Find the least number of complete months for the value of the investment to exceed $\\$6000$.",
          response: { type: "numeric", parts: [{ label: "Number of months", answer: 61 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "With $k = 12$ the monthly multiplier is $1 + \\frac{3.6}{1200} = 1.003$." },
            ],
            steps: [
              { reasoning: "The monthly rate is $\\frac{3.6}{12} = 0.3\\%$; form the inequality after $m$ months.", working: "5000(1.003)^m > 6000", marks: 1, markCode: "M" },
              { reasoning: "Solve using logarithms or the GDC.", working: "m > \\frac{\\ln 1.2}{\\ln 1.003} = 60.87", marks: 1, markCode: "A" },
              { reasoning: "Check the neighbouring integers.", working: "5000(1.003)^{60} = 5984.5 < 6000,\\quad 5000(1.003)^{61} = 6002.4 > 6000", marks: 1, markCode: "M" },
              { reasoning: "The least number of complete months is 61.", working: "m = 61", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$61$ months",
            commonErrors: ["Using $3.6\\%$ per month rather than $0.3\\%$.", "Answering $60.87$ or $60$ instead of rounding up."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A bicycle costs $\\$450$ today. The annual rate of inflation is $2.5\\%$. Jun earns a salary of $\\$38\\,000$ per year, which increases by $3\\%$ each year.",
          parts: [
            { label: "a", prompt: "Find the expected price of the bicycle in 5 years. Give your answer to the nearest cent.", marks: 2 },
            { label: "b", prompt: "Find Jun's salary after 5 years. Give your answer to the nearest cent.", marks: 2 },
            { label: "c", prompt: "Hence find the value of Jun's salary after 5 years in terms of today's prices. Give your answer to the nearest dollar.", marks: 3 },
            { label: "d", prompt: "Interpret your answer to part (c) in the context of Jun's purchasing power.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound growth", statement: "$FV = PV\\left(1 + \\frac{r}{100}\\right)^n$" },
              { kind: "principle", name: "Real value", statement: "A future amount expressed in today's prices is the amount divided by the inflation multiplier." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the inflation multiplier $1.025$ for 5 years.", working: "450(1.025)^5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $1.025^5 = 1.131408\\ldots$.", working: "509.13", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the salary multiplier $1.03$ for 5 years.", working: "38000(1.03)^5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate: $1.03^5 = 1.159274\\ldots$.", working: "44\\,052.41", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the future salary by the 5-year inflation multiplier to get today's prices.", working: "\\frac{44052.41}{1.025^5}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute the value of the multiplier.", working: "\\frac{44052.41}{1.131408}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate and round.", working: "38\\,936", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The real salary $\\$38\\,936$ exceeds $\\$38\\,000$, so Jun's salary rises faster than prices and his purchasing power increases.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\$509.13$. (b) $\\$44\\,052.41$. (c) $\\$38\\,936$. (d) Jun can buy about $2.5\\%$ more than today, so his purchasing power increases.",
            commonErrors: ["Multiplying by the inflation multiplier instead of dividing in (c).", "Using $1.25$ for $2.5\\%$."],
            examinerNote: "FT from part (b) is allowed in part (c).",
          },
        },
        {
          id: "aisl-u1-compound-interest-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$\\$1500$ is invested at $5\\%$ per annum compounded annually for 4 years. Find the final value of the investment, to the nearest cent.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$1820.00$" },
              { id: "b", text: "$\\$2100.00$" },
              { id: "c", text: "$\\$1823.26$" },
              { id: "d", text: "$\\$1800.00$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$FV = PV(1.05)^{n}$ with annual compounding." },
            ],
            steps: [
              { reasoning: "Substitute $PV = 1500$, $r = 5$ and $n = 4$.", working: "1500(1.05)^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $1.05^4 = 1.21550625$.", working: "1500 \\times 1.21550625 = 1823.259 \\approx 1823.26", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\$1823.26$",
            commonErrors: ["Using simple interest $1500 + 4(75) = 1800$.", "Using a multiplier of $1.5$ instead of $1.05$."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An investment earns a nominal annual interest rate of $6\\%$, compounded quarterly. What is the multiplier applied to the balance in each quarter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.015$" },
              { id: "b", text: "$1.06$" },
              { id: "c", text: "$1.015$" },
              { id: "d", text: "$1.0015$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "With $k$ compounding periods per year each period earns $\\frac{r}{k}\\%$." },
            ],
            steps: [
              { reasoning: "Quarterly compounding means $k = 4$; the rate per quarter is $\\frac{6}{4} = 1.5\\%$.", working: "1 + \\frac{6}{100 \\times 4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the multiplier.", working: "1.015", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $1.015$",
            commonErrors: ["Using the annual multiplier $1.06$.", "Dividing by 100 twice, giving $1.0015$."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$\\$800$ is invested at $3\\%$ per annum compounded annually for 5 years. Find the final value of the investment, to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Final value ($\\$$)", answer: 927.42, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$FV = PV(1.03)^{5}$." },
            ],
            steps: [
              { reasoning: "Substitute into the formula.", working: "800(1.03)^5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $1.03^5 = 1.1592740743$.", working: "927.4193 \\approx 927.42", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$927.42$",
            commonErrors: ["Using $800 + 5(24) = 920$ (simple interest)."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A machine worth $\\$5000$ depreciates in value by $18\\%$ each year. Find its value after 3 years, to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Value after 3 years ($\\$$)", answer: 2756.84, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Depreciation", statement: "$V = V_0\\left(1 - \\frac{d}{100}\\right)^{n}$" },
            ],
            steps: [
              { reasoning: "An $18\\%$ decrease means the multiplier is $0.82$.", working: "V = 5000(0.82)^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power: $0.82^3 = 0.551368$.", working: "5000 \\times 0.551368", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest cent.", working: "2756.84", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$2756.84$",
            commonErrors: ["Using a multiplier of $1.18$ (growth instead of decay).", "Subtracting $18\\%$ of $5000$ each year linearly."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A price of $\\$80$ rises by $4\\%$ per annum. Find the price after 2 years, to the nearest cent.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$88.32$" },
              { id: "b", text: "$\\$86.40$" },
              { id: "c", text: "$\\$83.20$" },
              { id: "d", text: "$\\$86.53$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound growth", statement: "$P = P_0(1.04)^{n}$ for $4\\%$ inflation." },
            ],
            steps: [
              { reasoning: "Apply the inflation multiplier for 2 years.", working: "80(1.04)^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $1.04^2 = 1.0816$.", working: "86.528 \\approx 86.53", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\$86.53$",
            commonErrors: ["Using simple interest $80 + 2(3.20) = 86.40$.", "Multiplying by $1.4$ instead of $1.04$."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$\\$10\\,000$ is invested at a nominal annual interest rate of $4\\%$, compounded monthly, for 2 years. Find the final value of the investment, to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Final value ($\\$$)", answer: 10831.4, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}$ with $k = 12$, $N = kn = 24$." },
            ],
            steps: [
              { reasoning: "The monthly multiplier is $1 + \\frac{4}{1200} = 1.003333\\ldots$ applied for 24 months.", working: "10000\\left(1 + \\frac{4}{1200}\\right)^{24}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the GDC or finance solver.", working: "10\\,831.40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$10\\,831.33$",
            commonErrors: ["Using $k = 1$ (annual compounding), giving $10\\,816.00$.", "Using $N = 2$ months instead of 24."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "$\\$20\\,000$ is invested at a nominal annual interest rate of $6\\%$, compounded monthly.",
          parts: [
            { label: "a", prompt: "Find the value of the investment after 3 years, to the nearest cent.", marks: 3 },
            { label: "b", prompt: "Find the total interest earned over the 3 years, to the nearest cent.", marks: 1 },
            { label: "c", prompt: "Find the least number of complete years for the investment to at least double in value.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}$ with $k = 12$." },
            ],
            steps: [
              { part: "a", reasoning: "The monthly multiplier is $1 + \\frac{6}{1200} = 1.005$ applied for $3 \\times 12 = 36$ months.", working: "20000(1.005)^{36}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate $1.005^{36} = 1.1966806\\ldots$.", working: "20000 \\times 1.1966806", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Round to the nearest cent.", working: "23\\,933.61", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract the amount invested from the final value.", working: "23933.61 - 20000 = 3933.61", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set up the inequality $20000(1.005)^{m} \\ge 40000$ for $m$ months and solve.", working: "1.005^{m} \\ge 2 \\Rightarrow m \\ge \\frac{\\ln 2}{\\ln 1.005} = 138.97", marks: 1, markCode: "M" },
              { part: "c", reasoning: "139 months is $11$ years $7$ months, so the investment has not doubled after 11 complete years; check $20000(1.005)^{132} = 38\\,630 < 40\\,000$ and $20000(1.005)^{144} = 41\\,018 > 40\\,000$.", working: "12 \\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$23\\,933.61$. (b) $\\$3933.61$. (c) $12$ years.",
            commonErrors: ["In (c), answering $11$ years because $1.06^{11} = 1.898 < 2$ but forgetting the monthly compounding gives a slightly different threshold.", "Using the nominal rate $6\\%$ per month."],
            examinerNote: "For (c), accept a GDC table or solver showing $m = 139$ months, interpreted as 12 complete years.",
          },
        },
        {
          id: "aisl-u1-compound-interest-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$\\$2500$ is invested at $2\\%$ per annum compounded annually for 10 years. Find the final value of the investment, to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Final value ($\\$$)", answer: 3047.49, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$FV = PV(1.02)^{10}$." },
            ],
            steps: [
              { reasoning: "Substitute into the formula.", working: "2500(1.02)^{10}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $1.02^{10} = 1.21899442\\ldots$.", working: "3047.486 \\approx 3047.49", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$3047.49$",
            commonErrors: ["Using simple interest $2500 + 10(50) = 3000$."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Lena deposits $\\$200$ at the end of every month into an account paying a nominal annual interest rate of $4.8\\%$, compounded monthly, for 10 years. Which entries are correct for the GDC finance solver?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$N = 120$, $I\\% = 4.8$, $PV = 0$, $PMT = 200$, $P/Y = C/Y = 1$" },
              { id: "b", text: "$N = 120$, $I\\% = 4.8$, $PV = 0$, $PMT = -200$, $P/Y = C/Y = 12$" },
              { id: "c", text: "$N = 10$, $I\\% = 4.8$, $PV = 0$, $PMT = -200$, $P/Y = C/Y = 12$" },
              { id: "d", text: "$N = 120$, $I\\% = 4.8$, $PV = -200$, $PMT = 0$, $P/Y = C/Y = 12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Finance solver entries", statement: "For monthly payments over 10 years, $N = 120$; deposits are negative $PMT$; $P/Y = C/Y = 12$." },
            ],
            steps: [
              { reasoning: "There are $10 \\times 12 = 120$ monthly payments and compounding is monthly.", working: "N = 120,\\quad P/Y = C/Y = 12", marks: 1, markCode: "M" },
              { reasoning: "The account starts empty ($PV = 0$) and each deposit is money paid in, so $PMT = -200$.", working: "PV = 0,\\quad PMT = -200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $N = 120$, $I\\% = 4.8$, $PV = 0$, $PMT = -200$, $P/Y = C/Y = 12$",
            commonErrors: ["Using $N = 10$ (years) instead of 120 payments.", "Entering $PV = -200$ instead of $PMT = -200$."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A laptop costs $\\$1500$ today. The annual rate of inflation is $3.5\\%$. Amir can invest money at a nominal annual interest rate of $4.5\\%$, compounded annually.",
          parts: [
            { label: "a", prompt: "Find the expected price of the laptop in 4 years, to the nearest cent.", marks: 2 },
            { label: "b", prompt: "Find the value in 4 years, in today's prices, of $\\$1500$ invested at $4.5\\%$ per annum. Give your answer to the nearest dollar.", marks: 4 },
            { label: "c", prompt: "Interpret your answer to part (b) in terms of purchasing power.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound growth", statement: "$FV = PV\\left(1 + \\frac{r}{100}\\right)^{n}$" },
              { kind: "principle", name: "Real value", statement: "Value in today's prices is the future value divided by the inflation multiplier $(1.035)^{4}$." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the inflation multiplier $1.035$ for 4 years.", working: "1500(1.035)^4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $1.035^4 = 1.147523\\ldots$.", working: "1721.28", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find the future value of the investment at $4.5\\%$ for 4 years.", working: "1500(1.045)^4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate: $1.045^4 = 1.192519\\ldots$.", working: "1788.78", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by the 4-year inflation multiplier to express in today's prices.", working: "\\frac{1788.78}{1.035^4} = \\frac{1788.78}{1.147523}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round.", working: "1559", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compare the real value with the original $\\$1500$.", working: "1559 - 1500 = 59", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the interpretation: the investment grows faster than prices, so purchasing power rises by about $\\$59$ in today's money.", working: "\\$59", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\$1721.28$. (b) $\\$1559$. (c) The investment beats inflation, so its purchasing power grows by about $\\$59$ in today's prices.",
            commonErrors: ["Multiplying by $1.035^{4}$ instead of dividing in part (b).", "Comparing $1788.78$ with $1721.28$ directly without converting to today's prices."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A vehicle worth $\\$20\\,000$ depreciates in value by $12\\%$ each year. Find its value after 1 year.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$17\\,600$" },
              { id: "b", text: "$\\$16\\,000$" },
              { id: "c", text: "$\\$17\\,760$" },
              { id: "d", text: "$\\$18\\,800$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Depreciation", statement: "$V = V_0\\left(1 - \\frac{d}{100}\\right)^{n}$" },
            ],
            steps: [
              { reasoning: "A $12\\%$ decrease means the multiplier is $0.88$.", working: "V = 20000 \\times 0.88", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "17\\,600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\$17\\,600$",
            commonErrors: ["Using a multiplier of $1.12$ (growth), giving $22\\,400$.", "Subtracting $12\\%$ incorrectly to get $17\\,760$."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$\\$5000$ is invested at a nominal annual interest rate of $6\\%$, compounded quarterly, for 2 years. Which value is closest to the final value of the investment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$5632.46$" },
              { id: "b", text: "$\\$5618.00$" },
              { id: "c", text: "$\\$6000.00$" },
              { id: "d", text: "$\\$5450.00$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$FV = PV\\left(1 + \\frac{r}{100k}\\right)^{kn}$ with $k = 4$, $kn = 8$." },
            ],
            steps: [
              { reasoning: "The quarterly multiplier is $1 + \\frac{6}{400} = 1.015$ applied for 8 quarters.", working: "5000(1.015)^8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $1.015^8 = 1.1264926\\ldots$.", working: "5000 \\times 1.1264926 = 5632.46", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\$5632.46$",
            commonErrors: ["Using annual compounding $5000(1.06)^2 = 5618$ (choice b).", "Using $1.06$ per quarter."],
          },
        },
        {
          id: "aisl-u1-compound-interest-q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "$\\$8000$ is invested at $4\\%$ per annum compounded annually. Over the same period prices rise by $2.5\\%$ per annum due to inflation.",
          parts: [
            { label: "a", prompt: "Find the value of the investment after 6 years, to the nearest cent.", marks: 2 },
            { label: "b", prompt: "Find the least number of complete years for the investment to exceed $\\$12\\,000$.", marks: 3 },
            { label: "c", prompt: "Find the value of the investment after 6 years in terms of today's prices, to the nearest dollar.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound growth", statement: "$FV = PV(1.04)^{n}$ for the investment and $P = P_0(1.025)^{n}$ for prices." },
              { kind: "principle", name: "Real value", statement: "Today's-price value is the future value divided by the inflation multiplier." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the investment multiplier for 6 years.", working: "8000(1.04)^6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $1.04^6 = 1.265319\\ldots$.", working: "10\\,122.55", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set up the inequality $8000(1.04)^{n} > 12\\,000$ and solve.", working: "1.04^{n} > 1.5 \\Rightarrow n > \\frac{\\ln 1.5}{\\ln 1.04} = 10.34", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check the neighbouring integers: $1.04^{10} = 1.480 < 1.5$ and $1.04^{11} = 1.539 > 1.5$.", working: "n = 11", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the least number of complete years.", working: "11 \\text{ years}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the 6-year future value by the 6-year inflation multiplier $(1.025)^6$.", working: "\\frac{10122.55}{1.025^6}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute $1.025^6 = 1.159693\\ldots$.", working: "\\frac{10122.55}{1.159693}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate and round.", working: "8729", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$10\\,122.55$. (b) $11$ years. (c) $\\$8729$.",
            commonErrors: ["In (c), multiplying by $1.025^{6}$ instead of dividing.", "Comparing $10122.55$ with $12000$ without accounting for inflation."],
          },
        },
      ],
    },
    {
      id: "aisl-u1-loans-annuities",
      title: "Loans, annuities and linear systems",
      skill: "Use the GDC finance solver for loan payments, balances and annuity values, and solve systems of linear equations.",
      lesson: {
        sections: [
          {
            heading: "The finance solver for loans and annuities",
            body: "A loan or annuity involves regular payments. In the GDC solver, enter $N$ (total number of payments), $I\\%$ (nominal annual rate), $PV$, $PMT$, $FV$, $P/Y$ (payments per year) and $C/Y$ (compounding periods per year). Money received is positive and money paid out is negative. For a loan, $PV$ is the amount borrowed and $FV = 0$ at the end; solve for $PMT$. For an annuity saving plan, $PV = 0$ and you solve for $FV$.",
          },
          {
            heading: "Balances and interest paid",
            body: "After $m$ payments the outstanding balance is found by setting $N = m$ and solving for $FV$. Total repaid is $PMT \\times N$ and total interest is total repaid minus the amount borrowed. Interest in the first month is $PV \\times \\frac{r}{1200}$; the rest of the payment reduces the balance.",
          },
          {
            heading: "Systems of linear equations",
            body: "A problem with two unknowns and two conditions gives a system such as $2x + y = 7$ and $x - y = 2$. Solve it by elimination (add the equations: $3x = 9$) or with the GDC equation solver. In context, define variables first and check the solution against both conditions.",
          },
        ],
        keyFormulas: [
          { name: "Monthly loan payment", statement: "$PMT = \\dfrac{PV \\cdot i}{1 - (1+i)^{-N}},\\; i = \\dfrac{r}{1200}$" },
          { name: "Interest paid", statement: "$\\text{Interest} = PMT \\times N - PV$" },
        ],
        workedExample: {
          problem: "A loan of $\\$15\\,000$ at $6\\%$ per annum compounded monthly is repaid with equal monthly payments over 4 years. Find the monthly payment.",
          solution: "Use the GDC with $N = 48$, $I\\% = 6$, $PV = 15000$, $FV = 0$, $P/Y = C/Y = 12$. Solving for $PMT$ gives $\\$352.28$.",
        },
      },
      questions: [
        {
          id: "aisl-u1-loans-annuities-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the simultaneous equations $2x + y = 7$ and $x - y = 2$. Which pair $(x, y)$ is the solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, 1)$" },
              { id: "b", text: "$(1, 5)$" },
              { id: "c", text: "$(2, 3)$" },
              { id: "d", text: "$(4, -1)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Adding or subtracting equations removes a variable while preserving the solution." },
            ],
            steps: [
              { reasoning: "Add the two equations to eliminate $y$.", working: "3x = 9 \\Rightarrow x = 3", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $x - y = 2$.", working: "3 - y = 2 \\Rightarrow y = 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(3, 1)$",
            commonErrors: ["Choosing $(4,-1)$, which satisfies only the first equation.", "Choosing $(2,3)$, which also satisfies only the first equation."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A loan of $\\$15\\,000$ has a nominal annual interest rate of $6\\%$, compounded monthly. The loan is repaid with equal monthly payments over 4 years, the first payment being made one month after the loan is taken out. Find the monthly payment, to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Monthly payment ($\\$$)", answer: 352.28, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Loan repayment", statement: "$PMT = \\dfrac{PV \\cdot i}{1 - (1+i)^{-N}}$ with $i = \\frac{r}{1200}$." },
            ],
            steps: [
              { reasoning: "Identify the values for the finance solver: 48 monthly payments at $0.5\\%$ per month.", working: "N = 48,\\; I\\% = 6,\\; PV = 15000,\\; FV = 0,\\; P/Y = C/Y = 12", marks: 1, markCode: "M" },
              { reasoning: "Equivalently, apply the loan formula with $i = 0.005$.", working: "PMT = \\frac{15000(0.005)}{1 - 1.005^{-48}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to the nearest cent.", working: "PMT = 352.28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$352.28$",
            commonErrors: ["Setting $N = 4$ instead of 48.", "Setting $P/Y = 1$ while payments are monthly."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Maya deposits $\\$200$ at the end of every month into an account that pays a nominal annual interest rate of $4.8\\%$, compounded monthly. The account starts with a balance of zero. Find the value of her account after 10 years. Give your answer to the nearest dollar.",
          response: { type: "numeric", parts: [{ label: "Account value ($\\$$)", answer: 30726, tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Annuity future value", statement: "$FV = PMT\\cdot\\dfrac{(1+i)^N - 1}{i}$ with $i = \\frac{r}{1200}$." },
            ],
            steps: [
              { reasoning: "Monthly rate $i = \\frac{4.8}{1200} = 0.004$ and the number of deposits is $N = 120$.", working: "N = 120,\\; i = 0.004", marks: 1, markCode: "M" },
              { reasoning: "Use the finance solver with $PV = 0$, $PMT = -200$, $P/Y = C/Y = 12$, or the annuity formula.", working: "FV = 200\\cdot\\frac{1.004^{120} - 1}{0.004}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $1.004^{120} = 1.61453\\ldots$.", working: "200 \\times 153.63", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest dollar.", working: "30\\,726", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$30\\,726$",
            commonErrors: ["Entering $PV = -200$ instead of $PMT = -200$.", "Using $N = 10$ with annual compounding."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Sana takes out a loan of $\\$20\\,000$ at a nominal annual interest rate of $7.2\\%$, compounded monthly. She repays the loan with equal monthly payments over 5 years, the first payment being made one month after the loan is taken out.",
          parts: [
            { label: "a", prompt: "Find her monthly payment, to the nearest cent.", marks: 3 },
            { label: "b", prompt: "Using your answer to part (a), find the total interest she pays over the 5 years.", marks: 2 },
            { label: "c", prompt: "Find the amount she still owes immediately after her 24th payment. Give your answer to the nearest dollar.", marks: 3 },
            { label: "d", prompt: "Find how much of her first payment reduces the amount owed (that is, is not interest).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Loan repayment", statement: "$PMT = \\dfrac{PV \\cdot i}{1 - (1+i)^{-N}}$, $i = \\frac{r}{1200}$." },
              { kind: "principle", name: "Balance after $m$ payments", statement: "Use the same finance solver values with $N = m$ and solve for $FV$." },
            ],
            steps: [
              { part: "a", reasoning: "Enter the values: 60 monthly payments at $0.6\\%$ per month.", working: "N = 60,\\; I\\% = 7.2,\\; PV = 20000,\\; FV = 0,\\; P/Y = C/Y = 12", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve for $PMT$.", working: "PMT = \\frac{20000(0.006)}{1 - 1.006^{-60}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate ($1.006^{60} = 1.431788$).", working: "397.98", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Total repaid is 60 payments; subtract the amount borrowed.", working: "60 \\times 397.98 - 20000", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "3878.80", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Change $N$ to 24 (payments made), keep the other values, and solve for $FV$.", working: "N = 24,\\; PV = 20000,\\; PMT = -397.98", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use $FV = 20000(1.006)^{24} - PMT\\cdot\\frac{1.006^{24} - 1}{0.006}$ with $1.006^{24} = 1.154385$.", working: "23\\,087.70 - 10\\,240.20", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate and round; the balance owed is positive.", working: "12\\,848", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Interest in month 1 is the monthly rate times the amount borrowed.", working: "20000 \\times 0.006 = 120", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The rest of the payment reduces the balance.", working: "397.98 - 120 = 277.98", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$397.98$. (b) $\\$3878.80$. (c) $\\$12\\,848$. (d) $\\$277.98$.",
            commonErrors: ["Using $I\\% = 0.6$ instead of $7.2$ in the solver.", "In (c), taking the balance after 36 payments rather than 24.", "Subtracting the whole payment instead of only the principal part in (d)."],
            examinerNote: "In (c) accept $\\$12\\,848$ to $\\$12\\,850$ depending on whether the rounded or unrounded payment is used.",
          },
        },
        {
          id: "aisl-u1-loans-annuities-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the simultaneous equations $x + y = 10$ and $x - y = 4$. Which pair $(x, y)$ is the solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6, 4)$" },
              { id: "b", text: "$(7, 3)$" },
              { id: "c", text: "$(8, 2)$" },
              { id: "d", text: "$(5, 5)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Adding the equations eliminates $y$." },
            ],
            steps: [
              { reasoning: "Add the two equations.", working: "2x = 14 \\Rightarrow x = 7", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $x + y = 10$.", working: "y = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $(7, 3)$",
            commonErrors: ["Choosing $(6,4)$, which satisfies only the first equation."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the simultaneous equations $3x + 2y = 12$ and $x + 2y = 8$. Which pair $(x, y)$ is the solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2, 3)$" },
              { id: "b", text: "$(3, 2)$" },
              { id: "c", text: "$(4, 1)$" },
              { id: "d", text: "$(1, 4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Subtracting equations with the same $y$ coefficient removes $y$." },
            ],
            steps: [
              { reasoning: "Subtract the second equation from the first to eliminate $y$.", working: "2x = 4 \\Rightarrow x = 2", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $x + 2y = 8$.", working: "2 + 2y = 8 \\Rightarrow y = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(2, 3)$",
            commonErrors: ["Adding the equations instead of subtracting, giving $4x + 4y = 20$."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A loan of $\\$10\\,000$ has a nominal annual interest rate of $6\\%$, compounded monthly. The loan is repaid with equal monthly payments over 3 years, the first payment being made one month after the loan is taken out. Find the monthly payment, to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Monthly payment ($\\$$)", answer: 304.22, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Loan repayment", statement: "$PMT = \\dfrac{PV \\cdot i}{1 - (1+i)^{-N}}$, $i = \\frac{r}{1200} = 0.005$." },
            ],
            steps: [
              { reasoning: "There are $3 \\times 12 = 36$ monthly payments at $0.5\\%$ per month.", working: "N = 36,\\; i = 0.005", marks: 1, markCode: "M" },
              { reasoning: "Apply the loan formula.", working: "PMT = \\frac{10000(0.005)}{1 - 1.005^{-36}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to the nearest cent.", working: "304.22", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$304.22$",
            commonErrors: ["Using $N = 3$ instead of 36.", "Using $i = 0.06$ instead of $0.005$."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Priya deposits $\\$150$ at the end of every month into an account paying a nominal annual interest rate of $5\\%$, compounded monthly, for 5 years. The account starts with a balance of zero. Find the value of her account after 5 years, to the nearest dollar.",
          response: { type: "numeric", parts: [{ label: "Account value ($\\$$)", answer: 10201, tolerance: 2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Annuity future value", statement: "$FV = PMT\\cdot\\dfrac{(1+i)^N - 1}{i}$ with $i = \\frac{5}{1200}$." },
            ],
            steps: [
              { reasoning: "Monthly rate $i = \\frac{5}{1200} = 0.0041667$ and the number of deposits is $N = 60$.", working: "N = 60,\\; i = 0.0041667", marks: 1, markCode: "M" },
              { reasoning: "Use the finance solver or the annuity formula.", working: "FV = 150\\cdot\\frac{(1.0041667)^{60} - 1}{0.0041667}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $(1.0041667)^{60} = 1.283358\\ldots$.", working: "150 \\times 68.006", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest dollar.", working: "10\\,201", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$10\\,201$",
            commonErrors: ["Using $N = 5$ instead of 60.", "Entering $PV = -150$ instead of $PMT = -150$."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the simultaneous equations $4x + y = 9$ and $2x + y = 5$. Which pair $(x, y)$ is the solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1, 5)$" },
              { id: "b", text: "$(2, 1)$" },
              { id: "c", text: "$(2.5, 0)$" },
              { id: "d", text: "$(3, -3)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Subtracting equations with the same $y$ coefficient removes $y$." },
            ],
            steps: [
              { reasoning: "Subtract the second equation from the first.", working: "2x = 4 \\Rightarrow x = 2", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $2x + y = 5$.", working: "4 + y = 5 \\Rightarrow y = 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $(2, 1)$",
            commonErrors: ["Checking only one equation when choosing the answer."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the simultaneous equations $2x + 5y = 20$ and $3x - 5y = 5$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 5 },
              { label: "$y$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Adding equations with opposite $y$ coefficients removes $y$." },
            ],
            steps: [
              { reasoning: "Add the two equations to eliminate $y$.", working: "5x = 25 \\Rightarrow x = 5", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 5$ into $2x + 5y = 20$.", working: "10 + 5y = 20 \\Rightarrow y = 2", marks: 1, markCode: "A" },
              { reasoning: "Check both equations: $3(5) - 5(2) = 15 - 10 = 5$.", working: "x = 5,\\; y = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$, $y = 2$",
            commonErrors: ["Subtracting instead of adding, which doubles the $y$ term instead of eliminating it."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Tom takes out a loan of $\\$18\\,000$ at a nominal annual interest rate of $5.4\\%$, compounded monthly. He repays the loan with equal monthly payments over 4 years, the first payment being made one month after the loan is taken out.",
          parts: [
            { label: "a", prompt: "Find his monthly payment, to the nearest cent.", marks: 3 },
            { label: "b", prompt: "Find the total interest he pays over the 4 years, to the nearest dollar.", marks: 1 },
            { label: "c", prompt: "Find the amount he still owes immediately after his 18th payment, to the nearest dollar.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Loan repayment", statement: "$PMT = \\dfrac{PV \\cdot i}{1 - (1+i)^{-N}}$, $i = \\frac{r}{1200} = 0.0045$." },
              { kind: "principle", name: "Balance after $m$ payments", statement: "Use the finance solver with $N = m$ and solve for $FV$." },
            ],
            steps: [
              { part: "a", reasoning: "There are $4 \\times 12 = 48$ monthly payments at $0.45\\%$ per month.", working: "N = 48,\\; i = 0.0045,\\; PV = 18000,\\; FV = 0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the loan formula.", working: "PMT = \\frac{18000(0.0045)}{1 - 1.0045^{-48}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate ($1.0045^{48} = 1.240520\\ldots$).", working: "417.76", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Total repaid minus amount borrowed.", working: "48 \\times 417.76 - 18000 = 2052.5 \\approx 2053", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $N = 18$ in the solver (or use $FV = PV(1+i)^{18} - PMT\\frac{(1+i)^{18}-1}{i}$) and solve for $FV$.", working: "18000(1.0045)^{18} - 417.76\\cdot\\frac{1.0045^{18} - 1}{0.0045}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with $1.0045^{18} = 1.084172\\ldots$: $19515.1 - 7814.2$.", working: "11\\,701", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$417.76$. (b) $\\$2053$. (c) $\\$11\\,701$.",
            commonErrors: ["Using $N = 4$ instead of 48 in the solver.", "In (c), solving for $FV$ with $N = 30$ (remaining payments) instead of $N = 18$ (payments made)."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the simultaneous equations $3x + y = 10$ and $x + y = 6$. Which pair $(x, y)$ is the solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1, 7)$" },
              { id: "b", text: "$(4, 2)$" },
              { id: "c", text: "$(3, 3)$" },
              { id: "d", text: "$(2, 4)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Subtracting equations removes $y$." },
            ],
            steps: [
              { reasoning: "Subtract the second equation from the first.", working: "2x = 4 \\Rightarrow x = 2", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $x + y = 6$.", working: "y = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $(2, 4)$",
            commonErrors: ["Choosing $(4,2)$, which satisfies only the second equation."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A loan of $\\$15\\,000$ at $6\\%$ per annum compounded monthly is repaid with equal monthly payments over 5 years. Which entries are correct for the GDC finance solver?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$N = 60$, $I\\% = 6$, $PV = -15000$, $FV = 0$, $P/Y = C/Y = 12$" },
              { id: "b", text: "$N = 5$, $I\\% = 6$, $PV = 15000$, $FV = 0$, $P/Y = C/Y = 12$" },
              { id: "c", text: "$N = 60$, $I\\% = 6$, $PV = 15000$, $FV = 0$, $P/Y = 1$, $C/Y = 12$" },
              { id: "d", text: "$N = 60$, $I\\% = 6$, $PV = 15000$, $FV = 0$, $P/Y = C/Y = 12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Finance solver entries", statement: "For a loan, $PV$ is the amount borrowed (positive), $FV = 0$, and $N$ counts payments." },
            ],
            steps: [
              { reasoning: "There are $5 \\times 12 = 60$ monthly payments.", working: "N = 60", marks: 1, markCode: "M" },
              { reasoning: "The borrower receives $15000$ (positive $PV$), repays fully ($FV = 0$), and payments and compounding are both monthly.", working: "PV = 15000,\\; FV = 0,\\; P/Y = C/Y = 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $N = 60$, $I\\% = 6$, $PV = 15000$, $FV = 0$, $P/Y = C/Y = 12$",
            commonErrors: ["Using $N = 5$ (years) instead of 60 payments.", "Entering $PV = -15000$ (money received should be positive)."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A mortgage of $\\$120\\,000$ has a nominal annual interest rate of $4.8\\%$, compounded monthly. It is repaid with equal monthly payments over 25 years, the first payment being made one month after the mortgage is taken out.",
          parts: [
            { label: "a", prompt: "Find the monthly payment, to the nearest cent.", marks: 3 },
            { label: "b", prompt: "Find the total amount repaid over the 25 years, to the nearest dollar.", marks: 1 },
            { label: "c", prompt: "Find the total interest paid over the 25 years, to the nearest dollar.", marks: 1 },
            { label: "d", prompt: "Find the amount still owed immediately after the 120th payment, to the nearest dollar.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Loan repayment", statement: "$PMT = \\dfrac{PV \\cdot i}{1 - (1+i)^{-N}}$, $i = \\frac{r}{1200} = 0.004$." },
              { kind: "principle", name: "Balance after $m$ payments", statement: "Use the finance solver with $N = m$ and solve for $FV$." },
            ],
            steps: [
              { part: "a", reasoning: "There are $25 \\times 12 = 300$ monthly payments at $0.4\\%$ per month.", working: "N = 300,\\; i = 0.004,\\; PV = 120000,\\; FV = 0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the loan formula.", working: "PMT = \\frac{120000(0.004)}{1 - 1.004^{-300}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate ($1.004^{300} = 3.312176\\ldots$).", working: "687.56", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Total repaid is 300 payments.", working: "300 \\times 687.56 = 206\\,268", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract the amount borrowed.", working: "206\\,268 - 120\\,000 = 86\\,268", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $N = 120$ (payments made) in the solver and solve for $FV$.", working: "120000(1.004)^{120} - 687.56\\cdot\\frac{1.004^{120} - 1}{0.004}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with $1.004^{120} = 1.614535\\ldots$: $193\\,744.2 - 105\\,631.2$.", working: "88\\,113", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the balance owed.", working: "88\\,113", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$687.56$. (b) $\\$206\\,268$. (c) $\\$86\\,268$. (d) $\\$88\\,113$.",
            commonErrors: ["Using $N = 25$ instead of 300.", "In (d), using $N = 180$ (remaining payments) instead of $N = 120$ (payments made).", "Forgetting to subtract the loan amount when finding interest in (c)."],
            examinerNote: "Accept answers in (a) within $\\$0.02$ and in (d) within $\\$150$ depending on rounding.",
          },
        },
        {
          id: "aisl-u1-loans-annuities-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A loan of $\\$20\\,000$ has a nominal annual interest rate of $6\\%$, compounded monthly. How much interest is charged in the first month?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$120$" },
              { id: "b", text: "$\\$100$" },
              { id: "c", text: "$\\$10$" },
              { id: "d", text: "$\\$600$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Monthly interest", statement: "Interest in the first month is $PV \\times \\frac{r}{1200}$." },
            ],
            steps: [
              { reasoning: "The monthly rate is $\\frac{6}{1200} = 0.005$.", working: "20000 \\times 0.005", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\$100$",
            commonErrors: ["Using the annual rate $6\\%$ directly, giving $1200$ or $600$.", "Dividing by 12 twice."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "At a school play, adult tickets cost $\\$14$ and child tickets cost $\\$9$. A total of $35$ tickets were sold for $\\$425$. How many adult tickets were sold?",
          response: {
            type: "numeric",
            parts: [{ label: "Adult tickets", answer: 22 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Systems of linear equations", statement: "Two unknowns need two equations: total tickets and total revenue." },
            ],
            steps: [
              { reasoning: "Let $a$ be adult tickets and $c$ child tickets; write the two equations.", working: "a + c = 35,\\quad 14a + 9c = 425", marks: 1, markCode: "M" },
              { reasoning: "Substitute $c = 35 - a$ into the revenue equation.", working: "14a + 9(35 - a) = 425 \\Rightarrow 5a = 110", marks: 1, markCode: "M" },
              { reasoning: "Solve for $a$.", working: "a = 22", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$22$ adult tickets",
            commonErrors: ["Using $9a + 14c$ (swapping prices).", "Forgetting that tickets must be whole numbers."],
          },
        },
        {
          id: "aisl-u1-loans-annuities-q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A loan of $\\$5000$ has a nominal annual interest rate of $7.2\\%$, compounded monthly. It is repaid with equal monthly payments over 2 years, the first payment being made one month after the loan is taken out.",
          parts: [
            { label: "a", prompt: "Find the monthly payment, to the nearest cent.", marks: 3 },
            { label: "b", prompt: "Find the total interest paid over the 2 years, to the nearest cent.", marks: 1 },
            { label: "c", prompt: "Find the amount still owed immediately after the 12th payment, to the nearest dollar.", marks: 3 },
            { label: "d", prompt: "Find how much of the first monthly payment reduces the amount owed (that is, is not interest).", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Loan repayment", statement: "$PMT = \\dfrac{PV \\cdot i}{1 - (1+i)^{-N}}$, $i = \\frac{r}{1200} = 0.006$." },
              { kind: "principle", name: "Balance after $m$ payments", statement: "Use the finance solver with $N = m$ and solve for $FV$." },
            ],
            steps: [
              { part: "a", reasoning: "There are $2 \\times 12 = 24$ monthly payments at $0.6\\%$ per month.", working: "N = 24,\\; i = 0.006,\\; PV = 5000,\\; FV = 0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the loan formula.", working: "PMT = \\frac{5000(0.006)}{1 - 1.006^{-24}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate ($1.006^{24} = 1.154384\\ldots$).", working: "224.47", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Total repaid minus amount borrowed.", working: "24 \\times 224.47 - 5000 = 387.28", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $N = 12$ (payments made) and solve for $FV$.", working: "5000(1.006)^{12} - 224.47\\cdot\\frac{1.006^{12} - 1}{0.006}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with $1.006^{12} = 1.074425\\ldots$: $5372.12 - 2783.86$.", working: "2588", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the balance owed.", working: "2588", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Interest in month 1 is $5000 \\times 0.006 = 30$; the rest of the payment reduces the balance.", working: "224.47 - 30 = 194.47 \\approx 194.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$224.47$. (b) $\\$387.28$. (c) $\\$2588$. (d) $\\$194.47$.",
            commonErrors: ["In (c), using $N = 12$ as remaining payments rather than payments made.", "In (d), subtracting the whole payment instead of only the interest part."],
            examinerNote: "Accept $\\$2587$ to $\\$2589$ in (c) depending on rounding of the payment.",
          },
        },
      ],
    },
  ],
};
