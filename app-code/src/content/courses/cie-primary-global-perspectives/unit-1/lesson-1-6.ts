import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "cipg-u1-lesson-1-6",
  code: "1-6",
  title: "Stage 2 — Sorting and Classifying Information",
  goal: "I CAN sort information into groups and explain the rules I use.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 2: analysis", "Cambridge Primary Global Perspectives 0838 strand: Analysis"],
  stage: 2,
  vocabulary: [
    { term: "Sort", definition: "To arrange things into groups." },
    { term: "Classify", definition: "To put things into categories by shared features." },
    { term: "Category", definition: "A group with a shared feature." },
    { term: "Rule", definition: "The criterion used for sorting." },
    { term: "Group", definition: "A set of items together." },
    { term: "Criterion", definition: "The feature used to decide grouping." },
  ],
  concepts: [
    {
      id: "cipg-u1-s2-sort",
      title: "Sorting and classifying",
      skill: "Group information by rules and explain the criteria at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Sorting information",
            body: "Sorting means grouping things by a rule — colour, size, type, where they live. Classifying means deciding which group each item belongs to based on shared features.",
          },
          {
            heading: "Choosing rules",
            body: "Different rules give different groups: animals can be sorted by 'has fur/has scales' or by 'lives on land/water'. The rule you choose depends on what you want to find out.",
          },
        ],
        keyFormulas: [
          { name: "Sort/classify", statement: "group by a rule or shared feature" },
          { name: "Criterion", statement: "the feature used for grouping" },
        ],
        workedExample: {
          problem: "Sort these into groups: rose, oak tree, daisy, pine tree. What rule did you use?",
          solution: "Flowers (rose, daisy) vs trees (oak, pine). Rule: what part of the plant / what it is used for.",
        },
      },
      questions: [
        {
          id: "cipg-u1-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is classifying?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grouping things by shared features"
                    },
                    {
                              "id": "b",
                              "text": "Throwing things away"
                    },
                    {
                              "id": "c",
                              "text": "Mixing everything together"
                    },
                    {
                              "id": "d",
                              "text": "Counting objects"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Classify",
                              "statement": "Group by features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifying = grouping by shared characteristics.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Group by shared features"
},
        },
        {
          id: "cipg-u1-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sort these by one rule: cat, dog, parrot, goldfish, hamster.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sorting",
                              "statement": "Clear grouping rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valid grouping e.g. pets vs wild? All pets... use habitat: land (cat,dog,hamster), flying (parrot), water (goldfish).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rule stated clearly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. by habitat"
},
        },
        {
          id: "cipg-u1-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The same toys can be sorted two different ways. Give two different sorting rules for: ball, doll, car, teddy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiple criteria",
                              "statement": "Different rules → different groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rule 1: e.g. soft (doll, teddy) vs hard (ball, car).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rule 2: e.g. people-shaped (doll, teddy) vs vehicles/objects (ball, car).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains rule determines groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Two valid different rules"
},
        },
        {
          id: "cipg-u1-st-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sort, classify, category, criterion. (b) Sort books by two different rules. (c) Why might the same items group differently? (d) What is a shared feature? (e) Sort 'red, blue, green, yellow' by a rule. (f) How does sorting help research? (g) Design a classification chart for animals. (h) Explain why a clear rule matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Classification",
                              "statement": "Rules, criteria, grouping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All four definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Two valid book sortings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Different criteria → different groups.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Quality both items have.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) e.g. warm colours vs cool.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Organises data for analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid animal classification.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Clear rule = consistent, explainable groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sorting, criteria, multiple rules, classification."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-st-notes",
      title: "Sorting — notes",
      summary: "Classify = group by shared features using a clear rule (criterion). Different rules → different groups.",
      sections: [
        { heading: "Key idea", body: "The rule you choose determines the groups you get." },
        { heading: "Tip", body: "Always state your criterion clearly." },
      ],
    },
  ],
};
