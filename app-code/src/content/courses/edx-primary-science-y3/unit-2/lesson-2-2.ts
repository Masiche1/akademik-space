import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "edps3-u2-lesson-2-2",
  code: "2-2",
  title: "Teeth and Digestion",
  goal: "I CAN identify teeth types and describe the digestive system.",
  standards: ["Year 3 Science: Teeth and digestion"],
  vocabulary: [
    { term: "Incisors", definition: "Front teeth for cutting food." },
    { term: "Canines", definition: "Pointed teeth for tearing." },
    { term: "Molars", definition: "Back teeth for grinding." },
    { term: "Digestion", definition: "Breaking down food for absorption." },
  ],
  concepts: [
    {
      id: "edps3-u2-teeth",
      title: "Types of teeth",
      skill: "Identify and describe the roles of different teeth.",
      lesson: {
        sections: [
          {
            heading: "Teeth types",
            body: "**Incisors** (front, flat — cut), **canines** (pointed — tear), **premolars/molars** (back, flat — grind). Adults have 32 teeth; children have 20 milk teeth that fall out.",
          },
          {
            heading: "Care",
            body: "Brush twice daily, limit sugary foods/drinks (sugar feeds plaque bacteria that cause decay), see dentist regularly.",
          },
        ],
        keyFormulas: [
          { name: "Incisors", statement: "Cut" },
          { name: "Canines", statement: "Tear" },
          { name: "Molars", statement: "Grind" },
        ],
        workedExample: {
          problem: "Which teeth grind food?",
          solution: "Molars (back teeth).",
        },
      },
      questions: [
        {
          id: "edps3-u2-te-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which teeth are used for cutting food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Canines" },
              { id: "b", text: "Wisdom teeth" },
              { id: "c", text: "Molars" },
              { id: "d", text: "Incisors" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Incisors", statement: "Cut food." },
            ],
            steps: [{ reasoning: "Incisors cut.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Incisors",
            commonErrors: ["Wrong teeth."],
          },
        },
        {
          id: "edps3-u2-te-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes tooth decay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cold weather" },
              { id: "b", text: "Too much brushing" },
              { id: "c", text: "Hard food" },
              { id: "d", text: "Sugar feeding plaque bacteria" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tooth decay",
                statement: "Bacteria + sugar = acid.",
              },
            ],
            steps: [
              { reasoning: "Identify cause.", marks: 1, markCode: "M" },
              { reasoning: "Answer: sugar/bacteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Sugar feeding plaque bacteria",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edps3-u2-te-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Match each tooth type to its job: incisors, canines, molars.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Teeth roles",
                statement: "Cut/tear/grind.",
              },
            ],
            steps: [
              { reasoning: "Incisors correct.", marks: 1, markCode: "A" },
              { reasoning: "Canines correct.", marks: 1, markCode: "A" },
              { reasoning: "Molars correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Incisors cut, canines tear, molars grind",
            commonErrors: ["Mismatched roles."],
          },
        },
        {
          id: "edps3-u2-te-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two ways to look after your teeth.",
          parts: [
            { label: "a", prompt: "Way 1", marks: 1 },
            { label: "b", prompt: "Why it helps", marks: 1 },
            { label: "c", prompt: "Way 2", marks: 1 },
            { label: "d", prompt: "Why it helps", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dental care",
                statement: "Brush, reduce sugar, floss, dentist.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Valid way.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Reason given.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Valid way.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Reason given.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'Brush twice daily to remove plaque; limit sugary drinks to reduce acid attacks'",
            commonErrors: ["Ways don't help teeth."],
          },
        },
      ],
    },
    {
      id: "edps3-u2-digest",
      title: "The digestive system",
      skill: "Describe the path of food through the body.",
      lesson: {
        sections: [
          {
            heading: "Digestion journey",
            body: "**Mouth** (chew, saliva starts breakdown) → **oesophagus** (tube to stomach) → **stomach** (acid + churning) → **small intestine** (nutrients absorbed into blood) → **large intestine** (water absorbed, waste formed) → **rectum/anus** (waste exits).",
          },
          {
            heading: "Key organs",
            body: "**Salivary glands** make saliva; **liver** makes bile (breaks fats); **pancreas** makes digestive juices. Villi in small intestine increase absorption surface.",
          },
        ],
        keyFormulas: [
          {
            name: "Digestion path",
            statement: "Mouth→stomach→small intestine→large intestine",
          },
          { name: "Absorption", statement: "Small intestine takes nutrients" },
          { name: "Villi", statement: "Increase absorption area" },
        ],
        workedExample: {
          problem: "Where are most nutrients absorbed?",
          solution: "Small intestine — its villi provide huge surface area.",
        },
      },
      questions: [
        {
          id: "edps3-u2-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ absorbs most nutrients?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large intestine" },
              { id: "b", text: "Small intestine" },
              { id: "c", text: "Mouth" },
              { id: "d", text: "Stomach" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Small intestine",
                statement: "Main absorption site.",
              },
            ],
            steps: [
              {
                reasoning: "Small intestine absorbs.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Small intestine",
            commonErrors: ["Wrong organ."],
          },
        },
        {
          id: "edps3-u2-di-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the stomach do to food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorbs nutrients" },
              { id: "b", text: "Stores water" },
              { id: "c", text: "Makes saliva" },
              { id: "d", text: "Churns food with acid" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stomach",
                statement: "Acid + churning breaks food.",
              },
            ],
            steps: [
              { reasoning: "Identify function.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: churns with acid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Churns food with acid",
            commonErrors: ["Wrong function."],
          },
        },
        {
          id: "edps3-u2-di-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put in order: stomach, mouth, small intestine, oesophagus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digestion order",
                statement: "Mouth→oesophagus→stomach→small intestine.",
              },
            ],
            steps: [
              { reasoning: "Start correct.", marks: 1, markCode: "A" },
              { reasoning: "Middle correct.", marks: 1, markCode: "A" },
              { reasoning: "End correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mouth → oesophagus → stomach → small intestine",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps3-u2-di-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the small intestine has villi.",
          parts: [
            { label: "a", prompt: "What villi are", marks: 1 },
            { label: "b", prompt: "Surface area effect", marks: 1 },
            { label: "c", prompt: "Absorption benefit", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Villi",
                statement: "Finger-like projections increase surface area.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Villi described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Area explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Absorption linked.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Villi are finger-like projections that massively increase surface area for absorbing nutrients into blood",
            commonErrors: ["No surface area link."],
          },
        },
      ],
    },
  ],
};
