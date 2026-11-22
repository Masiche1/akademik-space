import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "tok-u3-lesson-3-1",
  code: "3-1",
  title: "Knowledge Questions and the TOK Essay",
  goal: "I CAN construct and answer knowledge questions and structure a TOK essay effectively.",
  standards: ["TOK", "Assessment", "Knowledge Questions", "TOK Essay"],
  vocabulary: [
    { term: "Knowledge question", definition: "An open-ended question about the nature, scope or limits of knowledge — the basis of TOK assessment." },
    { term: "TOK essay", definition: "A 1200–1600 word essay answering a prescribed title that links two areas of knowledge and ways of knowing." },
    { term: "Prescribed title", definition: "One of six fixed essay questions set by the IB each session." },
    { term: "Counterclaim", definition: "An argument against your own position, included to strengthen evaluation." },
    { term: "Real-life situation", definition: "A concrete example from your own experience or the world used to ground TOK arguments." },
    { term: "Area of knowledge", definition: "A recognised domain of knowledge: mathematics, sciences, history, ethics, arts, religion." },
  ],
  concepts: [
    {
      id: "tok-u3-knowledge-questions",
      title: "Knowledge questions",
      skill: "Construct focused knowledge questions that link areas of knowledge and ways of knowing.",
      lesson: {
        sections: [
          {
            heading: "What makes a good knowledge question",
            body: "Knowledge questions ask about **knowledge itself**: 'How does X influence what we can know?', 'To what extent can we know Y?', 'What are the limits of Z as a way of knowing?' They connect two areas of knowledge or ways of knowing and invite argument rather than a single answer.",
          },
          {
            heading: "From topic to question",
            body: "Weak: 'Climate change' — a topic, not a question. Strong: 'To what extent does the reliance on models limit scientific knowledge of climate change?' The strong version names an area (natural sciences), a way of knowing (models/reasoning) and a specific problem (limits of knowledge).",
          },
          {
            heading: "Using real-life situations",
            body: "Every knowledge question benefits from a concrete example: a news event, a scientific controversy, a personal experience. Real-life situations show you can apply TOK thinking, not just recite it. Choose examples that genuinely test your argument.",
          },
        ],
        keyFormulas: [
          { name: "Knowledge question formula", statement: "[Way of knowing/area] + [problem or limit] + [scope or extent]" },
          { name: "Test", statement: "Can this be answered with a reasoned argument, not a fact lookup?" },
        ],
        workedExample: {
          problem: "Turn 'memory' into a knowledge question.",
          solution: "Weak: 'What is memory?' Strong: 'To what extent can eyewitness testimony be trusted as knowledge?' or 'How does the reconstructive nature of memory limit historical knowledge?'",
        },
      },
      questions: [
        {
          id: "tok-u3-l31c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A knowledge question should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Be answerable from a textbook" },
              { id: "b", text: "Focus on a single subject" },
              { id: "c", text: "Invite argument about the nature of knowledge" },
              { id: "d", text: "Have one correct factual answer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Knowledge question", statement: "An open question about the nature, scope or limits of knowledge that invites argument." },
            ],
            steps: [
              { reasoning: "Knowledge questions are designed for argument about knowledge, not fact recall.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Invite argument about the nature of knowledge",
            commonErrors: ["Confusing knowledge questions with exam recall questions."],
          },
        },
        {
          id: "tok-u3-l31c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Transform the topic 'artificial intelligence' into a knowledge question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question construction", statement: "A knowledge question links a way of knowing or area to a problem of knowledge." },
            ],
            steps: [
              { reasoning: "Identify the TOK angle: AI raises questions about knowledge, understanding and truth.", marks: 1, markCode: "M" },
              { reasoning: "Link an area/way of knowing: e.g. natural sciences or reason.", marks: 1, markCode: "M" },
              { reasoning: "Add a knowledge problem: 'Can machines know?', 'Does AI challenge what counts as understanding?'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. 'To what extent can artificial intelligence possess knowledge?' or 'Does AI challenge the distinction between data and understanding?'",
            commonErrors: ["Producing a topic or factual question rather than a knowledge question."],
          },
        },
        {
          id: "tok-u3-l31c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of real-life situations in TOK essays and exhibitions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Real-life grounding", statement: "Concrete examples show application of TOK thinking and prevent abstract generalisation." },
            ],
            steps: [
              { reasoning: "Real-life situations demonstrate that TOK thinking applies to actual knowledge problems.", marks: 1, markCode: "M" },
              { reasoning: "They provide evidence for arguments — abstract claims need concrete testing.", marks: 1, markCode: "M" },
              { reasoning: "However, examples must genuinely support the argument, not be decorative.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: essential for strong TOK work, but the argument must drive the example, not vice versa.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Real-life situations ground TOK arguments in concrete cases and show applied understanding, but must serve the argument.",
            commonErrors: ["Using examples that do not actually test the claim."],
          },
        },
        {
          id: "tok-u3-l31c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine what makes an effective TOK essay.",
          parts: [
            { label: "a", prompt: "Explain the role of the prescribed title in a TOK essay.", marks: 2 },
            { label: "b", prompt: "Describe three features of a strong TOK essay.", marks: 3 },
            { label: "c", prompt: "Evaluate the importance of structure in TOK essay writing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "TOK essay quality", statement: "A strong essay answers the title directly with balanced argument, examples and evaluation." },
            ],
            steps: [
              { part: "a", reasoning: "The title sets the knowledge question to be answered — the essay must address it directly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Titles link two areas of knowledge or ways of knowing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Direct engagement with the title throughout.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced treatment of multiple perspectives with real examples.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Critical evaluation and justified conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Structure helps organise argument: introduction, body, conclusion.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But rigid structure can constrain the argument — flexibility matters.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: clear structure supports but does not substitute for substantive argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Title sets the question. (b) Directness, balance, evaluation. (c) Structure supports argument.",
            commonErrors: ["Writing about the topic rather than the title."],
          },
        },
        {
          id: "tok-u3-l31c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the strongest knowledge question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Name three causes of climate change." },
              { id: "b", text: "Is climate change real?" },
              { id: "c", text: "To what extent does reliance on models limit scientific knowledge of climate change?" },
              { id: "d", text: "What is climate change?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Knowledge question", statement: "An open question linking an area of knowledge or way of knowing to a problem of knowledge." },
            ],
            steps: [
              { reasoning: "A strong knowledge question links an area or way of knowing to a knowledge problem and invites argument.", marks: 1, markCode: "M" },
              { reasoning: "Only (b) does this; the others invite fact recall or a yes/no answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** To what extent does reliance on models limit scientific knowledge of climate change?",
            commonErrors: ["Choosing questions that can be answered by a fact lookup."],
          },
        },
        {
          id: "tok-u3-l31c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A well-formed knowledge question should connect:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A topic with its dictionary definition" },
              { id: "b", text: "Two textbook chapters" },
              { id: "c", text: "A student with a teacher" },
              { id: "d", text: "Two areas of knowledge or ways of knowing" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "KQ structure", statement: "Knowledge questions connect areas of knowledge or ways of knowing to a problem of knowledge." },
            ],
            steps: [
              { reasoning: "Knowledge questions are built around connections between ways of knowing or areas of knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Two areas of knowledge or ways of knowing",
            commonErrors: ["Thinking a knowledge question is simply a question about a subject."],
          },
        },
        {
          id: "tok-u3-l31c1q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "The formula 'area or way of knowing + problem + scope' is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Define the six areas of knowledge" },
              { id: "b", text: "Grade exhibition commentaries" },
              { id: "c", text: "Generate TOK essay titles" },
              { id: "d", text: "Construct focused knowledge questions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question construction", statement: "The formula combines a domain, a problem of knowledge and a scope marker to build a knowledge question." },
            ],
            steps: [
              { reasoning: "The formula identifies which knowledge domain is at issue.", marks: 1, markCode: "M" },
              { reasoning: "It adds the specific knowledge problem and the extent or scope of the claim.", marks: 1, markCode: "M" },
              { reasoning: "Therefore its purpose is constructing focused knowledge questions, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Construct focused knowledge questions",
            commonErrors: ["Believing the formula produces essay titles rather than questions."],
          },
        },
        {
          id: "tok-u3-l31c1q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish a topic from a knowledge question, using 'memory' as your example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic vs knowledge question", statement: "A topic names a subject; a knowledge question asks about the nature, scope or limits of knowledge in that area." },
            ],
            steps: [
              { reasoning: "'Memory' is a topic — a subject area with no problem of knowledge attached.", marks: 1, markCode: "M" },
              { reasoning: "A knowledge question adds a problem: 'To what extent can eyewitness testimony be trusted as knowledge?'", marks: 1, markCode: "M" },
              { reasoning: "The distinction: topics can be looked up; knowledge questions require argument about knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Memory' is a topic; 'To what extent can eyewitness testimony be trusted?' is a knowledge question about the limits of memory as a way of knowing.",
            commonErrors: ["Rephrasing a topic as a question without adding a knowledge problem."],
          },
        },
        {
          id: "tok-u3-l31c1q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the strongest knowledge question about ethics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To what extent can moral judgements be considered knowledge?" },
              { id: "b", text: "What are the main ethical theories?" },
              { id: "c", text: "Who wrote the most famous ethics textbook?" },
              { id: "d", text: "Is ethics a difficult subject?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question construction", statement: "A knowledge question links ethics to a way of knowing and a problem of knowledge." },
            ],
            steps: [
              { reasoning: "A strong question names a problem of knowledge within ethics.", marks: 1, markCode: "M" },
              { reasoning: "Option (b) asks whether moral judgement counts as knowledge — a genuine TOK problem.", marks: 1, markCode: "M" },
              { reasoning: "The others seek factual recall or offer no knowledge problem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To what extent can moral judgements be considered knowledge?",
            commonErrors: ["Choosing factual questions about ethical theories rather than questions about knowledge."],
          },
        },
        {
          id: "tok-u3-l31c1q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply the knowledge question formula to the way of knowing 'language'.",
          parts: [
            { label: "a", prompt: "Identify the area of knowledge or way of knowing and a suitable problem of knowledge.", marks: 2 },
            { label: "b", prompt: "Draft a complete knowledge question and justify its focus.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question construction", statement: "Apply the formula: domain + problem + scope." },
            ],
            steps: [
              { part: "a", reasoning: "Way of knowing: language; problem: whether language shapes or limits what can be known.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Scope: extent or degree to which language constrains knowledge.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Drafted question, e.g. 'To what extent does language shape the knowledge we can acquire?'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Justification: it links a way of knowing to a genuine problem of knowledge and invites argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Language + limits of expression + extent. (b) 'To what extent does language shape the knowledge we can acquire?'",
            commonErrors: ["Drafting a question about language use rather than about knowledge."],
          },
        },
        {
          id: "tok-u3-l31c1q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why might 'Does art imitate reality?' be considered a weak knowledge question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It lacks a question mark" },
              { id: "b", text: "It is too long and complex" },
              { id: "c", text: "It can be answered yes or no without engaging problems of knowledge" },
              { id: "d", text: "It mentions art, which is not an area of knowledge" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "KQ quality", statement: "A knowledge question must invite argument about knowledge, not a binary factual answer." },
            ],
            steps: [
              { reasoning: "The question can be settled by a yes/no judgement about art rather than reasoning about knowledge.", marks: 1, markCode: "M" },
              { reasoning: "It does not name a problem of knowledge or a way of knowing explicitly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore (b) identifies the real weakness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It can be answered yes or no without engaging problems of knowledge",
            commonErrors: ["Assuming any philosophical-sounding question is automatically a knowledge question."],
          },
        },
        {
          id: "tok-u3-l31c1q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that every knowledge question must link two areas of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two-AoK rule", statement: "The TOK essay must link two areas of knowledge, but individual knowledge questions need not always do so." },
            ],
            steps: [
              { reasoning: "For the claim: the essay requirement pushes students to compare areas of knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Against: many knowledge questions concern a single area or way of knowing, e.g. limits of perception.", marks: 1, markCode: "M" },
              { reasoning: "The exhibition and class work accept single-domain questions.", marks: 1, markCode: "R" },
              { reasoning: "The two-AoK requirement is an essay convention, not a definition of a knowledge question.", marks: 1, markCode: "R" },
              { reasoning: "Conflating the two leads to artificially forced comparisons.", marks: 1, markCode: "A" },
              { reasoning: "Judgement: the claim overstates the rule; linking is required for the essay, not for every question.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The two-area requirement applies to the essay title response, not to every knowledge question; the claim conflates assessment format with the nature of a knowledge question.",
            commonErrors: ["Treating the essay's two-AoK rule as a universal property of knowledge questions."],
          },
        },
        {
          id: "tok-u3-l31c1q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of knowledge questions in TOK assessment.",
          parts: [
            { label: "a", prompt: "Define a knowledge question and list its key features.", marks: 3 },
            { label: "b", prompt: "Explain how knowledge questions function in the TOK essay and exhibition.", marks: 3 },
            { label: "c", prompt: "Evaluate whether a knowledge question can ever be 'answered' completely.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "KQs in assessment", statement: "Knowledge questions are the common currency of TOK essay, exhibition and class work." },
            ],
            steps: [
              { part: "a", reasoning: "Definition: an open question about the nature, scope or limits of knowledge.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Features: links areas of knowledge or ways of knowing; invites argument; not answerable by fact lookup.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Well-formed questions name a specific problem rather than a broad topic.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In the essay, the prescribed title functions as a knowledge question to be answered.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "In the exhibition, each commentary must pose a knowledge question about the object and theme.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "In both, the quality of engagement with the question is what is assessed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Knowledge questions can be addressed with reasoned conclusions but not closed with certainty.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "This openness is a feature: it models the provisional nature of knowledge claims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Open question about knowledge linking domains and inviting argument. (b) They frame the essay title and each exhibition commentary. (c) They are addressed, not definitively answered.",
            commonErrors: ["Treating knowledge questions as questions with a single correct answer."],
          },
        },
        {
          id: "tok-u3-l31c1q14",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one real-life situation that could ground a TOK argument about history, and explain its use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Real-life grounding", statement: "Concrete examples test TOK claims and show applied understanding." },
            ],
            steps: [
              { reasoning: "A suitable situation, e.g. a contested historical event such as a national memorial or a disputed textbook account.", marks: 1, markCode: "M" },
              { reasoning: "It links to a knowledge problem: e.g. how sources and perspective shape historical knowledge.", marks: 1, markCode: "M" },
              { reasoning: "The example must test the argument, not merely illustrate the topic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. a disputed historical account: it grounds an argument about how sources and perspective limit historical knowledge.",
            commonErrors: ["Choosing an example that does not connect to a problem of knowledge."],
          },
        },
        {
          id: "tok-u3-l31c1q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which phrase most clearly signals the scope of a knowledge question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who said" },
              { id: "b", text: "When did" },
              { id: "c", text: "To what extent" },
              { id: "d", text: "Name the" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scope marker", statement: "Phrases like 'to what extent' signal that the question concerns the degree or limits of a claim." },
            ],
            steps: [
              { reasoning: "'To what extent' explicitly asks about degree or limits, which is the scope element of a knowledge question.", marks: 1, markCode: "M" },
              { reasoning: "The other options seek factual retrieval.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** To what extent",
            commonErrors: ["Confusing factual interrogatives with scope markers."],
          },
        },
        {
          id: "tok-u3-l31c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare a knowledge question with a research question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "KQ vs research question", statement: "Research questions seek information about a subject; knowledge questions probe the nature and limits of knowledge itself." },
            ],
            steps: [
              { reasoning: "A research question asks 'What is the effect of X on Y?' — it seeks data or findings.", marks: 1, markCode: "M" },
              { reasoning: "A knowledge question asks 'To what extent can we know X?' — it probes justification and limits.", marks: 1, markCode: "M" },
              { reasoning: "Research questions may be answered empirically; knowledge questions invite philosophical argument.", marks: 1, markCode: "M" },
              { reasoning: "Yet research questions can underpin knowledge questions when reframed at a meta-level.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: they operate at different levels — information-gathering versus reflection on knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Research questions seek information; knowledge questions examine the nature and limits of knowledge — related but distinct levels of inquiry.",
            commonErrors: ["Assuming a research question automatically functions as a knowledge question."],
          },
        },
      ],
    },
    {
      id: "tok-u3-tok-essay",
      title: "The TOK essay",
      skill: "Plan and write a TOK essay that addresses the prescribed title with depth and balance.",
      lesson: {
        sections: [
          {
            heading: "Structure of a TOK essay",
            body: "A TOK essay (1200–1600 words) typically has: an **introduction** that interprets the title and states your line of argument; **body paragraphs** each developing one aspect with examples from two areas of knowledge; and a **conclusion** that answers the title directly. The essay must link two areas of knowledge or ways of knowing.",
          },
          {
            heading: "The six prescribed titles",
            body: "Each session offers six titles covering different knowledge questions — e.g. on certainty, interpretation, the role of emotion, the limits of language. You choose one and have several months to write. The title is fixed; your interpretation and examples are yours.",
          },
          {
            heading: "Assessment criteria",
            body: "TOK essays are marked on: understanding of knowledge questions; quality of argument; use of examples and real-life situations; awareness of different perspectives; and clear structure. The best essays treat the title as a genuine question and reach a nuanced conclusion.",
          },
        ],
        keyFormulas: [
          { name: "Essay structure", statement: "Introduction (interpret title) → body (arguments + examples) → conclusion (answer title)" },
          { name: "Word count", statement: "1200–1600 words; two areas of knowledge linked" },
        ],
        workedExample: {
          problem: "Title: 'The possession of knowledge carries an ethical responsibility.' Plan an essay.",
          solution: "Introduction: interpret 'knowledge' and 'ethical responsibility'. Body: argue how knowledge creates obligations (science → technology risks; history → memory duties), counter with cases where knowledge is neutral. Conclusion: knowledge does carry responsibility when applied, especially in sciences and humanities.",
        },
      },
      questions: [
        {
          id: "tok-u3-l31c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The prescribed word count for a TOK essay is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any length" },
              { id: "b", text: "2000–2500 words" },
              { id: "c", text: "1200–1600 words" },
              { id: "d", text: "500–800 words" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "TOK essay format", statement: "The TOK essay is 1200–1600 words answering a prescribed title." },
            ],
            steps: [
              { reasoning: "The IB specifies 1200–1600 words for the TOK essay.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1200–1600 words",
            commonErrors: ["Confusing TOK essay with EE or other coursework lengths."],
          },
        },
        {
          id: "tok-u3-l31c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a TOK essay should link two areas of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two AoK link", statement: "The essay must connect two areas of knowledge or ways of knowing to the title." },
            ],
            steps: [
              { reasoning: "Identify two relevant areas (e.g. natural sciences and ethics) and show how the title applies to both.", marks: 1, markCode: "M" },
              { reasoning: "Use examples from each area to develop the argument.", marks: 1, markCode: "M" },
              { reasoning: "Draw explicit comparisons or contrasts between the two areas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The essay should treat the title through two linked areas of knowledge, using examples from each and comparing them.",
            commonErrors: ["Treating only one area of knowledge throughout."],
          },
        },
        {
          id: "tok-u3-l31c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the role of the counterclaim in a TOK essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counterclaim", statement: "Addressing opposing views strengthens argument by showing awareness of complexity." },
            ],
            steps: [
              { reasoning: "A counterclaim acknowledges the strongest opposing argument — showing intellectual honesty.", marks: 1, markCode: "M" },
              { reasoning: "It prevents one-sided writing and demonstrates range of perspectives.", marks: 1, markCode: "M" },
              { reasoning: "Weak counterclaims (straw men) weaken the essay — the opposition must be taken seriously.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: essential for high-level essays but must be genuine, not tokenistic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Counterclaims strengthen TOK essays by demonstrating balanced, critical thinking — when genuinely engaged.",
            commonErrors: ["Adding a token opposing view without real engagement."],
          },
        },
        {
          id: "tok-u3-l31c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan a TOK essay on a prescribed title.",
          parts: [
            { label: "a", prompt: "Explain how to interpret a prescribed title.", marks: 2 },
            { label: "b", prompt: "Describe the structure of a TOK essay.", marks: 3 },
            { label: "c", prompt: "Evaluate what examiners look for in a TOK essay.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Essay planning", statement: "Interpret the title, structure the argument, and address assessment criteria." },
            ],
            steps: [
              { part: "a", reasoning: "Identify key terms in the title and their implications.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State your interpretation and line of argument in the introduction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Introduction: interpret title and thesis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Body: develop arguments with examples from two areas.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclusion: answer the title directly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Understanding of knowledge questions and quality of argument.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use of examples and awareness of perspectives.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Clear structure and direct engagement with the title.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Interpret key terms. (b) Intro-body-conclusion. (c) Argument, examples, perspectives, structure.",
            commonErrors: ["Writing a general essay that does not answer the title."],
          },
        },
        {
          id: "tok-u3-l31c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many prescribed titles are offered for the TOK essay each session?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Twelve" },
              { id: "b", text: "One per student" },
              { id: "c", text: "Six" },
              { id: "d", text: "Three" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Prescribed titles", statement: "Each TOK session sets six prescribed essay titles from which students choose one." },
            ],
            steps: [
              { reasoning: "The IB sets six prescribed titles per examination session.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Six",
            commonErrors: ["Assuming titles are set individually per student."],
          },
        },
        {
          id: "tok-u3-l31c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The introduction of a TOK essay should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give personal biographical details" },
              { id: "b", text: "Summarise the prescribed title verbatim" },
              { id: "c", text: "List all examples you will use" },
              { id: "d", text: "Interpret the title and state your line of argument" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Essay structure", statement: "The introduction interprets the title and states the essay's line of argument." },
            ],
            steps: [
              { reasoning: "The introduction frames the essay by interpreting key terms in the title.", marks: 1, markCode: "M" },
              { reasoning: "It also signals the argument the essay will develop.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Interpret the title and state your line of argument",
            commonErrors: ["Opening with a summary of the title instead of an interpretation."],
          },
        },
        {
          id: "tok-u3-l31c2q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which element is most essential for a high-scoring TOK essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extensive direct quotation" },
              { id: "b", text: "Direct, sustained engagement with the prescribed title" },
              { id: "c", text: "Technical philosophical jargon" },
              { id: "d", text: "Personal anecdote throughout" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Assessment criteria", statement: "TOK essays are marked on engagement with the title, quality of argument, examples and structure." },
            ],
            steps: [
              { reasoning: "The prescribed title sets the knowledge question the essay must address.", marks: 1, markCode: "M" },
              { reasoning: "Sustained engagement with that title is the primary assessment criterion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Direct, sustained engagement with the prescribed title",
            commonErrors: ["Believing stylistic features like quotation or jargon substitute for answering the title."],
          },
        },
        {
          id: "tok-u3-l31c2q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the TOK essay requires linking two areas of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two-AoK rule", statement: "The essay must connect two areas of knowledge or ways of knowing to the prescribed title." },
            ],
            steps: [
              { reasoning: "Comparing two areas tests whether students can generalise a knowledge question across domains.", marks: 1, markCode: "M" },
              { reasoning: "It forces breadth: examples must come from distinct areas rather than one repeated case.", marks: 1, markCode: "M" },
              { reasoning: "An essay treating only one area fails to satisfy a formal requirement of the assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Linking two areas of knowledge demonstrates comparative breadth and is a formal requirement of the TOK essay.",
            commonErrors: ["Using two examples from the same area of knowledge."],
          },
        },
        {
          id: "tok-u3-l31c2q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the most effective first step in planning a TOK essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choosing a catchy title" },
              { id: "b", text: "Interpreting the prescribed title and identifying its key terms" },
              { id: "c", text: "Counting the required words" },
              { id: "d", text: "Writing the conclusion first" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay planning", statement: "Planning begins with interpreting the title, since it defines the knowledge question to be answered." },
            ],
            steps: [
              { reasoning: "The title determines the entire essay, so interpreting it must come first.", marks: 1, markCode: "M" },
              { reasoning: "Key terms and possible lines of argument are identified at this stage.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Interpreting the prescribed title and identifying its key terms",
            commonErrors: ["Starting to write before interpreting what the title demands."],
          },
        },
        {
          id: "tok-u3-l31c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Examine the role of examples in a TOK essay.",
          parts: [
            { label: "a", prompt: "Explain why concrete examples are needed in a TOK essay.", marks: 2 },
            { label: "b", prompt: "Evaluate the claim that more examples always make a better essay.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Use of examples", statement: "Examples ground abstract arguments and must genuinely test the claim." },
            ],
            steps: [
              { part: "a", reasoning: "Examples provide concrete evidence for claims about knowledge.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They show the argument applies to real situations, not just abstraction.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Quantity alone does not help if examples are repetitive or merely decorative.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "A few well-chosen examples that test the argument outweigh many weak ones.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Examples ground arguments in concrete cases. (b) Quality of examples matters more than quantity.",
            commonErrors: ["Listing examples without analysing how they bear on the title."],
          },
        },
        {
          id: "tok-u3-l31c2q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes a polished essay that treats only one area of knowledge throughout. The main weakness is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It contains too many examples" },
              { id: "b", text: "The word count is too low" },
              { id: "c", text: "It fails the requirement to link two areas of knowledge" },
              { id: "d", text: "It lacks subheadings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Essay requirements", statement: "A TOK essay must address the prescribed title through two areas of knowledge or ways of knowing." },
            ],
            steps: [
              { reasoning: "The essay requirement explicitly demands treatment of two areas of knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Polish of style cannot compensate for missing a formal requirement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) identifies the main weakness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It fails the requirement to link two areas of knowledge",
            commonErrors: ["Focusing on surface features instead of assessment requirements."],
          },
        },
        {
          id: "tok-u3-l31c2q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the importance of a nuanced conclusion in the TOK essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conclusion quality", statement: "A strong conclusion answers the title directly while acknowledging complexity." },
            ],
            steps: [
              { reasoning: "The conclusion must return to the title and state a position.", marks: 1, markCode: "M" },
              { reasoning: "Nuance shows the student has weighed competing arguments rather than asserted a view.", marks: 1, markCode: "M" },
              { reasoning: "However, excessive hedging produces a fence-sitting conclusion that answers nothing.", marks: 1, markCode: "R" },
              { reasoning: "Balance is needed: a clear position qualified by recognised limits.", marks: 1, markCode: "R" },
              { reasoning: "Examiners reward conclusions that are both definite and discriminating.", marks: 1, markCode: "A" },
              { reasoning: "Judgement: nuance is valuable only when it still delivers a direct answer to the title.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A nuanced conclusion strengthens the essay by showing weighed judgement, provided it still answers the title directly.",
            commonErrors: ["Ending with vague 'it depends' statements that never commit to an answer."],
          },
        },
        {
          id: "tok-u3-l31c2q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the TOK essay as an instrument of assessment.",
          parts: [
            { label: "a", prompt: "State the formal requirements of the TOK essay.", marks: 3 },
            { label: "b", prompt: "Describe the main assessment criteria.", marks: 3 },
            { label: "c", prompt: "Evaluate the essay's strengths and weaknesses as a measure of TOK understanding.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Essay as assessment", statement: "The essay tests extended argument on knowledge questions under formal constraints." },
            ],
            steps: [
              { part: "a", reasoning: "1200–1600 words answering one of six prescribed titles.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Must link two areas of knowledge or ways of knowing.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Written for external examination marking.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Understanding of knowledge questions and quality of argument.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use of examples, real-life situations and awareness of perspectives.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear structure and direct engagement with the title.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: allows depth of argument and development of ideas.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weakness: rewards polished generic argument and may not reflect everyday TOK thinking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1200–1600 words, prescribed title, two AoKs, externally marked. (b) KQ understanding, argument, examples, perspectives, structure. (c) Depth is a strength; artificiality is a weakness.",
            commonErrors: ["Describing essay content without addressing assessment criteria."],
          },
        },
        {
          id: "tok-u3-l31c2q14",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the main structural components of a TOK essay and the role of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Essay structure", statement: "Introduction, body and conclusion each perform a distinct function." },
            ],
            steps: [
              { reasoning: "Introduction: interpret the title and state the line of argument.", marks: 1, markCode: "M" },
              { reasoning: "Body: develop arguments with examples from two areas of knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: answer the title directly and concisely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Introduction (interpret title and thesis), body (arguments + examples), conclusion (direct answer to title).",
            commonErrors: ["Omitting the conclusion's function of directly answering the title."],
          },
        },
        {
          id: "tok-u3-l31c2q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "The set of prescribed TOK essay titles changes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each term" },
              { id: "b", text: "Each examination session" },
              { id: "c", text: "Every week" },
              { id: "d", text: "Never after publication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Prescribed titles", statement: "New sets of six prescribed titles are issued for each examination session." },
            ],
            steps: [
              { reasoning: "The IB publishes new prescribed titles for each session (e.g. May and November).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Each examination session",
            commonErrors: ["Assuming titles are fixed permanently or change more frequently."],
          },
        },
        {
          id: "tok-u3-l31c2q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the demands of the TOK essay and the TOK exhibition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Essay vs exhibition", statement: "The essay rewards extended abstract argument; the exhibition rewards concise applied analysis of objects." },
            ],
            steps: [
              { reasoning: "The essay requires a 1200–1600 word sustained argument on a prescribed title.", marks: 1, markCode: "M" },
              { reasoning: "The exhibition requires three 200–300 word commentaries linking real objects to a theme via knowledge questions.", marks: 1, markCode: "M" },
              { reasoning: "The essay allows depth and nuance; the exhibition forces concision and concrete application.", marks: 1, markCode: "M" },
              { reasoning: "The exhibition's constraints can produce superficial treatment that the essay's length avoids.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: they are complementary assessments of the same TOK thinking at different scales.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The essay tests extended argument; the exhibition tests concise applied analysis — complementary measures of TOK understanding.",
            commonErrors: ["Expecting the same depth of treatment in both components."],
          },
        },
      ],
    },
  ],
};
