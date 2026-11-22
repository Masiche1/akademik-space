import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "asoc-u4-lesson-4-3",
  code: "4-3",
  title: "Inequality in Education",
  goal: "I CAN explain how intelligence, class, ethnicity and gender affect educational attainment.",
  standards: [
    "9699 P3: Intelligence and attainment by class, ethnicity, gender",
  ],
  vocabulary: [
    {
      term: "IQ",
      definition: "Intelligence quotient — measure of cognitive ability.",
    },
    {
      term: "Nature vs nurture",
      definition: "Debate: genetics vs environment in intelligence.",
    },
    {
      term: "Cultural capital",
      definition: "Knowledge and skills valued by society.",
    },
    {
      term: "Material deprivation",
      definition: "Lack of resources like money, housing, nutrition.",
    },
    {
      term: "Gender gap",
      definition: "Difference in attainment between boys and girls.",
    },
    {
      term: "Ethnic minority",
      definition:
        "Group with distinct cultural heritage in a majority society.",
    },
  ],
  concepts: [
    {
      id: "asoc-u4-intelligence-class",
      title: "Intelligence and social class",
      skill: "Explain intelligence debates and class effects on attainment.",
      lesson: {
        sections: [
          {
            heading: "Intelligence debate",
            body: "IQ tests measure cognitive ability. Nature view: intelligence largely genetic — Jensen argued this explains class gaps. Nurture view: environment shapes IQ — better nutrition, stimulation, schooling raise scores. Most accept interaction.",
          },
          {
            heading: "Social class and attainment",
            body: "Working-class children underachieve vs middle-class. Material deprivation: poorer housing, nutrition, resources. Cultural factors: working-class speech/culture may not match school expectations ('deficit' view contested). Cultural capital: middle-class children arrive with valued knowledge/skills.",
          },
          {
            heading: "Teacher expectations",
            body: "Labelling: teachers may expect less from working-class students — self-fulfilling prophecy lowers attainment. Streaming can reinforce class divisions.",
          },
        ],
        keyFormulas: [
          {
            name: "Intelligence/class",
            statement:
              "Nature+nurture; material deprivation; cultural capital; labelling.",
          },
        ],
        workedExample: {
          problem: "Why do working-class children underachieve?",
          solution:
            "Material deprivation + cultural capital gap + teacher labelling compound each other.",
        },
      },
      questions: [
        {
          id: "asoc-u4-ic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does IQ measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physical strength" },
              { id: "b", text: "Social skills" },
              { id: "c", text: "Emotional intelligence" },
              { id: "d", text: "Cognitive ability" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IQ",
                statement: "Measure of cognitive ability.",
              },
            ],
            steps: [
              {
                reasoning: "IQ = cognitive ability.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Cognitive ability",
            commonErrors: ["Saying it measures everything."],
          },
        },
        {
          id: "asoc-u4-ic-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is cultural capital?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural capital",
                statement: "Knowledge/skills valued by society.",
              },
            ],
            steps: [
              {
                reasoning: "Valued knowledge and skills.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Middle-class children advantaged.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Knowledge, skills and attitudes valued by society — middle-class advantage.",
            commonErrors: ["Confusing with money."],
          },
        },
        {
          id: "asoc-u4-ic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the nature vs nurture explanation of class attainment gaps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature/nurture",
                statement: "Genetics vs environment.",
              },
            ],
            steps: [
              {
                reasoning: "Nature: genetic differences claimed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Nurture: environment affects IQ/attainment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evidence favours interaction.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Both matter — most accept interaction rather than either alone.",
            commonErrors: ["One-sided nature or nurture."],
          },
        },
        {
          id: "asoc-u4-ic-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Intelligence and class.",
          parts: [
            { label: "a", prompt: "What is IQ?", marks: 1 },
            { label: "b", prompt: "Nature vs nurture?", marks: 3 },
            { label: "c", prompt: "Class and attainment?", marks: 3 },
            { label: "d", prompt: "Teacher labelling?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intelligence/class",
                statement: "IQ+debate+class effects+labelling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cognitive ability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Genetics vs environment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Evidence both ways.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Interaction accepted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Working-class underachieves.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Material deprivation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Cultural capital.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Labels shape expectations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) IQ (b) debate (c) class (d) labelling",
          },
        },
        {
          id: "asoc-u4-ic-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'material deprivation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lack of cultural knowledge" },
              { id: "b", text: "Emotional neglect only" },
              {
                id: "c",
                text: "Lack of material resources such as money, housing and nutrition",
              },
              { id: "d", text: "A learning disability" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Material deprivation",
                statement: "Lack of material resources.",
              },
            ],
            steps: [
              {
                reasoning: "Material = resources/economics.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Lack of material resources",
            commonErrors: ["Confusing with cultural deprivation."],
          },
        },
        {
          id: "asoc-u4-ic-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did Jensen argue about class differences in intelligence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Environment alone determines IQ" },
              { id: "b", text: "Intelligence is largely genetic and explains class gaps" },
              { id: "c", text: "IQ tests are meaningless" },
              { id: "d", text: "Class does not affect attainment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Jensen",
                statement: "Nature view of class IQ gap.",
              },
            ],
            steps: [
              {
                reasoning: "Jensen = genetic explanation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Intelligence largely genetic",
            commonErrors: ["Confusing with nurture view."],
          },
        },
        {
          id: "asoc-u4-ic-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the 'deficit' view of working-class culture in education?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Working-class children are genetically less intelligent" },
              { id: "b", text: "Working-class pupils always outperform" },
              { id: "c", text: "Working-class speech and culture are seen as inferior to school expectations" },
              { id: "d", text: "Schools favour all cultures equally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deficit view",
                statement: "WC culture seen as lacking — contested.",
              },
            ],
            steps: [
              {
                reasoning: "Deficit = culture blamed as lacking.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** WC culture seen as inferior",
            commonErrors: ["Saying it's uncontested."],
          },
        },
        {
          id: "asoc-u4-ic-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why might streaming reinforce class divisions in school?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is based purely on random allocation" },
              { id: "b", text: "It has no effect on class divisions" },
              { id: "c", text: "It eliminates all differences between pupils" },
              {
                id: "d",
                text: "Middle-class pupils are more often placed in higher streams, reproducing advantage",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Streaming",
                statement: "Can reproduce class advantage.",
              },
            ],
            steps: [
              {
                reasoning: "Streaming mirrors class advantage.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Reproduces class advantage",
            commonErrors: ["Saying streaming is neutral."],
          },
        },
        {
          id: "asoc-u4-ic-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Of 400 working-class pupils surveyed, 35% achieved top grades. How many pupils is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 140 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "35% of 400 = 0.35 x 400 = 140.",
              },
            ],
            steps: [
              { reasoning: "Convert 35% to 0.35.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.35 by 400 to get 140.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "140",
            commonErrors: ["Reporting 0.35 instead of 140."],
          },
        },
        {
          id: "asoc-u4-ic-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 500 middle-class pupils surveyed, 60% achieved top grades. How many pupils is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 300 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "60% of 500 = 0.6 x 500 = 300.",
              },
            ],
            steps: [
              { reasoning: "Convert 60% to 0.6.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.6 by 500 to get 300.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "300",
            commonErrors: ["Using 60 instead of 0.6."],
          },
        },
        {
          id: "asoc-u4-ic-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a class of 30 pupils, 12 receive free school meals. What percentage of the class is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage formula",
                statement: "(12 / 30) x 100 = 40%.",
              },
            ],
            steps: [
              {
                reasoning: "Divide 12 by 30 to get 0.4.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Convert to percentage: 0.4 x 100 = 40%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Reporting 0.4 instead of 40%."],
          },
        },
        {
          id: "asoc-u4-ic-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Among 400 working-class pupils, 25% achieved top grades; among 400 middle-class pupils, 55% did. How many more middle-class pupils achieved top grades?",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attainment gap",
                statement: "55% of 400 = 220; 25% of 400 = 100; gap = 120.",
              },
            ],
            steps: [
              {
                reasoning: "220 middle-class vs 100 working-class pupils.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gap = 220 - 100 = 120.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "120",
            commonErrors: ["Answering 30 (percentage points) not pupils."],
          },
        },
        {
          id: "asoc-u4-ic-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 200 pupils labelled 'less able' by teachers, 45% underachieved relative to their test scores. How many pupils is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "45% of 200 = 0.45 x 200 = 90.",
              },
            ],
            steps: [
              { reasoning: "Convert 45% to 0.45.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.45 by 200 to get 90.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "90",
            commonErrors: ["Reporting 0.45 instead of 90."],
          },
        },
        {
          id: "asoc-u4-ic-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is the 'nature' view of intelligence controversial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "IQ tests may be culturally biased and heredity claims are politically contentious" },
              { id: "b", text: "It has no policy implications" },
              { id: "c", text: "It is fully accepted by all sociologists" },
              { id: "d", text: "It denies that environment matters at all" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature controversy",
                statement: "Bias + political sensitivity.",
              },
            ],
            steps: [
              {
                reasoning: "Nature claims contested on bias/politics.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Bias and political sensitivity",
            commonErrors: ["Saying the nature view is uncontested."],
          },
        },
        {
          id: "asoc-u4-ic-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does teacher labelling affect pupil attainment?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Lower expectations can become a self-fulfilling prophecy that lowers attainment",
              },
              { id: "b", text: "Labels have no effect on attainment" },
              { id: "c", text: "Labels always raise attainment" },
              { id: "d", text: "Labels only affect teachers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling",
                statement: "Expectations shape outcomes.",
              },
            ],
            steps: [
              {
                reasoning: "Labels → expectations → prophecy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Self-fulfilling prophecy",
            commonErrors: ["Saying labels have no effect."],
          },
        },
        {
          id: "asoc-u4-ic-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Intelligence and social class.",
          parts: [
            { label: "a", prompt: "What does IQ measure?", marks: 1 },
            { label: "b", prompt: "Explain the nature view of intelligence.", marks: 2 },
            {
              label: "c",
              prompt: "Explain the nurture view of intelligence.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain two ways social class affects attainment.",
              marks: 3,
            },
            {
              label: "e",
              prompt: "Explain how teacher labelling can lower attainment.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intelligence/class",
                statement: "IQ+views+class effects+labelling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cognitive ability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Intelligence largely genetic (Jensen).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Used to explain class gaps.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Environment shapes IQ.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Nutrition/stimulation/schooling.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Material deprivation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cultural capital gap.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Second factor explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Lower expectations for WC pupils.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) IQ (b) nature (c) nurture (d) class effects (e) labelling",
          },
        },
      ],
    },
    {
      id: "asoc-u4-ethnicity-gender",
      title: "Ethnicity and Gender in Education",
      skill: "Explain ethnicity and gender patterns in educational attainment.",
      lesson: {
        sections: [
          {
            heading: "Ethnicity and attainment",
            body: "Patterns vary — some groups outperform majority, others underachieve. Factors: material deprivation, language barriers, cultural differences, teacher labelling/stereotyping, 'ethnocentric' curriculum ignoring minority cultures.",
          },
          {
            heading: "Gender and attainment",
            body: "Historically girls underachieved; now girls often outperform boys at GCSE/A-level in many subjects. Explanations: changes in employment (women's roles), feminist influence on curriculum, subject choices still gendered (girls→humanities, boys→sciences), 'lad culture' affecting boys.",
          },
          {
            heading: "Intersection",
            body: "Class, ethnicity and gender combine — e.g., working-class girls face triple disadvantage; middle-class minority girls may do well. Intersectionality shows identities interact.",
          },
        ],
        keyFormulas: [
          {
            name: "Ethnicity/gender",
            statement:
              "Ethnicity: deprivation+labelling; Gender: girls now often outperform; intersection matters.",
          },
        ],
        workedExample: {
          problem: "Why do girls now outperform boys in many subjects?",
          solution:
            "Changed employment expectations, feminist curriculum influence, boys' 'lad culture' disengagement.",
        },
      },
      questions: [
        {
          id: "asoc-u4-eg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which group currently tends to outperform others in many subjects?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Only in science" },
              { id: "c", text: "Girls" },
              { id: "d", text: "Boys" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gender gap",
                statement: "Girls often outperform boys.",
              },
            ],
            steps: [
              {
                reasoning: "Girls outperform in many subjects.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Girls",
            commonErrors: ["Outdated assumption boys lead."],
          },
        },
        {
          id: "asoc-u4-eg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two factors affecting ethnic minority attainment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethnic factors",
                statement: "Deprivation, language, labelling, curriculum.",
              },
            ],
            steps: [
              { reasoning: "Any two factors.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Material deprivation, language barriers, teacher labelling, ethnocentric curriculum.",
            commonErrors: ["Only one factor."],
          },
        },
        {
          id: "asoc-u4-eg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why subject choices remain gendered.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subject gendering",
                statement: "Socialisation + stereotypes.",
              },
            ],
            steps: [
              {
                reasoning: "Early socialisation shapes interests.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Subject stereotypes (sciences=boys).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Teacher/peer expectations.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Socialisation and stereotypes steer girls to humanities, boys to sciences.",
            commonErrors: ["Blaming students only."],
          },
        },
        {
          id: "asoc-u4-eg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Ethnicity and gender in education.",
          parts: [
            {
              label: "a",
              prompt: "Ethnic minority attainment factors?",
              marks: 3,
            },
            { label: "b", prompt: "Gender gap today?", marks: 2 },
            { label: "c", prompt: "Why girls outperform?", marks: 2 },
            { label: "d", prompt: "Intersectionality?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethnicity/gender",
                statement: "Factors+gap+reasons+intersection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Deprivation/language.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Labelling/curriculum.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Variation between groups.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Girls outperform many subjects.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Subject choices still differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Employment changes/feminism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Lad culture for boys.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Identities interact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Triple disadvantage example.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) factors (b) gap (c) reasons (d) intersection",
          },
        },
        {
          id: "asoc-u4-eg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'ethnocentric curriculum'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A curriculum covering all world religions equally" },
              {
                id: "b",
                text: "A curriculum centred on the majority culture that ignores minority cultures",
              },
              { id: "c", text: "A curriculum taught only in minority languages" },
              { id: "d", text: "A curriculum with no cultural content" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethnocentric curriculum",
                statement: "Majority-centred, ignores minorities.",
              },
            ],
            steps: [
              {
                reasoning: "Ethnocentric = majority-centred.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Majority-centred curriculum",
            commonErrors: ["Saying it includes all cultures."],
          },
        },
        {
          id: "asoc-u4-eg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'lad culture'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A cooking class for girls" },
              { id: "b", text: "A peer culture where boys reject academic effort as uncool" },
              { id: "c", text: "A school sports team" },
              { id: "d", text: "A type of school uniform" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lad culture",
                statement: "Boys' anti-academic peer culture.",
              },
            ],
            steps: [
              {
                reasoning: "Lad culture = boys rejecting study.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Anti-academic boys' culture",
            commonErrors: ["Saying it helps attainment."],
          },
        },
        {
          id: "asoc-u4-eg-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best explains why girls now often outperform boys in many subjects?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teachers favour girls in all subjects" },
              { id: "b", text: "Boys are genetically less intelligent" },
              { id: "c", text: "Girls study fewer subjects" },
              {
                id: "d",
                text: "Changed employment expectations, feminist influence on curriculum and boys' 'lad culture' disengagement",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender gap reversal",
                statement: "Employment + feminism + lad culture.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple social explanations.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Employment/feminism/lad culture",
            commonErrors: ["Giving only one factor or genetic claims."],
          },
        },
        {
          id: "asoc-u4-eg-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How can a 'language barrier' affect ethnic minority attainment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no effect on attainment" },
              { id: "b", text: "It affects only primary school" },
              {
                id: "c",
                text: "Pupils whose first language is not the language of instruction may struggle in exams and classwork",
              },
              { id: "d", text: "It always raises attainment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Language barrier",
                statement: "Non-native speakers disadvantaged.",
              },
            ],
            steps: [
              {
                reasoning: "Language mismatch → disadvantage.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Struggles in instruction language",
            commonErrors: ["Saying language has no effect."],
          },
        },
        {
          id: "asoc-u4-eg-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Of 300 ethnic minority pupils surveyed, 30% were eligible for free school meals. How many pupils is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "30% of 300 = 0.3 x 300 = 90.",
              },
            ],
            steps: [
              { reasoning: "Convert 30% to 0.3.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.3 by 300 to get 90.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "90",
            commonErrors: ["Using 30 instead of 0.3."],
          },
        },
        {
          id: "asoc-u4-eg-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Among 400 girls, 65% achieved top grades; among 400 boys, 50% did. How many more girls achieved top grades?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender attainment gap",
                statement: "65% of 400 = 260; 50% of 400 = 200; gap = 60.",
              },
            ],
            steps: [
              {
                reasoning: "260 girls vs 200 boys achieved top grades.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Difference = 260 - 200 = 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Answering 15 (percentage points) not pupils."],
          },
        },
        {
          id: "asoc-u4-eg-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three factors affecting ethnic minority attainment — deprivation, language and labelling — are cited equally by 360 pupils. How many pupils cite each factor?",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal shares",
                statement: "360 / 3 = 120 per factor.",
              },
            ],
            steps: [
              {
                reasoning: "Divide total by number of factors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "360 / 3 = 120.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "120",
            commonErrors: ["Dividing by 2 or 4 instead of 3."],
          },
        },
        {
          id: "asoc-u4-eg-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Girls' top-grade attainment rose from 55% to 70% among 500 pupils. By how many pupils did it rise?",
          response: { type: "numeric", parts: [{ label: "a", answer: 75 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in pupils",
                statement: "70% of 500 = 350; 55% of 500 = 275; rise = 75.",
              },
            ],
            steps: [
              {
                reasoning: "350 pupils at 70%; 275 at 55%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increase = 350 - 275 = 75.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "75",
            commonErrors: ["Answering 15 (percentage points) not pupils."],
          },
        },
        {
          id: "asoc-u4-eg-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 200 working-class minority girls surveyed, 20% achieved top grades. How many pupils is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "20% of 200 = 0.2 x 200 = 40.",
              },
            ],
            steps: [
              { reasoning: "Convert 20% to 0.2.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.2 by 200 to get 40.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Reporting 0.2 instead of 40."],
          },
        },
        {
          id: "asoc-u4-eg-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do subject choices remain gendered despite girls' higher attainment?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Socialisation and subject stereotypes steer girls towards humanities and boys towards sciences"
              },
              { id: "b", text: "Girls cannot study sciences" },
              { id: "c", text: "Subject choice is random" },
              { id: "d", text: "Boys are forbidden from humanities" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gendered subjects",
                statement: "Stereotypes steer choices.",
              },
            ],
            steps: [
              {
                reasoning: "Socialisation + stereotypes persist.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Stereotypes steer choices",
            commonErrors: ["Saying choices are random."],
          },
        },
        {
          id: "asoc-u4-eg-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does intersectionality show about educational attainment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All groups achieve equally" },
              { id: "b", text: "Gender is the only factor that matters" },
              {
                id: "c",
                text: "Class, ethnicity and gender combine — e.g. working-class minority girls may face triple disadvantage",
              },
              { id: "d", text: "Only one factor affects attainment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intersectionality",
                statement: "Identities combine to shape outcomes.",
              },
            ],
            steps: [
              {
                reasoning: "Factors interact, not separate.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Combined disadvantages",
            commonErrors: ["Treating factors separately."],
          },
        },
        {
          id: "asoc-u4-eg-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Ethnicity and gender in education.",
          parts: [
            {
              label: "a",
              prompt: "Name two factors affecting ethnic minority attainment.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain what is meant by an ethnocentric curriculum.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain two reasons why girls now often outperform boys.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain why subject choices remain gendered.",
              marks: 1,
            },
            {
              label: "e",
              prompt: "Explain intersectionality using an educational example.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethnicity/gender",
                statement: "Factors+curriculum+gap+subjects+intersection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any two factors named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Correctly identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Majority-centred curriculum.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Ignores minority cultures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Employment changes/feminist influence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Lad culture for boys.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Second reason explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Stereotypes steer subject choice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Identities combine (class+ethnicity+gender).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Example given (e.g. WC minority girls).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) factors (b) curriculum (c) reasons (d) subjects (e) intersection",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u4-4-3-notes",
      title: "Inequality in education — notes",
      summary: "Intelligence debate, class/ethnicity/gender attainment gaps.",
      sections: [
        {
          heading: "Intelligence/class",
          body: "Nature+nurture; material deprivation; cultural capital; labelling effects.",
        },
        {
          heading: "Ethnicity/gender",
          body: "Minority groups vary; girls often outperform boys; subject choices gendered; intersectionality matters.",
        },
      ],
    },
  ],
};
