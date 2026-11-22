import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const EDIT: TextExtract = {
  title: "Editing Practice: Informative Paragraph",
  author: "Written for Akademik Space",
  text: "Social media has alot of affects on teens. The platforms design them to be addictive, which means users cant stop scrolling. Its a problem that effects mental health. Because their brains are still developing, teens are more vulnerable to the persuasion architecture that platforms use.",
};

const ERRORS: TextExtract = {
  title: "Student Essay with Syntax Errors",
  author: "Written for Akademik Space",
  text: "Social media effects everyone. People spend hours on there phones. The platforms design them to be addictive. Which means users can't stop scrolling. Its a problem that affects teens the most. Because their brains are still developing.",
};

const REV: TextExtract = {
  title: "Revision Practice: Argument Paragraph",
  author: "Written for Akademik Space",
  text: "Social media is bad and should be banned. Studies show its harmful. The government needs to step in. Some people disagree but they are wrong. We need regulation now before its too late.",
};

export const lesson72: Lesson = {
  id: "ela9-u7-lesson-7-2",
  code: "7-2",
  title: "Editing and Proofreading Mastery",
  goal: "I CAN systematically edit for grammar, usage, mechanics, and spelling — going beyond surface errors to sentence-level issues.",
  standards: ["L.9-10.1", "L.9-10.2", "L.9-10.3"],
  vocabulary: [
    { term: "Editing", definition: "Correcting grammar, usage, mechanics." },
    {
      term: "Proofreading",
      definition: "Final check for typos and formatting.",
    },
    {
      term: "Homophone",
      definition:
        "Words sounding alike but different meaning (their/there/they're).",
    },
    {
      term: "Subject-verb agreement",
      definition: "Verb matches subject in number.",
    },
    { term: "Modifier", definition: "Word/phrase describing another element." },
    {
      term: "Dangling modifier",
      definition: "Modifier without clear subject.",
    },
  ],
  concepts: [
    {
      id: "ela9-u7-homophones",
      title: "Homophones and common errors",
      skill:
        "Distinguish commonly confused words: their/there/they're, its/it's, affect/effect, than/then.",
      lesson: {
        sections: [
          {
            heading: "High-frequency errors",
            body: "**their/there/they're**: 'their' = possessive ('their phones'), 'there' = location ('over there'), 'they're' = contraction ('they are'). **its/it's**: 'its' = possessive ('the platform changed its algorithm'), 'it's' = contraction ('it's a problem'). **affect/effect**: 'affect' = verb ('social media affects teens'), 'effect' = noun ('the effect is harmful'). **than/then**: 'than' = comparison ('more than'), 'then' = time ('and then').",
          },
          {
            heading: "Systematic checking",
            body: "Don't rely on spellcheck — it won't catch 'their' vs 'there' (both spelled correctly). Read aloud: errors sound wrong ('alot of affects' → 'a lot of effects'). Check each homophone individually — slow down and verify meaning. 'cant' → 'can't' (missing apostrophe); 'alot' → 'a lot' (two words); 'effects' as verb → 'affects'.",
          },
        ],
        keyFormulas: [
          {
            name: "Homophone = sound-alike",
            statement: "Same sound, different meaning/spelling.",
          },
          { name: "Check meaning", statement: "Does word fit context?" },
          { name: "Read aloud", statement: "Errors sound wrong." },
        ],
        workedExample: {
          problem: "Fix: 'Social media has alot of affects on teens'",
          solution:
            "'Social media has a lot of effects on teens.' 'Alot' → 'a lot' (two words); 'affects' → 'effects' (noun needed — 'has effects').",
        },
      },
      questions: [
        {
          id: "ela9-u7-homophones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EDIT,
          stem: "Which correction is needed: 'alot of affects'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "alot → a lot; affects stays" },
              { id: "b", text: "alot → allot; affects → effects" },
              { id: "c", text: "No correction needed" },
              { id: "d", text: "alot → a lot; affects → effects" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homophones",
                statement: "Sound-alike words.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Alot' → 'a lot' (two words); 'affects' → 'effects' (noun 'has effects').",
                evidence: "homophones",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. alot → a lot; affects → effects.",
            commonErrors: ["Confusing 'alot' with 'allot' (distribute)."],
          },
        },
        {
          id: "ela9-u7-homophones-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EDIT,
          stem: "Fix all homophone/usage errors in: 'Its a problem that effects mental health. Because their brains are still developing.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Homophone correction",
                statement: "Context determines meaning.",
              },
            ],
            steps: [
              {
                reasoning: "'Its' → 'It's' (contraction of 'it is').",
                evidence: "It's",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'effects' → 'affects' (verb needed — 'problem that affects').",
                evidence: "affects",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "'their' is correct (possessive — 'their brains').",
                evidence: "their",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'It's a problem that affects mental health. Because their brains are still developing.'",
            commonErrors: ["Changing 'their' — it's already correct."],
          },
        },
        {
          id: "ela9-u7-homophones-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EDIT,
          stem: "Edit the entire paragraph for all grammar, usage, and mechanics errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive editing",
                statement: "All error types.",
              },
              {
                kind: "skill",
                name: "Systematic approach",
                statement: "Check each category.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "'alot' → 'a lot'; 'affects' → 'effects' (noun); 'cant' → 'can't' (apostrophe).",
                evidence: "homophones",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Its' → 'It's'; 'effects' → 'affects' (verb); 'them' → 'it' (platforms singular).",
                evidence: "agreement",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fragment: 'Because their brains...' needs main clause — combine with previous sentence.",
                evidence: "fragment",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Edited: 'Social media has a lot of effects on teens. The platforms design them to be addictive, which means users can't stop scrolling. It's a problem that affects mental health because their brains are still developing — teens are more vulnerable to the persuasion architecture that platforms use.'",
            commonErrors: [
              "Fixing only obvious errors — missing fragment and agreement.",
            ],
          },
        },
        {
          id: "ela9-u7-homophones-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EDIT,
          parts: [
            {
              label: "a",
              prompt: "When do you use 'there' vs 'their'?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Fix: 'Their going over there to check their phones.'",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "There vs their",
                statement: "Location vs possessive.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'There' = location/place; 'their' = possessive (belonging to them).",
                evidence: "there vs their",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'They're going over there to check their phones.' They're = they are; there = location; their = phones.",
                evidence: "fix",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'There' = location; 'their' = possessive. (b) 'They're going over there to check their phones.'",
            commonErrors: ["Using 'their' for 'they're' — different meanings."],
          },
        },
      ],
    },
    {
      id: "ela9-u7-agreement",
      title: "Subject-Verb Agreement and Modifiers",
      skill:
        "Ensure subjects and verbs agree; place modifiers correctly to avoid dangling or misplaced modifiers.",
      lesson: {
        sections: [
          {
            heading: "Subject-verb agreement",
            body: "Verb matches subject in number: 'The platforms design' (plural) not 'designs'; 'The algorithm decides' (singular) not 'decide.' Trap cases: **intervening phrases** ('The group of users is...' — 'group' singular, not 'users'), **indefinite pronouns** ('everyone is' not 'everyone are'), **compound subjects** ('platforms and algorithms are' — plural). 'Social media has' (singular mass noun) vs 'social media platforms have' (plural count).",
          },
          {
            heading: "Modifier placement",
            body: "Modifiers must attach to clear words: 'Running down the street, the algorithm decided my feed' — dangling (algorithm isn't running). Fix: 'Running down the street, I noticed the algorithm had changed my feed.' Misplaced: 'The platform showed me ads designed to manipulate me' — 'me' unclear (who's manipulated?). Fix: 'The platform showed me ads designed to manipulate users.' Modifiers near what they describe prevent confusion.",
          },
        ],
        keyFormulas: [
          {
            name: "Verb matches subject",
            statement: "Singular→singular, plural→plural.",
          },
          { name: "Intervening phrases trap", statement: "Find real subject." },
          {
            name: "Modifier = proximity",
            statement: "Place near what it describes.",
          },
        ],
        workedExample: {
          problem:
            "Fix: 'The group of users are complaining about the algorithm'",
          solution:
            "'The group of users is complaining about the algorithm.' Subject is 'group' (singular), not 'users' — intervening phrase doesn't change agreement.",
        },
      },
      questions: [
        {
          id: "ela9-u7-agreement-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ERRORS,
          stem: "Which is correct: 'The group of users ___ complaining' or 'The groups of users ___ complaining'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "are / is" },
              { id: "b", text: "is / are" },
              { id: "c", text: "are / are" },
              { id: "d", text: "is / is" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subject-verb agreement",
                statement: "Verb matches subject.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Group' singular → 'is'; 'groups' plural → 'are.' Intervening 'of users' doesn't change agreement.",
                evidence: "agreement",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. is / are.",
            commonErrors: ["Agreeing with 'users' instead of 'group.'"],
          },
        },
        {
          id: "ela9-u7-agreement-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EDIT,
          stem: "Fix the dangling modifier: 'Running down the street, the algorithm decided my feed.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dangling modifier",
                statement: "Modifier needs clear subject.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problem: 'Running down the street' modifies 'algorithm' — algorithms don't run.",
                evidence: "dangling",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix: 'Running down the street, I noticed the algorithm had changed my feed.' — 'I' is running.",
                evidence: "fix",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Alternative: 'As I ran down the street, I noticed...' — clear subject for modifier.",
                evidence: "alternative",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Fix: 'Running down the street, I noticed the algorithm had changed my feed.' Or 'As I ran down the street, I noticed...'",
            commonErrors: ["Just moving modifier without fixing subject."],
          },
        },
        {
          id: "ela9-u7-agreement-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EDIT,
          stem: "Find and fix all subject-verb agreement and modifier errors in the paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Agreement mastery",
                statement: "All cases.",
              },
              {
                kind: "skill",
                name: "Modifier placement",
                statement: "Clear attachment.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "'platforms design them' — 'them' ambiguous (platforms? phones?) — clarify referent.",
                evidence: "ambiguous",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'which means users cant stop' — 'cant' → 'can't'; 'which' refers to clause not noun — check antecedent.",
                evidence: "which",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Because their brains are still developing, teens are more vulnerable' — modifier placement correct but check logical connection.",
                evidence: "modifier",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Edited: 'Social media has a lot of effects on teens. The platforms design their interfaces to be addictive, which means users can't stop scrolling. It's a problem that affects mental health because adolescents' brains are still developing — making them more vulnerable to persuasion architecture.'",
            commonErrors: [
              "Fixing surface errors without checking referent clarity.",
            ],
          },
        },
        {
          id: "ela9-u7-agreement-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ERRORS,
          parts: [
            { label: "a", prompt: "What's a 'dangling modifier'?", marks: 2 },
            {
              label: "b",
              prompt:
                "Fix: 'Walking to school, the algorithm changed my feed.'",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dangling modifier",
                statement: "Unclear subject.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Modifier without clear subject — describes wrong noun.",
                evidence: "dangling",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Walking to school, I noticed the algorithm had changed my feed.' — 'I' is walking.",
                evidence: "fix",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Modifier without clear subject — describes wrong noun. (b) 'Walking to school, I noticed the algorithm had changed my feed.'",
            commonErrors: [
              "Thinking it's just awkward — it's grammatically wrong.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u7-revision",
      title: "Revision Strategies",
      skill:
        "Revise drafts for argument strength, evidence quality, organization, and style — beyond editing.",
      lesson: {
        sections: [
          {
            heading: "Revision vs editing",
            body: "**Editing** = fixing errors (grammar, spelling, punctuation). **Revision** = improving content (argument strength, evidence, organization, style). 'Social media is bad and should be banned' needs revision: vague claim, unsupported evidence, absolute statement, no counterargument. 'Targeted regulation of engagement-optimizing algorithms' needs only editing — already precise. Know which stage you're in: edit errors first, then revise content.",
          },
          {
            heading: "Systematic revision checklist",
            body: "Check: **thesis** (precise? arguable?), **evidence** (specific? credible?), **counterargument** (acknowledged?), **organization** (logical? transitions?), **style** (varied? precise?), **conclusion** (addresses complexity?). For each weakness, ask: what would strengthen this? 'Studies show' → name study + quantify. 'Some people disagree' → steelman counterargument + rebuttal. Revision is iterative — multiple passes, each focusing on different aspect.",
          },
        ],
        keyFormulas: [
          {
            name: "Edit errors, revise content",
            statement: "Different stages.",
          },
          {
            name: "Checklist approach",
            statement: "Thesis → evidence → counter → org → style.",
          },
          { name: "Iterative process", statement: "Multiple passes." },
        ],
        workedExample: {
          problem:
            "Revise: 'Social media is bad and should be banned. Studies show its harmful.'",
          solution:
            "1. Precise claim: 'engagement-optimizing algorithms' not 'social media.' 2. Specific evidence: name study + quantify. 3. Nuance: 'targeted regulation' not 'banned' — acknowledges benefits. 4. Counterargument: address First Amendment concerns.",
        },
      },
      questions: [
        {
          id: "ela9-u7-revision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REV,
          stem: "What's the main difference between editing and revision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They're the same" },
              { id: "b", text: "Editing = content; revision = errors" },
              {
                id: "c",
                text: "Editing = errors; revision = content improvement",
              },
              { id: "d", text: "Revision is optional" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Editing vs revision",
                statement: "Errors vs content.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Editing fixes grammar/spelling; revision improves argument/evidence/organization.",
                evidence: "edit vs revise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Editing = errors; revision = content improvement.",
            commonErrors: ["Thinking they're interchangeable."],
          },
        },
        {
          id: "ela9-u7-revision-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: REV,
          stem: "Identify three revision needs in the argument draft.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision diagnosis",
                statement: "Identify weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vague claim: 'social media is bad' → specify 'engagement-optimizing algorithms.'",
                evidence: "vague claim",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Unsupported evidence: 'Studies show' → name study + quantify finding.",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Absolute statement: 'should be banned' → 'targeted regulation' acknowledges complexity.",
                evidence: "absolute",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. Vague claim → 'engagement-optimizing algorithms.' 2. Unsupported 'Studies show' → specific evidence. 3. 'Banned' → 'targeted regulation' for nuance.",
            commonErrors: ["Only identifying surface issues."],
          },
        },
        {
          id: "ela9-u7-revision-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: REV,
          stem: "Revise the argument paragraph addressing all weaknesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive revision",
                statement: "All aspects.",
              },
              {
                kind: "skill",
                name: "Argument strengthening",
                statement: "Improve quality.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Precise claim: 'engagement-optimizing algorithms' not 'social media.'",
                evidence: "claim",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Specific evidence: 'Stanford 2021 study found teens spending 3+ hrs showed 2x depression rates.'",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument: 'Critics argue regulation violates First Amendment — however, broadcast precedents show balance possible.'",
                evidence: "counterargument",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Nuanced conclusion: 'targeted regulation' not 'banned' — preserves benefits while addressing harms.",
                evidence: "nuance",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Revised example: 'Targeted regulation of engagement-optimizing algorithms is necessary because they create documented harms. Stanford research (2021) found teens spending 3+ hours daily showed twice the depression rates of lighter users. Critics argue regulation violates First Amendment protections; however, broadcast and campaign finance precedents demonstrate governments can balance expression with public interest. Regulation should target harmful optimization while preserving beneficial connection.'",
            commonErrors: ["Revising only grammar — need content improvement."],
          },
        },
        {
          id: "ela9-u7-revision-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REV,
          parts: [
            {
              label: "a",
              prompt: "What makes 'Studies show its harmful' weak evidence?",
              marks: 2,
            },
            { label: "b", prompt: "Strengthen it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence strengthening",
                statement: "Specific + credible.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "No source named, no specific finding, vague 'harmful' — unverifiable.",
                evidence: "weak",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'Stanford 2021 study found teens spending 3+ hours daily showed 2x depression rates.'",
                evidence: "strong",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) No source, no finding, vague 'harmful.' (b) 'Stanford 2021 study found teens spending 3+ hours daily showed 2x depression rates.'",
            commonErrors: ["Adding 'research shows' — still vague."],
          },
        },
      ],
    },
    {
      id: "ela9-u7-spelling",
      title: "Spelling and Word Formation",
      skill:
        "Apply spelling rules and patterns for complex words, prefixes, suffixes, and commonly misspelled words.",
      lesson: {
        sections: [
          {
            heading: "Spelling patterns",
            body: "Common patterns: **-ible vs -able** ('credible' vs 'reasonable'), **-ance vs -ence** ('importance' vs 'existence'), **doubling consonants** ('beginning' vs 'hoping'), **y → i** ('studies' vs 'study'), **silent letters** ('psychology,' 'receive'). Academic vocabulary often has Greek/Latin roots — 'algorithm' (al-KHWIL-um), 'curation' (kyoo-RAY-shun), 'persuasion' (per-SWAY-zhun).",
          },
          {
            heading: "Commonly misspelled academic words",
            body: "'Definitely' (not 'definately'), 'separate' (not 'seperate'), 'occurrence' (double c, double r), 'argument' (no e after u), 'necessary' (one c, two s), 'receive' (i before e except after c), 'weird' (exception to i-before-e). Memorize high-frequency errors — they appear repeatedly in writing. Use mnemonic devices: 'i before e except after c, or when sounded like A as in neighbor and weigh.'",
          },
        ],
        keyFormulas: [
          {
            name: "Pattern recognition",
            statement: "-ible/-able, -ance/-ence.",
          },
          {
            name: "Common errors list",
            statement: "Definitely, separate, argument.",
          },
          { name: "Mnemonics", statement: "Memory aids for exceptions." },
        ],
        workedExample: {
          problem: "Why is 'definately' wrong?",
          solution:
            "Correct spelling: 'definitely' — from 'finite' + '-ly.' Common error: 'definately' confuses with 'definite' pronunciation. Memorize: 'definitely' has 'ite' not 'ate.'",
        },
      },
      questions: [
        {
          id: "ela9-u7-spelling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EDIT,
          stem: "Which is correctly spelled?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "definitly" },
              { id: "b", text: "definitely" },
              { id: "c", text: "definitly" },
              { id: "d", text: "definately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spelling patterns",
                statement: "Recognize correct forms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Definitely' — from 'finite' + '-ly.' Common error 'definately' adds extra 'a.'",
                evidence: "spelling",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. definitely.",
            commonErrors: ["Confusing pronunciation with spelling."],
          },
        },
        {
          id: "ela9-u7-spelling-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ERRORS,
          stem: "Fix spelling in: 'The algoritm uses persuasion to seperate users.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spelling correction",
                statement: "Apply patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'algoritm' → 'algorithm' — Greek root 'al-KHWIL-um.'",
                evidence: "algorithm",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'persuation' → 'persuasion' — 'sua' not 'sua' wait, correct: 'persuasion' has 'sua.'",
                evidence: "persuasion",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'seperate' → 'separate' — 'a' after 'p' (remember: 'a rat in the house' — 'separate' has 'a' then 'e').",
                evidence: "separate",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "'The algorithm uses persuasion to separate users.'",
            commonErrors: ["Memorizing without understanding patterns."],
          },
        },
        {
          id: "ela9-u7-spelling-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EDIT,
          stem: "Identify spelling patterns in the paragraph and suggest memory aids for commonly misspelled words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spelling pattern analysis",
                statement: "Recognize rules.",
              },
              {
                kind: "skill",
                name: "Mnemonic creation",
                statement: "Memory aids.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Pattern: -tion endings (curation, persuasion) — Greek/Latin roots.",
                evidence: "-tion",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Pattern: double consonants (occurrence, beginning) — stressed syllable doubling.",
                evidence: "double",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mnemonic: 'definitely' = 'definite' + 'ly' — drop 'e' add 'ly.'",
                evidence: "mnemonic",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mnemonic: 'separate' = 'there's a rat in separate' — 'a' before 'e' in middle.",
                evidence: "separate",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Patterns: -tion endings (Greek/Latin), double consonants (stressed syllables). Mnemonics: 'definitely' = 'finite' + 'ly'; 'separate' has 'a rat' (a before e in middle); 'receive' = 'i before e except after c.'",
            commonErrors: ["Rote memorization without patterns."],
          },
        },
        {
          id: "ela9-u7-spelling-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ERRORS,
          parts: [
            { label: "a", prompt: "What's the 'i before e' rule?", marks: 2 },
            {
              label: "b",
              prompt: "Apply it: 'recieve' or 'receive'?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "I before E",
                statement: "Spelling rule.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'I before e except after c, or when sounded like A (neighbor, weigh).'",
                evidence: "rule",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Receive' — 'ei' after 'c' (exception to i-before-e).",
                evidence: "receive",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'I before e except after c, or when sounded like A.' (b) 'Receive' — 'ei' after 'c.'",
            commonErrors: ["Applying rule without exceptions."],
          },
        },
      ],
    },
    {
      id: "ela9-u7-integrated",
      title: "Integrated Editing and Revision",
      skill:
        "Combine editing and revision in systematic multi-pass approach to improve drafts.",
      lesson: {
        sections: [
          {
            heading: "Multi-pass approach",
            body: "Don't try to fix everything at once. **Pass 1**: content revision (thesis, evidence, organization). **Pass 2**: sentence revision (variety, clarity, transitions). **Pass 3**: editing (grammar, usage, mechanics). **Pass 4**: proofreading (typos, formatting). Each pass focuses on different aspect — trying to do all at once misses errors. Read aloud during editing — errors sound wrong. Read backward during proofreading — catches typos.",
          },
          {
            heading: "Checking strategies",
            body: "**Aloud**: errors sound wrong ('alot of affects' → 'a lot of effects'). **Backward**: read last word to first — catches typos spellcheck misses. **Paragraph focus**: check one paragraph at a time — prevents overwhelm. **Fresh eyes**: wait between writing and editing — distance reveals problems. **Checklist**: thesis → evidence → counter → org → style → grammar → spelling — systematic coverage.",
          },
        ],
        keyFormulas: [
          {
            name: "Four passes",
            statement: "Content → sentences → editing → proofreading.",
          },
          {
            name: "Aloud + backward",
            statement: "Different strategies for different errors.",
          },
          { name: "Checklist coverage", statement: "Systematic, not random." },
        ],
        workedExample: {
          problem: "How would you approach editing a full essay?",
          solution:
            "Pass 1: revise content (thesis, evidence). Pass 2: revise sentences (variety). Pass 3: edit grammar/usage. Pass 4: proofread typos. Read aloud during editing; backward during proofreading.",
        },
      },
      questions: [
        {
          id: "ela9-u7-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REV,
          stem: "What's the first pass in systematic revision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grammar editing" },
              { id: "b", text: "Proofreading" },
              {
                id: "c",
                text: "Content revision — thesis, evidence, organization",
              },
              { id: "d", text: "Spelling check" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revision passes",
                statement: "Content first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Content revision (thesis, evidence) comes before sentence/grammar/proofreading passes.",
                evidence: "content first",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Content revision — thesis, evidence, organization.",
            commonErrors: ["Starting with grammar — fix content first."],
          },
        },
        {
          id: "ela9-u7-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EDIT,
          stem: "Explain why reading aloud helps catch errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading strategy",
                statement: "Why it works.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Errors sound wrong when spoken — 'alot of affects' sounds awkward vs 'a lot of effects.'",
                evidence: "sounds wrong",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Forces slower reading — catches errors eyes skip over.",
                evidence: "slower",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reveals awkward phrasing — sentences that look fine but sound bad.",
                evidence: "awkward",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Reading aloud: errors sound wrong ('alot of affects' → 'a lot of effects'), forces slower reading catching skipped errors, reveals awkward phrasing invisible to eyes.",
            commonErrors: ["Thinking spellcheck is enough."],
          },
        },
        {
          id: "ela9-u7-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EDIT,
          stem: "Apply multi-pass approach to edit and revise the paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-pass editing",
                statement: "Systematic approach.",
              },
              {
                kind: "skill",
                name: "Content + mechanics",
                statement: "Both levels.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Pass 1 content: 'has a lot of effects' vague — specify which effects (mental health, attention).",
                evidence: "content",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Pass 2 sentences: vary structure — 'The platforms design them to be addictive' repetitive 'design/they.'",
                evidence: "sentences",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Pass 3 editing: 'alot'→'a lot,' 'affects'→'effects,' 'cant'→'can't,' 'Its'→'It's,' fragment fix.",
                evidence: "editing",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Pass 4 proofreading: final check for typos, formatting.",
                evidence: "proofreading",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Multi-pass result: Pass 1 — 'has a lot of effects on teens' → 'creates documented harms including anxiety and attention difficulties.' Pass 2 — vary sentences. Pass 3 — 'a lot,' 'effects,' 'can't,' 'It's,' combine fragment. Pass 4 — final check.",
            commonErrors: ["Trying to fix everything in one pass."],
          },
        },
        {
          id: "ela9-u7-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REV,
          parts: [
            {
              label: "a",
              prompt: "Why read backward during proofreading?",
              marks: 2,
            },
            { label: "b", prompt: "What does it catch?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proofreading strategy",
                statement: "Why backward works.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Backward reading prevents brain from auto-correcting — sees words individually.",
                evidence: "backward",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Catches typos spellcheck misses — 'teh,' 'recieve,' transposed letters.",
                evidence: "typos",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Prevents brain auto-correcting — sees words individually. (b) Catches typos spellcheck misses — transposed letters, unusual errors.",
            commonErrors: ["Thinking forward reading is enough."],
          },
        },
      ],
    },
  ],
};
