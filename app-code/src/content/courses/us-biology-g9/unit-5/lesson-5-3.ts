import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "bio9-u5-lesson-5-3",
  code: "5-3",
  title: "Capstone: Communicating Science",
  goal: "I CAN communicate biological findings clearly, distinguish fact from opinion in science reporting, and evaluate media claims about health and environment.",
  standards: [
    "HS-LS1-3",
    "SEP: Obtaining, Evaluating and Communicating Information",
    "SEP: Engaging in Argument from Evidence",
  ],
  vocabulary: [
    {
      term: "Scientific communication",
      definition:
        "Translating research findings into clear language for non-specialists.",
    },
    {
      term: "Peer review",
      definition: "Evaluation of research by other experts before publication.",
    },
    {
      term: "Correlation",
      definition:
        "A statistical relationship between two variables; does not prove causation.",
    },
    {
      term: "Causation",
      definition: "One variable directly producing an effect in another.",
    },
    {
      term: "Sensationalism",
      definition:
        "Exaggerating findings for attention, often distorting the science.",
    },
    {
      term: "Consensus",
      definition:
        "General agreement among experts based on the weight of evidence.",
    },
    {
      term: "Margin of error",
      definition:
        "The range within which a measurement or estimate is likely to fall.",
    },
    {
      term: "Replication",
      definition: "Repeating a study to verify results are reliable.",
    },
  ],
  concepts: [
    {
      id: "bio9-u5-science-communication",
      title: "Communicating science clearly",
      skill:
        "Translate technical findings into accurate plain language and identify distortions.",
      lesson: {
        sections: [
          {
            heading: "From lab to public",
            body: "Science communication bridges researchers and the public. Good communication preserves the science's uncertainty: 'The study found an association' is honest; 'X causes Y' overstates. Technical terms must be translated without losing precision.",
          },
          {
            heading: "Common distortions",
            body: "- **Overstatement**: 'may be linked to' becomes 'causes'\n- **Cherry-picking**: reporting only supportive results\n- **False balance**: giving equal weight to fringe views\n- **Sensational headlines**: 'Cure found!' for preliminary findings\n- **Correlation-as-causation**: 'coffee drinkers live longer' ≠ coffee causes longevity",
          },
          {
            heading: "Evaluating health headlines",
            body: "Ask: What was actually studied? Sample size? Was it an experiment or observation? Who funded it? Has it been replicated? Is the headline stronger than the finding? Consensus among experts matters more than single studies.",
          },
        ],
        keyFormulas: [
          {
            name: "Honest communication",
            statement: "Preserve uncertainty; don't overstate findings.",
          },
          {
            name: "Consensus",
            statement: "Weight of evidence across many studies > single study.",
          },
        ],
        workedExample: {
          problem:
            "Headline: 'New study proves chocolate prevents heart disease.' The study: 50 people ate chocolate daily for 2 weeks; cholesterol improved slightly. What's wrong?",
          solution:
            "Multiple problems: tiny sample, short duration, no control group, self-reported diet, 'proves' overstates an association. Needs replication and RCTs before any claim.",
        },
      },
      questions: [
        {
          id: "bio9-u5-science-communication-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is peer review important in science?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes papers longer" },
              {
                id: "b",
                text: "Other experts check the methods and conclusions before publication",
              },
              { id: "c", text: "It guarantees results are correct" },
              { id: "d", text: "It slows down research" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer review",
                statement:
                  "Expert evaluation filters flawed methods and overclaims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peer review lets independent experts check methods, analysis and conclusions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Expert checking before publication",
            commonErrors: ["Thinking peer review guarantees truth."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio9-u5-science-communication-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A headline says 'Vaccine causes autism.' The actual study: 12 children, parent-reported symptoms, later retracted. Explain why this is bad science communication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distortion",
                statement:
                  "Headline overstates a tiny, flawed, retracted study.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sample of 12 is far too small to detect real effects.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Parent-reported symptoms are unreliable; no objective measurement.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Study was retracted — it failed peer review; headline ignores this.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tiny flawed sample, unreliable data, retracted — headline ignores all of it.",
            commonErrors: ["Focusing only on the conclusion, not the method."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio9-u5-science-communication-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why scientific consensus is more reliable than any single study, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consensus",
                statement:
                  "Many independent studies converge on the same conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Single studies can have flaws, small samples, or chance results.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Consensus means many independent researchers, methods and datasets reach the same conclusion.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Example: climate change — thousands of studies, multiple lines of evidence (temperature, ice cores, satellite data) all agree.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Independent replication reduces the chance that any one error or bias explains the result.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Consensus = convergent independent evidence; single studies can be flawed by chance or bias.",
            commonErrors: [
              "Treating consensus as 'opinion' rather than evidence weight.",
            ],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio9-u5-science-communication-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A viral post claims: 'Doctors don't want you to know this natural cure for cancer.'",
          parts: [
            {
              label: "a",
              prompt: "Identify three red flags in this claim.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain what real cancer research looks like.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Write a 3-sentence response that corrects the misinformation without being dismissive.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Misinformation",
                statement: "Conspiracy framing, no evidence, 'natural' appeal.",
              },
              {
                kind: "principle",
                name: "Science communication",
                statement: "Correct with evidence, not ridicule.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Red flag 1: conspiracy framing ('doctors don't want you to know').",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Red flag 2: no evidence, no study, no mechanism.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Red flag 3: 'natural' used as if it means safe — natural toxins exist.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Real research: peer-reviewed RCTs, large samples, controls, replication, regulatory approval.",
                marks: 2,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Cancer is many diseases; no single 'cure' claim is credible without massive evidence.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Response cites evidence and acknowledges the person's concern.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Explains why the claim fails (no evidence, contradicted by research).",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Offers a constructive path (talk to oncologist, check reputable sources).",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Tone is respectful, not condescending.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) conspiracy, no evidence, 'natural' fallacy (b) RCTs, replication, regulation (c) evidence-based, respectful correction.",
            commonErrors: [
              "Mocking the believer instead of addressing the claim.",
            ],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
    {
      id: "bio9-u5-science-argument",
      title: "Building a science argument",
      skill:
        "Construct a claim-evidence-reasoning argument about a biological topic.",
      lesson: {
        sections: [
          {
            heading: "Claim-Evidence-Reasoning",
            body: "A scientific argument has three parts:\n\n1. **Claim**: what you assert (e.g., 'Wetlands reduce flooding')\n2. **Evidence**: data supporting it (e.g., 'Areas with wetlands had 40% less flood damage')\n3. **Reasoning**: why the evidence supports the claim (e.g., 'Wetland plants and soil absorb and slow floodwater')",
          },
          {
            heading: "Counterclaims",
            body: "Strong arguments address opposing views: 'Critics argue wetlands harbor mosquitoes, but the public health benefit of flood control outweighs this.' Acknowledging counterarguments makes the argument more credible.",
          },
          {
            heading: "From evidence to conclusion",
            body: "The reasoning must connect evidence to claim — it's not enough to list facts. Ask: how does this evidence prove the claim? What alternative explanations exist? Does the evidence actually measure what the claim requires?",
          },
        ],
        keyFormulas: [
          {
            name: "CER",
            statement: "Claim + Evidence + Reasoning = scientific argument.",
          },
          {
            name: "Reasoning",
            statement: "The bridge explaining WHY evidence supports the claim.",
          },
        ],
        workedExample: {
          problem:
            "Build a CER argument: 'School gardens improve student nutrition.'",
          solution:
            "Claim: gardens improve nutrition. Evidence: studies show students who garden eat more vegetables. Reasoning: hands-on growing increases willingness to try and eat vegetables.",
        },
      },
      questions: [
        {
          id: "bio9-u5-science-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a CER argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Claim, Evidence, Reasoning" },
              { id: "b", text: "Claim, Counterclaim, Conclusion" },
              { id: "c", text: "Hypothesis, Data, Graph" },
              { id: "d", text: "Introduction, Body, Conclusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CER",
                statement: "Claim-Evidence-Reasoning framework.",
              },
            ],
            steps: [
              {
                reasoning: "CER = Claim + Evidence + Reasoning.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Claim, Evidence, Reasoning",
            commonErrors: ["Confusing CER with essay structure."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "bio9-u5-science-argument-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the missing part: 'Bottled water is worse for the environment than tap water because it creates plastic waste.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reasoning",
                statement:
                  "The 'because' clause must explain WHY evidence supports the claim.",
              },
            ],
            steps: [
              {
                reasoning: "Claim: bottled water worse for environment.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Evidence is missing — no data about plastic waste, energy use, or water quality cited.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Reasoning is also thin — 'because' asserts rather than explains the mechanism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Missing evidence (data) and fuller reasoning (mechanism).",
            commonErrors: ["Thinking 'because' counts as reasoning."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio9-u5-science-argument-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student argues: 'Organic food is healthier because it has no pesticides.' Evaluate the reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reasoning gap",
                statement:
                  "Absence of pesticides ≠ healthier; need evidence linking to health outcomes.",
              },
              {
                kind: "principle",
                name: "Counterargument",
                statement: "Address opposing evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim is about health; evidence offered is about production method — mismatch.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Reasoning assumes 'no pesticides' automatically means healthier, but nutritional content is similar; pesticide residues in conventional food are regulated below safety limits.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Missing evidence: studies comparing health outcomes of organic vs conventional diets.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Counterargument: some studies find modest differences; others find none — conclusion should be cautious.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reasoning gap — production method doesn't prove health outcome; need outcome data.",
            commonErrors: [
              "Accepting plausible-sounding reasoning without checking evidence.",
            ],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "bio9-u5-science-argument-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write a CER argument for or against: 'Schools should eliminate cafeteria trays to reduce waste.'",
          parts: [
            { label: "a", prompt: "State a clear claim.", marks: 2 },
            {
              label: "b",
              prompt:
                "Provide two pieces of evidence with sources or data types.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain the reasoning connecting evidence to claim.",
              marks: 3,
            },
            { label: "d", prompt: "Address one counterargument.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CER",
                statement: "Claim-Evidence-Reasoning structure.",
              },
              {
                kind: "principle",
                name: "Counterargument",
                statement: "Address opposition strengthens credibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clear claim stated (e.g., 'Schools should eliminate trays because they reduce waste and costs').",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Evidence 1: trayless cafeterias report 30-50% less food waste (waste audits).",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Evidence 2: cost savings from reduced dishwashing and waste disposal.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Evidence 3: environmental benefit — less landfill waste.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Reasoning: without trays, students take only what they can carry, reducing over-serving and plate waste.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Reasoning: less food waste → less cost and environmental impact.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Reasoning: the mechanism (portion control) directly produces the claimed outcome.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Counterargument: trays help students carry multiple items and reduce spills.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Response: spills are minor vs waste reduction; trayless systems can still be organized.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) claim (b) waste/cost/environment evidence (c) portion-control mechanism (d) counter + response.",
            commonErrors: [
              "Evidence that doesn't connect to claim; ignoring counterarguments.",
            ],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
  ],
};
