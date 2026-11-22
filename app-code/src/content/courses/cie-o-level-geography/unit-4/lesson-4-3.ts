import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "oleg-u4-lesson-4-3",
  code: "4-3",
  title: "Geographical Investigations",
  goal: "I CAN describe fieldwork methods and geographical skills for Paper 3.",
  standards: ["2217: Geographical investigations and skills"],
  vocabulary: [
    {
      term: "Fieldwork",
      definition: "Collecting primary data outside the classroom.",
    },
    {
      term: "Primary data",
      definition: "Data collected first-hand for the investigation.",
    },
    {
      term: "Secondary data",
      definition: "Data collected by others (maps, censuses, satellites).",
    },
    {
      term: "Sampling",
      definition: "Selecting a representative part of a population to study.",
    },
    {
      term: "Reliability",
      definition: "Consistency of data collection results.",
    },
    {
      term: "Validity",
      definition: "Whether data actually measures what was intended.",
    },
  ],
  concepts: [
    {
      id: "oleg-u4-fieldwork",
      title: "Fieldwork methods",
      skill: "Describe sampling, data collection and analysis in fieldwork.",
      lesson: {
        sections: [
          {
            heading: "Sampling methods",
            body: "Random: every member has equal chance — unbiased but may miss areas. Systematic: every nth item (e.g. every 10th house) — quick but patterns may bias. Stratified: divide population into groups then sample each — ensures representation. Opportunity: easiest to access — biased.",
          },
          {
            heading: "Data collection",
            body: "Questionnaires: many respondents, standardised, but limited depth. Interviews: detailed answers, but time-consuming and interviewer bias. Field measurements: traffic counts, land use surveys, environmental readings — objective but site-specific. Observation: behaviour recorded directly — ethical issues.",
          },
          {
            heading: "Analysis and presentation",
            body: "Present data as tables, bar charts, line graphs, scatter graphs, pie charts. Calculate percentages, means, correlations. Conclusion should answer the hypothesis and acknowledge limitations.",
          },
        ],
        keyFormulas: [
          {
            name: "Fieldwork",
            statement:
              "Sampling: random/systematic/stratified/opportunity; analyse→conclude.",
          },
        ],
        workedExample: {
          problem: "Why is random sampling preferred?",
          solution:
            "Every member has equal chance — reduces bias and gives representative data.",
        },
      },
      questions: [
        {
          id: "oleg-u4-fw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is stratified sampling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sampling each subgroup proportionally" },
              { id: "b", text: "Taking every 10th item" },
              { id: "c", text: "Picking the easiest respondents" },
              { id: "d", text: "Random selection only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stratified sampling",
                statement: "Sample each subgroup.",
              },
            ],
            steps: [
              {
                reasoning: "Stratified = subgroups.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sampling each subgroup proportionally",
            commonErrors: ["Confusing with systematic."],
          },
        },
        {
          id: "oleg-u4-fw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Reliability vs validity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability/validity",
                statement: "Consistent vs measures intended.",
              },
            ],
            steps: [
              {
                reasoning: "Reliability = consistent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Validity = measures target.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Reliability=consistent results; validity=measures what was intended.",
            commonErrors: ["Swapping them."],
          },
        },
        {
          id: "oleg-u4-fw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare questionnaires and interviews as data collection methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data collection",
                statement: "Questionnaires vs interviews.",
              },
            ],
            steps: [
              {
                reasoning: "Questionnaires: many, standardised.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Interviews: detailed, time-consuming.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Bias/limitations noted.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Questionnaires reach many quickly; interviews give depth but take time and risk bias.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "oleg-u4-fw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Fieldwork investigation.",
          parts: [
            { label: "a", prompt: "Sampling methods?", marks: 3 },
            { label: "b", prompt: "Two data collection methods?", marks: 2 },
            { label: "c", prompt: "Reliability vs validity?", marks: 2 },
            { label: "d", prompt: "Data presentation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fieldwork",
                statement: "Sampling+methods+quality+presentation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any three methods.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              {
                part: "a",
                reasoning: "Advantages noted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Questionnaire/interview/observation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Strengths/limits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Consistent vs intended.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Charts/graphs/tables.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Appropriate choice.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) sampling (b) methods (c) quality (d) presentation",
          },
        },
        { id: "oleg-u4-fw-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Opportunity sampling is best described as...",
          response: { type: "mcq", choices: [ { id: "a", text: "every nth item" }, { id: "b", text: "random number selection" }, { id: "c", text: "every member equally likely" }, { id: "d", text: "selecting respondents who are easiest to access" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Opportunity sampling", statement: "Convenience sample, often biased." } ], steps: [ { reasoning: "Opportunity sampling chooses accessible respondents.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** selecting respondents who are easiest to access", commonErrors: ["Confusing with random sampling."] } },
        { id: "oleg-u4-fw-q6", difficulty: "core", totalMarks: 2,
          stem: "A researcher wants a 10% sample of 2 500 households. Calculate the sample size.",
          response: { type: "numeric", parts: [ { label: "Sample", answer: 250, unit: "households" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Sample size", statement: "Sample = percentage x population." } ], steps: [ { reasoning: "0.10 x 2 500 = 250 households.", marks: 2, markCode: "AO1" } ], finalAnswer: "250 households", commonErrors: ["Using 10 as size."] } },
        { id: "oleg-u4-fw-q7", difficulty: "core", totalMarks: 1,
          stem: "Systematic sampling involves...",
          response: { type: "mcq", choices: [ { id: "a", text: "random lottery only" }, { id: "b", text: "selecting every nth item from a list" }, { id: "c", text: "choosing the nearest people" }, { id: "d", text: "ignoring order" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Systematic sampling", statement: "Regular interval selection." } ], steps: [ { reasoning: "Systematic sampling uses a fixed interval.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** selecting every nth item from a list", commonErrors: ["Confusing with random."] } },
        { id: "oleg-u4-fw-q8", difficulty: "foundation", totalMarks: 2,
          stem: "Five field measurements are 12, 14, 13, 15 and 11. Calculate the mean.",
          response: { type: "numeric", parts: [ { label: "Mean", answer: 13, unit: "units" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Mean", statement: "Average = sum/count." } ], steps: [ { reasoning: "(12+14+13+15+11)/5 = 65/5 = 13.", marks: 2, markCode: "AO1" } ], finalAnswer: "13 units", commonErrors: ["Arithmetic slip."] } },
        { id: "oleg-u4-fw-q9", difficulty: "core", totalMarks: 4,
          stem: "Compare random and stratified sampling for a fieldwork investigation.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "comparison", name: "Sampling methods", statement: "Random reduces bias; stratified ensures subgroup representation." } ], steps: [ { reasoning: "Define random sampling as equal chance for all.", marks: 1, markCode: "AO1" }, { reasoning: "Define stratified as sampling subgroups proportionally.", marks: 1, markCode: "AO1" }, { reasoning: "Compare bias and representation.", marks: 1, markCode: "AO2" }, { reasoning: "Recommend when each is useful.", marks: 1, markCode: "AO3" } ], finalAnswer: "Random gives equal chance but may miss groups; stratified ensures each subgroup is represented proportionally.", commonErrors: ["Treating them as identical."] } },
        { id: "oleg-u4-fw-q10", difficulty: "core", totalMarks: 1,
          stem: "A scatter graph is most appropriate for showing...",
          response: { type: "mcq", choices: [ { id: "a", text: "alphabetical order" }, { id: "b", text: "time zones" }, { id: "c", text: "relationship between two variables" }, { id: "d", text: "only totals" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Scatter graph", statement: "Shows correlation between variables." } ], steps: [ { reasoning: "Scatter graphs show relationships between variables.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** relationship between two variables", commonErrors: ["Confusing with bar chart."] } },
        { id: "oleg-u4-fw-q11", difficulty: "core", totalMarks: 2,
          stem: "A questionnaire is given to 400 people and 320 respond. Calculate the response rate percentage.",
          response: { type: "numeric", parts: [ { label: "Response rate", answer: 80, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Response rate", statement: "Responses/issued x 100." } ], steps: [ { reasoning: "320 / 400 x 100 = 80%.", marks: 2, markCode: "AO1" } ], finalAnswer: "80 %", commonErrors: ["Dividing by wrong total."] } },
        { id: "oleg-u4-fw-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Interviewer bias in fieldwork can be reduced by...",
          response: { type: "mcq", choices: [ { id: "a", text: "leading questions" }, { id: "b", text: "changing questions each time" }, { id: "c", text: "using standardised questions and neutral wording" }, { id: "d", text: "only interviewing friends" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "method", name: "Interview bias", statement: "Standardisation improves reliability." } ], steps: [ { reasoning: "Standardised neutral questions reduce bias.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** using standardised questions and neutral wording", commonErrors: ["Increasing subjectivity."] } },
        { id: "oleg-u4-fw-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate questionnaires and structured interviews as primary data collection methods.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "comparison", name: "Data collection", statement: "Questionnaires vs interviews trade breadth for depth." } ], steps: [ { reasoning: "State strength/limit of questionnaires: many respondents, standardised but shallow.", marks: 1, markCode: "AO1" }, { reasoning: "State strength/limit of interviews: detailed but time-consuming/bias.", marks: 1, markCode: "AO1" }, { reasoning: "Suggest when each is suitable.", marks: 1, markCode: "AO2" }, { reasoning: "Reach a judgement.", marks: 1, markCode: "AO3" } ], finalAnswer: "Questionnaires reach many quickly but lack depth; interviews give detail but take time and risk bias.", commonErrors: ["Describing only one method."] } },
        { id: "oleg-u4-fw-q14", difficulty: "core", totalMarks: 1,
          stem: "Reliability in fieldwork refers to...",
          response: { type: "mcq", choices: [ { id: "a", text: "largest sample possible" }, { id: "b", text: "consistency of repeated results" }, { id: "c", text: "measuring the intended thing" }, { id: "d", text: "colour of charts" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Reliability", statement: "Consistency/repeatability." } ], steps: [ { reasoning: "Reliable data gives consistent repeats.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** consistency of repeated results", commonErrors: ["Confusing with validity."] } },
        { id: "oleg-u4-fw-q15", difficulty: "foundation", totalMarks: 2,
          stem: "A land-use survey samples every 5th building along a street. If there are 350 buildings, calculate how many are sampled.",
          response: { type: "numeric", parts: [ { label: "Sampled", answer: 70, unit: "buildings" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Systematic sample", statement: "Total divided by interval." } ], steps: [ { reasoning: "350 / 5 = 70 buildings.", marks: 2, markCode: "AO1" } ], finalAnswer: "70 buildings", commonErrors: ["Multiplying by 5."] } },
        { id: "oleg-u4-fw-q16", difficulty: "core", totalMarks: 1,
          stem: "Validity means data...",
          response: { type: "mcq", choices: [ { id: "a", text: "is always consistent" }, { id: "b", text: "measures what it was intended to measure" }, { id: "c", text: "is collected quickly" }, { id: "d", text: "uses big samples" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Validity", statement: "Measures the intended quantity." } ], steps: [ { reasoning: "Valid data measures the target accurately.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** measures what it was intended to measure", commonErrors: ["Confusing with reliability."] } },
      ],
    },
    {
      id: "oleg-u4-skills",
      title: "Geographical Skills",
      skill: "Describe map skills and graphical skills needed for Paper 2.",
      lesson: {
        sections: [
          {
            heading: "Map skills",
            body: "Grid references (4-figure, 6-figure), scale (ratio and linear), direction (compass points, bearings), symbols and legends, contour interpretation (height, gradient, landforms), map evidence questions.",
          },
          {
            heading: "Graphical skills",
            body: "Reading and drawing graphs — line graphs (change over time), bar charts (comparisons), scatter graphs (correlations), pie charts (proportions), choropleth maps (shading by value). Describe trends, calculate rates of change, compare data.",
          },
          {
            heading: "Exam technique",
            body: "Use command words precisely: describe = what you see; explain = why/how; evaluate = weigh evidence and judge. Support answers with map/graph evidence. Manage time — allocate marks to minutes.",
          },
        ],
        keyFormulas: [
          {
            name: "Geo skills",
            statement:
              "Maps: grid ref/scale/contours; Graphs: trends/correlations; command words.",
          },
        ],
        workedExample: {
          problem: "How do you read a 4-figure grid reference?",
          solution:
            "First number = eastings (along bottom), second = northings (up side); read to 1 km precision.",
        },
      },
      questions: [
        {
          id: "oleg-u4-gs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a 4-figure grid reference give?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance travelled" },
              { id: "b", text: "Location to 1 km precision" },
              { id: "c", text: "Elevation" },
              { id: "d", text: "Exact address" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Grid reference",
                statement: "4-figure = 1 km.",
              },
            ],
            steps: [
              {
                reasoning: "4-figure = km precision.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Location to 1 km precision",
            commonErrors: ["Thinking it's exact."],
          },
        },
        {
          id: "oleg-u4-gs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do contour lines show on a map?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contours",
                statement: "Lines of equal height.",
              },
            ],
            steps: [
              { reasoning: "Equal height lines.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Close=steep, far=gentle.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Lines of equal height — spacing shows gradient and landform shape.",
            commonErrors: ["Thinking they're roads."],
          },
        },
        {
          id: "oleg-u4-gs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish 'describe' and 'explain' command words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Command words",
                statement: "What vs why.",
              },
            ],
            steps: [
              {
                reasoning: "Describe = what you see.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Explain = why/how.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Different answer types.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Describe states observations; explain gives reasons/mechanisms.",
            commonErrors: ["Using interchangeably."],
          },
        },
        {
          id: "oleg-u4-gs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Geographical skills.",
          parts: [
            { label: "a", prompt: "Grid references?", marks: 2 },
            { label: "b", prompt: "Contour interpretation?", marks: 2 },
            { label: "c", prompt: "Two graph types?", marks: 2 },
            { label: "d", prompt: "Command words?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Skills",
                statement: "Maps+graphs+command words.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Eastings/northings.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "4 vs 6 figure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Equal height lines.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Gradient from spacing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two graph types.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct uses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Describe/explain/evaluate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Correct meanings.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Applied in answers.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) grid refs (b) contours (c) graphs (d) command words",
          },
        },
        { id: "oleg-u4-gs-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A 6-figure grid reference gives location to...",
          response: { type: "mcq", choices: [ { id: "a", text: "100 m precision" }, { id: "b", text: "exact address" }, { id: "c", text: "1 km precision" }, { id: "d", text: "elevation only" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "definition", name: "Grid references", statement: "4-figure = 1 km; 6-figure = 100 m." } ], steps: [ { reasoning: "6-figure references give 100 m precision.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** 100 m precision", commonErrors: ["Confusing 4- and 6-figure references."] } },
        { id: "oleg-u4-gs-q6", difficulty: "core", totalMarks: 2,
          stem: "On a map, a feature is 4 cm from a reference point. The scale is 1:25 000. Calculate the real distance in metres.",
          response: { type: "numeric", parts: [ { label: "Distance", answer: 1000, unit: "m" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Map scale", statement: "Map distance x denominator = real distance." } ], steps: [ { reasoning: "4 x 25 000 = 100 000 cm = 1 000 m.", marks: 2, markCode: "AO1" } ], finalAnswer: "1000 m", commonErrors: ["Unit conversion errors."] } },
        { id: "oleg-u4-gs-q7", difficulty: "core", totalMarks: 1,
          stem: "Contour lines that are close together indicate...",
          response: { type: "mcq", choices: [ { id: "a", text: "water" }, { id: "b", text: "steep slope" }, { id: "c", text: "gentle slope" }, { id: "d", text: "flat land" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "property", name: "Contours", statement: "Close contours = steep gradient." } ], steps: [ { reasoning: "Close contours indicate steep ground.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** steep slope", commonErrors: ["Reversing contour spacing."] } },
        { id: "oleg-u4-gs-q8", difficulty: "foundation", totalMarks: 2,
          stem: "Two contour lines are labelled 100 m and 140 m. Calculate the contour interval.",
          response: { type: "numeric", parts: [ { label: "Interval", answer: 40, unit: "m" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Contour interval", statement: "Difference between adjacent contours." } ], steps: [ { reasoning: "140 - 100 = 40 m.", marks: 2, markCode: "AO1" } ], finalAnswer: "40 m", commonErrors: ["Adding instead of subtracting."] } },
        { id: "oleg-u4-gs-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain how to give a 4-figure grid reference for a location on a map.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "skill", name: "Grid reference", statement: "Eastings then northings to 1 km." } ], steps: [ { reasoning: "Read eastings along the bottom first.", marks: 1, markCode: "AO1" }, { reasoning: "Then read northings up the side.", marks: 1, markCode: "AO1" }, { reasoning: "Combine as four digits, e.g. 1234.", marks: 1, markCode: "AO2" }, { reasoning: "State precision is 1 km.", marks: 1, markCode: "AO3" } ], finalAnswer: "Read eastings then northings and combine to four digits; precision is 1 km.", commonErrors: ["Reversing easting/northing order."] } },
        { id: "oleg-u4-gs-q10", difficulty: "core", totalMarks: 1,
          stem: "A line graph is best used to show...",
          response: { type: "mcq", choices: [ { id: "a", text: "proportions of a whole" }, { id: "b", text: "exact addresses" }, { id: "c", text: "change over time" }, { id: "d", text: "only categories" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Graph types", statement: "Line graphs show trends over time." } ], steps: [ { reasoning: "Line graphs show change over time.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** change over time", commonErrors: ["Confusing with pie chart."] } },
        { id: "oleg-u4-gs-q11", difficulty: "core", totalMarks: 2,
          stem: "A graph shows population rising from 1 million in 2000 to 1.5 million in 2020. Calculate the rate of change per year in thousands.",
          response: { type: "numeric", parts: [ { label: "Rate", answer: 25, unit: "thousand/year" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Rate of change", statement: "Change/time, then convert units." } ], steps: [ { reasoning: "0.5 million / 20 years = 25 000/year = 25 thousand/year.", marks: 2, markCode: "AO1" } ], finalAnswer: "25 thousand/year", commonErrors: ["Forgetting unit conversion."] } },
        { id: "oleg-u4-gs-q12", difficulty: "challenge", totalMarks: 1,
          stem: "The command word 'evaluate' requires students to...",
          response: { type: "mcq", choices: [ { id: "a", text: "only describe" }, { id: "b", text: "weigh evidence and reach a judgement" }, { id: "c", text: "list facts" }, { id: "d", text: "define terms" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "skill", name: "Command words", statement: "Evaluate = assess and judge." } ], steps: [ { reasoning: "Evaluate requires judgement, not just description.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** weigh evidence and reach a judgement", commonErrors: ["Confusing with describe."] } },
        { id: "oleg-u4-gs-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe how to interpret contour patterns to identify a steep valley.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "skill", name: "Contour interpretation", statement: "Spacing and shape reveal landform." } ], steps: [ { reasoning: "State contours are lines of equal height.", marks: 1, markCode: "AO1" }, { reasoning: "Explain close contours = steep gradient.", marks: 1, markCode: "AO1" }, { reasoning: "Describe V-shaped contours pointing uphill for a valley.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude with landform name.", marks: 1, markCode: "AO3" } ], finalAnswer: "Close V-shaped contours pointing uphill indicate a steep-sided valley.", commonErrors: ["Ignoring contour shape."] } },
        { id: "oleg-u4-gs-q14", difficulty: "core", totalMarks: 1,
          stem: "A bar chart is most suitable for...",
          response: { type: "mcq", choices: [ { id: "a", text: "correlations" }, { id: "b", text: "showing continuous change" }, { id: "c", text: "comparing categories" }, { id: "d", text: "proportions only" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Bar chart", statement: "Compares discrete categories." } ], steps: [ { reasoning: "Bar charts compare categories.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** comparing categories", commonErrors: ["Confusing with line graph."] } },
        { id: "oleg-u4-gs-q15", difficulty: "foundation", totalMarks: 2,
          stem: "A map distance of 5 cm represents 2 km. Calculate the scale denominator.",
          response: { type: "numeric", parts: [ { label: "Scale", answer: 40000 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Scale", statement: "Real distance / map distance." } ], steps: [ { reasoning: "2 km = 200 000 cm; 200 000 / 5 = 40 000.", marks: 2, markCode: "AO1" } ], finalAnswer: "40000", commonErrors: ["Forgetting unit conversion."] } },
        { id: "oleg-u4-gs-q16", difficulty: "core", totalMarks: 1,
          stem: "'Describe' a graph trend means...",
          response: { type: "mcq", choices: [ { id: "a", text: "give causes" }, { id: "b", text: "state what the data shows without necessarily explaining why" }, { id: "c", text: "judge quality" }, { id: "d", text: "calculate only" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "skill", name: "Command words", statement: "Describe = state observations." } ], steps: [ { reasoning: "Describe states what is shown.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** state what the data shows without necessarily explaining why", commonErrors: ["Adding explanation unnecessarily."] } },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u4-4-3-notes",
      title: "Investigations and skills — notes",
      summary:
        "Fieldwork methods, sampling, data quality, map and graph skills.",
      sections: [
        {
          heading: "Fieldwork",
          body: "Sampling: random/systematic/stratified/opportunity. Questionnaires/interviews/measurements. Reliability vs validity.",
        },
        {
          heading: "Skills",
          body: "Grid refs, scale, contours; line/bar/scatter/pie charts; command words describe/explain/evaluate.",
        },
      ],
    },
  ],
};
