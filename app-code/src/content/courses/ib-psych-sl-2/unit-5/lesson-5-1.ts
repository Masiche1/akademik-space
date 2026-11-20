import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "psych-u5-lesson-5-1",
  code: "5-1",
  title: "Defining and Classifying Abnormality",
  goal: "I CAN describe the criteria for defining abnormality and evaluate classification systems including DSM and ICD.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    {
      term: "Abnormality",
      definition:
        "Behaviour or experience that deviates from statistical, social, ideal or biological norms.",
    },
    {
      term: "Statistical infrequency",
      definition:
        "Defining abnormality as behaviour that is rare in the population.",
    },
    {
      term: "Social deviance",
      definition:
        "Behaviour violating accepted social norms — culture-dependent.",
    },
    {
      term: "DSM",
      definition:
        "Diagnostic and Statistical Manual of Mental Disorders — American classification system.",
    },
    {
      term: "ICD",
      definition:
        "International Classification of Diseases — WHO's classification including mental disorders.",
    },
    {
      term: "Reliability",
      definition:
        "Consistency of diagnosis — whether different clinicians reach the same diagnosis.",
    },
  ],
  concepts: [
    {
      id: "psych-u5-defining",
      title: "Defining abnormality",
      skill:
        "Describe statistical infrequency, deviation from social norms, failure to function and deviation from ideal mental health as definitions of abnormality.",
      lesson: {
        sections: [
          {
            heading: "Statistical infrequency",
            body: "**Statistical infrequency** defines abnormality as behaviour that is rare in the population — e.g. having an IQ of 60 or a height of 2.5m. This is objective and measurable but flawed: rare behaviours aren't necessarily bad (genius is rare but positive); common behaviours can be harmful (anxiety is widespread). The criterion alone cannot distinguish desirable from undesirable rare traits.",
          },
          {
            heading: "Social norms and deviance",
            body: "**Deviation from social norms** defines abnormality as violating accepted cultural rules — e.g. public nudity or talking to oneself. This is flexible and culturally relative: homosexuality was once classified as abnormal but is now recognised as normal variation. Problems: norms change over time; 'normal' is defined by the majority, potentially marginalising minorities; some deviance is positive (rebellion against injustice).",
          },
          {
            heading: "Failure to function and ideal health",
            body: "**Failure to function adequately** (Rosenhan & Seligman): abnormality is behaviour that prevents coping with daily life — poor personal hygiene, inability to work, distorted perceptions of reality. This focuses on subjective distress and dysfunction rather than statistical rarity. **Deviation from ideal mental health** (Jahoda) lists positive criteria: accurate perception, self-acceptance, autonomy, environmental mastery, positive relationships, and continued growth. This is aspirational but sets a culturally specific 'ideal'.",
          },
        ],
        keyFormulas: [
          {
            name: "Four definitions",
            statement:
              "Statistical infrequency + social deviance + failure to function + deviation from ideal",
          },
          {
            name: "Key problem",
            statement: "Each definition has cultural or value biases",
          },
        ],
        workedExample: {
          problem:
            "A person has an IQ of 140. Is this abnormal? Evaluate using two definitions.",
          solution:
            "Statistical infrequency: yes — 140 is rare (top ~0.1%). But social deviance: no — high intelligence is not deviant. This shows statistical rarity alone cannot define abnormality without considering whether the trait is harmful or valued.",
        },
      },
      questions: [
        {
          id: "psych-u5-dfq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Rosenhan and Seligman's 'failure to function adequately' defines abnormality as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Behaviour that is statistically rare" },
              { id: "b", text: "Behaviour violating social norms" },
              { id: "c", text: "Behaviour preventing coping with daily life" },
              { id: "d", text: "Deviation from an ideal mental state" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Failure to function",
                statement:
                  "Abnormality defined by inability to cope with everyday demands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Failure to function focuses on dysfunction in daily life, not rarity or deviance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Behaviour preventing coping with daily life",
            commonErrors: [
              "Confusing with statistical infrequency — different criterion.",
            ],
          },
        },
        {
          id: "psych-u5-dfq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two limitations of defining abnormality by deviation from social norms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social norms criterion",
                statement:
                  "Norms are culturally relative, change over time, and may marginalise minorities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cultural relativity: what is deviant in one culture may be normal in another — no universal standard.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Norms change: behaviours once classified as abnormal (e.g. homosexuality) are now accepted — definitions are unstable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Majority bias: 'normal' is defined by dominant groups, potentially pathologising minority identities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cultural relativity, changing norms, and majority bias make this definition unstable.",
            commonErrors: [
              "Treating social norms as objective — they are constructed and contested.",
            ],
          },
        },
        {
          id: "psych-u5-dfq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why statistical infrequency is insufficient as the sole definition of abnormality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistical criterion flaw",
                statement:
                  "Rarity does not indicate harmfulness — rare traits can be positive or neutral.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Many rare behaviours are positive — genius, exceptional athletic ability are statistically infrequent but not abnormal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Many common behaviours are harmful — widespread anxiety or depression are statistically frequent yet disordered.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The criterion describes frequency, not whether behaviour causes distress or dysfunction.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Therefore statistical infrequency must be combined with other criteria — distress, dysfunction, deviance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rarity ≠ abnormality — rare can be positive, common can be disordered.",
            commonErrors: [
              "Equating rare with bad — the criterion lacks value judgement.",
            ],
          },
        },
        {
          id: "psych-u5-dfq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A society debates whether extreme political activism should be classified as a mental disorder.",
          parts: [
            {
              label: "a",
              prompt: "Apply two definitions of abnormality to this case.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how cultural context affects the classification.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the dangers of expanding psychiatric classification.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classification risks",
                statement:
                  "Expanding definitions can pathologise dissent and political behaviour.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Social deviance: activism violates norms in authoritarian societies but may be normative in democracies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Failure to function: if activism doesn't impair daily functioning, this criterion isn't met.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Statistical infrequency: activism is uncommon but rarity alone doesn't establish disorder.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "In democratic societies activism is protected speech; in authoritarian states it may be 'deviant' — classification is political.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "History shows political dissidents were once classified as mentally ill to discredit them.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Risk: pathologising dissent can be used for political control and social control.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Risk: expanding criteria dilutes diagnostic validity — everything becomes 'disordered'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Balance: classification should require clear distress or dysfunction, not merely unconventional beliefs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Deviance yes, function no, rarity insufficient. (b) Classification is politically contingent. (c) Risk of political abuse + diagnostic inflation.",
            commonErrors: [
              "Assuming classification is neutral — it reflects social power.",
            ],
          },
        },
        {
          id: "psych-u5-dfq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Jahoda's criterion of 'deviation from ideal mental health' defines abnormality as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Behaviour that is statistically rare in the population",
              },
              {
                id: "b",
                text: "Behaviour that violates accepted social norms",
              },
              {
                id: "c",
                text: "Departure from criteria of positive psychological functioning",
              },
              { id: "d", text: "Inability to cope with everyday demands" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviation from ideal health",
                statement:
                  "Abnormality defined as departure from Jahoda's criteria of positive mental health.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Jahoda's approach lists positive criteria (accurate perception, autonomy, positive relationships) and defines abnormality as falling short of them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Departure from criteria of positive psychological functioning",
            commonErrors: [
              "Confusing with failure to function — Jahoda focuses on positive ideals, not dysfunction.",
            ],
          },
        },
        {
          id: "psych-u5-dfq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is a limitation of defining abnormality by deviation from social norms?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is objective and measurable across all cultures",
              },
              {
                id: "b",
                text: "It treats 'normal' as defined by the majority, marginalising minorities",
              },
              {
                id: "c",
                text: "It focuses only on the individual's subjective distress",
              },
              {
                id: "d",
                text: "It requires statistical comparison with the population",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social norms bias",
                statement:
                  "Deviance criteria reflect the dominant group's norms and can pathologise minorities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social deviance is not objective — 'normal' is defined by cultural majorities, so minority behaviours may be labelled abnormal.",
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
              "**(b)** Majority-defined 'normal' marginalises minorities",
            commonErrors: [
              "Choosing (a) — social deviance is culturally relative, not objective.",
            ],
          },
        },
        {
          id: "psych-u5-dfq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Rosenhan and Seligman's 'failure to function adequately' defines abnormality as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Behaviour that is statistically rare in the population",
              },
              {
                id: "b",
                text: "Behaviour that prevents coping with everyday life",
              },
              { id: "c", text: "Departure from ideal mental health criteria" },
              { id: "d", text: "Violation of legally enforced social rules" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Failure to function",
                statement:
                  "Abnormality defined by inability to meet everyday demands — distress, poor hygiene, distorted reality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The criterion centres on dysfunction in daily life: inability to work, maintain hygiene, or perceive reality accurately.",
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
              "**(b)** Behaviour preventing coping with everyday life",
            commonErrors: [
              "Confusing with social deviance — function is about coping, not rule-breaking.",
            ],
          },
        },
        {
          id: "psych-u5-dfq8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A behaviour occurs in only 2% of the population, violates no social norms, and causes no distress or functional impairment. Under which definition(s) is it abnormal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is abnormal under all four definitions" },
              {
                id: "b",
                text: "It is abnormal only by statistical infrequency",
              },
              { id: "c", text: "It is normal under all four definitions" },
              {
                id: "d",
                text: "It is abnormal by failure to function adequately",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Applying definitions",
                statement:
                  "Each definition uses a different criterion; a behaviour may meet one but not others.",
              },
            ],
            steps: [
              {
                reasoning: "Statistical infrequency: yes — 2% is rare.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social deviance: no — no norms violated; failure to function: no — no impairment; ideal health: unclear but likely met.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore choice (b) is correct — rarity alone labels it abnormal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Abnormal only by statistical infrequency",
            commonErrors: [
              "Assuming rare behaviour is abnormal in every sense — only the statistical criterion is met.",
            ],
          },
        },
        {
          id: "psych-u5-dfq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is NOT one of Jahoda's criteria for ideal mental health?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Accurate perception of reality" },
              { id: "b", text: "Autonomy and independence" },
              { id: "c", text: "Perpetual happiness at all times" },
              { id: "d", text: "Positive relationships with others" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Jahoda's criteria",
                statement:
                  "Accurate perception, self-acceptance, autonomy, environmental mastery, positive relationships, growth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Jahoda's criteria focus on accurate perception, autonomy, relationships and growth — not constant happiness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Perpetual happiness at all times",
            commonErrors: [
              "Assuming 'ideal health' means constant positive emotion — it means accurate functioning.",
            ],
          },
        },
        {
          id: "psych-u5-dfq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A person with an IQ of 145 functions well socially and experiences no distress. How should this be classified, and why?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Abnormal — the IQ is statistically infrequent",
              },
              {
                id: "b",
                text: "Not abnormal — rarity alone is insufficient when functioning is unimpaired",
              },
              {
                id: "c",
                text: "Abnormal — high intelligence deviates from ideal mental health",
              },
              {
                id: "d",
                text: "Cannot be classified without a full psychiatric assessment",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limits of statistical criterion",
                statement:
                  "Statistical rarity does not equal abnormality when the trait is valued and non-impairing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "IQ 145 is statistically rare, so the infrequency criterion is met.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "However there is no distress, deviance or functional impairment — the other criteria are not met.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore choice (b) is correct — classification requires more than rarity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Not abnormal — rarity alone is insufficient",
            commonErrors: [
              "Labeling high intelligence abnormal purely because it is rare.",
            ],
          },
        },
        {
          id: "psych-u5-dfq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A behaviour is considered statistically infrequent when it occurs in fewer than 5% of the population. In a city of 20000 people, how many people could show the behaviour and still count as infrequent?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Statistical threshold",
                statement:
                  "Infrequent = below the population percentage threshold.",
              },
            ],
            steps: [
              {
                reasoning: "5% of 20000 = 0.05 x 20000 = 1000 people.",
                marks: 1,
                markCode: "M",
                working: "0.05 x 20000 = 1000",
              },
              {
                reasoning: "The threshold percentage is 5%.",
                marks: 1,
                markCode: "A",
                working: "5% of population",
              },
            ],
            finalAnswer: "a) 1000 people, b) 5%",
            commonErrors: ["Calculating 5% of the wrong base number."],
          },
        },
        {
          id: "psych-u5-dfq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "In a clinical sample of 500 patients, 75 received a diagnosis of a specific anxiety disorder. What percentage of the sample received this diagnosis, and how many did not?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15 },
              { label: "b", answer: 425 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage calculation",
                statement: "Percentage = part / whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "75 / 500 x 100 = 15% received the diagnosis.",
                marks: 1,
                markCode: "M",
                working: "75 / 500 x 100 = 15",
              },
              {
                reasoning:
                  "500 - 75 = 425 patients did not receive this diagnosis.",
                marks: 1,
                markCode: "A",
                working: "500 - 75 = 425",
              },
            ],
            finalAnswer: "a) 15%, b) 425 patients",
            commonErrors: [
              "Forgetting to multiply by 100 when finding the percentage.",
            ],
          },
        },
        {
          id: "psych-u5-dfq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe the 'failure to function adequately' definition of abnormality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Failure to function",
                statement:
                  "Abnormality = inability to cope with everyday demands, associated distress and distorted reality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proposed by Rosenhan and Seligman — abnormality is defined by dysfunction in daily life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Includes subjective distress — the person feels unable to cope.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Includes practical dysfunction — poor hygiene, inability to work or maintain relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Includes distorted perception of reality — behaving in ways detached from shared reality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dysfunction in daily coping, distress and distorted reality define abnormality.",
            commonErrors: [
              "Describing it as about statistical rarity — the criterion is functional impairment.",
            ],
          },
        },
        {
          id: "psych-u5-dfq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain, with an example, how the definition of abnormality via social deviance is culturally relative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural relativity of deviance",
                statement:
                  "What counts as deviant depends on the norms of the culture making the judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social deviance defines abnormality as violating accepted social norms — but norms differ between cultures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: public nudity or certain gestures are deviant in some cultures but normal or sacred in others.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Norms also change over time — homosexuality was once classified as a mental disorder but is now accepted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The majority defines 'normal', so minority behaviours risk being pathologised — a power bias.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore the criterion has no universal standard and reflects the judge's cultural context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deviance is judged against culturally specific, changeable norms — no universal abnormality.",
            commonErrors: [
              "Using an example without explaining why it shows cultural relativity.",
            ],
          },
        },
        {
          id: "psych-u5-dfq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate statistical infrequency as a definition of abnormality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluating statistical criterion",
                statement:
                  "Objective and measurable, but rarity does not indicate harmfulness or dysfunction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: it is objective and measurable — clear population percentages can be calculated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: rare traits can be positive — genius or exceptional talent is infrequent but not abnormal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: common behaviour can be harmful — widespread anxiety or depression are frequent yet disordered.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: the cut-off for 'infrequent' is arbitrary — why 5% and not 3%?",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The criterion describes frequency only — it cannot tell whether behaviour causes distress or is valued.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: useful as one criterion but must be combined with deviance, dysfunction or ideal-health definitions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Objective but insufficient alone — rarity ≠ abnormality; combine with other criteria.",
            commonErrors: [
              "One-sided evaluation — must include both strengths and weaknesses.",
            ],
          },
        },
        {
          id: "psych-u5-dfq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In Country A, arranged marriage is the universal norm; in Country B it is rare and widely condemned as abnormal.",
          parts: [
            {
              label: "a",
              prompt:
                "Apply two definitions of abnormality to arranged marriage in Country B.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why the same practice is classified differently across the two countries.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the dangers of exporting one culture's definitions of abnormality to another.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural definitions",
                statement:
                  "Abnormality classifications depend on the cultural norms of the classifier.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Social deviance: yes — arranged marriage violates Country B's accepted norms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Statistical infrequency: yes — it is rare in Country B.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Failure to function: unclear — the practice may not impair daily coping for participants.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Country A's norms make it normal; Country B's norms make it deviant — the label reflects the judge's culture, not the behaviour itself.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Norms are culturally constructed and change over time, so the classification is unstable.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Risk: imposing Western psychiatric categories can pathologise normal cultural practices.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Risk: 'cultural imperialism' in diagnosis can justify intervention or control of other societies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Balance: definitions should respect cultural context while still identifying genuine distress or dysfunction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Deviant + infrequent in B, function unclear. (b) Classification reflects cultural norms. (c) Risk of cultural imperialism in diagnosis.",
            commonErrors: [
              "Assuming one country's classification is objectively correct.",
            ],
          },
        },
        {
          id: "psych-u5-dfq17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A behaviour is statistically rare, violates no social norms, and causes no functional impairment. Discuss whether it should be classified as abnormal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-criteria classification",
                statement:
                  "Abnormality is best judged against several definitions, not a single criterion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Statistical infrequency: met — the behaviour is rare.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social deviance: not met — no norms are violated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Failure to function: not met — daily coping is unimpaired.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Deviation from ideal health: possibly not met — accurate perception and autonomy may be intact.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only one weak criterion is satisfied — insufficient evidence for classification as abnormal.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Classification requires convergence of criteria — particularly distress or dysfunction — before labelling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Not abnormal — rarity alone without distress, deviance or dysfunction is insufficient.",
            commonErrors: [
              "Classifying as abnormal on rarity alone, ignoring the other criteria.",
            ],
          },
        },
      ],
    },
    {
      id: "psych-u5-classification",
      title: "Classification systems: DSM and ICD",
      skill:
        "Describe DSM and ICD classification, evaluate reliability and validity, and discuss labelling and stigma.",
      lesson: {
        sections: [
          {
            heading: "DSM and ICD",
            body: "The **DSM (Diagnostic and Statistical Manual of Mental Disorders)**, published by the American Psychiatric Association, classifies mental disorders by symptom criteria — currently DSM-5-TR. The **ICD (International Classification of Diseases)**, by the WHO, is used globally for health statistics and includes mental disorders in its chapter on mental, behavioural and neurodevelopmental disorders. Both use **categorical** classification — disorders are distinct categories with diagnostic criteria — though dimensional approaches are increasingly discussed.",
          },
          {
            heading: "Reliability and validity",
            body: "**Reliability** = consistency of diagnosis: inter-rater reliability (do different clinicians agree?) and test-retest reliability (same patient, same diagnosis over time?). Structured interviews and detailed criteria improved reliability substantially. **Validity** = whether categories reflect real disorders: comorbidity (patients often meet criteria for multiple disorders) and heterogeneity (same diagnosis, different symptoms) challenge the categorical model's validity.",
          },
          {
            heading: "Labelling and stigma",
            body: "Receiving a psychiatric diagnosis can produce **labelling** effects: the label may become a self-fulfilling prophecy, affecting self-concept and how others treat the person. **Stigma** — social disapproval associated with mental illness — leads to discrimination in employment, housing and relationships, and can worsen outcomes. Rosenhan's 'sane in insane places' study showed diagnostic labels can be applied wrongly and are hard to shake off once attached.",
          },
        ],
        keyFormulas: [
          {
            name: "DSM vs ICD",
            statement:
              "DSM = APA clinical criteria; ICD = WHO global health classification",
          },
          {
            name: "Reliability types",
            statement: "Inter-rater + test-retest = consistency of diagnosis",
          },
        ],
        workedExample: {
          problem:
            "Two clinicians diagnose the same patient differently. Which psychometric property is compromised?",
          solution:
            "Inter-rater reliability — the diagnosis is not consistent across raters. Structured criteria and training improve agreement, but reliability remains imperfect for many disorders.",
        },
      },
      questions: [
        {
          id: "psych-u5-clq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Inter-rater reliability refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether diagnosis is consistent over time" },
              {
                id: "b",
                text: "Whether different clinicians reach the same diagnosis",
              },
              { id: "c", text: "Whether the diagnosis reflects real disorder" },
              { id: "d", text: "Whether patients accept the label" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inter-rater reliability",
                statement:
                  "Agreement between different clinicians diagnosing the same case.",
              },
            ],
            steps: [
              {
                reasoning: "Inter-rater = between raters/clinicians.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Different clinicians reaching same diagnosis",
            commonErrors: [
              "Confusing with test-retest reliability (consistency over time).",
            ],
          },
        },
        {
          id: "psych-u5-clq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two problems with the categorical approach to classifying mental disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Categorical classification",
                statement:
                  "Distinct categories struggle with comorbidity and symptom heterogeneity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comorbidity: patients often meet criteria for multiple disorders simultaneously — categories overlap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Heterogeneity: patients with the same diagnosis can have very different symptoms — the category is internally diverse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This suggests disorders may exist on continua rather than as discrete categories — dimensional models may be more accurate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Comorbidity + heterogeneity challenge categorical validity.",
            commonErrors: [
              "Saying categories are useless — they aid communication despite flaws.",
            ],
          },
        },
        {
          id: "psych-u5-clq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how diagnostic labelling can affect a person's self-concept and treatment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling effects",
                statement:
                  "Labels can become self-fulfilling prophecies affecting identity and behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Labelling theory: once labelled 'schizophrenic' or 'depressed', the person may internalise this identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The label can become a self-fulfilling prophecy — the person behaves 'as a patient' rather than as themselves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Others' reactions change — stigma leads to discrimination, social withdrawal and reduced opportunities.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "However, labels also enable access to treatment and communicate information to professionals — a double-edged effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Labels can self-fulfil and invite stigma, but also enable treatment — double-edged.",
            commonErrors: [
              "Ignoring the benefits of diagnosis — labels aren't purely harmful.",
            ],
          },
        },
        {
          id: "psych-u5-clq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Rosenhan's 'sane in insane places' study had pseudopatients admitted to psychiatric hospitals claiming to hear voices.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe what the study found about diagnosis and labelling.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the ethical problems with Rosenhan's study.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate what the study revealed about psychiatric classification.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rosenhan study",
                statement:
                  "Pseudopatients were diagnosed and treated as mentally ill despite being sane — labels stuck.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "All pseudopatients were admitted — clinicians diagnosed schizophrenia based on one symptom.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Once labelled, their normal behaviour was interpreted as confirming mental illness.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Labels persisted — staff continued to see illness even when patients behaved normally.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Deception: patients and staff were not fully informed of the study's true purpose.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Potential harm: pseudopatients received unnecessary medication and could have been harmed by treatment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Showed diagnosis can be unreliable — clinicians over-interpreted ambiguous behaviour.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Revealed labelling power — once diagnosed, the label coloured all subsequent interpretation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Led to improved diagnostic criteria (DSM-III revision) but also showed classification limits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Misdiagnosis + label persistence. (b) Deception + treatment risk. (c) Exposed unreliability; spurred diagnostic reform.",
            commonErrors: [
              "Claiming the study proves all diagnoses are wrong — it showed susceptibility to bias.",
            ],
          },
        },
        {
          id: "psych-u5-clq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The ICD (International Classification of Diseases) is published by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The American Psychiatric Association" },
              { id: "b", text: "The World Health Organization" },
              { id: "c", text: "The United Nations" },
              { id: "d", text: "The British Psychological Society" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICD publisher",
                statement:
                  "The ICD is the WHO's global health classification including mental disorders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The ICD is maintained by the World Health Organization for global health statistics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The World Health Organization",
            commonErrors: [
              "Confusing the DSM's publisher (APA) with the ICD's (WHO).",
            ],
          },
        },
        {
          id: "psych-u5-clq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Comorbidity challenges the categorical approach to classification because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Patients never have more than one disorder" },
              {
                id: "b",
                text: "Patients often meet criteria for multiple disorders at once",
              },
              { id: "c", text: "Clinicians cannot agree on any diagnosis" },
              { id: "d", text: "Disorders disappear over time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comorbidity",
                statement:
                  "Patients frequently meet diagnostic criteria for several disorders simultaneously.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comorbidity means disorders co-occur — a patient can be depressed and anxious at once, blurring categorical boundaries.",
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
              "**(b)** Patients often meet criteria for multiple disorders at once",
            commonErrors: [
              "Thinking comorbidity means two diagnoses are impossible — it means they commonly co-occur.",
            ],
          },
        },
        {
          id: "psych-u5-clq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A dimensional approach to classification treats disorders as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distinct categories with clear boundaries" },
              {
                id: "b",
                text: "Existing on continua rather than discrete categories",
              },
              { id: "c", text: "Caused by a single gene each" },
              { id: "d", text: "Identical in all diagnosed patients" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dimensional model",
                statement:
                  "Psychological traits and disorders vary along continua rather than falling into yes/no categories.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dimensional models score severity along a continuum — everyone has some level of the trait.",
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
              "**(b)** Existing on continua rather than discrete categories",
            commonErrors: [
              "Confusing dimensional (continuum) with categorical (distinct boxes) models.",
            ],
          },
        },
        {
          id: "psych-u5-clq8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In psychiatric classification, 'heterogeneity' refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Two patients with different diagnoses sharing the same symptoms",
              },
              {
                id: "b",
                text: "Two patients with the same diagnosis showing different symptoms",
              },
              {
                id: "c",
                text: "The same patient receiving different diagnoses over time",
              },
              {
                id: "d",
                text: "Disorders being evenly distributed across the population",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heterogeneity",
                statement:
                  "Patients sharing one diagnosis can present with very different symptom profiles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Heterogeneity means the category contains diverse presentations — undermining the idea of a single disorder.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Choice (b) describes one diagnosis with varied symptoms; (a) is comorbidity, (c) is test-retest unreliability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Same diagnosis, different symptoms",
            commonErrors: [
              "Confusing heterogeneity (within-category variation) with comorbidity (across-category overlap).",
            ],
          },
        },
        {
          id: "psych-u5-clq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The current edition of the DSM used in clinical practice is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DSM-IV" },
              { id: "b", text: "DSM-5-TR" },
              { id: "c", text: "ICD-10" },
              { id: "d", text: "DSM-III-R" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DSM-5-TR",
                statement:
                  "The text revision of DSM-5, the current APA classification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "DSM-5-TR is the current edition, a text revision of DSM-5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** DSM-5-TR",
            commonErrors: ["Confusing DSM editions with ICD versions."],
          },
        },
        {
          id: "psych-u5-clq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "How can stigma associated with a psychiatric label worsen a patient's outcomes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It improves access to effective treatment" },
              {
                id: "b",
                text: "It leads to discrimination that reduces opportunities and treatment engagement",
              },
              { id: "c", text: "It makes diagnosis more reliable" },
              { id: "d", text: "It removes the need for medication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stigma effects",
                statement:
                  "Social disapproval leads to discrimination in employment, housing and relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stigma causes discrimination and social withdrawal, reducing employment, housing and relationship opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can also discourage help-seeking and worsen self-concept, compounding the disorder.",
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
              "**(b)** Discrimination reduces opportunities and treatment engagement",
            commonErrors: [
              "Claiming stigma has no effect on outcomes — it measurably worsens prognosis.",
            ],
          },
        },
        {
          id: "psych-u5-clq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a reliability study, two clinicians agreed on the diagnosis in 45 of 60 cases. What was the percentage agreement, and how many cases disagreed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75 },
              { label: "b", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage agreement",
                statement: "Agreement % = agreed cases / total cases x 100.",
              },
            ],
            steps: [
              {
                reasoning: "45 / 60 x 100 = 75% agreement.",
                marks: 1,
                markCode: "M",
                working: "45 / 60 x 100 = 75",
              },
              {
                reasoning: "60 - 45 = 15 cases of disagreement.",
                marks: 1,
                markCode: "A",
                working: "60 - 45 = 15",
              },
            ],
            finalAnswer: "a) 75%, b) 15 cases",
            commonErrors: [
              "Reporting the raw count 45 instead of the percentage.",
            ],
          },
        },
        {
          id: "psych-u5-clq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "A clinic assessed 120 patients; 30 received two or more diagnoses (comorbidity). What percentage showed comorbidity, and how many had a single diagnosis?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25 },
              { label: "b", answer: 90 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Comorbidity rate",
                statement:
                  "Comorbid % = patients with multiple diagnoses / total patients x 100.",
              },
            ],
            steps: [
              {
                reasoning: "30 / 120 x 100 = 25% showed comorbidity.",
                marks: 1,
                markCode: "M",
                working: "30 / 120 x 100 = 25",
              },
              {
                reasoning: "120 - 30 = 90 patients had a single diagnosis.",
                marks: 1,
                markCode: "A",
                working: "120 - 30 = 90",
              },
            ],
            finalAnswer: "a) 25%, b) 90 patients",
            commonErrors: [
              "Using 30 as the answer to part b without subtracting from the total.",
            ],
          },
        },
        {
          id: "psych-u5-clq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe the difference between the DSM and the ICD.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "DSM vs ICD",
                statement:
                  "DSM = APA clinical criteria; ICD = WHO global health classification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "DSM is published by the American Psychiatric Association and focuses on clinical diagnostic criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ICD is published by the WHO and is used globally for health statistics and disease coding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "DSM is primarily used in the USA; ICD is used internationally including many countries' health systems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both classify disorders categorically by symptom criteria — their purposes and reach differ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "DSM = APA clinical manual (US-focused); ICD = WHO global classification.",
            commonErrors: [
              "Saying one is 'better' — they serve different purposes and are broadly comparable.",
            ],
          },
        },
        {
          id: "psych-u5-clq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain the difference between inter-rater reliability and test-retest reliability in psychiatric diagnosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability types",
                statement:
                  "Inter-rater = agreement between clinicians; test-retest = consistency over time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inter-rater reliability: whether different clinicians reach the same diagnosis for the same patient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low inter-rater reliability means diagnosis depends on which clinician assesses — subjective criteria or bias.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Test-retest reliability: whether the same patient receives the same diagnosis at different times.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low test-retest reliability may reflect genuine symptom fluctuation or unstable diagnostic criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both types are needed for a diagnosis system to be considered reliable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inter-rater = clinician agreement; test-retest = stability over time.",
            commonErrors: ["Defining only one type or conflating the two."],
          },
        },
        {
          id: "psych-u5-clq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the validity of the categorical approach to classifying mental disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Categorical validity",
                statement:
                  "Categories aid communication but comorbidity and heterogeneity challenge whether they reflect real distinct disorders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: categories enable clear communication between clinicians and guide treatment decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: diagnostic criteria improve reliability compared with earlier unstructured systems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: comorbidity shows categories overlap — patients meet multiple sets of criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: heterogeneity means one diagnosis covers very different presentations — the 'disorder' may not be unitary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Arbitrary boundaries: deciding how many symptoms 'count' is a judgement call, not a natural division.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: categories are useful pragmatically but dimensional models may better reflect the continuum of psychopathology.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Categories aid communication but comorbidity, heterogeneity and arbitrary boundaries weaken validity.",
            commonErrors: [
              "Dismissing categories entirely — they remain clinically useful despite flaws.",
            ],
          },
        },
        {
          id: "psych-u5-clq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A patient diagnosed with 'schizophrenia' is repeatedly described by staff as 'a schizophrenic' and treated as incapable, despite showing periods of normal functioning.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe how labelling can produce a self-fulfilling prophecy in this case.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how stigma affects this patient's life chances.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the benefits of diagnosis outweigh the costs of labelling.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling and stigma",
                statement:
                  "Labels shape self-concept and others' treatment, potentially becoming self-fulfilling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The label becomes the person's identity — they may internalise 'schizophrenic' as who they are.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Staff expectations lead them to interpret normal behaviour as symptoms — the label colours perception.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Reduced opportunities and lowered expectations can produce the very dysfunction predicted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Stigma causes discrimination in employment, housing and relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Social withdrawal and internalised shame worsen mental health and recovery prospects.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Benefits: diagnosis enables treatment access, communicates information, and can reduce self-blame by medicalising the problem.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Costs: labelling, stigma and the self-fulfilling prophecy can harm the person beyond the disorder itself.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Balance: person-first language ('person with schizophrenia') and anti-stigma campaigns reduce harm while keeping benefits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Label → internalised identity → expected dysfunction. (b) Discrimination + withdrawal. (c) Benefits real but stigma costs significant — use person-first language.",
            commonErrors: [
              "Ignoring that diagnosis also provides access to treatment.",
            ],
          },
        },
        {
          id: "psych-u5-clq17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Discuss the implications of Rosenhan's 'sane in insane places' study for psychiatric classification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rosenhan implications",
                statement:
                  "The study showed diagnoses can be applied to the sane and labels persist once attached.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pseudopatients were admitted and diagnosed despite normal sanity — showing diagnostic criteria can be applied to non-patients.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Once labelled, staff interpreted all behaviour through the diagnosis — confirmation bias in clinical judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This reveals low reliability and validity in practice — clinicians are not objective machines.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The study prompted DSM revisions with stricter, more explicit criteria — a constructive outcome.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "However it also showed labels are sticky — discharge did not erase the diagnosis's effect on how staff saw them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall: classification systems improved but remain vulnerable to bias, suggesting need for structured interviews and humility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exposed diagnostic unreliability and label persistence; spurred stricter criteria but showed limits remain.",
            commonErrors: [
              "Claiming the study invalidated all psychiatric diagnosis — it revealed susceptibility to bias.",
            ],
          },
        },
      ],
    },
  ],
};
