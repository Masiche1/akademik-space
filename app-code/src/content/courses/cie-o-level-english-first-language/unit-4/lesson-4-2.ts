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
              { id: "a", text: "Emphasis on exciting aspects" },
              { id: "b", text: "Accurate reporting" },
              { id: "c", text: "Balanced view" },
              { id: "d", text: "Neutral tone" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Qualified author, verifiable facts" },
              { id: "b", text: "Popular website" },
              { id: "c", text: "Emotional language" },
              { id: "d", text: "Many shares" },
            ],
            correctChoiceId: "a",
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
              { id: "c", text: "Spelling patterns" },
              { id: "d", text: "Punctuation rules" },
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
