import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edxbtechsc-u1-lesson-1-3",
  code: "1-3",
  title: "Developmental Domains Across the Lifespan",
  goal: "I CAN describe physical, cognitive, social and emotional development at each major life stage and identify typical changes.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 1: Human Lifespan and Development",
  ],
  vocabulary: [
    {
      term: "Physical development",
      definition:
        "Changes in body size, shape, motor skills and biological systems.",
    },
    {
      term: "Cognitive development",
      definition:
        "Changes in thinking, memory, language, problem-solving and knowledge.",
    },
    {
      term: "Social development",
      definition:
        "Changes in relationships, peer interaction, social roles and community participation.",
    },
    {
      term: "Emotional development",
      definition:
        "Changes in feelings, self-awareness, self-regulation and emotional expression.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u1-l3-childhood",
      title: "Development in Childhood",
      skill:
        "Describe the four developmental domains from infancy through adolescence.",
      lesson: {
        sections: [
          {
            heading: "Infancy and early childhood",
            body: "**Physical:** rapid growth, motor milestones (rolling→sitting→walking→running), fine motor skills developing. **Cognitive:** sensorimotor learning → pre-operational language explosion; imagination and egocentric thinking. **Social:** attachment, parallel then cooperative play, beginning friendships. **Emotional:** stranger anxiety, separation anxiety, emerging self-awareness and self-esteem.\n\nBy early childhood, children develop theory of mind (understanding others have different thoughts), gender identity awareness, and moral foundations (rules, fairness).",
          },
          {
            heading: "Middle childhood and adolescence",
            body: "**Middle childhood (8–11):** physical refinement and puberty onset for some; concrete logical thinking; peer group importance grows; industry vs inferiority (Erikson) — developing competence; moral reasoning becomes reciprocal.\n\n**Adolescence (12–18):** puberty transforms the body; formal operational thinking enables abstract reasoning and future planning; identity vs role confusion (Erikson) dominates; peer pressure peaks; emotional volatility from hormonal and brain changes (prefrontal cortex matures last, ~mid-20s).",
          },
        ],
        keyFormulas: [
          {
            name: "Erikson stages",
            statement:
              "Trust vs mistrust (infancy), autonomy vs shame (toddler), initiative vs guilt (preschool), industry vs inferiority (school), identity vs role confusion (adolescence).",
          },
          {
            name: "Four domains",
            statement:
              "Physical, cognitive, social, emotional — development is multi-dimensional.",
          },
        ],
        workedExample: {
          problem:
            "An 8-year-old wants to master a skill to feel 'good at something'. Which Erikson stage and domain?",
          solution:
            "Industry vs inferiority stage — the child seeks competence and recognition through achievement; relates to cognitive and social-emotional domains.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u1-l3-childhood-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Erikson's 'industry vs inferiority' stage corresponds to which age range?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12–18 years" },
              { id: "b", text: "7–11 years" },
              { id: "c", text: "0–2 years" },
              { id: "d", text: "3–6 years" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Erikson stages",
                statement:
                  "Industry vs inferiority = school-age years (~7–11).",
              },
            ],
            steps: [
              {
                reasoning: "School age is industry vs inferiority.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 7–11 years",
            commonErrors: ["Confusing with identity stage."],
          },
        },
        {
          id: "edxbtechsc-u1-l3-childhood-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how social development changes between early childhood (3–7) and adolescence (12–18).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social development trajectory",
                statement:
                  "Early childhood: family-centred play; adolescence: peer/identity-focused relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Early childhood: parallel/cooperative play, family bonds, imaginary friends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adolescence: peer groups, identity exploration, romantic interest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear contrast with developmental reasoning.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Early childhood: family play and imagination; adolescence: peer identity, intimacy and independence.",
            commonErrors: ["One stage only.", "No contrast."],
          },
        },
        {
          id: "edxbtechsc-u1-l3-childhood-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A teacher notices a 10-year-old struggling with abstract questions but excelling at concrete tasks. Explain this using cognitive development theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Concrete vs formal operations",
                statement:
                  "Concrete operational children reason logically about physical objects but not abstract concepts.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies child as concrete operational stage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explains concrete tasks suit their logical abilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explains abstract failure — formal operations not yet reached.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Notes this is normal, not a deficit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Normal concrete-operational development — abstract reasoning emerges ~11-12+; teach with concrete examples.",
            commonErrors: ["Labeling as learning difficulty.", "Wrong stage."],
          },
        },
        {
          id: "edxbtechsc-u1-l3-childhood-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school designs its curriculum around the four developmental domains.",
          parts: [
            {
              label: "a",
              prompt:
                "Give one example of an activity targeting each domain for 10-year-olds.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Explain why a multi-domain approach is better than focusing on one domain.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Holistic development",
                statement:
                  "Domains interact — physical activity supports cognition, social play builds emotional skills.",
              },
            ],
            steps: [
              {
                reasoning: "Physical activity example e.g. sport/PE.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Cognitive activity example e.g. problem-solving tasks.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Social activity example e.g. group projects.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Emotional activity example e.g. circle time/reflection.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Domains interact — example given.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Whole-child development argument.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Skills transfer across domains.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Clear evaluative conclusion.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) PE, problem-solving, group work, reflection (b) domains interact and support whole-child development",
            commonErrors: [
              "Activities not domain-matched.",
              "No interaction argument.",
            ],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u1-l3-adult",
      title: "Development in Adulthood and Older Age",
      skill:
        "Describe the changes of adulthood and older age and the psychosocial tasks of each stage.",
      lesson: {
        sections: [
          {
            heading: "Early and middle adulthood",
            body: "**Early adulthood (18–40):** physical peak; career establishment; forming intimate partnerships; possibly parenthood (generativity begins). Erikson: **intimacy vs isolation** — forming deep relationships vs loneliness.\n\n**Middle adulthood (41–64):** physical decline begins subtly (vision, metabolism, stamina); career peak or transition; 'midlife' reflections; **generativity vs stagnation** — contributing to next generation vs self-absorption; children leaving home (empty nest) or caring for ageing parents (sandwich generation).",
          },
          {
            heading: "Older adulthood",
            body: "**Older adulthood (65+):** retirement transition; physical changes — reduced mobility, sensory decline, chronic conditions, osteoporosis; cognitive changes — processing speed slows but crystallised knowledge persists; social changes — bereavement, shrinking networks, grandparenting.\n\nErikson's final stage: **integrity vs despair** — reviewing life with satisfaction vs regret. Successful ageing involves maintaining social connections, physical activity, cognitive engagement and sense of purpose. Socioemotional selectivity theory suggests older adults prioritise emotionally meaningful relationships.",
          },
        ],
        keyFormulas: [
          {
            name: "Erikson adult stages",
            statement:
              "Intimacy vs isolation (young adult), generativity vs stagnation (middle), integrity vs despair (older).",
          },
          {
            name: "Successful ageing",
            statement:
              "Physical activity, social connection, cognitive engagement, purpose.",
          },
        ],
        workedExample: {
          problem:
            "A 70-year-old reflects on their life with satisfaction and mentors grandchildren. Which Erikson stage outcome?",
          solution:
            "Integrity vs despair — the positive resolution is integrity: accepting one's life as meaningful and complete, expressed through generativity/mentoring.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u1-l3-adult-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Erikson's 'generativity vs stagnation' stage typically covers:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "41–64 years" },
              { id: "b", text: "26–40 years" },
              { id: "c", text: "18–25 years" },
              { id: "d", text: "65+ years" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Generativity stage",
                statement:
                  "Middle adulthood (~41–64): contributing to future generations.",
              },
            ],
            steps: [
              {
                reasoning: "Middle adulthood = generativity vs stagnation.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 41–64 years",
            commonErrors: ["Confusing with integrity stage."],
          },
        },
        {
          id: "edxbtechsc-u1-l3-adult-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two physical changes typical of older adulthood (65+).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Physical ageing",
                statement:
                  "Reduced mobility, sensory decline, chronic conditions, bone/muscle loss.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Musculoskeletal: osteoporosis, sarcopenia, reduced mobility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sensory/systemic: hearing/vision loss, chronic disease prevalence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Accurate age-appropriate description.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. reduced mobility, osteoporosis, hearing/vision decline, chronic conditions.",
            commonErrors: [
              "Decline framed as universal/inevitable.",
              "Vague 'getting old'.",
            ],
          },
        },
        {
          id: "edxbtechsc-u1-l3-adult-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the 'sandwich generation' and its developmental significance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sandwich generation",
                statement:
                  "Middle-aged adults caring for both dependent children and ageing parents.",
              },
            ],
            steps: [
              {
                reasoning: "Correct definition: dual caring responsibilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Developmental significance: competing generativity demands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stress/role-strain implications.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Links to middle-adulthood stage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Adults simultaneously raising children and caring for parents — strains generativity resources and wellbeing.",
            commonErrors: ["Definition only.", "No developmental link."],
          },
        },
        {
          id: "edxbtechsc-u1-l3-adult-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A care provider wants to support residents' psychosocial wellbeing in a residential home.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two Erikson-relevant tasks for older residents.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Suggest three interventions supporting successful ageing.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Evaluate the importance of 'integrity' in care practice.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Psychosocial care",
                statement:
                  "Integrity, generativity and social connection underpin wellbeing in older age.",
              },
            ],
            steps: [
              {
                reasoning: "Integrity vs despair task identified.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Generativity/legacy task identified.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Intervention 1 e.g. life-review/reminiscence.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Intervention 2 e.g. social activities/peer contact.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Intervention 3 e.g. meaningful roles/mentoring.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Interventions linked to theory.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Integrity concept correctly explained.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Evaluative statement about care relevance.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) integrity, generativity (b) reminiscence, social activities, meaningful roles (c) integrity = life satisfaction, core to person-centred care",
            commonErrors: [
              "Interventions not theory-linked.",
              "Generic 'keep them busy'.",
            ],
          },
        },
      ],
    },
  ],
};
