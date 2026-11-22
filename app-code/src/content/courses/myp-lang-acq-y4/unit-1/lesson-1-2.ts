import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mla4-u1-lesson-1-2",
  code: "1-2",
  title: "Reading Longer Texts and Inferring Implied Meaning",
  goal: "I CAN read longer articles and stories, infer meaning that is not stated directly, and understand implied attitudes and conclusions.",
  standards: [
    "MYP Language Acquisition",
    "Criterion B: Reading",
    "Criterion A: Listening",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Implied meaning", definition: "What a text suggests without stating it directly." },
    { term: "Inference", definition: "A conclusion drawn from evidence in the text." },
    { term: "Tone", definition: "The writer's attitude towards the subject." },
    { term: "Conclusion", definition: "What the writer wants you to take away from the text." },
    { term: "Nuance", definition: "A subtle difference in meaning or feeling." },
  ],
  concepts: [
    {
      id: "mla4-u1-implied-meaning",
      title: "Inferring implied meaning",
      skill: "Read between the lines: identify what a text implies about attitudes, relationships and conclusions.",
      lesson: {
        sections: [
          {
            heading: "Beyond the literal",
            body: "At MYP 4, texts say more than they state. A character who 'sighed and looked out of the window' is probably sad — even if the text never says 'sad'. An article that lists only negative facts about a policy implies criticism. Look for **patterns**: repeated negative words, actions that contradict words, or what's left unsaid.",
          },
          {
            heading: "Inferring attitude",
            body: "Attitude is often implied through **word choice**, **what is emphasised**, and **what is omitted**. 'The minister's much-anticipated speech was disappointingly short' implies criticism — 'much-anticipated' sets up expectation, 'disappointingly' delivers the judgement. Learn to notice these subtle signals.",
          },
          {
            heading: "Inferring conclusions",
            body: "The conclusion is what the writer wants you to believe. Look at the **final paragraph** — it often contains the main message. Also check: does the writer present one side only? Do they use emotional language? These suggest the intended conclusion even when not stated explicitly.",
          },
        ],
        keyFormulas: [
          { name: "Inference sources", statement: "Word choice + emphasis + omission + final paragraph" },
        ],
        workedExample: {
          problem: "Text ends: 'Some say the new policy will fail. Only time will tell.' What is implied about the writer's confidence?",
          solution: "The writer is sceptical — 'only time will tell' suggests doubt about success without saying 'I think it will fail'.",
        },
      },
      questions: [
        {
          id: "mla4-u1-implied-meaning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'implied meaning'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What a text suggests without stating it directly" },
              { id: "b", text: "A direct quote" },
              { id: "c", text: "The title of a text" },
              { id: "d", text: "The literal meaning of words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Implied meaning", statement: "Suggested but not stated directly." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — implied = suggested, not stated.", working: "suggested not stated", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** What a text suggests without stating it directly",
            commonErrors: ["Confusing with literal meaning."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Empty Playground",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The new playground was supposed to open last week, but the gates are still locked. The promised slides and swings remain covered in plastic. A sign reads: 'Opening soon.' No date is given.",
          },
          stem: "What does the text imply about the playground's opening? Use evidence from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference from details", statement: "Locked gates + covered equipment + vague sign = delayed opening." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — implies the opening is delayed/postponed.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — evidence: gates still locked, equipment covered.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Opening soon' with no date reinforces vagueness/delay.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Opening is delayed — gates locked, equipment covered, vague 'soon'.",
            commonErrors: ["Saying it 'will open soon' literally — the implication is delay."],
            examinerNote: "Must cite evidence.",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Review Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The film was technically impressive, with stunning visuals and a powerful score. However, the story felt hollow, and the characters never came alive. By the end, I found myself checking the time.",
          },
          stem: "What is the reviewer's overall attitude? How do the positive and negative comments work together?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced attitude inference", statement: "Positive technical praise + negative emotional response = mixed but ultimately negative." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — attitude: mixed but ultimately negative (checked time = bored).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — positive: impressive visuals, powerful score.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — negative: hollow story, characters not alive, bored.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation shows how contrast builds the attitude.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Mixed but negative — praises visuals/music but criticises story; boredom confirms it.",
            commonErrors: ["Calling it purely positive or purely negative."],
            examinerNote: "Must recognise the contrast structure.",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Letter to the Editor",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I am writing to express my deep concern about the proposed closure of our local library. The council claims this is a 'necessary cost-saving measure', but I would argue it is a false economy. Our library is not just a building — it is the heart of our community. Children use it for homework, elderly residents for company, and students for quiet study. Once it closes, this vital service will be lost forever. I urge every resident to sign the petition before it is too late.",
          },
          stem: "Read the letter and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the writer's main concern?", marks: 1 },
            { label: "b", prompt: "What argument does the writer use against the council's position?", marks: 2 },
            { label: "c", prompt: "What does 'false economy' imply?", marks: 2 },
            { label: "d", prompt: "What action does the writer want readers to take?", marks: 1 },
            { label: "e", prompt: "Write one sentence describing the writer's tone.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter analysis", statement: "Extract concern, argument, implied meaning, action, tone." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — library closure is the concern.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'false economy' argument: saving money now loses community value.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — counter-argument clearly stated.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'false economy' implies the savings are not worth the loss.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — implied meaning explained.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — sign the petition.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Criterion B: Reading — tone: urgent, concerned, persuasive.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Criterion D: Writing — tone described accurately in one sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) library closure (b) false economy/community value (c) savings not worth loss (d) sign petition (e) urgent/concerned.",
            commonErrors: ["Missing the implied meaning of 'false economy'."],
            examinerNote: "(c) must be an inference, not literal.",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to 'read between the lines'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To skip difficult words" },
              { id: "b", text: "To find meaning that is suggested but not stated" },
              { id: "c", text: "To translate the text" },
              { id: "d", text: "To read the last paragraph only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reading between the lines", statement: "Inferring implied meaning." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — implied meaning = suggested, not stated.", working: "implied", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To find meaning that is suggested but not stated",
            commonErrors: ["Thinking it means skipping text."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A character 'sighed and stared out of the window.' What is most likely implied?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are sad or worried" },
              { id: "b", text: "They are angry" },
              { id: "c", text: "They are excited" },
              { id: "d", text: "They are hungry" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference from action", statement: "Body language implies emotion." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — sighing + staring out = sadness/worry, implied not stated.", working: "sad", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They are sad or worried",
            commonErrors: ["Choosing literal actions instead of implied feeling."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Empty Shop",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The little shop on the corner had always been busy. Now the windows are dark and 'CLOSED' is painted on the door. The owner has not been seen for weeks.",
          },
          stem: "What does the text imply about the shop?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference from details", statement: "Dark windows + painted sign + absent owner = closed permanently." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — implies the shop has closed, possibly permanently.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — evidence: dark windows, painted sign, owner absent for weeks.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The shop has closed (possibly permanently) — dark windows, painted sign, owner gone.",
            commonErrors: ["Saying it is 'closed today' — the implication is longer-term."],
            examinerNote: "Evidence must support the inference.",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Review Snippet",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The film had three parts: the opening, the middle section and the ending.",
          },
          stem: "How many parts does the film have?",
          response: {
            type: "numeric",
            parts: [
              { label: "parts", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail scanning", statement: "Scan for the specific number asked." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — text lists opening, middle, ending = 3 parts.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**3**",
            commonErrors: ["Miscounting the listed sections."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Paragraph",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The principal called the new timetable 'a bold experiment'. She said results would be reviewed 'carefully and honestly' after one term.",
          },
          stem: "What does 'bold experiment' imply about the principal's attitude?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She is angry about the change" },
              { id: "b", text: "She is cautiously optimistic but uncertain" },
              { id: "c", text: "She is certain it will fail" },
              { id: "d", text: "She thinks it is a proven success" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Attitude inference", statement: "Word choice like 'experiment' implies uncertainty." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'experiment' suggests trying something unproven.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'bold' + 'reviewed' = cautious optimism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** She is cautiously optimistic but uncertain",
            commonErrors: ["Reading 'bold' as certain success."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Story Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Marta had practised her speech for weeks. On the day, her hands trembled as she stood up. The first sentence came out barely above a whisper. By the end, she was smiling and the audience was clapping.",
          },
          stem: "What does the text imply about Marta's feelings at the start and end of the speech?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Character emotion inference", statement: "Physical details imply feelings." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — start: nervous (trembling hands, whisper).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — end: confident/happy (smiling, applause).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — contrast shows she overcame her nerves.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Nervous at start (trembling, whisper); confident and happy at end (smiling, applause).",
            commonErrors: ["Missing the change in emotion."],
            examinerNote: "Both emotions needed.",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The company announced record profits this year. It also confirmed plans to close two factories and move production abroad. A spokesperson said the decisions were 'necessary adjustments'.",
          },
          stem: "What does the article imply about the company's decisions and the jobs affected?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Implied consequence", statement: "Closures imply job losses despite positive framing." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — implies jobs will be lost at the two factories.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'necessary adjustments' softens the negative news.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — contrast between profits and closures is implied.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Job losses are implied; 'necessary adjustments' is euphemistic framing of negative news.",
            commonErrors: ["Missing that 'adjustments' is a softened term."],
            examinerNote: "Must infer the unstated consequence.",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the writer's tone in this sentence? 'The minister's much-anticipated speech was disappointingly short.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral and factual" },
              { id: "b", text: "Critical and disappointed" },
              { id: "c", text: "Proud and excited" },
              { id: "d", text: "Amused and joking" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone", statement: "The writer's attitude shown through word choice." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'disappointingly' signals criticism.", working: "critical", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Critical and disappointed",
            commonErrors: ["Missing the negative evaluation in 'disappointingly'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Review Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The restaurant's prices are certainly reasonable. Whether the food matches them is another question entirely.",
          },
          stem: "What does the reviewer imply about the food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The food is probably not worth the price" },
              { id: "b", text: "The food is too expensive" },
              { id: "c", text: "The food is excellent value" },
              { id: "d", text: "The reviewer has never eaten there" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sarcasm/implied critique", statement: "'Whether... is another question' implies doubt." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'another question entirely' implies doubt about quality.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — implies food may not match the reasonable prices.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The food is probably not worth the price",
            commonErrors: ["Taking 'reasonable prices' praise at face value."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Story Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Grandfather's workshop was exactly as he had left it twenty years ago: the same tools on the same hooks, the same faint smell of sawdust. He ran his hand along the workbench and smiled, but his eyes were wet.",
          },
          stem: "What does the text imply about Grandfather's feelings and the meaning of the workshop?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nuanced inference", statement: "Mixed signals (smile + wet eyes) imply complex emotion." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — workshop holds memories/value (unchanged, beloved).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — wet eyes imply sadness or nostalgia.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — smile + tears = mixed feelings: joy and loss.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation acknowledges complexity.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Nostalgia and sadness — the workshop holds memories; wet eyes show emotion despite the smile.",
            commonErrors: ["Choosing only happiness or only sadness."],
            examinerNote: "Must capture the mixed emotion.",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Some residents welcomed the new park. Others grumbled that it took 'forever' to build and blocked their favourite shortcut.",
          },
          stem: "What does 'forever' in quotation marks imply about the complainers' view?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The park will never open" },
              { id: "b", text: "They think the delay was too long" },
              { id: "c", text: "The park took exactly one year" },
              { id: "d", text: "They are happy about the delay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Quoted word inference", statement: "Scare quotes signal the writer's distance from the word." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'forever' exaggerates; complainers think it took too long.", working: "too long", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They think the delay was too long",
            commonErrors: ["Taking 'forever' literally."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-implied-meaning-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Letter to the Editor",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I write regarding the proposed night curfew for teenagers. While I understand the concerns about safety, I must ask: at what age does a young person become old enough to be trusted with their own time? My sixteen-year-old brother already manages a part-time job and his own schedule. Surely trust must be earned, not dictated by a clock.",
          },
          stem: "Read the letter and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the writer's position on the curfew?", marks: 1 },
            { label: "b", prompt: "What argument does the writer use?", marks: 2 },
            { label: "c", prompt: "What does 'trust must be earned, not dictated by a clock' imply?", marks: 2 },
            { label: "d", prompt: "Write one sentence describing the writer's tone.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter analysis", statement: "Extract position, argument, implied meaning, tone." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — writer opposes the curfew.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — argument: teenagers can manage responsibility (brother's job/schedule).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — counter to safety concern acknowledged first.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — implies responsibility should be based on maturity, not age rules.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — implied meaning explained accurately.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — tone: persuasive, thoughtful, slightly challenging.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) against curfew (b) responsibility argument (c) maturity over rules (d) persuasive/challenging.",
            commonErrors: ["Missing the implied criticism of age-based rules."],
            examinerNote: "(c) must be an inference.",
          },
        },
      ],
    },
    {
      id: "mla4-u1-long-texts",
      title: "Reading longer texts efficiently",
      skill: "Use skimming, scanning and note-taking strategies for longer articles and reports.",
      lesson: {
        sections: [
          {
            heading: "Strategies for longer texts",
            body: "Longer texts need more than one pass: **Skim** first for the main idea (headings, first/last sentences). **Scan** for specific details when answering questions. **Note** key information as you read — this helps you remember and makes answering easier.",
          },
          {
            heading: "The SQ3R method",
            body: "A useful technique for longer texts: **S**urvey (look at title, headings, pictures), **Q**uestion (turn headings into questions), **R**ead (actively, answering your questions), **R**ecite (summarise each section in your own words), **R**eview (check your notes). This turns passive reading into active comprehension.",
          },
          {
            heading: "Handling unfamiliar vocabulary",
            body: "In longer texts, don't stop for every unknown word. Use context clues, cognates and word families. Mark only words that appear repeatedly or block meaning. Look them up after reading — this keeps your comprehension flowing.",
          },
        ],
        keyFormulas: [
          { name: "SQ3R", statement: "Survey → Question → Read → Recite → Review" },
        ],
        workedExample: {
          problem: "How would you approach a 3-page article about climate change?",
          solution: "Survey headings → form questions → read actively → summarise each section → review notes.",
        },
      },
      questions: [
        {
          id: "mla4-u1-long-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'skimming' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading every word carefully" },
              { id: "b", text: "Skipping all the text" },
              { id: "c", text: "Reading quickly for the main idea" },
              { id: "d", text: "Reading backwards" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Skimming", statement: "Quick reading for gist/main idea." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — skimming = quick read for main idea.", working: "quick for main idea", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reading quickly for the main idea",
            commonErrors: ["Confusing with scanning for detail."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-long-texts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "List the five steps of SQ3R in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "SQ3R", statement: "Survey, Question, Read, Recite, Review." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — first three steps: Survey, Question, Read.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — last two: Recite, Review.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Survey → Question → Read → Recite → Review",
            commonErrors: ["Wrong order or missing steps."],
            examinerNote: "All five in order needed.",
          },
        },
        {
          id: "mla4-u1-long-texts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "School Lunch Changes",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Starting next term, our school will serve only healthy food in the canteen. The old menu offered chips, burgers and sugary drinks. The new menu includes salads, sandwiches, fruit and water. Some students are unhappy about losing their favourite foods, but nutritionists say the change is a positive step for children's health.",
          },
          stem: "Use skimming and scanning to answer: What is the main idea? What two foods are being removed? What is one reason for the change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Skim + scan strategy", statement: "Skim for main idea; scan for specific details." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main idea: school switching to healthy-only menu.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — removed: chips, burgers, sugary drinks (any two).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — reason: improve children's health (nutritionists' view).", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — all three answered clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Healthy menu; chips/burgers/sugary drinks; better health.",
            commonErrors: ["Listing new foods instead of removed ones."],
            examinerNote: "Must distinguish old vs new menu.",
          },
        },
        {
          id: "mla4-u1-long-texts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Rise of Electric Cars",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Electric cars are becoming more popular every year. In 2020, only 3% of new cars sold were electric. By 2024, that figure had risen to 18%. Governments are encouraging the switch by offering grants and building more charging stations. However, critics point out that batteries are expensive to produce and charging can take hours. Despite these challenges, industry experts predict that electric vehicles will dominate the market within a decade.",
          },
          stem: "Read the article and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the main idea of the article?", marks: 1 },
            { label: "b", prompt: "Give two statistics from the text.", marks: 2 },
            { label: "c", prompt: "Name one advantage and one disadvantage of electric cars.", marks: 2 },
            { label: "d", prompt: "What do experts predict?", marks: 1 },
            { label: "e", prompt: "Write three questions you would ask after reading this article.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Long text analysis", statement: "Extract main idea, statistics, pros/cons, predictions; generate questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — electric cars are growing in popularity.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 3% in 2020, 18% in 2024.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — both statistics correct.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — advantage: grants/charging stations/government support; disadvantage: expensive batteries/slow charging.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — both sides identified.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — electric vehicles will dominate within a decade.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Criterion C: Speaking — three relevant questions about the article.", marks: 1, markCode: "C" },
              { part: "e", reasoning: "Criterion D: Writing — questions well-formed.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) EV growth (b) 3%→18% (c) advantage+disadvantage (d) dominate in decade (e) three questions.",
            commonErrors: ["Questions unrelated to the article."],
            examinerNote: "(e) must relate to article content.",
          },
        },
        {
          id: "mla4-u1-long-texts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'scanning' mean when reading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Looking quickly for specific information" },
              { id: "b", text: "Summarising the whole text" },
              { id: "c", text: "Skipping the text entirely" },
              { id: "d", text: "Reading every word slowly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scanning", statement: "Quick search for specific details." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — scanning = quick search for details.", working: "details", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Looking quickly for specific information",
            commonErrors: ["Confusing scanning with skimming."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-long-texts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In SQ3R, what does the 'Q' step stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quote" },
              { id: "b", text: "Question" },
              { id: "c", text: "Quick" },
              { id: "d", text: "Quality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "SQ3R", statement: "Survey, Question, Read, Recite, Review." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Q = Question (turn headings into questions).", working: "Question", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Question",
            commonErrors: ["Forgetting the SQ3R order."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla4-u1-long-texts-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The city council approved a new cycling path along the river. The path will open in spring and cost 2 million dollars. It will connect the station to the park.",
          },
          stem: "Use skimming and scanning to answer: What is the main topic? When will the path open?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Skim + scan", statement: "Skim for topic; scan for details." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main topic: new cycling path along the river.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — opens in spring.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Cycling path; opens in spring.",
            commonErrors: ["Answering the cost instead of the opening time."],
            examinerNote: "Both answers needed.",
          },
        },
        {
          id: "mla4-u1-long-texts-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The field trip visited three places: the museum, the botanical garden and the old harbour.",
          },
          stem: "How many places did the field trip visit?",
          response: {
            type: "numeric",
            parts: [
              { label: "places", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail scanning", statement: "Count the listed items." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — museum, garden, harbour = 3 places.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**3**",
            commonErrors: ["Miscounting the list."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mla4-u1-long-texts-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "SQ3R Practice",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Heading: 'Why Sleep Matters'\n\nFirst paragraph: 'Students who sleep nine hours concentrate better in class.'",
          },
          stem: "Following SQ3R, what question would you turn the heading into?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'When do students sleep?'" },
              { id: "b", text: "'Why is sleep important for students?'" },
              { id: "c", text: "'How many hours should students sleep?'" },
              { id: "d", text: "'Who wrote this article?'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "SQ3R Question step", statement: "Turn headings into guiding questions." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — heading 'Why Sleep Matters' → 'Why is sleep important?'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — question guides reading of the section.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 'Why is sleep important for students?'",
            commonErrors: ["Questions unrelated to the heading."],
            examinerNote: "B2 for (a).",
          },
        },
        {
          id: "mla4-u1-long-texts-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Volunteers cleaned the riverbank on Saturday. They collected 200 kilograms of rubbish, including plastic bottles and old tyres. The council praised their effort and said it would repeat the event next month.",
          },
          stem: "Use scanning to find: How much rubbish was collected? What will happen next month?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scanning for details", statement: "Locate specific facts quickly." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 200 kilograms of rubbish collected.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — event will be repeated next month.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — both details correctly scanned.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "200 kg of rubbish; event repeated next month.",
            commonErrors: ["Finding the main idea instead of details."],
            examinerNote: "Both details needed.",
          },
        },
        {
          id: "mla4-u1-long-texts-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Long Article Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Urban farming is growing in popularity. City dwellers are turning rooftops and balconies into small gardens. Proponents argue it provides fresh food and reduces transport costs. Critics note that yields are small and the start-up costs can be high.",
          },
          stem: "Summarise the article's main idea in two sentences using your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summarising", statement: "Capture main idea concisely in own words." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main idea: urban farming is rising in cities.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — includes both sides: benefits (fresh food) and limits (small yields, cost).", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — summary is accurate and in own words.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Urban farming is growing; it offers fresh food but has small yields and high start-up costs.",
            commonErrors: ["Copying sentences instead of summarising."],
            examinerNote: "Must capture both sides briefly.",
          },
        },
        {
          id: "mla4-u1-long-texts-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you not stop at every unknown word in a long text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is against the rules" },
              { id: "b", text: "Unknown words are never important" },
              { id: "c", text: "Dictionaries are not allowed" },
              { id: "d", text: "It breaks your concentration and slows comprehension" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vocabulary strategy", statement: "Use context and look up key words later." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — stopping breaks flow and slows understanding.", working: "flow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It breaks your concentration and slows comprehension",
            commonErrors: ["Thinking every word must be known first."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla4-u1-long-texts-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The museum's new exhibition opens on Friday. Entry is free for students, but adults pay 12 dollars. The exhibition runs until the end of June.",
          },
          stem: "A reader wants to know: Can adults enter for free, and how long does the exhibition last? Which strategy should they use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scan for the specific details" },
              { id: "b", text: "Translate the text first" },
              { id: "c", text: "Read only the title" },
              { id: "d", text: "Skim the whole article slowly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Strategy choice", statement: "Specific questions → scanning; general idea → skimming." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — specific details needed → scan.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — scanning finds price and dates quickly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Scan for the specific details",
            commonErrors: ["Choosing skimming for detail questions."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u1-long-texts-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The school chess club has grown from 8 members to 40 this year. The teacher in charge says the club teaches patience and strategy. However, the school has not yet found a permanent room, so meetings move between the library and the gym.",
          },
          stem: "Summarise the article and note one problem mentioned.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summarise + detail", statement: "Main idea plus a supporting problem." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — summary: chess club grew rapidly (8→40).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — benefit: teaches patience and strategy.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — problem: no permanent room; meetings move around.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — summary is clear and concise.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Chess club grew to 40 members and teaches patience/strategy; problem: no permanent room.",
            commonErrors: ["Missing the room problem."],
            examinerNote: "Summary and problem both needed.",
          },
        },
        {
          id: "mla4-u1-long-texts-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Attendance at the evening class has been 'steadily climbing' according to the organiser, though exact figures were not released.",
          },
          stem: "Why might a critical reader be cautious about the claim 'steadily climbing'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because the organiser gave no figures to support it" },
              { id: "b", text: "Because quotes are always unreliable" },
              { id: "c", text: "Because climbing is a difficult word" },
              { id: "d", text: "Because the class is in the evening" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence evaluation", statement: "Claims without figures are hard to verify." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'no figures released' = claim is unverifiable.", working: "no evidence", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Because the organiser gave no figures to support it",
            commonErrors: ["Distrusting quotes automatically rather than missing evidence."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla4-u1-long-texts-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our school introduced a 'no homework weekend' pilot this term. Teachers reported that students returned on Monday more rested, but some parents worried students would forget what they had learned. The school will review the pilot at the end of the term.",
          },
          stem: "Read the article and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the article mainly about?", marks: 1 },
            { label: "b", prompt: "Give one positive and one negative point mentioned.", marks: 2 },
            { label: "c", prompt: "What will happen at the end of the term?", marks: 1 },
            { label: "d", prompt: "Write one question you would ask the school about this pilot.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Long text analysis", statement: "Extract main idea, pros/cons, future action; generate a question." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — school pilot of homework-free weekends.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — positive: students more rested; negative: parents worry about forgetting.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — both sides identified.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — school will review the pilot.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — relevant question (e.g. about results or continuation).", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — question is grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) homework-free weekend pilot (b) rested vs forgetting (c) review at term end (d) one question.",
            commonErrors: ["Question unrelated to the pilot."],
            examinerNote: "(d) must relate to article content.",
          },
        },
      ],
    },
  ],
};
