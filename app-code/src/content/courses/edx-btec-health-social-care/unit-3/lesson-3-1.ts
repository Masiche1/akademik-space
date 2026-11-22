import type { Lesson } from "../../../types.ts";

export const lesson301: Lesson = {
  id: "edxbtechsc-u3-lesson-3-1",
  code: "3-1",
  title: "Values and Person-Centred Care",
  goal: "I CAN explain the core values of health and social care practice including person-centred care, dignity, equality and anti-discriminatory practice.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 3: Principles of Health and Social Care Practice",
  ],
  vocabulary: [
    {
      term: "Person-centred care",
      definition:
        "Care that treats the individual as a unique person, respecting their values, preferences and choices.",
    },
    {
      term: "Dignity",
      definition:
        "Being valued and respected as a human being — privacy, autonomy and worth.",
    },
    {
      term: "Equality",
      definition:
        "Ensuring people are treated fairly and have equal access to opportunities and services.",
    },
    {
      term: "Diversity",
      definition:
        "The range of differences between people — age, culture, disability, sexuality, religion, class.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u3-l1-person",
      title: "Person-Centred Care and Dignity",
      skill:
        "Explain person-centred care and how it promotes dignity and wellbeing.",
      lesson: {
        sections: [
          {
            heading: "Person-centred care",
            body: "Person-centred care (PCC) places the individual's values, preferences, needs and choices at the centre — not the task or the system. Key elements: **respect** for the person, **choice and control**, **partnership working**, and treating people with **dignity**.\n\nModels like the **TIDE** (Time, Individual, Dignity, Environment) or Kitwood's **VIP** (Value, Individualised, Perspective) operationalise it. PCC improves outcomes: better adherence, higher satisfaction, reduced anxiety and improved dignity.",
          },
          {
            heading: "Dignity in practice",
            body: "Dignity means privacy (closing doors, covering bodies), autonomy (asking before touching, offering choices), respect (not speaking about people as if absent), and worth (valuing each person regardless of condition).\n\nDignity violations are common in care: rushed care, talking over residents, ignoring preferences, institutional routines overriding individuality. The **Six Cs** — care, compassion, competence, communication, courage, commitment — underpin dignified practice.",
          },
        ],
        keyFormulas: [
          {
            name: "PCC principles",
            statement: "Respect, choice/control, partnership, dignity.",
          },
          {
            name: "Six Cs",
            statement:
              "Care, compassion, competence, communication, courage, commitment.",
          },
        ],
        workedExample: {
          problem:
            "A resident prefers to wash at 8am rather than the scheduled 7am routine. Apply PCC.",
          solution:
            "Person-centred approach: respect the resident's preference where possible, negotiate timing, avoid institutional routine overriding individual choice — dignity through choice.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u3-l1-person-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Person-centred care means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Treating the individual as a unique person with preferences and choices",
              },
              { id: "b", text: "Family decides everything" },
              { id: "c", text: "Following strict routines" },
              { id: "d", text: "Maximising staff efficiency" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Person-centred care",
                statement:
                  "Individual's values/preferences/choices at the centre.",
              },
            ],
            steps: [
              {
                reasoning: "PCC = individual preferences respected.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Individual as unique person",
            commonErrors: ["System-centred view."],
          },
        },
        {
          id: "edxbtechsc-u3-l1-person-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three examples of how a carer can promote dignity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dignity in practice",
                statement: "Privacy, autonomy, respect, worth.",
              },
            ],
            steps: [
              {
                reasoning: "Privacy example e.g. knocking/closing door.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Autonomy example e.g. offering choices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Respect example e.g. not speaking about person as absent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. privacy during care, choices offered, respectful communication.",
            commonErrors: ["Vague 'be nice'.", "Not practice-specific."],
          },
        },
        {
          id: "edxbtechsc-u3-l1-person-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the tension between person-centred care and efficient institutional routines.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PCC vs efficiency",
                statement:
                  "Individual choice can conflict with resource constraints and routine efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies the conflict clearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Argues PCC improves outcomes despite cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Acknowledges practical constraints.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Balanced evaluative conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "PCC may seem less efficient but improves wellbeing and outcomes; flexibility within systems is achievable.",
            commonErrors: ["One-sided.", "No practical recognition."],
          },
        },
        {
          id: "edxbtechsc-u3-l1-person-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A care home has a strict 7am breakfast routine; residents complain they want to sleep longer.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why the routine might violate person-centred care.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Suggest three ways to make breakfast more person-centred.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Identify one constraint and how it might be managed.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PCC in practice",
                statement:
                  "Routines should flex to individual preferences where safe and feasible.",
              },
            ],
            steps: [
              {
                reasoning: "Routine overrides individual choice.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Sleep preferences ignored — dignity issue.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Institutional convenience over person.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Flexible timing option.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Choice of food/where to eat.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Resident involvement in planning.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Realistic constraint identified.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Constraint managed reasonably.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) routine overrides choice/dignity (b) flexible timing/choice/involvement (c) staffing constraint managed by staggering",
            commonErrors: ["No practical solutions.", "Ignoring constraints."],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u3-l1-equality",
      title: "Equality, Diversity and Anti-Discriminatory Practice",
      skill:
        "Explain equality, diversity and anti-discriminatory practice and apply them to care scenarios.",
      lesson: {
        sections: [
          {
            heading: "Equality and diversity",
            body: "**Equality** means ensuring fair access to opportunities and services — treating people according to their needs rather than identically. The **Equality Act 2010** protects against discrimination based on nine characteristics: age, disability, gender reassignment, marriage/civil partnership, pregnancy/maternity, race, religion/belief, sex, sexual orientation.\n\n**Diversity** is the range of human differences. Valuing diversity means recognising and respecting these differences — not tolerating them, but actively welcoming them as enriching.",
          },
          {
            heading: "Anti-discriminatory practice",
            body: "**Discrimination** can be direct (treating someone less favourably), indirect (policies that disadvantage a group), harassment or victimisation. **Anti-discriminatory practice** actively challenges discrimination — through policies, training, language and behaviour.\n\nIn care, this means: accessible services for disabled people, culturally competent care, challenging stereotypical assumptions, and ensuring equal access regardless of background. The **Care Certificate** and CQC standards require services to promote equality and human rights.",
          },
        ],
        keyFormulas: [
          {
            name: "Equality Act 2010",
            statement:
              "Nine protected characteristics; duties to not discriminate, advance equality, foster good relations.",
          },
          {
            name: "Direct vs indirect discrimination",
            statement:
              "Direct = less favourable treatment; indirect = neutral policy disadvantaging a group.",
          },
        ],
        workedExample: {
          problem:
            "A care home's policy requires all residents to attend a Christian prayer service. Identify the issue.",
          solution:
            "Indirect discrimination — a neutral-looking policy disadvantages residents of other faiths or none; violates Equality Act duty to advance equality and respect diversity.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u3-l1-equality-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The Equality Act 2010 protects against discrimination based on how many characteristics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "7" },
              { id: "c", text: "5" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equality Act 2010",
                statement: "Nine protected characteristics.",
              },
            ],
            steps: [
              {
                reasoning: "Nine protected characteristics under EqA 2010.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 9",
            commonErrors: [
              "Outdated numbers (6 under EqA 2006 race/religion/sex/disability/age/sexual orientation).",
            ],
          },
        },
        {
          id: "edxbtechsc-u3-l1-equality-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between direct and indirect discrimination with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Direct vs indirect discrimination",
                statement:
                  "Direct = less favourable treatment; indirect = neutral policy disadvantaging a protected group.",
              },
            ],
            steps: [
              {
                reasoning: "Direct defined with example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Indirect defined with example.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Direct: refusing service to disabled person. Indirect: 'no beard' policy disadvantaging Sikh men (unless justified).",
            commonErrors: ["Definitions swapped.", "No examples."],
          },
        },
        {
          id: "edxbtechsc-u3-l1-equality-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A care home's recruitment advert says 'must be able to lift heavy loads' without considering reasonable adjustments. Analyse the discrimination issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indirect discrimination in recruitment",
                statement:
                  "Neutral requirements can disadvantage disabled applicants unless justified as essential.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies potential indirect discrimination.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains disadvantage to disabled applicants.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Considers justification/essential requirements.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Recommends reasonable adjustments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Potential indirect discrimination — requirement may exclude disabled candidates unnecessarily; must justify as essential or offer adjustments.",
            commonErrors: [
              "Calls it direct discrimination.",
              "Ignores justification.",
            ],
          },
        },
        {
          id: "edxbtechsc-u3-l1-equality-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A diverse group of residents includes different faiths, cultures and languages.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain how 'valuing diversity' differs from merely 'tolerating differences'.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Suggest three ways a service could demonstrate valuing diversity.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Identify one potential conflict and how to resolve it.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Valuing diversity",
                statement:
                  "Active celebration and inclusion of differences vs passive acceptance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Valuing = active celebration vs tolerance = passive.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Clear distinction made.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Strategy 1 e.g. culturally appropriate food/options.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Strategy 2 e.g. translation/interpreters.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Strategy 3 e.g. diverse staffing/training.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Strategies specific and practical.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Realistic conflict identified.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Resolution approach person-centred.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) active celebration vs passive tolerance (b) food/language/staffing (c) e.g. dietary clash → individual preference",
            commonErrors: [
              "Tolerance and valuing conflated.",
              "Generic strategies.",
            ],
          },
        },
      ],
    },
  ],
};
