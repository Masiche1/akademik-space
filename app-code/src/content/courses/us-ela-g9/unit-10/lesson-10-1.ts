import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const RESEARCH: TextExtract = {
  title: "Research Writing: Building on Sources",
  author: "Written for Akademik Space",
  text: "When writing about social media's effects, don't just summarize sources — synthesize them. Source A (Stanford study) found correlation between heavy use and depression. Source B (MIT research) found causation in specific contexts (sleep disruption → mood). Source C (CDC data) shows population-level trends.\n\nStrong research writing: introduces source ('According to Stanford researchers...'), paraphrases accurately, analyzes significance ('This matters because...'), and connects to your argument ('This evidence supports the claim that...'). Weak research writing: drops quotes without context ('Studies show...'), misrepresents findings, or lets sources speak for themselves without analysis.",
};

const CITATION: TextExtract = {
  title: "Citation Practice",
  author: "Written for Akademik Space",
  text: "In-text citations: (Author, Year) for paraphrase; (Author, Year, p. X) for direct quote. Works Cited: full bibliographic information. Example:\n\n'According to a 2021 Stanford study, adolescents spending 3+ hours daily on social media showed twice the depression rates of lighter users (Smith et al., 2021).'\n\nSmith, J., et al. (2021). Social media use and adolescent mental health. Journal of Adolescent Health, 68(3), 215-223.",
};

export const lesson101: Lesson = {
  id: "ela9-u10-lesson-10-1",
  code: "10-1",
  title: "Research Writing and Source Integration",
  goal: "I CAN integrate sources smoothly, cite accurately, and synthesize research into my own argument.",
  standards: ["W.9-10.7", "W.9-10.8", "W.9-10.9", "RI.9-10.1"],
  vocabulary: [
    {
      term: "Synthesis",
      definition: "Combining multiple sources into new understanding.",
    },
    { term: "Paraphrase", definition: "Restating source in your own words." },
    {
      term: "Citation",
      definition: "Attribution to source — in-text and Works Cited.",
    },
    {
      term: "Source integration",
      definition: "Weaving sources into argument smoothly.",
    },
    {
      term: "Credible source",
      definition: "Reliable, authoritative information.",
    },
    {
      term: "Quotation",
      definition: "Direct words from source — use sparingly.",
    },
  ],
  concepts: [
    {
      id: "ela9-u10-synthesis",
      title: "Source synthesis",
      skill:
        "Combine multiple sources to build comprehensive argument — not just summarize each.",
      lesson: {
        sections: [
          {
            heading: "From summary to synthesis",
            body: "Weak: 'Stanford found correlation. MIT found causation. CDC shows trends.' — just lists sources. Strong: 'While Stanford's correlational data shows association between heavy use and depression, MIT's experimental research identifies specific mechanisms (sleep disruption) — together suggesting social media may contribute to mental health issues through multiple pathways.' Synthesis finds relationships between sources, not just their individual findings.",
          },
          {
            heading: "Source integration techniques",
            body: "**Introduce**: 'According to Stanford researchers...' **Paraphrase**: 'Their study found that teens spending 3+ hours showed 2x depression rates' (not direct quote). **Analyze**: 'This matters because it suggests...' **Connect**: 'This evidence supports the claim that...' Never let sources speak for themselves — your voice guides interpretation. 'Studies show' is weak; 'Stanford's 2021 research demonstrates...' is strong.",
          },
        ],
        keyFormulas: [
          {
            name: "Synthesize, don't summarize",
            statement: "Find relationships between sources.",
          },
          {
            name: "Introduce-paraphrase-analyze-connect",
            statement: "Integration pattern.",
          },
          {
            name: "Your voice guides",
            statement: "Sources support your argument.",
          },
        ],
        workedExample: {
          problem:
            "Synthesize Stanford + MIT sources on social media and mental health.",
          solution:
            "'Stanford's correlational research links heavy use to depression; MIT's experimental work identifies mechanisms (sleep disruption). Together, they suggest multiple pathways — not just correlation but potential causal mechanisms.'",
        },
      },
      questions: [
        {
          id: "ela9-u10-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RESEARCH,
          stem: "What's the difference between summarizing and synthesizing sources?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Summary = restate each; synthesis = find relationships",
              },
              { id: "b", text: "They're the same" },
              { id: "c", text: "Synthesis is shorter" },
              { id: "d", text: "Summary is better" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Relationships between sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Summary restates each source; synthesis finds connections and patterns.",
                evidence: "synthesis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Summary = restate each; synthesis = find relationships.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "ela9-u10-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RESEARCH,
          stem: "Rewrite 'Studies show social media is bad' using proper source integration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source integration",
                statement: "Proper technique.",
              },
            ],
            steps: [
              {
                reasoning: "Introduce: 'According to Stanford researchers...'",
                evidence: "introduce",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Paraphrase: 'Their 2021 study found teens spending 3+ hours showed 2x depression rates.'",
                evidence: "paraphrase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connect: 'This evidence suggests engagement-optimization may exploit psychological vulnerabilities.'",
                evidence: "connect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'According to Stanford researchers, adolescents spending 3+ hours daily on social media showed twice the depression rates of lighter users (Smith et al., 2021). This evidence suggests engagement-optimization may exploit psychological vulnerabilities, supporting the need for regulatory oversight.'",
            commonErrors: ["Using 'studies show' — still vague."],
          },
        },
        {
          id: "ela9-u10-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RESEARCH,
          stem: "Write a synthesis paragraph combining Stanford, MIT, and CDC sources on social media and mental health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-source synthesis",
                statement: "Three sources.",
              },
              {
                kind: "skill",
                name: "Argument integration",
                statement: "Sources support claim.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Stanford: correlation — 'teens 3+ hrs showed 2x depression rates.'",
                evidence: "Stanford",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "MIT: causation mechanism — 'sleep disruption → mood changes.'",
                evidence: "MIT",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "CDC: population trends — 'adolescent mental health declining since 2010.'",
                evidence: "CDC",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis: 'Together, correlational, experimental, and population data suggest multiple pathways — supporting targeted regulation.'",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Stanford's correlational research links heavy social media use to doubled depression rates; MIT's experimental work identifies mechanisms (sleep disruption affecting mood); CDC data shows declining adolescent mental health since 2010. Together, correlational, experimental, and population-level evidence suggest multiple pathways through which engagement-optimization may contribute to mental health issues — supporting the need for targeted regulatory oversight.'",
            commonErrors: ["Listing sources without synthesizing."],
          },
        },
        {
          id: "ela9-u10-synthesis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: CITATION,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between paraphrase and quotation?",
              marks: 2,
            },
            { label: "b", prompt: "When should you use each?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paraphrase vs quotation",
                statement: "When to use which.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Paraphrase = restate in your words; quotation = exact words from source.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Paraphrase for most evidence; quotation for powerful/unique phrasing that loses impact if changed.",
                evidence: "when",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Paraphrase = your words; quotation = exact words. (b) Paraphrase most evidence; quotation for powerful phrasing that loses impact.",
            commonErrors: [
              "Quoting everything — paraphrase is usually better.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u10-citation",
      title: "Citation and Academic Integrity",
      skill: "Cite sources accurately using MLA format and avoid plagiarism.",
      lesson: {
        sections: [
          {
            heading: "MLA citation basics",
            body: "**In-text**: (Author, Year) for paraphrase; (Author, Year, p. X) for direct quote. **Works Cited**: full bibliographic info — Author. Title. Publication, Year. Example: 'According to Smith et al. (2021), teens spending 3+ hours showed 2x depression rates.' Works Cited: 'Smith, J., et al. (2021). Social media use and adolescent mental health. Journal of Adolescent Health, 68(3), 215-223.'",
          },
          {
            heading: "Avoiding plagiarism",
            body: "Plagiarism = using others' words/ideas without attribution. Even paraphrasing requires citation — you can't just change a few words. 'Patchwriting' (changing some words but keeping structure) is still plagiarism. Always cite: direct quotes, paraphrased ideas, statistics, unique arguments. When in doubt, cite — better to over-cite than plagiarize.",
          },
        ],
        keyFormulas: [
          { name: "In-text + Works Cited", statement: "Both required." },
          { name: "Paraphrase needs citation", statement: "Not just quotes." },
          { name: "When in doubt, cite", statement: "Over-cite > plagiarize." },
        ],
        workedExample: {
          problem: "How would you cite Stanford study in-text and Works Cited?",
          solution:
            "In-text: '(Smith et al., 2021)' or 'According to Smith et al. (2021)...' Works Cited: 'Smith, J., et al. (2021). Social media use and adolescent mental health. Journal of Adolescent Health, 68(3), 215-223.'",
        },
      },
      questions: [
        {
          id: "ela9-u10-citation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CITATION,
          stem: "What's required for proper citation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only in-text" },
              { id: "b", text: "Only Works Cited" },
              { id: "c", text: "Both in-text and Works Cited" },
              { id: "d", text: "Neither — just mention source" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Citation",
                statement: "Both required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "MLA requires in-text citation AND Works Cited entry.",
                evidence: "citation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Both in-text and Works Cited.",
            commonErrors: ["Only doing one — both required."],
          },
        },
        {
          id: "ela9-u10-citation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CITATION,
          stem: "Write in-text citation for: Stanford study by Smith et al., 2021, page 217.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "In-text citation",
                statement: "MLA format.",
              },
            ],
            steps: [
              {
                reasoning: "Paraphrase: '(Smith et al., 2021)'",
                evidence: "paraphrase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Direct quote: '(Smith et al., 2021, p. 217)'",
                evidence: "quote",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Narrative: 'According to Smith et al. (2021)...'",
                evidence: "narrative",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Paraphrase: '(Smith et al., 2021)'; Quote: '(Smith et al., 2021, p. 217)'; Narrative: 'According to Smith et al. (2021)...'",
            commonErrors: ["Missing page number for direct quote."],
          },
        },
        {
          id: "ela9-u10-citation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: CITATION,
          stem: "Write Works Cited entry for: Journal article by Smith, Jones, and Lee, 2021, 'Social Media Use and Adolescent Mental Health,' Journal of Adolescent Health, vol 68, issue 3, pages 215-223.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Works Cited format",
                statement: "MLA structure.",
              },
              {
                kind: "skill",
                name: "Bibliographic accuracy",
                statement: "All elements.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning: "Authors: 'Smith, J., Jones, A., & Lee, K.'",
                evidence: "authors",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Title: 'Social Media Use and Adolescent Mental Health.'",
                evidence: "title",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Publication: 'Journal of Adolescent Health, vol. 68, no. 3, 2021, pp. 215-223.'",
                evidence: "publication",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning: "Complete entry with all elements in MLA order.",
                evidence: "complete",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Smith, J., Jones, A., & Lee, K. (2021). Social media use and adolescent mental health. Journal of Adolescent Health, 68(3), 215-223.'",
            commonErrors: ["Missing volume/issue/pages."],
          },
        },
        {
          id: "ela9-u10-citation-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: CITATION,
          parts: [
            {
              label: "a",
              prompt: "Does paraphrasing require citation?",
              marks: 2,
            },
            { label: "b", prompt: "What is 'patchwriting'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Plagiarism awareness",
                statement: "Attribution rules.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Yes — paraphrasing still uses others' ideas, requires citation.",
                evidence: "paraphrase",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Changing some words but keeping structure — still plagiarism.",
                evidence: "patchwriting",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Yes — paraphrasing uses others' ideas, requires citation. (b) Changing some words but keeping structure — still plagiarism.",
            commonErrors: ["Thinking paraphrase = no citation needed."],
          },
        },
      ],
    },
    {
      id: "ela9-u10-argument",
      title: "Argument Depth: Counterarguments and Nuance",
      skill:
        "Develop sophisticated arguments that acknowledge complexity and address counterarguments.",
      lesson: {
        sections: [
          {
            heading: "Counterargument mastery",
            body: "Strong arguments steelman opposition: 'Critics argue regulation violates First Amendment protections. However, broadcast and campaign finance precedents demonstrate governments can balance expression with public interest — targeted regulation of algorithms is consistent with existing frameworks.' Don't strawman ('opponents just don't get it') — engage strongest version. Acknowledge valid concerns, then show why your position still holds.",
          },
          {
            heading: "Nuance and qualification",
            body: "Avoid absolute claims: 'social media is bad' → 'engagement-optimizing algorithms create documented harms.' Qualifiers: 'some,' 'often,' 'may,' 'appears' — limit overreach. Acknowledge benefits: 'While social media enables connection and self-expression, its engagement-optimization business model creates harms that require regulatory attention.' Nuance shows sophistication — you're not claiming simple answers to complex problems.",
          },
        ],
        keyFormulas: [
          {
            name: "Steelman opposition",
            statement: "Strongest version of counterargument.",
          },
          { name: "Qualifiers limit", statement: "Some, often, may." },
          {
            name: "Acknowledge benefits",
            statement: "Nuance shows sophistication.",
          },
        ],
        workedExample: {
          problem: "How would you address First Amendment counterargument?",
          solution:
            "'Critics argue regulation violates free speech. However, broadcast and campaign finance precedents show governments can balance expression with public interest — targeted algorithm regulation is consistent with existing frameworks.'",
        },
      },
      questions: [
        {
          id: "ela9-u10-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RESEARCH,
          stem: "What is 'steelmanning' a counterargument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Agreeing completely" },
              { id: "b", text: "Attacking opponent" },
              {
                id: "c",
                text: "Presenting strongest version of opposing view",
              },
              { id: "d", text: "Ignoring opposition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Steelmanning",
                statement: "Strongest version.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Steelman = present strongest version of opposing view, not weak version.",
                evidence: "steelman",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Presenting strongest version of opposing view.",
            commonErrors: ["Confusing with strawman (weak version)."],
          },
        },
        {
          id: "ela9-u10-argument-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RESEARCH,
          stem: "Rewrite 'social media is bad' with nuance and qualification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Nuance writing",
                statement: "Qualified claims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Replace absolute with qualified: 'engagement-optimizing algorithms create documented harms.'",
                evidence: "qualified",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add qualifier: 'some users,' 'often,' 'may' — limit overreach.",
                evidence: "qualifier",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Acknowledge benefits: 'While enabling connection, engagement-optimization creates harms.'",
                evidence: "nuance",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'While social media enables connection and self-expression, engagement-optimizing algorithms create documented harms — including misinformation spread and mental health impacts — that may require targeted regulatory attention.'",
            commonErrors: ["Just adding 'some' — need full nuance."],
          },
        },
        {
          id: "ela9-u10-argument-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RESEARCH,
          stem: "Write a counterargument paragraph for social media regulation that steelmans opposition then rebuts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument writing",
                statement: "Steelman + rebuttal.",
              },
              {
                kind: "skill",
                name: "Sophisticated argument",
                statement: "Nuance + complexity.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Steelman: 'Critics argue regulation violates First Amendment — government shouldn't dictate platform design.'",
                evidence: "steelman",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rebuttal: 'However, broadcast and campaign finance precedents show balance possible — targeted algorithm regulation preserves expression while addressing harms.'",
                evidence: "rebuttal",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Nuance: 'This doesn't mean banning platforms — targeted regulation of harmful optimization while preserving beneficial features.'",
                evidence: "nuance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Critics argue regulation violates First Amendment protections — government shouldn't dictate platform design. However, broadcast and campaign finance precedents demonstrate governments can balance free expression with public interest. Targeted regulation of engagement-optimizing algorithms — not platform bans — is consistent with existing frameworks while addressing documented harms.'",
            commonErrors: ["Strawman instead of steelman."],
          },
        },
        {
          id: "ela9-u10-argument-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RESEARCH,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between steelman and strawman?",
              marks: 2,
            },
            { label: "b", prompt: "Which is stronger and why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Steelman vs strawman",
                statement: "Strong vs weak version.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Steelman = strongest version; strawman = weak/ distorted version.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Steelman stronger — engages real opposition, shows you've considered strongest case.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Steelman = strongest version; strawman = weak version. (b) Steelman stronger — engages real opposition.",
            commonErrors: ["Using strawman — weakens argument."],
          },
        },
      ],
    },
    {
      id: "ela9-u10-integrated",
      title: "Integrated Writing Practice",
      skill:
        "Combine research, argument, and conventions in comprehensive writing practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated writing process",
            body: "Complete process: **research** (find credible sources), **plan** (thesis + outline), **draft** (write with evidence), **revise** (strengthen argument), **edit** (fix conventions), **proofread** (final check). Each stage builds on previous — don't skip research (weak evidence) or editing (errors undermine argument). Grade 9 requires all stages, not just first draft.",
          },
          {
            heading: "Quality indicators",
            body: "Strong integrated writing: precise thesis, credible evidence, counterargument addressed, logical organization, varied sentences, precise vocabulary, correct conventions. Weak: vague claims, 'studies show,' no counterargument, choppy sentences, informal language, errors. Self-assess against checklist — catch problems before submission.",
          },
        ],
        keyFormulas: [
          {
            name: "Complete process",
            statement: "Research → plan → draft → revise → edit → proofread.",
          },
          { name: "All stages required", statement: "Don't skip." },
          { name: "Quality checklist", statement: "Self-assess." },
        ],
        workedExample: {
          problem: "How would you approach a research-based argument essay?",
          solution:
            "Research credible sources → plan thesis + outline → draft with integrated evidence → revise for argument strength → edit for conventions → proofread. Check quality indicators at each stage.",
        },
      },
      questions: [
        {
          id: "ela9-u10-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RESEARCH,
          stem: "What's the correct order of writing stages?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proofread → research → draft" },
              { id: "b", text: "Edit → draft → research" },
              {
                id: "c",
                text: "Research → plan → draft → revise → edit → proofread",
              },
              { id: "d", text: "Draft → research → edit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Writing process",
                statement: "Correct order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Research first (evidence), then plan, draft, revise, edit, proofread.",
                evidence: "process",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Research → plan → draft → revise → edit → proofread.",
            commonErrors: ["Starting with draft — need research first."],
          },
        },
        {
          id: "ela9-u10-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RESEARCH,
          stem: "List three quality indicators for strong integrated writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Quality indicators",
                statement: "What makes writing strong.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Precise thesis + credible evidence + counterargument addressed.",
                evidence: "argument",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Logical organization + varied sentences + precise vocabulary.",
                evidence: "style",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correct conventions + smooth source integration.",
                evidence: "conventions",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Precise thesis, credible evidence, counterargument addressed, logical organization, varied sentences, precise vocabulary, correct conventions, smooth source integration.'",
            commonErrors: ["Only checking one aspect."],
          },
        },
        {
          id: "ela9-u10-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RESEARCH,
          stem: "Write a complete paragraph integrating research, argument, counterargument, and conventions on social media regulation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated writing",
                statement: "All elements.",
              },
              {
                kind: "skill",
                name: "Comprehensive quality",
                statement: "Argument + evidence + style.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Thesis + evidence: 'Targeted regulation is necessary — Stanford research shows 2x depression rates.'",
                evidence: "thesis",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument: 'Critics argue First Amendment violations — however, precedents show balance possible.'",
                evidence: "counterargument",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Style + conventions: varied sentences, precise vocabulary, correct grammar.",
                evidence: "style",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Targeted regulation of engagement-optimizing algorithms is necessary because they create documented harms. Stanford researchers found adolescents spending 3+ hours daily showed twice the depression rates of lighter users (Smith et al., 2021). Critics argue regulation violates First Amendment protections; however, broadcast and campaign finance precedents demonstrate governments can balance expression with public interest. This evidence suggests targeted oversight — not platform bans — can address harms while preserving beneficial connection.'",
            commonErrors: ["Missing counterargument or conventions."],
          },
        },
        {
          id: "ela9-u10-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RESEARCH,
          parts: [
            {
              label: "a",
              prompt: "Why is the writing process important?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What happens if you skip stages?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Process importance",
                statement: "Why stages matter.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each stage builds quality — research provides evidence, revision strengthens argument, editing ensures clarity.",
                evidence: "importance",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Skip research = weak evidence; skip revision = shallow argument; skip editing = errors undermine credibility.",
                evidence: "skip",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each stage builds quality — research→evidence, revision→argument, editing→clarity. (b) Skip research=weak evidence; skip revision=shallow; skip editing=errors undermine.",
            commonErrors: ["Thinking first draft is enough."],
          },
        },
      ],
    },
  ],
};
