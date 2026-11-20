import type { Lesson } from "../../../types.ts";

export const lesson321: Lesson = {
  id: "cieigeo-u3-lesson-3-1",
  code: "3-1",
  title: "Geographical Skills: Fieldwork and Data Collection",
  goal: "I CAN plan and conduct geographical fieldwork and collect data.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 4: geographical skills"],
  
  vocabulary: [
    { term: "Fieldwork", definition: "Data collection in the field." },
    { term: "Primary data", definition: "Data collected directly by researcher." },
    { term: "Secondary data", definition: "Data from existing sources." },
    { term: "Sampling", definition: "Selecting representative subset of population." },
    { term: "Questionnaire", definition: "Structured set of questions for data collection." },
    { term: "Observation", definition: "Systematic watching and recording." },
  ],
  concepts: [
    {
      id: "cieigeo-u3-s1-field",
      title: "Fieldwork",
      skill: "Plan and conduct geographical fieldwork.",
      lesson: {
        sections: [
          {
            heading: "Fieldwork methods",
            body: "Primary: questionnaires, interviews, observations, measurements, photography. Secondary: maps, satellite images, census data, reports. Choose method based on research question.",
          },
          {
            heading: "Sampling",
            body: "Random: every member has equal chance. Systematic: every nth item. Stratified: proportional to groups. Opportunity: whoever is available. Sample size affects reliability.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "collected directly" },
          { name: "Secondary", statement: "existing sources" },
          { name: "Sampling", statement: "representative subset" },
        ],
        workedExample: {
          problem: "You want to study pedestrian flows in a city centre. What fieldwork method?",
          solution: "Observation/counting at different times + questionnaire for pedestrian opinions.",
        },
      },
      questions: [
        {
          id: "cieigeo-u3-fw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is fieldwork?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Data collection in the field"
                    },
                    {
                              "id": "b",
                              "text": "Desk research"
                    },
                    {
                              "id": "c",
                              "text": "A type of map"
                    },
                    {
                              "id": "d",
                              "text": "A weather pattern"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fieldwork",
                              "statement": "Field data collection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fieldwork = collecting data in field.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Field data collection"
},
        },
        {
          id: "cieigeo-u3-fw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between primary and secondary data?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary vs secondary",
                              "statement": "New vs existing data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary = collected directly by researcher.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Secondary = from existing sources.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "New vs existing data"
},
        },
        {
          id: "cieigeo-u3-fw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is random sampling?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Random sampling",
                              "statement": "Equal chance selection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Every member has equal chance of selection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduces bias.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Most representative method.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Equal chance selection"
},
        },
        {
          id: "cieigeo-u3-fw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define fieldwork, primary data, secondary data, sampling, questionnaire, observation. (b) What is fieldwork? (c) What is primary data? (d) What is secondary data? (e) What is random sampling? (f) What are fieldwork methods? (g) How do you choose a sampling method? (h) Design a fieldwork plan to study local river pollution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Fieldwork",
                              "statement": "Methods, sampling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Field data collection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Directly collected data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Existing data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Equal chance selection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Questionnaires, interviews, observations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Based on research question/population.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid fieldwork plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Fieldwork planning and methods."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-fw-notes",
      title: "Fieldwork — notes",
      summary: "Primary=collected directly; secondary=existing. Sampling=random/systematic/stratified. Methods: questionnaires, observations.",
      sections: [
        { heading: "Key idea", body: "Good fieldwork requires careful planning, appropriate methods, representative sampling." },
        { heading: "Sampling", body: "Random=simplest; stratified=most representative for groups." },
      ],
    },
  ],
};
