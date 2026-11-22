import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const INFO: TextExtract = {
  title:
    "Writing Sample: Informative Essay on How Social Media Affects Attention",
  author: "Written for Akademik Space",
  text: "Social media platforms are designed to capture and hold attention through sophisticated psychological mechanisms. Understanding how these mechanisms work helps explain why users find it difficult to disengage and why the platforms are so effective at maintaining engagement.\n\nThe first mechanism is **variable rewards** — the same principle that makes slot machines addictive. Users don't know when they'll receive a like, comment, or share, creating unpredictable feedback that triggers compulsive checking. The second is **social proof**: engagement metrics signal popularity, and our brains are wired to conform to social signals. When we see a post with 10,000 likes, we interpret it as valuable and are more likely to engage.\n\nThe third mechanism is **algorithmic curation**: platforms use machine learning to predict what content will maximize engagement for each user. The algorithm learns what you click, what you share, what you linger on — and serves more of it. This creates a feedback loop: the more you engage, the more the algorithm shows you similar content, the more you engage.\n\nThese mechanisms don't operate in isolation. They work together to create what designers call 'persuasion architecture' — an environment where certain behaviors are easier than others. The result isn't just distracted users; it's a fundamental shift in how we process information, relate to each other, and participate in democratic discourse.",
};

export const lesson62: Lesson = {
  id: "ela10-u6-lesson-6-2",
  code: "6-2",
  title: "Informative/Explanatory Writing: Structure and Precision",
  goal: "I CAN write clear, informative essays that explain complex concepts accurately and precisely.",
  standards: [
    "W.9-10.2",
    "W.9-10.2a",
    "W.9-10.2b",
    "W.9-10.2c",
    "W.9-10.2d",
    "W.9-10.2e",
    "W.9-10.2f",
  ],
  vocabulary: [
    {
      term: "Expository writing",
      definition: "Explaining/informing without persuasion.",
    },
    {
      term: "Logical progression",
      definition: "Organizing ideas in clear sequence.",
    },
    { term: "Precise language", definition: "Exact words for clarity." },
    {
      term: "Technical vocabulary",
      definition: "Domain-specific terms explained.",
    },
    {
      term: "Cause-effect",
      definition: "Explaining how one thing leads to another.",
    },
    {
      term: "Compare-contrast",
      definition: "Showing similarities/differences.",
    },
  ],
  concepts: [
    {
      id: "ela10-u6-explain",
      title: "Explanatory structure and organization",
      skill:
        "Organize informative essays with clear introduction, body, and conclusion.",
      lesson: {
        sections: [
          {
            heading: "Informative essay structure",
            body: "Introduction: hook + context + thesis ('This essay explains how social media mechanisms capture attention'). Body: develop each mechanism with definition, explanation, example. Conclusion: synthesize ('These mechanisms work together to create persuasion architecture'). Unlike argument, informative writing doesn't persuade — it explains neutrally. The sample essay explains mechanisms without arguing whether they're good or bad.",
          },
          {
            heading: "Logical organization patterns",
            body: "Choose pattern matching content: **process** (how something works — step-by-step), **cause-effect** (why something happens — mechanisms leading to outcomes), **compare-contrast** (similarities/differences), **problem-solution** (issue + resolution). Social media essay uses **cause-effect**: mechanisms (causes) → engagement (effect). Each paragraph develops one mechanism with clear topic sentence + explanation + example.",
          },
        ],
        keyFormulas: [
          {
            name: "Informative ≠ persuasive",
            statement: "Explain, don't argue.",
          },
          {
            name: "Organization patterns",
            statement:
              "Process, cause-effect, compare-contrast, problem-solution.",
          },
          {
            name: "Topic sentence + development",
            statement: "Each paragraph focused.",
          },
        ],
        workedExample: {
          problem: "How does the sample essay organize its explanation?",
          solution:
            "Cause-effect pattern: introduces mechanisms → develops each (variable rewards, social proof, algorithmic curation) → synthesizes (persuasion architecture). Each paragraph one mechanism.",
        },
      },
      questions: [
        {
          id: "ela10-u6-explain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What's the difference between informative and argument writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informative is shorter" },
              { id: "b", text: "No difference" },
              { id: "c", text: "Argument is factual" },
              { id: "d", text: "Informative explains; argument persuades" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informative vs argument",
                statement: "Explain vs persuade.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Informative explains neutrally; argument takes position and persuades.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Informative explains; argument persuades.",
            commonErrors: ["Confusing the two genres."],
          },
        },
        {
          id: "ela10-u6-explain-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "Identify the organization pattern in the sample essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Organization pattern",
                statement: "How content structured.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pattern: cause-effect — mechanisms (causes) → engagement (effect).",
                evidence: "cause-effect",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Each paragraph: one mechanism with definition + explanation + example.",
                evidence: "paragraphs",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion synthesizes: 'work together to create persuasion architecture.'",
                evidence: "synthesis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Cause-effect pattern: mechanisms (variable rewards, social proof, algorithmic curation) → engagement. Each paragraph develops one mechanism; conclusion synthesizes.",
            commonErrors: ["Not identifying organizational pattern."],
          },
        },
        {
          id: "ela10-u6-explain-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Analyze how the essay achieves precise, accessible explanation of complex mechanisms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precise explanation",
                statement: "Complex ideas clearly.",
              },
              {
                kind: "skill",
                name: "Accessible language",
                statement: "Technical terms explained.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Technical terms defined: 'variable rewards' explained via slot machine analogy.",
                evidence: "define",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Analogies clarify: 'slot machines addictive' for variable rewards, 'feedback loop' for algorithm.",
                evidence: "analogies",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Step-by-step: each mechanism explained logically — how it works, why effective.",
                evidence: "steps",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Essay achieves precise explanation: technical terms defined ('variable rewards' via slot machine analogy), complex concepts made accessible (feedback loop explained), each mechanism developed logically with how/why.",
            commonErrors: ["Thinking technical = jargon."],
          },
        },
        {
          id: "ela10-u6-explain-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            {
              label: "a",
              prompt: "What organization pattern does the essay use?",
              marks: 2,
            },
            { label: "b", prompt: "Why is it appropriate?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pattern appropriateness",
                statement: "Matching content.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cause-effect — mechanisms (causes) → engagement (effect).",
                evidence: "pattern",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Appropriate because explaining how mechanisms lead to outcomes — natural cause-effect flow.",
                evidence: "appropriate",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Cause-effect. (b) Explaining mechanisms → outcomes — natural flow.",
            commonErrors: ["Choosing pattern without justification."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-precision",
      title: "Precise Language and Technical Vocabulary",
      skill:
        "Use precise, accurate language and explain technical terms appropriately in informative writing.",
      lesson: {
        sections: [
          {
            heading: "Precision in informative writing",
            body: "Informative writing demands precision: 'users find it difficult to disengage' not 'users can't stop'; 'predict what content will maximize engagement' not 'shows you stuff you like.' Precise language conveys exact meaning. Vague language ('things,' 'stuff,' 'a lot') undermines credibility. Technical vocabulary ('algorithmic curation,' 'persuasion architecture') used precisely signals expertise — but must be explained for accessibility.",
          },
          {
            heading: "Explaining technical terms",
            body: "Technical terms need context: 'variable rewards — the same principle that makes slot machines addictive' (analogy), 'algorithmic curation: platforms use machine learning to predict...' (definition), 'persuasion architecture: design choices that make certain behaviors easier' (explanation). Don't assume readers know jargon — define or contextualize. Balance: use precise terms AND make them accessible.",
          },
        ],
        keyFormulas: [
          {
            name: "Precise > vague",
            statement: "Exact language conveys meaning.",
          },
          {
            name: "Define technical terms",
            statement: "Context makes accessible.",
          },
          {
            name: "Balance precision + accessibility",
            statement: "Expert + understandable.",
          },
        ],
        workedExample: {
          problem: "How does the essay explain 'variable rewards' precisely?",
          solution:
            "'Unpredictable feedback that triggers compulsive checking' + slot machine analogy — precise definition + accessible comparison.",
        },
      },
      questions: [
        {
          id: "ela10-u6-precision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "Why is precise language important in informative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's required" },
              { id: "b", text: "It sounds smart" },
              { id: "c", text: "It's shorter" },
              { id: "d", text: "Conveys exact meaning" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Precise language",
                statement: "Exact meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Precise language conveys exact meaning — 'difficult to disengage' vs 'can't stop.'",
                evidence: "precise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Conveys exact meaning.",
            commonErrors: ["Thinking precision = complexity."],
          },
        },
        {
          id: "ela10-u6-precision-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "How does the essay explain 'variable rewards' for accessibility?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technical term explanation",
                statement: "Accessible definition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Defines precisely: 'unpredictable feedback that triggers compulsive checking.'",
                evidence: "definition",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Analogy: 'same principle that makes slot machines addictive' — familiar comparison.",
                evidence: "analogy",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'users don't know when they'll receive a like' — concrete illustration.",
                evidence: "example",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Defines precisely + slot machine analogy + concrete example — accessible explanation of technical concept.",
            commonErrors: ["Using jargon without explanation."],
          },
        },
        {
          id: "ela10-u6-precision-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Analyze the balance between technical precision and accessibility in the essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precision-accessibility balance",
                statement: "Expert + understandable.",
              },
              {
                kind: "skill",
                name: "Language choice",
                statement: "How terms used.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Technical terms used precisely: 'algorithmic curation,' 'persuasion architecture' — exact concepts.",
                evidence: "technical",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Terms explained accessibly: each has definition/analogy/example.",
                evidence: "explained",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Balance achieved: expert vocabulary + accessible explanation — sophisticated but understandable.",
                evidence: "balance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Essay balances precision + accessibility: uses technical terms precisely ('algorithmic curation,' 'persuasion architecture') while explaining each accessibly (definitions, analogies, examples). Sophisticated but understandable.",
            commonErrors: ["Thinking precision requires jargon."],
          },
        },
        {
          id: "ela10-u6-precision-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            {
              label: "a",
              prompt:
                "What's the difference between precise and vague language?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example from the essay.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precise vs vague",
                statement: "Exact vs general.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Precise = exact meaning; vague = general/unclear.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'difficult to disengage' (precise) vs 'can't stop' (vague); 'predict what content will maximize engagement' vs 'shows you stuff.'",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Precise = exact; vague = general. (b) 'Difficult to disengage' vs 'can't stop.'",
            commonErrors: ["Thinking precise = complicated."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-conclusion",
      title: "Conclusions and Synthesis",
      skill:
        "Write effective conclusions that synthesize key points and leave lasting impressions.",
      lesson: {
        sections: [
          {
            heading: "Effective conclusions",
            body: "Strong conclusions: **synthesize** (combine key points into new understanding), **reinforce thesis** (restates main idea), **extend** (implications or future considerations). Sample essay conclusion: 'These mechanisms don't operate in isolation. They work together to create persuasion architecture... fundamental shift in how we process information.' Synthesizes mechanisms → new concept (persuasion architecture) → broader implication (fundamental shift).",
          },
          {
            heading: "Avoiding weak conclusions",
            body: "Weak conclusions: **restate only** ('In conclusion, social media uses mechanisms'), **introduce new ideas** (unrelated points), **summarize mechanically** ('First... Second... Third...'). Effective conclusion does more than repeat — it synthesizes and extends. The sample essay's conclusion doesn't just list mechanisms; it shows how they combine to create something new (persuasion architecture).",
          },
        ],
        keyFormulas: [
          {
            name: "Synthesize + extend",
            statement: "New understanding + implications.",
          },
          { name: "Reinforce thesis", statement: "Restate main idea." },
          { name: "Avoid mechanical summary", statement: "More than listing." },
        ],
        workedExample: {
          problem: "How does the essay's conclusion synthesize its points?",
          solution:
            "'These mechanisms don't operate in isolation — they work together to create persuasion architecture' — synthesizes mechanisms into new concept, extends to broader implication.",
        },
      },
      questions: [
        {
          id: "ela10-u6-conclusion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What should an informative essay conclusion do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List all points" },
              { id: "b", text: "Just repeat introduction" },
              { id: "c", text: "Synthesize and extend" },
              { id: "d", text: "Introduce new ideas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Effective conclusion",
                statement: "Synthesize + extend.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strong conclusion synthesizes key points and extends to implications.",
                evidence: "synthesize",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Synthesize and extend.",
            commonErrors: ["Thinking conclusion = summary only."],
          },
        },
        {
          id: "ela10-u6-conclusion-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "How does the essay's conclusion synthesize its mechanisms?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion synthesis",
                statement: "Combining points.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesizes: 'These mechanisms don't operate in isolation' — combines individual mechanisms.",
                evidence: "synthesize",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "New concept: 'work together to create persuasion architecture' — creates unified understanding.",
                evidence: "new concept",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Extends: 'fundamental shift in how we process information' — broader implication.",
                evidence: "extends",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Synthesizes mechanisms ('don't operate in isolation') → new concept ('persuasion architecture') → broader implication ('fundamental shift').",
            commonErrors: ["Just listing mechanisms in conclusion."],
          },
        },
        {
          id: "ela10-u6-conclusion-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Analyze why the conclusion is more effective than a mechanical summary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion effectiveness",
                statement: "Why it works.",
              },
              {
                kind: "skill",
                name: "Synthesis vs summary",
                statement: "New understanding.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Mechanical summary would list: 'First variable rewards, second social proof, third algorithmic curation.'",
                evidence: "mechanical",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effective conclusion synthesizes: mechanisms combine to create persuasion architecture — new concept.",
                evidence: "synthesis",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Extends to implication: 'fundamental shift in how we process information' — leaves lasting impression.",
                evidence: "extends",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Mechanical summary lists mechanisms; effective conclusion synthesizes them into new concept (persuasion architecture) and extends to broader implication (fundamental shift). Creates lasting impression vs just repeating.",
            commonErrors: ["Thinking summary = effective conclusion."],
          },
        },
        {
          id: "ela10-u6-conclusion-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            { label: "a", prompt: "What's a 'weak conclusion'?", marks: 2 },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Weak conclusion",
                statement: "Mechanical repetition.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Just restates points or introduces new ideas without synthesis.",
                evidence: "weak",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'In conclusion, social media uses variable rewards, social proof, and algorithms.'",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Just restates/lists without synthesis. (b) 'In conclusion, social media uses variable rewards, social proof, and algorithms.'",
            commonErrors: ["Thinking repetition = conclusion."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-integrated-r2",
      title: "Integrated Informative Writing Practice",
      skill:
        "Integrate structure, precision, and conclusions in comprehensive informative writing.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive informative essay",
            body: "Effective informative writing integrates: **structure** (clear organization pattern), **precision** (exact language, explained technical terms), **synthesis** (conclusion creates new understanding). Sample essay demonstrates all: cause-effect structure, precise technical vocabulary with explanations, conclusion synthesizing into 'persuasion architecture.'",
          },
          {
            heading: "Writing process",
            body: "Draft → revise: choose organization pattern → draft with precise language → explain technical terms → refine conclusion → proofread. Peer review: check clarity, accuracy, accessibility.",
          },
        ],
        keyFormulas: [
          {
            name: "Three components",
            statement: "Structure + precision + synthesis.",
          },
          { name: "Iterative process", statement: "Draft → revise." },
          { name: "Peer review", statement: "Check clarity + accuracy." },
        ],
        workedExample: {
          problem:
            "How would you structure an informative essay on a complex topic?",
          solution:
            "Choose pattern (cause-effect) → introduce + thesis → develop each point precisely → synthesize in conclusion.",
        },
      },
      questions: [
        {
          id: "ela10-u6-integrated-q1-r2",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFO,
          stem: "What three components make effective informative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only vocabulary" },
              { id: "b", text: "Structure + precision + synthesis" },
              { id: "c", text: "Only conclusions" },
              { id: "d", text: "Only structure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Effective informative",
                statement: "Three components.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure + precision + synthesis = comprehensive informative writing.",
                evidence: "components",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Structure + precision + synthesis.",
            commonErrors: ["Missing components."],
          },
        },
        {
          id: "ela10-u6-integrated-q2-r2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFO,
          stem: "Outline the writing process for an informative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing process",
                statement: "Iterative approach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choose pattern: match content to cause-effect/compare-contrast/etc.",
                evidence: "pattern",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Draft: write with precise language + explain technical terms.",
                evidence: "draft",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Revise: refine conclusion synthesis, proofread.",
                evidence: "revise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Choose pattern → draft (precise language + explained terms) → revise (synthesize conclusion, proofread).'",
            commonErrors: ["Starting without choosing pattern."],
          },
        },
        {
          id: "ela10-u6-integrated-q3-r2",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFO,
          stem: "Write an introduction for an informative essay on how algorithms work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction writing",
                statement: "Hook + context + thesis.",
              },
              {
                kind: "skill",
                name: "Informative thesis",
                statement: "What will be explained.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Hook: engaging opening about algorithmic influence.",
                evidence: "hook",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Context: explain why algorithms matter — pervasive in daily life.",
                evidence: "context",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Thesis: 'This essay explains how algorithms work, why they influence behavior, and what that means for users.'",
                evidence: "thesis",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Every day, algorithms determine what you see, hear, and buy. This essay explains how algorithms work — the mechanisms that learn from your behavior — why they're so effective at capturing attention, and what that means for how we process information.'",
            commonErrors: ["Thesis that argues instead of explains."],
          },
        },
        {
          id: "ela10-u6-integrated-q4-r2",
          difficulty: "core",
          totalMarks: 4,
          extract: INFO,
          parts: [
            {
              label: "a",
              prompt: "Why is peer review valuable for informative writing?",
              marks: 2,
            },
            { label: "b", prompt: "What should reviewers check?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Peer review",
                statement: "Feedback value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Identifies unclear explanations, jargon, weak organization.",
                evidence: "value",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Check: clarity, accuracy, accessibility, organization pattern.",
                evidence: "check",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Identifies unclear explanations/jargon/weak organization. (b) Check clarity, accuracy, accessibility, pattern.",
            commonErrors: ["Thinking peer review = proofreading only."],
          },
        },
      ],
    },
  ],
};
