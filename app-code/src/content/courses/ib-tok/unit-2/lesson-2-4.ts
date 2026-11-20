import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "tok-u2-lesson-2-4",
  code: "2-4",
  title: "The Five Areas of Knowledge and the Knowledge Framework",
  goal: "I CAN compare the five compulsory areas of knowledge, the eight ways of knowing, and apply the knowledge framework and themes in TOK analysis.",
  standards: ["TOK", "Areas of Knowledge", "Ways of Knowing", "Themes"],
  vocabulary: [
    { term: "Area of knowledge", definition: "One of the five compulsory domains in which knowledge is produced: natural sciences, human sciences, mathematics, history, the arts." },
    { term: "Way of knowing", definition: "A cognitive tool used across areas — language, sense perception, reason, emotion, faith, memory, intuition, imagination." },
    { term: "Core theme", definition: "The compulsory TOK theme 'knowledge and the knower' linking areas and ways of knowing." },
    { term: "Optional theme", definition: "A focus such as knowledge and language, technology, politics, religion or indigenous societies." },
    { term: "Knowledge framework", definition: "A tool for analysis covering scope, methods & tools, perspectives and ethics." },
    { term: "Knower", definition: "The individual whose ways of knowing shape how knowledge is acquired, justified and contested." },
  ],
  concepts: [
    {
      id: "tok-u2-five-aoks",
      title: "The five Areas of Knowledge",
      skill: "Compare how the natural sciences, human sciences, mathematics, history and the arts produce knowledge, including their methods and intersections.",
      lesson: {
        sections: [
          {
            heading: "The five compulsory areas",
            body: "The current TOK guide (first assessment 2022) names **five compulsory Areas of Knowledge**: **Natural Sciences** (empirical, experimental methods), **Human Sciences** (empirical but interpretive — psychology, sociology, economics), **Mathematics** (deductive, axiomatic certainty), **History** (interpretive reconstruction of the past from sources) and **The Arts** (expression, interpretation and aesthetic judgement). Each produces knowledge by characteristic methods and tools, yet all depend on the shared Ways of Knowing.",
          },
          {
            heading: "Methods, tools and shared ways of knowing",
            body: "Each area has distinctive tools: laboratories and statistics in science, interpretation of texts and artefacts in history, formal proof in mathematics, creative practice in the arts. All eight **Ways of Knowing** — language, sense perception, reason, emotion, faith, memory, intuition, imagination — operate within every area, so claims in any area can be examined for the role these ways play in producing and justifying knowledge.",
          },
          {
            heading: "Intersections between areas",
            body: "Areas intersect in real problems: climate science (natural science) informs environmental policy (human science and politics); mathematical models support economics; historical evidence underpins art history. These intersections show that no area produces knowledge in isolation — insights from one discipline can support, challenge or transform claims in another.",
          },
        ],
        keyFormulas: [
          { name: "Five compulsory AOKs", statement: "Natural Sciences, Human Sciences, Mathematics, History, The Arts" },
          { name: "Eight ways of knowing", statement: "Language, sense perception, reason, emotion, faith, memory, intuition, imagination" },
          { name: "Intersection principle", statement: "Real-world problems draw on multiple areas — knowledge is interdisciplinary in practice" },
        ],
        workedExample: {
          problem: "A claim is made: 'The arts cannot produce knowledge because they are subjective.' Evaluate this for TOK.",
          solution: "The arts do produce knowledge — of works, interpretations, cultural meaning and aesthetic judgement — even though their methods differ from science's. The claim confuses different standards of justification with absence of knowledge. In TOK, 'knowledge' need not mean certainty or replicability; the arts justify claims through interpretation, context and shared criteria of judgement.",
        },
      },
      questions: [
        {
          id: "tok-u2-l24c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is NOT one of the five compulsory Areas of Knowledge in the current TOK guide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Arts" },
              { id: "b", text: "History" },
              { id: "c", text: "Religion" },
              { id: "d", text: "Mathematics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Five AOKs", statement: "The five compulsory AOKs are Natural Sciences, Human Sciences, Mathematics, History and The Arts." },
            ],
            steps: [
              { reasoning: "Religion may appear as an optional theme, but it is not one of the five compulsory areas.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Religion",
            commonErrors: ["Confusing optional themes (religion, politics) with compulsory areas of knowledge."],
          },
        },
        {
          id: "tok-u2-l24c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the methods of the natural sciences and history differ in producing knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "AOK methods", statement: "Sciences test claims empirically and experimentally; history reconstructs the past interpretively from sources." },
            ],
            steps: [
              { reasoning: "Natural sciences produce knowledge through observation, hypothesis testing and experiment, aiming at generalisable, testable claims.", marks: 1, markCode: "M" },
              { reasoning: "History produces knowledge by interpreting primary and secondary sources, weighing evidence and constructing accounts of the past.", marks: 1, markCode: "M" },
              { reasoning: "Both rely on ways of knowing — reason and evidence — but apply different standards of justification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Science tests general claims experimentally; history interprets specific events from sources.",
            commonErrors: ["Claiming history 'proves' events like science proves laws."],
          },
        },
        {
          id: "tok-u2-l24c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the five areas of knowledge are completely separate domains.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "AOK boundaries", statement: "Areas have distinct methods but real problems and knowledge claims constantly cross boundaries." },
            ],
            steps: [
              { reasoning: "For separation: each area has characteristic methods, tools and standards of justification.", marks: 1, markCode: "M" },
              { reasoning: "Against: human sciences borrow from natural sciences; art history fuses arts and history; mathematics underpins economics.", marks: 1, markCode: "M" },
              { reasoning: "Interdisciplinary problems (climate, AI ethics, medical humanities) require combining areas.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: areas are analytically distinct but practically interwoven — boundaries are tools for analysis, not walls.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Areas are conceptually distinct but practically intersect — real knowledge production crosses their boundaries.",
            commonErrors: ["Treating the five AOKs as hermetically sealed silos."],
          },
        },
        {
          id: "tok-u2-l24c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how knowledge is produced across the five areas of knowledge.",
          parts: [
            { label: "a", prompt: "Name the five compulsory areas of knowledge.", marks: 2 },
            { label: "b", prompt: "Explain how two areas differ in their methods and tools.", marks: 3 },
            { label: "c", prompt: "Evaluate whether one area produces knowledge more reliably than the others.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing AOKs", statement: "Each area has distinctive methods, but all produce knowledge through the ways of knowing and remain open to critique." },
            ],
            steps: [
              { part: "a", reasoning: "Natural Sciences, Human Sciences, Mathematics, History, The Arts.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All five correctly named.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Natural sciences: empirical experiments and statistical tools test generalisable claims.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "History: interpretation of sources and evidence to reconstruct specific past events.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contrast: sciences seek general laws; history seeks justified accounts of particulars.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mathematics offers certainty but only within chosen axioms — not about the world.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Sciences are revisable; arts and history deal in interpretation where 'reliability' is judged differently.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: no single area is 'most reliable' — each has strengths suited to different kinds of knowledge claims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Five AOKs named. (b) Science experimental vs history interpretive. (c) Reliability depends on the kind of claim.",
            commonErrors: ["Ranking areas by reliability without specifying what kind of knowledge is meant."],
          },
        },
        {
          id: "tok-u2-l24c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which set correctly lists the five compulsory Areas of Knowledge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Science, history, mathematics, arts, religion" },
              { id: "b", text: "Natural Sciences, Human Sciences, Mathematics, History, The Arts" },
              { id: "c", text: "Physics, psychology, logic, memory, faith" },
              { id: "d", text: "Language, reason, emotion, religion, politics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Five compulsory AOKs", statement: "Natural Sciences, Human Sciences, Mathematics, History and The Arts." },
            ],
            steps: [
              { reasoning: "The current guide names these five compulsory areas.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Natural Sciences, Human Sciences, Mathematics, History, The Arts",
            commonErrors: ["Including religion or ways of knowing among the five AOKs."],
          },
        },
        {
          id: "tok-u2-l24c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The characteristic method of the natural sciences is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deductive proof from axioms" },
              { id: "b", text: "Empirical observation and controlled testing" },
              { id: "c", text: "Interpretation of sacred texts" },
              { id: "d", text: "Aesthetic judgement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Natural science method", statement: "Natural sciences test claims through observation, hypothesis and experiment." },
            ],
            steps: [
              { reasoning: "Natural sciences are empirical and experimental.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Empirical observation and controlled testing",
            commonErrors: ["Confusing natural science with mathematical proof or artistic interpretation."],
          },
        },
        {
          id: "tok-u2-l24c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Human sciences differ from natural sciences mainly because human science knowledge is often:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Certain and law-like" },
              { id: "b", text: "Probabilistic, interpretive and context-dependent" },
              { id: "c", text: "Based only on revelation" },
              { id: "d", text: "Independent of evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Human science knowledge", statement: "Human sciences produce probabilistic, interpretive and context-bound claims." },
            ],
            steps: [
              { reasoning: "Human behaviour varies and is studied by researchers who share its nature.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Probabilistic, interpretive and context-dependent",
            commonErrors: ["Expecting human sciences to produce exceptionless laws."],
          },
        },
        {
          id: "tok-u2-l24c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Mathematics achieves certainty primarily through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated laboratory tests" },
              { id: "b", text: "Deductive proof from definitions and axioms" },
              { id: "c", text: "Appeal to authority" },
              { id: "d", text: "Statistical probability" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Mathematical method", statement: "Mathematics uses definitions, axioms and deductive proof." },
            ],
            steps: [
              { reasoning: "Mathematical certainty comes from deduction within a system.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deductive proof from definitions and axioms",
            commonErrors: ["Confusing mathematical certainty with empirical certainty about the world."],
          },
        },
        {
          id: "tok-u2-l24c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "History produces knowledge mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating past experiments" },
              { id: "b", text: "Interpreting primary and secondary sources" },
              { id: "c", text: "Formulating axioms" },
              { id: "d", text: "Testing chemical reactions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Historical method", statement: "History reconstructs the past by interpreting sources and evidence." },
            ],
            steps: [
              { reasoning: "Historians work from sources rather than repeated experiments.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Interpreting primary and secondary sources",
            commonErrors: ["Expecting history to use laboratory replication."],
          },
        },
        {
          id: "tok-u2-l24c1q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Arts produce knowledge mainly through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Empirical measurement" },
              { id: "b", text: "Expression, interpretation and aesthetic judgement" },
              { id: "c", text: "Mathematical deduction" },
              { id: "d", text: "Religious revelation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Artistic method", statement: "The arts produce knowledge through creative expression and interpretive judgement." },
            ],
            steps: [
              { reasoning: "Art communicates meaning through form, feeling and interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Expression, interpretation and aesthetic judgement",
            commonErrors: ["Expecting the arts to use scientific methods."],
          },
        },
        {
          id: "tok-u2-l24c1q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the methods of natural science, human science and mathematics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Scientific and mathematical methods", statement: "Natural science tests empirically, human science interprets behaviour, mathematics deduces from axioms." },
            ],
            steps: [
              { reasoning: "Natural sciences use observation, hypothesis and experiment.", marks: 1, markCode: "M" },
              { reasoning: "Human sciences use similar empirical methods but face self-reference and context.", marks: 1, markCode: "M" },
              { reasoning: "Mathematics uses definitions, axioms and deductive proof.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: all produce knowledge but through different standards of justification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Natural science tests empirically, human science interprets human behaviour empirically, mathematics proves deductively.",
            commonErrors: ["Treating all three as identical empirical sciences."],
          },
        },
        {
          id: "tok-u2-l24c1q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how history and the arts differ in producing knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "History versus arts", statement: "History reconstructs the past from sources; the arts express and interpret experience through form." },
            ],
            steps: [
              { reasoning: "History depends on evidence, sources and argument about the past.", marks: 1, markCode: "M" },
              { reasoning: "The arts depend on creative practice, interpretation and aesthetic judgement.", marks: 1, markCode: "M" },
              { reasoning: "Both involve interpretation, but history is constrained by surviving evidence.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: history seeks justified accounts of events; art seeks expressive insight into experience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "History interprets evidence about the past; the arts interpret experience through creative form.",
            commonErrors: ["Treating art as factual history or history as pure fiction."],
          },
        },
        {
          id: "tok-u2-l24c1q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how areas of knowledge can intersect in real-world problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interdisciplinary knowledge", statement: "Real problems often require methods and claims from more than one area." },
            ],
            steps: [
              { reasoning: "Climate policy combines natural science data with human science analysis.", marks: 1, markCode: "M" },
              { reasoning: "Mathematical models support economics and other applied fields.", marks: 1, markCode: "M" },
              { reasoning: "Historical evidence informs art, politics and public memory.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: areas are analytically distinct but practically interwoven.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Real problems draw on multiple areas, showing that knowledge production is interdisciplinary in practice.",
            commonErrors: ["Treating the five AOKs as completely isolated."],
          },
        },
        {
          id: "tok-u2-l24c1q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that the five areas of knowledge are completely separate domains.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Boundaries of AOKs", statement: "Areas have distinct methods but real knowledge claims cross boundaries." },
            ],
            steps: [
              { reasoning: "For: each area has characteristic methods, tools and standards.", marks: 1, markCode: "M" },
              { reasoning: "Against: human sciences borrow from natural sciences; art history fuses arts and history.", marks: 1, markCode: "M" },
              { reasoning: "Interdisciplinary problems require combining areas.", marks: 1, markCode: "R" },
              { reasoning: "Boundaries are useful analytical tools but not absolute walls.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: areas are distinct in method but interconnected in practice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The areas are analytically distinct but practically interconnected through shared problems and methods.",
            commonErrors: ["Either denying differences or treating areas as hermetically sealed."],
          },
        },
        {
          id: "tok-u2-l24c1q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Assess whether one area of knowledge produces knowledge more reliably than the others.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing AOK reliability", statement: "Reliability depends on the kind of knowledge claim being made." },
            ],
            steps: [
              { reasoning: "Mathematics is certain within axioms but not directly about reality.", marks: 1, markCode: "M" },
              { reasoning: "Natural sciences are reliable for empirical claims but revisable.", marks: 1, markCode: "M" },
              { reasoning: "History and the arts involve interpretation where reliability is judged differently.", marks: 1, markCode: "R" },
              { reasoning: "No area is universally 'most reliable' across all kinds of claims.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: each area has strengths suited to different knowledge problems.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reliability is claim-dependent; each area has strengths suited to different kinds of knowledge.",
            commonErrors: ["Ranking areas without specifying the type of knowledge."],
          },
        },
        {
          id: "tok-u2-l24c1q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine how the eight ways of knowing operate across the five areas of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ways of knowing across AOKs", statement: "Language, perception, reason, emotion, faith, memory, intuition and imagination operate within every area." },
            ],
            steps: [
              { reasoning: "Reason and language are central in mathematics and science.", marks: 1, markCode: "M" },
              { reasoning: "Emotion and imagination are especially important in the arts.", marks: 1, markCode: "M" },
              { reasoning: "Memory and sense perception shape historical and scientific evidence.", marks: 1, markCode: "M" },
              { reasoning: "Faith may matter in religious or value-laden claims even if religion is not an AOK.", marks: 1, markCode: "R" },
              { reasoning: "No way of knowing belongs exclusively to one area.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: areas differ in methods, but all depend on shared ways of knowing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All ways of knowing operate across every area, though their prominence differs by discipline.",
            commonErrors: ["Assigning a way of knowing permanently to only one area."],
          },
        },
      ],
    },
    {
      id: "tok-u2-themes-framework",
      title: "Themes and the knowledge framework",
      skill: "Apply the core theme 'knowledge and the knower', evaluate optional themes, and use the knowledge framework to analyse areas of knowledge.",
      lesson: {
        sections: [
          {
            heading: "The core theme: knowledge and the knower",
            body: "The compulsory **core theme** asks how the **knower** shapes knowledge. Every knower has personal, cultural and disciplinary perspectives that influence what is noticed, how evidence is weighed, and what counts as justified. Knowledge is not a passive copy of reality — the knower constructs it through their ways of knowing, and different knowers can legitimately reach different conclusions from the same evidence.",
          },
          {
            heading: "Optional themes",
            body: "Students may focus on an **optional theme** alongside the core: **knowledge and language**, **knowledge and technology**, **knowledge and politics**, **knowledge and religion**, or **knowledge and indigenous societies**. Each explores how a particular lens shapes what counts as knowledge — e.g. politics asks whose knowledge is valued and whose is marginalised; technology asks how tools transform what we can know.",
          },
          {
            heading: "The knowledge framework",
            body: "The **knowledge framework** organises analysis of any area around four features: **scope** (what the area covers and excludes), **methods & tools** (how knowledge is produced and tested), **perspectives** (whose viewpoints shape the area), and **ethics** (the responsibilities and consequences of knowledge production). Applying it systematically turns a vague question into a structured TOK analysis.",
          },
        ],
        keyFormulas: [
          { name: "Core theme", statement: "Knowledge and the knower — how the knower's perspective shapes knowledge" },
          { name: "Optional themes", statement: "Language, technology, politics, religion, indigenous societies" },
          { name: "Knowledge framework", statement: "Scope + Methods & tools + Perspectives + Ethics" },
        ],
        workedExample: {
          problem: "Analyse the statement 'Mathematical knowledge is objective' using the knowledge framework.",
          solution: "Scope: mathematics covers abstract structures. Methods: deductive proof. Perspectives: mathematicians share conventions and cultural traditions of proof. Ethics: mathematical models can be misapplied (e.g. in policy). The knower's perspective — axioms chosen, notation, interpretation — means 'objective' applies within the system but the choice of system itself reflects human decisions.",
        },
      },
      questions: [
        {
          id: "tok-u2-l24c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The core theme in the current TOK guide is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knowledge and politics" },
              { id: "b", text: "Knowledge and the knower" },
              { id: "c", text: "Knowledge and technology" },
              { id: "d", text: "Knowledge and religion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Core theme", statement: "'Knowledge and the knower' is the compulsory core theme; others are optional." },
            ],
            steps: [
              { reasoning: "The core theme is knowledge and the knower; the others are optional themes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Knowledge and the knower",
            commonErrors: ["Confusing core and optional themes."],
          },
        },
        {
          id: "tok-u2-l24c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the four components of the knowledge framework.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Knowledge framework", statement: "Scope, methods & tools, perspectives and ethics organise analysis of an area of knowledge." },
            ],
            steps: [
              { reasoning: "Scope: what the area covers and excludes; methods & tools: how knowledge is produced and tested.", marks: 1, markCode: "M" },
              { reasoning: "Perspectives: whose viewpoints shape the area; ethics: responsibilities and consequences of knowledge production.", marks: 1, markCode: "M" },
              { reasoning: "Together they structure systematic analysis of knowledge claims in any area.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scope, methods & tools, perspectives, ethics — the four lenses of the knowledge framework.",
            commonErrors: ["Listing only some components or confusing them with ways of knowing."],
          },
        },
        {
          id: "tok-u2-l24c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'objective knowledge is impossible because the knower always shapes what is known.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Knower's role", statement: "The knower's perspective shapes knowledge, but shared methods allow intersubjective agreement." },
            ],
            steps: [
              { reasoning: "For: ways of knowing are personal and culturally shaped; no knower is a neutral observer.", marks: 1, markCode: "M" },
              { reasoning: "For: disciplines embed perspectives — what counts as evidence differs across areas.", marks: 1, markCode: "M" },
              { reasoning: "Against: objectivity can mean intersubjective testability — claims can be checked against shared evidence regardless of who makes them.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: pure objectivity is unattainable, but robust knowledge is possible through shared methods, critique and replication.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The knower always mediates knowledge, but shared methods allow sufficiently objective, testable claims.",
            commonErrors: ["Jumping to relativism — 'all knowledge is subjective' — without engaging with intersubjectivity."],
          },
        },
        {
          id: "tok-u2-l24c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyse the production of knowledge in an area of your choice using the knowledge framework.",
          parts: [
            { label: "a", prompt: "State the core theme and name two optional themes.", marks: 2 },
            { label: "b", prompt: "Explain how 'perspectives' and 'ethics' apply to your chosen area.", marks: 3 },
            { label: "c", prompt: "Evaluate how the knower's perspective influences knowledge in that area.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Knowledge framework application", statement: "Analysing an area through scope, methods, perspectives and ethics reveals how knowers shape knowledge." },
            ],
            steps: [
              { part: "a", reasoning: "Core theme: knowledge and the knower.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Any two optional themes correctly named, e.g. language, technology, politics, religion, indigenous societies.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Perspectives: the area embeds viewpoints of its practitioners — e.g. scientists' training, historians' sources.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ethics: knowledge production carries responsibilities — privacy in human sciences, bias in data, misrepresentation in the arts.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Applying both framework elements shows systematic rather than superficial analysis.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The knower's ways of knowing (reason, emotion, imagination) filter what is noticed and accepted in the area.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Cultural and disciplinary perspectives mean different knowers may justify different claims from similar evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: acknowledging the knower's role strengthens rather than undermines knowledge — it enables critique.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Core + optional themes. (b) Perspectives and ethics analysed. (c) The knower mediates but critique keeps knowledge robust.",
            commonErrors: ["Describing the area without engaging the framework or the knower's role."],
          },
        },
        {
          id: "tok-u2-l24c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The compulsory core theme in the current TOK guide is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knowledge and politics" },
              { id: "b", text: "Knowledge and the knower" },
              { id: "c", text: "Knowledge and technology" },
              { id: "d", text: "Knowledge and religion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Core theme", statement: "Knowledge and the knower is the compulsory core theme." },
            ],
            steps: [
              { reasoning: "The core theme concerns how the knower shapes knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Knowledge and the knower",
            commonErrors: ["Confusing the core theme with optional themes."],
          },
        },
        {
          id: "tok-u2-l24c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an optional theme in the current TOK guide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knowledge and the knower" },
              { id: "b", text: "Knowledge and technology" },
              { id: "c", text: "Mathematics and proof" },
              { id: "d", text: "History and sources" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Optional themes", statement: "Optional themes include knowledge and language, technology, politics, religion and indigenous societies." },
            ],
            steps: [
              { reasoning: "Technology is an optional theme; knowledge and the knower is the core theme.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Knowledge and technology",
            commonErrors: ["Confusing areas of knowledge with optional themes."],
          },
        },
        {
          id: "tok-u2-l24c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The knowledge framework is used to analyse:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only mathematical proofs" },
              { id: "b", text: "Scope, methods and tools, perspectives and ethics" },
              { id: "c", text: "Only historical dates" },
              { id: "d", text: "Only artistic techniques" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Knowledge framework", statement: "The framework analyses scope, methods and tools, perspectives and ethics." },
            ],
            steps: [
              { reasoning: "These four elements organise analysis of an area of knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Scope, methods and tools, perspectives and ethics",
            commonErrors: ["Confusing the framework with ways of knowing."],
          },
        },
        {
          id: "tok-u2-l24c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In TOK, the 'knower' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A textbook" },
              { id: "b", text: "The individual whose perspectives and ways of knowing shape knowledge" },
              { id: "c", text: "A laboratory instrument" },
              { id: "d", text: "A mathematical axiom" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Knower", statement: "The individual whose ways of knowing and perspectives mediate knowledge." },
            ],
            steps: [
              { reasoning: "The knower is the person acquiring and justifying knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The individual whose perspectives and ways of knowing shape knowledge",
            commonErrors: ["Treating knowledge as produced without a knower."],
          },
        },
        {
          id: "tok-u2-l24c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does the knowledge framework include 'perspectives'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To list facts" },
              { id: "b", text: "To examine whose viewpoints shape an area of knowledge" },
              { id: "c", text: "To calculate marks" },
              { id: "d", text: "To replace evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perspectives", statement: "Perspectives reveal how the knower's standpoint influences knowledge production." },
            ],
            steps: [
              { reasoning: "Perspectives ask whose viewpoints shape the area.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To examine whose viewpoints shape an area of knowledge",
            commonErrors: ["Reducing perspectives to personal opinion only."],
          },
        },
        {
          id: "tok-u2-l24c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the core theme 'knowledge and the knower'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Knowledge and the knower", statement: "The knower's perspectives, values and ways of knowing shape what is known and justified." },
            ],
            steps: [
              { reasoning: "Every knower has personal, cultural and disciplinary perspectives.", marks: 1, markCode: "M" },
              { reasoning: "These perspectives influence what is noticed and how evidence is weighed.", marks: 1, markCode: "M" },
              { reasoning: "Different knowers may reach different justified conclusions.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: knowledge is constructed through the knower, not passively received.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The core theme asks how the knower's perspective shapes the production and justification of knowledge.",
            commonErrors: ["Treating the knower as irrelevant to knowledge."],
          },
        },
        {
          id: "tok-u2-l24c2q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the purpose of optional themes in TOK.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Optional themes", statement: "Optional themes explore how particular lenses shape knowledge." },
            ],
            steps: [
              { reasoning: "Optional themes include language, technology, politics, religion and indigenous societies.", marks: 1, markCode: "M" },
              { reasoning: "Each examines how a lens affects what counts as knowledge.", marks: 1, markCode: "M" },
              { reasoning: "They complement the core theme by focusing on specific influences.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: optional themes deepen analysis of the knower's role in knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Optional themes explore how language, technology, politics, religion or indigenous perspectives shape knowledge.",
            commonErrors: ["Confusing optional themes with compulsory areas of knowledge."],
          },
        },
        {
          id: "tok-u2-l24c2q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the four components of the knowledge framework.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Knowledge framework", statement: "Scope, methods and tools, perspectives and ethics structure TOK analysis." },
            ],
            steps: [
              { reasoning: "Scope asks what an area covers and excludes.", marks: 1, markCode: "M" },
              { reasoning: "Methods and tools ask how knowledge is produced and tested.", marks: 1, markCode: "M" },
              { reasoning: "Perspectives ask whose viewpoints shape the area; ethics asks about responsibilities.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: together they turn a topic into structured TOK analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scope, methods and tools, perspectives and ethics organise systematic analysis of an area.",
            commonErrors: ["Listing components without explaining their function."],
          },
        },
        {
          id: "tok-u2-l24c2q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Apply the knowledge framework to one area of knowledge of your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Applying the framework", statement: "A strong application uses all four framework elements, not just description." },
            ],
            steps: [
              { reasoning: "Scope: identify what the chosen area covers and excludes.", marks: 1, markCode: "M" },
              { reasoning: "Methods and tools: describe how knowledge is produced and tested.", marks: 1, markCode: "M" },
              { reasoning: "Perspectives: identify whose viewpoints shape the area.", marks: 1, markCode: "M" },
              { reasoning: "Ethics: address responsibilities or consequences of knowledge production.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the framework produces a structured rather than superficial analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Apply scope, methods and tools, perspectives and ethics to a chosen area for structured analysis.",
            commonErrors: ["Describing the area without using all framework elements."],
          },
        },
        {
          id: "tok-u2-l24c2q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that 'objective knowledge is impossible because the knower always shapes what is known.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Objectivity and the knower", statement: "The knower mediates knowledge, but shared methods allow intersubjective testability." },
            ],
            steps: [
              { reasoning: "For: no knower is a neutral observer; ways of knowing are shaped by perspective.", marks: 1, markCode: "M" },
              { reasoning: "For: disciplinary frameworks influence what counts as evidence.", marks: 1, markCode: "M" },
              { reasoning: "Against: claims can be tested against shared evidence and methods.", marks: 1, markCode: "R" },
              { reasoning: "Objectivity may mean intersubjective agreement rather than perfect neutrality.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: pure objectivity is unattainable, but robust knowledge is possible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The knower always mediates knowledge, but shared methods allow sufficiently objective, testable claims.",
            commonErrors: ["Jumping to relativism without considering intersubjectivity."],
          },
        },
        {
          id: "tok-u2-l24c2q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how a knower's perspective can influence knowledge in an area of your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perspective and knowledge", statement: "The knower's background shapes attention, interpretation and standards of evidence." },
            ],
            steps: [
              { reasoning: "Cultural and personal perspectives influence what is noticed.", marks: 1, markCode: "M" },
              { reasoning: "Disciplinary training shapes what counts as valid evidence.", marks: 1, markCode: "M" },
              { reasoning: "Values influence research priorities and interpretation.", marks: 1, markCode: "R" },
              { reasoning: "Different knowers may justify different claims from similar evidence.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: acknowledging perspective strengthens rather than destroys knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The knower's perspective filters attention, interpretation and evidence, but shared critique can keep knowledge robust.",
            commonErrors: ["Claiming perspective makes all knowledge equally subjective."],
          },
        },
        {
          id: "tok-u2-l24c2q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Assess the role of optional themes in TOK analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optional themes", statement: "Optional themes deepen analysis of how particular lenses shape knowledge." },
            ],
            steps: [
              { reasoning: "They allow focus on language, technology, politics, religion or indigenous societies.", marks: 1, markCode: "M" },
              { reasoning: "Each theme reveals how power, tools or worldview affect knowledge.", marks: 1, markCode: "M" },
              { reasoning: "They complement the core theme by examining specific influences on the knower.", marks: 1, markCode: "R" },
              { reasoning: "They can expose whose knowledge is valued or marginalised.", marks: 1, markCode: "R" },
              { reasoning: "However, they do not replace analysis of areas and ways of knowing.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: optional themes enrich TOK by focusing on particular lenses on knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Optional themes enrich TOK analysis by examining how language, technology, politics, religion or indigenous perspectives shape knowledge.",
            commonErrors: ["Treating optional themes as compulsory AOKs or as irrelevant extras."],
          },
        },
      ],
    },
  ],
};
