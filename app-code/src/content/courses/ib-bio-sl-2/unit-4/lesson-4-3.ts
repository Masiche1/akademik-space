import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "biosl-u4-lesson-4-3",
  code: "4-3",
  title: "Populations, Communities and Succession",
  goal: "I CAN estimate population size, describe community structure and succession, and explain how carbon and nitrogen are cycled in ecosystems.",
  standards: ["Topic A.4", "Topic A.4.1", "Paper 1", "Paper 2"],
  vocabulary: [
    {
      term: "Population",
      definition:
        "A group of organisms of the same species living in the same area at the same time.",
    },
    {
      term: "Community",
      definition:
        "All the populations of different species living together in an area.",
    },
    {
      term: "Quadrat",
      definition:
        "A square frame of known area used to sample organisms in a habitat so population size can be estimated.",
    },
    {
      term: "Succession",
      definition:
        "The directional change in species composition of a community over time, from pioneer species to a climax community.",
    },
    {
      term: "Pioneer species",
      definition:
        "The first organisms to colonise a bare habitat; usually small, fast-growing and tolerant of harsh conditions.",
    },
    {
      term: "Nutrient cycle",
      definition:
        "The recycling of elements such as carbon and nitrogen between living organisms and the environment.",
    },
  ],
  concepts: [
    {
      id: "biosl-u4-populations",
      title: "Populations and estimating population size",
      skill:
        "Sample populations with quadrats or mark-recapture and explain factors affecting population size and growth.",
      lesson: {
        sections: [
          {
            heading: "Populations and communities",
            body: "A **population** is one species in an area; a **community** is all the populations together. Population size is controlled by birth rate, death rate, immigration and emigration. In an **exponential growth** phase resources are abundant and the population grows faster and faster; in **logistic growth** resources become limiting and the population levels off at the **carrying capacity** of the environment.",
          },
          {
            heading: "Sampling populations",
            body: "A **quadrat** is a square frame placed randomly in a habitat; counting organisms inside several quadrats and averaging gives an estimate of density, multiplied by total habitat area for population size. For mobile animals, **mark-recapture** is used: mark and release N animals, recapture a sample, count marked individuals m among n caught, then estimate population size as N × n ÷ m.",
          },
          {
            heading: "Interpreting data",
            body: "Sampling must be random to avoid bias, and several samples are needed because one quadrat may be unrepresentative. Data-based questions often give raw counts — convert them to densities or percentages before comparing sites or species.",
          },
        ],
        keyFormulas: [
          {
            name: "Population from quadrats",
            statement:
              "Mean density × total habitat area = estimated population size",
          },
          {
            name: "Mark-recapture estimate",
            statement:
              "Population size = (number marked × number recaptured) ÷ marked in recapture sample",
          },
          {
            name: "Carrying capacity",
            statement:
              "Maximum population size an environment can sustain long-term",
          },
        ],
        workedExample: {
          problem:
            "In a meadow, five 0.25 m² quadrats contain 8, 12, 10, 6 and 14 daisies. Estimate the density and the number of daisies in a 200 m² meadow.",
          solution:
            "Mean per quadrat = (8+12+10+6+14)/5 = 50/5 = 10 daisies per 0.25 m². Density = 10 / 0.25 = 40 per m². Population estimate = 40 × 200 = 8000 daisies.",
        },
      },
      questions: [
        {
          id: "biosl-u4-populations-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is a quadrat used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Classifying species into taxonomic groups" },
              {
                id: "b",
                text: "Marking animals so they can be recognised later",
              },
              {
                id: "c",
                text: "Sampling a known area to estimate the density or population size of organisms",
              },
              { id: "d", text: "Measuring the temperature of a habitat" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quadrat",
                statement:
                  "A square frame of known area used to sample organisms in a habitat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Counting individuals in known-area frames allows density and population size to be estimated.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Sampling a known area to estimate density or population size",
            commonErrors: [
              "Confusing quadrats with mark-recapture, which is used for mobile animals.",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u4-populations-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "A researcher marks and releases 120 woodlice. In a second sample of 150 woodlice, 30 are found to be marked. Estimate the total population size.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6000" },
              { id: "b", text: "150" },
              { id: "c", text: "600" },
              { id: "d", text: "1800" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-recapture",
                statement:
                  "Population = (marked released × total recaptured) ÷ marked recaptured.",
              },
            ],
            steps: [
              {
                reasoning: "Apply the mark-recapture formula.",
                working: "(120 × 150) / 30 = 18000 / 30 = 600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The proportion of marked animals in the recapture sample estimates the marked fraction of the whole population.",
                working: "30/150 = 0.2; 120 / 0.2 = 600",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 600 woodlice",
            commonErrors: [
              "Dividing in the wrong order, e.g. (150 × 30) / 120 = 37.5.",
              "Forgetting that the estimate assumes marks are not lost.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A population of yeast in a sugar solution grows rapidly at first, then levels off and stays constant. Which explanation best fits the shape of this growth curve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Immigration balanced emigration exactly" },
              {
                id: "b",
                text: "The population reached carrying capacity as sugar and oxygen became limiting",
              },
              {
                id: "c",
                text: "All individuals stopped reproducing at the same time",
              },
              { id: "d", text: "Exponential growth is impossible in yeast" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement:
                  "The maximum population size an environment can sustain; growth levels off as resources become limiting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rapid initial growth = exponential phase with abundant resources.",
                working: "exponential phase",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Leveling off = logistic phase as nutrients, space or oxygen run short.",
                working: "logistic phase",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The constant level approximates the carrying capacity of the environment.",
                working: "K = carrying capacity",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Carrying capacity reached as resources became limiting",
            commonErrors: [
              "Describing the leveling off as a sudden stop rather than resource limitation.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student estimates the population of daisies in a 100 m² meadow. She places five 0.5 m² quadrats at random and counts 20, 24, 18, 22 and 26 daisies. She then repeats the sampling in an adjacent 100 m² meadow that has been grazed heavily, counting 4, 6, 5, 3 and 7 daisies per quadrat.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the estimated daisy population in the ungrazed meadow.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the estimated daisy population in the grazed meadow.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest two reasons why the grazed meadow supports fewer daisies.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the reliability of the student's population estimates.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Density estimate",
                statement:
                  "Mean count per quadrat ÷ quadrat area = density; density × habitat area = population estimate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Mean count = (20+24+18+22+26)/5 = 110/5 = 22 daisies per 0.5 m².",
                working: "mean = 22",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Density = 22 / 0.5 = 44 per m²; population = 44 × 100 = 4400.",
                working: "44 × 100 = 4400",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Mean count = (4+6+5+3+7)/5 = 25/5 = 5 daisies per 0.5 m².",
                working: "mean = 5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Density = 5 / 0.5 = 10 per m²; population = 10 × 100 = 1000.",
                working: "10 × 100 = 1000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Any two valid reasons: grazing removes flowers/seed heads; trampling damages plants; reduced light from taller grasses; soil compaction.",
                working: "e.g. grazing removes reproductive parts",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Reasons linked specifically to the difference between the two meadows.",
                working: "grazing effect",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Strengths: random placement and five quadrats per meadow reduce bias; same method used in both meadows allows comparison.",
                working: "random sampling, replicated",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Limitations: only five small quadrats may miss clumped distribution; estimates assume uniform density across each meadow.",
                working: "small sample, assumes uniformity",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 4400 daisies. (b) 1000 daisies. (c) Grazing removes flowers/seed production and damages plants. (d) Reasonable method but based on few quadrats and assumes uniform density.",
            commonErrors: [
              "Forgetting to divide by quadrat area before scaling to habitat area.",
              "Comparing raw counts without converting to density.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). FT for arithmetic slips in means.",
          },
        },
        {
          id: "biosl-u4-populations-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the difference between a population and a community?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A population includes all species in an area; a community is one species",
              },
              {
                id: "b",
                text: "A population is one species in an area; a community is all the populations of different species together",
              },
              {
                id: "c",
                text: "A population is a group of individuals; a community is a group of species",
              },
              { id: "d", text: "They are identical terms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Population vs community",
                statement:
                  "Population = one species in an area; community = all populations in that area.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The key distinction is species number: a population is a single species; a community includes every species present.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** One species vs all species together",
            commonErrors: [
              "Reversing the definitions — population is the smaller unit.",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u4-populations-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "During the exponential (log) phase of population growth, which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The population has reached carrying capacity" },
              {
                id: "b",
                text: "Resources are limiting growth and the curve levels off",
              },
              { id: "c", text: "Birth rate equals death rate" },
              {
                id: "d",
                text: "Resources are abundant and the population grows at an accelerating rate",
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exponential growth",
                statement:
                  "Growth phase where resources are abundant and the population increases at an accelerating rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the log phase resources are not yet limiting, so reproduction proceeds unchecked.",
                working: "abundant resources",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The curve rises steeply — growth is accelerating, not level, and carrying capacity has not been reached.",
                working: "accelerating growth",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Resources abundant, accelerating growth",
            commonErrors: [
              "Describing logistic-phase features (limiting resources, level curve) as exponential.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Five 0.25 m² quadrats in a meadow contain 6, 8, 10, 4 and 12 daisies. Calculate the mean number of daisies per quadrat.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean per quadrat", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean",
                statement: "$\\bar{x} = \\frac{\\sum x}{n}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sum the counts: $6 + 8 + 10 + 4 + 12 = 40$ across 5 quadrats.",
                working: "40 / 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by the number of quadrats.",
                working: "\\frac{40}{5} = 8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8 daisies per quadrat",
            commonErrors: [
              "Dividing by 0.25 instead of 5 — the mean is per quadrat, not per m².",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A researcher marks and releases 80 beetles. Later, a sample of 200 beetles is caught and 25 are found to be marked. Estimate the total population size.",
          response: {
            type: "numeric",
            parts: [{ label: "Estimated population", answer: 640 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-recapture",
                statement:
                  "$\\text{Population} = \\frac{\\text{marked released} \\times \\text{total recaptured}}{\\text{marked recaptured}}$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the mark-recapture formula.",
                working: "\\frac{80 \\times 200}{25}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the estimate.",
                working: "\\frac{16000}{25} = 640",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "640 beetles",
            commonErrors: [
              "Inverting the formula, e.g. $\\frac{200 \\times 25}{80} = 62.5$.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A 0.5 m² quadrat in a field contains 15 poppies. The field covers 300 m². Calculate the estimated density per m² and the estimated total number of poppies in the field.",
          response: {
            type: "numeric",
            parts: [
              { label: "Density per m²", answer: 30 },
              { label: "Total poppies", answer: 9000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Density and population",
                statement:
                  "Density $= \\frac{\\text{count}}{\\text{quadrat area}}$; population $= \\text{density} \\times \\text{habitat area}$",
              },
            ],
            steps: [
              {
                reasoning: "Density $= \\frac{15}{0.5} = 30$ poppies per m².",
                working: "\\frac{15}{0.5} = 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Population estimate $= 30 \\times 300$.",
                working: "30 \\times 300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Estimated population = 9000 poppies.",
                working: "= 9000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30 per m²; 9000 poppies",
            commonErrors: [
              "Multiplying 15 by 300 without converting to density first — the quadrat is only 0.5 m².",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Why is it important that quadrats are placed at random when sampling a plant community?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is required by law for all ecological surveys",
              },
              {
                id: "b",
                text: "It guarantees that every individual in the habitat is counted",
              },
              {
                id: "c",
                text: "It prevents bias, so the sample is representative of the whole habitat",
              },
              {
                id: "d",
                text: "It makes counting faster than systematic placement",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Random sampling",
                statement:
                  "Random placement avoids bias so samples represent the whole habitat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Random placement gives every part of the habitat an equal chance of being sampled.",
                working: "equal chance of selection",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This prevents the researcher from unconsciously choosing atypical areas, which would bias the estimate.",
                working: "avoids unconscious bias",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A biased sample cannot be generalised to the whole population.",
                working: "representativeness",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Prevents bias so the sample is representative",
            commonErrors: [
              "Thinking random sampling counts every individual — it only estimates the population.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Three 1 m² quadrats in a lawn contain 12, 9 and 15 dandelions. The lawn covers 50 m². Estimate the total dandelion population.",
          response: {
            type: "numeric",
            parts: [{ label: "Estimated population", answer: 600 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Population from quadrats",
                statement: "Mean density × habitat area = estimated population",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mean count per quadrat = $\\frac{12+9+15}{3} = 12$ dandelions per m² (quadrat area is 1 m², so density = 12 per m²).",
                working: "\\frac{36}{3} = 12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Estimated population = $12 \\times 50 = 600$.",
                working: "12 \\times 50 = 600",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "600 dandelions",
            commonErrors: [
              "Using the sum 36 instead of the mean 12 before scaling up.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which set of factors directly changes the size of a population?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Birth rate, death rate, immigration and emigration",
              },
              { id: "b", text: "Body size and colour of individuals" },
              { id: "c", text: "The number of species in the community" },
              { id: "d", text: "Rainfall, sunlight and temperature only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Population size factors",
                statement:
                  "Population size is controlled by births, deaths, immigration and emigration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The four direct factors are additions (births, immigration) and losses (deaths, emigration).",
                working: "births + immigration vs deaths + emigration",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Environmental factors like rainfall affect populations indirectly by influencing these rates.",
                working: "environment acts indirectly",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Birth rate, death rate, immigration and emigration",
            commonErrors: [
              "Listing abiotic factors as direct causes — they act through birth and death rates.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student must estimate the population size of (i) daisies in a meadow and (ii) rabbits in the same meadow. Compare quadrat sampling and mark-recapture as methods, stating which suits each organism and why.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe how quadrat sampling is carried out and when it is appropriate.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe how mark-recapture is carried out and when it is appropriate.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Recommend a method for daisies and for rabbits, justifying each choice.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quadrat sampling",
                statement:
                  "Counting organisms in frames of known area to estimate density and population.",
              },
              {
                kind: "formula",
                name: "Mark-recapture",
                statement:
                  "Population = (marked released × total recaptured) ÷ marked recaptured; for mobile animals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Place quadrats randomly, count organisms inside each, average the counts and scale by habitat area.",
                working: "random quadrats → mean → × area",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Appropriate for sessile or slow-moving organisms like plants that stay within the frame.",
                working: "for immobile organisms",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Mark, release and later recapture a sample; estimate population from the proportion of marked animals caught.",
                working: "mark → release → recapture → formula",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Appropriate for mobile animals that cannot be counted within a fixed area.",
                working: "for mobile animals",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Daisies: quadrats — they are stationary so frame counts represent density.",
                working: "quadrat for daisies",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Rabbits: mark-recapture — they move across the habitat so area sampling would miss them.",
                working: "mark-recapture for rabbits",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Random quadrats, count, average, scale by area — for sessile organisms. (b) Mark, release, recapture and apply the formula — for mobile animals. (c) Quadrats for daisies; mark-recapture for rabbits.",
            commonErrors: [
              "Suggesting quadrats for rabbits — they move too much for frame counts to be representative.",
              "Describing the methods without linking them to organism mobility.",
            ],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c).",
          },
        },
        {
          id: "biosl-u4-populations-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A population levels off at its carrying capacity when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The birth rate equals the death rate because resources have become limiting",
              },
              { id: "b", text: "Immigration exceeds emigration" },
              {
                id: "c",
                text: "The population reaches its minimum possible size",
              },
              {
                id: "d",
                text: "All individuals simultaneously stop reproducing",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement:
                  "Maximum sustainable population size; growth stops when births balance deaths.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At carrying capacity resources limit growth, so births and deaths balance and the population stays roughly constant.",
                working: "births = deaths at K",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is the plateau of the logistic curve, not a minimum and not caused by migration alone.",
                working: "plateau = K",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Birth rate equals death rate as resources limit growth",
            commonErrors: [
              "Thinking the population stops because individuals 'choose' not to reproduce.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "In a pond survey, site A has a mean density of 24 organisms per m² across a 40 m² area, and site B has a mean density of 9 per m² across a 60 m² area. Calculate the estimated population at each site and the combined total.",
          response: {
            type: "numeric",
            parts: [
              { label: "Site A population", answer: 960 },
              { label: "Site B population", answer: 540 },
              { label: "Combined total", answer: 1500 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Population from density",
                statement: "Population = density × area",
              },
            ],
            steps: [
              {
                reasoning: "Site A: $24 \\times 40 = 960$ organisms.",
                working: "24 \\times 40 = 960",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Site B: $9 \\times 60 = 540$ organisms.",
                working: "9 \\times 60 = 540",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combined total = $960 + 540 = 1500$.",
                working: "960 + 540 = 1500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Site A: 960; site B: 540; total: 1500",
            commonErrors: [
              "Adding densities before multiplying — each site has a different area.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-populations-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "The graph of a bacterial population in a culture shows a lag phase, a steep log phase, then a plateau. A student concludes 'the population stopped growing because it ran out of food.' Evaluate this conclusion.",
          parts: [
            {
              label: "a",
              prompt: "Describe what each phase of the curve represents.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Evaluate the student's conclusion that food ran out.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest two other factors that could limit growth at the plateau.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "State why more than one sample or replicate is needed when estimating population size.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Population growth phases",
                statement:
                  "Lag phase (slow start), log phase (exponential growth), plateau at carrying capacity (resource-limited).",
              },
              {
                kind: "principle",
                name: "Carrying capacity",
                statement:
                  "The plateau occurs when the environment cannot support further net growth.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Lag phase: cells adjust to conditions; log phase: exponential growth with abundant resources.",
                working: "lag = adjustment; log = exponential",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Plateau: growth levels off at carrying capacity as resources become limiting.",
                working: "plateau = carrying capacity",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Plausible — nutrient depletion is a common cause of the plateau, matching logistic growth.",
                working: "food depletion fits the curve",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "But it is not proven: other resources (oxygen, space, accumulated waste) could equally cause the plateau — the claim needs evidence.",
                working: "other limiting factors possible",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Any two valid factors: oxygen depletion, space, toxic waste accumulation, pH change.",
                working: "e.g. O2 or waste",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Both factors linked to the plateau mechanism — growth stops when any resource becomes limiting.",
                working: "resource limitation general",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "One sample may be unrepresentative due to clumping or chance; replicates reduce bias and give a reliable estimate.",
                working: "replicates reduce bias",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Lag = adjustment; log = exponential growth; plateau = carrying capacity. (b) Plausible but unproven — oxygen, space or waste could also limit growth. (c) E.g. oxygen depletion and toxic waste accumulation. (d) Replicates reduce bias from unrepresentative samples.",
            commonErrors: [
              "Accepting 'food ran out' as proven without considering other limiting factors.",
              "Describing the phases without linking the plateau to resource limitation.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 A1 (c); A1 (d). Accept any two valid limiting factors in (c).",
          },
        },
      ],
    },
    {
      id: "biosl-u4-communities-succession",
      title: "Communities, succession and nutrient cycles",
      skill:
        "Describe community structure, the stages of succession, and the cycling of carbon and nitrogen through ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Community structure",
            body: "A community consists of populations linked by feeding relationships (**food webs**) and competition for resources. Species interact through predation, herbivory, competition and mutualism. The **trophic level** of an organism describes its position in the food chain; energy decreases at each transfer, so top predators are few.",
          },
          {
            heading: "Succession",
            body: "**Primary succession** begins on bare rock or new volcanic lava: pioneer species such as lichens and mosses weather rock and build soil, followed by grasses, shrubs and eventually a **climax community** of stable, long-lived species. **Secondary succession** restarts on soil that already exists after disturbance such as fire or farming, and usually reaches the climax faster because soil and seeds survive.",
          },
          {
            heading: "Carbon and nitrogen cycles",
            body: "Carbon moves between the atmosphere, organisms and soil through **photosynthesis** (fixing CO2), **respiration** and decomposition, with fossil fuels storing carbon long-term. Nitrogen must be fixed by bacteria or lightning before plants can use it; it returns to the atmosphere through denitrification. Human activities — burning fossil fuels, fertiliser runoff — overload these cycles, causing climate change and eutrophication.",
          },
        ],
        keyFormulas: [
          {
            name: "Succession sequence",
            statement:
              "Pioneer species → grasses/shrubs → climax community; primary (no soil) is slower than secondary (soil remains)",
          },
          {
            name: "Carbon cycle",
            statement:
              "Photosynthesis removes CO2; respiration and decomposition release it; combustion adds fossil carbon",
          },
          {
            name: "Nitrogen cycle",
            statement:
              "Nitrogen fixation → nitrates for plants → food chain → denitrification back to atmosphere",
          },
        ],
        workedExample: {
          problem:
            "After a forest fire destroys vegetation but leaves soil intact, grasses appear first, then shrubs, then young trees. Name the type of succession and predict what comes next.",
          solution:
            "Secondary succession, because soil survived. Grasses and shrubs are early colonisers; over time shade-tolerant tree species should establish and move the community toward the previous climax forest.",
        },
      },
      questions: [
        {
          id: "biosl-u4-communities-succession-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Which organisms typically act as pioneer species in primary succession on bare rock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large herbivores" },
              { id: "b", text: "Lichens and mosses" },
              { id: "c", text: "Tall trees" },
              { id: "d", text: "Top predators" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pioneer species",
                statement:
                  "First colonisers of a bare habitat; tolerant of harsh conditions and able to build soil.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lichens and mosses survive on bare rock and begin soil formation, making them classic pioneers.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Lichens and mosses",
            commonErrors: [
              "Choosing trees — they need soil and cannot colonise bare rock.",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u4-communities-succession-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Why does secondary succession usually reach a climax community faster than primary succession?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Because the climax community is different in each case",
              },
              {
                id: "b",
                text: "Because soil, nutrients and often seeds survive the disturbance, giving colonisers a head start",
              },
              {
                id: "c",
                text: "Because secondary succession involves no living organisms",
              },
              {
                id: "d",
                text: "Because secondary succession skips the pioneer stage entirely",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary succession",
                statement:
                  "Succession on soil that remains after disturbance; faster than primary succession.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The key difference is surviving soil with nutrients, organic matter and often a seed bank.",
                working: "soil + seeds survive",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Colonisers therefore establish and grow faster than on bare rock, so succession proceeds more quickly.",
                working: "head start → faster",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Soil and seeds survive, giving colonisers a head start",
            commonErrors: [
              "Claiming secondary succession skips pioneers entirely — pioneers may still appear but establish faster.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A farmer adds nitrate fertiliser to his fields every year. Runoff from the fields enters a nearby lake. Predict and explain the most likely effect on the lake ecosystem.",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The lake will become more diverse because extra nutrients always help",
              },
              {
                id: "b",
                text: "Nitrate will fix atmospheric nitrogen and increase fish numbers directly",
              },
              {
                id: "c",
                text: "No effect, because nitrate is harmless in water",
              },
              {
                id: "d",
                text: "Algal blooms will fuelled by the nitrate; when algae die, decomposition depletes oxygen and fish may die",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eutrophication",
                statement:
                  "Nutrient enrichment causes algal blooms; decomposition of dead algae consumes dissolved oxygen, harming aquatic life.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nitrate runoff enriches the lake, stimulating rapid algal growth (algal bloom).",
                working: "nitrate → algal bloom",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When the algae die, decomposer bacteria respire and consume dissolved oxygen faster than it is replaced.",
                working: "decomposition uses O2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Oxygen depletion suffocates fish and other aerobic organisms — eutrophication reduces biodiversity.",
                working: "hypoxia → fish kills",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Algal bloom followed by oxygen depletion (eutrophication)",
            commonErrors: [
              "Assuming more nutrients always increase biodiversity — excess nutrients cause eutrophication.",
            ],
            examinerNote:
              "M1 M1 A1. Award M1 for eutrophication link and M1 for decomposition/oxygen mechanism.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A lake receives nitrogen-rich fertiliser runoff each spring. Dissolved oxygen levels in the lake fall from 9 mg/L in winter to 3 mg/L in late summer, and fish kills are reported in August. The local council proposes planting reed beds along the shore as a mitigation measure.",
          parts: [
            {
              label: "a",
              prompt:
                "Name the process by which atmospheric nitrogen becomes usable by plants, and one human activity that adds nitrate to water.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the link between fertiliser runoff and the fall in dissolved oxygen.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest why dissolved oxygen is lowest in late summer rather than in winter.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the proposal to plant reed beds as a way to reduce eutrophication.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nitrogen fixation",
                statement:
                  "Conversion of atmospheric nitrogen into nitrates by bacteria (or lightning), making it available to plants.",
              },
              {
                kind: "principle",
                name: "Eutrophication",
                statement:
                  "Nutrient enrichment → algal bloom → decomposition depletes oxygen → loss of aerobic life.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Nitrogen fixation by bacteria (or lightning).",
                working: "nitrogen fixation",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "Any valid human nitrate source: fertiliser application/runoff, sewage discharge.",
                working: "e.g. fertiliser runoff",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Nitrate fuels algal growth; algae die and decomposers respire, consuming dissolved oxygen.",
                working: "algae → decomposition → O2 use",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Oxygen falls below what fish need, causing the August kills — eutrophication.",
                working: "hypoxia kills fish",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Warmer water holds less oxygen and speeds decomposition and respiration rates.",
                working: "warm water holds less O2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Peak algal biomass and microbial activity occur in summer, so oxygen demand is greatest then.",
                working: "summer algal peak",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Benefit: reeds absorb nitrates and provide habitat; roots stabilise sediment and shade reduces algal growth.",
                working: "nitrate uptake + habitat",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Limitation: reeds treat symptoms slowly and cannot remove the fertiliser source; it must be combined with reduced fertiliser use or buffer strips to be effective.",
                working: "treats symptom not cause",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Nitrogen fixation by bacteria/lightning; fertiliser runoff or sewage. (b) Nitrate → algal bloom → decomposition consumes oxygen. (c) Warmer water holds less O2 and microbial/algal activity peaks in summer. (d) Useful buffer but insufficient alone — the fertiliser input must also be reduced.",
            commonErrors: [
              "Suggesting plants 'add' oxygen in daylight only — the problem is decomposition demand exceeding supply.",
              "Treating reed beds as a complete solution.",
            ],
            examinerNote:
              "B1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). Accept alternative valid reasons for (c).",
          },
        },
        {
          id: "biosl-u4-communities-succession-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A climax community is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A stable, self-perpetuating community in which species composition has effectively stopped changing",
              },
              {
                id: "b",
                text: "The community containing the largest species present",
              },
              { id: "c", text: "The first species to colonise bare rock" },
              {
                id: "d",
                text: "Any community found immediately after a disturbance",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax community",
                statement:
                  "The stable, self-perpetuating final stage of succession.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The climax is the endpoint of succession — stable and self-replacing, not a pioneer or a post-disturbance stage.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A stable, self-perpetuating community",
            commonErrors: ["Confusing climax with pioneer or seral stages."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u4-communities-succession-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In primary succession on newly formed volcanic lava, which sequence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grasses → lichens → trees → shrubs" },
              { id: "b", text: "Trees → shrubs → grasses → lichens" },
              { id: "c", text: "Shrubs → trees → grasses → lichens" },
              {
                id: "d",
                text: "Lichens and mosses → grasses → shrubs → trees",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary succession",
                statement:
                  "Succession on bare rock or lava: pioneers → grasses → shrubs → climax trees.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pioneer species must tolerate bare rock and begin soil formation — lichens and mosses come first.",
                working: "pioneers first",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As soil builds, grasses, then shrubs, then trees establish — the sequence runs from small to large, soil-tolerant species.",
                working: "soil-builders → competitors → climax",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Lichens/mosses → grasses → shrubs → trees",
            commonErrors: [
              "Starting with trees — they cannot colonise bare rock without soil.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a food chain, producers capture $10\\,000$ kJ of energy. Assuming 10% is transferred at each trophic level, calculate the energy available to primary consumers (herbivores).",
          response: {
            type: "numeric",
            parts: [{ label: "Energy to herbivores (kJ)", answer: 1000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy transfer",
                statement:
                  "$E_{\\text{next level}} = E_{\\text{previous}} \\times 0.10$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply the 10% transfer efficiency to the producer energy.",
                working: "10\\,000 \\times 0.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the transferred energy.",
                working: "= 1\\,000\\ \\text{kJ}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1\\,000$ kJ",
            commonErrors: [
              "Multiplying by 10 instead of 0.10 — only 10% transfers, not 1000%.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Herbivores in a meadow receive 500 kJ of energy from producers that captured 5000 kJ. Calculate the percentage of energy transferred to the herbivore trophic level.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage transferred", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transfer efficiency",
                statement:
                  "$\\% = \\frac{\\text{energy at level}}{\\text{energy at previous level}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Set up the ratio of herbivore to producer energy.",
                working: "\\frac{500}{5000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.1 \\times 100 = 10\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10%",
            commonErrors: [
              "Inverting the ratio — $\\frac{5000}{500} = 1000\\%$ is impossible.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A forest ecosystem fixes 200 tonnes of carbon per year through photosynthesis, while respiration and decomposition release 150 tonnes per year. Calculate the net annual carbon storage by the forest.",
          response: {
            type: "numeric",
            parts: [{ label: "Net carbon storage (tonnes)", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net carbon balance",
                statement:
                  "$\\text{net storage} = \\text{carbon fixed} - \\text{carbon released}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify the inputs and outputs: photosynthesis removes 200 tonnes; respiration and decomposition release 150 tonnes.",
                working: "200 \\text{ in}; 150 \\text{ out}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Net storage is the difference between fixation and release.",
                working: "200 - 150",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The forest stores a net 50 tonnes of carbon per year.",
                working: "= 50\\ \\text{tonnes}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "50 tonnes of carbon per year",
            commonErrors: [
              "Adding 200 + 150 instead of subtracting — gross fixation is not net storage.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Most plants cannot use atmospheric nitrogen ($N_2$) directly. Why is this?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Nitrogen gas is too abundant in the atmosphere",
              },
              { id: "b", text: "Plants only require phosphorus, not nitrogen" },
              {
                id: "c",
                text: "The triple bond in $N_2$ is very stable, so the nitrogen must first be fixed into nitrates by bacteria or lightning",
              },
              { id: "d", text: "Nitrogen gas is toxic to plant roots" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nitrogen fixation",
                statement:
                  "Atmospheric $N_2$ must be converted to nitrates before plants can absorb it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The $N\\equiv N$ triple bond is extremely strong, so plants cannot break it themselves.",
                working: "stable triple bond",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Nitrogen must be fixed — by bacteria or lightning — into nitrates, the form plants absorb.",
                working: "fixation → nitrates",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Abundance of $N_2$ is not the problem; the chemical stability is.",
                working: "stability, not abundance",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The stable triple bond requires nitrogen fixation first",
            commonErrors: [
              "Saying nitrogen is 'absent' — it is abundant but chemically unavailable.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A farmer applies 60 kg of nitrate fertiliser to a field. Crops absorb 45 kg and the remaining 15 kg runs off into a stream. Calculate the percentage of the fertiliser lost to runoff.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage lost", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage loss",
                statement:
                  "$\\% = \\frac{\\text{lost}}{\\text{applied}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Lost = $60 - 45 = 15$ kg; set up the ratio.",
                working: "\\frac{15}{60}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.25 \\times 100 = 25\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
            commonErrors: [
              "Using 45/60 — that is the percentage absorbed, not lost.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Which process in the nitrogen cycle returns nitrogen gas to the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrification" },
              { id: "b", text: "Denitrification" },
              { id: "c", text: "Nitrogen fixation" },
              { id: "d", text: "Photosynthesis" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denitrification",
                statement:
                  "Bacteria convert nitrates back to atmospheric nitrogen gas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Denitrification releases $N_2$ to the atmosphere; fixation does the opposite.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Denitrification",
            commonErrors: [
              "Confusing fixation (adding nitrogen to soil) with denitrification (returning it to air).",
            ],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "biosl-u4-communities-succession-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A lava flow creates new land on one side of a volcano, while a forest fire burns the vegetation on the other side but leaves the soil intact. Compare the succession expected in each area.",
          parts: [
            {
              label: "a",
              prompt:
                "Name the type of succession on the lava flow and describe the expected sequence of colonisers.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Name the type of succession after the fire and describe the expected sequence of colonisers.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the post-fire area will probably reach a climax community faster.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary succession",
                statement:
                  "Succession on bare rock/lava with no soil — slow, starting with pioneers.",
              },
              {
                kind: "definition",
                name: "Secondary succession",
                statement:
                  "Succession on surviving soil after disturbance — faster due to soil, nutrients and seed bank.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Primary succession — bare lava has no soil.",
                working: "primary succession",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Sequence: lichens/mosses → grasses → shrubs → trees as soil slowly forms.",
                working: "pioneers → climax",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Secondary succession — soil and often seeds survived the fire.",
                working: "secondary succession",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Sequence: fast-growing herbs/grasses → shrubs → trees regrowing toward the previous community.",
                working: "weeds → shrubs → trees",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Surviving soil provides nutrients, organic matter and a seed bank, so colonisers establish without waiting for soil formation.",
                working: "soil + seeds = head start",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "This removes the slowest stage (soil formation), so succession reaches climax much faster.",
                working: "skips slow soil stage",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Primary succession on lava: lichens/mosses → grasses → shrubs → trees. (b) Secondary succession after fire: herbs/grasses → shrubs → trees. (c) Surviving soil and seeds give colonisers a head start, skipping slow soil formation.",
            commonErrors: [
              "Calling post-fire succession 'primary' — soil survived, so it is secondary.",
              "Suggesting pioneers are skipped entirely after fire — they may still appear but establish faster.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 A1 (c). Accept valid alternative sequences.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which human activity adds the largest amount of reactive nitrogen to ecosystems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Planting deciduous trees in urban areas" },
              { id: "b", text: "Creating protected nature reserves" },
              {
                id: "c",
                text: "Burning fossil fuels and applying synthetic fertilisers",
              },
              { id: "d", text: "Composting garden waste" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human impact on nitrogen cycle",
                statement:
                  "Fossil fuel combustion and fertiliser use add reactive nitrogen far beyond natural fixation rates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fossil fuel burning releases nitrogen oxides and fertilisers add nitrates directly to soil and water.",
                working: "combustion + fertiliser inputs",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These inputs overload the natural nitrogen cycle, causing eutrophication and other problems.",
                working: "cycle overload",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Burning fossil fuels and applying synthetic fertilisers",
            commonErrors: [
              "Choosing activities that remove or cycle nitrogen naturally rather than adding reactive forms.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Dissolved oxygen in a lake falls from 9 mg/L in winter to 3 mg/L in late summer. Fish require at least 5 mg/L dissolved oxygen. Calculate (a) how far below the fish threshold the late-summer value is, and (b) the percentage decrease in dissolved oxygen.",
          response: {
            type: "numeric",
            parts: [
              { label: "Below threshold (mg/L)", answer: 2 },
              { label: "Percentage decrease (%)", answer: 66.7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Threshold deficit and percentage change",
                statement:
                  "Deficit = threshold − actual; $\\% = \\frac{\\text{change}}{\\text{original}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deficit below the 5 mg/L threshold: $5 - 3 = 2$ mg/L.",
                working: "5 - 3 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Absolute decrease = $9 - 3 = 6$ mg/L; percentage decrease = $\\frac{6}{9} \\times 100$.",
                working: "\\frac{6}{9} \\times 100 \\approx 66.7\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Late-summer oxygen is about 67% lower than winter and below what fish need — explaining fish kills.",
                working: "below threshold → hypoxia",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2 mg/L below threshold; (b) about 66.7% decrease",
            commonErrors: [
              "Using 3 as the denominator for percentage decrease — the reference is the winter value 9.",
            ],
            examinerNote: "M1 M1 A1. Accept 66.7 or 67 for the percentage.",
          },
        },
        {
          id: "biosl-u4-communities-succession-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Explain how carbon moves between the atmosphere, living organisms and the soil, naming the processes involved, and evaluate the effect of human activities on the carbon cycle.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe the role of photosynthesis and respiration in the carbon cycle.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe two other processes or stores in the carbon cycle.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate how human activities have altered the carbon cycle.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Carbon cycle",
                statement:
                  "Photosynthesis fixes $CO_2$; respiration and decomposition release it; combustion adds fossil carbon.",
              },
              {
                kind: "principle",
                name: "Human impact",
                statement:
                  "Burning fossil fuels and deforestation increase atmospheric $CO_2$, driving climate change.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Photosynthesis removes $CO_2$ from the atmosphere and fixes it into organic molecules in producers.",
                working: "\\text{photosynthesis fixes }CO_2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Respiration releases $CO_2$ back to the atmosphere from all living organisms.",
                working: "\\text{respiration releases }CO_2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Any two valid: decomposition returns carbon to soil/atmosphere; combustion of fossil fuels releases stored carbon; fossil fuels are a long-term carbon store.",
                working: "e.g. decomposition + fossil fuels",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Both processes correctly described with their direction of carbon flow.",
                working: "correct direction of flow",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Burning fossil fuels releases carbon stored over millions of years faster than natural cycles can reabsorb it.",
                working: "fossil carbon released rapidly",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Deforestation removes photosynthesising biomass, reducing the carbon sink while releasing stored carbon.",
                working: "deforestation reduces sink",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Net effect: rising atmospheric $CO_2$ and climate change — the cycle is overloaded beyond natural balance.",
                working: "\\text{net }CO_2\\text{ rise }\\to\\text{ warming}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Photosynthesis fixes $CO_2$; respiration releases it. (b) E.g. decomposition returns carbon to soil/air; fossil fuels store carbon long-term. (c) Fossil fuel burning and deforestation add $CO_2$ faster than it is removed, raising atmospheric $CO_2$ and driving climate change.",
            commonErrors: [
              "Describing only one direction of the carbon cycle.",
              "Claiming human activity has no net effect because forests absorb $CO_2$ — inputs exceed removal.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 M1 A1 (c). Accept any two valid processes/stores in (b).",
          },
        },
      ],
    },
  ],
};
