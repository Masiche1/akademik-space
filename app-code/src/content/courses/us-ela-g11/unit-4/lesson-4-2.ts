import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const DIGITAL: TextExtract = {
  title: "Discussion Transcript: Evaluating Viral Content",
  author: "Written for Akademik Space",
  text: "Aisha: Have you seen this post? 'BREAKING: Study shows screen time causes permanent brain damage in teens.' It has 50,000 shares.\n\nMarcus: I saw it. But there's no source, no link, no author. Just a claim.\n\nAisha: But it's everywhere — everyone is sharing it. Doesn't that mean it's true?\n\nJordan: Popularity isn't evidence. I've seen fact-checks debunk similar claims. The 'study' doesn't exist — it was fabricated for engagement.\n\nAisha: How do you know?\n\nJordan: I checked Snopes and the original claim traces back to a satirical site. Also, 'permanent brain damage' is extreme — real research shows correlation, not causation, and effects are typically reversible.\n\nMarcus: So the post is misinformation?\n\nJordan: Yes — designed to go viral through outrage. Sharing it amplifies the false claim. We should verify before amplifying.",
};

const MEDIA: TextExtract = {
  title: "Media Literacy: Evaluating Sources for Discussion",
  author: "Written for Akademik Space",
  text: "When discussing issues, we encounter information from many sources: social media posts, news articles, academic papers, personal anecdotes. Each has different credibility and purpose.\n\nA viral social media post might have millions of shares but no sourcing — popularity ≠ accuracy. A peer-reviewed study has expert review but might be paywalled or use technical language. A news article might be accurate but framed for engagement. A personal anecdote is authentic but not generalizable.\n\nEffective discussion requires source evaluation: Who created this? What's their expertise? What's their motivation? Is there evidence? Does it match other sources? The best discussions integrate multiple source types while acknowledging their limitations.",
};

export const lesson42: Lesson = {
  id: "ela11-u4-lesson-4-2",
  code: "4-2",
  title: "Digital Media, Source Evaluation, and Discussion Ethics",
  goal: "I CAN evaluate digital media critically, verify claims before sharing, and engage in discussions with media literacy awareness.",
  standards: [
    "SL.11-12.3",
    "SL.11-12.4",
    "SL.11-12.5",
    "RI.11-12.7",
    "RI.11-12.9",
  ],
  vocabulary: [
    {
      term: "Viral content",
      definition: "Information spreading rapidly online.",
    },
    {
      term: "Source evaluation",
      definition: "Assessing credibility of information.",
    },
    {
      term: "Fact-checking",
      definition: "Verifying claims against reliable sources.",
    },
    {
      term: "Amplification",
      definition: "Sharing content that increases reach.",
    },
    {
      term: "Misinformation",
      definition: "False information spread unintentionally.",
    },
    { term: "Disinformation", definition: "Deliberately false information." },
  ],
  concepts: [
    {
      id: "ela11-u4-viral",
      title: "Evaluating viral content",
      skill:
        "Apply verification skills to assess viral claims before engaging or sharing.",
      lesson: {
        sections: [
          {
            heading: "Viral content red flags",
            body: "Viral posts often have: **no source** (anonymous, no link), **extreme claims** ('permanent brain damage'), **emotional manipulation** (outrage, fear), **engagement bait** (designed to be shared). The 'study shows screen time causes permanent brain damage' post fails all checks: no source, extreme claim, likely fabricated. Popularity ≠ accuracy — 50,000 shares doesn't make it true.",
          },
          {
            heading: "Verification process",
            body: "Before sharing: **check source** (who posted? credentials?), **check evidence** (link to study? original source?), **check consistency** (does it match credible reporting?), **check motivation** (why created? outrage? profit?). Jordan's verification: checked Snopes, traced to satirical site, noted 'correlation not causation' — thorough fact-checking.",
          },
        ],
        keyFormulas: [
          {
            name: "Red flags",
            statement: "No source, extreme claims, emotional manipulation.",
          },
          {
            name: "Verification",
            statement: "Source → evidence → consistency → motivation.",
          },
          {
            name: "Popularity ≠ accuracy",
            statement: "Shares don't verify truth.",
          },
        ],
        workedExample: {
          problem: "How would you verify the viral post about screen time?",
          solution:
            "Check source (none), evidence (no link/study), consistency (fact-checks debunk), motivation (outrage/engagement). Conclusion: misinformation.",
        },
      },
      questions: [
        {
          id: "ela11-u4-viral-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DIGITAL,
          stem: "What makes viral content suspicious?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's about technology" },
              {
                id: "b",
                text: "No source, extreme claims, emotional manipulation",
              },
              { id: "c", text: "It's recent" },
              { id: "d", text: "It's popular" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Viral red flags",
                statement: "Suspicious indicators.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No source + extreme claims + emotional manipulation = suspicious.",
                evidence: "red flags",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. No source, extreme claims, emotional manipulation.",
            commonErrors: ["Thinking popularity = credibility."],
          },
        },
        {
          id: "ela11-u4-viral-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DIGITAL,
          stem: "Apply verification steps to the viral post.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Verification process",
                statement: "Four checks.",
              },
            ],
            steps: [
              {
                reasoning: "Source: no author, no link — anonymous.",
                evidence: "source",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evidence: no study link — 'study' doesn't exist.",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Consistency: fact-checks debunk — traced to satirical site.",
                evidence: "consistency",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Source (anonymous), evidence (no study), consistency (debunked, satirical origin) — misinformation.",
            commonErrors: ["Only checking one criterion."],
          },
        },
        {
          id: "ela11-u4-viral-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DIGITAL,
          stem: "Analyze why viral misinformation spreads faster than corrections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Misinformation mechanics",
                statement: "Why it spreads.",
              },
              {
                kind: "skill",
                name: "Algorithm analysis",
                statement: "How platforms amplify.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Emotional hook: 'permanent brain damage' triggers fear/outrage — high engagement.",
                evidence: "emotion",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Algorithm amplification: engagement rewarded — misinformation spreads before corrections.",
                evidence: "algorithm",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Correction asymmetry: corrections are boring, don't go viral — false claims outpace truth.",
                evidence: "asymmetry",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Viral misinformation spreads faster: emotional hooks (fear/outrage) drive engagement, algorithms reward engagement over accuracy, corrections are less engaging and don't go viral. False claims outpace truth.",
            commonErrors: ["Thinking corrections are equally viral."],
          },
        },
        {
          id: "ela11-u4-viral-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DIGITAL,
          parts: [
            {
              label: "a",
              prompt:
                "What's the difference between misinformation and disinformation?",
              marks: 2,
            },
            { label: "b", prompt: "Which is the viral post?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Misinformation vs disinformation",
                statement: "Accidental vs deliberate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Misinformation = false info spread unintentionally; disinformation = deliberate.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Viral post likely disinformation — designed for engagement/outrage.",
                evidence: "which",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Misinformation = accidental; disinformation = deliberate. (b) Viral post = disinformation (designed for outrage).",
            commonErrors: ["Confusing the two terms."],
          },
        },
      ],
    },
    {
      id: "ela11-u4-sources",
      title: "Source Types and Credibility",
      skill:
        "Distinguish source types and evaluate credibility for discussion and research.",
      lesson: {
        sections: [
          {
            heading: "Source hierarchy",
            body: "Primary sources = original research, raw data, first-hand accounts. Secondary = interpretations of primary (news articles, textbooks). Tertiary = summaries of secondary (Wikipedia, encyclopedias). For screen time research: original study (primary) → journal article (secondary) → news report (tertiary). Each has different credibility — primary most authoritative, tertiary least but most accessible.",
          },
          {
            heading: "Credibility evaluation",
            body: "Ask: **Who?** Author credentials/expertise. **Where?** Publication venue/standards. **When?** Currency. **Why?** Purpose/motivation. **How?** Methodology/evidence quality. Peer-reviewed study outranks blog post; recent research outranks outdated; impartial reporting outranks advocacy. But all sources have limitations — acknowledge them.",
          },
        ],
        keyFormulas: [
          {
            name: "Source types",
            statement: "Primary → secondary → tertiary.",
          },
          { name: "Five questions", statement: "Who, where, when, why, how." },
          {
            name: "Hierarchy",
            statement: "Peer-reviewed > journalism > blogs.",
          },
        ],
        workedExample: {
          problem:
            "How would you evaluate a source for a research paper on screen time?",
          solution:
            "Check: Who (scientist?), Where (peer-reviewed?), When (recent?), Why (informing?), How (methodology sound?). Prefer primary/secondary.",
        },
      },
      questions: [
        {
          id: "ela11-u4-sources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIA,
          stem: "What's the difference between primary and secondary sources?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary is always better" },
              { id: "b", text: "Secondary is more credible" },
              { id: "c", text: "No difference" },
              {
                id: "d",
                text: "Primary = original; secondary = interpretation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary vs secondary",
                statement: "Original vs interpretation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary = original research; secondary = interpretation of primary.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Primary = original; secondary = interpretation.",
            commonErrors: ["Confusing source types."],
          },
        },
        {
          id: "ela11-u4-sources-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIA,
          stem: "Apply the five credibility questions to a social media post about screen time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement: "Five questions.",
              },
            ],
            steps: [
              {
                reasoning: "Who: anonymous — no credentials.",
                evidence: "who",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Where: social media — no editorial standards.",
                evidence: "where",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "When/Why/How: recent but no methodology, motivation = engagement.",
                evidence: "when/why/how",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Who (anonymous), Where (social media), When/Why/How (no methodology, engagement motivation) — low credibility.",
            commonErrors: ["Accepting without evaluation."],
          },
        },
        {
          id: "ela11-u4-sources-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEDIA,
          stem: "Analyze why effective discussion requires multiple source types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-source analysis",
                statement: "Why needed.",
              },
              {
                kind: "skill",
                name: "Triangulation",
                statement: "Cross-verification.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Primary sources provide original data — foundation for claims.",
                evidence: "primary",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Secondary sources provide context — help understand primary findings.",
                evidence: "secondary",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Multiple sources enable triangulation — cross-verify, identify consensus/contestation.",
                evidence: "triangulation",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Effective discussion requires multiple source types: primary for original data, secondary for context, tertiary for accessibility. Enables triangulation — cross-verifying claims, identifying consensus vs contested areas.",
            commonErrors: ["Relying on single source type."],
          },
        },
        {
          id: "ela11-u4-sources-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            { label: "a", prompt: "What's a 'tertiary source'?", marks: 2 },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tertiary source",
                statement: "Summary of summaries.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Source summarizing secondary sources — encyclopedia, textbook.",
                evidence: "tertiary",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: Wikipedia article on screen time research.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) Summarizes secondary sources. (b) Wikipedia.",
            commonErrors: ["Confusing with primary/secondary."],
          },
        },
      ],
    },
    {
      id: "ela11-u4-ethics",
      title: "Digital Ethics and Responsible Sharing",
      skill:
        "Practice responsible digital citizenship — verify before sharing, respect privacy, consider impact.",
      lesson: {
        sections: [
          {
            heading: "Responsible sharing",
            body: "Before sharing: **verify** (check source, evidence, consistency), **consider impact** (will this harm?), **add context** (share with 'I verified this via...'), **correct errors** (if you shared misinformation, correct it). Sharing isn't neutral — amplifies reach. 'Just sharing' makes you complicit in spreading false claims.",
          },
          {
            heading: "Digital footprint and privacy",
            body: "Everything posted creates permanent record: posts, comments, likes, shares. Colleges/employers search social media — 'digital footprint' follows you. Respect others' privacy: ask before posting photos, don't share private messages, don't tag in compromising situations. Privacy settings help but aren't foolproof — screenshots spread. Assume anything posted is public.",
          },
        ],
        keyFormulas: [
          {
            name: "Verify before sharing",
            statement: "Check source/evidence/consistency.",
          },
          {
            name: "Sharing = responsibility",
            statement: "Amplification has consequences.",
          },
          {
            name: "Digital footprint = permanent",
            statement: "Everything posted persists.",
          },
        ],
        workedExample: {
          problem: "What should you do before sharing viral content?",
          solution:
            "Verify (source/evidence/consistency) → consider impact → share with context → correct if wrong.",
        },
      },
      questions: [
        {
          id: "ela11-u4-ethics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DIGITAL,
          stem: "What's 'digital footprint'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Browser history only" },
              { id: "b", text: "Temporary data" },
              { id: "c", text: "Permanent record of online activity" },
              { id: "d", text: "Physical footprint" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital footprint",
                statement: "Permanent record.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Digital footprint = permanent record of online activity.",
                evidence: "footprint",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Permanent record of online activity.",
            commonErrors: ["Thinking it's temporary."],
          },
        },
        {
          id: "ela11-u4-ethics-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DIGITAL,
          stem: "What should you do before sharing viral content?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Responsible sharing",
                statement: "Verification + context.",
              },
            ],
            steps: [
              {
                reasoning: "Verify: check source, evidence, consistency.",
                evidence: "verify",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Consider impact: will this harm? Is it accurate?",
                evidence: "impact",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Share with context: 'I verified this via...' or correct if wrong.",
                evidence: "context",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Verify → consider impact → share with context → correct if wrong.",
            commonErrors: ["Sharing without verification."],
          },
        },
        {
          id: "ela11-u4-ethics-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DIGITAL,
          stem: "Analyze the tension between free expression and responsible sharing online.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Digital ethics analysis",
                statement: "Free speech vs responsibility.",
              },
              {
                kind: "skill",
                name: "Platform dynamics",
                statement: "How sharing works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Free expression: anyone can share — democratic ideal.",
                evidence: "free",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Responsibility: sharing amplifies — misinformation harms public discourse.",
                evidence: "responsibility",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tension: individual freedom vs collective harm — verification is civic duty.",
                evidence: "tension",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Tension: free expression (anyone can share) vs responsibility (sharing amplifies misinformation). Resolution: verification is civic duty — freedom includes responsibility to not spread harm.",
            commonErrors: ["Thinking free speech = no responsibility."],
          },
        },
        {
          id: "ela11-u4-ethics-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DIGITAL,
          parts: [
            {
              label: "a",
              prompt: "Why does 'just sharing' count as responsibility?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What should you do if you shared misinformation?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sharing responsibility",
                statement: "Amplification consequences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sharing amplifies reach — complicit in spreading false claims.",
                evidence: "responsibility",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Correct it publicly — post correction, don't delete silently.",
                evidence: "correct",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Sharing amplifies reach — complicit. (b) Correct publicly — post correction.",
            commonErrors: ["Thinking deletion fixes it."],
          },
        },
      ],
    },
    {
      id: "ela11-u4-integrated-r2",
      title: "Integrated Media Literacy Practice",
      skill:
        "Integrate viral content evaluation, source credibility, and digital ethics in comprehensive practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Media literacy requires: **evaluation** (verify viral content), **source assessment** (credibility hierarchy), **ethics** (responsible sharing, privacy). The discussion transcript demonstrates all: Aisha encounters viral post → Jordan verifies → group discusses source credibility → Jordan explains why not to share. Integrated approach prevents misinformation spread.",
          },
          {
            heading: "Exam application",
            body: "Exam questions often require: 'Evaluate the credibility of sources' or 'Analyze how the group handles viral content.' Requires applying multiple skills: verify, assess, decide, explain.",
          },
        ],
        keyFormulas: [
          { name: "Three skills", statement: "Evaluation + source + ethics." },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          {
            name: "Exam synthesis",
            statement: "Combine media literacy skills.",
          },
        ],
        workedExample: {
          problem:
            "How would you comprehensively evaluate the viral post discussion?",
          solution:
            "Verify (source/evidence/consistency) → assess credibility (hierarchy) → decide (share or not) → explain reasoning.",
        },
      },
      questions: [
        {
          id: "ela11-u4-integrated-q1-r2",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DIGITAL,
          stem: "What three skills are needed for media literacy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only privacy" },
              { id: "b", text: "Evaluation + source assessment + ethics" },
              { id: "c", text: "Only verification" },
              { id: "d", text: "Only sharing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Media literacy",
                statement: "Three skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation + source assessment + ethics = comprehensive media literacy.",
                evidence: "three skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Evaluation + source assessment + ethics.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
        {
          id: "ela11-u4-integrated-q2-r2",
          difficulty: "core",
          totalMarks: 3,
          extract: DIGITAL,
          stem: "Apply media literacy skills to the viral post discussion.",
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
                  "Evaluation: Jordan verifies — checks Snopes, traces to satirical site.",
                evidence: "evaluation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Source: identifies misinformation vs credible research.",
                evidence: "source",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ethics: 'verify before amplifying' — responsible sharing principle.",
                evidence: "ethics",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Evaluation (Jordan verifies), source (identifies misinformation), ethics ('verify before amplifying').",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u4-integrated-q3-r2",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DIGITAL,
          stem: "Write an analysis paragraph on how the group demonstrates media literacy in handling viral content.",
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
                  "Aisha encounters viral post — represents common experience.",
                evidence: "encounter",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Jordan verifies — checks Snopes, traces origin, notes 'correlation not causation.'",
                evidence: "verify",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Group discusses — evaluates credibility, decides not to share, explains reasoning.",
                evidence: "discuss",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The group demonstrates media literacy through verification (Jordan checks Snopes, traces to satirical site), source evaluation (identifies misinformation vs research), and ethical decision-making (chooses not to amplify). This prevents misinformation spread.'",
            commonErrors: ["Analyzing skills separately."],
          },
        },
        {
          id: "ela11-u4-integrated-q4-r2",
          difficulty: "core",
          totalMarks: 4,
          extract: DIGITAL,
          parts: [
            {
              label: "a",
              prompt: "Why is media literacy 'civic responsibility'?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does it strengthen democracy?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Civic responsibility",
                statement: "Democratic duty.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Online choices affect public discourse — misinformation or informed engagement.",
                evidence: "responsibility",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Responsible citizens verify/share accurately — strengthens democratic deliberation.",
                evidence: "strengthens",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Online choices affect public discourse. (b) Responsible citizens verify/share accurately — strengthens democracy.",
            commonErrors: ["Thinking media literacy is optional."],
          },
        },
      ],
    },
  ],
};
