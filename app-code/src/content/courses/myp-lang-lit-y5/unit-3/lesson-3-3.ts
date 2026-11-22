import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mll5-u3-lesson-3-3",
  code: "3-3",
  title: "Evaluating and Refining Texts",
  goal: "I CAN critically evaluate written texts and refine drafts through systematic revision.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
  ],
  vocabulary: [
    { term: "Evaluation", definition: "Judging quality against criteria — purpose, audience, structure, language." },
    { term: "Revision", definition: "Systematic improvement of a draft — content, structure, language, mechanics." },
    { term: "Peer review", definition: "Getting feedback from others to identify strengths and weaknesses." },
    { term: "Draft", definition: "A preliminary version of a text, subject to revision." },
    { term: "Rubric", definition: "A set of criteria used to assess quality — often with levels." },
  ],
  concepts: [
    {
      id: "mll5-u3-evaluating-texts",
      title: "Critical evaluation",
      skill: "Evaluate texts systematically using multiple criteria.",
      lesson: {
        sections: [
          {
            heading: "Multi-criteria evaluation",
            body: "Evaluate on: **purpose** (does it achieve aim?), **audience** (appropriate for readers?), **structure** (logical organization?), **language** (accurate, varied, appropriate?), **impact** (does it affect readers?). Each criterion needs **evidence**.",
          },
          {
            heading: "Evidence-based judgment",
            body: "Don't just say 'good' or 'bad' — cite **specific features**: 'The metaphor in paragraph 2 creates vivid imagery' or 'The lack of transitions makes paragraph 3 confusing'. Evaluation = judgment + criteria + evidence.",
          },
          {
            heading: "Balanced assessment",
            body: "Strong evaluations acknowledge **strengths and weaknesses**. 'The argument is well-structured but the evidence is thin.' Avoid one-sided praise or criticism — it lacks credibility. Balance shows critical thinking.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation formula", statement: "Criteria + Evidence + Balance = credible evaluation." },
        ],
        workedExample: {
          problem: "Evaluate: 'The essay argues clearly but lacks evidence. The writing is fluent.'",
          solution: "Strengths: clear argument, fluent writing. Weakness: insufficient evidence. Balanced evaluation identifies both.",
        },
      },
      questions: [
        {
          id: "mll5-u3-evaluating-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a good evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using criteria and evidence" },
              { id: "b", text: "Being very long" },
              { id: "c", text: "Saying whether you liked it" },
              { id: "d", text: "Only finding faults" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluation", statement: "Good evaluation = criteria + evidence." }],
            steps: [{ reasoning: "Criterion B (Organizing): evaluation needs criteria + evidence — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Using criteria and evidence",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Essay",
            author: "Written for Akademik Space",
            text: "'Social media is bad. It makes people lazy. We should ban it. My friend spends too much time on it.'",
          },
          stem: "Evaluate this essay — identify one strength and one weakness.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluation", statement: "Strengths and weaknesses identified with evidence." }],
            steps: [
              { reasoning: "Criterion B (Organizing): strength — clear position/opinion ('Social media is bad').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): weakness — no evidence, anecdotal only ('My friend'), absolute claims ('makes people lazy').", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Strength: clear position. Weakness: no evidence, only anecdote, absolute claims.",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Reviews",
            author: "Written for Akademik Space",
            text: "Review A: 'A masterpiece. Everyone should read it.'\n\nReview B: 'The novel's narrative structure is innovative, though the pacing in the middle section lags. The character development is strong, particularly in chapters 3-5.'",
          },
          stem: "Which review is more credible? Analyse the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Credible evaluation", statement: "Specific criteria + balanced judgment = credible." }],
            steps: [
              { reasoning: "Criterion B (Organizing): Review A = vague praise, no specifics — 'masterpiece', 'everyone should' — low credibility.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): Review B = specific criteria ('narrative structure', 'pacing', 'character development') + balanced (strengths + weakness).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): B more credible — evidence-based, balanced, shows critical thinking.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Review B — specific criteria + balanced judgment vs A's vague praise — more credible evaluation.",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the criterion used: 'The essay is well-organized with clear paragraphs.'", marks: 1 },
            { label: "b", prompt: "Name two other criteria you could evaluate.", marks: 1 },
            { label: "c", prompt: "Evaluate this text on your chosen criteria: 'I think homework is bad. It's boring. We should stop it.'", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-criteria evaluation", statement: "Evaluate on purpose, structure, language, evidence." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): structure/organization criterion.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): two criteria — e.g. evidence, language accuracy, audience appropriateness.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): evaluation of text — identifies clear opinion but lacks evidence, weak language.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): 'boring' is subjective; 'should stop' is unsupported — weak argument.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): suggests improvements — add evidence, balance argument, strengthen language.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Structure. (b) Evidence, language. (c) Clear opinion but no evidence, weak argument — needs development.",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes an evaluation credible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being very positive" },
              { id: "b", text: "Only finding faults" },
              { id: "c", text: "Using criteria and evidence, and acknowledging strengths and weaknesses" },
              { id: "d", text: "Being very long" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluation", statement: "Credible evaluation = criteria + evidence + balance." }],
            steps: [{ reasoning: "Criterion B (Organizing): criteria + evidence + balance — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Using criteria and evidence, and acknowledging strengths and weaknesses",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "The essay is well-structured, the evidence is weak, and the language is clear.",
          },
          stem: "How many evaluation criteria are named in this review?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluation criteria", statement: "Structure, evidence, language are distinct criteria." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'well-structured', 'evidence', 'language' — 3 criteria.", marks: 1, markCode: "B" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Paragraph",
            author: "Written for Akademik Space",
            text: "'The argument is clear but the evidence is thin. The writing is fluent.'",
          },
          stem: "What type of evaluation is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One-sided praise" },
              { id: "b", text: "Only criticism" },
              { id: "c", text: "Balanced evaluation — strengths (clear, fluent) and weakness (thin evidence)" },
              { id: "d", text: "No evaluation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Balanced evaluation", statement: "Strengths + weaknesses = credible." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'clear', 'fluent' strengths vs 'thin' weakness — balanced — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Balanced evaluation — strengths and weakness",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Text",
            author: "Written for Akademik Space",
            text: "'This book is great. I loved it. Everyone should read it.'",
          },
          stem: "What is the main evaluation problem here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No criteria or evidence — vague praise ('great', 'loved') without specific features" },
              { id: "b", text: "It is perfectly evaluative" },
              { id: "c", text: "It is too negative" },
              { id: "d", text: "It is too detailed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Evidence-based evaluation", statement: "Evaluation needs criteria + evidence, not just opinion." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'great', 'loved' = opinion without evidence — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** No criteria or evidence — vague praise without specific features",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is a balanced evaluation more credible than one-sided praise or criticism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is easier to write" },
              { id: "b", text: "It acknowledges complexity — texts have strengths and weaknesses, and balance shows critical thinking" },
              { id: "c", text: "It avoids making judgments" },
              { id: "d", text: "It is shorter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Balanced assessment", statement: "Acknowledging strengths and weaknesses shows critical thinking." }],
            steps: [{ reasoning: "Criterion B (Organizing): balance = credibility — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** It acknowledges complexity — texts have strengths and weaknesses",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "'The novel's structure is innovative, the pacing lags in the middle, but the character development is strong.'",
          },
          stem: "How many criteria does this review evaluate?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluation criteria", statement: "Structure, pacing, character development = 3 criteria." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'structure', 'pacing', 'character development' — 3 criteria.", marks: 1, markCode: "B" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "Review A: 'An absolute masterpiece. Five stars. Buy it now.'\n\nReview B: 'The opening is gripping and the dialogue feels authentic, though the second act loses momentum. Recommended for readers who enjoy slow-burn narratives.'",
          },
          stem: "Evaluate which review is more credible and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Credible evaluation", statement: "Specific criteria + balanced judgment = credibility." }],
            steps: [
              { reasoning: "Criterion B (Organizing): Review A = vague praise, no criteria — 'masterpiece', 'five stars' — low credibility.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): Review B = specific features ('opening', 'dialogue', 'second act') + balanced (strength + weakness).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): B more credible — evidence-based, nuanced, helps reader decide.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Review B — specific criteria + balanced judgment vs A's vague hype — more credible.",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'evidence-based evaluation' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Supporting judgments with specific features from the text" },
              { id: "b", text: "Ignoring your own opinion" },
              { id: "c", text: "Writing very long reviews" },
              { id: "d", text: "Only using statistics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Evidence-based evaluation", statement: "Judgment + criteria + evidence." }],
            steps: [{ reasoning: "Criterion B (Organizing): evidence-based = judgments backed by specific features — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Supporting judgments with specific features from the text",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Evaluate this text on structure: 'The essay jumps from topic to topic with no clear organization.'", marks: 1 },
            { label: "b", prompt: "Evaluate it on language: 'The language is simple and repetitive.'", marks: 1 },
            { label: "c", prompt: "Suggest two improvements.", marks: 1 },
            { label: "d", prompt: "Explain why multi-criteria evaluation is stronger than a single judgment.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-criteria evaluation", statement: "Different criteria reveal different strengths/weaknesses." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): structure weak — 'jumps from topic to topic' = no organization.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): language weak — 'simple and repetitive' = limited vocabulary/variety.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): improvements — add topic sentences/transitions; vary vocabulary; add evidence.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B (Organizing): multi-criteria gives nuanced picture — a text can be weak in structure but strong in language.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B (Organizing): single judgment ('good'/'bad') oversimplifies — criteria + evidence = credible evaluation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Structure weak, language weak; add organization + vocabulary variety; multi-criteria gives nuanced, credible evaluation.",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'This is good. It is nice. I like it.'",
          },
          stem: "How many distinct evaluative statements appear in this draft?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Vague evaluation", statement: "Each 'good/nice/like' is a separate but unsupported judgment." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'good', 'nice', 'like' — 3 evaluative statements, all vague.", marks: 1, markCode: "B" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "'The essay is terrible. It has no structure. The evidence is made up. The conclusion contradicts the introduction.'",
          },
          stem: "What makes this review credible despite being negative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is very long" },
              { id: "b", text: "It is very negative" },
              { id: "c", text: "It uses big words" },
              { id: "d", text: "It cites specific criteria — structure, evidence, conclusion — even though all are negative" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Credible criticism", statement: "Specific criteria make even negative evaluations credible." }],
            steps: [{ reasoning: "Criterion B (Organizing): cites structure, evidence, conclusion — specific criteria — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** It cites specific criteria — structure, evidence, conclusion",
          },
        },
        {
          id: "mll5-u3-evaluating-texts-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the strength in: 'The argument is well-organized but the evidence is thin.'", marks: 1 },
            { label: "b", prompt: "Identify the weakness in the same sentence.", marks: 1 },
            { label: "c", prompt: "Explain why this evaluation is balanced.", marks: 1 },
            { label: "d", prompt: "Suggest one specific improvement and explain which criterion it addresses.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Balanced evaluation", statement: "Strength + weakness + improvement = complete evaluation." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): strength — 'well-organized' (structure criterion).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): weakness — 'evidence is thin' (evidence criterion).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): balanced — acknowledges both organization and evidence gap; 'but' signals the contrast.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B (Organizing): improvement — e.g. 'add statistical data or examples' — addresses evidence criterion.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B (Organizing): improvement is specific and tied to named criterion — actionable feedback.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Well-organized. (b) Thin evidence. (c) Balanced — both aspects acknowledged. (d) e.g. add evidence — addresses evidence criterion.",
          },
        },
      ],
    },
    {
      id: "mll5-u3-revision",
      title: "Revision and refinement",
      skill: "Revise drafts systematically — checking content, structure, language and mechanics.",
      lesson: {
        sections: [
          {
            heading: "The revision process",
            body: "**Revision** ≠ editing. Revision = improving **content and structure**; editing = fixing **language and mechanics**. Revise first (big picture), then edit (details). Don't polish sentences before fixing arguments.",
          },
          {
            heading: "Revision checklist",
            body: "Check: **purpose** (achieved?), **audience** (appropriate?), **structure** (logical?), **evidence** (sufficient?), **language** (varied, accurate?), **conventions** (grammar, punctuation?). Each pass focuses on one aspect.",
          },
          {
            heading: "Peer review",
            body: "Get feedback from others — fresh eyes catch what you miss. Ask specific questions: 'Is my argument clear?' 'Where did you get confused?' 'Does the evidence support my claims?' Feedback is data, not judgment.",
          },
        ],
        keyFormulas: [
          { name: "Revision order", statement: "Content → Structure → Language → Mechanics. Big to small." },
        ],
        workedExample: {
          problem: "Draft has great ideas but confusing structure. What to fix first?",
          solution: "Structure first — reorganize paragraphs, add transitions, clarify argument. Then polish language. Don't fix grammar before fixing logic.",
        },
      },
      questions: [
        {
          id: "mll5-u3-revision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order for revision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All at once" },
              { id: "b", text: "Only at the end" },
              { id: "c", text: "Content/structure first, then language/mechanics" },
              { id: "d", text: "Spelling first, then ideas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision order", statement: "Big picture first, details last." }],
            steps: [{ reasoning: "Criterion B (Organizing): content → structure → language → mechanics — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Content/structure first, then language/mechanics",
          },
        },
        {
          id: "mll5-u3-revision-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'I think social media is bad. Its makes people lazy and depressed. We should ban it. My friend Sarah uses it too much and she is sad.'",
          },
          stem: "Identify two issues to fix in revision.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision targets", statement: "Evidence, language, structure, mechanics all need checking." }],
            steps: [
              { reasoning: "Criterion B (Organizing): evidence — 'makes people lazy' is unsupported claim; anecdote ('Sarah') is weak evidence.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D (Using language): 'Its' should be 'It's' (contraction); grammar/mechanics errors.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Weak evidence (anecdote only) + grammar error ('Its'→'It's') — need stronger support and mechanics fix.",
          },
        },
        {
          id: "mll5-u3-revision-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Peer Review",
            author: "Written for Akademik Space",
            text: "Writer's draft: 'Exercise is good for you.'\n\nReviewer: 'What do you mean by 'good'? What specific benefits? Who is 'you'? Can you give an example?'",
          },
          stem: "Evaluate the peer review feedback — is it useful? What should the writer do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Peer review", statement: "Good feedback asks specific questions to improve clarity." }],
            steps: [
              { reasoning: "Criterion B (Organizing): feedback is useful — identifies vagueness ('good'), missing specifics ('benefits'), unclear audience ('you').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): 'Can you give an example?' prompts concrete evidence — improves development.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): writer should revise to address each point — define 'good', specify benefits, clarify audience, add example.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Useful feedback — identifies vagueness; writer should define terms, add specifics, clarify audience, give examples.",
          },
        },
        {
          id: "mll5-u3-revision-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the weakest part of this draft: 'Homework helps learning. It's boring. Students hate it. We need less.'", marks: 1 },
            { label: "b", prompt: "Explain why it's weak.", marks: 2 },
            { label: "c", prompt: "Revise it to be stronger — show what you changed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision", statement: "Weak = unsupported claims; strong = evidence + balance." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): weakest — 'It's boring. Students hate it.' — unsupported generalizations.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): 'boring' and 'hate' are subjective, unverified — no evidence or nuance.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): contradicts 'helps learning' without explanation — incoherent.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): revision adds evidence/balance — e.g. 'While homework can reinforce learning, excessive amounts may cause stress. Research suggests moderate homework is beneficial.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B (Organizing): explains changes — replaced generalizations with nuance and evidence.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 'Boring/hate' unsupported. (b) Subjective, contradicts earlier claim. (c) Added nuance + evidence — balanced argument.",
          },
        },
        {
          id: "mll5-u3-revision-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order for revision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Content and structure first, then language and mechanics" },
              { id: "b", text: "All at once" },
              { id: "c", text: "Only check the introduction" },
              { id: "d", text: "Spelling first, then ideas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision order", statement: "Big picture first, details last." }],
            steps: [{ reasoning: "Criterion B (Organizing): content → structure → language → mechanics — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Content and structure first, then language and mechanics",
          },
        },
        {
          id: "mll5-u3-revision-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'The book was good. It was interesting. I liked it a lot.'",
          },
          stem: "How many unsupported evaluative statements appear in this draft?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision targets", statement: "Unsupported evaluations need evidence." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'good', 'interesting', 'liked it a lot' — 3 unsupported evaluations.", marks: 1, markCode: "B" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-revision-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the difference between revision and editing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Editing is more important" },
              { id: "b", text: "Revision is only for the title" },
              { id: "c", text: "Revision improves content and structure; editing fixes language and mechanics" },
              { id: "d", text: "They are the same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Revision vs editing", statement: "Revision = content/structure; editing = language/mechanics." }],
            steps: [{ reasoning: "Criterion B (Organizing): revision = big picture, editing = details — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Revision improves content and structure; editing fixes language and mechanics",
          },
        },
        {
          id: "mll5-u3-revision-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'First I will talk about climate change. Second I will talk about pollution. Third I will talk about recycling.'",
          },
          stem: "What is the main revision issue here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too long" },
              { id: "b", text: "The grammar is wrong" },
              { id: "c", text: "Repetitive structure — 'I will talk about' repeated three times with no development or cohesion" },
              { id: "d", text: "No issue exists" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision", statement: "Repetitive, undeveloped structure needs revision." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'I will talk about' ×3 — repetitive, no substance — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Repetitive structure — 'I will talk about' repeated with no development",
          },
        },
        {
          id: "mll5-u3-revision-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the purpose of peer review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To get fresh eyes and specific feedback that identify strengths and weaknesses you might miss" },
              { id: "b", text: "To avoid revision" },
              { id: "c", text: "To copy someone's work" },
              { id: "d", text: "To get a grade" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Peer review", statement: "Feedback identifies what you miss." }],
            steps: [{ reasoning: "Criterion B (Organizing): peer review = fresh perspective feedback — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** To get fresh eyes and specific feedback",
          },
        },
        {
          id: "mll5-u3-revision-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'Their going to the park. Its a nice day. Were they happy? Yes they was.'",
          },
          stem: "How many grammar/mechanics errors appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Mechanics", statement: "Grammar errors need editing." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Their'→'They're', 'Its'→'It's', 'they was'→'they were' — 3 errors.", marks: 1, markCode: "D" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-revision-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'Exercise is good. It makes you healthy. You should do it.'",
          },
          stem: "Revise this draft — identify the weakness and improve it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision", statement: "Vague claims need specificity and evidence." }],
            steps: [
              { reasoning: "Criterion B (Organizing): weakness — 'good', 'healthy' are vague; 'should do it' is unsupported advice.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): revision — e.g. 'Regular exercise improves cardiovascular health and reduces stress.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion B (Organizing): adds specificity ('cardiovascular', 'stress') and removes unsupported 'should' — stronger, evidence-based claim.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Weakness: vague claims. Revision adds specificity — 'Regular exercise improves cardiovascular health and reduces stress.'",
          },
        },
        {
          id: "mll5-u3-revision-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'draft'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of pen" },
              { id: "b", text: "A preliminary version of a text, subject to revision" },
              { id: "c", text: "A published book" },
              { id: "d", text: "The final version" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Draft", statement: "Preliminary version subject to revision." }],
            steps: [{ reasoning: "Criterion B (Organizing): draft = preliminary version — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** A preliminary version of a text, subject to revision",
          },
        },
        {
          id: "mll5-u3-revision-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify two issues in: 'This topic is interesting. It is also important. Many people agree.'", marks: 1 },
            { label: "b", prompt: "Explain why these are revision problems.", marks: 2 },
            { label: "c", prompt: "Revise the text to address both issues.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision", statement: "Vague claims and unsupported assertions need development." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): issues — 'interesting'/'important' are vague; 'Many people agree' is unsupported claim.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): 'interesting' doesn't explain why — vague evaluation.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): 'Many people agree' — no evidence, anonymous appeal — weak argument.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): revision — e.g. 'This topic matters because it affects daily life. Studies show widespread concern.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B (Organizing): replaces vague claims with reasons + evidence — stronger argument.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Vague claims + unsupported 'many people agree'. (b) No reasons or evidence. (c) e.g. 'This topic matters because... Studies show...'",
          },
        },
        {
          id: "mll5-u3-revision-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Checklist",
            author: "Written for Akademik Space",
            text: "Revision checklist: purpose achieved? audience appropriate? structure logical? evidence sufficient? language varied? conventions correct?",
          },
          stem: "How many checklist criteria are listed?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision checklist", statement: "Each criterion is checked in a separate pass." }],
            steps: [{ reasoning: "Criterion B (Organizing): purpose, audience, structure, evidence, language, conventions — 6 criteria.", marks: 1, markCode: "B" }],
            finalAnswer: "6",
          },
        },
        {
          id: "mll5-u3-revision-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "'This essay will discuss social media. Social media is big. It has pros and cons. In conclusion, social media is complicated.'",
          },
          stem: "What should be revised FIRST?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The spelling" },
              { id: "b", text: "Nothing needs revision" },
              { id: "c", text: "The font" },
              { id: "d", text: "The argument/structure — the essay has no thesis, no development, and a generic conclusion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision priority", statement: "Fix structure/argument before details." }],
            steps: [{ reasoning: "Criterion B (Organizing): no thesis/development = structural problem — fix first — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** The argument/structure — no thesis, no development, generic conclusion",
          },
        },
        {
          id: "mll5-u3-revision-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the weakest element in: 'Homework helps. It is good. Students should do it.'", marks: 1 },
            { label: "b", prompt: "Explain why it's weak.", marks: 2 },
            { label: "c", prompt: "Revise it to be stronger — show your changes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision", statement: "Vague, repetitive claims need specificity and evidence." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): weakest — 'It is good' — vague, adds nothing; also 'should do it' unsupported.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): 'good' is subjective — no criteria or evidence.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): repetition — 'helps' and 'good' say the same thing twice; no development.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): revision — e.g. 'Homework reinforces learning when it is purposeful and moderate; excessive homework can cause stress.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B (Organizing): adds nuance, conditions, and balance — stronger argument.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 'It is good' vague. (b) Subjective, repetitive, no evidence. (c) e.g. 'Homework reinforces learning when purposeful...' — balanced revision.",
          },
        },
      ],
    },
  ],
};
