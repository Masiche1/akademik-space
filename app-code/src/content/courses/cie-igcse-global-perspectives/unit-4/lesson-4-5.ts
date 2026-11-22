import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "ciegp-u4-lesson-4-5",
  code: "4-5",
  title: "Research Design and the Global Perspectives Project",
  goal: "I CAN design a rigorous research project on a global issue — methods, ethics and presentation.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: project skills",
  ],
  vocabulary: [
    {
      term: "Research question",
      definition: "Focused query guiding the investigation.",
    },
    {
      term: "Primary source",
      definition:
        "Data collected first-hand: surveys, interviews, experiments.",
    },
    {
      term: "Secondary source",
      definition: "Existing data: reports, statistics, media.",
    },
    {
      term: "Sample bias",
      definition: "When the sample doesn't represent the population studied.",
    },
    {
      term: "Ethics",
      definition: "Principles governing responsible research with people.",
    },
    {
      term: "Triangulation",
      definition: "Using multiple methods or sources to verify findings.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l5-c1-methods",
      title: "Research methods and data collection",
      skill: "Choose and evaluate methods for investigating global issues.",
      lesson: {
        sections: [
          {
            heading: "Choosing methods",
            body: "**Primary methods**: questionnaires (reach many, limited depth), interviews (depth, small sample), observation (context, researcher bias), experiments (control, ethical limits). **Secondary methods**: official statistics, NGO reports, academic studies, media. Match method to question — 'how widespread?' suits surveys; 'why?' suits interviews or case studies.",
          },
          {
            heading: "Validity and reliability",
            body: "**Validity**: does the method measure what you claim? **Reliability**: would it give consistent results? Watch for **sample bias** (only surveying students about global issues), **leading questions** ('Don't you agree X is bad?'), **small samples**, and **researcher bias**. **Triangulation** — combining methods — strengthens findings.",
          },
        ],
        keyFormulas: [
          {
            name: "Validity",
            statement: "Measuring what you intend to measure",
          },
          { name: "Reliability", statement: "Consistent, repeatable results" },
          {
            name: "Triangulation",
            statement: "Multiple methods/sources to verify findings",
          },
        ],
        workedExample: {
          problem:
            "Evaluate using only an online survey of classmates to study global food insecurity.",
          solution:
            "Poor validity — classmates aren't representative of food-insecure populations; sample bias. Better: combine survey with official statistics and NGO reports (triangulation).",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l5c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'primary source' in research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Data collected first-hand by the researcher" },
              { id: "b", text: "A published book" },
              { id: "c", text: "Government statistics" },
              { id: "d", text: "A news article" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary source",
                statement: "First-hand data collection.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** First-hand collected data",
            commonErrors: ["Confusing with secondary sources."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two primary research methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary methods",
                statement: "Surveys, interviews, observation, experiments.",
              },
            ],
            steps: [
              { reasoning: "Two valid methods.", marks: 1, markCode: "M" },
              {
                reasoning: "Each correctly described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. questionnaires and semi-structured interviews.",
            commonErrors: ["Listing secondary sources."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'sample bias' is and why it matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sample bias",
                statement:
                  "Unrepresentative sample → unrepresentative conclusions.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "M" },
              { reasoning: "Consequence explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When the people studied don't represent the target population — e.g. surveying only university students about poverty — conclusions can't generalise.",
            commonErrors: ["Definition only, no consequence."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student researches 'why people in my school don't recycle' by interviewing 5 friends. Evaluate the method.",
          parts: [
            { label: "a", prompt: "Validity issues", marks: 2 },
            { label: "b", prompt: "Reliability issues", marks: 2 },
            { label: "c", prompt: "Suggested improvements", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method evaluation",
                statement:
                  "Sample size, representativeness, leading questions, triangulation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "5 friends not representative; friendship bias.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "May not measure true attitudes honestly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Small sample → unstable results.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Interviews vary by who/when.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "e.g. anonymous questionnaire to whole school + observation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Triangulation strengthens findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) tiny unrepresentative sample, friendship bias (b) unstable results, interviewer variance (c) anonymous school-wide survey + bin observation (triangulation)",
            commonErrors: [
              "Only criticising sample size, ignoring method fit.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l5c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'leading question' in a questionnaire?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leading question",
                statement: "Wording that pushes respondents toward an answer.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A question biased toward a particular answer — e.g. 'Don't you agree that fast fashion is destroying the planet?' vs 'What do you think about fast fashion?'",
            commonErrors: ["Confusing with open vs closed questions."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "When should a researcher use secondary rather than primary sources?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary sources",
                statement:
                  "For scale data, historical context, or when primary access impossible.",
              },
            ],
            steps: [
              { reasoning: "One valid reason.", marks: 1, markCode: "M" },
              { reasoning: "Second valid reason.", marks: 1, markCode: "M" },
              {
                reasoning: "Limitation acknowledged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "For large-scale statistics (e.g. national poverty rates), historical context, or when the population is inaccessible — though you can't verify collection methods directly.",
            commonErrors: ["Only citing convenience."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'triangulation' in research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measuring the same thing twice" },
              { id: "b", text: "Surveying three countries" },
              { id: "c", text: "Comparing two statistics" },
              {
                id: "d",
                text: "Using multiple methods or sources to verify findings",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triangulation",
                statement: "Cross-verification via multiple methods.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Multiple methods/sources to verify",
            commonErrors: ["Confusing with replication."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-8",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Design a study to investigate whether local recycling rates match national figures. Justify your methods.",
          parts: [
            {
              label: "a",
              prompt: "Research question and method choice",
              marks: 2,
            },
            { label: "b", prompt: "Sample design", marks: 2 },
            { label: "c", prompt: "Validity/reliability safeguards", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mixed methods",
                statement:
                  "Official stats + local observation/survey; representative sampling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Clear RQ; combines national data with local measurement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Justifies method fit.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Random/systematic sample across areas, not just one street.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Sample size adequate.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Triangulate: weigh bins + survey + official data.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Notes limitations honestly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "RQ: 'Do local recycling rates match national claims?' Methods: official stats (secondary) + bin-weighing observation + household survey; random sample across neighbourhoods; triangulate three sources.",
            commonErrors: ["Single method, convenience sample."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'researcher bias'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Researcher bias",
                statement:
                  "Researcher's expectations influencing design or interpretation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mitigation noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When the researcher's own views skew question wording, observation or interpretation — mitigated by piloting, peer review and reflexivity.",
            commonErrors: ["Confusing with respondent bias."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might interviews give richer data than questionnaires but less representative data?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method trade-offs",
                statement: "Depth vs breadth.",
              },
            ],
            steps: [
              {
                reasoning: "Interviews: depth, nuance, follow-ups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Small samples → poor representativeness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interviews allow probing and context (rich data) but are time-consuming, so samples are small and may not represent the population.",
            commonErrors: ["One-sided comparison."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method best suits the research question 'how widespread is this attitude?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single case study" },
              { id: "b", text: "Participant observation" },
              { id: "c", text: "Survey/questionnaire" },
              { id: "d", text: "In-depth interview" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Method matching",
                statement: "Breadth questions suit surveys.",
              },
            ],
            steps: [
              { reasoning: "Surveys measure prevalence across a sample.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Survey/questionnaire",
            commonErrors: ["Choosing interviews for a breadth question."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of a leading question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'How often do you use X?'" },
              { id: "b", text: "'Don't you agree that X policy is harmful?'" },
              { id: "c", text: "'Which option do you prefer?'" },
              { id: "d", text: "'What is your view of X policy?'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leading question",
                statement: "Wording that pushes a particular answer.",
              },
            ],
            steps: [
              { reasoning: "Option A presumes the respondent agrees.", marks: 1, markCode: "M" },
              { reasoning: "Correct option identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 'Don't you agree that X is harmful?'",
            commonErrors: ["Missing the presupposition in option A."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A questionnaire has 20 questions, of which 5 are identified as leading. What percentage are leading?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage leading", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question audit",
                statement: "Flagged/total x 100.",
              },
            ],
            steps: [
              { reasoning: "5/20 x 100 = 25%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Counting total questions instead of flagged."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a pilot survey of 50 responses, 10 responses flagged problems with question wording. What percentage showed problems?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pilot analysis",
                statement: "Problematic/total x 100.",
              },
            ],
            steps: [
              { reasoning: "10/50 x 100 = 20%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20%",
            commonErrors: ["Not linking the pilot to improvements."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish validity from reliability, giving an example of each in survey research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validity vs reliability",
                statement: "Measures the right thing vs consistent results.",
              },
            ],
            steps: [
              {
                reasoning: "Validity: does it measure what it claims?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reliability: would it give consistent results?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. valid but unreliable: honest answers vary by day.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Validity = measuring the right construct; reliability = consistent repeatable results — a method can have one without the other.",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
        {
          id: "ciegp-q-u4l5c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a mixed-methods approach for the question 'Why do farmers adopt drought-resistant crops?' Justify each method chosen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Method design",
                statement: "Match methods to 'why' questions.",
              },
            ],
            steps: [
              {
                reasoning: "Surveys for breadth: how many farmers, which varieties.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interviews for depth: motivations, barriers, context.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Observation or secondary data to verify claims.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Triangulation: cross-check findings across methods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Survey for prevalence + interviews for motivations + triangulation to verify — matching methods to a 'why' question.",
            commonErrors: ["Using only one method for a complex 'why' question."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l5-c2-ethics",
      title: "Ethics, analysis and project presentation",
      skill:
        "Apply ethical principles, analyse findings and present the project effectively.",
      lesson: {
        sections: [
          {
            heading: "Research ethics",
            body: "Key principles: **informed consent** (participants know and agree), **anonymity/confidentiality** (protect identities), **no harm** (avoid distress, especially vulnerable groups), **honesty** (don't fabricate data). Special care for minors, vulnerable populations and sensitive topics like conflict or health.",
          },
          {
            heading: "From data to conclusions",
            body: "Analyse findings against the research question — not just describe them. Look for patterns, compare with secondary data, acknowledge limitations. Structure the project: introduction (issue, RQ), methodology, findings, analysis, conclusion, reflection. Presentation skills: clear structure, evidence citation, balanced conclusions, answering questions confidently.",
          },
        ],
        keyFormulas: [
          {
            name: "Informed consent",
            statement: "Participants know purpose and freely agree",
          },
          {
            name: "Confidentiality",
            statement: "Protecting participant identities and data",
          },
          {
            name: "Analysis vs description",
            statement: "Explaining patterns, not just reporting them",
          },
        ],
        workedExample: {
          problem:
            "Is it ethical to survey students about their family's income without consent?",
          solution:
            "No — income is sensitive; needs informed consent, anonymity, and careful questioning. Better: ask about food access or use aggregated official data instead.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l5c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'informed consent'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The study is published openly" },
              { id: "b", text: "Researchers get permission from the school" },
              { id: "c", text: "Participants sign a contract" },
              {
                id: "d",
                text: "Participants know the study's purpose and freely agree to take part",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informed consent",
                statement: "Knowledge + voluntary agreement.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Knowing purpose and freely agreeing",
            commonErrors: ["Confusing with institutional permission."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ethical principles in research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research ethics",
                statement: "Consent, confidentiality, no harm, honesty.",
              },
            ],
            steps: [
              { reasoning: "Two valid principles.", marks: 1, markCode: "M" },
              { reasoning: "Each correctly stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. informed consent and confidentiality/anonymity.",
            commonErrors: ["Listing non-ethical research steps."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might anonymity matter when researching sensitive topics like mental health or conflict?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anonymity",
                statement:
                  "Protects participants from harm, stigma, retaliation.",
              },
            ],
            steps: [
              {
                reasoning: "Protection from harm/stigma.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Encourages honest responses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Legal/safety dimension noted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Identifiable responses could expose participants to stigma, discrimination or danger — anonymity protects them and encourages honesty.",
            commonErrors: ["Treating anonymity as mere politeness."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student wants to interview refugees about their journey for a project. Identify three ethical issues and how to address them.",
          parts: [
            { label: "a", prompt: "Issue 1 + solution", marks: 2 },
            { label: "b", prompt: "Issue 2 + solution", marks: 2 },
            { label: "c", prompt: "Issue 3 + solution", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vulnerable participants",
                statement:
                  "Refugees are vulnerable; trauma, power imbalance, safety.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. trauma/distress → trained interviewer, right to withdraw.",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. power imbalance → voluntary participation, no incentives coercing.",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "e.g. confidentiality → anonymise data, secure storage.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) trauma → sensitive questioning, right to stop (b) vulnerability → no coercion, genuine consent (c) safety → anonymity, secure data, avoid identifying details",
            commonErrors: ["Generic ethics without applying to vulnerability."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between describing findings and analysing them?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analysis vs description",
                statement: "Reporting vs explaining patterns and implications.",
              },
            ],
            steps: [
              {
                reasoning: "Description = what the data shows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analysis = why it matters, patterns, links to RQ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Describing reports what data shows ('60% recycle'); analysing explains patterns and significance ('suggests awareness campaigns work better than bins alone').",
            commonErrors: ["Listing findings without interpretation."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "What should a good project conclusion include?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conclusion structure",
                statement:
                  "Answer RQ, synthesise findings, acknowledge limits, reflect.",
              },
            ],
            steps: [
              {
                reasoning: "Directly answers research question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Synthesises key findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Acknowledges limitations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A direct answer to the research question, synthesis of main findings, acknowledged limitations, and reflection on what was learned.",
            commonErrors: ["Just repeating the introduction."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'confidentiality' mean in research?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Protecting participants' identities and data from disclosure",
              },
              { id: "b", text: "Not telling participants the results" },
              { id: "c", text: "Using fake data" },
              { id: "d", text: "Keeping the research secret forever" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Confidentiality",
                statement: "Data protected, identities secure.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Protecting identities and data",
            commonErrors: ["Confusing with secrecy of results."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-8",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate this project structure: Introduction → Methodology → Findings → 'Overall the project went well' → End.",
          parts: [
            { label: "a", prompt: "What is missing?", marks: 2 },
            { label: "b", prompt: "Why is 'went well' inadequate?", marks: 2 },
            { label: "c", prompt: "Improved structure", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Project structure",
                statement:
                  "Need analysis, conclusion, reflection, limitations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Missing analysis, conclusion, reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "No link back to research question.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Vague, no evidence, no evaluation of methods.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Doesn't answer the RQ.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "e.g. add analysis section + proper conclusion + reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Structure logically complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) analysis, conclusion, reflection, limitations (b) vague, unevidenced, doesn't answer RQ (c) Introduction → Methods → Findings → Analysis → Conclusion → Reflection",
            commonErrors: ["Only noting missing sections without why."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'reflection' in a research project?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection",
                statement:
                  "Critical evaluation of process, methods and learning.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Content example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Critically evaluating your own process — what worked, what didn't, what you'd do differently, and what you learned about the issue.",
            commonErrors: ["Confusing with description of findings."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to acknowledge limitations in a project?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limitations",
                statement: "Honesty about constraints strengthens credibility.",
              },
            ],
            steps: [
              {
                reasoning: "Builds credibility/honesty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Qualifies conclusions appropriately.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Acknowledging limits (sample size, method constraints, time) shows rigour and prevents overclaiming — it strengthens, not weakens, the project.",
            commonErrors: ["Thinking admitting limits makes it worse."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'informed consent' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Participants sign a contract" },
              {
                id: "b",
                text: "Participants know the purpose and freely agree to take part",
              },
              { id: "c", text: "Participants are paid" },
              { id: "d", text: "Participants are over 18" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informed consent",
                statement: "Know purpose + freely agree.",
              },
            ],
            steps: [
              { reasoning: "Consent requires knowledge and voluntariness.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Know purpose and freely agree",
            commonErrors: ["Confusing consent with payment."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does research involving conflict-affected children require special ethical care?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vulnerable groups",
                statement: "No harm takes priority for vulnerable participants.",
              },
            ],
            steps: [
              {
                reasoning: "Children are vulnerable; distress risk is high.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Trauma from conflict means questions must avoid re-traumatisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vulnerability plus trauma risk — requires safeguarding, consent via guardians, and non-distressing methods.",
            commonErrors: ["Treating all participants as equally able to consent."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A survey invites 400 people and 30 decline to participate. What is the response rate?",
          response: {
            type: "numeric",
            parts: [{ label: "Response rate (%)", answer: 92.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Response rate",
                statement: "Responded/invited x 100.",
              },
            ],
            steps: [
              { reasoning: "370/400 x 100 = 92.5%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "92.5%",
            commonErrors: ["Dividing declines by total instead of responses."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A project lists 6 ethical principles but the methodology section addresses only 4. What percentage are addressed?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage addressed", answer: 66.7, tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ethics coverage",
                statement: "Addressed/total x 100.",
              },
            ],
            steps: [
              { reasoning: "4/6 x 100 = 66.7%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "66.7%",
            commonErrors: ["Assuming unaddressed principles don't matter."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might analysing existing official statistics be more ethically appropriate than primary research on a sensitive topic like conflict or health?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary data ethics",
                statement: "No new participant risk when reusing data.",
              },
            ],
            steps: [
              {
                reasoning: "Avoids putting vulnerable people through distressing questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No consent burden or risk of harm to participants.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Trade-off: less control over data quality/relevance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reusing data avoids re-traumatising participants and consent issues — though it may lack specificity.",
            commonErrors: ["Assuming primary data is always better ethically."],
          },
        },
        {
          id: "ciegp-q-u4l5c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between describing findings and analysing findings in a GP project, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analysis vs description",
                statement: "Explaining patterns vs reporting them.",
              },
            ],
            steps: [
              {
                reasoning: "Description: '60% of students support X.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analysis: explains WHY — e.g. correlation with year group, comparison with secondary data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links findings back to the research question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analysis is what earns higher marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Description reports what data shows; analysis explains patterns, compares sources and answers the 'why' — essential for high marks.",
            commonErrors: ["Listing findings without interpretation."],
          },
        },
      ],
    },
  ],
};
