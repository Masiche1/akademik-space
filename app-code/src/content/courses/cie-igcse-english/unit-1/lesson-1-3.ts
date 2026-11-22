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
            { id: "a", text: "They saved money" },
            { id: "b", text: "It was summer" },
            { id: "c", text: "They bought a seaside house" },
            { id: "d", text: "They painted rooms" },
          ], correctChoiceId: "c" },
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
        {
          id: "ciege-u1-s3-su-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Robot",
            author: "Written for Akademik Space",
            text: "The robot folded the laundry, charged itself and returned to its dock before midnight.",
          },
          stem: "What is the main event in this text?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The laundry was dirty" },
            { id: "b", text: "The robot folded the laundry" },
            { id: "c", text: "It was midnight" },
            { id: "d", text: "The robot has a dock" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Main idea", statement: "Identify the most important event." }],
            steps: [
              { reasoning: "The robot completing its tasks is the main event; charging and docking are details.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The robot folded the laundry",
          },
        },
        {
          id: "ciege-u1-s3-su-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Arrival",
            author: "Written for Akademik Space",
            text: "First the door opened. Then footsteps approached. Finally a voice called her name.",
          },
          stem: "How many sentences does this extract contain?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count sentence boundaries." }],
            steps: [
              { reasoning: "First, Then and Finally each begin a new sentence — 3 in total.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u1-s3-su-q7",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Compass",
            author: "Written for Akademik Space",
            text: "Kofi's uncle, a retired sailor who loved jazz, gave him an old compass. Kofi used it to navigate the maze.",
          },
          stem: "Which detail is least important and should be left out of a summary?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The uncle gave Kofi a compass" },
            { id: "b", text: "The uncle was a retired sailor" },
            { id: "c", text: "The uncle loved jazz" },
            { id: "d", text: "The compass helped Kofi navigate" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Selecting key points", statement: "Omit minor, irrelevant detail." }],
            steps: [
              { reasoning: "Loving jazz does not affect the main events.", marks: 1, markCode: "AO1" },
              { reasoning: "The compass and its use are essential; the sailor background adds context.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The uncle loved jazz",
          },
        },
        {
          id: "ciege-u1-s3-su-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Hike",
            author: "Written for Akademik Space",
            text: "The hike took three hours. They climbed two hills and crossed one river.",
          },
          stem: "How many numbers appear in this extract?",
          response: { type: "numeric", parts: [
            { label: "Numbers", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Identify numerical detail." }],
            steps: [
              { reasoning: "'Three', 'two' and 'one' are the three numbers.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u1-s3-su-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Picnic",
            author: "Written for Akademik Space",
            text: "Although the rain ruined the picnic, everyone agreed it had been a wonderful day.",
          },
          stem: "What is the main point to include in a summary?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The picnic was ruined by rain" },
            { id: "b", text: "They ate sandwiches" },
            { id: "c", text: "The rain was very heavy" },
            { id: "d", text: "Everyone enjoyed the day despite the rain" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Main idea", statement: "Balance the contrast in the text." }],
            steps: [
              { reasoning: "The 'although' clause is outweighed by 'everyone agreed it had been wonderful'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Everyone enjoyed the day despite the rain",
          },
        },
        {
          id: "ciege-u1-s3-su-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Repair",
            author: "Written for Akademik Space",
            text: "The crew repaired the engine. The ship sailed at dawn.",
          },
          stem: "How many sentences are there in this extract, and how many full stops?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 2 },
            { label: "Full stops", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Punctuation marks sentence ends." }],
            steps: [
              { reasoning: "Two full stops divide the text into two sentences.", marks: 1, markCode: "AO1" },
              { reasoning: "Both sentences end with a full stop — 2 in total.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2 sentences, 2 full stops",
          },
        },
        {
          id: "ciege-u1-s3-su-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Cancellation",
            author: "Written for Akademik Space",
            text: "The festival was cancelled due to storms. Organisers promised refunds within ten days.",
          },
          stem: "Write a one-sentence summary of this text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summary", statement: "Main event + outcome, one sentence." }],
            steps: [
              { reasoning: "Includes the main event: the festival was cancelled.", marks: 1, markCode: "AO1" },
              { reasoning: "Includes the outcome: refunds promised.", marks: 1, markCode: "AO1" },
              { reasoning: "Written as a single sentence in your own words.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The festival was cancelled and refunds were promised.",
          },
        },
        {
          id: "ciege-u1-s3-su-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Concert",
            author: "Written for Akademik Space",
            text: "Maria practised daily for months. On the night of the concert, her voice shook — but she sang beautifully anyway.",
          },
          stem: "Which sentence best summarises the passage?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Maria was too nervous to sing" },
            { id: "b", text: "The concert was cancelled" },
            { id: "c", text: "Maria's months of practice paid off" },
            { id: "d", text: "Maria sang badly" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Main idea", statement: "Balance cause and result." }],
            steps: [
              { reasoning: "Practice is followed by a successful performance — the key connection.", marks: 1, markCode: "AO1" },
              { reasoning: "Her shaking voice shows nerves, but she still sang beautifully.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Maria's months of practice paid off",
          },
        },
        {
          id: "ciege-u1-s3-su-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "The letter contained three warnings, two requests and one final demand.",
          },
          stem: "How many warnings and how many requests does the letter contain?",
          response: { type: "numeric", parts: [
            { label: "Warnings", answer: 3 },
            { label: "Requests", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Match numbers to items." }],
            steps: [
              { reasoning: "'Three warnings' — 3 warnings.", marks: 1, markCode: "AO1" },
              { reasoning: "'Two requests' — 2 requests (the 'one' is a demand, not a request).", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3 warnings, 2 requests",
          },
        },
        {
          id: "ciege-u1-s3-su-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "After the Exam",
            author: "Written for Akademik Space",
            text: "After the exam, Leo celebrated with his friends at the beach.",
          },
          stem: "What should a summary of this text focus on?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The weather at the beach" },
            { id: "b", text: "Leo celebrating with friends after his exam" },
            { id: "c", text: "The exam questions" },
            { id: "d", text: "What the friends ate" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Main idea", statement: "Keep the key event." }],
            steps: [
              { reasoning: "The single event is Leo celebrating after the exam; other details are absent or minor.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Leo celebrating after his exam",
          },
        },
        {
          id: "ciege-u1-s3-su-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Museum",
            author: "Written for Akademik Space",
            text: "The museum displayed pottery, textiles and photographs from the 1800s.",
          },
          stem: "How many types of objects are listed?",
          response: { type: "numeric", parts: [
            { label: "Object types", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count listed items." }],
            steps: [
              { reasoning: "Pottery, textiles and photographs — 3 types.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u1-s3-su-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Dam",
            author: "Written for Akademik Space",
            text: "The dam was completed two years late and 2 million dollars over budget, yet it now supplies water to three towns.",
          },
          stem: "Write a summary of this sentence in your own words, including what happened and the outcome.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summary", statement: "Events + outcome, own words." }],
            steps: [
              { reasoning: "The dam was finished late and over budget.", marks: 1, markCode: "AO1" },
              { reasoning: "Despite this, it now supplies water to three towns.", marks: 1, markCode: "AO1" },
              { reasoning: "All expressed in your own words.", marks: 1, markCode: "AO1" },
              { reasoning: "The 'yet' contrast is preserved.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Dam late and over budget but now supplies three towns.",
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
            { id: "a", text: "Ate breakfast" },
            { id: "b", text: "Caught the bus" },
            { id: "c", text: "Got dressed" },
            { id: "d", text: "Woke at six" },
          ], dorrectChoiceId: "c" },
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
        {
          id: "ciege-u1-s3-se-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Getting Ready",
            author: "Written for Akademik Space",
            text: "Amina finished her homework. She packed her bag. Then she left for school.",
          },
          stem: "What did Amina do last?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Packed her bag" },
            { id: "b", text: "Finished her homework" },
            { id: "c", text: "Went to sleep" },
            { id: "d", text: "Left for school" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "Identify last event." }],
            steps: [
              { reasoning: "'Then she left for school' comes last in the sequence.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Left for school",
          },
        },
        {
          id: "ciege-u1-s3-se-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Flower",
            author: "Written for Akademik Space",
            text: "The seed was planted in spring. It grew all summer. By autumn it had flowered.",
          },
          stem: "How many sentences does this extract contain?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count sentence boundaries." }],
            steps: [
              { reasoning: "Three full stops mark three sentences.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u1-s3-se-q7",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Before the Guests",
            author: "Written for Akademik Space",
            text: "Before the guests arrived, Lena had cleaned the house and set the table.",
          },
          stem: "Which action happened first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The house was dirty" },
            { id: "b", text: "Lena cleaned the house" },
            { id: "c", text: "The guests arrived" },
            { id: "d", text: "Lena set the table" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Past perfect", statement: "'Had done' signals the earlier action." }],
            steps: [
              { reasoning: "'Before the guests arrived' sets the guests' arrival later.", marks: 1, markCode: "AO1" },
              { reasoning: "'Had cleaned' is past perfect — it happened first.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Lena cleaned the house",
          },
        },
        {
          id: "ciege-u1-s3-se-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Cinema",
            author: "Written for Akademik Space",
            text: "The film starts at eight. The interval is at half past.",
          },
          stem: "How many times are mentioned in this extract?",
          response: { type: "numeric", parts: [
            { label: "Times", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Identify time references." }],
            steps: [
              { reasoning: "'Eight' and 'half past' are the two times mentioned.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u1-s3-se-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Stories",
            author: "Written for Akademik Space",
            text: "Meanwhile, across the city, Tom was still asleep.",
          },
          stem: "What does 'meanwhile' signal?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A flashback" },
            { id: "b", text: "The end of the story" },
            { id: "c", text: "Something that happened earlier" },
            { id: "d", text: "Something happening at the same time elsewhere" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sequencing words", statement: "'Meanwhile' marks parallel time." }],
            steps: [
              { reasoning: "'Meanwhile' and 'across the city' show a simultaneous event elsewhere.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Same time elsewhere",
          },
        },
        {
          id: "ciege-u1-s3-se-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Cooking Pasta",
            author: "Written for Akademik Space",
            text: "First she boiled the water. Next she added the pasta. Finally she drained it.",
          },
          stem: "How many sequence words appear, and how many steps are described?",
          response: { type: "numeric", parts: [
            { label: "Sequence words", answer: 3 },
            { label: "Steps", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Sequence words", statement: "First, next, finally order events." }],
            steps: [
              { reasoning: "First, next and finally are the 3 sequence words.", marks: 1, markCode: "AO1" },
              { reasoning: "Each sequence word introduces one step — 3 steps.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3 sequence words, 3 steps",
          },
        },
        {
          id: "ciege-u1-s3-se-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Parcel",
            author: "Written for Akademik Space",
            text: "The doorbell rang. Grandad opened it to find a parcel addressed to him — though he had ordered nothing.",
          },
          stem: "List the events of this extract in the order they happened, using your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "Chronological order." }],
            steps: [
              { reasoning: "The doorbell rang first.", marks: 1, markCode: "AO1" },
              { reasoning: "Grandad opened the door and found the parcel.", marks: 1, markCode: "AO1" },
              { reasoning: "Events are given in correct chronological order.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Doorbell → opened door → found parcel",
          },
        },
        {
          id: "ciege-u1-s3-se-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Snowman",
            author: "Written for Akademik Space",
            text: "He had never seen snow before that winter. Now, decades later, he watched his grandson build a snowman.",
          },
          stem: "How does the writer move between different times in this extract?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The story is set in the future" },
            { id: "b", text: "There is no time reference" },
            { id: "c", text: "From a past winter to the present day" },
            { id: "d", text: "Only the present is described" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time shift", statement: "Past perfect looks backwards." }],
            steps: [
              { reasoning: "'That winter' and 'had never seen' refer to the past.", marks: 1, markCode: "AO3" },
              { reasoning: "'Now, decades later' returns to the present.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Past winter → present day",
          },
        },
        {
          id: "ciege-u1-s3-se-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Novel",
            author: "Written for Akademik Space",
            text: "The novel opens in 1990, flashes back to 1975, and returns to the present day.",
          },
          stem: "How many years are mentioned, and how many distinct time periods are described?",
          response: { type: "numeric", parts: [
            { label: "Years", answer: 2 },
            { label: "Time periods", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Time structure", statement: "Flashes back signal earlier periods." }],
            steps: [
              { reasoning: "1990 and 1975 are the two years mentioned.", marks: 1, markCode: "AO1" },
              { reasoning: "1990, 1975 and the present day are three time periods.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2 years, 3 periods",
          },
        },
        {
          id: "ciege-u1-s3-se-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Bell",
            author: "Written for Akademik Space",
            text: "The bell rang. Students rushed to class.",
          },
          stem: "What happened first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The bell rang" },
            { id: "b", text: "The bell stopped" },
            { id: "c", text: "Students rushed" },
            { id: "d", text: "Class began" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "First listed event comes first." }],
            steps: [
              { reasoning: "The text lists the bell ringing before students rushed.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The bell rang",
          },
        },
        {
          id: "ciege-u1-s3-se-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Routine",
            author: "Written for Akademik Space",
            text: "After breakfast, lunch and dinner, he finally slept.",
          },
          stem: "How many meals are mentioned?",
          response: { type: "numeric", parts: [
            { label: "Meals", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count listed items." }],
            steps: [
              { reasoning: "Breakfast, lunch and dinner — 3 meals.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u1-s3-se-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Hidden Key",
            author: "Written for Akademik Space",
            text: "She locked the door. Earlier that morning, she had hidden the key under the mat.",
          },
          stem: "Explain which action happened first and how you know. What effect does this order have on the reader?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Past perfect", statement: "Earlier action revealed after." }],
            steps: [
              { reasoning: "Hiding the key happened first.", marks: 1, markCode: "AO1" },
              { reasoning: "'Had hidden' is past perfect — signals the earlier action.", marks: 1, markCode: "AO3" },
              { reasoning: "'Earlier that morning' confirms the time gap.", marks: 1, markCode: "AO3" },
              { reasoning: "The delayed reveal creates suspense about the key's purpose.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Key hidden first — past perfect reveals it",
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
