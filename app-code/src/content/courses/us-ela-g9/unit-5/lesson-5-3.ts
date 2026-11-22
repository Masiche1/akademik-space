import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const FOUNDING: TextExtract = {
  title: "Excerpt: The Federalist Papers, No. 10",
  author: "James Madison, 1787",
  text: "Among the numerous advantages promised by a well-constructed Union, none deserves to be more accurately developed than its tendency to break and control the violence of faction. The friend of popular governments never finds himself so much alarmed for their character and fate as when he contemplates their propensity to this dangerous vice.\n\nThe latent causes of faction are thus sown in the nature of man: as long as there is a connection among men, there will be a variety of opinions. The diversity in the faculties of men, from which the rights of property originate, is not less an insurmountable obstacle to a uniformity of interests. The latent causes of faction are thus sown in the nature of man.\n\nA republic, by which I mean a government in which the scheme of representation takes place, opens a different prospect and promises the cure for which we are seeking.",
};

const RHETORIC: TextExtract = {
  title: "Modern Political Rhetoric",
  author: "Written for Akademik Space",
  text: "The crisis at our southern border demands immediate action. While some in Washington play politics with human lives, American families are suffering. We cannot wait for the usual gridlock — the time for decisive leadership is now. Every day we delay, more communities are overwhelmed, more families are separated, and more Americans lose faith in a government that cannot protect its own borders.",
};

export const lesson53: Lesson = {
  id: "ela9-u5-lesson-5-3",
  code: "5-3",
  title: "Rhetoric and Seminal Documents",
  goal: "I CAN analyze rhetorical strategies in foundational American documents and modern political texts.",
  standards: ["RI.9-10.6", "RI.9-10.8", "RI.9-10.9", "L.9-10.5"],
  vocabulary: [
    { term: "Rhetoric", definition: "Art of persuasive speaking or writing." },
    {
      term: "Faction",
      definition: "Group united by common interest or opinion.",
    },
    {
      term: "Representation",
      definition: "Elected officials acting on behalf of citizens.",
    },
    {
      term: "Appeal to emotion",
      definition: "Persuasion through feelings rather than logic.",
    },
    {
      term: "Appeal to authority",
      definition: "Persuasion through expert endorsement.",
    },
    {
      term: "Founding document",
      definition: "Historical text shaping American governance.",
    },
  ],
  concepts: [
    {
      id: "ela9-u5-founding",
      title: "Founding documents analysis",
      skill:
        "Analyze rhetorical strategies in seminal American texts like The Federalist Papers.",
      lesson: {
        sections: [
          {
            heading: "Madison's argument structure",
            body: "Madison's Federalist No. 10 uses sophisticated argumentation: **problem** (faction threatens republics), **cause** (diversity of opinions/faculties — 'sown in the nature of man'), **solution** (representative republic), **benefit** (breaks and controls faction). His language is formal 18th-century prose — 'latent causes,' 'insurmountable obstacle,' 'propensity to this dangerous vice.' He doesn't just argue — he explains WHY faction is inevitable and HOW representation solves it.",
          },
          {
            heading: "Rhetorical strategies",
            body: "Madison uses: **definition** ('a republic, by which I mean...'), **causal reasoning** (diversity → faction), **authority** (founding father writing for ratification), **urgency** ('never finds himself so much alarmed'). Compare to modern rhetoric: 'crisis demands immediate action' uses same urgency but simpler language. Both persuade through problem-solution structure, but Madison grounds in philosophical reasoning while modern rhetoric relies on emotional appeal.",
          },
        ],
        keyFormulas: [
          {
            name: "Problem-cause-solution",
            statement: "Madison's argument structure.",
          },
          {
            name: "Definition + reasoning",
            statement: "Formal argumentation vs emotional appeal.",
          },
          {
            name: "Historical context",
            statement: "Founding documents shaped governance.",
          },
        ],
        workedExample: {
          problem: "How does Madison argue that faction is inevitable?",
          solution:
            "He identifies causes 'sown in the nature of man' — diversity of opinions and faculties. Uses philosophical reasoning: human diversity makes uniform interests impossible.",
        },
      },
      questions: [
        {
          id: "ela9-u5-founding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FOUNDING,
          stem: "What is Madison's main argument in Federalist No. 10?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We need a monarchy" },
              { id: "b", text: "Representative republic can control faction" },
              { id: "c", text: "Factions don't exist" },
              { id: "d", text: "Factions are good" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Madison's thesis",
                statement: "Republic solves faction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Madison argues representative republic 'breaks and controls the violence of faction.'",
                evidence: "break and control the violence of faction",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Representative republic can control faction.",
            commonErrors: [
              "Thinking he supports factions — he wants to control them.",
            ],
          },
        },
        {
          id: "ela9-u5-founding-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FOUNDING,
          stem: "Explain how Madison uses definition and causal reasoning in his argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical analysis",
                statement: "How argument is constructed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Definition: 'a republic, by which I mean a government in which the scheme of representation takes place' — precise definition.",
                evidence: "by which I mean",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Causal reasoning: diversity of opinions/faculties → faction inevitable ('sown in the nature of man').",
                evidence: "sown in the nature of man",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Logical chain: human diversity → conflicting interests → faction → need for republic.",
                evidence: "insurmountable obstacle",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Madison defines 'republic' precisely, then uses causal reasoning: human diversity → conflicting interests → faction inevitable → republic needed. Logical argument, not emotional appeal.",
            commonErrors: [
              "Describing content without analyzing rhetorical strategy.",
            ],
          },
        },
        {
          id: "ela9-u5-founding-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: FOUNDING,
          stem: "Compare Madison's rhetorical strategies to modern political rhetoric. How do they differ?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical comparison",
                statement: "Historical vs modern persuasion.",
              },
              {
                kind: "skill",
                name: "Context analysis",
                statement: "How era shapes rhetoric.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Madison: philosophical reasoning, formal language, logical argument — 'sown in the nature of man.'",
                evidence: "nature of man",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Modern: emotional appeal, urgent language, simpler claims — 'crisis demands immediate action.'",
                evidence: "crisis demands",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Difference: Madison argues through logic; modern rhetoric persuades through emotion and urgency.",
                evidence: "rhetorical comparison",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Madison uses philosophical reasoning and formal logic ('nature of man,' 'insurmountable obstacle'); modern rhetoric uses emotional appeal and urgency ('crisis,' 'immediate action'). Historical context: founding documents needed intellectual persuasion; modern media rewards emotional engagement.",
            commonErrors: ["Comparing content instead of rhetorical strategy."],
          },
        },
        {
          id: "ela9-u5-founding-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RHETORIC,
          parts: [
            {
              label: "a",
              prompt:
                "What rhetorical strategy does 'crisis demands immediate action' use?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does it differ from Madison's approach?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical strategy identification",
                statement: "How persuasion works.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Appeal to urgency/emotion — 'crisis,' 'immediate' create pressure without detailed reasoning.",
                evidence: "crisis demands",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Madison uses logical argument and definition; modern uses emotional urgency — different persuasion strategies.",
                evidence: "Madison vs modern",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Appeal to urgency/emotion. (b) Madison uses logical reasoning; modern uses emotional urgency — different strategies for different contexts.",
            commonErrors: ["Thinking all rhetoric is the same."],
          },
        },
      ],
    },
    {
      id: "ela9-u5-modern",
      title: "Modern rhetoric and media analysis",
      skill:
        "Analyze rhetorical strategies in contemporary political and media texts.",
      lesson: {
        sections: [
          {
            heading: "Modern rhetorical strategies",
            body: "The border crisis excerpt uses: **appeal to emotion** ('families are suffering,' 'human lives'), **urgency** ('immediate action,' 'cannot wait'), **us vs them** ('while some in Washington play politics'), **repetition** ('more communities... more families... more Americans'), **authority** (implied: 'decisive leadership'). These strategies are effective but also manipulative — they bypass reasoning through emotional pressure. Media literacy means recognizing when emotion substitutes for evidence.",
          },
          {
            heading: "Deconstructing modern rhetoric",
            body: "Ask: What evidence is provided? 'Communities are overwhelmed' — by what measure? 'Families separated' — is this new or ongoing? 'Americans lose faith' — what data supports this? The excerpt offers emotional claims without data. Compare to Madison: he provides reasoning ('diversity of opinions') not just emotion. Modern rhetoric often trades logic for feeling — effective but less rigorous. Recognizing this helps evaluate political claims critically.",
          },
        ],
        keyFormulas: [
          {
            name: "Emotion vs evidence",
            statement: "Modern rhetoric often substitutes feeling for data.",
          },
          {
            name: "Us vs them",
            statement: "Creates in-group/out-group division.",
          },
          {
            name: "Urgency pressure",
            statement: "Bypasses deliberation through time pressure.",
          },
        ],
        workedExample: {
          problem: "What evidence does the border rhetoric provide?",
          solution:
            "None — it offers emotional claims ('families suffering,' 'communities overwhelmed') without data or sources. Persuasion through feeling, not evidence.",
        },
      },
      questions: [
        {
          id: "ela9-u5-modern-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RHETORIC,
          stem: "What is the main rhetorical strategy in the border excerpt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Logical argument" },
              { id: "b", text: "Statistical evidence" },
              { id: "c", text: "Historical comparison" },
              { id: "d", text: "Appeal to emotion and urgency" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Emotional appeal",
                statement: "Persuasion through feelings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Families suffering,' 'immediate action,' 'cannot wait' — emotional urgency, not logical argument.",
                evidence: "crisis demands",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Appeal to emotion and urgency.",
            commonErrors: ["Thinking it's logical — it's emotional."],
          },
        },
        {
          id: "ela9-u5-modern-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RHETORIC,
          stem: "Identify two rhetorical strategies and explain their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical identification",
                statement: "Recognize techniques.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Us vs them: 'while some in Washington play politics' — creates division.",
                evidence: "play politics",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Repetition: 'more communities... more families... more Americans' — builds intensity.",
                evidence: "more communities... more families",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: emotional pressure bypasses rational evaluation — persuasive but manipulative.",
                evidence: "rhetorical effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Us vs them ('Washington plays politics' — division) and repetition ('more X... more Y' — intensity). Effect: emotional pressure bypasses reasoning.",
            commonErrors: [
              "Identifying without explaining manipulative effect.",
            ],
          },
        },
        {
          id: "ela9-u5-modern-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RHETORIC,
          stem: "Analyze how the border excerpt substitutes emotion for evidence. What would make it more rigorous?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence evaluation",
                statement: "What supports claims?",
              },
              {
                kind: "skill",
                name: "Rhetorical improvement",
                statement: "How to strengthen.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Emotional claims without data: 'communities overwhelmed,' 'families separated' — no statistics or sources.",
                evidence: "overwhelmed... separated",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Urgency substitutes for deliberation: 'cannot wait,' 'immediate action' — bypasses reasoning.",
                evidence: "immediate action",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Improvement: add data (border crossing stats, processing times), acknowledge complexity, present counterarguments.",
                evidence: "more rigorous",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Excerpt substitutes emotion for evidence — 'families suffering,' 'communities overwhelmed' lack data. Urgency ('cannot wait') bypasses deliberation. More rigorous: add statistics, acknowledge complexity, present counterarguments, distinguish correlation from causation.",
            commonErrors: ["Criticizing without suggesting improvements."],
          },
        },
        {
          id: "ela9-u5-modern-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RHETORIC,
          parts: [
            { label: "a", prompt: "What is 'us vs them' rhetoric?", marks: 2 },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Us vs them",
                statement: "In-group/out-group division.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Creating division between 'us' (good) and 'them' (bad) to rally support.",
                evidence: "us vs them",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'While some in Washington play politics' — creates 'us' (concerned citizens) vs 'them' (self-serving politicians).",
                evidence: "play politics",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Creating 'us' vs 'them' division. (b) 'Washington plays politics' — creates concerned citizens vs self-serving politicians.",
            commonErrors: ["Not recognizing divisive framing."],
          },
        },
      ],
    },
    {
      id: "ela9-u5-synthesis",
      title: "Synthesis: Historical and Modern Rhetoric",
      skill:
        "Synthesize analysis of foundational and modern rhetorical strategies.",
      lesson: {
        sections: [
          {
            heading: "Comparative rhetorical analysis",
            body: "Madison and modern politicians both use **problem-solution structure** and **appeals to authority** (Madison = founding father; modern = 'decisive leadership'). But they differ fundamentally: Madison argues through **logic and definition** ('diversity of opinions,' 'scheme of representation'); modern rhetoric argues through **emotion and urgency** ('families suffering,' 'cannot wait'). Madison expects readers to reason; modern rhetoric expects readers to feel. Understanding this difference is key to media literacy — not all persuasion is equal.",
          },
          {
            heading: "Why the difference matters",
            body: "Madison's approach invites scrutiny — his claims can be checked against his reasoning. Modern emotional rhetoric often resists scrutiny — 'data speaks for itself' dismisses questions. When evaluating political claims: ask 'is this argument or assertion?' Madison provides argument (premises → conclusion); modern rhetoric often provides assertion (feeling → demand). The ability to distinguish argument from assertion is essential for democratic citizenship.",
          },
        ],
        keyFormulas: [
          {
            name: "Argument vs assertion",
            statement: "Reasoning vs unsupported claim.",
          },
          {
            name: "Logic vs emotion",
            statement: "Madison reasons; modern rhetoric feels.",
          },
          {
            name: "Scrutiny test",
            statement: "Can claims be checked against reasoning?",
          },
        ],
        workedExample: {
          problem:
            "How would you evaluate a modern political claim using Madison's standard?",
          solution:
            "Ask: does the claim provide reasoning? Can premises be checked? Does it acknowledge counterarguments? If only emotion/urgency — it's assertion, not argument.",
        },
      },
      questions: [
        {
          id: "ela9-u5-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FOUNDING,
          stem: "What is the key difference between Madison's and modern rhetoric?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Logic vs emotion" },
              { id: "b", text: "Topic" },
              { id: "c", text: "Audience" },
              { id: "d", text: "Length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhetorical difference",
                statement: "Logic vs emotion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Madison argues through logic; modern rhetoric through emotion — fundamental difference.",
                evidence: "logic vs emotion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Logic vs emotion.",
            commonErrors: ["Focusing on topic instead of strategy."],
          },
        },
        {
          id: "ela9-u5-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RHETORIC,
          stem: "How would Madison evaluate the border rhetoric excerpt?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Historical perspective",
                statement: "Apply founding standards.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Madison would note: emotional appeal but no logical argument or evidence.",
                evidence: "emotional appeal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "He'd ask: what are the premises? Can claims be verified? Are counterarguments addressed?",
                evidence: "premises",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Verdict: assertion, not argument — persuades through feeling rather than reasoning.",
                evidence: "assertion not argument",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Madison would identify it as assertion, not argument — emotional appeal without premises, evidence, or counterarguments. Persuades through feeling, not reasoning.",
            commonErrors: ["Thinking all persuasion is equal."],
          },
        },
        {
          id: "ela9-u5-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: FOUNDING,
          stem: "Write an analysis comparing how Madison and modern politicians use authority and urgency differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative rhetoric",
                statement: "How strategies differ.",
              },
              {
                kind: "skill",
                name: "Authority analysis",
                statement: "Different types of authority.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Madison's authority: founding father + logical argument — 'I mean' definitions, causal reasoning.",
                evidence: "authority",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Modern authority: implied 'decisive leadership' + emotional urgency — 'cannot wait,' 'immediate action.'",
                evidence: "decisive leadership",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Difference: Madison earns authority through reasoning; modern claims authority through position/emotion.",
                evidence: "comparison",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Madison's authority comes from logical argument and precise definition ('by which I mean'); modern authority is claimed through position ('decisive leadership') and emotional urgency ('cannot wait'). Madison invites scrutiny; modern rhetoric often resists it.",
            commonErrors: [
              "Comparing without analyzing how authority is established.",
            ],
          },
        },
        {
          id: "ela9-u5-synthesis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: RHETORIC,
          parts: [
            {
              label: "a",
              prompt: "What is 'argument vs assertion'?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which does the border excerpt use?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument evaluation",
                statement: "Reasoning vs claim.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Argument = premises → conclusion with reasoning; assertion = unsupported claim.",
                evidence: "argument vs assertion",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Border excerpt uses assertion — emotional claims without evidence or reasoning.",
                evidence: "assertion",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Argument = reasoned premises→conclusion; assertion = unsupported claim. (b) Border excerpt uses assertion — emotion without evidence.",
            commonErrors: ["Thinking strong emotion = strong argument."],
          },
        },
      ],
    },
  ],
};
