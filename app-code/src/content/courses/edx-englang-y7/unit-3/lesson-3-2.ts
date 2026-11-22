import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "el7-u3-lesson-3-2",
  code: "3-2",
  title: "Analysing Media Texts",
  goal: "I CAN analyse how media texts use language, images and structure to influence audiences.",
  standards: ["Edexcel KS3 English Language — Media"],
  vocabulary: [
    {
      term: "Media text",
      definition:
        "Any text produced for mass audiences — advertisements, news, social media, films.",
    },
    {
      term: "Target audience",
      definition: "The specific group a media text is designed to reach.",
    },
    {
      term: "Media bias",
      definition:
        "Systematic favouring of particular viewpoints in media coverage.",
    },
    {
      term: "Clickbait",
      definition:
        "Sensationalised headlines designed to attract clicks rather than inform.",
    },
  ],
  concepts: [
    {
      id: "el7-u3-media",
      title: "Media Language and Techniques",
      skill:
        "Identify how advertisements and media texts persuade through language and imagery.",
      lesson: {
        sections: [
          {
            heading: "Advertising techniques",
            body: "Ads use **emotive language** ('indulge', 'guilt-free'), **imperatives** ('Buy now!', 'Discover...'), **exclusivity** ('limited edition', 'members only'), **testimonials** (celebrity endorsements, '9/10 would recommend').\n\n**Visual techniques**: colour psychology (red=urgency, blue=trust), aspirational imagery (perfect lives), before/after comparisons, celebrity association. Every element is deliberate — designed to bypass rational evaluation and trigger desire.",
          },
          {
            heading: "News media",
            body: "News isn't neutral — **selection** (what's covered vs ignored), **framing** (how stories are presented), **language choices** (loaded terms: 'regime' vs 'government', 'clash' vs 'protest').\n\n**Critical questions**: Who owns this outlet? Who benefits from this framing? What stories are missing? Whose voices are represented vs marginalised? Media literacy means reading between the lines.",
          },
        ],
        keyFormulas: [
          {
            name: "Ad techniques",
            statement:
              "Emotive language, imperatives, exclusivity, testimonials, colour psychology.",
          },
          {
            name: "News framing",
            statement:
              "Selection + framing + language choices shape perception.",
          },
        ],
        workedExample: {
          problem:
            "Ad says: 'Limited time! Our revolutionary cream will transform your skin.'",
          solution:
            "Techniques: urgency ('limited time'), exaggeration ('revolutionary', 'transform'), aspirational promise. Critical: no evidence, no ingredients, FOMO appeal.",
        },
      },
      questions: [
        {
          id: "el7-u3-media-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'clickbait'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sensationalised headlines designed to attract clicks",
              },
              { id: "b", text: "Educational content" },
              { id: "c", text: "Formal journalism" },
              { id: "d", text: "Accurate news headlines" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Clickbait",
                statement:
                  "Sensationalised headlines prioritising clicks over accuracy.",
              },
            ],
            steps: [
              {
                reasoning: "Clickbait = sensationalism for engagement.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Sensationalised for clicks",
            commonErrors: ["Confusing with normal headlines."],
          },
        },
        {
          id: "el7-u3-media-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify two techniques an advertisement might use to persuade buyers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ad techniques",
                statement:
                  "Emotive language, imperatives, exclusivity, testimonials, colour.",
              },
            ],
            steps: [
              {
                reasoning: "Any two valid techniques identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Techniques specific to advertising.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Correct terminology used.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "e.g. emotive language ('indulge'), imperatives ('Buy now'), exclusivity ('limited edition'), testimonials.",
            commonErrors: ["Generic 'persuasive'.", "Not ad-specific."],
          },
        },
        {
          id: "el7-u3-media-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is news not as neutral as it appears?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "News framing",
                statement:
                  "Selection, framing and language choices shape perception — no story is neutral.",
              },
            ],
            steps: [
              {
                reasoning: "Selection: what's covered/ignored.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Framing: how stories are presented.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Language: loaded terms reveal bias.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ownership/commercial interests.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "News involves selection, framing and language choices — plus ownership interests — shaping perception.",
            commonErrors: ["News = facts view.", "No specific mechanisms."],
          },
        },
        {
          id: "el7-u3-media-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Ad headline: 'Doctors hate this one weird trick to lose weight!'",
          parts: [
            {
              label: "a",
              prompt: "Identify two persuasive techniques in the headline.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why this headline is problematic.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest a more responsible alternative.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Media critique",
                statement:
                  "Identify techniques → evaluate problems → suggest alternatives.",
              },
            ],
            steps: [
              {
                reasoning: "'Doctors hate' = false authority/controversy.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "'One weird trick' = curiosity gap/exaggeration.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "'Lose weight' = aspirational promise.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Misleading: implies suppressed knowledge.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Unverifiable claims, manipulative.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Health claims need evidence.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Alternative: factual, evidence-based.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "e.g. 'New study examines effective weight management strategies' — factual, evidence-based.",
            commonErrors: ["Techniques missed.", "No responsible alternative."],
          },
        },
      ],
    },
    {
      id: "el7-u3-digital",
      title: "Digital Literacy and Media Evaluation",
      skill:
        "Evaluate online information critically and use digital media responsibly.",
      lesson: {
        sections: [
          {
            heading: "Evaluating online information",
            body: "**CRAAP test**: Currency (how recent?), Relevance (appropriate for purpose?), Authority (who wrote it?), Accuracy (verifiable?), Purpose (inform/persuade/deceive?).\n\n**Red flags**: no author, no sources, emotional language, 'they don't want you to know', all-caps headlines, unknown domain, no contact info. **Verification**: cross-check with multiple reliable sources, check fact-checking sites, trace claims to originals.",
          },
          {
            heading: "Digital citizenship",
            body: "**Responsible use**: respect privacy (don't share others' info), cite sources (avoid plagiarism), think before posting (digital permanence), verify before sharing (don't spread misinformation).\n\n**Critical consumption**: recognise targeted advertising, filter bubbles (algorithms showing you what you already believe), echo chambers. Your online presence is permanent — employers and universities check it. Digital literacy is a life skill, not just school.",
          },
        ],
        keyFormulas: [
          {
            name: "CRAAP test",
            statement: "Currency, Relevance, Authority, Accuracy, Purpose.",
          },
          {
            name: "Red flags",
            statement:
              "No author, no sources, emotional, 'secret', unknown domain.",
          },
        ],
        workedExample: {
          problem:
            "Website claims 'Study proves chocolate cures cancer' with no author or sources.",
          solution:
            "Red flags: extraordinary claim, no author, no sources. Likely misinformation — verify with peer-reviewed research before believing.",
        },
      },
      questions: [
        {
          id: "el7-u3-digital-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does CRAAP stand for in evaluating sources?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Currency, Relevance, Authority, Accuracy, Purpose",
              },
              { id: "b", text: "Create, Read, Analyse, Apply, Prove" },
              { id: "c", text: "Check, Review, Assess, Approve, Publish" },
              {
                id: "d",
                text: "Correct, Reliable, Accurate, Authoritative, Professional",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "CRAAP test",
                statement: "Currency, Relevance, Authority, Accuracy, Purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CRAAP = Currency, Relevance, Authority, Accuracy, Purpose.",
                marks: 2,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "**(a)** Currency, Relevance, Authority, Accuracy, Purpose",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "el7-u3-digital-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two red flags that suggest an online source may be unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement:
                  "No author, no sources, emotional language, extraordinary claims.",
              },
            ],
            steps: [
              {
                reasoning: "Any two valid red flags given.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Flags are observable features.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Flags indicate unreliability.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "e.g. no author listed, no sources cited, emotional language, 'they don't want you to know', unknown domain.",
            commonErrors: ["Vague 'looks fake'.", "Not observable features."],
          },
        },
        {
          id: "el7-u3-digital-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it important to verify information before sharing it online?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Information verification",
                statement:
                  "Sharing misinformation spreads harm — verification is a civic responsibility.",
              },
            ],
            steps: [
              {
                reasoning: "Misinformation spreads rapidly online.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Can cause real-world harm.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Verification is civic responsibility.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Builds trustworthy information ecosystem.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Verification prevents spreading misinformation — which causes real harm and undermines public trust.",
            commonErrors: ["Only 'it's good'.", "No harm mechanism."],
          },
        },
        {
          id: "el7-u3-digital-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A friend shares a post claiming 'Scientists confirm: 5G causes cancer' with no sources.",
          parts: [
            {
              label: "a",
              prompt: "Identify two red flags in this post.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest how to verify the claim.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain what you would tell your friend.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Misinformation response",
                statement: "Identify flags → verify → respond constructively.",
              },
            ],
            steps: [
              {
                reasoning: "No sources cited.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "'Scientists confirm' vague — which scientists?",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Extraordinary health claim needs strong evidence.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Check peer-reviewed research/WHO.",
                marks: 1,
                markCode: "AO4",
                part: "b",
              },
              {
                reasoning: "Cross-check multiple sources.",
                marks: 1,
                markCode: "AO4",
                part: "b",
              },
              {
                reasoning: "Check fact-checking sites.",
                marks: 1,
                markCode: "AO4",
                part: "b",
              },
              {
                reasoning: "Explain kindly, share verified info.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "e.g. 'I checked — this claim isn't supported by scientific consensus. Here's the WHO's actual statement...'",
            commonErrors: [
              "Publicly shaming friend.",
              "No verification steps.",
            ],
          },
        },
      ],
    },
  ],
};
