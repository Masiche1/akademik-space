import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ee-u1-lesson-1-3",
  code: "1-3",
  title: "Essay Titles and Scope",
  goal: "I CAN distinguish between essay titles and research questions and define appropriate scope for the EE.",
  standards: ["EE", "Essay Titles", "Scope", "Academic Writing"],
  vocabulary: [
    { term: "Essay title", definition: "The wording of the research question as it appears at the top of the essay." },
    { term: "Research question", definition: "The question formulated during the research process that guides investigation." },
    { term: "Scope", definition: "The boundaries of the essay — what is included and excluded." },
    { term: "Focus", definition: "The specific aspect of the topic the essay will address." },
    { term: "Limitations", definition: "Acknowledged constraints on the research — word count, sources, time." },
    { term: "Significance", definition: "The importance or relevance of the research question to the field." },
  ],
  concepts: [
    {
      id: "ee-u1-title-vs-rq",
      title: "Essay title vs research question",
      skill: "Distinguish between the research question developed during research and the final essay title.",
      lesson: {
        sections: [
          {
            heading: "The difference",
            body: "The **research question** is developed early and may evolve through investigation. The **essay title** is the final, polished version that appears at the top of the essay. They should match in substance — the title is the RQ refined for presentation. The title must be identical to the approved research question.",
          },
          {
            heading: "Title formatting",
            body: "The title should be phrased as a question or a clear statement of the problem. It must be within the word limit for titles (the IB specifies a maximum — check current rules). The title should not be too broad or too narrow, and it must accurately reflect what the essay actually investigates.",
          },
          {
            heading: "Consistency requirement",
            body: "The essay must answer the title it states. If your research question evolved, the title must reflect the final version. Mismatch between title and content is a common error that weakens the essay — examiners check that the essay addresses what it claims to address.",
          },
        ],
        keyFormulas: [
          { name: "Title rule", statement: "Title = final refined RQ; must match essay content exactly" },
          { name: "Consistency test", statement: "Does every section of the essay serve the stated title?" },
        ],
        workedExample: {
          problem: "Your RQ changed during research. What goes on the title page?",
          solution: "The final version of your RQ — the one your essay actually answers. The title must be the refined, final question, not the early draft. Document the evolution in your RPF.",
        },
      },
      questions: [
        {
          id: "ee-u1-l13c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The essay title should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Be different from the research question" },
              { id: "b", text: "Be the first draft of the research question" },
              { id: "c", text: "Match the final research question the essay answers" },
              { id: "d", text: "Be as broad as possible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Title consistency", statement: "The essay title must match the final research question." },
            ],
            steps: [
              { reasoning: "Title must reflect the final RQ the essay answers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Match the final research question",
            commonErrors: ["Using an early draft title that no longer matches the essay."],
          },
        },
        {
          id: "ee-u1-l13c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the essay title must match the essay content.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Title-content consistency", statement: "Mismatch between title and content confuses examiners and weakens the essay." },
            ],
            steps: [
              { reasoning: "The title states what the essay claims to investigate.", marks: 1, markCode: "M" },
              { reasoning: "If the content does not match, the essay appears unfocused or dishonest.", marks: 1, markCode: "M" },
              { reasoning: "Examiners check that the essay answers the question it poses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Title-content mismatch confuses examiners and suggests the essay does not answer its stated question.",
            commonErrors: ["Changing the research question without updating the title."],
          },
        },
        {
          id: "ee-u1-l13c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of clearly defining scope in an EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scope definition", statement: "Clear scope prevents the essay from becoming unfocused or overreaching." },
            ],
            steps: [
              { reasoning: "For: clear scope keeps the essay focused within 4000 words.", marks: 1, markCode: "M" },
              { reasoning: "For: acknowledging limitations shows intellectual honesty.", marks: 1, markCode: "M" },
              { reasoning: "Against: too rigid scope may exclude relevant evidence.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: define scope clearly but remain open to relevant evidence within it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clear scope maintains focus and honesty about limitations, though it should not exclude relevant evidence.",
            commonErrors: ["Failing to acknowledge limitations or scope boundaries."],
          },
        },
        {
          id: "ee-u1-l13c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to manage essay title and scope.",
          parts: [
            { label: "a", prompt: "Explain the relationship between RQ and essay title.", marks: 2 },
            { label: "b", prompt: "Describe three elements of good scope definition.", marks: 3 },
            { label: "c", prompt: "Evaluate how scope affects essay quality.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Title and scope", statement: "Title states the question; scope defines what will and will not be covered." },
            ],
            steps: [
              { part: "a", reasoning: "RQ is developed during research; title is the final polished version.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They must match in substance.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Specify what will be covered (time period, geography, aspect).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Acknowledge what is excluded and why.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State limitations imposed by word count and sources.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Good scope maintains focus and depth within word limit.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Poor scope leads to superficial coverage or irrelevant digressions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: scope is essential for a coherent, focused essay.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Title = final RQ. (b) Coverage, exclusions, limitations. (c) Essential for focus.",
            commonErrors: ["Treating scope as an afterthought rather than a planning tool."],
          },
        },
        {
          id: "ee-u1-l13c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Under the EE guide, the essay title should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of keywords" },
              { id: "b", text: "Phrased as a research question" },
              { id: "c", text: "A clear summative statement of the research" },
              { id: "d", text: "Identical to the abstract" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Title form", statement: "The title is a clear focused statement and is not phrased as a research question." },
            ],
            steps: [
              { reasoning: "The title indicates the main focus of the essay.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A clear summative statement",
            commonErrors: ["Confusing the title with the research question."],
          },
        },
        {
          id: "ee-u1-l13c1q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which items belong on the EE title page?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Student name, school and title" },
              { id: "b", text: "Title, research question, registered subject and word count" },
              { id: "c", text: "Title, bibliography and supervisor signature" },
              { id: "d", text: "Research question only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Title page", statement: "The title page contains the title, research question, registered subject and word count." },
            ],
            steps: [
              { reasoning: "The guide specifies exactly which identifying information appears.", marks: 1, markCode: "M" },
              { reasoning: "Names and schools are excluded for anonymous assessment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Title, RQ, subject and word count",
            commonErrors: ["Adding personal details or omitting the word count."],
          },
        },
        {
          id: "ee-u1-l13c1q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should the title relate to the research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It should change whenever the essay changes" },
              { id: "b", text: "It should ask the same question in different words" },
              { id: "c", text: "It should be broader than the essay" },
              { id: "d", text: "It should summarise the same focus without being phrased as a question" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Title-RQ alignment", statement: "The title summarises the focus; the RQ poses the question the essay answers." },
            ],
            steps: [
              { reasoning: "They share substance but perform different functions.", marks: 1, markCode: "M" },
              { reasoning: "The title states focus; the question states the inquiry.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Same focus, different form",
            commonErrors: ["Repeating the RQ as the title."],
          },
        },
        {
          id: "ee-u1-l13c1q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student's final RQ changed during research. What should appear on the title page?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The earliest draft because it was first approved" },
              { id: "b", text: "Only the original topic" },
              { id: "c", text: "The final aligned title and research question" },
              { id: "d", text: "Two competing questions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Final alignment", statement: "Title page elements must reflect the final researched focus." },
            ],
            steps: [
              { reasoning: "The essay answers the final question, not the first draft.", marks: 1, markCode: "M" },
              { reasoning: "The title must summarise that same final focus.", marks: 1, markCode: "M" },
              { reasoning: "Old drafts can be documented in the RPF instead.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Final aligned title and RQ",
            commonErrors: ["Keeping outdated framing on the title page."],
          },
        },
        {
          id: "ee-u1-l13c1q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which title best follows EE conventions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Everything about music and politics" },
              { id: "b", text: "To what extent did censorship shape jazz in Berlin?" },
              { id: "c", text: "Censorship and jazz in Weimar Berlin: cultural control and musical change" },
              { id: "d", text: "Jazz" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Title quality", statement: "A good title is clear, focused, succinct and uses relevant key terms." },
            ],
            steps: [
              { reasoning: "The correct option is a statement, not a question.", marks: 1, markCode: "M" },
              { reasoning: "It names subject, place and analytical relationship.", marks: 1, markCode: "M" },
              { reasoning: "It is neither too vague nor a list of keywords.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Censorship and jazz in Weimar Berlin...",
            commonErrors: ["Writing the title as a question or a single keyword."],
          },
        },
        {
          id: "ee-u1-l13c1q10",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Distinguish between the essay title and the research question.",
          parts: [
            { label: "a", prompt: "Define the title.", marks: 2 },
            { label: "b", prompt: "Define the research question.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Title vs RQ", statement: "Title states focus; RQ poses the question to be answered." },
            ],
            steps: [
              { part: "a", reasoning: "The title is a clear summative statement of the research.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It is not phrased as a question.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The research question is expressed as a question.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It guides the investigation and line of argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Title = statement of focus; RQ = question guiding the essay.",
            commonErrors: ["Treating them as identical wording."],
          },
        },
        {
          id: "ee-u1-l13c1q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "Create a matching title and research question pair for a history EE.",
          parts: [
            { label: "a", prompt: "Draft the title.", marks: 2 },
            { label: "b", prompt: "Draft the research question.", marks: 2 },
            { label: "c", prompt: "Explain the alignment.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Title-RQ pairing", statement: "The title summarises focus while the RQ asks the evaluative question." },
            ],
            steps: [
              { part: "a", reasoning: "Use a clear statement naming actors, place and issue.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Do not phrase it as a question.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ask one focused question using 'to what extent' or 'how'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Bound the period and mechanism.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both must concern the same focus.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The RQ should be answerable within the essay's scope.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pair a statement title with an aligned single evaluative question.",
            commonErrors: ["Making the title broader or narrower than the actual essay."],
          },
        },
        {
          id: "ee-u1-l13c1q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Evaluate a title that does not match the final research question.",
          parts: [
            { label: "a", prompt: "Explain the problem.", marks: 2 },
            { label: "b", prompt: "Describe two consequences.", marks: 2 },
            { label: "c", prompt: "Explain the fix.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Consistency", statement: "Title and RQ must reflect the same final research focus." },
            ],
            steps: [
              { part: "a", reasoning: "The mismatch suggests the essay may answer a different question.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It weakens clarity of focus for the reader.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Examiners may see the framework as confused.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The essay can appear unfocused or incomplete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Revise the title to summarise the final RQ's focus.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check that every section serves that focus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Align the title with the final RQ and verify the essay delivers that focus.",
            commonErrors: ["Updating the RQ but forgetting the title."],
          },
        },
        {
          id: "ee-u1-l13c1q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how title and research question contribute to Criterion A.",
          parts: [
            { label: "a", prompt: "Explain Criterion A's focus.", marks: 2 },
            { label: "b", prompt: "Explain how the RQ contributes.", marks: 3 },
            { label: "c", prompt: "Explain how the title contributes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Criterion A framework", statement: "Criterion A assesses the framework: question focus, methods and structure." },
            ],
            steps: [
              { part: "a", reasoning: "It evaluates whether the essay's framework supports coherent research.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Research question, methods and structure are central.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The RQ defines what must be answered.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It should be relevant, clear, focused and within scope.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It guides methods and line of argument.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The title clarifies the intended focus on the title page.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It helps connect the topic to the subject and RQ.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: both are formal signals of a coherent framework.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RQ drives the framework; title clarifies it; both support Criterion A.",
            commonErrors: ["Seeing the title as decorative rather than part of focus."],
          },
        },
        {
          id: "ee-u1-l13c1q14",
          difficulty: "core",
          totalMarks: 6,
          stem: "Revise an essay title after the research question evolves.",
          parts: [
            { label: "a", prompt: "State what should not change.", marks: 2 },
            { label: "b", prompt: "Describe two revision checks.", marks: 2 },
            { label: "c", prompt: "Explain the final verification.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Title revision", statement: "The title should be updated to reflect the final researched focus." },
            ],
            steps: [
              { part: "a", reasoning: "Do not revert to an early draft that no longer matches research.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Do not phrase the title as the RQ.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Check that key terms match the final scope.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check that the statement remains succinct and accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Verify title, RQ, introduction and conclusion all align.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Record the evolution for the RPF if needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Update the title to the final focus and verify alignment across the essay.",
            commonErrors: ["Leaving the title unchanged after major RQ revision."],
          },
        },
        {
          id: "ee-u1-l13c1q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan the formal presentation of title and research question on the title page.",
          parts: [
            { label: "a", prompt: "List the required title-page elements.", marks: 2 },
            { label: "b", prompt: "Explain how to format the title.", marks: 2 },
            { label: "c", prompt: "Explain how to format the RQ.", marks: 2 },
            { label: "d", prompt: "Evaluate the importance of precision.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Title-page precision", statement: "Required elements must be present and accurately aligned." },
            ],
            steps: [
              { part: "a", reasoning: "Include title, research question, registered subject and word count.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Do not include student or school names.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use a clear summative statement, not a question.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Keep it focused and free of unnecessary detail.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write one clear evaluative question.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ensure it matches the essay's final focus.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Small mismatches can confuse examiners.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Precision protects the framework under Criterion A.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Include required elements, use a statement title and aligned question, and verify exact focus.",
            commonErrors: ["Treating the title page as a formality rather than part of assessment."],
          },
        },
        {
          id: "ee-u1-l13c1q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the importance of a well-crafted essay title.",
          parts: [
            { label: "a", prompt: "Give one functional benefit.", marks: 2 },
            { label: "b", prompt: "Give two quality benefits.", marks: 3 },
            { label: "c", prompt: "Reach a judgement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Title importance", statement: "The title signals focus, connects topic to subject and supports clarity." },
            ],
            steps: [
              { part: "a", reasoning: "It is a required formal element on the title page.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It helps the reader identify the research focus.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A precise title supports coherence across the essay.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It can clarify the relationship between topic and RQ.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It may strengthen the framework under Criterion A.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The title should be crafted after the final focus is known.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It should be reviewed whenever the RQ changes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: the title is brief but consequential.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A strong title clarifies focus and supports assessment; revise it with the RQ.",
            commonErrors: ["Writing the title early and never updating it."],
          },
        },
      ],
    },
    {
      id: "ee-u1-scope-definition",
      title: "Defining appropriate scope",
      skill: "Set boundaries for the essay that balance focus with sufficient coverage.",
      lesson: {
        sections: [
          {
            heading: "What scope includes",
            body: "Scope defines the boundaries: time period, geographic region, key actors, specific aspect. A history essay on 'the causes of the French Revolution' might scope to 'economic causes in France 1787–1789' — narrow enough for depth, broad enough for evidence.",
          },
          {
            heading: "What scope excludes",
            body: "Explicitly acknowledge what you are not covering: other causes, other periods, other regions. This shows awareness of the topic's breadth and prevents the essay from seeming incomplete. Limitations (word count, source access) are also part of scope.",
          },
          {
            heading: "Scope and the word count",
            body: "4000 words is both generous and limiting. A topic needing 20000 words must be narrowed; a topic needing 500 words must be broadened. Scope should be set early and revisited as research progresses — you may need to adjust boundaries.",
          },
        ],
        keyFormulas: [
          { name: "Scope elements", statement: "Time + geography + actors + aspect = defined scope" },
          { name: "Word count test", statement: "Does the scope fit within 4000 words?" },
        ],
        workedExample: {
          problem: "Scope an essay on 'the impact of the printing press'.",
          solution: "Scope to 'the impact of Gutenberg's press on religious reform in Germany 1450–1550' — specifies technology, region, period, and outcome, fitting within 4000 words.",
        },
      },
      questions: [
        {
          id: "ee-u1-l13c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Scope in an EE refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The boundaries of what will be covered" },
              { id: "b", text: "The word count limit" },
              { id: "c", text: "The essay's structure" },
              { id: "d", text: "The list of sources" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scope", statement: "The boundaries of the essay — what will and will not be covered." },
            ],
            steps: [
              { reasoning: "Scope defines boundaries of coverage.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The boundaries of what will be covered",
            commonErrors: ["Confusing scope with word count or structure."],
          },
        },
        {
          id: "ee-u1-l13c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why acknowledging limitations is important in an EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limitations acknowledgment", statement: "Acknowledging limits shows intellectual honesty and prevents overclaiming." },
            ],
            steps: [
              { reasoning: "Limitations (word count, sources, time) constrain what can be claimed.", marks: 1, markCode: "M" },
              { reasoning: "Acknowledging them prevents the essay from overreaching.", marks: 1, markCode: "M" },
              { reasoning: "It also shows awareness of the topic's broader context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acknowledging limitations shows honesty, prevents overclaiming and demonstrates awareness of context.",
            commonErrors: ["Ignoring limitations or claiming more than the evidence supports."],
          },
        },
        {
          id: "ee-u1-l13c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that scope should be fixed before research begins.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Flexible scope", statement: "Scope should be set early but adjusted as research reveals new information." },
            ],
            steps: [
              { reasoning: "For: early scope prevents wasted effort on irrelevant areas.", marks: 1, markCode: "M" },
              { reasoning: "Against: research may reveal the scope is too narrow or too broad.", marks: 1, markCode: "M" },
              { reasoning: "Rigid scope can exclude relevant evidence discovered later.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: set initial scope but remain flexible to adjust based on findings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scope should be defined early but adjusted as research reveals new information — flexibility within boundaries.",
            commonErrors: ["Treating scope as completely fixed or completely flexible."],
          },
        },
        {
          id: "ee-u1-l13c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to define appropriate scope for an EE.",
          parts: [
            { label: "a", prompt: "List four elements of scope definition.", marks: 2 },
            { label: "b", prompt: "Explain how word count affects scope.", marks: 3 },
            { label: "c", prompt: "Evaluate the risks of poorly defined scope.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scope definition", statement: "Scope balances focus with coverage within the word limit." },
            ],
            steps: [
              { part: "a", reasoning: "Time period, geography, actors, aspect.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All four elements listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "4000 words requires narrow enough scope for depth.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Too broad = superficial; too narrow = insufficient evidence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Scope must be revisited as research progresses.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Too broad: superficial coverage, lost focus.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Too narrow: insufficient evidence, limited argument.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: scope must be actively managed throughout.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Time, geography, actors, aspect. (b) Word count requires focus. (c) Risks: superficial or insufficient.",
            commonErrors: ["Defining scope once and never revisiting it."],
          },
        },
        {
          id: "ee-u1-l13c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Scope in an EE defines:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the sources used" },
              { id: "b", text: "The grading criteria" },
              { id: "c", text: "Only the word count" },
              { id: "d", text: "What will and will not be covered" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scope", statement: "Scope sets the boundaries of coverage for the essay." },
            ],
            steps: [
              { reasoning: "Scope includes and excludes material deliberately.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** What will and will not be covered",
            commonErrors: ["Confusing scope with word count or bibliography."],
          },
        },
        {
          id: "ee-u1-l13c2q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the best set of scope elements for an EE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time period, place or context, key actors and specific aspect" },
              { id: "b", text: "Personal interests and popular opinion" },
              { id: "c", text: "Title, grade, supervisor and deadline" },
              { id: "d", text: "All possible sources and all possible methods" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scope elements", statement: "Bound scope by time, geography or context, actors and aspect." },
            ],
            steps: [
              { reasoning: "These elements create a bounded research case.", marks: 1, markCode: "M" },
              { reasoning: "They support depth within 4000 words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Time, place/context, actors, aspect",
            commonErrors: ["Using vague boundaries such as 'modern times'."],
          },
        },
        {
          id: "ee-u1-l13c2q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should an EE explicitly acknowledge exclusions and limitations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To avoid using sources" },
              { id: "b", text: "To replace the research question" },
              { id: "c", text: "To make the essay longer" },
              { id: "d", text: "To show the boundaries of evidence and prevent overclaiming" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limitations", statement: "Acknowledging limits shows intellectual honesty and defines valid claims." },
            ],
            steps: [
              { reasoning: "Exclusions clarify what the evidence cannot support.", marks: 1, markCode: "M" },
              { reasoning: "Limitations prevent claims beyond the data.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Boundaries and honest claims",
            commonErrors: ["Treating limitations as weaknesses rather than part of rigour."],
          },
        },
        {
          id: "ee-u1-l13c2q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A topic would require detailed coverage of 30 countries over 100 years. What should the student do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduce countries, period or comparison to fit 4000 words" },
              { id: "b", text: "Write a shorter introduction and keep the scope" },
              { id: "c", text: "Add a second research question" },
              { id: "d", text: "Remove the conclusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Word-count scope", statement: "Scope must fit the evidence and analysis possible within 4000 words." },
            ],
            steps: [
              { reasoning: "The proposed coverage exceeds the word limit.", marks: 1, markCode: "M" },
              { reasoning: "Reducing cases preserves analytical depth.", marks: 1, markCode: "M" },
              { reasoning: "It also strengthens Criterion A focus.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Narrow the scope to fit the word count",
            commonErrors: ["Assuming breadth proves thoroughness."],
          },
        },
        {
          id: "ee-u1-l13c2q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which revision best improves a scope statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'This essay covers everything important about cities.'" },
              { id: "b", text: "'This essay may discuss any topic if sources allow.'" },
              { id: "c", text: "'This essay examines green-space planning in Rotterdam between 1990 and 2015 and excludes transport policy.'" },
              { id: "d", text: "'This essay avoids all limitations.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scope statement", statement: "A strong scope names included boundaries and relevant exclusions." },
            ],
            steps: [
              { reasoning: "The correct option specifies place, period and issue.", marks: 1, markCode: "M" },
              { reasoning: "It also names an exclusion.", marks: 1, markCode: "M" },
              { reasoning: "It avoids vague claims of covering everything.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Specific coverage and exclusions",
            commonErrors: ["Writing scope as a promise to cover everything."],
          },
        },
        {
          id: "ee-u1-l13c2q10",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the main components of EE scope.",
          parts: [
            { label: "a", prompt: "Name two included-boundary elements.", marks: 2 },
            { label: "b", prompt: "Name two exclusion or limitation elements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scope components", statement: "Scope includes coverage boundaries and acknowledged exclusions or limits." },
            ],
            steps: [
              { part: "a", reasoning: "Time period and place or context define coverage.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Actors and aspect define what is analysed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Excluded topics or periods clarify boundaries.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Word count, time and source access are limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Include time/place/actors/aspect; acknowledge exclusions and practical limits.",
            commonErrors: ["Listing only what is covered and never what is excluded."],
          },
        },
        {
          id: "ee-u1-l13c2q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "Set an appropriate scope for an EE on the printing press.",
          parts: [
            { label: "a", prompt: "Choose a bounded topic.", marks: 2 },
            { label: "b", prompt: "State included boundaries.", marks: 2 },
            { label: "c", prompt: "State one exclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Scope setting", statement: "Bound technology, region, period and outcome for a feasible essay." },
            ],
            steps: [
              { part: "a", reasoning: "For example, study Gutenberg's press and religious reform in Germany.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The topic specifies technology, outcome and place.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Include Germany, 1450-1550 and religious reform debates.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This is narrow enough for source analysis in 4000 words.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exclude other European regions and non-religious effects.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The exclusion prevents unnecessary breadth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specify technology, region, period and outcome; exclude other cases.",
            commonErrors: ["Covering all printing effects across Europe."],
          },
        },
        {
          id: "ee-u1-l13c2q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain how scope supports the research question.",
          parts: [
            { label: "a", prompt: "Define the relationship.", marks: 2 },
            { label: "b", prompt: "Give one example of alignment.", marks: 2 },
            { label: "c", prompt: "Explain a mismatch risk.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "RQ-scope alignment", statement: "Scope operationalises the question's boundaries." },
            ],
            steps: [
              { part: "a", reasoning: "The RQ asks the question; scope defines what evidence can answer it.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They should match in time, place, actors and aspect.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A question on Berlin jazz and a scope limited to 1920-1929 align.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both exclude later developments.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "If scope is wider, the essay may become unfocused.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "If narrower, it may lack evidence for the question.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scope must match the RQ so evidence can answer it within the word limit.",
            commonErrors: ["Writing a narrow question but researching a broad field."],
          },
        },
        {
          id: "ee-u1-l13c2q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how scope affects assessment under the 2027 criteria.",
          parts: [
            { label: "a", prompt: "Explain the effect on Criterion A.", marks: 2 },
            { label: "b", prompt: "Explain the effect on Criteria B and C.", marks: 3 },
            { label: "c", prompt: "Explain the effect on Criterion D.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scope and criteria", statement: "Scope determines whether the question can be answered with depth and evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A rewards a question focused within the essay's scope.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear boundaries support the framework.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Good scope enables relevant sources for Criterion B.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It lets analysis stay focused under Criterion C.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Poor scope disperses evidence and argument.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Criterion D needs enough cases or perspectives to discuss.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Overly narrow scope can prevent meaningful evaluation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: scope must balance focus with evaluative range.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scope shapes focus, evidence, analysis and evaluation across the criteria.",
            commonErrors: ["Thinking scope affects only organisation, not assessment."],
          },
        },
        {
          id: "ee-u1-l13c2q14",
          difficulty: "core",
          totalMarks: 6,
          stem: "Adjust the scope of an EE when new evidence changes the research.",
          parts: [
            { label: "a", prompt: "State when adjustment is justified.", marks: 2 },
            { label: "b", prompt: "Describe one widening option.", marks: 2 },
            { label: "c", prompt: "Describe one narrowing option.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Scope adjustment", statement: "Adjust scope when evidence shows the current boundaries are wrong." },
            ],
            steps: [
              { part: "a", reasoning: "Adjust when sources are insufficient or unexpectedly rich.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Also adjust when the question itself changes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Widen slightly to include another relevant period or case.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ensure the added material still serves the question.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Narrow by removing an aspect that lacks evidence.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Keep the remaining case deep enough for analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adjust scope only when evidence or the question justifies it, then re-test focus.",
            commonErrors: ["Changing scope randomly to match whatever sources are easiest."],
          },
        },
        {
          id: "ee-u1-l13c2q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the risks of poorly defined scope.",
          parts: [
            { label: "a", prompt: "Explain the risk of over-broad scope.", marks: 2 },
            { label: "b", prompt: "Explain the risk of over-narrow scope.", marks: 3 },
            { label: "c", prompt: "Reach a judgement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scope risk", statement: "Poor scope causes superficiality, weak evidence or unfocused argument." },
            ],
            steps: [
              { part: "a", reasoning: "Over-broad scope produces description and lost focus.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It undermines Criterion A and later analysis.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Over-narrow scope may lack enough evidence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It can prevent discussion and evaluation under Criterion D.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It may make claims impossible to support.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Scope should be reviewed as research develops.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It should be specific enough for depth but flexible enough for evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: scope is an active control, not a fixed label.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Poor scope causes superficiality or weak evidence; manage it actively.",
            commonErrors: ["Defining scope once and ignoring later evidence."],
          },
        },
        {
          id: "ee-u1-l13c2q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Create a scope-management plan for an EE.",
          parts: [
            { label: "a", prompt: "State the initial scope elements.", marks: 2 },
            { label: "b", prompt: "List three review points.", marks: 3 },
            { label: "c", prompt: "Explain how the plan supports assessment.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Scope management", statement: "Set, test and revise scope so the RQ can be answered within 4000 words." },
            ],
            steps: [
              { part: "a", reasoning: "Define time, place or context, actors and aspect.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Note exclusions and practical limitations.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Review after preliminary reading.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Review after source collection.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Review before the final draft.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It protects Criterion A focus.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It supports Criteria B-D by matching evidence to argument.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: managed scope is essential to coherent assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Set initial boundaries, review at key stages and align scope with evidence and word count.",
            commonErrors: ["Treating scope as separate from the research question."],
          },
        },
      ],
    },
  ],
};
