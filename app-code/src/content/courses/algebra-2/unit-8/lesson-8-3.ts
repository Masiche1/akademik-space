import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "alg2-u8-8-3",
  code: "8-3",
  title: "Statistical Studies and Inference",
  goal: "I CAN evaluate statistical studies and use sampling variability, margins of error, and simulations to draw justified conclusions.",
  standards: ["HSS-IC.A.1", "HSS-IC.B.3", "HSS-IC.B.4", "HSS-IC.B.5", "HSS-IC.B.6"],
  vocabulary: [
    { term: "Population", definition: "The complete group of people or objects a study aims to describe." },
    { term: "Sample", definition: "A subset of a population from which data are collected." },
    { term: "Sampling bias", definition: "A systematic feature of a sampling method that makes some population members more or less likely to be included." },
    { term: "Observational study", definition: "A study that observes existing conditions or choices without assigning treatments." },
    { term: "Experiment", definition: "A study in which researchers assign treatments to investigate their effects." },
    { term: "Margin of error", definition: "An estimate of the likely sampling variation around a sample statistic, expressed in the same units." },
    { term: "Random assignment", definition: "A process that uses chance to assign participants to treatments, helping balance other factors between groups." },
  ],
  concepts: [
    {
      id: "alg2-u8-study-design",
      title: "Sampling and study design",
      skill: "Identify sampling methods and sources of bias, and distinguish surveys, experiments, and observational studies.",
      lesson: {
        sections: [
          {
            heading: "Sampling and possible bias",
            body: "A **sample** should represent the population the study intends to describe. A simple random sample gives every possible sample of the chosen size an equal chance of selection. A stratified sample divides the population into relevant groups and randomly samples within each; a cluster sample randomly selects groups and includes their members. Voluntary-response and convenience samples can be biased because participation or accessibility is related to who is included. A large sample does not by itself fix a biased selection method.",
          },
          {
            heading: "Survey, observational study, or experiment?",
            body: "A survey asks people questions to collect responses. An observational study records variables without assigning conditions; it can show association but does not, by itself, establish that one variable caused another. An experiment assigns treatments, ideally at random. Random assignment helps support a cause-and-effect conclusion for the study participants, while random sampling helps generalize findings to a wider population; these solve different problems.",
          },
        ],
        keyFormulas: [
          { name: "Random sample", statement: "A simple random sample of size $n$ gives every possible size-$n$ sample an equal chance of selection." },
          { name: "Sampling versus assignment", statement: "Random sampling supports generalization; random assignment supports causal comparisons." },
        ],
        workedExample: {
          problem: "Researchers compare two study apps. They recruit volunteers from an online forum, then randomly assign those volunteers to one of the two apps. What can they conclude, and what is a limitation?",
          solution: "Random assignment supports a cause-and-effect comparison of the apps among the participating volunteers, because the treatment is assigned by chance. However, recruiting only online-forum volunteers may create a convenience or voluntary-response sample. The result may not generalize to all students, because the sample may not represent the wider population.",
        },
      },
      questions: [
        {
          id: "alg2-u8-study-design-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A school randomly selects 40 student identification numbers from a complete list of all enrolled students and surveys those students. Which sampling method is used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convenience sampling" },
              { id: "b", text: "Voluntary-response sampling" },
              { id: "c", text: "Simple random sampling" },
              { id: "d", text: "Cluster sampling" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simple random sample", statement: "A simple random sample is selected by chance from the complete population list, giving each possible sample of the stated size an equal chance." },
            ],
            steps: [
              { reasoning: "The school selects student identifiers at random from a complete roster, rather than choosing volunteers, nearby students, or whole groups.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "**(c)** Simple random sampling",
            commonErrors: ["Confusing a survey (the way data are collected) with a sampling method (how participants are selected)."],
          },
        },
        {
          id: "alg2-u8-study-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Researchers examine the association between students' daily screen time and their sleep by recording both measures for a random sample. They do not assign screen-time habits. Identify the study type and state whether it alone can establish that screen time causes changes in sleep.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Observational study", statement: "An observational study records variables without assigning treatments or imposing conditions." },
              { kind: "principle", name: "Causation", statement: "An observed association alone does not establish a cause-and-effect relationship." },
            ],
            steps: [
              { reasoning: "The researchers only record existing screen time and sleep; no treatment is assigned.", marks: 1, markCode: "R" },
              { reasoning: "Therefore the design is observational rather than an experiment.", marks: 1, markCode: "A" },
              { reasoning: "Other variables may explain an association, so this study alone cannot establish that screen time causes sleep changes.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "This is an **observational study**. It can identify an association but, by itself, cannot establish that screen time causes sleep changes.",
            commonErrors: ["Calling it an experiment because it studies a relationship between variables."],
          },
        },
        {
          id: "alg2-u8-study-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A school wants to estimate the proportion of all students who support a later start time. The principal posts an optional online poll on the school website, and 600 students respond. Identify the sampling problem, explain why the large number of responses does not remove it, and suggest a better sampling method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Voluntary-response bias", statement: "A voluntary-response sample includes people who choose to participate; those with stronger opinions may be more likely to respond." },
              { kind: "principle", name: "Representative sample", statement: "A large sample reduces random variability but does not automatically correct systematic sampling bias." },
            ],
            steps: [
              { reasoning: "Participation is optional, so the poll is a voluntary-response sample and can overrepresent students with strong views or access to the poll.", marks: 1, markCode: "R" },
              { reasoning: "The 600 responses may still differ systematically from students who did not respond; sample size alone does not remove selection bias.", marks: 1, markCode: "R" },
              { reasoning: "Recommend randomly selecting students from the complete enrollment roster, ensuring every student in the target population can be selected.", marks: 1, markCode: "M" },
              { reasoning: "A random sample can provide a more representative estimate of the student population, subject to nonresponse and other limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The poll has voluntary-response bias. A large response count does not correct systematic differences between respondents and nonrespondents. Use a random sample from the full enrollment list.",
            commonErrors: ["Assuming 600 responses are representative solely because the sample is large."],
          },
        },
        {
          id: "alg2-u8-study-design-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A district is evaluating whether a new 20-minute reading routine improves reading scores. The district has 240 students in 8 classrooms and wants to compare the routine with the usual schedule.",
          parts: [
            { label: "a", prompt: "Describe one way to select a random sample of 60 students from the district's full student roster.", marks: 2 },
            { label: "b", prompt: "The district randomly assigns the selected students to the new routine or usual schedule. Is this an experiment or observational study? Explain.", marks: 2 },
            { label: "c", prompt: "Explain how random sampling and random assignment serve different purposes in this study.", marks: 3 },
            { label: "d", prompt: "If students instead sign up to choose their own schedule, identify a concern when comparing the two groups.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Random sampling", statement: "Random sampling uses chance to select a sample from the target population and can support generalization to that population." },
              { kind: "definition", name: "Experiment", statement: "An experiment assigns participants to treatments to study their effects." },
              { kind: "principle", name: "Random assignment", statement: "Random assignment can balance other explanatory factors across treatment groups, supporting causal comparisons." },
            ],
            steps: [
              { part: "a", reasoning: "Number all students on the complete district roster, then select 60 distinct numbers using a random-number generator or equivalent chance method.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The district assigns students to one of two schedules, so this is an experiment rather than a study that only observes existing choices.", marks: 2, markCode: "R" },
              { part: "c", reasoning: "Random sampling determines who enters the study and supports generalizing results to the district's students.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Random assignment determines which selected students receive each schedule and helps balance confounding factors.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Thus assignment supports a causal comparison, while sampling addresses how broadly results may generalize.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Students choosing their own schedule may differ in motivation, reading level, or other characteristics; these differences could confound the treatment comparison.", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) Randomly select 60 IDs from the full roster. (b) Experiment, because researchers assign the schedules. (c) Sampling supports generalization; assignment supports a fair causal comparison. (d) Self-selection can create systematic group differences, such as motivation, that confound the comparison.",
            commonErrors: ["Claiming random assignment makes the sample representative of all district students.", "Claiming voluntary choice is random assignment."],
          },
        },
      ],
    },
    {
      id: "alg2-u8-inference-margin-simulation",
      title: "Margins of error and simulation reasoning",
      skill: "Estimate proportion margins of error, compare treatment results, and reason from simulated chance outcomes.",
      lesson: {
        sections: [
          {
            heading: "Proportion margins of error",
            body: "For a sample proportion from a reasonably large random sample, a quick approximate margin of error is $\\dfrac{1}{\\sqrt{n}}$. A more detailed 95% estimate is $1.96\\sqrt{\\dfrac{\\hat p(1-\\hat p)}{n}}$, where $\\hat p$ is the sample proportion. Report a confidence interval as the estimate plus or minus its margin of error. These approximations rely on suitable random sampling and adequate sample size; they do not account for bias from a flawed sampling process.",
          },
          {
            heading: "Treatment comparisons and simulations",
            body: "When comparing treatments, examine the difference in sample outcomes relative to the variability expected by chance. A simulation models a chance process under a stated assumption (often that there is no treatment effect). If results at least as extreme as the observed result are rare in many simulated trials, that is evidence against the assumption; a simulation does not prove a conclusion with certainty. Random assignment is needed for a strong causal interpretation.",
          },
        ],
        keyFormulas: [
          { name: "Quick proportion margin of error", statement: "$ME\\approx\\dfrac{1}{\\sqrt{n}}$" },
          { name: "Approximate 95% proportion margin of error", statement: "$ME\\approx1.96\\sqrt{\\dfrac{\\hat p(1-\\hat p)}{n}}$" },
          { name: "Confidence interval", statement: "$\\hat p\\pm ME$" },
        ],
        workedExample: {
          problem: "In a random sample of 400 voters, 52% support a proposal. Use the quick approximation $ME\\approx1/\\sqrt n$ to estimate the margin of error, then give an approximate interval.",
          solution: "$ME\\approx1/\\sqrt{400}=1/20=0.05$, or 5 percentage points. The approximate interval is $0.52\\pm0.05$, so from 0.47 to 0.57 (47% to 57%). This quick approximation describes sampling variability, not possible bias in how the sample was collected.",
        },
      },
      questions: [
        {
          id: "alg2-u8-inference-margin-simulation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For a sample proportion based on $n=100$ observations, use the quick approximation $ME\\approx\\frac{1}{\\sqrt{n}}$. Find the approximate margin of error as a proportion.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.01$" },
              { id: "b", text: "$0.05$" },
              { id: "c", text: "$0.10$" },
              { id: "d", text: "$0.50$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quick margin of error", statement: "$ME\\approx\\frac{1}{\\sqrt{n}}$." },
            ],
            steps: [
              { reasoning: "Substitute the sample size and evaluate the square root.", working: "ME\\approx\\frac{1}{\\sqrt{100}}=\\frac{1}{10}=0.10", marks: 2, markCode: "A" },
            ],
            finalAnswer: "**(c)** $0.10$ (10 percentage points)",
            commonErrors: ["Reporting $1/100=0.01$ instead of taking the square root of the sample size."],
          },
        },
        {
          id: "alg2-u8-inference-margin-simulation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A poll samples $n=400$ people. The sample proportion in favor of a proposal is $\\hat p=0.50$. Using $ME\\approx1.96\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}$, calculate the approximate margin of error as a proportion. Round to three decimal places.",
          response: { type: "numeric", parts: [{ label: "Margin of error", answer: 0.049, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Approximate 95% margin of error", statement: "$ME\\approx1.96\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}$." },
            ],
            steps: [
              { reasoning: "Substitute the sample proportion and sample size into the stated formula.", working: "ME\\approx1.96\\sqrt{\\frac{0.50(1-0.50)}{400}}", marks: 1, markCode: "M" },
              { reasoning: "Calculate the estimated standard error inside the square root.", working: "\\frac{0.50(0.50)}{400}=0.000625,\\quad\\sqrt{0.000625}=0.025", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 1.96 and round to three decimal places.", working: "ME\\approx1.96(0.025)=0.049", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$ME\\approx0.049$ (about 4.9 percentage points)",
            commonErrors: ["Using $p(1-p)/n$ without taking the square root."],
          },
        },
        {
          id: "alg2-u8-inference-margin-simulation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a randomized experiment, 58 of 100 participants assigned to Treatment A improved, compared with 45 of 100 participants assigned to Treatment B. A simulation under the assumption of no treatment difference produces a difference of at least 13 percentage points in 18 out of 200 trials. Interpret this simulation result and state whether it is convincing evidence of a treatment difference using the common 5% guideline.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simulation proportion", statement: "The fraction of simulated trials at least as extreme as the observed result estimates how often that result can occur under the stated chance model." },
              { kind: "principle", name: "Evidence threshold", statement: "A result occurring in less than about 5% of simulations under no difference is commonly considered statistically unusual evidence against that assumption." },
            ],
            steps: [
              { reasoning: "Compute the observed improvement rates and their difference.", working: "\\hat p_A=\\frac{58}{100}=0.58,\\quad\\hat p_B=\\frac{45}{100}=0.45,\\quad\\text{difference}=0.13", marks: 1, markCode: "M" },
              { reasoning: "Find the fraction of null-model simulations that were at least this extreme.", working: "\\frac{18}{200}=0.09=9\\%", marks: 1, markCode: "A" },
              { reasoning: "Compare 9% with the 5% guideline; the simulated outcome is not below that threshold.", marks: 1, markCode: "M" },
              { reasoning: "Thus this simulation does not provide convincing evidence of a treatment difference by the stated guideline, though it does not prove the treatments are identical.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The simulated proportion is $9\\%$. Because this exceeds the 5% guideline, the result is not convincing evidence of a treatment difference under this criterion; it does not prove the treatments are identical.",
            commonErrors: ["Claiming a 13-point observed difference is conclusive without considering its chance variability.", "Treating 18 out of 200 as 18%."],
          },
        },
        {
          id: "alg2-u8-inference-margin-simulation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A random sample of 400 eligible residents is asked whether they support a proposed park. Of those sampled, 224 support it. For a 95% margin of error, use $1.96\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}$. Round proportions and interval endpoints to three decimal places.",
          parts: [
            { label: "a", prompt: "Find the sample proportion supporting the proposal.", marks: 2 },
            { label: "b", prompt: "Calculate the 95% margin of error as a proportion.", marks: 3 },
            { label: "c", prompt: "Give the approximate 95% confidence interval for the population proportion.", marks: 2 },
            { label: "d", prompt: "A simulation under the assumption that exactly half of residents support the park produces sample proportions at least as far from 0.50 as the observed result in 8 of 200 trials. Interpret the result using the 5% guideline.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sample proportion", statement: "$\\hat p=\\frac{x}{n}$." },
              { kind: "formula", name: "95% margin of error", statement: "$ME=1.96\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}$." },
              { kind: "definition", name: "Confidence interval", statement: "An approximate interval for the population proportion is $\\hat p\\pm ME$." },
              { kind: "principle", name: "Simulation reasoning", statement: "A small fraction of simulated results as extreme as the observed result is evidence against the simulated assumption, not proof of a claim." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the 224 supporting responses by the 400 sampled residents.", working: "\\hat p=\\frac{224}{400}=0.560", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Substitute $\\hat p=0.56$ and $n=400$ into the given 95% margin formula.", working: "ME=1.96\\sqrt{\\frac{0.56(0.44)}{400}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the estimated standard error and multiply by 1.96.", working: "\\sqrt{\\frac{0.2464}{400}}=\\sqrt{0.000616}\\approx0.024819,\\quad ME\\approx1.96(0.024819)=0.048646\\approx0.049", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Subtract and add the rounded margin of error to the sample proportion.", working: "0.560\\pm0.049\\Rightarrow(0.511,0.609)", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Compute the simulated tail proportion and compare it with 5%; the small fraction is unusual under the 0.50-support assumption and provides evidence against it, but it is not proof.", working: "\\frac{8}{200}=0.04=4\\%<5\\%", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $\\hat p=0.560$. (b) $ME\\approx0.049$. (c) Approximate interval $(0.511,0.609)$. (d) $4\\%$ of simulations were as extreme, below 5%; this is evidence against exactly 50% support, but not proof.",
            commonErrors: ["Using 224 as the sample proportion rather than dividing by 400.", "Reporting the interval as percentages while the prompt requests proportions rounded to three decimals.", "Saying the simulation proves the population support is not 50%."],
          },
        },
      ],
    },
  ],
};
