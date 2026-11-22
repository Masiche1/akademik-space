import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const MEDIA: TextExtract = {
  title: "Media Analysis: Viral Misinformation",
  author: "Written for Akademik Space",
  text: "A viral post claims: 'Study proves social media causes depression in 90% of teens.' The post has 2 million shares. But the 'study' is a blog post citing no data, and 'causes' is actually 'correlates with' — a critical distinction. The original research found an association, not causation.\n\nThis is how misinformation works: take a kernel of truth (social media and mental health are related), distort it (correlation → causation), amplify it (viral sharing), and profit from attention. The algorithm doesn't verify truth — it optimizes for engagement. Outrage and fear spread faster than nuance.",
};

const EXAM: TextExtract = {
  title: "Exam Practice: Integrated Analysis",
  author: "Written for Akademik Space",
  text: "Prompt: Analyze how 'The Algorithm's Dream' and 'The Waiting Room' explore the theme of human agency in modern life. Consider form, perspective, and technique in your analysis.",
};

export const lesson92: Lesson = {
  id: "ela9-u9-lesson-9-2",
  code: "9-2",
  title: "Media Literacy and Exam Synthesis",
  goal: "I CAN evaluate media claims critically and synthesize literary analysis for exam-style responses.",
  standards: ["RI.9-10.8", "RI.9-10.9", "RL.9-10.9", "W.9-10.9"],
  vocabulary: [
    {
      term: "Misinformation",
      definition: "False or misleading information spread unintentionally.",
    },
    {
      term: "Correlation vs causation",
      definition: "Relationship vs cause-and-effect.",
    },
    { term: "Virality", definition: "Rapid spread through sharing." },
    {
      term: "Media literacy",
      definition: "Ability to critically evaluate media messages.",
    },
    {
      term: "Source evaluation",
      definition: "Assessing credibility of information sources.",
    },
    {
      term: "Integrated response",
      definition: "Synthesis of multiple analytical elements.",
    },
  ],
  concepts: [
    {
      id: "ela9-u9-media",
      title: "Media literacy and misinformation",
      skill:
        "Evaluate media claims for accuracy, source credibility, and logical fallacies.",
      lesson: {
        sections: [
          {
            heading: "Misinformation mechanics",
            body: "The viral post demonstrates misinformation pipeline: **kernel of truth** (social media-mental health link exists) → **distortion** ('causes' instead of 'correlates') → **amplification** (2M shares) → **monetization** (attention = revenue). Key distinction: correlation (things happen together) vs causation (one causes other). 'Social media use and depression are correlated' ≠ 'social media causes depression' — third variable (loneliness) might cause both.",
          },
          {
            heading: "Source evaluation",
            body: "Ask: Who created this? What's their expertise? What's their motivation? The 'study' is a blog post — not peer-reviewed, no data, no methodology. Original research 'found an association' — observational, not experimental. Red flags: absolute claims ('90%'), causal language without evidence, anonymous sources, emotional manipulation ('study proves' — certainty without nuance). Media literacy = skepticism with verification.",
          },
        ],
        keyFormulas: [
          { name: "Correlation ≠ causation", statement: "Together ≠ cause." },
          {
            name: "Source questions",
            statement: "Who? Expertise? Motivation?",
          },
          {
            name: "Red flags",
            statement: "Absolute claims, no data, emotional.",
          },
        ],
        workedExample: {
          problem:
            "What's wrong with 'Study proves social media causes depression in 90% of teens'?",
          solution:
            "Multiple issues: 'study' is blog post (not credible), 'causes' should be 'correlates' (logical fallacy), '90%' unverified, 'proves' overstates certainty.",
        },
      },
      questions: [
        {
          id: "ela9-u9-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIA,
          stem: "What's the key logical error in 'social media causes depression'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's not emotional enough" },
              { id: "b", text: "It's about teens" },
              { id: "c", text: "Correlation confused with causation" },
              { id: "d", text: "It's too short" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation vs causation",
                statement: "Together ≠ cause.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Original research found 'association' not causation — blog post distorted to 'causes.'",
                evidence: "correlation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Correlation confused with causation.",
            commonErrors: ["Missing the logical fallacy."],
          },
        },
        {
          id: "ela9-u9-media-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIA,
          stem: "Identify three red flags in the viral post.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Red flag identification",
                statement: "Warning signs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Study proves' — absolute certainty without evidence.",
                evidence: "proves",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'90%' — specific number without source verification.",
                evidence: "90%",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "'causes' — causal claim from correlational data.",
                evidence: "causes",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Study proves' (absolute certainty), '90%' (unverified statistic), 'causes' (causal claim from correlational data).",
            commonErrors: ["Identifying only one red flag."],
          },
        },
        {
          id: "ela9-u9-media-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEDIA,
          stem: "Analyze how the misinformation pipeline works — from kernel of truth to viral amplification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Misinformation analysis",
                statement: "Pipeline mechanics.",
              },
              {
                kind: "skill",
                name: "Amplification",
                statement: "Why it spreads.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Kernel of truth: social media-mental health link exists — makes distortion believable.",
                evidence: "truth",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Distortion: 'correlates' → 'causes' — logical fallacy makes claim stronger.",
                evidence: "distortion",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Amplification: algorithm optimizes engagement — outrage/fear spread faster than nuance.",
                evidence: "algorithm",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Pipeline: kernel of truth (SM-mental health link) → distortion (correlation→causation) → amplification (2M shares) → algorithm rewards engagement (outrage > nuance). Each step makes false claim more believable and spreadable.",
            commonErrors: ["Describing without analyzing pipeline mechanics."],
          },
        },
        {
          id: "ela9-u9-media-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            {
              label: "a",
              prompt: "Why is 'correlation ≠ causation' important?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation vs causation",
                statement: "Key distinction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Things can happen together without one causing other — third variable possible.",
                evidence: "importance",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: ice cream sales and drowning both increase in summer — correlation but no causation (heat causes both).",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Things can co-occur without causation — third variable possible. (b) Ice cream sales and drowning both rise in summer — heat causes both, not each other.",
            commonErrors: ["Thinking correlation proves causation."],
          },
        },
      ],
    },
    {
      id: "ela9-u9-exam",
      title: "Exam Synthesis and Response Strategy",
      skill:
        "Synthesize literary analysis elements for comprehensive exam-style responses.",
      lesson: {
        sections: [
          {
            heading: "Exam response structure",
            body: "For 'analyze how texts explore theme': **thesis** (argument about theme), **evidence** (specific quotes/details from both texts), **analysis** (how techniques serve theme), **synthesis** (connection between texts). Don't just describe — analyze. 'The Algorithm's Dream uses first-person system voice to show control mechanism; The Waiting Room uses third-person individual POV to show control experience — together they reveal modern agency loss.'",
          },
          {
            heading: "Time management and completeness",
            body: "Plan: 5 min outline (thesis + 3 points), 20 min write, 5 min review. Check: thesis clear? Both texts addressed? Techniques analyzed? Synthesis present? Don't leave hanging — conclude by connecting back to thesis. Quality over quantity — fewer well-analyzed points beat many superficial ones.",
          },
        ],
        keyFormulas: [
          {
            name: "Thesis-evidence-analysis-synthesis",
            statement: "Response structure.",
          },
          { name: "Both texts required", statement: "Comparative = both." },
          { name: "Quality > quantity", statement: "Depth beats breadth." },
        ],
        workedExample: {
          problem:
            "How would you structure response to 'analyze agency theme in both texts'?",
          solution:
            "Thesis: both explore agency loss differently. Evidence: algorithm poem (first-person system) + waiting room (third-person individual). Analysis: POV shapes theme. Synthesis: mechanism vs experience.",
        },
      },
      questions: [
        {
          id: "ela9-u9-exam-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXAM,
          stem: "What should a comparative literary analysis include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List of themes" },
              {
                id: "b",
                text: "Thesis, evidence from both, analysis of techniques, synthesis",
              },
              { id: "c", text: "Opinion about texts" },
              { id: "d", text: "Summary of both texts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative analysis",
                statement: "Structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Requires thesis, evidence both texts, technique analysis, synthesis — not just summary.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Thesis, evidence from both, analysis of techniques, synthesis.",
            commonErrors: ["Writing summary instead of analysis."],
          },
        },
        {
          id: "ela9-u9-exam-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EXAM,
          stem: "Write a thesis for 'analyze human agency in both texts.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis writing",
                statement: "Arguable claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis should argue about agency theme across both texts.",
                evidence: "thesis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'Both texts explore agency loss — algorithm shows mechanism (system controls), waiting room shows experience (individual endures).'",
                evidence: "example",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Must be specific, arguable, address both texts.",
                evidence: "quality",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Both texts explore human agency in modern life — The Algorithm's Dream shows the mechanism of control (system's perspective), while The Waiting Room shows the experience of control (individual's perspective), together revealing how opacity erodes agency.'",
            commonErrors: ["Thesis that's just topic statement."],
          },
        },
        {
          id: "ela9-u9-exam-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EXAM,
          stem: "Write an integrated response analyzing agency theme in both texts — thesis, evidence, analysis, synthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated response",
                statement: "Complete structure.",
              },
              {
                kind: "skill",
                name: "Multi-text analysis",
                statement: "Both texts.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Thesis: agency loss explored differently — mechanism vs experience.",
                evidence: "thesis",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: algorithm poem (first-person, 'you are the product') + waiting room (third-person, Marcus's uncertainty).",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Analysis: POV shapes theme — system voice vs individual experience.",
                evidence: "analysis",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis: together reveal opacity as source of agency loss.",
                evidence: "synthesis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Thesis: Both texts explore agency loss through different lenses — mechanism vs experience. Evidence: Algorithm's Dream uses first-person system voice ('you are the product') to show control mechanism; Waiting Room uses third-person individual POV (Marcus's uncertainty) to show control experience. Analysis: POV choice shapes theme — algorithm poem reveals how systems work, waiting room reveals how individuals endure. Synthesis: together they show opacity as root of agency loss — we can't resist what we can't see.'",
            commonErrors: ["Missing synthesis or analyzing only one text."],
          },
        },
        {
          id: "ela9-u9-exam-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EXAM,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between summary and analysis?",
              marks: 2,
            },
            { label: "b", prompt: "Why does it matter for exams?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis vs summary",
                statement: "Interpretation vs restatement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Summary = restates what happens; analysis = interprets how/why it means.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Exams require analysis — summary gets low marks regardless of accuracy.",
                evidence: "matters",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Summary restates; analysis interprets. (b) Exams require analysis — summary gets low marks.",
            commonErrors: ["Writing detailed summary thinking it's analysis."],
          },
        },
      ],
    },
    {
      id: "ela9-u9-integrated2",
      title: "Integrated Skills Practice",
      skill:
        "Combine reading, writing, and language skills in comprehensive practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated practice",
            body: "Grade 9 ELA integrates all strands: **reading** (analyze texts), **writing** (compose responses), **language** (grammar/vocabulary), **speaking/listening** (discuss interpretations). Exam questions often require multiple skills: analyze text (RL) + write response (W) + use precise language (L). Practice integrating: read critically → plan analysis → write with evidence → edit for conventions → present/discuss.",
          },
          {
            heading: "Self-assessment",
            body: "After writing: Did I address both texts? Is thesis arguable? Is evidence specific? Did I analyze techniques? Is there synthesis? Are sentences varied? Is vocabulary precise? Did I edit for errors? Self-assessment catches problems before submission. Peer review adds perspective — others see what you miss.",
          },
        ],
        keyFormulas: [
          { name: "All strands integrated", statement: "RL + W + L + SL." },
          {
            name: "Self-assessment checklist",
            statement: "Catch problems early.",
          },
          { name: "Peer review", statement: "Fresh perspective." },
        ],
        workedExample: {
          problem: "How would you prepare for integrated ELA exam?",
          solution:
            "Practice: analyze texts → plan → write with evidence → edit → discuss. Self-assess against checklist: both texts? thesis? evidence? techniques? synthesis? conventions?",
        },
      },
      questions: [
        {
          id: "ela9-u9-integrated2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXAM,
          stem: "What does 'integrated ELA' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Combining reading, writing, language, speaking/listening",
              },
              { id: "b", text: "Only reading" },
              { id: "c", text: "Only writing" },
              { id: "d", text: "Grammar practice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integrated ELA",
                statement: "All strands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ELA integrates reading, writing, language, speaking/listening — not isolated skills.",
                evidence: "integrated",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Combining reading, writing, language, speaking/listening.",
            commonErrors: ["Thinking strands are separate."],
          },
        },
        {
          id: "ela9-u9-integrated2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EXAM,
          stem: "List three self-assessment questions for a literary analysis essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Self-assessment",
                statement: "Check your work.",
              },
            ],
            steps: [
              {
                reasoning: "Did I address both texts? Is thesis arguable?",
                evidence: "thesis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Is evidence specific? Did I analyze techniques?",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Is there synthesis? Are sentences varied? Edited for errors?",
                evidence: "synthesis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Did I address both texts? Is thesis arguable? Is evidence specific? Did I analyze techniques? Is there synthesis? Are conventions correct?'",
            commonErrors: ["Only checking grammar — need content too."],
          },
        },
        {
          id: "ela9-u9-integrated2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EXAM,
          stem: "Write a self-assessment checklist for a comparative literary analysis essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checklist creation",
                statement: "Comprehensive self-check.",
              },
              {
                kind: "skill",
                name: "Quality assurance",
                statement: "Catch problems early.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Content: both texts addressed? thesis arguable? evidence specific?",
                evidence: "content",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Analysis: techniques analyzed? synthesis present? connections made?",
                evidence: "analysis",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conventions: sentences varied? vocabulary precise? errors edited?",
                evidence: "conventions",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example checklist: Content — both texts? arguable thesis? specific evidence? Analysis — techniques? synthesis? connections? Conventions — varied sentences? precise vocabulary? edited errors? Organization — logical flow? transitions? Conclusion — addresses thesis?",
            commonErrors: ["Checklist too vague — need specific questions."],
          },
        },
        {
          id: "ela9-u9-integrated2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EXAM,
          parts: [
            { label: "a", prompt: "Why is peer review valuable?", marks: 2 },
            {
              label: "b",
              prompt: "What should you ask a peer reviewer?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Peer review",
                statement: "Fresh perspective.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Others see what you miss — fresh perspective catches blind spots.",
                evidence: "peer",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Ask: Is thesis clear? Is evidence convincing? Are connections made? What's confusing?",
                evidence: "questions",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Fresh perspective catches blind spots. (b) Ask: Is thesis clear? Evidence convincing? Connections made? What's confusing?",
            commonErrors: ["Asking 'is it good?' — need specific questions."],
          },
        },
      ],
    },
  ],
};
