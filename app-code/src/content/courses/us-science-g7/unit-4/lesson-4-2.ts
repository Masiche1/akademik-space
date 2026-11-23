import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "s7-u4-lesson-4-2",
  code: "4-2",
  title: "Capstone: Scientific Investigation and Evidence",
  goal: "I CAN design fair tests, analyze data, and evaluate evidence to draw scientific conclusions.",
  standards: [
    "SEP: Planning and Carrying Out Investigations",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Engaging in Argument from Evidence",
    "SEP: Evaluating and Communicating Information",
  ],
  vocabulary: [
    {
      term: "Independent variable",
      definition: "The factor deliberately changed in an experiment.",
    },
    {
      term: "Dependent variable",
      definition: "The factor measured or observed as a result.",
    },
    {
      term: "Controlled variable",
      definition: "A factor kept constant to ensure a fair test.",
    },
    {
      term: "Hypothesis",
      definition:
        "A testable prediction about the relationship between variables.",
    },
    {
      term: "Control group",
      definition:
        "A group where the independent variable is not changed, for comparison.",
    },
    {
      term: "Data table",
      definition: "An organized record of measurements from an experiment.",
    },
    {
      term: "Conclusion",
      definition:
        "A statement explaining what the data shows and whether the hypothesis was supported.",
    },
    {
      term: "Limitation",
      definition:
        "A factor that may affect results or restrict what conclusions can be drawn.",
    },
  ],
  concepts: [
    {
      id: "s7-u4-investigation",
      title: "Designing fair tests",
      skill:
        "Identify variables, design controlled experiments, and plan reliable data collection.",
      lesson: {
        sections: [
          {
            heading: "Variable identification",
            body: "Independent variable: what you change (e.g., fertilizer amount). Dependent variable: what you measure (e.g., plant height). Controlled variables: what stays same (e.g., sunlight, water, soil type, plant species).",
          },
          {
            heading: "Fair test design",
            body: "Change only the independent variable. Keep everything else constant. Use multiple trials or samples. Include a control group if possible. Measure precisely with appropriate tools.",
          },
          {
            heading: "Reliability",
            body: "Repeat trials to check consistency. Randomize if possible to avoid bias. Larger sample sizes improve reliability. Document procedure so others can replicate.",
          },
        ],
        keyFormulas: [
          { name: "Fair test", statement: "Only independent variable changes" },
          { name: "Control", statement: "Baseline for comparison" },
        ],
        workedExample: {
          problem: "Design a test for 'Does music affect plant growth?'",
          solution:
            "Independent: music type/presence; dependent: plant height; controlled: light, water, soil, plant species; control: no music group; repeat 3x.",
        },
      },
      questions: [
        {
          id: "s7-u4-investigation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the independent variable in an experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What you measure" },
              { id: "b", text: "What you deliberately change" },
              { id: "c", text: "What stays constant" },
              { id: "d", text: "The hypothesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent variable",
                statement: "Deliberately changed factor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Independent variable is what the experimenter changes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** What you change",
            commonErrors: ["Confusing with dependent variable."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u4-investigation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a control group important in an experiment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control group",
                statement: "Baseline for comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shows what happens without the independent variable.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Allows comparison — did the variable actually cause the effect?",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Without control, can't distinguish variable effect from other factors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Control provides baseline for comparison and causal inference.",
            commonErrors: ["Thinking it's just 'no experiment'."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "s7-u4-investigation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests 'Does temperature affect enzyme activity?' but uses different enzyme amounts in each trial. What's wrong and how to fix it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Controlled variables",
                statement: "Only independent variable should change.",
              },
              {
                kind: "principle",
                name: "Confounding",
                statement: "Uncontrolled variables invalidate results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Enzyme amount is a controlled variable that wasn't controlled.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Different amounts confound results — can't tell if temperature or amount caused differences.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Fix: use same enzyme amount for all trials.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Also control: pH, substrate amount, reaction time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Enzyme amount must be constant — otherwise results are confounded.",
            commonErrors: ["Not recognizing confounding variable."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "s7-u4-investigation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design an investigation: 'Does fertilizer concentration affect plant growth?'",
          parts: [
            {
              label: "a",
              prompt: "State hypothesis and identify variables.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe materials and procedure.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How will you ensure reliability?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What data will you collect and how will you analyze it?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Experimental design",
                statement: "Isolate variables for valid test.",
              },
              {
                kind: "principle",
                name: "Reliability",
                statement: "Replicates and controls ensure trustworthiness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hypothesis: higher fertilizer → faster growth (up to a point).",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Independent: fertilizer concentration; dependent: plant height/biomass.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Controlled: light, water, soil, plant species, pot size.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Materials: pots, soil, seeds, fertilizer solutions, ruler, light source.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Procedure: plant seeds, apply different fertilizer concentrations, measure height weekly for 4 weeks.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning: "Include control group with no fertilizer.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Use 3+ plants per concentration; randomize pot placement.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Repeat entire experiment or use large enough sample.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Collect: plant height each week; calculate average growth rate.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Analyze: compare averages, look for trend, graph height vs time for each group.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) hypothesis + variables (b) materials + procedure (c) replicates + randomization (d) height data + trend analysis.",
            commonErrors: ["Missing controls or insufficient replicates."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "s7-u4-data-analysis",
      title: "Analyzing and interpreting data",
      skill:
        "Process experimental data, identify patterns, and draw evidence-based conclusions.",
      lesson: {
        sections: [
          {
            heading: "Data organization",
            body: "Organize data in tables with clear labels and units. Calculate averages for replicates. Look for patterns: trends, outliers, consistency. Graph data to visualize relationships.",
          },
          {
            heading: "Interpreting results",
            body: "Compare treatment groups to control. Look for meaningful differences (not just any difference). Consider whether differences are consistent across trials. Check if results support or refute hypothesis.",
          },
          {
            heading: "Evaluating evidence",
            body: "Strong evidence: large sample, controlled variables, consistent results, replicable. Weak evidence: small sample, uncontrolled variables, inconsistent results, single trial. Always consider limitations.",
          },
        ],
        keyFormulas: [
          { name: "Average", statement: "Sum of values / number of values" },
          { name: "Pattern", statement: "Consistent trend across trials" },
        ],
        workedExample: {
          problem:
            "Three trials give plant heights 12, 14, 13 cm. What is the average?",
          solution: "$(12 + 14 + 13)/3 = 39/3 = 13$ cm average.",
        },
      },
      questions: [
        {
          id: "s7-u4-data-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do with replicate measurements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use only the first one" },
              { id: "b", text: "Average them" },
              { id: "c", text: "Pick the middle one" },
              { id: "d", text: "Discard all but one" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Replicates",
                statement: "Averaging reduces random error.",
              },
            ],
            steps: [
              {
                reasoning: "Average replicates to get more reliable estimate.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Average them",
            commonErrors: ["Using single measurement."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u4-data-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trial results: 10, 12, 11, 45, 10 cm. What should you do about the 45?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Outlier",
                statement: "Value far from others may be error.",
              },
              {
                kind: "principle",
                name: "Investigation",
                statement: "Check before discarding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "45 is an outlier — investigate cause (measurement error? different conditions?).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "If error confirmed, exclude with justification; if real, keep and note variability.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Don't automatically discard — could be meaningful data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Investigate outlier; exclude if error, keep if real with note.",
            commonErrors: [
              "Automatically discarding or keeping without thought.",
            ],
            examinerNote: "R1, B1, A1.",
          },
        },
        {
          id: "s7-u4-data-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Experiment results: Treatment group averages 15 cm growth; control averages 12 cm. Is this difference meaningful? What else do you need to know?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meaningful difference",
                statement: "Consistent, significant difference across trials.",
              },
              {
                kind: "principle",
                name: "Variability",
                statement: "Spread within groups matters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "3 cm difference might be meaningful or within normal variation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Need to know: variability within groups, number of trials, consistency.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "If all treatment trials > all control trials, likely meaningful.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "If ranges overlap significantly, difference may not be real.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Need variability and consistency data to judge if 3 cm is meaningful.",
            commonErrors: ["Assuming any difference is significant."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "s7-u4-data-analysis-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Students test paper airplane designs. Results (distance in meters): Design A: 8, 9, 8, 10, 9; Design B: 6, 7, 6, 8, 7.",
          parts: [
            {
              label: "a",
              prompt: "Calculate average distance for each design.",
              marks: 3,
            },
            { label: "b", prompt: "Which design performed better?", marks: 2 },
            { label: "c", prompt: "Is the difference consistent?", marks: 2 },
            {
              label: "d",
              prompt: "What additional trials would strengthen conclusions?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data analysis",
                statement: "Calculate averages and compare.",
              },
              {
                kind: "principle",
                name: "Consistency",
                statement: "Reliable results are repeatable.",
              },
            ],
            steps: [
              {
                reasoning: "A: $(8+9+8+10+9)/5 = 44/5 = 8.8$ m.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "B: $(6+7+6+8+7)/5 = 34/5 = 6.8$ m.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Design A performed better — higher average (8.8 m vs 6.8 m).",
                marks: 2,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Yes — all A trials (8-10) > all B trials (6-8), consistent difference.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "More trials (10+) would improve confidence.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Different throwers or conditions would test robustness.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Repeat on different days to check consistency.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) A=8.8m, B=6.8m (b) A (c) yes consistent (d) more trials, varied conditions.",
            commonErrors: ["Not checking consistency across trials."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "s7-u4-evaluation",
      title: "Evaluating claims and communicating science",
      skill:
        "Critically assess scientific claims and communicate findings effectively.",
      lesson: {
        sections: [
          {
            heading: "Evaluating claims",
            body: "Ask: What evidence supports this? Is it from controlled experiments or anecdote? Who conducted the research? Is it peer-reviewed? Are there conflicts of interest? Does it match established science?",
          },
          {
            heading: "Scientific communication",
            body: "Effective science communication includes: clear question, method description, data presentation, results, conclusions, limitations. Avoid jargon; use visuals; acknowledge uncertainty.",
          },
          {
            heading: "Science in society",
            body: "Scientific findings inform policy, medicine, technology, environmental decisions. But science is provisional — new evidence can change conclusions. Evaluate claims with appropriate skepticism while respecting scientific consensus.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence quality",
            statement: "Controlled, replicated, peer-reviewed > anecdotal",
          },
          {
            name: "Communication",
            statement: "Clear, honest, acknowledges limitations",
          },
        ],
        workedExample: {
          problem:
            "A website claims 'This supplement cures all diseases.' How to evaluate?",
          solution:
            "Check for peer-reviewed studies, FDA approval, independent replication, conflicts of interest — extraordinary claims need extraordinary evidence.",
        },
      },
      questions: [
        {
          id: "s7-u4-evaluation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes scientific evidence stronger?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being published anywhere" },
              { id: "b", text: "Peer review and replication" },
              { id: "c", text: "Having a famous author" },
              { id: "d", text: "Agreeing with popular opinion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence quality",
                statement: "Peer review and replication strengthen findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peer review and independent replication are key indicators of reliable science.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Peer review and replication",
            commonErrors: ["Equating publication with validity."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u4-evaluation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a single study not enough to establish a scientific claim?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Replication",
                statement: "Results must be repeatable.",
              },
              {
                kind: "principle",
                name: "Sample size",
                statement:
                  "One study may have limited sample or unique conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Single study may have small sample or specific conditions.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Replication confirms results aren't due to chance or unique factors.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Multiple studies build consensus and reveal limitations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Replication needed to confirm reliability and generalizability.",
            commonErrors: ["Thinking one good study is definitive."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "s7-u4-evaluation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A news headline says 'New study proves coffee causes cancer.' What questions should you ask before believing it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Claim evaluation",
                statement: "Check evidence quality and context.",
              },
            ],
            steps: [
              {
                reasoning:
                  "What type of study? Correlation vs controlled experiment?",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Sample size and population? Long-term or short-term?",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Peer-reviewed? Replicated by others? Conflicts of interest?",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Does it align with broader scientific consensus?",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Study type, sample, peer review, replication, consensus alignment.",
            commonErrors: ["Accepting headline without scrutiny."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "s7-u4-evaluation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Your class conducted an experiment on seed germination and got unexpected results.",
          parts: [
            {
              label: "a",
              prompt: "What should you check first before concluding?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "How would you communicate these results to another class?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What are two limitations of your experiment?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Would you publish these results? Why or why not?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scientific rigor",
                statement: "Check procedure and data before conclusions.",
              },
              {
                kind: "principle",
                name: "Honest communication",
                statement: "Report results accurately including limitations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check: procedure followed correctly? Measurements accurate? Variables controlled?",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Review data for errors or outliers before drawing conclusions.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Communicate: question, hypothesis, method, data table, results, conclusion.",
                marks: 2,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Include graphs if helpful; state limitations clearly.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Limitation 1: sample size may be small; results may not generalize.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Limitation 2: specific conditions (light, temperature) may not apply elsewhere.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Yes, if method was sound — unexpected results are valuable scientific data.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Or: no, if procedure was flawed — needs replication first.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) check procedure/data (b) clear method+results+limits (c) sample size + conditions (d) depends on rigor.",
            commonErrors: ["Hiding unexpected results or limitations."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
