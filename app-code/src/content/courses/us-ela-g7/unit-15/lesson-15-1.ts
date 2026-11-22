import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const ESSAYPROMPT: TextExtract = {
  title: "Integrated Writing Prompt",
  author: "Written for Akademik Space",
  text: "Write an argument essay on this prompt: Should schools replace traditional grades with written feedback?\n\nUse research to support your position. Include at least two credible sources, acknowledge counterarguments, and cite your evidence properly.",
};

export const lesson151: Lesson = {
  id: "ela7-u15-lesson-15-1",
  code: "15-1",
  title: "Integrated Writing: Research-Based Argument Essay",
  goal: "I CAN write a complete research-based argument essay with thesis, evidence, counterarguments, and citations.",
  standards: ["W.7.1", "W.7.8", "W.7.9"],
  vocabulary: [
    {
      term: "Research essay",
      definition: "Argument supported by credible sources.",
    },
    {
      term: "Source integration",
      definition: "Weaving evidence from multiple sources into your argument.",
    },
    { term: "Citation", definition: "Formal credit to sources used." },
    {
      term: "Synthesis",
      definition:
        "Combining ideas from multiple sources into your own argument.",
    },
    {
      term: "Annotated bibliography",
      definition: "List of sources with brief descriptions of each.",
    },
    {
      term: "Works cited",
      definition: "List of sources referenced in the essay.",
    },
  ],
  concepts: [
    {
      id: "ela7-u15-integrated",
      title: "Research-based argument writing",
      skill:
        "Synthesize multiple sources into a coherent argument with proper citations.",
      lesson: {
        sections: [
          {
            heading: "Synthesis vs summary",
            body: "**Summary** lists what sources say; **synthesis** combines them into YOUR argument. 'Source A says grades motivate; Source B says grades cause anxiety; therefore a hybrid system might work best' — that's synthesis. You're not just reporting sources; you're using them to build your own position.",
          },
          {
            heading: "Essay structure with sources",
            body: "Introduction: thesis + preview of sources. Body paragraphs: each develops one reason with evidence from sources. Counterargument paragraph: acknowledge opposition + respond. Conclusion: restate position + significance. Citations appear throughout — 'According to Johnson (2023)...' or '(Smith, 2022)'.",
          },
        ],
        keyFormulas: [
          {
            name: "Synthesis",
            statement:
              "Combine sources into your own argument — not just report them.",
          },
          {
            name: "Citation integration",
            statement:
              "Introduce source → state finding → connect to your claim.",
          },
          {
            name: "Essay structure",
            statement:
              "Thesis → reasons+sources → counterargument → conclusion.",
          },
        ],
        workedExample: {
          problem:
            "How would you synthesize two sources arguing opposite views on grades?",
          solution:
            "'While Johnson (2023) argues grades motivate students, Smith (2022) finds they cause anxiety. This tension suggests schools should explore alternatives like written feedback that preserve motivation without the stress of letter grades.' — acknowledges both, builds own position.",
        },
      },
      questions: [
        {
          id: "ela7-u15-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ESSAYPROMPT,
          stem: "What is 'synthesis' in research writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listing sources alphabetically" },
              {
                id: "b",
                text: "Combining ideas from multiple sources into your own argument",
              },
              { id: "c", text: "Summarizing each source separately" },
              { id: "d", text: "Copying sources exactly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Combine sources into own argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesis = building your argument FROM sources, not just reporting them.",
                evidence: "Use research to support your position",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Combining ideas from sources into your own argument.",
            commonErrors: ["Choosing (c) — summary isn't synthesis."],
          },
        },
        {
          id: "ela7-u15-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ESSAYPROMPT,
          stem: "Write a thesis statement for the grades prompt that synthesizes both sides of the argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis thesis",
                statement: "Acknowledge complexity, take position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis should acknowledge both sides then take position.",
                evidence: "Should schools replace traditional grades",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'While grades provide motivation, their stress and narrow focus suggest schools should supplement them with written feedback.'",
                evidence: "written feedback",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesizes opposing views into a nuanced position.",
                evidence: "Use research to support",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'While grades provide motivation, their stress and narrow focus suggest schools should supplement them with written feedback.'",
            commonErrors: [
              "One-sided thesis — synthesis acknowledges complexity.",
            ],
          },
        },
        {
          id: "ela7-u15-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ESSAYPROMPT,
          stem: "Write a body paragraph that synthesizes two sources supporting your position on grades. Include proper citations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source synthesis",
                statement: "Combine multiple sources into argument.",
              },
              {
                kind: "skill",
                name: "Citation",
                statement: "Proper source attribution.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Introduce sources: 'According to Johnson (2023) and Smith (2022)...'",
                evidence: "at least two credible sources",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "State findings from each: 'Johnson found grades increase anxiety; Smith found written feedback improves learning.'",
                evidence: "cite your evidence properly",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesize: 'Together, these findings suggest written feedback addresses grades' weaknesses while preserving benefits.'",
                evidence: "support your position",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connect to thesis: 'This supports supplementing grades with feedback rather than eliminating them.'",
                evidence: "acknowledge counterarguments",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'According to Johnson (2023), letter grades increase student anxiety, while Smith (2022) found written feedback improves learning outcomes. Together, these findings suggest schools should supplement grades with detailed feedback — preserving motivation while reducing stress.'",
            commonErrors: [
              "Listing sources separately — must synthesize into unified argument.",
            ],
          },
        },
        {
          id: "ela7-u15-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ESSAYPROMPT,
          parts: [
            {
              label: "a",
              prompt: "Explain the difference between summary and synthesis.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write one sentence that synthesizes two hypothetical sources on homework.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Summary vs synthesis",
                statement: "Report vs argue.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Summary lists what sources say; synthesis combines them into your own argument.",
                evidence: "Use research to support your position",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'While Source A links homework to stress, Source B shows it improves retention — suggesting quality over quantity.'",
                evidence: "synthesize",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Summary reports sources; synthesis builds your argument from them. (b) 'While A links homework to stress, B shows it improves retention — suggesting quality over quantity.'",
            commonErrors: [
              "Saying they're the same — synthesis requires your own argument.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u15-integrated2",
      title: "Works cited and final revision",
      skill:
        "Create works cited lists and perform final revision checks on essays.",
      lesson: {
        sections: [
          {
            heading: "Works cited format",
            body: "Works cited lists all sources used, alphabetically by author. Format varies (MLA, APA) but basic elements: author, title, publication, date, URL/access date. 'Johnson, Maria. \"School Nutrition Policies.\" Journal of Education, 2023.' Each in-text citation must match a works cited entry — no orphan citations or uncited sources.",
          },
          {
            heading: "Final revision checklist",
            body: "Before submitting: thesis clear? Each paragraph has topic sentence + evidence? Counterargument addressed? Citations correct and consistent? Transitions smooth? Conclusion wraps up? Then EDIT: grammar, punctuation, spelling, formatting. Revision first (ideas), then editing (conventions).",
          },
        ],
        keyFormulas: [
          {
            name: "Works cited",
            statement: "Alphabetical list of sources with full details.",
          },
          {
            name: "Citation matching",
            statement: "Every in-text citation must have works cited entry.",
          },
          {
            name: "Revision checklist",
            statement:
              "Thesis, evidence, counterargument, citations, transitions, conclusion.",
          },
        ],
        workedExample: {
          problem:
            "What's wrong with citing '(Johnson, 2023)' if Johnson isn't in works cited?",
          solution:
            "It's an orphan citation — the reader can't verify the source. Every in-text citation needs a corresponding works cited entry with full details.",
        },
      },
      questions: [
        {
          id: "ela7-u15-integrated2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ESSAYPROMPT,
          stem: "What must a works cited list include?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "All sources cited in the essay, alphabetically",
              },
              { id: "b", text: "Only book titles" },
              { id: "c", text: "Only internet sources" },
              { id: "d", text: "The essay's thesis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Works cited",
                statement: "Complete source list.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Works cited = all sources used, alphabetically by author.",
                evidence: "cite your evidence properly",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. All sources cited, alphabetically.",
            commonErrors: [
              "Choosing (a) — includes articles, websites, studies, not just books.",
            ],
          },
        },
        {
          id: "ela7-u15-integrated2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ESSAYPROMPT,
          stem: "What's wrong with this citation: '(Johnson, 2023)' when Johnson isn't in works cited?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Citation matching",
                statement: "Every citation needs source entry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It's an orphan citation — reader can't verify or find the source.",
                evidence: "cite your evidence properly",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Works cited must include full details: author, title, publication, date.",
                evidence: "at least two credible sources",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fix: add Johnson's full citation to works cited.",
                evidence: "credibile sources",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Orphan citation — every in-text citation needs a works cited entry with full source details.",
            commonErrors: [
              "Thinking short citations are enough — works cited needs full details.",
            ],
          },
        },
        {
          id: "ela7-u15-integrated2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ESSAYPROMPT,
          stem: "Create a works cited entry for this source and explain the citation matching rule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Works cited format",
                statement: "Author, title, publication, date.",
              },
              {
                kind: "skill",
                name: "Citation matching",
                statement: "In-text and works cited must correspond.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Format: 'Johnson, Maria. \"School Nutrition Policies.\" Journal of Education, 2023.'",
                evidence: "credible sources",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "Alphabetical order by author's last name.",
                evidence: "at least two credible sources",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "In-text citation '(Johnson, 2023)' must match this entry — same author, same year.",
                evidence: "cite them properly",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Every in-text citation needs works cited entry; every works cited entry should be cited in text.",
                evidence: "support your position",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Johnson, Maria. \"School Nutrition Policies.\" Journal of Education, 2023.' — in-text '(Johnson, 2023)' matches this entry; every citation needs a works cited entry and vice versa.",
            commonErrors: [
              "Listing sources not cited in essay — works cited should match in-text citations.",
            ],
          },
        },
        {
          id: "ela7-u15-integrated2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ESSAYPROMPT,
          parts: [
            {
              label: "a",
              prompt: "Name three items on a final revision checklist.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why revision comes before editing.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision process",
                statement: "Improve ideas before fixing mechanics.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis clear, evidence present, counterargument addressed (or transitions/citations).",
                evidence: "acknowledge counterarguments",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Don't polish sentences you'll delete — improve ideas first, then fix grammar/spelling.",
                evidence: "Use research to support your position",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Thesis clear, evidence present, counterargument addressed. (b) Don't polish what you'll cut — improve ideas first, then fix mechanics.",
            commonErrors: [
              "Editing before revising — wasted effort on sentences that may be deleted.",
            ],
          },
        },
      ],
    },
  ],
};
