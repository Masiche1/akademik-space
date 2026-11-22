import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "langab-u5-lesson-5-3",
  code: "5-3",
  title: "Short paragraphs about daily life",
  goal: "I CAN write a short paragraph about my daily routine using correct sentences and linking words.",
  standards: ["Writing", "Reading", "Grammar"],
  vocabulary: [
    { term: "Paragraph", definition: "A group of sentences about one topic." },
    {
      term: "Routine",
      definition:
        "What you do regularly, such as waking up, school and homework.",
    },
    {
      term: "First",
      definition: "The beginning of a sequence; used to start a paragraph.",
    },
    { term: "Then", definition: "Next in order; used to join events." },
    {
      term: "After that",
      definition: "Following an event; used in the middle of a paragraph.",
    },
    { term: "Finally", definition: "The last part; used to end a paragraph." },
  ],
  concepts: [
    {
      id: "langab-u5-paragraph-basics",
      title: "Paragraph structure",
      skill:
        "Write a paragraph with a topic sentence, details and a conclusion.",
      lesson: {
        sections: [
          {
            heading: "What is a paragraph?",
            body: "A paragraph is a group of sentences about **one topic**. It starts with a topic sentence that says what the paragraph is about, then gives details, and ends with a closing sentence. A paragraph is usually 4-6 sentences.",
          },
          {
            heading: "Linking words",
            body: 'Linking words connect ideas: **first**, **then**, **after that**, **next**, **finally**. They show the order of events. Example: "First, I wake up. Then, I have breakfast. After that, I go to school. Finally, I do my homework."',
          },
          {
            heading: "One topic per paragraph",
            body: "Do not mix topics. A paragraph about your morning should not suddenly talk about your holiday. If you change topic, start a new paragraph. Check: does every sentence fit the topic?",
          },
        ],
        keyFormulas: [
          {
            name: "Paragraph structure",
            statement: "Topic sentence + details + closing sentence.",
          },
          {
            name: "Linking words",
            statement: "First / then / after that / next / finally.",
          },
        ],
        workedExample: {
          problem:
            "Write a topic sentence for a paragraph about your morning routine.",
          solution:
            "Every morning I get up at seven o'clock and get ready for school.",
        },
      },
      questions: [
        {
          id: "langab-u5-l53q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many topics should a paragraph have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many topics" },
              { id: "b", text: "One topic" },
              { id: "c", text: "Two or three topics" },
              { id: "d", text: "No topic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paragraph",
                statement: "A paragraph discusses one topic.",
              },
            ],
            steps: [
              {
                reasoning: "A paragraph has one topic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** One topic",
            commonErrors: ["Mixing topics in one paragraph."],
          },
        },
        {
          id: "langab-u5-l53q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Put these sentences in order to make a paragraph: 1) Finally, I go to bed at ten. 2) First, I wake up at seven. 3) Then, I have breakfast and go to school.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequencing",
                statement: "First -> then -> finally.",
              },
            ],
            steps: [
              {
                reasoning: "First comes first: sentence 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then comes next: sentence 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Finally ends: sentence 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2, 3, 1.",
            commonErrors: ["Wrong order of linking words."],
          },
        },
        {
          id: "langab-u5-l53q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the paragraph and answer the questions.",
          extract: {
            title: "My morning",
            author: "Written for Akademik Space",
            text: "I usually get up at seven o'clock. First, I wash and get dressed. Then, I have breakfast with my family. After that, I go to school by bus. I like my morning routine because it is calm.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph comprehension",
                statement: "Find the order of events and the topic.",
              },
            ],
            steps: [
              {
                reasoning: "The writer gets up at seven.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Order: wash/dress -> breakfast -> bus to school.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They like it because it is calm.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer:
              "7 o'clock; wash, breakfast, bus; likes the calm routine.",
            commonErrors: ["Missing the reason for liking it."],
          },
        },
        {
          id: "langab-u5-l53q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a paragraph (5-6 sentences) about your daily routine.",
          parts: [
            {
              label: "a",
              prompt: "Topic sentence: what your routine is like.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Three sentences using first/then/finally.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Closing sentence: why you like or dislike it.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Routine paragraph",
                statement: "Topic sentence + sequenced details + closing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Clear topic sentence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Three sentences with linking words in order.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Closing sentence with a reason.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Topic sentence. (b) 3 linked sentences. (c) Closing.",
            commonErrors: ["No linking words — events feel random."],
          },
        },
        {
          id: "langab-u5-l53q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a topic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question at the start" },
              {
                id: "b",
                text: "The sentence that says what the paragraph is about",
              },
              { id: "c", text: "The last sentence of a paragraph" },
              { id: "d", text: "The longest sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Topic sentence",
                statement: "It introduces the topic of the paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "The topic sentence introduces the subject.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The sentence that says what the paragraph is about",
            commonErrors: ["Confusing it with the closing sentence."],
          },
        },
        {
          id: "langab-u5-l53q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which linking word usually starts a paragraph about a routine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because" },
              { id: "b", text: "Finally" },
              { id: "c", text: "But" },
              { id: "d", text: "First" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Linking words",
                statement: "First starts a sequence; finally ends it.",
              },
            ],
            steps: [
              {
                reasoning: "Sequences begin with First.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** First",
            commonErrors: ["Starting with Finally."],
          },
        },
        {
          id: "langab-u5-l53q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these linking words in the correct order: then / first / finally.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "first, finally, then" },
              { id: "b", text: "then, first, finally" },
              { id: "c", text: "finally, first, then" },
              { id: "d", text: "first, then, finally" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequencing",
                statement: "Order: first -> then -> finally.",
              },
            ],
            steps: [
              {
                reasoning: "First begins the sequence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then follows; finally ends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** first, then, finally",
            commonErrors: ["Putting finally in the middle."],
          },
        },
        {
          id: "langab-u5-l53q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which sentence is the best closing sentence for a paragraph about your morning routine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I get dressed quickly." },
              { id: "b", text: "First, I wake up at seven." },
              { id: "c", text: "I like my morning because it is calm." },
              { id: "d", text: "Then I have breakfast." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Closing sentences",
                statement:
                  "A closing sentence sums up or gives an opinion about the topic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Options (a), (c) and (d) give details, not a conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) gives a final opinion about the routine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** I like my morning because it is calm.",
            commonErrors: ["Choosing a detail sentence as the ending."],
          },
        },
        {
          id: "langab-u5-l53q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A paragraph about 'my morning' suddenly talks about 'my holiday in Spain'. What is wrong?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tense is wrong" },
              { id: "b", text: "There are too many linking words" },
              {
                id: "c",
                text: "Two topics are mixed — it should be two paragraphs",
              },
              { id: "d", text: "Nothing is wrong" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "One topic per paragraph",
                statement: "A new topic needs a new paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "Morning routine and holiday are different topics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They should be split into two paragraphs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Two topics are mixed — it should be two paragraphs",
            commonErrors: ["Missing the topic change."],
          },
        },
        {
          id: "langab-u5-l53q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which is the best topic sentence for a paragraph about your school day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like some things." },
              { id: "b", text: "There are students." },
              {
                id: "c",
                text: "My school day starts at eight and ends at three.",
              },
              { id: "d", text: "School is good." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Topic sentences",
                statement:
                  "A good topic sentence is specific and introduces the topic clearly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option (b) is specific and names the topic: school day.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The other options are too vague.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** My school day starts at eight and ends at three.",
            commonErrors: ["Choosing a vague sentence."],
          },
        },
        {
          id: "langab-u5-l53q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a topic sentence for a paragraph about your evening routine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Topic sentences",
                statement: "One clear sentence introducing the topic.",
              },
            ],
            steps: [
              {
                reasoning: "Sentence introduces the evening routine topic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct English and punctuation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear and specific enough.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "In the evening I do my homework and then relax. (or similar).",
            commonErrors: ["Too vague to introduce the topic."],
          },
        },
        {
          id: "langab-u5-l53q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Put these sentences in order to make a paragraph: 1) Finally, I watch TV. 2) First, I finish my homework. 3) Then, I have dinner.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequencing",
                statement: "First -> then -> finally.",
              },
            ],
            steps: [
              {
                reasoning: "First = homework (sentence 2).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then = dinner (sentence 3).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Finally = TV (sentence 1). Order: 2, 3, 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2, 3, 1.",
            commonErrors: ["Wrong linking word order."],
          },
        },
        {
          id: "langab-u5-l53q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a paragraph of four sentences about what you do at the weekend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Paragraph structure",
                statement: "Topic sentence + details + closing, one topic.",
              },
            ],
            steps: [
              {
                reasoning: "A topic sentence about the weekend.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two or three detail sentences in order.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "A closing sentence; all English correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4-sentence paragraph about the weekend.",
            commonErrors: ["Mixing topics or missing a topic sentence."],
          },
        },
        {
          id: "langab-u5-l53q18",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a five-sentence paragraph about your daily routine using first, then and finally.",
          parts: [
            {
              label: "a",
              prompt: "A topic sentence about your routine.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Three sentences in order with linking words.",
              marks: 2,
            },
            { label: "c", prompt: "A closing sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Routine paragraph",
                statement: "Topic sentence + sequenced details + closing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Clear topic sentence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Three sentences with first/then/finally in order.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Closing sentence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Topic sentence. (b) 3 linked sentences. (c) Closing.",
            commonErrors: ["Linking words out of order."],
          },
        },
        {
          id: "langab-u5-l53q19",
          difficulty: "core",
          totalMarks: 5,
          stem: "Improve this weak paragraph: 'I get up. I eat. I go school. I do things. I sleep.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph improvement",
                statement:
                  "Add a topic sentence, linking words and correct English.",
              },
            ],
            steps: [
              {
                reasoning: "A topic sentence is added.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Linking words added and sentences put in order.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All sentences are correct English.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Topic sentence + first/then/finally + correct sentences.",
            commonErrors: ["Adding linking words but keeping mixed-up order."],
          },
        },
        {
          id: "langab-u5-l53q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a paragraph about a typical school day and then check it against the paragraph checklist.",
          parts: [
            {
              label: "a",
              prompt: "Write the paragraph (5-6 sentences).",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Answer yes/no to: topic sentence? logical order? linking words? correct English?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing with self-check",
                statement:
                  "Write the paragraph, then verify it against the checklist.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Paragraph with topic sentence, details and closing.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Four checklist items answered correctly.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) Paragraph. (b) Checklist answers.",
            commonErrors: ["Skipping the self-check step."],
          },
        },
      ],
    },
    {
      id: "langab-u5-paragraph-writing",
      title: "Writing paragraphs about daily life",
      skill:
        "Write short paragraphs about hobbies, family and school using correct sentence structures.",
      lesson: {
        sections: [
          {
            heading: "Topics for paragraphs",
            body: "Good beginner topics: **my daily routine**, **my family**, **my hobby**, **my school**, **my best friend**, **my favourite food**. Choose something you know well — it is easier to write about.",
          },
          {
            heading: "Sentence variety",
            body: 'Mix simple sentences: "I like football." / "My brother plays tennis." / "We go to the park on Sundays." Use **and** to join: "I like football and tennis." Keep sentences short and clear.',
          },
          {
            heading: "Checking your paragraph",
            body: "Before finishing, check: (1) Does it have a topic sentence? (2) Are the sentences in a logical order? (3) Are there linking words? (4) Is every sentence correct English? Read it aloud to check.",
          },
        ],
        keyFormulas: [
          {
            name: "Paragraph checklist",
            statement:
              "Topic sentence + order + linking words + correct English.",
          },
          {
            name: "Joining with and",
            statement:
              "Subject + verb + noun + and + noun (I like football and tennis).",
          },
        ],
        workedExample: {
          problem: "Write a topic sentence for a paragraph about your hobby.",
          solution: "My hobby is football and I play every week.",
        },
      },
      questions: [
        {
          id: "langab-u5-l53q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a good topic for a beginner paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The meaning of life" },
              { id: "b", text: "My daily routine" },
              { id: "c", text: "Quantum physics" },
              { id: "d", text: "The history of the Roman Empire" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Topic choice",
                statement:
                  "Beginners write best about familiar everyday topics.",
              },
            ],
            steps: [
              {
                reasoning: "Daily routine is familiar and simple.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** My daily routine",
            commonErrors: ["Choosing topics that are too difficult."],
          },
        },
        {
          id: "langab-u5-l53q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a topic sentence for a paragraph about your family.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Topic sentences",
                statement: "One sentence that introduces the topic.",
              },
            ],
            steps: [
              {
                reasoning: "Sentence introduces the family topic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct English and punctuation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Appropriate length and clarity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "My family is big and I love them very much. (or similar).",
            commonErrors: ["Topic sentence that is too vague."],
          },
        },
        {
          id: "langab-u5-l53q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the paragraph and find the topic sentence.",
          extract: {
            title: "My hobby",
            author: "Written for Akademik Space",
            text: "I love playing football. I play every Saturday with my friends at the park. We have a small team and we practice for one hour. Sometimes we play matches on Sundays. Football is fun and keeps me healthy.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying topic sentences",
                statement:
                  "The topic sentence introduces what the paragraph is about.",
              },
            ],
            steps: [
              {
                reasoning: "Topic: playing football / the hobby of football.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: 'Topic sentence: "I love playing football."',
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The other sentences give details.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Correct identification.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "I love playing football.",
            commonErrors: ["Choosing a detail sentence instead."],
          },
        },
        {
          id: "langab-u5-l53q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a paragraph about your best friend (5-6 sentences).",
          parts: [
            {
              label: "a",
              prompt: "Topic sentence with name and relationship.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Three sentences describing appearance and personality.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Closing sentence about why they are special.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Friend paragraph",
                statement: "Name + appearance + personality + reason.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Topic sentence with name.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Three sentences with is/has + adjectives.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Closing with a reason.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Name + relationship. (b) 3 description sentences. (c) Why special.",
            commonErrors: ["No closing sentence."],
          },
        },
        {
          id: "langab-u5-l53q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a good topic for a beginner paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The causes of climate change" },
              { id: "b", text: "The French Revolution" },
              { id: "c", text: "Quantum physics" },
              { id: "d", text: "My favourite food" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Topic choice",
                statement:
                  "Beginners write best about familiar everyday topics.",
              },
            ],
            steps: [
              {
                reasoning: "Favourite food is familiar and simple.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** My favourite food",
            commonErrors: ["Choosing a topic that is too difficult."],
          },
        },
        {
          id: "langab-u5-l53q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence correctly joins two ideas with 'and'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like football and and tennis." },
              { id: "b", text: "I like football tennis and." },
              { id: "c", text: "And I like football tennis." },
              { id: "d", text: "I like football and tennis." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Joining with and",
                statement: "Subject + verb + noun + and + noun.",
              },
            ],
            steps: [
              {
                reasoning: "Only option (a) has correct word order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** I like football and tennis.",
            commonErrors: ["Repeating 'and' or putting it at the end."],
          },
        },
        {
          id: "langab-u5-l53q23",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which sentence does NOT belong in a paragraph about football?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I play every Saturday." },
              { id: "b", text: "My team has ten players." },
              { id: "c", text: "We practise for one hour." },
              { id: "d", text: "I like pizza." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Staying on topic",
                statement: "Every sentence must fit the paragraph's topic.",
              },
            ],
            steps: [
              {
                reasoning: "Pizza is food, not football.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The other sentences are about football.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** I like pizza.",
            commonErrors: ["Not noticing the topic change."],
          },
        },
        {
          id: "langab-u5-l53q24",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which item belongs on the paragraph checklist?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use no punctuation" },
              { id: "b", text: "Use at least ten sentences" },
              { id: "c", text: "Write only questions" },
              { id: "d", text: "Have a topic sentence and linking words" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Paragraph checklist",
                statement:
                  "Topic sentence + order + linking words + correct English.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The checklist includes a topic sentence and linking words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Have a topic sentence and linking words",
            commonErrors: ["Thinking longer is always better."],
          },
        },
        {
          id: "langab-u5-l53q25",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the best closing sentence for a paragraph about your best friend?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "He is my best friend because he always helps me and makes me laugh.",
              },
              { id: "b", text: "My friend is called Tom." },
              { id: "c", text: "We are friends." },
              { id: "d", text: "He is tall and has brown hair." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Closing sentences",
                statement:
                  "A closing sentence gives a reason or final opinion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Options (a), (b) and (d) are details or too simple.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (c) gives a reason why he is special.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** He is my best friend because he always helps me and makes me laugh.",
            commonErrors: ["Choosing a detail instead of a conclusion."],
          },
        },
        {
          id: "langab-u5-l53q26",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which revision makes this sentence clearer? 'My brother is tall and he plays football and he is funny.'",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "My brother is tall and he plays football and he is funny.",
              },
              {
                id: "b",
                text: "My brother is tall, plays football and is funny.",
              },
              { id: "c", text: "Brother tall football funny." },
              { id: "d", text: "My brother tall football funny." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety",
                statement:
                  "Combine ideas smoothly without repeating the subject.",
              },
            ],
            steps: [
              {
                reasoning: "Option (b) joins the ideas with one subject.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (a) repeats 'he'; (c) and (d) are not full sentences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** My brother is tall, plays football and is funny.",
            commonErrors: ["Repeating the subject three times."],
          },
        },
        {
          id: "langab-u5-l53q27",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a topic sentence for a paragraph about your school.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Topic sentences",
                statement: "One clear sentence introducing the topic.",
              },
            ],
            steps: [
              {
                reasoning: "Sentence introduces the school topic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct English and punctuation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Specific enough to guide the paragraph.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "My school is big and I enjoy studying there. (or similar).",
            commonErrors: ["Too vague: 'School is nice.'"],
          },
        },
        {
          id: "langab-u5-l53q28",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three short sentences about your hobby using 'and'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Joining with and",
                statement: "Each sentence joins two ideas correctly.",
              },
            ],
            steps: [
              {
                reasoning: "Three sentences about the hobby.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each uses 'and' correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct spelling and punctuation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "I like football and tennis. I play with friends and family. I watch matches and practise every week.",
            commonErrors: ["Misplaced 'and' or doubled 'and'."],
          },
        },
        {
          id: "langab-u5-l53q29",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a paragraph of 4-5 sentences about your family.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Family paragraph",
                statement: "Topic sentence + details + closing, one topic.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence naming the family topic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Two or three detail sentences about family members.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Closing sentence; correct English throughout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4-5 sentence paragraph about family.",
            commonErrors: ["Drifting to a different topic."],
          },
        },
        {
          id: "langab-u5-l53q30",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a paragraph about your favourite food.",
          parts: [
            {
              label: "a",
              prompt: "Topic sentence plus two detail sentences.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "A closing sentence saying why you like it.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Favourite food paragraph",
                statement: "Name the food + describe it + say why you like it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Topic sentence names the food; two details follow.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Closing gives a reason for liking it.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) Topic + details. (b) Closing with reason.",
            commonErrors: ["No reason in the closing sentence."],
          },
        },
        {
          id: "langab-u5-l53q31",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a paragraph about your school life (5-6 sentences).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "School life paragraph",
                statement: "Topic sentence + ordered details + closing.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence about school life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Three or four detail sentences in logical order.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Linking words used where needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closing sentence and correct English.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5-6 sentence paragraph about school life.",
            commonErrors: ["No order or linking words."],
          },
        },
        {
          id: "langab-u5-l53q32",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a paragraph about yourself (name, family, hobbies, school) and answer the paragraph checklist.",
          parts: [
            {
              label: "a",
              prompt:
                "Write the paragraph (5-6 sentences) covering the four topics.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Answer yes/no to the four checklist items.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph with self-check",
                statement:
                  "Cover the topics clearly, then verify against the checklist.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Paragraph covers name, family, hobbies and school in order.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Four checklist items answered correctly.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) Paragraph. (b) Checklist answers.",
            commonErrors: ["Mixing the four topics randomly."],
          },
        },
      ],
    },
  ],
};
