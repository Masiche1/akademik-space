import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "theatre-u6-lesson-6-1",
  code: "6-1",
  title: "Writing Critical Reviews",
  goal: "I CAN write informed critical reviews of theatrical performances that describe, analyse and evaluate.",
  standards: [
    "Critical Evaluation",
    "Written Response",
  ],
  vocabulary: [
    { term: "Critical review", definition: "A written evaluation of a theatrical performance analysing its elements and effect." },
    { term: "Description", definition: "Stating what was objectively present in the performance." },
    { term: "Analysis", definition: "Examining how elements produce effects and meaning." },
    { term: "Evaluation", definition: "Judging the performance's success against appropriate criteria." },
    { term: "Context", definition: "The circumstances — historical, cultural, production — surrounding the performance." },
    { term: "Judgement", definition: "A reasoned conclusion about the performance's achievement." },
  ],
  concepts: [
    {
      id: "theatre-u6-review-writing",
      title: "Writing critical reviews",
      skill: "Structure critical reviews that describe, analyse and evaluate theatrical performances.",
      lesson: {
        sections: [
          {
            heading: "Review structure",
            body: "A strong review moves through stages: **description** (what happened — plot, performances, design), **analysis** (how elements worked — acting, directing, design), **evaluation** (was it successful?), and **context** (how does it relate to theatre tradition or current issues). Each stage builds on the last.",
          },
          {
            heading: "Using evidence",
            body: "Cite specific moments: 'the actor's hesitation before the confession', 'the lighting shift at the climax', 'the awkward transition between scenes'. Vague praise ('amazing', 'moving') fails because it cites no evidence. Precise description — 'the director's choice to have the protagonist face the audience during the soliloquy' — makes review credible.",
          },
          {
            heading: "Evaluation criteria",
            body: "Evaluate against appropriate criteria: acting quality, directorial vision, design cohesion, script interpretation, emotional impact. A revue is evaluated differently from a tragedy — know the conventions before judging. The best reviews acknowledge what the production does well within its own terms.",
          },
        ],
        keyFormulas: [
          { name: "Review structure", statement: "Description → analysis → evaluation → context" },
          { name: "Evidence rule", statement: "Every claim cites a specific moment or choice" },
        ],
        workedExample: {
          problem: "A student writes: 'The play was really good.' Improve it using review structure.",
          solution: "'The production of Hamlet featured a striking modern-dress concept with surveillance cameras replacing traditional court intrigue. The lead actor delivered the soliloquies with rare vulnerability, though the supporting cast sometimes struggled with the verse. The minimalist set effectively emphasised isolation, but the pacing lagged in the second act. Overall, a bold interpretation that mostly succeeded.'",
        },
      },
      questions: [
        {
          id: "theatre-u6-review-writing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a critical review, 'description' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparing to other productions" },
              { id: "b", text: "Writing about the playwright" },
              { id: "c", text: "Judging the performance's quality" },
              { id: "d", text: "Stating what was objectively present in the performance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Description", statement: "Stating objective facts about what was present in the performance." },
            ],
            steps: [
              { reasoning: "Description states objective facts — plot, performances, design.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Stating what was objectively present in the performance",
            commonErrors: [
              "Confusing description with analysis or evaluation.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the typical structure of a critical review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Review structure", statement: "Description, analysis, evaluation and context." },
            ],
            steps: [
              { reasoning: "Description: state plot, performances, design objectively.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: examine how elements produced effects.", marks: 1, markCode: "M" },
              { reasoning: "Evaluation and context: judge success and situate the production.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description → analysis → evaluation → context.",
            commonErrors: [
              "Writing only description or only opinion.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why vague evaluative language weakens a critical review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence-based writing", statement: "Claims need specific evidence; vague praise persuades no one." },
            ],
            steps: [
              { reasoning: "Words like 'amazing' or 'moving' state a reaction without explaining why.", marks: 1, markCode: "M" },
              { reasoning: "Without evidence, the reader cannot verify or learn from the review.", marks: 1, markCode: "M" },
              { reasoning: "Specific details — 'the actor's hesitation', 'the lighting shift' — make claims checkable.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: evidence transforms opinion into analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vague language lacks evidence; specific detail makes review credible.",
            commonErrors: [
              "Using evaluative adjectives as substitutes for analysis.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's critical review.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating review", statement: "Assess description, analysis, evidence and evaluation quality." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. specific details, identifies elements, attempts evaluation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. vague language, no evidence, description only — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with review effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding specific evidence, element analysis, genre-appropriate evaluation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate review by description accuracy, analytical depth and evidence use.",
            commonErrors: [
              "Judging review by length rather than quality.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a critical review, the stage that judges whether a performance was successful is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analysis" },
              { id: "b", text: "Context" },
              { id: "c", text: "Evaluation" },
              { id: "d", text: "Description" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaluation", statement: "Judging the performance's success against appropriate criteria." },
            ],
            steps: [
              { reasoning: "Evaluation is the stage that judges whether the performance succeeded.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Evaluation",
            commonErrors: [
              "Confusing evaluation with description or analysis.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Context' in a critical review refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The circumstances surrounding the performance, such as its production history or cultural setting" },
              { id: "b", text: "The colour of the costumes" },
              { id: "c", text: "The ticket price of the performance" },
              { id: "d", text: "The actors' ages" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Context", statement: "The circumstances — historical, cultural, production — surrounding the performance." },
            ],
            steps: [
              { reasoning: "Context situates the performance within its circumstances and tradition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The circumstances surrounding the performance",
            commonErrors: [
              "Reducing context to surface details like costume colour.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A review states that 'the lighting was effective at the climax'. What makes this claim credible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It names the lighting designer" },
              { id: "b", text: "It uses an evaluative adjective" },
              { id: "c", text: "It cites a specific moment in the performance" },
              { id: "d", text: "It is written in the past tense" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence rule", statement: "Every claim cites a specific moment or choice." },
            ],
            steps: [
              { reasoning: "Credibility comes from citing a specific moment, not from evaluative adjectives alone.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It cites a specific moment in the performance",
            commonErrors: [
              "Believing evaluative adjectives alone make a claim credible.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence best combines description and analysis in a review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The play was really good.'" },
              { id: "b", text: "'The actors tried very hard.'" },
              { id: "c", text: "'I enjoyed the costumes.'" },
              { id: "d", text: "'The minimalist set focused attention on the actors' stillness.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Description plus analysis", statement: "Strong review sentences state what was present and explain its effect." },
            ],
            steps: [
              { reasoning: "Choice (b) describes the set and analyses its effect on attention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 'The minimalist set focused attention on the actors' stillness.'",
            commonErrors: [
              "Choosing evaluative or purely personal statements as analysis.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A reviewer praises a farce for its 'tragic depth'. What is the main problem with this review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It judges the work by criteria inappropriate to its genre" },
              { id: "b", text: "It cites too much evidence" },
              { id: "c", text: "It describes the plot in detail" },
              { id: "d", text: "It lacks a context section" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genre-appropriate criteria", statement: "A revue is evaluated differently from a tragedy; know the conventions before judging." },
            ],
            steps: [
              { reasoning: "A farce should be judged on comic timing and clarity, not tragic depth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It judges the work by criteria inappropriate to its genre",
            commonErrors: [
              "Applying one universal standard of 'good theatre' to all genres.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should a reviewer understand the conventions of a genre before evaluating a performance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To judge the work against appropriate criteria for that form" },
              { id: "b", text: "To write a longer review" },
              { id: "c", text: "To avoid naming the genre" },
              { id: "d", text: "To imitate the production's style" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation criteria", statement: "Different genres succeed by different criteria; appropriate criteria produce fair judgements." },
            ],
            steps: [
              { reasoning: "Genre conventions define what counts as success for that form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To judge the work against appropriate criteria for that form",
            commonErrors: [
              "Evaluating every performance by the same personal preferences.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the four stages of a critical review and describe what each stage does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Review structure", statement: "Description, analysis, evaluation and context." },
            ],
            steps: [
              { reasoning: "Description states what was objectively present — plot, performances, design.", marks: 1, markCode: "M" },
              { reasoning: "Analysis examines how elements produced effects and meaning.", marks: 1, markCode: "M" },
              { reasoning: "Evaluation judges success and context situates the production; both complete the review.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description, analysis, evaluation and context.",
            commonErrors: [
              "Omitting evaluation or context, leaving only description.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student submits a 'review' that only summarises the plot. Explain two ways the student could improve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Review improvement", statement: "A review must analyse elements and reach a judgement, not retell the plot." },
            ],
            steps: [
              { reasoning: "A plot summary describes what happened but not how the production worked.", marks: 1, markCode: "M" },
              { reasoning: "It also lacks evaluation — a reasoned judgement of success.", marks: 1, markCode: "M" },
              { reasoning: "Adding analysis of acting, directing and design explains how effects were achieved.", marks: 1, markCode: "R" },
              { reasoning: "Adding a judgement against genre-appropriate criteria completes the review.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add element analysis and a reasoned, genre-appropriate evaluation.",
            commonErrors: [
              "Adding more plot detail instead of analysis.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a reviewer should describe a performance objectively before evaluating it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Description grounds judgement", statement: "Evaluation is credible only when built on accurate description." },
            ],
            steps: [
              { reasoning: "Objective description establishes what actually happened in the performance.", marks: 1, markCode: "M" },
              { reasoning: "Evaluation without description becomes unsupported personal opinion.", marks: 1, markCode: "M" },
              { reasoning: "Specific detail gives the reader verifiable evidence for the judgement.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: description first makes the later judgement defensible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description provides the factual basis that makes evaluation credible.",
            commonErrors: [
              "Jumping straight to praise or criticism without evidence.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why judging a farce by the criteria used for a tragedy produces an unfair review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genre conventions", statement: "Each genre succeeds by different criteria; fair judgement requires the right standard." },
            ],
            steps: [
              { reasoning: "A farce succeeds through comic timing, clarity and physical comedy.", marks: 1, markCode: "M" },
              { reasoning: "A tragedy succeeds through emotional depth, thematic weight and serious stakes.", marks: 1, markCode: "M" },
              { reasoning: "Applying tragic criteria to a farce measures it against aims it never had.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: genre-appropriate criteria are necessary for a fair evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Different genres have different success criteria; mismatched criteria produce unfair judgements.",
            commonErrors: [
              "Assuming one standard of 'good theatre' applies to every genre.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Improve this review sentence: 'The actors were good and the set looked nice.'",
          parts: [
            { label: "a", prompt: "Identify two weaknesses in the sentence.", marks: 2 },
            { label: "b", prompt: "Rewrite the sentence with specific evidence.", marks: 2 },
            { label: "c", prompt: "Explain why your rewrite is a stronger review.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence-based writing", statement: "Specific detail replaces vague praise and makes review credible." },
            ],
            steps: [
              { part: "a", reasoning: "'Good' and 'nice' are vague evaluative adjectives with no evidence.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two weaknesses identified: no specific moments and no element analysis.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A rewrite names specific moments, e.g. the actor's hesitation or the set's colour palette.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A concrete rewritten sentence is provided.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Specific evidence lets readers verify the claim and understand the effect.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The rewrite demonstrates analysis rather than opinion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Replace vague praise with cited moments and element analysis.",
            commonErrors: [
              "Adding more adjectives instead of evidence.",
            ],
          },
        },
        {
          id: "theatre-u6-review-writing-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate this student review of a school production: 'The play was fun. Everyone worked hard and the audience clapped a lot. The costumes were colourful.'",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating review", statement: "Assess description, analysis, evidence and evaluation quality." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. it notes audience response and mentions costumes.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. only vague praise, no specific evidence, no element analysis — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on the review.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests citing specific moments and analysing acting, directing and design.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Two concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The review is friendly but lacks evidence, analysis and evaluation.",
            commonErrors: [
              "Judging the review by its friendly tone rather than its analytical content.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u6-analytical-review",
      title: "Analytical and evaluative review",
      skill: "Write reviews that analyse performance elements and reach reasoned judgements about theatrical achievement.",
      lesson: {
        sections: [
          {
            heading: "Analysing performance elements",
            body: "Review specific elements: **acting** (was it believable, skilled, committed?), **directing** (was the vision clear and executed?), **design** (did set, costume, lighting serve the play?), **pace** (did the production move effectively?). Each element can succeed or fail independently — a great performance in a weak production, or vice versa.",
          },
          {
            heading: "Reaching judgements",
            body: "Evaluation requires criteria: was the production successful on its own terms? Did it achieve its apparent aims? Was it technically accomplished? Emotionally affecting? Original? A good judgement is specific — 'the pacing dragged in the second act despite strong performances' — rather than generic ('it was good').",
          },
          {
            heading: "Contextualising the review",
            body: "The best reviews situate the production: how does it compare to other productions of the same play? How does it relate to current theatrical trends? What does it reveal about the play's enduring relevance? Context elevates review from consumer report to critical commentary.",
          },
        ],
        keyFormulas: [
          { name: "Review elements", statement: "Acting + directing + design + pace = performance analysis" },
          { name: "Judgement criteria", statement: "Success on own terms + technical accomplishment + emotional impact + originality" },
        ],
        workedExample: {
          problem: "A student reviews a play as 'good acting but bad directing'. How should they strengthen this?",
          solution: "Specify: 'The lead actor's physical commitment was excellent, but the director's unclear staging left supporting actors uncertain. The second act's pacing suffered from inconsistent entrances. The concept was intriguing but poorly executed — promising elements undermined by weak direction.'",
        },
      },
      questions: [
        {
          id: "theatre-u6-analytical-review-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When reviewing a performance, 'acting quality' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The actors' fame" },
              { id: "b", text: "The costume quality" },
              { id: "c", text: "The believability, skill and commitment of the performances" },
              { id: "d", text: "The ticket price" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Acting quality", statement: "The believability, skill and commitment of performances." },
            ],
            steps: [
              { reasoning: "Acting quality is the believability, skill and commitment of performances.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The believability, skill and commitment of the performances",
            commonErrors: [
              "Confusing acting quality with fame or costume.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three elements a critical review should analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Review elements", statement: "Acting, directing, design and pace." },
            ],
            steps: [
              { reasoning: "Acting — believability, skill, commitment.", marks: 1, markCode: "M" },
              { reasoning: "Directing — clarity of vision and execution.", marks: 1, markCode: "M" },
              { reasoning: "Design — set, costume, lighting serving the play.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acting, directing and design are key review elements.",
            commonErrors: [
              "Reviewing only the plot without analysing production elements.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why specific judgements are more convincing than general praise or criticism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Specific judgement", statement: "Detailed evaluation demonstrates real engagement and helps readers." },
            ],
            steps: [
              { reasoning: "General praise ('it was good') tells readers nothing.", marks: 1, markCode: "M" },
              { reasoning: "Specific judgement ('the pacing lagged despite strong acting') is informative.", marks: 1, markCode: "M" },
              { reasoning: "Specificity demonstrates the reviewer actually engaged critically.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: good reviews teach readers how to see the work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific judgements are informative; general praise is empty.",
            commonErrors: [
              "Using vague evaluative language instead of specific analysis.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's critical review.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating review", statement: "Assess element analysis, evidence use and judgement quality." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. analyses elements, cites specific moments, reaches judgement.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. vague language, no evidence, description only — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with review effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding specific evidence, element analysis, contextual comparison.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate review by element analysis, evidence use and judgement quality.",
            commonErrors: [
              "Judging review by length rather than analytical depth.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which element of a performance assesses whether it moved effectively from beginning to end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pace" },
              { id: "b", text: "Acting quality" },
              { id: "c", text: "Ticket sales" },
              { id: "d", text: "Costume design" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pace", statement: "Whether the production moved effectively through its material." },
            ],
            steps: [
              { reasoning: "Pace assesses whether the production moved effectively.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Pace",
            commonErrors: [
              "Confusing pace with acting quality or design.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Directorial vision' in a review refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The audience's reaction" },
              { id: "b", text: "The theatre's marketing" },
              { id: "c", text: "The director's interpretive concept and how clearly it was executed" },
              { id: "d", text: "The director's fame" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Directorial vision", statement: "The director's interpretive concept and its execution." },
            ],
            steps: [
              { reasoning: "Directorial vision is the concept the director pursued and how well it was realised.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The director's interpretive concept and how clearly it was executed",
            commonErrors: [
              "Reducing directing to the director's reputation.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A production features brilliant acting but incoherent staging. How should a reviewer respond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Judge only the staging" },
              { id: "b", text: "Praise every element equally" },
              { id: "c", text: "Ignore the acting entirely" },
              { id: "d", text: "Evaluate each element independently" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Independent elements", statement: "Each element can succeed or fail independently within a production." },
            ],
            steps: [
              { reasoning: "Strong acting and weak staging are separate judgements that should both be made.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Evaluate each element independently",
            commonErrors: [
              "Letting one strong element erase weaknesses elsewhere.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Judging a production 'on its own terms' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparing it to the reviewer's favourite play" },
              { id: "b", text: "Evaluating it against its apparent aims and conventions" },
              { id: "c", text: "Assuming it is perfect" },
              { id: "d", text: "Ignoring technical quality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Success on own terms", statement: "Did the production achieve its apparent aims within its conventions?" },
            ],
            steps: [
              { reasoning: "'On its own terms' means judging against the production's aims and conventions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Evaluating it against its apparent aims and conventions",
            commonErrors: [
              "Judging a production by criteria it never claimed to meet.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A reviewer compares a new production of a play to famous earlier productions. This practice is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Description" },
              { id: "b", text: "Plot summary" },
              { id: "c", text: "Casting" },
              { id: "d", text: "Contextualising" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contextualising", statement: "Situating a production among other productions and theatrical trends." },
            ],
            steps: [
              { reasoning: "Comparing productions situates the work in theatrical context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Contextualising",
            commonErrors: [
              "Mistaking comparison for description of the plot.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is the observation 'strong performances inside a weak production' valuable in a review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It shows that elements can succeed or fail independently" },
              { id: "b", text: "It avoids making any judgement" },
              { id: "c", text: "It flatters the actors" },
              { id: "d", text: "It shortens the review" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Independent elements", statement: "A great performance in a weak production — or vice versa — is analytically revealing." },
            ],
            steps: [
              { reasoning: "The observation distinguishes acting quality from production quality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It shows that elements can succeed or fail independently",
            commonErrors: [
              "Treating the production as a single undifferentiated whole.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List four performance elements a critical review should analyse and state what each assesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Review elements", statement: "Acting, directing, design and pace." },
            ],
            steps: [
              { reasoning: "Acting assesses believability, skill and commitment.", marks: 1, markCode: "M" },
              { reasoning: "Directing assesses clarity of vision and execution.", marks: 1, markCode: "M" },
              { reasoning: "Design and pace assess whether elements served the play and moved effectively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acting, directing, design and pace.",
            commonErrors: [
              "Listing elements without stating what each assesses.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a reviewer should assess performance elements independently rather than giving one overall verdict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Independent elements", statement: "Each element can succeed or fail independently; independent assessment is more accurate." },
            ],
            steps: [
              { reasoning: "A single verdict hides which elements succeeded and which failed.", marks: 1, markCode: "M" },
              { reasoning: "Independent assessment reveals mixed results, e.g. great acting in weak staging.", marks: 1, markCode: "M" },
              { reasoning: "Precise element judgements give readers actionable information.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: element-by-element analysis produces a fairer, more useful review.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Independent assessment reveals strengths and weaknesses that one verdict conceals.",
            commonErrors: [
              "Giving a single overall verdict that masks element-level detail.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a reviewer reaches a reasoned judgement about a production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reasoned judgement", statement: "A judgement is supported by evidence, criteria and analysis." },
            ],
            steps: [
              { reasoning: "Choose appropriate criteria for the genre and the production's apparent aims.", marks: 1, markCode: "M" },
              { reasoning: "Gather evidence from specific moments across the elements.", marks: 1, markCode: "M" },
              { reasoning: "Weigh the evidence against the criteria to reach a conclusion.", marks: 1, markCode: "R" },
              { reasoning: "State the judgement specifically, e.g. 'pacing lagged despite strong performances'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Criteria + evidence + weighing = a specific, reasoned judgement.",
            commonErrors: [
              "Stating a preference without criteria or evidence.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how situating a production in its theatrical context strengthens a review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextualising", statement: "Comparison and trend analysis elevate review from consumer report to critical commentary." },
            ],
            steps: [
              { reasoning: "Comparing to other productions of the same play shows what is distinctive.", marks: 1, markCode: "M" },
              { reasoning: "Relating to current theatrical trends shows the production's place in the art form.", marks: 1, markCode: "M" },
              { reasoning: "Context reveals what the production says about the play's enduring relevance.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: context transforms description into critical commentary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contextual comparison elevates a review into critical commentary.",
            commonErrors: [
              "Reviewing the production in isolation from theatre tradition.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "A reviewer describes a production: 'The acting was committed, the minimalist set was elegant, but the transitions between scenes dragged.' Analyse this review.",
          parts: [
            { label: "a", prompt: "Assess the review's treatment of acting and design.", marks: 2 },
            { label: "b", prompt: "Assess the review's treatment of pace and execution.", marks: 2 },
            { label: "c", prompt: "Suggest an overall evaluative judgement the reviewer could add.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysing review", statement: "Assess whether element analysis is specific and balanced." },
            ],
            steps: [
              { part: "a", reasoning: "Acting ('committed') and design ('elegant') are assessed but with limited specific evidence.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both elements are identified and judged positively.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pace is identified as a weakness ('dragged') with a specific cause (transitions).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The weakness is located precisely within the production.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A judgement weighing strengths against the pacing weakness is suggested.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The suggested judgement is specific rather than generic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The review identifies elements well but needs specific evidence and an overall judgement.",
            commonErrors: [
              "Treating descriptive labels as sufficient analysis.",
            ],
          },
        },
        {
          id: "theatre-u6-analytical-review-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student writes: 'The show was good. I liked it.' Improve this review.",
          parts: [
            { label: "a", prompt: "Identify two weaknesses in the review.", marks: 2 },
            { label: "b", prompt: "Draft two improved sentences with evidence.", marks: 2 },
            { label: "c", prompt: "Explain which review criteria your sentences apply.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence-based writing", statement: "Specific detail and element analysis replace vague preference." },
            ],
            steps: [
              { part: "a", reasoning: "Weaknesses: no specific evidence and no element analysis.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two weaknesses correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Improved sentences cite specific moments or design choices.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two concrete improved sentences are drafted.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Explanation links sentences to acting, directing, design or pace criteria.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Criteria are named explicitly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Replace 'I liked it' with cited evidence analysed against review criteria.",
            commonErrors: [
              "Adding adjectives instead of evidence and analysis.",
            ],
          },
        },
      ],
    },
  ],
};
