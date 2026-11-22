import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "va-u6-lesson-6-2",
  code: "6-2",
  title: "Structuring the Comparative Essay",
  goal: "I CAN structure a comparative critical essay with introduction, body and conclusion that builds a coherent argument.",
  standards: [
    "Critical Essay",
    "Written Structure",
  ],
  vocabulary: [
    { term: "Introduction", definition: "The opening that establishes context, names the artworks, states the thesis and previews structure." },
    { term: "Thesis", definition: "The central argument or claim the essay will defend." },
    { term: "Body paragraph", definition: "A unit developing one aspect of the argument with evidence." },
    { term: "Comparative structure", definition: "Organising the essay so both artworks are treated under each criterion." },
    { term: "Conclusion", definition: "The closing that synthesises findings and restates the thesis in light of evidence." },
    { term: "Transition", definition: "Words or phrases that connect ideas and paragraphs smoothly." },
  ],
  concepts: [
    {
      id: "va-u6-essay-structure",
      title: "Essay architecture",
      skill: "Structure a comparative essay with clear introduction, body paragraphs and conclusion that build a coherent argument.",
      lesson: {
        sections: [
          {
            heading: "Introduction",
            body: "The introduction does four jobs: names the two artworks and artists, establishes the theme, states the thesis (your argument), and previews the structure. Keep it focused — no evidence yet, just the roadmap. A strong thesis is specific: 'Although both artists address mortality, Artist A uses symbolic vanitas imagery while Artist B uses photographic realism to achieve opposing emotional effects.'",
          },
          {
            heading: "Body paragraphs",
            body: "Each body paragraph develops one aspect of the argument: one criterion or theme. Use **comparative structure** — treat both works under each point ('Where Artist A does X, Artist B does Y') rather than discussing all of A then all of B. This keeps comparison explicit and prevents the essay becoming two separate descriptions.",
          },
          {
            heading: "Conclusion",
            body: "The conclusion synthesises: restate the thesis in light of evidence, summarise key similarities and differences, and end with significance — why the comparison matters. Don't introduce new evidence. A strong conclusion answers 'so what?' — what does this comparison reveal about art, the artists, or the theme?",
          },
        ],
        keyFormulas: [
          { name: "Essay structure", statement: "Introduction (thesis) → body (comparative points) → conclusion (synthesis)" },
          { name: "Comparative paragraph", statement: "Point → Artist A evidence → Artist B evidence → significance of difference" },
        ],
        workedExample: {
          problem: "An essay describes all of Artist A's works in paragraphs 1–3, then all of Artist B's in paragraphs 4–6. What's the structural problem?",
          solution: "This is sequential, not comparative — the reader must hold both artists in mind across six paragraphs. Restructure so each paragraph treats both artists under one criterion: 'Both artists use colour differently — A uses warm symbolic palette while B uses cool naturalistic tones to achieve X vs Y effect.'",
        },
      },
      questions: [
        {
          id: "va-u6-essay-structure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A thesis statement in a critical essay should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State the central argument the essay will defend" },
              { id: "b", text: "Ask a rhetorical question" },
              { id: "c", text: "List all the artworks discussed" },
              { id: "d", text: "Summarise the artist's biography" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "The central argument or claim the essay will defend." },
            ],
            steps: [
              { reasoning: "The thesis states the essay's central argument or claim.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** State the central argument the essay will defend",
            commonErrors: [
              "Confusing thesis with topic or summary.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the four jobs of an essay introduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Introduction function", statement: "Context, artworks, theme, thesis and structure preview." },
            ],
            steps: [
              { reasoning: "Name the two artworks and artists being compared.", marks: 1, markCode: "M" },
              { reasoning: "Establish the shared theme and context.", marks: 1, markCode: "M" },
              { reasoning: "State the thesis and preview the essay's structure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Name works, establish theme, state thesis, preview structure.",
            commonErrors: [
              "Writing introductions that summarise evidence or lack a thesis.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why comparative structure is more effective than sequential structure in a comparative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative structure", statement: "Treating both works under each criterion keeps comparison explicit and analysis focused." },
            ],
            steps: [
              { reasoning: "Sequential structure (all of A, then all of B) forces the reader to compare mentally across paragraphs.", marks: 1, markCode: "M" },
              { reasoning: "Comparative structure (both works under each criterion) makes differences and similarities explicit.", marks: 1, markCode: "M" },
              { reasoning: "Each paragraph develops one analytical point rather than separate descriptions.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: comparative structure produces clearer, more analytical writing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Comparative structure makes analysis explicit; sequential forces the reader to do the work.",
            commonErrors: [
              "Writing two separate descriptions instead of integrated comparison.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a described essay structure for a critical essay.",
          parts: [
            { label: "a", prompt: "Identify two structural strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating structure", statement: "Assess introduction function, body organisation and conclusion synthesis." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. clear thesis, comparative paragraphs, logical flow.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. sequential not comparative, weak introduction, conclusion introduces new evidence — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with structural effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests reorganising paragraphs, strengthening thesis, synthesising in conclusion.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete structural improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate structure by introduction function, body organisation and conclusion synthesis.",
            commonErrors: [
              "Judging essay quality without reference to structure.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The conclusion of a comparative essay should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduce new evidence not discussed in the body" },
              { id: "b", text: "List all the sources used" },
              { id: "c", text: "Repeat the introduction word for word" },
              { id: "d", text: "Synthesise findings and restate the thesis in light of evidence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conclusion function", statement: "The conclusion synthesises evidence and answers 'so what?'." },
            ],
            steps: [
              { reasoning: "A conclusion synthesises findings and restates the thesis in light of evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Synthesise findings and restate the thesis in light of evidence",
            commonErrors: [
              "Adding new evidence or repeating the introduction in the conclusion.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain what a thesis must do in a comparative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "The central arguable claim the essay defends." },
            ],
            steps: [
              { reasoning: "State the central argument or claim about the two artworks.", marks: 1, markCode: "M" },
              { reasoning: "Be specific and defensible — not a mere topic or summary.", marks: 1, markCode: "M" },
              { reasoning: "Point the essay's direction by naming the comparison to be made.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A thesis makes a specific, arguable claim that guides the whole essay.",
            commonErrors: [
              "Writing a thesis that only announces the topic.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Comparative paragraph structure is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quote sources without commentary" },
              { id: "b", text: "Describe Artist A fully, then Artist B fully" },
              { id: "c", text: "Point, then evidence for A, evidence for B, then significance of the difference" },
              { id: "d", text: "Analyse only the first artwork in each paragraph" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative paragraph", statement: "Point → A evidence → B evidence → significance." },
            ],
            steps: [
              { reasoning: "The strongest paragraphs treat both works under one criterion.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) matches the point-evidence-significance pattern.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Point, then evidence for A, evidence for B, then significance of the difference",
            commonErrors: [
              "Structuring paragraphs as separate descriptions of each artist.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the introduction should not contain evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Introduction role", statement: "The introduction is a roadmap, not the argument itself." },
            ],
            steps: [
              { reasoning: "The introduction's job is to name works, theme, thesis and structure.", marks: 1, markCode: "M" },
              { reasoning: "Evidence belongs in body paragraphs where it can be analysed.", marks: 1, markCode: "M" },
              { reasoning: "Early evidence clutters the argument before it is established.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: keeping evidence out preserves focus and momentum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evidence in the introduction is unanalysed and distracts from the roadmap function.",
            commonErrors: [
              "Writing introductions that read like the first body paragraph.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which conclusion approach best answers 'so what?'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I enjoyed writing this essay.'" },
              { id: "b", text: "'In conclusion, both artists are interesting.'" },
              { id: "c", text: "'This essay compared two artists.'" },
              { id: "d", text: "'The comparison reveals how formal choices shape emotional response to mortality.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Significance", statement: "A strong conclusion states what the comparison reveals." },
            ],
            steps: [
              { reasoning: "Choice (b) states a significance claim about what the comparison reveals.", marks: 1, markCode: "M" },
              { reasoning: "The other options summarise or comment without insight.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'The comparison reveals how formal choices shape emotional response to mortality.'",
            commonErrors: [
              "Ending with summary rather than significance.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q10",
          difficulty: "core",
          totalMarks: 5,
          stem: "A student ends an essay with only a summary of the points made. Explain what is missing and how to fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conclusion depth", statement: "Synthesis and significance distinguish a conclusion from a summary." },
            ],
            steps: [
              { reasoning: "A summary restates points but adds no synthesis or judgement.", marks: 1, markCode: "M" },
              { reasoning: "It misses the 'so what?' — why the comparison matters.", marks: 1, markCode: "M" },
              { reasoning: "The thesis is not revisited in light of the evidence presented.", marks: 1, markCode: "M" },
              { reasoning: "Fix: synthesise key similarities and differences, then state significance.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: end by answering what the comparison reveals about art or the theme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add synthesis and significance; restate the thesis in light of evidence.",
            commonErrors: [
              "Confusing repetition of points with a conclusion.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An essay discusses all of Artist A in its paragraphs, then all of Artist B. This structure is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thematic structure" },
              { id: "b", text: "Integrated structure" },
              { id: "c", text: "Sequential structure" },
              { id: "d", text: "Comparative structure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sequential structure", statement: "All of one work, then all of the other — weaker for comparison." },
            ],
            steps: [
              { reasoning: "Treating each artist in separate blocks is sequential, not comparative.", marks: 1, markCode: "M" },
              { reasoning: "It forces the reader to hold both works in mind across the essay.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "Restructuring under shared criteria would make comparison explicit.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Sequential structure",
            commonErrors: [
              "Calling any organised essay 'comparative' regardless of paragraph design.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate an essay whose conclusion introduces a new artwork that was never discussed in the body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structural coherence", statement: "Every part of the essay must serve the argument established earlier." },
            ],
            steps: [
              { reasoning: "Identify the breach: the conclusion introduces evidence absent from the body.", marks: 1, markCode: "M" },
              { reasoning: "New material cannot be analysed because no groundwork was laid.", marks: 1, markCode: "M" },
              { reasoning: "It weakens coherence and may confuse the reader about the essay's scope.", marks: 1, markCode: "M" },
              { reasoning: "It violates the conclusion's synthesising, not introducing, role.", marks: 1, markCode: "R" },
              { reasoning: "Suggest removing it or, if essential, developing it properly in a body paragraph.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the conclusion should only draw on what the essay has already argued.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conclusions synthesise; they must not introduce unanalysed material.",
            commonErrors: [
              "Treating the conclusion as a place for leftover ideas.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The strongest thesis for a comparative essay is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarises both artists' biographies" },
              { id: "b", text: "Lists the titles of the artworks" },
              { id: "c", text: "Makes a specific, arguable claim about how the works differ" },
              { id: "d", text: "Asks a rhetorical question" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thesis quality", statement: "A thesis is an arguable claim, not a topic announcement." },
            ],
            steps: [
              { reasoning: "A strong thesis makes a specific claim the essay can defend.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is specific, comparative and arguable.", marks: 1, markCode: "M" },
              { reasoning: "Choices (a), (c) and (d) announce topics rather than argue.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Makes a specific, arguable claim about how the works differ",
            commonErrors: [
              "Writing thesis statements that merely name the subject.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate this essay plan: introduction names the works; paragraphs 1–3 describe Artist A's style; paragraphs 4–6 describe Artist B's style; conclusion lists differences.",
          parts: [
            { label: "a", prompt: "Identify the structural problem.", marks: 2 },
            { label: "b", prompt: "Explain its effect on the comparison.", marks: 2 },
            { label: "c", prompt: "Propose a restructured plan.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay planning", statement: "Body paragraphs should each treat both works under one criterion." },
            ],
            steps: [
              { part: "a", reasoning: "Problem: sequential structure — separate blocks per artist.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Problem correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Effect: reader must compare mentally across six paragraphs; analysis becomes description.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect on essay quality explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Restructure: each paragraph treats both works under one criterion.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete restructured plan given.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Plan keeps thesis and conclusion aligned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Restructure from sequential description to criterion-by-criterion comparison.",
            commonErrors: [
              "Confusing an essay plan with an essay structure.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which transition best signals contrast between two paragraphs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'For example'" },
              { id: "b", text: "'In contrast'" },
              { id: "c", text: "'Similarly'" },
              { id: "d", text: "'Indeed'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Transitions", statement: "Transitions signal the logical relationship between ideas." },
            ],
            steps: [
              { reasoning: "'In contrast' explicitly signals opposition between points.", marks: 1, markCode: "M" },
              { reasoning: "The other options signal similarity, exemplification or emphasis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "Choosing the right transition keeps the argument's logic visible.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** 'In contrast'",
            commonErrors: [
              "Using transitions that contradict the relationship being expressed.",
            ],
          },
        },
        {
          id: "va-u6-essay-structure-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Rewrite the weak thesis 'Both artists paint portraits' into a strong comparative thesis and justify the rewrite.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thesis writing", statement: "A thesis must be specific, arguable and comparative." },
            ],
            steps: [
              { reasoning: "Identify weakness: the original only states a shared subject, not an argument.", marks: 1, markCode: "M" },
              { reasoning: "Add the theme and how each artist treats it differently.", marks: 1, markCode: "M" },
              { reasoning: "Name formal means, e.g. scale, gaze, brushwork, composition.", marks: 1, markCode: "M" },
              { reasoning: "Make an arguable claim about effect or significance.", marks: 1, markCode: "M" },
              { reasoning: "Justify that the claim is defensible with visual evidence.", marks: 1, markCode: "R" },
              { reasoning: "Explain how the thesis will guide each body paragraph.", marks: 1, markCode: "R" },
              { reasoning: "Contrast explicitly with the original weak version.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: a strong thesis is the essay's controlling argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Although both artists paint portraits, Artist A's confrontational scale asserts identity while Artist B's intimate framing invites empathy.'",
            commonErrors: [
              "Adding adjectives without adding an arguable claim.",
            ],
          },
        },
      ],
    },
    {
      id: "va-u6-essay-paragraphs",
      title: "Writing analytical paragraphs",
      skill: "Construct body paragraphs that present evidence, analysis and comparison for each criterion.",
      lesson: {
        sections: [
          {
            heading: "Paragraph anatomy",
            body: "A strong analytical paragraph has: **topic sentence** (the criterion or point), **evidence** (specific visual details from both works), **analysis** (how the evidence supports the point), and **significance** (why this difference matters). Each paragraph should advance the thesis, not just describe.",
          },
          {
            heading: "Integrating evidence",
            body: "Weave evidence into analysis rather than listing it: 'Where Artist A uses violent impasto to convey anger, Artist B uses smooth glazing to suggest restraint — the difference reveals opposing attitudes toward the subject.' Evidence is embedded in argument, not dropped as quotation.",
          },
          {
            heading: "Transitions and flow",
            body: "Connect paragraphs with transitions that show logical relationships: 'Similarly', 'In contrast', 'Building on this', 'However'. These guide the reader through the argument. Each paragraph should connect to the thesis — if it doesn't advance the argument, cut it.",
          },
        ],
        keyFormulas: [
          { name: "Paragraph structure", statement: "Topic sentence → evidence → analysis → significance" },
          { name: "Integrated evidence", statement: "Evidence embedded in argument, not listed separately" },
        ],
        workedExample: {
          problem: "A paragraph reads: 'Artist A uses blue. Artist B uses red. Both are colours.' Improve it.",
          solution: "'Artist A's cool blue palette creates distance and melancholy, while Artist B's saturated reds generate urgency and passion — the chromatic opposition mirrors their contrasting emotional responses to the shared theme of loss.'",
        },
      },
      questions: [
        {
          id: "va-u6-essay-paragraphs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A topic sentence in an analytical paragraph should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State the criterion or point the paragraph will develop" },
              { id: "b", text: "Summarise the whole essay" },
              { id: "c", text: "Ask a question" },
              { id: "d", text: "Quote the artist" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Topic sentence", statement: "States the analytical point the paragraph will develop." },
            ],
            steps: [
              { reasoning: "The topic sentence announces the paragraph's analytical point.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** State the criterion or point the paragraph will develop",
            commonErrors: [
              "Starting paragraphs with evidence or quotation rather than the point.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the four components of a strong analytical paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Paragraph anatomy", statement: "Topic sentence, evidence, analysis and significance." },
            ],
            steps: [
              { reasoning: "Topic sentence states the criterion or point.", marks: 1, markCode: "M" },
              { reasoning: "Evidence cites specific visual details from both works.", marks: 1, markCode: "M" },
              { reasoning: "Analysis explains how evidence supports the point and its significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Topic sentence → evidence → analysis → significance.",
            commonErrors: [
              "Writing paragraphs that only describe without analysing.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why evidence should be integrated into analysis rather than listed separately.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated evidence", statement: "Embedded evidence serves argument; listed evidence is just description." },
            ],
            steps: [
              { reasoning: "Listed evidence ('Artist A uses blue. Artist B uses red.') is description, not analysis.", marks: 1, markCode: "M" },
              { reasoning: "Integrated evidence ('A's blue creates distance while B's red generates urgency') serves the argument.", marks: 1, markCode: "M" },
              { reasoning: "Integration shows the writer has processed the evidence into meaning.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: evidence should be woven into sentences that make claims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Integrated evidence advances argument; listed evidence merely describes.",
            commonErrors: [
              "Dropping quotations or observations without connecting them to the argument.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a described body paragraph for a critical essay.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating paragraphs", statement: "Assess topic sentence, evidence integration and analytical depth." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. clear topic sentence, specific evidence, comparative treatment.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. evidence listed not analysed, no significance stated, weak topic sentence — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with paragraph effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests integrating evidence into claims, adding significance, strengthening topic sentence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate paragraphs by topic sentence, evidence integration and analytical depth.",
            commonErrors: [
              "Judging paragraphs by length rather than analytical quality.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'significance' element of an analytical paragraph explains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The medium used by the artist" },
              { id: "b", text: "Why the analysed difference matters to the argument" },
              { id: "c", text: "The artist's age at the time" },
              { id: "d", text: "The artwork's market price" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Significance", statement: "Significance connects analysis to the essay's argument." },
            ],
            steps: [
              { reasoning: "Significance states why the point matters to the thesis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Why the analysed difference matters to the argument",
            commonErrors: [
              "Stopping at description without stating significance.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the role of a topic sentence in an analytical paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Topic sentence", statement: "It announces and controls the paragraph's analytical point." },
            ],
            steps: [
              { reasoning: "It states the criterion or point the paragraph will develop.", marks: 1, markCode: "M" },
              { reasoning: "It guides the selection of evidence that follows.", marks: 1, markCode: "M" },
              { reasoning: "It links the paragraph back to the essay's thesis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The topic sentence announces the point and links the paragraph to the thesis.",
            commonErrors: [
              "Opening paragraphs with evidence before stating the point.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evidence in a comparative paragraph should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Be specific visual details from BOTH works woven into analysis" },
              { id: "b", text: "Come only from secondary sources" },
              { id: "c", text: "Be listed as separate bullet points" },
              { id: "d", text: "Describe the artists' biographies" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Integrated evidence", statement: "Evidence must cover both works and serve the argument." },
            ],
            steps: [
              { reasoning: "Comparative paragraphs need evidence from both artworks.", marks: 1, markCode: "M" },
              { reasoning: "Specific visual detail woven into claims is analytical; listing is not.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Be specific visual details from BOTH works woven into analysis",
            commonErrors: [
              "Providing evidence for only one artwork per paragraph.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how transitions connect paragraphs in an essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Transitions", statement: "Transitions signal logical relationships between paragraphs." },
            ],
            steps: [
              { reasoning: "Transitions such as 'similarly', 'in contrast' and 'building on this' show relationships.", marks: 1, markCode: "M" },
              { reasoning: "They guide the reader through the developing argument.", marks: 1, markCode: "M" },
              { reasoning: "They prevent paragraphs from reading as disconnected observations.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: well-chosen transitions make the essay's logic visible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transitions signal logical relationships and guide the reader through the argument.",
            commonErrors: [
              "Using transitions mechanically without matching the logic.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A paragraph reading 'Artist A uses blue' lacks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A paragraph break" },
              { id: "b", text: "A citation format" },
              { id: "c", text: "A title" },
              { id: "d", text: "Analysis linking the evidence to the argument" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Description vs analysis", statement: "Observation without interpretation is description, not analysis." },
            ],
            steps: [
              { reasoning: "The sentence states an observation but makes no claim about its effect.", marks: 1, markCode: "M" },
              { reasoning: "Analysis would connect the blue to mood, theme or argument.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Analysis linking the evidence to the argument",
            commonErrors: [
              "Mistaking accurate description for analytical writing.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q10",
          difficulty: "core",
          totalMarks: 5,
          stem: "Rewrite this weak evidence into integrated analytical writing: 'Artist A uses blue. Artist B uses red.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence integration", statement: "Weave observations into claims about effect and meaning." },
            ],
            steps: [
              { reasoning: "Identify the weakness: two isolated observations with no claim.", marks: 1, markCode: "M" },
              { reasoning: "Embed each observation in a sentence making a claim about effect.", marks: 1, markCode: "M" },
              { reasoning: "Contrast the palettes' emotional implications, e.g. distance vs urgency.", marks: 1, markCode: "M" },
              { reasoning: "Connect the contrast to the shared theme or thesis.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the rewrite produces one analytical sentence, not two descriptions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Artist A's cool blues create emotional distance while Artist B's saturated reds generate urgency — the chromatic opposition mirrors their differing responses to the theme.'",
            commonErrors: [
              "Adding adjectives without forming a comparative claim.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A paragraph that does not advance the essay's thesis should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moved to the introduction" },
              { id: "b", text: "Kept to increase the word count" },
              { id: "c", text: "Only shortened slightly" },
              { id: "d", text: "Cut or reworked so it serves the argument" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Paragraph relevance", statement: "Every paragraph must advance the thesis." },
            ],
            steps: [
              { reasoning: "Paragraphs exist to develop the argument, not fill space.", marks: 1, markCode: "M" },
              { reasoning: "Irrelevant paragraphs dilute the essay's focus.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "If it contains useful material, rework it to serve the thesis.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Cut or reworked so it serves the argument",
            commonErrors: [
              "Keeping descriptive paragraphs for length.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why each body paragraph should treat BOTH artworks rather than only one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative paragraphs", statement: "Treating both works per criterion keeps comparison explicit." },
            ],
            steps: [
              { reasoning: "It makes the comparison explicit within each paragraph.", marks: 1, markCode: "M" },
              { reasoning: "It prevents the essay becoming two separate descriptions.", marks: 1, markCode: "M" },
              { reasoning: "Each paragraph develops one analytical point about the difference.", marks: 1, markCode: "M" },
              { reasoning: "The reader does not have to hold both works in mind across distant paragraphs.", marks: 1, markCode: "R" },
              { reasoning: "It strengthens coherence between evidence and thesis.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: dual treatment is the engine of comparative analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Treating both works per paragraph keeps comparison explicit and analysis focused.",
            commonErrors: [
              "Writing paragraphs that analyse one artist at a time.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which is the strongest topic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Both artists use paint.'" },
              { id: "b", text: "'Where Artist A's warm palette intensifies emotion, Artist B's cool tones create emotional distance.'" },
              { id: "c", text: "'Colour is important in art.'" },
              { id: "d", text: "'This paragraph is about colour.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic sentences", statement: "Strong topic sentences state a comparative analytical point." },
            ],
            steps: [
              { reasoning: "Choice (b) states a specific comparative claim about both works.", marks: 1, markCode: "M" },
              { reasoning: "Choices (a), (c) and (d) announce topics or facts without argument.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "A topic sentence should preview the difference the paragraph will analyse.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** 'Where Artist A's warm palette intensifies emotion, Artist B's cool tones create emotional distance.'",
            commonErrors: [
              "Writing topic sentences that only name the subject.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate a paragraph that lists five visual details of Artist A with no mention of Artist B.",
          parts: [
            { label: "a", prompt: "Identify two weaknesses.", marks: 2 },
            { label: "b", prompt: "Explain the effect on the comparison.", marks: 2 },
            { label: "c", prompt: "Describe how to rewrite the paragraph.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating paragraphs", statement: "Assess dual treatment, evidence integration and analytical depth." },
            ],
            steps: [
              { part: "a", reasoning: "Weaknesses: no mention of Artist B; details listed without analysis.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two weaknesses identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Effect: the paragraph becomes description; comparison is impossible.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect on argument explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rewrite approach: select fewer details, add B's contrasting evidence, embed in claims.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete rewrite strategy given.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rewrite includes significance linked to thesis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Single-artist description must become dual-evidence analysis.",
            commonErrors: [
              "Evaluating paragraphs by detail count rather than comparative analysis.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using 'Similarly' between two paragraphs signals that the new point:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Begins the conclusion" },
              { id: "b", text: "Raises a question" },
              { id: "c", text: "Agrees with or extends the previous point" },
              { id: "d", text: "Contradicts the previous point" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Transition logic", statement: "Each transition encodes a specific logical relationship." },
            ],
            steps: [
              { reasoning: "'Similarly' signals agreement or extension of the prior point.", marks: 1, markCode: "M" },
              { reasoning: "Contrast would require 'in contrast' or 'however'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "Mismatched transitions confuse the argument's logic.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Agrees with or extends the previous point",
            commonErrors: [
              "Choosing transitions by habit rather than logical fit.",
            ],
          },
        },
        {
          id: "va-u6-essay-paragraphs-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Construct a model analytical paragraph comparing two artworks' use of composition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Model paragraph", statement: "Topic sentence → dual evidence → analysis → significance." },
            ],
            steps: [
              { reasoning: "Topic sentence states the composition criterion as a comparative claim.", marks: 1, markCode: "M" },
              { reasoning: "Evidence for the first work: specific compositional details.", marks: 1, markCode: "M" },
              { reasoning: "Evidence for the second work: contrasting compositional details.", marks: 1, markCode: "M" },
              { reasoning: "Analysis explains what the compositional difference achieves.", marks: 1, markCode: "M" },
              { reasoning: "Significance links the difference to theme or thesis.", marks: 1, markCode: "M" },
              { reasoning: "Evidence is integrated into sentences making claims, not listed.", marks: 1, markCode: "R" },
              { reasoning: "A closing transition connects to the next paragraph's point.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the paragraph advances the thesis through one clear criterion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Topic claim → A composition → B composition → effect → significance → transition.",
            commonErrors: [
              "Writing a paragraph that describes composition without analysing its effect.",
            ],
          },
        },
      ],
    },
  ],
};
