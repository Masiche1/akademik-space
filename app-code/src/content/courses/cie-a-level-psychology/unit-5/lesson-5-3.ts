import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ciealepsych-u5-lesson-5-3",
  code: "5-3",
  title: "Psychopathology: Eating Disorders and Schizophrenia Treatment",
  goal: "I CAN explain eating disorders, schizophrenia treatment and evaluate biological/psychological approaches.",
  standards: [
    "Cambridge A Level Psychology 9698",
    "Unit 5: psychopathology and treatment depth",
  ],
  vocabulary: [
    {
      term: "Anorexia nervosa",
      definition: "Restrictive eating disorder; low body weight, fear of fat.",
    },
    {
      term: "Bulimia nervosa",
      definition: "Binge-eating with compensatory purging.",
    },
    {
      term: "Positive symptoms",
      definition: "Schizophrenia additions: hallucinations, delusions.",
    },
    {
      term: "Negative symptoms",
      definition: "Schizophrenia losses: flat affect, avolition.",
    },
    {
      term: "Antipsychotics",
      definition: "Dopamine-blocking drugs for schizophrenia.",
    },
    {
      term: "Family therapy",
      definition: "Psychological treatment involving family.",
    },
  ],
  concepts: [
    {
      id: "ciealepsych-u5l3-c1-eating",
      title: "Eating disorders: anorexia and bulimia",
      skill:
        "Explain characteristics, explanations and treatment of eating disorders.",
      lesson: {
        sections: [
          {
            heading: "Characteristics and explanations",
            body: "**Anorexia**: restriction of intake, intense fear of weight gain, distorted body image, low BMI; more common in females/Western cultures. **Bulimia**: binge eating + purging (vomiting, laxatives, exercise); normal weight possible. **Explanations**: biological (genetics, serotonin, leptin), psychological (cognitive distortions, perfectionism, low self-esteem), sociocultural (media ideals, peer pressure) — biopsychosocial interaction.",
          },
          {
            heading: "Treatment",
            body: "**CBT**: challenges distorted thoughts about body/food — effective for bulimia, moderate for anorexia. **Family-based treatment (FBT)**: parents manage refeeding — effective for adolescent anorexia. **SSRIs**: reduce binge/purge for bulimia; less effective for anorexia core symptoms. Relapse common — multidisciplinary approach needed.",
          },
        ],
        keyFormulas: [
          { name: "Anorexia", statement: "Restriction + fear of fat" },
          { name: "Bulimia", statement: "Binge + purge" },
          { name: "CBT/FBT", statement: "Psychological treatments" },
        ],
        workedExample: {
          problem: "Why does CBT work better for bulimia than anorexia?",
          solution:
            "Bulimia involves distorted cognitions about food/weight that CBT targets; anorexia involves deeper body-image disturbance and physiological starvation effects — harder to treat psychologically alone.",
        },
      },
      questions: [
        {
          id: "ciealepsych-q-u5l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Anorexia nervosa is characterised by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Restriction of food intake and fear of weight gain",
              },
              { id: "b", text: "Normal eating" },
              { id: "c", text: "Overeating" },
              { id: "d", text: "Binge eating only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anorexia",
                statement: "Restriction.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Restriction",
            commonErrors: ["Bulimia."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish anorexia from bulimia nervosa.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Anorexia vs bulimia",
                statement: "Restriction vs binge-purge.",
              },
            ],
            steps: [
              { reasoning: "Anorexia.", marks: 1, markCode: "M" },
              { reasoning: "Bulimia.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Anorexia: severe restriction, low weight, fear of fat. Bulimia: binge eating + compensatory purging, weight often normal — different patterns.",
            commonErrors: ["Same disorder."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'biopsychosocial' explanation of eating disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biopsychosocial",
                statement: "Multi-factorial.",
              },
            ],
            steps: [
              { reasoning: "Biological.", marks: 1, markCode: "M" },
              { reasoning: "Psychological.", marks: 1, markCode: "M" },
              { reasoning: "Sociocultural.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Genetics/serotonin + cognitive distortions/perfectionism + media ideals/peer pressure interact — no single cause; explains individual variation and treatment needs.",
            commonErrors: ["Single cause."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate CBT as a treatment for eating disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT eval",
                statement: "Effective but limited.",
              },
            ],
            steps: [
              { reasoning: "Effectiveness.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Effective for bulimia (reduces binge/purge ~50%), moderate for anorexia — but relapse common, doesn't address underlying body-image issues fully, requires motivated patient.",
            commonErrors: ["Universal cure."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of 'sociocultural factors' in eating disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociocultural",
                statement: "Media + culture.",
              },
            ],
            steps: [
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Western thin-ideal media correlates with higher rates; but not all exposed develop disorders — interacts with individual vulnerability (genetics, personality); necessary but not sufficient cause.",
            commonErrors: ["Direct cause."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'family-based treatment' for anorexia?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "FBT", statement: "Parents manage." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Parents take responsibility for refeeding child — effective for adolescent anorexia; evidence-based, especially early intervention.",
            commonErrors: ["Individual therapy only."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bulimia nervosa involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overweight only" },
              { id: "b", text: "Binge eating followed by purging" },
              { id: "c", text: "No compensatory behaviour" },
              { id: "d", text: "Only restriction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Bulimia", statement: "Binge-purge." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Binge-purge",
            commonErrors: ["Anorexia."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two biological explanations for eating disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Bio explanations",
                statement: "Genetics, serotonin.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. genetic predisposition (family studies show heritability) and serotonin dysfunction (mood/appetite regulation) — also leptin abnormalities affecting hunger signals.",
            commonErrors: ["Only psychological."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is relapse common in eating disorder treatment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relapse",
                statement: "Maintenance factors.",
              },
            ],
            steps: [
              { reasoning: "Biological.", marks: 1, markCode: "M" },
              { reasoning: "Psychological.", marks: 1, markCode: "M" },
              { reasoning: "Social.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Underlying vulnerabilities remain (genetics, distorted thinking, sociocultural pressure) — treatment addresses symptoms not causes; requires ongoing support and relapse prevention planning.",
            commonErrors: ["Treatment failure only."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of drug therapy for eating disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drug therapy eval",
                statement: "Limited.",
              },
            ],
            steps: [
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "SSRIs reduce binge/purge frequency for bulimia but less effective for anorexia core symptoms — addresses biological component only; best combined with psychological therapy, not standalone.",
            commonErrors: ["Universal cure."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Compared with males, anorexia nervosa is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only found in males" },
              { id: "b", text: "Equally common" },
              { id: "c", text: "Much more common in females" },
              { id: "d", text: "More common in children" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Anorexia sex ratio",
                statement: "Female preponderance.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** More common in females",
            commonErrors: ["No sex difference."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "CBT reduces binge/purge frequency in bulimia nervosa by approximately what percentage?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, tolerance: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "CBT bulimia",
                statement: "~50% reduction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CBT reduces binge eating and purging frequency in bulimia by roughly 50% in treatment studies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "50",
            commonErrors: ["100% cure."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "According to ICD-10 criteria, a BMI below approximately what value indicates severe thinness consistent with anorexia nervosa?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 17.5, tolerance: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "BMI criterion",
                statement: "<17.5.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ICD-10 uses BMI below about 17.5 (or >15% weight loss) as an indicator of severe thinness in anorexia nervosa.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "17.5",
            commonErrors: ["Normal BMI range."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which treatment is most effective for adolescent anorexia nervosa?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Family-based treatment" },
              { id: "b", text: "SSRIs alone" },
              { id: "c", text: "No treatment needed" },
              { id: "d", text: "Token economy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "FBT evidence",
                statement: "Adolescent anorexia.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Family-based treatment",
            commonErrors: ["Drug-only."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does media exposure alone not fully explain eating disorders?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eating disorders are purely genetic" },
              { id: "b", text: "Media has no effect at all" },
              { id: "c", text: "Only males watch media" },
              {
                id: "d",
                text: "It interacts with individual vulnerability (genetics, personality)",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sociocultural limits",
                statement: "Necessary not sufficient.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Interaction with vulnerability",
            commonErrors: ["Single cause."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the biopsychosocial model as an explanation of eating disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biopsychosocial",
                statement: "Multi-factorial.",
              },
            ],
            steps: [
              { reasoning: "Biological factors.", marks: 1, markCode: "M" },
              { reasoning: "Psychological factors.", marks: 1, markCode: "M" },
              { reasoning: "Sociocultural factors.", marks: 1, markCode: "A" },
              { reasoning: "Interaction.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Genetics/serotonin create vulnerability + perfectionism/distorted cognition + thin-ideal culture interact — explains why not all exposed develop disorders and why treatment must be multidisciplinary.",
            commonErrors: ["Single-factor explanation."],
          },
        },
      ],
    },
    {
      id: "ciealepsych-u5l3-c2-schiz-treatment",
      title: "Schizophrenia treatment: biological and psychological",
      skill: "Evaluate drug therapy, CBT and family therapy for schizophrenia.",
      lesson: {
        sections: [
          {
            heading: "Biological treatment: antipsychotics",
            body: "**Typical** (chlorpromazine): block dopamine D2 receptors — reduce positive symptoms. **Atypical** (risperidone, olanzapine): serotonin + dopamine — fewer extrapyramidal side effects, some negative symptom improvement. Side effects: tardive dyskinesia, weight gain, sedation. Not a cure — relapse common when stopped.",
          },
          {
            heading: "Psychological treatment: CBT and family therapy",
            body: "**CBT**: challenges delusions/hallucinations, tests reality — reduces positive symptoms, improves insight; works alongside drugs. **Family therapy**: educates family, reduces expressed emotion (criticism, hostility) — reduces relapse. **Token economy**: rewards adaptive behaviour in institutions. Combined approach best — NICE guidelines recommend CBT + family + medication.",
          },
        ],
        keyFormulas: [
          { name: "Antipsychotics", statement: "Dopamine blockers" },
          { name: "CBT", statement: "Reality testing" },
          { name: "Family therapy", statement: "Reduce expressed emotion" },
        ],
        workedExample: {
          problem:
            "Why is combined treatment better than drugs alone for schizophrenia?",
          solution:
            "Drugs manage symptoms but don't address underlying beliefs/behaviour; CBT challenges delusions, family therapy reduces relapse triggers — combined addresses biological + psychological + social.",
        },
      },
      questions: [
        {
          id: "ciealepsych-q-u5l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Antipsychotic drugs primarily work by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blocking acetylcholine" },
              { id: "b", text: "Increasing dopamine" },
              { id: "c", text: "Increasing serotonin" },
              { id: "d", text: "Blocking dopamine receptors" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Antipsychotics",
                statement: "D2 blockers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Dopamine block",
            commonErrors: ["Wrong mechanism."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish typical from atypical antipsychotics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Typical vs atypical",
                statement: "D2 vs multi-receptor.",
              },
            ],
            steps: [
              { reasoning: "Typical.", marks: 1, markCode: "M" },
              { reasoning: "Atypical.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Typical: D2 blockers (chlorpromazine), more extrapyramidal side effects. Atypical: serotonin + dopamine (risperidone), fewer side effects, some negative symptom benefit.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how CBT helps schizophrenia patients.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT for schizo",
                statement: "Reality testing.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Target symptoms.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Challenges delusional beliefs, tests hallucinations against reality, develops coping strategies — reduces positive symptoms, improves insight; evidence shows moderate effectiveness alongside medication.",
            commonErrors: ["Cure only."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate drug therapy for schizophrenia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drug eval",
                statement: "Effective but limited.",
              },
            ],
            steps: [
              { reasoning: "Effectiveness.", marks: 1, markCode: "M" },
              { reasoning: "Side effects.", marks: 1, markCode: "M" },
              { reasoning: "Relapse.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reduces positive symptoms effectively but not negative symptoms; side effects (tardive dyskinesia, weight gain) limit use; relapse common when stopped — symptom management not cure.",
            commonErrors: ["Perfect cure."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of 'expressed emotion' in schizophrenia relapse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expressed emotion",
                statement: "Family stress.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Implications.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High expressed emotion (criticism, hostility, over-involvement) predicts relapse — family therapy reduces EE, lowers relapse rates; shows social environment critical in schizophrenia course.",
            commonErrors: ["No social role."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'family therapy' for schizophrenia?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Family therapy",
                statement: "Family involvement.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Educates family about illness, reduces expressed emotion, improves communication — reduces relapse rates; addresses social environment maintaining symptoms.",
            commonErrors: ["Individual only."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Positive symptoms of schizophrenia include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social withdrawal" },
              { id: "b", text: "Hallucinations and delusions" },
              { id: "c", text: "Avolition" },
              { id: "d", text: "Flat affect only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Positive symptoms",
                statement: "Additions.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Hallucinations/delusions",
            commonErrors: ["Negative symptoms."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two limitations of antipsychotic drug therapy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Drug limits",
                statement: "Side effects + relapse.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. significant side effects (tardive dyskinesia, weight gain, sedation) and high relapse when medication stopped — also doesn't treat negative symptoms well.",
            commonErrors: ["No limitations."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is 'combined treatment' recommended for schizophrenia?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combined",
                statement: "Bio + psycho + social.",
              },
            ],
            steps: [
              { reasoning: "Drug role.", marks: 1, markCode: "M" },
              { reasoning: "CBT role.", marks: 1, markCode: "M" },
              { reasoning: "Family role.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Drugs manage symptoms, CBT challenges delusions/improves insight, family therapy reduces relapse — addresses biological, psychological and social factors; better outcomes than any alone.",
            commonErrors: ["Single approach best."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the 'recovery model' versus 'medical model' in schizophrenia treatment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recovery vs medical",
                statement: "Holistic vs symptom.",
              },
            ],
            steps: [
              { reasoning: "Medical model.", marks: 1, markCode: "M" },
              { reasoning: "Recovery model.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Medical: symptom reduction via drugs — necessary but incomplete. Recovery: holistic — meaning, hope, social inclusion, patient agency — aligns with evidence that recovery possible; best practice combines both.",
            commonErrors: ["One model only."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which drug class is primarily used to treat schizophrenia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Antidepressants" },
              { id: "b", text: "Antipsychotics" },
              { id: "c", text: "Stimulants" },
              { id: "d", text: "Anxiolytics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Drug class",
                statement: "Antipsychotics.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Antipsychotics",
            commonErrors: ["Wrong class."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Schizophrenia affects approximately what percentage of the population?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1, tolerance: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Prevalence",
                statement: "~1%.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Schizophrenia has a lifetime prevalence of roughly 1% across populations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1",
            commonErrors: ["10% or higher."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Atypical antipsychotics differ from typical antipsychotics because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Have no side effects" },
              { id: "b", text: "Increase dopamine activity" },
              { id: "c", text: "Are only used in hospitals" },
              {
                id: "d",
                text: "Also affect serotonin receptors and cause fewer extrapyramidal side effects",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Atypical drugs",
                statement: "Multi-receptor action.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Serotonin + fewer side effects",
            commonErrors: ["Same as typical."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'token economy' is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Punishing all symptoms" },
              { id: "b", text: "A diagnostic interview" },
              {
                id: "c",
                text: "Rewarding adaptive behaviour with tokens exchangeable for privileges",
              },
              { id: "d", text: "A form of drug therapy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Token economy",
                statement: "Behavioural reinforcement.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Reinforcing adaptive behaviour",
            commonErrors: ["Punishment confused."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a limitation of CBT for schizophrenia?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It requires patient insight and motivation, and works alongside rather than instead of medication",
              },
              { id: "b", text: "It has no evidence base" },
              { id: "c", text: "It cannot be combined with drugs" },
              { id: "d", text: "It always cures schizophrenia" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT limits",
                statement: "Requires engagement.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Needs insight/motivation",
            commonErrors: ["Standalone cure."],
          },
        },
        {
          id: "ciealepsych-q-u5l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate family therapy as a treatment for schizophrenia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family therapy eval",
                statement: "Relapse reduction.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Effectiveness.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reduces expressed emotion (criticism, hostility) and relapse rates; educates families, improves communication — but requires family engagement, less effective without medication, evidence strongest combined with drugs and CBT.",
            commonErrors: ["Universal cure."],
          },
        },
      ],
    },
  ],
};
