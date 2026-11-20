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
              { id: "b", text: "Picking the easiest respondents" },
              { id: "c", text: "Taking every 10th item" },
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
              { id: "a", text: "Location to 1 km precision" },
              { id: "b", text: "Exact address" },
              { id: "c", text: "Elevation" },
              { id: "d", text: "Distance travelled" },
            ],
            correctChoiceId: "a",
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
