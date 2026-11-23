import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edxph-u2-lesson-2-3",
  code: "2-3",
  title: "Ancient Egypt Deep Dive",
  goal: "I CAN describe Egyptian civilisation in detail.",
  standards: ["Y5-Y6 History", "Ancient Egypt"],
  vocabulary: [
    {
      term: "Pharaoh",
      definition: "The ruler of ancient Egypt, considered a god-king.",
    },
    { term: "Hieroglyphics", definition: "Egyptian picture-writing." },
    { term: "Mummy", definition: "A preserved body wrapped in cloths." },
    { term: "Afterlife", definition: "Life after death in Egyptian belief." },
  ],
  concepts: [
    {
      id: "edxph-u2-egypt",
      title: "Egyptian Society",
      skill: "Describe Egyptian society, religion and daily life.",
      lesson: {
        sections: [
          {
            heading: "Egyptian society",
            body: "Egyptian society was hierarchical — pharaoh at top, then priests, scribes, soldiers, farmers, and slaves at bottom. Most people were farmers growing wheat and barley along the Nile. They paid taxes to the pharaoh. Egyptian women had more rights than in many ancient societies — they could own property and initiate divorce.",
          },
          {
            heading: "Religion and afterlife",
            body: "Egyptians believed in many gods (Ra the sun god, Osiris god of the dead, Isis, Horus). They believed in an afterlife — the soul (ka) needed a preserved body (mummy) and offerings. This is why they built pyramids and made mummies. They believed in judgement — the heart was weighed against a feather of truth.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Who was at the top of Egyptian society?",
          solution: "The pharaoh — considered a god-king.",
        },
      },
      questions: [
        {
          id: "edxph-u2-eg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who was the pharaoh?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A priest" },
              { id: "b", text: "The ruler of Egypt" },
              { id: "c", text: "A farmer" },
              { id: "d", text: "A soldier" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pharaoh",
                statement: "Egyptian ruler.",
              },
            ],
            steps: [{ reasoning: "Pharaoh = ruler.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Ruler",
            commonErrors: ["Wrong role."],
          },
        },
        {
          id: "edxph-u2-eg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is hieroglyphics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of food" },
              { id: "b", text: "Egyptian picture-writing" },
              { id: "c", text: "A weapon" },
              { id: "d", text: "A dance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hieroglyphics",
                statement: "Picture writing.",
              },
            ],
            steps: [
              {
                reasoning: "Hieroglyphics = writing.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Picture-writing",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edxph-u2-eg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the Egyptian belief in the afterlife and how it affected their actions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Afterlife belief",
                statement: "Drove mummification and pyramids.",
              },
            ],
            steps: [
              {
                reasoning: "Believed soul survived death.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Preserved bodies (mummies) for afterlife.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Built pyramids/tombs and made offerings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Afterlife → mummies+pyramids",
            commonErrors: ["No link to actions."],
          },
        },
        {
          id: "edxph-u2-eg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How did the Nile shape Egyptian civilisation? Give two ways.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nile's role",
                statement: "Water, food, transport, calendar.",
              },
            ],
            steps: [
              {
                reasoning: "Provided water for drinking and irrigation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fertile soil from flooding → farming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Transport route and calendar (flood seasons).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Water+soil+transport+calendar",
            commonErrors: ["Only one way."],
          },
        },
      ],
    },
    {
      id: "edxph-u2-compare",
      title: "Comparing Civilisations",
      skill: "Compare features of different ancient civilisations.",
      lesson: {
        sections: [
          {
            heading: "Similarities",
            body: "Ancient civilisations shared features: they developed along rivers, invented writing, built cities, had governments and religions, made tools from metal, and produced art and architecture. Egypt, Mesopotamia, Greece and Rome all had these features — suggesting common human needs drive similar developments.",
          },
          {
            heading: "Differences",
            body: "They differed in: government (Egypt = pharaoh god-king; Athens = democracy; Rome = republic then empire), religion (many gods in Egypt/Greece; monotheism later), achievements (Egypt = pyramids/mummies; Greece = philosophy/democracy; Rome = law/roads), and language (hieroglyphs, Greek alphabet, Latin).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Name one similarity and one difference between Egypt and Greece.",
          solution:
            "Similar: both had gods/religion. Different: Egypt=pharaoh, Greece=democracy.",
        },
      },
      questions: [
        {
          id: "edxph-u2-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did all ancient civilisations have in common?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same language" },
              { id: "b", text: "Writing and cities" },
              { id: "c", text: "Democracy" },
              { id: "d", text: "The same gods" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Civilisation features",
                statement: "Writing+cities universal.",
              },
            ],
            steps: [
              {
                reasoning: "Writing+cities = common.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Writing+cities",
            commonErrors: ["Not universal."],
          },
        },
        {
          id: "edxph-u2-comp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How did Egyptian and Greek government differ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both had kings" },
              { id: "b", text: "Egypt=pharaoh; Greece=democracy" },
              { id: "c", text: "Both had democracy" },
              { id: "d", text: "Neither had government" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Government",
                statement: "Pharaoh vs democracy.",
              },
            ],
            steps: [
              { reasoning: "Egypt vs Greece govt.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pharaoh vs democracy",
            commonErrors: ["Wrong comparison."],
          },
        },
        {
          id: "edxph-u2-comp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one similarity and one difference between two ancient civilisations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Civilisation comparison",
                statement: "Similar+different features.",
              },
            ],
            steps: [
              {
                reasoning: "Similarity — e.g. both had writing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Difference — e.g. Egypt pyramids vs Greece temples.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correctly identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. writing vs achievements",
            commonErrors: ["Two similarities only."],
          },
        },
        {
          id: "edxph-u2-comp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did different civilisations develop in different parts of the world? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Civilisation origins",
                statement: "Environment + resources.",
              },
            ],
            steps: [
              {
                reasoning: "Geography — rivers, climate, resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Contact/isolation — trade spread ideas; isolation created differences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Human choices — beliefs, leaders, inventions.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Geography+contact+choices",
            commonErrors: ["No real reasons."],
          },
        },
      ],
    },
    {
      id: "edxph-u2-sources",
      title: "Learning About Ancient Civilisations",
      skill: "Describe how we know about ancient civilisations.",
      lesson: {
        sections: [
          {
            heading: "Evidence of ancient civilisations",
            body: "We know about ancient civilisations through: written records (hieroglyphs on tomb walls, Greek texts, Roman inscriptions), archaeological finds (mummies, pottery, tools, buildings), art and architecture (pyramids, temples, statues), and later accounts written by other civilisations.",
          },
          {
            heading: "Deciphering ancient writing",
            body: "Hieroglyphics couldn't be read for centuries until the Rosetta Stone was found — it had the same text in hieroglyphs, demotic script and Greek. This let scholars decode hieroglyphs. Cuneiform was decoded similarly. Writing systems are keys to understanding ancient civilisations.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How did scholars learn to read hieroglyphs?",
          solution: "Rosetta Stone had same text in three scripts.",
        },
      },
      questions: [
        {
          id: "edxph-u2-src-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Rosetta Stone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An Egyptian pyramid" },
              { id: "b", text: "A stone with writing in three scripts" },
              { id: "c", text: "A Roman statue" },
              { id: "d", text: "A Greek temple" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rosetta Stone",
                statement: "Key to hieroglyphs.",
              },
            ],
            steps: [
              { reasoning: "Rosetta = decoding key.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Three scripts",
            commonErrors: ["Wrong object."],
          },
        },
        {
          id: "edxph-u2-src-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do we know about ancient civilisations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time machines" },
              { id: "b", text: "Written records and archaeology" },
              { id: "c", text: "Guessing" },
              { id: "d", text: "Dreams" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical evidence",
                statement: "Records + archaeology.",
              },
            ],
            steps: [
              { reasoning: "Records+archaeology.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Records+archaeology",
            commonErrors: ["Invalid methods."],
          },
        },
        {
          id: "edxph-u2-src-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of evidence about ancient civilisations and explain each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ancient evidence",
                statement: "Writing, artefacts, buildings.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence 1, e.g. written records — laws, stories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence 2, e.g. artefacts — tools, pottery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both correctly explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. records+artefacts",
            commonErrors: ["No explanations."],
          },
        },
        {
          id: "edxph-u2-src-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the Rosetta Stone so important for understanding ancient Egypt?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rosetta Stone",
                statement: "Key to deciphering hieroglyphs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It had same text in hieroglyphs, demotic and Greek.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Scholars could use known Greek to decode hieroglyphs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This unlocked thousands of years of Egyptian records.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Decoding key → unlock Egyptian history",
            commonErrors: ["No mechanism explained."],
          },
        },
      ],
    },
  ],
};
