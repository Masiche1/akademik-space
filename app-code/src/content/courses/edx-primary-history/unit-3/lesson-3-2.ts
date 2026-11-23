import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edxph-u3-lesson-3-2",
  code: "3-2",
  title: "The Norman Conquest",
  goal: "I CAN describe the Norman Conquest of 1066 and its impact.",
  standards: ["Y5-Y6 History", "Norman Conquest"],
  vocabulary: [
    {
      term: "Norman",
      definition: "Descendant of Vikings who settled in Normandy, France.",
    },
    {
      term: "Battle of Hastings",
      definition: "1066 battle where William defeated Harold.",
    },
    {
      term: "Domesday Book",
      definition: "1086 survey of all land in England.",
    },
    {
      term: "Feudal system",
      definition: "Medieval system of land ownership and service.",
    },
  ],
  concepts: [
    {
      id: "edxph-u3-1066",
      title: "The Battle of Hastings",
      skill: "Describe events leading to and including 1066.",
      lesson: {
        sections: [
          {
            heading: "Three claimants",
            body: "In 1066 King Edward the Confessor died without an heir. Three men claimed the throne: Harold Godwinson (English earl), William of Normandy (Edward's cousin), and Harald Hardrada of Norway. Harold was crowned king. William and Harald invaded — Harald was defeated by Harold at Stamford Bridge in September 1066.",
          },
          {
            heading: "Battle of Hastings",
            body: "William landed in Sussex on 28 September 1066. On 14 October, the armies met at Battle near Hastings. William's Norman army defeated Harold's English army — Harold was killed (possibly by an arrow in the eye). William was crowned King of England on Christmas Day 1066, becoming William the Conqueror. The conquest changed England forever.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Who won the Battle of Hastings?",
          solution: "William of Normandy.",
        },
      },
      questions: [
        {
          id: "edxph-u3-hast-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What year was the Battle of Hastings?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1215" },
              { id: "b", text: "1066" },
              { id: "c", text: "1485" },
              { id: "d", text: "1666" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Battle of Hastings",
                statement: "1066.",
              },
            ],
            steps: [{ reasoning: "1066 = Hastings.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 1066",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "edxph-u3-hast-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who defeated Harold at Hastings?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "King John" },
              { id: "b", text: "William of Normandy" },
              { id: "c", text: "Richard the Lionheart" },
              { id: "d", text: "Henry VIII" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hastings",
                statement: "William won.",
              },
            ],
            steps: [
              { reasoning: "William = winner.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** William",
            commonErrors: ["Wrong person."],
          },
        },
        {
          id: "edxph-u3-hast-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why 1066 was important in English history.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1066 significance",
                statement: "Changed England forever.",
              },
            ],
            steps: [
              {
                reasoning: "New ruling class — Norman nobles replaced English.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "French language/culture introduced to England.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Castles, feudal system, Domesday Book introduced.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "New class+French culture+castles",
            commonErrors: ["Minor effects only."],
          },
        },
        {
          id: "edxph-u3-hast-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why William's victory at Hastings was so decisive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hastings significance",
                statement: "Decisive because it changed everything.",
              },
            ],
            steps: [
              {
                reasoning: "William controlled England completely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Land redistributed to Norman followers — new elite.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "English institutions replaced by Norman ones — castles, feudalism, law.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Total control+new elite+new institutions",
            commonErrors: ["Only military view."],
          },
        },
      ],
    },
    {
      id: "edxph-u3-norman",
      title: "Norman England",
      skill: "Describe Norman rule and its effects on England.",
      lesson: {
        sections: [
          {
            heading: "Norman control",
            body: "William and his successors controlled England through: castles (built to defend against rebellion — over 500 built), the Domesday Book (1086 survey recording every piece of land and its owner), and the feudal system (land granted in exchange for military service). English nobles were replaced by Norman lords — English became the language of the ordinary people while French was the language of the elite.",
          },
          {
            heading: "Changes to England",
            body: "The Normans changed English law (introducing trial by jury ideas), architecture (Romanesque churches, castles like the Tower of London), and language (thousands of French words entered English). They also built cathedrals and monasteries. England became more centralised and powerful under Norman rule.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What was the Domesday Book?",
          solution: "A survey of all land and owners in England, 1086.",
        },
      },
      questions: [
        {
          id: "edxph-u3-norm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Domesday Book?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A law book" },
              { id: "b", text: "A survey of all land in England" },
              { id: "c", text: "A novel" },
              { id: "d", text: "A battle record" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domesday Book",
                statement: "Land survey.",
              },
            ],
            steps: [
              { reasoning: "Domesday = land survey.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Land survey",
            commonErrors: ["Wrong type."],
          },
        },
        {
          id: "edxph-u3-norm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why did Normans build castles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "For holidays" },
              { id: "b", text: "To control the local population" },
              { id: "c", text: "For farming" },
              { id: "d", text: "As museums" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Castles",
                statement: "Control + defence.",
              },
            ],
            steps: [
              { reasoning: "Castles = control.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Control",
            commonErrors: ["Wrong purpose."],
          },
        },
        {
          id: "edxph-u3-norm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways the Normans changed England.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Norman changes",
                statement: "Language, law, buildings, society.",
              },
            ],
            steps: [
              {
                reasoning: "Change 1, e.g. French language introduced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Change 2, e.g. castles built / law changed.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. French+castles",
            commonErrors: ["Minor changes only."],
          },
        },
        {
          id: "edxph-u3-norm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the feudal system worked in Norman England.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feudalism",
                statement: "Land for service.",
              },
            ],
            steps: [
              {
                reasoning: "King owned all land, granted to nobles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Nobles granted land to knights in exchange for military service.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Knights/peasants worked land in exchange for protection.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "King→nobles→knights→peasants",
            commonErrors: ["Incomplete chain."],
          },
        },
      ],
    },
    {
      id: "edxph-u3-medieval",
      title: "Medieval England",
      skill: "Describe life in medieval England.",
      lesson: {
        sections: [
          {
            heading: "Medieval society",
            body: "Medieval England (1066-1485) was feudal and hierarchical. At top: king, then nobles, knights, clergy, merchants, peasants (majority), and serfs (bound to land). Most people lived in villages, worked the land, and paid rents. The Church was powerful — monasteries owned land, bishops advised kings.",
          },
          {
            heading: "Daily life",
            body: "Medieval life was hard: poor housing (wattle and daub), limited food (bread, pottage), no education for most, and disease. But there were castles, cathedrals, markets, and fairs. The Black Death (1348-1351) killed about a third of England's population — causing labour shortages and social change.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What was the Black Death?",
          solution:
            "A plague that killed about a third of England's population, 1348-1351.",
        },
      },
      questions: [
        {
          id: "edxph-u3-med-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Black Death?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A war" },
              { id: "b", text: "A plague that killed many people" },
              { id: "c", text: "A building" },
              { id: "d", text: "A king" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Black Death",
                statement: "Plague ~1348.",
              },
            ],
            steps: [
              { reasoning: "Black Death = plague.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Plague",
            commonErrors: ["Wrong event."],
          },
        },
        {
          id: "edxph-u3-med-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who were serfs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knights" },
              { id: "b", text: "People bound to the land" },
              { id: "c", text: "Priests" },
              { id: "d", text: "Kings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Serfs",
                statement: "Bound to land.",
              },
            ],
            steps: [{ reasoning: "Serfs = bound.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Bound to land",
            commonErrors: ["Wrong class."],
          },
        },
        {
          id: "edxph-u3-med-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two features of medieval society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Medieval society",
                statement: "Feudal hierarchy, Church power.",
              },
            ],
            steps: [
              {
                reasoning: "Feature 1, e.g. feudal hierarchy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Feature 2, e.g. Church power / most peasants.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. feudal+Church",
            commonErrors: ["Modern features."],
          },
        },
        {
          id: "edxph-u3-med-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two effects of the Black Death on England.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Black Death effects",
                statement: "Population loss → social change.",
              },
            ],
            steps: [
              {
                reasoning: "Killed about a third of population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Labour shortage → workers could demand more.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakened feudal system — serfs gained freedom.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Death+labour shortage+social change",
            commonErrors: ["No effects."],
          },
        },
      ],
    },
    {
      id: "edxph-u3-mag",
      title: "Magna Carta and King John",
      skill: "Describe King John and the Magna Carta.",
      lesson: {
        sections: [
          {
            heading: "King John",
            body: "King John (r. 1199-1216) was unpopular — he lost wars, taxed heavily, and quarrelled with the Church. In 1204 he lost Normandy to France. Barons (nobles) rebelled against him. In 1215 they forced him to agree to the Magna Carta ('Great Charter') at Runnymede — a document limiting the king's power.",
          },
          {
            heading: "Magna Carta's importance",
            body: "Magna Carta established that even the king was subject to the law — no taxation without consent, right to fair trial, protection of church rights. Though often ignored in practice, it became a symbol of liberty and influenced later documents like the US Constitution and the idea of rule of law. It is one of the most important documents in history.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What did the Magna Carta limit?",
          solution: "The power of the king.",
        },
      },
      questions: [
        {
          id: "edxph-u3-mc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Magna Carta?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A battle" },
              { id: "b", text: "A charter limiting the king's power" },
              { id: "c", text: "A castle" },
              { id: "d", text: "A law book" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Magna Carta",
                statement: "Limits king's power.",
              },
            ],
            steps: [
              {
                reasoning: "Magna Carta = limits king.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Limits king",
            commonErrors: ["Wrong type."],
          },
        },
        {
          id: "edxph-u3-mc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why did barons force King John to agree to Magna Carta?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They liked him" },
              { id: "b", text: "He taxed them heavily and ruled badly" },
              { id: "c", text: "They wanted to be king" },
              { id: "d", text: "It was tradition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magna Carta cause",
                statement: "Barons vs bad king.",
              },
            ],
            steps: [
              { reasoning: "Bad rule = rebellion.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Bad rule",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edxph-u3-mc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two principles established by the Magna Carta.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Magna Carta principles",
                statement: "Rule of law, fair trial.",
              },
            ],
            steps: [
              {
                reasoning: "Principle 1 — king subject to law.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Principle 2 — no taxation without consent / fair trial.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. rule of law+fair trial",
            commonErrors: ["Wrong principles."],
          },
        },
        {
          id: "edxph-u3-mc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Magna Carta is still important today.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magna Carta legacy",
                statement: "Rule of law symbol.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Established king subject to law — foundation of democracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Influenced later documents — US Constitution, UN Declaration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Symbol of liberty and justice worldwide.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Rule of law+influence+symbol",
            commonErrors: ["Historical only view."],
          },
        },
      ],
    },
  ],
};
