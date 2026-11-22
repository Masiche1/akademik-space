import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const RESEARCH: TextExtract = {
  title: "Research Writing: Synthesizing Sources",
  author: "Written for Akademik Space",
  text: "Effective research writing synthesizes multiple sources into coherent argument, not just reports what each source says. Consider a research paper on school start times:\n\nSource A (AAP policy statement): 'Adolescents require 8-10 hours sleep; early school start times conflict with circadian biology.'\n\nSource B (Seattle district study): 'After delaying start times, attendance increased 4%, grades improved, car crashes decreased 8%.'\n\nSource C (parent survey): 'Working parents report scheduling difficulties with later start times.'\n\nSynthesis: 'Research consensus supports later start times for adolescent health and safety (AAP; Seattle study), though implementation challenges exist for working families (parent survey). Effective policy must balance biological needs with logistical realities.'\n\nThis integrates all three sources — acknowledges consensus, cites evidence, addresses counterargument — rather than summarizing each separately.",
};

const CITATION: TextExtract = {
  title: "Citation Practice: MLA and APA Basics",
  author: "Written for Akademik Space",
  text: "Citations serve two purposes: giving credit to sources and allowing readers to verify claims. MLA (Modern Language Association) is common in humanities; APA (American Psychological Association) in social sciences.\n\nMLA in-text: (Author Last Page) — 'Research shows sleep deprivation affects cognition (Smith 45).'\nMLA Works Cited: Smith, John. 'The Sleep-Deprived Teen.' Journal of Adolescent Health, vol. 12, 2020, pp. 45-67.\n\nAPA in-text: (Author, year) — 'Research shows sleep deprivation affects cognition (Smith, 2020).'\nAPA Reference: Smith, J. (2020). The sleep-deprived teen. Journal of Adolescent Health, 12, 45-67.\n\nBoth require: author, title, publication info, page/year. Errors in citation suggest carelessness and can constitute plagiarism if sources aren't credited.",
};

export const lesson91: Lesson = {
  id: "ela11-u9-lesson-9-1",
  code: "9-1",
  title: "Research Writing and Source Integration",
  goal: "I CAN conduct research, integrate sources effectively, and cite properly in academic writing.",
  standards: [
    "W.11-12.7",
    "W.11-12.7a",
    "W.11-12.7b",
    "W.11-12.7c",
    "W.11-12.8",
    "W.11-12.8a",
    "W.11-12.8b",
    "W.11-12.9",
  ],
  vocabulary: [
    {
      term: "Synthesis",
      definition: "Combining sources into coherent argument.",
    },
    { term: "Citation", definition: "Crediting source material." },
    { term: "MLA/APA", definition: "Citation style guides." },
    { term: "Works Cited/References", definition: "Source list." },
    { term: "Plagiarism", definition: "Using others' work without credit." },
    { term: "Paraphrase", definition: "Restating in own words." },
  ],
  concepts: [
    {
      id: "ela11-u9-synthesis",
      title: "Synthesizing research sources",
      skill: "Integrate multiple sources into coherent argument.",
      lesson: {
        sections: [
          {
            heading: "Synthesis vs summary",
            body: "Summary reports what each source says separately. Synthesis combines sources into new understanding. The research example: Source A (AAP consensus), Source B (Seattle results), Source C (parent concerns). Synthesis: 'Research consensus supports later start times... though implementation challenges exist' — integrates all three into coherent argument acknowledging complexity.",
          },
          {
            heading: "Integration techniques",
            body: "Effective synthesis: **group by theme** (sleep research vs implementation concerns), **acknowledge consensus** ('research consensus supports'), **address counterarguments** ('though implementation challenges exist'), **cite strategically** ('AAP; Seattle study' — brief, not exhaustive). The goal isn't comprehensive coverage — it's building argument from evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Synthesis = integration",
            statement: "Combine into new understanding.",
          },
          { name: "Group by theme", statement: "Organize by argument needs." },
          { name: "Strategic citation", statement: "Brief, not exhaustive." },
        ],
        workedExample: {
          problem: "How does the research example synthesize sources?",
          solution:
            "Groups by theme (consensus vs concerns), acknowledges both, cites strategically — coherent argument.",
        },
      },
      questions: [
        {
          id: "ela11-u9-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RESEARCH,
          stem: "What's the difference between summary and synthesis in research writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Synthesis is shorter" },
              { id: "b", text: "Summary = separate; synthesis = integrated" },
              { id: "c", text: "Summary is better" },
              { id: "d", text: "No difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Summary vs synthesis",
                statement: "Separate vs integrated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Summary reports separately; synthesis combines into new understanding.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Summary = separate; synthesis = integrated.",
            commonErrors: ["Confusing the terms."],
          },
        },
        {
          id: "ela11-u9-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RESEARCH,
          stem: "How does the research example integrate sources?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source integration",
                statement: "Synthesis techniques.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Groups by theme: sleep research vs implementation concerns.",
                evidence: "groups",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Acknowledges consensus: 'research consensus supports later start times.'",
                evidence: "consensus",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Addresses counterargument: 'though implementation challenges exist.'",
                evidence: "counterargument",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Groups by theme, acknowledges consensus, addresses counterargument — coherent synthesis.",
            commonErrors: ["Summarizing instead of synthesizing."],
          },
        },
        {
          id: "ela11-u9-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RESEARCH,
          stem: "Analyze why synthesis produces stronger arguments than summary alone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis analysis",
                statement: "Why it matters.",
              },
              {
                kind: "skill",
                name: "Argument strength",
                statement: "How synthesis builds.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Summary provides partial views — each source's perspective.",
                evidence: "partial",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis combines perspectives — reveals patterns, consensus, tensions.",
                evidence: "patterns",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Stronger argument: synthesis creates nuanced position acknowledging complexity.",
                evidence: "nuanced",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Synthesis produces stronger arguments: summary gives partial views, synthesis combines perspectives revealing patterns/consensus/tensions, creates nuanced positions acknowledging complexity.",
            commonErrors: ["Thinking summary is enough."],
          },
        },
        {
          id: "ela11-u9-synthesis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RESEARCH,
          parts: [
            {
              label: "a",
              prompt: "What are 'integration techniques'?",
              marks: 2,
            },
            { label: "b", prompt: "Give two examples.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integration techniques",
                statement: "Synthesis methods.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Methods for combining sources: group by theme, acknowledge consensus, address counterarguments.",
                evidence: "techniques",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Examples: 'research consensus supports' (consensus), 'though challenges exist' (counterargument).",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Group by theme, consensus, counterarguments. (b) 'Consensus supports,' 'though challenges exist.'",
            commonErrors: ["Missing techniques."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-citation",
      title: "Citation Styles and Academic Integrity",
      skill:
        "Apply MLA and APA citation correctly and understand academic integrity.",
      lesson: {
        sections: [
          {
            heading: "MLA vs APA",
            body: "MLA (humanities): author-page in-text — '(Smith 45)'; Works Cited list. APA (social sciences): author-year in-text — '(Smith, 2020)'; References list. Both require: author, title, publication info, date. MLA emphasizes page numbers; APA emphasizes recency. Choose based on discipline — check assignment requirements.",
          },
          {
            heading: "Academic integrity",
            body: "Citations prevent plagiarism — using others' ideas/words without credit. Plagiarism consequences: academic penalties, damaged reputation. Paraphrasing requires citation too — changing words doesn't make it yours. Quoting requires quotation marks + citation. Self-plagiarism (reusing own work) also problematic. Academic integrity = honesty about sources.",
          },
        ],
        keyFormulas: [
          { name: "MLA vs APA", statement: "Author-page vs author-year." },
          { name: "Citation purpose", statement: "Credit + verification." },
          { name: "Plagiarism", statement: "Uncredited use of others' work." },
        ],
        workedExample: {
          problem: "How do MLA and APA in-text citations differ?",
          solution: "MLA: (Smith 45) — page number. APA: (Smith, 2020) — year.",
        },
      },
      questions: [
        {
          id: "ela11-u9-citation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CITATION,
          stem: "What's the main difference between MLA and APA in-text citations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "MLA is newer" },
              { id: "b", text: "MLA = author-page; APA = author-year" },
              { id: "c", text: "APA is longer" },
              { id: "d", text: "No difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MLA vs APA",
                statement: "Citation styles.",
              },
            ],
            steps: [
              {
                reasoning: "MLA uses author-page; APA uses author-year.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. MLA = author-page; APA = author-year.",
            commonErrors: ["Confusing styles."],
          },
        },
        {
          id: "ela11-u9-citation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CITATION,
          stem: "Why are citations necessary in academic writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Citation purpose",
                statement: "Credit + verification.",
              },
            ],
            steps: [
              {
                reasoning: "Credit: gives authors recognition for their work.",
                evidence: "credit",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Verification: allows readers to check sources.",
                evidence: "verification",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Integrity: prevents plagiarism — using others' work without credit.",
                evidence: "integrity",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Credit authors, allow verification, prevent plagiarism.",
            commonErrors: ["Thinking citations are optional."],
          },
        },
        {
          id: "ela11-u9-citation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: CITATION,
          stem: "Analyze why paraphrasing still requires citation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Citation analysis",
                statement: "Why paraphrase needs credit.",
              },
              {
                kind: "skill",
                name: "Academic integrity",
                statement: "Honesty about sources.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Paraphrase = restating ideas in own words — still uses others' thinking.",
                evidence: "paraphrase",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Changing words doesn't change ownership — ideas still belong to source.",
                evidence: "ownership",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Citation maintains integrity — honesty about intellectual debt.",
                evidence: "integrity",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Paraphrasing requires citation: restating ideas still uses others' thinking — changing words doesn't change ownership. Citation maintains academic integrity — honesty about intellectual debt.",
            commonErrors: ["Thinking paraphrase avoids citation."],
          },
        },
        {
          id: "ela11-u9-citation-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: CITATION,
          parts: [
            { label: "a", prompt: "What's 'plagiarism'?", marks: 2 },
            { label: "b", prompt: "What are its consequences?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plagiarism",
                statement: "Uncredited use.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Using others' words/ideas without credit — academic dishonesty.",
                evidence: "plagiarism",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Consequences: academic penalties, damaged reputation, possible expulsion.",
                evidence: "consequences",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Uncredited use of others' work. (b) Academic penalties, damaged reputation.",
            commonErrors: ["Underestimating consequences."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-argument",
      title: "Research-Based Argument Writing",
      skill:
        "Write arguments supported by research evidence with proper citation.",
      lesson: {
        sections: [
          {
            heading: "Research argument structure",
            body: "Research-based argument: **thesis** (position informed by research), **evidence** (cited sources), **synthesis** (integrate sources), **counterargument** (acknowledge opposing research), **citation** (proper attribution). Unlike opinion-based argument, research argument grounds claims in evidence — 'Research shows X (Smith 2020)' not just 'I think X.'",
          },
          {
            heading: "Evidence integration",
            body: "Effective research argument: **introduce source** ('According to Smith...'), **cite evidence** ('(Smith 45)'), **explain relevance** ('This supports the claim because...'), **synthesize** ('Combined with Jones's findings...'). Not just dropping citations — integrate evidence into argument flow.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure",
            statement:
              "Thesis → evidence → synthesis → counterargument → citation.",
          },
          {
            name: "Evidence integration",
            statement: "Introduce → cite → explain → synthesize.",
          },
          {
            name: "Research vs opinion",
            statement: "Evidence-based vs belief.",
          },
        ],
        workedExample: {
          problem: "How should you integrate research evidence into argument?",
          solution:
            "Introduce ('According to Smith') → cite ('(Smith 45)') → explain ('This supports because') → synthesize ('Combined with Jones').",
        },
      },
      questions: [
        {
          id: "ela11-u9-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RESEARCH,
          stem: "What's the difference between opinion-based and research-based arguments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opinion is better" },
              { id: "b", text: "No difference" },
              { id: "c", text: "Opinion = belief; research = evidence" },
              { id: "d", text: "Research is shorter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research vs opinion",
                statement: "Evidence vs belief.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Opinion based on belief; research based on cited evidence.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Opinion = belief; research = evidence.",
            commonErrors: ["Confusing the types."],
          },
        },
        {
          id: "ela11-u9-argument-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RESEARCH,
          stem: "How should research evidence be integrated into argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Introduce → cite → explain → synthesize.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Introduce: 'According to Smith...' — establish source.",
                evidence: "introduce",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cite: '(Smith 45)' — proper attribution.",
                evidence: "cite",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explain + synthesize: 'This supports because...' + 'Combined with Jones...' — integrate.",
                evidence: "explain",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Introduce → cite → explain → synthesize — integrate evidence into flow.",
            commonErrors: ["Dropping citations without context."],
          },
        },
        {
          id: "ela11-u9-argument-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RESEARCH,
          stem: "Analyze why research-based arguments are more persuasive than opinion-based ones.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument analysis",
                statement: "Why research persuades.",
              },
              {
                kind: "skill",
                name: "Persuasive strategy",
                statement: "How evidence works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Credibility: cited sources establish authority — not just personal belief.",
                evidence: "credibility",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Verifiability: readers can check sources — argument is testable.",
                evidence: "verifiable",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Nuance: research acknowledges complexity — stronger than simplistic opinion.",
                evidence: "nuance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Research arguments more persuasive: credibility (cited sources), verifiability (checkable), nuance (acknowledges complexity) — evidence-based beats belief-based.",
            commonErrors: ["Thinking opinion is equally persuasive."],
          },
        },
        {
          id: "ela11-u9-argument-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RESEARCH,
          parts: [
            { label: "a", prompt: "What's 'strategic citation'?", marks: 2 },
            {
              label: "b",
              prompt: "How does it differ from exhaustive citation?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Strategic citation",
                statement: "Brief, purposeful.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Citing key sources briefly to support argument — not listing every source.",
                evidence: "strategic",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Exhaustive = every source; strategic = best sources for argument.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Brief citation of key sources. (b) Strategic = best; exhaustive = all.",
            commonErrors: ["Over-citing."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-integrated",
      title: "Integrated Research Writing Practice",
      skill:
        "Integrate synthesis, citation, and argument in comprehensive research writing.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Research writing requires: **synthesis** (combine sources), **citation** (proper attribution), **argument** (evidence-based position). These work together: synthesis creates understanding, citation maintains integrity, argument builds persuasive case. Exam questions often require writing research-based arguments with proper citation.",
          },
          {
            heading: "Exam application",
            body: "Comprehensive research writing: identify sources → synthesize themes → integrate evidence → cite properly → build argument. Each skill alone is partial; together produce scholarly work.",
          },
        ],
        keyFormulas: [
          {
            name: "Three skills",
            statement: "Synthesis + citation + argument.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine research skills." },
        ],
        workedExample: {
          problem: "How would you write a research-based argument?",
          solution:
            "Synthesize sources → integrate evidence → cite properly → build argument.",
        },
      },
      questions: [
        {
          id: "ela11-u9-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RESEARCH,
          stem: "What three skills are needed for comprehensive research writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only grammar" },
              { id: "b", text: "Synthesis + citation + argument" },
              { id: "c", text: "Only reading" },
              { id: "d", text: "Only spelling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive research",
                statement: "Three skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesis + citation + argument = comprehensive research writing.",
                evidence: "three skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Synthesis + citation + argument.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u9-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RESEARCH,
          stem: "Apply two research writing skills to the example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesis: 'Research consensus supports... though challenges exist' — integrates sources.",
                evidence: "synthesis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Citation: '(AAP; Seattle study)' — proper attribution.",
                evidence: "citation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Argument: 'Effective policy must balance...' — evidence-based position.",
                evidence: "argument",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Synthesis (integrates), citation (attributes), argument (evidence-based).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u9-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RESEARCH,
          stem: "Write an analysis paragraph on how the research example demonstrates effective research writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Synthesis: combines three sources into coherent argument.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Citation: '(AAP; Seattle study)' — strategic, proper attribution.",
                evidence: "citation",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Argument: 'must balance biological needs with logistical realities' — nuanced position.",
                evidence: "argument",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The example demonstrates effective research writing: synthesis combines sources, citation provides attribution, argument builds nuanced position acknowledging complexity.'",
            commonErrors: ["Analyzing skills separately."],
          },
        },
        {
          id: "ela11-u9-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RESEARCH,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated research writing stronger?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each skill alone is partial; together produce scholarly work.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: synthesis+citation+argument shows comprehensive quality — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together produce quality. (b) Three skills show comprehensive work.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
