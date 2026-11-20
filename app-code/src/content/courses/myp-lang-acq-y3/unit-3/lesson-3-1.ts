import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mla3-u3-lesson-3-1",
  code: "3-1",
  title: "Present Perfect and Modals for Ability and Permission",
  goal: "I CAN use the present perfect for experiences and recent events, and use can/could/must/should for ability, permission and advice.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Present perfect", definition: "have/has + past participle — for experiences and recent events." },
    { term: "Past participle", definition: "The third form of a verb: go→gone, eat→eaten, play→played." },
    { term: "Modal verb", definition: "A helping verb that shows ability, permission or advice: can, could, must, should." },
    { term: "Permission", definition: "Being allowed to do something." },
    { term: "Obligation", definition: "Something you must or should do." },
  ],
  concepts: [
    {
      id: "mla3-u3-present-perfect-modals",
      title: "Present perfect and modal verbs",
      skill: "Use present perfect accurately and choose the right modal for meaning.",
      lesson: {
        sections: [
          {
            heading: "Present perfect: two uses",
            body: "**Experience**: 'I have visited Japan' — at some time in your life (no specific time). **Recent event**: 'I have lost my keys' — happened recently, result matters now. Signal words: ever, never, already, yet, just, since, for. Do NOT use a finished time ('yesterday') with present perfect — that needs past simple.",
          },
          {
            heading: "Modal verbs for meaning",
            body: "**Can/could** = ability or permission: 'I can swim', 'Can I go out?'. **Must** = strong obligation: 'You must wear a helmet'. **Should** = advice: 'You should eat more fruit'. **Have to** = external obligation: 'I have to do homework'. Each modal adds a different meaning — choose carefully.",
          },
          {
            heading: "Common mistakes",
            body: "Two classic errors: (1) 'I have went' — after have, use past participle 'gone'. (2) 'You should to go' — modals take the base verb directly, no 'to': 'You should go'. Check both patterns every time you write.",
          },
        ],
        keyFormulas: [
          { name: "Present perfect", statement: "have/has + past participle; no finished-time words" },
          { name: "Modals", statement: "can/could (ability/permission), must (obligation), should (advice) + base verb" },
        ],
        workedExample: {
          problem: "Correct: 'I have went to Spain twice.' / 'You should to study more.'",
          solution: "'I have gone to Spain twice.' / 'You should study more.'",
        },
      },
      questions: [
        {
          id: "mla3-u3-present-perfect-modals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct sentence.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I have went there." },
              { id: "b", text: "I have gone there." },
              { id: "c", text: "I have go there." },
              { id: "d", text: "I have going there." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "have + past participle", statement: "After have/has use the past participle: gone." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'have gone' is correct.", working: "have gone", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I have gone there.",
            commonErrors: ["Using past simple 'went' after have."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose the correct modal: 'You ___ wear a seatbelt — it is the law.' (must/should/can)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Modal meaning", statement: "'Must' = strong obligation (law); 'should' = advice." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'must' for legal obligation.", working: "must", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — complete correct sentence.", working: "You must wear a seatbelt.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "You must wear a seatbelt — it is the law.",
            commonErrors: ["Choosing 'should' — that is advice, not obligation."],
            examinerNote: "Law = must, not should.",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct these sentences: (1) 'She has never eat sushi.' (2) 'I should to call my mum.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Participles and modals", statement: "have + past participle (eaten); modal + base verb (call)." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'has never eaten sushi.'", working: "has never eaten", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'I should call my mum.'", working: "should call", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explains participle rule (eat→eaten).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains modal takes base verb, no 'to'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(1) She has never eaten sushi. (2) I should call my mum.",
            commonErrors: ["'has never ate' — needs participle 'eaten'.", "'should calling' — needs base verb."],
            examinerNote: "Both corrections plus rule names needed.",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write about your experiences and give advice.",
          parts: [
            { label: "a", prompt: "Write two sentences about things you have or have never done (present perfect).", marks: 3 },
            { label: "b", prompt: "Write two sentences giving advice using should/must.", marks: 2 },
            { label: "c", prompt: "Check: participles correct, modals + base verb, no 'to' after modals.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present perfect + modals", statement: "have/has + participle; modal + base verb." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two real experience sentences.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct participles (eaten/gone/been etc.).", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — correct spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two sensible advice sentences.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — should/must + base verb correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check confirms all forms correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version error-free.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — text reads naturally.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 present-perfect + 2 modal sentences + correct check.",
            commonErrors: ["'have went' / 'should to go' errors remain."],
            examinerNote: "Participle and modal+base-verb accuracy are key.",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct sentence.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She has write a letter." },
              { id: "b", text: "She has written a letter." },
              { id: "c", text: "She has writing a letter." },
              { id: "d", text: "She has wrote a letter." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "have + participle", statement: "write → wrote → written; use 'written' after has." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'has written' is correct.", working: "has written", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** She has written a letter.",
            commonErrors: ["Using 'wrote' after has."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which modal gives ADVICE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "must" },
              { id: "b", text: "should" },
              { id: "c", text: "can" },
              { id: "d", text: "could" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Modal meanings", statement: "should = advice; must = obligation; can/could = ability/permission." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'should' expresses advice.", working: "should", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** should",
            commonErrors: ["Confusing advice with obligation."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the correct modal for permission: '___ I use your phone?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Must" },
              { id: "b", text: "Should" },
              { id: "c", text: "Can" },
              { id: "d", text: "Have to" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Permission", statement: "'Can I...?' asks for permission." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Can I use' asks permission.", working: "Can I", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Can",
            commonErrors: ["Choosing obligation modals."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the difference between 'must' and 'have to'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is no difference" },
              { id: "b", text: "'Must' = strong obligation; 'have to' = external obligation/rule" },
              { id: "c", text: "'Must' is informal, 'have to' is formal" },
              { id: "d", text: "'Must' is past, 'have to' is present" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Obligation modals", statement: "must = strong personal obligation; have to = external rule." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — must vs have to distinction.", working: "must = strong; have to = external", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 'Must' = strong obligation; 'have to' = external obligation/rule",
            commonErrors: ["Thinking they are identical."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Student Sentences",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "I have went to the dentist twice this year. You should to brush more often.",
          },
          stem: "How many errors are in these two sentences?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common errors", statement: "have + participle (gone); modal + base verb (brush, no 'to')." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'have went' → 'have gone'; 'should to brush' → 'should brush' = 2 errors.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2",
            commonErrors: ["Missing 'should to'."],
            examinerNote: "Count each error once.",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence is CORRECT?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You must to wear a helmet." },
              { id: "b", text: "You must wear a helmet." },
              { id: "c", text: "You must wearing a helmet." },
              { id: "d", text: "You must wore a helmet." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Modal + base verb", statement: "Modals take the base verb directly: must wear." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'must wear' correct; no 'to' or -ing.", working: "must wear", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** You must wear a helmet.",
            commonErrors: ["Adding 'to' after must."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Advice Column",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "You should sleep more — teenagers need nine hours. You must not stay up late before exams. You could also try reading before bed. And you have to finish homework on time.",
          },
          stem: "How many modal verbs appear in this advice?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Modal verbs", statement: "can/could/must/should/have to are modals." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — should, must, could, have to = 4 modals.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting 'need' as a modal — it is a main verb here."],
            examinerNote: "Count modal verbs only.",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Experiences",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I have visited three countries. I have never tried skiing. My brother has already learned to swim.",
          },
          stem: "How many present perfect verbs appear? How many are negative or use 'never/already'?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present perfect counting", statement: "have/has + participle; negative/never/already modify it." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — have visited, have never tried, has already learned = 3.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'never' and 'already' sentences = 2.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 present perfect; 2 with never/already.",
            commonErrors: ["Counting 'countries' or 'swim' alone."],
            examinerNote: "have/has + participle counts once.",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose the right modal and write a full sentence: 'You ___ see a doctor — you look ill.' (should/must/can)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Modal choice", statement: "'Should' for advice about being ill." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'should' chosen for advice.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — complete correct sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "You should see a doctor — you look ill.",
            commonErrors: ["Choosing 'must' — that is too strong for advice."],
            examinerNote: "Advice = should.",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct these sentences: (1) 'I have never eat sushi.' (2) 'We must to leave now.' (3) 'She has went home.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common errors", statement: "have + participle (eaten, gone); modal + base verb (leave, no 'to')." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I have never eaten sushi.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'We must leave now.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'She has gone home.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(1) eaten (2) must leave (3) has gone.",
            commonErrors: ["'has went' — needs 'gone'."],
            examinerNote: "All three corrections needed.",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "New Student",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "A new student, Marco, has just arrived from Italy. He has never been to this school before. He could speak some English, but he should practise every day. He must learn the school rules quickly.",
          },
          stem: "What has Marco done? What advice is given about him? Use the modals correctly in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Modal comprehension", statement: "Track present perfect facts + modal meanings." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Marco has arrived from Italy; never been to school.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — could speak some English; should practise; must learn rules.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — answer uses correct modal meanings.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — accurate English throughout.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Marco arrived from Italy, never been here; could speak some English, should practise, must learn rules.",
            commonErrors: ["Mixing up should (advice) and must (obligation)."],
            examinerNote: "Modal meanings must be correct.",
          },
        },
        {
          id: "mla3-u3-present-perfect-modals-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write about your experiences and give advice.",
          parts: [
            { label: "a", prompt: "Write two sentences about things you have or have never done (present perfect).", marks: 3 },
            { label: "b", prompt: "Write two sentences giving advice using should/must.", marks: 2 },
            { label: "c", prompt: "Check: correct participles, modals + base verb.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present perfect + modals", statement: "have/has + participle; modal + base verb." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two real experience sentences.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct participles.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — correct spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two sensible advice sentences.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — should/must + base verb.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check confirms forms correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2 present-perfect + 2 modal sentences + check.",
            commonErrors: ["'have went' / 'should to go' remain."],
            examinerNote: "Participle and modal accuracy key.",
          },
        },
      ],
    },
    {
      id: "mla3-u3-cohesion",
      title: "Cohesion: linking sentences and paragraphs",
      skill: "Join sentences and paragraphs with appropriate linking words to create flowing, organised writing.",
      lesson: {
        sections: [
          {
            heading: "Why linking matters",
            body: "Without linkers, writing feels like a list. **Linking words** connect ideas: **and** (add), **but** (contrast), **because** (reason), **so** (result), **however** (contrast, formal), **for example** (illustration), **in addition** (add more), **although** (concession). They show the reader how your ideas relate.",
          },
          {
            heading: "Sentence-level linkers",
            body: "Start a sentence with a linker to connect to the previous one: 'I like football. **However**, my brother prefers swimming.' Or join with a conjunction: 'I like football, **but** my brother prefers swimming.' Both are correct — choose based on emphasis and formality.",
          },
          {
            heading: "Paragraph-level linkers",
            body: "To connect paragraphs, use: **first/second/finally** (sequence), **in addition** (adding a point), **on the other hand** (contrast), **as a result** (consequence), **for instance** (example). 'I enjoy sport. **In addition**, I like reading.' This guides the reader through your argument.",
          },
        ],
        keyFormulas: [
          { name: "Linker types", statement: "and/but/because/so (join); however/although/in addition/for example (connect)" },
        ],
        workedExample: {
          problem: "Join: 'It rained. We stayed inside.' using 'so'.",
          solution: "'It rained, so we stayed inside.' — 'so' shows the result.",
        },
      },
      questions: [
        {
          id: "mla3-u3-cohesion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which linker shows a contrast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "and" },
              { id: "b", text: "but" },
              { id: "c", text: "because" },
              { id: "d", text: "so" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linker meaning", statement: "'But'/'however' signal contrast." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'but' contrasts two ideas.", working: "but", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** but",
            commonErrors: ["Confusing 'so' (result) with 'but' (contrast)."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-cohesion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Join these sentences with 'because': 'I stayed home. It was raining.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Joining with because", statement: "because introduces the reason." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I stayed home because it was raining.'", working: "because it was raining", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct punctuation and word order.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "I stayed home because it was raining.",
            commonErrors: ["'Because it was raining I stayed home' — acceptable but less natural order."],
            examinerNote: "Accept either order if correct.",
          },
        },
        {
          id: "mla3-u3-cohesion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve this paragraph by adding two linking words: 'I like football. My brother prefers swimming. We both enjoy sport.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion improvement", statement: "Linkers show relationships between sentences." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — adds a contrast linker between sentence 1 and 2.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adds an addition linker before sentence 3.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — improved version flows better.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — final text correct and natural.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'I like football, but my brother prefers swimming. In addition, we both enjoy sport.' (or similar)",
            commonErrors: ["Adding linkers randomly without meaning."],
            examinerNote: "Linkers must fit the logical relationship.",
          },
        },
        {
          id: "mla3-u3-cohesion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short paragraph about your favourite hobby using at least three different linking words.",
          parts: [
            { label: "a", prompt: "Write three sentences about the hobby.", marks: 3 },
            { label: "b", prompt: "Add at least three linking words (and/but/because/so/however/for example).", marks: 2 },
            { label: "c", prompt: "Check: linkers used correctly, sentences flow logically.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cohesive writing", statement: "Varied, appropriate linkers create flow." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three sentences about a real hobby.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct grammar in all sentences.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — three linkers added.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — linkers used correctly for meaning.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — paragraph flows logically.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — final version polished.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — paragraph meets the word and linking-word requirements.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3 sentences + 3 linkers + coherent final paragraph.",
            commonErrors: ["Same linker repeated.", "Linkers that don't fit the logic."],
            examinerNote: "Linkers must vary and be appropriate.",
          },
        },
        {
          id: "mla3-u3-cohesion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which linker shows a RESULT?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "but" },
              { id: "b", text: "so" },
              { id: "c", text: "although" },
              { id: "d", text: "because" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linker meanings", statement: "'So' shows result; 'because' shows reason; 'but/however' contrast." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'so' introduces a result.", working: "so", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** so",
            commonErrors: ["Confusing result with reason."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-cohesion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which linker introduces an EXAMPLE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "for example" },
              { id: "b", text: "however" },
              { id: "c", text: "because" },
              { id: "d", text: "first" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linker meanings", statement: "'For example' introduces an illustration." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'for example' introduces an example.", working: "for example", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** for example",
            commonErrors: ["Choosing a contrast linker."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla3-u3-cohesion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Join these sentences correctly: 'I like football. My brother prefers swimming.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like football, so my brother prefers swimming." },
              { id: "b", text: "I like football, but my brother prefers swimming." },
              { id: "c", text: "I like football, because my brother prefers swimming." },
              { id: "d", text: "I like football, and my brother prefers swimming." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linker choice", statement: "Different preferences = contrast = 'but'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — football vs swimming is a contrast.", working: "but", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I like football, but my brother prefers swimming.",
            commonErrors: ["Choosing 'because' — swimming is not the reason."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-cohesion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses 'however' correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like football, however my brother prefers swimming." },
              { id: "b", text: "I like football. However, my brother prefers swimming." },
              { id: "c", text: "However I like football my brother prefers swimming." },
              { id: "d", text: "I like however football." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "however punctuation", statement: "'However' starts a new sentence with a comma after it." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — however + comma between two sentences.", working: "However, ...", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I like football. However, my brother prefers swimming.",
            commonErrors: ["Joining with comma instead of full stop."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-cohesion-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Linker Errors",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "It was raining, because we stayed inside. I like maths, for example it is difficult.",
          },
          stem: "How many sentences use the WRONG linker?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linker logic", statement: "'Because' needs a reason; 'for example' needs an example." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'because' misused (should be 'so'); 'for example' misused (should be 'because') = 2 errors.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting only one error."],
            examinerNote: "Check the logic of each linker.",
          },
        },
        {
          id: "mla3-u3-cohesion-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which linker best connects two PARAGRAPHS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "and" },
              { id: "b", text: "on the other hand" },
              { id: "c", text: "the" },
              { id: "d", text: "very" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Paragraph linkers", statement: "'On the other hand', 'in addition', 'as a result' connect paragraphs." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'on the other hand' is a paragraph-level contrast linker.", working: "on the other hand", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** on the other hand",
            commonErrors: ["Choosing a simple conjunction."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-cohesion-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Linked Paragraph",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I enjoy sport. However, my brother prefers reading. In addition, we both like music. For example, we go to concerts together.",
          },
          stem: "How many linking words/phrases appear in this paragraph?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linkers", statement: "however, in addition, for example are linkers." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — however, in addition, for example = 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'both' as a linker."],
            examinerNote: "Count linking words/phrases.",
          },
        },
        {
          id: "mla3-u3-cohesion-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Choppy vs Smooth",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Version A: 'I like football. My brother prefers swimming. We both enjoy sport.'\n\nVersion B: 'I like football, but my brother prefers swimming. In addition, we both enjoy sport.'",
          },
          stem: "How many sentences does Version A have? How many linking words does Version B add?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion comparison", statement: "Linkers join ideas and reduce choppiness." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Version A has 3 separate sentences.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Version B adds 'but' and 'In addition' = 2 linkers.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 sentences; 2 linkers added.",
            commonErrors: ["Counting 'both' as a linker."],
            examinerNote: "Count actual linking words.",
          },
        },
        {
          id: "mla3-u3-cohesion-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Join these sentences with 'but': 'I wanted to play outside. It was raining.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Joining with but", statement: "'But' contrasts two ideas." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I wanted to play outside, but it was raining.'", working: "but it was raining", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "I wanted to play outside, but it was raining.",
            commonErrors: ["Wrong comma placement."],
            examinerNote: "Comma before 'but'.",
          },
        },
        {
          id: "mla3-u3-cohesion-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this paragraph by adding two linking words: 'I like football. My brother prefers swimming. We both enjoy sport.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion improvement", statement: "Linkers show relationships between sentences." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — contrast linker between sentence 1 and 2.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — addition linker before sentence 3.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — improved version flows better.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'I like football, but my brother prefers swimming. In addition, we both enjoy sport.'",
            commonErrors: ["Random linkers without logic."],
            examinerNote: "Linkers must fit the relationship.",
          },
        },
        {
          id: "mla3-u3-cohesion-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Choppy Paragraph",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "I like music. My sister likes films. We both watch TV. We enjoy weekends together.",
          },
          stem: "Rewrite this paragraph using at least three different linking words to make it flow better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion rewriting", statement: "Varied, appropriate linkers create flow." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — three different linkers used.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — linkers used correctly for meaning.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — rewritten paragraph flows better.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — final text correct and natural.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I like music, but my sister likes films. In addition, we both watch TV, so we enjoy weekends together.'",
            commonErrors: ["Same linker repeated."],
            examinerNote: "Linkers must vary and fit.",
          },
        },
        {
          id: "mla3-u3-cohesion-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short paragraph about a hobby using at least three different linking words.",
          parts: [
            { label: "a", prompt: "Write three sentences about the hobby.", marks: 2 },
            { label: "b", prompt: "Add at least three linking words.", marks: 2 },
            { label: "c", prompt: "Check: linkers fit the logic and the paragraph flows.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cohesive writing", statement: "Varied, appropriate linkers create flow." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three sentences about a real hobby.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct grammar in all sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — three different linkers added.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — linkers used correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — paragraph flows logically.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — final version polished.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3 sentences + 3 linkers + coherent paragraph.",
            commonErrors: ["Same linker repeated.", "Linkers that don't fit."],
            examinerNote: "Linkers must vary and be appropriate.",
          },
        },
      ],
    },
  ],
};
