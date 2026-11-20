import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ee-u2-lesson-2-1",
  code: "2-1",
  title: "Research Methods and Primary Sources",
  goal: "I CAN choose appropriate research methods and use primary sources effectively in the Extended Essay.",
  standards: ["EE", "Research Methods", "Primary Sources"],
  vocabulary: [
    { term: "Primary source", definition: "Evidence produced at the time of the event or by the subject of study." },
    { term: "Secondary source", definition: "Later analysis or interpretation of primary material." },
    { term: "Research method", definition: "The systematic approach used to gather evidence: experiment, survey, interview, archival research." },
    { term: "Qualitative data", definition: "Non-numerical evidence: interviews, observations, texts." },
    { term: "Quantitative data", definition: "Numerical evidence: statistics, measurements, survey results." },
    { term: "Source criticism", definition: "The evaluation of a source's reliability, bias and context." },
  ],
  concepts: [
    {
      id: "ee-u2-research-methods",
      title: "Choosing research methods",
      skill: "Select appropriate research methods for the EE based on the research question and subject.",
      lesson: {
        sections: [
          {
            heading: "Matching method to question",
            body: "The research question determines the method. 'How did X influence Y?' may need archival research or interviews. 'What is the effect of X on Y?' may need quantitative data analysis. 'Why did people believe X?' may need qualitative interviews. The method must serve the question, not the reverse.",
          },
          {
            heading: "Common EE methods",
            body: "**Archival research**: documents, newspapers, official records. **Interviews/surveys**: firsthand accounts and data. **Experiments**: controlled tests (rare in EE due to ethics). **Textual analysis**: close reading of literature, art, media. **Data analysis**: statistical treatment of existing datasets.",
          },
          {
            heading: "Feasibility check",
            body: "Before committing to a method, check: Can you access the sources? Can you collect data ethically? Can you analyse it within 4000 words? Methods that are theoretically ideal but practically impossible should be avoided — feasibility matters as much as elegance.",
          },
        ],
        keyFormulas: [
          { name: "Method selection", statement: "Research question → appropriate method → feasible within constraints" },
          { name: "Method types", statement: "Archival, interview, survey, experiment, textual analysis, data analysis" },
        ],
        workedExample: {
          problem: "RQ: 'How did propaganda influence public opinion in WWII?' Choose a method.",
          solution: "Archival research: analyse wartime propaganda posters, speeches and newspapers from primary archives. Supplement with secondary historical analysis. This is feasible within 4000 words and directly serves the question.",
        },
      },
      questions: [
        {
          id: "ee-u2-l21c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A primary source is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A later textbook analysis" },
              { id: "b", text: "Evidence produced at the time of the event" },
              { id: "c", text: "A review article" },
              { id: "d", text: "A Wikipedia entry" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primary source", statement: "Evidence produced at the time of the event or by the subject of study." },
            ],
            steps: [
              { reasoning: "Primary sources are contemporary evidence; later analyses are secondary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Evidence produced at the time of the event",
            commonErrors: ["Confusing primary and secondary sources."],
          },
        },
        {
          id: "ee-u2-l21c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the research question should determine the research method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method-question fit", statement: "The method must serve the question, not the reverse." },
            ],
            steps: [
              { reasoning: "Different questions require different types of evidence.", marks: 1, markCode: "M" },
              { reasoning: "Causal questions need different methods than descriptive ones.", marks: 1, markCode: "M" },
              { reasoning: "Choosing method first risks asking a question the method cannot answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The method must match the question's demands — causal, descriptive or evaluative questions need different approaches.",
            commonErrors: ["Choosing a method for convenience rather than suitability."],
          },
        },
        {
          id: "ee-u2-l21c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of feasibility in choosing research methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feasibility", statement: "A theoretically ideal method is useless if practically impossible." },
            ],
            steps: [
              { reasoning: "For feasibility: inaccessible sources or unethical methods make research impossible.", marks: 1, markCode: "M" },
              { reasoning: "Against: compromising method for feasibility may weaken the essay.", marks: 1, markCode: "M" },
              { reasoning: "The best method is the best feasible method — adjust question or approach if needed.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: feasibility is a primary constraint; choose methods you can actually execute.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Feasibility is essential — choose the best method you can actually carry out within constraints.",
            commonErrors: ["Choosing ideal methods without checking practical access."],
          },
        },
        {
          id: "ee-u2-l21c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to choose appropriate research methods for the EE.",
          parts: [
            { label: "a", prompt: "Explain the relationship between research question and method.", marks: 2 },
            { label: "b", prompt: "Describe three common EE research methods.", marks: 3 },
            { label: "c", prompt: "Evaluate how feasibility constrains method choice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method selection", statement: "Method must serve the question and be feasible within constraints." },
            ],
            steps: [
              { part: "a", reasoning: "The question determines what evidence is needed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Method must produce that evidence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Archival research: documents and records.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interviews/surveys: firsthand data.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Textual/data analysis: close reading or statistics.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Access to sources constrains method choice.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ethical and time constraints also limit options.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: choose best feasible method, adjusting question if needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Question determines method. (b) Archival, interviews, analysis. (c) Feasibility constrains choice.",
            commonErrors: ["Choosing methods that are theoretically ideal but practically impossible."],
          },
        },
        {
          id: "ee-u2-l21c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student wants to investigate how students in their own school feel about a new uniform policy. The most feasible method is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Archival research in national government records" },
              { id: "b", text: "A survey or interviews of students at the school" },
              { id: "c", text: "A controlled laboratory experiment" },
              { id: "d", text: "Analysis of international statistics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method fit", statement: "The method must match the question and be feasible within constraints." },
            ],
            steps: [
              { reasoning: "The question asks about a specific accessible group, so direct data collection is needed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A survey or interviews of students at the school",
            commonErrors: ["Choosing a method that cannot access the relevant population."],
          },
        },
        {
          id: "ee-u2-l21c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Textual analysis is most appropriate for an EE on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The symbolism in a novel" },
              { id: "b", text: "The growth rate of bacteria" },
              { id: "c", text: "Voting patterns in elections" },
              { id: "d", text: "Chemical reactions in a laboratory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method-question fit", statement: "The method must produce the evidence the question requires." },
            ],
            steps: [
              { reasoning: "Textual analysis involves close reading of texts, suited to literature and ideas.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The symbolism in a novel",
            commonErrors: ["Choosing textual analysis for questions requiring numerical or experimental data."],
          },
        },
        {
          id: "ee-u2-l21c1q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'How did trade influence the economy?' and 'What is the effect of trade on the economy?' may require different research methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Question determines method", statement: "Different question types demand different types of evidence." },
            ],
            steps: [
              { reasoning: "'How did' asks about a historical process, needing evidence of change over time.", marks: 1, markCode: "M" },
              { reasoning: "'What is the effect' asks for measurable outcomes, needing quantitative or comparative data.", marks: 1, markCode: "M" },
              { reasoning: "The methods must produce the evidence each question type requires.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Historical 'how' questions suit archival or documentary methods; 'effect' questions suit quantitative or comparative analysis.",
            commonErrors: ["Using the same method regardless of question type."],
          },
        },
        {
          id: "ee-u2-l21c1q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what a feasibility check should include before committing to a research method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feasibility", statement: "A method must be accessible, ethical and completable within constraints." },
            ],
            steps: [
              { reasoning: "Check access: can the needed sources or participants actually be reached?", marks: 1, markCode: "M" },
              { reasoning: "Check ethics: can data be collected without harming participants or breaking rules?", marks: 1, markCode: "M" },
              { reasoning: "Check limits: can the work be completed within the word count and timeline?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Feasibility checks cover access to sources, ethical acceptability and completion within time and word limits.",
            commonErrors: ["Checking elegance of method instead of practical feasibility."],
          },
        },
        {
          id: "ee-u2-l21c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Experimental methods are rare in the EE mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are always scientifically inaccurate" },
              { id: "b", text: "Ethical approval, access and time constraints make them impractical" },
              { id: "c", text: "Examiners forbid all experiments" },
              { id: "d", text: "They produce only qualitative data" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feasibility", statement: "Practical constraints often rule out otherwise suitable methods." },
            ],
            steps: [
              { reasoning: "Experiments need ethics approval, controlled conditions and time most EE students lack.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ethical approval, access and time constraints make them impractical",
            commonErrors: ["Assuming experiments are banned rather than impractical."],
          },
        },
        {
          id: "ee-u2-l21c1q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student proposes testing the effect of different fertilisers on plant growth in a school garden as an EE. Evaluate the feasibility of this method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feasibility", statement: "Feasible methods are accessible, ethical and completable in the available time." },
            ],
            steps: [
              { reasoning: "For feasibility: plants, garden space and fertilisers are accessible and ethical issues are minimal.", marks: 1, markCode: "M" },
              { reasoning: "Against: plant growth takes weeks or months, needing careful timing and controls within the EE timeline.", marks: 1, markCode: "M" },
              { reasoning: "Word limit constraint: a full experiment report may exceed 4000 words if not scoped narrowly.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: feasible if narrowly scoped — limit variables and duration; otherwise adjust the question.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The method is accessible and ethical but time- and scope-constrained; feasible only if narrowly designed.",
            commonErrors: ["Ignoring the time plants need to grow within the EE schedule."],
          },
        },
        {
          id: "ee-u2-l21c1q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which pairing of research question and method is least appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Why did artists use symbolism?' — textual analysis" },
              { id: "b", text: "'How many people held this view?' — survey" },
              { id: "c", text: "'To what extent did X cause Y?' — a single informal interview" },
              { id: "d", text: "'What changed in official policy?' — archival research" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method-question fit", statement: "Causal and general claims need broader evidence than one anecdote." },
            ],
            steps: [
              { reasoning: "A single interview cannot support a causal or general claim about 'to what extent'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 'To what extent did X cause Y?' — a single informal interview",
            commonErrors: ["Thinking any evidence type can answer any question."],
          },
        },
        {
          id: "ee-u2-l21c1q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the most rigorous research method is always the best choice for an EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method selection", statement: "The best method serves the question and is actually executable." },
            ],
            steps: [
              { reasoning: "For: rigorous methods produce stronger, more convincing evidence.", marks: 1, markCode: "M" },
              { reasoning: "Against: maximum rigour may be inaccessible, unethical or impossible within constraints.", marks: 1, markCode: "M" },
              { reasoning: "A rigorous method that cannot be completed yields no essay at all.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: choose the most rigorous method that is feasible, not the most rigorous in theory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rigour matters, but only within feasibility — the best EE method is rigorous and executable.",
            commonErrors: ["Choosing theoretical rigour over practical completion."],
          },
        },
        {
          id: "ee-u2-l21c1q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a student can refine a research question so that it matches a feasible method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method selection", statement: "The question should be shaped so an accessible method can answer it." },
            ],
            steps: [
              { reasoning: "Narrow the scope: limit geography, period or population so sources are reachable.", marks: 1, markCode: "M" },
              { reasoning: "Verify sources exist: check that primary or secondary material is accessible before committing.", marks: 1, markCode: "M" },
              { reasoning: "Test against constraints: ensure the refined question can be answered within 4000 words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Refine by narrowing scope, confirming accessible sources and checking the word limit.",
            commonErrors: ["Keeping a broad question and hoping the method will cope."],
          },
        },
        {
          id: "ee-u2-l21c1q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "To what extent should the student's own skills and interests influence the choice of research method?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method selection", statement: "Personal fit affects quality but must not override question fit." },
            ],
            steps: [
              { reasoning: "For: interest and skill sustain motivation and improve analytical quality over months.", marks: 1, markCode: "M" },
              { reasoning: "Against: choosing a comfortable method may not suit the question or produce needed evidence.", marks: 1, markCode: "M" },
              { reasoning: "Personal fit is a feasibility factor — skill determines what can actually be executed well.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: let skills shape method choice only within what the question genuinely requires.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Skills and interests matter as feasibility factors but must not override the question's demands.",
            commonErrors: ["Letting preference choose a method that cannot answer the question."],
          },
        },
        {
          id: "ee-u2-l21c1q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A research method is considered feasible for the EE when it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Theoretically the most rigorous" },
              { id: "b", text: "Accessible, ethical and completable within time and word limits" },
              { id: "c", text: "The newest method available" },
              { id: "d", text: "The method used by most students" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feasibility", statement: "Feasibility means the method can actually be carried out within constraints." },
            ],
            steps: [
              { reasoning: "Feasibility concerns access, ethics and completion limits, not novelty or popularity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Accessible, ethical and completable within time and word limits",
            commonErrors: ["Confusing feasible with popular or novel."],
          },
        },
        {
          id: "ee-u2-l21c1q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to choose appropriate research methods for an EE.",
          parts: [
            { label: "a", prompt: "Explain how the research question determines the method.", marks: 2 },
            { label: "b", prompt: "Describe three common EE research methods.", marks: 3 },
            { label: "c", prompt: "Evaluate how feasibility constrains method choice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method selection", statement: "Choose the most rigorous method that the question requires and constraints allow." },
            ],
            steps: [
              { part: "a", reasoning: "The question determines what evidence is needed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Method must produce that evidence type.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Archival research: documents, newspapers, official records.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interviews or surveys: firsthand accounts and data.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Textual or data analysis: close reading or statistics.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Access to sources and participants constrains options.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ethical and time constraints further limit choices.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: choose the best feasible method, refining the question if needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Question sets evidence needs. (b) Archival, interviews, analysis. (c) Constraints bound the choice.",
            commonErrors: ["Treating method choice as independent of the question."],
          },
        },
      ],
    },
    {
      id: "ee-u2-primary-sources",
      title: "Using primary sources",
      skill: "Locate, evaluate and use primary sources effectively in the EE.",
      lesson: {
        sections: [
          {
            heading: "Types of primary sources",
            body: "Primary sources vary by subject: historical documents and archives; scientific data and lab results; literary texts and artworks; interview transcripts; survey data; official statistics. The type depends on your subject and research question.",
          },
          {
            heading: "Evaluating primary sources",
            body: "Every primary source has context: who created it, when, why, for whom? A government report reflects official perspective; a diary reflects personal experience; a scientific dataset reflects measurement choices. Source criticism asks: Is this representative? What biases might it contain? What is missing?",
          },
          {
            heading: "Integrating sources",
            body: "Primary sources should support your argument, not just decorate it. Quote or cite them accurately, explain their significance, and connect them to your research question. A strong EE uses sources as evidence for claims, not as a list of facts.",
          },
        ],
        keyFormulas: [
          { name: "Source evaluation", statement: "Who, when, why, for whom — context determines reliability" },
          { name: "Integration rule", statement: "Sources are evidence for arguments, not decoration" },
        ],
        workedExample: {
          problem: "Evaluate a WWII propaganda poster as a primary source.",
          solution: "Context: created by government for public consumption — reflects official ideology, not necessarily truth. Useful for studying propaganda techniques and intended messages, less reliable for factual claims about the war itself.",
        },
      },
      questions: [
        {
          id: "ee-u2-l21c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a primary source for a history EE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A modern history textbook" },
              { id: "b", text: "A WWII diary entry" },
              { id: "c", text: "A review article" },
              { id: "d", text: "A documentary film" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primary source", statement: "Evidence produced at the time of the event or by the subject." },
            ],
            steps: [
              { reasoning: "A diary is contemporary evidence; textbooks and reviews are secondary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A WWII diary entry",
            commonErrors: ["Confusing primary sources with secondary analyses."],
          },
        },
        {
          id: "ee-u2-l21c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why context matters when evaluating a primary source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Source context", statement: "Who created a source, when, and why determines its reliability and bias." },
            ],
            steps: [
              { reasoning: "The creator's perspective and purpose shape what the source says.", marks: 1, markCode: "M" },
              { reasoning: "The historical context affects what was sayable or thinkable.", marks: 1, markCode: "M" },
              { reasoning: "Audience and intended use affect how information was presented.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Context reveals the source's perspective, purpose and limitations — essential for accurate interpretation.",
            commonErrors: ["Treating sources as neutral records of fact."],
          },
        },
        {
          id: "ee-u2-l21c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that primary sources are always more reliable than secondary sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Primary vs secondary", statement: "Primary sources are closer to events but may be biased; secondary sources offer perspective but add interpretation." },
            ],
            steps: [
              { reasoning: "For: primary sources are direct evidence, less mediated by later interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Against: primary sources can be biased, incomplete or misleading; secondary sources may correct errors.", marks: 1, markCode: "M" },
              { reasoning: "Best practice: use both, cross-checking primary against secondary analysis.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: neither is automatically superior — reliability depends on context and criticism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary sources are closer but not automatically more reliable; both types require critical evaluation.",
            commonErrors: ["Assuming primary sources are infallible."],
          },
        },
        {
          id: "ee-u2-l21c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to use primary sources in the EE.",
          parts: [
            { label: "a", prompt: "Define primary sources and give two examples.", marks: 2 },
            { label: "b", prompt: "Explain three questions for evaluating a primary source.", marks: 3 },
            { label: "c", prompt: "Evaluate how to integrate primary sources into an argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Primary source use", statement: "Sources are evidence for arguments, evaluated for context and bias." },
            ],
            steps: [
              { part: "a", reasoning: "Definition: evidence produced at the time or by the subject.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Examples: diary, official document, dataset, literary text.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Who created it and why?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "What was the intended audience and purpose?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "What biases or limitations does it contain?", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Quote accurately and cite properly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain the source's significance to your argument.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Connect sources to claims — use as evidence, not decoration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Contemporary evidence. (b) Creator, purpose, bias. (c) Cite, explain, connect to argument.",
            commonErrors: ["Quoting sources without analysing their significance."],
          },
        },
        {
          id: "ee-u2-l21c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a primary source for a science EE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A published review article" },
              { id: "b", text: "Raw experimental data collected by the student" },
              { id: "c", text: "A textbook chapter" },
              { id: "d", text: "A news report about the topic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primary source", statement: "Evidence produced at the time of the event or by the subject of study." },
            ],
            steps: [
              { reasoning: "Data the student collects directly is primary evidence; reviews, textbooks and news reports are secondary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Raw experimental data collected by the student",
            commonErrors: ["Classifying published commentary as primary evidence."],
          },
        },
        {
          id: "ee-u2-l21c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Source criticism primarily means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Criticising the author personally" },
              { id: "b", text: "Evaluating a source's reliability, bias and context" },
              { id: "c", text: "Finding spelling errors in sources" },
              { id: "d", text: "Rejecting all sources" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Source criticism", statement: "The evaluation of a source's reliability, bias and context." },
            ],
            steps: [
              { reasoning: "Source criticism assesses reliability, bias and context rather than attacking authors.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Evaluating a source's reliability, bias and context",
            commonErrors: ["Confusing source criticism with personal criticism of authors."],
          },
        },
        {
          id: "ee-u2-l21c2q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a government report may be a biased primary source even though it is a primary source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Source context", statement: "A source's creator, purpose and audience shape what it presents." },
            ],
            steps: [
              { reasoning: "A government report serves official purposes and may present information selectively.", marks: 1, markCode: "M" },
              { reasoning: "It reflects the government's perspective and interests, not neutral fact.", marks: 1, markCode: "M" },
              { reasoning: "Being primary does not remove bias — context must be analysed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Government reports are primary but reflect official perspective and selective presentation, so bias must be accounted for.",
            commonErrors: ["Assuming primary status guarantees neutrality."],
          },
        },
        {
          id: "ee-u2-l21c2q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three questions a student should ask when evaluating any primary source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source evaluation", statement: "Ask who created the source, why, and what it may be missing." },
            ],
            steps: [
              { reasoning: "Who created it and when? The creator's position shapes the content.", marks: 1, markCode: "M" },
              { reasoning: "Why was it created and for whom? Purpose and audience affect presentation.", marks: 1, markCode: "M" },
              { reasoning: "What might it omit or distort? Representativeness and bias need checking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ask who created it and why, for what audience, and what it may omit or distort.",
            commonErrors: ["Evaluating content without considering creator and purpose."],
          },
        },
        {
          id: "ee-u2-l21c2q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For studying public opinion during WWII, the most appropriate primary source is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A modern history textbook" },
              { id: "b", text: "Contemporary newspaper editorials and letters to the editor" },
              { id: "c", text: "A recent documentary film" },
              { id: "d", text: "An encyclopedia entry" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Source selection", statement: "Sources must be contemporary with and relevant to the question." },
            ],
            steps: [
              { reasoning: "Newspapers and letters are contemporary records of public opinion; the others are later or general sources.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Contemporary newspaper editorials and letters to the editor",
            commonErrors: ["Choosing modern summaries instead of contemporary evidence."],
          },
        },
        {
          id: "ee-u2-l21c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a student should quote and analyse a primary source within an EE argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Integration rule", statement: "Sources are evidence for arguments, not decoration." },
            ],
            steps: [
              { reasoning: "Quote accurately with quotation marks and a proper citation.", marks: 1, markCode: "M" },
              { reasoning: "Provide context: explain who created the source and under what circumstances.", marks: 1, markCode: "M" },
              { reasoning: "Analyse significance: explain what the source shows about the research question.", marks: 1, markCode: "M" },
              { reasoning: "Connect explicitly to the claim the source is being used to support.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quote precisely, supply context, analyse significance and tie the source to the argument's claim.",
            commonErrors: ["Quoting without analysing what the source demonstrates."],
          },
        },
        {
          id: "ee-u2-l21c2q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which practice best integrates a primary source into an EE argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listing the source in the bibliography without discussing it" },
              { id: "b", text: "Quoting the source and explaining what it shows about the research question" },
              { id: "c", text: "Paraphrasing the source without citation" },
              { id: "d", text: "Quoting the longest possible passage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Integration rule", statement: "Sources support arguments through accurate citation and explained significance." },
            ],
            steps: [
              { reasoning: "Integration means using the source as evidence for a claim, with citation and analysis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Quoting the source and explaining what it shows about the research question",
            commonErrors: ["Treating citation as mere decoration of the argument."],
          },
        },
        {
          id: "ee-u2-l21c2q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that primary sources alone are sufficient for an EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Primary vs secondary", statement: "Primary sources give direct evidence but lack expert context and interpretation." },
            ],
            steps: [
              { reasoning: "For: primary sources are direct, unmediated evidence closest to events.", marks: 1, markCode: "M" },
              { reasoning: "Against: they may be biased, incomplete or hard to interpret without expert analysis.", marks: 1, markCode: "M" },
              { reasoning: "Secondary sources supply the context and scholarly debate that frame primary evidence.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: primary sources alone are rarely sufficient — they need secondary framing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary sources provide essential evidence but need secondary sources for context and interpretation.",
            commonErrors: ["Assuming direct evidence needs no interpretation."],
          },
        },
        {
          id: "ee-u2-l21c2q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the appropriate type of primary source depends on the subject of the EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Source types", statement: "Different subjects generate different kinds of primary evidence." },
            ],
            steps: [
              { reasoning: "Sciences rely on experimental data, measurements and lab results.", marks: 1, markCode: "M" },
              { reasoning: "History uses documents, archives, newspapers and official records.", marks: 1, markCode: "M" },
              { reasoning: "Literature uses texts and artworks; social sciences often use interviews and surveys.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The subject determines the source type: data for sciences, documents for history, texts for literature, firsthand accounts for social research.",
            commonErrors: ["Using the same source type across all subjects."],
          },
        },
        {
          id: "ee-u2-l21c2q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A diary written thirty years after the events it describes is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A secondary source because it was written later" },
              { id: "b", text: "A primary source, but with limitations from memory and hindsight" },
              { id: "c", text: "Unusable as evidence" },
              { id: "d", text: "A secondary source because diaries are always secondary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Primary vs secondary", statement: "Primary status depends on the creator's relation to events, not just date." },
            ],
            steps: [
              { reasoning: "A participant's diary is primary evidence, but recall and hindsight introduce limitations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A primary source, but with limitations from memory and hindsight",
            commonErrors: ["Classifying by date alone rather than the creator's relationship to events."],
          },
        },
        {
          id: "ee-u2-l21c2q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the value of triangulating primary sources with secondary analysis in the EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Triangulation", statement: "Supporting claims with different evidence types strengthens reliability." },
            ],
            steps: [
              { reasoning: "Triangulation means corroborating claims across primary and secondary sources.", marks: 1, markCode: "M" },
              { reasoning: "Primary sources give direct evidence; secondary analysis supplies context and expert judgement.", marks: 1, markCode: "M" },
              { reasoning: "Where independent sources converge, confidence in the claim increases.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: triangulation produces more robust arguments than either source type alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Triangulating primary and secondary sources corroborates claims and strengthens the argument.",
            commonErrors: ["Relying on a single source type for all claims."],
          },
        },
        {
          id: "ee-u2-l21c2q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to use primary sources in an EE.",
          parts: [
            { label: "a", prompt: "Define primary sources and give two examples.", marks: 2 },
            { label: "b", prompt: "Explain three questions for evaluating a primary source.", marks: 3 },
            { label: "c", prompt: "Evaluate how to integrate primary sources into an argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Primary source use", statement: "Sources are evaluated for context, then used as evidence for arguments." },
            ],
            steps: [
              { part: "a", reasoning: "Definition: evidence produced at the time or by the subject.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Examples: diary, official document, dataset, literary text.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Who created it and under what circumstances?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "What was its purpose and intended audience?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "What biases, omissions or limitations does it contain?", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Quote accurately and cite the source properly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain the source's significance for the claim being made.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: sources should function as evidence, not decoration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Contemporary evidence. (b) Creator, purpose, bias. (c) Cite, explain, connect to argument.",
            commonErrors: ["Collecting sources without evaluating or deploying them analytically."],
          },
        },
      ],
    },
  ],
};
