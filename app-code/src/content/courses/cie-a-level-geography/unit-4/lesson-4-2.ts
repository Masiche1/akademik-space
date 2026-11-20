import type { Lesson } from "../../../types.ts";

export const lesson542: Lesson = {
  id: "ciealgeo-u4-lesson-4-2",
  code: "4-2",
  title: "Fieldwork Skills and Data Analysis",
  goal: "I CAN conduct fieldwork and analyse geographical data.",
  standards: ["Cambridge A Level Geography 9696", "Paper 3: fieldwork"],
  
  vocabulary: [
    { term: "Fieldwork", definition: "Data collection outside classroom." },
    { term: "Primary data", definition: "Data collected first-hand." },
    { term: "Secondary data", definition: "Data from existing sources." },
    { term: "Sampling", definition: "Selecting subset for study." },
    { term: "Reliability", definition: "Consistency of results." },
    { term: "Validity", definition: "Measuring what intended." },
  ],
  concepts: [
    {
      id: "ciealgeo-u4-s2-field",
      title: "Fieldwork",
      skill: "Conduct and evaluate fieldwork.",
      lesson: {
        sections: [
          {
            heading: "Data types",
            body: "Primary: surveys, observations, measurements. Secondary: census, maps, reports. Triangulation: combining methods for reliability.",
          },
          {
            heading: "Sampling",
            body: "Random: unbiased but may miss areas. Systematic: regular intervals. Stratified: proportional to groups. Opportunity: convenient but biased.",
          },
          {
            heading: "Evaluation",
            body: "Reliability: consistent results. Validity: measuring intended. Ethics: permission, safety, confidentiality.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "first-hand" },
          { name: "Secondary", statement: "existing" },
          { name: "Sampling", statement: "subset selection" },
        ],
        workedExample: {
          problem: "How would you measure pedestrian flows in a city centre?",
          solution: "Primary data: count pedestrians at locations/times. Secondary: transport data. Stratified sampling across areas/times. Ensure reliability with repeat counts.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u4-fld-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is primary data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Data collected first-hand"
                    },
                    {
                              "id": "b",
                              "text": "Data from existing sources"
                    },
                    {
                              "id": "c",
                              "text": "A type of map"
                    },
                    {
                              "id": "d",
                              "text": "A statistical test"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary",
                              "statement": "First-hand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary = collected first-hand.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "First-hand data"
},
        },
        {
          id: "ciealgeo-u4-fld-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between reliability and validity?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reliability vs validity",
                              "statement": "Consistency vs accuracy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reliability: consistent results.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Validity: measuring intended.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Consistency vs accuracy"
},
        },
        {
          id: "ciealgeo-u4-fld-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the main sampling methods?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sampling",
                              "statement": "Methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Random, systematic, stratified, opportunity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each has advantages/disadvantages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Choice affects representativeness.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sampling methods"
},
        },
        {
          id: "ciealgeo-u4-fld-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define fieldwork, primary data, secondary data, sampling, reliability, validity. (b) What is primary data? (c) What is secondary? (d) What is reliability vs validity? (e) What are sampling methods? (f) What is triangulation? (g) What are ethics in fieldwork? (h) Evaluate importance of reliable fieldwork data.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Fieldwork",
                              "statement": "Skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) First-hand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Existing sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Consistency vs accuracy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Random, systematic, stratified.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Combining methods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Permission, safety, confidentiality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Reliable data essential for conclusions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Fieldwork skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u4-fld-notes",
      title: "Fieldwork — notes",
      summary: "Primary=first-hand, secondary=existing. Sampling methods affect representativeness.",
      sections: [
        { heading: "Key idea", body: "Good fieldwork requires reliable, valid, ethical data collection." },
        { heading: "Evaluation", body: "Reliability (consistent) and validity (accurate) both essential." },
      ],
    },
  ],
};
