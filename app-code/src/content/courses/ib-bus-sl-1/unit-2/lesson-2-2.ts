import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "bus-u2-lesson-2-2",
  code: "2-2",
  title: "Market research and segmentation",
  goal: "I CAN distinguish primary and secondary research, describe the market research process and apply segmentation, targeting and positioning.",
  standards: ["Paper 1", "Paper 2", "Topic 2.2"],
  vocabulary: [
    {
      term: "Market research",
      definition:
        "The systematic gathering and analysis of information about markets, customers and competitors.",
    },
    {
      term: "Primary research",
      definition:
        "New data collected first-hand for a specific purpose, e.g. surveys, interviews, observation.",
    },
    {
      term: "Secondary research",
      definition:
        "Using existing data collected by others, e.g. government statistics, reports.",
    },
    {
      term: "Quantitative data",
      definition:
        "Numerical data that can be measured and analysed statistically.",
    },
    {
      term: "Qualitative data",
      definition: "Descriptive data about opinions, attitudes and motivations.",
    },
    {
      term: "Market segmentation",
      definition:
        "Dividing a market into groups of customers with similar needs or characteristics.",
    },
    {
      term: "Targeting",
      definition: "Choosing which market segment(s) the business will serve.",
    },
    {
      term: "Positioning",
      definition:
        "How the business wants customers to perceive its product relative to competitors.",
    },
  ],
  concepts: [
    {
      id: "bus-u2-research",
      title: "Market research methods",
      skill:
        "Compare primary and secondary research, quantitative and qualitative data, and describe the research process.",
      lesson: {
        sections: [
          {
            heading: "Primary vs secondary research",
            body: "**Primary research** collects new data for a specific decision: questionnaires and surveys (quantitative), interviews and focus groups (qualitative), observation and experiments. It is tailored but costly and slow. **Secondary research** uses existing sources — government statistics, industry reports, competitor websites — which is cheap and fast but may be outdated, biased or not specific to the firm's needs. Smart businesses combine both.",
          },
          {
            heading: "The market research process",
            body: "Research follows steps: define the problem or opportunity; decide the information needed; choose methods and collect data; analyse results; present findings and act on them. Poorly defined questions produce useless data, so the first step — stating the problem clearly — is often tested in exams.",
          },
          {
            heading: "Using research to reduce risk",
            body: "Research answers key questions: Is there demand? How big is the market? What do customers want and what will they pay? Who are the competitors? It reduces the risk of launching products nobody buys. Limitations include sampling bias, dishonest respondents and the cost of large-scale surveys.",
          },
        ],
        keyFormulas: [
          {
            name: "Primary research",
            statement:
              "New first-hand data: surveys, interviews, observation, experiments",
          },
          {
            name: "Secondary research",
            statement:
              "Existing data: statistics, reports, competitor information",
          },
          {
            name: "Research process",
            statement: "Define problem → collect → analyse → act",
          },
        ],
        workedExample: {
          problem:
            "A restaurant wants to know if customers would buy a new vegan menu. Recommend two research methods and justify each.",
          solution:
            "A questionnaire to existing customers gives quantitative data on how many would buy (primary, quantitative). Interviews with a few customers give qualitative insight into why they would or would not choose vegan options.",
        },
      },
      questions: [
        {
          id: "bus-u2-res-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Using government census data to estimate market size is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary quantitative research" },
              { id: "b", text: "Secondary research" },
              { id: "c", text: "Field research" },
              { id: "d", text: "Primary qualitative research" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary research",
                statement:
                  "Using data already collected by others, such as government statistics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Census data already exists and was collected by government, not the firm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Secondary research",
            commonErrors: [
              "Calling all published data primary — primary means collected first-hand.",
            ],
          },
        },
        {
          id: "bus-u2-res-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A company surveys 500 customers and finds that 62% would buy a proposed product. Calculate the number of customers who would buy.",
          response: {
            type: "numeric",
            parts: [{ label: "Customers", answer: 310 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage of sample",
                statement: "Number = percentage x sample size / 100",
              },
            ],
            steps: [
              {
                reasoning: "Apply the percentage to the sample size.",
                working: "0.62 \\times 500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply.",
                working: "310",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the number of customers.",
                working: "310",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$310$ customers",
            commonErrors: ["Multiplying by 62 instead of 0.62."],
          },
        },
        {
          id: "bus-u2-res-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a business might combine primary and secondary research rather than relying on one method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combining research",
                statement:
                  "Secondary gives cheap context; primary gives tailored detail.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secondary research is cheap and quick for background on market size and competitors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Primary research then gathers specific data about the firm's own customers and product idea.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Together they balance cost, speed and relevance.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: each method covers the other's weaknesses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Secondary provides cheap context; primary provides tailored, specific data.",
            commonErrors: [
              "Listing both methods without explaining why combining is better.",
            ],
          },
        },
        {
          id: "bus-u2-res-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A company plans to launch a new breakfast cereal but is unsure whether demand exists.",
          parts: [
            { label: "a", prompt: "Define market research.", marks: 2 },
            {
              label: "b",
              prompt:
                "Recommend two research methods the company could use and justify each.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the limitations of relying only on secondary research for this decision.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Market research",
                statement:
                  "Systematic gathering and analysis of information about markets, customers and competitors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Gathering and analysing information about markets and customers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Purpose: reduce risk and inform decisions — stated clearly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Primary: survey or taste-test to measure actual demand for the new cereal.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Secondary: industry reports on breakfast market size and trends.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Each method justified for this specific decision.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Data may be outdated, generic or not about this product; no direct customer feedback.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced evaluation — secondary is useful but insufficient alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Systematic gathering/analysis of market information. (b) Survey + secondary reports, justified. (c) Outdated/generic data, no direct feedback.",
            commonErrors: [
              "Recommending methods without linking them to the demand question.",
            ],
          },
        },
        {
          id: "bus-u2-res-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of primary research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An industry report bought online" },
              { id: "b", text: "A competitor's website" },
              { id: "c", text: "Interviewing the firm's own customers" },
              { id: "d", text: "Government census statistics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary research",
                statement:
                  "New data collected first-hand for a specific purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interviewing customers collects new first-hand data for the firm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Interviewing the firm's own customers",
            commonErrors: [
              "Counting published data as primary — primary means collected first-hand.",
            ],
          },
        },
        {
          id: "bus-u2-res-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Feedback describing why customers like a product's design is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Qualitative data" },
              { id: "b", text: "Demographic data" },
              { id: "c", text: "Quantitative data" },
              { id: "d", text: "Secondary data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualitative data",
                statement:
                  "Descriptive data about opinions, attitudes and motivations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Opinions and reasons are descriptive, not numerical — qualitative data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Qualitative data",
            commonErrors: [
              "Confusing qualitative (opinions) with quantitative (numbers).",
            ],
          },
        },
        {
          id: "bus-u2-res-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The first step in the market research process is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analyse the results" },
              { id: "b", text: "Present the findings" },
              { id: "c", text: "Define the problem or opportunity" },
              { id: "d", text: "Collect data" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research process",
                statement: "Define problem → collect → analyse → act.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Research starts by stating the problem clearly before any data is gathered.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Define the problem or opportunity",
            commonErrors: [
              "Starting with data collection before knowing what question to answer.",
            ],
          },
        },
        {
          id: "bus-u2-res-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is a limitation of relying on secondary research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It takes too long to collect" },
              {
                id: "b",
                text: "Data may be outdated or not specific to the firm's needs",
              },
              { id: "c", text: "It cannot be analysed statistically" },
              { id: "d", text: "It is always too expensive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary research limits",
                statement:
                  "Existing data may be old, biased or not tailored to the decision.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secondary data was collected by others for other purposes, so it may not fit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Data may be outdated or not specific to the firm's needs",
            commonErrors: [
              "Listing cost or time — secondary research is actually cheap and fast.",
            ],
          },
        },
        {
          id: "bus-u2-res-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Sampling bias occurs when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The sample does not represent the target population",
              },
              { id: "b", text: "The data is quantitative" },
              { id: "c", text: "Respondents deliberately lie" },
              { id: "d", text: "The sample is too small to analyse" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sampling bias",
                statement:
                  "Results are unrepresentative because the sample does not reflect the population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bias means the sample skews away from the real customer population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The sample does not represent the target population",
            commonErrors: [
              "Confusing bias with small sample size or dishonest answers.",
            ],
          },
        },
        {
          id: "bus-u2-res-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of primary research for a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary research benefits",
                statement:
                  "Tailored, current, first-hand data specific to the firm's decision.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Data is collected specifically for the firm's own questions, so it is highly relevant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is up-to-date first-hand information, not recycled secondary data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Qualitative methods like interviews reveal reasons behind customer behaviour.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: primary research gives control and relevance at higher cost.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tailored, current, first-hand data — including qualitative insight into customer motives.",
            commonErrors: [
              "Claiming primary research is cheap — it is costly and slow.",
            ],
          },
        },
        {
          id: "bus-u2-res-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two limitations of conducting primary research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary research limits",
                statement:
                  "Costly, time-consuming and vulnerable to sampling and response problems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Designing and running surveys or interviews is expensive and takes time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Samples may be unrepresentative (sampling bias) and respondents may answer dishonestly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Small samples limit how confidently results can be generalised.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: primary research is powerful but resource-intensive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High cost and time, plus risks of sampling bias and unreliable responses.",
            commonErrors: [
              "Saying primary research is always accurate — it can be biased too.",
            ],
          },
        },
        {
          id: "bus-u2-res-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why clearly defining the research problem is important in market research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Problem definition",
                statement:
                  "A clear problem focuses data collection and prevents wasted effort.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It determines exactly what information is needed, so data collection stays focused.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without it, firms gather irrelevant data and waste money.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It guides the choice of research method and questionnaire design.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: poor problem definition produces useless research.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clear problems focus collection, save cost and guide method choice.",
            commonErrors: [
              "Saying problem definition is a formality rather than the key first step.",
            ],
          },
        },
        {
          id: "bus-u2-res-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm surveys 800 customers and 35% say they prefer the new flavour. Calculate how many customers prefer it.",
          response: {
            type: "numeric",
            parts: [{ label: "Customers", answer: 280 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage of sample",
                statement: "Number = percentage x sample size / 100",
              },
            ],
            steps: [
              {
                reasoning: "Apply the percentage to the sample size.",
                working: "0.35 \\times 800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply.",
                working: "280",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the number of customers.",
                working: "280",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$280$ customers",
            commonErrors: ["Multiplying by 35 instead of 0.35."],
          },
        },
        {
          id: "bus-u2-res-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A survey of 500 people costs 5,000 dollars. Calculate the cost per respondent.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost per respondent", answer: 10, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Unit cost",
                statement:
                  "Cost per respondent = total cost / number of respondents",
              },
            ],
            steps: [
              {
                reasoning: "Divide total cost by number of respondents.",
                working: "5000 \\div 500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate.",
                working: "10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the cost per respondent.",
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$ per respondent",
            commonErrors: [
              "Dividing respondents by cost instead of cost by respondents.",
            ],
          },
        },
        {
          id: "bus-u2-res-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A town has 2,000,000 people. 30% buy breakfast cereal and a firm expects a 10% share of that market. Calculate its expected number of customers.",
          response: {
            type: "numeric",
            parts: [{ label: "Expected customers", answer: 60000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Market sizing",
                statement:
                  "Customers = population x penetration x market share",
              },
            ],
            steps: [
              {
                reasoning: "Find the number of cereal buyers.",
                working: "0.30 \\times 2000000 = 600000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the firm's 10% share.",
                working: "0.10 \\times 600000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State expected customers.",
                working: "60000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$60000$ customers",
            commonErrors: [
              "Applying both percentages to the full population incorrectly.",
            ],
          },
        },
        {
          id: "bus-u2-res-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A new gym wants to check whether local residents would pay for premium classes before investing.",
          parts: [
            {
              label: "a",
              prompt: "Distinguish between primary and secondary research.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend two research methods and justify each for this decision.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate using online reviews as the only research for this decision.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary vs secondary",
                statement:
                  "Primary = new first-hand data; secondary = existing data collected by others.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Primary research collects new data for a specific purpose; secondary uses existing sources.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Examples distinguishing the two are clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Survey/questionnaire of local residents to measure willingness to pay.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Secondary: local demographic data on income and leisure spending.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each method justified for the willingness-to-pay question.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reviews reflect existing customers' opinions, are unrepresentative and may be biased or fake.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — useful background but insufficient alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) New first-hand vs existing data. (b) Survey + demographic data, justified. (c) Reviews are biased and unrepresentative.",
            commonErrors: [
              "Recommending methods without linking them to willingness to pay.",
            ],
          },
        },
        {
          id: "bus-u2-res-q17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of secondary research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Observing shoppers in store" },
              { id: "b", text: "A customer questionnaire" },
              { id: "c", text: "An industry report" },
              { id: "d", text: "A focus group" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary research",
                statement:
                  "Using existing data sources such as reports, statistics and competitor information.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An industry report already exists — it is secondary data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** An industry report",
            commonErrors: [
              "Confusing first-hand data collection (primary) with existing sources (secondary).",
            ],
          },
        },
        {
          id: "bus-u2-res-q18",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In-depth interviews and focus groups mainly produce:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quantitative data" },
              { id: "b", text: "Secondary data" },
              { id: "c", text: "Qualitative data" },
              { id: "d", text: "Census data" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualitative data",
                statement:
                  "Descriptive, opinion-based data gathered through interviews and focus groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interviews and focus groups explore opinions and motivations — qualitative data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Qualitative data",
            commonErrors: [
              "Labelling interview data as quantitative — it is not numerical.",
            ],
          },
        },
        {
          id: "bus-u2-res-q19",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The first step in the market research process is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Define the problem or opportunity" },
              { id: "b", text: "Analyse the results" },
              { id: "c", text: "Collect the data" },
              { id: "d", text: "Design the questionnaire" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research process",
                statement:
                  "Define the problem → decide information needed → collect → analyse → act.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Research must start by stating the problem clearly; everything else follows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Define the problem or opportunity",
            commonErrors: [
              "Starting with data collection before clarifying what the research must answer.",
            ],
          },
        },
        {
          id: "bus-u2-res-q20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A survey using closed questions with fixed response categories mainly produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Qualitative data" },
              { id: "b", text: "Quantitative data" },
              { id: "c", text: "Observational data" },
              { id: "d", text: "Secondary data" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantitative data",
                statement:
                  "Numerical data that can be measured and analysed statistically.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Closed questions produce countable responses — quantitative data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Quantitative data",
            commonErrors: [
              "Confusing closed questions (quantitative) with open questions (qualitative).",
            ],
          },
        },
        {
          id: "bus-u2-res-q21",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Sampling bias occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The questionnaire uses open questions" },
              { id: "b", text: "The sample is larger than necessary" },
              { id: "c", text: "The research uses secondary sources" },
              {
                id: "d",
                text: "The sample is not representative of the target population",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sampling bias",
                statement:
                  "Results are distorted because the sample does not represent the whole market.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bias means the people surveyed differ systematically from the target market.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The sample is not representative of the target population",
            commonErrors: ["Confusing sample size with representativeness."],
          },
        },
        {
          id: "bus-u2-res-q22",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of primary research over secondary research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary research benefits",
                statement:
                  "Tailored to the firm's questions; first-hand and specific data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Data is collected for the firm's exact decision, so it is specific and relevant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The firm controls methods and questions, improving accuracy for its purpose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trade-off: primary research is more expensive and slower than secondary.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: primary research suits decisions needing specific, current data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tailored, first-hand data at the cost of time and money.",
            commonErrors: [
              "Listing secondary research advantages instead of primary.",
            ],
          },
        },
        {
          id: "bus-u2-res-q23",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two limitations of secondary research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary research limits",
                statement:
                  "Existing data may be outdated, biased or not specific to the firm's needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Data may be old and no longer reflect current market conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sources may be biased toward their original purpose or too general for the firm's question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is cheap and fast, which is why firms still use it alongside primary research.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: secondary research is a useful starting point but rarely sufficient alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Data may be outdated, biased or too general — best combined with primary research.",
            commonErrors: [
              "Listing advantages of secondary research instead of limitations.",
            ],
          },
        },
        {
          id: "bus-u2-res-q24",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A new gym wants to know whether university students would pay for a monthly membership.",
          parts: [
            {
              label: "a",
              prompt: "Distinguish between primary and secondary research.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend two research methods and justify each for this question.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the usefulness of reading student forum posts as evidence.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary vs secondary research",
                statement:
                  "Primary = new first-hand data; secondary = existing data sources.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Primary research collects new data for this specific decision.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Secondary research uses existing sources such as reports and statistics.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Questionnaire to students — quantitative data on how many would pay and at what price.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Interviews or focus groups — qualitative insight into why students would or would not join.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each method justified for the willingness-to-pay question.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Forum posts are cheap secondary data but unrepresentative, anonymous and possibly biased.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — useful background but insufficient alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) New first-hand vs existing data. (b) Survey plus interviews/focus groups, justified. (c) Forums are biased and unrepresentative.",
            commonErrors: [
              "Recommending methods without linking them to willingness to pay.",
            ],
          },
        },
        {
          id: "bus-u2-res-q25",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A small firm is considering launching a home meal-kit subscription but knows little about the market.",
          parts: [
            {
              label: "a",
              prompt: "Explain the steps of the market research process.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend two methods to test demand for the subscription and justify each.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether a small firm can afford adequate market research.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research process",
                statement:
                  "Define problem → decide information needed → collect → analyse → act.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "First define the problem or question the research must answer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Then choose methods, collect and analyse data, and act on findings.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Online questionnaire — cheap quantitative measure of how many would subscribe.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Interviews or a small pilot trial — qualitative insight into demand drivers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each method justified for testing subscription demand.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Small-scale online surveys and secondary data are affordable for a small firm.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Large-scale primary research may be too costly, risking decisions made on weak data.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement — combine cheap methods; research cost is small versus launching a failing product.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Define problem, collect, analyse, act. (b) Online survey plus interviews/pilot, justified. (c) Affordable in small scale; combine cheap methods.",
            commonErrors: [
              "Ignoring the cost constraint on a small firm's research budget.",
            ],
          },
        },
        {
          id: "bus-u2-res-q26",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A survey of 250 customers finds that $40\\%$ would buy a proposed product. Calculate how many customers would buy.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of buyers", answer: 100, unit: "customers" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage of sample",
                statement: "Part = percentage x total",
              },
            ],
            steps: [
              {
                reasoning: "Convert the percentage to a decimal.",
                working: "40% = 0.40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the number of customers surveyed.",
                working: "0.40 x 250",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the number of buyers.",
                working: "100",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$100$ customers",
            commonErrors: ["Multiplying by 40 instead of 0.40."],
          },
        },
        {
          id: "bus-u2-res-q27",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm sends out 800 questionnaires and receives 200 completed responses. Calculate the response rate as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "Response rate", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Response rate",
                statement:
                  "Response rate = responses / questionnaires sent x 100",
              },
            ],
            steps: [
              {
                reasoning: "Divide responses by questionnaires sent.",
                working: "200 / 800 = 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert the decimal to a percentage.",
                working: "0.25 x 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the response rate.",
                working: "25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Dividing 800 by 200 instead of responses by sent."],
          },
        },
        {
          id: "bus-u2-res-q28",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A company spends 12,000 dollars on a survey that yields 600 usable responses. Calculate the cost per response.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost per response", answer: 20, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost per response",
                statement:
                  "Cost per response = total research cost / number of responses",
              },
            ],
            steps: [
              {
                reasoning: "Identify total cost and number of responses.",
                working: "12000 / 600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide cost by responses.",
                working: "12000 / 600 = 20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the cost per response.",
                working: "20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20$ per response",
            commonErrors: [
              "Dividing 600 by 12,000 instead of cost by responses.",
            ],
          },
        },
      ],
    },
    {
      id: "bus-u2-stp",
      title: "Segmentation, targeting and positioning",
      skill:
        "Explain market segmentation bases, targeting strategies and positioning, and evaluate their use.",
      lesson: {
        sections: [
          {
            heading: "Market segmentation",
            body: "**Segmentation** divides a heterogeneous market into groups with shared needs. Bases include **demographic** (age, gender, income), **geographic** (region, climate), **psychographic** (lifestyle, values) and **behavioural** (usage rate, brand loyalty). Effective segments must be measurable, accessible, substantial and differentiable.",
          },
          {
            heading: "Targeting and positioning",
            body: "**Targeting** chooses which segments to serve: undifferentiated (whole market), differentiated (several segments with tailored products), concentrated (one niche) or micromarketing. **Positioning** is the image the product occupies in customers' minds — e.g. 'the premium choice' or 'the value option'. Positioning is built through the whole marketing mix, not just advertising.",
          },
          {
            heading: "Why STP matters",
            body: "Serving everyone with one product wastes resources; focusing on segments that value the product concentrates effort where returns are highest. Exam questions ask you to apply STP to a scenario: identify segments, choose a targeting strategy and describe the positioning.",
          },
        ],
        keyFormulas: [
          {
            name: "Segmentation bases",
            statement: "Demographic, geographic, psychographic, behavioural",
          },
          {
            name: "Targeting strategies",
            statement:
              "Undifferentiated, differentiated, concentrated, micromarketing",
          },
          {
            name: "Positioning",
            statement: "The perceived place of the product in customers' minds",
          },
        ],
        workedExample: {
          problem:
            "A sports brand sells trainers. Suggest two segmentation bases and one targeting strategy for a premium running-shoe line.",
          solution:
            "Behavioural (serious runners) and demographic (higher income). Concentrated targeting on serious runners with a premium positioning: high price, performance features, specialist promotion.",
        },
      },
      questions: [
        {
          id: "bus-u2-stp-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Dividing a market by age, income and gender is segmentation by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geographic factors" },
              { id: "b", text: "Behavioural factors" },
              { id: "c", text: "Demographic factors" },
              { id: "d", text: "Psychographic factors" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demographic segmentation",
                statement:
                  "Dividing markets by measurable population characteristics such as age, income and gender.",
              },
            ],
            steps: [
              {
                reasoning: "Age, income and gender are demographic variables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Demographic factors",
            commonErrors: [
              "Confusing demographic with psychographic (lifestyle/values).",
            ],
          },
        },
        {
          id: "bus-u2-stp-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A company sells the same product to every customer without adapting it. Name this targeting strategy.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Undifferentiated targeting" },
              { id: "b", text: "Micromarketing" },
              { id: "c", text: "Concentrated targeting" },
              { id: "d", text: "Differentiated targeting" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Undifferentiated targeting",
                statement:
                  "Treating the whole market as one segment with a single product and message.",
              },
            ],
            steps: [
              {
                reasoning:
                  "One product for everyone is undifferentiated (mass) marketing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Undifferentiated targeting",
            commonErrors: [
              "Confusing undifferentiated with differentiated targeting.",
            ],
          },
        },
        {
          id: "bus-u2-stp-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how positioning differs from targeting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Targeting vs positioning",
                statement:
                  "Targeting = which segments to serve; positioning = how the product is perceived.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Targeting is the selection decision: which customer groups the business aims at.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Positioning is the image decision: where the product sits in customers' minds relative to rivals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They work together: targeting picks the segment, positioning shapes the message for it.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: targeting is 'who', positioning is 'how we appear'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Targeting selects customer segments; positioning creates the product's perceived image.",
            commonErrors: ["Using the two terms interchangeably."],
          },
        },
        {
          id: "bus-u2-stp-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A new smartphone brand competes against two giants with 90% of the market.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why market segmentation could help this new brand.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe how the brand could position its product against the giants.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the risks of using a niche (concentrated) targeting strategy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Niche strategy",
                statement:
                  "Focusing resources on a small, underserved segment can beat larger rivals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Segmentation reveals underserved niches the giants ignore.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Focusing on a segment concentrates limited resources effectively.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Position as specialist — e.g. best camera, longest battery, lower price or eco-friendly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Build the image consistently through product, price, place and promotion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Clear example of a differentiated position stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Risk: niche may be too small to sustain the business or giants may copy the idea.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on niche strategy risks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Finds underserved niches, focuses resources. (b) Specialist positioning via the 4Ps. (c) Small market and imitation are the main risks.",
            commonErrors: [
              "Positioning described only as advertising rather than overall image.",
            ],
          },
        },
        {
          id: "bus-u2-stp-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Segmenting a market by lifestyle, values and personality is segmentation by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geographic factors" },
              { id: "b", text: "Behavioural factors" },
              { id: "c", text: "Psychographic factors" },
              { id: "d", text: "Demographic factors" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Psychographic segmentation",
                statement:
                  "Dividing markets by lifestyle, values, attitudes and personality.",
              },
            ],
            steps: [
              {
                reasoning: "Lifestyle and values are psychographic variables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Psychographic factors",
            commonErrors: [
              "Confusing psychographic (lifestyle/values) with demographic (age/income).",
            ],
          },
        },
        {
          id: "bus-u2-stp-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A firm that serves only one small, specialised segment of the market uses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Differentiated targeting" },
              { id: "b", text: "Mass marketing" },
              { id: "c", text: "Undifferentiated targeting" },
              { id: "d", text: "Concentrated targeting" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Concentrated targeting",
                statement:
                  "Focusing all marketing effort on one niche segment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Serving a single specialised segment is concentrated (niche) targeting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Concentrated targeting",
            commonErrors: [
              "Confusing concentrated (one niche) with differentiated (several segments).",
            ],
          },
        },
        {
          id: "bus-u2-stp-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Dividing customers by country, region or climate is segmentation by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demographic factors" },
              { id: "b", text: "Behavioural factors" },
              { id: "c", text: "Geographic factors" },
              { id: "d", text: "Psychographic factors" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geographic segmentation",
                statement: "Dividing markets by location, region or climate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Country, region and climate are geographic variables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Geographic factors",
            commonErrors: [
              "Confusing geographic with demographic segmentation.",
            ],
          },
        },
        {
          id: "bus-u2-stp-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Segmenting customers by how often they use a product or by their brand loyalty is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Psychographic segmentation" },
              { id: "b", text: "Demographic segmentation" },
              { id: "c", text: "Behavioural segmentation" },
              { id: "d", text: "Geographic segmentation" },
            ],
            correctChoiceIc: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Behavioural segmentation",
                statement:
                  "Dividing markets by usage rate, loyalty, benefits sought or buying habits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Usage rate and loyalty describe how customers behave toward the product.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (d) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Behavioural segmentation",
            commonErrors: [
              "Confusing behavioural (actions) with psychographic (attitudes).",
            ],
          },
        },
        {
          id: "bus-u2-stp-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Describing a product as 'the premium choice' or 'best value' refers to its:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Market segment" },
              { id: "b", text: "Segmentation base" },
              { id: "c", text: "Positioning" },
              { id: "d", text: "Targeting strategy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positioning",
                statement:
                  "The perceived place of the product in customers' minds relative to competitors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Premium' or 'best value' is the image the product occupies — positioning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Positioning",
            commonErrors: [
              "Confusing positioning (image) with targeting (which segments to serve).",
            ],
          },
        },
        {
          id: "bus-u2-stp-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Micromarketing involves:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Tailoring products to very small or individual segments",
              },
              { id: "b", text: "Ignoring market differences entirely" },
              { id: "c", text: "One product sold to every customer" },
              { id: "d", text: "Using only demographic data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Micromarketing",
                statement:
                  "Tailoring marketing to tiny segments, sometimes individual customers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Micromarketing narrows targeting to very small or individual customer groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Tailoring products to very small or individual segments",
            commonErrors: [
              "Confusing micromarketing with undifferentiated mass marketing.",
            ],
          },
        },
        {
          id: "bus-u2-stp-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two criteria that an effective market segment must meet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Effective segmentation",
                statement:
                  "Segments should be measurable, accessible, substantial and differentiable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Measurable: the segment's size and characteristics can be identified from data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Accessible: the firm can actually reach the segment through distribution and promotion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Other valid criteria: substantial (large enough to be profitable) or differentiable (distinct needs).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: a useful segment must be identifiable, reachable and worth serving.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Measurable and accessible (also substantial and differentiable).",
            commonErrors: [
              "Naming segmentation bases instead of criteria for a useful segment.",
            ],
          },
        },
        {
          id: "bus-u2-stp-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between differentiated targeting and concentrated targeting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Targeting strategies",
                statement:
                  "Differentiated serves several segments with tailored products; concentrated serves one niche.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Differentiated targeting aims products at several distinct segments, each with a tailored offer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Concentrated targeting focuses all resources on a single niche segment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trade-off: differentiated reaches more customers but costs more; concentrated is cheaper but riskier.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: the choice depends on resources and segment attractiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Differentiated = several tailored segments; concentrated = one niche.",
            commonErrors: ["Using the two terms interchangeably."],
          },
        },
        {
          id: "bus-u2-stp-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A coffee shop chain is reviewing its marketing strategy.",
          parts: [
            {
              label: "a",
              prompt: "Explain two ways its market could be segmented.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend a targeting strategy for a new premium coffee range aimed at young professionals and justify it.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Describe how the premium range could be positioned.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "STP application",
                statement:
                  "Segment the market, choose segments to serve, then build the product's image.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Demographic: age and income distinguish young professionals from other customers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Behavioural or psychographic: coffee habits or lifestyle values — any two valid bases.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Concentrated targeting on young professionals suits a premium niche range.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justified by their higher income and willingness to pay for quality coffee.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Differentiated targeting also acceptable if justified — premium line for one segment, standard for others.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Position as premium/specialist — e.g. 'the artisan choice' for quality-focused professionals.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Positioning built consistently through the whole marketing mix.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Demographic plus behavioural/psychographic bases. (b) Concentrated or differentiated targeting justified by segment income. (c) Premium artisan positioning via the mix.",
            commonErrors: [
              "Describing positioning as only an advertising message.",
            ],
          },
        },
        {
          id: "bus-u2-stp-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A bicycle manufacturer currently sells one standard model to every customer.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why market segmentation might improve its performance.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend a targeting strategy and describe the positioning that would support it.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the risks of changing from undifferentiated to differentiated targeting.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Segmentation benefits",
                statement:
                  "Focusing on segments concentrates resources where returns are highest.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Segmentation reveals distinct needs — commuters, athletes, families — that one model cannot satisfy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Tailored products and promotion can command higher prices and loyalty.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Differentiated targeting: different bike ranges for commuters, sport riders and families.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Position each range distinctly — e.g. 'value commuter', 'performance', 'family'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Positioning supported consistently by product features, price and promotion.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Risk: higher costs from multiple product lines, stock complexity and smaller scale per model.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Risk: segments may overlap or the firm may lose the simple mass-market appeal.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — differentiation pays only if segment differences are real and resources allow.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Reveals distinct needs, enables tailored offers. (b) Differentiated targeting with distinct positions per range. (c) Higher costs and complexity are the main risks.",
            commonErrors: [
              "Recommending segmentation without evaluating the cost of multiple product lines.",
            ],
          },
        },
        {
          id: "bus-u2-stp-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm's target segment is estimated at $15\\%$ of a national market of 800,000 potential customers. Calculate the segment size.",
          response: {
            type: "numeric",
            parts: [
              { label: "Segment size", answer: 120000, unit: "customers" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Segment size",
                statement: "Segment size = percentage of market x total market",
              },
            ],
            steps: [
              {
                reasoning: "Convert the percentage to a decimal.",
                working: "15% = 0.15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the total market size.",
                working: "0.15 x 800000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the segment size.",
                working: "120000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$120,000$ customers",
            commonErrors: ["Multiplying by 15 instead of 0.15."],
          },
        },
        {
          id: "bus-u2-stp-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A market segment grew from 40,000 customers to 50,000 customers in one year. Calculate the percentage growth.",
          response: {
            type: "numeric",
            parts: [{ label: "Growth rate", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage growth",
                statement: "Growth % = (new - old) / old x 100",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the absolute increase.",
                working: "50000 - 40000 = 10000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide the increase by the original size and convert to a percentage.",
                working: "10000 / 40000 x 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the growth rate.",
                working: "25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: [
              "Dividing by the new value instead of the original 40,000.",
            ],
          },
        },
      ],
    },
  ],
};
