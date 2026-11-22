import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mla3-u3-lesson-3-3",
  code: "3-3",
  title: "Global Topics and Intercultural Communication",
  goal: "I CAN discuss global issues like the environment, friendship and migration using English, and communicate about cultural topics with confidence.",
  standards: [
    "MYP Language Acquisition",
    "Intercultural understanding",
    "Criterion C: Speaking",
    "Criterion D: Writing",
  ],
  vocabulary: [
    { term: "Global issue", definition: "A problem affecting people worldwide: climate change, pollution, poverty." },
    { term: "Environment", definition: "The natural world: air, water, land, plants and animals." },
    { term: "Pollution", definition: "Harmful substances in air, water or land." },
    { term: "Recycle", definition: "To process used materials so they can be used again." },
    { term: "Cultural exchange", definition: "Sharing ideas, food and customs between different cultures." },
  ],
  concepts: [
    {
      id: "mla3-u3-global-issues",
      title: "Discussing global issues",
      skill: "Talk about environmental and social issues using simple present perfect and opinion language.",
      lesson: {
        sections: [
          {
            heading: "Environment topics",
            body: "Common global issues at this level: **pollution** (dirty air and water), **climate change** (weather getting warmer), **recycling** (reusing materials), **deforestation** (cutting down forests), **endangered animals** (species at risk). Use present perfect for what has happened: 'Pollution has damaged many rivers.'",
          },
          {
            heading: "Giving your view",
            body: "To discuss issues, use: 'I think we should...', 'In my opinion...', 'I believe that...', 'We need to...'. Support with reasons: 'because it harms animals', 'for example, many cities have bad air'. Balance: 'On the other hand...', 'However...'. This shows mature thinking.",
          },
          {
            heading: "Action language",
            body: "Talk about solutions: 'We should recycle more', 'People must stop using plastic bags', 'It is important to protect wildlife'. Modal verbs (should, must, need to) are perfect for suggestions and obligations about global issues.",
          },
        ],
        keyFormulas: [
          { name: "Issue discussion", statement: "Opinion + because + reason + solution (should/must)" },
        ],
        workedExample: {
          problem: "Give your opinion on plastic pollution in two sentences.",
          solution: "'I think plastic pollution is a serious problem because it harms sea animals. We should stop using single-use plastic bags.'",
        },
      },
      questions: [
        {
          id: "mla3-u3-global-issues-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'recycling' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buying new products" },
              { id: "b", text: "Throwing things away" },
              { id: "c", text: "Polluting the environment" },
              { id: "d", text: "Reusing materials to make new things" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recycling", statement: "Processing used materials for reuse." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — recycling = reusing materials.", working: "reusing materials", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Reusing materials to make new things",
            commonErrors: ["Confusing recycling with waste."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-global-issues-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one sentence about an environmental problem using present perfect (have/has + participle).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Environmental language", statement: "Present perfect for what has happened to the environment." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — real environmental issue named.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct have/has + participle.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — accurate vocabulary and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Pollution has damaged many rivers.'",
            commonErrors: ["Past simple with specific time instead of present perfect."],
            examinerNote: "Must use present perfect.",
          },
        },
        {
          id: "mla3-u3-global-issues-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Our Class Recycling",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our class has started a recycling project. We collect paper, plastic bottles and cans every week. So far, we have recycled over 100 items. The head teacher is very proud of us. However, some students still throw rubbish in the wrong bin. We need to do better!",
          },
          stem: "What has the class done? What problem remains? What should they do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Issue comprehension", statement: "Extract achievements, problems and implied solutions." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — collected/recycled 100+ items of paper/plastic/cans.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — problem: some students use wrong bin.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — solution: remind students / use correct bins ('do better').", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — all three parts answered clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Recycled 100+ items; problem = wrong bin use; solution = remind students to sort properly.",
            commonErrors: ["Saying the project 'failed' — it is working but needs improvement."],
            examinerNote: "All three questions must be answered.",
          },
        },
        {
          id: "mla3-u3-global-issues-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short opinion piece about an environmental issue for a school magazine.",
          parts: [
            { label: "a", prompt: "Name the issue and give your opinion.", marks: 2 },
            { label: "b", prompt: "Give two reasons or facts supporting your view.", marks: 3 },
            { label: "c", prompt: "Suggest one solution using should/must.", marks: 2 },
            { label: "d", prompt: "End with a call to action for readers.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion writing", statement: "Opinion + reasons + solution + call to action." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — clear issue + opinion stated.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — accurate issue vocabulary.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — two valid reasons/facts.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D: Writing — reasons expressed clearly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct grammar throughout.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — solution uses should/must appropriately.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — modal + base verb correct.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — effective call to action.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Issue + opinion + 2 reasons + solution + call to action.",
            commonErrors: ["Opinion with no reasons."],
            examinerNote: "All four elements required.",
          },
        },
        {
          id: "mla3-u3-global-issues-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'pollution' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growing plants" },
              { id: "b", text: "Cleaning the environment" },
              { id: "c", text: "Harmful substances in air, water or land" },
              { id: "d", text: "Saving energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pollution", statement: "Harmful substances contaminating air, water or land." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — pollution = harmful substances.", working: "harmful substances", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Harmful substances in air, water or land",
            commonErrors: ["Confusing with recycling."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-global-issues-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a GLOBAL issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your homework is late" },
              { id: "b", text: "Your team lost a match" },
              { id: "c", text: "Climate change affects people worldwide" },
              { id: "d", text: "You forgot your lunch" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Global issue", statement: "A problem affecting people worldwide." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — climate change is worldwide.", working: "climate change", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Climate change affects people worldwide",
            commonErrors: ["Choosing a personal problem."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-global-issues-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence correctly uses present perfect for an environmental issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pollution is damage many rivers." },
              { id: "b", text: "Pollution damaged many rivers yesterday." },
              { id: "c", text: "Pollution will damage rivers." },
              { id: "d", text: "Pollution has damaged many rivers." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present perfect for issues", statement: "have/has + participle for what has happened." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'has damaged' is correct present perfect.", working: "has damaged", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Pollution has damaged many rivers.",
            commonErrors: ["Using past simple with no time or present continuous."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla3-u3-global-issues-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence gives a SOLUTION to plastic pollution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ocean is dirty." },
              { id: "b", text: "I saw plastic on the beach." },
              { id: "c", text: "We should stop using single-use plastic bags." },
              { id: "d", text: "Plastic is everywhere." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Solution language", statement: "'We should/must...' proposes solutions." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'should stop using' is a solution.", working: "should stop using", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** We should stop using single-use plastic bags.",
            commonErrors: ["Choosing a problem statement."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u3-global-issues-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Environmental Report",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our city's air quality has improved this year. Fewer cars on the roads have helped. However, plastic waste in rivers is still a serious problem that needs action.",
          },
          stem: "Which part is an OPINION rather than a fact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fewer cars have helped." },
              { id: "b", text: "Our city has rivers." },
              { id: "c", text: "Plastic waste is a serious problem that needs action." },
              { id: "d", text: "Air quality has improved." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fact vs opinion", statement: "'Serious problem that needs action' is a judgement." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'serious problem' + 'needs action' = opinion/judgement.", working: "serious problem", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Plastic waste is a serious problem that needs action.",
            commonErrors: ["Choosing a factual statement."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla3-u3-global-issues-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the BEST way to start a discussion about an environmental problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give an opinion with a reason and a suggestion" },
              { id: "b", text: "Ignore the problem" },
              { id: "c", text: "Only talk about facts, no views" },
              { id: "d", text: "Just complain with no reasons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Issue discussion", statement: "Opinion + reason + solution = strong discussion." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — opinion + reason + suggestion is the full structure.", working: "opinion + reason + suggestion", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Give an opinion with a reason and a suggestion",
            commonErrors: ["Choosing complaint-only or facts-only."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u3-global-issues-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Problems List",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Three big problems face our planet: air pollution, plastic waste in oceans, and deforestation. Each one harms animals and people. We must act now!",
          },
          stem: "How many environmental problems are named in this text?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting issues", statement: "Count the named problems." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — air pollution, plastic waste, deforestation = 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'animals' as a problem."],
            examinerNote: "Count named problems only.",
          },
        },
        {
          id: "mla3-u3-global-issues-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Action Advice",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "We should recycle more paper and plastic. People must stop using single-use bags. Schools could teach students about the environment. And we have to protect endangered animals.",
          },
          stem: "How many suggestions use 'should/must/could/have to'? How many are about recycling or waste?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Suggestion counting", statement: "Modal verbs mark suggestions; count those about recycling/waste." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — should, must, could, have to = 4 suggestions.", working: "4", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — recycle paper/plastic + stop single-use bags = 2 about recycling/waste.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4 suggestions; 2 about recycling/waste.",
            commonErrors: ["Counting 'protect animals' as recycling."],
            examinerNote: "Match suggestions to topic.",
          },
        },
        {
          id: "mla3-u3-global-issues-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one sentence about air pollution using present perfect (have/has + participle).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present perfect for issues", statement: "have/has + participle for what has happened." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — real environmental problem named.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct present perfect form.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Air pollution has made the city smell bad.'",
            commonErrors: ["Past simple with specific time."],
            examinerNote: "Must use present perfect.",
          },
        },
        {
          id: "mla3-u3-global-issues-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give your opinion on deforestation with one reason and one suggestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion + reason + solution", statement: "Opinion + because + reason + should/must solution." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — clear opinion on deforestation.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — reason given correctly.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — suggestion with should/must correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I think deforestation is terrible because it destroys animal homes. We must plant more trees.'",
            commonErrors: ["Opinion with no reason or solution."],
            examinerNote: "All three elements needed.",
          },
        },
        {
          id: "mla3-u3-global-issues-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "School Green Week",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our school had a Green Week. Students planted trees, made posters about recycling, and collected litter in the park. It was a success, but some classes did not take part. We need every class involved next year.",
          },
          stem: "What did the school do? What problem remains? What should they do next?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Issue comprehension", statement: "Extract actions, problems and implied solutions." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — planted trees, posters, collected litter.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — problem: some classes did not take part.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — solution: involve every class next year.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — all three parts clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Planted trees/posters/litter pick; problem = some classes absent; solution = involve all.",
            commonErrors: ["Saying it 'failed' — it was a success with one gap."],
            examinerNote: "All three answers needed.",
          },
        },
        {
          id: "mla3-u3-global-issues-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short opinion piece about an environmental issue for a school magazine.",
          parts: [
            { label: "a", prompt: "Name the issue and give your opinion.", marks: 2 },
            { label: "b", prompt: "Give two reasons or facts supporting your view.", marks: 2 },
            { label: "c", prompt: "Suggest one solution using should/must.", marks: 1 },
            { label: "d", prompt: "End with a call to action.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion writing", statement: "Opinion + reasons + solution + call to action." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — clear issue + opinion.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — accurate issue vocabulary.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — two valid reasons/facts.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D: Writing — reasons expressed clearly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — should/must + base verb correct.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — effective call to action.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Issue + opinion + 2 reasons + solution + call to action.",
            commonErrors: ["Opinion with no reasons."],
            examinerNote: "All four elements required.",
          },
        },
      ],
    },
    {
      id: "mla3-u3-cultural-exchange",
      title: "Cultural exchange and communication across cultures",
      skill: "Discuss cultural exchange topics and communicate respectfully about cultural differences.",
      lesson: {
        sections: [
          {
            heading: "What is cultural exchange?",
            body: "**Cultural exchange** is when people from different cultures share food, music, customs, ideas and stories. Schools do this through exchange students, international days, pen friends and food festivals. It helps people understand each other and reduces prejudice — fear or dislike of what is different.",
          },
          {
            heading: "Talking about your culture",
            body: "Be ready to explain your own culture simply: 'In my country, we celebrate...', 'We eat...', 'People greet by...'. Use present simple and 'we' for customs: 'We usually eat dinner together.' Others may ask you questions — answer honestly and politely, and ask them about theirs in return.",
          },
          {
            heading: "Communication across cultures",
            body: "When talking about cultural differences, use neutral, respectful language: 'In my culture we...', 'That's interesting — how is it in your country?'. Avoid words like 'weird' or 'strange' — they sound judgemental. Remember: you are learning about cultures, not judging them.",
          },
        ],
        keyFormulas: [
          { name: "Cultural talk", statement: "In my culture we... / That's interesting — how is it in your country?" },
        ],
        workedExample: {
          problem: "A classmate asks 'What do people eat in your country?' How do you answer?",
          solution: "'In my country, we eat rice with most meals. We also have a traditional dish called [name] for celebrations.'",
        },
      },
      questions: [
        {
          id: "mla3-u3-cultural-exchange-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cultural exchange?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Travelling for work" },
              { id: "b", text: "Trading money between countries" },
              { id: "c", text: "Sharing ideas, food and customs between cultures" },
              { id: "d", text: "Learning only English" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural exchange", statement: "Sharing customs, food, ideas between cultures." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — cultural exchange = sharing between cultures.", working: "sharing ideas/food/customs", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sharing ideas, food and customs between cultures",
            commonErrors: ["Confusing with economic trade."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one sentence describing a custom or tradition from your culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Describing own culture", statement: "Use 'In my country/culture, we...' + present simple." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — real custom described.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct 'we' + present simple + punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'In my culture, we eat dinner together as a family every evening.'",
            commonErrors: ["Using 'I' instead of 'we' for customs."],
            examinerNote: "Must be a genuine custom.",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A classmate says 'Your food sounds weird.' How should you respond respectfully? Give two possible responses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Respectful response", statement: "Correct 'weird' politely; share positively; invite curiosity." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — polite correction: 'It's not weird, it's just different' or similar.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — positive framing: 'It's delicious — would you like to try?'", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — recognizes 'weird' is judgemental.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — responses grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'It's not weird — it's just different! It's actually delicious. Would you like to try some?'",
            commonErrors: ["Agreeing that it is 'weird' or getting angry."],
            examinerNote: "Two distinct respectful responses needed.",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a 'My Culture' page for an international class magazine.",
          parts: [
            { label: "a", prompt: "Describe one tradition or festival from your culture (3 sentences).", marks: 3 },
            { label: "b", prompt: "Describe one food or dish and when people eat it.", marks: 2 },
            { label: "c", prompt: "Invite readers to ask you questions or share their own culture.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural self-presentation", statement: "Accurate cultural facts + welcoming tone." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — tradition described accurately.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion D: Writing — correct grammar and vocabulary.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion C: Speaking — clear, engaging description.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B: Reading — food + eating context accurate.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D: Writing — correct 'we eat' present simple.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — welcoming invitation to readers.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — correct question/invitation form.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — invitation is clear and encouraging.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Tradition (3 sentences) + food description + welcoming invitation.",
            commonErrors: ["Invented traditions.", "No invitation to readers."],
            examinerNote: "Cultural accuracy is essential.",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of CULTURAL EXCHANGE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Learning English grammar" },
              { id: "b", text: "Travelling for business" },
              { id: "c", text: "Buying goods from another country" },
              { id: "d", text: "An international food festival where students share dishes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural exchange", statement: "Sharing food, customs, ideas between cultures." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — food festival shares culture between groups.", working: "food festival", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An international food festival where students share dishes",
            commonErrors: ["Confusing with economic trade."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is best for describing your own culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I think you should..." },
              { id: "b", text: "It's weird but..." },
              { id: "c", text: "In my country, we..." },
              { id: "d", text: "Everyone does this..." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cultural talk", statement: "'In my country/culture, we...' uses 'we' for customs." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'In my country, we...' is neutral and respectful.", working: "In my country, we", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** In my country, we...",
            commonErrors: ["Choosing judgemental or overgeneralising phrases."],
            examinerNote: "C1 for (a).",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which response is most respectful when someone describes their culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That's strange, I don't get it." },
              { id: "b", text: "That's weird." },
              { id: "c", text: "You should do it my way." },
              { id: "d", text: "That's interesting — how is it in your country?" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Respectful responses", statement: "Neutral, curious responses respect differences." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — C is curious and respectful.", working: "That's interesting", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** That's interesting — how is it in your country?",
            commonErrors: ["Choosing judgemental 'weird'/'strange'."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word should you AVOID when talking about someone's culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "weird" },
              { id: "b", text: "traditional" },
              { id: "c", text: "different" },
              { id: "d", text: "interesting" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Neutral language", statement: "'Weird'/'strange' sound judgemental; use neutral words." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'weird' is judgemental.", working: "weird", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** weird",
            commonErrors: ["Choosing neutral words like 'different'."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Sensitive Topic",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "A classmate says: 'Your traditional festival sounds boring — you just sit and pray all day?'",
          },
          stem: "What is the problem with this comment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too formal" },
              { id: "b", text: "It judges someone's culture as 'boring' — disrespectful" },
              { id: "c", text: "It asks a question" },
              { id: "d", text: "It is grammatically wrong" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Respectful talk", statement: "Calling a tradition 'boring' judges it." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'boring' dismisses someone's meaningful custom.", working: "boring = judgement", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It judges someone's culture as 'boring' — disrespectful",
            commonErrors: ["Missing the judgement."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A classmate asks 'What do people eat in your country?' What is the BEST answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I don't want to talk about it." },
              { id: "b", text: "In my country, we eat [dish] with most meals. It's delicious — would you like to try some?" },
              { id: "c", text: "You probably wouldn't understand." },
              { id: "d", text: "We eat strange food you wouldn't like." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural sharing", statement: "Describe positively + invite curiosity." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — B answers positively and invites sharing.", working: "positive + invitation", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** In my country, we eat [dish] with most meals. It's delicious — would you like to try some?",
            commonErrors: ["Choosing dismissive or negative responses."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "International Day",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "On International Day, students shared food from 12 countries, taught greetings in 8 languages, and displayed traditional clothes. It was the best cultural exchange our school has had.",
          },
          stem: "How many cultural exchange activities are described?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting activities", statement: "Each sharing activity counts once." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — food, greetings, clothes = 3 activities.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting '12 countries' as an activity."],
            examinerNote: "Count activity types, not numbers.",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "My Culture",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "In my culture, we celebrate New Year with a big family dinner. We wear new clothes and give gifts to children. People greet each other with hugs. Also, we eat a special cake called 'king cake'.",
          },
          stem: "How many customs are described? How many use 'we' for the group?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Custom counting", statement: "Each described custom counts; 'we' marks group customs." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — customs: family dinner, new clothes, gifts, hugs/king cake — count as 4 (dinner, clothes+gifts could be one).", working: "4", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'we' appears for group customs throughout.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4 customs; 'we' used for group throughout.",
            commonErrors: ["Counting 'New Year' as a custom."],
            examinerNote: "Count customs, not the festival name.",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one sentence describing a custom or tradition from your culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Describing own culture", statement: "Use 'In my culture, we...' + present simple." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — real custom described.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct 'we' + present simple + punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'In my culture, we eat dinner together as a family every evening.'",
            commonErrors: ["Using 'I' instead of 'we'."],
            examinerNote: "Must be a genuine custom.",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A classmate asks 'How do people greet each other in your country?' Answer in two sentences using 'we'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural Q&A", statement: "Use 'we' + present simple to describe customs." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — answers the greeting question.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — two sentences with 'we' + present simple.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — culturally accurate and polite.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'In my country, we shake hands when we meet. With family, we hug or kiss on the cheek.'",
            commonErrors: ["Using 'I' or past tense."],
            examinerNote: "Must use 'we' + present simple.",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Cultural Question",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "At lunch, a classmate asks you: 'Why do you eat with your hands? Is that hygienic?' You feel embarrassed but want to explain politely.",
          },
          stem: "How should you respond? Write what you could say, explaining your custom respectfully.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Respectful cultural explanation", statement: "Explain custom + show it's normal + invite understanding." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — explains the custom without embarrassment.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — frames it as normal/traditional, not 'weird'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — acknowledges the question politely.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — response grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'In my culture, eating with hands is traditional and considered respectful. It's perfectly hygienic — we wash our hands first. Would you like to try?'",
            commonErrors: ["Apologising excessively or calling it weird."],
            examinerNote: "Must explain + stay positive.",
          },
        },
        {
          id: "mla3-u3-cultural-exchange-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a 'My Culture' page for an international class magazine.",
          parts: [
            { label: "a", prompt: "Describe one tradition or festival from your culture (3 sentences).", marks: 3 },
            { label: "b", prompt: "Describe one food or dish and when people eat it.", marks: 1 },
            { label: "c", prompt: "Invite readers to ask you questions or share their culture.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural self-presentation", statement: "Accurate cultural facts + welcoming tone." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — tradition described accurately.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion D: Writing — correct grammar and vocabulary.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion C: Speaking — clear, engaging description.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B: Reading — food + eating context accurate.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C: Speaking — welcoming invitation.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — correct question/invitation form.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Tradition (3 sentences) + food + welcoming invitation.",
            commonErrors: ["Invented traditions.", "No invitation."],
            examinerNote: "Cultural accuracy essential.",
          },
        },
      ],
    },
  ],
};
