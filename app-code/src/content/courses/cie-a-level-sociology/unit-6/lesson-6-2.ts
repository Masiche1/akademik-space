import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "asoc-u6-lesson-6-2",
  code: "6-2",
  title: "Media Representations",
  goal: "I CAN describe how media represents class, gender, ethnicity and age groups.",
  standards: ["9699 P4: Media representations"],
  vocabulary: [
    {
      term: "Representation",
      definition: "How media portrays groups and issues.",
    },
    {
      term: "Stereotype",
      definition: "Oversimplified fixed image of a group.",
    },
    {
      term: "Moral panic",
      definition: "Exaggerated public fear about a social issue.",
    },
    {
      term: "Gender ideology",
      definition: "Media reinforcing traditional gender roles.",
    },
    {
      term: "Racial representation",
      definition: "How ethnic groups are portrayed.",
    },
    {
      term: "Ageism",
      definition: "Discrimination or stereotyping based on age.",
    },
  ],
  concepts: [
    {
      id: "asoc-u6-representations",
      title: "Representations of class, gender and ethnicity",
      skill: "Describe media representations of social groups.",
      lesson: {
        sections: [
          {
            heading: "Class representations",
            body: "Working class often portrayed negatively — benefit scroungers, criminals, 'chavs'. Middle/upper class portrayed positively — professionals, authority figures. Naturalises class stereotypes.",
          },
          {
            heading: "Gender representations",
            body: "Women underrepresented in news/leadership roles; sexualised in advertising. Gender stereotypes persist — women as carers/emotional, men as rational/strong. Some improvement but slow progress.",
          },
          {
            heading: "Ethnicity representations",
            body: "Minority groups often stereotyped or underrepresented. News focuses on crime/problems linked to ethnic groups; positive representation rare. 'New racism' — subtle, coded representations.",
          },
        ],
        keyFormulas: [
          {
            name: "Representations",
            statement:
              "Class=negative working class; Gender=stereotypes; Ethnicity=underrepresented/stereotyped.",
          },
        ],
        workedExample: {
          problem: "How does media represent working-class people?",
          solution:
            "Often negatively — as benefit scroungers or criminals — reinforcing class stereotypes.",
        },
      },
      questions: [
        {
          id: "asoc-u6-rep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stereotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oversimplified fixed image of a group" },
              { id: "b", text: "Accurate description" },
              { id: "c", text: "Personal opinion" },
              { id: "d", text: "Statistical average" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stereotype",
                statement: "Oversimplified image.",
              },
            ],
            steps: [
              {
                reasoning: "Stereotype = fixed image.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Oversimplified fixed image of a group",
            commonErrors: ["Thinking it's accurate."],
          },
        },
        {
          id: "asoc-u6-rep-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does media typically represent working-class people?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Class representation",
                statement: "Often negative stereotypes.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit scroungers/criminals.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reinforces stereotypes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Often negatively — as benefit scroungers or criminals.",
            commonErrors: ["Saying positively."],
          },
        },
        {
          id: "asoc-u6-rep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate media representations of women.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender representation",
                statement: "Underrepresentation + stereotyping.",
              },
            ],
            steps: [
              {
                reasoning: "Underrepresented in news/leadership.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sexualised in advertising.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Some improvement occurring.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Women underrepresented and stereotyped, though slowly improving.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u6-rep-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media representations.",
          parts: [
            { label: "a", prompt: "Class representations?", marks: 3 },
            { label: "b", prompt: "Gender representations?", marks: 2 },
            { label: "c", prompt: "Ethnicity representations?", marks: 2 },
            { label: "d", prompt: "Why does representation matter?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Representations",
                statement: "Class+gender+ethnicity+importance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Working class negative.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Middle/upper positive.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Naturalises stereotypes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Underrepresented/sexualised.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Gender stereotypes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Underrepresented/stereotyped.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Focus on problems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Shapes perceptions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Reinforces inequalities.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) class (b) gender (c) ethnicity (d) importance",
          },
        },
      ],
    },
    {
      id: "asoc-u6-age-moral",
      title: "Age Representations and Moral Panics",
      skill: "Describe media representations of age and moral panics.",
      lesson: {
        sections: [
          {
            heading: "Age representations",
            body: "Children/young people often portrayed as problem — antisocial behaviour, 'yobs'. Elderly portrayed as frail/vulnerable or invisible. Youth culture framed as deviant; older people as dependent.",
          },
          {
            heading: "Moral panic",
            body: "Stanley Cohen: media amplifies fears about 'folk devils' (mods, hoodies). Process: event → media exaggeration → public fear → moral entrepreneurs → crackdown. Example: hoodies as 'youth menace'.",
          },
          {
            heading: "Effects of representations",
            body: "Representations shape public attitudes — fear of youth leads to stricter policing; negative images of elderly reinforce ageism. Representation is never neutral.",
          },
        ],
        keyFormulas: [
          {
            name: "Age/moral panic",
            statement:
              "Youth=problem; Elderly=frail; Moral panic=exaggerated fear of folk devils.",
          },
        ],
        workedExample: {
          problem: "What is a moral panic?",
          solution:
            "Exaggerated public fear about a group — media amplifies 'folk devils' leading to social control responses.",
        },
      },
      questions: [
        {
          id: "asoc-u6-am-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who developed the concept of moral panic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stanley Cohen" },
              { id: "b", text: "Karl Marx" },
              { id: "c", text: "Emile Durkheim" },
              { id: "d", text: "Max Weber" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohen",
                statement: "Moral panic concept.",
              },
            ],
            steps: [
              { reasoning: "Cohen = moral panic.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Stanley Cohen",
            commonErrors: ["Confusing with other theorists."],
          },
        },
        {
          id: "asoc-u6-am-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are 'folk devils'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Folk devils",
                statement: "Groups blamed for social problems.",
              },
            ],
            steps: [
              { reasoning: "Groups scapegoated.", marks: 1, markCode: "AO1" },
              { reasoning: "Media amplifies fear.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Groups blamed for social problems — media amplifies fear of them.",
            commonErrors: ["Saying they're heroes."],
          },
        },
        {
          id: "asoc-u6-am-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how media creates moral panics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moral panic",
                statement: "Event→exaggeration→fear→control.",
              },
            ],
            steps: [
              {
                reasoning: "Event triggers coverage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Media exaggerates/amplifies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Public fear → moral entrepreneurs.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Leads to crackdown.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Media exaggerates events → public fear → calls for social control.",
            commonErrors: ["Missing process steps."],
          },
        },
        {
          id: "asoc-u6-am-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Age and moral panics.",
          parts: [
            { label: "a", prompt: "Youth representations?", marks: 2 },
            { label: "b", prompt: "Elderly representations?", marks: 2 },
            { label: "c", prompt: "Define moral panic.", marks: 2 },
            { label: "d", prompt: "Give an example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Age/panics",
                statement: "Representations+definition+example.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Youth as problem.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Antisocial/yobs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Elderly frail/invisible.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Ageism reinforced.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Exaggerated fear.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Folk devils blamed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Hoodies/mods example.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Media amplified.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Led to control.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) youth (b) elderly (c) moral panic (d) example",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u6-6-2-notes",
      title: "Media representations — notes",
      summary: "Class, gender, ethnicity, age stereotypes; moral panics.",
      sections: [
        {
          heading: "Representations",
          body: "Working class negative; women underrepresented/sexualised; minorities stereotyped; youth as problem.",
        },
        {
          heading: "Moral panic",
          body: "Cohen: event→exaggeration→fear→folk devils→control. Example: hoodies.",
        },
      ],
    },
  ],
};
