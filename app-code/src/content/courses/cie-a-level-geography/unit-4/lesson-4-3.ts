import type { Lesson } from "../../../types.ts";

export const lesson543: Lesson = {
  id: "ciealgeo-u4-lesson-4-3",
  code: "4-3",
  title: "Geographical Enquiry and Essay Skills",
  goal: "I CAN structure geographical enquiries and write extended responses.",
  standards: ["Cambridge A Level Geography 9696", "Paper 3: enquiry"],

  vocabulary: [
    {
      term: "Geographical enquiry",
      definition: "Investigation of geographical question.",
    },
    { term: "Hypothesis", definition: "Testable prediction." },
    { term: "Case study", definition: "Detailed examination of example." },
    { term: "Synthesis", definition: "Combining multiple perspectives." },
    { term: "Evaluation", definition: "Judging quality of analysis." },
    { term: "Significance", definition: "Historical/geographical importance." },
  ],
  concepts: [
    {
      id: "ciealgeo-u4-s3-enq",
      title: "Geographical enquiry",
      skill: "Conduct enquiries and write essays.",
      lesson: {
        sections: [
          {
            heading: "Enquiry process",
            body: "Question → hypothesis → data collection → analysis → conclusion → evaluation. Geographic questions often spatial: 'How does X vary with Y?'",
          },
          {
            heading: "Essay structure",
            body: "Introduction: context + argument. Body: points with evidence. Conclusion: answer question. PEEL: Point, Evidence, Explanation, Link.",
          },
        ],
        keyFormulas: [
          { name: "Enquiry", statement: "question→data→conclusion" },
          { name: "PEEL", statement: "essay structure" },
        ],
        workedExample: {
          problem:
            "Write enquiry plan for 'How does house price vary with distance from city centre?'",
          solution:
            "Hypothesis: prices decrease with distance. Data: house prices at locations + distances. Analysis: scatter graph, correlation. Conclusion: relationship strength/direction.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u4-enq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a geographical enquiry?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A statistical test",
              },
              {
                id: "b",
                text: "A type of map",
              },
              {
                id: "c",
                text: "Investigation of geographical question",
              },
              {
                id: "d",
                text: "A data table",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enquiry",
                statement: "Investigation.",
              },
            ],
            steps: [
              {
                reasoning: "Enquiry = geographical investigation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Geographical investigation",
          },
        },
        {
          id: "ciealgeo-u4-enq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is PEEL structure?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PEEL",
                statement: "Essay structure.",
              },
            ],
            steps: [
              {
                reasoning: "Point, Evidence, Explanation, Link.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Used for essay paragraphs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Point, Evidence, Explanation, Link",
          },
        },
        {
          id: "ciealgeo-u4-enq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you structure a geographical enquiry?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Enquiry",
                statement: "Process.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Question → hypothesis → data → analysis → conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Geographic questions often spatial.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluation essential.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Question→data→conclusion",
          },
        },
        {
          id: "ciealgeo-u4-enq-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define enquiry, hypothesis, case study, synthesis, evaluation, significance. (b) What is enquiry? (c) What is hypothesis? (d) What is PEEL? (e) How structure enquiry? (f) What is case study? (g) What is synthesis? (h) Write enquiry plan for 'How does house price vary with distance from centre?'",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Enquiry",
                statement: "Skills.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Investigation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Testable prediction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) PEEL structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Question→data→conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Detailed example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Combining perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid enquiry plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Geographical enquiry skills.",
          },
        },
        {
          id: "ciealgeo-u4-enq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A strong geographical enquiry question should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Already answered by opinion" },
              { id: "b", text: "Completely unrelated to place" },
              { id: "c", text: "Impossible to measure" },
              { id: "d", text: "Specific, spatial and capable of being investigated" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Enquiry questions", statement: "Good questions are focused, spatial and investigable." },
            ],
            steps: [{ reasoning: "A clear geographical question can be tested with data.", marks: 1, markCode: "M" }],
            finalAnswer: "Specific, spatial and investigable.",
          },
        },
        {
          id: "ciealgeo-u4-enq-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Outline the main stages of a geographical enquiry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Enquiry process", statement: "Question, hypothesis, data collection, analysis, conclusion and evaluation." },
            ],
            steps: [
              { reasoning: "Define the question and testable hypothesis.", marks: 1, markCode: "M" },
              { reasoning: "Collect and analyse appropriate data.", marks: 1, markCode: "M" },
              { reasoning: "Draw conclusions and evaluate reliability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Question → hypothesis → data → analysis → conclusion → evaluation.",
            commonErrors: ["Skipping hypothesis or evaluation."],
          },
        },
        {
          id: "ciealgeo-u4-enq-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A hypothesis is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A random opinion" },
              { id: "b", text: "A type of map symbol" },
              { id: "c", text: "A testable prediction about a geographical relationship" },
              { id: "d", text: "The final conclusion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hypothesis", statement: "A testable prediction." },
            ],
            steps: [{ reasoning: "A hypothesis states an expected relationship that data can test.", marks: 1, markCode: "M" }],
            finalAnswer: "A testable prediction.",
          },
        },
        {
          id: "ciealgeo-u4-enq-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why primary data are often important in geographical enquiry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Primary data", statement: "Field-collected data can directly answer a local geographical question." },
            ],
            steps: [
              { reasoning: "Primary data are collected specifically for the enquiry.", marks: 1, markCode: "M" },
              { reasoning: "They can be tailored to the exact variables and location.", marks: 1, markCode: "M" },
              { reasoning: "They may be costly or time-consuming to collect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary data are specific and relevant but may be costly to collect.",
            commonErrors: ["Confusing primary with secondary data."],
          },
        },
        {
          id: "ciealgeo-u4-enq-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of secondary data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Census statistics" },
              { id: "b", text: "Your own questionnaire results" },
              { id: "c", text: "Your own photographs" },
              { id: "d", text: "Field measurements you recorded" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Secondary data", statement: "Data collected by someone else for another purpose." },
            ],
            steps: [{ reasoning: "Census statistics already exist and were not collected for this enquiry.", marks: 1, markCode: "M" }],
            finalAnswer: "Census statistics.",
          },
        },
        {
          id: "ciealgeo-u4-enq-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A survey aims to sample 250 households from a town of 5,000 households. (a) What percentage of households is sampled? (b) How many households are not sampled?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "%" },
              { label: "b", answer: 4750, unit: "households" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sampling", statement: "Sample percentage = sample / population x 100; unsampled = population - sample." },
            ],
            steps: [
              { part: "a", reasoning: "250 / 5000 x 100 = 5%.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "5000 - 250 = 4750 households.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 5%; b) 4750",
            commonErrors: ["Using sample size as population."],
          },
        },
        {
          id: "ciealgeo-u4-enq-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Design an enquiry plan for 'How does street tree cover vary with distance from the city centre?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Field enquiry", statement: "Plan variables, sampling, data collection, analysis and evaluation." },
            ],
            steps: [
              { reasoning: "Hypothesis: tree cover decreases with distance or shows another pattern.", marks: 1, markCode: "M" },
              { reasoning: "Sample transects or quadrats at measured distances from the centre.", marks: 1, markCode: "M" },
              { reasoning: "Record tree cover using a consistent method such as percentage canopy cover.", marks: 1, markCode: "M" },
              { reasoning: "Plot tree cover against distance and calculate correlation.", marks: 1, markCode: "A" },
              { reasoning: "Evaluate sampling, timing and possible confounding factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A valid plan includes hypothesis, transect sampling, consistent measurement, graphing and evaluation.",
            commonErrors: ["No operational variables or evaluation."],
          },
        },
        {
          id: "ciealgeo-u4-enq-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A case study is useful in geography because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Requires no context" },
              { id: "b", text: "Replaces all statistical analysis" },
              { id: "c", text: "Provides detailed evidence from a real example" },
              { id: "d", text: "Proves every generalisation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Case study", statement: "Detailed examination of a real example." },
            ],
            steps: [{ reasoning: "Case studies give depth and context to geographical processes.", marks: 1, markCode: "M" }],
            finalAnswer: "It provides detailed real-world evidence.",
          },
        },
        {
          id: "ciealgeo-u4-enq-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a 1:50,000 map, what ground distance is represented by 4 cm?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2000, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Map scale", statement: "Ground distance = map distance x scale denominator." },
            ],
            steps: [
              { part: "a", reasoning: "4 cm = 0.04 m; 0.04 x 50000 = 2000 m.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "2000 m",
            commonErrors: ["Leaving answer in centimetres."],
          },
        },
        {
          id: "ciealgeo-u4-enq-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In PEEL, the 'Link' is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat the evidence" },
              { id: "b", text: "Connect the point back to the question" },
              { id: "c", text: "End without explanation" },
              { id: "d", text: "Introduce irrelevant information" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "PEEL", statement: "Point, Evidence, Explanation, Link." },
            ],
            steps: [{ reasoning: "The link relates the explanation to the argument or question.", marks: 1, markCode: "M" }],
            finalAnswer: "Connect to the question.",
          },
        },
        {
          id: "ciealgeo-u4-enq-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fieldworker records pedestrian counts at 6 sites: 20, 35, 50, 65, 80 and 95. (a) What is the range of counts? (b) What is the mean count?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75, unit: "pedestrians" },
              { label: "b", answer: 57.5, unit: "pedestrians" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Field statistics", statement: "Range = maximum - minimum; mean = sum / number." },
            ],
            steps: [
              { part: "a", reasoning: "95 - 20 = 75 pedestrians.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "(20+35+50+65+80+95) / 6 = 345 / 6 = 57.5.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 75; b) 57.5",
            commonErrors: ["Forgetting to divide by number of sites."],
          },
        },
        {
          id: "ciealgeo-u4-enq-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why evaluation is essential at the end of a geographical enquiry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Evaluation judges reliability, validity and limitations of findings." },
            ],
            steps: [
              { reasoning: "It identifies weaknesses in sampling or measurement.", marks: 1, markCode: "M" },
              { reasoning: "It considers whether data support the conclusion.", marks: 1, markCode: "M" },
              { reasoning: "It suggests improvements for future enquiries.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluation checks reliability and limitations, strengthening confidence in conclusions.",
            commonErrors: ["Evaluation as mere repetition."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u4-enq-notes",
      title: "Enquiry — notes",
      summary:
        "Enquiry=question→hypothesis→data→conclusion. PEEL structure for essays.",
      sections: [
        {
          heading: "Key idea",
          body: "Geographical enquiry tests spatial relationships and patterns.",
        },
        {
          heading: "Essays",
          body: "PEEL structure ensures clear argument with evidence.",
        },
      ],
    },
  ],
};
