import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mla5-u2-lesson-2-2",
  code: "2-2",
  title: "Writing Analytical Essays and Reports",
  goal: "I CAN write analytical essays and reports with a clear thesis, structured paragraphs, integrated evidence, evaluation and formal academic style.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Thesis", definition: "The central argument or position a piece of writing will defend." },
    { term: "Topic sentence", definition: "The sentence that states the main point of a paragraph." },
    { term: "Evidence", definition: "Facts, quotations, data or examples used to support a claim." },
    { term: "Evaluation", definition: "Judgement about the strength, significance or limitation of evidence." },
    { term: "Counter-argument", definition: "An opposing view that the writer acknowledges and responds to." },
  ],
  concepts: [
    {
      id: "mla5-u2-analytical-essay",
      title: "Analytical essay structure",
      skill: "Construct an analytical essay with introduction, thesis, developed paragraphs, integrated evidence and conclusion.",
      lesson: {
        sections: [
          {
            heading: "Introduction and thesis",
            body: "An academic introduction should move from **context** to **issue** to **thesis**. The thesis is not a topic ('This essay is about uniforms') but an arguable claim ('Uniform policies can reduce inequality, yet their design determines whether they protect or suppress student identity').",
          },
          {
            heading: "Paragraph development",
            body: "Each body paragraph should have: **topic sentence**, **explanation**, **evidence**, **analysis** and optional **qualification**. Use evidence precisely: quote or paraphrase, then explain how it supports the point. Avoid dropping quotations without analysis.",
          },
          {
            heading: "Counter-argument and conclusion",
            body: "A strong essay acknowledges the strongest opposing view and responds to it. The conclusion should synthesise, not repeat: explain what the argument means, what remains uncertain and why the thesis matters. Do not introduce entirely new evidence in the conclusion.",
          },
        ],
        keyFormulas: [
          { name: "Essay structure", statement: "Context -> Issue -> Thesis -> Evidence+analysis -> Counter -> Synthesis" },
          { name: "Paragraph formula", statement: "Topic sentence + explanation + evidence + analysis + qualification" },
        ],
        workedExample: {
          problem: "Topic: 'Should homework be compulsory?' Write a thesis.",
          solution: "'Homework can support independent learning, but compulsory homework is effective only when it is purposeful, moderate and equitably designed.'",
        },
      },
      questions: [
        {
          id: "mla5-u2-analytical-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What distinguishes a thesis from a topic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A thesis names the subject; a topic argues a claim" },
              { id: "b", text: "A thesis is an arguable claim; a topic only names the subject" },
              { id: "c", text: "A thesis appears only in the conclusion" },
              { id: "d", text: "A topic is always longer than a thesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "An arguable claim that the essay will defend." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — thesis = arguable claim, topic = subject only.", working: "claim", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** A thesis is an arguable claim; a topic only names the subject",
            commonErrors: ["Reversing topic and thesis."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Essay Paragraph",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Although uniforms may reduce visible inequality, they can also suppress individuality. Students report feeling more confident when they can express themselves through clothing choices. However, this does not mean dress codes are unnecessary; rather, they should allow personal expression within clear boundaries.",
          },
          stem: "Identify the topic sentence, evidence and qualification in the paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph analysis", statement: "Topic sentence states main point; evidence and qualification refine it." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — topic sentence: uniforms may reduce inequality but suppress individuality.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — evidence: students report greater confidence through clothing choices.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — qualification: dress codes may still be needed within boundaries.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Topic: inequality vs individuality; evidence: student confidence; qualification: boundaries still needed.",
            commonErrors: ["Missing the qualification and treating paragraph as one-sided."],
            examinerNote: "All three elements must be identified.",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Essay Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Critics argue that screen time causes anxiety. This claim is partly supported: studies link heavy use to poorer sleep. Yet the relationship is not simple. The same devices can provide social support for isolated students, and the effect may depend on whether use is passive or interactive. Therefore, policy should target harmful patterns rather than impose blanket limits.",
          },
          stem: "Analyse how the writer acknowledges a counter-argument and reaches a qualified conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counter-argument integration", statement: "Acknowledge opposing view, qualify it and synthesize." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — counter-argument: screen time causes anxiety, partly supported.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — qualification: devices can provide social support; effect depends on use.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — conclusion targets harmful patterns, not blanket limits.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — analysis is balanced and logically structured.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The writer concedes partial support, qualifies with context and concludes with targeted policy rather than blanket restriction.",
            commonErrors: ["Treating the paragraph as purely supportive or purely critical."],
            examinerNote: "Must identify concession, qualification and synthesis.",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Essay Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Question: 'To what extent does social media strengthen or weaken democratic participation?' You may refer to the extract below.\n\nExtract: 'Social media allows marginalised voices to organise quickly, but it also spreads unverified claims and can polarise debate. Whether it strengthens democracy depends less on the platform than on media literacy and institutional safeguards.'",
          },
          stem: "Write an essay plan and first paragraph.",
          parts: [
            { label: "a", prompt: "Write a thesis answering 'to what extent'.", marks: 2 },
            { label: "b", prompt: "Write an introduction of 60-80 words ending with the thesis.", marks: 3 },
            { label: "c", prompt: "Write a topic sentence for one body paragraph.", marks: 1 },
            { label: "d", prompt: "Write a concluding sentence for the essay.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay production", statement: "Thesis, introduction, paragraph control and conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — thesis gives qualified degree of agreement/disagreement.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — thesis is arguable and specific.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — introduction moves from context to issue to thesis.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — academic register and cohesion.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — within word range and accurate.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — topic sentence states a clear paragraph claim.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion synthesises without repeating mechanically.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion is clear, accurate and appropriate for the essay.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) qualified thesis (b) structured introduction (c) clear topic sentence (d) synthesising conclusion.",
            commonErrors: ["Writing a topic statement instead of a thesis."],
            examinerNote: "Thesis must answer 'to what extent'.",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between an essay topic and a thesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same thing" },
              { id: "b", text: "A topic names the subject; a thesis makes an arguable claim about it" },
              { id: "c", text: "A thesis is always a question" },
              { id: "d", text: "A topic comes at the end of the essay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "An arguable claim that the essay will defend." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — topic = subject; thesis = arguable position.", working: "arguable claim", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** A topic names the subject; a thesis makes an arguable claim about it",
            commonErrors: ["Writing 'This essay is about X' as the thesis."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sequence correctly orders the elements of an academic body paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evidence -> topic sentence -> conclusion" },
              { id: "b", text: "Topic sentence -> explanation -> evidence -> analysis" },
              { id: "c", text: "Analysis -> evidence -> topic sentence" },
              { id: "d", text: "Quotation -> topic sentence -> evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Paragraph development", statement: "Topic sentence -> explanation -> evidence -> analysis -> qualification." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — the paragraph formula begins with a topic sentence.", working: "topic-first", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Topic sentence -> explanation -> evidence -> analysis",
            commonErrors: ["Starting with evidence before stating the point."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Essay Introduction",
            author: "Written for Akademik Space",
            source: "Essay writing practice",
            text: "School uniform policies are often defended as promoting equality. However, their effect depends heavily on how they are designed. This essay argues that uniform policies can reduce inequality, yet their design determines whether they protect or suppress student identity.",
          },
          stem: "Which sentence is the thesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "School uniform policies are often defended as promoting equality." },
              { id: "b", text: "However, their effect depends heavily on how they are designed." },
              { id: "c", text: "This essay argues that uniform policies can reduce inequality, yet their design determines whether they protect or suppress student identity." },
              { id: "d", text: "All three sentences equally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thesis identification", statement: "The thesis is the arguable claim, usually signalled by 'argues' or 'claims'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sentence 3 states the arguable, qualified claim.", working: "thesis", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** This essay argues that uniform policies can reduce inequality, yet their design determines whether they protect or suppress student identity.",
            commonErrors: ["Choosing the context sentence as the thesis."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Body Paragraph",
            author: "Written for Akademik Space",
            source: "Essay writing practice",
            text: "Two studies support this view: Lee (2021) found that structured homework improved retention by 15%, and Patel (2022) reported higher engagement in classes using varied tasks.",
          },
          stem: "How many pieces of evidence are cited in this sentence?",
          response: {
            type: "numeric",
            parts: [{ label: "Citations", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence counting", statement: "Each named study counts as one piece of evidence." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — Lee (2021) and Patel (2022) = 2 citations.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'two studies' and the citations separately."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this weak topic sentence: 'This paragraph is about uniforms and whether they are good or bad.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic sentence writing", statement: "A topic sentence states a specific, arguable point." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — removes meta-language 'this paragraph is about'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — replaces vague 'good or bad' with a specific claim.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — result is arguable and precise.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Example: 'Uniform policies may reduce inequality, but their design determines whether they protect or limit student identity.'",
            commonErrors: ["Keeping the vague 'good or bad' phrasing."],
            examinerNote: "Must produce an arguable, specific topic sentence.",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Essay writing practice",
            text: "Critics argue that uniforms suppress individuality. This criticism has some force, yet it overlooks the counter-evidence: in schools with carefully designed uniform policies, students report feeling less pressure to conform to trends.",
          },
          stem: "Which sentence contains the counter-argument and the writer's response to it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence 1" },
              { id: "b", text: "Sentence 2" },
              { id: "c", text: "Both equally" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counter-argument", statement: "Acknowledge the opposing view, then respond with evidence." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sentence 2 concedes 'some force' then counters with 'yet' and evidence.", working: "counter", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Sentence 2",
            commonErrors: ["Choosing sentence 1, which only states the criticism."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Body Paragraph",
            author: "Written for Akademik Space",
            source: "Essay writing practice",
            text: "Uniforms may reduce inequality, but they can also restrict self-expression. For example, dress codes often prohibit hairstyles or accessories that carry cultural meaning. This suggests that uniform policies should be designed with student input rather than imposed uniformly.",
          },
          stem: "Evaluate how this paragraph develops its point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph evaluation", statement: "Topic sentence, example, analysis and qualified conclusion." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — topic sentence states a balanced claim.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — example: dress codes prohibiting culturally meaningful items.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — analysis connects example to restriction of expression.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — conclusion is qualified: design with student input.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Well-developed: balanced claim, specific example, analysis and qualified recommendation.",
            commonErrors: ["Missing that the example supports the restriction claim."],
            examinerNote: "Must identify each developmental move.",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Essay Introduction",
            author: "Written for Akademik Space",
            source: "Essay writing practice",
            text: "Proponents claim uniforms promote equality. Critics argue they suppress identity. Although both views have merit, the evidence suggests design is decisive.",
          },
          stem: "How many positions are acknowledged, and how many contrastive markers appear?",
          response: {
            type: "numeric",
            parts: [
              { label: "Positions acknowledged", answer: 2 },
              { label: "Contrastive markers", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Introduction structure", statement: "Introductions often present competing views before the thesis." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — proponents and critics = 2 positions.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'Although' = 1 contrastive marker.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2 positions; 1 contrastive marker.",
            commonErrors: ["Counting 'both' as a position."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Essay Element",
            author: "Written for Akademik Space",
            source: "Essay writing practice",
            text: "A strong essay acknowledges the strongest opposing view and responds to it rather than ignoring it.",
          },
          stem: "How many actions does this description of a strong essay require?",
          response: {
            type: "numeric",
            parts: [{ label: "Actions", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Counter-argument", statement: "Acknowledge the opposing view, then respond to it." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — acknowledge + respond = 2 actions.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'strong' as an action."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should an essay conclusion do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduce entirely new evidence" },
              { id: "b", text: "Repeat the introduction word for word" },
              { id: "c", text: "Synthesise the argument and explain why the thesis matters" },
              { id: "d", text: "List every quotation used" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conclusion function", statement: "Conclusions synthesise; they do not introduce new evidence." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — synthesis explains significance without new evidence.", working: "synthesis", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Synthesise the argument and explain why the thesis matters",
            commonErrors: ["Adding new evidence in the conclusion."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Essay Plan: Homework",
            author: "Written for Akademik Space",
            source: "Essay writing practice",
            text: "Thesis: 'Homework can support independent learning, but compulsory homework is effective only when purposeful, moderate and equitably designed.'\nParagraph 1: benefits of purposeful tasks.\nParagraph 2: risks of excessive or repetitive homework.\nParagraph 3: equity concerns for students without home support.\nCounter-argument: some students thrive on routine homework.",
          },
          stem: "Read the plan and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the essay's thesis.", marks: 1 },
            { label: "b", prompt: "List the three body-paragraph focuses.", marks: 3 },
            { label: "c", prompt: "What counter-argument is planned?", marks: 1 },
            { label: "d", prompt: "Write a 60-80 word conclusion for the essay.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay construction", statement: "Thesis, developed paragraphs, counter-argument and synthesis." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — homework effective only when purposeful, moderate and equitable.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — focus 1: benefits of purposeful tasks.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — focus 2: risks of excessive/repetitive homework.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — focus 3: equity concerns.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — counter: some students thrive on routine homework.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion synthesises benefits, risks and conditions.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion is formal and within range.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion introduces no new evidence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) conditional effectiveness (b) benefits; risks; equity (c) routine-thriving students (d) synthesising conclusion.",
            commonErrors: ["Adding new evidence in the conclusion."],
            examinerNote: "(d) must synthesise the planned argument.",
          },
        },
        {
          id: "mla5-u2-analytical-essay-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Essay Conclusion",
            author: "Written for Akademik Space",
            source: "Essay writing practice",
            text: "The essay concludes: 'Uniform policies are not simply good or bad; their effect depends on design, student voice and equity of implementation.'",
          },
          stem: "Why is this conclusion strong?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It repeats the introduction" },
              { id: "b", text: "It synthesises complexity rather than giving a simplistic verdict" },
              { id: "c", text: "It introduces new evidence" },
              { id: "d", text: "It avoids all judgement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesising conclusion", statement: "Naming the conditions of a claim shows analytical maturity." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — conclusion weighs conditions (design, voice, equity) rather than a binary verdict.", working: "synthesis", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It synthesises complexity rather than giving a simplistic verdict",
            commonErrors: ["Thinking a balanced conclusion is a weak conclusion."],
            examinerNote: "D1 for (b).",
          },
        },
      ],
    },
    {
      id: "mla5-u2-formal-report",
      title: "Formal reports and proposals",
      skill: "Write structured reports and proposals with purpose, findings, recommendations and formal register.",
      lesson: {
        sections: [
          {
            heading: "Report conventions",
            body: "A formal report usually has: **title**, **purpose**, **background**, **findings**, **analysis** and **recommendations**. Unlike an essay, it prioritises clarity and usability. Headings, bullet points and numbered recommendations are acceptable when they improve readability.",
          },
          {
            heading: "Findings versus recommendations",
            body: "**Findings** state what was discovered: 'Students reported difficulty accessing reliable sources.' **Recommendations** propose action: 'The library should provide a verified-source guide.' Do not mix them. Every recommendation should be justified by a finding.",
          },
          {
            heading: "Proposals and formal letters",
            body: "A proposal argues why an action should be taken and how it will be implemented. It needs: **problem**, **proposed solution**, **benefits**, **cost/resources**, **timeline** and **risks**. Formal letters use appropriate salutation, clear purpose in the opening paragraph and courteous close.",
          },
        ],
        keyFormulas: [
          { name: "Report sequence", statement: "Purpose -> Background -> Findings -> Analysis -> Recommendations" },
          { name: "Proposal elements", statement: "Problem -> Solution -> Benefits -> Resources -> Timeline -> Risks" },
        ],
        workedExample: {
          problem: "Finding: 'Students cannot identify credible websites.' Turn it into a recommendation.",
          solution: "'The school should run a media-literacy workshop teaching students to verify sources before citing them.'",
        },
      },
      questions: [
        {
          id: "mla5-u2-formal-report-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which section should come before recommendations in a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A personal anecdote" },
              { id: "b", text: "Findings and analysis" },
              { id: "c", text: "A bibliography only" },
              { id: "d", text: "An unrelated introduction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report sequence", statement: "Recommendations follow findings and analysis." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — findings/analysis precede recommendations.", working: "findings", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Findings and analysis",
            commonErrors: ["Putting recommendations before evidence."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-report-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Finding: 'Many students reported using only the first search result when researching.'\nRecommendation: 'Teachers should model multi-source checking and require students to compare at least two sources for major assignments.'",
          },
          stem: "Explain how the recommendation is justified by the finding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recommendation justification", statement: "Recommendations should directly respond to findings." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — finding identifies problem: only first search result used.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — recommendation addresses it: compare at least two sources.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — link between problem and action is explicit.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "The recommendation directly counters the habit of using only one source by requiring comparison.",
            commonErrors: ["Giving recommendations unrelated to findings."],
            examinerNote: "Must explain the logical link.",
          },
        },
        {
          id: "mla5-u2-formal-report-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Proposal Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Problem: 'The library lacks quiet study spaces during exam period.'\nProposal: 'Extend library hours and add reservation desks.'\nHowever, the draft does not estimate cost, staffing or possible effects on noise in other areas.'",
          },
          stem: "Evaluate the proposal and identify two missing elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proposal evaluation", statement: "Proposals need resources, risks and implementation detail." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — missing element 1: cost or staffing estimate.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — missing element 2: risks or unintended effects, e.g. noise elsewhere.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — proposal is clear on problem and solution but incomplete on feasibility.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — evaluation is balanced and practical.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The proposal states problem and solution but lacks cost/staffing and risk analysis.",
            commonErrors: ["Missing that feasibility details are essential."],
            examinerNote: "Two concrete missing elements required.",
          },
        },
        {
          id: "mla5-u2-formal-report-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Report Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "You must write a formal report to the principal proposing a 'digital citizenship week'. Include: problem, proposal, benefits, resources, timeline and risks.",
          },
          stem: "Write the report sections requested.",
          parts: [
            { label: "a", prompt: "Write a purpose statement.", marks: 1 },
            { label: "b", prompt: "Write a problem statement of 40-60 words.", marks: 2 },
            { label: "c", prompt: "Write three numbered recommendations.", marks: 3 },
            { label: "d", prompt: "Write a formal closing paragraph.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal report writing", statement: "Purpose, problem, recommendations and formal close." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — purpose is clear and formal.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — problem is specific and evidence-based.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — within word range and accurate.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — recommendation 1 is actionable.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — recommendation 2 is actionable.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — recommendation 3 is actionable and justified.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — formal courteous closing.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — closing reinforces purpose without adding new claims.", marks: 1, markCode: "D" },
          ],
          finalAnswer: "(a) purpose (b) problem (c) three recommendations (d) formal close.",
            commonErrors: ["Using informal language or unsupported claims."],
            examinerNote: "Report should be concise, formal and actionable.",
          },
        },
        {
          id: "mla5-u2-formal-report-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a formal report prioritise over an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotional persuasion" },
              { id: "b", text: "Clarity and usability" },
              { id: "c", text: "Literary style" },
              { id: "d", text: "Personal opinion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report conventions", statement: "Reports prioritise clarity, structure and usability." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — reports are organised for quick, practical use.", working: "clarity", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Clarity and usability",
            commonErrors: ["Applying essay-style argumentation to a report."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-report-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between a 'finding' and a 'recommendation' in a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They mean the same thing" },
              { id: "b", text: "A finding states what was discovered; a recommendation proposes action" },
              { id: "c", text: "A finding comes first in the report" },
              { id: "d", text: "A recommendation is always optional" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Findings vs recommendations", statement: "Findings report discoveries; recommendations propose justified actions." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — finding = what was found; recommendation = what should be done.", working: "finding vs action", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** A finding states what was discovered; a recommendation proposes action",
            commonErrors: ["Mixing findings and recommendations in one sentence."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-report-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Report writing practice",
            text: "Finding: 'Students reported difficulty accessing reliable sources.' Recommendation: 'The library should provide a verified-source guide.'",
          },
          stem: "Which sentence is the recommendation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Students reported difficulty accessing reliable sources." },
              { id: "b", text: "The library should provide a verified-source guide." },
              { id: "c", text: "Both equally" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Finding vs recommendation", statement: "Recommendations use 'should' to propose action." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'should provide' proposes action = recommendation.", working: "recommendation", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** The library should provide a verified-source guide.",
            commonErrors: ["Choosing the reported difficulty as the recommendation."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-report-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Report writing practice",
            text: "Findings: attendance was low on Mondays; two clubs lacked rooms; survey response rate was 40%. Recommendations: move Monday assembly; book a second hall; simplify the survey.",
          },
          stem: "How many findings and how many recommendations does the report list?",
          response: {
            type: "numeric",
            parts: [
              { label: "Findings", answer: 3 },
              { label: "Recommendations", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report structure", statement: "Each finding should justify a recommendation." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 3 findings listed.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 3 recommendations listed.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3 findings; 3 recommendations.",
            commonErrors: ["Counting 'survey response rate' separately from itself."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u2-formal-report-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Turn this finding into a recommendation: 'Students cannot identify credible websites.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Finding-to-recommendation", statement: "Recommendations propose concrete action justified by findings." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — identifies the problem: cannot identify credible sites.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — proposes action such as a workshop or guide.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — uses 'should' or equivalent and stays formal.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Example: 'The school should run a media-literacy workshop teaching students to verify sources before citing them.'",
            commonErrors: ["Restating the finding instead of proposing action."],
            examinerNote: "Must propose action, not repeat the problem.",
          },
        },
        {
          id: "mla5-u2-formal-report-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Report writing practice",
            text: "Section 3, headed 'Analysis', explains why borrowing fell in winter. Section 5, headed 'Recommendations', proposes extending opening hours.",
          },
          stem: "In which section would the statement 'borrowing fell by 12% in January' belong?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analysis" },
              { id: "b", text: "Recommendations" },
              { id: "c", text: "Title" },
              { id: "d", text: "Purpose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report sections", statement: "Measured results belong in findings/analysis, not recommendations." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'fell by 12%' is a measured result = finding/analysis.", working: "finding", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Analysis",
            commonErrors: ["Putting data in recommendations."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla5-u2-formal-report-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Report writing practice",
            text: "The report has a title, purpose and background. Its 'findings' section lists opinions ('students like the library') rather than measured data, and its recommendations ('improve everything') are vague and not linked to specific findings.",
          },
          stem: "Identify two weaknesses in this report's structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report evaluation", statement: "Findings need data; recommendations need specificity and justification." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — weakness 1: 'findings' are opinions, not measured data.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — weakness 2: recommendations are vague ('improve everything').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — weakness 3 (credit): recommendations are not linked to findings.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — explains why each weakens the report.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Weaknesses: findings lack data; recommendations are vague and unjustified.",
            commonErrors: ["Listing style issues instead of structural weaknesses."],
            examinerNote: "Two clear structural weaknesses required.",
          },
        },
        {
          id: "mla5-u2-formal-report-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Proposal Excerpt",
            author: "Written for Akademik Space",
            source: "Report writing practice",
            text: "The proposal states the problem (overcrowded canteen), the solution (extend lunch hours), the benefits (shorter queues), the cost (two extra supervisors) and the timeline (pilot next term).",
          },
          stem: "How many standard proposal elements are present, and which element is missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "Elements present", answer: 5 },
              { label: "Missing element", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proposal elements", statement: "Problem, solution, benefits, resources, timeline and risks." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — problem, solution, benefits, cost, timeline = 5 present.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — risks are missing = 1.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "5 present; risks missing.",
            commonErrors: ["Counting benefits and cost as one element."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u2-formal-report-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Report Rule",
            author: "Written for Akademik Space",
            source: "Report writing practice",
            text: "Every recommendation in a report should be justified by a finding.",
          },
          stem: "How many parts does this rule link together?",
          response: {
            type: "numeric",
            parts: [{ label: "Linked parts", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justified recommendations", statement: "Recommendations must trace back to findings." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — recommendation + finding = 2 linked parts.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'should' as a part."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u2-formal-report-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "When is it appropriate to use bullet points in a formal report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never — reports must be prose only" },
              { id: "b", text: "When they improve readability, such as listing recommendations" },
              { id: "c", text: "Only in the title" },
              { id: "d", text: "Only in informal emails" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report formatting", statement: "Headings, bullets and numbering are acceptable when they aid clarity." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — bullets aid usability for lists of recommendations.", working: "readability", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** When they improve readability, such as listing recommendations",
            commonErrors: ["Banning all formatting in reports."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-report-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Report Excerpt: School Trips",
            author: "Written for Akademik Space",
            source: "Report writing practice",
            text: "Purpose: To evaluate the school trip programme.\n\nFindings: 78% of students attended trips; cost was the main barrier for non-attenders; teachers reported strong educational value.\n\nAnalysis: Trips support engagement but exclude lower-income families.\n\nRecommendations: introduce a subsidy fund; survey non-attenders; keep trips within curriculum goals.",
          },
          stem: "Read the report and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the report's purpose.", marks: 1 },
            { label: "b", prompt: "List two findings.", marks: 2 },
            { label: "c", prompt: "What does the analysis conclude?", marks: 2 },
            { label: "d", prompt: "Write a 70-90 word evaluation of the report.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report evaluation", statement: "Assess structure, findings-analysis link and recommendations." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — evaluate the school trip programme.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — finding 1: 78% attendance.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — finding 2: cost is the main barrier.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — trips support engagement but exclude lower-income families.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — analysis links findings to an equity problem.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — evaluation notes structure and justified recommendations.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — evaluation is balanced and within range.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — evaluation identifies strengths and any gaps.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) evaluate trips (b) 78% attendance; cost barrier (c) engagement vs exclusion (d) balanced evaluation.",
            commonErrors: ["Evaluating style rather than structure."],
            examinerNote: "(d) should assess report function, not personal opinion.",
          },
        },
        {
          id: "mla5-u2-formal-report-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Formal Letter Excerpt",
            author: "Written for Akademik Space",
            source: "Report writing practice",
            text: "Dear Dr Smith,\n\nI am writing to request a reference letter for my university application, which is due on 15 March. I would be grateful if you could send it at your earliest convenience.",
          },
          stem: "Where in this letter is the purpose stated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the salutation" },
              { id: "b", text: "In the opening paragraph, in the first two sentences" },
              { id: "c", text: "In the complimentary close" },
              { id: "d", text: "At the very end" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter structure", statement: "The opening states purpose within the first two sentences." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I am writing to request...' states purpose immediately.", working: "opening", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** In the opening paragraph, in the first two sentences",
            commonErrors: ["Burying the purpose in the last paragraph."],
            examinerNote: "D1 for (b).",
          },
        },
      ],
    },
  ],
};
