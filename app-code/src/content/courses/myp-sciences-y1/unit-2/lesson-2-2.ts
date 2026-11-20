import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "myps1-u2-lesson-2-2",
  code: "2-2",
  title: "Classification and Adaptation",
  goal: "I CAN sort organisms into groups, use and construct dichotomous keys, and explain how variation and adaptations help organisms survive in their habitats.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
    "Criterion C: Processing and evaluating",
    "Key concept: Relationships",
    "Related concept: Patterns",
    "Related concept: Environment",
  ],
  vocabulary: [
    { term: "Kingdom", definition: "One of the largest groups used to classify living things, such as animals, plants and fungi." },
    { term: "Vertebrate", definition: "An animal with a backbone." },
    { term: "Dichotomous key", definition: "A series of paired statements or questions used to identify an organism." },
    { term: "Variation", definition: "The differences between individuals of the same species." },
    { term: "Adaptation", definition: "A feature of an organism that helps it to survive in its habitat." },
    { term: "Habitat", definition: "The place where an organism lives." },
  ],
  concepts: [
    {
      id: "myps1-u2-classification-keys",
      title: "Classification and dichotomous keys",
      skill: "Classify organisms into kingdoms and vertebrate groups and use or construct a dichotomous key.",
      lesson: {
        sections: [
          {
            heading: "Kingdoms and animal groups",
            body: "Scientists classify organisms by their shared features. The largest groups are **kingdoms**, including **animals**, **plants**, **fungi** (such as mushrooms and yeast) and **protists** (single-celled organisms such as amoeba).\n\nAnimals are split into **vertebrates** (with a backbone) and **invertebrates** (without a backbone, such as insects, spiders, snails and worms).\n\nThe five vertebrate groups are:\n\n- **Fish**: scales, fins, gills, lay eggs in water.\n- **Amphibians**: moist skin, lay jelly-like eggs in water.\n- **Reptiles**: dry scaly skin, lay eggs with leathery shells on land.\n- **Birds**: feathers, wings, lay hard-shelled eggs.\n- **Mammals**: fur or hair, feed young on milk.",
          },
          {
            heading: "Dichotomous keys",
            body: "A **dichotomous key** is a series of paired questions. Each question has two answers, and each answer leads either to another question or to the name of an organism.\n\nGood questions use features that can be **observed** and do not change, such as the number of legs, the presence of a shell or the type of body covering. Poor features are subjective ones such as 'large' or 'pretty', which different people judge differently.\n\nTo construct a key for several organisms, start with a feature that splits the group into two, then split each smaller group again until every organism is on its own.",
          },
        ],
        keyFormulas: [
          { name: "Vertebrate groups", statement: "Fish, amphibians, reptiles, birds, mammals" },
          { name: "Key questions", statement: "Each question has exactly two answers, based on features that can be observed" },
        ],
        workedExample: {
          problem: "Write a key to tell apart a sparrow, a goldfish and a frog.",
          solution: "Question 1: Does it have feathers? Yes: sparrow. No: go to question 2. Question 2: Does it have fins and scales? Yes: goldfish. No: frog. Every question has two answers and each organism ends up with its own name.",
        },
      },
      questions: [
        {
          id: "myps1-u2-classification-keys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To which kingdom does a mushroom belong?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plants" },
              { id: "b", text: "Animals" },
              { id: "c", text: "Fungi" },
              { id: "d", text: "Protists" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fungi", statement: "Fungi, such as mushrooms and yeast, form their own kingdom; they do not photosynthesise." },
            ],
            steps: [
              { reasoning: "Mushrooms are fungi. They do not make their own food by photosynthesis, so they are not plants.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Fungi",
            commonErrors: ["Choosing plants because mushrooms grow in soil and look like plants."],
            examinerNote: "B1 for fungi.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the vertebrate group described in each case.\n\n(i) It has moist skin and lays jelly-like eggs in water.\n\n(ii) It has fur and feeds its young on milk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Vertebrate groups", statement: "Amphibians have moist skin and lay jelly-like eggs in water; mammals have fur or hair and feed young on milk." },
            ],
            steps: [
              { reasoning: "Moist skin and jelly-like eggs laid in water identify an amphibian.", marks: 1, markCode: "B" },
              { reasoning: "Fur and milk for the young identify a mammal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(i) Amphibian (ii) Mammal",
            commonErrors: ["Naming (i) as a reptile or fish because it lays eggs.", "Naming (ii) as a bird because it is warm-blooded."],
            examinerNote: "B1 amphibian. B1 mammal. Allow 'amphibians' and 'mammals'.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A teacher gives a student four animals: a salmon, a frog, a sparrow and a cat.\n\nConstruct a dichotomous key that can be used to identify each of the four animals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "Each question has two answers and uses an observable feature; every organism is identified separately." },
            ],
            steps: [
              { reasoning: "Every question in the key has exactly two possible answers (yes or no), each leading to another question or an animal's name.", marks: 1, markCode: "B" },
              { reasoning: "Questions use observable features such as fins and scales, feathers, moist skin or fur, not opinions such as size.", marks: 1, markCode: "B" },
              { reasoning: "The key is complete: all four animals are identified and no two end at the same answer.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Example: 1 Does it have fins and scales? Yes: salmon. No: go to 2. 2 Does it have feathers? Yes: sparrow. No: go to 3. 3 Does it have fur? Yes: cat. No: frog.",
            commonErrors: ["Using questions with more than two answers.", "Using features such as 'big' or 'friendly' that are not reliable.", "Leaving two animals with the same final answer."],
            examinerNote: "Accept any valid key, in table or flow-chart form, that identifies all four animals. Three questions are needed to separate four animals.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A key is used to identify five animals.\n\n1a  Has a backbone: go to 2\n1b  No backbone: go to 3\n2a  Has feathers: sparrow\n2b  Has scales and fins: goldfish\n3a  Has a shell: snail\n3b  No shell: go to 4\n4a  Has eight legs: spider\n4b  No legs: earthworm",
          parts: [
            { label: "a", prompt: "Use the key to identify (i) an animal with a backbone, scales and fins, and (ii) an animal with no backbone, no shell and no legs.", marks: 2 },
            { label: "b", prompt: "State the name given to animals that have no backbone.", marks: 1 },
            { label: "c", prompt: "A butterfly has no backbone, no shell and six legs. Describe how the key should be changed so that it can also identify a butterfly.", marks: 2 },
            { label: "d", prompt: "A student suggests adding the question 'Is the animal large?' to the key. Explain why this is a poor question.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "Each question has two answers, based on observable features." },
              { kind: "definition", name: "Invertebrate", statement: "An invertebrate is an animal without a backbone." },
            ],
            steps: [
              { part: "a", reasoning: "1a, then 2b: goldfish.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "1b, 3b, 4b: earthworm.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Animals without a backbone are invertebrates.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Keep 4a as a question that sends eight-legged animals to spider, and change 4b so it leads to a new question rather than directly to earthworm.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Add a new question, for example 5a: has six legs: butterfly; 5b: no legs: earthworm.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "'Large' is subjective: different people would judge it differently, so the answer is unreliable.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Animals of the same species vary in size and change size as they grow, so one animal could give different answers (there is no clear size boundary).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) (i) goldfish (ii) earthworm (b) Invertebrates (c) Make 4b lead to a new question: six legs: butterfly, no legs: earthworm (d) Subjective and changes with growth, so it gives unreliable answers",
            commonErrors: ["In (a) stopping at 3a or choosing the wrong route.", "In (c) adding a third answer to one question, which is not allowed in a dichotomous key."],
            examinerNote: "(b) Allow 'invertebrate'. (c) Accept any valid change that keeps two answers to every question. (d) Allow 'not measurable / not a clear feature' for the first mark.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which vertebrate group has dry, scaly skin, lays eggs with hard shells, and is cold-blooded?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amphibians" },
              { id: "b", text: "Reptiles" },
              { id: "c", text: "Birds" },
              { id: "d", text: "Mammals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vertebrate groups", statement: "Reptiles have dry scaly skin and lay eggs with hard shells; amphibians have moist skin and jelly-like eggs; mammals have fur and milk." },
            ],
            steps: [
              { reasoning: "Dry scaly skin, hard-shelled eggs and cold-bloodedness describe reptiles.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reptiles",
            commonErrors: ["Choosing birds, which have feathers and are warm-blooded.", "Choosing amphibians, which have moist skin and jelly-like eggs."],
            examinerNote: "B1 for reptiles.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the name given to an animal that has no backbone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vertebrate" },
              { id: "b", text: "Invertebrate" },
              { id: "c", text: "Mammal" },
              { id: "d", text: "Reptile" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Invertebrate", statement: "An invertebrate is an animal without a backbone." },
            ],
            steps: [
              { reasoning: "Animals without a backbone are invertebrates; those with a backbone are vertebrates.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Invertebrate",
            commonErrors: ["Choosing vertebrate, which means 'with a backbone'."],
            examinerNote: "B1 for invertebrate.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a dichotomous key, how many answers should each question have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One" },
              { id: "b", text: "Two" },
              { id: "c", text: "Three" },
              { id: "d", text: "As many as there are animals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "Each question in a dichotomous key has exactly two answers ('dichotomous' means 'dividing into two')." },
            ],
            steps: [
              { reasoning: "The name 'dichotomous' means splitting into two, so each question has two possible answers.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Two",
            commonErrors: ["Thinking more answers make a key more useful."],
            examinerNote: "B1 for two.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student is writing a dichotomous key to identify garden insects. Which question is the best choice for the key?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is the insect friendly?" },
              { id: "b", text: "Does the insect have wings?" },
              { id: "c", text: "Is the insect pretty?" },
              { id: "d", text: "Does the insect like flowers?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Key questions", statement: "Each key question must be based on a feature that can be observed and measured, and must have two clear answers." },
            ],
            steps: [
              { reasoning: "'Has wings' can be observed directly and gives a clear yes/no answer.", marks: 1, markCode: "B" },
              { reasoning: "'Friendly', 'pretty' and 'likes flowers' are subjective or cannot be observed, so different people would answer differently.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Does the insect have wings?",
            commonErrors: ["Choosing a question that sounds interesting but cannot be measured or observed."],
            examinerNote: "B1 for observable feature. R1 for subjective questions being unreliable.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these would **not** be a suitable question in a dichotomous key?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Has six legs" },
              { id: "b", text: "Has a backbone" },
              { id: "c", text: "Is large" },
              { id: "d", text: "Has wings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Key questions", statement: "Key questions need observable features with clear answers; 'large' is subjective and changes as animals grow." },
            ],
            steps: [
              { reasoning: "'Is large' is not a clear, measurable feature — different people would judge it differently.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Is large",
            commonErrors: ["Choosing a question that is observable; the unsuitability is subjectivity, not observation."],
            examinerNote: "B1 for 'is large'. Accept any subjective question oe.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is a dichotomous key better than simply listing all the features of each animal when trying to identify an unknown animal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "Each question splits the remaining possibilities into two groups, so the animal is identified step by step." },
            ],
            steps: [
              { reasoning: "A key asks one question at a time and each answer halves the possibilities, so the unknown animal is identified quickly.", marks: 1, markCode: "B" },
              { reasoning: "A list of features requires checking every feature of every animal, which is slow and confusing.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "A key splits the possibilities in two at each step, so the animal is identified step by step; a list requires checking everything.",
            commonErrors: ["Saying a key is 'shorter' without explaining the step-by-step splitting."],
            examinerNote: "B1 for step-by-step / halves possibilities. R1 for comparing with a feature list oe.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A dichotomous key for $n$ animals needs at least $n-1$ questions. To identify 4 animals a key uses 3 questions.\n\nHow many questions are needed to identify 8 animals?",
          response: { type: "numeric", parts: [{ label: "Number of questions", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "A key for $n$ animals needs at least $n-1$ questions." },
            ],
            steps: [
              { reasoning: "Use the pattern: questions = animals - 1.", working: "8-1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ questions",
            commonErrors: ["Answering 8 or 16 by doubling the pattern."],
            examinerNote: "M1 for 8-1. A1 for 7.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A dichotomous key for $n$ animals needs at least $n-1$ questions.\n\nHow many questions are needed to identify 16 animals?",
          response: { type: "numeric", parts: [{ label: "Number of questions", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "A key for $n$ animals needs at least $n-1$ questions." },
            ],
            steps: [
              { reasoning: "Use the pattern: questions = animals - 1.", working: "16-1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ questions",
            commonErrors: ["Using log$_2$(16) = 4, which is the number of questions on one path, not the total number in the key."],
            examinerNote: "M1 for 16-1. A1 for 15.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A dichotomous key for $n$ animals needs at least $n-1$ questions.\n\nCalculate (i) the minimum number of questions for 6 animals, (ii) the minimum number for 12 animals, and (iii) the difference between these two answers.",
          response: {
            type: "numeric",
            parts: [
              { label: "Questions for 6 animals", answer: 5 },
              { label: "Questions for 12 animals", answer: 11 },
              { label: "Difference", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "A key for $n$ animals needs at least $n-1$ questions." },
            ],
            steps: [
              { reasoning: "For 6 animals: $6-1$.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "For 12 animals: $12-1$.", working: "11", marks: 1, markCode: "M" },
              { reasoning: "Subtract the smaller answer from the larger.", working: "11-5=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$, $11$, $6$",
            commonErrors: ["Using the number of animals instead of $n-1$.", "Subtracting in the wrong order."],
            examinerNote: "M1 for each correct subtraction. A1 for 6.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A dichotomous key for $n$ animals needs at least $n-1$ questions. Student A builds a key for 8 animals. Student B builds a key for 20 animals.\n\nCalculate (i) the minimum number of questions in student A's key, (ii) the minimum number in student B's key, and (iii) how many more questions student B needs than student A.",
          response: {
            type: "numeric",
            parts: [
              { label: "Questions for student A (8 animals)", answer: 7 },
              { label: "Questions for student B (20 animals)", answer: 19 },
              { label: "Extra questions needed by student B", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "A key for $n$ animals needs at least $n-1$ questions." },
            ],
            steps: [
              { reasoning: "For 8 animals: $8-1$.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "For 20 animals: $20-1$.", working: "19", marks: 1, markCode: "M" },
              { reasoning: "Subtract student A's answer from student B's.", working: "19-7=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$, $19$, $12$",
            commonErrors: ["Doubling the difference between 8 and 20.", "Forgetting the -1 in either calculation."],
            examinerNote: "M1 for each correct subtraction. A1 for 12. Allow ecf for part (iii).",
          },
        },
        {
          id: "myps1-u2-classification-keys-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student is learning to write a dichotomous key.",
          parts: [
            { label: "a", prompt: "State **two** rules that every question in a dichotomous key must follow.", marks: 2 },
            { label: "b", prompt: "Explain why each question must have exactly two answers.", marks: 1 },
            { label: "c", prompt: "Explain why key questions should use observable features rather than opinions.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "Each question has two answers and uses an observable feature; every organism is identified separately." },
            ],
            steps: [
              { part: "a", reasoning: "Any two of: each question has exactly two answers; each question is based on an observable feature; every organism can be identified by the key.", marks: 2, markCode: "B" },
              { part: "b", reasoning: "Because the key 'dichotomizes' — each answer splits the remaining organisms into two groups, allowing step-by-step identification.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Observable features give the same answer for every user; opinions or vague features such as 'large' or 'friendly' are unreliable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Two answers per question; observable features; every organism identifiable (b) Each answer splits the group in two (c) Observable features are reliable and give the same answer for everyone.",
            commonErrors: ["In (a) repeating the same rule twice.", "In (c) saying opinions are 'wrong' rather than unreliable."],
            examinerNote: "(a) B1 for each distinct valid rule. (b) Allow 'dichotomous means two'. (c) Allow 'different people would answer differently' oe.",
          },
        },
        {
          id: "myps1-u2-classification-keys-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A key is used to identify four insects.\n\n1a  Has wings: go to 2\n1b  No wings: ant\n2a  Has two pairs of wings: go to 3\n2b  Has one pair of wings: fly\n3a  Has a long body: dragonfly\n3b  Has a short body: butterfly",
          parts: [
            { label: "a", prompt: "Use the key to identify (i) an insect with no wings, and (ii) an insect with two pairs of wings and a short body.", marks: 2 },
            { label: "b", prompt: "A student finds an insect with one pair of wings and a long body. Explain why the key cannot identify it correctly.", marks: 2 },
            { label: "c", prompt: "The key should also identify a beetle, which has one pair of wings and a hard wing case. Describe how to change the key.", marks: 2 },
            { label: "d", prompt: "State one feature that would **not** be suitable to use in this key, and explain why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dichotomous key", statement: "Each question has two answers, based on observable features, and each organism is identified separately." },
            ],
            steps: [
              { part: "a", reasoning: "1b leads directly to ant.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "1a, 2a, 3b leads to butterfly.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The key sends all one-pair-of-wings insects straight to 'fly' without checking body length.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A long-bodied insect with one pair of wings would be wrongly identified as a fly.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Change 2b so it leads to a new question rather than directly to fly.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Add a new question separating fly from beetle, for example: has a hard wing case: beetle; no hard wing case: fly.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any unsuitable feature, for example 'is colourful' or 'is large'.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It is subjective or varies within a species, so different people would answer differently and the identification would be unreliable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) (i) ant (ii) butterfly (b) The key assumes all one-pair insects are flies; a long-bodied one would be misidentified (c) Make 2b lead to a new question separating fly from beetle (d) Any subjective feature such as 'colourful' — unreliable because answers differ between users.",
            commonErrors: ["In (b) saying the insect 'doesn't fit' without explaining the key's assumption.", "In (c) adding a third answer to question 2 instead of a new question."],
            examinerNote: "(c) Accept any valid change keeping two answers per question. (d) Accept 'size' oe with a reason.",
          },
        },
      ],
    },
    {
      id: "myps1-u2-variation-adaptation",
      title: "Variation and adaptation",
      skill: "Distinguish continuous and discontinuous variation and explain how adaptations help organisms survive in their habitats.",
      lesson: {
        sections: [
          {
            heading: "Variation",
            body: "Individuals of the same species are not identical. These differences are called **variation**.\n\n- **Continuous variation**: a feature can take any value in a range, for example height, mass or leaf length. Results are measured and often form a bell-shaped distribution.\n- **Discontinuous variation**: a feature falls into clear categories with nothing in between, for example blood group, or being able to roll the tongue or not.\n\nVariation can be **inherited** (for example eye colour) or caused by the **environment** (for example a plant in shade growing taller and thinner).",
          },
          {
            heading: "Adaptations",
            body: "An **adaptation** is a feature that helps an organism survive in its habitat. It may be a body structure, a behaviour or a process.\n\n- A polar bear has thick fur and a layer of fat (blubber) to **insulate** it, and white fur for **camouflage** in the snow.\n- A camel has wide feet that spread its weight on sand and stores fat in its hump.\n- Animals in hot places often have large ears with a **large surface area** to lose heat; animals in cold places have small ears and a compact body to **reduce heat loss**.\n\nOrganisms with useful features are more likely to survive and reproduce, so these features become common in the species.",
          },
        ],
        keyFormulas: [
          { name: "Continuous variation", statement: "A range of values, for example height or mass" },
          { name: "Discontinuous variation", statement: "Clear categories, for example blood group" },
          { name: "Adaptation", statement: "A feature that helps an organism survive in its habitat" },
        ],
        workedExample: {
          problem: "Explain how thick white fur helps an Arctic hare to survive.",
          solution: "Thick fur traps a layer of air, which insulates the hare and reduces heat loss in the cold. The white colour camouflages the hare against the snow, so predators find it harder to see.",
        },
      },
      questions: [
        {
          id: "myps1-u2-variation-adaptation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature shows continuous variation in humans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blood group" },
              { id: "b", text: "Height" },
              { id: "c", text: "Ability to roll the tongue" },
              { id: "d", text: "Having attached or detached earlobes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuous variation", statement: "Continuous variation is a range of values with no clear categories, for example height." },
            ],
            steps: [
              { reasoning: "Height can take any value in a range. The other features fall into clear categories.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Height",
            commonErrors: ["Choosing blood group because it is measured in a laboratory; it still falls into clear categories (A, B, AB, O)."],
            examinerNote: "B1 for height.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A polar bear lives in the Arctic.\n\nGive **two** adaptations of a polar bear and explain how each helps it to survive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adaptation", statement: "An adaptation is a feature that helps an organism survive in its habitat." },
            ],
            steps: [
              { reasoning: "Thick fur or a layer of blubber insulates the bear, reducing heat loss in the cold.", marks: 1, markCode: "B" },
              { reasoning: "White fur camouflages the bear against the snow so it can approach prey without being seen.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Any two adaptations with a reason, for example thick fur/blubber to insulate and reduce heat loss; white fur for camouflage.",
            commonErrors: ["Naming an adaptation without saying how it helps.", "Saying the bear 'wants' to be warm; adaptations arise because individuals with useful features survive and reproduce."],
            examinerNote: "B1 for each adaptation linked to a correct benefit. Allow large paws for walking on ice / swimming, small ears to reduce heat loss. Reject adaptation alone with no explanation.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student predicts that the length of leaves on a bush shows continuous variation.\n\nDescribe how the student could collect and present data to test this prediction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuous variation", statement: "Continuous variation shows a range of values, usually with most individuals near the middle." },
              { kind: "skill", name: "Fair sampling", statement: "A large random sample reduces bias and gives more reliable results." },
            ],
            steps: [
              { reasoning: "Collect a large sample of leaves (for example 30 or more) chosen at random from the bush, to avoid bias.", marks: 1, markCode: "B" },
              { reasoning: "Measure the length of each leaf in the same way, for example with a ruler to the nearest millimetre.", marks: 1, markCode: "B" },
              { reasoning: "Group the lengths into class intervals and draw a frequency chart; continuous variation gives a range of values with most leaves near the middle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Take a large random sample; measure each leaf with a ruler to the nearest mm; group into intervals and plot a frequency chart, expecting a range of values with most in the middle.",
            commonErrors: ["Measuring only a few leaves, which does not show the range.", "Picking the biggest leaves, which introduces bias."],
            examinerNote: "B1 large / random sample. B1 measuring method with a unit. B1 grouping or plotting the data and describing the expected pattern. Allow bar chart or histogram.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The fennec fox lives in the Sahara desert. It has very large ears and pale, sandy fur. The Arctic fox lives in the Arctic. It has small ears, very thick fur and white winter fur.",
          parts: [
            { label: "a", prompt: "Define the term adaptation.", marks: 1 },
            { label: "b", prompt: "Explain how the large ears of the fennec fox help it to survive in the desert.", marks: 2 },
            { label: "c", prompt: "Explain why the Arctic fox has small ears.", marks: 2 },
            { label: "d", prompt: "An Arctic fox is moved to the Sahara desert. Predict whether it would survive well, giving two reasons.", marks: 2 },
            { label: "e", prompt: "Fennec foxes vary in ear size. Suggest how this variation could help the species if the desert becomes hotter.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "An adaptation is a feature that helps an organism survive in its habitat." },
              { kind: "principle", name: "Surface area and heat loss", statement: "A larger surface area loses heat faster; a smaller surface area loses heat more slowly." },
              { kind: "principle", name: "Variation and survival", statement: "Individuals with useful features are more likely to survive and reproduce." },
            ],
            steps: [
              { part: "a", reasoning: "A feature of an organism that helps it to survive in its habitat.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Large ears have a large surface area.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "This allows more heat to be lost to the air, which keeps the fox cool in the heat.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Small ears have a small surface area.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "This reduces heat loss, helping the fox stay warm in the cold.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It would probably not survive well: the thick fur and small ears would make it overheat because it could not lose enough heat.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Its white winter fur would not camouflage it against the sand, so it would be easier for predators to see (and harder to sneak up on prey).", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Foxes with larger ears lose heat more easily, so they are more likely to survive the hotter conditions.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Survivors reproduce and pass on the large-ear feature to their offspring, so large ears become more common.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) A feature that helps an organism survive in its habitat (b) Large surface area, so more heat lost, keeping the fox cool (c) Small surface area, so less heat lost, keeping the fox warm (d) Probably not: overheating from thick fur and small ears; white fur not camouflaged on sand (e) Large-eared foxes survive, reproduce and pass on the feature",
            commonErrors: ["In (b) saying the ears 'let in cool air' or 'make the fox cold' without linking to surface area.", "In (e) saying that individual foxes 'grow' bigger ears because they need them."],
            examinerNote: "(b) Allow ears act as radiators. (d) Allow other valid reasons, such as thick fur insulating and trapping heat. (e) Reject 'the foxes change their ears'.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these features shows **discontinuous** variation in humans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Height" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Blood group" },
              { id: "d", text: "Foot length" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Discontinuous variation", statement: "Discontinuous variation falls into clear categories with nothing in between, for example blood group." },
            ],
            steps: [
              { reasoning: "Blood group has clear categories (A, B, AB, O); height, mass and foot length vary continuously over a range.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Blood group",
            commonErrors: ["Choosing height or mass, which are continuous."],
            examinerNote: "B1 for blood group (accept tongue-rolling).",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these features shows **continuous** variation in humans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blood group" },
              { id: "b", text: "Whether you can roll your tongue" },
              { id: "c", text: "Height" },
              { id: "d", text: "Attached or free earlobes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuous variation", statement: "Continuous variation is a range of values with no clear categories, for example height." },
            ],
            steps: [
              { reasoning: "Height can take any value in a range; blood group, tongue-rolling and earlobes fall into clear categories.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Height",
            commonErrors: ["Choosing a feature with clear categories such as blood group."],
            examinerNote: "B1 for height (accept mass).",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two identical bean plants are grown from the same seed: one in full sunlight and one in deep shade. The shaded plant grows taller and thinner.\n\nExplain what this shows about variation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Variation", statement: "Variation is the difference between individuals of the same species; it can be inherited or caused by the environment." },
            ],
            steps: [
              { reasoning: "The difference is caused by the environment (light), not by genes, because the plants came from the same seed.", marks: 1, markCode: "B" },
              { reasoning: "This shows that environmental factors can produce variation within a species — the shaded plant grew taller and thinner because it was reaching for light.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The difference is environmental, not inherited: the shaded plant grew taller and thinner because of the lack of light, showing that the environment can cause variation.",
            commonErrors: ["Saying the plant 'evolved' or 'adapted' during its lifetime.", "Saying the two plants are different species."],
            examinerNote: "B1 for environmental cause / same seed. R1 for variation within a species oe.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is an **adaptation**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A plant that happens to be near a window" },
              { id: "b", text: "Thick white fur that insulates a polar bear in the cold" },
              { id: "c", text: "A scratch a dog got while running" },
              { id: "d", text: "A flower that was painted by a child" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "An adaptation is a feature that helps an organism survive in its habitat." },
            ],
            steps: [
              { reasoning: "Thick white fur is an inherited feature that helps the polar bear survive in the cold — an adaptation.", marks: 1, markCode: "B" },
              { reasoning: "The other options are accidents, temporary conditions or human actions, not features that help survival.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Thick white fur that insulates a polar bear in the cold",
            commonErrors: ["Choosing anything that 'helps' in a loose sense without it being a feature of the organism."],
            examinerNote: "B1 for (b). R1 for recognising adaptations are features, not accidents.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Animals that live in cold places, such as the Arctic fox, usually have small ears and a compact body. Why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To lose heat faster" },
              { id: "b", text: "To reduce heat loss and stay warm" },
              { id: "c", text: "To hear prey more clearly" },
              { id: "d", text: "To camouflage against the snow" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area and heat loss", statement: "A smaller surface area loses heat more slowly, which helps animals stay warm in cold places." },
            ],
            steps: [
              { reasoning: "Small ears and a compact body mean a smaller surface area, so less heat is lost to the cold air.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To reduce heat loss and stay warm",
            commonErrors: ["Choosing 'lose heat faster', which describes hot-climate animals with large ears."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The fennec fox lives in the hot Sahara desert and has very large ears. Explain how this feature helps it to survive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area and heat loss", statement: "A larger surface area loses heat faster, which helps animals stay cool in hot places." },
            ],
            steps: [
              { reasoning: "The large ears have a large surface area.", marks: 1, markCode: "B" },
              { reasoning: "This allows heat to be lost to the air more quickly, keeping the fox cool in the desert heat.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The large ears have a large surface area, so heat is lost faster, keeping the fox cool in the hot desert.",
            commonErrors: ["Saying the ears 'let in cool air' or 'make the fox cold'.", "Saying the ears are for hearing only."],
            examinerNote: "B1 for large surface area. R1 for heat loss linked to staying cool.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a class of 80 students, 20 can roll their tongue.\n\nCalculate the percentage of students who can roll their tongue.",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage}=\\dfrac{\\text{part}}{\\text{total}}\\times100$" },
            ],
            steps: [
              { reasoning: "Divide the number who can roll their tongue by the total and multiply by 100.", working: "\\frac{20}{80}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Dividing by 20 instead of 80.", "Forgetting to multiply by 100."],
            examinerNote: "M1 for 20/80 x 100. A1 for 25%.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student measures the lengths of five leaves from the same bush: 4.2 cm, 4.5 cm, 4.3 cm, 4.4 cm and 4.6 cm.\n\nCalculate the mean leaf length.",
          response: { type: "numeric", parts: [{ label: "Mean leaf length", answer: 4.4, tolerance: 0.01, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "Add the five lengths and divide by 5.", working: "\\frac{4.2+4.5+4.3+4.4+4.6}{5}=\\frac{22.0}{5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "4.4\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.4\\text{ cm}$",
            commonErrors: ["Dividing by 4 instead of 5.", "Adding the lengths incorrectly."],
            examinerNote: "M1 for 22.0/5. A1 for 4.4 cm.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A survey of 200 people's blood groups found: 80 type O, 60 type A, 40 type B and 20 type AB.\n\nCalculate (i) the percentage with blood group O, (ii) the number of people who do not have blood group O, and (iii) the fraction of people with blood group O as a decimal.",
          response: {
            type: "numeric",
            parts: [
              { label: "Percentage with blood group O", answer: 40, unit: "%" },
              { label: "Number not blood group O", answer: 120 },
              { label: "Fraction with blood group O as a decimal", answer: 0.4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage}=\\dfrac{\\text{part}}{\\text{total}}\\times100$" },
            ],
            steps: [
              { reasoning: "Divide type O by the total and multiply by 100.", working: "\\frac{80}{200}\\times100=40\\%", marks: 1, markCode: "M" },
              { reasoning: "Subtract type O from the total.", working: "200-80=120", marks: 1, markCode: "M" },
              { reasoning: "Divide type O by the total without multiplying by 100.", working: "\\frac{80}{200}=0.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$, $120$, $0.4$",
            commonErrors: ["Using 80 as the number of non-O people.", "Forgetting to multiply by 100 for the percentage."],
            examinerNote: "M1 for each correct method. A1 for 0.4.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student grows two groups of identical bean plants. Group S is grown in full sun and has a mean height of 30 cm. Group T is grown in shade and has a mean height of 45 cm.",
          response: {
            type: "numeric",
            parts: [
              { label: "Difference in mean heights", answer: 15, unit: "cm" },
              { label: "Percentage by which the shaded plants are taller", answer: 50, unit: "%" },
              { label: "Expected mean height of shaded plants if sun plants were 40 cm", answer: 60, unit: "cm" },
              { label: "Ratio of shaded height to sun height", answer: 1.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage increase}=\\dfrac{\\text{increase}}{\\text{original}}\\times100$" },
              { kind: "principle", name: "Environmental variation", statement: "The environment (light) causes plants to grow differently; the same percentage applies when comparing groups." },
            ],
            steps: [
              { reasoning: "Subtract the sun mean from the shade mean.", working: "45-30=15\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Divide the difference by the sun mean and multiply by 100.", working: "\\frac{15}{30}\\times100=50\\%", marks: 1, markCode: "M" },
              { reasoning: "Apply the same 50% increase to 40 cm.", working: "40\\times1.5=60\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Divide the shade mean by the sun mean.", working: "\\frac{45}{30}=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\text{ cm}$, $50\\%$, $60\\text{ cm}$, $1.5$",
            commonErrors: ["Dividing the difference by the shade mean for part (ii).", "Adding 50% of 40 incorrectly."],
            examinerNote: "M1 for each correct method. A1 for 1.5. Allow ecf for part (iii).",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a polar bear's thick white fur helps it to survive in the Arctic, and give one other example of an adaptation.",
          parts: [
            { label: "a", prompt: "Explain how the thick fur helps the polar bear survive the cold.", marks: 2 },
            { label: "b", prompt: "Explain how the white colour helps the polar bear survive.", marks: 1 },
            { label: "c", prompt: "Give one other example of an adaptation and state how it helps the organism.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "An adaptation is a feature that helps an organism survive in its habitat." },
              { kind: "principle", name: "Insulation and camouflage", statement: "Thick fur traps air to insulate; white colour camouflages against snow." },
            ],
            steps: [
              { part: "a", reasoning: "The thick fur traps a layer of air.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "This insulates the bear and reduces heat loss in the cold.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The white fur camouflages the bear against the snow, so predators find it harder to see it.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any valid example with a linked benefit, for example a camel's hump stores fat for energy and water, or a cactus's spines reduce water loss.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Thick fur traps air → insulates → less heat lost (b) White fur camouflages against snow (c) Any valid adaptation with its survival benefit.",
            commonErrors: ["In (a) saying the fur 'makes heat'.", "In (c) giving a feature without explaining how it helps survival."],
            examinerNote: "(a) Allow 'blubber/fat layer' oe. (c) Accept any correct adaptation-function pair from the lesson or a reasonable equivalent.",
          },
        },
        {
          id: "myps1-u2-variation-adaptation-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The arctic hare lives in snowy regions. It has thick white fur and short ears. The jackrabbit lives in hot deserts. It has large ears and sandy-brown fur.",
          parts: [
            { label: "a", prompt: "Define the term adaptation.", marks: 1 },
            { label: "b", prompt: "Explain how the arctic hare's thick white fur helps it to survive.", marks: 2 },
            { label: "c", prompt: "Explain how the jackrabbit's large ears help it to survive in the desert.", marks: 2 },
            { label: "d", prompt: "The arctic hare's short ears are an adaptation. Explain why short ears help it in the cold, using surface area.", marks: 2 },
            { label: "e", prompt: "The jackrabbit is moved to a cold mountain region. Predict whether it would survive well and give two reasons.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "An adaptation is a feature that helps an organism survive in its habitat." },
              { kind: "principle", name: "Surface area and heat loss", statement: "A larger surface area loses heat faster; a smaller surface area loses heat more slowly." },
            ],
            steps: [
              { part: "a", reasoning: "A feature of an organism that helps it to survive in its habitat.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The thick fur traps air and insulates the hare.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The white colour camouflages it against the snow so predators find it harder to see.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The large ears have a large surface area.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "This lets heat escape faster, keeping the rabbit cool in the heat.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Short ears have a small surface area.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "This reduces heat loss, helping the hare stay warm in the cold.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "It would probably not survive well: its large ears would lose too much heat in the cold.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Its sandy-brown fur would not camouflage it against snow, making it easier for predators to see.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) A feature that helps an organism survive in its habitat (b) Fur insulates; white fur camouflages on snow (c) Large ears lose heat faster, keeping it cool (d) Short ears = small surface area = less heat loss (e) Probably not: overheats? No — loses too much heat; poor camouflage on snow.",
            commonErrors: ["In (d) saying short ears 'keep heat in' without linking to surface area.", "In (e) predicting survival without reasons."],
            examinerNote: "(e) Allow 'it would survive because rabbits are adaptable' only if reasons given; expect heat loss and camouflage points.",
          },
        },
      ],
    },
  ],
};
