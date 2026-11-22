import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const RESEARCHPROMPT: TextExtract = {
  title: "Research Prompt: Should Schools Ban Junk Food?",
  author: "Written for Akademik Space",
  text: "Research the question: Should schools ban junk food?\n\nFind at least three credible sources (articles, studies, expert opinions). Take notes on key points and evidence. Then write an argument essay that presents your position, supports it with evidence from your sources, and cites them properly.",
};

export const lesson111: Lesson = {
  id: "ela7-u11-lesson-11-1",
  code: "11-1",
  title: "Research Skills: Finding and Evaluating Sources",
  goal: "I CAN find credible sources, evaluate their reliability, and take effective notes for research.",
  standards: ["W.7.8", "W.7.9a", "W.7.9b", "W.7.9c"],
  vocabulary: [
    {
      term: "Primary source",
      definition:
        "Original material — research study, interview, historical document.",
    },
    {
      term: "Secondary source",
      definition:
        "Analysis or interpretation of primary sources — articles, textbooks.",
    },
    {
      term: "Credible source",
      definition:
        "Reliable, trustworthy information from experts or reputable organizations.",
    },
    {
      term: "Bias",
      definition: "When a source favors one perspective unfairly.",
    },
    {
      term: "Citation",
      definition:
        "Formal reference to a source — author, title, publication info.",
    },
    {
      term: "Plagiarism",
      definition: "Using someone else's words or ideas without credit.",
    },
  ],
  concepts: [
    {
      id: "ela7-u11-research",
      title: "Finding and evaluating sources",
      skill:
        "Locate credible sources and evaluate them for bias, accuracy, and relevance.",
      lesson: {
        sections: [
          {
            heading: "Source types and credibility",
            body: "**Primary sources** are original: research studies, interviews, official data. **Secondary sources** analyze primary sources: news articles, textbooks, reviews. Credible sources have: author credentials, publication date, evidence-based claims, and balanced presentation. Red flags: no author, extreme claims, no sources cited, outdated information.",
          },
          {
            heading: "Evaluating bias",
            body: "Ask: Does the source present multiple perspectives or only one? Does it use emotional language ('terrible', 'amazing') or neutral analysis? Who funds/publishes it — could they benefit from a particular conclusion? A study funded by a soda company saying 'sugar is harmless' needs scrutiny. Cross-check claims with multiple sources.",
          },
        ],
        keyFormulas: [
          {
            name: "Source hierarchy",
            statement:
              "Primary (original) > secondary (analysis) > tertiary (summary).",
          },
          {
            name: "Credibility checks",
            statement: "Author credentials, date, evidence, balance.",
          },
          {
            name: "Bias indicators",
            statement:
              "One-sided presentation, emotional language, funding conflicts.",
          },
          {
            name: "Cross-checking",
            statement: "Verify claims with multiple independent sources.",
          },
        ],
        workedExample: {
          problem:
            "Evaluate this source: 'Soda is Healthy!' published by a soda company website.",
          solution:
            "Low credibility — published by an interested party (soda company), uses emotional language ('healthy' is claim not evidence), likely one-sided. Would need to check if it cites independent research or just promotes the product.",
        },
      },
      questions: [
        {
          id: "ela7-u11-research-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RESEARCHPROMPT,
          stem: "What makes a source 'credible'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's the first result on Google" },
              { id: "b", text: "It agrees with your opinion" },
              {
                id: "c",
                text: "It has author credentials, evidence, and balanced presentation",
              },
              { id: "d", text: "It has a catchy title" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Credible source",
                statement: "Reliable, evidence-based, balanced.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credibility = credentials + evidence + balance, not popularity or agreement.",
                evidence: "Find at least three credible sources",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Author credentials, evidence, and balanced presentation.",
            commonErrors: [
              "Choosing (d) — agreeing with you doesn't make a source credible.",
            ],
          },
        },
        {
          id: "ela7-u11-research-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RESEARCHPROMPT,
          stem: "Identify three red flags that would make a source about school nutrition unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement: "Spot unreliable sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Red flag 1: no author or credentials — anonymous claims can't be verified.",
                evidence:
                  "credible sources (articles, studies, expert opinions)",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Red flag 2: extreme claims without evidence — 'junk food is poison' vs 'studies show...'.",
                evidence: "Find at least three credible sources",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Red flag 3: funding conflict — published by a food company arguing against regulation.",
                evidence: "articles, studies, expert opinions",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Red flags: no author credentials, extreme claims without evidence, funding conflicts of interest.",
            commonErrors: [
              "Listing 'old publication date' as only red flag — need multiple indicators.",
            ],
          },
        },
        {
          id: "ela7-u11-research-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RESEARCHPROMPT,
          stem: "Evaluate two potential sources for the junk food research: (1) a peer-reviewed nutrition study, (2) a viral social media post claiming 'schools should ban all snacks.' Which is more credible and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source credibility",
                statement: "Evaluate reliability systematically.",
              },
              {
                kind: "skill",
                name: "Evidence hierarchy",
                statement: "Peer-reviewed > anecdotal.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Peer-reviewed study: reviewed by experts, evidence-based, methodology transparent — highest credibility.",
                evidence: "studies, expert opinions",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Social media post: anonymous, emotional language ('ban all snacks'), no evidence — lowest credibility.",
                evidence: "articles, studies, expert opinions",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The study presents data and methodology; the post presents opinion without support.",
                evidence: "credible sources",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Use the study as primary evidence; the post might show public sentiment but not scientific fact.",
                evidence: "Take notes on key points and evidence",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The peer-reviewed study is far more credible — expert-reviewed, evidence-based, transparent methodology. The social media post is anonymous, emotional, and unsupported. Use the study for evidence; the post only shows public opinion.",
            commonErrors: [
              "Choosing the post because it's 'relatable' — credibility isn't about relatability.",
            ],
          },
        },
        {
          id: "ela7-u11-research-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RESEARCHPROMPT,
          parts: [
            {
              label: "a",
              prompt:
                "Name two types of credible sources for school nutrition research.",
              marks: 2,
            },
            { label: "b", prompt: "Explain why each is credible.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source types",
                statement: "Different sources serve different purposes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Peer-reviewed nutrition studies + government health guidelines (CDC, USDA).",
                evidence: "articles, studies, expert opinions",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Studies are evidence-based and peer-reviewed; government guidelines are authoritative and research-backed.",
                evidence: "credible sources",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Peer-reviewed studies and government health guidelines. (b) Studies are evidence-based; guidelines are authoritative and research-backed.",
            commonErrors: [
              "Choosing 'Wikipedia' or 'blogs' — not credible primary/secondary sources.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u11-research2",
      title: "Note-taking and citation",
      skill:
        "Take organized notes from sources and cite them properly to avoid plagiarism.",
      lesson: {
        sections: [
          {
            heading: "Effective note-taking",
            body: "Use **paraphrasing** (restating in your own words), **summarizing** (condensing key points), and **quoting** (exact words in quotation marks). For each source, record: author, title, publication, date, and key points. Organize notes by source or by topic — whichever helps you see connections. Don't copy full paragraphs — you'll plagiarize.",
          },
          {
            heading: "Citation and plagiarism",
            body: "**Citation** gives credit: 'According to a 2023 CDC study...' or formal citation '(Smith, 2023)'. **Plagiarism** is using others' words/ideas without credit — even accidental plagiarism (forgetting quotation marks) is wrong. When in doubt, cite. For quotes, use quotation marks AND cite; for paraphrases, cite but no quotes needed.",
          },
        ],
        keyFormulas: [
          {
            name: "Note types",
            statement:
              "Paraphrase (own words), summarize (key points), quote (exact words).",
          },
          {
            name: "Citation",
            statement: "Give credit — author, title, source, date.",
          },
          {
            name: "Plagiarism",
            statement:
              "Using others' words/ideas without credit — even accidental.",
          },
          {
            name: "Quote vs paraphrase",
            statement:
              "Quotes need quotation marks + citation; paraphrases need citation only.",
          },
        ],
        workedExample: {
          problem:
            "Is this plagiarism? 'Studies show junk food in schools affects concentration' — no citation.",
          solution:
            "Yes — 'studies show' implies research but no source is cited. Even if true, using research findings without credit is plagiarism. Fix: 'According to a 2022 study in the Journal of Nutrition, junk food affects concentration' or cite properly.",
        },
      },
      questions: [
        {
          id: "ela7-u11-research2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RESEARCHPROMPT,
          stem: "What is the difference between quoting and paraphrasing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They're the same" },
              { id: "b", text: "Paraphrasing doesn't need citation" },
              {
                id: "c",
                text: "Quoting uses exact words in quotation marks; paraphrasing restates in your own words",
              },
              { id: "d", text: "Quoting is shorter; paraphrasing is longer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quote vs paraphrase",
                statement: "Exact words vs own words.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quotes = exact words + quotation marks; paraphrases = restated in own words.",
                evidence: "Take notes on key points and evidence",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Quoting = exact words in quotes; paraphrasing = own words.",
            commonErrors: [
              "Thinking paraphrasing doesn't need citation — both do.",
            ],
          },
        },
        {
          id: "ela7-u11-research2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RESEARCHPROMPT,
          stem: "A student writes 'Studies show junk food affects grades' without citing. Is this plagiarism? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Plagiarism recognition",
                statement: "Uncited research claims are plagiarism.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Yes — 'studies show' implies research but no source is named.",
                evidence: "Take notes on key points and evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Even if true, using research findings without credit is plagiarism.",
                evidence: "cite them properly",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix: 'According to a 2022 CDC study...' or add formal citation.",
                evidence: "support it with evidence from your sources",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Yes — 'studies show' without citation is plagiarism. Fix by naming the source: 'According to a 2022 CDC study...'",
            commonErrors: [
              "Thinking 'studies show' is general knowledge — research claims need sources.",
            ],
          },
        },
        {
          id: "ela7-u11-research2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RESEARCHPROMPT,
          stem: "Write a properly cited sentence using this source: Johnson, Maria. 'School Nutrition Policies.' Journal of Education, 2023. The study found schools with junk food bans had 15% better test scores.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Citation",
                statement: "Give credit to sources properly.",
              },
              {
                kind: "skill",
                name: "Evidence integration",
                statement:
                  "Introduce source, state finding, connect to argument.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Introduce source: 'According to a 2023 study by Maria Johnson in the Journal of Education...'",
                evidence: "cite them properly",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "State finding: 'schools with junk food bans had 15% better test scores.'",
                evidence: "15% better test scores",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connect to argument: 'This suggests that restricting junk food improves academic performance.'",
                evidence: "present your position",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Proper citation format: author, title, publication, date — or informal 'According to...'.",
                evidence: "Find at least three credible sources",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'According to Maria Johnson's 2023 study in the Journal of Education, schools with junk food bans had 15% better test scores, suggesting that restricting junk food improves academic performance (Johnson, 2023).'",
            commonErrors: [
              "Citing without introducing — 'Johnson 2023 says' is less clear than 'According to Johnson's study'.",
            ],
          },
        },
        {
          id: "ela7-u11-research2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RESEARCHPROMPT,
          parts: [
            {
              label: "a",
              prompt:
                "Rewrite this uncited claim with proper attribution: 'Junk food in schools is bad for students.'",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why citation matters in research.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Attribution",
                statement: "Credit sources for credibility.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'According to the CDC, junk food in schools is linked to poor nutrition and health problems.'",
                evidence: "Junk food in schools is bad",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Citation gives credit, allows verification, and establishes credibility — uncited claims look like opinion, not research.",
                evidence: "cite them properly",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'According to the CDC, junk food in schools is linked to poor nutrition and health problems.' (b) Citation gives credit, allows verification, establishes credibility.",
            commonErrors: [
              "Adding 'I think' instead of citing — opinions don't need citation, research claims do.",
            ],
          },
        },
      ],
    },
  ],
};
