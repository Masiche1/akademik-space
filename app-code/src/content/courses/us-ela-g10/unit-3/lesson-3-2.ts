import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const SOURCES: TextExtract = {
  title: "Three sources on school start times",
  author: "Written for Akademik Space",
  text: 'Source A: Lena Alvarez, "Sleep and the Teenage Brain," Journal of Adolescent Health, page 14.\n"Teenagers naturally fall asleep about two hours later than younger children, so an early alarm cuts into the sleep they need."\n\nSource B: Marcus Webb and Priya Nair, A District Report on Later Bell Times, page 22.\n"After the district moved its first bell from 7:30 to 8:30, average attendance rose by four percent."\n\nSource C: "Why Early Bells Still Matter," an unsigned editorial in the Riverton Gazette, page 3.\n"Later start times push after-school sports and jobs into the evening, leaving less time for homework."',
};

const WEAK: TextExtract = {
  title: "Draft paragraph (weak)",
  author: "Written for Akademik Space",
  text: "School should start later. A lot of kids are tired. Sleep is really important, and it is very good for you. Some people did a study. They said it was good. Also, school is boring when you are tired. So in conclusion, school should start later.",
};

export const lesson32: Lesson = {
  id: "ela10-u3-lesson-3-2",
  code: "3-2",
  title: "Synthesis and Research Writing",
  goal: "I CAN integrate quotations and paraphrase from several sources with MLA in-text citations, and revise a weak draft for purpose and audience.",
  standards: ["W.9-10.8", "W.9-10.5"],
  vocabulary: [
    {
      term: "Synthesis",
      definition:
        "Combining ideas from several sources into a new, unified argument or explanation in your own voice.",
    },
    {
      term: "Paraphrase",
      definition:
        "Restating a source's idea in your own words and sentence structure, which still needs a citation.",
    },
    {
      term: "In-text citation",
      definition:
        "A brief note in parentheses, in MLA style the author's last name and page number, that points to the works cited list.",
    },
    {
      term: "Signal phrase",
      definition:
        "Words such as 'According to Alvarez' that introduce borrowed material and name its source.",
    },
    {
      term: "Plagiarism",
      definition:
        "Presenting another person's words or ideas as your own, whether by copying or by uncredited paraphrase.",
    },
    {
      term: "Revision",
      definition:
        "Rethinking and reshaping a draft for ideas, organization, evidence and clarity, which goes beyond fixing errors.",
    },
  ],
  concepts: [
    {
      id: "ela10-u3-mla-synthesis",
      title: "Integrating sources with MLA citations",
      skill:
        "Use signal phrases, quotations and paraphrase from multiple sources, and cite them with MLA in-text citations.",
      lesson: {
        sections: [
          {
            heading: "Quote, paraphrase and signal phrases",
            body: "A synthesis paragraph uses sources to support **your** claim; the sources do not speak for you. Introduce each borrowed idea with a **signal phrase** ('According to Alvarez,' 'Webb and Nair report that') and then explain how it supports your point. **Quote** when the exact wording is vivid or authoritative, and keep quotations short. **Paraphrase** when the idea matters more than the words: change the vocabulary and the sentence structure, keep the meaning, and still cite. Aim to combine sources in a sentence, for example by showing that two sources agree or conflict.",
          },
          {
            heading: "MLA in-text citations",
            body: "MLA in-text citations use the **author's last name and page number** with **no comma and no 'p.'**: (Alvarez 14). If the signal phrase already names the author, put only the page number in parentheses: Alvarez explains that teenagers fall asleep later (14). For two authors use both last names: (Webb and Nair 22). For three or more authors use the first author plus 'et al.': (Okafor et al. 8). For a source with no author, use a shortened title in quotation marks: (\"Why Early Bells Still Matter\" 3). The citation comes **before the final period**, and the period follows the parenthesis, even after a quotation: ... the sleep they need\" (Alvarez 14).",
          },
        ],
        keyFormulas: [
          {
            name: "One author",
            statement: "(Last name page): (Alvarez 14). No comma, no 'p.'",
          },
          {
            name: "Two authors",
            statement: "(Last name and Last name page): (Webb and Nair 22).",
          },
          {
            name: "Three or more authors",
            statement: "(First author et al. page): (Okafor et al. 8).",
          },
          {
            name: "No author",
            statement:
              '("Shortened Title" page), with the title in quotation marks if it is an article.',
          },
        ],
        workedExample: {
          problem:
            "Write one sentence that quotes Source A with a signal phrase and an MLA citation.",
          solution:
            'Alvarez reports that "teenagers naturally fall asleep about two hours later than younger children" (14). Because the author is named in the signal phrase, only the page number is in parentheses, and the period goes after the parenthesis. Without the signal phrase the sentence would end: ... younger children" (Alvarez 14).',
        },
      },
      questions: [
        {
          id: "ela10-u3-mla-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SOURCES,
          stem: "Which is the correct MLA in-text citation for the quotation from Source B, with no author named in the sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(Webb 22)" },
              { id: "b", text: "(Webb and Nair, p. 22)" },
              { id: "c", text: "(Nair and Webb, 2024)" },
              { id: "d", text: "(Webb and Nair 22)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "MLA two authors",
                statement:
                  "Use both last names joined by 'and', then the page number, with no comma.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Source B has two authors, so both last names appear, in the order they are listed, followed by the page with no comma or 'p.'.",
                evidence: "Marcus Webb and Priya Nair",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "**(d)** (Webb and Nair 22). (a) adds a comma and 'p.', (c) omits an author and (d) reverses the order and uses a date, which is APA style.",
            commonErrors: [
              "Using (a), the style of other citation systems.",
              "Citing only the first author when there are two.",
            ],
          },
        },
        {
          id: "ela10-u3-mla-synthesis-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SOURCES,
          stem: "Which sentence quotes Source C and cites it correctly in MLA style?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: 'The editorial warns that later start times "push after-school sports and jobs into the evening." ("Why Early Bells Still Matter" 3)',
              },
              {
                id: "b",
                text: 'The editorial warns that later start times "push after-school sports and jobs into the evening" (Gazette, 3).',
              },
              {
                id: "c",
                text: "The editorial warns that later start times push after-school sports and jobs into the evening (anonymous 3).",
              },
              {
                id: "d",
                text: 'The editorial warns that later start times "push after-school sports and jobs into the evening" ("Why Early Bells Still Matter" 3).',
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "No author",
                statement:
                  "Cite a shortened title in quotation marks and the page number.",
              },
              {
                kind: "convention",
                name: "Citation placement",
                statement: "The citation comes before the final period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The editorial is unsigned, so the title in quotation marks replaces the author's name.",
                evidence: "unsigned editorial",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "The closing quotation mark comes before the parentheses, and the sentence period comes after them, not inside the quotation.",
                evidence: '("Why Early Bells Still Matter" 3).',
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "**(d)**. (a) names the newspaper and uses a comma, (c) puts the period before the citation and (d) cites 'anonymous' instead of the title.",
            commonErrors: [
              "Putting the period inside the quotation and then adding the citation after it.",
              "Writing 'anonymous' when a title is available.",
            ],
          },
        },
        {
          id: "ela10-u3-mla-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SOURCES,
          stem: "Write two sentences that synthesize Source A and Source B in support of the claim that later start times help students. Quote one source, paraphrase the other and give correct MLA in-text citations for both.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis",
                statement:
                  "Combine sources to support your own claim, with signal phrases and explanation.",
              },
              {
                kind: "convention",
                name: "MLA citation",
                statement:
                  "Author last name and page number, no comma, before the period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "One source is quoted accurately in quotation marks with a signal phrase.",
                evidence: "two hours later than younger children",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The other source is paraphrased in new words and sentence structure, not copied.",
                evidence: "attendance rose by four percent",
                marks: 2,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Both citations are in correct MLA form, for example (Alvarez 14) and (Webb and Nair 22), with the period after the parenthesis.",
                marks: 2,
                markCode: "AO5",
              },
            ],
            levels: levels("writing", 6),
            finalAnswer:
              'Model: Alvarez explains that "teenagers naturally fall asleep about two hours later than younger children" (14). This biological shift helps explain why attendance in one district climbed about four percent once the first bell moved an hour later (Webb and Nair 22).',
            commonErrors: [
              "Changing only one or two words of the original and calling it a paraphrase.",
              "Writing (Webb and Nair, p. 22).",
              "Stringing two quotations together without connecting them to the claim.",
            ],
          },
        },
        {
          id: "ela10-u3-mla-synthesis-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: SOURCES,
          stem: "Answer all parts using the three sources.",
          parts: [
            {
              label: "a",
              prompt:
                'Give the correct MLA in-text citation for Source A when the sentence already begins with "According to Alvarez,".',
              marks: 2,
            },
            {
              label: "b",
              prompt:
                'A student writes: Webb and Nair say "attendance rose by four percent". (page 22). Identify and correct two citation errors.',
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write a synthesis paragraph (six to eight sentences) answering the question: Should schools start later? Use all three sources, with at least one quotation and one paraphrase, signal phrases, correct MLA in-text citations, and your own claim and commentary. Acknowledge the opposing view in Source C.",
              marks: 14,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "MLA in-text citation",
                statement:
                  "Use the author's last name and page, or page only when the author is in the signal phrase.",
              },
              {
                kind: "skill",
                name: "Synthesis",
                statement:
                  "Use sources to build your own argument rather than listing them.",
              },
              {
                kind: "skill",
                name: "Avoiding plagiarism",
                statement:
                  "Quote or paraphrase accurately and cite every borrowed idea.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Only the page number is needed because the author is named: (14).",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "a",
                reasoning:
                  "The citation has no comma and no 'p.', and the period follows the parenthesis.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning:
                  'Error 1: the period must come after the citation, not before it, so the sentence ends: ... four percent" (22).',
                marks: 2,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning:
                  "Error 2: the citation should not use 'page' or 'p.', and because the authors are named it shows only the page number.",
                marks: 2,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning: "A clear claim or topic sentence about start times.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Accurate quotation and paraphrase of at least two sources, using signal phrases.",
                evidence: "attendance rose by four percent",
                marks: 4,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Correct MLA citations for each source, including the no-author title format for Source C.",
                marks: 3,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "Commentary that explains how the evidence supports the claim and links the sources together.",
                marks: 3,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "A fair acknowledgement of the opposing view in Source C and a response to it.",
                evidence: "leaving less time for homework",
                marks: 2,
                markCode: "AO4",
              },
            ],
            levels: levels("writing", 14, "c"),
            finalAnswer:
              '(a) (14). (b) The period belongs after the citation, and the citation should be (22) with no \'page\'. Correct: Webb and Nair say "attendance rose by four percent" (22). (c) Model: Schools should start later because teenage biology and district data point the same way. According to Alvarez, "teenagers naturally fall asleep about two hours later than younger children" (14), so an early bell cuts into necessary sleep. One district that moved its first bell an hour later saw average attendance rise about four percent (Webb and Nair 22). Critics counter that later schedules push activities and jobs into the evening ("Why Early Bells Still Matter" 3). That cost is real, but it can be managed with adjusted practice times, and it does not outweigh the health and attendance gains.',
            commonErrors: [
              "Dropping quotations with no signal phrase.",
              "Summarizing each source in turn instead of combining them.",
              "Paraphrasing without a citation.",
            ],
          },
        },
      ],
    },
    {
      id: "ela10-u3-revising-drafts",
      title: "Revising for purpose and audience",
      skill:
        "Strengthen a weak draft by developing ideas, adding evidence, improving organization and adjusting tone.",
      lesson: {
        sections: [
          {
            heading: "Revise before you edit",
            body: "**Revising** means re-seeing the draft: is the claim clear, is it supported with specific evidence, is the order logical, and does the tone fit the reader? **Editing** comes later and fixes grammar, spelling and punctuation. Start with purpose (to argue, inform or explain) and audience (a school board needs facts and respect, a friend can hear a casual voice). Common weaknesses are vague words ('a lot', 'really important'), unsupported claims ('Some people did a study'), repeated ideas, missing transitions and a conclusion that only restates the opening.",
          },
          {
            heading: "Strengthening a draft",
            body: "Replace vague phrases with specifics and cite sources: 'A district study found attendance rose four percent after later bells (Webb and Nair 22).' Add reasoning that explains why evidence matters. Delete filler, combine choppy sentences and add transitions such as 'for example' and 'as a result'. Match tone to audience: avoid slang and 'you' in a formal essay. End with a conclusion that adds a final insight or a call to action, not just 'in conclusion'.",
          },
        ],
        keyFormulas: [
          {
            name: "Revise then edit",
            statement:
              "Fix ideas, evidence and organization first, then fix grammar and spelling.",
          },
          {
            name: "Specific evidence",
            statement:
              "Replace general claims with a named source, a number or an example.",
          },
          {
            name: "Audience check",
            statement:
              "Choose vocabulary, tone and evidence that suit who will read the piece.",
          },
        ],
        workedExample: {
          problem:
            "Revise 'Some people did a study. They said it was good.' for a school board audience.",
          solution:
            "Revision: A district study of attendance found a four percent rise after the first bell moved to 8:30 (Webb and Nair 22). The vague 'some people' becomes a named source, 'it was good' becomes a measurable result, and the two choppy sentences are joined, so the tone is formal and informative.",
        },
      },
      questions: [
        {
          id: "ela10-u3-revising-drafts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WEAK,
          stem: "Which revision best fixes the vague third sentence for an audience of school board members?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Adolescents who sleep fewer than eight hours show lower attention and weaker grades, according to Alvarez (14).",
              },
              { id: "b", text: "Sleep matters a lot to a lot of teens." },
              {
                id: "c",
                text: "Sleep is really, really, really good for you.",
              },
              {
                id: "d",
                text: "Sleep is super important for everyone, you know.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Specific evidence and tone",
                statement:
                  "Replace vague wording with specific, formal, cited support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only (b) is specific, cites a source and keeps a formal tone suited to a school board.",
                evidence: "according to Alvarez (14)",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "**(a)**. The others stay vague, repeat words or use casual language.",
            commonErrors: [
              "Choosing (c) because repetition feels emphatic, though it adds no information.",
            ],
          },
        },
        {
          id: "ela10-u3-revising-drafts-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: WEAK,
          stem: "What are the two most important weaknesses of the draft paragraph?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It contains spelling errors and run-on sentences.",
              },
              {
                id: "b",
                text: "It lacks specific, cited evidence and its tone is too casual for a formal audience.",
              },
              { id: "c", text: "It has too many commas and no title." },
              { id: "d", text: "It is too long and has too many sources." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Diagnosing a draft",
                statement:
                  "Identify weaknesses in evidence, organization and tone before editing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The evidence is vague and uncited, as in 'Some people did a study'.",
                evidence: "Some people did a study",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "The tone is casual and imprecise ('a lot of kids', 'really important').",
                evidence: "A lot of kids are tired",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "**(b)**. The paragraph is short, its spelling is accurate and it has no sources at all.",
            commonErrors: [
              "Focusing on surface errors when the larger problems are evidence and tone.",
            ],
          },
        },
        {
          id: "ela10-u3-revising-drafts-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SOURCES,
          stem: 'A student\'s draft reads: "Sleep is really important, and it is very good for you. Some people did a study. They said it was good." Rewrite these three sentences as two stronger sentences for a school board audience. Use specific evidence from the three sources shown and a correct MLA citation.',
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision",
                statement:
                  "Replace vague claims with specific cited evidence in an appropriate tone.",
              },
              {
                kind: "convention",
                name: "MLA citation",
                statement:
                  "Author last name and page, no comma, before the period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vague phrases are replaced with specific information from a source.",
                evidence: "attendance rose by four percent",
                marks: 2,
                markCode: "AO4",
              },
              {
                reasoning:
                  "The tone is formal and the sentences are combined and varied.",
                marks: 2,
                markCode: "AO4",
              },
              {
                reasoning:
                  "The MLA citation is correct, such as (Webb and Nair 22).",
                marks: 2,
                markCode: "AO5",
              },
            ],
            levels: levels("writing", 6),
            finalAnswer:
              "Model: Research shows that adequate sleep is essential for adolescent learning, and teenagers naturally fall asleep about two hours later than younger children (Alvarez 14). When one district moved its first bell an hour later, average attendance rose by four percent (Webb and Nair 22).",
            commonErrors: [
              "Keeping 'a lot' and 'really' and only adding a citation.",
              "Adding a citation with a comma and 'p.'.",
            ],
          },
        },
        {
          id: "ela10-u3-revising-drafts-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: SOURCES,
          stem: 'Answer all parts about revising this draft paragraph: "School should start later. A lot of kids are tired. Sleep is really important, and it is very good for you. Some people did a study. They said it was good. Also, school is boring when you are tired. So in conclusion, school should start later."',
          parts: [
            {
              label: "a",
              prompt:
                "State the writer's claim in the draft and say why it is not yet convincing.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Name three revision strategies that would improve the draft and explain what each fixes.",
              marks: 6,
            },
            {
              label: "c",
              prompt:
                "Rewrite the whole paragraph for an audience of school board members. Keep the claim, use specific evidence from the three sources shown (do not invent other facts), include a transition and end with a strong conclusion.",
              marks: 12,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision",
                statement:
                  "Revise ideas, evidence, organization and tone before editing.",
              },
              {
                kind: "skill",
                name: "Audience awareness",
                statement:
                  "Formal audiences need precise, cited, respectful writing.",
              },
              {
                kind: "convention",
                name: "MLA citation",
                statement: "Cite borrowed ideas in correct MLA style.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The claim is that school should start later.",
                evidence: "School should start later",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "a",
                reasoning:
                  "It is unconvincing because it gives no specific evidence and relies on vague, casual statements.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "b",
                reasoning:
                  "Add specific cited evidence, which fixes unsupported claims.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "b",
                reasoning:
                  "Replace casual and vague words with formal, precise language, which fixes tone.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "b",
                reasoning:
                  "Add transitions, combine choppy sentences and reorganize, which fixes flow and logic (or: rewrite the conclusion).",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "A clear claim retained and framed for the audience.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Accurate, specific evidence from at least two sources.",
                evidence: "two hours later than younger children",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct MLA in-text citations.",
                marks: 2,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "Commentary explaining why the evidence supports the claim, with a transition.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning: "Formal tone and varied sentences throughout.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "A conclusion that adds insight or a call to action rather than repeating the opening.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            levels: [
              ...levels("writing", 6, "b"),
              ...levels("writing", 12, "c"),
            ],
            finalAnswer:
              '(a) The claim is that school should start later; it is unconvincing because it has no specific evidence and sounds casual. (b) Add specific cited evidence; replace vague, casual words with formal language; add transitions and a stronger conclusion. (c) Model: The district should move its first bell later. Teenagers naturally fall asleep about two hours later than younger children, so an early alarm cuts into the sleep they need (Alvarez 14). In practice, one district that shifted its bell by an hour saw average attendance rise four percent (Webb and Nair 22). Critics note that evening activities may suffer ("Why Early Bells Still Matter" 3); however, schedules can be adjusted. Because the evidence links later starts to health and attendance, the board should act this year.',
            commonErrors: [
              "Fixing commas and spelling while leaving the weak ideas.",
              "Inventing statistics not in the sources.",
              "Ending with 'in conclusion' and the same sentence as the opening.",
            ],
          },
        },
      ],
    },
  ],
};
