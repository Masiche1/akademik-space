import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ciealegeo-u7-lesson-7-1",
  code: "7-1",
  title: "Geographical Enquiry and Exam Technique",
  goal: "I CAN structure geographical enquiry, analyse data critically and apply exam technique.",
  standards: [
    "Cambridge A Level Geography 9696",
    "Unit 7: skills and exam preparation",
  ],
  vocabulary: [
    {
      term: "Geographical enquiry",
      definition: "Question-led investigation of places.",
    },
    { term: "Hypothesis", definition: "Testable prediction." },
    {
      term: "Primary data",
      definition: "Collected first-hand (surveys, fieldwork).",
    },
    {
      term: "Secondary data",
      definition: "Existing data (census, satellite).",
    },
    { term: "Reliability", definition: "Consistency of data." },
    { term: "Validity", definition: "Measuring what you intend." },
  ],
  concepts: [
    {
      id: "ciealegeo-u7l1-c1-enquiry",
      title: "Geographical enquiry structure",
      skill: "Structure enquiries, form hypotheses and select methods.",
      lesson: {
        sections: [
          {
            heading: "Enquiry structure",
            body: "**Question** → **hypothesis** (testable prediction) → **method selection** (primary/secondary data) → **data collection** → **analysis** → **conclusion** (does data support hypothesis?). Enquiries can be fieldwork-based or data-response (exam questions with stimulus material).",
          },
          {
            heading: "Method selection",
            body: "**Primary**: questionnaires, interviews, field measurements, GPS, photography. **Secondary**: census, satellite imagery, government statistics, published research. Choose method matching question — e.g. perception questions need surveys; land use needs mapping/GIS; environmental data needs field measurements.",
          },
        ],
        keyFormulas: [
          {
            name: "Enquiry flow",
            statement:
              "Question → hypothesis → method → data → analysis → conclusion",
          },
          { name: "Primary data", statement: "First-hand collection" },
          { name: "Hypothesis", statement: "Testable prediction" },
        ],
        workedExample: {
          problem:
            "Investigate whether house prices decrease with distance from city centre.",
          solution:
            "Hypothesis: negative correlation. Method: secondary data (property listings) + map distances. Analysis: scatter graph/correlation. Conclusion: test hypothesis, discuss anomalies.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u7l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A hypothesis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fact" },
              { id: "b", text: "A testable prediction" },
              { id: "c", text: "An opinion" },
              { id: "d", text: "A method" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothesis",
                statement: "Testable.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Testable prediction",
            commonErrors: ["Opinion."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish primary from secondary data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Data types",
                statement: "First-hand vs existing.",
              },
            ],
            steps: [
              { reasoning: "Primary defined.", marks: 1, markCode: "M" },
              { reasoning: "Secondary defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Primary: collected first-hand (surveys, measurements). Secondary: existing data (census, satellite, published).",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'validity' matters in geographical enquiry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validity",
                statement: "Measuring intent.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Example of invalid.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Data must measure what you intend — e.g. questionnaire asking 'do you like the area?' doesn't measure actual satisfaction; invalid data → wrong conclusions.",
            commonErrors: ["Reliability confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Design an enquiry to test whether footfall decreases with distance from a supermarket.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Enquiry design",
                statement: "Systematic.",
              },
            ],
            steps: [
              { reasoning: "Hypothesis.", marks: 1, markCode: "M" },
              { reasoning: "Method.", marks: 1, markCode: "M" },
              { reasoning: "Sampling.", marks: 1, markCode: "M" },
              { reasoning: "Analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hypothesis: negative correlation. Method: pedestrian counts at set distances/times. Sample: multiple locations, peak/off-peak. Analysis: scatter graph, correlation coefficient.",
            commonErrors: ["Vague method."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the strengths and limitations of questionnaires in geographical enquiry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Questionnaires",
                statement: "Quantitative vs qualitative.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Improvements.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cheap, wide reach, quantifiable — but biased wording, low response rates, social desirability bias; improve via piloting, mixed methods, careful sampling.",
            commonErrors: ["Perfect method."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'sampling' in geographical enquiry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sampling",
                statement: "Subset selection.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Types.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Selecting representative subset of population/area — random, systematic, stratified; ensures findings generalisable without surveying everything.",
            commonErrors: ["Census only."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Reliability' of data refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consistency of results" },
              { id: "b", text: "Size of sample" },
              { id: "c", text: "Cost" },
              { id: "d", text: "Accuracy of measurement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability",
                statement: "Consistency.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Consistency",
            commonErrors: ["Validity confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of secondary data in geographical enquiry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Secondary data",
                statement: "Cheap, wide coverage.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. saves time/money (already collected) and provides wide spatial/temporal coverage (census, satellite) — but may be outdated or incompatible.",
            commonErrors: ["Only primary."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'primary data' be preferred for some enquiries?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary data",
                statement: "Specific + current.",
              },
            ],
            steps: [
              { reasoning: "Advantages.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tailored to specific question, current, controlled quality — but time-consuming, expensive, small-scale; secondary may not exist or be outdated.",
            commonErrors: ["Always worse."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of ethics in geographical enquiry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research ethics",
                statement: "Consent, harm, privacy.",
              },
            ],
            steps: [
              { reasoning: "Ethical issues.", marks: 1, markCode: "M" },
              { reasoning: "Requirements.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Informed consent, no harm, privacy, honesty — especially vulnerable groups (children, refugees); ethical breaches invalidate research and harm participants; ethics is integral not optional.",
            commonErrors: ["Optional."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Primary data' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Existing published data" },
              { id: "b", text: "Census returns only" },
              { id: "c", text: "Satellite imagery only" },
              { id: "d", text: "Data collected first-hand" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary data",
                statement: "First-hand.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Collected first-hand",
            commonErrors: ["Secondary confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a hypothesis must be 'testable'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothesis",
                statement: "Testable prediction.",
              },
            ],
            steps: [
              { reasoning: "Meaning of testable.", marks: 1, markCode: "M" },
              { reasoning: "Why needed.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A hypothesis must be capable of being proven true or false with evidence — e.g. 'footfall decreases with distance' can be tested with counts; vague statements ('shopping is nice') cannot be tested, so enquiry cannot conclude.",
            commonErrors: ["Opinion accepted."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which method is most appropriate for investigating how students perceive safety in the city centre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Satellite imagery" },
              { id: "b", text: "River flow meter" },
              { id: "c", text: "Questionnaire or interviews" },
              { id: "d", text: "Soil testing kit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Method choice",
                statement: "Match question.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Questionnaire or interviews",
            commonErrors: ["Physical measurement chosen."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Outline the stages of a geographical enquiry from question to conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Enquiry flow",
                statement: "Question to conclusion.",
              },
            ],
            steps: [
              { reasoning: "Question + hypothesis.", marks: 1, markCode: "M" },
              { reasoning: "Method selection.", marks: 1, markCode: "M" },
              { reasoning: "Data collection + analysis.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion/evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Pose question → state testable hypothesis → select method (primary/secondary) → collect data → analyse → conclude whether evidence supports hypothesis → evaluate reliability.",
            commonErrors: ["Stages missing."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of mixed methods (primary + secondary data) in geographical enquiry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed methods",
                statement: "Complementarity.",
              },
            ],
            steps: [
              { reasoning: "Strengths of combining.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Primary data is tailored and current, secondary gives wide coverage cheaply — combining triangulates findings and offsets weaknesses (e.g. field counts + census footfall); but adds time, complexity and possible inconsistency between sources.",
            commonErrors: ["One method only."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c1-16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Stratified sampling' involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choosing whoever is available" },
              { id: "b", text: "Sampling only one location" },
              {
                id: "c",
                text: "Dividing the population into groups and sampling each",
              },
              { id: "d", text: "Selecting every nth item" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stratified sampling",
                statement: "Groups sampled.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Dividing into groups",
            commonErrors: ["Systematic confused."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u7l1-c2-data",
      title: "Data analysis and exam technique",
      skill:
        "Analyse geographical data, interpret graphs/maps and apply exam strategies.",
      lesson: {
        sections: [
          {
            heading: "Data interpretation",
            body: "**Graphs**: describe trends (increase/decrease, peak, anomaly), quantify (values, rates, %), compare series. **Maps**: distribution patterns, spatial relationships, choropleth interpretation. **Statistics**: mean, median, correlation coefficient — use appropriately.",
          },
          {
            heading: "Exam technique",
            body: "**Structure**: answer the question set (not what you know). **Command words**: describe, explain, analyse, evaluate, discuss — each demands different response. **Marks**: allocate time proportionally. **Evaluation**: balanced argument + justified conclusion. **Case studies**: specific examples with locations.",
          },
        ],
        keyFormulas: [
          {
            name: "Command words",
            statement: "Describe→explain→analyse→evaluate",
          },
          { name: "Marks = time", statement: "Proportional allocation" },
          { name: "Correlation", statement: "-1 to +1 relationship" },
        ],
        workedExample: {
          problem:
            "Question asks 'Evaluate the impacts of tourism on a named place' (10 marks).",
          solution:
            "Structure: intro → positive impacts (jobs, income, infrastructure) → negative (environment, culture, leakage) → evaluation (weighs, judgement) → conclusion. 10 marks ≈ 15 min; use named place examples throughout.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u7l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Analyse' in exam questions requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give opinion" },
              { id: "b", text: "Define terms" },
              {
                id: "c",
                text: "Break down into components and examine relationships",
              },
              { id: "d", text: "List facts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analyse",
                statement: "Components + relationships.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Break down",
            commonErrors: ["Describe confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is 'evaluate' different from 'describe'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Command words",
                statement: "Different demands.",
              },
            ],
            steps: [
              { reasoning: "Describe defined.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Describe: state features/trends. Evaluate: weigh strengths/weaknesses, make judgement — requires balanced argument + conclusion.",
            commonErrors: ["Same response."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to interpret a scatter graph showing two variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Graph interpretation",
                statement: "Trend + correlation.",
              },
            ],
            steps: [
              { reasoning: "Describe trend.", marks: 1, markCode: "M" },
              { reasoning: "Correlation.", marks: 1, markCode: "M" },
              { reasoning: "Anomalies.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Describe direction (positive/negative), strength (close/far from line), anomalies (outliers), correlation coefficient if given — then relate to geographical context.",
            commonErrors: ["Values only."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How should time be allocated in a 1-hour essay question worth 20 marks?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time management",
                statement: "Proportional.",
              },
            ],
            steps: [
              { reasoning: "Calculation.", marks: 1, markCode: "M" },
              { reasoning: "Planning time.", marks: 1, markCode: "M" },
              { reasoning: "Writing time.", marks: 1, markCode: "M" },
              { reasoning: "Review time.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "~3 min planning, ~50 min writing (2.5 min/mark), ~7 min review — plan structure first, write systematically, leave time to check.",
            commonErrors: ["No planning."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse what examiners look for in 'evaluation' answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation",
                statement: "Weighing + judgement.",
              },
            ],
            steps: [
              { reasoning: "What examiners want.", marks: 1, markCode: "M" },
              { reasoning: "Common failures.", marks: 1, markCode: "M" },
              { reasoning: "How to achieve.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Balanced consideration of strengths AND weaknesses, justified judgement with reasoning, specific examples — one-sided or list-only answers lose marks.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'case study' in geography exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Case study",
                statement: "Specific example.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Detailed example of a specific place/event used to illustrate general principles — must be named, located, and linked to theory.",
            commonErrors: ["Generic example."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'positive correlation' on a scatter graph means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both variables increase together" },
              { id: "b", text: "Random pattern" },
              { id: "c", text: "One increases, other decreases" },
              { id: "d", text: "No relationship" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Positive correlation",
                statement: "Together up.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Together",
            commonErrors: ["Negative confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways to improve an essay answer under time pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Exam technique",
                statement: "Structure + examples.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. plan structure first (ensures coverage) and use specific named examples (shows application) — also manage time, answer set question.",
            commonErrors: ["Write immediately."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do 'anomalies' on graphs matter in geographical analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anomalies",
                statement: "Exceptions.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Value.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Outliers deviate from trend — may reveal local factors (e.g. one town with different characteristics); acknowledging anomalies shows analytical depth.",
            commonErrors: ["Ignore them."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the difference between 'description' and 'explanation' in geography answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Descriptive vs explanatory",
                statement: "What vs why.",
              },
            ],
            steps: [
              { reasoning: "Description.", marks: 1, markCode: "M" },
              { reasoning: "Explanation.", marks: 1, markCode: "M" },
              { reasoning: "Higher marks.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Description states what happens (trends, patterns); explanation gives reasons why (processes, causes) — higher-mark questions demand explanation with causal links, not just description.",
            commonErrors: ["Same thing."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'choropleth map' displays data using:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flow arrows" },
              { id: "b", text: "Spot heights" },
              { id: "c", text: "Shading of areas" },
              { id: "d", text: "Contour lines" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Choropleth",
                statement: "Shaded areas.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Shading of areas",
            commonErrors: ["Isopleth confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the 'mean' alone may mislead when analysing field data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mean limitation",
                statement: "Skewed by outliers.",
              },
            ],
            steps: [
              { reasoning: "Mean defined.", marks: 1, markCode: "M" },
              { reasoning: "Outlier effect.", marks: 1, markCode: "M" },
              { reasoning: "Better measures.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Mean averages all values — a few extreme results (e.g. one very high footfall count) pull it away from typical values; median or standard deviation give a fuller picture of distribution.",
            commonErrors: ["Mean always best."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which graph is best for showing river discharge changing over 24 hours?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population pyramid" },
              { id: "b", text: "Line graph" },
              { id: "c", text: "Pie chart" },
              { id: "d", text: "Choropleth map" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Graph choice",
                statement: "Time series.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Line graph",
            commonErrors: ["Scatter confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how you would interpret two maps showing land use in 1990 and 2020.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Map comparison",
                statement: "Change over time.",
              },
            ],
            steps: [
              { reasoning: "Identify categories.", marks: 1, markCode: "M" },
              { reasoning: "Compare areas.", marks: 1, markCode: "M" },
              { reasoning: "Describe change.", marks: 1, markCode: "M" },
              { reasoning: "Link to processes.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Describe each map's land-use pattern, compare category areas between dates, quantify change (e.g. farmland → housing), then explain likely drivers (urbanisation, policy, economic change).",
            commonErrors: ["Maps described separately only."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the value of statistical measures (mean, median, correlation) in exam data questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistics in exams",
                statement: "Summarise + relate.",
              },
            ],
            steps: [
              { reasoning: "What statistics add.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Application example.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Statistics summarise data efficiently and reveal relationships (correlation) — but can hide anomalies and require correct interpretation; best used alongside visual description and geographical explanation.",
            commonErrors: ["Statistics replace description."],
          },
        },
        {
          id: "ciealegeo-q-u7l1c2-16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'anomaly' on a graph is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An entry in the legend" },
              { id: "b", text: "A point deviating from the trend" },
              { id: "c", text: "A label on the axis" },
              { id: "d", text: "The average value" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anomaly",
                statement: "Outlier.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Point deviating from trend",
            commonErrors: ["Trend confused."],
          },
        },
      ],
    },
  ],
};
