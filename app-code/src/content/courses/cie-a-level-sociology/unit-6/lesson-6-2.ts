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
              { id: "a", text: "Personal opinion" },
              { id: "b", text: "Statistical average" },
              { id: "c", text: "Accurate description" },
              { id: "d", text: "Oversimplified fixed image of a group" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Oversimplified fixed image of a group",
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
        {
          id: "asoc-u6-rep-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which social group is most often portrayed negatively in the media?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "University professors" },
              { id: "b", text: "Business executives" },
              { id: "c", text: "Judges and lawyers" },
              { id: "d", text: "Working-class people" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Class representation",
                statement: "Working class negative.",
              },
            ],
            steps: [
              {
                reasoning: "Working class often stereotyped.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Working-class people",
            commonErrors: ["Picking a positively portrayed group."],
          },
        },
        {
          id: "asoc-u6-rep-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "'New racism' in media refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subtle, coded representations of ethnic groups" },
              { id: "b", text: "Positive portrayals of minorities" },
              { id: "c", text: "Racial statistics in reports" },
              { id: "d", text: "Openly racist language in headlines" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "New racism",
                statement: "Coded, subtle representations.",
              },
            ],
            steps: [
              {
                reasoning: "New racism = subtle coding.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Subtle, coded representations of ethnic groups",
            commonErrors: ["Thinking it's explicit."],
          },
        },
        {
          id: "asoc-u6-rep-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Women are typically underrepresented in media in which areas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weather forecasts" },
              { id: "b", text: "Sports coverage" },
              { id: "c", text: "Advertising only" },
              { id: "d", text: "News reporting and leadership roles" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender representation",
                statement: "Underrepresented in authoritative roles.",
              },
            ],
            steps: [
              {
                reasoning: "News/leadership = underrepresented.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** News reporting and leadership roles",
            commonErrors: ["Confusing with advertising."],
          },
        },
        {
          id: "asoc-u6-rep-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "News coverage of ethnic minority groups most often focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positive community achievements" },
              { id: "b", text: "Balanced everyday life" },
              { id: "c", text: "Crime and social problems" },
              { id: "d", text: "Historical contributions only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethnic representation",
                statement: "Problem-focused coverage.",
              },
            ],
            steps: [
              {
                reasoning: "Minorities linked to problems.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Crime and social problems",
            commonErrors: ["Assuming balanced coverage."],
          },
        },
        {
          id: "asoc-u6-rep-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best example of stereotyping in media?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reporting a specific crime accurately" },
              { id: "b", text: "Portraying all teenagers as lazy and antisocial" },
              { id: "c", text: "Showing a diverse range of families" },
              { id: "d", text: "Interviewing people from different backgrounds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stereotype",
                statement: "Fixed oversimplified image.",
              },
            ],
            steps: [
              {
                reasoning: "'All teenagers' = stereotype.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)** Portraying all teenagers as lazy and antisocial",
            commonErrors: ["Picking accurate reporting."],
          },
        },
        {
          id: "asoc-u6-rep-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a sample of 600 advertisements, 180 featured women in domestic roles. What percentage was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              { reasoning: "180/600 = 0.3.", marks: 1, markCode: "AO1" },
              {
                reasoning: "0.3 x 100 = 30%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Inverting the fraction."],
          },
        },
        {
          id: "asoc-u6-rep-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Representation of ethnic minority groups in news rose from 8% to 12% of stories. What was the percentage-point increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage points",
                statement: "Simple subtraction.",
              },
            ],
            steps: [
              { reasoning: "12 - 8 = 4.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Expressed in percentage points.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "4",
            commonErrors: ["Calculating a percentage change."],
          },
        },
        {
          id: "asoc-u6-rep-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 250 news items analysed, 100 mentioned crime. What percentage mentioned crime?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              { reasoning: "100/250 = 0.4.", marks: 1, markCode: "AO1" },
              {
                reasoning: "0.4 x 100 = 40%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Inverting the fraction."],
          },
        },
        {
          id: "asoc-u6-rep-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A TV channel aired 400 hours of programming; 60% featured male presenters. How many hours was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 240 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "60% of 400 = 0.6 x 400.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 240.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "240",
            commonErrors: ["Using the wrong base."],
          },
        },
        {
          id: "asoc-u6-rep-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the media typically represents ethnic minority groups.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethnic representation",
                statement: "Underrepresented/stereotyped.",
              },
            ],
            steps: [
              {
                reasoning: "Underrepresented overall.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Stereotyped or problem-focused.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "New racism = coded images.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Minorities are underrepresented, stereotyped and linked to problems.",
            commonErrors: ["Only describing positive representation."],
          },
        },
        {
          id: "asoc-u6-rep-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that media representations have become more diverse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Representation change",
                statement: "Improvement vs persistence.",
              },
            ],
            steps: [
              {
                reasoning: "Some improvement in gender/minority representation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Stereotypes and underrepresentation persist.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Change is slow and uneven.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Representation is slowly diversifying but stereotypes and underrepresentation persist.",
            commonErrors: ["One-sided claim."],
          },
        },
        {
          id: "asoc-u6-rep-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media representations — extended response.",
          parts: [
            {
              label: "a",
              prompt: "Describe media representations of the working class.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe media representations of women.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Describe media representations of ethnic minorities.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Evaluate why media representation matters.",
              marks: 3,
            },
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
                reasoning: "Negative stereotypes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Benefit scroungers/criminals.",
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
                reasoning: "Gender stereotypes persist.",
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
                reasoning: "Problem-focused coverage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Shapes public perceptions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Reinforces inequalities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Evaluation reached.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) class (b) gender (c) ethnicity (d) importance",
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
              { id: "a", text: "Max Weber" },
              { id: "b", text: "Emile Durkheim" },
              { id: "c", text: "Karl Marx" },
              { id: "d", text: "Stanley Cohen" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Stanley Cohen",
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
        {
          id: "asoc-u6-am-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A moral panic is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A calm public debate" },
              { id: "b", text: "A government budget crisis" },
              { id: "c", text: "An exaggerated public fear about a social issue" },
              { id: "d", text: "Accurate crime statistics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moral panic",
                statement: "Exaggerated public fear.",
              },
            ],
            steps: [
              {
                reasoning: "Panic = exaggerated fear.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** An exaggerated public fear about a social issue",
            commonErrors: ["Thinking it's about crime only."],
          },
        },
        {
          id: "asoc-u6-am-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'hoodie' moral panic involved media portraying young people wearing hoodies as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fashion icons" },
              { id: "b", text: "Environmental activists" },
              { id: "c", text: "Victims of crime" },
              { id: "d", text: "A threat to public safety" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Folk devils",
                statement: "Groups blamed for social problems.",
              },
            ],
            steps: [
              {
                reasoning: "Hoodies framed as menace.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** A threat to public safety",
            commonErrors: ["Missing the fear element."],
          },
        },
        {
          id: "asoc-u6-am-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Media amplification in a moral panic refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reducing coverage of crime" },
              { id: "b", text: "Exaggerating the scale and threat of an issue" },
              { id: "c", text: "Ignoring the story entirely" },
              { id: "d", text: "Publishing accurate statistics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Amplification",
                statement: "Exaggerating threat.",
              },
            ],
            steps: [
              {
                reasoning: "Amplification = exaggeration.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Exaggerating the scale and threat of an issue",
            commonErrors: ["Thinking it means more coverage only."],
          },
        },
        {
          id: "asoc-u6-am-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A common consequence of moral panics is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calls for stricter social control and policing" },
              { id: "b", text: "Public indifference" },
              { id: "c", text: "Immediate reduction in crime" },
              { id: "d", text: "Media ignoring the issue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moral panic outcome",
                statement: "Leads to social control.",
              },
            ],
            steps: [
              {
                reasoning: "Panic → crackdown/control.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Calls for stricter social control and policing",
            commonErrors: ["Claiming panic reduces crime directly."],
          },
        },
        {
          id: "asoc-u6-am-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Children and young people are most often portrayed in the media as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A problem or threat" },
              { id: "b", text: "Authority figures" },
              { id: "c", text: "Neutral observers" },
              { id: "d", text: "Always innocent victims" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Youth representation",
                statement: "Portrayed as problem.",
              },
            ],
            steps: [
              {
                reasoning: "Youth framed as deviant.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A problem or threat",
            commonErrors: ["Thinking youth are victims."],
          },
        },
        {
          id: "asoc-u6-am-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 500 news stories about young people, 70% framed them negatively. How many stories was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 350 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "70% of 500 = 0.7 x 500.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 350.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "350",
            commonErrors: ["Using the wrong base."],
          },
        },
        {
          id: "asoc-u6-am-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The elderly share of advertising fell from 12% to 9%. What was the percentage-point decrease?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage points",
                statement: "Simple subtraction.",
              },
            ],
            steps: [
              { reasoning: "12 - 9 = 3.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Expressed in percentage points.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "3",
            commonErrors: ["Calculating a percentage change."],
          },
        },
        {
          id: "asoc-u6-am-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 300 articles on crime analysed, 45 mentioned young people. What percentage mentioned young people?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              { reasoning: "45/300 = 0.15.", marks: 1, markCode: "AO1" },
              {
                reasoning: "0.15 x 100 = 15%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "15",
            commonErrors: ["Inverting the fraction."],
          },
        },
        {
          id: "asoc-u6-am-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a survey of 600 people, 55% said they were worried about youth crime. How many people was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 330 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "55% of 600 = 0.55 x 600.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 330.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "330",
            commonErrors: ["Forgetting decimal conversion."],
          },
        },
        {
          id: "asoc-u6-am-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the stages in the development of a moral panic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moral panic process",
                statement: "Event→exaggeration→fear→control.",
              },
            ],
            steps: [
              {
                reasoning: "Event triggers media coverage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Media exaggerates, public fears.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Moral entrepreneurs → crackdown.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Event → media exaggeration → public fear → moral entrepreneurs → social control response.",
            commonErrors: ["Missing process stages."],
          },
        },
        {
          id: "asoc-u6-am-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether moral panics are always harmful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moral panic effects",
                statement: "Harmful vs can raise awareness.",
              },
            ],
            steps: [
              {
                reasoning: "Scapegoats groups unfairly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Drives unnecessary social control.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Can occasionally highlight real problems.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Mostly harmful — scapegoats groups and drives overreaction, though may highlight real issues.",
            commonErrors: ["'Always' claim unexamined."],
          },
        },
        {
          id: "asoc-u6-am-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Age representations and moral panics — extended response.",
          parts: [
            {
              label: "a",
              prompt: "Describe media representations of young people.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe media representations of elderly people.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain the stages of a moral panic.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Give an example of a moral panic and its consequence.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Age/panics",
                statement: "Representations+stages+example.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Youth as problem/antisocial.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear description.",
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
                reasoning: "Event→exaggeration.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Fear→moral entrepreneurs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Leads to control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Valid example (hoodies/mods).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Consequence explained.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) youth (b) elderly (c) stages (d) example",
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
