import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "langb-u6-lesson-6-2",
  code: "6-2",
  title: "Independent Learning Strategies",
  goal: "I CAN take responsibility for my language learning through self-directed study, goal-setting and resource use.",
  standards: ["Independent learning", "Study skills", "Self-direction", "Language B SL"],
  vocabulary: [
    { term: "Independent learning", definition: "Taking responsibility for your own learning — setting goals, choosing methods, evaluating progress." },
    { term: "SMART goal", definition: "A goal that is Specific, Measurable, Achievable, Relevant and Time-bound." },
    { term: "Deliberate practice", definition: "Focused practice targeting specific weaknesses rather than general repetition." },
    { term: "Learning strategy", definition: "A method for acquiring or using language — e.g. spaced repetition, extensive reading." },
    { term: "Autonomy", definition: "The capacity to direct your own learning without constant external direction." },
    { term: "Input vs output", definition: "Input = receiving language (reading/listening); output = producing it (writing/speaking)." },
  ],
  concepts: [
    {
      id: "langb-u6-goal-setting",
      title: "Setting effective learning goals",
      skill: "Create SMART goals for language learning and track progress systematically.",
      lesson: {
        sections: [
          {
            heading: "Why goals matter",
            body: "Language learning without goals drifts — you study but don't progress measurably. **SMART goals** fix this: **Specific** ('improve my essay structure' not 'get better at writing'), **Measurable** ('write 3 essays per week' not 'write more'), **Achievable** (realistic for your level), **Relevant** (serves your actual needs), **Time-bound** ('by end of term'). Goals turn vague ambition into daily action.",
          },
          {
            heading: "Input and output balance",
            body: "Language learning needs both **input** (reading, listening — how you absorb the language) and **output** (writing, speaking — how you produce it). A common mistake is over-relying on input: you understand lots but can't produce. Balance your study: for every hour of reading/listening, include writing or speaking practice. Output exposes gaps that input hides.",
          },
          {
            heading: "Tracking progress",
            body: "Progress in language is invisible day-to-day — you need records. Keep a learning journal: what you studied, what you struggled with, what improved. Re-read old work after a month — the improvement is usually striking. Track vocabulary growth, essay scores, speaking confidence. Measurable progress motivates and reveals what actually works.",
          },
        ],
        keyFormulas: [
          { name: "SMART", statement: "Specific + Measurable + Achievable + Relevant + Time-bound" },
          { name: "Balance rule", statement: "Input (read/listen) + output (write/speak) — both required" },
        ],
        workedExample: {
          problem: "Turn 'get better at listening' into a SMART goal.",
          solution: "'Complete one graded listening exercise daily and note 5 new words per session; review notes weekly. Target: understand 80% of a B1-level audio by term end.'",
        },
      },
      questions: [
        {
          id: "langb-u6-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does SMART stand for in goal-setting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Specific, Measurable, Achievable, Relevant, Time-bound" },
              { id: "b", text: "Strategic, Methodical, Active, Regular, Targeted" },
              { id: "c", text: "Simple, Moderate, Achievable, Relevant, Timely" },
              { id: "d", text: "Study, Measure, Achieve, Review, Track" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SMART goals", statement: "Specific, Measurable, Achievable, Relevant, Time-bound." },
            ],
            steps: [
              { reasoning: "SMART is the standard acronym for effective goal criteria.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Specific, Measurable, Achievable, Relevant, Time-bound",
            commonErrors: ["Setting vague goals like 'study more' without criteria."],
          },
        },
        {
          id: "langb-u6-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'input' and 'output' in language learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Input vs output", statement: "Input = receiving language; output = producing it." },
            ],
            steps: [
              { reasoning: "Input: reading and listening — absorbing vocabulary, structures, patterns.", marks: 1, markCode: "M" },
              { reasoning: "Output: writing and speaking — actively producing language.", marks: 1, markCode: "M" },
              { reasoning: "Both needed — input alone gives recognition without production ability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Input = receive (read/listen); output = produce (write/speak). Both essential.",
            commonErrors: ["Only consuming language without practising production."],
          },
        },
        {
          id: "langb-u6-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'deliberate practice' beats general repetition for language improvement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Deliberate practice", statement: "Targeted practice on specific weaknesses produces faster improvement than unfocused repetition." },
            ],
            steps: [
              { reasoning: "General repetition practises what you already know — comfortable but stagnant.", marks: 1, markCode: "R" },
              { reasoning: "Deliberate practice identifies specific weaknesses and drills them.", marks: 1, markCode: "M" },
              { reasoning: "It requires effortful focus on the edge of your ability — where growth happens.", marks: 1, markCode: "M" },
              { reasoning: "Targeted error correction (from error logs) is deliberate practice in action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deliberate practice targets weaknesses specifically — faster improvement than comfortable repetition.",
            commonErrors: ["Repeating easy material instead of challenging weak areas."],
          },
        },
        {
          id: "langb-u6-q12",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Create a SMART goal for improving your Language B writing.",
          parts: [
            { label: "a", prompt: "Write the goal following all five SMART criteria.", marks: 2 },
            { label: "b", prompt: "Explain how you will measure progress.", marks: 2 },
            { label: "c", prompt: "Explain why this goal is achievable and relevant for you.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "SMART goal creation", statement: "All five criteria met + measurable tracking + realistic scope." },
            ],
            steps: [
              { part: "a", reasoning: "Goal states specific skill (e.g. essay structure), measurable outcome (e.g. 2 essays/week), time-bound (e.g. by term end).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All SMART criteria addressed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Measurement: track essay scores, self-assess against criteria, keep drafts for comparison.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Concrete tracking method described.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Achievable: realistic for current level and time available.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Relevant: serves actual Language B assessment needs.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Personal fit explained — goal matches real priorities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) SMART goal with all criteria. (b) Measurable tracking (scores, drafts). (c) Achievable scope + relevant to Language B needs.",
            commonErrors: ["Goals like 'improve writing' — not specific or measurable."],
          },
        },
        {
          id: "langb-u6-q51",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of these is the correct expansion of SMART?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Specific, Measurable, Achievable, Relevant, Time-bound" },
              { id: "b", text: "Simple, Moderate, Achievable, Regular, Timely" },
              { id: "c", text: "Study, Measure, Achieve, Review, Track" },
              { id: "d", text: "Strategic, Methodical, Active, Realistic, Targeted" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SMART goals", statement: "Specific, Measurable, Achievable, Relevant, Time-bound." },
            ],
            steps: [
              { reasoning: "SMART is the standard acronym for effective goal criteria.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Specific, Measurable, Achievable, Relevant, Time-bound",
            commonErrors: ["Mixing up the acronym with other study-related terms."],
          },
        },
        {
          id: "langb-u6-q52",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is a 'measurable' language-learning goal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Study harder this term" },
              { id: "b", text: "Get better at writing" },
              { id: "c", text: "Improve my vocabulary somehow" },
              { id: "d", text: "Write 3 essays per week and self-score them against the criteria" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Measurable goal", statement: "Progress can be counted or assessed — not just felt." },
            ],
            steps: [
              { reasoning: "Measurable goals specify quantities or checkable outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Write 3 essays per week and self-score them against the criteria",
            commonErrors: ["Confusing 'specific-sounding' with 'measurable'."],
          },
        },
        {
          id: "langb-u6-q53",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In language learning, 'input' refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing essays and giving presentations" },
              { id: "b", text: "Memorising grammar rules only" },
              { id: "c", text: "Receiving language — reading and listening" },
              { id: "d", text: "Speaking with native speakers only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Input", statement: "Receiving language through reading and listening." },
            ],
            steps: [
              { reasoning: "Input = absorbing language via reading/listening; output = producing it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Receiving language — reading and listening",
            commonErrors: ["Confusing input with output activities."],
          },
        },
        {
          id: "langb-u6-q54",
          difficulty: "core",
          totalMarks: 2,
          stem: "In language learning, 'output' refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producing language — writing and speaking" },
              { id: "b", text: "Listening to podcasts" },
              { id: "c", text: "Reading graded readers" },
              { id: "d", text: "Highlighting vocabulary in texts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Output", statement: "Producing language through writing and speaking." },
            ],
            steps: [
              { reasoning: "Output = active production of language.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Producing language — writing and speaking",
            commonErrors: ["Listing input activities as output."],
          },
        },
        {
          id: "langb-u6-q55",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is balancing input and output important in language learning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because input alone lets you understand but not produce — output exposes gaps input hides" },
              { id: "b", text: "Because reading and listening are useless" },
              { id: "c", text: "Because output is always more important than input" },
              { id: "d", text: "Because you can only study one skill per day" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance rule", statement: "Input + output both required — output exposes gaps input hides." },
            ],
            steps: [
              { reasoning: "Input builds recognition; output tests production — each reveals different gaps.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Because input alone lets you understand but not produce — output exposes gaps input hides",
            commonErrors: ["Over-relying on input because it feels productive."],
          },
        },
        {
          id: "langb-u6-q56",
          difficulty: "core",
          totalMarks: 2,
          stem: "An 'achievable' goal is one that is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same as your friend's goal" },
              { id: "b", text: "Realistic for your current level and available time" },
              { id: "c", text: "As difficult as possible to build character" },
              { id: "d", text: "Impossible but motivating" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Achievable", statement: "Realistic for your level and time — stretching but not impossible." },
            ],
            steps: [
              { reasoning: "Achievable means within reach given your current level and schedule.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Realistic for your current level and available time",
            commonErrors: ["Setting goals so hard they guarantee failure."],
          },
        },
        {
          id: "langb-u6-q57",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The main purpose of keeping a learning journal is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace all practice" },
              { id: "b", text: "Prove you studied to your parents" },
              { id: "c", text: "Write your essays for you" },
              { id: "d", text: "Track what you studied, struggled with and improved — making progress visible" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Learning journal", statement: "A record making progress visible and revealing which methods work." },
            ],
            steps: [
              { reasoning: "Journals track activities, difficulties and improvements over time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Track what you studied, struggled with and improved — making progress visible",
            commonErrors: ["Treating the journal as proof of effort rather than a diagnostic tool."],
          },
        },
        {
          id: "langb-u6-q58",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two of the five SMART criteria and briefly define each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "SMART criteria", statement: "Specific, Measurable, Achievable, Relevant, Time-bound." },
            ],
            steps: [
              { reasoning: "Any two correct: Specific = clearly defined target; Measurable = countable/checkable outcome.", marks: 1, markCode: "M" },
              { reasoning: "Both names and definitions are accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. Specific = clearly defined target; Measurable = progress can be counted or assessed (also: Achievable, Relevant, Time-bound).",
            commonErrors: ["Naming the letters without explaining what they mean."],
          },
        },
        {
          id: "langb-u6-q59",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why vague goals like 'get better at languages' fail to produce progress.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Goal quality", statement: "Vague goals give no direction, no measure and no deadline." },
            ],
            steps: [
              { reasoning: "No specificity — 'better' could mean anything, so there's no clear target to aim at.", marks: 1, markCode: "M" },
              { reasoning: "No measure or deadline — progress can't be tracked and there's no urgency.", marks: 1, markCode: "M" },
              { reasoning: "Without criteria, you can't tell if you're improving or adjust your approach.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vague goals lack target, measure and deadline — they drift instead of directing daily action.",
            commonErrors: ["Claiming vague goals 'motivate' without explaining the practical failure."],
          },
        },
        {
          id: "langb-u6-q60",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a language learner needs both input and output practice, using a concrete example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance rule", statement: "Input (read/listen) + output (write/speak) — both required." },
            ],
            steps: [
              { reasoning: "Input absorbs the language: vocabulary, structures and patterns through reading/listening.", marks: 1, markCode: "M" },
              { reasoning: "Output tests production: writing/speaking forces you to actually use what you've absorbed.", marks: 1, markCode: "M" },
              { reasoning: "Example: a learner who only reads may recognise words but freeze when speaking; only output practice lacks the input to draw on.", marks: 1, markCode: "R" },
              { reasoning: "Balancing both builds recognition AND production — complete communicative competence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Input builds recognition; output builds production — you need both for real communicative ability.",
            commonErrors: ["Describing input and output without explaining why both are needed."],
          },
        },
        {
          id: "langb-u6-q61",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how tracking your progress can improve your language learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Progress tracking", statement: "Records make invisible progress visible and reveal what works." },
            ],
            steps: [
              { reasoning: "Language progress is invisible day-to-day — records (journals, scores, drafts) make it measurable.", marks: 1, markCode: "M" },
              { reasoning: "Re-reading old work after a month reveals improvement that daily study can't feel.", marks: 1, markCode: "M" },
              { reasoning: "Tracking shows which strategies actually work for you — data beats guesswork.", marks: 1, markCode: "R" },
              { reasoning: "Visible progress motivates; stagnation in a tracked area tells you to adjust strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tracking makes progress visible, reveals effective strategies and motivates continued effort.",
            commonErrors: ["Tracking only study hours rather than actual skill improvement."],
          },
        },
        {
          id: "langb-u6-q62",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student says their goal is 'become fluent by June'. Explain two ways this goal fails the SMART criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "SMART diagnosis", statement: "Identify which criteria a weak goal violates." },
            ],
            steps: [
              { reasoning: "Not measurable: 'fluent' is undefined — no level, test or countable outcome specified.", marks: 1, markCode: "M" },
              { reasoning: "Not specific: no target skill (speaking? writing? all four?) or method is named.", marks: 1, markCode: "M" },
              { reasoning: "Possibly not achievable: 'fluent' in months may exceed realistic scope without defined sub-goals.", marks: 1, markCode: "R" },
              { reasoning: "A SMART version would name a skill, a measurable level, and a realistic timeline.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fails measurable (undefined 'fluent'), specific (no skill/method) and likely achievable (scope too large).",
            commonErrors: ["Saying only 'it's not specific' without identifying the exact failing criteria."],
          },
        },
        {
          id: "langb-u6-q63",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Create a SMART goal for improving your Language B listening skills.",
          parts: [
            { label: "a", prompt: "Write the goal following all five SMART criteria.", marks: 2 },
            { label: "b", prompt: "Explain how you will measure your progress.", marks: 2 },
            { label: "c", prompt: "Explain why this goal is achievable and relevant for Language B.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "SMART goal creation", statement: "All five criteria met + measurable tracking + realistic scope." },
            ],
            steps: [
              { part: "a", reasoning: "Goal specifies skill (listening), measurable activity (e.g. daily graded exercises), and deadline (e.g. term end).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All SMART criteria addressed — not just some.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Measurement: comprehension scores, word counts noted, recorded self-assessment against level descriptors.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Concrete tracking method described.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Achievable: realistic frequency and difficulty for current level.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Relevant: listening is an assessed Language B skill.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Personal fit — goal matches actual priority and available time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) SMART listening goal with all criteria. (b) Comprehension scores/self-assessment tracking. (c) Realistic scope + assessed-skill relevance.",
            commonErrors: ["Goals like 'listen more' — no measure, deadline or target."],
          },
        },
      ],
    },
    {
      id: "langb-u6-learning-strategies",
      title: "Effective language-learning strategies",
      skill: "Apply proven strategies — spaced repetition, extensive reading, self-testing — to accelerate language acquisition.",
      lesson: {
        sections: [
          {
            heading: "Spaced repetition",
            body: "Reviewing material at increasing intervals beats cramming. **Spaced repetition** means reviewing vocabulary and structures just before you'd forget them — after 1 day, 3 days, 1 week, 2 weeks. Each successful recall strengthens memory. Apps automate this, but a simple notebook with scheduled review dates works too. Forgetting is part of learning — spacing exploits it.",
          },
          {
            heading: "Extensive reading and listening",
            body: "**Extensive reading** means reading large amounts of slightly-easy material for pleasure — graded readers, simple articles, learner texts. It builds vocabulary and fluency naturally through context, unlike intensive study of difficult texts. Similarly, extensive listening (podcasts, videos at your level) trains your ear. Aim for input you can mostly understand — 95%+ comprehension keeps it enjoyable and effective.",
          },
          {
            heading: "Self-testing and retrieval",
            body: "**Retrieval practice** — testing yourself rather than re-reading — is one of the most powerful learning strategies. Cover your notes and recall; do practice questions without looking; explain a concept in your own words. The effort of retrieval strengthens memory far more than passive review. In language learning, this means: produce before you check, recall before you look up.",
          },
        ],
        keyFormulas: [
          { name: "Spaced repetition", statement: "Review at 1 day → 3 days → 1 week → 2 weeks intervals" },
          { name: "Retrieval practice", statement: "Test yourself before checking — recall beats re-reading" },
        ],
        workedExample: {
          problem: "You learned 20 new words today. When should you review them?",
          solution: "Tomorrow, then 3 days later, then 1 week, then 2 weeks. Each recall before forgetting strengthens retention.",
        },
      },
      questions: [
        {
          id: "langb-u6-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'spaced repetition'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing each word ten times" },
              { id: "b", text: "Repeating everything every day" },
              { id: "c", text: "Studying only on weekends" },
              { id: "d", text: "Reviewing material at increasing intervals before forgetting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Spaced repetition", statement: "Reviewing at expanding intervals timed just before forgetting." },
            ],
            steps: [
              { reasoning: "Spaced repetition = timed intervals, not daily cramming.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Reviewing material at increasing intervals before forgetting",
            commonErrors: ["Cramming everything the night before instead of spacing reviews."],
          },
        },
        {
          id: "langb-u6-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'extensive reading' means and why it is effective for language learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Extensive reading", statement: "Reading large amounts of level-appropriate material for pleasure and fluency." },
            ],
            steps: [
              { reasoning: "Extensive reading = volume of accessible material, not intensive analysis.", marks: 1, markCode: "M" },
              { reasoning: "Context provides natural vocabulary acquisition without dictionary lookup.", marks: 1, markCode: "M" },
              { reasoning: "It builds fluency and reading speed — skills that transfer to exam texts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Extensive reading = high volume of easy material; builds vocabulary and fluency through context.",
            commonErrors: ["Reading only difficult texts intensively and burning out."],
          },
        },
        {
          id: "langb-u6-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'retrieval practice' is more effective than re-reading your notes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval practice", statement: "Active recall strengthens memory far more than passive review." },
            ],
            steps: [
              { reasoning: "Re-reading feels productive but creates illusion of knowing — recognition ≠ recall.", marks: 1, markCode: "R" },
              { reasoning: "Retrieval practice forces active recall — the mental effort builds stronger memory traces.", marks: 1, markCode: "M" },
              { reasoning: "It reveals what you actually know vs what you think you know.", marks: 1, markCode: "M" },
              { reasoning: "In language: produce before checking — write/speak first, then verify.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Retrieval practice builds stronger memory through effortful recall — beats passive re-reading.",
            commonErrors: ["Re-reading notes and mistaking familiarity for mastery."],
          },
        },
        {
          id: "langb-u6-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Design a weekly independent study plan for Language B improvement.",
          parts: [
            { label: "a", prompt: "Allocate activities across input and output skills.", marks: 2 },
            { label: "b", prompt: "Include one strategy for vocabulary building.", marks: 2 },
            { label: "c", prompt: "Explain how you will know the plan is working.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Study planning", statement: "Balanced input/output + vocabulary strategy + measurable tracking." },
            ],
            steps: [
              { part: "a", reasoning: "Plan includes reading/listening (input) AND writing/speaking (output) — e.g. 3 reading sessions + 2 writing tasks + 1 speaking practice weekly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Balance is explicit — not all input or all output.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vocabulary strategy: spaced repetition with word families/collocations, e.g. 10 words/day with scheduled reviews.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy uses proven method (spaced repetition) not just lists.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tracking: journal of sessions, vocabulary count, self-assessed writing samples.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete metrics show progress or reveal what to adjust.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Plan includes review point to adapt based on results.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Balanced input/output schedule. (b) Spaced-repetition vocabulary plan. (c) Journal + metrics + review point.",
            commonErrors: ["Planning only input activities or no tracking mechanism."],
          },
        },
        {
          id: "langb-u6-q64",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Spaced repetition' is best described as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reviewing material at increasing intervals just before you would forget it" },
              { id: "b", text: "Studying only once a week" },
              { id: "c", text: "Repeating material every single day" },
              { id: "d", text: "Writing each item ten times in one session" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Spaced repetition", statement: "Reviewing at expanding intervals timed just before forgetting." },
            ],
            steps: [
              { reasoning: "Spaced repetition uses expanding intervals timed near the forgetting point.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reviewing material at increasing intervals just before you would forget it",
            commonErrors: ["Confusing spaced repetition with daily cramming."],
          },
        },
        {
          id: "langb-u6-q65",
          difficulty: "core",
          totalMarks: 2,
          stem: "A typical spaced-repetition schedule for new vocabulary is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never review — one reading is enough" },
              { id: "b", text: "Review every hour until memorised" },
              { id: "c", text: "Review after 1 day, then 3 days, then 1 week, then 2 weeks" },
              { id: "d", text: "Review once a month only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Spaced repetition", statement: "Intervals expand: e.g. 1 day, 3 days, 1 week, 2 weeks." },
            ],
            steps: [
              { reasoning: "Each successful recall before forgetting strengthens retention; intervals expand over time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Review after 1 day, then 3 days, then 1 week, then 2 weeks",
            commonErrors: ["Choosing intervals that are too short or too long."],
          },
        },
        {
          id: "langb-u6-q66",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Retrieval practice' means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying vocabulary lists neatly" },
              { id: "b", text: "Asking the teacher for answers" },
              { id: "c", text: "Re-reading your notes until they feel familiar" },
              { id: "d", text: "Testing yourself — recalling information before checking it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval practice", statement: "Active recall before checking — effortful retrieval builds stronger memory." },
            ],
            steps: [
              { reasoning: "Retrieval practice = effortful self-testing before verification.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Testing yourself — recalling information before checking it",
            commonErrors: ["Mistaking passive re-reading for retrieval."],
          },
        },
        {
          id: "langb-u6-q67",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Extensive reading' means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading large amounts of level-appropriate material for pleasure and fluency" },
              { id: "b", text: "Reading only exam past papers" },
              { id: "c", text: "Analysing one very difficult text word by word" },
              { id: "d", text: "Translating every sentence into your first language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Extensive reading", statement: "High volume of accessible material for pleasure — builds fluency and vocabulary." },
            ],
            steps: [
              { reasoning: "Extensive = volume of easy, enjoyable material; intensive = deep analysis of hard texts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reading large amounts of level-appropriate material for pleasure and fluency",
            commonErrors: ["Confusing extensive reading with intensive text analysis."],
          },
        },
        {
          id: "langb-u6-q68",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For extensive reading to be effective, the material should be at a level where you understand roughly...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Almost nothing — maximum difficulty" },
              { id: "b", text: "About 95% or more — mostly understandable, with enjoyable challenge" },
              { id: "c", text: "Only material far below your level" },
              { id: "d", text: "Only 50% of the words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comprehension threshold", statement: "95%+ comprehension keeps extensive reading enjoyable and context-supported." },
            ],
            steps: [
              { reasoning: "High comprehension lets context carry new vocabulary without constant dictionary lookup.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** About 95% or more — mostly understandable, with enjoyable challenge",
            commonErrors: ["Choosing texts so hard that every sentence needs a dictionary."],
          },
        },
        {
          id: "langb-u6-q69",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does spaced repetition beat cramming the night before an assessment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because cramming is always more stressful" },
              { id: "b", text: "Because spaced repetition takes less total time always" },
              { id: "c", text: "Because teachers forbid cramming" },
              { id: "d", text: "Because each recall before forgetting strengthens long-term memory, while cramming fades quickly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spacing effect", statement: "Recall at expanding intervals builds durable memory; massed practice fades." },
            ],
            steps: [
              { reasoning: "Spacing exploits the forgetting curve — successful recall strengthens retention.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Because each recall before forgetting strengthens long-term memory, while cramming fades quickly",
            commonErrors: ["Thinking familiarity from recent review equals durable learning."],
          },
        },
        {
          id: "langb-u6-q70",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Self-testing beats re-reading your notes because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It feels easier" },
              { id: "b", text: "Effortful recall builds stronger memory traces and reveals what you actually know" },
              { id: "c", text: "It is faster" },
              { id: "d", text: "Notes are never useful" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval practice", statement: "Effortful recall builds stronger memory and exposes real gaps." },
            ],
            steps: [
              { reasoning: "Active recall is harder but far more effective than passive recognition.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Effortful recall builds stronger memory traces and reveals what you actually know",
            commonErrors: ["Choosing re-reading because it feels productive."],
          },
        },
        {
          id: "langb-u6-q71",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two proven language-learning strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Learning strategies", statement: "Spaced repetition, extensive reading/listening, retrieval practice." },
            ],
            steps: [
              { reasoning: "Any two valid: spaced repetition, extensive reading, extensive listening, retrieval practice/self-testing.", marks: 1, markCode: "M" },
              { reasoning: "Both are genuine evidence-based strategies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. spaced repetition and extensive reading (also: retrieval practice, extensive listening).",
            commonErrors: ["Listing 'study hard' instead of a specific strategy."],
          },
        },
        {
          id: "langb-u6-q72",
          difficulty: "core",
          totalMarks: 3,
          stem: "You learned 10 new words today. Describe a spaced-repetition review schedule for them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Spaced repetition", statement: "Review at expanding intervals timed just before forgetting." },
            ],
            steps: [
              { reasoning: "Schedule with expanding intervals, e.g. tomorrow, then 3 days, then 1 week, then 2 weeks.", marks: 1, markCode: "M" },
              { reasoning: "Each review is a quick recall test — produce the word/meaning before checking.", marks: 1, markCode: "M" },
              { reasoning: "The timing exploits near-forgetting so each recall strengthens retention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Review tomorrow, then 3 days later, 1 week, 2 weeks — with recall tests at each session.",
            commonErrors: ["Reviewing all words once and never again."],
          },
        },
        {
          id: "langb-u6-q73",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how 'retrieval practice' applies to language learning specifically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval practice in language", statement: "Produce before you check — recall vocabulary and structures actively." },
            ],
            steps: [
              { reasoning: "Vocabulary: cover the translation and recall the word before checking.", marks: 1, markCode: "M" },
              { reasoning: "Grammar: try to produce sentences with the target structure before reviewing rules.", marks: 1, markCode: "M" },
              { reasoning: "Skills: attempt writing/speaking tasks first, then compare with model answers.", marks: 1, markCode: "M" },
              { reasoning: "In every case, the effortful recall — not the checking — is what builds memory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Produce/recall before checking — for vocabulary, grammar and skills alike.",
            commonErrors: ["Checking answers first and then 'recalling' — no retrieval effort occurs."],
          },
        },
        {
          id: "langb-u6-q74",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why extensive reading should complement — not replace — work on difficult exam texts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extensive vs intensive", statement: "Extensive builds fluency/vocabulary; intensive analysis builds exam technique." },
            ],
            steps: [
              { reasoning: "Extensive reading builds vocabulary breadth, fluency and reading speed through enjoyable volume.", marks: 1, markCode: "M" },
              { reasoning: "Intensive work on difficult texts builds the close-analysis skills exams require.", marks: 1, markCode: "M" },
              { reasoning: "They develop different sub-skills — one cannot substitute for the other.", marks: 1, markCode: "R" },
              { reasoning: "A balanced reader gets both the volume that builds fluency and the analysis that scores marks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Extensive builds fluency and vocabulary; intensive analysis builds exam technique — both needed.",
            commonErrors: ["Claiming extensive reading alone prepares you for exam texts."],
          },
        },
        {
          id: "langb-u6-q75",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how you could use self-testing to learn a set of 20 new vocabulary items.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Self-testing vocabulary", statement: "Cover and recall before checking; space the recalls." },
            ],
            steps: [
              { reasoning: "Write words with translations hidden or on flashcards — attempt recall first.", marks: 1, markCode: "M" },
              { reasoning: "Check only after attempting — the struggle to recall is what strengthens memory.", marks: 1, markCode: "M" },
              { reasoning: "Combine with spaced repetition: recall again after 1 day, 3 days, 1 week.", marks: 1, markCode: "M" },
              { reasoning: "Also test production — use each word in a sentence, not just recognise it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Attempt recall before checking, space recalls over days, and test production in sentences.",
            commonErrors: ["Only recognising words (L1→L2) without practising production."],
          },
        },
        {
          id: "langb-u6-q76",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Design a vocabulary study plan for Language B using proven strategies.",
          parts: [
            { label: "a", prompt: "Choose a vocabulary strategy and describe how often you would do it.", marks: 2 },
            { label: "b", prompt: "Explain how retrieval practice fits into your plan.", marks: 2 },
            { label: "c", prompt: "Describe how you would evaluate whether the plan is working.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Strategy design", statement: "Evidence-based method + retrieval component + measurable evaluation." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. spaced repetition: 10 words/day with reviews at 1, 3, 7, 14 days.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear frequency and method described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Retrieval: recall word/meaning before checking each session — production test included.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Plan explicitly uses recall-before-checking, not passive review.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluation: weekly recall test of all learned words, track % retained.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Use results to adjust intervals or volume.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Plan includes a review point to adapt based on evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Spaced repetition schedule. (b) Recall-before-check testing. (c) Weekly retention tests + adjustment point.",
            commonErrors: ["A plan with no retrieval component or no way to measure results."],
          },
        },
      ],
    },
  ],
};
