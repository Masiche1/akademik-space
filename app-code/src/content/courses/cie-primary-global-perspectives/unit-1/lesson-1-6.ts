import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "cipg-u1-lesson-1-6",
  code: "1-6",
  title: "Stage 2 — Sorting and Classifying Information",
  goal: "I CAN sort information into groups and explain the rules I use.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 2: analysis",
    "Cambridge Primary Global Perspectives 0838 strand: Analysis",
  ],
  stage: 2,
  vocabulary: [
    { term: "Sort", definition: "To arrange things into groups." },
    {
      term: "Classify",
      definition: "To put things into categories by shared features.",
    },
    { term: "Category", definition: "A group with a shared feature." },
    { term: "Rule", definition: "The criterion used for sorting." },
    { term: "Group", definition: "A set of items together." },
    { term: "Criterion", definition: "The feature used to decide grouping." },
  ],
  concepts: [
    {
      id: "cipg-u1-s2-sort",
      title: "Sorting and classifying",
      skill:
        "Group information by rules and explain the criteria at Stage 2 level.",
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
          {
            name: "Sort/classify",
            statement: "group by a rule or shared feature",
          },
          { name: "Criterion", statement: "the feature used for grouping" },
        ],
        workedExample: {
          problem:
            "Sort these into groups: rose, oak tree, daisy, pine tree. What rule did you use?",
          solution:
            "Flowers (rose, daisy) vs trees (oak, pine). Rule: what part of the plant / what it is used for.",
        },
      },
      questions: [
        {
          id: "cipg-u1-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is classifying?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Grouping things by shared features",
              },
              {
                id: "b",
                text: "Throwing things away",
              },
              {
                id: "c",
                text: "Counting objects",
              },
              {
                id: "d",
                text: "Mixing everything together",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Classify",
                statement: "Group by features.",
              },
            ],
            steps: [
              {
                reasoning: "Classifying = grouping by shared characteristics.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Group by shared features",
          },
        },
        {
          id: "cipg-u1-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sort these by one rule: cat, dog, parrot, goldfish, hamster.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sorting",
                statement: "Clear grouping rule.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Valid grouping e.g. pets vs wild? All pets... use habitat: land (cat,dog,hamster), flying (parrot), water (goldfish).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rule stated clearly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. by habitat",
          },
        },
        {
          id: "cipg-u1-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The same toys can be sorted two different ways. Give two different sorting rules for: ball, doll, car, teddy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple criteria",
                statement: "Different rules → different groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rule 1: e.g. soft (doll, teddy) vs hard (ball, car).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rule 2: e.g. people-shaped (doll, teddy) vs vehicles/objects (ball, car).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains rule determines groups.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two valid different rules",
          },
        },
        {
          id: "cipg-u1-st-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sort, classify, category, criterion. (b) Sort books by two different rules. (c) Why might the same items group differently? (d) What is a shared feature? (e) Sort 'red, blue, green, yellow' by a rule. (f) How does sorting help research? (g) Design a classification chart for animals. (h) Explain why a clear rule matters.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Classification",
                statement: "Rules, criteria, grouping.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All four definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Two valid book sortings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Different criteria → different groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Quality both items have.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) e.g. warm colours vs cool.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Organises data for analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid animal classification.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Clear rule = consistent, explainable groups.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sorting, criteria, multiple rules, classification.",
          },
        },
        {
          id: "cipg-u1-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'criterion'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The name of a group",
              },
              {
                id: "b",
                text: "The feature used to decide grouping",
              },
              {
                id: "c",
                text: "A type of container",
              },
              {
                id: "d",
                text: "A counting tool",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Criterion",
                statement: "Feature used for grouping.",
              },
            ],
            steps: [
              {
                reasoning: "The criterion is the rule or feature you sort by.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Feature used for grouping",
          },
        },
        {
          id: "cipg-u1-st-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A class sorted 12 toys into equal groups of 3. (a) How many groups did they make? (b) If each group then received 2 more toys, how many toys would each group have?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sorting",
                statement: "Grouping into equal sets.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 12 / 3 = 4 groups.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 + 2 = 5 toys per group.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "4 groups; 5 toys each",
          },
        },
        {
          id: "cipg-u1-st-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a sorting rule for animals?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Is big or small in the picture",
              },
              {
                id: "b",
                text: "Was seen at the zoo or not",
              },
              {
                id: "c",
                text: "Has fur or has scales",
              },
              {
                id: "d",
                text: "Is liked or not liked",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sorting rules",
                statement: "Shared features as criteria.",
              },
            ],
            steps: [
              {
                reasoning: "Fur vs scales is a clear shared-feature rule.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fur or scales",
          },
        },
        {
          id: "cipg-u1-st-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A class sorted books by colour: 5 red, 3 blue, 4 green. (a) How many blue books are there? (b) How many books are NOT blue?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
              {
                label: "b",
                answer: 9,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sorting",
                statement: "Counting groups by colour.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 blue books.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 5 + 4 = 9 non-blue books.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "3 blue; 9 not blue",
          },
        },
        {
          id: "cipg-u1-st-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Applying two different sorting rules to the same items can produce...",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Exactly the same groups every time",
              },
              {
                id: "b",
                text: "No groups at all",
              },
              {
                id: "c",
                text: "Different groups",
              },
              {
                id: "d",
                text: "Only one correct group",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiple criteria",
                statement: "Different rules give different groups.",
              },
            ],
            steps: [
              {
                reasoning: "The rule chosen determines the groups formed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Different groups",
          },
        },
        {
          id: "cipg-u1-st-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class sorted 10 fruits: 4 are citrus fruits and 6 are not. (a) How many citrus fruits are there? (b) How many are not citrus? (c) How many fruits in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 6,
              },
              {
                label: "c",
                answer: 10,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Classification",
                statement: "Grouping by shared feature.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 citrus fruits.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 6 non-citrus fruits.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 4 + 6 = 10 total.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "4, 6, 10",
          },
        },
        {
          id: "cipg-u1-st-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair belongs in the same category when sorting animals by 'lives in water'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Fish and dolphin",
              },
              {
                id: "b",
                text: "Horse and cow",
              },
              {
                id: "c",
                text: "Bird and butterfly",
              },
              {
                id: "d",
                text: "Cat and dog",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Classification",
                statement: "Grouping by shared habitat.",
              },
            ],
            steps: [
              {
                reasoning: "Both fish and dolphins live in water.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fish and dolphin",
          },
        },
        {
          id: "cipg-u1-st-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A class sorted 15 items into 3 categories with 6, 5 and 4 items. (a) How many items in total? (b) How many more items are in the largest category than the smallest? (c) What is the average number of items per category?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 15,
              },
              {
                label: "b",
                answer: 2,
              },
              {
                label: "c",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Classification",
                statement: "Counting and comparing groups.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 + 5 + 4 = 15 items.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 6 - 4 = 2 more.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 15 / 3 = 5 per category.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "15, 2, 5",
          },
        },
        {
          id: "cipg-u1-st-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why can the same set of items sometimes form different groups?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Because a different rule or criterion is used",
              },
              {
                id: "b",
                text: "Because items change while sorting",
              },
              {
                id: "c",
                text: "Because only one grouping is ever correct",
              },
              {
                id: "d",
                text: "Because sorting is always random",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiple criteria",
                statement: "Rule determines groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different criteria produce different groupings of the same items.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Different rule gives different groups",
          },
        },
        {
          id: "cipg-u1-st-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sort 12 shapes by two rules. By shape: 7 are round and 5 are not. By colour: 6 are red and 6 are blue. (a) How many shapes are round? (b) How many are not round? (c) How many are red? (d) How many are blue?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 7,
              },
              {
                label: "b",
                answer: 5,
              },
              {
                label: "c",
                answer: 6,
              },
              {
                label: "d",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple criteria",
                statement: "Same items, different rules.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 7 round shapes.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 5 not round.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 6 red shapes.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 6 blue shapes.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "7, 5, 6, 6",
          },
        },
        {
          id: "cipg-u1-st-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does a clear sorting rule matter?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It makes sorting faster only",
              },
              {
                id: "b",
                text: "It removes the need for groups",
              },
              {
                id: "c",
                text: "It makes groups consistent and easy to explain",
              },
              {
                id: "d",
                text: "It guarantees everyone agrees",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Clear rules",
                statement: "Consistent, explainable groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A clear rule means anyone can check why items are grouped.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consistent, explainable groups",
          },
        },
        {
          id: "cipg-u1-st-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define sort, classify, category, criterion. (b) Sort these items by two different rules: apple, carrot, banana, potato. (c) Why might the same items form different groups? (d) What is a shared feature? (e) Sort 'big, small, red, blue' by a rule. (f) How does sorting help when doing research? (g) Design a classification chart for classroom objects. (h) Explain why stating your criterion matters.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Classification",
                statement: "Rules, criteria, grouping.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All four definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Two valid sortings e.g. fruit vs vegetable, sweet vs savoury.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Different criteria produce different groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) A quality all items in a group share.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Valid rule e.g. size (big/small) vs colour (red/blue).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Organises information so patterns are easier to see.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Valid classification chart with clear categories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Clear criterion = consistent, checkable groups.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sorting, criteria, classification skills.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-st-notes",
      title: "Sorting — notes",
      summary:
        "Classify = group by shared features using a clear rule (criterion). Different rules → different groups.",
      sections: [
        {
          heading: "Key idea",
          body: "The rule you choose determines the groups you get.",
        },
        { heading: "Tip", body: "Always state your criterion clearly." },
      ],
    },
  ],
};
