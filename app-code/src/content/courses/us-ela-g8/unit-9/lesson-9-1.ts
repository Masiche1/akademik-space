import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const REVISION: TextExtract = {
  title: "Revision Workshop: From Draft to Polished",
  author: "Written for Akademik Space",
  text: "A student submitted this draft for peer review. The task was to write an argument about whether schools should have later start times.",
};

const DRAFT: TextExtract = {
  title: "Student Argument Draft",
  author: "Written for Akademik Space",
  text: "Schools should start later because kids need sleep. Studies show that teens need 8-10 hours of sleep. If school starts at 7:30, kids can't get enough sleep. This makes them tired and they can't focus in class. Also, some kids have to wake up really early to get to school. Later start times would help everyone. Some people say it would mess up schedules but I think the benefits are worth it. In conclusion, schools should start later.",
};

export const lesson91: Lesson = {
  id: "ela8-u9-lesson-9-1",
  code: "9-1",
  title: "Revision Strategies",
  goal: "I CAN revise writing for clarity, organization, and impact using specific revision techniques.",
  standards: ["W.8.5", "W.8.5a", "W.8.5b", "W.8.1", "W.8.1a", "W.8.1b"],
  vocabulary: [
    {
      term: "Revision",
      definition:
        "Re-seeing and improving the content and organization of writing.",
    },
    {
      term: "Editing",
      definition: "Correcting grammar, punctuation, and spelling.",
    },
    {
      term: "Clarity",
      definition: "Making ideas clear and easy to understand.",
    },
    { term: "Organization", definition: "Arranging ideas in logical order." },
    {
      term: "Counterargument",
      definition: "Addressing opposing views in argument writing.",
    },
    {
      term: "Evidence",
      definition: "Support for claims — facts, examples, quotes.",
    },
  ],
  concepts: [
    {
      id: "ela8-u9-revise",
      title: "Content and organization revision",
      skill:
        "Revise for clarity, logical organization, and strong argument structure.",
      lesson: {
        sections: [
          {
            heading: "Content revision",
            body: "Revision isn't just fixing errors — it's improving ideas. Check: Is the claim clear? Does each paragraph support it? Are there enough examples? The draft says 'studies show' but doesn't cite specific research — revision should add 'the CDC recommends 8-10 hours' or similar. 'Kids need sleep' is vague — revision makes it specific: 'teenagers' circadian rhythms shift, making early mornings difficult.'",
          },
          {
            heading: "Organization revision",
            body: "Check logical flow: claim → reasons → evidence → counterargument → conclusion. Draft has claim and reasons but weak counterargument ('some people say it would mess up schedules' — vague, not specific). Revise to name the concern: 'Opponents argue later start times disrupt after-school activities and bus schedules.' Then address it: 'However, districts that implemented later starts report minimal disruption with adjusted activity times.'",
          },
        ],
        keyFormulas: [
          {
            name: "Revision = re-see",
            statement: "Improve ideas, not just fix errors.",
          },
          {
            name: "Specific beats vague",
            statement: "'Studies show' → cite actual research.",
          },
          {
            name: "Counterargument needs specifics",
            statement: "Name the concern, then address it.",
          },
        ],
        workedExample: {
          problem:
            "How would you revise 'Studies show that teens need 8-10 hours of sleep'?",
          solution:
            "Add specificity: 'The CDC recommends 8-10 hours of sleep for teenagers ages 13-18.' — now the claim has credible evidence.",
        },
      },
      questions: [
        {
          id: "ela8-u9-revise-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REVISION,
          stem: "What is the main purpose of revision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make it longer" },
              { id: "b", text: "Improve content and organization" },
              { id: "c", text: "Fix spelling errors" },
              { id: "d", text: "Add decoration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revision",
                statement: "Improve content and organization.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revision improves ideas and structure, not just surface errors.",
                evidence: "peer review",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Improve content and organization.",
            commonErrors: ["Confusing revision (ideas) with editing (errors)."],
          },
        },
        {
          id: "ela8-u9-revise-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Identify two places where the draft is vague and suggest specific revisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Specificity revision",
                statement: "Replace vague with specific.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vague: 'Studies show' — which studies? Revise: 'CDC recommends 8-10 hours.'",
                evidence: "Studies show that teens need",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Vague: 'some people say it would mess up schedules' — who? what schedules? Revise with specifics.",
                evidence: "some people say it would mess up schedules",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Vague: 'kids can't get enough sleep' — how much is enough? Already stated 8-10, make connection clear.",
                evidence: "kids can't get enough sleep",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. 'Studies show' → 'CDC recommends.' 2. 'Some people say' → 'Opponents argue later starts disrupt after-school activities and bus schedules.'",
            commonErrors: ["Adding words without adding specifics."],
          },
        },
        {
          id: "ela8-u9-revise-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DRAFT,
          stem: "Revise the entire argument to strengthen the counterargument and add specific evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument strengthening",
                statement: "Address opposing view specifically.",
              },
              {
                kind: "skill",
                name: "Evidence addition",
                statement: "Add credible support.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Strengthen counterargument: 'Opponents argue later starts disrupt after-school sports and bus routes.'",
                evidence: "some people say it would mess up schedules",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Address it: 'However, districts like Seattle and Minneapolis implemented later starts with minimal disruption — activities shifted by 30-60 minutes.'",
                evidence: "I think the benefits are worth it",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add specific evidence: 'CDC recommends 8-10 hours; studies show teens with later starts have better attendance and grades.'",
                evidence: "Studies show that teens need",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Revised: 'Schools should start later because teens need 8-10 hours of sleep (CDC recommendation). If school starts at 7:30, many teens can't get enough sleep — their circadian rhythms shift during puberty. Opponents argue later starts disrupt activities and bus schedules, but districts like Seattle report minimal disruption with adjusted times. The benefits to student health and academic performance outweigh logistical challenges.'",
            commonErrors: ["Adding counterargument without addressing it."],
          },
        },
        {
          id: "ela8-u9-revise-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            {
              label: "a",
              prompt: "Why is 'Studies show' weak evidence?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Rewrite it with specific evidence.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence specificity",
                statement: "Name the source.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Vague — which studies? Could be anything. Weak credibility.",
                evidence: "Studies show",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'The CDC recommends 8-10 hours of sleep for teenagers ages 13-18.'",
                evidence: "8-10 hours of sleep",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Vague — doesn't name source. (b) 'The CDC recommends 8-10 hours of sleep for teenagers ages 13-18.'",
            commonErrors: ["Adding 'research shows' — still vague."],
          },
        },
      ],
    },
    {
      id: "ela8-u9-editing",
      title: "Editing for grammar and mechanics",
      skill:
        "Edit drafts for grammar, punctuation, spelling, and consistency errors.",
      lesson: {
        sections: [
          {
            heading: "Editing checklist",
            body: "After revision, edit for: **grammar** (subject-verb agreement, tense consistency), **punctuation** (commas, apostrophes, semicolons), **spelling** (commonly misspelled words), **word choice** (homophones, formal register), **consistency** (same tense, person, style throughout). Read aloud — your ear catches errors your eye misses. Check one error type at a time.",
          },
          {
            heading: "Common editing targets",
            body: "Watch for: 'their/there/they're', 'its/it's', 'would of' → 'would have', 'could of' → 'could have', missing commas after introductory phrases, run-ons, fragments, inconsistent tense. In the draft: 'kids can't get enough sleep' — informal 'kids' should be 'students' in formal argument. 'I think' — first person in formal argument should be 'the evidence suggests' or removed.",
          },
        ],
        keyFormulas: [
          {
            name: "Edit systematically",
            statement: "Check one error type at a time.",
          },
          { name: "Read aloud", statement: "Ear catches what eye misses." },
          {
            name: "Formal register",
            statement:
              "No contractions, slang, or first person in formal writing.",
          },
        ],
        workedExample: {
          problem: "Why should 'kids' be changed in a formal argument?",
          solution:
            "'Kids' is informal — formal argument uses 'students' or 'teenagers.' Also 'I think' should be removed or changed to 'the evidence suggests' for objectivity.",
        },
      },
      questions: [
        {
          id: "ela8-u9-editing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "Which word should be changed for formal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Class" },
              { id: "b", text: "Schools" },
              { id: "c", text: "Kids" },
              { id: "d", text: "Sleep" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register consistency",
                statement: "Formal writing uses formal terms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Kids' is informal — formal argument uses 'students' or 'teenagers.'",
                evidence: "kids need sleep",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Kids → students/teenagers.",
            commonErrors: ["Missing other informal language like 'I think'."],
          },
        },
        {
          id: "ela8-u9-editing-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Identify three editing errors and fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Error identification",
                statement: "Spot and fix mistakes.",
              },
            ],
            steps: [
              {
                reasoning: "'kids' → 'students' (formal register).",
                evidence: "kids need sleep",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'I think' → remove or 'the evidence suggests' (objectivity).",
                evidence: "I think the benefits",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'kids can't get enough sleep' → 'students cannot get sufficient sleep' (formal + precise).",
                evidence: "kids can't get enough",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. 'kids' → 'students.' 2. 'I think' → 'the evidence suggests.' 3. 'can't get enough' → 'cannot get sufficient.'",
            commonErrors: ["Fixing grammar but missing register issues."],
          },
        },
        {
          id: "ela8-u9-editing-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DRAFT,
          stem: "Edit the entire draft for grammar, punctuation, spelling, and register. Show your corrections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive editing",
                statement: "Fix all error types.",
              },
              {
                kind: "skill",
                name: "Register consistency",
                statement: "Maintain formal tone.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "'kids need sleep' → 'students need sleep' (formal).",
                evidence: "kids need sleep",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'kids can't get enough sleep' → 'students cannot get sufficient sleep.'",
                evidence: "kids can't get enough",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'some kids have to wake up' → 'some students must wake up.'",
                evidence: "some kids have to wake up",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'I think' → 'the evidence suggests' or remove (objectivity).",
                evidence: "I think the benefits",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Edited: 'Schools should start later because students need sleep. Studies show that teens need 8-10 hours. If school starts at 7:30, students cannot get sufficient sleep. This makes them tired and they cannot focus. Some students must wake up early to get to school. Later start times would help everyone. Some people argue it would disrupt schedules, but the benefits are worth it. In conclusion, schools should start later.'",
            commonErrors: [
              "Missing 'I think' — first person weakens formal argument.",
            ],
          },
        },
        {
          id: "ela8-u9-editing-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REVISION,
          parts: [
            {
              label: "a",
              prompt: "What is the difference between revision and editing?",
              marks: 2,
            },
            { label: "b", prompt: "Which comes first and why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Process understanding",
                statement: "Revision before editing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Revision = improve content/organization; editing = fix grammar/mechanics.",
                evidence: "revision vs editing",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Revision first — don't polish errors in weak content.",
                evidence: "peer review",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Revision improves ideas; editing fixes errors. (b) Revision first — improve content before polishing surface.",
            commonErrors: [
              "Editing before revising — wasted effort on weak content.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u9-integrated",
      title: "Integrated writing practice",
      skill:
        "Apply all writing skills in a complete argumentative essay with evidence and counterargument.",
      lesson: {
        sections: [
          {
            heading: "Complete argument structure",
            body: "Strong argument needs: **claim** (clear position), **reasons** (why claim is true), **evidence** (facts, examples, research), **counterargument** (opposing view + rebuttal), **conclusion** (restatement + significance). Each element must be specific — not 'studies show' but 'CDC recommends.' Not 'some people disagree' but 'opponents argue X because Y' + 'however, Z shows...'",
          },
          {
            heading: "Evidence integration",
            body: "Weave evidence smoothly: 'According to the CDC, teenagers need 8-10 hours of sleep' — attribution + specific fact. 'For example, schools in Seattle that delayed start times saw attendance improve by 4%' — example + result. Evidence isn't just inserted — it's explained: 'This matters because...' connects evidence to claim.",
          },
        ],
        keyFormulas: [
          {
            name: "Argument = claim + reasons + evidence + counter + conclusion",
            statement: "All elements required.",
          },
          {
            name: "Specific evidence",
            statement: "Name sources, cite facts, give examples.",
          },
          {
            name: "Evidence explained",
            statement: "Connect evidence to claim, don't just insert.",
          },
        ],
        workedExample: {
          problem: "How do you integrate evidence smoothly?",
          solution:
            "'According to the CDC (2023), teenagers need 8-10 hours of sleep. This matters because early school starts prevent teens from meeting this need, leading to fatigue and poor academic performance.' — attribution + explanation.",
        },
      },
      questions: [
        {
          id: "ela8-u9-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REVISION,
          stem: "Which element is missing from a complete argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Counterargument" },
              { id: "b", text: "Conclusion" },
              { id: "c", text: "Title" },
              { id: "d", text: "Claim" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argument elements",
                statement: "All parts required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Complete argument needs claim, reasons, evidence, counterargument, conclusion — title is optional.",
                evidence: "argument",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Counterargument — addresses opposing views.",
            commonErrors: ["Thinking title is required element."],
          },
        },
        {
          id: "ela8-u9-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Write a strong counterargument paragraph for the school start time argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument writing",
                statement: "Acknowledge then rebut.",
              },
            ],
            steps: [
              {
                reasoning:
                  "State opposing view: 'Opponents argue later start times would disrupt after-school activities and require costly bus schedule changes.'",
                evidence: "mess up schedules",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rebut: 'However, districts like Seattle implemented later starts with minimal disruption — activities shifted by 30-60 minutes and bus routes were adjusted.'",
                evidence: "I think the benefits",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion: 'The logistical challenges are manageable compared to benefits to student health and performance.'",
                evidence: "benefits are worth it",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Opponents argue later starts disrupt activities and bus schedules. However, Seattle's experience shows minimal disruption with adjusted times. The benefits to student health outweigh manageable logistical challenges.'",
            commonErrors: ["Stating opposition without rebuttal."],
          },
        },
        {
          id: "ela8-u9-integrated-q3",
          difficulty: "challenge",
          totalMarks: 9,
          extract: REVISION,
          stem: "Write a complete argument essay outline with claim, 3 reasons, evidence for each, counterargument, and conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Complete argument planning",
                statement: "Structure all elements.",
              },
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Specific support for each reason.",
              },
            ],
            levels: [
            { level: "Level 4", marks: "8-9", descriptor: "Thorough, precise response that is well supported by carefully chosen textual evidence and explains clearly how the evidence supports the point." },
            { level: "Level 3", marks: "5-7", descriptor: "Clear, adequate response with relevant evidence and some explanation of how it supports the point." },
            { level: "Level 2", marks: "3-4", descriptor: "Partial, general response with some evidence but little explanation." },
            { level: "Level 1", marks: "1-2", descriptor: "Minimal response with little or no evidence from the text." },
          ],
            steps: [
              {
                reasoning:
                  "Claim: 'Schools should start later to support student health and academic performance.'",
                evidence: "complete argument",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reasons + evidence: sleep needs (CDC data), academic benefits (attendance/grades studies), health impacts (mental health research).",
                evidence: "claim, reasons, evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument: 'Opponents cite schedule disruption' + rebuttal with Seattle/Minnesota examples.",
                evidence: "counterargument",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion: restate claim + significance ('student health affects everything else').",
                evidence: "conclusion",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Claim (later starts support health/performance) → R1 sleep needs (CDC 8-10 hrs) → R2 academic benefits (attendance studies) → R3 mental health (research) → Counter (schedule disruption) + rebut (Seattle example) → Conclusion (health affects everything).",
            commonErrors: [
              "Outline without specific evidence for each reason.",
            ],
          },
        },
        {
          id: "ela8-u9-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            {
              label: "a",
              prompt: "What makes evidence 'integrated' vs just 'inserted'?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Rewrite 'Studies show teens need sleep' with integrated evidence.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Explain connection to claim.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Integrated = explained connection ('this matters because...'); inserted = just dropped in.",
                evidence: "integrated evidence",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'According to the CDC, teens need 8-10 hours of sleep. This matters because early starts prevent meeting this need, causing fatigue.'",
                evidence: "Studies show teens need sleep",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Integrated explains connection; inserted just adds fact. (b) 'According to the CDC, teens need 8-10 hours of sleep. This matters because early starts prevent meeting this need.'",
            commonErrors: ["Adding evidence without explaining relevance."],
          },
        },
      ],
    },
  ],
};
