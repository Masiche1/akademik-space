module.exports = [
  {
    file: "lesson-1-4.ts", exportName: "lesson14",
    lesson: {
      id: "cipg-u1-lesson-1-4", code: "1-4",
      title: "Stage 1 — Looking Closer: Observing and Comparing",
      goal: "I CAN observe things closely and compare them to spot differences and similarities.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 1: analysis", "Cambridge Primary Global Perspectives 0838 strand: Analysis"],
      stage: 1,
      vocabulary: [
        { term: "Observe", definition: "To look at something carefully." },
        { term: "Compare", definition: "To look at two things and see how they are alike or different." },
        { term: "Similar", definition: "Alike in some way." },
        { term: "Different", definition: "Not alike." },
        { term: "Detail", definition: "Small things you notice when looking closely." },
        { term: "Feature", definition: "A particular part or quality of something." },
      ],
      concept: {
        id: "cipg-u1-s1-observe", title: "Observing and comparing",
        skill: "Notice details and compare objects at Stage 1 level.",
        sections: [
          { heading: "Observing closely", body: "Observing means looking carefully — noticing colours, shapes, sizes, patterns. 'The leaf has pointed edges and green veins.' Close observation helps you understand things better." },
          { heading: "Comparing", body: "Comparing means finding similarities and differences: 'Both are animals, but the cat has fur and the fish has scales.' Comparing helps you sort, choose and explain." },
        ],
        keyFormulas: [
          { name: "Observe", statement: "look carefully, notice details" },
          { name: "Compare", statement: "find similarities and differences" },
        ],
        workedExample: {
          problem: "Compare a pencil and a pen in two ways.",
          solution: "Similar: both write on paper. Different: pencil uses lead you can rub out; pen uses ink that is permanent.",
        },
        questions: [
          {
            id: "cipg-u1-ob-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does it mean to observe?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Look at something carefully" }, { id: "b", text: "Guess quickly" }, { id: "c", text: "Ignore details" }, { id: "d", text: "Close your eyes" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Observe", statement: "Careful looking." }],
              steps: [{ reasoning: "Observing = noticing details carefully.", marks: 1, markCode: "M" }],
              finalAnswer: "Look carefully",
            },
          },
          {
            id: "cipg-u1-ob-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name one similarity and one difference between an apple and an orange.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Comparing", statement: "Similarities and differences." }],
              steps: [
                { reasoning: "Similar: both round fruits.", marks: 1, markCode: "M" },
                { reasoning: "Different: colour/taste/peel.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. both fruits; different colour",
            },
          },
          {
            id: "cipg-u1-ob-q3", difficulty: "core", totalMarks: 3,
            stem: "Look at your shoe. Describe two details you notice. Then explain why observing closely helps.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Observation", statement: "Details and benefits." }],
              steps: [
                { reasoning: "Two valid details (colour, laces, material).", marks: 1, markCode: "M" },
                { reasoning: "Observing = noticing small features.", marks: 1, markCode: "M" },
                { reasoning: "Helps understand and describe things.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Details noted; helps understanding",
            },
          },
          {
            id: "cipg-u1-ob-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define observe, compare, similar, different. (b) Compare day and night in two ways. (c) Compare two animals you know. (d) Why is noticing details important? (e) What is a feature? (f) How does comparing help you choose? (g) Observe a leaf — describe three details. (h) Design a 'spot the difference' game idea.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Observation", statement: "Details, comparisons." }],
              steps: [
                { reasoning: "(a) All four definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Day=light/active; night=dark/sleep.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid animal comparison.", marks: 1, markCode: "M" },
                { reasoning: "(d) Details reveal how things work/differ.", marks: 1, markCode: "M" },
                { reasoning: "(e) Part/quality of something.", marks: 1, markCode: "M" },
                { reasoning: "(f) Compare options to pick best.", marks: 1, markCode: "M" },
                { reasoning: "(g) Three leaf details: shape, veins, edge.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid game idea.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Observation, comparison skills, details.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-ob-notes", title: "Observing — notes",
      summary: "Observe = notice details. Compare = similarities + differences. Close looking reveals more.",
      sections: [
        { heading: "Key idea", body: "Good observation = naming specific details, not just 'it's nice'." },
        { heading: "Comparing", body: "Say both how things are alike AND different." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson15",
    lesson: {
      id: "cipg-u1-lesson-1-5", code: "1-5",
      title: "Stage 2 — Deciding and Explaining Why",
      goal: "I CAN make simple choices and explain reasons for my decisions.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 2: evaluation", "Cambridge Primary Global Perspectives 0838 strand: Evaluation"],
      stage: 2,
      vocabulary: [
        { term: "Decide", definition: "To make a choice between options." },
        { term: "Reason", definition: "Why you chose something." },
        { term: "Because", definition: "A word that gives a reason." },
        { term: "Best", definition: "The most suitable choice." },
        { term: "Option", definition: "One of the choices available." },
        { term: "Explain", definition: "To make your thinking clear." },
      ],
      concept: {
        id: "cipg-u1-s2-decide", title: "Making and explaining decisions",
        skill: "Choose between options and justify with reasons at Stage 2 level.",
        sections: [
          { heading: "Making choices", body: "Deciding means picking the best option from choices. Think about what matters — is it safe? fun? helpful? cheap? Look at the reasons for each option before choosing." },
          { heading: "Explaining why", body: "Always be ready to explain your choice: 'I chose the red one because it matches my bag.' Reasons start with 'because' and give a clear why. Good reasons help others understand your thinking." },
        ],
        keyFormulas: [
          { name: "Decide", statement: "choose the best option" },
          { name: "Reason", statement: "explain why with 'because'" },
        ],
        workedExample: {
          problem: "Choose a snack: apple or crisps. Decide and give a reason.",
          solution: "I choose the apple because it is healthier and gives me energy for playing.",
        },
        questions: [
          {
            id: "cipg-u1-dd-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does it mean to decide?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Make a choice between options" }, { id: "b", text: "Avoid choosing" }, { id: "c", text: "Copy others" }, { id: "d", text: "Change your mind constantly" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Decide", statement: "Choose an option." }],
              steps: [{ reasoning: "Deciding = selecting from available choices.", marks: 1, markCode: "M" }],
              finalAnswer: "Make a choice",
            },
          },
          {
            id: "cipg-u1-dd-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Choose between 'read a book' and 'watch TV' for free time. State your choice and one reason.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Deciding", statement: "Choice + reason." }],
              steps: [
                { reasoning: "Clear choice made.", marks: 1, markCode: "M" },
                { reasoning: "Valid reason with 'because'.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. book because it improves reading",
            },
          },
          {
            id: "cipg-u1-dd-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a reason? Rewrite 'I like dogs' as a sentence with a reason for liking them.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reasons", statement: "Why explanations." }],
              steps: [
                { reasoning: "Reason = explanation of why.", marks: 1, markCode: "M" },
                { reasoning: "e.g. 'I like dogs because they are friendly and play with me.'", marks: 1, markCode: "M" },
                { reasoning: "Reason starts with because.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Why-explanation; 'because' sentence",
            },
          },
          {
            id: "cipg-u1-dd-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define decide, reason, option, best. (b) Decide: cake or fruit for a party — give reason. (c) Why is 'because' useful? (d) What makes a good reason? (e) Give two reasons for wearing a helmet. (f) How do you choose between two toys? (g) What if your friend disagrees with your choice? (h) Design a decision-making chart for choosing a pet.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Decision making", statement: "Choices, reasons, justification." }],
              steps: [
                { reasoning: "(a) All four definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid choice + reason.", marks: 1, markCode: "M" },
                { reasoning: "(c) Signals explanation follows.", marks: 1, markCode: "M" },
                { reasoning: "(d) Clear, relevant, true explanation.", marks: 1, markCode: "M" },
                { reasoning: "(e) Two safety reasons.", marks: 1, markCode: "M" },
                { reasoning: "(f) Compare features, decide, explain.", marks: 1, markCode: "M" },
                { reasoning: "(g) Listen, explain your reasons, maybe compromise.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid decision chart.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Decision-making, reasons, justification.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-dd-notes", title: "Decisions — notes",
      summary: "Decide = choose best option. Always explain with 'because' + clear reason.",
      sections: [
        { heading: "Key idea", body: "Good decisions consider options then give reasons." },
        { heading: "Reasons", body: "Start with 'because'; make it specific and true." },
      ],
    },
  },
  {
    file: "lesson-1-6.ts", exportName: "lesson16",
    lesson: {
      id: "cipg-u1-lesson-1-6", code: "1-6",
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
      concept: {
        id: "cipg-u1-s2-sort", title: "Sorting and classifying",
        skill: "Group information by rules and explain the criteria at Stage 2 level.",
        sections: [
          { heading: "Sorting information", body: "Sorting means grouping things by a rule — colour, size, type, where they live. Classifying means deciding which group each item belongs to based on shared features." },
          { heading: "Choosing rules", body: "Different rules give different groups: animals can be sorted by 'has fur/has scales' or by 'lives on land/water'. The rule you choose depends on what you want to find out." },
        ],
        keyFormulas: [
          { name: "Sort/classify", statement: "group by a rule or shared feature" },
          { name: "Criterion", statement: "the feature used for grouping" },
        ],
        workedExample: {
          problem: "Sort these into groups: rose, oak tree, daisy, pine tree. What rule did you use?",
          solution: "Flowers (rose, daisy) vs trees (oak, pine). Rule: what part of the plant / what it is used for.",
        },
        questions: [
          {
            id: "cipg-u1-st-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is classifying?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Grouping things by shared features" }, { id: "b", text: "Throwing things away" }, { id: "c", text: "Mixing everything together" }, { id: "d", text: "Counting objects" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Classify", statement: "Group by features." }],
              steps: [{ reasoning: "Classifying = grouping by shared characteristics.", marks: 1, markCode: "M" }],
              finalAnswer: "Group by shared features",
            },
          },
          {
            id: "cipg-u1-st-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Sort these by one rule: cat, dog, parrot, goldfish, hamster.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Sorting", statement: "Clear grouping rule." }],
              steps: [
                { reasoning: "Valid grouping e.g. pets vs wild? All pets... use habitat: land (cat,dog,hamster), flying (parrot), water (goldfish).", marks: 1, markCode: "M" },
                { reasoning: "Rule stated clearly.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. by habitat",
            },
          },
          {
            id: "cipg-u1-st-q3", difficulty: "core", totalMarks: 3,
            stem: "The same toys can be sorted two different ways. Give two different sorting rules for: ball, doll, car, teddy.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Multiple criteria", statement: "Different rules → different groups." }],
              steps: [
                { reasoning: "Rule 1: e.g. soft (doll, teddy) vs hard (ball, car).", marks: 1, markCode: "M" },
                { reasoning: "Rule 2: e.g. people-shaped (doll, teddy) vs vehicles/objects (ball, car).", marks: 1, markCode: "M" },
                { reasoning: "Explains rule determines groups.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Two valid different rules",
            },
          },
          {
            id: "cipg-u1-st-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define sort, classify, category, criterion. (b) Sort books by two different rules. (c) Why might the same items group differently? (d) What is a shared feature? (e) Sort 'red, blue, green, yellow' by a rule. (f) How does sorting help research? (g) Design a classification chart for animals. (h) Explain why a clear rule matters.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Classification", statement: "Rules, criteria, grouping." }],
              steps: [
                { reasoning: "(a) All four definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Two valid book sortings.", marks: 1, markCode: "M" },
                { reasoning: "(c) Different criteria → different groups.", marks: 1, markCode: "M" },
                { reasoning: "(d) Quality both items have.", marks: 1, markCode: "M" },
                { reasoning: "(e) e.g. warm colours vs cool.", marks: 1, markCode: "M" },
                { reasoning: "(f) Organises data for analysis.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid animal classification.", marks: 1, markCode: "M" },
                { reasoning: "(h) Clear rule = consistent, explainable groups.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Sorting, criteria, multiple rules, classification.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-st-notes", title: "Sorting — notes",
      summary: "Classify = group by shared features using a clear rule (criterion). Different rules → different groups.",
      sections: [
        { heading: "Key idea", body: "The rule you choose determines the groups you get." },
        { heading: "Tip", body: "Always state your criterion clearly." },
      ],
    },
  },
];
