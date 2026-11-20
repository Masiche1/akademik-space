import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mll3-u1-lesson-1-1",
  code: "1-1",
  title: "Fiction and Non-Fiction",
  goal: "I CAN distinguish literary (fiction) texts from non-literary texts and explain how each presents ideas.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Fiction", definition: "Made-up stories — novels, short stories, plays, poems — that explore ideas through invented characters and events." },
    { term: "Non-fiction", definition: "Texts based on real facts — articles, reports, biographies, speeches." },
    { term: "Literary text", definition: "A text valued for its language and craft — usually fiction, but good non-fiction can be literary too." },
    { term: "Literary device", definition: "A technique a writer uses to create meaning — imagery, metaphor, irony." },
    { term: "Text type", definition: "The form a text takes — article, letter, speech, report — defined by purpose and structure." },
  ],
  concepts: [
    {
      id: "mll3-u1-fiction-nonfiction",
      title: "Fiction vs non-fiction",
      skill: "Distinguish made-up stories from factual texts and explain how each presents meaning.",
      lesson: {
        sections: [
          {
            heading: "What is fiction?",
            body: "**Fiction** is invented — the characters and events are made up, even if inspired by real life. Novels, short stories, plays and most poems are fiction. Fiction explores ideas through **imagined** people and events — it can feel truer than fact because it shows human experience directly.",
          },
          {
            heading: "What is non-fiction?",
            body: "**Non-fiction** presents real information — news articles, reports, biographies, instructions, speeches. It claims to be **true** and aims to inform. But non-fiction still uses language choices — selection, ordering, tone — that shape how we see the facts.",
          },
          {
            heading: "The grey area",
            body: "Not everything is pure fiction or pure fact. A **memoir** is non-fiction but uses literary techniques. A **historical novel** is fiction set in real history. The key question: is the text presenting **invented** events or **real** information? And does it use literary techniques to do so?",
          },
        ],
        keyFormulas: [
          { name: "Fiction vs non-fiction", statement: "Fiction = invented events/characters. Non-fiction = real facts and information." },
        ],
        workedExample: {
          problem: "Is 'a biography of Marie Curie' fiction or non-fiction? Is 'a novel about a scientist who discovers radium' fiction or non-fiction?",
          solution: "The biography is non-fiction — real facts about a real person. The novel is fiction — invented character, though inspired by real science.",
        },
      },
      questions: [
        {
          id: "mll3-u1-fiction-nonfiction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a non-fiction text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fantasy novel about dragons" },
              { id: "b", text: "A newspaper report about a local event" },
              { id: "c", text: "A poem about love" },
              { id: "d", text: "A play about a family" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-fiction", statement: "Non-fiction presents real facts and information." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): a newspaper report presents real events — non-fiction — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A newspaper report about a local event",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Text A: 'Maya pressed her nose to the cold glass and watched the first snow of winter fall on the empty street.'\n\nText B: 'According to the weather service, the first snowfall of the season occurred at 6am on Tuesday, covering the city in 4cm of snow.'",
          },
          stem: "Which text is fiction and which is non-fiction? Explain how you can tell.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fiction vs non-fiction signals", statement: "Fiction uses character names and sensory detail; non-fiction uses facts, figures and sources." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Text A is fiction — a named character ('Maya') experiencing the snow through senses.", evidence: "Maya pressed her nose", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Text B is non-fiction — cites a source ('weather service'), gives times and measurements.", evidence: "According to the weather service", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Text A = fiction (character, sensory experience); Text B = non-fiction (source, facts, measurements).",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a novel about a real historical event can still be fiction, while a biography of the same person is non-fiction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fiction vs non-fiction", statement: "Fiction invents characters/dialogue even in real settings; non-fiction reports verifiable facts." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the novel invents a character's inner life, dialogue and imagined scenes — these are not verifiable facts.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the biography reports documented facts — dates, actions, quotes — that can be checked.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): both may use real events, but fiction's characters and scenes are imagined while non-fiction's claims are factual.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A novel invents characters, dialogue and scenes (fiction); a biography reports documented, checkable facts (non-fiction) — even if both cover real events.",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two texts about the same event.",
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "Fiction: 'The storm hit at midnight. Elena counted the seconds between thunderclaps and held her brother's hand until the lights came back on.'\n\nNon-fiction: 'The storm made landfall at 00:14, with winds reaching 120 km/h. Emergency services responded to 47 calls overnight.'",
          },
          parts: [
            { label: "a", prompt: "Identify which is fiction and which is non-fiction.", marks: 1 },
            { label: "b", prompt: "Explain two features that reveal each text's type.", marks: 2 },
            { label: "c", prompt: "Explain why both texts might be useful to a reader wanting to understand the storm.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fiction vs non-fiction", statement: "Fiction gives emotional experience; non-fiction gives factual detail — both have value." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'Fiction:' label is Elena's story; 'Non-fiction:' is the factual report.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): fiction uses a named character, sensory/emotional detail ('counted the seconds', 'held her brother's hand').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): non-fiction uses times, measurements and official sources ('00:14', '120 km/h', 'emergency services').", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): fiction shows what it felt like; non-fiction shows what actually happened — together they give a complete picture.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): emotional truth and factual truth answer different questions about the same event.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Elena story = fiction; storm report = non-fiction. (b) Fiction: character/emotion; non-fiction: facts/measurements. (c) Fiction gives feeling, non-fiction gives facts — complementary.",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a fiction text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A biography of a famous scientist" },
              { id: "b", text: "A short story about a dragon who learns to fly" },
              { id: "c", text: "A news report on school exam results" },
              { id: "d", text: "A set of instructions for baking bread" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fiction", statement: "Fiction presents invented characters and events." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): a short story about a dragon is invented — fiction — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A short story about a dragon who learns to fly",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a non-fiction text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A play about two sisters" },
              { id: "b", text: "A poem about autumn leaves" },
              { id: "c", text: "A fantasy novel about a hidden world" },
              { id: "d", text: "A history textbook chapter on the Roman Empire" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-fiction", statement: "Non-fiction presents real facts and information." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): a textbook chapter presents documented facts — non-fiction — (d).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A history textbook chapter on the Roman Empire",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Text A: 'Priya counted the seconds until the bell, her heart hammering like a trapped bird.'\n\nText B: 'The school bell rings at 8:45 each morning, signalling the start of classes.'",
          },
          stem: "Which text is fiction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Text A" },
              { id: "b", text: "Text B" },
              { id: "c", text: "Both texts" },
              { id: "d", text: "Neither text" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fiction signals", statement: "Fiction uses named characters and sensory/emotional detail." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Text A has a named character ('Priya') feeling fear — invented experience — fiction — (a).", evidence: "Priya counted the seconds", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Text A — a named character experiencing an invented moment",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A historical novel about the Titanic and a survivor's memoir about the same ship are both based on real events. Which statement best distinguishes them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The novel is non-fiction because it uses real events; the memoir is fiction because it has a narrator" },
              { id: "b", text: "The novel is fiction — its characters and scenes are invented; the memoir is non-fiction — it documents the survivor's real experience" },
              { id: "c", text: "Both are fiction because they are about the past" },
              { id: "d", text: "Both are non-fiction because they use real events" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fiction vs non-fiction", statement: "Real events can appear in both — the difference is whether characters and scenes are invented or documented." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the novel is fiction (invented characters/scenes); the memoir is non-fiction (documented experience) — readers must check invented vs verifiable — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The novel is fiction — invented characters and scenes; the memoir is non-fiction — documented real experience",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Fiction is invented, yet readers often say a novel 'feels truer' than a news report. Explain how a made-up story can feel true while a factual report can feel misleading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emotional vs factual truth", statement: "Fiction shows human experience directly; non-fiction selects and frames facts." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): fiction can feel true because it shows inner feelings and sensory detail that reports can't — emotional truth.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): a report can feel misleading because it selects facts, uses loaded language and omits context — factual accuracy doesn't guarantee honesty.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'truth' depends on the question — fiction answers 'what does it feel like?', non-fiction answers 'what happened?' — each can deceive in different ways.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fiction feels true through emotional and sensory detail; a report can mislead through selection, loaded language and omission — different kinds of truth, different kinds of deception.",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two texts about the same river.",
          extract: {
            title: "The River",
            author: "Written for Akademik Space",
            text: "Diary: 'I keep a stone from the river in my pocket. Every time I touch it, I remember the day we said goodbye.'\n\nReport: 'The Riverbend development will add 120 homes along the eastern bank. Construction is scheduled to begin in March.'",
          },
          parts: [
            { label: "a", prompt: "Identify which text is fiction and which is non-fiction.", marks: 1 },
            { label: "b", prompt: "Explain two features that reveal each text's type.", marks: 2 },
            { label: "c", prompt: "Explain why both texts might interest a resident worried about the development.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fiction vs non-fiction", statement: "Fiction gives personal/emotional experience; non-fiction gives factual plans and figures." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the diary is fiction (invented personal memory); the report is non-fiction (factual development plan).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the diary uses a personal, sensory voice ('stone in my pocket', 'remember the day') — invented experience.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the report uses figures and scheduling ('120 homes', 'begin in March') — checkable facts.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the report tells the resident what will actually happen; the diary shows what the river means emotionally — facts and feeling together inform a decision.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the diary may reveal attachment the report ignores — a full picture needs both the plan and its human cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Diary = fiction; report = non-fiction. (b) Diary: personal/invented memory; report: figures and dates. (c) Report gives facts about the development; diary gives the emotional stakes — both matter to the resident.",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Five Texts",
            author: "Written for Akademik Space",
            text: "1. A novel about time travel\n2. A report on traffic figures\n3. A play about two brothers\n4. A biography of a singer\n5. A set of instructions for a recipe",
          },
          stem: "How many of these five texts are fiction? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fiction", statement: "Fiction presents invented characters and events." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the novel and the play are invented stories — 2 fiction texts; report, biography and instructions are non-fiction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which detail most strongly signals that a text is non-fiction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses a character's name" },
              { id: "b", text: "It cites a source and gives dates" },
              { id: "c", text: "It describes a character's feelings" },
              { id: "d", text: "It ends with a made-up surprise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Non-fiction signals", statement: "Non-fiction uses sources, dates, figures and checkable facts." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): sources and dates are verifiable — the strongest non-fiction signal — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It cites a source and gives dates",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'The festival drew 5,000 visitors over one weekend, with 120 stalls and 30 performers.'\n\nText B: 'Amara and Ben pushed through the crowd, their hearts pounding, certain the lost kitten was somewhere ahead.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many numerical figures appear in Text A?", marks: 1 },
            { label: "b", prompt: "How many named characters appear in Text B?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fiction vs non-fiction signals", statement: "Non-fiction uses figures; fiction uses named characters and sensory detail." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Text A contains 5,000, 120 and 30 — three figures.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Text B names Amara and Ben — two characters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 (b) 2",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which text is BOTH literary and non-fiction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fantasy novel" },
              { id: "b", text: "A newspaper report" },
              { id: "c", text: "A memoir written with vivid imagery and careful craft" },
              { id: "d", text: "A comic book" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Literary non-fiction", statement: "Real events can be presented with literary techniques — memoir is a classic example." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): a memoir is non-fiction (real events) but can use literary craft — both — (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A memoir written with vivid imagery and careful craft",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is non-fiction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A novel inspired by a flood" },
              { id: "b", text: "A podcast interview with a flood survivor" },
              { id: "c", text: "A fictional story about a flood" },
              { id: "d", text: "A comic book about a flood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fiction vs non-fiction", statement: "Real testimony reported = non-fiction; invented characters/scenes = fiction." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the podcast survivor recounts real, checkable experience — non-fiction — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A podcast interview with a flood survivor",
          },
        },
        {
          id: "mll3-u1-fiction-nonfiction-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two openings.",
          extract: {
            title: "Two Beginnings",
            author: "Written for Akademik Space",
            text: "Text A: 'I was born on a Tuesday, the same day the mill closed. Mother says the sound of the siren that morning still wakes her.'\n\nText B: 'Nobody knew the bell would ring twice that night — not the watchman, not the children asleep upstairs.'",
          },
          parts: [
            { label: "a", prompt: "Identify which text is fiction and which is non-fiction.", marks: 1 },
            { label: "b", prompt: "Explain two features that support your classification.", marks: 2 },
            { label: "c", prompt: "A reader claims non-fiction is always more reliable than fiction. Evaluate this claim.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fiction vs non-fiction reliability", statement: "Factual accuracy and honest presentation are different — both text types can mislead." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Text A is non-fiction (personal account of real events); Text B is fiction (invented suspense scene).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Text A uses real-world details ('born on a Tuesday', 'the mill closed', a mother's memory) — verifiable personal history.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Text B builds suspense around invented characters ('watchman', 'children') and an unexplained event — invented narrative.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the claim is too absolute — non-fiction can be biased, selective or false; fiction can be honest about human experience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): reliability depends on the writer's honesty and sourcing, not just the label 'fiction' or 'non-fiction'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A = non-fiction, B = fiction. (b) A: real personal details; B: invented suspense. (c) The claim is too absolute — reliability depends on honesty and sourcing in either type.",
          },
        },
      ],
    },
    {
      id: "mll3-u1-literary-nonliterary",
      title: "Literary and non-literary texts",
      skill: "Identify literary techniques in both fiction and non-fiction and explain their effect.",
      lesson: {
        sections: [
          {
            heading: "Literary techniques everywhere",
            body: "Literary techniques aren't just for novels. A **speech** can use repetition for power; an **article** can use vivid imagery; a **report** can use careful structure. Writers of all texts make **choices** to shape meaning.",
          },
          {
            heading: "Non-literary conventions",
            body: "Non-literary texts have their own conventions: **headlines**, **subheadings**, **quotations**, **statistics**, **captions**, **bylines**. These aren't decoration — they organize information and guide the reader.",
          },
          {
            heading: "Reading critically",
            body: "When reading non-fiction, ask: **who wrote this?** **who is it for?** **what is included and excluded?** **what facts are used?** Non-fiction is still **constructed** — someone chose what to say.",
          },
        ],
        keyFormulas: [
          { name: "Critical reading questions", statement: "Who wrote it? Who is it for? What's included/excluded? What facts are used?" },
        ],
        workedExample: {
          problem: "A news headline says 'Local Hero Saves Family'. Is this literary or non-literary? Does it use literary technique?",
          solution: "It's non-literary (news) but uses literary technique — 'Hero' is loaded language that makes the person sound brave before we read the facts.",
        },
      },
      questions: [
        {
          id: "mll3-u1-literary-nonliterary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature is typical of a newspaper article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A made-up character's thoughts" },
              { id: "b", text: "A headline and factual reporting" },
              { id: "c", text: "Rhyme and rhythm" },
              { id: "d", text: "A made-up ending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Non-literary conventions", statement: "Articles use headlines, facts and structured reporting." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): headline + factual reporting = article conventions — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A headline and factual reporting",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "We did not come here to play small. We came here to build, to lead, to be the generation that our children will remember.",
          },
          stem: "This is a political speech (non-literary). Identify one literary technique and explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literary technique in non-fiction", statement: "Speeches use rhetorical devices like repetition and triads for power." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'to build, to lead, to be' is a triad — three parallel phrases that build momentum.", evidence: "to build, to lead, to be", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the effect is persuasive and memorable — the repetition of 'to' and the rising rhythm make it sound powerful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Triad ('to build, to lead, to be') — repetition of 'to' creates rhythm and emphasis, making the speech more persuasive and memorable.",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Article",
            author: "Written for Akademik Space",
            text: "The new library opened Monday to crowds of residents. 'It's been ten years coming,' said Mayor Diaz, praising the $2 million project. Critics note the building lacks wheelchair access on the upper floor.",
          },
          stem: "This is non-fiction, but it still makes choices. Identify two choices the writer made and explain what each does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Constructed non-fiction", statement: "Non-fiction selects facts and quotes to shape the reader's view." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'crowds of residents' (positive) vs 'Critics note... lacks wheelchair access' (negative) — balances praise and criticism.", evidence: "crowds of residents ... Critics note", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): quoting the mayor ('ten years coming', '$2 million') gives official perspective; 'Critics note' introduces opposition — the writer includes both sides.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the choice of which facts to include (opening, praise, criticism) shapes a balanced but slightly positive view.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The writer includes both praise (crowds, mayor's quote) and criticism (accessibility) — balancing perspectives but choosing which facts to highlight.",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this speech extract.",
          extract: {
            title: "The Principal's Speech",
            author: "Written for Akademik Space",
            text: "Friends, we did it. We built this school together — parents, teachers, students. Tonight we celebrate not just bricks and mortar, but the thousands of small choices that made it possible.",
          },
          parts: [
            { label: "a", prompt: "Identify two literary/rhetorical techniques in this speech.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each technique.", marks: 2 },
            { label: "c", prompt: "Why does a speech benefit from literary techniques even though it's non-fiction?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical devices", statement: "Speeches use repetition, inclusive 'we', and metaphor to persuade and unite." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'We built this school together' — inclusive 'we' unites the audience.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'not just bricks and mortar, but...' — contrast/metaphor elevates the achievement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'we' makes everyone feel part of the success — shared ownership.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'bricks and mortar' vs 'small choices' contrasts the physical building with the human effort — makes the achievement feel deeper.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): speeches aim to persuade and move — literary techniques make the message memorable and emotional.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Inclusive 'we' and contrast ('not just bricks and mortar'). (b) 'We' unites; contrast elevates human effort. (c) Speeches need to persuade/move — literary techniques make it memorable.",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a literary technique that can appear in a non-fiction text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A made-up plot twist" },
              { id: "b", text: "Repetition used for persuasive emphasis" },
              { id: "c", text: "A rhyming couplet" },
              { id: "d", text: "An imaginary character" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literary technique in non-fiction", statement: "Speeches and articles use repetition, imagery and rhetoric — techniques once thought 'literary'." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): repetition for emphasis appears in speeches and ads — a literary technique in non-fiction — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Repetition used for persuasive emphasis",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature is typical of a non-literary text like a report or article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Invented dialogue between characters" },
              { id: "b", text: "Subheadings, quotations and attributed facts" },
              { id: "c", text: "A surprise ending" },
              { id: "d", text: "Rhyme scheme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Non-literary conventions", statement: "Reports and articles use headings, quotes, statistics and attribution." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): subheadings, quotations and attribution are report/article conventions — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Subheadings, quotations and attributed facts",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Text A: 'The city woke slowly, its streets still smelling of rain.'\n\nText B: 'According to the morning news, overnight rain caused minor flooding on Elm Street.'",
          },
          stem: "Which text is more literary, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Text A — it uses imagery ('streets still smelling of rain') to create a mood" },
              { id: "b", text: "Text B — it gives more facts" },
              { id: "c", text: "Both are equally literary" },
              { id: "d", text: "Neither is literary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literary vs non-literary", statement: "Literary texts value crafted language and imagery; non-literary texts inform with conventions." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Text A's sensory imagery ('smelling of rain') creates mood — literary — (a). Text B is factual reporting.", evidence: "streets still smelling of rain", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Text A — imagery and mood make it literary",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Advert",
            author: "Written for Akademik Space",
            text: "Tired of slow mornings? Our new coffee is rocket fuel for your day — one sip and you'll be unstoppable!",
          },
          stem: "This advertisement is non-literary, yet it uses literary techniques. Which pair does it use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile and alliteration" },
              { id: "b", text: "Rhetorical question ('Tired of slow mornings?') and metaphor/hyperbole ('rocket fuel', 'unstoppable')" },
              { id: "c", text: "A cast list and stage directions" },
              { id: "d", text: "Footnotes and a bibliography" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literary technique in advertising", statement: "Ads use metaphor, hyperbole and rhetorical questions to persuade." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Tired of slow mornings?' is a rhetorical question; 'rocket fuel' is a metaphor and 'unstoppable' is hyperbole — they grab attention and exaggerate — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rhetorical question and metaphor/hyperbole — they grab attention and exaggerate the product's power",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Editorial",
            author: "Written for Akademik Space",
            text: "The library is dying. Quietly, politely, it closes its doors — one branch at a time. We must not let our town's memory be sold for parking spaces.",
          },
          stem: "This is a newspaper editorial — non-literary in purpose but literary in craft. Identify two literary techniques and explain how they serve the editorial's persuasive purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literary persuasion", statement: "Editorials use metaphor and emotive language to move readers, not just inform them." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'the library is dying' is a metaphor — it makes closure feel like death, far more alarming than 'is closing'.", evidence: "The library is dying", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Quietly, politely' uses irony — politeness contrasts with the tragedy, heightening pathos.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'our town's memory' elevates the library from a building to identity — an emotional appeal that persuades readers to act.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metaphor ('is dying'), irony ('Quietly, politely') and emotional appeal ('town's memory') — literary craft makes the editorial persuasive rather than merely informative.",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this product description.",
          extract: {
            title: "The Backpack",
            author: "Written for Akademik Space",
            text: "Meet the Wanderer — a backpack that doesn't just carry your books, it carries your ambitions. Water-resistant, laptop-safe, and light enough to forget it's there. Your adventure starts here.",
          },
          parts: [
            { label: "a", prompt: "Identify two literary techniques in this description.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each technique.", marks: 2 },
            { label: "c", prompt: "Why does a product description benefit from literary language even though it is non-literary?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literary technique in advertising", statement: "Descriptions use metaphor and emotional appeal to make products desirable." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'carries your ambitions' is a metaphor — the bag carries dreams, not just items.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'Your adventure starts here' is an emotional appeal — it promises excitement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the ambition metaphor elevates a mundane object into a symbol of aspiration.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'adventure starts here' creates anticipation — the product becomes the beginning of an experience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): descriptions aim to persuade — literary language makes a product feel desirable and memorable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Metaphor ('carries your ambitions') and emotional appeal ('adventure starts here'). (b) They make the bag symbolic and exciting. (c) Literary language makes products desirable.",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Three Texts",
            author: "Written for Akademik Space",
            text: "Text 1: a poem about a storm\nText 2: a weather report giving temperatures and wind speeds\nText 3: a speech using repetition to inspire voters",
          },
          stem: "How many of these three texts use literary techniques? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literary technique in non-fiction", statement: "Literary devices appear in both fiction and non-fiction — the weather report is the exception here." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the poem and the speech use literary techniques (imagery, repetition); the weather report is purely factual — 2 texts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A headline reads 'BUDGET CUTS SLASH VITAL SERVICES'. Which technique makes this headline persuasive rather than neutral?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is written in capital letters" },
              { id: "b", text: "'Slashes' is a violent metaphor making cuts sound brutal" },
              { id: "c", text: "It is short" },
              { id: "d", text: "It mentions services" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded metaphor", statement: "Headlines use violent or emotional metaphors ('slashed') to frame facts negatively." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'slashed' is a violent metaphor — it makes budget cuts sound brutal — (b).", evidence: "SLASH VITAL SERVICES", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'Slashes' is a violent metaphor making cuts sound brutal",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "The new recycling scheme has been 'a roaring success', officials said, though participation remains below the 60% target set by the council.",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many quotation marks surround the evaluative phrase 'a roaring success'?", marks: 1 },
            { label: "b", prompt: "How many words does the quoted phrase 'a roaring success' contain?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Quotation in reports", statement: "Quotes let officials' evaluative language appear while the writer keeps factual distance." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the phrase is wrapped in an opening and closing single quote — 2 quotation marks.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'a roaring success' = a, roaring, success — 3 words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 (b) 3",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best explains the relationship between literary and non-literary texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literary techniques only appear in fiction" },
              { id: "b", text: "Non-literary texts never use imagery" },
              { id: "c", text: "Literary techniques can appear in any text — the difference is purpose and convention, not technique alone" },
              { id: "d", text: "Non-fiction is always more carefully written" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Literary technique everywhere", statement: "Any writer can use imagery, metaphor and rhetoric; what differs is the text's purpose and conventions." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): techniques aren't exclusive to fiction — purpose and convention define the text type — (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Literary techniques can appear in any text — purpose and convention define the type",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A charity letter says 'Every day, children go to bed hungry.' What technique does this use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistics" },
              { id: "b", text: "Imagery that creates an emotional picture" },
              { id: "c", text: "A formal report structure" },
              { id: "d", text: "A headline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotional appeal", statement: "Non-fiction persuades through imagery and emotive language, not just facts." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'go to bed hungry' is imagery — it creates a vivid, uncomfortable picture — (b).", evidence: "go to bed hungry", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Imagery that creates an emotional picture",
          },
        },
        {
          id: "mll3-u1-literary-nonliterary-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this speech extract.",
          extract: {
            title: "The Launch",
            author: "Written for Akademik Space",
            text: "They told us it couldn't be done. They said the river was too wide, the mountain too high, the dream too small. But look at us now — standing here, breathing the same air, dreaming the same dreams.",
          },
          parts: [
            { label: "a", prompt: "Identify two rhetorical or literary techniques.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each technique on the audience.", marks: 2 },
            { label: "c", prompt: "Why does repetition serve a speech better than a written essay?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical devices", statement: "Repetition and triads build momentum and unity in spoken persuasion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'too wide, too high, too small' is a triad of obstacles — three-part parallel structure.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'breathing the same air, dreaming the same dreams' is repetition/unity — shared identity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the triad builds a rhythm of doubt that the ending overturns — obstacles made memorable so victory feels earned.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'same air, same dreams' makes the audience feel united — 'we' language binds speaker and listeners.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): listeners can't re-read — repetition ensures key phrases stick; essays can be scanned back, speeches can't.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Triad ('too wide, too high, too small') and repetition ('same air, same dreams'). (b) Triad builds rhythmic doubt; repetition unites the audience. (c) Listeners can't re-read, so repetition makes ideas memorable.",
          },
        },
      ],
    },
  ],
};
