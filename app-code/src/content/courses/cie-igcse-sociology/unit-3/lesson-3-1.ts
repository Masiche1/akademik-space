import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cieisoc-u3-lesson-3-1",
  code: "3-1",
  title: "Sociological research methods",
  goal: "I CAN evaluate research methods, sampling, ethics and the logic of sociological enquiry.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 1: Sociology and sociological methods",
  ],
  vocabulary: [
    {
      term: "Primary data",
      definition:
        "Data collected first-hand by the researcher for the specific study.",
    },
    {
      term: "Secondary data",
      definition:
        "Data already collected by others, e.g. official statistics, diaries, media.",
    },
    {
      term: "Sampling frame",
      definition:
        "The list or population from which a sample is drawn.",
    },
    {
      term: "Validity",
      definition:
        "Whether a method measures what it claims to measure.",
    },
    {
      term: "Reliability",
      definition:
        "Whether a method gives consistent results if repeated.",
    },
    {
      term: "Positivism",
      definition:
        "The view that social facts can be studied scientifically like natural science facts.",
    },
    {
      term: "Interpretivism",
      definition:
        "The view that social action must be understood through the meanings actors attach to it.",
    },
    {
      term: "Informed consent",
      definition:
        "Participants agreeing to take part after being told what the research involves.",
    },
    {
      term: "Hawthorne effect",
      definition:
        "People changing their behaviour because they know they are being studied.",
    },
    {
      term: "Triangulation",
      definition:
        "Using two or more methods together to check and deepen findings.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u3-m-survey",
      title: "Surveys, questionnaires and sampling",
      skill:
        "Explain the strengths and weaknesses of surveys and sampling techniques.",
      lesson: {
        sections: [
          {
            heading: "Surveys and questionnaires",
            body: "A **survey** collects the same information from many people, usually through a **questionnaire**. Questionnaires may be self-completed or administered by an interviewer. Closed questions produce **quantitative** data that is easy to count and compare; open questions produce richer qualitative data but are harder to analyse. Surveys are cheap, quick and can reach large samples — but they rely on respondents answering honestly, and poorly worded questions produce invalid data.",
          },
          {
            heading: "Sampling",
            body: "Researchers rarely study the whole **population**, so they select a **sample**. **Random sampling** gives every member an equal chance and is representative but needs a complete sampling frame. **Stratified sampling** divides the population into groups (e.g. age bands) and samples from each — it guarantees representation of key groups. **Quota sampling** interviews people until set numbers per group are reached; it is quick but not random. **Snowball sampling** asks respondents to recruit others — useful for hidden populations but prone to bias.",
          },
          {
            heading: "Strengths and limits",
            body: "Surveys suit positivist research because they produce measurable, generalisable data. Limitations include low response rates, social desirability bias (people giving 'correct' answers), and the inability to probe answers. Sampling bias — an unrepresentative sample — is the most common threat to validity.",
          },
        ],
        keyFormulas: [
          {
            name: "Random",
            statement: "Every member has an equal chance of selection",
          },
          {
            name: "Stratified",
            statement: "Population divided into groups; sample drawn from each",
          },
          {
            name: "Quota",
            statement: "Interview until set numbers per group reached",
          },
        ],
        workedExample: {
          problem:
            "A researcher wants to study attitudes to university among all 18-year-olds in a city.",
          solution:
            "Use the school register as a sampling frame, draw a random or stratified sample by school type, and administer a questionnaire. This gives a representative sample and quantifiable data, though it cannot capture depth of feeling.",
        },
      },
      questions: [
        {
          id: "cieisoc-u3-m1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Primary data is data that is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copied from a textbook" },
              { id: "b", text: "Estimated by the researcher" },
              { id: "c", text: "Taken from official statistics" },
              { id: "d", text: "Collected by the researcher for the study" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary data",
                statement: "First-hand data collected for the specific study.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary data is collected first-hand by the researcher; statistics and textbooks are secondary sources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Collected by the researcher for the study.",
          },
        },
        {
          id: "cieisoc-u3-m1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Secondary data includes all of the following EXCEPT:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A questionnaire the researcher designed" },
              { id: "b", text: "Official statistics" },
              { id: "c", text: "Diaries kept by participants" },
              { id: "d", text: "Newspaper reports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary data",
                statement: "Data collected by others before the study.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A researcher-designed questionnaire produces primary data; the others are secondary.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) A questionnaire the researcher designed.",
          },
        },
        {
          id: "cieisoc-u3-m1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sampling frame is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The list of the whole population from which a sample is drawn" },
              { id: "b", text: "The final sample selected" },
              { id: "c", text: "The questionnaire used in a survey" },
              { id: "d", text: "The researcher's budget" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sampling frame",
                statement: "The list or population from which the sample is drawn.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sampling frame is the source list for sampling, not the sample itself.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The list of the whole population.",
          },
        },
        {
          id: "cieisoc-u3-m1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "In random sampling, every member of the population has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To volunteer to be selected" },
              { id: "b", text: "A guaranteed place in the sample" },
              { id: "c", text: "To be chosen by the researcher" },
              { id: "d", text: "An equal chance of being selected" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Random sampling",
                statement: "Selection where every member has an equal chance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Random sampling gives equal probability of selection to all members.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) An equal chance of being selected.",
          },
        },
        {
          id: "cieisoc-u3-m1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A researcher divides the population into age bands and draws a sample from each band. This is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random sampling" },
              { id: "b", text: "Stratified sampling" },
              { id: "c", text: "Snowball sampling" },
              { id: "d", text: "Quota sampling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stratified sampling",
                statement: "Population split into strata; samples drawn from each.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sampling within defined groups (strata) is stratified sampling.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Stratified sampling.",
          },
        },
        {
          id: "cieisoc-u3-m1-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Quota sampling differs from random sampling because quota sampling:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gives every member an equal chance" },
              { id: "b", text: "Is always representative" },
              { id: "c", text: "Requires a complete sampling frame" },
              { id: "d", text: "Continues interviewing until set numbers in each group are reached" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quota sampling",
                statement: "Interviewers fill quotas per group; not random.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quota sampling stops when group targets are met — convenient but prone to bias.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Continues until set numbers per group are reached.",
          },
        },
        {
          id: "cieisoc-u3-m1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Snowball sampling is most useful when studying:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Official statistics" },
              { id: "b", text: "Randomly selected individuals" },
              { id: "c", text: "A large, easily listed population" },
              { id: "d", text: "A hidden or hard-to-reach group" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Snowball sampling",
                statement: "Respondents recruit others — useful for hidden populations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Snowballing reaches groups with no sampling frame, e.g. homeless people or drug users.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) A hidden or hard-to-reach group.",
          },
        },
        {
          id: "cieisoc-u3-m1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Closed questions in a questionnaire are best described as questions with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Open-ended essay answers" },
              { id: "b", text: "Fixed response options such as yes/no or a scale" },
              { id: "c", text: "Only numerical answers" },
              { id: "d", text: "No limits on possible answers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Closed questions",
                statement: "Fixed response categories producing quantifiable data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Closed questions offer set answers (yes/no, Likert scales), enabling counting.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Fixed response options.",
          },
        },
        {
          id: "cieisoc-u3-m1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Open questions in a questionnaire produce data that is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always more accurate" },
              { id: "b", text: "Rich but difficult to quantify" },
              { id: "c", text: "Easy to code numerically" },
              { id: "d", text: "Impossible to analyse" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Open vs closed",
                statement: "Open answers give depth but are hard to quantify.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Open questions yield qualitative richness at the cost of easy analysis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rich but difficult to quantify.",
          },
        },
        {
          id: "cieisoc-u3-m1-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'representative sample' and explain why representativeness matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Representative sample",
                statement: "A sample whose key characteristics match those of the population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A representative sample mirrors the population's composition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It matters because findings can then be generalised to the whole population.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A sample matching the population's characteristics; enables generalisation.",
          },
        },
        {
          id: "cieisoc-u3-m1-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one strength and one weakness of using questionnaires in sociological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Questionnaire evaluation",
                statement:
                  "Questionnaires are efficient and generalisable but shallow and subject to bias.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: cheap, quick, large samples, quantitative data for positivists.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: respondents may lie or misunderstand; no probing of answers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Strength: efficient large-scale data. Weakness: superficial, biased answers.",
          },
        },
        {
          id: "cieisoc-u3-m1-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a researcher studying gang members might choose snowball sampling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hidden populations",
                statement:
                  "Groups without a sampling frame can only be reached through contacts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gang members have no public list, so there is no sampling frame.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Initial contacts can introduce the researcher to other members.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: the sample may be biased toward one network.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No sampling frame exists; snowballing reaches members through trusted contacts, though it risks network bias.",
          },
        },
        {
          id: "cieisoc-u3-m1-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A city council wants to know why littering increased. Design a survey-based study, including sampling and question design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Aims, method, sample, questions and analysis must align.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Define the aim and population (e.g. residents of the city).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Choose stratified or random sampling from a resident register.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mix closed questions (frequency of littering seen) with a few open questions (reasons).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analyse quantitatively; acknowledge limits like social desirability bias.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Aligned design: clear aim, representative sample, mixed question types, planned analysis.",
          },
        },
        {
          id: "cieisoc-u3-m1-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the use of closed and open questions, referring to validity and reliability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Validity and reliability",
                statement: "Validity = measuring what you intend; reliability = consistency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Closed questions are reliable (same answers each time) and easy to quantify.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But they may lack validity if fixed options miss respondents' real views.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Open questions capture depth and meaning, improving validity for interpretivists.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Yet open answers are hard to code consistently, lowering reliability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Closed: reliable, quantifiable, risk of invalid categories. Open: valid depth, unreliable analysis.",
          },
        },
        {
          id: "cieisoc-u3-m1-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two problems that can arise from an unrepresentative sample.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sampling bias",
                statement: "Unrepresentative samples distort findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Findings cannot be generalised to the population accurately.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Certain groups' views are over- or under-represented, biasing conclusions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Results cannot be generalised; some groups' views are distorted.",
          },
        },
        {
          id: "cieisoc-u3-m1-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sampling method needs a complete sampling frame?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random sampling" },
              { id: "b", text: "Snowball sampling" },
              { id: "c", text: "Quota sampling" },
              { id: "d", text: "Convenience sampling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sampling frame need",
                statement: "Random sampling requires a list of the population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Random selection needs a complete frame; snowball and quota do not.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Random sampling.",
          },
        },
        {
          id: "cieisoc-u3-m1-q17",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A Likert scale is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An open question" },
              { id: "b", text: "A sampling method" },
              { id: "c", text: "A type of interview" },
              { id: "d", text: "A closed question format" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Likert scale",
                statement: "Fixed response scale (e.g. strongly agree to strongly disagree).",
              },
            ],
            steps: [
              {
                reasoning: "A Likert scale offers fixed response categories — closed format.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) A closed question format.",
          },
        },
        {
          id: "cieisoc-u3-m1-q18",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by 'social desirability bias' in questionnaire research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social desirability bias",
                statement: "Respondents giving answers they think are acceptable rather than truthful.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People may hide unpopular views (e.g. on race or crime).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This reduces validity — the data does not reflect real attitudes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Respondents giving socially acceptable rather than honest answers, lowering validity.",
          },
        },
        {
          id: "cieisoc-u3-m1-q19",
          difficulty: "core",
          totalMarks: 3,
          stem: "A researcher wants to study homelessness. Explain why a questionnaire survey would be difficult and suggest an alternative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Method selection",
                statement: "Method must fit the population studied.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homeless people have no sampling frame and are hard to locate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Response rates would be very low; many cannot be reached by post or phone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alternative: snowball sampling or participant observation through hostels.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No frame, low reachability → poor response; use snowball sampling or observation instead.",
          },
        },
        {
          id: "cieisoc-u3-m1-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Quantitative data is best described as data that is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Numerical and can be counted" },
              { id: "b", text: "Always collected by observation" },
              { id: "c", text: "Impossible to analyse" },
              { id: "d", text: "Descriptive and detailed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantitative data",
                statement: "Numerical data that can be counted and statistically analysed.",
              },
            ],
            steps: [
              {
                reasoning: "Quantitative data consists of numbers amenable to statistical analysis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Numerical and can be counted.",
          },
        },
        {
          id: "cieisoc-u3-m1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State one advantage and one disadvantage of using secondary data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary data",
                statement: "Existing data is cheap but may not fit the research question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantage: cheap, fast, no need to collect first-hand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Disadvantage: may be outdated, defined differently, or not measure what you need.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cheap and quick; but may be outdated or unsuitable for the research question.",
          },
        },
        {
          id: "cieisoc-u3-m1-q22",
          difficulty: "core",
          totalMarks: 1,
          stem: "Convenience sampling is quickest but produces samples that are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Likely to be unrepresentative" },
              { id: "b", text: "Statistically valid" },
              { id: "c", text: "Always random" },
              { id: "d", text: "Stratified by design" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convenience sampling",
                statement: "Selecting whoever is easiest to reach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convenience samples reflect whoever was available — high bias risk.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Likely to be unrepresentative.",
          },
        },
        {
          id: "cieisoc-u3-m1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of a self-completion questionnaire versus an interviewer-administered questionnaire.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Questionnaire modes",
                statement: "Self-completion avoids interviewer bias; administration allows probing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Self-completion: cheaper, no interviewer bias, but no clarification of questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interviewer-administered: can probe and explain, reaching those who cannot read well.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But interviewers may influence answers through tone or interpretation.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Choice depends on aims, population literacy and budget.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Self-completion avoids bias but cannot probe; interviewer version allows probing but risks influence.",
          },
        },
        {
          id: "cieisoc-u3-m1-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pilot studies are used in survey research to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase the sample size" },
              { id: "b", text: "Replace the main study" },
              { id: "c", text: "Guarantee representative results" },
              { id: "d", text: "Test and refine the questionnaire before the main study" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pilot study",
                statement: "A small trial run to improve the research instrument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Piloting reveals confusing questions and estimates response rates.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Test and refine the questionnaire.",
          },
        },
        {
          id: "cieisoc-u3-m1-q25",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a poorly worded question can reduce the validity of a survey.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Question validity",
                statement: "Questions must be understood as intended.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ambiguous or leading wording produces answers to a different question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Respondents may interpret terms differently, adding noise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The data then fails to measure the intended concept — low validity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ambiguity means answers do not reflect the intended concept, reducing validity.",
          },
        },
        {
          id: "cieisoc-u3-m1-q26",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'response rate' and why does a low response rate threaten validity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Response rate",
                statement: "Proportion of selected people who actually respond.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Response rate = respondents / selected sample.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low rates mean non-respondents may differ systematically, biasing results.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Proportion who respond; low rates risk systematic bias among non-respondents.",
          },
        },
        {
          id: "cieisoc-u3-m1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stratified sampling is preferred over simple random sampling when the researcher wants to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interview as many people as possible" },
              { id: "b", text: "Guarantee representation of key groups in the sample" },
              { id: "c", text: "Avoid needing a sampling frame" },
              { id: "d", text: "Select participants by convenience" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stratified advantage",
                statement: "Guarantees each stratum is represented proportionally.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stratification ensures subgroups appear in the sample in the right proportions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Guarantee representation of key groups.",
          },
        },
        {
          id: "cieisoc-u3-m1-q28",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher claims her questionnaire sample of 500 students is 'representative'. Explain what she should check to justify this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating representativeness",
                statement: "Compare sample composition with known population characteristics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check the sampling method used (random/stratified vs convenience).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compare age, gender, school type, ethnicity of sample vs population data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check response rate — low rates may skew who is represented.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: representativeness is a claim needing evidence, not an assumption.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Verify method, compare sample demographics to population, check response rate.",
          },
        },
        {
          id: "cieisoc-u3-m1-q29",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of quantitative data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interview transcripts" },
              { id: "b", text: "Percentage of students who smoke" },
              { id: "c", text: "Observation diaries" },
              { id: "d", text: "Field notes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantitative data",
                statement: "Numerical, countable data.",
              },
            ],
            steps: [
              {
                reasoning: "A percentage is numerical; the others are qualitative.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Percentage of students who smoke.",
          },
        },
        {
          id: "cieisoc-u3-m1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between validity and reliability, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validity vs reliability",
                statement: "Validity = measuring the right thing; reliability = measuring consistently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Validity example: a depression scale that actually measures depression, not anxiety.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reliability example: the same questionnaire giving similar answers when repeated.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Validity: measuring the intended concept. Reliability: consistent results on repetition.",
          },
        },
        {
          id: "cieisoc-u3-m1-q31",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A positivist sociologist and an interpretivist sociologist propose different studies of teenage vandalism. Outline each approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Positivism vs interpretivism",
                statement: "Positivists seek measurable causes; interpretivists seek meanings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Positivist: large survey measuring vandalism rates against variables like poverty, family type.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Looks for statistical correlations and generalisable patterns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interpretivist: in-depth interviews or observation to understand what vandalism means to teenagers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Focuses on subjective meanings, group identity and context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Positivist: quantitative survey seeking correlations. Interpretivist: qualitative study of meanings.",
          },
        },
        {
          id: "cieisoc-u3-m1-q32",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method would a positivist sociologist most likely prefer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Participant observation" },
              { id: "b", text: "Personal diary analysis" },
              { id: "c", text: "Structured questionnaire survey" },
              { id: "d", text: "Unstructured interview" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Positivist preference",
                statement: "Positivists favour quantitative, generalisable methods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Surveys produce measurable data suited to positivist aims.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Structured questionnaire survey.",
          },
        },
        {
          id: "cieisoc-u3-m1-q33",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why generalisation is easier with large random samples than with snowball samples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Generalisation",
                statement: "Random samples allow findings to extend to the population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Random sampling gives every member an equal chance, so the sample represents the population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Snowball samples are limited to one network and may not represent the wider group.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Random samples represent the population; snowball samples are confined to networks.",
          },
        },
        {
          id: "cieisoc-u3-m1-q34",
          difficulty: "core",
          totalMarks: 1,
          stem: "A researcher studying street crime decides to interview offenders she already knows. This sampling method is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random" },
              { id: "b", text: "Stratified" },
              { id: "c", text: "Snowball/convenience" },
              { id: "d", text: "Systematic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convenience/snowball",
                statement: "Using accessible contacts rather than random selection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interviewing known offenders is convenience or snowball sampling — high bias risk.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Snowball/convenience.",
          },
        },
        {
          id: "cieisoc-u3-m1-q35",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the strengths of surveys for studying a large population, and suggest how to strengthen the design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Survey strengths",
                statement: "Efficient, generalisable, quantitative — but needs careful design.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strengths: cheap per respondent, reaches large samples, produces comparable data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: random/stratified sampling enables generalisation to the population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strengthen: pilot the questionnaire, use clear unambiguous questions.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Strengthen: boost response rate and consider follow-ups or mixed methods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Surveys are efficient and generalisable; improve via piloting, clear questions, high response rates.",
          },
        },
        {
          id: "cieisoc-u3-m1-q36",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is qualitative data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of crimes recorded" },
              { id: "b", text: "Average exam scores" },
              { id: "c", text: "Detailed interview accounts" },
              { id: "d", text: "Percentage of voters" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualitative data",
                statement: "Descriptive, non-numerical data.",
              },
            ],
            steps: [
              {
                reasoning: "Interview accounts are descriptive; the others are numerical.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Detailed interview accounts.",
          },
        },
        {
          id: "cieisoc-u3-m1-q37",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company wants to know why staff quit. Explain two reasons a survey might fail to give a true picture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Survey limitations",
                statement: "Surveys can be biased, shallow and mis-answered.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Staff may fear reprisal and give socially desirable answers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Closed questions may miss the real reasons employees want to express.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Former employees may be unreachable, so only current staff respond — biased sample.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fear of reprisal, limited response options, and unreachable leavers bias results.",
          },
        },
        {
          id: "cieisoc-u3-m1-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'leading question' and explain its effect on survey validity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leading question",
                statement: "A question phrased to push respondents toward a particular answer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "E.g. 'Don't you agree that crime is rising?' pressures agreement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Answers reflect the question's bias, not true views — low validity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A biased question pushing a particular answer; produces invalid data.",
          },
        },
        {
          id: "cieisoc-u3-m1-q39",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher wants to compare youth attitudes in rural and urban areas. Outline a sampling strategy and justify it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sampling strategy",
                statement: "Sample must represent both groups for comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Define population: young people in the region.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use stratified sampling with rural/urban as strata to guarantee both groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Draw random samples within each stratum for representativeness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Justify: stratification ensures the comparison is not skewed by unequal group sizes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stratify by rural/urban, random-sample within strata — ensures fair comparison.",
          },
        },
        {
          id: "cieisoc-u3-m1-q40",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sampling method gives every member of the population an equal chance of selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Snowball" },
              { id: "b", text: "Quota" },
              { id: "c", text: "Random" },
              { id: "d", text: "Convenience" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Random sampling",
                statement: "Equal probability of selection for all members.",
              },
            ],
            steps: [
              {
                reasoning: "Only random sampling gives equal selection probability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Random.",
          },
        },
        {
          id: "cieisoc-u3-m1-q41",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a large sample does not automatically make a survey representative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sample vs size",
                statement: "Representativeness depends on selection method, not just size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A large convenience sample still over-represents accessible groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Size reduces random error but cannot fix systematic bias.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only probability sampling makes large samples likely to represent the population.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Size reduces error but not bias; representativeness needs probability sampling.",
          },
        },
        {
          id: "cieisoc-u3-m1-q42",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two reasons why questionnaires are popular with positivist sociologists.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Positivist methods",
                statement: "Positivists prefer measurable, generalisable data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "They produce quantitative data suitable for statistical analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Large samples allow generalisable, law-like conclusions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Quantifiable data and generalisability from large samples.",
          },
        },
        {
          id: "cieisoc-u3-m1-q43",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Design a questionnaire study investigating whether young people trust news on social media. Include aim, sample, question types and two limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Full research design",
                statement: "Aim, method, sample, questions, analysis and limits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Aim: measure trust levels and reasons among 16-25 year olds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sample: stratified random sample of young people by region/education.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Questions: Likert scale on trust + open question on reasons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation 1: self-report bias — people may not admit distrust.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Limitation 2: online distribution may exclude those without internet access.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clear aim, representative sample, mixed questions; limited by self-report bias and coverage.",
          },
        },
        {
          id: "cieisoc-u3-m1-q44",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An unpaired $ in text is not the issue; a questionnaire's 'open question' allows respondents to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choose from a fixed list" },
              { id: "b", text: "Skip the question" },
              { id: "c", text: "Give only numerical answers" },
              { id: "d", text: "Answer in their own words" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Open question",
                statement: "Respondents answer freely in their own words.",
              },
            ],
            steps: [
              {
                reasoning: "Open questions allow free-form responses.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Answer in their own words.",
          },
        },
        {
          id: "cieisoc-u3-m1-q45",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a researcher choose a smaller, in-depth sample over a large survey? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depth vs breadth",
                statement: "Small samples allow depth; large samples allow generalisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "To explore meanings and context in depth (interpretivist aims).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When the population is hidden or access is difficult.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "For depth of understanding and when populations are hard to reach.",
          },
        },
        {
          id: "cieisoc-u3-m1-q46",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a questionnaire could be adapted for a population with low literacy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Adapting methods",
                statement: "Method must match population capabilities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use interviewer-administered rather than self-completion format.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Simplify language, use visual response cards or pictorial scales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Or switch method entirely — observation or oral interviews may suit better.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interviewer administration, simplified language/visual aids, or alternative methods.",
          },
        },
        {
          id: "cieisoc-u3-m1-q47",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Criticise the statement: 'A questionnaire of 1000 people is always better research than interviews with 20 people.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method relativism",
                statement: "The 'best' method depends on the research question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Surveys give breadth and generalisability but shallow answers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interviews give depth, context and meanings that surveys miss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "1000 convenience respondents may be less representative than 20 carefully chosen ones.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Quality depends on design fit, not just numbers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "False — quality depends on fit to aims; surveys give breadth, interviews give depth.",
          },
        },
        {
          id: "cieisoc-u3-m1-q48",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Snowball sampling relies on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Official lists" },
              { id: "b", text: "Respondents recruiting further respondents" },
              { id: "c", text: "Random number generation" },
              { id: "d", text: "A complete sampling frame" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Snowball sampling",
                statement: "Chain-referral through existing contacts.",
              },
            ],
            steps: [
              {
                reasoning: "Snowballing works through respondents' social networks.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Respondents recruiting further respondents.",
          },
        },
        {
          id: "cieisoc-u3-m1-q49",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'sampling bias' and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sampling bias",
                statement: "Systematic over- or under-representation of groups in a sample.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It occurs when selection favours certain characteristics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: surveying only daytime shoppers misses night-shift workers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Systematic distortion of sample composition; e.g. missing night workers.",
          },
        },
        {
          id: "cieisoc-u3-m1-q50",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that online surveys are a cheap and effective way to study all young people's attitudes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coverage bias",
                statement: "Online samples exclude those without access.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cheap and fast — true strength for large samples.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But coverage bias: excludes young people without internet or devices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Self-selection bias: only motivated people respond, skewing results.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Effective only for populations with near-universal access; triangulate otherwise.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cheap but biased by access and self-selection; not representative of all youth.",
          },
        },
      ],
    },
    {
      id: "cieisoc-u3-m-interview",
      title: "Interviews and observation",
      skill:
        "Compare interviews and observation as sources of qualitative data.",
      lesson: {
        sections: [
          {
            heading: "Interviews",
            body: "**Structured interviews** use fixed questions — reliable but rigid. **Unstructured interviews** are conversational — deep but hard to compare. **Semi-structured** interviews use an agenda with flexibility. Interviews produce detailed qualitative data about meanings and experiences, ideal for interpretivist research. Limits: interviewer effect, small samples, time-consuming, and respondents may give socially desirable answers.",
          },
          {
            heading: "Observation",
            body: "**Participant observation** means the researcher joins the group studied — gaining insider understanding but risking 'going native' (losing objectivity). **Non-participant observation** watches from outside — more objective but less depth. Observation captures actual behaviour rather than reported behaviour — people often say one thing and do another. Limits: observer effect (people behave differently when watched), ethical issues, and difficulty recording complex scenes.",
          },
          {
            heading: "Choosing between them",
            body: "Interviews reveal what people THINK and FEEL; observation reveals what people DO. Combining both — or combining either with surveys (triangulation) — strengthens validity. Ethnography (long-term immersion) suits interpretivist studies of subcultures.",
          },
        ],
        keyFormulas: [
          {
            name: "Structured",
            statement: "Fixed questions — reliable, less deep",
          },
          {
            name: "Unstructured",
            statement: "Conversational — deep, hard to compare",
          },
          {
            name: "Participant obs",
            statement: "Join the group — insider view, objectivity risk",
          },
        ],
        workedExample: {
          problem:
            "A researcher wants to study gang culture. Choose a method and justify it.",
          solution:
            "Participant observation is ideal: it reveals real behaviour and group norms that interviews would miss. The researcher must manage the risk of 'going native' and ethical issues of observing crime.",
        },
      },
      questions: [
        {
          id: "cieisoc-u3-m2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An unstructured interview is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A written exam" },
              { id: "b", text: "A fixed set of questions read aloud" },
              { id: "c", text: "A conversation guided by the respondent's answers" },
              { id: "d", text: "A questionnaire" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unstructured interview",
                statement: "Flexible, conversational interview without fixed questions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unstructured interviews follow the conversation, not a script.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) A conversation guided by responses.",
          },
        },
        {
          id: "cieisoc-u3-m2-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Participant observation involves the researcher:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sending a questionnaire" },
              { id: "b", text: "Watching from outside without taking part" },
              { id: "c", text: "Reading documents" },
              { id: "d", text: "Joining the group and taking part in activities" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Participant observation",
                statement: "Researcher joins the group studied.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Participant observation means taking part, unlike non-participant observation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Joining the group and taking part.",
          },
        },
        {
          id: "cieisoc-u3-m2-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Non-participant observation means the researcher:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Joins the group secretly" },
              { id: "b", text: "Interviews participants" },
              { id: "c", text: "Uses only secondary data" },
              { id: "d", text: "Observes without taking part in activities" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-participant observation",
                statement: "Watching without joining the group.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Non-participant observation keeps the researcher outside the group.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Observes without taking part.",
          },
        },
        {
          id: "cieisoc-u3-m2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Going native' refers to the risk that a participant observer will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finish the study early" },
              { id: "b", text: "Lose objectivity by adopting the group's values" },
              { id: "c", text: "Refuse to take notes" },
              { id: "d", text: "Be discovered immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Going native",
                statement: "Losing objectivity by fully identifying with the group.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Going native means 'becoming' the group, undermining analysis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Lose objectivity by adopting group values.",
          },
        },
        {
          id: "cieisoc-u3-m2-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'observer effect' occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Data is easily quantified" },
              { id: "b", text: "The group welcomes the observer" },
              { id: "c", text: "The observer takes perfect notes" },
              { id: "d", text: "People behave differently because they know they are watched" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Observer effect",
                statement: "Behaviour changes due to awareness of being observed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Knowing they are watched, people may act more 'normally' than usual.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) People behave differently when watched.",
          },
        },
        {
          id: "cieisoc-u3-m2-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Structured interviews are most similar to questionnaires because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce only qualitative data" },
              { id: "b", text: "Use fixed questions for all respondents" },
              { id: "c", text: "Are fully conversational" },
              { id: "d", text: "Cannot be compared" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structured interviews",
                statement: "Fixed questions — comparable, reliable data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Like questionnaires, structured interviews use identical questions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Use fixed questions for all respondents.",
          },
        },
        {
          id: "cieisoc-u3-m2-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which method best reveals what people actually DO, rather than what they say?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Secondary data" },
              { id: "b", text: "Observation" },
              { id: "c", text: "Structured interview" },
              { id: "d", text: "Questionnaire" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Observation advantage",
                statement: "Observation records behaviour directly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Observation captures actual conduct, bypassing self-report bias.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Observation.",
          },
        },
        {
          id: "cieisoc-u3-m2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Interviews are especially suited to interpretivist research because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce easily countable data" },
              { id: "b", text: "Require no ethics" },
              { id: "c", text: "Reveal the meanings people attach to their experiences" },
              { id: "d", text: "Are always representative" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretivist methods",
                statement: "Interpretivists seek subjective meanings — interviews fit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interviews explore how people understand their own lives.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reveal meanings attached to experiences.",
          },
        },
        {
          id: "cieisoc-u3-m2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A key ethical problem with covert (secret) participant observation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It produces no data" },
              { id: "b", text: "Participants cannot give informed consent" },
              { id: "c", text: "It is too expensive" },
              { id: "d", text: "It is always illegal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research ethics",
                statement: "Informed consent is a core ethical requirement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Covert research prevents participants from consenting to being studied.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Participants cannot give informed consent.",
          },
        },
        {
          id: "cieisoc-u3-m2-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one strength and one weakness of unstructured interviews.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unstructured interviews",
                statement: "Deep but difficult to compare and analyse.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: produces rich, detailed data about meanings and context.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: hard to compare across respondents; interviewer may influence answers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rich depth; but hard to compare and subject to interviewer influence.",
          },
        },
        {
          id: "cieisoc-u3-m2-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one strength and one weakness of participant observation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Participant observation",
                statement: "Insider access vs loss of objectivity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: reveals real behaviour and insider meanings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: risk of going native; ethical problems if covert; time-consuming.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genuine insider insight; but objectivity, ethics and time are problems.",
          },
        },
        {
          id: "cieisoc-u3-m2-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why observation might reveal different behaviour from what interviews report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Say vs do",
                statement: "People often report idealised behaviour, not actual behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In interviews people describe what they think they do or should do.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social desirability means they may hide deviant or embarrassing acts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Observation records actual conduct, revealing the gap between claims and behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Self-reports are idealised; observation shows real behaviour — they can differ.",
          },
        },
        {
          id: "cieisoc-u3-m2-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher wants to study bullying in a school. Compare the use of interviews and observation for this study.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method choice",
                statement: "Match method to research question and context.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interviews reveal victims' and bullies' feelings and meanings — good for depth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But victims may fear reprisal and not speak openly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Observation shows actual bullying incidents and bystander behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But observation may miss covert bullying and change behaviour via observer effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interviews give feelings but fear limits openness; observation shows real incidents but misses covert acts.",
          },
        },
        {
          id: "cieisoc-u3-m2-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Semi-structured interviews use:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An agenda of topics but flexible questioning" },
              { id: "b", text: "No questions at all" },
              { id: "c", text: "Only fixed closed questions" },
              { id: "d", text: "Only written answers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semi-structured interview",
                statement: "Topics planned but order and phrasing flexible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Semi-structured balances coverage with flexibility.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) An agenda with flexible questioning.",
          },
        },
        {
          id: "cieisoc-u3-m2-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ethical requirements for interview research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research ethics",
                statement: "Consent, confidentiality, no harm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Informed consent — participants must agree knowing the study's nature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Confidentiality — identities and answers must be protected.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Informed consent and confidentiality (also: no harm, right to withdraw).",
          },
        },
        {
          id: "cieisoc-u3-m2-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method would best study the daily routines of a religious community?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single interview" },
              { id: "b", text: "Long-term participant observation" },
              { id: "c", text: "One-off questionnaire" },
              { id: "d", text: "Official statistics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method fit",
                statement: "Daily routines need sustained observation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Participant observation captures routines over time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Long-term participant observation.",
          },
        },
        {
          id: "cieisoc-u3-m2-q17",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a researcher might combine interviews with observation (triangulation).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Triangulation",
                statement: "Multiple methods check and deepen findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interviews reveal what people say and think.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Observation reveals what they actually do — cross-checking claims.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together they improve validity by overcoming each method's weaknesses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Triangulation cross-checks claims against behaviour, improving validity.",
          },
        },
        {
          id: "cieisoc-u3-m2-q18",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher spends a year living with a religious sect. Evaluate this research strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethnography",
                statement: "Long-term immersion gives deep understanding but risks bias.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: deep insider understanding of beliefs, rituals and daily life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: trust built over time enables access to private behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: risk of going native — losing analytical distance.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: findings may not generalise; ethical issues if deception needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deep, rich data but risks going native, poor generalisability and ethical problems.",
          },
        },
        {
          id: "cieisoc-u3-m2-q19",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'interviewer effect' and how can it be reduced?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interviewer effect",
                statement: "The interviewer's presence or style influences answers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tone, appearance or probing can steer respondents' answers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reduce by training interviewers, standardising questions and monitoring.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interviewer influence on answers; reduced by training and standardisation.",
          },
        },
        {
          id: "cieisoc-u3-m2-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method produces the most detailed qualitative data about personal experiences?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Content analysis of adverts" },
              { id: "b", text: "Unstructured interview" },
              { id: "c", text: "Closed questionnaire" },
              { id: "d", text: "Official statistics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depth of interviews",
                statement: "Unstructured interviews give the richest personal data.",
              },
            ],
            steps: [
              {
                reasoning: "Unstructured interviews explore experiences in depth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Unstructured interview.",
          },
        },
        {
          id: "cieisoc-u3-m2-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one advantage of non-participant observation over participant observation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-participant advantage",
                statement: "Greater objectivity and less risk of going native.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The researcher stays outside, reducing identification with the group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Less ethical risk of deceiving or being absorbed into the group.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "More objectivity and fewer ethical complications than participant observation.",
          },
        },
        {
          id: "cieisoc-u3-m2-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "A researcher observes teenagers in a shopping centre. Explain two practical problems she might face.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Observation problems",
                statement: "Recording complex behaviour is difficult.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Many behaviours happen at once — hard to record all accurately.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cannot ask questions during observation to clarify meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Observer effect may alter the behaviour being studied.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Recording complexity, no chance to probe meanings, observer effect.",
          },
        },
        {
          id: "cieisoc-u3-m2-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the usefulness of structured interviews and unstructured interviews for a government policy study.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interview types compared",
                statement: "Structure trades depth for comparability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structured: identical questions → comparable, reliable data across many respondents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Good for measuring attitudes on a fixed issue at scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unstructured: rich context and unexpected findings, but hard to aggregate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Choice depends on whether policy needs breadth of measurement or depth of understanding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Structured gives comparable breadth; unstructured gives depth but poor comparability.",
          },
        },
        {
          id: "cieisoc-u3-m2-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Field notes in observation research are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistical tables" },
              { id: "b", text: "Official documents" },
              { id: "c", text: "Interview transcripts" },
              { id: "d", text: "Written records of what the researcher sees and hears" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Field notes",
                statement: "The researcher's contemporaneous record of observations.",
              },
            ],
            steps: [
              {
                reasoning: "Field notes document observed behaviour in detail.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Written records of observations.",
          },
        },
        {
          id: "cieisoc-u3-m2-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it difficult to generalise from participant observation studies?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Generalisation limit",
                statement: "Small, unique groups resist generalisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Observation studies usually cover one small group in one context.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Findings may reflect that group's uniqueness, not wider patterns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Small unique samples cannot represent the wider population.",
          },
        },
        {
          id: "cieisoc-u3-m2-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how covert observation could be justified ethically in some circumstances.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical justification",
                statement: "Some argue covert research is justified for public benefit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Some argue consent would change behaviour, making research invalid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Public benefit — e.g. exposing abuse — may outweigh consent issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it still risks harm to participants and trust in research.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Justified if consent invalidates research or public benefit is high — but risks remain.",
          },
        },
        {
          id: "cieisoc-u3-m2-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method is most likely to produce data about meanings and interpretations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Content analysis of numbers" },
              { id: "b", text: "Random survey" },
              { id: "c", text: "Official statistics" },
              { id: "d", text: "Unstructured interview" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretive data",
                statement: "Unstructured interviews capture subjective meanings.",
              },
            ],
            steps: [
              {
                reasoning: "Unstructured interviews explore how people interpret their lives.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Unstructured interview.",
          },
        },
        {
          id: "cieisoc-u3-m2-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'triangulation' and why is it valued?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triangulation",
                statement: "Using multiple methods to verify findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It combines e.g. interviews and observation to cross-check results.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It improves validity by offsetting each method's weaknesses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Using several methods together; improves validity through cross-checking.",
          },
        },
        {
          id: "cieisoc-u3-m2-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of covert participant observation to study police corruption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Covert research ethics",
                statement: "Covert methods raise consent issues but may be necessary.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: only covert access could reveal corruption that open research cannot.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: real behaviour observed, not self-reported claims.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: no informed consent — serious ethical breach.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: danger to researcher, risk of going native, possible misuse of data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Powerful access but ethically problematic; justified only by strong public benefit.",
          },
        },
        {
          id: "cieisoc-u3-m2-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do interviews produce smaller samples than surveys?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interview cost",
                statement: "Interviews are time-consuming per respondent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each interview takes time to conduct and transcribe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Resource limits mean fewer respondents can be studied.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Interviews are time-intensive, limiting sample size.",
          },
        },
        {
          id: "cieisoc-u3-m2-q31",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about observation is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It can capture behaviour people might hide in interviews" },
              { id: "b", text: "It only records what people say" },
              { id: "c", text: "It always gives representative data" },
              { id: "d", text: "It requires no ethical consideration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Observation strength",
                statement: "Observation reveals conduct that self-report may conceal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Observation shows actual behaviour including hidden or deviant acts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Captures behaviour people might hide.",
          },
        },
        {
          id: "cieisoc-u3-m2-q32",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a researcher could minimise the observer effect in a school study.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Minimising observer effect",
                statement: "Prolonged presence reduces reactivity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Spend time in the setting before formal observation begins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use non-participant observation to avoid changing group dynamics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Take notes discreetly and over a long period so behaviour normalises.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Acclimatise first, observe unobtrusively, take notes discreetly over time.",
          },
        },
        {
          id: "cieisoc-u3-m2-q33",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher wants to understand why people donate to charity. Compare interviews and observation for this aim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method comparison",
                statement: "Each method has distinct strengths and weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interviews reveal motivations, feelings and justifications for donating.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But donors may give socially desirable reasons rather than true motives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Observation of donation behaviour shows actual giving patterns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it cannot reveal the meanings and emotions behind the act.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interviews give motives but risk bias; observation shows behaviour but not meanings.",
          },
        },
        {
          id: "cieisoc-u3-m2-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ethnography is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A government census" },
              { id: "b", text: "Statistical analysis" },
              { id: "c", text: "Long-term immersion in a culture to understand it" },
              { id: "d", text: "A type of questionnaire" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethnography",
                statement: "Extended fieldwork immersion to understand a culture.",
              },
            ],
            steps: [
              {
                reasoning: "Ethnography involves prolonged participant observation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Long-term immersion in a culture.",
          },
        },
        {
          id: "cieisoc-u3-m2-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two disadvantages of interviews compared with questionnaires.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interview limits",
                statement: "Costly, small samples, interviewer influence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Time-consuming and expensive — limits sample size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interviewer effect can bias responses; less standardised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Expensive/small samples and interviewer influence.",
          },
        },
        {
          id: "cieisoc-u3-m2-q36",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how participant observation could study a criminal gang ethically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ethical fieldwork",
                statement: "Ethics must be built into the design.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Where possible, seek informed consent from members.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Do not participate in crimes or provide assistance that could implicate researcher.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Protect identities in all records; weigh public benefit against risks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Seek consent where possible, avoid complicity, anonymise data, assess risks.",
          },
        },
        {
          id: "cieisoc-u3-m2-q37",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Criticise the view that 'observation is always superior to interviews'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method evaluation",
                statement: "No method is universally best.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Observation cannot access private thoughts, feelings or past events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It cannot cover large populations or rare events efficiently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Observer effect may distort the very behaviour studied.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Interviews reveal meanings observation cannot capture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "False — observation misses meanings, scale and may distort behaviour; interviews complement it.",
          },
        },
        {
          id: "cieisoc-u3-m2-q38",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The main advantage of structured interviews over unstructured ones is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Greater reliability and comparability" },
              { id: "b", text: "Larger samples always" },
              { id: "c", text: "More depth" },
              { id: "d", text: "No ethical issues" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structured advantage",
                statement: "Fixed questions → comparable, reliable data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Standardised questions allow responses to be compared across cases.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Greater reliability and comparability.",
          },
        },
        {
          id: "cieisoc-u3-m2-q39",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'informed consent' in observation research?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informed consent",
                statement: "Participants agreeing to be studied with full knowledge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Participants must know they are being observed and why.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Covert observation violates this principle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Agreement to participate after being told about the research.",
          },
        },
        {
          id: "cieisoc-u3-m2-q40",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A charity wants to understand why donors stop giving. Recommend a method and justify your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Method recommendation",
                statement: "Match method to aim and population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recommend semi-structured interviews with former donors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interviews reveal reasons and feelings behind stopping donations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Observation is unsuitable — donation decisions are private, not observable.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Use purposive sampling of ex-donors; acknowledge self-report bias.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Semi-structured interviews with ex-donors — captures private motives observation cannot.",
          },
        },
        {
          id: "cieisoc-u3-m2-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one reason interviews are unsuitable for studying very large populations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interview limits",
                statement: "Time and cost restrict sample size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each interview takes substantial time — cannot reach thousands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cost of training and conducting interviews limits scale.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Time and cost constraints prevent large-scale interviewing.",
          },
        },
        {
          id: "cieisoc-u3-m2-q42",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method is most associated with the interpretivist approach?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Closed questionnaire" },
              { id: "b", text: "Large random survey" },
              { id: "c", text: "Official statistics" },
              { id: "d", text: "Unstructured interview" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretivist methods",
                statement: "Interpretivists favour qualitative, meaning-focused methods.",
              },
            ],
            steps: [
              {
                reasoning: "Unstructured interviews reveal subjective meanings.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Unstructured interview.",
          },
        },
        {
          id: "cieisoc-u3-m2-q43",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between overt and covert observation, with an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Overt vs covert",
                statement: "Overt = known observation; covert = hidden observation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Overt: participants know they are observed — e.g. studying classroom behaviour openly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Covert: participants unaware — e.g. observing illegal street trading secretly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Covert gives more natural behaviour but breaches consent; overt is ethical but may change behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Overt = known, ethical, may alter behaviour; covert = hidden, natural, unethical.",
          },
        },
        {
          id: "cieisoc-u3-m2-q44",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate participant observation as a method for studying a youth subculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subculture research",
                statement: "Immersion suits understanding group norms and meanings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: reveals real norms, rituals and meanings inaccessible otherwise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: builds trust enabling access to private group life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: risk of going native and losing objectivity.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: findings may not generalise; time-intensive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Excellent for depth and insider view; limited by objectivity risk and generalisability.",
          },
        },
        {
          id: "cieisoc-u3-m2-q45",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a researcher prefer semi-structured over fully structured interviews?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Semi-structured benefit",
                statement: "Balances coverage with flexibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Allows probing of interesting answers while covering key topics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Captures unexpected insights a rigid script would miss.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Combines coverage of key topics with flexibility to probe and explore.",
          },
        },
        {
          id: "cieisoc-u3-m2-q46",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of interview?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Structured" },
              { id: "b", text: "Semi-structured" },
              { id: "c", text: "Quantitative" },
              { id: "d", text: "Unstructured" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interview types",
                statement: "Structured, unstructured, semi-structured.",
              },
            ],
            steps: [
              {
                reasoning: "Quantitative describes data, not an interview type.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(d) Quantitative.",
          },
        },
        {
          id: "cieisoc-u3-m2-q47",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why observation is particularly useful for studying deviant behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deviance research",
                statement: "Deviants may conceal behaviour in interviews.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People may not admit deviant acts in interviews due to fear or shame.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Observation can capture deviance as it happens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But covert observation raises serious ethical problems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Observation reveals concealed deviance; but covert methods are ethically fraught.",
          },
        },
        {
          id: "cieisoc-u3-m2-q48",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a mixed-method study of workplace bullying using both interviews and observation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mixed methods design",
                statement: "Combine methods to capture different aspects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Aim: understand experiences and prevalence of bullying.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use observation to record actual incidents and bystander responses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use confidential interviews to explore victims' feelings and meanings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Triangulate: compare reported experiences with observed incidents.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Observation for incidents, interviews for experiences, triangulation for validity.",
          },
        },
        {
          id: "cieisoc-u3-m2-q49",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'going native' a problem in participant observation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Going native",
                statement: "Losing objectivity through full identification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The researcher may stop seeing the group critically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis becomes biased — 'insider' view replaces sociological view.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Going native undermines objectivity and analytical distance.",
          },
        },
        {
          id: "cieisoc-u3-m2-q50",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the use of observation to study family life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family observation",
                statement: "Private settings pose access and ethics problems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: reveals actual family interactions, not idealised accounts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: shows roles, power dynamics and routines in context.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: family life is private — access is difficult and consent complex.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: observer presence changes family behaviour; findings may not generalise.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reveals real interactions but access, consent and observer effect limit it.",
          },
        },
      ],
    },
    {
      id: "cieisoc-u3-m-ethics",
      title: "Experiments, secondary methods, ethics and evaluation",
      skill:
        "Evaluate experiments, secondary data, ethics and overall research quality.",
      lesson: {
        sections: [
          {
            heading: "Experiments and secondary methods",
            body: "**Experiments** manipulate variables to test cause and effect — rare in sociology because social life cannot be controlled like a lab. **Field experiments** occur in natural settings. **Secondary methods** include **content analysis** (systematically coding media texts), **official statistics** (quantitative but politically constructed), and **documents/diaries** (personal voices over time). Each trades depth for breadth differently.",
          },
          {
            heading: "Research ethics",
            body: "Key principles: **informed consent**, **confidentiality/anonymity**, **no harm** (physical or psychological), **right to withdraw**, and **deception** only when justified. The **British Sociological Association** code guides researchers. Ethics committees review risky studies. Covert research and studies of vulnerable groups (children, prisoners) demand extra care.",
          },
          {
            heading: "Evaluating research",
            body: "A good study matches method to aims, uses representative samples, applies ethics, and acknowledges limitations. **Reliability** (consistency), **validity** (accuracy), and **generalisation** are the key criteria. No method is perfect — strong research often combines methods and is transparent about weaknesses.",
          },
        ],
        keyFormulas: [
          {
            name: "Ethics",
            statement: "Consent · confidentiality · no harm · right to withdraw",
          },
          {
            name: "Evaluation",
            statement: "Reliability · validity · representativeness · ethics",
          },
          {
            name: "Content analysis",
            statement: "Systematic coding of media/texts",
          },
        ],
        workedExample: {
          problem:
            "Should a researcher use covert observation of a gang to study violence?",
          solution:
            "Only if public benefit is high and no alternative exists. Even then, anonymity, no complicity in crimes, and ethics review are essential. Many argue the ethical breach is too great.",
        },
      },
      questions: [
        {
          id: "cieisoc-u3-m3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Content analysis is a method that involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Observing behaviour directly" },
              { id: "b", text: "Running experiments" },
              { id: "c", text: "Interviewing people" },
              { id: "d", text: "Systematically coding and analysing media texts or documents" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Content analysis",
                statement: "Systematic coding of texts/media for themes or patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Content analysis examines existing texts systematically.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Coding and analysing media texts.",
          },
        },
        {
          id: "cieisoc-u3-m3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Official statistics are an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary data" },
              { id: "b", text: "Observational data" },
              { id: "c", text: "Secondary data" },
              { id: "d", text: "Experimental data" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary data",
                statement: "Data collected by others before the study.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Official statistics are collected by governments, not the researcher.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Secondary data.",
          },
        },
        {
          id: "cieisoc-u3-m3-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informed consent means participants:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are told nothing" },
              { id: "b", text: "Are paid for taking part" },
              { id: "c", text: "Agree to take part after being told what the research involves" },
              { id: "d", text: "Must join the study" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informed consent",
                statement: "Agreement after full disclosure of the research.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consent requires knowing what participation involves.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Agree after being told what research involves.",
          },
        },
        {
          id: "cieisoc-u3-m3-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Confidentiality in research means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Data is made public" },
              { id: "b", text: "Names are published" },
              { id: "c", text: "Results are secret forever" },
              { id: "d", text: "Participants' identities and answers are protected" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Confidentiality",
                statement: "Protecting participants' identities and data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Confidentiality ensures participants cannot be identified.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Identities and answers are protected.",
          },
        },
        {
          id: "cieisoc-u3-m3-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are true experiments rare in sociology?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No variables exist" },
              { id: "b", text: "Experiments are illegal" },
              { id: "c", text: "Social life cannot be controlled like a laboratory" },
              { id: "d", text: "Sociologists lack funding" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Experimental limits",
                statement: "Social settings resist the control experiments need.",
              },
            ],
            steps: [
              {
                reasoning:
                  "You cannot isolate and manipulate social variables ethically or practically.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Social life cannot be controlled like a lab.",
          },
        },
        {
          id: "cieisoc-u3-m3-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A field experiment differs from a lab experiment because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uses no variables" },
              { id: "b", text: "Produces only qualitative data" },
              { id: "c", text: "Takes place in a natural social setting" },
              { id: "d", text: "Is always covert" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Field experiment",
                statement: "Experiment conducted in a real-world setting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Field experiments happen in natural settings rather than labs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Takes place in a natural setting.",
          },
        },
        {
          id: "cieisoc-u3-m3-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Content analysis of newspapers could be used to study:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "People's private thoughts" },
              { id: "b", text: "Actual crime rates" },
              { id: "c", text: "How the media represents different social groups" },
              { id: "d", text: "Economic growth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Content analysis use",
                statement: "Reveals media representations and themes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Analysing texts shows how groups are portrayed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) How media represents social groups.",
          },
        },
        {
          id: "cieisoc-u3-m3-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Official statistics may be unreliable because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are always qualitative" },
              { id: "b", text: "Are always falsified" },
              { id: "c", text: "Cannot be counted" },
              { id: "d", text: "Are collected for political or administrative purposes, not research" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Official statistics",
                statement: "Collected for administration, may reflect political agendas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Statistics are constructed — definitions and collection serve other purposes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Collected for non-research purposes.",
          },
        },
        {
          id: "cieisoc-u3-m3-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The right to withdraw means participants can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choose their own questions" },
              { id: "b", text: "Leave the study at any time without penalty" },
              { id: "c", text: "Take the questionnaire home" },
              { id: "d", text: "Delete the researcher's notes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Right to withdraw",
                statement: "Participants may leave the study at any point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Withdrawal must be possible without consequence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Leave at any time without penalty.",
          },
        },
        {
          id: "cieisoc-u3-m3-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two ethical principles that apply to all sociological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research ethics",
                statement: "Consent, confidentiality, no harm, right to withdraw.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Informed consent — participants must agree knowingly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Confidentiality/no harm — protect participants from damage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Informed consent and confidentiality/no harm (also right to withdraw).",
          },
        },
        {
          id: "cieisoc-u3-m3-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State one advantage and one disadvantage of using official statistics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Official statistics",
                statement: "Cheap, large-scale, but politically constructed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantage: cheap, covers whole populations, allows comparisons over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Disadvantage: definitions may change, data may serve political agendas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cheap and comprehensive; but definitions and political bias can distort.",
          },
        },
        {
          id: "cieisoc-u3-m3-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why deception might sometimes be justified in sociological research, and give one reason it is controversial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deception debate",
                statement: "Deception may be needed but breaches consent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Some argue covert methods are needed to study hidden or deviant groups where consent is impossible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Knowing they are studied may change behaviour, making research invalid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Controversial because it violates informed consent and may harm participants.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "May be justified for hidden groups; controversial because it breaches consent.",
          },
        },
        {
          id: "cieisoc-u3-m3-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher wants to study how often people lie in job interviews. Evaluate the use of experiments for this aim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Experimental limits in sociology",
                statement: "Social variables resist laboratory control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A field experiment could observe real interviews, but behaviour is hard to manipulate ethically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Creating fake interviews raises deception and consent issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lying is hard to measure objectively — how do you know someone lied?",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Better: interviews or observation of real settings, accepting limits of self-report.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Experiments are impractical and unethical here; interviews/observation more suitable.",
          },
        },
        {
          id: "cieisoc-u3-m3-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Personal diaries are an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Official statistics" },
              { id: "b", text: "Quantitative data only" },
              { id: "c", text: "Experimental data" },
              { id: "d", text: "Primary qualitative data" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diaries as data",
                statement: "First-hand personal accounts — primary qualitative data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diaries are personal first-hand records collected for research.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Primary qualitative data.",
          },
        },
        {
          id: "cieisoc-u3-m3-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two problems with using official statistics in sociological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistics problems",
                statement: "Definitions and political purposes affect data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Definitions change over time, making comparisons difficult.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Data may be collected for political purposes, not accurate research.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Changing definitions and political bias undermine reliability.",
          },
        },
        {
          id: "cieisoc-u3-m3-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is NOT an ethical principle in sociological research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Confidentiality" },
              { id: "b", text: "Right to withdraw" },
              { id: "c", text: "Informed consent" },
              { id: "d", text: "Guaranteed publication" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethics principles",
                statement: "Consent, confidentiality, no harm, withdrawal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Publication is not an ethical requirement; the others are core principles.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(d) Guaranteed publication.",
          },
        },
        {
          id: "cieisoc-u3-m3-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a researcher choose content analysis over interviews?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Content analysis choice",
                statement: "Useful for studying representations without contact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It studies what media/texts say without needing participants.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Can cover large amounts of material cheaply over time periods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No participants needed; can analyse large text corpora cheaply.",
          },
        },
        {
          id: "cieisoc-u3-m3-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "A researcher studies how newspapers portray immigrants using content analysis. Explain two strengths and one limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Content analysis evaluation",
                statement: "Systematic but interpretation-dependent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: systematically codes many articles — reliable if coding scheme is clear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: can track changes in representation over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: coding involves interpretation — different coders may disagree.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Systematic and longitudinal; but coding is interpretive and inter-coder reliability may be low.",
          },
        },
        {
          id: "cieisoc-u3-m3-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the ethical problems of researching violent gangs using covert participant observation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research ethics",
                statement: "No harm, consent, confidentiality are paramount.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No informed consent — members do not know they are studied.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk of harm to researcher and of becoming complicit in crimes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If exposed, could face retaliation; confidentiality may be impossible.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Ethics committees would likely reject covert gang research unless exceptional justification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Serious consent, harm and complicity issues; rarely ethically defensible covertly.",
          },
        },
        {
          id: "cieisoc-u3-m3-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'natural experiment' is one where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The researcher controls all variables" },
              { id: "b", text: "Nature creates the conditions for comparison without researcher manipulation" },
              { id: "c", text: "No data is collected" },
              { id: "d", text: "It is always unethical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural experiment",
                statement: "Comparison using naturally occurring differences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Natural experiments exploit existing social differences without manipulation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Nature provides comparison conditions.",
          },
        },
        {
          id: "cieisoc-u3-m3-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'inter-coder reliability' in content analysis and why does it matter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inter-coder reliability",
                statement: "Agreement between different coders on categories.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It measures whether coders apply categories consistently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low reliability means the coding scheme is ambiguous — findings unreliable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Agreement between coders; low agreement means ambiguous categories.",
          },
        },
        {
          id: "cieisoc-u3-m3-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why sociologists rarely use laboratory experiments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lab experiment limits",
                statement: "Social phenomena resist artificial control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social behaviour cannot be reduced to isolated variables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Artificial settings produce unnatural behaviour (low validity).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ethical problems arise when manipulating people's social situations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Social life resists control; artificial settings distort behaviour; ethics problems.",
          },
        },
        {
          id: "cieisoc-u3-m3-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the use of interviews and content analysis for studying racism in society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method comparison",
                statement: "Different methods capture different aspects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interviews reveal personal experiences and attitudes toward race.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But people may hide racist views due to social desirability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Content analysis reveals how media represents racial groups systematically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it shows representations, not individual attitudes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interviews give attitudes but biased; content analysis gives media representations objectively.",
          },
        },
        {
          id: "cieisoc-u3-m3-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method involves systematically counting categories in texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unstructured interview" },
              { id: "b", text: "Snowball sampling" },
              { id: "c", text: "Participant observation" },
              { id: "d", text: "Content analysis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Content analysis",
                statement: "Systematic coding/counting of text categories.",
              },
            ],
            steps: [
              {
                reasoning: "Content analysis codes and counts text elements.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Content analysis.",
          },
        },
        {
          id: "cieisoc-u3-m3-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ethical issues when researching children.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vulnerable groups",
                statement: "Children need extra protection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Parental consent is required in addition to the child's agreement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Children may not fully understand the research or its risks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Parental consent needed; children may not grasp risks fully.",
          },
        },
        {
          id: "cieisoc-u3-m3-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'no harm' is difficult to guarantee in sociological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "No harm principle",
                statement: "Research can have unforeseen psychological effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discussing traumatic experiences (abuse, crime) may cause distress.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Publication could identify or harm participants or their communities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Researchers cannot fully predict all consequences of taking part.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Psychological distress and identification risks cannot be fully eliminated.",
          },
        },
        {
          id: "cieisoc-u3-m3-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a strength of using secondary data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cannot be biased" },
              { id: "b", text: "It is always perfectly valid" },
              { id: "c", text: "It is cheap and quick to obtain" },
              { id: "d", text: "It requires no analysis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary data advantage",
                statement: "Existing data saves time and money.",
              },
            ],
            steps: [
              {
                reasoning: "Secondary data avoids the cost of primary collection.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cheap and quick to obtain.",
          },
        },
        {
          id: "cieisoc-u3-m3-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'deception' in research ethics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deception",
                statement: "Withholding or misrepresenting the research's true nature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It includes covert observation and misleading participants about aims.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It conflicts with informed consent and is ethically controversial.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Misleading participants about the research; breaches informed consent.",
          },
        },
        {
          id: "cieisoc-u3-m3-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher wants to study whether students cheat in exams. Evaluate covert observation as a method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method ethics evaluation",
                statement: "Covert methods raise serious ethical concerns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: students would not cheat if they knew they were observed — covert gives real data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: reveals actual cheating behaviour vs self-reported honesty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: no informed consent — serious ethical breach.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: students could be harmed if accused; better use anonymous surveys.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Covert observation gives real data but breaches consent; anonymous methods safer.",
          },
        },
        {
          id: "cieisoc-u3-m3-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it difficult to establish cause and effect in sociological research?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Causation problem",
                statement: "Social variables cannot be isolated and manipulated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Many factors influence any social outcome — cannot isolate one cause.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Correlation does not prove causation in social life.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Multiple confounding variables prevent isolating causes; correlation ≠ causation.",
          },
        },
        {
          id: "cieisoc-u3-m3-q31",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method would best study changes in gender roles over 50 years?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One-off observation" },
              { id: "b", text: "A single interview" },
              { id: "c", text: "Laboratory experiment" },
              { id: "d", text: "Official statistics and historical documents" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical data",
                statement: "Long-term change needs longitudinal/secondary sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Statistics and documents provide data across time periods.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Official statistics and historical documents.",
          },
        },
        {
          id: "cieisoc-u3-m3-q32",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a good sociological study should acknowledge its limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Acknowledging limits",
                statement: "Transparency about weaknesses strengthens credibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Every method has weaknesses — acknowledging them shows awareness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It helps readers judge how far findings can be trusted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It suggests how future research could improve on the study.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Acknowledging limits is honest, builds credibility and guides future research.",
          },
        },
        {
          id: "cieisoc-u3-m3-q33",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an ethical study of student stress using mixed methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ethical research design",
                statement: "Methods must respect participants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Aim: understand sources and coping strategies for student stress.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use anonymous questionnaire for prevalence (quantitative).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use voluntary interviews for depth, with consent and confidentiality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Provide support referrals; ensure no harm from discussing stress.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mixed methods with consent, anonymity and participant support.",
          },
        },
        {
          id: "cieisoc-u3-m3-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a secondary data source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A questionnaire the researcher designed" },
              { id: "b", text: "Historical documents" },
              { id: "c", text: "Newspaper archives" },
              { id: "d", text: "Official statistics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary vs primary",
                statement: "Secondary = collected by others.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A researcher-designed questionnaire produces primary data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) A questionnaire the researcher designed.",
          },
        },
        {
          id: "cieisoc-u3-m3-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'anonymity' and how does it differ from confidentiality?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anonymity vs confidentiality",
                statement: "Anonymity = no identity known; confidentiality = identity protected.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Anonymity means the researcher never knows who responded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Confidentiality means identity is known but protected from disclosure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Anonymity = identity unknown; confidentiality = identity known but protected.",
          },
        },
        {
          id: "cieisoc-u3-m3-q36",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why pilot studies are important in sociological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pilot study",
                statement: "Trial run improves the research instrument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "They reveal confusing questions or procedures before the main study.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They estimate response rates and time needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They improve validity and reliability of the final data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pilots test and refine instruments, improving validity and efficiency.",
          },
        },
        {
          id: "cieisoc-u3-m3-q37",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Criticise the use of official crime statistics to measure actual crime rates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Official statistics critique",
                statement: "Recorded crime ≠ actual crime.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Many crimes are never reported — the 'dark figure' of crime.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Police recording practices and targets affect statistics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Definitions of crime change, affecting comparisons over time.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Victim surveys (e.g. British Crime Survey) may better capture real rates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Recorded crime misses unreported crime and reflects policing practices, not reality.",
          },
        },
        {
          id: "cieisoc-u3-m3-q38",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which principle requires participants to know they are being studied?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informed consent" },
              { id: "b", text: "Validity" },
              { id: "c", text: "Confidentiality" },
              { id: "d", text: "Reliability" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informed consent",
                statement: "Participants must know about the research.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent requires disclosure of the study.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Informed consent.",
          },
        },
        {
          id: "cieisoc-u3-m3-q39",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one strength and one weakness of experiments in sociology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Experiment evaluation",
                statement: "Control vs artificiality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: can establish cause-effect by controlling variables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: artificial settings produce unnatural behaviour; ethics problems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Causal clarity; but artificiality and ethical issues limit use.",
          },
        },
        {
          id: "cieisoc-u3-m3-q40",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A university wants to test whether a new teaching method improves grades. Should it use an experiment? Justify.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Applied method choice",
                statement: "Experiments fit when variables can be controlled.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Yes — a field experiment comparing teaching methods is feasible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Randomly assign students/classes to methods to control variables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Measure grades before and after for comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitations: ethics of unequal treatment; other variables (motivation) still differ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Yes, a field experiment is appropriate; control via random assignment, acknowledge limits.",
          },
        },
        {
          id: "cieisoc-u3-m3-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might diaries be useful for studying social change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diaries for change",
                statement: "Diaries capture personal experience over time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "They record ongoing experiences in the person's own words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Longitudinal diaries show how attitudes and life change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Diaries capture personal change over time in authentic voices.",
          },
        },
        {
          id: "cieisoc-u3-m3-q42",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why research on vulnerable groups (e.g. prisoners, refugees) needs extra ethical care.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vulnerable groups",
                statement: "Power imbalances and limited choices raise risks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Participants may feel coerced or unable to refuse participation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They may be more susceptible to psychological harm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Their situations may make confidentiality harder to guarantee.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Coercion risk, greater harm potential and confidentiality difficulties.",
          },
        },
        {
          id: "cieisoc-u3-m3-q43",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of content analysis to study social media representations of gender.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Content analysis evaluation",
                statement: "Systematic but requires clear coding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: can analyse large volumes of posts/images systematically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: reveals patterns in how gender is represented.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: coding is interpretive — reliability may be low.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: shows representations, not their effects on audiences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Systematic analysis of representations; limited by coding subjectivity and no audience data.",
          },
        },
        {
          id: "cieisoc-u3-m3-q44",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ethical principle is violated by secretly recording participants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Generalisation" },
              { id: "b", text: "Informed consent" },
              { id: "c", text: "Validity" },
              { id: "d", text: "Reliability" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informed consent",
                statement: "Participants must agree to being studied.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secret recording means participants did not consent.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Informed consent.",
          },
        },
        {
          id: "cieisoc-u3-m3-q45",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important for research findings to be replicable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Replication",
                statement: "Repeatable findings are more trustworthy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If others can repeat the study and get similar results, findings are credible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Replication tests whether findings were chance or real patterns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Replication builds confidence that findings are genuine, not flukes.",
          },
        },
        {
          id: "cieisoc-u3-m3-q46",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a researcher could study 'corruption' in an organisation ethically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sensitive topic research",
                statement: "Careful design protects participants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use anonymous surveys or confidential interviews to protect whistleblowers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Avoid covert methods that could expose participants to retaliation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Seek ethics approval and ensure findings cannot identify individuals.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Anonymous/confidential methods, no covert exposure, ethics approval.",
          },
        },
        {
          id: "cieisoc-u3-m3-q47",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Criticise the statement: 'Any method can produce valid sociological knowledge.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method relativism",
                statement: "Method choice depends on research question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each method has inherent limits — no method suits all questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Some questions (meanings) suit qualitative; others (rates) suit quantitative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Validity depends on method-question fit, not method alone.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Poor design undermines even a 'good' method.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "False — validity depends on matching method to question and good design.",
          },
        },
        {
          id: "cieisoc-u3-m3-q48",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a disadvantage of using official statistics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They may reflect political definitions or agendas" },
              { id: "b", text: "They cannot be compared" },
              { id: "c", text: "They cost too much" },
              { id: "d", text: "They are always inaccurate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistics critique",
                statement: "Political purposes affect data quality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Definitions and collection serve administrative/political ends.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) May reflect political definitions/agendas.",
          },
        },
        {
          id: "cieisoc-u3-m3-q49",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'generalisation' in sociological research?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Generalisation",
                statement: "Extending findings from sample to population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It means applying sample findings to the wider population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Requires a representative sample to be valid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Extending sample findings to the population; needs representativeness.",
          },
        },
        {
          id: "cieisoc-u3-m3-q50",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A journalist wants to study homelessness using only official statistics. Evaluate this approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistics limitations",
                statement: "Official data misses hidden populations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Statistics give scale and trends cheaply — useful starting point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But homeless people are undercounted — definitions exclude 'sofa surfers' etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Statistics show numbers, not experiences or causes.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Qualitative methods (interviews, observation) needed for depth and hidden cases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Statistics give scale but miss hidden homeless and lack depth; needs qualitative methods.",
          },
        },
      ],
    },
  ],
};
