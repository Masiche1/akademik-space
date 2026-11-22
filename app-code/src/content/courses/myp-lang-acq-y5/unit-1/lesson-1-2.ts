import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mla5-u1-lesson-1-2",
  code: "1-2",
  title: "Reading Research Reports and Complex Texts",
  goal: "I CAN interpret research reports, evaluate methodology and claims, follow complex argument structures and identify how evidence is used to support a position.",
  standards: [
    "MYP Language Acquisition",
    "Criterion B: Reading",
    "Criterion C: Speaking",
    "Criterion D: Writing",
  ],
  vocabulary: [
    { term: "Abstract", definition: "A short summary of a research report's purpose, method, results and conclusion." },
    { term: "Methodology", definition: "The way research is designed and carried out, including sample, procedure and analysis." },
    { term: "Correlation", definition: "A relationship between two variables; it does not by itself prove cause." },
    { term: "Sample", definition: "The group of people, texts or data used in a study." },
    { term: "Validity", definition: "The degree to which a study measures what it claims to measure." },
  ],
  concepts: [
    {
      id: "mla5-u1-research-structure",
      title: "Research report structure",
      skill: "Use headings, abstracts and paragraph logic to navigate and summarise research texts.",
      lesson: {
        sections: [
          {
            heading: "Anatomy of a report",
            body: "Research reports often move from **context** to **aim**, **method**, **findings** and **conclusion**. The **abstract** condenses this structure, so read it first. Then use headings and topic sentences to identify what each section contributes.",
          },
          {
            heading: "Paragraph logic",
            body: "Academic paragraphs usually make one main point, support it with evidence and may qualify it. Look for **topic sentences**, **linking words** ('furthermore', 'in contrast', 'as a result') and **evaluative verbs** ('demonstrates', 'suggests', 'indicates', 'implies'). These reveal the writer's reasoning rather than just the information.",
          },
          {
            heading: "Complex sentences",
            body: "MYP 5 texts use subordination and embedding. Break long sentences at conjunctions and punctuation: 'Although the sample was limited, which may affect validity, the results were consistent.' Ask: What is the main claim? What is subordinate? What is conceded? This prevents losing the argument in the syntax.",
          },
        ],
        keyFormulas: [
          { name: "Report sequence", statement: "Context -> Aim -> Method -> Findings -> Conclusion" },
          { name: "Paragraph signals", statement: "Topic sentence + evidence + qualification" },
        ],
        workedExample: {
          problem: "A report says: 'Although the survey covered only one city, the results were consistent across all schools.' What is main and subordinate?",
          solution: "Main point: results were consistent. Subordinate concession: survey covered only one city, affecting generalisability.",
        },
      },
      questions: [
        {
          id: "mla5-u1-research-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of an abstract in a research report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To list every citation used" },
              { id: "b", text: "To define technical terms" },
              { id: "c", text: "To persuade readers emotionally" },
              { id: "d", text: "To provide a concise summary of the study" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Abstract", statement: "A concise summary of purpose, method, findings and conclusion." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — abstract = concise summary.", working: "summary", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To provide a concise summary of the study",
            commonErrors: ["Confusing an abstract with a bibliography."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-research-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "The aim of this study was to examine whether peer tutoring improves reading confidence. Participants were 120 students aged 14-16. Tutors received four hours of training, and sessions were observed over eight weeks. Although attendance varied, students reported greater willingness to read aloud, and teachers noted more engagement in class.",
          },
          stem: "Identify the aim, the sample and one limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report navigation", statement: "Locate aim, method/sample and qualifications." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — aim: whether peer tutoring improves reading confidence.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — sample: 120 students aged 14-16.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — limitation: attendance varied.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Aim: peer tutoring and reading confidence; sample: 120 students aged 14-16; limitation: variable attendance.",
            commonErrors: ["Missing the attendance qualification."],
            examinerNote: "Each element must be explicit in the extract.",
          },
        },
        {
          id: "mla5-u1-research-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Research Findings",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "The data show a modest improvement in reading scores after twelve weeks of tutoring. Importantly, the gain was largest among students who attended at least eight sessions. This suggests that consistency, rather than exposure alone, may be the decisive factor. Nevertheless, because the study was conducted in one school, its findings cannot be assumed to apply universally.",
          },
          stem: "Explain how the writer qualifies the findings and what generalisation is avoided.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Qualified generalisation", statement: "Hedging and limitation statements limit claims." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'modest improvement' limits the size of the claim.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'may be the decisive factor' hedges the causal claim.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — single-school setting is stated as a limitation.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — avoids claiming universal applicability.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "The writer limits the claim through 'modest', 'may' and the single-school caveat; no universal generalisation is made.",
            commonErrors: ["Saying tutoring definitely improves all students."],
            examinerNote: "Must identify hedging and external-validity limitation.",
          },
        },
        {
          id: "mla5-u1-research-structure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Mini-Report: Digital Note-Taking",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "Aim: To investigate whether digital note-taking affects retention.\n\nMethod: Forty students were divided into two groups. Group A used paper notes; Group B used tablets. Both groups listened to the same lecture and completed a recall test one week later.\n\nFindings: Group A recalled 68% of key ideas compared with 54% for Group B. Interview data suggested that tablet users were more likely to transcribe slides verbatim.\n\nConclusion: The results indicate that paper note-taking may support deeper processing, although device preference and typing skill were not controlled.",
          },
          stem: "Read the report and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the research aim.", marks: 1 },
            { label: "b", prompt: "Describe the method in two sentences.", marks: 2 },
            { label: "c", prompt: "Give the main finding and the proposed explanation.", marks: 2 },
            { label: "d", prompt: "Write a 70-90 word evaluation of the report's reliability.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Research evaluation", statement: "Summarise method/findings and evaluate controls and generalisability." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — aim: effect of digital note-taking on retention.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — two groups compared after the same lecture and recall test.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — method details are accurate and concise.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — paper group recalled 68% versus 54%.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — explanation: verbatim transcription may reduce processing.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — identifies uncontrolled variables: device preference and typing skill.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — balanced, academic evaluation.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion is cautious and within the word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) digital notes and retention (b) two groups, lecture, recall test (c) paper higher; verbatim transcription (d) reliable but limited controls.",
            commonErrors: ["Claiming proof of causation despite uncontrolled variables."],
            examinerNote: "(d) should note both design strength and limitation.",
          },
        },
        {
          id: "mla5-u1-research-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of a topic sentence in an academic paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To list all the evidence" },
              { id: "b", text: "To summarise the whole report" },
              { id: "c", text: "To provide a quotation" },
              { id: "d", text: "To state the paragraph's main point" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "The sentence that states a paragraph's main point." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — topic sentence = main point of the paragraph.", working: "main point", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To state the paragraph's main point",
            commonErrors: ["Confusing topic sentence with evidence or conclusion."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-research-structure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In academic writing, what relationship does the connector 'furthermore' usually signal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contrast" },
              { id: "b", text: "Concession" },
              { id: "c", text: "Cause and effect" },
              { id: "d", text: "Addition" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Additive connector", statement: "'Furthermore' adds information to the previous point." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'furthermore' adds a further point.", working: "addition", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Addition",
            commonErrors: ["Confusing additive and contrastive connectors."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-research-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "Sentence 1: 'The study examined whether music improves concentration.' Sentence 2: 'Forty participants completed timed tasks while listening to different genres.' Sentence 3: 'Results were mixed, and the authors caution that the sample was small.'",
          },
          stem: "Which sentence is the topic sentence of this paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All three equally" },
              { id: "b", text: "Sentence 2" },
              { id: "c", text: "Sentence 3" },
              { id: "d", text: "Sentence 1" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph logic", statement: "The topic sentence states the main point; later sentences support or qualify it." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Sentence 1 states the aim/main point.", working: "sentence 1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sentence 1",
            commonErrors: ["Choosing the method or results sentence instead of the main point."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla5-u1-research-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Abstract",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "This abstract outlines the purpose, method, sample, findings and limitations of a study on adolescent sleep.",
          },
          stem: "How many components of a research report does the abstract mention?",
          response: {
            type: "numeric",
            parts: [{ label: "Components", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Abstract components", statement: "An abstract typically covers purpose, method, findings and conclusion." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — count purpose, method, sample, findings, limitations = 5.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting 'study' or 'adolescent' as components."],
            examinerNote: "Accept 5.",
          },
        },
        {
          id: "mla5-u1-research-structure-q9",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Findings Paragraph",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "The data show a modest improvement in reading scores after twelve weeks. Importantly, the gain was largest among students who attended most sessions. Nevertheless, because the study was conducted in one school, its findings cannot be assumed to apply universally.",
          },
          stem: "Identify the main point, one piece of evidence and one qualification in this paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph analysis", statement: "Separate main point, supporting detail and qualification." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main point: modest improvement in reading scores.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — evidence: largest gain among frequent attenders.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — qualification: single-school setting limits generalisability.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Main point: modest improvement; evidence: larger gains for frequent attenders; qualification: single-school limit.",
            commonErrors: ["Treating the qualification as the main point."],
            examinerNote: "All three elements required.",
          },
        },
        {
          id: "mla5-u1-research-structure-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Complex Sentence",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "Although the sample was limited, which may affect validity, the results were consistent across all schools.",
          },
          stem: "What is the main claim of this sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The study had no limitations" },
              { id: "b", text: "Validity was perfectly ensured" },
              { id: "c", text: "The sample was large" },
              { id: "d", text: "The results were consistent across all schools" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clause analysis", statement: "In 'Although X, Y', the main claim is the clause after the comma." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'the results were consistent' is the main clause; 'although the sample was limited' is conceded.", working: "main clause", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The results were consistent across all schools",
            commonErrors: ["Choosing the conceded clause ('sample was limited') as the main claim."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-research-structure-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Findings Sentence",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "While the intervention improved attendance in the short term, the authors caution that the effect may fade without continued support, which suggests that sustainability is the real challenge.",
          },
          stem: "Break down the sentence: identify the concession, the qualification and the final implication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complex sentence analysis", statement: "Subordinate clauses carry concession, qualification and implication." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — concession: improved attendance in the short term.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — qualification: 'may fade without continued support'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — implication: 'sustainability is the real challenge'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — explains the relationship between short-term gain and long-term risk.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Short-term gain conceded; effect may fade; sustainability is the real challenge.",
            commonErrors: ["Missing the embedded 'which suggests' clause."],
            examinerNote: "All three structural elements required.",
          },
        },
        {
          id: "mla5-u1-research-structure-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Discussion Paragraph",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "The results were promising; furthermore, the effect held across different age groups. However, the sample was drawn from one region, as a result the findings may not generalise.",
          },
          stem: "How many additive connectors and how many contrastive or causal connectors appear?",
          response: {
            type: "numeric",
            parts: [
              { label: "Additive connectors", answer: 1 },
              { label: "Contrastive or causal connectors", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Connector identification", statement: "Classify connectors by logical relationship." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — additive: 'furthermore' = 1.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'however' (contrast) and 'as a result' (cause) = 2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1 additive; 2 contrastive/causal.",
            commonErrors: ["Counting 'the' or 'and' as connectors."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u1-research-structure-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Report Sequence",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "A typical report moves through context, aim, method, findings and conclusion — five stages in total.",
          },
          stem: "How many stages does the typical report sequence contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Stages", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report sequence", statement: "Context -> Aim -> Method -> Findings -> Conclusion." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — context, aim, method, findings, conclusion = 5.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Forgetting one stage such as 'aim'."],
            examinerNote: "Accept 5.",
          },
        },
        {
          id: "mla5-u1-research-structure-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A report says 'the data prove the treatment works'. Which verb would be more cautious and accurate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "guess" },
              { id: "b", text: "suggest" },
              { id: "c", text: "shout" },
              { id: "d", text: "prove" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluative verbs", statement: "'Suggest' is more cautious than 'prove' when evidence is limited." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'suggest' hedges the claim appropriately.", working: "suggest", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** suggest",
            commonErrors: ["Keeping 'prove', which overstates the evidence."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-research-structure-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Mini-Report: School Libraries",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "Aim: To examine whether extended library hours affect borrowing.\n\nMethod: Three schools extended opening hours for one term; borrowing records were compared with the previous term.\n\nFindings: Borrowing rose by 18%, concentrated in fiction. Interview data suggested students valued evening access.\n\nConclusion: The results indicate that extended hours may support reading, although the study covered only one term and three schools.",
          },
          stem: "Read the report and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the research aim.", marks: 1 },
            { label: "b", prompt: "Describe the method in two sentences.", marks: 2 },
            { label: "c", prompt: "Give the main finding and one proposed explanation.", marks: 2 },
            { label: "d", prompt: "Write a 70-90 word evaluation of the report's reliability.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Research evaluation", statement: "Summarise method/findings and evaluate controls and generalisability." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — aim: effect of extended library hours on borrowing.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — three schools extended hours; borrowing compared across terms.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — method details are accurate and concise.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — borrowing rose 18%, mostly fiction.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — explanation: students valued evening access.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — identifies limitations: one term and only three schools.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — balanced, academic evaluation.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion is cautious and within the word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) library hours and borrowing (b) three schools, term comparison (c) 18% rise, evening access (d) reliable but limited scope.",
            commonErrors: ["Claiming proof of causation despite limited scope."],
            examinerNote: "(d) should note both design strength and limitation.",
          },
        },
        {
          id: "mla5-u1-research-structure-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Findings Sentence",
            author: "Written for Akademik Space",
            source: "Research reading practice",
            text: "The authors write that the results 'may be partly explained by' differences in prior attainment.",
          },
          stem: "What does the phrase 'may be partly explained by' signal about the strength of the claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Certain proof" },
              { id: "b", text: "A personal opinion" },
              { id: "c", text: "Cautious, partial explanation" },
              { id: "d", text: "Complete rejection of the idea" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hedged causation", statement: "'May be partly' limits both certainty and completeness of the explanation." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'may' and 'partly' hedge the causal claim.", working: "hedged", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Cautious, partial explanation",
            commonErrors: ["Reading hedged causation as definitive proof."],
            examinerNote: "B1 for (b).",
          },
        },
      ],
    },
    {
      id: "mla5-u1-critical-sources",
      title: "Evaluating sources and evidence",
      skill: "Judge credibility, purpose and bias in academic and media sources and explain how evidence selection shapes an argument.",
      lesson: {
        sections: [
          {
            heading: "Source credibility",
            body: "Ask four questions: **Who** produced the source? What is their **expertise**? What is their **purpose**? What **evidence** do they provide? Academic sources usually give methods and citations; journalism gives attribution; advocacy sources often select evidence to support a campaign.",
          },
          {
            heading: "Evidence selection",
            body: "A persuasive text may be factually accurate yet misleading because of **selection**. If only supportive studies are cited, important counter-evidence may be omitted. Check whether the writer acknowledges limitations, alternative explanations and opposing views. Balanced argument often signals stronger reasoning.",
          },
          {
            heading: "Authority and context",
            body: "Authority depends on context. A medical claim needs clinical evidence; a cultural claim needs community voices; a policy claim needs implementation data. Do not accept a title alone — check whether the source's method matches the claim's scope. 'Experts say' is weak unless the experts and their findings are named.",
          },
        ],
        keyFormulas: [
          { name: "Source questions", statement: "Who / expertise / purpose / evidence" },
          { name: "Credibility checks", statement: "Method matches claim; limitations acknowledged; opposing views considered" },
        ],
        workedExample: {
          problem: "A website says 'Studies prove this diet works' but names no studies and cites only testimonials. Is it credible?",
          solution: "No — vague authority, no named evidence and testimonial bias make the claim unreliable.",
        },
      },
      questions: [
        {
          id: "mla5-u1-critical-sources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question is most important when evaluating a source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who produced it, why, and what evidence supports its claims" },
              { id: "b", text: "Whether the website looks modern" },
              { id: "c", text: "Whether it uses long words" },
              { id: "d", text: "Whether it agrees with personal opinion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source evaluation", statement: "Credibility depends on author, purpose and evidence." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — author, purpose and evidence are core checks.", working: "author-purpose-evidence", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Who produced it, why, and what evidence supports its claims",
            commonErrors: ["Judging credibility by appearance or agreement."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-critical-sources-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Sources",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "Source A: A peer-reviewed journal article reports a controlled trial of 400 participants, describes its method and lists limitations.\n\nSource B: A company blog claims its product 'boosts concentration' and cites customer reviews but no independent study.",
          },
          stem: "Compare the reliability of the two sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source comparison", statement: "Peer review and method make Source A more reliable; commercial bias weakens Source B." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Source A is more reliable due to peer review, control and method.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Source B has commercial purpose and relies on reviews.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Source B lacks independent evidence for the claim.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A is more reliable; B is commercially biased and lacks independent evidence.",
            commonErrors: ["Assuming a confident claim is equivalent to evidence."],
            examinerNote: "Comparison must address both sources.",
          },
        },
        {
          id: "mla5-u1-critical-sources-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Opinion Piece Excerpt",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "The author argues that social media harms teenagers by citing three viral stories of cyberbullying. She acknowledges that social media can support communities, but she gives no data on frequency, duration or comparison with offline harm. Her conclusion calls for stricter regulation, yet the proposed measures are not examined for unintended consequences.",
          },
          stem: "Evaluate the strength of the argument and identify two weaknesses in its evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument critique", statement: "Emotive examples and missing comparisons weaken evidence." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — weakness 1: only three viral stories, not representative data.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — weakness 2: no frequency, duration or comparison with offline harm.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — acknowledges benefit but does not weigh it systematically.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — conclusion recommends regulation without evaluating consequences.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "The argument is emotionally persuasive but weak: anecdotal evidence, missing comparisons and unexamined policy consequences.",
            commonErrors: ["Rejecting the claim entirely instead of evaluating evidence quality."],
            examinerNote: "Must evaluate evidence, not simply agree or disagree.",
          },
        },
        {
          id: "mla5-u1-critical-sources-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Case Study: School Uniforms",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "Source 1: A school newsletter says uniforms improve discipline because 'students look smart and behave better'. It gives no data.\n\nSource 2: A university study compares 30 schools with and without uniforms. It finds no significant difference in behaviour but reports slightly higher reported belonging in uniformed schools. The study notes cultural differences may affect results.\n\nSource 3: A parent petition claims uniforms reduce bullying and inequality. It presents testimonials but no controlled evidence.",
          },
          stem: "Read the sources and complete the tasks.",
          parts: [
            { label: "a", prompt: "Rank the three sources from most to least reliable for this question.", marks: 2 },
            { label: "b", prompt: "Give one strength and one weakness of the university study.", marks: 2 },
            { label: "c", prompt: "Why might the newsletter's claim be persuasive but unreliable?", marks: 2 },
            { label: "d", prompt: "Write a 80-100 word conclusion about what can reasonably be claimed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence synthesis", statement: "Rank credibility, assess method and state cautious conclusions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — ranking: university study, petition, newsletter.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — justified by evidence type and bias.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — strength: comparative design and cultural caveat.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — weakness: limited sample/context and self-reported belonging.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — newsletter uses confident causal language without data.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — persuasive because it offers a simple explanation.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion states limited support for belonging and no clear behavioural effect.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion is evidence-based and appropriately cautious.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Most reliable: study; least: newsletter. Study shows weak support for belonging, not discipline; newsletter is unsupported.",
            commonErrors: ["Treating the petition as stronger than the study because it matches common views."],
            examinerNote: "(d) must be cautious and evidence-based.",
          },
        },
        {
          id: "mla5-u1-critical-sources-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which source would generally be most credible for a scientific claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An anonymous social media post" },
              { id: "b", text: "A celebrity's personal blog" },
              { id: "c", text: "A company advertisement" },
              { id: "d", text: "A peer-reviewed journal article" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source credibility", statement: "Peer review and stated methods increase credibility." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — peer-reviewed journals apply expert scrutiny and report methods.", working: "peer review", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A peer-reviewed journal article",
            commonErrors: ["Choosing sources that are confident rather than checked."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-critical-sources-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is the phrase 'experts say' weak evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It does not name the experts or their findings" },
              { id: "b", text: "It is always false" },
              { id: "c", text: "It uses too few words" },
              { id: "d", text: "It is too polite" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Authority checking", statement: "Vague authority is weak unless experts and evidence are named." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'experts say' gives no names, methods or findings to verify.", working: "vague authority", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It does not name the experts or their findings",
            commonErrors: ["Assuming 'experts' implies reliable evidence."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-critical-sources-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Source Description",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "Source B is published by a company that sells the product it praises. It claims the product 'boosts concentration' and cites only customer reviews.",
          },
          stem: "What is the likely purpose of Source B?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To debate competitors" },
              { id: "b", text: "To persuade customers to buy the product" },
              { id: "c", text: "To criticise the product" },
              { id: "d", text: "To inform neutral research" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose detection", statement: "Commercial sources typically aim to persuade rather than inform." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — seller-authored praise plus reviews indicates promotional purpose.", working: "promotion", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To persuade customers to buy the product",
            commonErrors: ["Ignoring the conflict of interest created by the seller."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-critical-sources-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Three Sources",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "Source A: journal article describing a controlled trial of 400 participants. Source B: company blog citing customer reviews only. Source C: newspaper report quoting a named university study with sample size and method.",
          },
          stem: "How many of the three sources provide named data or a described method?",
          response: {
            type: "numeric",
            parts: [{ label: "Sources with data or method", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence checking", statement: "Named studies with method or data are stronger than testimonials." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Source A (controlled trial) and Source C (named study) qualify; B does not.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the blog because it is confident."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u1-critical-sources-q9",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Sources",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "Source A: 'The trial included a control group, random assignment and a stated limitation: results may not apply to younger students.' Source B: 'Our product is scientifically proven to work for everyone.'",
          },
          stem: "Compare the evidence quality of the two sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence comparison", statement: "Method plus acknowledged limitations beats vague claims of proof." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Source A gives method (control, randomisation) and a limitation.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Source B offers 'scientifically proven' with no data or method.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — conclusion: A is more reliable; B's claim is unverifiable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A is more credible; B makes an unverifiable absolute claim.",
            commonErrors: ["Assuming 'scientifically proven' equals scientific evidence."],
            examinerNote: "Comparison must address both sources.",
          },
        },
        {
          id: "mla5-u1-critical-sources-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Argument Excerpt",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "The writer argues that exams are unfair. She cites one student's complaint and ignores studies showing exams predict later success. She also omits any mention of alternative assessments.",
          },
          stem: "Which omission most weakens the writer's argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Citing a student's complaint" },
              { id: "b", text: "Using the word 'unfair'" },
              { id: "c", text: "Discussing assessment at all" },
              { id: "d", text: "Ignoring evidence that exams predict success and omitting alternatives" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Selection bias", statement: "Omitting counter-evidence weakens an argument's reliability." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — ignoring contrary studies and alternatives creates one-sided selection.", working: "selection bias", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ignoring evidence that exams predict success and omitting alternatives",
            commonErrors: ["Focusing on the anecdote rather than the missing counter-evidence."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-critical-sources-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Opinion Piece",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "The author argues that homework should be abolished. He cites three stories of stressed students, acknowledges that some students benefit from practice, but offers no data on how many students fall into each group. His proposal to replace homework with free study offers no evidence that it would work either.",
          },
          stem: "Evaluate the strength of the argument and identify two weaknesses in its evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument critique", statement: "Anecdotes without data and unevidenced alternatives weaken arguments." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — weakness 1: only three stories, not representative data.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — weakness 2: no data on how many students benefit or are harmed.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — acknowledges a counter-case but does not weigh it.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — proposed alternative is itself unsupported by evidence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Persuasive but weak: anecdotal evidence, no group data, and an unevidenced alternative proposal.",
            commonErrors: ["Rejecting the claim entirely rather than evaluating evidence quality."],
            examinerNote: "Must evaluate evidence, not simply agree or disagree.",
          },
        },
        {
          id: "mla5-u1-critical-sources-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Source Survey",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "Of six sources surveyed: two cite peer-reviewed studies, two rely on customer testimonials, one quotes a named expert, and one gives no evidence at all.",
          },
          stem: "How many sources rely on independent evidence (studies or named experts), and how many rely on testimonials or none?",
          response: {
            type: "numeric",
            parts: [
              { label: "Sources with independent evidence", answer: 3 },
              { label: "Sources with testimonials or no evidence", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence categorisation", statement: "Independent studies and named experts count as stronger evidence than testimonials." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — two peer-reviewed studies plus one named expert = 3.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — two testimonial sources plus one with no evidence = 3.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 with independent evidence; 3 with testimonials or none.",
            commonErrors: ["Counting testimonials as independent evidence."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u1-critical-sources-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Source Note",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "A journalist writes: 'A study proves that the new app improves memory.' The study is not named, no method is given, and the journalist's employer sells the app.",
          },
          stem: "How many credibility problems can you identify in this note?",
          response: {
            type: "numeric",
            parts: [{ label: "Credibility problems", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Credibility checks", statement: "Unnamed study, missing method and conflict of interest are credibility problems." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — unnamed study, no method, employer sells product = 3 problems.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Missing the conflict of interest."],
            examinerNote: "Accept 3.",
          },
        },
        {
          id: "mla5-u1-critical-sources-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "When evaluating a source, which question is most useful?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What evidence does it provide, and does the method match the claim?" },
              { id: "b", text: "Does it use impressive vocabulary?" },
              { id: "c", text: "Is it the longest source available?" },
              { id: "d", text: "Does it agree with what I already believe?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source questions", statement: "Who / purpose / evidence / method-match are core credibility checks." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — evidence quality and method-claim fit are the strongest checks.", working: "evidence/method", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** What evidence does it provide, and does the method match the claim?",
            commonErrors: ["Judging by agreement or appearance rather than evidence."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-critical-sources-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Case Study: Sleep Apps",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "Source 1: A sleep-app company blog states its app 'improves sleep by 40%' and shows user ratings.\n\nSource 2: A university study of 500 users finds modest improvement in sleep quality but notes the app was tested only on adults aged 20-35.\n\nSource 3: A health magazine article repeats the company's claim and quotes one satisfied customer.",
          },
          stem: "Read the sources and complete the tasks.",
          parts: [
            { label: "a", prompt: "Rank the three sources from most to least reliable.", marks: 2 },
            { label: "b", prompt: "Give one strength and one weakness of the university study.", marks: 2 },
            { label: "c", prompt: "Why is the magazine article less reliable than it appears?", marks: 2 },
            { label: "d", prompt: "Write an 80-100 word conclusion about what can reasonably be claimed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence synthesis", statement: "Rank credibility, assess method and state cautious conclusions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — ranking: university study, magazine, company blog.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — justified by evidence type and independence.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — strength: large sample of 500 and stated limitation.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — weakness: limited age range (20-35).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — repeats company claim without independent verification.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — relies on one testimonial rather than data.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion states modest, limited evidence for adults only.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion is evidence-based and appropriately cautious.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Most reliable: study; least: blog/magazine. Modest benefit shown for adults 20-35 only; claims of 40% are unsupported.",
            commonErrors: ["Treating the magazine as reliable because it is a magazine."],
            examinerNote: "(d) must be cautious and evidence-based.",
          },
        },
        {
          id: "mla5-u1-critical-sources-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Source Description",
            author: "Written for Akademik Space",
            source: "Critical literacy practice",
            text: "A research summary states: 'The effect was small, the sample limited, and the authors acknowledge that further replication is needed.'",
          },
          stem: "What does the acknowledgement of limitations suggest about the source's credibility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no effect on credibility" },
              { id: "b", text: "It makes the source less credible" },
              { id: "c", text: "It generally increases credibility by showing honesty" },
              { id: "d", text: "It proves the claim is false" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Honest limitation", statement: "Acknowledging limitations signals balanced, trustworthy reporting." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — admitting limits suggests the writer is not overstating claims.", working: "honesty", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It generally increases credibility by showing honesty",
            commonErrors: ["Assuming admitting weakness automatically means the claim is wrong."],
            examinerNote: "B1 for (b).",
          },
        },
      ],
    },
  ],
};
