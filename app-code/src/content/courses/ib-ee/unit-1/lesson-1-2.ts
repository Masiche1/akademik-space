import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ee-u1-lesson-1-2",
  code: "1-2",
  title: "Developing a Focused Research Question",
  goal: "I CAN formulate a focused, arguable research question suitable for an Extended Essay.",
  standards: ["EE", "Research Question", "Academic Writing"],
  vocabulary: [
    { term: "Research question", definition: "The specific question the essay seeks to answer through investigation." },
    { term: "Arguable", definition: "Capable of being debated — has more than one possible answer." },
    { term: "Focused", definition: "Specific enough to be covered within the word limit." },
    { term: "Descriptive question", definition: "A question seeking facts or description rather than argument." },
    { term: "Analytical question", definition: "A question requiring analysis, evaluation or argument." },
    { term: "Thesis", definition: "The central argument or position the essay will defend." },
  ],
  concepts: [
    {
      id: "ee-u1-rq-basics",
      title: "What makes a good research question",
      skill: "Distinguish strong research questions from weak ones and formulate a focused question.",
      lesson: {
        sections: [
          {
            heading: "Characteristics of a good RQ",
            body: "A strong research question is: **focused** (specific enough for 4000 words), **arguable** (has multiple possible answers), **researchable** (sources exist), and **significant** (worth investigating). Weak questions are too broad, too factual, or unanswerable.",
          },
          {
            heading: "Descriptive vs analytical",
            body: "'What caused World War I?' is descriptive — it seeks a list of causes. 'To what extent was German militarism responsible for the outbreak of World War I?' is analytical — it demands evaluation and argument. EE questions should be analytical, inviting the writer to take and defend a position.",
          },
          {
            heading: "Testing your question",
            body: "Ask: Can I answer this in 4000 words? Can I find sources? Does it require argument rather than description? Would different researchers reach different conclusions? If yes to all, you have a strong research question.",
          },
        ],
        keyFormulas: [
          { name: "Good RQ criteria", statement: "Focused + arguable + researchable + significant" },
          { name: "Analytical test", statement: "Does it require evaluation and argument, not just description?" },
        ],
        workedExample: {
          problem: "Improve 'What is climate change?'",
          solution: "'To what extent has urbanisation contributed to rising temperatures in [specific city] between 1990 and 2020?' — focused, arguable, researchable with data, and analytical.",
        },
      },
      questions: [
        {
          id: "ee-u1-l12c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A strong EE research question should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Broad enough to cover everything" },
              { id: "b", text: "Answerable with a simple yes/no" },
              { id: "c", text: "Focused and arguable" },
              { id: "d", text: "Purely descriptive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Research question quality", statement: "Strong questions are focused, arguable and researchable." },
            ],
            steps: [
              { reasoning: "Focused and arguable are the key qualities of a good RQ.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Focused and arguable",
            commonErrors: ["Choosing questions that are too broad or purely descriptive."],
          },
        },
        {
          id: "ee-u1-l12c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a descriptive and an analytical research question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Descriptive vs analytical", statement: "Descriptive seeks facts; analytical requires evaluation and argument." },
            ],
            steps: [
              { reasoning: "Descriptive: 'What happened?' or 'What are the causes?' — seeks information.", marks: 1, markCode: "M" },
              { reasoning: "Analytical: 'To what extent...?' or 'How did X influence Y?' — requires argument.", marks: 1, markCode: "M" },
              { reasoning: "EE questions should be analytical to allow the writer to take a position.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Descriptive questions seek facts; analytical questions demand evaluation and argument — EE needs the latter.",
            commonErrors: ["Writing questions that only require listing facts."],
          },
        },
        {
          id: "ee-u1-l12c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether a research question can be too narrow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimal scope", statement: "Questions must be narrow enough for depth but broad enough for evidence." },
            ],
            steps: [
              { reasoning: "For narrowness: focused questions allow the depth that 4000 words demands.", marks: 1, markCode: "M" },
              { reasoning: "Against: too narrow may lack sources, significance or room for argument.", marks: 1, markCode: "M" },
              { reasoning: "A question that cannot sustain 4000 words of analysis is too narrow.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: aim for the narrowest question that still supports deep analysis and sufficient evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Questions can be too narrow — they must sustain 4000 words of analysis and have enough evidence.",
            commonErrors: ["Assuming narrower is always better."],
          },
        },
        {
          id: "ee-u1-l12c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Develop a strong research question for an EE.",
          parts: [
            { label: "a", prompt: "List four criteria for a good research question.", marks: 2 },
            { label: "b", prompt: "Explain how to transform a descriptive question into an analytical one.", marks: 3 },
            { label: "c", prompt: "Evaluate how to test whether your research question is well-formulated.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "RQ development", statement: "Good questions are focused, arguable, researchable and significant." },
            ],
            steps: [
              { part: "a", reasoning: "Focused, arguable, researchable, significant.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All four criteria listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add 'to what extent' or 'how' to require evaluation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Specify the relationship or comparison to be analysed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ensure the question demands a position, not just facts.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Test word count feasibility — can it be covered in 4000 words?", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Test source availability — can you find enough evidence?", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Test arguability — would reasonable researchers disagree?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Focused, arguable, researchable, significant. (b) Add evaluation terms. (c) Word count, sources, arguability.",
            commonErrors: ["Formulating questions that cannot be answered with available sources."],
          },
        },
        {
          id: "ee-u1-l12c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Under the 2027 guide, an EE research question should be framed as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A hypothesis to prove" },
              { id: "b", text: "A question" },
              { id: "c", text: "A statement of intent" },
              { id: "d", text: "A list of topics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "RQ form", statement: "The research question must really be a question, not a statement or hypothesis." },
            ],
            steps: [
              { reasoning: "A question keeps the investigation focused and answerable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A question",
            commonErrors: ["Writing an aim or statement instead of a research question."],
          },
        },
        {
          id: "ee-u1-l12c1q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which research question is strongest for an EE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Did Napoleon Bonaparte like bread?" },
              { id: "b", text: "Explain everything about World War II" },
              { id: "c", text: "What is the French Revolution?" },
              { id: "d", text: "To what extent did economic inequality shape revolutionary violence in Paris between 1789 and 1794?" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strong RQ", statement: "A strong RQ is focused, analytical, researchable and capable of argument." },
            ],
            steps: [
              { reasoning: "The chosen question bounds period, place and mechanism.", marks: 1, markCode: "M" },
              { reasoning: "It invites evaluation rather than description.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Economic inequality and revolutionary violence in Paris",
            commonErrors: ["Choosing a question that only asks for facts."],
          },
        },
        {
          id: "ee-u1-l12c1q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should an EE research question avoid being double-barrelled?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It prevents the use of sources" },
              { id: "b", text: "It requires a longer bibliography" },
              { id: "c", text: "It combines more than one question and usually makes the scope too broad" },
              { id: "d", text: "It makes the title too short" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Single focus", statement: "One clear question supports one line of argument within the word limit." },
            ],
            steps: [
              { reasoning: "Two questions demand two lines of argument.", marks: 1, markCode: "M" },
              { reasoning: "That usually exceeds the scope of 4000 words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It combines questions and broadens scope",
            commonErrors: ["Adding a second 'and' clause without noticing the extra burden."],
          },
        },
        {
          id: "ee-u1-l12c1q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which wording best turns a topic into an analytical EE research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To what extent has urbanisation altered heat exposure in one city between 1990 and 2020?" },
              { id: "b", text: "Urbanisation" },
              { id: "c", text: "Is urbanisation good or bad?" },
              { id: "d", text: "The effects of urbanisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Analytical wording", statement: "Use focused terms such as 'to what extent' to require evaluation and argument." },
            ],
            steps: [
              { reasoning: "The option specifies mechanism, place and period.", marks: 1, markCode: "M" },
              { reasoning: "It asks for evaluation rather than a yes/no or list.", marks: 1, markCode: "M" },
              { reasoning: "It remains answerable within 4000 words.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To what extent has urbanisation altered heat exposure...",
            commonErrors: ["Using evaluative adjectives without a bounded question."],
          },
        },
        {
          id: "ee-u1-l12c1q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A research question requires information from twenty countries and forty years of data. What should the student do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keep it because breadth always improves quality" },
              { id: "b", text: "Delete the word count requirement" },
              { id: "c", text: "Narrow it to a feasible case, period or comparison" },
              { id: "d", text: "Ask the supervisor to write the essay" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Word-count feasibility", statement: "The question must be answerable comfortably within 4000 words." },
            ],
            steps: [
              { reasoning: "The stated scope exceeds what 4000 words can analyse deeply.", marks: 1, markCode: "M" },
              { reasoning: "Narrowing preserves depth rather than sacrificing quality.", marks: 1, markCode: "M" },
              { reasoning: "Feasibility is a Criterion A concern as well as a practical one.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Narrow the question to a feasible case",
            commonErrors: ["Confusing comprehensive coverage with strong EE analysis."],
          },
        },
        {
          id: "ee-u1-l12c1q10",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "List the qualities that make an EE research question strong.",
          parts: [
            { label: "a", prompt: "Name two formal qualities.", marks: 2 },
            { label: "b", prompt: "Name two analytical qualities.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "RQ quality", statement: "A strong question is clearly stated, focused, critical, analytical and researchable." },
            ],
            steps: [
              { part: "a", reasoning: "It must be clearly stated and genuinely focused.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It should be open to amendment if research changes direction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "It should invite critical examination and analysis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It should allow a strong line of argument within the word limit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal: clear, focused, amendable. Analytical: critical, evaluative, arguable.",
            commonErrors: ["Listing desirable traits without linking them to focus or argument."],
          },
        },
        {
          id: "ee-u1-l12c1q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "Improve the weak question 'What happened during the Cold War?'",
          parts: [
            { label: "a", prompt: "Identify two weaknesses.", marks: 2 },
            { label: "b", prompt: "Propose a stronger version.", marks: 2 },
            { label: "c", prompt: "Explain why it is stronger.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "RQ revision", statement: "Replace broad chronology with a bounded analytical relationship." },
            ],
            steps: [
              { part: "a", reasoning: "It covers too much time and too many events.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It invites narrative description rather than argument.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "For example: To what extent did nuclear deterrence stabilise superpower rivalry in Europe between 1962 and 1989?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The revision names mechanism, region and period.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It is focused enough for evidence-based evaluation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It can support a clear line of argument under Criterion C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bound the period, actors and mechanism, then ask for evaluation.",
            commonErrors: ["Adding 'to what extent' while leaving the scope unchanged."],
          },
        },
        {
          id: "ee-u1-l12c1q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Evaluate three candidate research questions for one EE.",
          parts: [
            { label: "a", prompt: "State the test for a strong question.", marks: 2 },
            { label: "b", prompt: "Compare two weak questions.", marks: 2 },
            { label: "c", prompt: "Justify the strongest candidate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Question comparison", statement: "Compare questions by focus, arguability, evidence and analytical demand." },
            ],
            steps: [
              { part: "a", reasoning: "A strong question is clear, focused, researchable and analytical.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It must fit within 4000 words and support argument.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A factual question such as 'What is X?' lacks argument.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A huge question such as 'Why do wars happen?' lacks focus.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Choose the question that combines bounded scope with evaluative demand.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It should also connect to subject concepts under Criterion A.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Select the question that is focused, arguable, feasible and analytical.",
            commonErrors: ["Choosing the most interesting question without testing scope."],
          },
        },
        {
          id: "ee-u1-l12c1q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how the research question affects Criterion A: Framework for the essay.",
          parts: [
            { label: "a", prompt: "Explain what Criterion A assesses.", marks: 2 },
            { label: "b", prompt: "Explain how a weak question limits later criteria.", marks: 3 },
            { label: "c", prompt: "Evaluate the value of revising the question early.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Criterion A", statement: "Criterion A concerns the framework: question relevance, focus, methods and structure." },
            ],
            steps: [
              { part: "a", reasoning: "It assesses whether the question, methods and structure form an effective framework.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "A clear focused question is central to that framework.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A weak question makes source selection and analysis aimless.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It limits Criteria B and C because knowledge and argument lack direction.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The essay may become descriptive instead of evaluative.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Early revision is cheap compared with rewriting later.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Supervisor feedback can expose scope problems before research deepens.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: refine the question until it can carry the whole essay.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The question is the framework; weak questions undermine later criteria, so revise early.",
            commonErrors: ["Treating the RQ as a label rather than the essay's organising principle."],
          },
        },
        {
          id: "ee-u1-l12c1q14",
          difficulty: "core",
          totalMarks: 6,
          stem: "Test whether a candidate research question is researchable.",
          parts: [
            { label: "a", prompt: "List two source checks.", marks: 2 },
            { label: "b", prompt: "List two method checks.", marks: 2 },
            { label: "c", prompt: "State the consequence of failing the test.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "RQ researchability", statement: "Researchability requires accessible evidence and feasible methods." },
            ],
            steps: [
              { part: "a", reasoning: "Check whether enough relevant sources exist.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check whether sources offer varied perspectives.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Check whether a suitable method can answer the question.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check whether the method fits the subject and word limit.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "If evidence is unavailable, the question cannot be answered properly.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Revise scope or method before committing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Verify sources, perspectives, methods and feasibility before finalising.",
            commonErrors: ["Assuming a good question automatically has enough evidence."],
          },
        },
        {
          id: "ee-u1-l12c1q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the balance between focus and breadth in an EE research question.",
          parts: [
            { label: "a", prompt: "Explain why focus is necessary.", marks: 2 },
            { label: "b", prompt: "Explain why some breadth is necessary.", marks: 3 },
            { label: "c", prompt: "Reach a judgement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimal RQ scope", statement: "The question must be narrow enough for depth but broad enough for evidence and argument." },
            ],
            steps: [
              { part: "a", reasoning: "Focus allows depth within the 4000-word limit.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It supports a coherent line of argument.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Breadth provides enough sources, cases or perspectives.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It enables discussion, comparison and evaluation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Too little breadth can make the essay trivial.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Aim for the narrowest question that still sustains analysis.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Test it against sources, word count and significance.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: optimal scope is a tested balance, not an extreme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Choose the narrowest question that still supports evidence, significance and evaluation.",
            commonErrors: ["Equating focus with making the topic trivially small."],
          },
        },
        {
          id: "ee-u1-l12c1q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Formulate and justify a research question for a chosen EE topic.",
          parts: [
            { label: "a", prompt: "State the chosen topic.", marks: 2 },
            { label: "b", prompt: "Draft one research question.", marks: 3 },
            { label: "c", prompt: "Justify the question against the 2027 guide.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "RQ formulation", statement: "A valid RQ is clear, focused, subject-grounded, analytical and feasible." },
            ],
            steps: [
              { part: "a", reasoning: "State a bounded topic within one DP subject or an integrated pair.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The topic should connect to subject concepts.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write a genuine question using terms such as 'to what extent' or 'how'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Include the key actors, period, place or mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Avoid combining two separate questions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It is focused enough for 4000 words and analytical in demand.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It invites evaluation, synthesis and a line of argument.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: the question can organise research, writing and Criterion A.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Draft one focused evaluative question and justify it through scope, evidence and subject fit.",
            commonErrors: ["Writing a title statement when the task requires a question."],
          },
        },
      ],
    },
    {
      id: "ee-u1-rq-refinement",
      title: "Refining and testing the question",
      skill: "Iteratively refine a research question through testing and supervisor feedback.",
      lesson: {
        sections: [
          {
            heading: "The iterative process",
            body: "A research question is rarely perfect on the first attempt. Draft it early, discuss with your supervisor, test it against available sources, and revise as your understanding deepens. The question may evolve significantly during research — that is normal and expected.",
          },
          {
            heading: "Common problems",
            body: "Questions that are too broad produce superficial essays. Questions that are too narrow lack evidence. Questions that are unanswerable waste time. Questions that are descriptive produce reports rather than arguments. Identify and fix these problems early.",
          },
          {
            heading: "Supervisor's role",
            body: "Your supervisor helps refine the question but does not write the essay. They point out problems, suggest sources, and challenge your assumptions. Use their feedback actively — a good supervisor-student dialogue improves the research question substantially.",
          },
        ],
        keyFormulas: [
          { name: "Refinement cycle", statement: "Draft → test → feedback → revise → repeat" },
          { name: "Supervisor role", statement: "Guides and challenges; student does the research and writing" },
        ],
        workedExample: {
          problem: "Your RQ keeps changing. Is this a problem?",
          solution: "No — refinement is normal. The question should become more focused as you learn. Document the evolution to show development in your RPF reflection. The final question should be the one your essay actually answers.",
        },
      },
      questions: [
        {
          id: "ee-u1-l12c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A research question should be refined:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never — it must stay fixed" },
              { id: "b", text: "Only once at the start" },
              { id: "c", text: "Iteratively through testing and feedback" },
              { id: "d", text: "Only by the supervisor" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Iterative refinement", statement: "Research questions evolve through testing and feedback." },
            ],
            steps: [
              { reasoning: "RQ refinement is iterative, not one-time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Iteratively through testing and feedback",
            commonErrors: ["Treating the first draft question as final."],
          },
        },
        {
          id: "ee-u1-l12c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the supervisor's role in developing the research question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supervisor role", statement: "The supervisor guides and challenges but does not write the essay." },
            ],
            steps: [
              { reasoning: "Supervisor points out problems with scope, focus or feasibility.", marks: 1, markCode: "M" },
              { reasoning: "They suggest sources and challenge assumptions.", marks: 1, markCode: "M" },
              { reasoning: "But the student must do the research and writing themselves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The supervisor guides and challenges the question but the student must own the research and writing.",
            commonErrors: ["Expecting the supervisor to write or heavily direct the essay."],
          },
        },
        {
          id: "ee-u1-l12c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that changing your research question is a sign of failure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Question evolution", statement: "Research questions naturally evolve as understanding deepens." },
            ],
            steps: [
              { reasoning: "For 'failure': frequent major changes suggest poor initial planning.", marks: 1, markCode: "M" },
              { reasoning: "Against: refinement is normal and often improves the essay.", marks: 1, markCode: "M" },
              { reasoning: "The key is whether changes are justified by new understanding.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: evolution is healthy; abandoning without reason or changing constantly is problematic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Changing the question is normal and often beneficial; only unjustified or constant changes are problematic.",
            commonErrors: ["Treating any change as failure or never changing a weak question."],
          },
        },
        {
          id: "ee-u1-l12c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the process of refining a research question.",
          parts: [
            { label: "a", prompt: "Explain why research questions evolve during the EE.", marks: 2 },
            { label: "b", prompt: "Describe three ways to test a research question.", marks: 3 },
            { label: "c", prompt: "Evaluate the supervisor's role in this process.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "RQ refinement", statement: "Questions improve through testing, feedback and deeper understanding." },
            ],
            steps: [
              { part: "a", reasoning: "Research reveals new information that changes understanding.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Deeper knowledge exposes problems with the original question.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Test word count feasibility.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Test source availability.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Test arguability and analytical depth.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Supervisor provides guidance and challenges assumptions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But must not write the essay or make decisions for the student.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: collaboration improves the question but ownership stays with student.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) New understanding evolves questions. (b) Word count, sources, arguability. (c) Guides but student owns.",
            commonErrors: ["Letting the supervisor dominate the research direction."],
          },
        },
        {
          id: "ee-u1-l12c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The research question should remain open to change when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The word count increases" },
              { id: "b", text: "The supervisor changes subjects" },
              { id: "c", text: "Research reveals a better focused or more feasible direction" },
              { id: "d", text: "The student wants an easier topic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "RQ amendment", statement: "The guide expects the question to be open to amendment as research develops." },
            ],
            steps: [
              { reasoning: "Change should be justified by evidence or deeper understanding.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Research reveals a better focused direction",
            commonErrors: ["Treating every revision as weakness."],
          },
        },
        {
          id: "ee-u1-l12c2q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which action best uses supervisor feedback on a draft research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore comments until the essay is finished" },
              { id: "b", text: "Test the feedback against sources, scope and your own understanding" },
              { id: "c", text: "Accept every suggestion without checking it" },
              { id: "d", text: "Ask the supervisor to choose the final question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feedback use", statement: "Supervisor feedback should be evaluated and integrated by the student." },
            ],
            steps: [
              { reasoning: "Feedback is guidance, not automatic instruction.", marks: 1, markCode: "M" },
              { reasoning: "The student must test whether it improves focus and feasibility.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Test feedback against sources and scope",
            commonErrors: ["Either ignoring feedback or surrendering ownership of the question."],
          },
        },
        {
          id: "ee-u1-l12c2q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should a student keep records of research-question changes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show how evidence and understanding shaped the final question" },
              { id: "b", text: "To avoid all future revisions" },
              { id: "c", text: "To increase the word count" },
              { id: "d", text: "To prove the supervisor wrote the essay" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "RQ documentation", statement: "Records of change show development and can support later reflection." },
            ],
            steps: [
              { reasoning: "Changes are normal when justified by research.", marks: 1, markCode: "M" },
              { reasoning: "Documentation helps explain the evolution to supervisors and in the RPF.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To show evidence-based development",
            commonErrors: ["Hiding revisions because they are mistakenly seen as failure."],
          },
        },
        {
          id: "ee-u1-l12c2q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A draft RQ is clear but cannot be answered with accessible sources. What is the best response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Move the question to the title page unchanged" },
              { id: "b", text: "Keep it unchanged because clarity is enough" },
              { id: "c", text: "Write only about the sources that are unavailable" },
              { id: "d", text: "Revise scope, method or question to improve feasibility" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feasible revision", statement: "A good question must be both clear and researchable." },
            ],
            steps: [
              { reasoning: "Clarity alone does not guarantee researchability.", marks: 1, markCode: "M" },
              { reasoning: "Scope, period, actors or method may need adjustment.", marks: 1, markCode: "M" },
              { reasoning: "Revision should preserve the analytical demand.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Revise for feasibility",
            commonErrors: ["Confusing a well-written question with a feasible one."],
          },
        },
        {
          id: "ee-u1-l12c2q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which revision most improves a research question that has become descriptive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ask 'to what extent' a specific factor shaped a bounded outcome" },
              { id: "b", text: "Change only the punctuation" },
              { id: "c", text: "Make the question longer without adding evaluation" },
              { id: "d", text: "Add more background information" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Analytical revision", statement: "Descriptive questions should be revised to require evaluation and argument." },
            ],
            steps: [
              { reasoning: "The revision introduces an evaluative relationship.", marks: 1, markCode: "M" },
              { reasoning: "It bounds the factor and outcome for focus.", marks: 1, markCode: "M" },
              { reasoning: "It supports analysis rather than narrative.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Add a bounded evaluative relationship",
            commonErrors: ["Lengthening the question without increasing analytical demand."],
          },
        },
        {
          id: "ee-u1-l12c2q10",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain the iterative cycle for refining a research question.",
          parts: [
            { label: "a", prompt: "Name the stages of the cycle.", marks: 2 },
            { label: "b", prompt: "Explain why repetition is useful.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Refinement cycle", statement: "Draft, test, seek feedback, revise and repeat." },
            ],
            steps: [
              { part: "a", reasoning: "Draft a question, test scope and sources, receive feedback and revise.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Repeat as understanding and evidence develop.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each cycle exposes weaknesses before more research is invested.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It allows the question to become more precise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Refine through draft-test-feedback-revise cycles until the question carries the essay.",
            commonErrors: ["Treating the first draft as final."],
          },
        },
        {
          id: "ee-u1-l12c2q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "Diagnose four common problems in a draft research question.",
          parts: [
            { label: "a", prompt: "Identify two wording problems.", marks: 2 },
            { label: "b", prompt: "Identify two scope problems.", marks: 2 },
            { label: "c", prompt: "Explain how to fix each type.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "RQ diagnosis", statement: "Check whether the question is a genuine analytical question with feasible scope." },
            ],
            steps: [
              { part: "a", reasoning: "It may be a statement, hypothesis or double-barrelled question.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It may ask for description rather than evaluation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "It may be too broad for 4000 words.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It may be too narrow for enough evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rewrite as one focused evaluative question.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adjust time, place, actors or aspect to fit evidence and word count.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fix wording by making it one analytical question; fix scope by matching evidence and word count.",
            commonErrors: ["Revising only grammar while leaving structural problems."],
          },
        },
        {
          id: "ee-u1-l12c2q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student receives supervisor feedback that the RQ is too broad. Explain how to respond.",
          parts: [
            { label: "a", prompt: "Clarify the problem.", marks: 2 },
            { label: "b", prompt: "Propose two revisions.", marks: 2 },
            { label: "c", prompt: "Explain how to test the revisions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Feedback response", statement: "Translate feedback into concrete scope tests and revised questions." },
            ],
            steps: [
              { part: "a", reasoning: "The question likely covers too many actors, periods or outcomes.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This threatens depth within the word limit.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Restrict the period or place.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Restrict the actors or the aspect analysed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check word-count fit, source coverage and arguability.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ask the supervisor whether the revision preserves focus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Narrow the question, then test it against word count, sources and supervisor feedback.",
            commonErrors: ["Making the question smaller without checking evidence."],
          },
        },
        {
          id: "ee-u1-l12c2q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate when changing a research question is justified.",
          parts: [
            { label: "a", prompt: "Give two justified reasons to change.", marks: 2 },
            { label: "b", prompt: "Give two problematic reasons to change.", marks: 3 },
            { label: "c", prompt: "Reach a judgement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justified change", statement: "Revision is justified by evidence, feasibility or deeper understanding." },
            ],
            steps: [
              { part: "a", reasoning: "New sources may reveal a better focused question.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The original may prove infeasible or descriptive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Changing because the topic is difficult is not enough.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Changing repeatedly without accumulating research is unstable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Changing to please others can weaken ownership.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Change when evidence shows the current question cannot carry the essay.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Document the reason and discuss it with the supervisor.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: justified evolution is healthy; aimless churn is not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Change for evidence-based reasons, not convenience or pressure.",
            commonErrors: ["Either never revising or revising without justification."],
          },
        },
        {
          id: "ee-u1-l12c2q14",
          difficulty: "core",
          totalMarks: 6,
          stem: "Plan a realistic timeline for testing and refining the research question.",
          parts: [
            { label: "a", prompt: "Describe the early test.", marks: 2 },
            { label: "b", prompt: "Describe the mid-project test.", marks: 2 },
            { label: "c", prompt: "Describe the final check.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "RQ testing timeline", statement: "Test early for feasibility, midway for evidence and finally for alignment." },
            ],
            steps: [
              { part: "a", reasoning: "Check focus, word count and basic source availability.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Discuss the draft with the supervisor.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Test whether real sources answer the question.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Revise if evidence is insufficient or irrelevant.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Confirm the final question matches the essay's argument.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Record the evolution for the RPF reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Test early, revise during research and confirm alignment before submission.",
            commonErrors: ["Waiting until the end to test the question."],
          },
        },
        {
          id: "ee-u1-l12c2q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how research-question refinement connects to assessment criteria.",
          parts: [
            { label: "a", prompt: "Explain the link to Criterion A.", marks: 2 },
            { label: "b", prompt: "Explain the link to Criteria B and C.", marks: 3 },
            { label: "c", prompt: "Explain the link to Criterion E.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Assessment links", statement: "Question quality affects framework, knowledge, analysis and reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A rewards a relevant, clear and focused question.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Refinement improves that framework directly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A focused question guides source selection under Criterion B.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It enables analytical argument under Criterion C.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weak refinement leaves research unfocused.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explaining changes in the RPF can show evaluative growth.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Criterion E rewards reflection on process and learning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: documented refinement benefits both essay and reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Refinement strengthens Criterion A and later criteria; documenting it can support Criterion E.",
            commonErrors: ["Seeing question changes as irrelevant to assessment."],
          },
        },
        {
          id: "ee-u1-l12c2q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Develop a protocol for managing research-question evolution.",
          parts: [
            { label: "a", prompt: "State the protocol's purpose.", marks: 2 },
            { label: "b", prompt: "List three protocol steps.", marks: 3 },
            { label: "c", prompt: "Evaluate how it protects essay quality.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "RQ management", statement: "Manage evolution through evidence, feedback, documentation and alignment." },
            ],
            steps: [
              { part: "a", reasoning: "The protocol keeps revisions purposeful and traceable.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It prevents aimless changes that fragment the essay.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Record each version and the reason for change.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Test each version against sources and word count.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Discuss significant changes with the supervisor.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It protects Criterion A by preserving focus.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It supports Criterion E by showing evaluative development.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: controlled evolution improves rather than weakens the essay.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Document, test and discuss each revision so changes strengthen the framework.",
            commonErrors: ["Revising silently without evidence or records."],
          },
        },
      ],
    },
  ],
};
