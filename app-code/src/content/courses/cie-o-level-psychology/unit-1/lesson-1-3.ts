import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olep-u1-lesson-1-3",
  code: "1-3",
  title: "Humanistic, Biological and Social Approaches",
  goal: "I CAN describe the humanistic, biological and social approaches to psychology.",
  standards: ["2219: Approaches to psychology"],
  vocabulary: [
    {
      term: "Humanistic approach",
      definition: "Approach emphasising free will and self-actualisation.",
    },
    {
      term: "Self-actualisation",
      definition: "Realising one's full potential.",
    },
    {
      term: "Biological approach",
      definition: "Approach studying brain, genes and physiology.",
    },
    {
      term: "Social approach",
      definition: "Approach studying how others influence behaviour.",
    },
    {
      term: "Twin studies",
      definition:
        "Comparing identical/fraternal twins to study nature vs nurture.",
    },
    {
      term: "Social facilitation",
      definition: "Improved performance when others are present.",
    },
  ],
  concepts: [
    {
      id: "olep-u1-humanistic-bio",
      title: "Humanistic and biological approaches",
      skill: "Describe humanistic and biological approaches.",
      lesson: {
        sections: [
          {
            heading: "Humanistic approach",
            body: "Rogers, Maslow: focus on free will, personal growth, self-actualisation. Maslow's hierarchy: physiological → safety → love/belonging → esteem → self-actualisation. Client-centred therapy: unconditional positive regard.",
          },
          {
            heading: "Biological approach",
            body: "Behaviour determined by biology — genes, brain, hormones. Twin studies compare identical (same genes) vs fraternal twins. Case studies of brain damage show localisation. neurotransmitters affect mood.",
          },
          {
            heading: "Nature vs nurture",
            body: "Nature: genetics/biology; Nurture: environment/experience. Twin studies provide evidence — identical twins more similar even when raised apart. Most accept interaction between both.",
          },
        ],
        keyFormulas: [
          {
            name: "Humanistic/bio",
            statement: "Humanistic=free will+growth; Biological=genes+brain.",
          },
        ],
        workedExample: {
          problem: "How do twin studies inform nature vs nurture?",
          solution:
            "Identical twins share 100% genes; if more similar than fraternal twins, suggests genetic influence.",
        },
      },
      questions: [
        {
          id: "olep-u1-hb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is self-actualisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Realising one's full potential" },
              { id: "b", text: "Avoiding punishment" },
              { id: "c", text: "Copying others" },
              { id: "d", text: "Unconscious desire" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Self-actualisation",
                statement: "Realising full potential.",
              },
            ],
            steps: [
              {
                reasoning: "Self-actualisation = full potential.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Realising full potential",
            commonErrors: ["Confusing with basic needs."],
          },
        },
        {
          id: "olep-u1-hb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a twin study?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Twin study",
                statement: "Comparing identical vs fraternal twins.",
              },
            ],
            steps: [
              {
                reasoning: "Compare identical/fraternal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Studies nature vs nurture.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Comparing identical/fraternal twins for nature vs nurture.",
            commonErrors: ["Saying it's about reproduction."],
          },
        },
        {
          id: "olep-u1-hb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Maslow's hierarchy of needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow",
                statement:
                  "Physiological→safety→love→esteem→self-actualisation.",
              },
            ],
            steps: [
              { reasoning: "Lower needs first.", marks: 1, markCode: "AO1" },
              { reasoning: "Higher needs later.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Self-actualisation at top.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear hierarchy.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Physiological→safety→love→esteem→self-actualisation.",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "olep-u1-hb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Humanistic and biological.",
          parts: [
            { label: "a", prompt: "Define self-actualisation.", marks: 1 },
            { label: "b", prompt: "Define twin study.", marks: 2 },
            { label: "c", prompt: "Maslow's hierarchy?", marks: 3 },
            { label: "d", prompt: "Biological approach evidence?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Humanistic/bio",
                statement: "Definitions+theory+evidence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Full potential.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Identical vs fraternal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Nature vs nurture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Five levels.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Genes/brain/hormones.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Twin studies/brain damage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Evidence used.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) self-actualisation (b) twin study (c) Maslow (d) bio evidence",
          },
        },
      ],
    },
    {
      id: "olep-u1-social",
      title: "Social approach and social behaviour",
      skill:
        "Describe the social approach and key social psychological phenomena.",
      lesson: {
        sections: [
          {
            heading: "Social approach",
            body: "How others influence behaviour — conformity, obedience, attitudes, prejudice. Asch conformity, Milgram obedience, social identity theory. Group influence on individual behaviour.",
          },
          {
            heading: "Conformity and obedience",
            body: "Conformity: matching group norms (Asch ~33%). Obedience: following authority (Milgram ~65%). Normative influence: want to be liked. Informational: want to be right.",
          },
          {
            heading: "Prejudice and discrimination",
            body: "Prejudice: negative attitudes toward groups. Discrimination: behaviour based on prejudice. Causes: social learning, realistic conflict, social identity. Can be reduced through contact (Allport's contact hypothesis).",
          },
        ],
        keyFormulas: [
          {
            name: "Social",
            statement:
              "Conformity=group norms; Obedience=authority; Prejudice=attitudes.",
          },
        ],
        workedExample: {
          problem: "How does social identity theory explain prejudice?",
          solution:
            "We favour our in-group to boost self-esteem — out-groups become targets for prejudice.",
        },
      },
      questions: [
        {
          id: "olep-u1-so-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is conformity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Matching group norms" },
              { id: "b", text: "Following orders" },
              { id: "c", text: "Copying exactly" },
              { id: "d", text: "Disagreeing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity",
                statement: "Match group norms.",
              },
            ],
            steps: [
              {
                reasoning: "Conformity = group norms.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Matching group norms",
            commonErrors: ["Confusing with obedience."],
          },
        },
        {
          id: "olep-u1-so-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What did Asch's conformity study find?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asch",
                statement: "~33% conformity on clear wrong answers.",
              },
            ],
            steps: [
              { reasoning: "~33% conformed.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Even when obviously wrong.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "~33% conformity on clear wrong answers.",
            commonErrors: ["Saying 100%."],
          },
        },
        {
          id: "olep-u1-so-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between prejudice and discrimination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prejudice vs discrimination",
                statement: "Attitudes vs behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Prejudice = attitudes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Discrimination = behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Can exist without each other.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Prejudice=attitudes; discrimination=behaviour.",
            commonErrors: ["Using interchangeably."],
          },
        },
        {
          id: "olep-u1-so-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Social approach.",
          parts: [
            { label: "a", prompt: "Define conformity.", marks: 1 },
            { label: "b", prompt: "Asch finding?", marks: 2 },
            { label: "c", prompt: "Prejudice vs discrimination?", marks: 3 },
            { label: "d", prompt: "How reduce prejudice?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social",
                statement: "Conformity+Asch+prejudice+reduction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Group norms.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "~33%.", marks: 1, markCode: "AO1" },
              {
                part: "b",
                reasoning: "Wrong answers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Attitudes vs behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Distinction clear.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Contact hypothesis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Equal status.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cooperation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) conformity (b) Asch (c) prejudice/discrimination (d) reduction",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u1-1-3-notes",
      title: "Humanistic, biological, social — notes",
      summary:
        "Humanistic (free will), biological (genes), social (conformity, prejudice).",
      sections: [
        {
          heading: "Approaches",
          body: "Humanistic=self-actualisation; biological=genes+brain; social=group influence.",
        },
        {
          heading: "Social",
          body: "Conformity=group norms; obedience=authority; prejudice=attitudes; discrimination=behaviour.",
        },
      ],
    },
  ],
};
