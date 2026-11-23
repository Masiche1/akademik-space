import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edxph-u2-lesson-2-2",
  code: "2-2",
  title: "The Greeks and Romans",
  goal: "I CAN describe Greek and Roman achievements.",
  standards: ["Y4-Y6 History", "Greece and Rome"],
  vocabulary: [
    {
      term: "Democracy",
      definition: "Government where people vote for their leaders.",
    },
    { term: "Empire", definition: "A group of countries ruled by one power." },
    {
      term: "Republic",
      definition: "A state where citizens elect representatives.",
    },
    {
      term: "Olympics",
      definition: "Ancient Greek games held every four years.",
    },
  ],
  concepts: [
    {
      id: "edxph-u2-greeks",
      title: "Ancient Greece",
      skill: "Describe Greek civilisation and its legacy.",
      lesson: {
        sections: [
          {
            heading: "Greek civilisation",
            body: "Ancient Greece (c. 800-146 BC) was a collection of city-states — Athens, Sparta, Corinth. Athens was famous for democracy — citizens voted on laws. Greece produced philosophers (Socrates, Plato, Aristotle), playwrights (Sophocles), historians (Herodotus), and athletes (Olympic Games). Greek architecture — columns and temples — still influences buildings today.",
          },
          {
            heading: "Greek legacy",
            body: "Greece gave the world: democracy, the Olympic Games, philosophy, theatre, and mathematical ideas (Pythagoras). Greek myths and stories (Zeus, Hercules, Trojan War) still appear in books and films. The Parthenon in Athens is a famous surviving temple.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What did Athens invent that we still use?",
          solution: "Democracy — citizens voting on decisions.",
        },
      },
      questions: [
        {
          id: "edxph-u2-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is democracy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rule by one king" },
              { id: "b", text: "People voting for leaders" },
              { id: "c", text: "Military rule" },
              { id: "d", text: "Rule by priests" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Democracy",
                statement: "People vote.",
              },
            ],
            steps: [
              { reasoning: "Democracy = voting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Voting",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxph-u2-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which city-state is famous for democracy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sparta" },
              { id: "b", text: "Athens" },
              { id: "c", text: "Rome" },
              { id: "d", text: "Carthage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greek city-states",
                statement: "Athens = democracy.",
              },
            ],
            steps: [
              { reasoning: "Athens = democracy.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Athens",
            commonErrors: ["Wrong city."],
          },
        },
        {
          id: "edxph-u2-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two things ancient Greece gave to the modern world.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greek legacy",
                statement: "Democracy, Olympics, philosophy.",
              },
            ],
            steps: [
              {
                reasoning: "Example 1, e.g. democracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example 2, e.g. Olympics or philosophy.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correctly Greek.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. democracy+Olympics",
            commonErrors: ["Not Greek."],
          },
        },
        {
          id: "edxph-u2-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare democracy in ancient Athens with democracy today.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Democracy then vs now",
                statement: "Similar but different.",
              },
            ],
            steps: [
              {
                reasoning: "Similarity — citizens vote on decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Difference — only free male citizens voted then; everyone votes now.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Balanced comparison.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Similar voting; different eligibility",
            commonErrors: ["No comparison."],
          },
        },
      ],
    },
    {
      id: "edxph-u2-romans",
      title: "The Roman Empire",
      skill: "Describe Roman civilisation and its achievements.",
      lesson: {
        sections: [
          {
            heading: "Roman civilisation",
            body: "Rome grew from a small city-state to an empire controlling the Mediterranean and beyond — at its peak ~117 AD it ruled about 5 million km². Romans built roads, aqueducts (water channels), sewers, and cities. They spoke Latin — the ancestor of many modern languages. Roman law and engineering influenced the modern world.",
          },
          {
            heading: "Roman Britain",
            body: "Romans invaded Britain in AD 43 under Emperor Claudius. They built Hadrian's Wall across northern England to defend against northern tribes. Roman Britain had towns (Londinium = London), villas, baths and temples. Romans left for Britain around AD 410. Evidence remains: Roman roads, coins, pottery, and place names.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What was Hadrian's Wall for?",
          solution: "Defending Roman Britain from northern tribes.",
        },
      },
      questions: [
        {
          id: "edxph-u2-rom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did the Romans invade Britain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1066" },
              { id: "b", text: "AD 43" },
              { id: "c", text: "500 BC" },
              { id: "d", text: "AD 1000" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Roman Britain",
                statement: "AD 43.",
              },
            ],
            steps: [
              { reasoning: "AD 43 = invasion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** AD 43",
            commonErrors: ["Wrong date."],
          },
        },
        {
          id: "edxph-u2-rom-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was Hadrian's Wall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Roman road" },
              { id: "b", text: "A defensive wall in northern England" },
              { id: "c", text: "A castle" },
              { id: "d", text: "A temple" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hadrian's Wall",
                statement: "Defensive wall.",
              },
            ],
            steps: [{ reasoning: "Wall = defence.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Defensive wall",
            commonErrors: ["Wrong type."],
          },
        },
        {
          id: "edxph-u2-rom-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two Roman achievements or inventions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Roman achievements",
                statement: "Roads, aqueducts, law, concrete.",
              },
            ],
            steps: [
              {
                reasoning: "Achievement 1, e.g. roads.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Achievement 2, e.g. aqueducts or law.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. roads+aqueducts",
            commonErrors: ["Not Roman."],
          },
        },
        {
          id: "edxph-u2-rom-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two ways the Romans changed Britain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Roman influence",
                statement: "Infrastructure + culture.",
              },
            ],
            steps: [
              {
                reasoning: "Built roads, towns, baths — infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Introduced Latin language, law, customs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Some influences remain today (place names, roads).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Infrastructure+language+legacy",
            commonErrors: ["No lasting effects."],
          },
        },
      ],
    },
    {
      id: "edxph-u2-legacy",
      title: "Classical Legacy",
      skill: "Explain how Greece and Rome influence us today.",
      lesson: {
        sections: [
          {
            heading: "Language",
            body: "Latin (Roman language) is the ancestor of Italian, Spanish, French, Portuguese and Romanian — the 'Romance languages'. English borrowed many Latin words. Roman numerals (I, V, X, L, C, D, M) are still used for clock faces, book chapters and Super Bowls. Many English words come from Latin and Greek roots.",
          },
          {
            heading: "Ideas and culture",
            body: "Greek and Roman ideas still matter: democracy, philosophy, drama/theatre, Olympic Games, architecture (columns, domes), and mythology. Stories like Zeus, Hercules, and the Trojan War appear in modern films and books. Their achievements set foundations for Western civilisation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which modern languages come from Latin?",
          solution: "Italian, Spanish, French, Portuguese, Romanian.",
        },
      },
      questions: [
        {
          id: "edxph-u2-leg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which language did the Romans speak?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Greek" },
              { id: "b", text: "Latin" },
              { id: "c", text: "English" },
              { id: "d", text: "Arabic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Roman language",
                statement: "Latin.",
              },
            ],
            steps: [{ reasoning: "Latin = Roman.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Latin",
            commonErrors: ["Wrong language."],
          },
        },
        {
          id: "edxph-u2-leg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where do we still see Roman influence today?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Roman numerals on clocks" },
              { id: "b", text: "Only in museums" },
              { id: "c", text: "Nowhere" },
              { id: "d", text: "Only in Italy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Roman legacy",
                statement: "Numerals, architecture, ideas.",
              },
            ],
            steps: [
              {
                reasoning: "Numerals = visible legacy.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Roman numerals",
            commonErrors: ["Legacy denied."],
          },
        },
        {
          id: "edxph-u2-leg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two ways Greek or Roman ideas influence modern life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classical influence",
                statement: "Democracy, theatre, architecture.",
              },
            ],
            steps: [
              {
                reasoning: "Example 1, e.g. democracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example 2, e.g. theatre or architecture.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. democracy+theatre",
            commonErrors: ["Not classical."],
          },
        },
        {
          id: "edxph-u2-leg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why were Greece and Rome so influential despite being ancient? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classical influence",
                statement: "Foundations of Western civilisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "They created systems — democracy, law, engineering.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Their ideas were copied and developed by later civilisations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Legacy endures in language, institutions, culture.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Systems+copied ideas+enduring legacy",
            commonErrors: ["No real reasons."],
          },
        },
      ],
    },
  ],
};
