import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edps2-u4-lesson-4-3",
  code: "4-3",
  title: "Conclusions and Communication",
  goal: "I CAN draw conclusions and communicate scientific findings.",
  standards: ["Working Scientifically"],
  vocabulary: [
    {
      term: "Conclusion",
      definition: "The answer you found from your investigation.",
    },
    {
      term: "Evidence",
      definition: "Your results that support the conclusion.",
    },
    { term: "Display", definition: "A chart or graph showing results." },
    { term: "Peer review", definition: "Others checking your work." },
  ],
  concepts: [
    {
      id: "edps2-u4-conclusion",
      title: "Drawing conclusions",
      skill: "Write conclusions that answer the question using evidence.",
      lesson: {
        sections: [
          {
            heading: "Writing conclusions",
            body: "A good conclusion: (1) Answers the question directly, (2) Cites evidence from results, (3) Links back to prediction, (4) Notes limitations. 'The cotton towel absorbed most water (50ml vs 30ml, 20ml), so it is the best absorber. My prediction was correct.'",
          },
          {
            heading: "Using evidence",
            body: "Always back conclusions with data: 'As shown in the results, steeper ramps produced faster cars.' Don't just state opinions — show where the evidence is. If results are mixed, say so honestly.",
          },
        ],
        keyFormulas: [
          {
            name: "Conclusion",
            statement: "Answer + evidence + prediction + limitations",
          },
        ],
        workedExample: {
          problem:
            "Write a conclusion: 'Which insulator kept ice longest?' Plastic won at 45min, foil 30min, cloth 15min.",
          solution:
            "Plastic was the best insulator — it kept ice frozen longest (45 min vs 30, 15).",
        },
      },
      questions: [
        {
          id: "edps2-u4-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a conclusion do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat the question" },
              { id: "b", text: "Answer the question with evidence" },
              { id: "c", text: "Tell a story" },
              { id: "d", text: "List equipment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion",
                statement: "Answer + evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Conclusion answers using results.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Answer with evidence",
            commonErrors: ["No evidence."],
          },
        },
        {
          id: "edps2-u4-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'evidence' in an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your opinion" },
              { id: "b", text: "Your results/data" },
              { id: "c", text: "The question" },
              { id: "d", text: "The equipment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence",
                statement: "Data/results.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence = measured results.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Results/data",
            commonErrors: ["Opinion not evidence."],
          },
        },
        {
          id: "edps2-u4-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a conclusion for: 'Does exercise affect heart rate?' Results: resting 70, walking 90, running 120.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion",
                statement: "Answer + data.",
              },
            ],
            steps: [
              {
                reasoning: "States exercise increases heart rate.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Cites specific numbers.", marks: 1, markCode: "M" },
              { reasoning: "Clear conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exercise increases heart rate (70→90→120)",
            commonErrors: ["No data."],
          },
        },
        {
          id: "edps2-u4-co-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might two scientists get different results for the same investigation? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliability",
                statement: "Variables differ.",
              },
            ],
            steps: [
              {
                reasoning: "Different controlled variables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different measurement tools or methods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains why repeats/checking matter.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Different variables/methods",
            commonErrors: ["One reason only."],
          },
        },
      ],
    },
    {
      id: "edps2-u4-communicate",
      title: "Communicating Science",
      skill: "Present findings clearly using displays and explanations.",
      lesson: {
        sections: [
          {
            heading: "Presenting results",
            body: "Choose the right display: tables for exact numbers, bar charts for comparisons, line graphs for changes over time. Label axes, title, and units. A good display lets someone understand results without reading the whole report.",
          },
          {
            heading: "Explaining findings",
            body: "Explain in simple terms: what you did, what you found, what it means. Use 'because' to link cause and effect. A good explanation helps others understand and trust your science — clarity is as important as accuracy.",
          },
        ],
        keyFormulas: [
          {
            name: "Communication",
            statement: "Right display + clear explanation",
          },
        ],
        workedExample: {
          problem:
            "Which display for 'temperature vs ice melting time' over 5 trials?",
          solution: "Line graph or table — shows relationship over trials.",
        },
      },
      questions: [
        {
          id: "edps2-u4-cm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should you use a bar chart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show changes over time" },
              { id: "b", text: "To compare amounts between categories" },
              { id: "c", text: "To show exact numbers only" },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data display",
                statement: "Bar = comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Bar charts compare categories.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Compare categories",
            commonErrors: ["Wrong display."],
          },
        },
        {
          id: "edps2-u4-cm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you always label on a graph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the title" },
              { id: "b", text: "Axes, title and units" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Just colours" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Graph labelling",
                statement: "Axes + title + units.",
              },
            ],
            steps: [
              {
                reasoning: "Labels make graphs understandable.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Axes, title, units",
            commonErrors: ["Incomplete labels."],
          },
        },
        {
          id: "edps2-u4-cm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain your results in one sentence: 'Which paper towel absorbs most?' Cotton won with 50ml.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Explanation",
                statement: "Clear + evidence.",
              },
            ],
            steps: [
              {
                reasoning: "States finding: cotton absorbs most.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Cites evidence: 50ml.", marks: 1, markCode: "M" },
              {
                reasoning: "Clear, complete sentence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cotton absorbs most (50ml)",
            commonErrors: ["No evidence."],
          },
        },
        {
          id: "edps2-u4-cm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it important that other scientists can understand and repeat your investigation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Science communication",
                statement: "Verification + building knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Others can check if results are correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds on each other's work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear methods enable verification.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Verification + knowledge building",
            commonErrors: ["One reason only."],
          },
        },
      ],
    },
  ],
};
