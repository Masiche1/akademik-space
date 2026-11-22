import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ciege-u1-lesson-1-1",
  code: "1-1",
  title: "Literal and Inferred Comprehension",
  goal: "I CAN answer literal and inference questions on an unseen passage.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 2: reading"],
  vocabulary: [
    { term: "Literal", definition: "What the text states directly." },
    { term: "Inference", definition: "What you work out from clues in the text." },
    { term: "Evidence", definition: "Words or details from the text supporting an answer." },
    { term: "Passage", definition: "A section of text set for reading questions." },
    { term: "Unseen text", definition: "A passage you have not read before." },
  ],
  concepts: [
    {
      id: "ciege-u1-s1-literal",
      title: "Literal comprehension",
      skill: "Find answers directly stated in the text.",
      lesson: {
        sections: [
          {
            heading: "Finding literal answers",
            body: "Literal questions ask who, what, where, when and how. The answer is in the text — scan for key words from the question, then quote or refer to the relevant words.",
          },
          {
            heading: "Answering precisely",
            body: "Answer in the same tense and detail as the question. If asked 'where', give a place; if asked 'what', give the thing or action.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'Priya kept the letter in her desk drawer.' Where did Priya keep the letter?",
          solution: "In her desk drawer — quote the words 'in her desk drawer'.",
        },
      },
      questions: [
        {
          id: "ciege-u1-s1-li-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Crossing",
            author: "Written for Akademik Space",
            text: "Every morning, Daniel walked along the river path to the old stone bridge. He liked to watch the herons stand perfectly still in the shallows while the water lapped at his boots.",
          },
          stem: "Where does Daniel walk every morning?",
          response: { type: "mcq", choices: [
            { id: "a", text: "By the sea" },
            { id: "b", text: "Along the river path" },
            { id: "c", text: "Through the park" },
            { id: "d", text: "Across the bridge" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the answer stated in the text." }],
            steps: [
              { reasoning: "The text says 'walked along the river path'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Along the river path",
          },
        },
        {
          id: "ciege-u1-s1-li-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Crossing",
            author: "Written for Akademik Space",
            text: "Every morning, Daniel walked along the river path to the old stone bridge. He liked to watch the herons stand perfectly still in the shallows while the water lapped at his boots.",
          },
          stem: "What did Daniel like to watch?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Refer to the stated detail." }],
            steps: [
              { reasoning: "The text says he liked to watch the herons.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: the herons standing in the shallows.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The herons",
          },
        },
        {
          id: "ciege-u1-s1-li-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Crossing",
            author: "Written for Akademik Space",
            text: "Every morning, Daniel walked along the river path to the old stone bridge. He liked to watch the herons stand perfectly still in the shallows while the water lapped at his boots.",
          },
          stem: "Describe where Daniel walks, quoting two details from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal detail", statement: "Quote or refer to two stated details." }],
            steps: [
              { reasoning: "Detail 1: 'river path'.", marks: 1, markCode: "AO1" },
              { reasoning: "Detail 2: 'old stone bridge' or 'shallows'.", marks: 1, markCode: "AO1" },
              { reasoning: "Both details are accurate to the text.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "river path, old stone bridge",
          },
        },
        {
          id: "ciege-u1-s1-li-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "When the postman knocked, Amara knew before she opened the door that the envelope was thick and cream-coloured. She carried it to the kitchen table and slit it open carefully with a butter knife.",
          },
          stem: "What did Amara do after the postman knocked? Give two details.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing detail", statement: "Order the actions accurately." }],
            steps: [
              { reasoning: "She knew the envelope was thick and cream-coloured before opening the door.", marks: 1, markCode: "AO1" },
              { reasoning: "She carried it to the kitchen table.", marks: 1, markCode: "AO1" },
              { reasoning: "She slit it open with a butter knife.", marks: 1, markCode: "AO1" },
              { reasoning: "Details are in the correct order.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Knew it was thick/cream, carried to table, slit open",
          },
        },
        {
          id: "ciege-u1-s1-li-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Lighthouse",
            author: "Written for Akademik Space",
            text: "Every evening at six, the lighthouse keeper climbed the spiral stairs to the lamp room. He trimmed the wick, polished the great lens, and watched the beam sweep across the dark water.",
          },
          stem: "When did the keeper climb to the lamp room?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Every morning at dawn" },
            { id: "b", text: "Every evening at six" },
            { id: "c", text: "At midnight" },
            { id: "d", text: "At noon" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the stated time." }],
            steps: [
              { reasoning: "The text says 'Every evening at six'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Every evening at six",
          },
        },
        {
          id: "ciege-u1-s1-li-q6",
          difficulty: "foundation",
          totalMarks: 3,
          extract: {
            title: "The Lighthouse",
            author: "Written for Akademik Space",
            text: "Every evening at six, the lighthouse keeper climbed the spiral stairs to the lamp room. He trimmed the wick, polished the great lens, and watched the beam sweep across the dark water.",
          },
          stem: "What did the keeper do in the lamp room? Give three details.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal detail", statement: "Three stated actions." }],
            steps: [
              { reasoning: "He trimmed the wick.", marks: 1, markCode: "AO1" },
              { reasoning: "He polished the great lens.", marks: 1, markCode: "AO1" },
              { reasoning: "He watched the beam sweep across the water.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Trimmed wick, polished lens, watched beam",
          },
        },
        {
          id: "ciege-u1-s1-li-q7",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The School Play",
            author: "Written for Akademik Space",
            text: "The cast had rehearsed for six weeks. On opening night, Maya forgot her lines in the second act but recovered quickly, and the audience applauded loudly at the final curtain.",
          },
          stem: "Describe what happened on opening night.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal detail", statement: "Sequence the stated events." }],
            steps: [
              { reasoning: "Maya forgot her lines in the second act.", marks: 1, markCode: "AO1" },
              { reasoning: "She recovered quickly.", marks: 1, markCode: "AO1" },
              { reasoning: "The audience applauded loudly at the final curtain.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Forgot lines, recovered, audience applauded",
          },
        },
        {
          id: "ciege-u1-s1-li-q8",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The School Play",
            author: "Written for Akademik Space",
            text: "The cast had rehearsed for six weeks. On opening night, Maya forgot her lines in the second act but recovered quickly, and the audience applauded loudly at the final curtain.",
          },
          stem: "What two things does the writer tell us happened before the play opened? Support with details.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing detail", statement: "Earlier events + details." }],
            steps: [
              { reasoning: "The cast rehearsed for six weeks.", marks: 1, markCode: "AO1" },
              { reasoning: "It was opening night — the performance had begun.", marks: 1, markCode: "AO1" },
              { reasoning: "Two details identified accurately.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer clearly separated from opening-night events.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Six weeks of rehearsal; it was opening night",
          },
        },
        {
          id: "ciege-u1-s1-li-q9",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Old Bicycle",
            author: "Written for Akademik Space",
            text: "Tom's grandfather had taught him to mend bicycles when he was eight. Now, twenty years later, Tom ran his own repair shop and still kept his grandfather's tools on the workbench.",
          },
          stem: "Who taught Tom to mend bicycles?",
          response: { type: "mcq", choices: [
            { id: "a", text: "His father" },
            { id: "b", text: "His teacher" },
            { id: "c", text: "His grandfather" },
            { id: "d", text: "His uncle" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the stated person." }],
            steps: [
              { reasoning: "The text says 'Tom's grandfather had taught him'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "His grandfather",
          },
        },
        {
          id: "ciege-u1-s1-li-q10",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Old Bicycle",
            author: "Written for Akademik Space",
            text: "Tom's grandfather had taught him to mend bicycles when he was eight. Now, twenty years later, Tom ran his own repair shop and still kept his grandfather's tools on the workbench.",
          },
          stem: "How old was Tom when he learned to mend bicycles, and what does he do now?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal detail", statement: "Two stated facts." }],
            steps: [
              { reasoning: "He was eight.", marks: 1, markCode: "AO1" },
              { reasoning: "He now runs his own repair shop.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Eight; runs a repair shop",
          },
        },
        {
          id: "ciege-u1-s1-li-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Library",
            author: "Written for Akademik Space",
            text: "The town library closed at four on Fridays so the staff could restock the shelves and plan the weekend events.",
          },
          stem: "Give two reasons the library closed early on Fridays.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal detail", statement: "Two stated reasons." }],
            steps: [
              { reasoning: "So the staff could restock the shelves.", marks: 1, markCode: "AO1" },
              { reasoning: "So they could plan the weekend events.", marks: 1, markCode: "AO1" },
              { reasoning: "Both reasons come directly from 'so the staff could...'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Restock shelves; plan weekend events",
          },
        },
        {
          id: "ciege-u1-s1-li-q12",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Rainy Match",
            author: "Written for Akademik Space",
            text: "The football match was cancelled because heavy rain had flooded the pitch. Instead, the team spent the afternoon practising penalties in the school gym.",
          },
          stem: "Describe the sequence of events in the text, using three details.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing detail", statement: "Cause, result, alternative." }],
            steps: [
              { reasoning: "Heavy rain flooded the pitch.", marks: 1, markCode: "AO1" },
              { reasoning: "The football match was cancelled.", marks: 1, markCode: "AO1" },
              { reasoning: "The team practised penalties in the school gym.", marks: 1, markCode: "AO1" },
              { reasoning: "Events given in correct order.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Rain flooded pitch → match cancelled → gym practice",
          },
        },
        {
          id: "ciege-u1-s1-li-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Visit",
            author: "Written for Akademik Space",
            text: "When June visited her grandparents, she noticed the house had shrunk since her childhood — the garden was smaller, the stairs creaked louder, and the clock in the hall still ticked as it always had.",
          },
          stem: "What did June notice about the garden?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It had been sold" },
            { id: "b", text: "It was smaller than before" },
            { id: "c", text: "It had grown larger" },
            { id: "d", text: "It was full of flowers" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the stated detail." }],
            steps: [
              { reasoning: "The text says 'the garden was smaller'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "It was smaller than before",
          },
        },
        {
          id: "ciege-u1-s1-li-q14",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Visit",
            author: "Written for Akademik Space",
            text: "When June visited her grandparents, she noticed the house had shrunk since her childhood — the garden was smaller, the stairs creaked louder, and the clock in the hall still ticked as it always had.",
          },
          stem: "Give two details that show what has changed in the house.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal detail", statement: "Two stated changes." }],
            steps: [
              { reasoning: "The garden is smaller.", marks: 1, markCode: "AO1" },
              { reasoning: "The stairs creak louder (or the house had shrunk).", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Smaller garden; louder creaking stairs",
          },
        },
        {
          id: "ciege-u1-s1-li-q15",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Market Stall",
            author: "Written for Akademik Space",
            text: "Every Saturday, Rafi set up his stall before sunrise, arranging crates of oranges and lemons in neat rows. By eight, the first customers were already queuing for the freshest fruit.",
          },
          stem: "List three facts stated about Rafi and his stall.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal detail", statement: "Three stated facts." }],
            steps: [
              { reasoning: "He sets up every Saturday.", marks: 1, markCode: "AO1" },
              { reasoning: "He arranges crates of oranges and lemons in neat rows.", marks: 1, markCode: "AO1" },
              { reasoning: "Customers queue for the fruit by eight.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Saturday stall, fruit in rows, customers queue",
          },
        },
        {
          id: "ciege-u1-s1-li-q16",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "The School Trip",
            author: "Written for Akademik Space",
            text: "The school trip to the science museum began at eight thirty. Students boarded two coaches and travelled for forty minutes. In the museum, they saw a working volcano model, watched a chemistry show, and ate lunch in the cafe before returning at four.",
          },
          stem: "Give four facts stated in the text about the school trip.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal detail", statement: "Four accurate facts." }],
            steps: [
              { reasoning: "The trip was to the science museum.", marks: 1, markCode: "AO1" },
              { reasoning: "It began at eight thirty / students boarded two coaches.", marks: 1, markCode: "AO1" },
              { reasoning: "They saw a volcano model and a chemistry show.", marks: 1, markCode: "AO1" },
              { reasoning: "They ate lunch in the cafe and returned at four.", marks: 1, markCode: "AO1" },
              { reasoning: "All facts accurate to the text.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Museum trip: eight thirty start, volcano + chemistry show, cafe lunch, four return",
          },
        },
      ],
    },
    {
      id: "ciege-u1-s1-inference",
      title: "Inference questions",
      skill: "Infer unstated meaning from textual clues.",
      lesson: {
        sections: [
          {
            heading: "How to infer",
            body: "Inference questions do not have the answer written out. You must combine clues — a character's actions, speech, or describing words — and work out what is suggested.",
          },
          {
            heading: "Supporting inferences",
            body: "Always support your inference with evidence. Quote the clue, then explain what it suggests. 'She clenched her fists' suggests anger even though 'angry' is never written.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'He slammed the door and didn't look back.' How does he feel?",
          solution: "Angry or upset — 'slammed' and 'didn't look back' are the clues.",
        },
      },
      questions: [
        {
          id: "ciege-u1-s1-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Bad News",
            author: "Written for Akademik Space",
            text: "The phone rang twice before anyone answered. When Mara picked it up, her face went pale and she lowered her voice to a whisper.",
          },
          stem: "How does Mara probably feel?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Excited" },
            { id: "b", text: "Bored" },
            { id: "c", text: "Happy" },
            { id: "d", text: "Worried or upset" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Use clues to infer feelings." }],
            steps: [
              { reasoning: "'Face went pale' and 'whisper' suggest bad news; she feels worried or upset.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Worried or upset",
          },
        },
        {
          id: "ciege-u1-s1-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Bad News",
            author: "Written for Akademik Space",
            text: "The phone rang twice before anyone answered. When Mara picked it up, her face went pale and she lowered her voice to a whisper.",
          },
          stem: "Which two details suggest Mara has received bad news?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Clue identification", statement: "Name the clues." }],
            steps: [
              { reasoning: "'Her face went pale'.", marks: 1, markCode: "AO2" },
              { reasoning: "'She lowered her voice to a whisper'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Pale face, whispering",
          },
        },
        {
          id: "ciege-u1-s1-in-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "As the clouds rolled in, the children grabbed their coats and ran inside. Their dog barked anxiously at the thunder, its tail between its legs.",
          },
          stem: "How do the children and the dog react to the storm differently?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparing inference", statement: "Contrast reactions using clues." }],
            steps: [
              { reasoning: "Children 'grabbed their coats and ran inside' — practical reaction.", marks: 1, markCode: "AO2" },
              { reasoning: "Dog 'barked anxiously... tail between legs' — fearful.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear contrast between calm action and fear.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Children practical, dog fearful",
          },
        },
        {
          id: "ciege-u1-s1-in-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Long Wait",
            author: "Written for Akademik Space",
            text: "The queue outside the bakery stretched around the corner. Ravi checked his watch for the fifth time, drumming his fingers on the window ledge, though he had nowhere to be for another hour.",
          },
          stem: "What does Ravi's behaviour tell you about his feelings? Support your answer with two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference with evidence", statement: "Two clues + feeling." }],
            steps: [
              { reasoning: "Clue: 'checked his watch for the fifth time'.", marks: 1, markCode: "AO2" },
              { reasoning: "Clue: 'drumming his fingers'.", marks: 1, markCode: "AO2" },
              { reasoning: "These show impatience or nervousness.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: impatient/nervous, supported by both clues.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Impatient — watch-checking and finger-drumming",
          },
        },
        {
          id: "ciege-u1-s1-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Empty Chair",
            author: "Written for Akademik Space",
            text: "Grandma's chair sat empty at the dinner table. Sam paused at the doorway and looked at it for a long moment before joining them.",
          },
          stem: "Why does Sam look at the empty chair for a long moment?",
          response: { type: "mcq", choices: [
            { id: "a", text: "He is remembering someone who is no longer there" },
            { id: "b", text: "He wants to move the chair" },
            { id: "c", text: "He is deciding where to sit" },
            { id: "d", text: "He is checking the time" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Use clues to infer meaning." }],
            steps: [
              { reasoning: "'Paused' and 'a long moment' suggest sadness or remembrance of someone missing.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "He is remembering someone who is no longer there",
          },
        },
        {
          id: "ciege-u1-s1-in-q6",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Secret Envelope",
            author: "Written for Akademik Space",
            text: "Nadia opened the envelope and read it twice. Then she folded it carefully, put it back inside, and slid it into her bag without telling anyone.",
          },
          stem: "Give two details that suggest Nadia wants to keep the letter to herself.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Clue identification", statement: "Name the clues." }],
            steps: [
              { reasoning: "She 'folded it carefully' and put it back in the envelope.", marks: 1, markCode: "AO2" },
              { reasoning: "She 'did not tell anyone'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Folded it carefully; did not tell anyone",
          },
        },
        {
          id: "ciege-u1-s1-in-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Crowd",
            author: "Written for Akademik Space",
            text: "When the announcement was made, the crowd erupted into cheering. A few people at the back stayed silent, their arms folded tightly across their chests.",
          },
          stem: "What does 'arms folded tightly' most likely suggest about the silent people?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They disapprove of or disagree with what was announced" },
            { id: "b", text: "They are asleep" },
            { id: "c", text: "They are too cold to clap" },
            { id: "d", text: "They are eager for more news" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Interpret body language clues." }],
            steps: [
              { reasoning: "Folded arms and silence contrast with cheering, suggesting disagreement or disapproval.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "They disagree or disapprove",
          },
        },
        {
          id: "ciege-u1-s1-in-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Dance",
            author: "Written for Akademik Space",
            text: "Lena's toes ached and her legs trembled as she waited in the wings. When the music stopped, however, she stood tall and smiled at the audience. Her sister whispered, 'You were brilliant.'",
          },
          stem: "What does the passage suggest about how Lena feels before and after the dance? Support your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference with evidence", statement: "Two feelings + clues." }],
            steps: [
              { reasoning: "Before: 'toes ached' and 'legs trembled' suggest nervousness or fear.", marks: 1, markCode: "AO2" },
              { reasoning: "After: 'stood tall and smiled' suggests pride, relief and happiness.", marks: 1, markCode: "AO2" },
              { reasoning: "Sister's praise ('You were brilliant') confirms she did well.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Nervous before the dance; proud and happy after",
          },
        },
        {
          id: "ciege-u1-s1-in-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Locket",
            author: "Written for Akademik Space",
            text: "She opened the small silver locket, stared at the photograph inside for a moment, and closed it quickly. Her eyes were bright.",
          },
          stem: "What does the writer suggest the photograph means to her?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She plans to sell it" },
            { id: "b", text: "It is damaged" },
            { id: "c", text: "It reminds her of someone dear" },
            { id: "d", text: "It is valuable money" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Interpret emotional clues." }],
            steps: [
              { reasoning: "Staring, closing quickly and bright eyes suggest the photo holds sentimental meaning.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "It reminds her of someone dear",
          },
        },
        {
          id: "ciege-u1-s1-in-q10",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Vigilant Neighbour",
            author: "Written for Akademik Space",
            text: "Every morning, Mr Osei checked the gate twice, set three alarm clocks, and walked the full length of the fence before letting the dog out.",
          },
          stem: "What does Mr Osei's routine suggest about how he feels about his home? Support your answer with two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference with evidence", statement: "Two clues + feeling." }],
            steps: [
              { reasoning: "Clue: he 'checked the gate twice' — suggests caution or suspicion.", marks: 1, markCode: "AO2" },
              { reasoning: "Clue: he 'walked the full length of the fence' — suggests vigilance.", marks: 1, markCode: "AO2" },
              { reasoning: "Inference: he is cautious, worried or protective about his home.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer links both clues to the inferred feeling.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Cautious and protective — repeated checks and fence inspection",
          },
        },
        {
          id: "ciege-u1-s1-in-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Exam",
            author: "Written for Akademik Space",
            text: "Aisha knew the answers to almost every question, but she kept checking each one three times before moving on.",
          },
          stem: "What does Aisha's behaviour most strongly suggest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She is trying to finish early" },
            { id: "b", text: "She has run out of time" },
            { id: "c", text: "She is unsure of her answers" },
            { id: "d", text: "She is careful and wants to be certain" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Interpret behaviour clues." }],
            steps: [
              { reasoning: "Checking each answer three times despite knowing them suggests carefulness rather than doubt.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "She is careful and wants to be certain",
          },
        },
        {
          id: "ciege-u1-s1-in-q12",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Argument",
            author: "Written for Akademik Space",
            text: "'You always do this,' Priya said, setting down her cup with a sharp click. Tom did not answer. He picked up his coat and left the room without a word.",
          },
          stem: "The writer never says directly why they are arguing. What can you infer about their relationship and Tom's feelings? Use the details to support your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference with evidence", statement: "Unstated meaning + clues." }],
            steps: [
              { reasoning: "'You always do this' implies a repeated grievance — the relationship is tense.", marks: 1, markCode: "AO2" },
              { reasoning: "'Sharp click' suggests Priya's anger.", marks: 1, markCode: "AO2" },
              { reasoning: "Tom 'did not answer' and 'left without a word' — cold anger or hurt.", marks: 1, markCode: "AO2" },
              { reasoning: "Inference is supported by quoted details.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Tense relationship; Tom is angry or hurt",
          },
        },
        {
          id: "ciege-u1-s1-in-q13",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Interview",
            author: "Written for Akademik Space",
            text: "When the journalist asked about the fire, the shopkeeper's smile faded. 'I don't want to talk about it,' she said quietly.",
          },
          stem: "What does the shopkeeper's reaction suggest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She enjoys publicity" },
            { id: "b", text: "She is proud of the shop" },
            { id: "c", text: "The fire is a painful memory" },
            { id: "d", text: "She is in a hurry" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Interpret reaction clues." }],
            steps: [
              { reasoning: "Smile fading, refusal to talk and quiet voice suggest the fire is painful or upsetting.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The fire is a painful memory",
          },
        },
        {
          id: "ciege-u1-s1-in-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Two Friends",
            author: "Written for Akademik Space",
            text: "Ben had saved for a year to buy the tickets. When his friend Sam said, 'You'll never get them,' Ben smiled and put the tickets safely in his pocket. That evening he did not answer Sam's calls.",
          },
          stem: "What does Ben's refusal to answer Sam's calls most strongly suggest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "He is angry or hurt by Sam's comment" },
            { id: "b", text: "He lost his phone" },
            { id: "c", text: "He was asleep" },
            { id: "d", text: "He was too busy" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Interpret behavioural clues." }],
            steps: [
              { reasoning: "Ignoring calls after Sam doubted him suggests hurt or anger.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "He is angry or hurt by Sam's comment",
          },
        },
        {
          id: "ciege-u1-s1-in-q15",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Cold Morning",
            author: "Written for Akademik Space",
            text: "Maya pressed her nose to the cold window and watched the rain. She wrapped her arms tightly around herself and wished, for the third time, that she had brought her warm coat.",
          },
          stem: "Name two details that show Maya is cold.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Clue identification", statement: "Name the clues." }],
            steps: [
              { reasoning: "She 'wrapped her arms tightly around herself'.", marks: 1, markCode: "AO2" },
              { reasoning: "She wished she had brought 'her warm coat'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Arms wrapped tight; wished for her warm coat",
          },
        },
        {
          id: "ciege-u1-s1-in-q16",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "The House at the End of the Lane",
            author: "Written for Akademik Space",
            text: "The house had stood empty for years — curtains drawn, garden overgrown. When the new family moved in, the neighbours watched from behind their own curtains. By evening, lights glowed in every room, and one neighbour finally opened her door and waved.",
          },
          stem: "What does the change in the neighbours' behaviour suggest about the new family? Support your answer with clues from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference with evidence", statement: "Change in attitude + clues." }],
            steps: [
              { reasoning: "At first the neighbours 'watched from behind their own curtains' — wary or suspicious.", marks: 1, markCode: "AO2" },
              { reasoning: "'Lights glowed in every room' suggests the house feels welcoming and lived-in.", marks: 1, markCode: "AO2" },
              { reasoning: "The neighbour 'opened her door and waved' — acceptance and friendliness.", marks: 1, markCode: "AO2" },
              { reasoning: "The change from watching secretly to waving shows their attitude shifts.", marks: 1, markCode: "AO2" },
              { reasoning: "Inference is supported by at least two quoted clues.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Neighbours move from wary to welcoming — they accept the new family",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u1-s1-comp-notes",
      title: "Literal and inferred comprehension — revision notes",
      summary: "Finding stated answers, inferring meaning from clues.",
      sections: [
        { heading: "Literal", body: "Answer who/what/where/when/how directly from the text. Quote or closely refer to the wording." },
        { heading: "Inference", body: "Look for action, speech and describing words. Quote the clue, then explain the suggested meaning." },
      ],
    },
  ],
};
