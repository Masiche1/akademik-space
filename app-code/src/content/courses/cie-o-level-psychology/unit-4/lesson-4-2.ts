import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "olep-u4-lesson-4-2",
  code: "4-2",
  title: "Prejudice and Discrimination",
  goal: "I CAN explain prejudice, discrimination and theories of intergroup conflict.",
  standards: ["2219: Social psychology"],
  vocabulary: [
    {
      term: "Prejudice",
      definition: "Negative attitude/judgment about a group before evidence.",
    },
    {
      term: "Discrimination",
      definition: "Unfair treatment based on prejudice.",
    },
    { term: "Stereotype", definition: "Oversimplified belief about a group." },
    {
      term: "Scapegoat theory",
      definition: "Blaming out-groups for frustration/frustration.",
    },
    {
      term: "Realistic conflict theory",
      definition: "Conflict arises from competition for resources.",
    },
    {
      term: "Contact hypothesis",
      definition: "Prejudice reduced through equal-status contact.",
    },
  ],
  concepts: [
    {
      id: "olep-u4-prejudice",
      title: "Prejudice and Discrimination",
      skill: "Define prejudice/discrimination and describe their causes.",
      lesson: {
        sections: [
          {
            heading: "Definitions",
            body: "Prejudice: preconceived negative attitude toward group — cognitive (stereotype), affective (emotion), behavioural (discrimination). Discrimination: actual unfair treatment. Stereotypes: overgeneralised beliefs ('all X are Y'). Can be positive but usually negative.",
          },
          {
            heading: "Causes of prejudice",
            body: "Scapegoat theory: frustrated people blame out-groups (Nazis blamed Jews for Germany's problems). Realistic conflict: groups compete for limited resources → hostility (Sherif's Robbers Cave). Social learning: children absorb prejudiced attitudes from family/media. Social identity: in-group favouritism, out-group derogation.",
          },
          {
            heading: "Examples",
            body: "Racism, sexism, ageism, homophobia. Robbers Cave experiment (Sherif 1954) — two groups of boys became hostile, then cooperated on superordinate goals. Implicit Association Test reveals unconscious biases.",
          },
        ],
        keyFormulas: [
          {
            name: "Prejudice",
            statement:
              "Prejudice=attitude; discrimination=behaviour; causes=scapegoating/conflict/learning.",
          },
        ],
        workedExample: {
          problem: "How did the Robbers Cave study reduce prejudice?",
          solution:
            "Two hostile boys' groups cooperated when given superordinate goals requiring joint effort — contact hypothesis supported.",
        },
      },
      questions: [
        {
          id: "olep-u4-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between prejudice and discrimination?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Prejudice is attitude, discrimination is behaviour",
              },
              { id: "b", text: "They are identical" },
              {
                id: "c",
                text: "Prejudice is conscious, discrimination is not",
              },
              {
                id: "d",
                text: "Prejudice is positive, discrimination negative",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prejudice/discrimination",
                statement: "Attitude vs behaviour.",
              },
            ],
            steps: [
              { reasoning: "Attitude vs action.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer:
              "**(a)** Prejudice is attitude, discrimination is behaviour",
            commonErrors: ["Using interchangeably."],
          },
        },
        {
          id: "olep-u4-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the scapegoat theory of prejudice?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scapegoat theory",
                statement: "Blame out-group for frustration.",
              },
            ],
            steps: [
              {
                reasoning: "Frustrated people blame others.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Example: Nazis/Jews.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "People blame an out-group for their own frustrations/problems — e.g., Nazis blamed Jews for Germany's failures.",
            commonErrors: ["Vague definition."],
          },
        },
        {
          id: "olep-u4-pr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What did the Robbers Cave experiment show?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Robbers Cave",
                statement:
                  "Competition→hostility; cooperation→reduced prejudice.",
              },
            ],
            steps: [
              {
                reasoning: "Two boys' groups became hostile.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Competition over resources caused it.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Superordinate goals reduced hostility.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Sherif's study: boys' groups became hostile through competition, then cooperated when forced to work together on superordinate goals — contact reduces prejudice.",
            commonErrors: ["Only describing setup."],
          },
        },
        {
          id: "olep-u4-pr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prejudice.",
          parts: [
            { label: "a", prompt: "Prejudice vs discrimination?", marks: 2 },
            { label: "b", prompt: "Causes?", marks: 3 },
            { label: "c", prompt: "Robbers Cave?", marks: 2 },
            { label: "d", prompt: "Reducing prejudice?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prejudice",
                statement: "Definitions+causes+study+reduction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Attitude vs behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Scapegoating.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Realistic conflict.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Social learning/identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Competition→hostility.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Cooperation reduced it.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Contact hypothesis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Equal status/superordinate goals.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) definitions (b) causes (c) study (d) reduction",
          },
        },
      ],
    },
    {
      id: "olep-u4-social-influence",
      title: "Social Influence Factors",
      skill: "Describe factors affecting conformity and obedience.",
      lesson: {
        sections: [
          {
            heading: "Factors in conformity",
            body: "Group size: larger groups → more conformity up to ~3-4 then plateau. Unanimity: one dissenter reduces conformity dramatically. Difficulty of task: ambiguous tasks → more conformity. Cultural factors: collectivist cultures conform more. Gender: mixed results.",
          },
          {
            heading: "Factors in obedience",
            body: "Proximity: learner in same room → more obedience than remote. Authority legitimacy: uniform/scientist → more obedience. Authority proximity: authority figure present → more obedience. Gradual escalation: foot-in-door → more obedience. Setting legitimacy: university vs run-down office.",
          },
          {
            heading: "Resistance",
            body: "Conformity reduced by: ally who disagrees (one dissenter), anonymity, task clarity. Obedience reduced by: proximity to victim, questioning authority legitimacy, personal responsibility, disobedient models (role models who resist).",
          },
        ],
        keyFormulas: [
          {
            name: "Influence factors",
            statement:
              "Conformity: size/unanimity/difficulty; Obedience: proximity/authority/legitimacy.",
          },
        ],
        workedExample: {
          problem: "How does one dissenter reduce conformity?",
          solution:
            "In Asch's variations, a confederate who disagreed broke unanimity — conformity dropped from ~37% to ~5%.",
        },
      },
      questions: [
        {
          id: "olep-u4-si-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor increases conformity most?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unanimous group agreement" },
              { id: "b", text: "One dissenter" },
              { id: "c", text: "Task clarity" },
              { id: "d", text: "Anonymity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity factors",
                statement: "Unanimity increases conformity.",
              },
            ],
            steps: [
              {
                reasoning: "Unanimity = more conformity.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Unanimous group agreement",
            commonErrors: ["Choosing dissenter."],
          },
        },
        {
          id: "olep-u4-si-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two factors that increase obedience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obedience factors",
                statement: "Proximity/legitimacy/authority presence.",
              },
            ],
            steps: [
              { reasoning: "Any two factors.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Proximity of learner, legitimacy of authority, uniform, authority presence, gradual escalation.",
            commonErrors: ["Only one factor."],
          },
        },
        {
          id: "olep-u4-si-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a dissenter reduce conformity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dissenter effect",
                statement: "Breaks unanimity → less conformity.",
              },
            ],
            steps: [
              {
                reasoning: "One dissenter breaks unanimity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Others feel less pressure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Conformity drops sharply.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "A dissenter breaks group unanimity — removes pressure to conform, showing others it's acceptable to disagree.",
            commonErrors: ["Vague answer."],
          },
        },
        {
          id: "olep-u4-si-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Social influence factors.",
          parts: [
            { label: "a", prompt: "Conformity factors?", marks: 3 },
            { label: "b", prompt: "Obedience factors?", marks: 3 },
            { label: "c", prompt: "Reducing conformity?", marks: 2 },
            { label: "d", prompt: "Reducing obedience?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Factors",
                statement: "Conformity+obedience+reduction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Group size/unanimity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Task difficulty.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "Culture.", marks: 1, markCode: "AO2" },
              {
                part: "b",
                reasoning: "Proximity/legitimacy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Uniform/presence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Gradual escalation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Dissenter/anonymity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Task clarity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Proximity to victim/doubting authority.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) conformity (b) obedience (c) reduce conformity (d) reduce obedience",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u4-4-2-notes",
      title: "Prejudice and influence — notes",
      summary:
        "Prejudice/discrimination, causes, Robbers Cave; conformity/obedience factors.",
      sections: [
        {
          heading: "Prejudice",
          body: "Attitude vs behaviour; scapegoating/realistic conflict/learning; Robbers Cave=cooperation reduces.",
        },
        {
          heading: "Factors",
          body: "Conformity: size/unanimity/difficulty; Obedience: proximity/legitimacy/presence; dissenter reduces conformity.",
        },
      ],
    },
  ],
};
