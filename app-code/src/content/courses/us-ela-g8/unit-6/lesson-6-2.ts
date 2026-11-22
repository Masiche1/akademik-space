import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const INFPROMPT: TextExtract = {
  title: "Writing Prompt: Explain a Process or Concept",
  author: "Written for Akademik Space",
  text: "Write an informative/explanatory essay that explains how something works or how a concept develops. You might explain how social media algorithms work, how the immune system fights infection, how a seed becomes a plant, or how recycling processes operate.\n\nOrganize your explanation clearly: define your topic, break it into logical parts or steps, use examples to clarify, and use precise vocabulary.",
};

const WEAKEXPL: TextExtract = {
  title: "Student Draft: How Social Media Algorithms Work",
  author: "Written for Akademik Space",
  text: "Social media algorithms are complicated. They use data to show you things. The algorithm looks at what you like and shows you more of that. This is why you see certain posts. Algorithms are everywhere on the internet. They make money for companies. Sometimes they show you bad stuff. Algorithms are important because they affect what we see online.",
};

export const lesson62: Lesson = {
  id: "ela8-u6-lesson-6-2",
  code: "6-2",
  title: "Informative and Explanatory Writing",
  goal: "I CAN write an informative essay that explains a topic clearly using organization, precise vocabulary, and examples.",
  standards: [
    "W.8.2",
    "W.8.2a",
    "W.8.2b",
    "W.8.2c",
    "W.8.2d",
    "W.8.2e",
    "W.8.2f",
  ],
  vocabulary: [
    {
      term: "Informative writing",
      definition: "Writing that teaches the reader about a topic.",
    },
    {
      term: "Explanatory writing",
      definition: "Writing that explains how or why something happens.",
    },
    {
      term: "Definition",
      definition: "Explaining what a term means in your own words.",
    },
    {
      term: "Classification",
      definition: "Organizing information into categories.",
    },
    {
      term: "Sequential order",
      definition: "Arranging steps in process order.",
    },
    {
      term: "Compare and contrast",
      definition: "Showing similarities and differences.",
    },
  ],
  concepts: [
    {
      id: "ela8-u6-explain",
      title: "Organizing explanations",
      skill:
        "Structure informative essays with definition, organization, and clear explanation of parts.",
      lesson: {
        sections: [
          {
            heading: "Explanatory structure",
            body: "An explanatory essay needs: **introduction** (define topic, preview explanation), **body** (explain parts/steps in logical order — sequential for processes, classification for types), **conclusion** (summarize key points). The reader should understand without prior knowledge — define technical terms, use examples for abstract ideas.",
          },
          {
            heading: "Precision and depth",
            body: "Grade 8 requires **precision**: 'algorithms use collaborative filtering to recommend content based on user engagement patterns' not 'algorithms show you things.' **Examples** make abstract concrete: 'When you watch a cooking video, the algorithm notes your interest and recommends more cooking content.' Define terms first, then explain mechanisms.",
          },
        ],
        keyFormulas: [
          {
            name: "Explanatory structure",
            statement:
              "Define → organize into parts/steps → explain each → conclude.",
          },
          {
            name: "Order matters",
            statement:
              "Processes = sequential; types = classification; comparisons = compare/contrast.",
          },
          {
            name: "Precision + examples",
            statement:
              "Technical terms defined + concrete examples = clear explanation.",
          },
        ],
        workedExample: {
          problem: "Why is 'algorithms use data to show you things' weak?",
          solution:
            "Too vague — doesn't explain HOW algorithms work. Stronger: 'Algorithms analyze your engagement patterns — likes, watch time, shares — to predict and recommend content you'll engage with.' Specific mechanism, not vague description.",
        },
      },
      questions: [
        {
          id: "ela8-u6-explain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFPROMPT,
          stem: "What is the main purpose of explanatory writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To teach or explain clearly" },
              { id: "b", text: "To entertain" },
              { id: "c", text: "To argue a position" },
              { id: "d", text: "To describe feelings" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Explanatory writing",
                statement: "Teaching/explaining purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Explanatory writing teaches — explains how/why, not argues or entertains.",
                evidence: "explains how something works",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. To teach or explain clearly.",
            commonErrors: ["Confusing with argumentative writing."],
          },
        },
        {
          id: "ela8-u6-explain-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKEXPL,
          stem: "Identify the main weakness in the draft and explain how to fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Explanatory depth",
                statement: "Mechanism over vague description.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness: vague throughout — 'complicated', 'use data', 'show you things' — no mechanism explained.",
                evidence: "Social media algorithms are complicated",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix: explain HOW — 'algorithms analyze engagement patterns (likes, watch time) to predict recommendations.'",
                evidence: "They use data to show you things",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add structure: define algorithm → explain mechanism → give example → discuss implications.",
                evidence: "Algorithms are everywhere",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Weakness: vague description without mechanism. Fix: explain HOW algorithms work — engagement analysis → prediction → recommendation.",
            commonErrors: [
              "Saying it's 'too short' — the issue is vagueness, not length.",
            ],
          },
        },
        {
          id: "ela8-u6-explain-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFPROMPT,
          stem: "Write an outline for an explanatory essay about 'how social media algorithms work.' Include introduction, 3 body paragraphs in order, and conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay outlining",
                statement: "Plan structure before writing.",
              },
              {
                kind: "skill",
                name: "Logical organization",
                statement: "Parts in logical order.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Introduction: define algorithm and preview explanation of how it works.",
                evidence: "define your topic",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Body P1: data collection — algorithms track likes, watch time, shares.",
                evidence: "break it into logical parts or steps",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Body P2: pattern analysis — algorithms identify preferences and predict interests.",
                evidence: "Organize your explanation clearly",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Body P3: content delivery — algorithms rank and recommend content; conclusion summarizes.",
                evidence: "use examples to clarify",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Intro (define algorithm, preview) → P1 data collection (engagement tracking) → P2 pattern analysis (preference prediction) → P3 content delivery (ranking/recommendation) → Conclusion (summarize mechanism + implications).",
            commonErrors: [
              "Outlining without logical order — must follow how algorithms actually work.",
            ],
          },
        },
        {
          id: "ela8-u6-explain-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKEXPL,
          parts: [
            {
              label: "a",
              prompt: "Replace 'algorithms use data' with a precise phrase.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how your choice improves clarity.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precision",
                statement: "Exact terms clarify meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'algorithms analyze engagement patterns' or 'algorithms process user interaction data'.",
                evidence: "They use data to show you things",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Analyze engagement patterns' specifies WHAT data and HOW it's used — clearer than vague 'use data'.",
                evidence: "show you things",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Algorithms analyze engagement patterns.' (b) Specifies what data and how it's used — clearer mechanism.",
            commonErrors: [
              "Replacing with another vague phrase — need specific mechanism.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u6-explain2",
      title: "Classification and comparison structures",
      skill:
        "Use classification and compare/contrast structures to explain complex topics.",
      lesson: {
        sections: [
          {
            heading: "Classification",
            body: "When explaining types or categories, use **classification**: group items by shared characteristics. 'There are three types of algorithms: collaborative filtering (recommends based on similar users), content-based filtering (recommends based on item features), and hybrid approaches (combine both).' Each type gets explained — similarities and differences clarified.",
          },
          {
            heading: "Compare and contrast",
            body: "Use **compare and contrast** for showing similarities and differences: 'Both collaborative and content-based filtering personalize recommendations, but collaborative uses user behavior while content-based uses item attributes.' Structure: similarities first, then differences — or point-by-point comparison.",
          },
        ],
        keyFormulas: [
          {
            name: "Classification",
            statement: "Group by shared characteristics — types/categories.",
          },
          {
            name: "Compare/contrast",
            statement: "Similarities first, then differences.",
          },
          {
            name: "One idea per paragraph",
            statement: "Each paragraph explains one type or comparison point.",
          },
        ],
        workedExample: {
          problem:
            "How would you explain different algorithm types using classification?",
          solution:
            "'There are three main types: collaborative filtering (recommends based on similar users' behavior), content-based filtering (recommends based on item features matching user preferences), and hybrid approaches (combine both methods). Each uses different data and logic to personalize recommendations.'",
        },
      },
      questions: [
        {
          id: "ela8-u6-explain2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFPROMPT,
          stem: "Which structure best fits explaining 'types of algorithms'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problem-solution" },
              { id: "b", text: "Classification" },
              { id: "c", text: "Chronological" },
              { id: "d", text: "Cause-effect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Classification",
                statement: "Group by types.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Types/categories need classification — group by shared characteristics.",
                evidence: "break it into logical parts",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Classification — group by types.",
            commonErrors: ["Choosing (a) — types aren't time-ordered."],
          },
        },
        {
          id: "ela8-u6-explain2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKEXPL,
          stem: "Rewrite 'They use data to show you things' using classification — name two algorithm types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Classification",
                statement: "Group by types.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Name types: 'collaborative filtering' and 'content-based filtering'.",
                evidence: "They use data",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explain each: 'collaborative filtering recommends based on similar users; content-based uses item features.'",
                evidence: "show you things",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Classification makes the explanation clearer — readers understand different approaches.",
                evidence: "algorithms",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'There are two main types: collaborative filtering (recommends based on similar users' behavior) and content-based filtering (recommends based on item features matching preferences).'",
            commonErrors: [
              "Listing types without explaining — classification needs definitions.",
            ],
          },
        },
        {
          id: "ela8-u6-explain2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFPROMPT,
          stem: "Write a compare/contrast paragraph explaining the difference between collaborative and content-based filtering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Compare/contrast",
                statement: "Similarities and differences.",
              },
              {
                kind: "skill",
                name: "Clear explanation",
                statement: "Reader understands both types.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Similarity: 'Both recommend content based on user data.'",
                evidence: "Organize your explanation clearly",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Difference 1: 'Collaborative filtering uses behavior of similar users; content-based uses item features.'",
                evidence: "use examples to clarify",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Difference 2: 'Collaborative works well with lots of user data; content-based works with item attributes.'",
                evidence: "use precise vocabulary",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Compare/contrast structure helps readers understand both types and their differences.",
                evidence: "explain how something works",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Both collaborative and content-based filtering personalize recommendations using user data. However, collaborative filtering analyzes behavior of similar users, while content-based filtering matches item features to user preferences. Collaborative works best with large user datasets; content-based works with detailed item attributes.'",
            commonErrors: [
              "Describing each separately without comparing — loses the contrast structure.",
            ],
          },
        },
        {
          id: "ela8-u6-explain2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFPROMPT,
          parts: [
            {
              label: "a",
              prompt:
                "Choose classification or compare/contrast for explaining 'types of renewable energy.' Explain why.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Name two renewable energy types for your explanation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure selection",
                statement: "Match structure to topic.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Classification — types of energy grouped by source (solar, wind, hydro).",
                evidence: "logical parts or steps",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Solar and wind — or hydroelectric and geothermal.",
                evidence: "renewable energy",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Classification — types grouped by source. (b) Solar and wind (or hydroelectric and geothermal).",
            commonErrors: [
              "Choosing compare/contrast — classification fits types better.",
            ],
          },
        },
      ],
    },
  ],
};
