import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const INFTEXT: TextExtract = {
  title: "The Science of Sleep",
  author: "Written for Akademik Space",
  text: "Sleep is not a passive state — it's an active process during which the brain consolidates memories, repairs tissue, and regulates hormones. During deep sleep, the brain clears out metabolic waste that accumulates during waking hours. During REM sleep, the brain processes emotional experiences and strengthens neural connections.\n\nTeenagers need 8-10 hours of sleep per night, yet studies show most get less than 7. This sleep deficit affects mood, memory, and academic performance. Schools that have shifted to later start times report improved attendance and higher test scores.\n\nSleep deprivation doesn't just make you tired — it impairs judgment, slows reaction time, and weakens the immune system. Chronic sleep loss is linked to increased risk of depression, obesity, and cardiovascular disease.",
};

export const lesson102: Lesson = {
  id: "ela7-u10-lesson-10-2",
  code: "10-2",
  title: "Informational Text Structure and Central Ideas",
  goal: "I CAN identify text structures, determine central ideas, and analyze how details support them.",
  standards: ["RI.7.2", "RI.7.5", "RI.7.6"],
  vocabulary: [
    {
      term: "Central idea",
      definition: "The main point or message of a text.",
    },
    {
      term: "Text structure",
      definition:
        "How information is organized — chronological, cause-effect, compare-contrast, problem-solution.",
    },
    { term: "Claim", definition: "An arguable statement the author makes." },
    {
      term: "Evidence",
      definition: "Facts, examples, or data that support a claim.",
    },
    {
      term: "Counterclaim",
      definition: "An opposing argument the author addresses.",
    },
    {
      term: "Qualifying phrase",
      definition: "Words like 'some experts say' that limit a claim's scope.",
    },
  ],
  concepts: [
    {
      id: "ela7-u10-infostruct",
      title: "Text structure and organization",
      skill:
        "Identify how informational texts are organized and how structure supports meaning.",
      lesson: {
        sections: [
          {
            heading: "Common text structures",
            body: "**Chronological**: events in time order ('first... then... finally'). **Cause-effect**: one thing leads to another ('because X, Y happens'). **Compare-contrast**: similarities and differences ('both... but...'). **Problem-solution**: identifies a problem and offers fixes ('the problem is... one solution is...'). The sleep text uses cause-effect: sleep deprivation → impaired judgment, weakened immunity, health risks.",
          },
          {
            heading: "Central idea vs topic",
            body: "**Topic** is the subject ('sleep'); **central idea** is what the text says about it ('sleep is essential for brain function and health'). The central idea isn't just 'sleep' — it's the specific insight the author wants readers to understand. Supporting details (REM sleep, sleep deficit effects, later start times) all point to the same central idea.",
          },
        ],
        keyFormulas: [
          {
            name: "Text structures",
            statement:
              "Chronological, cause-effect, compare-contrast, problem-solution.",
          },
          {
            name: "Central idea",
            statement: "What the text says about the topic — the main insight.",
          },
          {
            name: "Topic vs central idea",
            statement: "Topic = subject; central idea = specific message.",
          },
        ],
        workedExample: {
          problem: "What text structure does the sleep passage use?",
          solution:
            "Cause-effect — it explains how sleep works (mechanism), then shows what happens without it (sleep deprivation → impaired judgment, health risks). The structure moves from cause (sleep processes) to effect (benefits and consequences of deprivation).",
        },
      },
      questions: [
        {
          id: "ela7-u10-infostruct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFTEXT,
          stem: "What is the central idea of the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teenagers should sleep more" },
              { id: "b", text: "Sleep deprivation causes depression" },
              {
                id: "c",
                text: "Sleep is essential for brain function, memory, and health",
              },
              { id: "d", text: "Schools should start later" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Central idea",
                statement: "Main insight about the topic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The passage covers sleep's benefits (memory, hormones, waste clearing) AND consequences of deprivation — central idea is sleep's essential role in health.",
                evidence:
                  "Sleep is not a passive state — it's an active process",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Sleep is essential for brain function, memory, and health — the passage's main insight.",
            commonErrors: [
              "Choosing (a) — that's a detail, not the central idea.",
            ],
          },
        },
        {
          id: "ela7-u10-infostruct-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFTEXT,
          stem: "Identify the text structure and explain how it supports the central idea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure analysis",
                statement: "Organization supports meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure: cause-effect — explains sleep's mechanisms, then shows consequences of deprivation.",
                evidence: "Sleep deprivation doesn't just make you tired",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The structure supports the central idea by showing both what sleep does AND what happens without it.",
                evidence:
                  "impaired judgment, slows reaction time, weakens immune system",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Cause-effect makes the argument compelling — it shows the stakes of sleep deprivation.",
                evidence: "Chronic sleep loss is linked to increased risk",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Cause-effect structure — explains sleep's benefits then shows deprivation's consequences, supporting the central idea that sleep is essential.",
            commonErrors: [
              "Calling it chronological — there's no time sequence.",
            ],
          },
        },
        {
          id: "ela7-u10-infostruct-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFTEXT,
          stem: "Analyze how the author's use of statistics and examples supports the central idea. Identify at least two supporting details.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence analysis",
                statement: "Details support central ideas.",
              },
              {
                kind: "skill",
                name: "Statistical support",
                statement: "Data makes claims credible.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Statistic: 'Teenagers need 8-10 hours... most get less than 7' — quantifies the problem.",
                evidence: "most get less than 7",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'Schools that shifted to later start times report improved attendance' — concrete case study.",
                evidence: "improved attendance and higher test scores",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mechanism: 'During deep sleep, the brain clears out metabolic waste' — explains WHY sleep matters.",
                evidence: "consolidates memories, repairs tissue",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "All details point to the same central idea: sleep is essential for function and health.",
                evidence: "Chronic sleep loss is linked to increased risk",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Statistics ('8-10 hours needed, most get less than 7'), examples ('later start times improve attendance'), and mechanisms ('brain clears waste during deep sleep') all support the central idea that sleep is essential for brain function and health.",
            commonErrors: [
              "Listing details without connecting to central idea.",
            ],
          },
        },
        {
          id: "ela7-u10-infostruct-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFTEXT,
          parts: [
            {
              label: "a",
              prompt: "Name the text structure used in the passage.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Explain how the structure reinforces the author's argument about sleep.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure-argument connection",
                statement: "Organization supports persuasion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cause-effect structure.",
                evidence: "Sleep deprivation doesn't just make you tired",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Cause-effect shows what sleep does AND what happens without it — making the argument compelling by showing stakes.",
                evidence: "impaired judgment, slows reaction time",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Cause-effect. (b) Shows both benefits of sleep and consequences of deprivation — makes the argument compelling by showing stakes.",
            commonErrors: [
              "Naming structure without explaining its persuasive function.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u10-infostruct2",
      title: "Author's argument and point of view",
      skill:
        "Analyze how authors present arguments and perspectives in informational texts.",
      lesson: {
        sections: [
          {
            heading: "Claims and evidence",
            body: "Informational texts make **claims** (arguable statements) supported by **evidence** (facts, statistics, examples). 'Sleep is essential' is a claim; 'during deep sleep, the brain clears metabolic waste' is evidence. Strong authors also acknowledge **counterclaims** — 'some might argue sleep is just rest, but research shows it's active processing.'",
          },
          {
            heading: "Point of view and bias",
            body: "**Point of view** is the author's perspective — first person ('I believe'), third person ('experts say'), or implied. **Bias** is when the author favors one side unfairly. Recognizing point of view helps evaluate credibility: is the author presenting balanced evidence or cherry-picking? 'Studies show' is more credible than 'everyone knows.'",
          },
        ],
        keyFormulas: [
          {
            name: "Claim + evidence",
            statement: "Arguable statement + supporting facts.",
          },
          {
            name: "Counterclaim",
            statement: "Acknowledging opposing views strengthens arguments.",
          },
          {
            name: "Point of view",
            statement: "First/third person or implied perspective.",
          },
          {
            name: "Bias detection",
            statement:
              "Does the author present balanced evidence or favor one side?",
          },
        ],
        workedExample: {
          problem:
            "What claim does the sleep passage make, and what evidence supports it?",
          solution:
            "Claim: 'Sleep is essential for brain function and health.' Evidence: 'During deep sleep, the brain clears metabolic waste'; 'sleep deprivation impairs judgment and weakens immunity'; 'chronic sleep loss linked to depression, obesity, cardiovascular disease.'",
        },
      },
      questions: [
        {
          id: "ela7-u10-infostruct2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFTEXT,
          stem: "What is the author's main claim in the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Schools should start later" },
              { id: "b", text: "Sleep is essential for health and function" },
              { id: "c", text: "Sleep is overrated" },
              { id: "d", text: "Teenagers are lazy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Claim",
                statement: "Arguable statement author makes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The author argues sleep is essential — supported by mechanisms, statistics, and health consequences.",
                evidence:
                  "Sleep is not a passive state — it's an active process",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Sleep is essential for health and function — the author's main claim.",
            commonErrors: [
              "Choosing (c) — that's a supporting detail, not the main claim.",
            ],
          },
        },
        {
          id: "ela7-u10-infostruct2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INFTEXT,
          stem: "Identify two pieces of evidence supporting the claim 'sleep is essential.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence identification",
                statement: "Find facts that support claims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence 1: 'During deep sleep, the brain clears out metabolic waste' — mechanism showing sleep's function.",
                evidence: "clears out metabolic waste",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 2: 'Sleep deprivation impairs judgment, slows reaction time, weakens immune system' — consequences of lacking sleep.",
                evidence: "impaired judgment, slows reaction time",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both show sleep's necessity — one explains what it does, the other what happens without it.",
                evidence: "Chronic sleep loss is linked",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Evidence: 'brain clears metabolic waste during deep sleep' + 'sleep deprivation impairs judgment and immunity' — both support sleep's essential role.",
            commonErrors: [
              "Choosing details that don't support the claim — must connect to 'essential'.",
            ],
          },
        },
        {
          id: "ela7-u10-infostruct2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFTEXT,
          stem: "Evaluate the author's credibility. Does the text present balanced evidence, or does it show bias? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Credibility evaluation",
                statement: "Assess author bias and evidence quality.",
              },
              {
                kind: "skill",
                name: "Balanced presentation",
                statement: "Strong arguments acknowledge complexity.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "The author cites studies and specific findings — 'studies show', 'research shows' — suggesting research-based claims.",
                evidence: "studies show most get less than 7",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The text acknowledges complexity — sleep has stages (deep, REM) with different functions, not just 'rest'.",
                evidence:
                  "During REM sleep, the brain processes emotional experiences",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "No obvious counterclaim is presented — the author argues one side (sleep is essential) without acknowledging opposing views.",
                evidence: "Sleep deprivation doesn't just make you tired",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Overall: credible but one-sided — strong evidence but no acknowledgment of counterarguments.",
                evidence: "Chronic sleep loss is linked to increased risk",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The author is credible — cites studies, explains mechanisms, acknowledges sleep's complexity. However, the text is one-sided: it argues sleep is essential without acknowledging counterarguments or limitations. Strong evidence but incomplete balance.",
            commonErrors: [
              "Saying 'biased' without evidence — bias requires showing unfair presentation.",
            ],
          },
        },
        {
          id: "ela7-u10-infostruct2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFTEXT,
          parts: [
            {
              label: "a",
              prompt:
                "Identify the author's point of view (first person, third person, or implied).",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain how this point of view affects credibility.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Point of view analysis",
                statement: "Perspective affects credibility.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Third person — the author uses 'experts say', 'studies show' without personal pronouns.",
                evidence: "studies show most get less than 7",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Third person suggests objectivity — the author isn't sharing personal experience but reporting research. This increases credibility.",
                evidence: "Sleep is not a passive state",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Third person. (b) Suggests objectivity — reporting research rather than personal opinion, increasing credibility.",
            commonErrors: ["Calling it first person — no 'I' or 'we' appears."],
          },
        },
      ],
    },
  ],
};
