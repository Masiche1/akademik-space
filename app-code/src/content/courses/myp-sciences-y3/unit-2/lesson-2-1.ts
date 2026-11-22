import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "myps3-u2-lesson-2-1",
  code: "2-1",
  title: "Classification and Change",
  goal: "I CAN use classification systems and dichotomous keys, describe variation, and explain natural selection as a mechanism of change.",
  standards: [
    "Key concept: Change",
    "MYP Sciences: Living things",
    "Criterion A: Knowing and understanding",
    "Criterion D: Reflecting on the impacts of science",
  ],
  vocabulary: [
    { term: "Classification", definition: "The systematic arrangement of organisms into groups based on shared characteristics." },
    { term: "Dichotomous key", definition: "A tool that identifies organisms by answering a series of either/or questions." },
    { term: "Variation", definition: "Differences between individuals of the same species; can be continuous or discontinuous." },
    { term: "Continuous variation", definition: "Variation that shows a range of values with no gaps, e.g. height, mass." },
    { term: "Discontinuous variation", definition: "Variation that falls into distinct categories, e.g. blood group, eye colour." },
    { term: "Natural selection", definition: "The process where individuals with advantageous traits are more likely to survive and reproduce." },
    { term: "Adaptation", definition: "A feature that helps an organism survive in its environment." },
  ],
  concepts: [
    {
      id: "myps3-u2-classification",
      title: "Classification systems and variation",
      skill: "Use classification systems and dichotomous keys, and describe continuous and discontinuous variation.",
      lesson: {
        sections: [
          {
            heading: "Classification",
            body: "Organisms are classified into **kingdoms** (e.g. Animalia, Plantae, Fungi, Protista, Monera), then phyla, classes, orders, families, genera and species. The **binomial name** (genus + species) uniquely identifies each species.",
          },
          {
            heading: "Dichotomous keys",
            body: "A dichotomous key identifies an organism through a series of **either/or** questions:\n\n1. Has wings? → Yes: go to 2; No: go to 3\n2. Has feathers? → Yes: bird; No: insect\n3. Has six legs? → Yes: arachnid; No: mollusc",
          },
          {
            heading: "Variation",
            body: "**Continuous variation** shows a range with no gaps (height, mass, leaf length) — shown on histograms. **Discontinuous variation** shows distinct categories (blood group A/B/AB/O, ability to roll tongue) — shown on bar charts. Variation arises from genetic differences and environmental factors.",
          },
        ],
        keyFormulas: [
          { name: "Binomial nomenclature", statement: "Genus name (capitalised) + species name (lowercase), both italicised" },
          { name: "Variation types", statement: "Continuous: range of values; Discontinuous: distinct categories" },
        ],
        workedExample: {
          problem: "Use this key to identify an organism: 1a. Has backbone → go to 2; 1b. No backbone → go to 5. 2a. Has feathers → bird. 2b. No feathers → go to 3. 3a. Has fur → mammal. 3b. No fur → go to 4. 4a. Has scales → reptile. 4b. No scales → amphibian. An organism has a backbone, no feathers, no fur, and has scales. What is it?",
          solution: "Backbone → 2; no feathers → 3; no fur → 4; has scales → reptile.",
        },
      },
      questions: [
        {
          id: "myps3-u2-classification-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a dichotomous key, what does each question provide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of all species" },
              { id: "b", text: "An either/or choice between two options" },
              { id: "c", text: "A photograph" },
              { id: "d", text: "A detailed description" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dichotomous key", statement: "Series of either/or questions to identify organisms." },
            ],
            steps: [
              { reasoning: "Each step offers two alternatives.", working: "\\text{either/or}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An either/or choice between two options",
            commonErrors: ["Thinking it's a picture guide."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-classification-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Classify each as continuous or discontinuous variation: (a) height of students, (b) blood group.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuous variation", statement: "Range of values with no gaps." },
              { kind: "definition", name: "Discontinuous variation", statement: "Distinct categories." },
            ],
            steps: [
              { reasoning: "Height shows a continuous range.", working: "\\text{continuous}", marks: 1, markCode: "M" },
              { reasoning: "Blood group has distinct types (A, B, AB, O).",
                working: "\\text{discontinuous}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) continuous (b) discontinuous",
            commonErrors: ["Classifying blood group as continuous."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-classification-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A scientist measures the mass of 50 leaves from the same tree. The masses range from 2.1 g to 4.8 g with most values around 3.5 g. Is this continuous or discontinuous variation? Justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuous variation", statement: "Shows a range of values with no gaps." },
            ],
            steps: [
              { reasoning: "Mass can take any value in a range.", working: "\\text{any value possible}", marks: 1, markCode: "M" },
              { reasoning: "The range 2.1-4.8 g with values throughout indicates continuous.", working: "\\text{continuous}", marks: 1, markCode: "M" },
              { reasoning: "Conclude with justification.", working: "\\text{continuous variation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Continuous variation — mass shows a range of values with no gaps",
            commonErrors: ["Saying it's discontinuous because there are many leaves."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "myps3-u2-classification-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A class is investigating variation in their own class.",
          parts: [
            { label: "a", prompt: "Suggest one continuous and one discontinuous variable they could measure.", marks: 2 },
            { label: "b", prompt: "Describe how they would present each type of data (graph type).", marks: 2 },
            { label: "c", prompt: "Explain why continuous data is usually collected as measurements while discontinuous data is collected as categories.", marks: 2 },
            { label: "d", prompt: "Discuss whether height is determined only by genetics or also by environment.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuous vs discontinuous", statement: "Continuous: measurable range; Discontinuous: categories." },
            ],
            steps: [
              { part: "a", reasoning: "Continuous: height, mass. Discontinuous: blood group, eye colour.", working: "\\text{continuous: height/mass; discontinuous: blood group/eye colour}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both clearly.", working: "\\text{one each}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Continuous → histogram or line graph. Discontinuous → bar chart.", working: "\\text{histogram vs bar chart}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain why.", working: "\\text{continuous shows distribution; discontinuous shows counts}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Continuous can be measured precisely; discontinuous are counted in categories.", working: "\\text{measurement vs counting}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude.", working: "\\text{different data types}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Height has a genetic component but is also affected by nutrition and health.", working: "\\text{genetics + environment}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude both factors matter.", working: "\\text{both influence height}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) continuous: height/mass; discontinuous: blood group/eye colour (b) histogram vs bar chart (c) continuous measured, discontinuous counted (d) both genetics and environment affect height",
            commonErrors: ["Choosing two continuous or two discontinuous variables.", "Using a pie chart for continuous data."],
            examinerNote: "M1 A1 for (a), M1 R1 for (b), R1 R1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "myps3-u2-classification-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a binomial name such as $Homo\\ sapiens$, which part is written with a capital letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The species name" },
              { id: "b", text: "Both parts" },
              { id: "c", text: "The genus name" },
              { id: "d", text: "Neither part" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Binomial nomenclature", statement: "Genus name is capitalised; species name is lowercase; both italicised." },
            ],
            steps: [
              { reasoning: "Only the genus (first name) is capitalised.", working: "\\textit{Genus species}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The genus name",
            commonErrors: ["Capitalising both words."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-classification-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a kingdom in the classification system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Animalia" },
              { id: "b", text: "Mammalia" },
              { id: "c", text: "Carnivora" },
              { id: "d", text: "Felis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kingdom", statement: "The broadest level of classification, e.g. Animalia, Plantae, Fungi." },
            ],
            steps: [
              { reasoning: "Animalia is a kingdom; the others are lower ranks.", working: "\\text{Animalia}=\\text{kingdom}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Animalia",
            commonErrors: ["Choosing Mammalia — that is a class."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-classification-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which level of classification is the most specific?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species" },
              { id: "b", text: "Phylum" },
              { id: "c", text: "Kingdom" },
              { id: "d", text: "Genus" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Classification ranks", statement: "Kingdom → phylum → class → order → family → genus → species." },
            ],
            steps: [
              { reasoning: "Species is the lowest and most specific rank.", working: "\\text{species}=\\text{most specific}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Species",
            commonErrors: ["Choosing genus — species is more specific."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-classification-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many legs does an adult insect have?",
          response: { type: "numeric", parts: [{ label: "Legs", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insect", statement: "Insects are arthropods with six legs, three body segments and usually wings." },
            ],
            steps: [
              { reasoning: "Insects have six legs (three pairs).", working: "3\\times2=6", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "6\\text{ legs}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ legs",
            commonErrors: ["Answering 8 — that is an arachnid such as a spider."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-classification-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A key states: 1a. Has a backbone → 2; 1b. No backbone → 3. 2a. Has feathers → bird; 2b. No feathers → mammal. 3a. Six legs → insect; 3b. Eight legs → spider. An organism has no backbone and eight legs. What is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bird" },
              { id: "b", text: "Spider" },
              { id: "c", text: "Insect" },
              { id: "d", text: "Mammal" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dichotomous key", statement: "Series of either/or questions leading to an identification." },
            ],
            steps: [
              { reasoning: "No backbone → path 1b; eight legs matches 3b → spider.", working: "1b\\to3b=\\text{spider}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Spider",
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "myps3-u2-classification-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an example of continuous variation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ability to roll the tongue" },
              { id: "b", text: "Attached or detached earlobes" },
              { id: "c", text: "Height of plants" },
              { id: "d", text: "Blood group" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuous variation", statement: "Shows a range of values with no gaps, e.g. height, mass." },
            ],
            steps: [
              { reasoning: "Height can take any value in a range — continuous.", working: "\\text{height}=\\text{continuous}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Height of plants",
            commonErrors: ["Choosing blood group — that is discontinuous."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-classification-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is an example of discontinuous variation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leaf length" },
              { id: "b", text: "Body mass" },
              { id: "c", text: "Blood group" },
              { id: "d", text: "Arm span" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Discontinuous variation", statement: "Falls into distinct categories with no intermediates, e.g. blood group." },
            ],
            steps: [
              { reasoning: "Blood group has distinct types (A, B, AB, O) with no intermediates.", working: "\\text{blood group}=\\text{discontinuous}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Blood group",
            commonErrors: ["Choosing a measurable trait like mass — that is continuous."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-classification-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a class of 40 students, 12 have blood group O. What percentage of the class has blood group O?",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 30, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part ÷ total × 100" },
            ],
            steps: [
              { reasoning: "Apply the percentage formula.", working: "\\frac{12}{40}\\times100=30", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Forgetting to multiply by 100."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-classification-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Dichotomous keys use either/or questions mainly so that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They avoid using scientific names" },
              { id: "b", text: "They are quicker to write" },
              { id: "c", text: "They require more questions to identify an organism" },
              { id: "d", text: "Each step unambiguously narrows the possibilities into two clear routes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key design", statement: "Each step must split organisms into exactly two groups so the user can follow one path." },
            ],
            steps: [
              { reasoning: "Two clear routes mean each answer eliminates half the options without ambiguity.", working: "\\text{two routes}\\Rightarrow\\text{narrows options}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Each step unambiguously narrows the possibilities into two clear routes",
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-classification-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 60 students, 15 can roll their tongues. What percentage of students can roll their tongues?",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part ÷ total × 100" },
            ],
            steps: [
              { reasoning: "Apply the percentage formula.", working: "\\frac{15}{60}\\times100", marks: 1, markCode: "M" },
              { reasoning: "25% of students can roll their tongues — a discontinuous trait.", working: "0.25\\times100=25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Forgetting to multiply by 100."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-classification-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is discontinuous variation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Height" },
              { id: "b", text: "Wingspan" },
              { id: "c", text: "Ability to roll the tongue" },
              { id: "d", text: "Mass" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Discontinuous variation", statement: "Distinct categories with no intermediates." },
            ],
            steps: [
              { reasoning: "Tongue rolling is either possible or not — two categories.", working: "\\text{two categories}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Ability to roll the tongue",
            commonErrors: ["Choosing a measurable trait like height."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-classification-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Construct a simple dichotomous key to identify four organisms: dog, eagle, shark and frog.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key design", statement: "Each step offers two alternatives that progressively separate the organisms." },
            ],
            steps: [
              { reasoning: "First split by a feature separating all four, e.g. has backbone → dog, eagle, frog (vertebrates) vs no backbone → none; better: has feathers?", working: "\\text{either/or questions}", marks: 1, markCode: "M" },
              { reasoning: "Each organism must end at a unique identification after following the key.", working: "\\text{unique path per organism}", marks: 1, markCode: "M" },
              { reasoning: "A valid key might be: has feathers → eagle; no feathers, has fur → dog; no fur, lays eggs in water → frog; has cartilage skeleton → shark.", working: "\\text{each organism identified}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A valid key uses either/or questions (e.g. feathers, fur, habitat) so each organism is uniquely identified",
            commonErrors: ["Questions that do not separate all four organisms."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "myps3-u2-natural-selection",
      title: "Natural selection and adaptation",
      skill: "Explain natural selection as a mechanism of evolutionary change and identify adaptations.",
      lesson: {
        sections: [
          {
            heading: "Variation within populations",
            body: "Within a species, individuals show **variation** in traits. Some traits give a survival advantage in a particular environment.",
          },
          {
            heading: "Natural selection",
            body: "**Natural selection** is the process where:\n\n1. Variation exists in a population\n2. Some variants are better adapted to the environment\n3. These individuals survive and reproduce more successfully\n4. Over generations, advantageous traits become more common",
          },
          {
            heading: "Adaptation",
            body: "An **adaptation** is a feature that improves survival or reproduction. Examples: camouflage in prey animals, antibiotic resistance in bacteria, long necks in giraffes (accessing food). Adaptations arise through natural selection over many generations.",
          },
        ],
        keyFormulas: [
          { name: "Natural selection", statement: "Variation → selection → inheritance → change over time" },
          { name: "Adaptation", statement: "A feature that improves survival or reproduction in a specific environment" },
        ],
        workedExample: {
          problem: "In a population of beetles, some are green and some are brown. Birds eat the green ones more easily against green leaves. Explain how natural selection would change the population.",
          solution: "Green beetles are eaten more, so brown beetles survive and reproduce more. Over time, brown beetles become more common — the population adapts to its environment.",
        },
      },
      questions: [
        {
          id: "myps3-u2-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main source of variation within a species?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only genetic differences" },
              { id: "b", text: "Only environmental factors" },
              { id: "c", text: "Genetic differences and environmental factors" },
              { id: "d", text: "All individuals are identical" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Variation", statement: "Differences arise from genetic and environmental factors." },
            ],
            steps: [
              { reasoning: "Both genetic and environmental factors cause variation.", working: "\\text{genetic + environmental}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Genetic differences and environmental factors",
            commonErrors: ["Choosing only one factor."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-natural-selection-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why antibiotic resistance in bacteria is an example of natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Individuals with advantageous traits survive and reproduce more." },
            ],
            steps: [
              { reasoning: "Some bacteria have genes for resistance; others don't.", working: "\\text{variation in resistance}", marks: 1, markCode: "M" },
              { reasoning: "Antibiotics kill non-resistant bacteria; resistant ones survive and multiply.", working: "\\text{resistant survive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Antibiotic resistance spreads because resistant bacteria survive and reproduce while non-resistant ones die",
            commonErrors: ["Saying antibiotics cause the mutation."],
            examinerNote: "M1 for variation, A1 for selection.",
          },
        },
        {
          id: "myps3-u2-natural-selection-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the four steps of natural selection using the example of peppered moths in industrial England.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Variation → selection → inheritance → change." },
            ],
            steps: [
              { reasoning: "Variation: moths were light or dark.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { reasoning: "Selection: dark moths were better camouflaged on soot-covered trees.", working: "\\text{selection}", marks: 1, markCode: "M" },
              { reasoning: "Inheritance: dark moths survived and reproduced more.", working: "\\text{inheritance}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Variation in moth colour → dark moths selected on soot-covered trees → dark colour inherited → population became darker",
            commonErrors: ["Saying the environment caused the mutation."],
            examinerNote: "M1 M1 A1 for the four steps.",
          },
        },
        {
          id: "myps3-u2-natural-selection-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A population of rabbits lives in an area that becomes covered in snow.",
          parts: [
            { label: "a", prompt: "Explain how natural selection might change the fur colour of the rabbit population.", marks: 3 },
            { label: "b", prompt: "Identify two other adaptations that might help rabbits survive in snowy conditions.", marks: 2 },
            { label: "c", prompt: "Discuss whether this change would happen quickly or slowly, and why.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Variation → selection → inheritance → change over generations." },
            ],
            steps: [
              { part: "a", reasoning: "Variation: some rabbits have lighter fur, some darker.", working: "\\text{variation in fur colour}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Selection: white rabbits are better camouflaged on snow.", working: "\\text{white rabbits selected}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Inheritance: white rabbits survive and reproduce more, passing on the trait.", working: "\\text{inherited over generations}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Adaptations: thicker fur for insulation, larger feet for walking on snow.", working: "\\text{thick fur, large feet}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Any two valid adaptations.", working: "\\text{any two}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Change is slow — requires many generations.", working: "\\text{slow}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explain: each generation only slightly shifts the population.", working: "\\text{gradual change}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude with timescale.", working: "\\text{many generations needed}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) variation → white rabbits selected → inherited over generations (b) thick fur, large feet (c) slow — requires many generations",
            commonErrors: ["Saying the change is instant or Lamarckian."],
            examinerNote: "M1 M1 R1 for (a), M1 A1 for (b), R1 R1 A1 for (c).",
          },
        },
        {
          id: "myps3-u2-natural-selection-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Natural selection is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The environment creating new mutations on demand" },
              { id: "b", text: "The process where individuals with advantageous traits survive and reproduce more" },
              { id: "c", text: "All individuals changing to suit their environment" },
              { id: "d", text: "Individuals choosing which traits to pass on" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Variation → selection → inheritance → change over generations." },
            ],
            steps: [
              { reasoning: "Natural selection favours advantageous traits through differential survival and reproduction.", working: "\\text{survive+reproduce}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Individuals with advantageous traits survive and reproduce more",
            commonErrors: ["Thinking individuals 'choose' or 'adapt' during their lifetime."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-natural-selection-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An adaptation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any change an organism makes during its life" },
              { id: "b", text: "A random mutation with no effect" },
              { id: "c", text: "A disease the organism recovers from" },
              { id: "d", text: "A feature that helps an organism survive or reproduce in its environment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "A feature that improves survival or reproduction in a specific environment." },
            ],
            steps: [
              { reasoning: "Adaptations are inherited features that improve fitness.", working: "\\text{feature helping survival}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A feature that helps an organism survive or reproduce in its environment",
            commonErrors: ["Confusing adaptation with acclimatisation (a lifetime change)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-natural-selection-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an adaptation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A broken leg that heals" },
              { id: "b", text: "A suntan" },
              { id: "c", text: "A scratch from a branch" },
              { id: "d", text: "Thick white fur of an arctic fox" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "An inherited feature that improves survival in a specific environment." },
            ],
            steps: [
              { reasoning: "Thick white fur is an inherited feature aiding survival in cold, snowy habitats.", working: "\\text{inherited survival feature}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Thick white fur of an arctic fox",
            commonErrors: ["Choosing a non-inherited change like a suntan or healed wound."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u2-natural-selection-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an experiment, 200 bacteria are exposed to an antibiotic. 150 die and 50 survive. What percentage of the bacteria survive?",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part ÷ total × 100" },
            ],
            steps: [
              { reasoning: "Survivors = 50 out of 200.", working: "\\frac{50}{200}", marks: 1, markCode: "M" },
              { reasoning: "Convert to percentage: $25\\%$.", working: "\\frac{50}{200}\\times100=25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Dividing 150 by 200 — that is the percentage killed."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-natural-selection-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Natural selection is usually described by how many main steps (variation, selection, inheritance, change over generations)?",
          response: { type: "numeric", parts: [{ label: "Steps", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Variation → selection → inheritance → change over generations." },
            ],
            steps: [
              { reasoning: "List the steps: variation exists; advantageous variants survive and reproduce more; traits are inherited; population changes.", working: "\\text{variation},\\text{selection},\\text{inheritance},\\text{change}", marks: 1, markCode: "M" },
              { reasoning: "Count them: four main steps.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-natural-selection-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What provides the 'selection pressure' in natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Human activity" },
              { id: "b", text: "The environment" },
              { id: "c", text: "Random chance alone" },
              { id: "d", text: "The organisms' choices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "The environment determines which variants survive and reproduce." },
            ],
            steps: [
              { reasoning: "Environmental factors (predators, climate, food) act as selection pressure.", working: "\\text{environment}=\\text{selection pressure}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The environment",
            commonErrors: ["Saying chance alone drives selection — variation is random but selection is not."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-natural-selection-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Camouflage colouring in prey animals is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An adaptation that improves survival" },
              { id: "b", text: "A learned behaviour" },
              { id: "c", text: "A disease" },
              { id: "d", text: "A reproductive strategy only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "A feature that helps an organism survive in its environment." },
            ],
            steps: [
              { reasoning: "Camouflage reduces detection by predators — a survival adaptation.", working: "\\text{camouflage}=\\text{adaptation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An adaptation that improves survival",
            commonErrors: ["Calling it a learned behaviour — it is inherited."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-natural-selection-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why characteristics an organism acquires during its lifetime (for example, a giraffe stretching its neck to reach leaves) are not passed on to its offspring.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inheritance", statement: "Only genetic information in reproductive cells is passed to offspring." },
            ],
            steps: [
              { reasoning: "Lifetime changes affect body cells, not the genes in reproductive cells.", working: "\\text{body cells}\\neq\\text{gametes}", marks: 1, markCode: "R" },
              { reasoning: "Acquired characteristics do not alter the DNA sequence.", working: "\\text{DNA unchanged}", marks: 1, markCode: "R" },
              { reasoning: "Therefore offspring inherit only the genes their parents were born with.", working: "\\text{only inherited genes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acquired characteristics don't change DNA, so they are not inherited — only genetic variation is passed on",
            commonErrors: ["Describing Lamarckian inheritance — acquired traits are not inherited."],
            examinerNote: "R1 R1 A1.",
          },
        },
        {
          id: "myps3-u2-natural-selection-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a population of 500 beetles, 20% carry a gene for pesticide resistance. How many beetles carry the resistance gene?",
          response: { type: "numeric", parts: [{ label: "Beetles", answer: 100 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Part = percentage ÷ 100 × total" },
            ],
            steps: [
              { reasoning: "Multiply the total by the percentage as a decimal.", working: "500\\times0.20", marks: 1, markCode: "M" },
              { reasoning: "100 beetles carry the resistance gene — pre-existing variation for selection to act on.", working: "500\\times0.2=100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ beetles",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-natural-selection-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "After antibiotic treatment, 60 of the 80 surviving bacteria are resistant. What percentage of the survivors are resistant?",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 75, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part ÷ total × 100" },
            ],
            steps: [
              { reasoning: "Resistant survivors = 60 out of 80.", working: "\\frac{60}{80}", marks: 1, markCode: "M" },
              { reasoning: "Convert to percentage: $75\\%$.", working: "\\frac{60}{80}\\times100=75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75\\%$",
            commonErrors: ["Dividing by the original population instead of survivors."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-natural-selection-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Natural selection does not produce perfect organisms mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stops once organisms are well adapted" },
              { id: "b", text: "It only works in laboratories" },
              { id: "c", text: "It acts only on existing variation and involves trade-offs" },
              { id: "d", text: "It has a specific goal of perfection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection limits", statement: "Selection acts on existing variation only; it cannot produce perfect designs." },
            ],
            steps: [
              { reasoning: "Selection cannot create ideal traits from nothing and every adaptation has costs — no perfect organism results.", working: "\\text{variation limits}+\\text{trade-offs}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It acts only on existing variation and involves trade-offs",
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u2-natural-selection-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is variation essential for natural selection to occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Without variation there is nothing for selection to act on" },
              { id: "b", text: "It increases population size" },
              { id: "c", text: "It makes populations look different" },
              { id: "d", text: "It prevents disease" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Selection requires differences between individuals to favour some over others." },
            ],
            steps: [
              { reasoning: "If all individuals were identical, no variant would have an advantage.", working: "\\text{no variation}\\Rightarrow\\text{no selection}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Without variation there is nothing for selection to act on",
            commonErrors: ["Thinking selection creates variation — it only acts on it."],
            examinerNote: "B1 for (b).",
          },
        },
      ],
    },
  ],
};
