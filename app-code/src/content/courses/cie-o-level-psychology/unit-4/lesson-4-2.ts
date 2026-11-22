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
                text: "Prejudice is positive, discrimination negative",
              },
              { id: "b", text: "They are identical" },
              {
                id: "c",
                text: "Prejudice is conscious, discrimination is not",
              },
              {
                id: "d",
                text: "Prejudice is attitude, discrimination is behaviour",
              },
            ],
            correctChoiceId: "d",
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
        {
          id: "olep-u4-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A stereotype is best defined as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a law against a group" },
              { id: "b", text: "an overgeneralised belief about a group" },
              { id: "c", text: "an unfair treatment of a person" },
              { id: "d", text: "a personal grudge" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stereotype",
                statement: "Overgeneralised belief about group.",
              },
            ],
            steps: [
              {
                reasoning: "Stereotype = cognitive overgeneralisation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Overgeneralised belief about a group",
            commonErrors: ["Confusing with discrimination."],
          },
        },
        {
          id: "olep-u4-pr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Scapegoat theory explains prejudice by suggesting that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "children imitate prejudiced parents" },
              { id: "b", text: "groups always cooperate" },
              { id: "c", text: "prejudice is genetically inherited" },
              { id: "d", text: "frustrated or threatened people blame an out-group for their problems" },
            ],
            correctChoiceId: "d",
          },
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
                reasoning: "Scapegoating = displaced blame.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Frustrated people blame an out-group",
            commonErrors: ["Confusing with realistic conflict."],
          },
        },
        {
          id: "olep-u4-pr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Realistic conflict theory states that prejudice increases when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "groups share superordinate goals" },
              { id: "b", text: "contact between groups increases" },
              { id: "c", text: "authority figures intervene" },
              { id: "d", text: "groups compete for limited resources" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Realistic conflict",
                statement: "Competition for resources → hostility.",
              },
            ],
            steps: [
              {
                reasoning: "Resource competition breeds prejudice.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Groups compete for limited resources",
            commonErrors: ["Confusing with contact hypothesis."],
          },
        },
        {
          id: "olep-u4-pr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "According to social learning explanations, prejudice can be acquired when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "genes directly code prejudice" },
              { id: "b", text: "groups are forced to compete" },
              { id: "c", text: "children observe and imitate prejudiced attitudes from family or media" },
              { id: "d", text: "authorities order discrimination" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social learning",
                statement: "Prejudice learned by observation.",
              },
            ],
            steps: [
              {
                reasoning: "Children absorb attitudes from models.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Observing and imitating prejudiced models",
            commonErrors: ["Confusing with scapegoat theory."],
          },
        },
        {
          id: "olep-u4-pr-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In Sherif's Robbers Cave study, hostility between two boys' groups was reduced when the groups...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "received harsher punishment" },
              { id: "b", text: "competed in more tournaments" },
              { id: "c", text: "were kept completely separate" },
              { id: "d", text: "worked together on superordinate goals requiring cooperation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Robbers Cave",
                statement: "Superordinate goals reduce hostility.",
              },
            ],
            steps: [
              {
                reasoning: "Cooperation on shared goals reduced conflict.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Supports contact/cooperation reducing prejudice.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Worked together on superordinate goals",
            commonErrors: ["Saying competition reduced hostility."],
          },
        },
        {
          id: "olep-u4-pr-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of $60$ adults, $36$ blamed a minority group for local economic problems. Calculate the percentage blaming the minority.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(blaming / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "36 / 60 = 0.6.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 60%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "olep-u4-pr-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a Robbers Cave-style measure, mean hostility ratings between groups fell from $8.0$ to $3.0$ after cooperative tasks. Calculate the reduction in hostility rating points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Reduction",
                statement: "initial hostility - final hostility.",
              },
            ],
            steps: [
              {
                reasoning: "8.0 - 3.0 = 5 points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows cooperation reduces hostility.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "olep-u4-pr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "On an Implicit Association Test, $45$ out of $60$ participants showed an implicit bias toward one group. Calculate the percentage showing implicit bias.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(biased / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "45 / 60 = 0.75.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "IAT reveals unconscious bias.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "olep-u4-pr-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "According to the contact hypothesis, prejudice falls when groups have equal-status contact. In a programme of $50$ participants, $30$ were from the out-group. Calculate the percentage from the out-group and state one condition for success.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(out-group / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "30 / 50 = 0.6.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Equal status/cooperation required.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Percentage = 60%.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "olep-u4-pr-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between prejudice, stereotype and discrimination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prejudice terms",
                statement: "Attitude/belief/behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Prejudice=negative attitude; stereotype=overgeneralised belief.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Discrimination=unfair behaviour based on prejudice.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Prejudice=attitude; stereotype=belief; discrimination=behaviour.",
            commonErrors: ["Using terms interchangeably."],
          },
        },
        {
          id: "olep-u4-pr-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain realistic conflict theory as a cause of prejudice, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Realistic conflict",
                statement: "Competition → hostility.",
              },
            ],
            steps: [
              {
                reasoning: "Groups compete for limited resources.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Competition creates hostility/out-group derogation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example e.g. jobs, housing, Robbers Cave.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cooperation on shared goals reduces it.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Prejudice arises when groups compete for limited resources; cooperation on superordinate goals reduces it.",
            commonErrors: ["No example given."],
          },
        },
        {
          id: "olep-u4-pr-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prejudice.",
          parts: [
            { label: "a", prompt: "Define prejudice.", marks: 1 },
            { label: "b", prompt: "Two causes of prejudice?", marks: 2 },
            { label: "c", prompt: "What was the Robbers Cave study?", marks: 2 },
            { label: "d", prompt: "What is the contact hypothesis?", marks: 2 },
            { label: "e", prompt: "One way prejudice can be measured?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prejudice",
                statement: "Definition+causes+study+reduction+measurement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Negative attitude toward group.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two: scapegoat, realistic conflict, social learning, social identity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Sherif's boys' camp study.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Hostility reduced via superordinate goals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Equal-status contact reduces prejudice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Conditions: cooperation/shared goals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "IAT/questionnaires/observed discrimination.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "How it reveals bias.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) definition (b) causes (c) Robbers Cave (d) contact (e) measurement",
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
              { id: "a", text: "Anonymity" },
              { id: "b", text: "Unanimous group agreement" },
              { id: "c", text: "One dissenter" },
              { id: "d", text: "Task clarity" },
            ],
            correctChoiceId: "b",
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
        {
          id: "olep-u4-si-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does group size affect conformity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group size has no effect" },
              { id: "b", text: "Conformity decreases with size" },
              { id: "c", text: "Conformity always increases with size" },
              { id: "d", text: "Conformity increases up to about 3-4 members then plateaus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Group size",
                statement: "Conformity plateaus ~3-4.",
              },
            ],
            steps: [
              {
                reasoning: "Larger groups → more conformity up to plateau.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Increases then plateaus at ~3-4",
            commonErrors: ["Saying it keeps rising forever."],
          },
        },
        {
          id: "olep-u4-si-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does unanimity affect conformity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unanimity has no effect" },
              { id: "b", text: "Unanimity reduces conformity" },
              { id: "c", text: "Disagreement increases conformity" },
              { id: "d", text: "A unanimous group produces more conformity; one dissenter reduces it dramatically" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unanimity",
                statement: "One dissenter breaks conformity.",
              },
            ],
            steps: [
              {
                reasoning: "Unanimous majority maximises conformity.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Unanimity increases; dissenter reduces",
            commonErrors: ["Ignoring the dissenter effect."],
          },
        },
        {
          id: "olep-u4-si-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does task difficulty affect conformity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Difficulty has no effect" },
              { id: "b", text: "Conformity only happens on easy tasks" },
              { id: "c", text: "Easy tasks produce more conformity" },
              { id: "d", text: "Ambiguous/difficult tasks produce more conformity; clear tasks less" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Task difficulty",
                statement: "Ambiguity → more informational conformity.",
              },
            ],
            steps: [
              {
                reasoning: "Unsure → rely on group (Sherif).",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Ambiguous tasks → more conformity",
            commonErrors: ["Reversing the effect."],
          },
        },
        {
          id: "olep-u4-si-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which factor increases obedience in Milgram-style studies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The participant questioning authority" },
              { id: "b", text: "The setting being a run-down office" },
              { id: "c", text: "The learner being far away and unseen" },
              { id: "d", text: "The authority figure being physically present and wearing a uniform" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Obedience factors",
                statement: "Legitimacy+proximity increase obedience.",
              },
            ],
            steps: [
              {
                reasoning: "Uniform/presence = legitimacy cues.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Authority present + uniform",
            commonErrors: ["Choosing factors that reduce obedience."],
          },
        },
        {
          id: "olep-u4-si-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does the presence of even one ally who disagrees reduce conformity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It breaks the group's unanimity, giving social support to dissent" },
              { id: "b", text: "It increases group size" },
              { id: "c", text: "It removes all social pressure" },
              { id: "d", text: "It makes the task harder" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ally effect",
                statement: "Dissenter breaks unanimity.",
              },
            ],
            steps: [
              {
                reasoning: "Unanimity broken → less pressure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Provides social support for dissent.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Breaks unanimity, supports dissent",
            commonErrors: ["Saying it increases pressure."],
          },
        },
        {
          id: "olep-u4-si-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Conformity rates were $28\\%$ with a majority of $1$, $35\\%$ with a majority of $3$ and $36\\%$ with a majority of $5$. Calculate the increase from majority of $1$ to majority of $5$, in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Increase",
                statement: "largest majority rate - smallest majority rate.",
              },
            ],
            steps: [
              {
                reasoning: "36 - 28 = 8 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Plateau after ~3-4 members.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "8 percentage points",
          },
        },
        {
          id: "olep-u4-si-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a Milgram variation, obedience was $65\\%$ when the learner was in the same room and $20\\%$ when the learner was remote. Calculate the ratio of obedience in the two conditions.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratio",
                statement: "same-room rate / remote rate.",
              },
            ],
            steps: [
              {
                reasoning: "65 / 20 = 3.25.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Proximity strongly affects obedience.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "3.25",
          },
        },
        {
          id: "olep-u4-si-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Conformity was $37\\%$ with a unanimous group but fell to $5\\%$ when one ally dissented. Calculate the drop in conformity, in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 32, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Drop",
                statement: "unanimous rate - dissent rate.",
              },
            ],
            steps: [
              {
                reasoning: "37 - 5 = 32 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows power of a single dissenter.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "32 percentage points",
          },
        },
        {
          id: "olep-u4-si-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Obedience was $65\\%$ when the experimenter wore a uniform and $30\\%$ in civilian clothes. Calculate the difference in obedience rate and state what it shows.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 35, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Difference",
                statement: "uniform rate - civilian rate.",
              },
            ],
            steps: [
              {
                reasoning: "65 - 30 = 35 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Uniform = legitimacy cue → more obedience.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 35 percentage points.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "35 percentage points",
          },
        },
        {
          id: "olep-u4-si-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two factors that affect conformity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity factors",
                statement: "Size, unanimity, difficulty, culture.",
              },
            ],
            steps: [
              {
                reasoning: "Any two factors named.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Correctly identified.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Group size, unanimity, task difficulty, cultural factors.",
            commonErrors: ["Listing obedience factors only."],
          },
        },
        {
          id: "olep-u4-si-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two factors that increase obedience to authority.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Obedience factors",
                statement: "Proximity, legitimacy, escalation, setting.",
              },
            ],
            steps: [
              {
                reasoning: "First factor named (e.g. proximity of learner).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "How it increases obedience.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Second factor named (e.g. uniform/authority presence).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "How it increases obedience.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Any two explained, e.g. proximity to victim, authority legitimacy (uniform), authority presence, gradual escalation, legitimate setting.",
            commonErrors: ["Naming without explaining."],
          },
        },
        {
          id: "olep-u4-si-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Factors in social influence.",
          parts: [
            { label: "a", prompt: "Two conformity factors?", marks: 2 },
            { label: "b", prompt: "Two obedience factors?", marks: 2 },
            { label: "c", prompt: "How does a dissenter reduce conformity?", marks: 2 },
            { label: "d", prompt: "How does questioning authority reduce obedience?", marks: 1 },
            { label: "e", prompt: "One disobedient-model effect?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social influence",
                statement: "Factors+reduction+models.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any two: size, unanimity, difficulty, culture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two: proximity, legitimacy, presence, escalation, setting.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Breaks unanimity → less pressure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Provides social support for dissent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Challenges legitimacy → less obedience.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Models who disobey reduce obedience.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Social learning of resistance.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) conformity factors (b) obedience factors (c) dissenter (d) questioning (e) models",
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
