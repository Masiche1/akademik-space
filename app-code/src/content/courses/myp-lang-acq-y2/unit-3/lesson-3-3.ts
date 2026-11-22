import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mla2-u3-lesson-3-3",
  code: "3-3",
  title: "Festivals, Food and Customs Around the World",
  goal: "I CAN talk and write about festivals, food and customs in different cultures, and compare them respectfully.",
  standards: [
    "MYP Language Acquisition",
    "Intercultural understanding",
    "Criterion C: Speaking",
    "Criterion D: Writing",
  ],
  vocabulary: [
    { term: "Festival", definition: "A special celebration or event that happens at a particular time, like Christmas or Eid." },
    { term: "Custom", definition: "A traditional way of doing something in a culture." },
    { term: "Traditional", definition: "Belonging to a culture's long-established ways." },
    { term: "Celebration", definition: "An event for enjoying something special." },
    { term: "Hospitality", definition: "The friendly way people treat guests." },
  ],
  concepts: [
    {
      id: "mla2-u3-festivals-world",
      title: "Festivals and celebrations around the world",
      skill: "Describe festivals in different cultures using simple English and compare them.",
      lesson: {
        sections: [
          {
            heading: "Festivals everywhere",
            body: "Almost every culture has festivals: **Christmas** (Christian countries), **Eid** (Muslim countries), **Diwali** (India and beyond — the festival of lights), **Chinese New Year**, **Hanukkah**, **Oktoberfest** (Germany). Festivals often involve special food, music, lights, gifts and family time. They are a window into a culture's values.",
          },
          {
            heading: "Describing a festival",
            body: "To describe a festival use: **when** it happens ('in December'), **what people do** ('they eat special food', 'they light candles'), and **why** it matters ('to celebrate...'). 'At Diwali, people light lamps and share sweets. It is the festival of lights.' This structure works for any culture.",
          },
          {
            heading: "Comparing festivals respectfully",
            body: "You can compare: 'Christmas is in winter, but Diwali is in autumn.' 'Both festivals involve family.' Use **both...and**, **but**, **similar to**: 'Chinese New Year is similar to our New Year — both are about new beginnings.' Respect means describing, not judging which is 'better'.",
          },
        ],
        keyFormulas: [
          { name: "Festival description", statement: "When + what people do + why it matters" },
          { name: "Comparison", statement: "X is similar to Y; both involve...; X is in..., but Y is in..." },
        ],
        workedExample: {
          problem: "Describe Diwali in two sentences.",
          solution: "'Diwali is the Hindu festival of lights, usually in autumn. People light lamps, share sweets and spend time with family.'",
        },
      },
      questions: [
        {
          id: "mla2-u3-festivals-world-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which festival is known as the 'festival of lights'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diwali" },
              { id: "b", text: "Oktoberfest" },
              { id: "c", text: "Christmas" },
              { id: "d", text: "Eid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "World festivals", statement: "Diwali is the Hindu festival of lights." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — Diwali = festival of lights.", working: "Diwali", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Diwali",
            commonErrors: ["Confusing Diwali with Hanukkah (also lights, but different)."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u3-festivals-world-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe one festival from your culture or one you know, in three sentences: when, what people do, why it matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Festival description", statement: "When + activities + significance." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — names the festival and when it happens.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — describes what people do.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — explains why it matters + correct grammar.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three correct sentences covering when/what/why.",
            commonErrors: ["Only naming the festival with no description."],
            examinerNote: "All three elements needed.",
          },
        },
        {
          id: "mla2-u3-festivals-world-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare two festivals from different cultures in two or three sentences. Use 'but', 'both' or 'similar to'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural comparison", statement: "Compare with linkers; describe differences and similarities respectfully." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — names two real festivals from different cultures.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — states a similarity or difference accurately.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — uses but/both/similar correctly.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — respectful, accurate tone.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Two-festival comparison with correct linkers and respectful tone.",
            commonErrors: ["Judging one festival as 'better'."],
            examinerNote: "Must use at least one comparison linker.",
          },
        },
        {
          id: "mla2-u3-festivals-world-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Create a 'Festival Passport' page for a festival from a culture different from your own.",
          parts: [
            { label: "a", prompt: "Name the festival, the country/culture, and when it happens.", marks: 2 },
            { label: "b", prompt: "Describe three things people do during the festival.", marks: 3 },
            { label: "c", prompt: "Write one sentence comparing it to a festival you know.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural description", statement: "Accurate cultural facts + respectful comparison." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — festival, culture and timing all correct.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion D: Writing — names spelled correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — three accurate festival activities.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C: Speaking — activities described clearly.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct grammar and vocabulary.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — comparison is accurate and respectful.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — comparison uses correct linkers.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — comparison reflects real knowledge of both festivals.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Correct festival facts + 3 activities + accurate respectful comparison.",
            commonErrors: ["Invented festival facts.", "Comparison that is inaccurate or disrespectful."],
            examinerNote: "Cultural accuracy matters — do not invent traditions.",
          },
        },
        {
          id: "mla2-u3-festivals-world-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which festival is celebrated by Muslim communities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oktoberfest" },
              { id: "b", text: "Eid" },
              { id: "c", text: "Hanukkah" },
              { id: "d", text: "Diwali" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "World festivals", statement: "Eid is the major festival of Muslim communities." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — Eid is the Muslim festival.", working: "Eid", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Eid",
            commonErrors: ["Confusing Eid with Diwali."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u3-festivals-world-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'festival'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A normal school day" },
              { id: "b", text: "A sport" },
              { id: "c", text: "A special celebration or event at a particular time" },
              { id: "d", text: "A kind of food" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Festival", statement: "A festival is a special celebration that happens at a particular time." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — festival = special celebration/event.", working: "special celebration", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A special celebration or event at a particular time",
            commonErrors: ["Thinking a festival is everyday life."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u3-festivals-world-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence correctly compares two festivals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Christmas is similar of Diwali." },
              { id: "b", text: "Christmas similar Diwali is." },
              { id: "c", text: "Christmas is similar to Diwali." },
              { id: "d", text: "Christmas is similar like Diwali." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "similar to", statement: "'Similar to' is the correct comparison phrase." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'similar to' is correct.", working: "similar to", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Christmas is similar to Diwali.",
            commonErrors: ["'similar like/of' — not correct English."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-festivals-world-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe Chinese New Year in three sentences: when it happens, what people do, and why it matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Festival description", statement: "When + activities + significance." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — states when it happens (January/February, lunar new year).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — describes activities (red decorations, family meals, fireworks).", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — explains significance (new beginnings, family) + correct grammar.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three sentences: when (Jan/Feb), activities (red, family, fireworks), significance (new year).",
            commonErrors: ["Only naming the festival with no description."],
            examinerNote: "All three elements needed.",
          },
        },
        {
          id: "mla2-u3-festivals-world-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Oktoberfest",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Oktoberfest is a famous festival in Germany. It happens every year in September and October and lasts about sixteen days. Millions of people visit Munich to drink beer, eat sausages and listen to music.",
          },
          stem: "Read the text and give two numbers: (a) approximately how many days the festival lasts (b) in how many months it happens.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'lasts about sixteen days'.", working: "16", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'September and October' = two months.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 16 (b) 2",
            commonErrors: ["Answering 'Munich' for a numeric part — the question asks for numbers."],
            examinerNote: "Accept 16 and 2.",
          },
        },
        {
          id: "mla2-u3-festivals-world-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Festivals",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Christmas happens in December in many countries. People decorate trees, give presents and eat special meals with family. Diwali happens in autumn in India. People light lamps, share sweets and visit relatives. Both festivals are about light and togetherness, but they come from very different cultures.",
          },
          stem: "Compare Christmas and Diwali using at least two comparison words from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural comparison", statement: "Compare with 'both', 'but', 'similar to' — describe, don't judge." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — states accurate facts about both festivals.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — identifies a similarity (light, family) or difference (season, culture).", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — uses but/both/similar correctly.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — respectful, accurate tone.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Comparison covering when/what/why for both + linkers + respectful tone.",
            commonErrors: ["Judging one festival as 'better'."],
            examinerNote: "Must use at least one comparison linker.",
          },
        },
        {
          id: "mla2-u3-festivals-world-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Create a 'Festival Facts' card about a festival from a culture different from your own.",
          parts: [
            { label: "a", prompt: "Name the festival, country and when it happens.", marks: 2 },
            { label: "b", prompt: "Describe three things people do during it.", marks: 2 },
            { label: "c", prompt: "Write one sentence comparing it to a festival you know, using 'but' or 'similar to'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural description", statement: "Accurate cultural facts + respectful comparison." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — festival, country and timing all correct.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion D: Writing — names spelled correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — three accurate activities.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C: Speaking — activities described clearly.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — accurate respectful comparison.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — comparison linker used correctly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Correct festival facts + 3 activities + accurate comparison.",
            commonErrors: ["Invented festival facts.", "Disrespectful comparison."],
            examinerNote: "Cultural accuracy matters — do not invent traditions.",
          },
        },
        {
          id: "mla2-u3-festivals-world-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which country is Oktoberfest most associated with?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Japan" },
              { id: "b", text: "Italy" },
              { id: "c", text: "Brazil" },
              { id: "d", text: "Germany" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "World festivals", statement: "Oktoberfest is Germany's famous beer festival." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — Oktoberfest = Germany.", working: "Germany", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Germany",
            commonErrors: ["Confusing it with other European festivals."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u3-festivals-world-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Hanukkah",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Hanukkah is celebrated by Jewish families for eight nights. Each night, one more candle is lit on the menorah — nine candles in total. Families eat foods cooked in oil, like doughnuts and potato pancakes.",
          },
          stem: "Read the text and give two numbers: (a) how many nights Hanukkah lasts (b) how many candles the menorah has in total.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'eight nights'.", working: "8", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'nine candles in total'.", working: "9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 8 (b) 9",
            commonErrors: ["Answering 8 for (b) — the menorah has nine candles (eight plus the helper)."],
            examinerNote: "Accept 8 and 9.",
          },
        },
        {
          id: "mla2-u3-festivals-world-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase best shows respect when talking about another culture's festival?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their festival is interesting because it celebrates family." },
              { id: "b", text: "Their festival is not as good as ours." },
              { id: "c", text: "Their festival is strange and wrong." },
              { id: "d", text: "Their festival is boring compared to ours." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Respectful comparison", statement: "Describe festivals accurately; interest is respectful, judgement is not." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'interesting because...' describes without judging.", working: "interesting because", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Their festival is interesting because it celebrates family.",
            commonErrors: ["Choosing a judging phrase ('boring', 'wrong', 'not as good')."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u3-festivals-world-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Festival Foods",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "At Diwali, families share sweets like ladoos and barfi. At Christmas, many families eat turkey and Christmas pudding. At Eid, people often cook biryani and share dates.",
          },
          stem: "How many different festivals are mentioned in the text? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Counts are key details in texts." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Diwali, Christmas, Eid = three festivals.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting the foods instead of festivals."],
            examinerNote: "Accept 3 only.",
          },
        },
        {
          id: "mla2-u3-festivals-world-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a 'Festival Passport' entry — a page about a festival from another culture, as if collecting stamps from around the world.",
          parts: [
            { label: "a", prompt: "Name the festival, the country/culture, and when it happens.", marks: 2 },
            { label: "b", prompt: "Describe three things people do during the festival.", marks: 2 },
            { label: "c", prompt: "Write one sentence comparing it to a festival you know.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural writing", statement: "Accurate cultural facts + respectful comparison." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — festival, culture and timing all correct.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion D: Writing — names spelled correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — three accurate activities.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C: Speaking — activities described clearly.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — comparison accurate and respectful.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — comparison uses correct linkers.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — reflects real knowledge of both festivals.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Correct facts + 3 activities + accurate respectful comparison.",
            commonErrors: ["Invented facts.", "Inaccurate or disrespectful comparison."],
            examinerNote: "Cultural accuracy matters — do not invent traditions.",
          },
        },
      ],
    },
    {
      id: "mla2-u3-food-customs",
      title: "Food, manners and customs",
      skill: "Talk about food and table manners in different cultures and explain customs politely.",
      lesson: {
        sections: [
          {
            heading: "Food around the world",
            body: "Every culture has signature foods: **rice** in many Asian countries, **bread and cheese** in France, **pasta and pizza** in Italy, **tacos** in Mexico, **curry** in India, **fish and chips** in Britain. Food is deeply connected to culture — what people eat, how they eat it, and with whom tells you a lot about a place.",
          },
          {
            heading: "Table manners differ",
            body: "Manners vary by culture: in some places you eat with **chopsticks**, in others with **hands** or a **knife and fork**. Some cultures remove shoes before eating; some say a prayer; some eat the largest meal at lunch, others at dinner. There is no single 'right' way — the key is to **follow the host's example** and ask politely if unsure.",
          },
          {
            heading: "Being a good guest",
            body: "When you eat with people from another culture: (1) **Watch what others do** first. (2) **Ask politely**: 'Is it OK to...?'. (3) **Try new food** — saying 'no thank you' is fine, but refusing everything can seem rude. (4) **Thank your host** — 'Thank you for the delicious meal.' Food is often how cultures show hospitality.",
          },
        ],
        keyFormulas: [
          { name: "Guest rules", statement: "Watch → ask politely → try new food → thank the host" },
        ],
        workedExample: {
          problem: "You are invited to dinner at a friend's house from another country. What should you do first?",
          solution: "Watch how they eat — do they use chopsticks, hands or cutlery? Then follow their example and ask politely if unsure.",
        },
      },
      questions: [
        {
          id: "mla2-u3-food-customs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best first thing to do when eating with people from another culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eat as fast as possible" },
              { id: "b", text: "Refuse all the food" },
              { id: "c", text: "Watch what others do first" },
              { id: "d", text: "Use your own country's manners only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Guest etiquette", statement: "Watch the host's example before following your own habits." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — observing others first is the respectful approach.", working: "watch what others do", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Watch what others do first",
            commonErrors: ["Imposing your own customs without observing."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u3-food-customs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two foods or dishes associated with different cultures, and the country each comes from.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "World cuisines", statement: "Foods are linked to cultures: sushi/Japan, curry/India, tacos/Mexico, pasta/Italy." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — first correct food-country pair.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — second correct food-country pair.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — names spelled correctly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. sushi — Japan; curry — India; tacos — Mexico; pasta — Italy.",
            commonErrors: ["Pairing food with the wrong country."],
            examinerNote: "Any two accurate pairs accepted.",
          },
        },
        {
          id: "mla2-u3-food-customs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Dinner at Yuki's House",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "You are having dinner at your friend Yuki's house in Japan. When you arrive, you see shoes at the entrance and everyone sitting on the floor around a low table. Yuki's mother serves rice, fish and soup. Yuki picks up her chopsticks and waits for her mother to say 'itadakimasu' before eating.",
          },
          stem: "Describe three customs you notice, and explain what a polite guest should do.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural observation", statement: "Removing shoes, floor seating and waiting phrases are Japanese dining customs." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — notices three customs: shoes off, floor seating, waiting phrase.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — polite guest removes shoes, sits as invited, waits to eat.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — explains respect for host's customs.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — clear, accurate English.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Customs: shoes removed, floor seating, wait phrase; polite guest follows host's lead.",
            commonErrors: ["Ignoring the customs or calling them 'strange'."],
            examinerNote: "Must describe, not judge.",
          },
        },
        {
          id: "mla2-u3-food-customs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short 'Cultural Guide' page about food or a custom in a culture you want to learn about.",
          parts: [
            { label: "a", prompt: "Name the culture and the food/custom.", marks: 1 },
            { label: "b", prompt: "Describe what people do — three facts.", marks: 3 },
            { label: "c", prompt: "Explain one thing a visitor should do or avoid, and why.", marks: 2 },
            { label: "d", prompt: "Write one sentence showing respect for this culture.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural guide writing", statement: "Accurate facts + practical advice + respectful tone." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — culture and custom correctly identified.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — three accurate facts about the custom.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C: Speaking — facts described clearly.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct grammar and vocabulary.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — practical, correct advice.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — reason for advice is clear.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — sentence shows genuine respect/interest.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — correct, well-formed sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Correct culture + 3 facts + advice + respectful sentence.",
            commonErrors: ["Invented customs.", "Advice that is rude or inaccurate."],
            examinerNote: "Cultural facts must be accurate.",
          },
        },
        {
          id: "mla2-u3-food-customs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'hospitality'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of food" },
              { id: "b", text: "Eating very quickly" },
              { id: "c", text: "The friendly way people treat guests" },
              { id: "d", text: "A restaurant's price" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hospitality", statement: "Hospitality is the friendly way people treat guests." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — hospitality = friendly treatment of guests.", working: "friendly treatment of guests", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The friendly way people treat guests",
            commonErrors: ["Confusing it with 'hospital' (the building)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u3-food-customs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'custom'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A kind of restaurant" },
              { id: "b", text: "A new invention" },
              { id: "c", text: "A modern phone" },
              { id: "d", text: "A traditional way of doing something in a culture" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Custom", statement: "A custom is a traditional way of doing something in a culture." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — custom = traditional cultural practice.", working: "traditional way", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A traditional way of doing something in a culture",
            commonErrors: ["Thinking customs are modern rules."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u3-food-customs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In many Asian countries, what do people often use to eat instead of a knife and fork?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forks only" },
              { id: "b", text: "Chopsticks" },
              { id: "c", text: "Their hands always" },
              { id: "d", text: "Spoons only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Table manners", statement: "Many Asian cultures eat with chopsticks." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — chopsticks are the common utensil.", working: "chopsticks", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Chopsticks",
            commonErrors: ["Answering 'hands' — some cultures do, but chopsticks is the standard answer."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u3-food-customs-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two foods or dishes from different cultures and the country each comes from.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "World cuisines", statement: "Foods are linked to cultures: sushi/Japan, tacos/Mexico, curry/India, pasta/Italy." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — first correct food-country pair.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — second correct food-country pair.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — names spelled correctly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. sushi — Japan; tacos — Mexico; curry — India; pasta — Italy.",
            commonErrors: ["Pairing food with the wrong country."],
            examinerNote: "Any two accurate pairs accepted.",
          },
        },
        {
          id: "mla2-u3-food-customs-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "A Dinner Invitation",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Sara is invited to dinner at her friend Kenji's house in Japan on Friday. The family will cook sushi and miso soup. Kenji's mother asks everyone to remove their shoes at the door. Dinner will start at six o'clock and there will be eight guests.",
          },
          stem: "Read the text and give two numbers: (a) the hour dinner starts (b) how many guests there will be.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Times and counts are key details in texts." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'six o'clock'.", working: "6", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'eight guests'.", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 6 (b) 8",
            commonErrors: ["Answering Friday's date — question asks for time and guests."],
            examinerNote: "Accept 6 and 8.",
          },
        },
        {
          id: "mla2-u3-food-customs-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Dinner at Marco's",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "You are having dinner at your friend Marco's house in Italy. When you arrive, everyone greets you with a kiss on both cheeks. The table is full of pasta, pizza and fresh bread. Marco's nonna (grandmother) cooks the meal and everyone waits for her to start eating before they begin.",
          },
          stem: "Describe three customs you notice, and explain what a polite guest should do.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural observation", statement: "Greeting customs, food and waiting for the host are Italian dining traditions." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — notices three customs: kiss greeting, pasta/pizza meal, waiting for nonna.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — polite guest returns greeting, tries the food, waits for host.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — explains respect for host's customs.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — clear, accurate English.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Customs: kiss greeting, Italian food, wait for host; polite guest follows host's lead.",
            commonErrors: ["Ignoring the customs or calling them 'strange'."],
            examinerNote: "Must describe, not judge.",
          },
        },
        {
          id: "mla2-u3-food-customs-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short 'Table Manners Guide' for a visitor coming to your country or culture.",
          parts: [
            { label: "a", prompt: "Name one or two table customs in your culture.", marks: 2 },
            { label: "b", prompt: "Describe what a guest should do — three pieces of advice.", marks: 2 },
            { label: "c", prompt: "Write one sentence showing hospitality or respect.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Table manners guide", statement: "Accurate customs + practical advice + respectful tone." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — customs named are accurate for the culture.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion D: Writing — customs described clearly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — three pieces of practical advice.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — advice is correct and polite.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — sentence shows genuine respect.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — correct, well-formed sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Accurate customs + 3 advice points + respectful sentence.",
            commonErrors: ["Invented customs.", "Rude or inaccurate advice."],
            examinerNote: "Cultural facts must be accurate.",
          },
        },
        {
          id: "mla2-u3-food-customs-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do if you are unsure about a food custom at someone's home?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leave immediately" },
              { id: "b", text: "Eat as fast as possible" },
              { id: "c", text: "Ask politely, e.g. 'Is it OK to...?'" },
              { id: "d", text: "Refuse everything" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Guest etiquette", statement: "Ask politely if unsure — politeness is respected everywhere." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a polite question shows respect.", working: "ask politely", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Ask politely, e.g. 'Is it OK to...?'",
            commonErrors: ["Imposing your own habits or refusing rudely."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u3-food-customs-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Street Food",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Street food is popular in many countries. In Thailand, people buy pad thai from small stalls. In Mexico, tacos are sold on every corner. In India, samosas are a favourite snack. In Britain, you can find fish and chips by the sea.",
          },
          stem: "Read the text and give two numbers: (a) how many countries are mentioned (b) how many different foods are named.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Counts are key details in texts." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Thailand, Mexico, India, Britain = four countries.", working: "4", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — pad thai, tacos, samosas, fish and chips = four foods.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 4 (b) 4",
            commonErrors: ["Counting Britain twice or missing a food."],
            examinerNote: "Accept 4 and 4.",
          },
        },
        {
          id: "mla2-u3-food-customs-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the most respectful way to describe a food you do not like?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am not used to this flavour, but it is interesting." },
              { id: "b", text: "This food is disgusting." },
              { id: "c", text: "This food is wrong." },
              { id: "d", text: "I hate everything here." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Respectful description", statement: "Honest but polite: 'not used to it' respects the host's culture." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'not used to' is honest and respectful.", working: "not used to", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** I am not used to this flavour, but it is interesting.",
            commonErrors: ["Choosing a rude or dismissive phrase."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u3-food-customs-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Mealtime",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "In Spain, lunch is the biggest meal of the day and families often eat together at two or three o'clock. In Germany, dinner is usually the main meal in the evening.",
          },
          stem: "In Spain, at roughly what time do families often eat lunch? Give the hour.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Times in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'two or three o'clock' → hour 3 (accept 2 or 3).", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 'evening' — that is Germany's dinner time."],
            examinerNote: "Accept 3 (or 2 — 'two or three o'clock').",
          },
        },
        {
          id: "mla2-u3-food-customs-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short 'Cultural Food Guide' page about a dish or food custom from a culture you want to learn about.",
          parts: [
            { label: "a", prompt: "Name the culture and the food/custom.", marks: 1 },
            { label: "b", prompt: "Describe what people do — three facts.", marks: 2 },
            { label: "c", prompt: "Explain one thing a visitor should do or avoid, and why.", marks: 2 },
            { label: "d", prompt: "Write one sentence showing respect for this culture.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural guide writing", statement: "Accurate facts + practical advice + respectful tone." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — culture and custom correctly identified.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — two or three accurate facts.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C: Speaking — facts described clearly.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — practical, correct advice.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — reason for advice is clear.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — sentence shows genuine respect.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — correct, well-formed sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Correct culture + facts + advice + respectful sentence.",
            commonErrors: ["Invented customs.", "Rude or inaccurate advice."],
            examinerNote: "Cultural facts must be accurate.",
          },
        },
      ],
    },
  ],
};
