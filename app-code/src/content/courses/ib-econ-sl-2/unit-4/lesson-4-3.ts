import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "econ-u4-lesson-4-3",
  code: "4-3",
  title: "Unemployment",
  goal: "I CAN distinguish the types of unemployment, explain their causes, and analyse the Phillips curve relationship between inflation and unemployment.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    {
      term: "Unemployment",
      definition:
        "People of working age who are without work, available for and seeking work.",
    },
    {
      term: "Unemployment rate",
      definition: "Unemployed as a percentage of the labour force.",
    },
    {
      term: "Frictional unemployment",
      definition:
        "Short-term unemployment while workers search for or transition between jobs.",
    },
    {
      term: "Structural unemployment",
      definition:
        "Unemployment caused by a mismatch between workers' skills and job requirements, or declining industries.",
    },
    {
      term: "Cyclical (demand-deficient) unemployment",
      definition:
        "Unemployment caused by insufficient aggregate demand during recessions.",
    },
    {
      term: "Phillips curve",
      definition:
        "A curve showing the inverse relationship between inflation and unemployment in the short run.",
    },
  ],
  concepts: [
    {
      id: "econ-u4-types-causes-unemployment",
      title: "Types and Causes of Unemployment",
      skill:
        "Distinguish frictional, structural, cyclical and seasonal unemployment and explain their causes.",
      lesson: {
        sections: [
          {
            heading: "Measuring unemployment",
            body: "The **unemployment rate** = unemployed ÷ labour force × 100. The **labour force** = employed + unemployed (excludes students, retired, homemakers not seeking work). **Underemployment** (working fewer hours or below skill level) and **discouraged workers** (stopped searching) mean the official rate understates labour underutilisation.",
          },
          {
            heading: "Types of unemployment",
            body: "**Frictional**: workers between jobs — normal, short-term, partly unavoidable. **Structural**: skills/industry mismatch — e.g. coal miners after mines close, automation replacing workers. **Cyclical (demand-deficient)**: recessions reduce AD → firms lay off workers — falls in booms, rises in busts. **Seasonal**: tourism/farming workers idle in off-season. **Technological**: machines replace labour.",
          },
          {
            heading: "Costs of unemployment",
            body: "Unemployment wastes resources and human potential, reduces output (below potential GDP), causes income loss and poverty, and creates social costs (health, crime, family breakdown). Long-term unemployment erodes skills — creating hysteresis where unemployment persists even after recovery.",
          },
        ],
        keyFormulas: [
          {
            name: "Unemployment rate",
            statement:
              "$\\frac{\\text{Unemployed}}{\\text{Labour force}} \\times 100$",
          },
          {
            name: "Types",
            statement: "Frictional + Structural + Cyclical + Seasonal",
          },
        ],
        workedExample: {
          problem:
            "A country has 30 million labour force and 1.5 million unemployed. Calculate the unemployment rate.",
          solution: "Unemployment rate = 1.5/30 × 100 = 5%.",
        },
      },
      questions: [
        {
          id: "econ-u4-l43c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Structural unemployment is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Workers searching for their first job" },
              { id: "b", text: "A temporary economic downturn" },
              { id: "c", text: "Seasonal variations in demand" },
              {
                id: "d",
                text: "A mismatch between workers' skills and available jobs",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural unemployment",
                statement:
                  "Skills/industry mismatch — e.g. declining industries or automation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structural unemployment results from changes in the economy's structure — skills no longer match jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** A mismatch between workers' skills and available jobs",
            commonErrors: [
              "Confusing structural (long-term mismatch) with frictional (short-term search).",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between frictional and cyclical unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frictional vs cyclical",
                statement:
                  "Frictional = job search/transition; cyclical = insufficient AD in recession.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frictional: workers moving between jobs — short-term, occurs even in booms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cyclical: recessions reduce aggregate demand → firms cut staff — rises in busts, falls in booms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Frictional is largely unavoidable; cyclical can be reduced by demand-management policy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Frictional = job search (normal); cyclical = demand deficiency (recession).",
            commonErrors: [
              "Saying all unemployment is bad — frictional unemployment is a normal feature.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country has a labour force of 50 million and 2 million unemployed. Calculate the unemployment rate. If employment rises by 500,000 with no change in labour force, what is the new rate?",
          response: {
            type: "numeric",
            parts: [
              { label: "Initial rate (%)", answer: 4 },
              { label: "New rate (%)", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Unemployment rate",
                statement:
                  "$\\frac{\\text{Unemployed}}{\\text{Labour force}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Initial: 2/50 × 100 = 4%.",
                working: "\\frac{2}{50} \\times 100 = 4\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After employment rises by 0.5m, unemployed falls to 1.5m.",
                working: "2 - 0.5 = 1.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New rate: 1.5/50 × 100 = 3%.",
                working: "\\frac{1.5}{50} \\times 100 = 3\\%",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4% → 3%",
            commonErrors: [
              "Assuming labour force changes — it stays constant here.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of technological unemployment for workers and the economy.",
          parts: [
            {
              label: "a",
              prompt: "Define technological unemployment and give an example.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how technology causes unemployment.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether technological unemployment is a net problem for the economy.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Technological unemployment",
                statement:
                  "Job loss from automation/machines replacing human labour.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Unemployment caused by machines/technology replacing human workers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Example: robots in manufacturing, self-checkout, AI in call centres.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Machines are cheaper/faster/more reliable than human labour for routine tasks.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Firms substitute capital for labour to cut costs and raise productivity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Workers whose skills become obsolete face structural unemployment.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Short-term cost: job losses, income inequality, need for retraining.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Long-term benefit: higher productivity, lower prices, new jobs in tech sectors.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: net positive if workers can retrain; negative if skills don't match new jobs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Automation replaces labour; e.g. robots. (b) Capital substitutes for labour → structural unemployment. (c) Short-term pain, long-term productivity gain if retraining works.",
            commonErrors: [
              "Ignoring that technology also creates new jobs — the issue is skill mismatch.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Frictional unemployment refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unemployment from factory closures" },
              { id: "b", text: "Unemployment caused by a recession" },
              { id: "c", text: "Unemployment lasting over a year" },
              {
                id: "d",
                text: "Short-term unemployment while workers search for or move between jobs",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frictional unemployment",
                statement:
                  "Short-term job search and transition unemployment — a normal feature of labour markets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frictional unemployment is the time workers spend finding or moving between jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Short-term unemployment while workers search for or move between jobs",
            commonErrors: [
              "Confusing frictional (normal search) with structural (mismatch).",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Cyclical (demand-deficient) unemployment is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Workers lacking the right skills" },
              { id: "b", text: "Seasonal variations in output" },
              { id: "c", text: "Technological change" },
              {
                id: "d",
                text: "Insufficient aggregate demand during a recession",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cyclical unemployment",
                statement:
                  "Unemployment caused by insufficient AD — rises in recessions, falls in booms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When AD falls, firms sell less and lay off workers — cyclical unemployment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Insufficient aggregate demand during a recession",
            commonErrors: [
              "Confusing cyclical unemployment with structural unemployment.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Which of the following workers would NOT be counted in the labour force?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A recently laid-off worker registered with a job agency",
              },
              { id: "b", text: "An employed person" },
              { id: "c", text: "A person actively seeking work" },
              {
                id: "d",
                text: "A discouraged worker who has stopped looking for work",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Labour force",
                statement:
                  "Employed + unemployed actively seeking work; excludes discouraged workers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The labour force only includes those available for and seeking work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Discouraged workers who stopped searching are excluded — understating true unemployment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** A discouraged worker who has stopped looking for work",
            commonErrors: [
              "Assuming all jobless people count as unemployed — they must be actively seeking work.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Seasonal unemployment is best illustrated by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A factory worker laid off during a recession" },
              { id: "b", text: "A ski instructor idle in summer" },
              { id: "c", text: "A new graduate searching for a first job" },
              { id: "d", text: "A worker whose skills are obsolete" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Seasonal unemployment",
                statement:
                  "Unemployment tied to predictable seasonal patterns — e.g. tourism, farming.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ski instructors work in winter but are idle in summer — a predictable seasonal pattern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A ski instructor idle in summer",
            commonErrors: [
              "Confusing seasonal unemployment with cyclical unemployment.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "The 'natural rate' of unemployment typically includes which types of unemployment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All types including cyclical" },
              { id: "b", text: "Only seasonal unemployment" },
              { id: "c", text: "Only cyclical unemployment" },
              { id: "d", text: "Frictional and structural unemployment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural rate of unemployment",
                statement:
                  "Unemployment consistent with stable inflation — frictional + structural + seasonal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The natural rate reflects labour-market frictions and structural change, not deficient demand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It includes frictional and structural unemployment (and often seasonal), but not cyclical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Frictional and structural unemployment",
            commonErrors: [
              "Including cyclical unemployment in the natural rate — it is demand-driven, not structural.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the official unemployment rate may understate true labour underutilisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labour underutilisation",
                statement:
                  "Discouraged workers and underemployment are excluded from the official rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discouraged workers who stop searching are excluded from the labour force entirely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Underemployed workers (part-time wanting full-time, or overqualified) count as employed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both groups represent hidden unemployment not captured by the headline rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Broader measures (e.g. U-6 in the US) capture these additional forms of underutilisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Discouraged workers and underemployed workers are excluded → official rate understates true unemployment.",
            commonErrors: [
              "Assuming the official rate captures all joblessness.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what is meant by 'hysteresis' in unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hysteresis",
                statement:
                  "Long-term unemployment raises the natural rate — skills erode and employers discriminate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Long-term unemployed workers lose skills and work habits — their productivity falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Employers may also discriminate against the long-term unemployed when hiring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Result: unemployment persists even after demand recovers — the natural rate rises permanently.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hysteresis = unemployment persists after recovery because skills erode and employers discriminate.",
            commonErrors: [
              "Confusing hysteresis with normal frictional unemployment — it is a long-term, self-reinforcing effect.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of long-term structural unemployment for individuals and the economy.",
          parts: [
            {
              label: "a",
              prompt: "Explain two personal costs of long-term unemployment.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain two costs to the economy as a whole.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate policies to reduce structural unemployment.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural unemployment costs",
                statement:
                  "Lost output, wasted skills, poverty, social problems — and hysteresis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Income loss and poverty — unemployment benefits are typically below previous earnings.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Health and family costs — stress, mental health issues, relationship breakdown.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Skill atrophy — prolonged absence from work erodes human capital.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Lost output — the economy produces below potential GDP.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Lost tax revenue and higher welfare spending — fiscal burden.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Hysteresis — long-term unemployment can permanently raise the natural rate.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Retraining/education and labour-market flexibility help workers match new jobs.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: supply-side and active labour-market policies are needed, not just demand stimulus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Income loss, health/family costs, skill loss. (b) Lost output, fiscal burden, hysteresis. (c) Retraining + labour-market flexibility.",
            commonErrors: [
              "Suggesting only demand-side stimulus — structural unemployment needs supply-side solutions.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country has a labour force of 40 million and 1.6 million unemployed. Calculate the unemployment rate. If 400,000 discouraged workers are added to the unemployed, what would the 'true' rate be?",
          response: {
            type: "numeric",
            parts: [
              { label: "Official rate (%)", answer: 4 },
              { label: "Adjusted rate (%)", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Unemployment rate",
                statement:
                  "$\\frac{\\text{Unemployed}}{\\text{Labour force}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Official: 1.6/40 × 100 = 4%.",
                working: "1.6 / 40 x 100 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adding discouraged workers: 1.6 + 0.4 = 2.0 million.",
                working: "1.6 + 0.4 = 2.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adjusted: 2.0/40 × 100 = 5%.",
                working: "2.0 / 40 x 100 = 5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Both answers correct — shows official rate understates true unemployment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Official = 4%; adjusted = 5%",
            commonErrors: [
              "Ignoring that discouraged workers are normally excluded from the labour force.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In an economy, the labour force is 60 million, employment is 57 million and 0.5 million people are underemployed. Calculate the unemployment rate and state whether underemployment is included.",
          response: {
            type: "numeric",
            parts: [{ label: "Unemployment rate (%)", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Unemployment rate",
                statement:
                  "$\\frac{\\text{Unemployed}}{\\text{Labour force}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Unemployed = 60 − 57 = 3 million.",
                working: "60 - 57 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rate = 3/60 × 100 = 5%.",
                working: "3 / 60 x 100 = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Underemployment is NOT included — those workers are counted as employed.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer correct with interpretation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5% — underemployment not included",
            commonErrors: [
              "Adding underemployed to unemployed — they are already counted as employed.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A country's unemployment rate falls from 8% to 6% while its labour force stays at 50 million. Calculate the change in the number of unemployed and explain what type of unemployment reduction this most likely represents.",
          response: {
            type: "numeric",
            parts: [{ label: "Change in unemployed (millions)", answer: -1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Unemployment rate",
                statement:
                  "$\\frac{\\text{Unemployed}}{\\text{Labour force}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Initial unemployed = 8% × 50 = 4 million.",
                working: "0.08 x 50 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New unemployed = 6% × 50 = 3 million.",
                working: "0.06 x 50 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Change = 3 − 4 = −1 million.",
                working: "3 - 4 = -1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Unemployed falls by 1 million.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "A demand-driven recovery most likely reduces cyclical unemployment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unemployed falls by 1 million — likely cyclical unemployment reduction",
            commonErrors: [
              "Using percentage points directly as millions — must apply rate to labour force.",
            ],
          },
        },
        {
          id: "econ-u4-l43c1q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A country faces rising unemployment after its main industry (coal mining) declines and automation spreads through manufacturing.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the type(s) of unemployment most relevant to this scenario.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how each factor contributes to unemployment.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate the most effective policy responses.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural unemployment",
                statement:
                  "Skills/industry mismatch — declining industries and automation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Structural unemployment (industry decline) and technological unemployment (automation).",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Coal decline: miners' skills don't transfer to growing sectors — structural mismatch.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Automation: machines replace routine manufacturing tasks — capital substitutes for labour.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Both leave workers with obsolete skills — long-term unemployment and hysteresis risk.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Retraining and education to move workers into growing industries.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Regional support — declining areas need investment and diversification.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: demand stimulus alone won't help — need supply-side and active labour-market policies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Structural + technological. (b) Industry decline + automation → skill mismatch. (c) Retraining, regional diversification, supply-side policies.",
            commonErrors: [
              "Recommending only monetary/fiscal stimulus — structural unemployment needs retraining and flexibility.",
            ],
          },
        },
      ],
    },
    {
      id: "econ-u4-phillips-curve",
      title: "The Phillips Curve",
      skill:
        "Explain the short-run inverse relationship between inflation and unemployment and the long-run vertical Phillips curve.",
      lesson: {
        sections: [
          {
            heading: "The Phillips curve",
            body: "The **Phillips curve** shows an inverse relationship between inflation and unemployment: when unemployment is low, inflation tends to be high, and vice versa. The original curve (1958) was based on UK data. The explanation: tight labour markets (low unemployment) push wages up → costs rise → prices rise; slack labour markets allow wages and prices to stabilise.",
          },
          {
            heading: "Short-run vs long-run",
            body: "The **short-run Phillips curve** slopes downward — a trade-off between inflation and unemployment. But this trade-off is temporary: if unemployment stays below the **natural rate**, workers adjust expectations upward, wages chase prices, and inflation accelerates — the curve **shifts right**. In the **long run**, only one unemployment rate (the natural rate) is consistent with stable inflation — the **long-run Phillips curve is vertical**.",
          },
          {
            heading: "Expectations-augmented Phillips curve",
            body: "The **expectations-augmented Phillips curve** adds expected inflation: $\\pi = \\pi^e - \\beta(u - u^*)$. Actual inflation depends on expected inflation minus the unemployment gap. If actual unemployment equals the natural rate, inflation equals expected inflation — no permanent trade-off. Only unanticipated inflation can reduce unemployment temporarily.",
          },
        ],
        keyFormulas: [
          {
            name: "Short-run Phillips curve",
            statement: "Downward sloping — inflation/unemployment trade-off",
          },
          {
            name: "Long-run Phillips curve",
            statement: "Vertical at natural rate of unemployment",
          },
          {
            name: "Expectations-augmented",
            statement: "$\\pi = \\pi^e - \\beta(u - u^*)$",
          },
        ],
        workedExample: {
          problem:
            "A government cuts interest rates, reducing unemployment below the natural rate. What happens to inflation in the short and long run?",
          solution:
            "Short run: lower unemployment → higher inflation (movement along SRPC). Long run: workers expect higher inflation → SRPC shifts right → inflation rises further with no permanent unemployment reduction.",
        },
      },
      questions: [
        {
          id: "econ-u4-l43c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The short-run Phillips curve shows:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An inverse relationship between inflation and unemployment",
              },
              { id: "b", text: "A vertical line at zero unemployment" },
              { id: "c", text: "No relationship between them" },
              {
                id: "d",
                text: "A positive relationship between inflation and unemployment",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Short-run Phillips curve",
                statement:
                  "Downward sloping — low unemployment associated with high inflation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The SRPC shows an inverse (negative) relationship between inflation and unemployment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** An inverse relationship between inflation and unemployment",
            commonErrors: [
              "Thinking the trade-off is permanent — it only holds in the short run.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why the long-run Phillips curve is vertical.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long-run Phillips curve",
                statement:
                  "Only the natural rate of unemployment is consistent with stable inflation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the short run, lower unemployment raises wages and inflation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Over time, workers adjust inflation expectations upward — the SRPC shifts right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Eventually only the natural rate of unemployment is sustainable without accelerating inflation → vertical LRPC.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Expectations adjust → SRPC shifts → only natural rate sustainable → vertical LRPC.",
            commonErrors: [
              "Claiming the trade-off is permanent — it disappears in the long run.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A government uses expansionary policy to push unemployment below the natural rate. Explain what happens to inflation in the short run and long run.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phillips curve dynamics",
                statement:
                  "Short-run trade-off; long-run only natural rate sustainable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Short run: lower unemployment → tighter labour market → higher wages → higher inflation (movement along SRPC).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Workers observe higher inflation and adjust expectations upward.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The SRPC shifts rightward — inflation rises further while unemployment returns to natural rate.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Long run: no permanent reduction in unemployment — only higher inflation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Short run: inflation up, unemployment down. Long run: SRPC shifts right — unemployment returns to natural rate at higher inflation.",
            commonErrors: [
              "Claiming the unemployment reduction is permanent — it's only temporary.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the usefulness of the Phillips curve for understanding the inflation-unemployment relationship.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the short-run Phillips curve and its policy implications.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain the long-run Phillips curve and why the trade-off disappears.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the Phillips curve remains a useful policy tool.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phillips curve",
                statement:
                  "SRPC = short-run trade-off; LRPC = vertical at natural rate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "SRPC slopes downward — policy can trade higher inflation for lower unemployment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Useful for understanding short-run policy choices.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "But the trade-off is temporary — expectations adjust.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "LRPC is vertical at the natural rate — no permanent inflation-unemployment trade-off.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Workers' inflation expectations adjust, shifting the SRPC right.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Only the natural rate of unemployment is consistent with stable inflation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Still useful for short-run analysis and explaining stagflation (curve shifts).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But less reliable in practice — expectations, supply shocks and credibility complicate it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) SRPC = temporary trade-off. (b) LRPC = vertical, no permanent trade-off. (c) Useful conceptually but complex in practice.",
            commonErrors: [
              "Treating the SRPC as permanent — expectations erode the trade-off.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The long-run Phillips curve is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Downward sloping" },
              { id: "b", text: "Vertical at the natural rate of unemployment" },
              { id: "c", text: "Upward sloping" },
              { id: "d", text: "Horizontal at zero inflation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Long-run Phillips curve",
                statement:
                  "Vertical at the natural rate — no permanent inflation-unemployment trade-off.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the long run only the natural rate of unemployment is consistent with stable inflation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Vertical at the natural rate of unemployment",
            commonErrors: [
              "Confusing the downward-sloping SRPC with the vertical LRPC.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "If workers' inflation expectations rise, the short-run Phillips curve will:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Shift rightward (higher inflation at every unemployment rate)",
              },
              { id: "b", text: "Remain unchanged" },
              { id: "c", text: "Become steeper" },
              { id: "d", text: "Shift downward" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SRPC shifts",
                statement:
                  "Higher expected inflation shifts the SRPC right/up — more inflation at each unemployment rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher expected inflation means workers demand higher wages, pushing prices up at any unemployment level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The SRPC shifts rightward — choice (b).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Shift rightward",
            commonErrors: [
              "Thinking the curve shifts along itself — expectation changes shift the whole curve.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "According to the expectations-augmented Phillips curve, unemployment can be reduced below the natural rate only by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unanticipated inflation" },
              { id: "b", text: "Anticipated inflation" },
              { id: "c", text: "Supply-side reforms" },
              { id: "d", text: "Higher interest rates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expectations-augmented PC",
                statement:
                  "Only unanticipated inflation can reduce unemployment temporarily.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If inflation is anticipated, workers adjust wages and the trade-off disappears.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only surprise inflation erodes real wages temporarily — choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Unanticipated inflation",
            commonErrors: [
              "Thinking any inflation reduces unemployment — only unanticipated inflation does, and only temporarily.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The natural rate of unemployment (NAIRU) is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The unemployment rate consistent with stable inflation",
              },
              { id: "b", text: "Seasonal unemployment only" },
              { id: "c", text: "Zero unemployment" },
              { id: "d", text: "The lowest possible unemployment rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NAIRU",
                statement:
                  "Non-Accelerating Inflation Rate of Unemployment — the rate consistent with stable inflation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NAIRU is the unemployment rate below which inflation accelerates — the natural rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** The unemployment rate consistent with stable inflation",
            commonErrors: [
              "Confusing NAIRU with zero unemployment — it includes frictional and structural unemployment.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Stagflation (high inflation + high unemployment) can be explained on the Phillips curve diagram by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A movement along the SRPC" },
              { id: "b", text: "A fall in the natural rate" },
              { id: "c", text: "A leftward shift of the LRPC" },
              {
                id: "d",
                text: "A rightward shift of the SRPC caused by adverse supply shocks",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stagflation",
                statement:
                  "Adverse supply shocks (e.g. oil prices) shift SRAS left → higher prices and lower output simultaneously.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cost-push shocks raise prices while reducing output — worse than either alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "On the Phillips diagram this appears as a rightward/upward shift of the SRPC — choice (b).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** A rightward shift of the SRPC caused by adverse supply shocks",
            commonErrors: [
              "Thinking stagflation is just a movement along the curve — it requires a shift.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the short-run Phillips curve slopes downward.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SRPC mechanism",
                statement:
                  "Low unemployment → tight labour market → higher wages → higher prices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When unemployment is low, firms compete for scarce workers and bid up wages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Higher wages raise firms' costs, which are passed on as higher prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conversely, high unemployment gives workers little bargaining power — wages and prices stay low.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This inverse relationship produces the downward-sloping SRPC.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Low unemployment → wage pressure → cost-push → higher inflation; high unemployment → wage restraint → lower inflation.",
            commonErrors: [
              "Saying the curve slopes down without explaining the wage-price mechanism.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how inflation expectations cause the short-run Phillips curve to shift over time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expectations and SRPC",
                statement:
                  "Workers' inflation expectations determine wage demands — higher expectations shift SRPC right.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Workers base wage demands on expected future inflation, not just current conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If inflation stays high, workers expect more and demand higher wages — pushing prices up further.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The SRPC shifts rightward — the same unemployment now corresponds to higher inflation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Higher expected inflation → higher wage demands → SRPC shifts right → trade-off erodes.",
            commonErrors: [
              "Confusing a shift of the curve with a movement along it.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the expectations-augmented Phillips curve as a guide for monetary policy.",
          parts: [
            {
              label: "a",
              prompt: "Explain the expectations-augmented Phillips curve.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why it implies no permanent inflation-unemployment trade-off.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether central banks should exploit the short-run trade-off.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expectations-augmented PC",
                statement:
                  "$\\pi = \\pi^e - \\beta(u - u^*)$ — inflation depends on expectations and the unemployment gap.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Actual inflation equals expected inflation minus a term for the unemployment gap.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "If unemployment equals the natural rate, inflation equals expected inflation — stable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Only when unemployment is below the natural rate does inflation exceed expectations.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Any unemployment reduction below the natural rate causes inflation to accelerate as expectations adjust.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Over time unemployment returns to the natural rate — no permanent gain.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Exploiting the trade-off buys temporary employment at the cost of permanently higher inflation.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "If the central bank is credible, expectations stay anchored — supporting a low inflation target.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: don't exploit the SRPC — anchor expectations at the natural rate for price stability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) π = πe − β(u − u*). (b) Expectations adjust → no permanent trade-off. (c) Don't exploit — credibility and price stability matter more.",
            commonErrors: [
              "Recommending permanent stimulus below the natural rate — it only accelerates inflation.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "On a Phillips curve diagram, unemployment falls from 6% to 4% while inflation rises from 2% to 5%. If the natural rate is 5%, explain whether this is a short-run or long-run outcome.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SRPC vs LRPC",
                statement:
                  "Movement along SRPC = short-run trade-off; return to natural rate = long-run equilibrium.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unemployment at 4% is below the natural rate of 5% — a short-run trade-off is occurring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inflation rose to 5% — consistent with movement along the SRPC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is only sustainable short-run — workers will adjust expectations upward.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Long run: SRPC shifts right, unemployment returns to 5% at even higher inflation — not a stable outcome.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Short-run outcome — unemployment below natural rate with higher inflation; unsustainable long-run.",
            commonErrors: [
              "Treating the new point as long-run equilibrium — it's below the natural rate.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The natural rate of unemployment is 5%. Current unemployment is 7% and expected inflation is 3%. Using the expectations-augmented Phillips curve with coefficient 1, calculate the expected inflation rate if unemployment falls to the natural rate.",
          response: {
            type: "numeric",
            parts: [{ label: "Inflation when u = u* (%)", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expectations-augmented PC",
                statement: "$\\pi = \\pi^e - \\beta(u - u^*)$",
              },
            ],
            steps: [
              {
                reasoning: "When u = u*, the gap (u − u*) = 0.",
                working: "u - u* = 0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then π = πe − β(0) = πe.",
                working: "pi = pi_e - 0 = pi_e",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inflation equals expected inflation = 3%.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Answer correct — at the natural rate, inflation equals expectations.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Currently u > u* so actual inflation is below expected — disinflationary pressure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3%",
            commonErrors: [
              "Forgetting that at u = u* the unemployment gap is zero — inflation equals expected inflation.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A central bank cuts interest rates, reducing unemployment from 7% to 4% (natural rate = 5%). In the first year inflation rises from 2% to 4%. Explain what happens to inflation in the second year if workers fully adjust their expectations, and calculate the unemployment gap.",
          response: {
            type: "numeric",
            parts: [
              { label: "Unemployment gap (percentage points)", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expectations-augmented PC",
                statement: "$\\pi = \\pi^e - \\beta(u - u^*)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unemployment gap = u − u* = 4 − 5 = −1 percentage point.",
                working: "4 - 5 = -1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unemployment is 1pp below the natural rate — inflationary pressure.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Year 1: surprise inflation (2→4%) reduces unemployment temporarily.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Year 2: workers expect ~4% inflation → SRPC shifts right → inflation stays high while unemployment returns to 5%.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Answer correct — gap = −1pp and expectations erode the gain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Gap = −1pp; year 2 inflation stays high (~4%) as unemployment returns to natural rate",
            commonErrors: [
              "Thinking the unemployment gain persists — expectations adjust and it reverses.",
            ],
          },
        },
        {
          id: "econ-u4-l43c2q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An economy experiences rising inflation while unemployment also rises — a situation the simple Phillips curve cannot explain.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain what this combination is called and why it contradicts the SRPC.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how a supply shock could cause this outcome.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the Phillips curve framework still has value in this situation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stagflation",
                statement:
                  "High inflation + high unemployment — violates the SRPC's inverse relationship.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "This is stagflation — it contradicts the SRPC which predicts low unemployment with high inflation, not both high.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The SRPC assumes demand-driven inflation; stagflation comes from the supply side.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "On the diagram it appears as a shift of the curve, not a movement along it.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Adverse supply shock (e.g. oil price rise) shifts SRAS left.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Output falls (unemployment rises) while prices rise (inflation rises) — both worsen.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "This is cost-push inflation — the SRPC shifts right/up.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The Phillips curve still helps by showing that supply shocks shift the curve — explaining stagflation.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: the framework remains useful but must include supply-side shifts, not just demand movements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Stagflation — violates SRPC. (b) Supply shock → SRAS left → both worsen. (c) Framework still useful with supply-side shifts included.",
            commonErrors: [
              "Saying the Phillips curve is 'wrong' — it needs supply-side shifts added.",
            ],
          },
        },
      ],
    },
  ],
};
