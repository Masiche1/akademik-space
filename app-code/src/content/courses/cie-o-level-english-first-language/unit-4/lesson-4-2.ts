import type { Lesson } from "../../../types.ts";

export const lesson142: Lesson = {
  id: "cie-ol-fl-lesson-4-2",
  code: "4-2",
  title: "Media and digital texts",
  goal: "I CAN analyse media texts and their techniques.",
  standards: ["1119 Reading: media texts"],
  vocabulary: [
    { term: "Media text", definition: "Text designed for mass audience." },
    { term: "Headline", definition: "Title designed to attract attention." },
    { term: "Bias", definition: "One-sided perspective." },
    { term: "Sensationalism", definition: "Emphasis on exciting/scandalous aspects." },
    { term: "Clickbait", definition: "Misleading title to generate clicks." },
    { term: "Target audience", definition: "Intended readership/viewership." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-media-analysis",
      title: "Media text analysis",
      skill: "Analyse newspapers, advertisements, social media.",
      lesson: {
        sections: [
          {
            heading: "News analysis",
            body: "Consider: headline vs content, selection of stories, word choice, images, placement. News isn't neutral.",
          },
          {
            heading: "Advertising",
            body: "Techniques: celebrity endorsement, emotional appeal, bandwagon, fear, aspiration. Target audience determines approach.",
          },
          {
            heading: "Social media",
            body: "Character limits shape messages. Algorithms select content. Viral content often sensational. Consider source credibility.",
          },
        ],
        keyFormulas: [
          { name: "Media analysis", statement: "Audience+techniques+bias+credibility=analysis." },
        ],
        workedExample: {
          problem: "Headline says 'SHOCKING new study reveals...' — effect?",
          solution: "Sensationalism — 'SHOCKING' attracts attention; may exaggerate findings. Check actual content.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ma-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'sensationalism' in media?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral tone" },
              { id: "b", text: "Accurate reporting" },
              { id: "c", text: "Balanced view" },
              { id: "d", text: "Emphasis on exciting aspects" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sensationalism", statement: "Emphasis on exciting/scandalous aspects for attention." },
            ],
            steps: [
              { reasoning: "Sensationalism = exciting emphasis.", working: "exciting", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Emphasis on exciting aspects",
            commonErrors: ["Choosing (b) — that's accuracy."],
          },
        },
        {
          id: "cie-ol-fl-ma-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'clickbait'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clickbait", statement: "Misleading title designed to generate clicks." },
            ],
            steps: [
              { reasoning: "Misleading for clicks.", working: "misleading", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Misleading title designed to generate clicks.",
            commonErrors: ["Thinking it's just catchy title."],
          },
        },
        {
          id: "cie-ol-fl-ma-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to analyse bias in media texts?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media bias", statement: "Word choice, selection, omission, images, placement." },
            ],
            steps: [
              { reasoning: "Word choice reveals attitude.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "Story selection/omission shows priorities.", working: "selection", marks: 1, markCode: "AO2" },
              { reasoning: "Images and placement influence perception.", working: "images", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice+selection+omission+images+placement.",
            commonErrors: ["Accepting media as neutral."],
          },
        },
        {
          id: "cie-ol-fl-ma-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media analysis.",
          parts: [
            { label: "a", prompt: "Define sensationalism.", marks: 1 },
            { label: "b", prompt: "Define clickbait.", marks: 2 },
            { label: "c", prompt: "How to analyse bias?", marks: 3 },
            { label: "d", prompt: "Advertising techniques?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media", statement: "Sensationalism, clickbait, bias, advertising." },
            ],
            steps: [
              { part: "a", reasoning: "Exciting/scandalous emphasis.", working: "sensationalism", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Misleading title for clicks.", working: "clickbait", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word choice, selection, omission, images.", working: "bias", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Celebrity, emotion, bandwagon, fear, aspiration.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) exciting emphasis (b) misleading clicks (c) word choice+selection+images (d) celebrity/emotion/fear",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Techniques listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Missing advertising techniques."],
          },
        },
        {
          id: "cie-ol-fl-ma-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "News is described as 'not neutral' because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no facts" },
              { id: "b", text: "It's fiction" },
              { id: "c", text: "It's always wrong" },
              { id: "d", text: "Selection, word choice and placement shape it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "News bias", statement: "Selection/word choice/placement shape perception." },
            ],
            steps: [
              { reasoning: "Choices shape news.", working: "choices", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Selection, word choice and placement shape it",
            commonErrors: ["Accepting news as neutral."],
          },
        },
        {
          id: "cie-ol-fl-ma-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does a headline differ from the article's content?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Headline", statement: "Designed to attract — may exaggerate vs content." },
            ],
            steps: [
              { reasoning: "Headline attracts attention.", working: "attract", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Headline is designed to attract — may differ from content.",
            commonErrors: ["Headline as neutral summary."],
          },
        },
        {
          id: "cie-ol-fl-ma-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Celebrity endorsement in advertising is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral information" },
              { id: "b", text: "A persuasion technique using fame" },
              { id: "c", text: "A news report" },
              { id: "d", text: "An editorial" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Celebrity endorsement", statement: "Uses fame to persuade." },
            ],
            steps: [
              { reasoning: "Fame persuades.", working: "fame", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A persuasion technique using fame",
            commonErrors: ["Treating as neutral."],
          },
        },
        {
          id: "cie-ol-fl-ma-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does the target audience shape an advertisement?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Target audience", statement: "Determines technique, tone, imagery." },
            ],
            steps: [
              { reasoning: "Audience determines approach.", working: "approach", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Determines techniques, tone and imagery used.",
            commonErrors: ["Ignoring audience in analysis."],
          },
        },
        {
          id: "cie-ol-fl-ma-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how images influence a media message.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Images", statement: "Emotion, framing, selection shape perception." },
            ],
            steps: [
              { reasoning: "Images trigger emotion.", working: "emotion", marks: 1, markCode: "AO2" },
              { reasoning: "Framing/selection bias perception.", working: "framing", marks: 1, markCode: "AO2" },
              { reasoning: "Reinforces or contradicts text.", working: "reinforces", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emotion+framing+reinforcement=images shape message.",
            commonErrors: ["Images as decoration."],
          },
        },
        {
          id: "cie-ol-fl-ma-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'bandwagon' advertising technique appeals to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistics" },
              { id: "b", text: "Logic" },
              { id: "c", text: "Fear" },
              { id: "d", text: "Desire to belong or follow the crowd" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Bandwagon", statement: "Appeal to belonging/crowd." },
            ],
            steps: [
              { reasoning: "Bandwagon = belonging.", working: "belonging", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Desire to belong or follow the crowd",
            commonErrors: ["Confusing with fear appeal."],
          },
        },
        {
          id: "cie-ol-fl-ma-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do social media algorithms affect what users see?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Algorithms", statement: "Select content — often sensational/engaging." },
            ],
            steps: [
              { reasoning: "Algorithms filter content.", working: "filter", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Filter/select content — often favouring engagement/sensationalism.",
            commonErrors: ["Algorithm as neutral."],
          },
        },
        {
          id: "cie-ol-fl-ma-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'fear appeal' in advertising aims to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amuse" },
              { id: "b", text: "Inform neutrally" },
              { id: "c", text: "Scare the audience into buying" },
              { id: "d", text: "Educate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fear appeal", statement: "Uses fear to persuade." },
            ],
            steps: [
              { reasoning: "Fear persuades.", working: "fear", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Scare the audience into buying",
            commonErrors: ["Fear appeal as information."],
          },
        },
        {
          id: "cie-ol-fl-ma-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how bias operates within a single news story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "News bias", statement: "Word choice, selection, omission, placement." },
            ],
            steps: [
              { reasoning: "Word choice reveals attitude.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "Omission hides counter-views.", working: "omission", marks: 1, markCode: "AO2" },
              { reasoning: "Placement/framing shapes importance.", working: "placement", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice+omission+placement=bias.",
            commonErrors: ["Accepting news as neutral."],
          },
        },
        {
          id: "cie-ol-fl-ma-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story's placement on the front page suggests...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perceived importance" },
              { id: "b", text: "Neutrality" },
              { id: "c", text: "Irrelevance" },
              { id: "d", text: "Error" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Placement", statement: "Placement signals importance." },
            ],
            steps: [
              { reasoning: "Placement = importance.", working: "importance", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Perceived importance",
            commonErrors: ["Placement as random."],
          },
        },
        {
          id: "cie-ol-fl-ma-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should media consumers check source credibility?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Credibility", statement: "Determines reliability of information." },
            ],
            steps: [
              { reasoning: "Credibility = reliability.", working: "reliability", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Determines whether information can be trusted.",
            commonErrors: ["Accepting all sources equally."],
          },
        },
        {
          id: "cie-ol-fl-ma-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media analysis — extended.",
          parts: [
            { label: "a", prompt: "Define sensationalism.", marks: 1 },
            { label: "b", prompt: "Define clickbait.", marks: 2 },
            { label: "c", prompt: "How to analyse bias?", marks: 3 },
            { label: "d", prompt: "Advertising techniques?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media", statement: "Sensationalism, clickbait, bias, advertising." },
            ],
            steps: [
              { part: "a", reasoning: "Exciting/scandalous emphasis.", working: "sensationalism", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Misleading title for clicks.", working: "clickbait", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word choice, selection, omission, images.", working: "bias", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Celebrity, emotion, bandwagon, fear, aspiration.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) exciting emphasis (b) misleading clicks (c) word choice+selection+images (d) celebrity/emotion/fear",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Techniques listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Missing advertising techniques."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-media-literacy",
      title: "Media literacy",
      skill: "Evaluate credibility and think critically about media.",
      lesson: {
        sections: [
          {
            heading: "Source credibility",
            body: "Who created content? What's their agenda? Are they qualified? Check multiple sources.",
          },
          {
            heading: "Fact vs opinion",
            body: "Facts can be verified; opinions are beliefs. Media often blends both — distinguish them.",
          },
          {
            heading: "Critical thinking",
            body: "Ask: Who benefits? What's omitted? What assumptions are made? Would I believe this from different source?",
          },
        ],
        keyFormulas: [
          { name: "Media literacy", statement: "Credibility+fact/opinion+critical questions=evaluation." },
        ],
        workedExample: {
          problem: "Social media post claims 'scientists say...' with no source.",
          solution: "Low credibility — no source, vague attribution. Verify with actual scientific sources.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ml-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a source credible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotional language" },
              { id: "b", text: "Popular website" },
              { id: "c", text: "Many shares" },
              { id: "d", text: "Qualified author, verifiable facts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Credibility", statement: "Qualified author, verifiable facts, transparent sources." },
            ],
            steps: [
              { reasoning: "Qualified+verifiable=credible.", working: "qualified", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Qualified author, verifiable facts",
            commonErrors: ["Choosing (d) — popularity ≠ credibility."],
          },
        },
        {
          id: "cie-ol-fl-ml-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How to distinguish fact from opinion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fact vs opinion", statement: "Facts verifiable; opinions are beliefs/judgements." },
            ],
            steps: [
              { reasoning: "Facts can be verified.", working: "verifiable", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Facts verifiable; opinions are beliefs/judgements.",
            commonErrors: ["Accepting opinions as facts."],
          },
        },
        {
          id: "cie-ol-fl-ml-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What critical questions should you ask about media?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical questions", statement: "Who benefits? What's omitted? Assumptions? Alternative sources?" },
            ],
            steps: [
              { reasoning: "Who benefits from this message?", working: "benefits", marks: 1, markCode: "AO2" },
              { reasoning: "What's omitted or left out?", working: "omitted", marks: 1, markCode: "AO2" },
              { reasoning: "What assumptions are made?", working: "assumptions", marks: 1, markCode: "AO2" },
              { reasoning: "Questions clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Who benefits+what's omitted+assumptions+alternative sources.",
            commonErrors: ["Passive consumption — no questions asked."],
          },
        },
        {
          id: "cie-ol-fl-ml-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media literacy.",
          parts: [
            { label: "a", prompt: "What makes source credible?", marks: 1 },
            { label: "b", prompt: "Fact vs opinion?", marks: 2 },
            { label: "c", prompt: "Critical questions?", marks: 3 },
            { label: "d", prompt: "How to verify information?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media literacy", statement: "Credibility, fact/opinion, questions, verification." },
            ],
            steps: [
              { part: "a", reasoning: "Qualified author, verifiable facts.", working: "credible", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Facts verifiable; opinions are beliefs.", working: "fact/opinion", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Who benefits, what's omitted, assumptions.", working: "questions", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple questions.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check multiple sources, verify facts, look for evidence.", working: "verify", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple methods.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) qualified+verifiable (b) verifiable vs belief (c) benefits+omitted+assumptions (d) multiple sources+verify",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Questions clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Methods clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Accepting information without verification."],
          },
        },
        {
          id: "cie-ol-fl-ml-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'fact' can be...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always believed" },
              { id: "b", text: "Unprovable" },
              { id: "c", text: "An opinion" },
              { id: "d", text: "Verified or checked" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fact", statement: "Verifiable statement." },
            ],
            steps: [
              { reasoning: "Fact = verifiable.", working: "verifiable", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Verified or checked",
            commonErrors: ["Fact as belief."],
          },
        },
        {
          id: "cie-ol-fl-ml-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an agenda affect media content?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Agenda", statement: "Shapes selection, emphasis, framing." },
            ],
            steps: [
              { reasoning: "Agenda shapes choices.", working: "shapes", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Shapes selection, emphasis and framing of content.",
            commonErrors: ["Media as agenda-free."],
          },
        },
        {
          id: "cie-ol-fl-ml-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Disinformation' differs from 'misinformation' because it is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opinion" },
              { id: "b", text: "Accidentally shared" },
              { id: "c", text: "Always true" },
              { id: "d", text: "Deliberately false" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Disinformation", statement: "Deliberately false information." },
            ],
            steps: [
              { reasoning: "Disinformation = deliberate.", working: "deliberate", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Deliberately false",
            commonErrors: ["Confusing with misinformation (accidental)."],
          },
        },
        {
          id: "cie-ol-fl-ml-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'confirmation bias' in media consumption?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Confirmation bias", statement: "Seeking/accepting views that agree with us." },
            ],
            steps: [
              { reasoning: "Seeking agreeing views.", working: "agreeing", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Seeking and accepting views that confirm existing beliefs.",
            commonErrors: ["Objective self-assessment assumption."],
          },
        },
        {
          id: "cie-ol-fl-ml-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How would you fact-check a viral claim?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fact-checking", statement: "Source, evidence, multiple sources, reverse image." },
            ],
            steps: [
              { reasoning: "Check original source.", working: "source", marks: 1, markCode: "AO2" },
              { reasoning: "Verify with multiple sources.", working: "multiple", marks: 1, markCode: "AO2" },
              { reasoning: "Look for supporting evidence.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Steps clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Source+multiple sources+evidence=verify.",
            commonErrors: ["Sharing before checking."],
          },
        },
        {
          id: "cie-ol-fl-ml-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'echo chamber' is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A debate" },
              { id: "b", text: "Exposure only to agreeing views" },
              { id: "c", text: "A fact" },
              { id: "d", text: "A news source" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Echo chamber", statement: "Only agreeing views encountered." },
            ],
            steps: [
              { reasoning: "Echo = agreement only.", working: "agreement", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Exposure only to agreeing views",
            commonErrors: ["Echo chamber as neutral."],
          },
        },
        {
          id: "cie-ol-fl-ml-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do emotions make misinformation spread quickly?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Emotion and sharing", statement: "Strong emotion prompts sharing before checking." },
            ],
            steps: [
              { reasoning: "Emotion → share fast.", working: "share", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Strong emotion prompts sharing before verification.",
            commonErrors: ["Sharing as rational act."],
          },
        },
        {
          id: "cie-ol-fl-ml-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reliable source typically has...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotional language" },
              { id: "b", text: "Many ads" },
              { id: "c", text: "No sources" },
              { id: "d", text: "Citations and transparency" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reliable source", statement: "Citations, transparency, qualifications." },
            ],
            steps: [
              { reasoning: "Citations+transparency.", working: "transparent", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Citations and transparency",
            commonErrors: ["Popularity as reliability."],
          },
        },
        {
          id: "cie-ol-fl-ml-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the techniques a biased article might use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias evaluation", statement: "Loaded language, selection, omission, framing." },
            ],
            steps: [
              { reasoning: "Loaded/emotional language.", working: "loaded", marks: 1, markCode: "AO2" },
              { reasoning: "Selective evidence/presentation.", working: "selective", marks: 1, markCode: "AO2" },
              { reasoning: "Omission of opposing views.", working: "omission", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Loaded language+selection+omission=bias.",
            commonErrors: ["Missing subtle bias."],
          },
        },
        {
          id: "cie-ol-fl-ml-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Everyone knows that...' is weak evidence because it is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistical" },
              { id: "b", text: "Expert" },
              { id: "c", text: "Always true" },
              { id: "d", text: "Vague and unsupported" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Weak evidence", statement: "Vague claims lack support." },
            ],
            steps: [
              { reasoning: "Vague=unsupported.", working: "vague", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Vague and unsupported",
            commonErrors: ["Accepting consensus claims."],
          },
        },
        {
          id: "cie-ol-fl-ml-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can context change a quote's meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context", statement: "Surrounding text/frame alters interpretation." },
            ],
            steps: [
              { reasoning: "Context alters meaning.", working: "alters", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Surrounding text and framing alter interpretation.",
            commonErrors: ["Quote in isolation."],
          },
        },
        {
          id: "cie-ol-fl-ml-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media literacy — extended.",
          parts: [
            { label: "a", prompt: "What makes source credible?", marks: 1 },
            { label: "b", prompt: "Fact vs opinion?", marks: 2 },
            { label: "c", prompt: "Critical questions?", marks: 3 },
            { label: "d", prompt: "How to verify information?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media literacy", statement: "Credibility, fact/opinion, questions, verification." },
            ],
            steps: [
              { part: "a", reasoning: "Qualified author, verifiable facts.", working: "credible", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Facts verifiable; opinions are beliefs.", working: "fact/opinion", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Who benefits, what's omitted, assumptions.", working: "questions", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple questions.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check multiple sources, verify facts, look for evidence.", working: "verify", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple methods.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) qualified+verifiable (b) verifiable vs belief (c) benefits+omitted+assumptions (d) multiple sources+verify",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Questions clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Methods clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Accepting information without verification."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-text-types-analysis",
      title: "Analysing different text types",
      skill: "Adapt analysis to genre conventions.",
      lesson: {
        sections: [
          {
            heading: "Genre conventions",
            body: "Each text type has expectations — news reports facts, editorials argue, reviews evaluate, interviews reveal character.",
          },
          {
            heading: "Purpose and audience",
            body: "Text type determined by purpose and audience — formal report vs casual blog post serve different needs.",
          },
          {
            heading: "Breaking conventions",
            body: "Authors may subvert expectations — satirical news, formal letter with informal content — creates effect.",
          },
        ],
        keyFormulas: [
          { name: "Text types", statement: "Genre conventions+purpose+audience+subversion=analysis." },
        ],
        workedExample: {
          problem: "News article uses first-person 'I witnessed'.",
          solution: "Subverts news convention — adds subjectivity/immediacy; analyse effect on credibility.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-tt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are 'genre conventions'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expected features of text type" },
              { id: "b", text: "Grammatical rules" },
              { id: "c", text: "Punctuation rules" },
              { id: "d", text: "Spelling patterns" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Genre conventions", statement: "Expected features/structure of text type." },
            ],
            steps: [
              { reasoning: "Conventions = expected features.", working: "expected", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Expected features of text type",
            commonErrors: ["Choosing (b) — that's grammar."],
          },
        },
        {
          id: "cie-ol-fl-tt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do purpose and audience shape text type?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Purpose/audience", statement: "Determine genre, register, structure." },
            ],
            steps: [
              { reasoning: "Purpose+audience determine choices.", working: "determine", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Determine genre, register, structure.",
            commonErrors: ["Ignoring audience."],
          },
        },
        {
          id: "cie-ol-fl-tt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might authors subvert genre conventions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subversion", statement: "Creates surprise, irony, challenges expectations." },
            ],
            steps: [
              { reasoning: "Creates surprise/irony.", working: "surprise", marks: 1, markCode: "AO2" },
              { reasoning: "Challenges reader expectations.", working: "expectations", marks: 1, markCode: "AO2" },
              { reasoning: "Adds creative/layered meaning.", working: "meaning", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Surprise+irony+challenge expectations+layered meaning.",
            commonErrors: ["Thinking conventions are fixed rules."],
          },
        },
        {
          id: "cie-ol-fl-tt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Text type analysis.",
          parts: [
            { label: "a", prompt: "Define genre conventions.", marks: 1 },
            { label: "b", prompt: "Purpose/audience effect?", marks: 2 },
            { label: "c", prompt: "Why subvert conventions?", marks: 3 },
            { label: "d", prompt: "Name text types.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Text types", statement: "Conventions, purpose/audience, subversion, types." },
            ],
            steps: [
              { part: "a", reasoning: "Expected features of text type.", working: "conventions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Determine genre, register, structure.", working: "purpose", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Surprise, irony, challenge expectations.", working: "subversion", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "News, editorial, review, interview, blog, report.", working: "types", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) expected features (b) determine genre/register (c) surprise+irony+challenge (d) news/editorial/review/blog",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Types listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Ignoring genre conventions."],
          },
        },
        {
          id: "cie-ol-fl-tt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A news report's main purpose is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inform objectively" },
              { id: "b", text: "Review" },
              { id: "c", text: "Persuade" },
              { id: "d", text: "Entertain" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "News report", statement: "Informs objectively." },
            ],
            steps: [
              { reasoning: "News = inform.", working: "inform", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Inform objectively",
            commonErrors: ["News as persuasion."],
          },
        },
        {
          id: "cie-ol-fl-tt-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an editorial differ from a news report?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Editorial", statement: "Argues a viewpoint — opinion-led." },
            ],
            steps: [
              { reasoning: "Editorial = opinion.", working: "opinion", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Editorial argues a viewpoint; news report informs.",
            commonErrors: ["Confusing the two genres."],
          },
        },
        {
          id: "cie-ol-fl-tt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A review's primary function is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interview" },
              { id: "b", text: "Report news" },
              { id: "c", text: "Evaluate and recommend" },
              { id: "d", text: "Advertise" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review", statement: "Evaluates and recommends." },
            ],
            steps: [
              { reasoning: "Review = evaluate.", working: "evaluate", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Evaluate and recommend",
            commonErrors: ["Review as neutral report."],
          },
        },
        {
          id: "cie-ol-fl-tt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an interview reveal character?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Interview", statement: "Speech, pauses, evasions reveal personality." },
            ],
            steps: [
              { reasoning: "Speech reveals personality.", working: "personality", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Speech patterns, pauses and evasions reveal personality.",
            commonErrors: ["Interview as Q&A only."],
          },
        },
        {
          id: "cie-ol-fl-tt-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how a satirical news article subverts genre conventions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Satirical news", statement: "Mimics news form to mock its subject." },
            ],
            steps: [
              { reasoning: "Mimics news conventions.", working: "mimics", marks: 1, markCode: "AO2" },
              { reasoning: "Absurd content signals satire.", working: "absurd", marks: 1, markCode: "AO2" },
              { reasoning: "Critiques real issues indirectly.", working: "critiques", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Mimics news+absurd content+indirect critique=satire.",
            commonErrors: ["Reading satire as genuine news."],
          },
        },
        {
          id: "cie-ol-fl-tt-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A formal letter and a blog post differ mainly in...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spelling" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Register and audience" },
              { id: "d", text: "Length only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register/audience", statement: "Determines formality and style." },
            ],
            steps: [
              { reasoning: "Register+audience.", working: "register", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Register and audience",
            commonErrors: ["Genre as only structure."],
          },
        },
        {
          id: "cie-ol-fl-tt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do text types have expected structures?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Expected structure", statement: "Meets reader expectations for purpose." },
            ],
            steps: [
              { reasoning: "Meets expectations.", working: "expectations", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "To meet reader expectations for the genre's purpose.",
            commonErrors: ["Structure as arbitrary."],
          },
        },
        {
          id: "cie-ol-fl-tt-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Breaking convention' in a text type can create...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surprise, irony or emphasis" },
              { id: "b", text: "Errors" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Only confusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subversion", statement: "Creates surprise/irony/effect." },
            ],
            steps: [
              { reasoning: "Subversion = effect.", working: "effect", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Surprise, irony or emphasis",
            commonErrors: ["Convention-breaking as mistake."],
          },
        },
        {
          id: "cie-ol-fl-tt-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does purpose determine the choice of genre?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose and genre", statement: "Different purposes need different conventions." },
            ],
            steps: [
              { reasoning: "Purpose needs conventions.", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Audience shapes choice too.", working: "audience", marks: 1, markCode: "AO2" },
              { reasoning: "Effectiveness depends on fit.", working: "fit", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Purpose+audience+fit=genre choice.",
            commonErrors: ["Genre as arbitrary."],
          },
        },
        {
          id: "cie-ol-fl-tt-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'feature article' typically...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is always short" },
              { id: "b", text: "Reports breaking news only" },
              { id: "c", text: "Explores a topic in depth" },
              { id: "d", text: "Is opinion only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Feature article", statement: "In-depth exploration." },
            ],
            steps: [
              { reasoning: "Feature = in-depth.", working: "depth", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Explores a topic in depth",
            commonErrors: ["Confusing with news report."],
          },
        },
        {
          id: "cie-ol-fl-tt-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can you identify a text's genre from stylistic features?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Genre identification", statement: "Register, structure, tone signal genre." },
            ],
            steps: [
              { reasoning: "Features signal genre.", working: "signal", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Register, structure and tone signal the genre.",
            commonErrors: ["Genre from content alone."],
          },
        },
        {
          id: "cie-ol-fl-tt-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Text type analysis — extended.",
          parts: [
            { label: "a", prompt: "Define genre conventions.", marks: 1 },
            { label: "b", prompt: "Purpose/audience effect?", marks: 2 },
            { label: "c", prompt: "Why subvert conventions?", marks: 3 },
            { label: "d", prompt: "Name text types.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Text types", statement: "Conventions, purpose/audience, subversion, types." },
            ],
            steps: [
              { part: "a", reasoning: "Expected features of text type.", working: "conventions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Determine genre, register, structure.", working: "purpose", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Surprise, irony, challenge expectations.", working: "subversion", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "News, editorial, review, interview, blog, report.", working: "types", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) expected features (b) determine genre/register (c) surprise+irony+challenge (d) news/editorial/review/blog",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Types listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Ignoring genre conventions."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-media-notes-1",
      title: "Media texts — revision notes",
      summary: "Media analysis, literacy, text types.",
      sections: [
        {
          heading: "Media",
          body: "Media: sensationalism, clickbait, bias via word choice/selection/images. Literacy: credibility, fact vs opinion, critical questions. Text types: genre conventions, purpose/audience, subversion.",
        },
      ],
    },
  ],
};
