import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "alg1-u3-3-2",
  code: "3-2",
  title: "Exponential Functions",
  goal: "I CAN model exponential growth and decay, interpret model parameters, and compare linear and exponential change.",
  standards: ["HSF-LE.A.1", "HSF-LE.A.2", "HSF-LE.A.3", "HSF-LE.B.5", "HSF-IF.C.8b"],
  vocabulary: [
    { term: "Exponential function", definition: "A function of the form $y=a b^t$, where the base $b$ is positive and not equal to 1." },
    { term: "Initial value", definition: "The output at input 0; in $y=a b^t$, it is $a$." },
    { term: "Growth factor", definition: "The multiplier applied for each unit increase in the input when the quantity grows; it is greater than 1." },
    { term: "Decay factor", definition: "The multiplier applied for each unit increase in the input when the quantity decreases; it is between 0 and 1." },
    { term: "Growth rate", definition: "The percent increase per input unit; if the rate is $r$, the growth factor is $1+r$." },
    { term: "Decay rate", definition: "The percent decrease per input unit; if the rate is $r$, the decay factor is $1-r$." },
    { term: "Constant ratio", definition: "The common quotient of consecutive outputs in a sequence or equally spaced table for an exponential model." },
  ],
  concepts: [
    {
      id: "alg1-u3-exponential-growth-decay",
      title: "Exponential growth and decay models",
      skill: "Build and interpret exponential models from a context, an initial value, a rate, or a table.",
      lesson: {
        sections: [
          {
            heading: "The initial value and multiplier",
            body: "An exponential model has the form $y=a b^t$. The value $a$ is the initial amount because $b^0=1$, so $y=a$ when $t=0$. The base $b$ is the factor multiplied by the amount for each one-unit increase in $t$. For equally spaced table values, divide each output by the previous output to find this constant factor.",
          },
          {
            heading: "Translate percent change into a factor",
            body: "For growth at rate $r$ per time unit, use $y=a(1+r)^t$. For decay at rate $r$, use $y=a(1-r)^t$. Write the rate as a decimal before adding or subtracting it from 1. For example, a 6% decrease has factor $1-0.06=0.94$, not $0.06$.",
          },
          {
            heading: "Interpret the model in context",
            body: "In $y=a(1+r)^t$, $a$ gives the starting amount and $r$ gives the relative change per time unit. Exponential change is repeated multiplication, so equal time intervals have a constant ratio, not a constant difference. State units and round only when the context asks for it.",
          },
        ],
        keyFormulas: [
          { name: "Exponential model", statement: "$y=a b^t$" },
          { name: "Growth model", statement: "$y=a(1+r)^t$, where $r$ is the growth rate as a decimal" },
          { name: "Decay model", statement: "$y=a(1-r)^t$, where $r$ is the decay rate as a decimal" },
        ],
        workedExample: {
          problem: "A $640$-gram sample loses 12% of its mass each hour. Write a model for its mass $M$ after $t$ hours, then find the mass after 2 hours.",
          solution: "The initial value is $640$. A 12% decrease leaves $1-0.12=0.88$ of the mass each hour, so $M(t)=640(0.88)^t$. After 2 hours, $M(2)=640(0.88)^2=640(0.7744)=495.616$. To the nearest gram, the mass is **496 grams**.",
        },
      },
      questions: [
        {
          id: "alg1-u3-expmodel-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A population starts at 800 and decreases by 15% each year. Which expression models the population $P$ after $t$ years?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P=800(0.15)^t$" },
              { id: "b", text: "$P=800(0.85)^t$" },
              { id: "c", text: "$P=800(1.15)^t$" },
              { id: "d", text: "$P=800-0.15t$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential decay", statement: "For decay at rate $r$, $y=a(1-r)^t$." },
            ],
            steps: [
              { reasoning: "A 15% decrease leaves 85% of the population each year.", working: "1-0.15=0.85", marks: 1, markCode: "M" },
              { reasoning: "Use 800 as the initial value and raise the annual factor to the number of years.", working: "P=800(0.85)^t", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $P=800(0.85)^t$",
            commonErrors: ["Using 0.15 as the remaining factor rather than the amount of decrease.", "Using a growth factor greater than 1 for a decreasing population."],
          },
        },
        {
          id: "alg1-u3-expmodel-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A table for an exponential function gives $f(0)=40$, $f(1)=50$, and $f(2)=62.5$. Find its growth factor. Enter the factor as a decimal.",
          response: { type: "numeric", parts: [{ label: "Growth factor", answer: 1.25 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Constant ratio", statement: "In an exponential table with equal input steps, each output is the previous output multiplied by the same factor." },
            ],
            steps: [
              { reasoning: "Divide consecutive outputs to determine the factor per unit step.", working: "\\frac{50}{40}=1.25", marks: 1, markCode: "M" },
              { reasoning: "Check that the next ratio agrees with an exponential pattern.", working: "\\frac{62.5}{50}=1.25", marks: 1, markCode: "A" },
              { reasoning: "The common ratio is the growth factor.", working: "b=1.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth factor $1.25$ (equivalently, a 25% increase per input unit).",
            commonErrors: ["Finding the difference, $10$, instead of the ratio.", "Reporting the growth rate $0.25$ when the question asks for the factor."],
          },
        },
        {
          id: "alg1-u3-expmodel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A chemical sample has an initial mass of 2,000 grams and decreases by 12% each hour. Use the exponential model to find its mass after 3 hours. Round to the nearest hundredth of a gram.",
          response: { type: "numeric", parts: [{ label: "Mass after 3 hours", answer: 1362.94, tolerance: 0.01, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential decay", statement: "A quantity decreasing by rate $r$ per unit has model $y=a(1-r)^t$." },
              { kind: "principle", name: "Rounding", statement: "Keep full precision during calculation and round the final value to the requested place." },
            ],
            steps: [
              { reasoning: "Convert the decrease rate into the remaining multiplier.", working: "1-0.12=0.88", marks: 1, markCode: "M" },
              { reasoning: "Use the initial mass and three repeated hourly changes.", working: "M(3)=2000(0.88)^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power and product.", working: "(0.88)^3=0.681472;\\quad M(3)=1362.944", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest hundredth of a gram.", working: "1362.944\\approx1362.94", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1,362.94$ grams",
            commonErrors: ["Subtracting 12 grams or 12% only once instead of applying the repeated factor.", "Rounding the factor or intermediate values before the last step."],
          },
        },
        {
          id: "alg1-u3-expmodel-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A bacteria culture begins with 300 bacteria and grows by 40% each hour. Let $N(t)$ be the model's predicted population after $t$ hours.",
          parts: [
            { label: "a", prompt: "State the initial value and hourly growth factor.", marks: 2 },
            { label: "b", prompt: "Write an exponential model for $N(t)$.", marks: 2 },
            { label: "c", prompt: "Use the model to find the predicted population after 2 hours.", marks: 2 },
            { label: "d", prompt: "Find the percent increase from the initial population to the model's prediction after 2 hours. Explain why it is not 40%.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential growth", statement: "$N(t)=a(1+r)^t$, where $a$ is the initial amount and $r$ is the rate as a decimal." },
              { kind: "principle", name: "Repeated percent change", statement: "A rate applies to the current amount in each interval; the total change over multiple intervals compounds." },
            ],
            steps: [
              { part: "a", reasoning: "Read the starting population and convert 40% to its growth factor.", working: "a=300;\\quad b=1+0.40=1.4", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Substitute the initial value and factor into the exponential form.", working: "N(t)=300(1.4)^t", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Evaluate the model after two one-hour growth periods.", working: "N(2)=300(1.4)^2=300(1.96)=588", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Compare the two-hour prediction with the initial value; the increase is $588-300=288$, which is 96% of 300. The 40% rate applies separately in each hour, so it compounds.", working: "\\frac{588-300}{300}\\cdot100\\%=96\\%", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) Initial value $300$, factor $1.4$; (b) $N(t)=300(1.4)^t$; (c) $588$ bacteria; (d) $96\\%$ increase over 2 hours because the 40% increase is applied twice to changing amounts.",
            commonErrors: ["Using $0.40$ as the growth factor instead of $1.40$.", "Claiming the two-hour change is 80% by adding two 40% rates."],
          },
        },
      ],
    },
    {
      id: "alg1-u3-compare-linear-exponential",
      title: "Comparing linear and exponential models",
      skill: "Distinguish linear from exponential models using differences, ratios, equations, and context, and interpret model parameters.",
      lesson: {
        sections: [
          {
            heading: "Additive change versus multiplicative change",
            body: "A linear model changes by the same amount over equal input intervals: $y=mt+b$, where $m$ is the constant rate of change. An exponential model changes by the same factor: $y=ab^t$, so its consecutive-output ratios are constant. In a table with equally spaced inputs, compare differences to identify linear patterns and ratios to identify exponential patterns.",
          },
          {
            heading: "Represent a situation with a model",
            body: "Use a linear model when a context adds or subtracts a fixed amount per time unit, such as saving 8 dollars each week. Use an exponential model when a quantity changes by a fixed percent or multiplier per time unit, such as an account growing by 12% each year. Check that the model's units, starting value, and rate match the context.",
          },
          {
            heading: "Interpret and compare parameters",
            body: "In $y=mt+b$, $b$ is the output at $t=0$ and $m$ is the additive change per unit. In $y=ab^t$, $a$ is the output at $t=0$ and $b$ is the multiplicative factor per unit. A factor $b>1$ is growth and $0<b<1$ is decay. Exponential outputs may eventually outgrow linear outputs with the same positive starting value, but compare actual values at the time interval in question before drawing a conclusion.",
          },
        ],
        keyFormulas: [
          { name: "Linear model", statement: "$y=mt+b$; equal input steps produce equal output differences" },
          { name: "Exponential model", statement: "$y=ab^t$; equal input steps produce equal output ratios" },
          { name: "Growth rate from factor", statement: "$r=b-1$ for growth factor $b>1$" },
        ],
        workedExample: {
          problem: "A savings plan A starts at 100 dollars and adds 20 dollars each month. Plan B starts at 100 dollars and grows by 10% each month. Write the models and compare the balances after 2 months.",
          solution: "Plan A adds a constant amount, so $A(t)=100+20t$. Plan B multiplies by $1.10$ each month, so $B(t)=100(1.10)^t$. After 2 months, $A(2)=140$ and $B(2)=100(1.21)=121$. **After 2 months, plan A has 19 dollars more.**",
        },
      },
      questions: [
        {
          id: "alg1-u3-compare-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A quantity has values $12, 18, 27, 40.5$ at equally spaced times. Which type of model best describes these values?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linear, because the differences are all 6" },
              { id: "b", text: "Exponential, because the ratios are all 1.5" },
              { id: "c", text: "Linear, because the ratios are all 1.5" },
              { id: "d", text: "Exponential, because the differences are all 6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Linear and exponential patterns", statement: "A linear pattern has constant differences for equal input steps; an exponential pattern has constant ratios." },
            ],
            steps: [
              { reasoning: "Check whether consecutive differences stay fixed.", working: "18-12=6;\\quad 27-18=9;\\quad 40.5-27=13.5", marks: 1, markCode: "M" },
              { reasoning: "The consecutive ratios are equal, indicating exponential change.", working: "\\frac{18}{12}=\\frac{27}{18}=\\frac{40.5}{27}=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Exponential, because the consecutive ratios are all $1.5$.",
            commonErrors: ["Assuming the first difference continues because it happens to equal 6.", "Confusing a constant ratio with a constant difference."],
          },
        },
        {
          id: "alg1-u3-compare-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Plan L has balance $L(t)=50+8t$, and plan E has balance $E(t)=50(1.12)^t$, where $t$ is the number of months. Find both balances after 3 months. Enter the difference $L(3)-E(3)$.",
          response: { type: "numeric", parts: [{ label: "Difference after 3 months", answer: 3.7536, tolerance: 0.001, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Evaluate a model", statement: "Substitute the specified input into each function to obtain the modeled output." },
              { kind: "property", name: "Exponential power", statement: "An exponential model applies its multiplicative factor once per input unit." },
            ],
            steps: [
              { reasoning: "Evaluate the linear model at 3 months.", working: "L(3)=50+8(3)=74", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the exponential model at 3 months.", working: "E(3)=50(1.12)^3=50(1.404928)=70.2464", marks: 1, markCode: "M" },
              { reasoning: "Subtract in the requested order; the positive result means Plan L is higher at that time.", working: "L(3)-E(3)=74-70.2464=3.7536", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.7536$ dollars (Plan L is higher by this amount).",
            commonErrors: ["Treating 12% growth as adding $12$ each month.", "Subtracting the balances in the reverse order."],
          },
        },
        {
          id: "alg1-u3-compare-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A table has equally spaced inputs $t=0,1,2,3$ and outputs $y=5, 15, 45, 135$. Decide whether a linear or exponential model fits the table. Give the initial value, the constant factor or rate of change, and an equation for the model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Linear differences", statement: "A linear function has a constant first difference for equal input increments." },
              { kind: "property", name: "Exponential ratios", statement: "An exponential function has a constant ratio for equal input increments." },
            ],
            steps: [
              { reasoning: "Compare consecutive differences to rule out a linear pattern.", working: "15-5=10;\\quad45-15=30;\\quad135-45=90", marks: 1, markCode: "M" },
              { reasoning: "Compare consecutive ratios; they are constant, so the pattern is exponential with factor 3.", working: "\\frac{15}{5}=\\frac{45}{15}=\\frac{135}{45}=3", marks: 1, markCode: "M" },
              { reasoning: "The output at $t=0$ is the initial value.", working: "a=5", marks: 1, markCode: "A" },
              { reasoning: "Substitute the initial value and factor into the exponential form.", working: "y=5(3)^t", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exponential model; initial value $5$, factor $3$ (growth rate 200% per step), equation $y=5(3)^t$.",
            commonErrors: ["Calling the pattern linear because its outputs increase.", "Reporting 3 as the growth rate rather than the factor; the rate is 2, or 200%."],
          },
        },
        {
          id: "alg1-u3-compare-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two savings plans begin with 50 dollars. Plan L adds 8 dollars each month, so $L(t)=50+8t$. Plan E increases by 12% each month, so $E(t)=50(1.12)^t$. Here $t$ is a nonnegative whole number of months.",
          parts: [
            { label: "a", prompt: "Find both plans' balances at month 0.", marks: 2 },
            { label: "b", prompt: "Find both balances at month 3, and state which is larger then.", marks: 3 },
            { label: "c", prompt: "Find both balances at month 6 to the nearest cent, and state which is larger then.", marks: 2 },
            { label: "d", prompt: "Explain how the models show that Plan L has constant dollar growth while Plan E has constant percent growth.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear model", statement: "$L(t)=mt+b$ has initial value $b$ and constant additive rate $m$." },
              { kind: "formula", name: "Exponential model", statement: "$E(t)=ab^t$ has initial value $a$ and constant multiplicative factor $b$." },
            ],
            steps: [
              { part: "a", reasoning: "At month 0, the linear term is zero and the exponential factor is $1.12^0=1$.", working: "L(0)=50;\\quad E(0)=50(1)=50", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Substitute 3 into each model and compare the outputs.", working: "L(3)=50+8(3)=74;\\quad E(3)=50(1.12)^3=70.2464\\approx70.25", marks: 2, markCode: "M" },
              { part: "b", reasoning: "At month 3, $74>70.2464$, so Plan L is larger.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute 6 and evaluate the exponential power; round only the balance to cents.", working: "L(6)=50+8(6)=98;\\quad E(6)=50(1.12)^6=98.6911342592\\approx98.69", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare the rounded balances; Plan E is larger at month 6.", working: "98.69>98.00", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The linear model adds $8 each month, while the exponential model multiplies by 1.12 each month, corresponding to a 12% increase in the current balance.", working: "L(t+1)-L(t)=8;\\quad \\frac{E(t+1)}{E(t)}=1.12", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) Both are 50 dollars; (b) month 3: Plan L has 74 dollars, Plan E about 70.25 dollars, so L is larger; (c) month 6: Plan L has 98 dollars, Plan E has 98.69 dollars, so E is larger; (d) L adds 8 dollars per month, while E multiplies the current balance by $1.12$ (a 12% increase).",
            commonErrors: ["Assuming the exponential plan adds a fixed 6 dollars each month because 12% of the initial 50 is 6.", "Comparing only the growth rates without evaluating balances at the stated month."],
            examinerNote: "Accept unrounded values before comparison; round Plan E at month 6 to the nearest cent as requested.",
          },
        },
      ],
    },
  ],
};
