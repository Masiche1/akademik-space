import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const DIGITAL: TextExtract = {
  title: "Digital Citizenship: Social Media and Civic Engagement",
  author: "Written for Akademik Space",
  text: "A student shares a post: 'BREAKING: Study shows 90% of teens are addicted to social media.' The post has no source, no link, no author credentials. It's designed to provoke outrage and shares.\n\nDigital citizenship means verifying before amplifying. Check: Who posted this? What's their expertise? Is there a source? Does the claim match what credible research says? A quick search reveals the 'study' doesn't exist — it was fabricated to go viral.\n\nThe same skills apply to civic engagement: evaluating political claims, fact-checking viral content, distinguishing news from opinion. Digital literacy isn't just technical — it's civic responsibility.",
};

export const lesson43: Lesson = {
  id: "ela10-u4-lesson-4-3",
  code: "4-3",
  title: "Digital Citizenship and Media Evaluation",
  goal: "I CAN evaluate digital media critically and practice responsible digital citizenship.",
  standards: ["SL.9-10.3", "SL.9-10.5", "SL.9-10.6", "RI.9-10.7"],
  vocabulary: [
    {
      term: "Digital citizenship",
      definition: "Responsible, ethical use of digital technology.",
    },
    { term: "Verification", definition: "Checking accuracy before sharing." },
    {
      term: "Source credibility",
      definition: "Trustworthiness of information source.",
    },
    {
      term: "Amplification",
      definition: "Sharing content that increases its reach.",
    },
    {
      term: "Civic responsibility",
      definition: "Duty to contribute to democratic society.",
    },
    {
      term: "Fact-checking",
      definition: "Verifying claims against reliable sources.",
    },
  ],
  concepts: [
    {
      id: "ela10-u4-verify",
      title: "Verification before amplification",
      skill:
        "Evaluate digital content for accuracy before sharing or acting on it.",
      lesson: {
        sections: [
          {
            heading: "Verification checklist",
            body: "Before sharing: **source** (who posted? credentials?), **evidence** (is there a link/study?), **consistency** (does it match credible reporting?), **motivation** (why was this created? outrage? profit?). The viral post fails all checks: no source, no link, no author, fabricated 'study.' Verification takes 30 seconds — search the claim, check Snopes/FactCheck.org, look for original source.",
          },
          {
            heading: "Why it matters",
            body: "Amplifying misinformation harms: spreads false claims, erodes trust, fuels division. Even 'just sharing' makes you complicit — the algorithm rewards engagement regardless of accuracy. Digital citizenship = pause before share. If you wouldn't say it to someone's face with evidence, don't post it.",
          },
        ],
        keyFormulas: [
          {
            name: "Four checks",
            statement: "Source, evidence, consistency, motivation.",
          },
          { name: "30-second rule", statement: "Verify before amplifying." },
          {
            name: "Sharing = responsibility",
            statement: "Amplification has consequences.",
          },
        ],
        workedExample: {
          problem: "How would you evaluate the viral post?",
          solution:
            "Check: source (none), evidence (no link), consistency (no credible reporting matches), motivation (outrage/profit). Conclusion: fabricated misinformation — don't share.",
        },
      },
      questions: [
        {
          id: "ela10-u4-verify-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DIGITAL,
          stem: "What's the first step in verifying digital content?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Check the source" },
              { id: "b", text: "Share it" },
              { id: "c", text: "Ignore it" },
              { id: "d", text: "Comment on it" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Verification",
                statement: "Check accuracy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First step: check source — who posted, credentials, expertise.",
                evidence: "source",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Check the source.",
            commonErrors: ["Sharing before verifying."],
          },
        },
        {
          id: "ela10-u4-verify-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DIGITAL,
          stem: "Apply the verification checklist to the viral post.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Verification application",
                statement: "Checklist in action.",
              },
            ],
            steps: [
              {
                reasoning: "Source: no author, no credentials — fails.",
                evidence: "source",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evidence: no link, no study — fails.",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Consistency: 'study' doesn't exist — fabricated.",
                evidence: "consistency",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Fails all checks: no source (anonymous), no evidence (no link/study), fabricated claim ('study' doesn't exist). Conclusion: misinformation — don't share.",
            commonErrors: ["Only checking one criterion."],
          },
        },
        {
          id: "ela10-u4-verify-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DIGITAL,
          stem: "Analyze why the viral post was designed to spread — what makes misinformation effective?",
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
                name: "Design analysis",
                statement: "Intentional manipulation.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Emotional hook: '90% addicted' — shocking statistic triggers outrage/fear.",
                evidence: "emotion",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "No verification friction: no source/link — can't easily check, encourages sharing.",
                evidence: "friction",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Algorithm amplification: engagement (outrage) rewarded over accuracy — spreads faster than corrections.",
                evidence: "algorithm",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Post designed for spread: emotional hook (shocking '90%' statistic), no verification friction (no source to check), algorithm rewards outrage over accuracy. Misinformation exploits attention economy — engagement > truth.",
            commonErrors: ["Thinking misinformation spreads accidentally."],
          },
        },
        {
          id: "ela10-u4-verify-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DIGITAL,
          parts: [
            {
              label: "a",
              prompt: "Why does sharing count as responsibility?",
              marks: 2,
            },
            { label: "b", prompt: "What should you do instead?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Digital responsibility",
                statement: "Amplification consequences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sharing amplifies reach — you're complicit in spreading false claims.",
                evidence: "responsibility",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Verify first, share corrections, report misinformation, don't amplify unverified claims.",
                evidence: "instead",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Sharing amplifies reach — complicit in spreading false claims. (b) Verify first, share corrections, report misinformation.",
            commonErrors: ["Thinking 'just sharing' isn't responsibility."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-civic",
      title: "Civic Engagement and Media Literacy",
      skill:
        "Apply media literacy skills to civic issues — evaluating political claims, distinguishing news from opinion.",
      lesson: {
        sections: [
          {
            heading: "Civic media literacy",
            body: "Same skills apply to politics: evaluate claims about policy, candidates, events. 'Politician X said Y' — verify quote, check context, look for original source. Distinguish **news** (factual reporting) from **opinion** (analysis/commentary) from **propaganda** (deliberate manipulation). A headline might be technically true but misleading — read full article, check multiple sources.",
          },
          {
            heading: "Responsible civic participation",
            body: "Digital citizenship includes: **informed voting** (research candidates, verify claims), **constructive engagement** (comment with evidence, not just emotion), **fact-checking** (verify before sharing political content), **respectful discourse** (disagree without attacking). Social media can amplify civic participation or undermine it — your choices matter.",
          },
        ],
        keyFormulas: [
          {
            name: "News vs opinion vs propaganda",
            statement: "Distinguish types.",
          },
          {
            name: "Verify political claims",
            statement: "Same checklist applies.",
          },
          {
            name: "Civic responsibility",
            statement: "Your engagement shapes democracy.",
          },
        ],
        workedExample: {
          problem: "How would you evaluate a viral political claim?",
          solution:
            "Check source (who posted? credentials?), evidence (link to original?), consistency (multiple sources agree?), motivation (why shared? outrage?). Verify before amplifying.",
        },
      },
      questions: [
        {
          id: "ela10-u4-civic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DIGITAL,
          stem: "What's the difference between news and opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opinion is more reliable" },
              {
                id: "b",
                text: "News reports facts; opinion analyzes/interprets",
              },
              { id: "c", text: "They're the same" },
              { id: "d", text: "News is always biased" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "News vs opinion",
                statement: "Facts vs analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "News = factual reporting; opinion = analysis/interpretation/commentary.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. News reports facts; opinion analyzes/interprets.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "ela10-u4-civic-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DIGITAL,
          stem: "How would you verify a viral political claim before sharing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Political verification",
                statement: "Same checklist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check source: who posted? political affiliation? credentials?",
                evidence: "source",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Check evidence: link to original statement/study? context?",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Check consistency: do multiple credible sources report same?",
                evidence: "consistency",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Check source (who posted, credentials), evidence (link to original, context), consistency (multiple sources agree). Verify before amplifying.'",
            commonErrors: ["Sharing political content without verification."],
          },
        },
        {
          id: "ela10-u4-civic-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DIGITAL,
          stem: "Analyze how social media can both amplify and undermine civic engagement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Civic media analysis",
                statement: "Dual effects.",
              },
              {
                kind: "skill",
                name: "Democratic impact",
                statement: "How it shapes participation.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Amplifies: connects activists, spreads awareness, enables grassroots organizing.",
                evidence: "amplifies",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Undermines: misinformation spreads, echo chambers reinforce beliefs, outrage replaces deliberation.",
                evidence: "undermines",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Net effect depends on users — digital literacy determines whether platform helps or harms democracy.",
                evidence: "net",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Social media amplifies civic engagement (connects activists, spreads awareness, enables organizing) but can undermine it (misinformation, echo chambers, outrage over deliberation). Net effect depends on users — digital literacy determines whether platform strengthens or weakens democracy.",
            commonErrors: ["One-sided analysis — only benefits or only harms."],
          },
        },
        {
          id: "ela10-u4-civic-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DIGITAL,
          parts: [
            { label: "a", prompt: "What is 'propaganda'?", marks: 2 },
            {
              label: "b",
              prompt: "How does it differ from news/opinion?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Propaganda",
                statement: "Deliberate manipulation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Deliberately misleading information designed to manipulate opinion/behavior.",
                evidence: "propaganda",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "News = facts, opinion = analysis, propaganda = intentional manipulation — differs in intent and accuracy.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Deliberately misleading info designed to manipulate. (b) News=facts, opinion=analysis, propaganda=intentional manipulation.",
            commonErrors: ["Confusing propaganda with opinion."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-ethics",
      title: "Digital Ethics and Privacy",
      skill:
        "Understand digital ethics — privacy, consent, digital footprint — and make responsible choices.",
      lesson: {
        sections: [
          {
            heading: "Digital footprint",
            body: "Everything you post creates permanent record: photos, comments, likes, shares. Colleges and employers search social media — 'digital footprint' follows you. Think before posting: would you want this associated with you in 10 years? Privacy settings help but aren't foolproof — screenshots spread. Assume anything posted is public.",
          },
          {
            heading: "Privacy and consent",
            body: "Respect others' privacy: ask before posting photos of friends, don't share private messages, don't tag people in compromising situations. Understand data collection: apps track location, behavior, contacts — 'free' services often mean 'you are the product.' Read privacy policies (skim key points), limit permissions, use strong passwords.",
          },
        ],
        keyFormulas: [
          {
            name: "Digital footprint = permanent",
            statement: "Everything posted persists.",
          },
          { name: "Think before posting", statement: "10-year test." },
          { name: "Privacy = consent", statement: "Respect others' data." },
        ],
        workedExample: {
          problem: "How would you advise a student about digital footprint?",
          solution:
            "'Everything you post is permanent — colleges/employers search social media. Think: would you want this in 10 years? Ask before posting photos of friends. Assume anything posted is public.'",
        },
      },
      questions: [
        {
          id: "ela10-u4-ethics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DIGITAL,
          stem: "What is a 'digital footprint'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Permanent record of online activity" },
              { id: "b", text: "Physical footprint" },
              { id: "c", text: "Browser history only" },
              { id: "d", text: "Temporary data" },
            ],
            correctChoiceId: "a",
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
                  "Digital footprint = permanent record of all online activity — posts, likes, shares, comments.",
                evidence: "footprint",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Permanent record of online activity.",
            commonErrors: ["Thinking it's temporary."],
          },
        },
        {
          id: "ela10-u4-ethics-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DIGITAL,
          stem: "Apply the '10-year test' to posting decisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Digital ethics",
                statement: "Long-term thinking.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ask: 'Would I want this associated with me in 10 years?'",
                evidence: "10-year",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Apply: party photos, controversial opinions, compromising content — think twice.",
                evidence: "apply",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Remember: screenshots spread, privacy settings aren't foolproof, assume public.",
                evidence: "public",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Would I want this post associated with me in 10 years? Party photos, controversial opinions, anything compromising — think twice. Screenshots spread; assume anything posted is public.'",
            commonErrors: ["Posting without thinking long-term."],
          },
        },
        {
          id: "ela10-u4-ethics-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DIGITAL,
          stem: "Analyze the tension between 'free' services and privacy — who's the real product?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Privacy analysis",
                statement: "Data economy.",
              },
              {
                kind: "skill",
                name: "Ethical implications",
                statement: "Who pays for 'free'?",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "'Free' services monetize user data — attention, behavior, location sold to advertisers.",
                evidence: "monetize",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "You are the product — your data is the commodity being sold.",
                evidence: "product",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tension: convenience vs privacy — most users trade privacy for free access without realizing.",
                evidence: "tension",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Free' services monetize user data — attention, behavior, location sold to advertisers. You are the product: your data is the commodity. Tension: convenience vs privacy — most users trade privacy for free access without realizing the exchange.",
            commonErrors: ["Thinking 'free' means no cost."],
          },
        },
        {
          id: "ela10-u4-ethics-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DIGITAL,
          parts: [
            {
              label: "a",
              prompt: "Why ask before posting photos of friends?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What privacy settings don't protect against?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Privacy ethics",
                statement: "Consent + limitations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Posting photos affects others' digital footprint — they should consent.",
                evidence: "consent",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Screenshots, shares, data breaches — privacy settings aren't foolproof.",
                evidence: "limits",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Posting affects others' footprint — they should consent. (b) Screenshots, shares, breaches — settings aren't foolproof.",
            commonErrors: ["Thinking privacy settings = complete protection."],
          },
        },
      ],
    },
    {
      id: "ela10-u4-integrated3",
      title: "Integrated Digital Citizenship Practice",
      skill:
        "Combine media evaluation, civic engagement, and digital ethics in comprehensive practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Digital citizenship combines: **evaluation** (verify before share), **civic engagement** (informed participation), **ethics** (privacy, consent, footprint). Scenario: viral political post → evaluate source → check evidence → consider sharing → think about your footprint. Each decision has civic and ethical dimensions.",
          },
          {
            heading: "Real-world application",
            body: "Practice: see viral post → run verification checklist → decide whether to share → if sharing, add context ('I verified this via...') → reflect on your digital footprint. This isn't just about avoiding mistakes — it's about being a responsible digital citizen who strengthens rather than undermines democracy.",
          },
        ],
        keyFormulas: [
          { name: "Three pillars", statement: "Evaluation + civic + ethics." },
          {
            name: "Decision framework",
            statement: "Verify → consider → share responsibly.",
          },
          {
            name: "Citizen responsibility",
            statement: "Strengthen democracy.",
          },
        ],
        workedExample: {
          problem: "How would you handle a viral political post?",
          solution:
            "Verify (source, evidence, consistency) → evaluate credibility → decide whether to share → if sharing, add context → reflect on footprint impact.",
        },
      },
      questions: [
        {
          id: "ela10-u4-integrated3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DIGITAL,
          stem: "What are the three pillars of digital citizenship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only sharing" },
              { id: "b", text: "Evaluation + civic engagement + ethics" },
              { id: "c", text: "Only verification" },
              { id: "d", text: "Only privacy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital citizenship",
                statement: "Three pillars.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation (verify), civic engagement (participate), ethics (privacy/consent).",
                evidence: "pillars",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Evaluation + civic engagement + ethics.",
            commonErrors: ["Thinking it's just about privacy."],
          },
        },
        {
          id: "ela10-u4-integrated3-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DIGITAL,
          stem: "Walk through your decision process for a viral post.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decision framework",
                statement: "Complete process.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Verify: check source, evidence, consistency, motivation.",
                evidence: "verify",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evaluate: is it credible? news/opinion/propaganda?",
                evidence: "evaluate",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Decide: share with context? don't share? correct misinformation?",
                evidence: "decide",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Verify (source/evidence/consistency) → evaluate (credible? type?) → decide (share with context/don't share/correct) → reflect on footprint.'",
            commonErrors: ["Skipping verification step."],
          },
        },
        {
          id: "ela10-u4-integrated3-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DIGITAL,
          stem: "Design a digital citizenship workshop covering evaluation, civic engagement, and ethics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Workshop design",
                statement: "Comprehensive training.",
              },
              {
                kind: "skill",
                name: "Skill integration",
                statement: "All three pillars.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Module 1: verification skills — checklist, practice evaluating viral posts.",
                evidence: "verification",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Module 2: civic engagement — news vs opinion, responsible sharing, fact-checking.",
                evidence: "civic",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Module 3: ethics — digital footprint, privacy, consent.",
                evidence: "ethics",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Capstone: scenario-based practice — evaluate real posts, make decisions, reflect.",
                evidence: "capstone",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example workshop: Module 1 (30 min) — verification checklist + practice evaluating viral posts. Module 2 (30 min) — news vs opinion, responsible sharing, fact-checking tools. Module 3 (20 min) — digital footprint, privacy, consent. Capstone (20 min) — scenario practice with real posts + reflection.",
            commonErrors: ["Only covering one pillar."],
          },
        },
        {
          id: "ela10-u4-integrated3-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DIGITAL,
          parts: [
            {
              label: "a",
              prompt: "Why is digital citizenship 'civic responsibility'?",
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
                  "Your online choices affect public discourse — misinformation, division, or informed engagement.",
                evidence: "responsibility",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Responsible citizens verify, share accurately, engage constructively — strengthens democratic deliberation.",
                evidence: "strengthens",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Online choices affect public discourse — misinformation or informed engagement. (b) Responsible citizens verify/share accurately/engage constructively — strengthens democracy.",
            commonErrors: ["Thinking digital citizenship is optional."],
          },
        },
      ],
    },
  ],
};
