import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edxph-u3-lesson-3-1",
  code: "3-1",
  title: "Anglo-Saxons and Vikings",
  goal: "I CAN describe Anglo-Saxon and Viking settlement in Britain.",
  standards: ["Y4-Y6 History", "Anglo-Saxons and Vikings"],
  vocabulary: [
    {
      term: "Anglo-Saxon",
      definition: "Germanic tribes who settled in Britain after Romans left.",
    },
    {
      term: "Viking",
      definition:
        "Seafaring raiders from Scandinavia (Denmark, Norway, Sweden).",
    },
    { term: "Heptarchy", definition: "The seven Anglo-Saxon kingdoms." },
    { term: "Danelaw", definition: "Area of England under Viking control." },
  ],
  concepts: [
    {
      id: "edxph-u3-angles",
      title: "Anglo-Saxon Britain",
      skill: "Describe Anglo-Saxon settlement and culture.",
      lesson: {
        sections: [
          {
            heading: "After the Romans",
            body: "When Romans left Britain around AD 410, the island was invaded by Germanic tribes: Angles, Saxons and Jutes. They established kingdoms — Kent, Wessex, Mercia, East Anglia, Northumbria, Essex, Sussex (the 'heptarchy' = seven kingdoms). They spoke Old English — the ancestor of modern English. Place names ending in '-ham', '-ton', '-ley', '-worth' are Anglo-Saxon.",
          },
          {
            heading: "Christianity and learning",
            body: "Anglo-Saxons were pagan (worshipped many gods) until missionaries like Augustine brought Christianity from Rome in AD 597. Monasteries became centres of learning — monks copied books by hand. Famous Anglo-Saxon figures: King Alfred the Great (Wessex, fought Vikings, promoted learning), and the epic poem 'Beowulf' tells of a hero fighting monsters.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What does the '-ham' ending in place names tell us?",
          solution: "Anglo-Saxon origin — 'ham' means village/home.",
        },
      },
      questions: [
        {
          id: "edxph-u3-ang-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who were the Anglo-Saxons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Roman soldiers" },
              { id: "b", text: "Germanic tribes who settled in Britain" },
              { id: "c", text: "Viking raiders" },
              { id: "d", text: "Celtic natives" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anglo-Saxons",
                statement: "Germanic settlers.",
              },
            ],
            steps: [
              {
                reasoning: "Anglo-Saxons = Germanic.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Germanic settlers",
            commonErrors: ["Wrong group."],
          },
        },
        {
          id: "edxph-u3-ang-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What language did the Anglo-Saxons speak?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Latin" },
              { id: "b", text: "Old English" },
              { id: "c", text: "French" },
              { id: "d", text: "Norse" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anglo-Saxon language",
                statement: "Old English.",
              },
            ],
            steps: [{ reasoning: "Old English.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Old English",
            commonErrors: ["Wrong language."],
          },
        },
        {
          id: "edxph-u3-ang-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways we know Anglo-Saxons settled in Britain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical evidence",
                statement: "Place names, records, artefacts.",
              },
            ],
            steps: [
              {
                reasoning: "Place names with '-ham', '-ton', '-ley'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Written records and archaeological finds.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both valid evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Place names+records",
            commonErrors: ["Only one type."],
          },
        },
        {
          id: "edxph-u3-ang-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How did Christianity change Anglo-Saxon Britain? Give two effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Christianity's impact",
                statement: "Religion + learning.",
              },
            ],
            steps: [
              {
                reasoning: "New religion replaced pagan beliefs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Monasteries became centres of learning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Churches and monasteries built across the land.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Religion change+monasteries+learning",
            commonErrors: ["No real effects."],
          },
        },
      ],
    },
    {
      id: "edxph-u3-vikings",
      title: "The Vikings",
      skill: "Describe Viking raids, settlement and legacy.",
      lesson: {
        sections: [
          {
            heading: "Viking raids",
            body: "Vikings were seafaring people from Scandinavia (Denmark, Norway, Sweden). From about AD 793 they raided coastal Britain — the monastery at Lindisfarne was famously attacked. They were skilled sailors with longships that could travel up rivers. They traded as well as raided — reaching North America (Vinland) 500 years before Columbus.",
          },
          {
            heading: "Danelaw and settlement",
            body: "Vikings conquered and settled parts of England — the Danelaw covered the north and east. Many place names in the Danelaw end in '-by' (village), '-thorpe' (farm), '-thwaite' (clearing). Alfred the Great and later King Æthelstan fought back; by AD 954 the Danelaw was absorbed into England. Vikings also settled Normandy in France — their descendants conquered England in 1066.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What does '-by' in a place name suggest?",
          solution: "Viking origin — 'by' means village in Old Norse.",
        },
      },
      questions: [
        {
          id: "edxph-u3-vik-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where did the Vikings come from?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "France" },
              { id: "b", text: "Scandinavia" },
              { id: "c", text: "Spain" },
              { id: "d", text: "Italy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Viking origins",
                statement: "Scandinavia.",
              },
            ],
            steps: [
              { reasoning: "Scandinavia = Vikings.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Scandinavia",
            commonErrors: ["Wrong region."],
          },
        },
        {
          id: "edxph-u3-vik-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Danelaw?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Viking ship" },
              { id: "b", text: "Area of England under Viking control" },
              { id: "c", text: "A law book" },
              { id: "d", text: "A battle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Danelaw",
                statement: "Viking-controlled area.",
              },
            ],
            steps: [
              { reasoning: "Danelaw = Viking area.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Viking area",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edxph-u3-vik-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two pieces of evidence that Vikings settled in Britain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viking evidence",
                statement: "Place names, archaeology, records.",
              },
            ],
            steps: [
              {
                reasoning: "Place names ending in '-by', '-thorpe'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Archaeological finds — ships, weapons, settlements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Written records and sagas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Place names+archaeology+records",
            commonErrors: ["Only one type."],
          },
        },
        {
          id: "edxph-u3-vik-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the Vikings influenced England despite eventually losing control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viking legacy",
                statement: "Place names, words, genes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Many English words from Old Norse — 'sky', 'leg', 'window'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Place names ending '-by', '-thorpe'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Genetic and cultural influence on English people.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Words+place names+culture",
            commonErrors: ["No lasting influence."],
          },
        },
      ],
    },
    {
      id: "edxph-u3-edgar",
      title: "Unifying England",
      skill: "Describe how England became united under one king.",
      lesson: {
        sections: [
          {
            heading: "Æthelstan and Edgar",
            body: "After Viking pressure, English kings gradually united the kingdoms. Æthelstan (r. 924-939) conquered Viking York and became 'King of all Britain' — first to rule all of England. Edgar the Peaceful (r. 959-975) further consolidated power. By 954 the Danelaw was absorbed. England became a single kingdom for the first time.",
          },
          {
            heading: "The problem of succession",
            body: "Unification created a new problem: who would be king next? Anglo-Saxon tradition allowed multiple claimants — cousins, brothers, uncles all had rights. This caused frequent disputes and wars. The lack of clear succession rules meant every king's death risked civil war — a problem that would continue into the Norman period.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Who was the first king of all England?",
          solution: "Æthelstan (924-939).",
        },
      },
      questions: [
        {
          id: "edxph-u3-uni-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who was the first king of all England?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alfred" },
              { id: "b", text: "Æthelstan" },
              { id: "c", text: "William" },
              { id: "d", text: "Harold" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First king of England",
                statement: "Æthelstan.",
              },
            ],
            steps: [
              { reasoning: "Æthelstan = first.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Æthelstan",
            commonErrors: ["Wrong king."],
          },
        },
        {
          id: "edxph-u3-uni-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why was unification of England important?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It made everyone rich" },
              { id: "b", text: "It created one kingdom instead of many" },
              { id: "c", text: "It ended all wars" },
              { id: "d", text: "It was accidental" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unification",
                statement: "One kingdom.",
              },
            ],
            steps: [
              { reasoning: "One kingdom = united.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** One kingdom",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edxph-u3-uni-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the problem of succession in Anglo-Saxon England.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Succession",
                statement: "Multiple claimants → disputes.",
              },
            ],
            steps: [
              {
                reasoning: "No clear rules — cousins/brothers could claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Led to disputes and civil wars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Problem continued into Norman period.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Multiple claims → wars",
            commonErrors: ["No problem identified."],
          },
        },
        {
          id: "edxph-u3-uni-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How did Viking pressure contribute to the unification of England?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vikings and unification",
                statement: "Common enemy → unity.",
              },
            ],
            steps: [
              {
                reasoning: "Viking raids threatened all kingdoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Kings cooperated to fight common enemy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Successive kings (Alfred, Æthelstan) unified England.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Common enemy → cooperation → unity",
            commonErrors: ["No causal link."],
          },
        },
      ],
    },
    {
      id: "edxph-u3-alfred",
      title: "Alfred the Great",
      skill: "Describe Alfred's achievements as King of Wessex.",
      lesson: {
        sections: [
          {
            heading: "Alfred the Great",
            body: "Alfred (r. 871-899) was King of Wessex — the only English king called 'the Great'. He fought the Vikings, won key battles, and made peace dividing England. He promoted learning — established schools, translated books into English, and encouraged writing in English rather than Latin. He is famous for the story of burning the cakes while hiding from Vikings.",
          },
          {
            heading: "Legacy",
            body: "Alfred's reign saved Wessex from Viking conquest and laid foundations for a united England. His emphasis on learning and law strengthened the kingdom. The Anglo-Saxon Chronicle — a record of English history — was started during his reign. He is remembered as a just king who cared for his people.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is Alfred called 'the Great'?",
          solution: "He defended England, promoted learning and justice.",
        },
      },
      questions: [
        {
          id: "edxph-u3-alf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which kingdom did Alfred rule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mercia" },
              { id: "b", text: "Wessex" },
              { id: "c", text: "Northumbria" },
              { id: "d", text: "Kent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alfred",
                statement: "King of Wessex.",
              },
            ],
            steps: [{ reasoning: "Wessex = Alfred.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Wessex",
            commonErrors: ["Wrong kingdom."],
          },
        },
        {
          id: "edxph-u3-alf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is Alfred called 'the Great'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He was very tall" },
              { id: "b", text: "He defended England and promoted learning" },
              { id: "c", text: "He conquered France" },
              { id: "d", text: "He built castles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alfred",
                statement: "Defence + learning.",
              },
            ],
            steps: [
              {
                reasoning: "Defence+learning = Great.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Defence+learning",
            commonErrors: ["Wrong reasons."],
          },
        },
        {
          id: "edxph-u3-alf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two of Alfred's achievements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alfred's achievements",
                statement: "Military + education.",
              },
            ],
            steps: [
              {
                reasoning: "Achievement 1 — fought Vikings, won battles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Achievement 2 — promoted learning, schools, English writing.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. Vikings+learning",
            commonErrors: ["Not Alfred's."],
          },
        },
        {
          id: "edxph-u3-alf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why was Alfred's promotion of learning important for England?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Learning's importance",
                statement: "Knowledge strengthens kingdoms.",
              },
            ],
            steps: [
              {
                reasoning: "English writing preserved history and culture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Educated people could serve the kingdom better.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set tradition of learning that continued.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Preserved culture+better servants+tradition",
            commonErrors: ["No real reasons."],
          },
        },
      ],
    },
  ],
};
