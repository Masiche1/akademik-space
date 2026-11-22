import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "va-u6-lesson-6-1",
  code: "6-1",
  title: "Researching for the Critical Essay",
  goal: "I CAN conduct focused research on two artworks and gather evidence for a comparative essay.",
  standards: [
    "Research",
    "Critical Essay",
  ],
  vocabulary: [
    { term: "Critical essay", definition: "A written comparative analysis of two artworks for the DP visual arts assessment." },
    { term: "Research question", definition: "A focused question that guides investigation of the two artworks." },
    { term: "Primary source", definition: "The artwork itself and direct evidence about it — images, artist statements, labels." },
    { term: "Secondary source", definition: "Interpretations and context from critics, scholars, books and websites." },
    { term: "Bibliography", definition: "A list of sources consulted, required for academic integrity." },
    { term: "Source evaluation", definition: "Assessing the reliability and relevance of information sources." },
  ],
  concepts: [
    {
      id: "va-u6-research-method",
      title: "Research strategy",
      skill: "Conduct focused research on two artworks using primary and secondary sources to build essay evidence.",
      lesson: {
        sections: [
          {
            heading: "Starting with the question",
            body: "The critical essay requires comparing two artworks on a shared theme. Begin with a research question: 'How do Artists X and Y treat the theme of mortality differently?' This focuses research — you need evidence about how each artist approaches the theme, not everything about them.",
          },
          {
            heading: "Primary and secondary sources",
            body: "**Primary sources**: the artworks themselves, artist statements, exhibition catalogues, interviews. These give direct evidence of intention and form. **Secondary sources**: critical essays, art history books, museum websites. These provide context and interpretation. Balance both — primary for evidence, secondary for framing.",
          },
          {
            heading: "Evaluating sources",
            body: "Not all sources are equal: peer-reviewed scholarship and museum publications are reliable; random blogs and AI-generated text require verification. Check: who wrote it? What's their expertise? When was it written? Does it cite evidence? Cross-reference claims across multiple sources before using them in your essay.",
          },
        ],
        keyFormulas: [
          { name: "Research question", statement: "How does [artist A] treat [theme] differently from [artist B]?" },
          { name: "Source types", statement: "Primary = artwork, statements, catalogue; Secondary = criticism, scholarship, websites" },
        ],
        workedExample: {
          problem: "A student must write a critical essay comparing two artists' treatment of 'nature'. Outline a research strategy.",
          solution: "Formulate question: 'How do Artist A and Artist B construct the theme of nature?' Gather primary sources: high-quality images of key works, artist statements, catalogue essays. Gather secondary sources: scholarly articles on each artist's relationship to nature, exhibition reviews. Organise findings under themes: formal treatment, symbolic content, contextual influences.",
        },
      },
      questions: [
        {
          id: "va-u6-research-method-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A primary source for art research is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The artwork itself or an artist's statement" },
              { id: "b", text: "A friend's opinion" },
              { id: "c", text: "A textbook about art history" },
              { id: "d", text: "A Wikipedia article" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primary source", statement: "Direct evidence — the artwork, artist statements, catalogues — about the work." },
            ],
            steps: [
              { reasoning: "Primary sources are direct evidence: the artwork itself, artist statements, exhibition catalogues.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The artwork itself or an artist's statement",
            commonErrors: [
              "Confusing primary sources with secondary interpretations.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three steps in conducting research for a comparative art essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Research steps", statement: "Formulate question, gather primary/secondary sources, organise evidence." },
            ],
            steps: [
              { reasoning: "Formulate a focused research question about the shared theme.", marks: 1, markCode: "M" },
              { reasoning: "Gather primary sources (artworks, statements) and secondary sources (criticism, scholarship).", marks: 1, markCode: "M" },
              { reasoning: "Evaluate sources for reliability and organise findings under analytical themes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Question → sources → evaluation → organisation of evidence.",
            commonErrors: [
              "Collecting sources without a guiding question.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why source evaluation matters in art research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source evaluation", statement: "Not all sources are reliable; poor sources undermine essay credibility." },
            ],
            steps: [
              { reasoning: "Scholarship and museum publications carry authority; blogs and unattributed text may not.", marks: 1, markCode: "M" },
              { reasoning: "Outdated or biased sources may misrepresent the artwork or artist.", marks: 1, markCode: "M" },
              { reasoning: "Using unreliable sources damages credibility and can introduce errors.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: verify claims across multiple reliable sources.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Source evaluation ensures accuracy and credibility of essay evidence.",
            commonErrors: [
              "Using any available source without checking reliability.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's research approach for a critical essay.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the approach.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating research", statement: "Assess question focus, source quality and evidence organisation." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. focused question, mix of primary and secondary sources.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no source evaluation, unfocused collection, missing primary sources — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with research effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests evaluating sources, organising by theme, verifying claims.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate research by question focus, source quality and evidence organisation.",
            commonErrors: [
              "Gathering sources without evaluating their reliability.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a secondary source for art research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The artist's own statement about the piece" },
              { id: "b", text: "A high-resolution photograph of the artwork" },
              { id: "c", text: "The exhibition catalogue essay written by the artist" },
              { id: "d", text: "A peer-reviewed article interpreting the work" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Secondary source", statement: "Interpretation and context from critics, scholars and publications — not the work or the artist's own words." },
            ],
            steps: [
              { reasoning: "Secondary sources interpret the work: criticism, scholarship, museum texts by others.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A peer-reviewed article interpreting the work",
            commonErrors: [
              "Classifying the artwork image or artist statement as secondary.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Outline three ways to gather primary evidence about an artwork for a comparative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Primary evidence", statement: "Direct evidence comes from the artwork itself and the artist's own words." },
            ],
            steps: [
              { reasoning: "Examine the artwork closely — high-quality images or the original — noting formal elements.", marks: 1, markCode: "M" },
              { reasoning: "Seek artist statements, interviews or exhibition catalogue entries by the artist.", marks: 1, markCode: "M" },
              { reasoning: "Record specific visual details that can later be used as evidence in the essay.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Close viewing, artist statements and recorded visual detail build primary evidence.",
            commonErrors: [
              "Relying only on reproductions without recording specific details.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A research question reading 'How do the artists treat death?' is weak mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uses the word 'how'" },
              { id: "b", text: "Is too short to be interesting" },
              { id: "c", text: "Does not name the artists or specify the aspect of comparison" },
              { id: "d", text: "Cannot be answered at all" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question focus", statement: "A strong question names the artists, the theme and the aspect of comparison." },
            ],
            steps: [
              { reasoning: "The question lacks named artists and a specific comparative aspect, so it cannot guide focused research.", marks: 1, markCode: "M" },
              { reasoning: "It is answerable in principle but too vague to produce a focused essay.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Does not name the artists or specify the aspect of comparison",
            commonErrors: [
              "Assuming any 'how' question is automatically strong.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how organising research findings under analytical themes strengthens an essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence organisation", statement: "Grouping findings by criterion turns collected material into usable argument." },
            ],
            steps: [
              { reasoning: "Grouping findings under criteria (e.g. colour, composition, symbolism) matches the essay's paragraph structure.", marks: 1, markCode: "M" },
              { reasoning: "It reveals patterns and contrasts across the two artworks that support the thesis.", marks: 1, markCode: "M" },
              { reasoning: "It prevents the writer from producing a descriptive list of facts with no argument.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: thematic organisation makes evidence selection and essay drafting far more efficient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thematic organisation converts raw research into structured, argument-ready evidence.",
            commonErrors: [
              "Filing notes chronologically rather than by analytical criterion.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which source is most trustworthy for claims about an artist's intentions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An anonymous forum post" },
              { id: "b", text: "An AI-generated summary of the artist" },
              { id: "c", text: "A social media comment thread" },
              { id: "d", text: "A museum publication or peer-reviewed scholarship" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source reliability", statement: "Institutional and peer-reviewed sources carry the greatest authority." },
            ],
            steps: [
              { reasoning: "Museums and peer-reviewed scholarship apply editorial and academic scrutiny.", marks: 1, markCode: "M" },
              { reasoning: "Anonymous and AI-generated content cannot be verified against evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A museum publication or peer-reviewed scholarship",
            commonErrors: [
              "Treating confident-sounding online text as equally reliable.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q10",
          difficulty: "core",
          totalMarks: 5,
          stem: "Describe how a student should balance primary and secondary sources when researching two artworks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source balance", statement: "Primary sources supply evidence; secondary sources supply context — both are needed." },
            ],
            steps: [
              { reasoning: "Primary sources (the works, artist statements) provide direct evidence of form and intention.", marks: 1, markCode: "M" },
              { reasoning: "Secondary sources (criticism, scholarship) provide context, interpretation and framing.", marks: 1, markCode: "M" },
              { reasoning: "Claims about the work itself must be anchored in primary evidence.", marks: 1, markCode: "M" },
              { reasoning: "Secondary interpretations must be evaluated and cross-referenced before use.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: a balanced essay uses primary for proof and secondary for perspective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anchor claims in primary sources; use verified secondary sources for context and interpretation.",
            commonErrors: [
              "Building the essay entirely on critics' interpretations of the work.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student finds a striking claim about an artist only on a single blog. The most appropriate action is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Verify it across reliable sources or find corroboration" },
              { id: "b", text: "Copy it and cite the blog" },
              { id: "c", text: "Use it because it is interesting" },
              { id: "d", text: "Reject all blogs automatically" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Verification", statement: "Single unverified claims cannot support essay arguments." },
            ],
            steps: [
              { reasoning: "A lone blog claim is unverified and may be inaccurate or biased.", marks: 1, markCode: "M" },
              { reasoning: "Reliable claims should be corroborated across credible sources.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
              { reasoning: "If corroboration fails, the claim should be dropped.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** Verify it across reliable sources or find corroboration",
            commonErrors: [
              "Citing the first source that states a convenient claim.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student has collected thirty sources but has written nothing. Diagnose the research problem and suggest a remedy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Research diagnosis", statement: "Collection without selection and organisation is not research." },
            ],
            steps: [
              { reasoning: "The student is gathering without a guiding research question or thesis.", marks: 1, markCode: "M" },
              { reasoning: "Many sources may be irrelevant, redundant or unreliable.", marks: 1, markCode: "M" },
              { reasoning: "No evidence has been selected or organised for argument.", marks: 1, markCode: "M" },
              { reasoning: "Remedy: return to the research question and define what evidence is needed.", marks: 1, markCode: "R" },
              { reasoning: "Select, evaluate and organise only the sources that serve the argument.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: research ends when evidence is ready to write from, not when sources run out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quantity of sources is not research; question-driven selection and organisation is.",
            commonErrors: [
              "Treating source collection as a substitute for analysis.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which research question is strongest for a comparative essay on 'identity'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Is Frida Kahlo a good artist?'" },
              { id: "b", text: "'Which artist is more famous?'" },
              { id: "c", text: "'Tell me everything about two artists.'" },
              { id: "d", text: "'How do Kahlo and O'Keeffe construct identity differently through scale and symbolism?'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question quality", statement: "Strong questions name artists, theme and specific comparative aspects." },
            ],
            steps: [
              { reasoning: "Choice (b) names both artists, the theme 'identity' and specific aspects 'scale and symbolism'.", marks: 1, markCode: "M" },
              { reasoning: "It is comparative, open-ended and answerable with evidence.", marks: 1, markCode: "M" },
              { reasoning: "The other options are evaluative, vague or biographical rather than comparative.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'How do Kahlo and O'Keeffe construct identity differently through scale and symbolism?'",
            commonErrors: [
              "Choosing questions that invite opinion or biography rather than analysis.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate this research plan: 'I will Google both artists and use whatever comes up first.'",
          parts: [
            { label: "a", prompt: "Identify two problems with the plan.", marks: 2 },
            { label: "b", prompt: "Explain how each problem affects the essay.", marks: 2 },
            { label: "c", prompt: "Outline an improved research plan.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Research planning", statement: "Research must be question-driven, source-evaluated and evidence-focused." },
            ],
            steps: [
              { part: "a", reasoning: "Problems, e.g. no guiding question; uncritical use of top search results.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two distinct problems identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each problem explained: unfocused evidence collection; unreliable or irrelevant sources enter the essay.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects on essay quality stated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Improved plan: formulate question, define needed evidence, gather primary and secondary sources, evaluate and organise.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Plan is concrete and sequential.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Plan includes source evaluation and thematic organisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Replace open-ended searching with question-driven, evaluated, organised research.",
            commonErrors: [
              "Assuming search-engine ranking equals source reliability.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "When evaluating a secondary source, the MOST important first check is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its publication date only" },
              { id: "b", text: "Its length" },
              { id: "c", text: "The author's expertise, publication venue and whether claims are evidenced" },
              { id: "d", text: "Whether it agrees with your opinion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source evaluation", statement: "Authority, venue and evidencing determine reliability." },
            ],
            steps: [
              { reasoning: "Author expertise and publication venue indicate editorial and academic scrutiny.", marks: 1, markCode: "M" },
              { reasoning: "Evidenced claims can be checked; opinion cannot.", marks: 1, markCode: "M" },
              { reasoning: "Agreement with the writer is irrelevant to reliability.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The author's expertise, publication venue and whether claims are evidenced",
            commonErrors: [
              "Judging sources by agreement or length rather than authority.",
            ],
          },
        },
        {
          id: "va-u6-research-method-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a research strategy for a comparative essay on two artists' treatment of 'grief'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Research design", statement: "A complete strategy runs from question to organised evidence." },
            ],
            steps: [
              { reasoning: "Formulate a specific comparative question naming both artists, the theme and an aspect.", marks: 1, markCode: "M" },
              { reasoning: "Identify needed primary sources: key artworks, artist statements, catalogues.", marks: 1, markCode: "M" },
              { reasoning: "Identify needed secondary sources: scholarly articles, exhibition reviews, museum texts.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate each source for reliability, bias and currency.", marks: 1, markCode: "M" },
              { reasoning: "Organise findings under analytical themes matching essay criteria.", marks: 1, markCode: "M" },
              { reasoning: "Cross-reference key claims across multiple sources before relying on them.", marks: 1, markCode: "R" },
              { reasoning: "Check the evidence gathered is sufficient for the essay's scope and word count.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the strategy ends when evidence is organised and ready to argue from.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Question → sources → evaluation → thematic organisation → verified evidence.",
            commonErrors: [
              "Planning sources before the research question is fixed.",
            ],
          },
        },
      ],
    },
    {
      id: "va-u6-research-question",
      title: "Formulating the research question",
      skill: "Develop focused, answerable research questions that guide comparative essay investigation.",
      lesson: {
        sections: [
          {
            heading: "What makes a good question",
            body: "A strong research question is specific, answerable and comparative: 'How does Artist A's use of colour differ from Artist B's in treating grief?' It names the theme, the artists and the aspect of comparison. Vague questions ('compare two artists') produce vague essays.",
          },
          {
            heading: "Types of questions",
            body: "**Formal questions**: how do the artists' techniques differ? **Thematic questions**: how do they treat the theme differently? **Contextual questions**: how do their backgrounds shape their approaches? **Evaluative questions**: whose approach is more effective and why? Each generates different evidence needs.",
          },
          {
            heading: "Testing the question",
            body: "Before committing, test: Can I find enough evidence? Is it answerable in the word count? Does it allow for nuance rather than yes/no? A good question has a 'so what?' — it should reveal something interesting about art, not just describe differences.",
          },
        ],
        keyFormulas: [
          { name: "Good question formula", statement: "How does [aspect] differ between Artist A and Artist B in treating [theme]?" },
          { name: "Question types", statement: "Formal, thematic, contextual and evaluative" },
        ],
        workedExample: {
          problem: "Improve this research question: 'Compare two artists.'",
          solution: "'How do Frida Kahlo and Georgia O'Keeffe construct identity differently through scale, symbolism and composition?' — names theme (identity), artists, and specific comparative aspects.",
        },
      },
      questions: [
        {
          id: "va-u6-research-question-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A strong research question for a comparative art essay should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About the artist's biography only" },
              { id: "b", text: "Specific, answerable and focused on a shared theme" },
              { id: "c", text: "As broad as possible" },
              { id: "d", text: "Answerable with yes or no" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Research question", statement: "Specific, answerable questions focused on theme guide effective research." },
            ],
            steps: [
              { reasoning: "Strong questions are specific, answerable and theme-focused.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Specific, answerable and focused on a shared theme",
            commonErrors: [
              "Asking overly broad or yes/no questions.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three types of research questions suitable for a comparative art essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Question types", statement: "Formal, thematic and contextual questions each guide different research." },
            ],
            steps: [
              { reasoning: "Formal: how do the artists' techniques or styles differ?", marks: 1, markCode: "M" },
              { reasoning: "Thematic: how do they treat the shared theme differently?", marks: 1, markCode: "M" },
              { reasoning: "Contextual: how do their backgrounds or eras shape their approaches?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal, thematic and contextual questions each generate different evidence.",
            commonErrors: [
              "Asking only biographical or only descriptive questions.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a yes/no research question is weak for a comparative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Question quality", statement: "Yes/no questions cannot develop the nuance and argument an essay requires." },
            ],
            steps: [
              { reasoning: "Yes/no questions ('Is Artist A better?') cannot develop sustained argument.", marks: 1, markCode: "M" },
              { reasoning: "They invite simplistic answers rather than analysis of differences and significance.", marks: 1, markCode: "M" },
              { reasoning: "Open 'how' and 'why' questions require evidence and reasoning.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: good questions invite analysis, not verdicts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes/no questions prevent the nuanced argument essays require.",
            commonErrors: [
              "Framing the essay around a verdict rather than analysis.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's research question for a critical essay.",
          parts: [
            { label: "a", prompt: "State the research question being evaluated.", marks: 2 },
            { label: "b", prompt: "Assess its strengths and weaknesses.", marks: 2 },
            { label: "c", prompt: "Suggest an improved version.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating questions", statement: "Assess specificity, answerability and comparative focus." },
            ],
            steps: [
              { part: "a", reasoning: "Question clearly stated.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Question accurately identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strengths (specific, themed) and weaknesses (too broad, unanswerable, lacks comparative focus) assessed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced assessment of question quality.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Improved question: specific artists, theme, aspect of comparison named.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improved version provided.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate questions by specificity, answerability and comparative focus; improve by naming theme and aspect.",
            commonErrors: [
              "Accepting vague questions without testing their answerability.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A yes/no research question is weak for a comparative essay mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot develop the nuanced argument an essay requires" },
              { id: "b", text: "Is impossible to answer" },
              { id: "c", text: "Names too many artists" },
              { id: "d", text: "Is too specific to research" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Question quality", statement: "Yes/no questions invite verdicts, not analysis." },
            ],
            steps: [
              { reasoning: "Yes/no questions cannot sustain comparative analysis or nuance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cannot develop the nuanced argument an essay requires",
            commonErrors: [
              "Assuming a closed question is automatically a bad one in all contexts.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Rewrite the vague question 'Compare two artists' into a stronger research question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question rewriting", statement: "Strong questions name artists, theme and comparative aspect." },
            ],
            steps: [
              { reasoning: "Name the two specific artists being compared.", marks: 1, markCode: "M" },
              { reasoning: "Specify the shared theme being investigated.", marks: 1, markCode: "M" },
              { reasoning: "Add a 'how' aspect of comparison so the question is open and answerable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'How do Artist A and Artist B treat [theme] differently through [aspect]?'",
            commonErrors: [
              "Adding detail about biography instead of the comparative focus.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which of the following is a contextual research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Whose use of colour is better?'" },
              { id: "b", text: "'How do the artists' brushwork techniques differ?'" },
              { id: "c", text: "'How do their cultural backgrounds shape their treatment of the theme?'" },
              { id: "d", text: "'What materials did each artist use?'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contextual question", statement: "Asks how background, era or culture shapes artistic approach." },
            ],
            steps: [
              { reasoning: "Contextual questions link the work to the artist's background or historical setting.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) explicitly asks how backgrounds shape treatment of the theme.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'How do their cultural backgrounds shape their treatment of the theme?'",
            commonErrors: [
              "Confusing formal questions about technique with contextual questions.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how formal, thematic, contextual and evaluative questions differ in the evidence they require.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Question types", statement: "Each question type directs research toward different evidence." },
            ],
            steps: [
              { reasoning: "Formal questions require close visual evidence of technique, medium and composition.", marks: 1, markCode: "M" },
              { reasoning: "Thematic questions require evidence about how subject matter and symbolism treat the theme.", marks: 1, markCode: "M" },
              { reasoning: "Contextual questions require biographical, historical and cultural evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the question type determines which sources to prioritise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Question type dictates evidence: formal→visual detail, thematic→subject/symbolism, contextual→background, evaluative→criteria for judgement.",
            commonErrors: [
              "Treating all question types as needing identical research.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Before committing to a research question, a student should test whether:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The teacher personally likes it" },
              { id: "b", text: "Enough evidence exists and it suits the essay's scope" },
              { id: "c", text: "It avoids comparison entirely" },
              { id: "d", text: "It is as short as possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Testing questions", statement: "A good question is answerable within scope using available evidence." },
            ],
            steps: [
              { reasoning: "Test whether sufficient evidence exists to answer the question.", marks: 1, markCode: "M" },
              { reasoning: "Check the question fits the essay's word count and scope.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Enough evidence exists and it suits the essay's scope",
            commonErrors: [
              "Choosing questions that sound impressive but cannot be researched.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q10",
          difficulty: "core",
          totalMarks: 5,
          stem: "A student's question is 'How do Artist A and Artist B use colour?' Improve it and justify the improvement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Improving questions", statement: "Add theme, specific aspect and comparative focus." },
            ],
            steps: [
              { reasoning: "Identify weakness: the theme and aspect of comparison are unspecified.", marks: 1, markCode: "M" },
              { reasoning: "Add the shared theme, e.g. how colour constructs 'melancholy' or 'identity'.", marks: 1, markCode: "M" },
              { reasoning: "Specify the aspect, e.g. palette choice, contrast or symbolic colour use.", marks: 1, markCode: "M" },
              { reasoning: "Justify: the improved question generates focused, answerable evidence.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: specificity in question produces specificity in essay.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'How does each artist's palette construct [theme] differently?'",
            commonErrors: [
              "Adding more words without adding analytical focus.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The 'so what?' test for a research question means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Checking the spelling carefully" },
              { id: "b", text: "Asking whether the answer reveals something significant about art" },
              { id: "c", text: "Checking whether it is easy to answer" },
              { id: "d", text: "Counting the words in the question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Question significance", statement: "A strong question reveals something interesting about art." },
            ],
            steps: [
              { reasoning: "The 'so what?' test checks whether answering the question produces insight.", marks: 1, markCode: "M" },
              { reasoning: "A question that only describes differences without significance is weak.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "Insight, not ease or brevity, determines question quality.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Asking whether the answer reveals something significant about art",
            commonErrors: [
              "Confusing an easy question with a valuable one.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the evidence needs of a formal research question with those of an evaluative research question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence matching", statement: "The question type determines what evidence must be gathered." },
            ],
            steps: [
              { reasoning: "A formal question ('how do their techniques differ?') needs close visual evidence of method and medium.", marks: 1, markCode: "M" },
              { reasoning: "An evaluative question ('whose approach is more effective?') needs criteria for judging effectiveness.", marks: 1, markCode: "M" },
              { reasoning: "Both typically require primary sources on the works plus secondary context.", marks: 1, markCode: "M" },
              { reasoning: "Evaluative questions risk unsupported opinion unless criteria are defined.", marks: 1, markCode: "R" },
              { reasoning: "Formal questions can rest more securely on observable evidence.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: choose the question type that matches the evidence you can gather.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal questions need visual/technical evidence; evaluative questions need explicit criteria.",
            commonErrors: [
              "Asking evaluative questions without defining the criteria for judgement.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which is the best evaluative research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Whose treatment of grief is more effective, and through which formal means?'" },
              { id: "b", text: "'Which artist is better?'" },
              { id: "c", text: "'Who painted first?'" },
              { id: "d", text: "'Are both artists good?'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluative questions", statement: "Strong evaluative questions define what is being judged and by what means." },
            ],
            steps: [
              { reasoning: "Choice (b) specifies the criterion (treatment of grief) and the basis (formal means).", marks: 1, markCode: "M" },
              { reasoning: "It invites argument rather than a bare verdict.", marks: 1, markCode: "M" },
              { reasoning: "Choices (a), (c) and (d) are unsupported opinion or biography.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'Whose treatment of grief is more effective, and through which formal means?'",
            commonErrors: [
              "Writing evaluative questions that demand an unsupported verdict.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate 'How do artists treat nature?' as a research question.",
          parts: [
            { label: "a", prompt: "State the question and identify what it fails to specify.", marks: 2 },
            { label: "b", prompt: "Assess its strengths and weaknesses.", marks: 2 },
            { label: "c", prompt: "Suggest an improved version with justification.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating questions", statement: "Assess specificity, answerability and comparative focus." },
            ],
            steps: [
              { part: "a", reasoning: "Question stated; fails to name artists, artworks or aspect of comparison.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Omissions identified accurately.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strength: open 'how' form allows analysis; weakness: too broad to guide research.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced assessment given.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Improved version names artists, theme and specific aspect.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improved question provided.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Justification explains why it guides better research.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Broad open question; improve by naming artists and the aspect of comparison.",
            commonErrors: [
              "Judging a question only by its topic rather than its focus.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A good research question should allow for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single correct verdict" },
              { id: "b", text: "Only a yes or no answer" },
              { id: "c", text: "Nuance and multiple defensible interpretations" },
              { id: "d", text: "No supporting evidence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nuanced questions", statement: "Open questions permit argument backed by evidence." },
            ],
            steps: [
              { reasoning: "Nuanced questions allow the writer to weigh evidence and argue.", marks: 1, markCode: "M" },
              { reasoning: "Single verdicts or yes/no answers close down analysis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "Evidence remains essential regardless of openness.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Nuance and multiple defensible interpretations",
            commonErrors: [
              "Confusing openness with lack of rigour.",
            ],
          },
        },
        {
          id: "va-u6-research-question-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Develop and justify a research question for comparing two artworks on the theme of 'memory'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question development", statement: "A justified question names artists, theme, aspect and significance." },
            ],
            steps: [
              { reasoning: "State a question naming both artists, 'memory' and a specific comparative aspect.", marks: 1, markCode: "M" },
              { reasoning: "Explain why the 'how' comparative form suits analytical writing.", marks: 1, markCode: "M" },
              { reasoning: "Identify the evidence needed: visual analysis plus context on memory.", marks: 1, markCode: "M" },
              { reasoning: "Justify answerability within the essay's scope and word count.", marks: 1, markCode: "M" },
              { reasoning: "Consider and reject a weaker alternative question, explaining why.", marks: 1, markCode: "R" },
              { reasoning: "Explain the 'so what' — what insight the answer could produce.", marks: 1, markCode: "R" },
              { reasoning: "Confirm the question demands comparison, not sequential description.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: a developed, justified question anchors the whole essay.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Name artists + theme + aspect in 'how' form; justify via evidence, scope and significance.",
            commonErrors: [
              "Drafting a question without testing its evidence needs.",
            ],
          },
        },
      ],
    },
  ],
};
