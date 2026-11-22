import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "el7-u1-lesson-1-2",
  code: "1-2",
  title: "Text Structure and Non-Fiction",
  goal: "I CAN analyse how texts are organised and how non-fiction features persuade and inform.",
  standards: ["Edexcel KS3 English Language — Reading"],
  vocabulary: [
    {
      term: "Text structure",
      definition:
        "How a text is organised — chronological, problem-solution, compare-contrast, narrative.",
    },
    {
      term: "Bias",
      definition:
        "A tendency to favour one viewpoint, often through selective evidence or loaded language.",
    },
    {
      term: "Persuasive technique",
      definition:
        "A method used to convince — rhetorical questions, emotive language, statistics, expert opinion.",
    },
    {
      term: "Non-fiction features",
      definition:
        "Headings, subheadings, captions, bullet points, diagrams, statistics.",
    },
  ],
  concepts: [
    {
      id: "el7-u1-structure",
      title: "Analysing Text Structure",
      skill:
        "Identify and explain how different text structures serve the writer's purpose.",
      lesson: {
        sections: [
          {
            heading: "Common structures",
            body: "**Chronological**: events in time order — common in narratives and reports. **Problem-solution**: presents a problem then resolves it — common in persuasive and explanatory texts. **Compare-contrast**: similarities and differences — reviews, debates. **Narrative**: story structure with characters, setting, plot.\n\n**Structure serves purpose**: a persuasive text might open with a shocking statistic, build arguments, then conclude with a call to action. Understanding structure reveals the writer's strategy.",
          },
          {
            heading: "Non-fiction features",
            body: "**Headings/subheadings**: organise content, guide reader. **Captions**: explain images. **Bullet points**: present key information clearly. **Statistics**: lend authority and precision. **Expert quotes**: add credibility. **Diagrams**: simplify complex information.\n\nThese features aren't decoration — each serves a communicative purpose. Headlines grab attention; statistics persuade; diagrams clarify.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure types",
            statement:
              "Chronological, problem-solution, compare-contrast, narrative.",
          },
          {
            name: "Feature purpose",
            statement:
              "Each non-fiction feature serves a specific communicative function.",
          },
        ],
        workedExample: {
          problem:
            "A charity leaflet: headline 'Every 40 seconds a child dies of preventable disease' + statistics + donation form.",
          solution:
            "Structure: shocking statistic (hook) → evidence → call to action. Persuasive purpose throughout.",
        },
      },
      questions: [
        {
          id: "el7-u1-structure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'bias' in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete objectivity" },
              { id: "b", text: "Factual accuracy" },
              { id: "c", text: "Clear writing" },
              { id: "d", text: "A tendency to favour one viewpoint" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement:
                  "Favouring one viewpoint through selection/language.",
              },
            ],
            steps: [
              {
                reasoning: "Bias = one-sided presentation.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(d)** Favouring one viewpoint",
            commonErrors: ["Confusing with objectivity."],
          },
        },
        {
          id: "el7-u1-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do non-fiction texts use headings and subheadings?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Non-fiction features",
                statement: "Headings organise and guide readers.",
              },
            ],
            steps: [
              {
                reasoning: "Organise content into sections.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Help reader navigate/skim.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "Signal topic of each section.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Headings organise content and help readers navigate — improving clarity and skimmability.",
            commonErrors: ["Only 'looks nice'.", "No functional purpose."],
          },
        },
        {
          id: "el7-u1-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does text structure reveal the writer's purpose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Structure and purpose",
                statement: "Organisational choices serve communicative goals.",
              },
            ],
            steps: [
              {
                reasoning: "Structure mirrors argument flow.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Different purposes need different structures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reveals strategy/persuasion approach.",
                marks: 1,
                markCode: "AO3",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer:
              "Structure reveals purpose — problem-solution for persuasive, chronological for narrative, etc.",
            commonErrors: ["Generic 'structure matters'.", "No purpose link."],
          },
        },
        {
          id: "el7-u1-structure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A newspaper article about school uniforms.",
          parts: [
            {
              label: "a",
              prompt: "Identify two non-fiction features likely used.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Suggest two persuasive techniques the writer might use.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain how structure might reveal bias.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Non-fiction analysis",
                statement:
                  "Features + techniques + structure = persuasive analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Features: headline, statistics, quotes, subheadings.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "Technique 1: emotive language ('oppressed children').",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "Technique 2: selective statistics/one-sided quotes.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Technique 3: rhetorical questions.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Structure: one-sided argument ordering.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
              {
                reasoning: "Counter-arguments minimised/absent.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
              {
                reasoning: "Conclusion reinforces preferred view.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "c" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "c" },
                        ],
            finalAnswer:
              "(a) headline+statistics+quotes (b) emotive+selective+rhetorical (c) one-sided structure",
            commonErrors: ["Generic features.", "No bias link."],
          },
        },
      ],
    },
    {
      id: "el7-u1-arguments",
      title: "Evaluating Arguments",
      skill:
        "Identify persuasive techniques and evaluate the strength of arguments.",
      lesson: {
        sections: [
          {
            heading: "Persuasive techniques",
            body: "**Rhetorical questions**: engage reader — 'Would you want your child to...?'. **Emotive language**: triggers feelings — 'innocent victims', 'greedy corporations'. **Statistics**: imply objectivity — '9 out of 10 doctors agree'. **Expert opinion**: lends authority. **Repetition**: reinforces key points. **Rule of three**: memorable triads — 'safe, fair, free'.",
          },
          {
            heading: "Evaluating arguments",
            body: "Strong arguments use **reliable evidence** (peer-reviewed, official statistics), **logical reasoning**, and **acknowledge counter-arguments**. Weak arguments rely on emotion alone, use vague claims ('studies show'), or attack opponents personally (ad hominem).\n\n**Critical evaluation** asks: Is the evidence verifiable? Are there alternative explanations? Is the conclusion justified by the premises?",
          },
        ],
        keyFormulas: [
          {
            name: "Persuasive techniques",
            statement:
              "Rhetorical Q, emotive language, statistics, expert opinion, repetition.",
          },
          {
            name: "Strong argument",
            statement:
              "Reliable evidence + logical reasoning + counter-argument awareness.",
          },
        ],
        workedExample: {
          problem:
            "'Everyone knows mobile phones are destroying society!' — evaluate.",
          solution:
            "Weak argument — 'everyone knows' is vague appeal to consensus, no evidence, no reasoning, absolute claim.",
        },
      },
      questions: [
        {
          id: "el7-u1-arguments-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a rhetorical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A genuine information request" },
              { id: "b", text: "A question expecting no answer" },
              { id: "c", text: "A maths problem" },
              { id: "d", text: "A survey question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhetorical question",
                statement: "Question not expecting answer — used for effect.",
              },
            ],
            steps: [
              {
                reasoning: "Rhetorical Q = effect, not information.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Question expecting no answer",
            commonErrors: ["Confusing with genuine questions."],
          },
        },
        {
          id: "el7-u1-arguments-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify one persuasive technique in: 'Don't let them steal your future — act now!'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasive techniques",
                statement: "Emotive language + urgency + fear appeal.",
              },
            ],
            steps: [
              {
                reasoning: "Emotive language: 'steal your future'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Urgency/fear: 'act now'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technique identified correctly.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Emotive language ('steal your future') + urgency ('act now') — fear appeal.",
            commonErrors: [
              "Vague 'persuasive'.",
              "Missing specific technique.",
            ],
          },
        },
        {
          id: "el7-u1-arguments-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might statistics in an argument be misleading?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Statistics misuse",
                statement:
                  "Statistics can be selectively chosen, misrepresented or lack context.",
              },
            ],
            steps: [
              {
                reasoning: "Selective/cherry-picked data.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Missing context (sample size, timeframe).",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Misleading presentation (graph scales).",
                marks: 1,
                markCode: "AO3",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer:
              "Statistics can be cherry-picked, lack context or be misrepresented — always question source and framing.",
            commonErrors: [
              "Statistics always reliable view.",
              "No specific misuse types.",
            ],
          },
        },
        {
          id: "el7-u1-arguments-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two newspaper headlines about the same event: 'Heroes Save Community' vs 'Mob Violence Erupts'.",
          parts: [
            {
              label: "a",
              prompt: "Identify the bias in each headline.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Suggest two questions to evaluate the underlying article.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why multiple sources matter.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Media bias",
                statement:
                  "Headlines frame events — framing reveals editorial stance.",
              },
            ],
            steps: [
              {
                reasoning: "'Heroes' = positive framing.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "'Mob violence' = negative framing.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Same event, opposite interpretations.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Q1: What evidence supports claims?",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Q2: Are alternative viewpoints included?",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Q3: Who benefits from this framing?",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Single source = single perspective.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
              {
                reasoning: "Multiple sources reveal fuller picture.",
                marks: 1,
                markCode: "AO4",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "(a) positive vs negative framing (b) evidence/viewpoints/beneficiaries (c) multiple perspectives",
            commonErrors: ["No bias identified.", "Generic questions."],
          },
        },
      ],
    },
  ],
};
