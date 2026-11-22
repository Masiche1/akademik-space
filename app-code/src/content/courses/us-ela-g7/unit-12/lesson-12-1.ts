import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const MEDIAPASSAGE: TextExtract = {
  title: "Media Analysis: A News Article",
  author: "Written for Akademik Space",
  text: "BREAKING: Local School Bans All Junk Food!\n\nIn a shocking decision, the school board has banned all snacks and drinks from campus. Parents are furious, claiming their children's freedom is being violated. 'This is tyranny!' said one angry parent. School officials insist the policy is 'for the children's health,' but critics call it 'government overreach.'",
};

const RHETORICPASSAGE: TextExtract = {
  title: "Persuasive Techniques Analysis",
  author: "Written for Akademik Space",
  text: "Everyone knows that junk food is terrible for kids. Studies show it causes obesity and poor grades. Don't let your children suffer — ban junk food in schools today!",
};

export const lesson121: Lesson = {
  id: "ela7-u12-lesson-12-1",
  code: "12-1",
  title: "Media Literacy: Analyzing News and Persuasive Techniques",
  goal: "I CAN analyze how media uses language, images, and techniques to persuade and inform.",
  standards: ["RI.7.7", "RI.7.8", "W.7.8"],
  vocabulary: [
    {
      term: "Media literacy",
      definition: "The ability to analyze and evaluate media messages.",
    },
    {
      term: "Bias",
      definition: "Favoring one perspective unfairly in presentation.",
    },
    {
      term: "Sensationalism",
      definition:
        "Emphasizing exciting/controversial aspects to attract attention.",
    },
    {
      term: "Rhetorical device",
      definition:
        "Language technique used to persuade — loaded words, emotional appeal.",
    },
    { term: "Credibility", definition: "Trustworthiness of the source." },
    {
      term: "Framing",
      definition: "How information is presented shapes interpretation.",
    },
  ],
  concepts: [
    {
      id: "ela7-u12-media",
      title: "Analyzing news media",
      skill: "Identify bias, sensationalism, and framing in news articles.",
      lesson: {
        sections: [
          {
            heading: "Sensationalism and loaded language",
            body: "The headline 'BREAKING: Local School Bans All Junk Food!' uses **sensationalism** — 'BREAKING' creates urgency, 'ALL' emphasizes extremity, 'Bans' sounds authoritarian. 'Shocking decision' is loaded language — 'shocking' implies negative judgment before facts are presented. 'Tyranny' and 'government overreach' are emotionally charged terms that frame the issue.",
          },
          {
            heading: "Framing and balance",
            body: "The article frames the ban as controversial — 'Parents are furious' vs 'officials insist.' But it doesn't present evidence for either side — just quotes emotional reactions. Balanced reporting would include: what the policy actually says, who supports/opposes it, and evidence for both positions. The article prioritizes drama over facts.",
          },
        ],
        keyFormulas: [
          {
            name: "Sensationalism",
            statement:
              "Emphasizing drama/urgency to attract attention — 'BREAKING', 'SHOCKING'.",
          },
          {
            name: "Loaded language",
            statement:
              "Words with emotional connotations — 'tyranny', 'overreach'.",
          },
          {
            name: "Framing",
            statement: "How information is presented shapes interpretation.",
          },
          {
            name: "Balance check",
            statement: "Does the article present evidence or just reactions?",
          },
        ],
        workedExample: {
          problem: "How does the headline frame the school lunch ban?",
          solution:
            "'BREAKING: Local School BANS ALL Junk Food!' — 'BREAKING' creates false urgency, 'BANS' and 'ALL' emphasize extremity, 'Junk Food' is loaded (implies the food is worthless). The headline frames a routine policy decision as a dramatic, authoritarian action.",
        },
      },
      questions: [
        {
          id: "ela7-u12-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIAPASSAGE,
          stem: "What technique does 'BREAKING' in the headline use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensationalism — creating false urgency" },
              { id: "b", text: "Statistical evidence" },
              { id: "c", text: "Balanced presentation" },
              { id: "d", text: "Factual reporting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sensationalism",
                statement: "Emphasizing drama to attract attention.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'BREAKING' implies urgency and importance — a school lunch policy isn't breaking news in the traditional sense.",
                evidence: "BREAKING: Local School Bans",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Sensationalism — 'BREAKING' creates false urgency.",
            commonErrors: [
              "Choosing (a) — 'BREAKING' isn't factual, it's dramatic.",
            ],
          },
        },
        {
          id: "ela7-u12-media-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIAPASSAGE,
          stem: "Identify two examples of loaded language in the article and explain their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Loaded language",
                statement:
                  "Words with emotional connotations shape perception.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Shocking decision' — 'shocking' implies negative judgment before facts are presented.",
                evidence: "In a shocking decision",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Tyranny' and 'government overreach' — emotionally charged terms that frame the policy as authoritarian.",
                evidence: "This is tyranny!",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: readers are primed to view the policy negatively before learning the facts.",
                evidence: "critics call it 'government overreach'",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Shocking decision' and 'tyranny/government overreach' — loaded language primes readers to view the policy negatively.",
            commonErrors: [
              "Identifying neutral words as loaded — 'policy' is neutral.",
            ],
          },
        },
        {
          id: "ela7-u12-media-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEDIAPASSAGE,
          stem: "Rewrite the headline and first paragraph in neutral, factual language. Explain what you changed and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Neutral rewriting",
                statement: "Remove sensationalism and loaded language.",
              },
              {
                kind: "skill",
                name: "Factual reporting",
                statement: "Present facts without emotional framing.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Headline: 'School Board Votes to Restrict Junk Food on Campus' — factual, no 'BREAKING' or 'BANS'.",
                evidence: "BREAKING: Local School Bans All Junk Food!",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "First paragraph: 'The school board voted to restrict junk food sales on campus. Some parents oppose the policy, while school officials say it supports student health.'",
                evidence: "In a shocking decision",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Remove 'shocking', 'furious', 'tyranny', 'overreach' — replace with neutral descriptions.",
                evidence: "Parents are furious",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The rewrite presents facts without priming readers to a particular emotional response.",
                evidence: "critics call it",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'School Board Votes to Restrict Junk Food on Campus. The school board voted to restrict junk food sales on campus. Some parents oppose the policy, while school officials say it supports student health.' — removes sensationalism and loaded language.",
            commonErrors: [
              "Keeping some loaded words — 'restrict' is more neutral than 'ban' but still implies limitation.",
            ],
          },
        },
        {
          id: "ela7-u12-media-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIAPASSAGE,
          parts: [
            {
              label: "a",
              prompt:
                "Identify the article's bias (if any) and explain how it manifests.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Suggest one way to make the article more balanced.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bias detection",
                statement: "Identify unfair presentation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Bias toward anti-regulation view — uses 'tyranny', 'overreach', 'furious' to frame policy negatively.",
                evidence: "This is tyranny!",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Add evidence for both sides — include studies on nutrition AND parent concerns about choice/cost.",
                evidence: "critics call it 'government overreach'",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Bias against regulation — loaded language frames policy negatively. (b) Add evidence for both sides — studies on health AND parent concerns.",
            commonErrors: [
              "Saying 'no bias' — the loaded language shows clear bias.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u12-media2",
      title: "Rhetorical devices and persuasion",
      skill: "Identify persuasive techniques and evaluate their effectiveness.",
      lesson: {
        sections: [
          {
            heading: "Persuasive techniques",
            body: "**Loaded words**: 'junk food' vs 'unhealthy snacks'. **Emotional appeal**: 'Don't let your children suffer'. **Bandwagon**: 'Everyone knows'. **Either/or**: 'ban it or kids suffer'. **Appeal to authority**: 'experts agree'. **Repetition**: 'ban junk food... ban junk food'. These techniques persuade by emotion, not just logic.",
          },
          {
            heading: "Evaluating persuasion",
            body: "Effective persuasion uses **ethos** (credibility), **pathos** (emotion), and **logos** (logic). The passage uses pathos ('suffer', 'terrible') and logos ('studies show') but weak ethos (no source named). Strong persuasion balances all three — credible source + emotional appeal + logical evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Loaded words",
            statement: "Words with emotional connotations — 'junk' vs 'snack'.",
          },
          {
            name: "Emotional appeal",
            statement: "Pathos — 'don't let children suffer'.",
          },
          {
            name: "Bandwagon",
            statement: "'Everyone knows' — appeal to popularity.",
          },
          {
            name: "Ethos/pathos/logos",
            statement:
              "Credibility, emotion, logic — effective persuasion uses all three.",
          },
        ],
        workedExample: {
          problem:
            "Identify the persuasive techniques in 'Everyone knows junk food is terrible for kids.'",
          solution:
            "Bandwagon ('everyone knows') + loaded words ('junk', 'terrible') + either/or framing ('terrible' implies must be banned). No evidence — pure emotional persuasion.",
        },
      },
      questions: [
        {
          id: "ela7-u12-media2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RHETORICPASSAGE,
          stem: "What persuasive technique does 'Everyone knows' use?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Bandwagon appeal — suggesting everyone agrees",
              },
              { id: "b", text: "Logical evidence" },
              { id: "c", text: "Statistical proof" },
              { id: "d", text: "Credible source" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bandwagon",
                statement: "Appeal to popularity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Everyone knows' suggests universal agreement — bandwagon technique to make readers conform.",
                evidence: "Everyone knows that junk food is terrible",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Bandwagon appeal — suggests everyone agrees.",
            commonErrors: ["Choosing (a) — 'everyone knows' isn't evidence."],
          },
        },
        {
          id: "ela7-u12-media2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RHETORICPASSAGE,
          stem: "Identify two persuasive techniques in the passage and explain how they work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technique identification",
                statement: "Recognize persuasive strategies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Junk food' and 'terrible' — loaded words with negative connotations.",
                evidence: "junk food is terrible for kids",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Don't let your children suffer' — emotional appeal (pathos) targeting parental fear.",
                evidence: "Don't let your children suffer",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Studies show' — appeal to authority but no source named — weak ethos.",
                evidence: "Studies show it causes obesity",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Loaded words ('junk', 'terrible'), emotional appeal ('don't let children suffer'), and weak authority appeal ('studies show' unnamed).",
            commonErrors: [
              "Missing 'studies show' as a technique — it's appeal to authority.",
            ],
          },
        },
        {
          id: "ela7-u12-media2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RHETORICPASSAGE,
          stem: "Rewrite the passage using logos (logical evidence) instead of pathos (emotional appeal). Keep the same argument but make it more credible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Logos persuasion",
                statement: "Use logic and evidence.",
              },
              {
                kind: "skill",
                name: "Credibility building",
                statement: "Name sources and cite evidence.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Replace 'junk food is terrible' with specific evidence: 'high-sugar snacks contribute to obesity and poor concentration.'",
                evidence: "junk food is terrible for kids",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Replace 'don't let children suffer' with logical consequence: 'nutrition affects academic performance.'",
                evidence: "Don't let your children suffer",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Name the source: 'According to a 2022 CDC study...' instead of 'studies show'.",
                evidence: "Studies show it causes obesity",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The rewrite uses logos — evidence and logic — rather than pathos — fear and emotion.",
                evidence: "ban junk food in schools today",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'According to a 2022 CDC study, high-sugar snacks contribute to obesity and poor concentration in children. Schools that restrict junk food report better student health and academic performance. Banning junk food in schools supports student wellbeing.'",
            commonErrors: [
              "Keeping emotional language — 'suffer' and 'terrible' are pathos, not logos.",
            ],
          },
        },
        {
          id: "ela7-u12-media2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RHETORICPASSAGE,
          parts: [
            {
              label: "a",
              prompt: "Identify one emotional appeal in the passage.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Replace it with a logical appeal and explain the difference.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pathos vs logos",
                statement: "Emotion vs logic in persuasion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Don't let your children suffer' — emotional appeal (fear).",
                evidence: "Don't let your children suffer",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Logical: 'Poor nutrition affects academic performance and health outcomes.' Emotion persuades through fear; logic persuades through evidence.",
                evidence: "ban junk food in schools today",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Don't let your children suffer' — emotional appeal. (b) 'Poor nutrition affects academic performance' — logical appeal; emotion persuades through fear, logic through evidence.",
            commonErrors: [
              "Replacing with another emotional phrase — need logic, not different emotion.",
            ],
          },
        },
      ],
    },
  ],
};
