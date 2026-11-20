import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ee-u1-lesson-1-1",
  code: "1-1",
  title: "Selecting a Subject and Topic",
  goal: "I CAN select an appropriate subject and narrow topic for the Extended Essay and justify the choice.",
  standards: ["EE", "Subject Selection", "Topic Choice"],
  vocabulary: [
    { term: "Extended Essay", definition: "An independent research essay of up to 4000 words forming part of the DP core." },
    { term: "Subject", definition: "One of the DP subjects in which the essay may be written." },
    { term: "Topic", definition: "A broad area of study within the chosen subject." },
    { term: "Research question", definition: "The focused, arguable question the essay seeks to answer." },
    { term: "Scope", definition: "The boundaries of the essay — what will and will not be covered." },
    { term: "Supervisor", definition: "A teacher who guides the essay but does not write it for the student." },
  ],
  concepts: [
    {
      id: "ee-u1-subject-selection",
      title: "Choosing the right subject",
      skill: "Evaluate which DP subject is best suited for an Extended Essay and justify the choice.",
      lesson: {
        sections: [
          {
            heading: "EE subject rules",
            body: "The Extended Essay can be written in most DP subjects: Group 1 and 2 languages, Group 3 humanities, Group 4 sciences, Group 5 mathematics, Group 6 arts. It cannot be written in a subject the student does not study — with limited exceptions for interdisciplinary topics. World Studies was discontinued; check current IB rules.",
          },
          {
            heading: "Choosing for success",
            body: "Pick a subject you genuinely enjoy and where you have interest beyond the syllabus. The essay requires sustained independent work over months — enthusiasm matters more than prestige. A subject you find boring will produce a weaker essay than one you find fascinating.",
          },
          {
            heading: "Interdisciplinary options",
            body: "Some students write on topics spanning two subjects (e.g. the economics of a historical event, the physics of a musical instrument). These must still be anchored in one subject and approved by the supervisor. The EE rewards depth, not breadth.",
          },
        ],
        keyFormulas: [
          { name: "EE rule", statement: "Essay must be in a studied DP subject; supervised and research-based" },
          { name: "Selection test", statement: "Choose a subject you can sustain interest in for months" },
        ],
        workedExample: {
          problem: "A student enjoys both history and economics. Which subject for the EE?",
          solution: "Choose the one where they have stronger research skills and access to sources. History offers archives and primary sources; economics offers data and models. Either works if the student has genuine interest — the deciding factor is sustained motivation.",
        },
      },
      questions: [
        {
          id: "ee-u1-l11c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The Extended Essay must be written in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any subject the student chooses" },
              { id: "b", text: "A DP subject the student studies" },
              { id: "c", text: "Only Group 3 subjects" },
              { id: "d", text: "Only sciences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "EE subject rule", statement: "The essay must be in a DP subject the student studies." },
            ],
            steps: [
              { reasoning: "EE must be in a studied DP subject with supervision.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A DP subject the student studies",
            commonErrors: ["Assuming any topic is allowed regardless of subject."],
          },
        },
        {
          id: "ee-u1-l11c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why personal interest matters when choosing an EE subject.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interest and sustainability", statement: "The essay requires months of independent work — sustained motivation is essential." },
            ],
            steps: [
              { reasoning: "The EE is a long independent project requiring self-direction.", marks: 1, markCode: "M" },
              { reasoning: "Interest sustains motivation through the research and writing phases.", marks: 1, markCode: "M" },
              { reasoning: "Genuine enthusiasm produces deeper engagement and better essays.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Personal interest sustains motivation over months of independent work and leads to deeper, better essays.",
            commonErrors: ["Choosing a 'prestigious' subject over one the student enjoys."],
          },
        },
        {
          id: "ee-u1-l11c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the EE should be written in the student's strongest subject.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subject selection", statement: "Strength matters, but interest and research feasibility matter equally." },
            ],
            steps: [
              { reasoning: "For: a strong subject means better research skills and easier access to sources.", marks: 1, markCode: "M" },
              { reasoning: "Against: interest sustains motivation; a weaker but loved subject may produce better work.", marks: 1, markCode: "M" },
              { reasoning: "Research feasibility matters — can you access primary sources and data?", marks: 1, markCode: "R" },
              { reasoning: "Judgement: balance strength, interest and feasibility rather than choosing on one criterion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The strongest subject is not automatically best — interest and research feasibility are equally important.",
            commonErrors: ["Choosing solely on academic strength or solely on interest."],
          },
        },
        {
          id: "ee-u1-l11c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to choose an appropriate subject and topic for the EE.",
          parts: [
            { label: "a", prompt: "Explain the subject requirements for the EE.", marks: 2 },
            { label: "b", prompt: "Describe three criteria for choosing a good topic.", marks: 3 },
            { label: "c", prompt: "Evaluate the importance of personal interest in topic selection.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "EE selection", statement: "Subject must be studied; topic must be feasible, interesting and researchable." },
            ],
            steps: [
              { part: "a", reasoning: "Essay must be in a studied DP subject with supervision.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cannot be in a subject not studied (with limited exceptions).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Feasibility: accessible sources and data within word limit.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interest: sustained motivation over months.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Focus: narrow enough for 4000 words but broad enough for research.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Interest sustains motivation through the long research process.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Genuine curiosity produces deeper questions and better analysis.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: interest is necessary but must be balanced with feasibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Studied DP subject. (b) Feasible, interesting, focused. (c) Essential for sustainability.",
            commonErrors: ["Choosing a topic that is too broad or too narrow for 4000 words."],
          },
        },
        {
          id: "ee-u1-l11c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Under the first assessment 2027 guide, the Extended Essay may be approached through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the subject-focused pathway" },
              { id: "b", text: "Only the interdisciplinary pathway" },
              { id: "c", text: "Either the subject-focused or interdisciplinary pathway" },
              { id: "d", text: "A pathway chosen by the IB rather than the student" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "EE pathways", statement: "The 2027 guide provides subject-focused and interdisciplinary pathways." },
            ],
            steps: [
              { reasoning: "The EE can be subject-focused in one DP subject or interdisciplinary across two DP subjects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Either pathway",
            commonErrors: ["Assuming every EE must use the old World Studies model."],
          },
        },
        {
          id: "ee-u1-l11c1q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which topic is least suitable for an Extended Essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How far did censorship shape jazz in 1920s Berlin?" },
              { id: "b", text: "To what extent did urban planning affect flooding in Rotterdam between 1950 and 1980?" },
              { id: "c", text: "Why did the French Revolution happen?" },
              { id: "d", text: "How did one novel's narrative structure shape its treatment of memory?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Topic suitability", statement: "A suitable EE topic is focused enough for analysis within 4000 words." },
            ],
            steps: [
              { reasoning: "The other options specify actors, place, period or a single text.", marks: 1, markCode: "M" },
              { reasoning: "The French Revolution question is broad and invites description rather than focused evaluation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Why did the French Revolution happen?",
            commonErrors: ["Choosing a famous topic without checking whether it can be narrowed."],
          },
        },
        {
          id: "ee-u1-l11c1q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two subjects are both suitable for the EE. Which factor should weigh most heavily in the final choice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The subject with the highest predicted grade" },
              { id: "b", text: "Sustained personal interest combined with access to suitable sources" },
              { id: "c", text: "The subject with the shortest set texts" },
              { id: "d", text: "The subject the supervisor knows least about" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subject choice", statement: "Interest sustains months of work, while accessible sources make research feasible." },
            ],
            steps: [
              { reasoning: "The EE requires independent research over an extended period.", marks: 1, markCode: "M" },
              { reasoning: "Interest and source access determine whether the topic can be researched properly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sustained interest and source access",
            commonErrors: ["Choosing prestige or ease of supervision over genuine feasibility."],
          },
        },
        {
          id: "ee-u1-l11c1q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student proposes an interdisciplinary EE combining history and economics. Which proposal is valid under the 2027 guide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any topic may combine two subjects without using DP frameworks" },
              { id: "b", text: "A coherent study integrating concepts or methods from two DP subjects" },
              { id: "c", text: "A topic that must be registered as the discontinued World Studies EE" },
              { id: "d", text: "A comparison in which the two subjects remain entirely separate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interdisciplinary pathway", statement: "Interdisciplinary means integrating knowledge, concepts, theories, perspectives or methods from two DP subjects." },
            ],
            steps: [
              { reasoning: "The pathway requires two approved DP subjects.", marks: 1, markCode: "M" },
              { reasoning: "The subjects must be integrated rather than merely placed side by side.", marks: 1, markCode: "M" },
              { reasoning: "The topic must remain coherent enough for a single focused essay.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Coherent integration of two DP subjects",
            commonErrors: ["Treating interdisciplinary as two disconnected subject reports."],
          },
        },
        {
          id: "ee-u1-l11c1q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the supervisor's appropriate role when a student chooses an EE subject and topic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assign the topic and write the proposal" },
              { id: "b", text: "Challenge feasibility and suitability while the student makes the decision" },
              { id: "c", text: "Choose whichever subject produces the highest grade" },
              { id: "d", text: "Approve the final essay without discussion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supervisor role", statement: "The supervisor guides and challenges; the student owns the research choice." },
            ],
            steps: [
              { reasoning: "The EE is independent research under supervision.", marks: 1, markCode: "M" },
              { reasoning: "The supervisor can question scope, sources and feasibility.", marks: 1, markCode: "M" },
              { reasoning: "The student must still make and justify the final choice.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Challenge feasibility while the student decides",
            commonErrors: ["Expecting the supervisor to choose or direct the topic."],
          },
        },
        {
          id: "ee-u1-l11c1q10",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain how to choose between the subject-focused and interdisciplinary EE pathways.",
          parts: [
            { label: "a", prompt: "Define the two pathways.", marks: 2 },
            { label: "b", prompt: "State one criterion for choosing between them.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "EE pathways", statement: "Subject-focused uses one DP subject; interdisciplinary integrates two DP subjects." },
            ],
            steps: [
              { part: "a", reasoning: "Subject-focused research stays within one approved DP subject.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Interdisciplinary research combines two DP subjects coherently.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Choose the pathway that best matches the topic's concepts and methods.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The topic must remain focused enough for 4000 words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Choose subject-focused for depth in one subject, interdisciplinary only when two subjects genuinely integrate.",
            commonErrors: ["Choosing interdisciplinary because it sounds more impressive."],
          },
        },
        {
          id: "ee-u1-l11c1q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "Evaluate the factors that should determine an EE subject choice.",
          parts: [
            { label: "a", prompt: "Explain why personal interest matters.", marks: 2 },
            { label: "b", prompt: "Explain why research feasibility matters.", marks: 2 },
            { label: "c", prompt: "Give a judgement on balancing the factors.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subject selection", statement: "A viable EE subject balances interest, feasibility and sustainable motivation." },
            ],
            steps: [
              { part: "a", reasoning: "The EE requires sustained independent work over months.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Genuine interest supports motivation and deeper questions.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sources, data and methods must be accessible within the word limit.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Supervision and subject knowledge also affect feasibility.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No single factor is sufficient on its own.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The best choice is the one that can sustain rigorous research.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balance interest, feasibility and supervision; none alone guarantees a strong EE.",
            commonErrors: ["Choosing only the easiest or most impressive subject."],
          },
        },
        {
          id: "ee-u1-l11c1q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student enjoys visual arts but also has strong data skills in economics. Apply a subject-selection process.",
          parts: [
            { label: "a", prompt: "Identify two possible EE directions.", marks: 2 },
            { label: "b", prompt: "Explain what evidence would help choose between them.", marks: 2 },
            { label: "c", prompt: "State which direction you would test first and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Subject selection process", statement: "Compare possible directions using interest, sources, methods and sustainability." },
            ],
            steps: [
              { part: "a", reasoning: "One direction could be subject-focused visual arts.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Another could be economics using data or interdisciplinary if truly integrated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Check availability of primary sources, data and suitable methods.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check whether the student can sustain interest for months.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Test the direction with the strongest combination of interest and evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Document the decision for later reflection in the RPF.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compare both directions against sources, methods and sustained interest before committing.",
            commonErrors: ["Deciding before checking source availability."],
          },
        },
        {
          id: "ee-u1-l11c1q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how subject and pathway choice shape the research question and assessment.",
          parts: [
            { label: "a", prompt: "Explain how the chosen subject frames possible questions.", marks: 2 },
            { label: "b", prompt: "Explain how the pathway affects scope.", marks: 3 },
            { label: "c", prompt: "Evaluate the effect on Criterion A.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framework effect", statement: "Subject and pathway determine which concepts, methods and questions are legitimate." },
            ],
            steps: [
              { part: "a", reasoning: "The DP subject supplies concepts, theories and methods.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "A question outside that frame will be hard to assess coherently.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subject-focused scope can go deep in one discipline.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interdisciplinary scope must integrate two subjects without becoming diffuse.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Poor integration can make the framework weaker than either subject alone.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Criterion A rewards a relevant, clear and focused research question.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A mismatched subject or pathway can undermine focus and methods.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: pathway choice is an early framework decision, not a cosmetic label.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subject and pathway choices constrain and enable the question, methods and Criterion A framework.",
            commonErrors: ["Treating pathway choice as independent of the research question."],
          },
        },
        {
          id: "ee-u1-l11c1q14",
          difficulty: "core",
          totalMarks: 6,
          stem: "Identify and justify three unsuitable EE subject or topic choices.",
          parts: [
            { label: "a", prompt: "Give an unsuitable subject choice.", marks: 2 },
            { label: "b", prompt: "Give an unsuitable topic choice.", marks: 2 },
            { label: "c", prompt: "Explain the common problem.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Suitability", statement: "Suitable choices are approved, focused, researchable and sustainable." },
            ],
            steps: [
              { part: "a", reasoning: "A subject outside the approved DP list or without adequate background.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Such a choice lacks the required disciplinary framework.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A topic needing far more than 4000 words or unavailable sources.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It cannot be answered with appropriate depth.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both failures come from poor fit rather than poor writing.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Early feasibility checks prevent wasted research.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Avoid unapproved subjects, over-broad topics and source-poor questions.",
            commonErrors: ["Confusing a fashionable topic with a researchable one."],
          },
        },
        {
          id: "ee-u1-l11c1q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a defensible process for choosing an EE subject and initial topic.",
          parts: [
            { label: "a", prompt: "List the preliminary steps.", marks: 2 },
            { label: "b", prompt: "Explain how to use supervisor feedback.", marks: 2 },
            { label: "c", prompt: "Explain how to record the decision.", marks: 2 },
            { label: "d", prompt: "Evaluate why documentation matters.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "EE selection process", statement: "Select through interest, preliminary reading, feasibility checks and documented reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Brainstorm interests, check approved subjects and do preliminary reading.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Narrow to a few candidate topics before committing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ask the supervisor to challenge scope, sources and feasibility.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use feedback to revise rather than outsource the decision.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Record options, evidence and reasons for the final choice.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "These notes can later support the RPF reflection.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Documentation shows the reasoning behind the framework.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It also makes later changes easier to justify.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use interest, reading, feasibility checks, supervisor feedback and documentation before committing.",
            commonErrors: ["Committing before testing source availability."],
          },
        },
        {
          id: "ee-u1-l11c1q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the claim that the best EE subject is simply the student's strongest subject.",
          parts: [
            { label: "a", prompt: "Give one argument for the claim.", marks: 2 },
            { label: "b", prompt: "Give two arguments against it.", marks: 3 },
            { label: "c", prompt: "Reach a judgement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subject choice judgement", statement: "Strength helps, but interest, feasibility and sustainability are equally important." },
            ],
            steps: [
              { part: "a", reasoning: "A strong subject may offer better subject knowledge and methods.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It may make research questions easier to frame.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Interest sustains motivation over a long independent project.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A weaker but genuinely engaging subject may produce deeper analysis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Feasibility depends on sources and methods, not grades alone.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The best choice balances demonstrated strength with sustained motivation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It must also be realistic within time, sources and word count.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: strongest subject is an advantage, not a rule.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strength helps but does not guarantee success; balance it with interest and feasibility.",
            commonErrors: ["Assuming academic strength automatically produces better research."],
          },
        },
      ],
    },
    {
      id: "ee-u1-topic-narrowing",
      title: "Narrowing a topic",
      skill: "Narrow a broad topic into a researchable area suitable for the EE.",
      lesson: {
        sections: [
          {
            heading: "From broad to focused",
            body: "'The causes of World War I' is too broad for 4000 words. 'The role of German militarism in the July Crisis of 1914' is focused enough. Narrowing involves specifying: time period, geographic scope, key actors, and the particular aspect you will analyse.",
          },
          {
            heading: "Signs of good narrowing",
            body: "A well-narrowed topic: can be covered in 4000 words; has accessible sources; allows a clear research question; is specific enough to be arguable. A poorly narrowed topic: covers too much; requires unavailable sources; is too vague to analyse.",
          },
          {
            heading: "The narrowing process",
            body: "Start broad → identify a specific aspect → check source availability → formulate a research question → test against word count. Repeat until the topic is tight enough to sustain deep analysis rather than superficial coverage.",
          },
        ],
        keyFormulas: [
          { name: "Narrowing formula", statement: "Broad field + specific aspect + time/place + key actors = researchable topic" },
          { name: "Word count test", statement: "Can this be covered properly in 4000 words?" },
        ],
        workedExample: {
          problem: "Narrow 'climate change' for a science EE.",
          solution: "'The effect of urbanisation on local temperature in [city] between 1990–2020' — specifies aspect (urban heat), location, time period, and allows data analysis within 4000 words.",
        },
      },
      questions: [
        {
          id: "ee-u1-l11c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A topic that is too broad for the EE would be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A specific event in 1914" },
              { id: "b", text: "The causes of World War I" },
              { id: "c", text: "One scientist's contribution" },
              { id: "d", text: "A single poem's analysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Topic scope", statement: "The EE requires a focused topic coverable in 4000 words." },
            ],
            steps: [
              { reasoning: "World War I causes cover too much for 4000 words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The causes of World War I",
            commonErrors: ["Choosing topics that require book-length treatment."],
          },
        },
        {
          id: "ee-u1-l11c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three ways to narrow a broad topic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic narrowing", statement: "Specify time, place, actors and aspect to focus the topic." },
            ],
            steps: [
              { reasoning: "Specify the time period (e.g. 1914–1918 rather than all history).", marks: 1, markCode: "M" },
              { reasoning: "Specify the geographic or contextual scope (one country, one event).", marks: 1, markCode: "M" },
              { reasoning: "Identify the specific aspect or question within the broader field.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Narrow by specifying time period, geographic/contextual scope, and the specific aspect to analyse.",
            commonErrors: ["Narrowing only slightly — still too broad for 4000 words."],
          },
        },
        {
          id: "ee-u1-l11c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that a narrower topic always produces a better EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scope and depth", statement: "Narrow topics allow depth but must be broad enough for research." },
            ],
            steps: [
              { reasoning: "For: narrow topics allow the depth that 4000 words demands.", marks: 1, markCode: "M" },
              { reasoning: "Against: too narrow may lack sufficient sources or significance.", marks: 1, markCode: "M" },
              { reasoning: "The topic must be narrow enough for depth but broad enough for evidence.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: optimal scope balances depth and evidence — not simply 'as narrow as possible'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Narrow topics enable depth but must remain broad enough to sustain research; balance is key.",
            commonErrors: ["Choosing a topic so narrow it lacks evidence or significance."],
          },
        },
        {
          id: "ee-u1-l11c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the process of narrowing an EE topic.",
          parts: [
            { label: "a", prompt: "Explain why narrowing is necessary for the EE.", marks: 2 },
            { label: "b", prompt: "Describe three strategies for narrowing a topic.", marks: 3 },
            { label: "c", prompt: "Evaluate how to test whether a topic is sufficiently narrow.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Topic narrowing", statement: "The 4000-word limit requires focused topics that allow depth." },
            ],
            steps: [
              { part: "a", reasoning: "4000 words cannot cover broad topics properly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Narrowing enables depth of analysis rather than superficial coverage.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Specify time period.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Specify geographic or contextual scope.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Identify specific aspect or question.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check word count feasibility — can it be covered properly?", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check source availability — are there enough accessible sources?", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Check significance — is the topic narrow enough for depth but meaningful enough for analysis?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Word limit requires focus. (b) Time, scope, aspect. (c) Word count, sources, significance.",
            commonErrors: ["Choosing topics without checking source availability."],
          },
        },
        {
          id: "ee-u1-l11c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the best example of a properly narrowed EE topic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The history of democracy" },
              { id: "b", text: "Climate change and the environment" },
              { id: "c", text: "The role of German militarism in the July Crisis of 1914" },
              { id: "d", text: "All causes of World War I" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Narrowed topic", statement: "A narrowed topic specifies actors, time, place and aspect." },
            ],
            steps: [
              { reasoning: "The July Crisis topic names actors, period and aspect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** German militarism in the July Crisis of 1914",
            commonErrors: ["Confusing a broad field with a researchable topic."],
          },
        },
        {
          id: "ee-u1-l11c2q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which set best describes the dimensions used to narrow an EE topic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Title, bibliography, conclusion and grade" },
              { id: "b", text: "Time period, place or context, key actors and specific aspect" },
              { id: "c", text: "Personal opinion, popularity and length of readings" },
              { id: "d", text: "Supervisor preference, classroom topic and essay format" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrowing dimensions", statement: "Narrow by time, geography or context, actors and the specific aspect analysed." },
            ],
            steps: [
              { reasoning: "These dimensions reduce a broad field to a focused case.", marks: 1, markCode: "M" },
              { reasoning: "They also help test whether 4000 words is sufficient.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Time, context, actors and aspect",
            commonErrors: ["Narrowing by preference rather than by analytical boundaries."],
          },
        },
        {
          id: "ee-u1-l11c2q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "After narrowing a topic, which test is most important before drafting the research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether the topic sounds impressive" },
              { id: "b", text: "Whether enough suitable sources and methods are accessible" },
              { id: "c", text: "Whether the supervisor has published on it" },
              { id: "d", text: "Whether it can be answered in one sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Research feasibility", statement: "A narrowed topic must have accessible evidence and suitable methods." },
            ],
            steps: [
              { reasoning: "A good topic must be researchable, not merely narrow.", marks: 1, markCode: "M" },
              { reasoning: "Source and method checks reveal whether evidence exists.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Source and method accessibility",
            commonErrors: ["Assuming a narrow topic automatically has enough evidence."],
          },
        },
        {
          id: "ee-u1-l11c2q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student narrows a topic so much that only one paragraph of evidence can be found. What is the main problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The topic is now too narrow to sustain analysis and evidence" },
              { id: "b", text: "The word count has become too generous" },
              { id: "c", text: "The essay must now become interdisciplinary" },
              { id: "d", text: "The title must be removed from the title page" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimal scope", statement: "Narrow enough for depth but broad enough for sufficient evidence." },
            ],
            steps: [
              { reasoning: "Very narrow topics can lack enough sources for 4000 words.", marks: 1, markCode: "M" },
              { reasoning: "They may also prevent a sustained line of argument.", marks: 1, markCode: "M" },
              { reasoning: "Depth requires evidence, not just specificity.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Too little evidence for sustained analysis",
            commonErrors: ["Believing narrower is always better."],
          },
        },
        {
          id: "ee-u1-l11c2q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which revised topic best fixes the problem of an over-broad EE question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keep 'The impact of technology' but write faster" },
              { id: "b", text: "Study how mobile phones changed family communication in one city between 2005 and 2015" },
              { id: "c", text: "Compare every technology ever invented" },
              { id: "d", text: "Remove the research question entirely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scope control", statement: "Specify technology, actors, place and period to make the topic researchable." },
            ],
            steps: [
              { reasoning: "The revised topic names the technology, relationship and context.", marks: 1, markCode: "M" },
              { reasoning: "It also bounds time and place for 4000 words.", marks: 1, markCode: "M" },
              { reasoning: "It remains broad enough to allow multiple sources and perspectives.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Mobile phones and family communication in one city, 2005-2015",
            commonErrors: ["Changing wording without reducing analytical scope."],
          },
        },
        {
          id: "ee-u1-l11c2q10",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain the process of narrowing a broad EE topic.",
          parts: [
            { label: "a", prompt: "Describe the first narrowing step.", marks: 2 },
            { label: "b", prompt: "Describe the final narrowing test.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Topic narrowing", statement: "Move from broad field to specific case, then test word count and evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Start with a broad field and identify one aspect to analyse.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add time, place and key actors to bound the case.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Check whether the topic fits within 4000 words.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check whether enough suitable sources and methods exist.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specify aspect, time, place and actors, then test word count and evidence.",
            commonErrors: ["Stopping after choosing a vague subfield."],
          },
        },
        {
          id: "ee-u1-l11c2q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "Narrow the topic 'social media' for a possible EE.",
          parts: [
            { label: "a", prompt: "Propose one narrowed version.", marks: 2 },
            { label: "b", prompt: "Explain how it meets the word-count test.", marks: 2 },
            { label: "c", prompt: "Identify one source or method needed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Applied narrowing", statement: "A narrowed topic should specify platform, users, period, place and analytical focus." },
            ],
            steps: [
              { part: "a", reasoning: "For example, study how short-form video shaped political discussion among students in one country.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The proposal names platform type, users, period and focus.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The bounded case can be analysed deeply in 4000 words.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It avoids covering all social media and all users.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use surveys, interviews or platform data depending on access.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Choose a method that can actually answer the question.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Narrow to a platform, user group, period and mechanism that can be studied in depth.",
            commonErrors: ["Narrowing only the platform while leaving users and outcomes open."],
          },
        },
        {
          id: "ee-u1-l11c2q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Evaluate whether a narrowed topic has enough accessible evidence.",
          parts: [
            { label: "a", prompt: "List three evidence checks.", marks: 3 },
            { label: "b", prompt: "Explain the consequence of poor evidence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence feasibility", statement: "A topic is viable only if suitable sources and methods are accessible." },
            ],
            steps: [
              { part: "a", reasoning: "Check whether primary or secondary sources exist.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check whether data or fieldwork is feasible.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check whether several perspectives are available.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Poor evidence leads to description or unsupported claims.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It weakens Criteria B and C because knowledge and analysis lack support.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Judgement: widen the topic slightly if evidence is insufficient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check sources, methods and perspectives; insufficient evidence requires wider scope.",
            commonErrors: ["Treating source scarcity as a writing problem."],
          },
        },
        {
          id: "ee-u1-l11c2q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the consequences of poor topic narrowing for the EE.",
          parts: [
            { label: "a", prompt: "Explain the effect of an over-broad topic.", marks: 2 },
            { label: "b", prompt: "Explain the effect of an over-narrow topic.", marks: 3 },
            { label: "c", prompt: "Evaluate the best balance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scope balance", statement: "Scope must allow depth within 4000 words and enough evidence for analysis." },
            ],
            steps: [
              { part: "a", reasoning: "Over-broad topics produce superficial description.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They weaken Criterion A because the question is not focused.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Over-narrow topics may lack sources and significance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "They can prevent a sustained line of argument.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "They also limit discussion and evaluation under Criterion D.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The best topic is narrow enough for depth but broad enough for evidence.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It should invite analysis rather than summary.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: scope is a balance, not a race to be narrowest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Over-broad causes superficiality; over-narrow causes weak evidence; balance is essential.",
            commonErrors: ["Treating scope as fixed before research begins."],
          },
        },
        {
          id: "ee-u1-l11c2q14",
          difficulty: "core",
          totalMarks: 6,
          stem: "Revise the broad topic 'art and society' into a focused EE topic.",
          parts: [
            { label: "a", prompt: "Give one narrowed topic.", marks: 2 },
            { label: "b", prompt: "Explain the boundaries you set.", marks: 2 },
            { label: "c", prompt: "State one exclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Topic revision", statement: "Bound the topic by artwork, movement, place, period and social effect." },
            ],
            steps: [
              { part: "a", reasoning: "For example, study how Bauhaus posters shaped public debates about housing in Berlin.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The topic specifies movement, medium, place and issue.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set boundaries around posters, housing debates and 1919-1933.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This is narrow enough for textual and contextual analysis.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exclude other Bauhaus media and other cities.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The exclusion prevents scope creep.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Choose a movement, medium, place, period and issue, then exclude related but different cases.",
            commonErrors: ["Keeping the broad phrase 'society' without defining what counts as society."],
          },
        },
        {
          id: "ee-u1-l11c2q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan how to revise a topic that research shows is too broad.",
          parts: [
            { label: "a", prompt: "Identify the signs of over-breadth.", marks: 2 },
            { label: "b", prompt: "Describe two narrowing options.", marks: 2 },
            { label: "c", prompt: "Explain how to choose between them.", marks: 2 },
            { label: "d", prompt: "Explain how to document the change.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Iterative narrowing", statement: "Revise scope when evidence shows the topic cannot sustain depth." },
            ],
            steps: [
              { part: "a", reasoning: "Look for too many actors, periods or outcomes to cover.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check whether the question invites description rather than analysis.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Option one: restrict time period or place.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Option two: restrict actors or the specific aspect analysed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Choose the option that preserves the strongest evidence and interest.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reject options that make the topic trivial or unsupported.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Record old and new versions with reasons for the change.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "This supports later RPF reflection and supervisor discussion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Detect breadth, narrow by time/place or actors/aspect, choose by evidence, and document the revision.",
            commonErrors: ["Narrowing arbitrarily instead of using evidence."],
          },
        },
        {
          id: "ee-u1-l11c2q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the claim that topic narrowing should be completed before research begins.",
          parts: [
            { label: "a", prompt: "Give one argument for early narrowing.", marks: 2 },
            { label: "b", prompt: "Give two arguments for later adjustment.", marks: 3 },
            { label: "c", prompt: "Reach a judgement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Flexible narrowing", statement: "Initial narrowing guides research, but findings may require revision." },
            ],
            steps: [
              { part: "a", reasoning: "Early narrowing prevents wasted effort on irrelevant material.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It helps formulate a first workable question.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Research may reveal the topic is too narrow for evidence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Research may reveal a more significant aspect to analyse.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Source availability can only be tested through preliminary investigation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Narrow early enough to guide work but remain open to justified revision.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Revision should respond to evidence, not whim.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: narrowing is iterative, not a one-time gate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Narrow early for direction, but adjust when evidence shows the scope is wrong.",
            commonErrors: ["Treating the first narrowed topic as irreversible."],
          },
        },
      ],
    },
  ],
};
