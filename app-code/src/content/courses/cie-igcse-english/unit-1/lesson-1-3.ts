import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ciege-u1-lesson-1-3",
  code: "1-3",
  title: "Summary and Sequencing",
  goal: "I CAN summarise a passage and order events accurately.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 2: summary"],
  vocabulary: [
    { term: "Summary", definition: "The main points of a text in your own words." },
    { term: "Sequence", definition: "The order in which events happen." },
    { term: "Chronological", definition: "In time order." },
    { term: "Key event", definition: "An event essential to understanding the text." },
    { term: "Paraphrase", definition: "Restating in different words." },
  ],
  concepts: [
    {
      id: "ciege-u1-s3-summary",
      title: "Writing summaries",
      skill: "Condense a passage keeping only key information.",
      lesson: {
        sections: [
          {
            heading: "What to include",
            body: "A summary keeps the main events, people and outcomes — not every detail. Use your own words where possible, and keep it much shorter than the original.",
          },
          {
            heading: "What to leave out",
            body: "Leave out examples, descriptions, repetition and minor details. Do not add your own opinions or information not in the text.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Summarise: 'After years of saving, the family finally bought a small house by the sea. They moved in during spring and spent the summer painting the rooms.'",
          solution: "The family bought a seaside house and moved in during spring.",
        },
      },
      questions: [
        {
          id: "ciege-u1-s3-su-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Move",
            author: "Written for Akademik Space",
            text: "After years of saving, the family finally bought a small house by the sea. They moved in during spring and spent the summer painting the rooms.",
          },
          stem: "What is the main event in this text?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They painted rooms" }, { id: "b", text: "They bought a seaside house" }, { id: "c", text: "They saved money" }, { id: "d", text: "It was summer" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Main idea", statement: "Identify the most important event." }],
            steps: [
              { reasoning: "The key event is buying the house; painting is a detail.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "They bought a seaside house",
          },
        },
        {
          id: "ciege-u1-s3-su-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Move",
            author: "Written for Akademik Space",
            text: "After years of saving, the family finally bought a small house by the sea. They moved in during spring and spent the summer painting the rooms.",
          },
          stem: "Write a one-sentence summary of the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summary", statement: "Main event only, own words." }],
            steps: [
              { reasoning: "Includes the main event: buying/moving into the house.", marks: 1, markCode: "AO1" },
              { reasoning: "One sentence, no unnecessary detail.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The family bought and moved into a seaside house.",
          },
        },
        {
          id: "ciege-u1-s3-su-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Race",
            author: "Written for Akademik Space",
            text: "Nadia warmed up, lined up at the start, and took off fast. By the second lap she was ahead, but on the final bend her shoe came loose. She stopped, retied it quickly, and still finished second.",
          },
          stem: "Summarise the race in no more than 25 words.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Concise summary", statement: "Key events only, within limit." }],
            steps: [
              { reasoning: "Nadia ran well and led early.", marks: 1, markCode: "AO1" },
              { reasoning: "Her shoe came loose; she retied and finished second.", marks: 1, markCode: "AO1" },
              { reasoning: "Under 25 words, own words.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Nadia led but her shoe came loose; she retied it and finished second.",
          },
        },
        {
          id: "ciege-u1-s3-su-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Rescue",
            author: "Written for Akademik Space",
            text: "At dawn the lifeboat crew spotted a yacht drifting without power. They towed it slowly into the harbour as the wind rose. The relieved owner met them on the quay and thanked them for their courage.",
          },
          stem: "Write a summary of the passage in your own words, including what happened and how it ended.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summary", statement: "Events + outcome, own words." }],
            steps: [
              { reasoning: "Lifeboat crew found a drifting yacht.", marks: 1, markCode: "AO1" },
              { reasoning: "They towed it into harbour.", marks: 1, markCode: "AO1" },
              { reasoning: "Owner thanked them — resolved safely.", marks: 1, markCode: "AO1" },
              { reasoning: "All in own words, no copied phrases.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Crew rescued drifting yacht; owner thanked them.",
          },
        },
      ],
    },
    {
      id: "ciege-u1-s3-sequence",
      title: "Sequencing events",
      skill: "Order events and explain narrative sequence at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Ordering events",
            body: "Sequencing questions ask you to put events in order or identify what happened first/next/last. Use time words (then, after, finally) and the logic of cause and effect.",
          },
          {
            heading: "Flashbacks and shifts",
            body: "Writers sometimes jump in time. Watch for 'earlier', 'meanwhile' or past perfect ('had left') which signals a shift backwards.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Order: 'She locked the door. She had checked the windows earlier.' Which happened first?",
          solution: "Checking the windows happened first — 'had checked' is past perfect, showing it came before locking.",
        },
      },
      questions: [
        {
          id: "ciege-u1-s3-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Morning Routine",
            author: "Written for Akademik Space",
            text: "Ella woke at six, got dressed, ate breakfast, and then caught the bus to school.",
          },
          stem: "What did Ella do first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ate breakfast" }, { id: "b", text: "Caught the bus" }, { id: "c", text: "Woke at six" }, { id: "d", text: "Got dressed" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "Identify first event." }],
            steps: [
              { reasoning: "The text lists 'woke at six' first.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Woke at six",
          },
        },
        {
          id: "ciege-u1-s3-se-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "The wind rose, the power failed, and the family lit candles. By midnight the storm had passed and the lights flickered back on.",
          },
          stem: "Put these in order: lights came back on, power failed, candles lit.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "Order by time words." }],
            steps: [
              { reasoning: "Power failed first.", marks: 1, markCode: "AO1" },
              { reasoning: "Candles lit, then lights came back on.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Power failed → candles → lights on",
          },
        },
        {
          id: "ciege-u1-s3-se-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Discovery",
            author: "Written for Akademik Space",
            text: "Years earlier, Dr Chen had discovered the cave. Now, standing at its entrance, she felt the same excitement she had felt as a student.",
          },
          stem: "Explain how the writer moves between past and present in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time shift", statement: "Past perfect signals earlier time." }],
            steps: [
              { reasoning: "'Years earlier... had discovered' looks back.", marks: 1, markCode: "AO3" },
              { reasoning: "'Now, standing...' returns to present.", marks: 1, markCode: "AO3" },
              { reasoning: "The shift connects past achievement to present feeling.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Flashback then present",
          },
        },
        {
          id: "ciege-u1-s3-se-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Journey",
            author: "Written for Akademik Space",
            text: "The train pulled out of the station. Half an hour later, passengers stretched and gathered bags. At the border, officials checked passports before the journey continued into the hills.",
          },
          stem: "Write the three main stages of the journey in order, using your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "Chronological order, own words." }],
            steps: [
              { reasoning: "Train leaves the station.", marks: 1, markCode: "AO1" },
              { reasoning: "Passengers prepare; border check happens.", marks: 1, markCode: "AO1" },
              { reasoning: "Journey continues into the hills.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct chronological order.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Departure → border check → hills",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u1-s3-sumseq-notes",
      title: "Summary and sequencing — revision notes",
      summary: "Key events only, chronological order, time shifts.",
      sections: [
        { heading: "Summary", body: "Keep main events and outcomes; drop detail and opinion. Always shorter than the original." },
        { heading: "Sequencing", body: "Watch for time words and past perfect ('had done') which signal earlier events." },
      ],
    },
  ],
};
