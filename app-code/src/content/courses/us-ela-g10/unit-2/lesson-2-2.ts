import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const SOURCES: TextExtract = {
  title: "Four Sources on School Start Times (fictional)",
  author: "Written for Akademik Space",
  source: "Invented sources prepared for practice; none is a real publication",
  text: "SOURCE A: Press release from the Lakemont Alliance for Late Starts, an advocacy group (2025)\n'Our schools must start later. Every day that teens are forced awake at dawn harms their futures. Join our campaign!'\n\nSOURCE B: Report summary, Brightwater Sleep Research Center, a university laboratory (2024)\n'In a study of 1,200 high school students across 14 schools, those whose first class began at 8:45 a.m. or later slept an average of 52 more minutes each night than students starting before 7:45 a.m. Attendance rose 3 percent. The study did not measure grades. Results come from one region and may not apply everywhere.'\n\nSOURCE C: Diary entry, Priya, a 10th grader, from a school that moved its start time later (2023)\n'The first week of the new schedule, I woke up without my alarm twice. I still stay up too late on weekends, though, so I am not sure the schedule is the only reason I feel better.'\n\nSOURCE D: Blog post, 'Why Late Starts Are a Disaster' by an anonymous poster (2019)\n'Everybody knows later starts ruin sports and families. Do not believe the so-called experts.'",
};

const DRAFT: TextExtract = {
  title: "Student Draft: Should Our School Start Later?",
  author: "Written for Akademik Space",
  source: "Draft paragraph with Sources A, B and C from the practice set",
  text: "Our school should start later. The Brightwater Sleep Research Center found that students who started at 8:45 a.m. or later slept an average of 52 more minutes each night, and attendance rose 3 percent, so a later start clearly helps students. The Brightwater study is all anyone needs to see. Other opinions on the subject are not worth including because the research has already settled the question.",
};

export const lesson22: Lesson = {
  id: "ela10-u2-lesson-2-2",
  code: "2-2",
  title: "Evaluating Sources",
  goal: "I CAN judge whether a source is credible, biased, accurate, and relevant, tell primary from secondary sources, and synthesize several sources without leaning on just one.",
  standards: ["W.9-10.8", "W.9-10.7"],
  vocabulary: [
    { term: "Credibility", definition: "How far a source can be trusted, based on the author's expertise, evidence, and reputation for accuracy." },
    { term: "Bias", definition: "A leaning toward one side that can lead a source to leave out, exaggerate, or slant information." },
    { term: "Primary source", definition: "A first-hand account or original record created at the time of an event, such as a diary, photograph, or data set." },
    { term: "Secondary source", definition: "A source that analyzes, interprets, or summarizes primary sources, such as a textbook or review article." },
    { term: "Synthesize", definition: "To combine information from several sources into a new, unified understanding." },
    { term: "Corroborate", definition: "To confirm a claim by finding the same information in an independent source." },
  ],
  concepts: [
    {
      id: "ela10-u2-source-credibility",
      title: "Credibility, bias, and source types",
      skill: "Assess the credibility, accuracy, bias, and relevance of print and digital sources, and distinguish primary from secondary sources.",
      lesson: {
        sections: [
          {
            heading: "Four questions to ask of every source",
            body: "**Who** wrote it, and do they have expertise? **Why** was it written: to inform, sell, persuade, or entertain? **How** well is it supported by evidence that can be checked? **When** was it published, and is it current enough? Add a fifth check, **relevance**: does the source actually address your research question? A source can be accurate yet irrelevant, or relevant yet unreliable.",
          },
          {
            heading: "Bias is not always bad, but it must be noticed",
            body: "Every author has a viewpoint. Bias becomes a problem when it replaces evidence: loaded words, sweeping claims such as 'everybody knows', and missing sources are warning signs. An advocacy group may still offer useful information, but its claims should be **corroborated** by independent sources. Also notice the source type. A diary is a **primary source** that shows lived experience; a research summary that interprets data is often a **secondary source**, although the original data counts as primary.",
          },
        ],
        keyFormulas: [
          { name: "CRAAP checks", statement: "Currency, Relevance, Authority, Accuracy, and Purpose: five checks for judging any source." },
          { name: "Corroboration", statement: "A claim is stronger when independent sources confirm it." },
          { name: "Primary vs secondary", statement: "Primary: first-hand or original. Secondary: interprets or summarizes other sources." },
        ],
        workedExample: {
          problem: "Using the four sources on school start times, rank Source B and Source D for credibility and explain. (4 marks)",
          solution: "Source B is far more credible. It comes from a university laboratory, reports a specific sample (1,200 students at 14 schools) and specific results (52 more minutes of sleep, 3 percent higher attendance), and honestly states its limits: it did not measure grades and may not apply everywhere. Source D is much weaker. It is anonymous, relies on the unsupported claim 'Everybody knows', attacks 'so-called experts' instead of giving evidence, and is older (2019). Source D shows strong bias, while Source B shows careful, limited claims.",
        },
      },
      questions: [
        {
          id: "ela10-u2-source-credibility-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SOURCES,
          stem: "Which source is a primary source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Source A, the press release" },
              { id: "b", text: "Source B, the report summary" },
              { id: "c", text: "Source C, the diary entry" },
              { id: "d", text: "Source D, the blog post" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Primary source", statement: "A first-hand account or original record from someone who experienced the event." }],
            steps: [{ reasoning: "Priya writes first-hand about her own experience of the new schedule.", evidence: "I woke up without my alarm twice", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** The diary is a first-hand account. The others make arguments or interpret research, though they are not diaries of lived experience.",
            commonErrors: ["Choosing (b) because it has data; the report summarizes and interprets a study, which is more of a secondary account."],
          },
        },
        {
          id: "ela10-u2-source-credibility-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SOURCES,
          stem: "Which feature of Source D is the strongest sign that it is NOT credible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a blog post rather than a book." },
              { id: "b", text: "It makes a sweeping claim with no evidence and dismisses experts." },
              { id: "c", text: "It was published in 2019." },
              { id: "d", text: "It mentions sports and families." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Spotting weak evidence", statement: "Sweeping claims with no support, and attacks on experts, signal low credibility." }],
            steps: [
              { reasoning: "'Everybody knows' states a claim as obvious without any evidence.", evidence: "Everybody knows later starts ruin sports and families", marks: 1, markCode: "AO1" },
              { reasoning: "Dismissing experts without argument replaces evidence with attitude.", evidence: "Do not believe the so-called experts", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The medium (a) and date (c) alone do not make a source unreliable, and (d) is simply the topic. The missing evidence and dismissal of experts are the real warning signs.",
            commonErrors: ["Choosing (c): the year matters less here than the lack of support."],
          },
        },
        {
          id: "ela10-u2-source-credibility-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SOURCES,
          stem: "Evaluate Source A (the press release) as evidence for a research paper on whether later school start times improve teen health. Consider its purpose, its bias, and how it could still be useful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating purpose", statement: "Identify why the source was written and whom it is trying to influence." },
              { kind: "skill", name: "Corroboration", statement: "Test an advocacy claim against independent evidence." },
            ],
            steps: [
              { reasoning: "Its purpose is to persuade and recruit supporters, not to report research; the call to action shows it.", evidence: "Join our campaign!", marks: 2, markCode: "AO1" },
              { reasoning: "It shows bias through emotive, absolute language and no data: 'harms their futures' is asserted, not demonstrated.", evidence: "Every day that teens are forced awake at dawn harms their futures", marks: 2, markCode: "AO1" },
              { reasoning: "It can still be useful if used carefully: it reveals what advocates believe and can be checked against independent data such as Source B, which supports the sleep claim in part.", marks: 2, markCode: "AO3" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "Source A is weak evidence on its own. It is an advocacy group's press release meant to persuade, as the appeal 'Join our campaign!' shows. Its absolute, emotive claim that early starts 'harm their futures' has no data behind it. It is still useful as an example of the campaign's position, and its claim about sleep can be corroborated by an independent source such as the Brightwater study. A researcher should cite Source B for the facts and Source A, if at all, only as evidence of what supporters argue.",
            commonErrors: ["Dismissing the source completely without noting any possible use.", "Saying 'it is biased' without pointing to specific wording."],
          },
        },
        {
          id: "ela10-u2-source-credibility-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: SOURCES,
          stem: "Answer all parts of this question about the four sources on school start times.",
          parts: [
            { label: "a", prompt: "Give two limits that Source B states about its own findings.", marks: 2 },
            { label: "b", prompt: "Explain why Source C is useful but not enough to prove that later start times improve students' well-being.", marks: 4 },
            { label: "c", prompt: "Rank the four sources from most to least credible for a research question about the effects of later start times on sleep. Justify your ranking with evidence.", marks: 6 },
            { label: "d", prompt: "Evaluate which two sources a student should rely on most heavily, and which should be used only with caution, and explain what further source would strengthen the research.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating credibility", statement: "Judge authority, evidence, purpose, and currency using details from the source." },
              { kind: "definition", name: "Primary source", statement: "A first-hand account, valuable for lived experience but limited as proof of general trends." },
              { kind: "skill", name: "Corroboration", statement: "Strong research combines independent sources that confirm each other." },
            ],
            steps: [
              { part: "a", reasoning: "It did not measure grades.", evidence: "The study did not measure grades", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Results come from one region and may not apply elsewhere.", evidence: "may not apply everywhere", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It is a first-hand account that shows what the change felt like for one student, which adds a human perspective.", evidence: "I woke up without my alarm twice", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "It is a single case, and Priya herself admits another possible cause, so it cannot prove a general conclusion.", evidence: "I am not sure the schedule is the only reason I feel better", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Source B ranks first: a research center, a large sample, specific results, and honest limits.", evidence: "1,200 high school students across 14 schools", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Source C is next as a honest first-hand account, followed by Source A, which is advocacy with a clear purpose but at least identifies itself.", evidence: "Join our campaign!", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Source D ranks last: anonymous, unsupported, and attacks experts; it is also the oldest.", evidence: "Everybody knows", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Rely most on B for data and C for lived experience, because together they give evidence and context, and C admits uncertainty.", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Use A only with caution, as a statement of one side's position, and avoid D, which offers no evidence.", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "A further source, such as a second independent study from a different region that also measured grades, would corroborate B and cover the gap it admits.", evidence: "The study did not measure grades", marks: 2, markCode: "AO3" },
            ],
            levels: [...rubric(6, [5, 3, 2], "c"), ...rubric(6, [5, 3, 2], "d")],
            finalAnswer: "(a) It did not measure grades; results come from one region. (b) Priya's diary is first-hand and human, but it covers one student who admits other causes. (c) B, C, A, D: B has a large sample, specific results, and stated limits; C is honest but personal; A is advocacy; D is anonymous and unsupported. (d) Rely on B and C, use A with caution, avoid D, and add an independent study from another region that measures grades.",
            commonErrors: ["Ranking by length or by agreement with the student's own opinion.", "Giving a ranking without evidence from the sources.", "In (d), suggesting a further source without saying what gap it fills."],
            examinerNote: "Accept any defensible ranking in (c) when each placement is justified with evidence.",
          },
        },
      ],
    },
    {
      id: "ela10-u2-synthesis",
      title: "Synthesizing multiple sources",
      skill: "Integrate information from several sources on one question, avoiding over-reliance on any single source and acknowledging disagreements and gaps.",
      lesson: {
        sections: [
          {
            heading: "From a pile of sources to an answer",
            body: "**Synthesis** is not a list of summaries. It means combining sources to answer a research question, showing where they agree, where they disagree, and what remains unknown. Start with your question. Then sort information by idea rather than by source: sleep, attendance, student experience. Under each idea, say what the sources together show.",
          },
          {
            heading: "Avoiding over-reliance",
            body: "Using one source for everything makes your work only as reliable as that source. Notice when a claim rests on only one source and flag it ('the one study of this question suggests...'). Include a counterclaim when credible sources disagree, and be honest about limits. Strong writers use signal phrases such as 'According to...', 'In contrast...', and 'Taken together...' to show how sources relate.",
          },
        ],
        keyFormulas: [
          { name: "Synthesis", statement: "Combine sources by idea, showing agreement, disagreement, and gaps." },
          { name: "Over-reliance", statement: "Resting an entire argument on one source, which makes the conclusion fragile." },
          { name: "Signal phrases", statement: "Words such as 'According to', 'However', and 'Taken together' that show how sources relate." },
        ],
        workedExample: {
          problem: "Write one sentence that synthesizes Sources B and C on student sleep. (3 marks)",
          solution: "A sample answer: 'The Brightwater study found that students with later start times slept an average of 52 more minutes a night, and one 10th grader's diary supports this by describing waking without an alarm, although she admits that weekend habits may also play a role.' This sentence names both sources' ideas, shows agreement, and includes the diary writer's own caution about causes. It does not copy either source and does not treat the single diary as proof.",
        },
      },
      questions: [
        {
          id: "ela10-u2-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "What is the main weakness of the draft paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too short to include a claim." },
              { id: "b", text: "It relies on a single source and ignores other perspectives." },
              { id: "c", text: "It does not mention the name of any study." },
              { id: "d", text: "It includes a statistic." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Avoiding over-reliance", statement: "A synthesis should use several sources and acknowledge other views." }],
            steps: [{ reasoning: "The writer says one study is 'all anyone needs' and refuses to include other opinions.", evidence: "The Brightwater study is all anyone needs to see", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)** The draft names the study, so (c) is wrong, and a statistic is a strength, so (d) is wrong.",
            commonErrors: ["Choosing (c), although the draft does name the Brightwater center."],
          },
        },
        {
          id: "ela10-u2-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "The draft says the study shows that 'a later start clearly helps students.' Explain why this claim goes beyond what Source B actually shows. Use the sources.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Matching claims to evidence", statement: "A claim must not be stronger than the evidence that supports it." }],
            steps: [
              { reasoning: "Source B measured sleep and attendance only; it did not measure grades, so 'helps students' overstates the evidence.", evidence: "The study did not measure grades", marks: 1, markCode: "AO1" },
              { reasoning: "Source B warns that its results may not apply everywhere, so 'clearly' is too certain.", evidence: "may not apply everywhere", marks: 1, markCode: "AO1" },
              { reasoning: "A better phrasing is hedged, such as 'suggests' or 'may improve', and confined to sleep and attendance.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Source B shows more sleep and higher attendance in one region but did not measure grades and warns that it may not apply elsewhere, so 'clearly helps students' overstates it. A better claim would say that later starts 'were linked to more sleep and better attendance'.",
            commonErrors: ["Only saying the claim is 'wrong' without citing the source's own limits."],
          },
        },
        {
          id: "ela10-u2-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SOURCES,
          stem: "Write a paragraph of 80-120 words that synthesizes Sources B and C to answer the question: 'Do later school start times improve teen sleep?' Refer to both sources, show how they relate, and acknowledge a limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Combine sources by idea, show how they relate, and note limits." },
              { kind: "skill", name: "Paraphrase and attribution", statement: "Restate the source in your own words and name where it came from." },
            ],
            steps: [
              { reasoning: "Uses Source B accurately: students with later starts slept about 52 minutes more per night.", evidence: "slept an average of 52 more minutes each night", marks: 2, markCode: "AO4" },
              { reasoning: "Links Source C as supporting, first-hand evidence of improved sleep, using a signal phrase that shows the relationship rather than listing the sources one after the other.", evidence: "I woke up without my alarm twice", marks: 2, markCode: "AO4" },
              { reasoning: "Acknowledges a limitation: one region, no grades, a single diary, or the writer's own doubt about other causes.", evidence: "I am not sure the schedule is the only reason", marks: 2, markCode: "AO1" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "Sample: Research suggests that later start times improve teen sleep. According to the Brightwater Sleep Research Center, students who started at 8:45 a.m. or later slept about 52 more minutes a night, and a 10th grader at a school that made the change similarly reports waking without an alarm. Taken together, these sources point in the same direction. However, the study comes from one region and did not measure grades, and the student admits that weekend habits may also matter, so the evidence is promising but not conclusive.",
            commonErrors: ["Summarizing each source in turn without linking them.", "Copying phrases from the sources instead of paraphrasing.", "Ignoring limitations."],
          },
        },
        {
          id: "ela10-u2-synthesis-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: SOURCES,
          stem: "Answer all parts of this question about synthesizing the four sources on school start times.",
          parts: [
            { label: "a", prompt: "Identify two points on which Sources B and C agree.", marks: 2 },
            { label: "b", prompt: "Explain one way the sources are incomplete for a student who wants to know whether later starts improve grades.", marks: 4 },
            { label: "c", prompt: "Write a synthesis paragraph (about 100 words) answering: 'Do later start times help students?' Use at least three of the sources and treat them with appropriate caution.", marks: 6 },
            { label: "d", prompt: "A classmate plans to use only Source A for a presentation. Evaluate this plan and recommend a better approach to gathering and combining evidence.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Combine several sources by idea, noting agreement, disagreement, and gaps." },
              { kind: "skill", name: "Evaluating a plan", statement: "Judge a research plan against criteria of credibility, balance, and sufficiency." },
              { kind: "convention", name: "Attribution", statement: "Name the source of each idea so readers can see where evidence came from." },
            ],
            steps: [
              { part: "a", reasoning: "Both suggest more sleep for students with later starts.", evidence: "slept an average of 52 more minutes", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Both suggest some improvement in student well-being or attendance with a later start.", evidence: "Attendance rose 3 percent", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Source B explicitly did not measure grades.", evidence: "The study did not measure grades", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "None of the other sources provide grade data either, so a student would need another source to answer the question.", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Presents the main finding from Source B accurately and attributes it.", evidence: "1,200 high school students", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Adds Source C or A as supporting perspective, in the writer's own words, with the right level of caution about its type.", evidence: "Join our campaign!", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Concludes with a hedged claim and a limitation.", evidence: "may not apply everywhere", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Source A is an advocacy press release with no data, so relying on it alone would make the presentation one-sided and unsupported.", evidence: "Join our campaign!", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "A better approach is to start from the research question, find independent, credible sources, and sort their information by idea.", marks: 2, markCode: "AO4" },
              { part: "d", reasoning: "Include Source B for data, a first-hand account like C for perspective, and acknowledge the counterargument rather than ignoring it.", evidence: "I am not sure the schedule is the only reason", marks: 2, markCode: "AO3" },
            ],
            levels: [...rubric(6, [5, 3, 2], "c"), ...rubric(6, [5, 3, 2], "d")],
            finalAnswer: "(a) Both link later starts with more sleep and a better experience. (b) Source B did not measure grades and no other source offers grade data. (c) Sample: According to the Brightwater study, students starting at 8:45 a.m. or later slept about 52 more minutes a night and attended more often, and a student diary echoes the improvement, though it is only one voice. An advocacy group urges change but offers no data. Together these suggest benefits for sleep, but the evidence on grades is missing. (d) Relying on Source A alone would be one-sided; the classmate should begin with the question, use credible independent sources such as B and C, and acknowledge limits.",
            commonErrors: ["In (c), summarizing sources one by one instead of combining them.", "In (d), saying the plan is bad without explaining what to do instead.", "Treating the blog post as equal in weight to the research summary."],
          },
        },
      ],
    },
  ],
};
