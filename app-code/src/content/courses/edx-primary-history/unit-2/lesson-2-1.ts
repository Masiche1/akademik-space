import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edxph-u2-lesson-2-1",
  code: "2-1",
  title: "Early Humans",
  goal: "I CAN describe early humans and how they lived.",
  standards: ["Y3-Y5 History", "Early humans"],
  vocabulary: [
    { term: "Hominid", definition: "An early human-like creature." },
    {
      term: "Hunter-gatherer",
      definition: "Someone who finds food by hunting and gathering.",
    },
    {
      term: "Cave painting",
      definition: "Art drawn on cave walls by early humans.",
    },
    { term: "Migration", definition: "Moving from one place to another." },
  ],
  concepts: [
    {
      id: "edxph-u2-humans",
      title: "Early Humans and Prehistory",
      skill: "Describe early humans and their way of life.",
      lesson: {
        sections: [
          {
            heading: "Early humans",
            body: "Humans evolved from earlier ape-like creatures over millions of years. Early humans (hominids) like Australopithecus and Homo habilis lived in Africa. Homo sapiens (modern humans) appeared about 300,000 years ago. Early humans migrated out of Africa to Asia, Europe and eventually everywhere.",
          },
          {
            heading: "Hunter-gatherers",
            body: "Early humans were hunter-gatherers — they hunted animals and gathered plants, nuts and berries. They lived in caves or simple shelters, made tools from stone and bone, and painted pictures on cave walls. The Stone Age lasted from about 3.4 million years ago until about 3000 BC when metal tools were invented.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How did early humans get food?",
          solution: "Hunting animals and gathering plants.",
        },
      },
      questions: [
        {
          id: "edxph-u2-hu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'hunter-gatherer' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Someone who farms" },
              { id: "b", text: "Someone who hunts and gathers food" },
              { id: "c", text: "A type of tool" },
              { id: "d", text: "An early animal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hunter-gatherer",
                statement: "Hunts + gathers.",
              },
            ],
            steps: [
              {
                reasoning: "Hunter-gatherer = food gathering.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Hunts+gathers",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxph-u2-hu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where did early humans first live?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Europe" },
              { id: "b", text: "Africa" },
              { id: "c", text: "Asia" },
              { id: "d", text: "America" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human origins",
                statement: "Africa.",
              },
            ],
            steps: [
              { reasoning: "Africa = origins.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Africa",
            commonErrors: ["Wrong continent."],
          },
        },
        {
          id: "edxph-u2-hu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways early humans found food and one tool they made.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Early humans",
                statement: "Hunting, gathering, stone tools.",
              },
            ],
            steps: [
              { reasoning: "Food — hunting animals.", marks: 1, markCode: "M" },
              {
                reasoning: "Food — gathering plants/berries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tool — stone axe or spear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hunting+gathering+stone tools",
            commonErrors: ["Missing elements."],
          },
        },
        {
          id: "edxph-u2-hu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Stone Age ended and what changed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stone Age end",
                statement: "Metal tools changed life.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People discovered metal — copper, then bronze, then iron.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Metal tools were stronger and more useful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Farming developed — less need to hunt/gather.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Metal tools + farming",
            commonErrors: ["No real reasons."],
          },
        },
      ],
    },
    {
      id: "edxph-u2-prehistory",
      title: "Stone Age to Iron Age",
      skill: "Describe the main prehistoric periods in Britain.",
      lesson: {
        sections: [
          {
            heading: "British prehistory",
            body: "Britain's prehistory: Palaeolithic (old Stone Age — hunter-gatherers, cave art), Mesolithic (middle Stone Age — fishing, forest tools), Neolithic (new Stone Age — farming began ~4000 BC, stone monuments like Stonehenge), and Bronze Age (~2500-800 BC — bronze tools, roundhouses). The Iron Age began ~800 BC with iron tools.",
          },
          {
            heading: "Stonehenge and monuments",
            body: "Stonehenge in Wiltshire is a famous Neolithic monument — a circle of huge stones built around 2500 BC. Its purpose is still debated — possibly astronomical (solstice alignments), religious, or ceremonial. Other monuments include Avebury stone circle and burial mounds (barrows). These show early Britons could organise large projects.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is Stonehenge?",
          solution: "A Neolithic stone circle in Wiltshire, built ~2500 BC.",
        },
      },
      questions: [
        {
          id: "edxph-u2-pre-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Stonehenge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Roman building" },
              { id: "b", text: "A stone circle built in prehistory" },
              { id: "c", text: "A medieval castle" },
              { id: "d", text: "A modern monument" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stonehenge",
                statement: "Neolithic stone circle.",
              },
            ],
            steps: [
              {
                reasoning: "Stonehenge = stone circle.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Stone circle",
            commonErrors: ["Wrong type."],
          },
        },
        {
          id: "edxph-u2-pre-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When did farming begin in Britain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "With the Romans" },
              { id: "b", text: "Neolithic period, ~4000 BC" },
              { id: "c", text: "Iron Age" },
              { id: "d", text: "Medieval times" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "British farming",
                statement: "Neolithic ~4000 BC.",
              },
            ],
            steps: [
              { reasoning: "Farming = Neolithic.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Neolithic ~4000 BC",
            commonErrors: ["Wrong period."],
          },
        },
        {
          id: "edxph-u2-pre-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these in order: Bronze Age, Stone Age, Iron Age.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Prehistoric chronology",
                statement: "Stone→Bronze→Iron.",
              },
            ],
            steps: [
              { reasoning: "Stone Age first.", marks: 1, markCode: "M" },
              { reasoning: "Bronze Age second.", marks: 1, markCode: "M" },
              { reasoning: "Iron Age last.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stone→Bronze→Iron",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edxph-u2-pre-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What does Stonehenge tell us about prehistoric people? Give two inferences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Archaeological inference",
                statement: "Evidence → conclusions.",
              },
            ],
            steps: [
              {
                reasoning: "They could organise large building projects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They had religious/ceremonial beliefs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They understood astronomy or had astronomical purpose.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Organisation+beliefs+astronomy",
            commonErrors: ["No inferences."],
          },
        },
      ],
    },
    {
      id: "edxph-u2-civilisations",
      title: "Ancient Civilisations",
      skill: "Describe the first great civilisations.",
      lesson: {
        sections: [
          {
            heading: "First civilisations",
            body: "The first civilisations arose in river valleys: Mesopotamia (Tigris and Euphrates rivers — 'cradle of civilisation'), Egypt (Nile), Indus Valley (India), and China (Yellow River). Civilisations developed writing, cities, organised religion, and government — things hunter-gatherers didn't need.",
          },
          {
            heading: "Egypt",
            body: "Ancient Egypt (c. 3100-30 BC) was one of the greatest civilisations. The Nile provided water and fertile soil. They built pyramids (tombs for pharaohs), developed hieroglyphic writing, and worshipped many gods. The Great Pyramid of Giza is one of the Seven Wonders. Egyptian mummies preserved bodies for the afterlife.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which river was ancient Egypt built along?",
          solution: "The Nile.",
        },
      },
      questions: [
        {
          id: "edxph-u2-civ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where did ancient Egypt develop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mesopotamia" },
              { id: "b", text: "Along the Nile" },
              { id: "c", text: "Greece" },
              { id: "d", text: "Britain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ancient Egypt",
                statement: "Nile valley.",
              },
            ],
            steps: [{ reasoning: "Egypt = Nile.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Nile",
            commonErrors: ["Wrong river."],
          },
        },
        {
          id: "edxph-u2-civ-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What were pyramids used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temples" },
              { id: "b", text: "Tombs for pharaohs" },
              { id: "c", text: "Houses" },
              { id: "d", text: "Forts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pyramids",
                statement: "Pharaoh tombs.",
              },
            ],
            steps: [
              { reasoning: "Pyramids = tombs.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Tombs",
            commonErrors: ["Wrong purpose."],
          },
        },
        {
          id: "edxph-u2-civ-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two features of early civilisations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Civilisations",
                statement: "Writing, cities, government, religion.",
              },
            ],
            steps: [
              {
                reasoning: "Feature 1, e.g. writing system.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Feature 2, e.g. cities or organised religion.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. writing+cities",
            commonErrors: ["Not civilisation features."],
          },
        },
        {
          id: "edxph-u2-civ-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did the first civilisations develop along rivers? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "River valleys",
                statement: "Water + fertile land.",
              },
            ],
            steps: [
              {
                reasoning: "Water for drinking and farming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fertile soil for crops from flooding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Transport and trade routes.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Water+soil+transport",
            commonErrors: ["No real reasons."],
          },
        },
      ],
    },
    {
      id: "edxph-u2-writing",
      title: "Writing and Inventions",
      skill: "Describe early inventions that changed history.",
      lesson: {
        sections: [
          {
            heading: "Invention of writing",
            body: "Writing was invented around 3400 BC in Mesopotamia (cuneiform) and Egypt (hieroglyphs). Before writing, knowledge was passed by word of mouth and could be lost. Writing allowed records, laws, stories and history to be kept permanently — this is why we have history at all.",
          },
          {
            heading: "Other inventions",
            body: "The wheel (~3500 BC) revolutionised transport and pottery. The plough made farming more efficient. Irrigation channels brought water to crops. The sailboat allowed sea travel. The printing press (~1440, Gutenberg) made books cheap and spread ideas — helped fuel the Renaissance and Reformation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why was the invention of writing so important?",
          solution: "It allowed knowledge to be recorded permanently.",
        },
      },
      questions: [
        {
          id: "edxph-u2-inv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where was writing first invented?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Egypt" },
              { id: "b", text: "Mesopotamia" },
              { id: "c", text: "China" },
              { id: "d", text: "Greece" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Writing",
                statement: "Mesopotamia ~3400 BC.",
              },
            ],
            steps: [
              { reasoning: "Mesopotamia first.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mesopotamia",
            commonErrors: ["Wrong place."],
          },
        },
        {
          id: "edxph-u2-inv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why was the printing press important?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It made paper" },
              { id: "b", text: "It made books cheap and spread ideas" },
              { id: "c", text: "It printed money" },
              { id: "d", text: "It was for soldiers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Printing press",
                statement: "Spread ideas widely.",
              },
            ],
            steps: [
              {
                reasoning: "Cheap books = spread ideas.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Spread ideas",
            commonErrors: ["Wrong impact."],
          },
        },
        {
          id: "edxph-u2-inv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two inventions and explain how each changed history.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inventions",
                statement: "Each changed society.",
              },
            ],
            steps: [
              {
                reasoning: "Invention 1 + impact, e.g. wheel → transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Invention 2 + impact, e.g. printing press → ideas.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear links explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. wheel+printing press",
            commonErrors: ["No impacts."],
          },
        },
        {
          id: "edxph-u2-inv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the invention of writing was a turning point in human history.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Writing's impact",
                statement: "Enabled record-keeping and civilisation.",
              },
            ],
            steps: [
              {
                reasoning: "Before: knowledge lost when people died.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "After: records, laws, stories preserved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enabled government, education, history itself.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Preserved knowledge → civilisation",
            commonErrors: ["Superficial answer."],
          },
        },
      ],
    },
  ],
};
