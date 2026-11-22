import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edxifm-u10-lesson-10-3",
  code: "5-3",
  title: "Project Management and Simulation",
  goal: "I CAN apply crashing and PERT to project networks and use Monte Carlo simulation to estimate probabilities.",
  standards: ["WDM11 D1", "Critical path analysis", "Simulation"],
  vocabulary: [
    { term: "Crashing", definition: "Shortening a critical activity by paying extra, reducing project duration at additional cost." },
    { term: "PERT", definition: "Using three time estimates (optimistic, most likely, pessimistic) to estimate expected activity duration $\\frac{a+4m+b}{6}$ and variance $\\left(\\frac{b-a}{6}\\right)^2$." },
    { term: "Monte Carlo simulation", definition: "Using repeated random sampling to estimate probabilities or expected values when analytical methods are impractical." },
    { term: "Random numbers", definition: "Values in $[0,1)$ used to sample from distributions, e.g. mapping to a discrete outcome." },
    { term: "Confidence", definition: "How closely a simulation estimate approximates the true value; improves with more runs." },
  ],
  concepts: [
    {
      id: "edxifm-u10-pert-crashing",
      title: "PERT and crashing",
      skill: "Use three-point estimates for activity times and determine which activities to crash to meet a deadline at minimum cost.",
      lesson: {
        sections: [
          {
            heading: "Three-point estimates",
            body: "For each activity estimate optimistic $a$, most likely $m$, pessimistic $b$. Expected duration $t_e=\\frac{a+4m+b}{6}$ and variance $\\sigma^2=\\left(\\frac{b-a}{6}\\right)^2$. The project duration is the critical path using $t_e$ values.",
          },
          {
            heading: "Crashing",
            body: "To reduce project duration, shorten activities **on the critical path** — shortening non-critical activities does not help (unless float is consumed). Cost per day saved varies; crash the cheapest critical activities first until the deadline is met.",
          },
          {
            heading: "Limits of crashing",
            body: "Each activity has a minimum possible duration (crash limit). Once all critical activities are at their limits, the project cannot be shortened further without changing the network structure.",
          },
        ],
        keyFormulas: [
          { name: "PERT estimate", statement: "$t_e=\\frac{a+4m+b}{6}$" },
          { name: "PERT variance", statement: "$\\sigma^2=\\left(\\frac{b-a}{6}\\right)^2$" },
        ],
        workedExample: {
          problem: "Activity $X$: $a=2$, $m=3$, $b=8$. Find $t_e$ and $\\sigma^2$. Which activity to crash to save 1 day if $X$ costs £50/day and alternative $Y$ costs £30/day but has 2 days float?",
          solution: "$t_e=\\frac{2+12+8}{6}=\\frac{22}{6}\\approx3.67$; $\\sigma^2=\\left(\\frac{6}{6}\\right)^2=1$. Crash $X$ (critical) not $Y$ (float absorbs delay), even though $Y$ is cheaper per day — only critical activities reduce project time.",
        },
      },
      questions: [
        {
          id: "edxifm-u10-pert-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For PERT, the expected activity duration is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$a+4m+b$" },
              { id: "b", text: "$\\frac{a+4m+b}{6}$" },
              { id: "c", text: "$\\frac{a+m+b}{3}$" },
              { id: "d", text: "$\\frac{a+b}{2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "PERT estimate", statement: "$t_e=\\frac{a+4m+b}{6}$." },
            ],
            steps: [
              { reasoning: "PERT weights the most likely estimate four times.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{a+4m+b}{6}$",
            commonErrors: ["Using equal weights for all three estimates."],
          },
        },
        {
          id: "edxifm-u10-pert-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An activity has $a=4$, $m=5$, $b=10$. Find its PERT expected duration and variance.",
          response: {
            type: "numeric",
            parts: [
              { label: "expected duration", answer: 5.66667, tolerance: 0.001 },
              { label: "variance", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "PERT", statement: "$t_e=\\frac{a+4m+b}{6}$; $\\sigma^2=\\left(\\frac{b-a}{6}\\right)^2$." },
            ],
            steps: [
              { reasoning: "$t_e=\\frac{4+20+10}{6}=\\frac{34}{6}=\\frac{17}{3}\\approx5.67$.", working: "t_e=5.67", marks: 1, markCode: "M" },
              { reasoning: "$\\sigma^2=\\left(\\frac{10-4}{6}\\right)^2=1^2=1$.", working: "\\sigma^2=1", marks: 1, markCode: "M" },
              { reasoning: "State both values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t_e=\\frac{17}{3}\\approx5.67$, $\\sigma^2=1$",
            commonErrors: ["Forgetting to square in variance.", "Using $b-a$ without dividing by 6."],
          },
        },
        {
          id: "edxifm-u10-pert-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The critical path has activities $A$ ($t_e=6$) and $B$ ($t_e=4$); non-critical $C$ has 3 days float. To save 2 days, should you crash $A$, $B$, or $C$? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critical path", statement: "Only critical activities determine project duration." },
            ],
            steps: [
              { reasoning: "Project duration is set by critical path $A+B=10$.", marks: 1, markCode: "M" },
              { reasoning: "Crashing $C$ (3 days float) does not reduce duration until float is consumed.", marks: 1, markCode: "R" },
              { reasoning: "Crash $A$ or $B$ (or both) to reduce the critical path.", marks: 1, markCode: "M" },
              { reasoning: "Conclude: crash critical activities only.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crash $A$ and/or $B$; crashing $C$ is ineffective while it has float",
            commonErrors: ["Crashing the cheapest activity regardless of float."],
          },
        },
        {
          id: "edxifm-u10-pert-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A project has critical activities $P$, $Q$, $R$ with $t_e$ values $8$, $6$, $5$ respectively (total $19$ days). Crashing costs: $P$ £40/day up to 3 days, $Q$ £25/day up to 2 days, $R$ £60/day up to 1 day. The deadline requires finishing in $16$ days.",
          parts: [
            { label: "a", prompt: "How many days must be saved?", marks: 1 },
            { label: "b", prompt: "Determine the minimum-cost crashing plan to meet the deadline.", marks: 6 },
            { label: "c", prompt: "Calculate the total extra cost.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crashing", statement: "Reduce critical activities at minimum cost per day saved." },
            ],
            steps: [
              { part: "a", reasoning: "$19-16=3$ days must be saved.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All three activities lie on the critical path, so savings must come from crashing them.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Crash cheapest first: $Q$ at £25/day, max 2 days — crash $Q$ by 2 days ($19\\to17$).", working: "Q-2\\to17", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Still need 1 more day: next cheapest is $P$ at £40/day (vs $R$ £60) — crash $P$ by 1 day ($17\\to16$).", working: "P-1\\to16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check $Q$ cannot be crashed further (limit 2 reached).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Plan: $Q$ by 2 days, $P$ by 1 day; total saved $3$.", working: "2+1=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify duration $=16$ meets deadline.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cost: $2\\times25+1\\times40=50+40=90$.", working: "\\pounds90", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State total cost £90.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Alternative check: crashing $P$ by 3 costs £120 — more expensive.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 3 days (b) crash $Q$ by 2 and $P$ by 1 (c) £90",
            commonErrors: ["Crashing $R$ despite higher cost.", "Ignoring crash limits."],
            examinerNote: "Accept equivalent reasoning; £90 is the minimum.",
          },
        },
      ],
    },
    {
      id: "edxifm-u10-monte-carlo",
      title: "Monte Carlo simulation",
      skill: "Use random numbers to simulate discrete and continuous outcomes and estimate probabilities.",
      lesson: {
        sections: [
          {
            heading: "Random sampling",
            body: "Generate random numbers $r\\in[0,1)$. For a discrete outcome with probabilities $p_1,p_2,\\ldots$, assign cumulative intervals: e.g. $r<0.3$ → outcome 1, $0.3\\le r<0.8$ → outcome 2, else outcome 3. Run many trials and count frequencies.",
          },
          {
            heading: "Estimating probabilities",
            body: "Repeat the simulation many times (e.g. 100 runs). The estimated probability is (favourable runs)/(total runs). More runs give a better estimate; results vary between simulations.",
          },
          {
            heading: "Simulating processes",
            body: "For multi-stage processes (e.g. project duration with random activity times), sample each random input per run, compute the output, and build a distribution of results — e.g. the proportion of runs meeting a deadline.",
          },
        ],
        keyFormulas: [
          { name: "Estimated probability", statement: "$\\hat{p}=\\frac{\\text{favourable runs}}{\\text{total runs}}$" },
        ],
        workedExample: {
          problem: "A spinner lands on red with probability $0.4$. Using random digits, estimate $P(\\text{at least 2 reds in 3 spins})$ over 10 sets of 3 spins.",
          solution: "Assign $r<0.4$ → red. Sample runs of 3 digits; count sets with $\\ge2$ reds; divide by 10. Results vary; expect estimate near theoretical $P=3(0.4)^2(0.6)+(0.4)^3=0.352$.",
        },
      },
      questions: [
        {
          id: "edxifm-u10-mc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a simulation, what does a random number $r=0.73$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A probability of $0.73$" },
              { id: "b", text: "A count of 73 trials" },
              { id: "c", text: "A uniformly distributed value in $[0,1)$ used to sample outcomes" },
              { id: "d", text: "A percentage" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Random numbers", statement: "Uniform values in $[0,1)$ map to outcomes via cumulative probabilities." },
            ],
            steps: [
              { reasoning: "$r=0.73$ is a uniform random value used for sampling.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A uniform random value",
            commonErrors: ["Interpreting $r$ as a probability directly."],
          },
        },
        {
          id: "edxifm-u10-mc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A machine is defective with probability $0.05$. Using random numbers, describe how to simulate whether a batch of 20 items contains a defective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Monte Carlo", statement: "Map random numbers to outcomes via cumulative probabilities." },
            ],
            steps: [
              { reasoning: "Assign $r<0.05$ → defective; $r\\ge0.05$ → good.", working: "r<0.05", marks: 1, markCode: "M" },
              { reasoning: "Generate 20 random numbers; if any $<0.05$, the batch contains a defective.", marks: 1, markCode: "M" },
              { reasoning: "Repeat many times; proportion of batches with a defective estimates the true probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sample 20 uniforms per run; defective if any $r<0.05$",
            commonErrors: ["Using one random number for the whole batch."],
          },
        },
        {
          id: "edxifm-u10-mc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a project simulation, activity $A$ takes 2 days with probability $0.5$ and 4 days with probability $0.5$; activity $B$ takes 3 days with probability $0.6$ and 5 days with probability $0.4$. $B$ starts after $A$. Estimate $P(\\text{project} > 8\\text{ days})$ analytically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Enumeration", statement: "List all combinations and sum probabilities." },
            ],
            steps: [
              { reasoning: "Project time $=A+B$; exceeds 8 when $(A,B)=(4,5)$ or $(4,3)$? Check: $4+3=7$, $4+5=9$, $2+5=7$, $2+3=5$. Only $(4,5)=9>8$.", working: "only (4,5)", marks: 1, markCode: "M" },
              { reasoning: "$P(A=4)P(B=5)=0.5\\times0.4=0.2$.", working: "0.5\\times0.4=0.2", marks: 1, markCode: "M" },
              { reasoning: "State probability $=0.2$.", marks: 1, markCode: "A" },
              { reasoning: "Note a simulation would estimate this near $0.2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$P(\\text{project}>8)=0.2$",
            commonErrors: ["Missing the $(4,3)$ case ($=7$, not $>8$)."],
          },
        },
        {
          id: "edxifm-u10-mc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A café's daily profit depends on weather: sunny (probability $0.3$) → £120, cloudy ($0.5$) → £80, rainy ($0.2$) → £30. Simulate 10 days using random numbers and estimate expected daily profit; compare with the theoretical value.",
          parts: [
            { label: "a", prompt: "Assign random-number intervals for each weather type.", marks: 2 },
            { label: "b", prompt: "Describe how to run the simulation for 10 days.", marks: 2 },
            { label: "c", prompt: "Calculate the theoretical expected profit.", marks: 3 },
            { label: "d", prompt: "Explain why simulation and theory should agree approximately.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Monte Carlo", statement: "Cumulative intervals map random numbers to outcomes." },
              { kind: "formula", name: "Expectation", statement: "$E(X)=\\sum xP(X=x)$." },
            ],
            steps: [
              { part: "a", reasoning: "Sunny: $r<0.3$; cloudy: $0.3\\le r<0.8$; rainy: $r\\ge0.8$.", working: "0-0.3,0.3-0.8,0.8-1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State intervals.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Generate 10 random numbers, classify each day, sum profits.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Average profit over many sets of 10 days estimates $E(X)$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$E=120(0.3)+80(0.5)+30(0.2)=36+40+6=82$.", working: "\\pounds82", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State £82 per day.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Verify arithmetic.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Simulation frequencies converge to true probabilities with more runs.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Small samples vary; 10 days is a small sample so estimates fluctuate.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude simulation approximates theory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sunny $r<0.3$, cloudy $0.3\\le r<0.8$, rainy $r\\ge0.8$ (b) 10 uniforms per set, average profit (c) $E=\\pounds82$/day (d) frequencies converge to probabilities",
            commonErrors: ["Overlapping intervals.", "Using too few runs."],
            examinerNote: "Accept any valid interval assignment preserving probabilities.",
          },
        },
      ],
    },
  ],
};
