import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ee-u3-lesson-3-2",
  code: "3-2",
  title: "Citation and Referencing",
  goal: "I CAN apply citation and referencing conventions (MLA/APA) correctly in the Extended Essay.",
  standards: ["EE", "Citation", "Referencing", "Academic Writing"],
  vocabulary: [
    {
      term: "Citation",
      definition: "In-text acknowledgement of a source within the essay.",
    },
    {
      term: "Reference list",
      definition: "The list of all sources cited, at the end of the essay.",
    },
    {
      term: "MLA",
      definition: "Modern Language Association style — common in humanities.",
    },
    {
      term: "APA",
      definition:
        "American Psychological Association style — common in sciences and social sciences.",
    },
    {
      term: "Plagiarism",
      definition: "Using others' work without attribution.",
    },
    {
      term: "DOI",
      definition:
        "Digital Object Identifier — unique identifier for academic sources.",
    },
  ],
  concepts: [
    {
      id: "ee-u3-citation-basics",
      title: "Citation basics",
      skill:
        "Apply in-text citations and reference lists correctly in MLA or APA style.",
      lesson: {
        sections: [
          {
            heading: "Why cite",
            body: "Citation serves three purposes: avoids plagiarism by attributing ideas; allows readers to verify sources; and shows the intellectual conversation your essay joins. Every claim from a source needs citation — direct quotes, paraphrased ideas, and statistics.",
          },
          {
            heading: "MLA vs APA",
            body: "**MLA** (humanities): in-text citations use author-page format (Smith 45); reference list titled 'Works Cited'. **APA** (sciences/social sciences): in-text uses author-date (Smith, 2020); reference list titled 'References'. The IB accepts either consistent style — choose one and use it throughout.",
          },
          {
            heading: "Common errors",
            body: "Missing citations for paraphrased ideas; inconsistent formatting; sources in text but not in reference list (or vice versa); incorrect author names or dates. These errors suggest carelessness and can be flagged as plagiarism risks.",
          },
        ],
        keyFormulas: [
          {
            name: "MLA format",
            statement: "In-text: (Author Page); list: Works Cited",
          },
          {
            name: "APA format",
            statement: "In-text: (Author, Year); list: References",
          },
        ],
        workedExample: {
          problem: "Cite a book by Jane Smith published 2020 in MLA and APA.",
          solution:
            "MLA in-text: (Smith 45). MLA reference: Smith, Jane. Title. Publisher, 2020. APA in-text: (Smith, 2020). APA reference: Smith, J. (2020). Title. Publisher.",
        },
      },
      questions: [
        {
          id: "ee-u3-l32c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In MLA style, in-text citations typically use:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Author-date format" },
              { id: "b", text: "Author-page format" },
              { id: "c", text: "Numbered footnotes only" },
              { id: "d", text: "No in-text citations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "MLA citation",
                statement: "MLA uses author-page in-text citations.",
              },
            ],
            steps: [
              {
                reasoning: "MLA in-text uses author-page format.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Author-page format",
            commonErrors: ["Confusing MLA and APA citation formats."],
          },
        },
        {
          id: "ee-u3-l32c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the three purposes of citation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation purposes",
                statement:
                  "Citation prevents plagiarism, allows verification, and shows scholarly conversation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prevents plagiarism by attributing ideas to sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allows readers to verify and locate sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shows the essay's engagement with existing scholarship.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Citation prevents plagiarism, enables verification, and demonstrates scholarly engagement.",
            commonErrors: [
              "Thinking citation is only about avoiding plagiarism.",
            ],
          },
        },
        {
          id: "ee-u3-l32c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that consistent citation style matters more than which style is chosen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Citation consistency",
                statement:
                  "Consistency within the essay matters more than choice of style.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: consistency shows professionalism and avoids confusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: some subjects have conventional styles that should be followed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The IB accepts any consistent recognised style.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: choose an appropriate style and apply it consistently throughout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Consistency matters more than style choice — pick one recognised style and use it throughout.",
            commonErrors: ["Mixing MLA and APA formats within the same essay."],
          },
        },
        {
          id: "ee-u3-l32c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to apply citation correctly in the EE.",
          parts: [
            {
              label: "a",
              prompt: "Explain why citation is necessary.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe the difference between MLA and APA in-text citations.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate common citation errors and their consequences.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation practice",
                statement:
                  "Citation prevents plagiarism, enables verification and shows scholarship.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Prevents plagiarism and allows verification.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Demonstrates engagement with scholarship.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "MLA: author-page (Smith 45).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "APA: author-date (Smith, 2020).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both correctly distinguished.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Missing citations suggest plagiarism or carelessness.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Inconsistent formatting undermines professionalism.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: citation errors can seriously weaken or invalidate an essay.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Prevents plagiarism, enables verification. (b) MLA author-page, APA author-date. (c) Errors weaken essay seriously.",
            commonErrors: ["Inconsistent citation style throughout the essay."],
          },
        },
        {
          id: "ee-u3-l32c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In MLA style, in-text citations use which format?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(Smith, 2020)" },
              { id: "b", text: "(Smith 45)" },
              { id: "c", text: "[1]" },
              { id: "d", text: "Smith (page 45, 2020)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "MLA citation",
                statement: "MLA in-text citations use author-page format.",
              },
            ],
            steps: [
              {
                reasoning: "MLA cites author surname and page number.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** (Smith 45)",
            commonErrors: ["Using APA author-date format in an MLA essay."],
          },
        },
        {
          id: "ee-u3-l32c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In APA style, in-text citations use which format?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(Smith 45)" },
              { id: "b", text: "(Smith, 2020)" },
              { id: "c", text: "Smith (page 45)" },
              { id: "d", text: "No in-text citation is needed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "APA citation",
                statement: "APA in-text citations use author-date format.",
              },
            ],
            steps: [
              {
                reasoning: "APA cites author surname and year of publication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** (Smith, 2020)",
            commonErrors: ["Using MLA author-page format in an APA essay."],
          },
        },
        {
          id: "ee-u3-l32c1q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain the three purposes of citing sources in the EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation purposes",
                statement:
                  "Citation prevents plagiarism, enables verification and shows scholarly engagement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Citation attributes ideas to their sources, avoiding plagiarism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It allows readers to locate and verify the sources used.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It shows the essay's engagement with existing scholarship.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: citation is integral to academic integrity, not decoration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Citation prevents plagiarism, enables verification and demonstrates scholarly engagement.",
            commonErrors: [
              "Thinking citation is only about avoiding plagiarism.",
            ],
          },
        },
        {
          id: "ee-u3-l32c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of the following MUST be cited in the EE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your own conclusion" },
              { id: "b", text: "A statistic taken from a published report" },
              { id: "c", text: "Your research question" },
              { id: "d", text: "A transition sentence you wrote" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation purposes",
                statement:
                  "Every claim from a source needs citation — quotes, paraphrases and statistics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Statistics from reports are source material requiring attribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A statistic taken from a published report",
            commonErrors: ["Assuming statistics do not need citation."],
          },
        },
        {
          id: "ee-u3-l32c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In MLA style the reference list is titled:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "References" },
              { id: "b", text: "Works Cited" },
              { id: "c", text: "Bibliography" },
              { id: "d", text: "Sources" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "MLA citation",
                statement: "MLA uses 'Works Cited'; APA uses 'References'.",
              },
            ],
            steps: [
              {
                reasoning: "MLA's reference list is titled Works Cited.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Works Cited",
            commonErrors: [
              "Confusing MLA 'Works Cited' with APA 'References'.",
            ],
          },
        },
        {
          id: "ee-u3-l32c1q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which pairing correctly matches citation style to convention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "MLA: author-date / APA: author-page" },
              { id: "b", text: "MLA: author-page / APA: author-date" },
              { id: "c", text: "MLA: numbered notes / APA: author-page" },
              { id: "d", text: "Both styles use identical in-text formats" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "MLA vs APA",
                statement:
                  "MLA = author-page + Works Cited; APA = author-date + References.",
              },
            ],
            steps: [
              {
                reasoning: "MLA uses author-page; APA uses author-date.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** MLA: author-page / APA: author-date",
            commonErrors: ["Mixing the two styles' conventions."],
          },
        },
        {
          id: "ee-u3-l32c1q11",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain three consequences of inconsistent citation formatting within one essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation consistency",
                statement:
                  "Consistency shows professionalism and prevents confusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Readers cannot tell which convention applies, causing confusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It suggests carelessness, undermining the essay's credibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mixed styles can trigger plagiarism concerns during review.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It makes cross-checking citations against references harder.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: choose one style and apply it throughout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inconsistent citation confuses readers, suggests carelessness, risks plagiarism flags and complicates verification.",
            commonErrors: [
              "Switching styles mid-essay for different source types.",
            ],
          },
        },
        {
          id: "ee-u3-l32c1q12",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine why accurate citation matters beyond avoiding plagiarism.",
          parts: [
            {
              label: "a",
              prompt: "Explain how citations enable verification of claims.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate the effect of missing citations on a marker's judgement.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Judge whether citation skills transfer to other academic work.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation purposes",
                statement:
                  "Citation supports verification and scholarly conversation, not just compliance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Citations let readers locate the original source.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "They let readers trace how claims are argued and supported.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "They allow checking whether the interpretation matches the source.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Missing citations appear as plagiarism or carelessness.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "They undermine trust in the essay's integrity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: markers may cap achievement or escalate to review.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Citation is a foundational scholarly skill.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: the habits transfer directly to all academic writing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Enables location, tracing and checking of sources. (b) Missing citations damage integrity and trust. (c) Skills transfer broadly.",
            commonErrors: [
              "Treating citation as mere compliance rather than scholarly practice.",
            ],
          },
        },
        {
          id: "ee-u3-l32c1q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that citation is a mechanical task with no academic value.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation purposes",
                statement:
                  "Citation mechanics serve deeper academic values: honesty, verification, conversation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: once learned, formatting itself is largely mechanical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: citation embodies intellectual honesty and enables verification.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It situates the essay within scholarly conversation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Poor citation suggests the research itself may be unreliable.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: the mechanics are simple but the practice carries real academic value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Citation is mechanical in execution but valuable in principle — it is how scholarship maintains integrity.",
            commonErrors: [
              "Separating citation mechanics from their academic purpose.",
            ],
          },
        },
        {
          id: "ee-u3-l32c1q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to cite a source that has no individual author, such as a government report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Citation conventions",
                statement:
                  "Corporate or organisational authors are cited as authors.",
              },
            ],
            steps: [
              {
                reasoning: "Use the organisation's name as the author.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "MLA in-text: (Department of Health 12); APA: (Department of Health, 2020).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The reference entry begins with the organisation name.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: apply the chosen style consistently to anonymous sources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cite the organisation as author — e.g. (Department of Health, 2020) in APA — and begin the reference entry with the organisation.",
            commonErrors: [
              "Leaving such sources uncited or inventing an author.",
            ],
          },
        },
        {
          id: "ee-u3-l32c1q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Examine plagiarism risks in the Extended Essay.",
          parts: [
            {
              label: "a",
              prompt:
                "Define plagiarism, including direct copying and unattributed paraphrase.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Explain why careless paraphrasing can still constitute plagiarism.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the difference between accidental and deliberate plagiarism.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plagiarism",
                statement:
                  "Using others' work without attribution — whether copied or paraphrased — is plagiarism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Plagiarism is presenting others' ideas or words as your own.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Direct copying without quotation marks and citation is plagiarism.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Paraphrasing without citation is also plagiarism.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Even ideas, not just wording, require attribution.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Changing the words does not change the ownership of the idea.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "A paraphrase still needs a citation to its source.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: careless paraphrase is still a breach of integrity.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Deliberate plagiarism is dishonest and severely sanctioned.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Accidental plagiarism usually stems from poor note-taking.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: intent affects sanctions but both undermine integrity — prevention matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Unattributed use of words or ideas is plagiarism. (b) Paraphrase still requires citation. (c) Intent changes severity, not the breach.",
            commonErrors: ["Believing paraphrasing removes the need to cite."],
          },
        },
        {
          id: "ee-u3-l32c1q16",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "List three common citation errors and explain why each matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Common citation errors",
                statement:
                  "Missing citations, mismatched references and inconsistent styles all break verification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Missing in-text citation — readers cannot trace the claim to a source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Citation without matching reference entry — source cannot be located.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inconsistent style — confuses readers and suggests carelessness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: each error weakens integrity and can be flagged as a plagiarism risk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Missing citations, unmatched reference entries and inconsistent styles each break the verification chain.",
            commonErrors: [
              "Treating citation errors as trivial formatting issues.",
            ],
          },
        },
      ],
    },
    {
      id: "ee-u3-referencing",
      title: "Building the reference list",
      skill: "Construct accurate reference lists in MLA or APA format.",
      lesson: {
        sections: [
          {
            heading: "Reference list rules",
            body: "Every source cited in the essay must appear in the reference list, and vice versa. MLA uses 'Works Cited'; APA uses 'References'. Entries are alphabetical by author surname. Formatting details (italics, punctuation, inclusion of DOIs or URLs) differ between styles — consistency is essential.",
          },
          {
            heading: "Common source types",
            body: "Books, journal articles, websites, interviews, datasets — each has a specific format. Journal articles need volume/issue/pages; websites need access dates; interviews need description of format. Use a citation manager or official style guide to avoid errors.",
          },
          {
            heading: "Quality check",
            body: "Before submission: every in-text citation has a matching reference entry; every reference entry is cited in text; formatting is consistent; no fabricated sources. A fabricated reference is academic misconduct — never invent sources.",
          },
        ],
        keyFormulas: [
          {
            name: "Reference rule",
            statement:
              "Every cited source appears in list; every listed source is cited",
          },
          {
            name: "Alphabetical order",
            statement: "References ordered by author surname",
          },
        ],
        workedExample: {
          problem:
            "You cited Smith (2020) in text but forgot the reference entry. What happens?",
          solution:
            "The citation is incomplete — readers cannot locate the source. Add the full reference entry in alphabetical order. Every in-text citation needs a matching reference and vice versa.",
        },
      },
      questions: [
        {
          id: "ee-u3-l32c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In APA style, the reference list is titled:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Works Cited" },
              { id: "b", text: "References" },
              { id: "c", text: "Bibliography" },
              { id: "d", text: "Sources" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "APA reference list",
                statement: "APA uses 'References' as the list title.",
              },
            ],
            steps: [
              {
                reasoning: "APA reference list is titled 'References'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** References",
            commonErrors: [
              "Confusing MLA 'Works Cited' with APA 'References'.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the relationship between in-text citations and the reference list.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation-reference link",
                statement:
                  "Every in-text citation needs a matching reference entry and vice versa.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In-text citations point to sources within the text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reference list provides full details for each cited source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They must match perfectly — no orphans in either direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "In-text citations and reference entries must correspond exactly — every citation has a reference, every reference is cited.",
            commonErrors: [
              "Having references not cited in text or citations without references.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the consequences of fabricated references.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fabricated sources",
                statement:
                  "Inventing sources is academic misconduct, more serious than poor citation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fabricated references are deliberate deception — a serious offence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They can be easily detected and lead to essay failure or disciplinary action.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unlike citation errors, fabrication cannot be excused as carelessness.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: never invent sources; if unsure, verify the source exists.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fabricated references are deliberate misconduct with severe consequences — always verify sources exist.",
            commonErrors: [
              "Inventing plausible-sounding sources to fill gaps.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to build an accurate reference list.",
          parts: [
            {
              label: "a",
              prompt: "Explain the purpose of a reference list.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe three formatting rules for references.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate the risks of poor referencing.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reference list",
                statement:
                  "Lists all cited sources with full details for verification.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Provides full source details for verification.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Matches in-text citations; shows scholarship.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Alphabetical order by author surname.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Consistent formatting per chosen style.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Every cited source included; no uncited entries.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Missing entries break citation chain — readers cannot verify.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Inconsistent formatting suggests carelessness.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: referencing errors can seriously undermine essay credibility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Verification and completeness. (b) Alphabetical, consistent, matched. (c) Errors undermine credibility.",
            commonErrors: [
              "Including sources in list that are not cited in text.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Reference list entries are ordered:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By date of access" },
              { id: "b", text: "Alphabetically by author surname" },
              { id: "c", text: "By source type" },
              { id: "d", text: "In order of first citation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Alphabetical order",
                statement: "References are ordered by author surname.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Standard practice orders references alphabetically by author.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Alphabetically by author surname",
            commonErrors: [
              "Ordering references by publication date or citation order.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A source cited in the text but absent from the reference list creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — it is acceptable" },
              {
                id: "b",
                text: "An incomplete citation chain readers cannot follow",
              },
              { id: "c", text: "Only a minor formatting preference" },
              { id: "d", text: "An automatic essay failure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation-reference link",
                statement:
                  "Every in-text citation needs a matching reference entry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without the entry, readers cannot locate the source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** An incomplete citation chain readers cannot follow",
            commonErrors: ["Assuming in-text citations alone are sufficient."],
          },
        },
        {
          id: "ee-u3-l32c2q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "State the rule that must hold between in-text citations and the reference list.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation-reference link",
                statement:
                  "Every cited source appears in the list; every listed source is cited.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Every in-text citation must have a matching reference entry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Every reference entry must be cited somewhere in the text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Entries are alphabetical and formatted consistently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: no orphans permitted in either direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "In-text citations and reference entries must correspond exactly — a perfect two-way match.",
            commonErrors: ["Including references never cited in the text."],
          },
        },
        {
          id: "ee-u3-l32c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A journal article reference typically requires which details?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the author and title" },
              {
                id: "b",
                text: "Author, title, journal, volume/issue, pages and year",
              },
              { id: "c", text: "Just a website URL" },
              { id: "d", text: "Only the publisher name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Common source types",
                statement:
                  "Journal articles need volume/issue/pages; websites need access details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Journal articles require full bibliographic detail including volume and pages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Author, title, journal, volume/issue, pages and year",
            commonErrors: [
              "Citing journal articles like books without volume and page details.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fabricated references are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A minor formatting issue" },
              { id: "b", text: "Academic misconduct — deliberate deception" },
              { id: "c", text: "Acceptable if the source seems plausible" },
              { id: "d", text: "A citation style preference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fabricated sources",
                statement:
                  "Inventing sources is deliberate academic misconduct.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fabricated references are invented, not merely formatted wrongly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Academic misconduct — deliberate deception",
            commonErrors: [
              "Treating fabrication as equivalent to a citation error.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which source most likely needs an access date or DOI/URL in its reference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A printed book" },
              { id: "b", text: "A frequently updated website" },
              { id: "c", text: "A journal article with a stable DOI" },
              { id: "d", text: "A personal interview transcript" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Common source types",
                statement:
                  "Websites need access dates and URLs because content changes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Web content is unstable, so access dates preserve retrievability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A frequently updated website",
            commonErrors: ["Omitting access dates for web sources."],
          },
        },
        {
          id: "ee-u3-l32c2q11",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain the information a complete reference entry provides that an in-text citation cannot.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reference list",
                statement:
                  "Reference entries give full details enabling location and verification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Full bibliographic details: author, title, publisher, year.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Location details: journal volume/pages, DOI or URL.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together they let readers retrieve and verify the exact source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They document the full range of scholarship used.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: the reference list completes the transparency in-text citations begin.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reference entries supply full bibliographic and location details that let readers retrieve and verify each source.",
            commonErrors: [
              "Giving minimal reference entries lacking retrievable details.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q12",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the quality checks needed before submitting a reference list.",
          parts: [
            {
              label: "a",
              prompt: "Explain why every entry must be cited in the text.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate the risk of inconsistent formatting across entries.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Judge whether a citation manager eliminates all referencing errors.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality check",
                statement:
                  "References must match citations exactly, in consistent format, with no fabricated sources.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Uncited entries suggest padding or sources not actually used.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "They break the two-way match between text and list.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Judgement: the list should reflect genuine scholarship only.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Inconsistent formatting signals carelessness to markers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "It complicates verification and may trigger closer scrutiny.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Judgement: consistency is a marker of reliability.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Citation managers help but can produce errors on unusual sources.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: always verify generated entries manually.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Entries must be genuinely cited. (b) Inconsistency damages credibility. (c) Managers help but require verification.",
            commonErrors: [
              "Trusting citation software output without checking.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that a flawless reference list guarantees a high grade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reference list",
                statement:
                  "Referencing supports integrity but does not substitute for essay substance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: accurate referencing is a foundation of academic credibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: criteria A-D assess the essay's research, analysis and argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A perfect list cannot rescue weak analysis or a vague question.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Referencing is necessary hygiene, not a scoring criterion by itself.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: flawless references are expected, not rewarded — substance earns marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A flawless reference list is necessary but not sufficient — the essay's substance determines achievement.",
            commonErrors: [
              "Believing technical correctness alone earns high marks.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "List four checks to perform on the reference list before submission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality check",
                statement:
                  "Pre-submission checks ensure the citation chain is complete and consistent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Every in-text citation has a matching entry, and vice versa.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Entries are in alphabetical order by author surname.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Formatting follows one style consistently throughout.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No fabricated or unverifiable sources appear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Check citation-entry matching, alphabetical order, consistent formatting and source authenticity.",
            commonErrors: [
              "Skipping the final cross-check between text and list.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Examine academic integrity in referencing.",
          parts: [
            {
              label: "a",
              prompt: "Distinguish a citation error from fabrication.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain how markers can detect referencing problems.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether 'I didn't know' excuses poor referencing.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fabricated sources",
                statement:
                  "Errors are accidental; fabrication is deliberate — both must be avoided.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A citation error is an accidental omission or inconsistency.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Fabrication is inventing a source that does not exist.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Errors reflect carelessness; fabrication reflects deception.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Judgement: severity differs but both breach academic standards.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Markers cross-check every citation against the reference list.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "They can verify that listed sources actually exist.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Inconsistencies and implausible details attract scrutiny.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Honesty about ignorance may mitigate but does not excuse.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Students are expected to learn the required style.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: responsibility for accurate referencing rests with the student.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Errors are accidental; fabrication is deliberate deception. (b) Markers cross-check and verify sources. (c) Ignorance mitigates but does not excuse.",
            commonErrors: [
              "Assuming accidental errors carry the same weight as fabrication.",
            ],
          },
        },
        {
          id: "ee-u3-l32c2q16",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Describe what a reference entry adds beyond the in-text citation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Citation-reference link",
                statement:
                  "The reference list completes the citation by giving full retrieval details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It gives full details: author, title, publisher, year.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It adds location information: pages, volume, DOI or URL.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It enables the reader to find and verify the exact source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: together they form a complete, verifiable citation chain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The reference entry adds full bibliographic and location details enabling retrieval and verification.",
            commonErrors: [
              "Thinking the in-text citation alone identifies the source fully.",
            ],
          },
        },
      ],
    },
  ],
};
