import type { Lesson } from "../../../types.ts";
import { levels } from "./levels.ts";

export const lesson143: Lesson = {
  id: "ela12-u3-lesson-4-3",
  code: "4-3",
  title: "Synthesis and Research Writing",
  goal: "I CAN synthesize multiple sources into a coherent argument and conduct research that integrates evidence fairly.",
  standards: ["W.11-12.1", "W.11-12.7", "W.11-12.9", "RI.11-12.9"],
  vocabulary: [
    { term: "Synthesis", definition: "Combining multiple sources to create a new, coherent argument." },
    { term: "Source integration", definition: "Weaving quotations and paraphrases into your own argument with proper attribution." },
    { term: "Credible source", definition: "A source with expertise, evidence, and accountability (peer-reviewed, official, reputable)." },
    { term: "Bias", definition: "A source's tendency to favor one perspective; all sources have some." },
    { term: "Paraphrase", definition: "Restating a source's ideas in your own words with attribution." },
    { term: "Thesis", definition: "The central argument of a research paper or essay." },
    { term: "Annotated bibliography", definition: "A list of sources with summaries and evaluations of each." },
  ],
  concepts: [
    {
      id: "ela12-u3-synthesis",
      title: "Synthesis: combining sources",
      skill: "Integrate multiple sources into a coherent argument without losing your own voice.",
      lesson: {
        sections: [
          {
            heading: "Synthesis vs summary",
            body: "Summary reports what sources say; synthesis combines them to say something new. A synthesis asks: what do these sources have in common? Where do they disagree? What can I conclude that none of them states alone? The writer's job is to create the connections, not just list the sources.",
          },
          {
            heading: "Integrating sources",
            body: "Weave sources into your argument: introduce the source ('According to X...'), present the evidence, then explain how it supports your claim. Don't let sources speak for themselves — your analysis connects them.",
          },
          {
            heading: "Handling disagreement",
            body: "When sources conflict, don't pick one arbitrarily. Analyze why they disagree — different methods, different assumptions, different evidence. The disagreement itself may be the finding.",
          },
        ],
        keyFormulas: [
          { name: "Synthesis", statement: "Combining sources to produce a new argument, not just a summary." },
          { name: "Integration", statement: "Weave sources into your voice with analysis, not quotation dumps." },
        ],
        workedExample: {
          problem: "How do you synthesize three articles about school uniforms?",
          solution: "Identify the common claim (uniforms affect behavior), the disagreement (how much), and your own position. Weave each source's evidence into your argument, noting where they converge and diverge.",
        },
      },
      questions: [
        {
          id: "ela12-u3-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between summary and synthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same thing." },
              { id: "b", text: "Summary reports sources; synthesis combines them into a new argument." },
              { id: "c", text: "Synthesis is always longer." },
              { id: "d", text: "Summary is only for fiction." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Synthesis", statement: "Combining sources to create new meaning." }],
            steps: [{ reasoning: "Summary reports; synthesis creates connections and new conclusions.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Synthesis creates new argument.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "ela12-u3-synthesis-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to integrate a source into your own argument without 'dropping' the quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source integration", statement: "Introduce, present, and analyze — never just quote." },
              { kind: "technique", name: "Signal phrases", statement: "Verbs like 'argues,' 'claims,' 'demonstrates' frame the source's role." },
            ],
            steps: [
              { reasoning: "Introduce the source with attribution and a signal verb ('Smith argues...').", marks: 1, markCode: "AO2" },
              { reasoning: "Present the evidence — quote or paraphrase with proper citation.", marks: 1, markCode: "AO2" },
              { reasoning: "Analyze: explain how the evidence supports YOUR claim, not just what the source says.", marks: 1, markCode: "AO3" },
              { reasoning: "Connect back to your argument — the source serves your thesis, not the other way around.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Introduce, present, analyze, connect — the source must serve your argument.",
            commonErrors: ["Quoting without analysis or letting sources dominate."],
          },
        },
        {
          id: "ela12-u3-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Describe how to evaluate source credibility for a research paper. What makes a source credible, and what red flags indicate bias or unreliability?",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Source evaluation", statement: "Assess expertise, evidence, accountability, and bias." },
              { kind: "skill", name: "Critical research", statement: "All sources have bias; the skill is identifying and weighing it." },
            ],
            steps: [
              { reasoning: "Expertise: does the author have relevant credentials or experience?", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: does the source cite data, studies, or primary sources?", marks: 1, markCode: "AO2" },
              { reasoning: "Accountability: is the source published by a reputable outlet, peer-reviewed, or official?", marks: 1, markCode: "AO3" },
              { reasoning: "Bias: does the source have an obvious agenda? All sources have some bias — the question is whether it's acknowledged and doesn't distort evidence.", marks: 1, markCode: "AO3" },
              { reasoning: "Red flags: no author, no date, no sources, sensational claims, 'everyone knows' appeals.", marks: 1, markCode: "AO4" },
              { reasoning: "Concludes credibility is a spectrum, not binary — weigh sources against each other.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Credibility requires expertise, evidence, and accountability; bias is universal but must be identified and weighed.",
            commonErrors: ["Treating credibility as binary or ignoring bias."],
          },
        },
      ],
    },
    {
      id: "ela12-u3-research",
      title: "Research process and documentation",
      skill: "Plan, conduct, and document research for academic writing.",
      lesson: {
        sections: [
          {
            heading: "From question to thesis",
            body: "Research starts with a question, not a topic: 'How does social media affect adolescent mental health?' not 'social media.' The question guides what you search for, what you exclude, and what your thesis will claim.",
          },
          {
            heading: "The research process",
            body: "1. **Formulate question**: specific, arguable, researchable\n2. **Search strategically**: use keywords, follow citations, evaluate sources\n3. **Take notes**: record quotes, paraphrases, and your own analysis separately\n4. **Organize**: group sources by theme, not by source\n5. **Write**: integrate sources into your argument\n6. **Document**: cite everything, build bibliography",
          },
          {
            heading: "Documentation",
            body: "Every source needs: author, title, publication, date, and URL/DOI. Plagiarism is using others' words or ideas without attribution — it doesn't matter if it's intentional. When in doubt, cite.",
          },
        ],
        keyFormulas: [
          { name: "Research question", statement: "Specific, arguable, researchable — not just a topic." },
          { name: "Citation", statement: "Every borrowed word or idea needs attribution." },
        ],
        workedExample: {
          problem: "How do you turn 'social media' into a research question?",
          solution: "Add specificity and arguability: 'Does passive social media use increase anxiety in adolescents more than active use?' — now it's researchable and produces a thesis.",
        },
      },
      questions: [
        {
          id: "ela12-u3-research-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a good research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's broad and general." },
              { id: "b", text: "It's specific, arguable, and researchable." },
              { id: "c", text: "It has a yes/no answer." },
              { id: "d", text: "It's already answered." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Research question", statement: "Must be specific, arguable, and researchable." }],
            steps: [{ reasoning: "A good question guides research and produces a thesis; it can't be answered with a simple yes/no or already settled.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Specific, arguable, researchable.",
            commonErrors: ["Choosing a topic instead of a question."],
          },
        },
        {
          id: "ela12-u3-research-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between plagiarism and poor citation. Why does intent matter — or not?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic integrity", statement: "Plagiarism is using others' work without attribution." },
              { kind: "skill", name: "Intent vs act", statement: "The violation is the act, not the intention." },
            ],
            steps: [
              { reasoning: "Plagiarism: using words/ideas without attribution — presenting others' work as your own.", marks: 1, markCode: "AO2" },
              { reasoning: "Poor citation: attempting attribution but doing it wrong (wrong format, missing page).", marks: 1, markCode: "AO2" },
              { reasoning: "Intent matters for punishment but not for the violation — accidental plagiarism is still plagiarism.", marks: 1, markCode: "AO3" },
              { reasoning: "The rule is simple: if it's not your original idea or wording, cite it.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Plagiarism is the act of using others' work without attribution; intent affects severity, not guilt.",
            commonErrors: ["Thinking 'I forgot to cite' makes it acceptable."],
          },
        },
        {
          id: "ela12-u3-research-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Outline a research plan for the question: 'Does standardized testing improve student learning?' Include search strategy, source evaluation, and how you'd handle conflicting evidence.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Research planning", statement: "A plan connects question to method to evidence." },
              { kind: "skill", name: "Handling conflict", statement: "Conflicting sources require analysis, not selection." },
            ],
            steps: [
              { reasoning: "Search strategy: keywords ('standardized testing,' 'student achievement,' 'assessment validity'), follow citations, use academic databases.", marks: 1, markCode: "AO2" },
              { reasoning: "Source evaluation: prioritize peer-reviewed studies, official reports, meta-analyses; check author credentials and funding sources.", marks: 1, markCode: "AO2" },
              { reasoning: "Note-taking: separate quotes, paraphrases, and your analysis; record source details immediately.", marks: 1, markCode: "AO3" },
              { reasoning: "Handling conflict: if studies disagree, analyze methodology — sample size, controls, definitions — rather than picking sides.", marks: 1, markCode: "AO3" },
              { reasoning: "Thesis development: the evidence will likely show mixed results — your thesis should reflect nuance ('testing has limited effect on learning but significant effect on curriculum').", marks: 1, markCode: "AO4" },
              { reasoning: "Documentation: cite all sources, build bibliography as you go, not at the end.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "A research plan connects question to strategy to evidence; conflicting sources require methodological analysis, not selection.",
            commonErrors: ["Planning to 'find sources that agree' rather than evaluating all evidence."],
          },
        },
      ],
    },
  ],
};
