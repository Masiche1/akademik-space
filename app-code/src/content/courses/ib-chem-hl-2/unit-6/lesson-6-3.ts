import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "chemhl-u6-lesson-6-3",
  code: "6-3",
  title: "Spectroscopic Identification of Organic Compounds",
  goal: "I CAN use infrared spectroscopy to identify functional groups, mass spectrometry to determine molecular mass and fragmentation patterns, and NMR spectroscopy to deduce molecular structure.",
  standards: ["Paper 1", "Paper 2", "AHL O2"],
  vocabulary: [
    {
      term: "Infrared (IR) spectroscopy",
      definition:
        "A technique that measures absorption of IR radiation by molecular bonds; different bonds absorb at characteristic frequencies.",
    },
    {
      term: "Wavenumber",
      definition:
        "The reciprocal of wavelength, measured in cm$^{-1}$; IR spectra plot % transmission vs wavenumber.",
    },
    {
      term: "Mass spectrometry",
      definition:
        "A technique that ionises molecules and measures mass-to-charge ratio (m/z) of fragments; gives molecular mass and structural clues.",
    },
    {
      term: "Molecular ion peak",
      definition:
        "The peak in a mass spectrum corresponding to the intact molecule (M$^+$); gives the molecular mass.",
    },
    {
      term: "NMR spectroscopy",
      definition:
        "Nuclear magnetic resonance detects hydrogen (1H) or carbon (13C) nuclei in different chemical environments; gives structural information.",
    },
    {
      term: "Chemical shift ($\\delta$)",
      definition:
        "The position of an NMR signal relative to a standard (TMS), measured in ppm; indicates the chemical environment of the nucleus.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u6-ir-ms",
      title: "Infrared and mass spectrometry",
      skill:
        "Interpret IR spectra to identify functional groups, and use mass spectra to determine molecular mass and fragmentation patterns.",
      lesson: {
        sections: [
          {
            heading: "Infrared spectroscopy",
            body: "IR spectroscopy measures which frequencies of infrared radiation are absorbed by a molecule. Each type of bond (O–H, C=O, C–H, N–H) absorbs at characteristic wavenumbers. O–H stretch ~3200–3600 cm$^{-1}$ (broad for alcohols/carboxylic acids, sharp for phenols); C=O stretch ~1700 cm$^{-1}$ (strong, sharp); C–H stretch ~2850–3000 cm$^{-1}$; N–H ~3300 cm$^{-1}$ (medium). The absence of a peak is also informative — e.g. no O–H peak means no alcohol or carboxylic acid.",
          },
          {
            heading: "Mass spectrometry",
            body: "Mass spectrometry ionises molecules and accelerates them through a magnetic field. The molecular ion peak (M$^+$) gives the molecular mass. Fragmentation peaks result from bonds breaking — the pattern of fragments gives structural information. For example, a peak at m/z = 15 suggests CH$_3$; m/z = 29 suggests C$_2$H$_5$ or CHO. The base peak is the most abundant fragment. Isotope peaks (M+1, M+2) indicate presence of Cl or Br.",
          },
          {
            heading: "Combining techniques",
            body: "IR tells you WHICH functional groups are present; MS tells you the molecular mass and possible fragments; NMR tells you the carbon/hydrogen skeleton. Together they can uniquely identify an unknown compound. For example: IR shows C=O at 1700 and O–H at 3300 → carboxylic acid; MS shows M$^+$ = 60 → C$_2$H$_4$O$_2$; NMR shows two signals → CH$_3$COOH (ethanoic acid).",
          },
        ],
        keyFormulas: [
          {
            name: "O–H stretch",
            statement:
              "~3200–3600 cm$^{-1}$ (broad = alcohol/COOH, sharp = phenol)",
          },
          { name: "C=O stretch", statement: "~1700 cm$^{-1}$ (strong, sharp)" },
          {
            name: "Molecular ion",
            statement:
              "M$^+$ peak gives molecular mass; M+1/M+2 indicate halogens.",
          },
        ],
        workedExample: {
          problem:
            "An unknown compound shows IR peaks at 3300 (broad) and 1710 cm$^{-1}$, and MS molecular ion at m/z = 60. Identify the compound.",
          solution:
            "Broad O–H + C=O → carboxylic acid. M$^+$ = 60 → C$_2$H$_4$O$_2$. The simplest carboxylic acid with mass 60 is ethanoic acid (CH$_3$COOH).",
        },
      },
      questions: [
        {
          id: "chemhl-u6-irms-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A broad IR absorption at ~3300 cm$^{-1}$ most likely indicates the presence of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "O–H bond (alcohol or carboxylic acid)" },
              { id: "b", text: "C=O bond" },
              { id: "c", text: "C–H bond" },
              { id: "d", text: "C–C bond" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IR frequencies",
                statement:
                  "O–H stretch ~3200–3600 cm$^{-1}$ (broad for H-bonded OH).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Broad peak at 3300 indicates hydrogen-bonded O–H — alcohol or carboxylic acid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** O–H bond",
            commonErrors: ["Choosing C=O — C=O appears at ~1700, not 3300."],
          },
        },
        {
          id: "chemhl-u6-irms-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A mass spectrum shows a molecular ion peak at m/z = 58 and a base peak at m/z = 43. Suggest the identity of the compound if it is a ketone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mass spectrometry",
                statement:
                  "M$^+$ = molecular mass; fragments give structural information.",
              },
            ],
            steps: [
              {
                reasoning:
                  "M$^+$ = 58 → molecular formula C$_3$H$_6$O (58 = 3×12 + 6 + 16).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Base peak m/z = 43 → CH$_3$CO$^+$ fragment (loss of CH$_3$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ketone with formula C$_3$H$_6$O is propanone (CH$_3$COCH$_3$) — MS confirms via CH$_3$CO$^+$ at 43.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Propanone (CH$_3$COCH$_3$)",
            commonErrors: [
              "Choosing propanal — also C$_3$H$_6$O, but MS base peak differs (propanal has M-1 peak at 57).",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An unknown organic compound gives the following data: IR — strong peak at 1720 cm$^{-1}$, no peak above 3000 cm$^{-1}$ except C–H; MS — M$^+$ at m/z = 58, base peak at m/z = 43. Deduce the structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spectroscopic deduction",
                statement:
                  "IR identifies functional groups; MS gives mass and fragments; together determine structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C=O at 1720 → carbonyl compound; no O–H → not carboxylic acid or alcohol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "M$^+$ = 58 → C$_3$H$_6$O.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Base peak 43 = CH$_3$CO$^+$ → methyl ketone → propanone.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Structure: CH$_3$COCH$_3$ (propanone).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Propanone (CH$_3$COCH$_3$)",
            commonErrors: [
              "Ignoring the absence of O–H peak — rules out carboxylic acid.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "An unknown compound X has molecular formula C$_4$H$_8$O$_2$ and shows the following spectra: IR — broad peak 2500–3300 cm$^{-1}$, strong peak 1710 cm$^{-1}$; MS — M$^+$ at m/z = 88, base peak at m/z = 45.",
          parts: [
            {
              label: "a",
              prompt:
                "Use the IR spectrum to identify the functional groups present.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Use the mass spectrum to confirm the molecular mass and suggest a fragment.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Deduce the structure of X, explaining your reasoning.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combined spectroscopy",
                statement:
                  "IR gives functional groups; MS gives mass and fragments; together identify compound.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Broad 2500–3300 → O–H of carboxylic acid (H-bonded).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "1710 → C=O of carboxylic acid.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "M$^+$ = 88 → C$_4$H$_8$O$_2$ confirmed (4×12+8+2×16=88).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Base peak 45 → COOH$^+$ or CH$_3$CH(OH)$^+$ fragment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Carboxylic acid with formula C$_4$H$_8$O$_2$ → butanoic acid or 2-methylpropanoic acid.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Base peak 45 suggests CH$_3$CH(OH)$^+$ → branched chain → 2-methylpropanoic acid.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Structure: (CH$_3$)$_2$CHCOOH.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reasoning links IR (COOH) + MS (M$^+$=88, base peak 45) to structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) COOH group. (b) M$^+$=88, fragment 45. (c) 2-methylpropanoic acid (CH$_3$)$_2$CHCOOH.",
            commonErrors: [
              "Choosing butanoic acid — base peak 45 indicates branching.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A strong, sharp IR absorption band near 1700 cm$^{-1}$ indicates the presence of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An O–H bond" },
              { id: "b", text: "A C=O bond" },
              { id: "c", text: "A C–H bond" },
              { id: "d", text: "An N–H bond" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IR frequencies",
                statement: "C=O stretch absorbs strongly near 1700 cm$^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The carbonyl stretch is one of the strongest and most diagnostic IR bands.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A C=O bond",
            commonErrors: [
              "Choosing O–H — O–H absorbs broadly around 3200–3600 cm$^{-1}$.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A medium-intensity IR band near 2250 cm$^{-1}$ typically indicates the presence of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A C=O bond" },
              { id: "b", text: "A C≡N or C≡C triple bond" },
              { id: "c", text: "An O–H bond" },
              { id: "d", text: "A C=C double bond" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IR frequencies",
                statement:
                  "Triple bonds (C≡N, C≡C) absorb in the 2100–2300 cm$^{-1}$ region.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C≡N and C≡C stretches appear as sharp bands near 2250 cm$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A C≡N or C≡C triple bond",
            commonErrors: [
              "Choosing C=O — carbonyl absorbs near 1700 cm$^{-1}$, not 2250.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a mass spectrum, an M+2 peak with approximately one-third the intensity of the M$^+$ peak suggests the molecule contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One chlorine atom" },
              { id: "b", text: "One bromine atom" },
              { id: "c", text: "Two chlorine atoms" },
              { id: "d", text: "A $^{13}$C atom only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isotope peaks",
                statement:
                  "$^{35}$Cl:$^{37}$Cl ≈ 3:1 gives M:M+2 ≈ 3:1 for one Cl; Br gives ~1:1.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A 3:1 M:M+2 ratio is the signature of one chlorine atom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bromine would give roughly equal M and M+2 peaks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** One chlorine atom",
            commonErrors: [
              "Choosing bromine — Br isotopes are ~50:50, giving M+2 ≈ M intensity.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The base peak in a mass spectrum is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The molecular ion peak" },
              { id: "b", text: "The most abundant fragment ion" },
              { id: "c", text: "The peak at the highest m/z value" },
              { id: "d", text: "The smallest peak in the spectrum" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Base peak",
                statement:
                  "The most intense (most abundant) peak — often a stable fragment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The base peak is defined as the tallest peak in the spectrum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is usually a stable fragment ion, not necessarily the molecular ion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The most abundant fragment ion",
            commonErrors: [
              "Confusing base peak with molecular ion — they are usually different peaks.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "An unknown compound shows a broad IR band spanning 2500–3300 cm$^{-1}$ and a strong sharp band at 1710 cm$^{-1}$. The functional group present is most likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An alcohol" },
              { id: "b", text: "An ester" },
              { id: "c", text: "A carboxylic acid" },
              { id: "d", text: "A ketone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IR identification",
                statement:
                  "Carboxylic acids show a very broad O–H band (2500–3300) plus C=O near 1700 cm$^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The broad 2500–3300 band is characteristic of the hydrogen-bonded O–H of a carboxylic acid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Combined with C=O at 1710 → carboxylic acid (not a simple alcohol or ketone).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** A carboxylic acid",
            commonErrors: [
              "Choosing alcohol — an alcohol has O–H but no C=O band.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A compound has M$^+$ = 44 and a base peak at m/z = 29. It is most likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Methanal, HCHO" },
              { id: "b", text: "Ethanal, CH$_3$CHO" },
              { id: "c", text: "Propanone, CH$_3$COCH$_3$" },
              { id: "d", text: "Ethanol, C$_2$H$_5$OH" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mass deduction",
                statement:
                  "M$^+$ = 44 → C$_2$H$_4$O; base peak 29 = CHO$^+$ or C$_2$H$_5^+$ fragment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "M$^+$ = 44 fits C$_2$H$_4$O (2×12 + 4 + 16 = 44) — ethanal or ethene oxide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ethanal fragments to give CHO$^+$ at m/z 29 as a major peak.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Ethanal, CH$_3$CHO",
            commonErrors: ["Choosing propanone — its M$^+$ is 58, not 44."],
          },
        },
        {
          id: "chemhl-u6-irms-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A mass spectrum shows the molecular ion peak at m/z = 72. State the molecular mass of the compound.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 72 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molecular ion",
                statement:
                  "The M$^+$ peak corresponds to the intact molecule ion; its m/z equals the molecular mass.",
              },
            ],
            steps: [
              {
                reasoning: "M$^+$ m/z = molecular mass (z = 1).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Molecular mass = 72.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "72",
            commonErrors: [
              "Reporting the base peak m/z instead of the molecular ion peak.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "State the m/z values of two common fragment ions: (a) CH$_3^+$; (b) C$_2$H$_5^+$. (Use C = 12, H = 1.)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15 },
              { label: "b", answer: 29 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fragment m/z",
                statement:
                  "m/z of a fragment = sum of atomic masses of its atoms (charge = +1).",
              },
            ],
            steps: [
              {
                reasoning: "CH$_3^+$: 12 + 3×1 = 15.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "C$_2$H$_5^+$: 2×12 + 5×1 = 29.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both m/z values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 15; (b) 29",
            commonErrors: [
              "Forgetting that m/z uses nominal masses (integer values).",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q13",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Butanoic acid has formula C$_4$H$_8$O$_2$. (a) State its M$^+$ m/z value. (b) State the number of carbon atoms in the molecule.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 88 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molecular mass",
                statement: "M = 4(12) + 8(1) + 2(16) = 88.",
              },
            ],
            steps: [
              {
                reasoning: "Calculate molecular mass: 48 + 8 + 32 = 88.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "M$^+$ = 88 and there are 4 carbon atoms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 88; (b) 4",
            commonErrors: [
              "Using exact isotope masses instead of nominal masses.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "An ester has formula C$_3$H$_6$O$_2$ and M$^+$ = 74. (a) Verify the molecular mass from the formula. (b) State the m/z of the OCH$_3^+$ fragment ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 74 },
              { label: "b", answer: 31 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fragment m/z",
                statement: "OCH$_3^+$ = 16 + 12 + 3 = 31.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Calculate M = 3(12) + 6(1) + 2(16) = 36 + 6 + 32 = 74.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "OCH$_3^+$ mass = 16 + 12 + 3×1 = 31.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 74; (b) 31",
            commonErrors: [
              "Adding an extra H to the methoxy fragment — OCH$_3$ has only 3 H.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A compound contains two bromine atoms and its M$^+$ peak appears at m/z = 108. (a) State the m/z of the M+2 peak. (b) State the m/z of the M+4 peak.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 110 },
              { label: "b", answer: 112 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bromine isotopes",
                statement:
                  "$^{79}$Br and $^{81}$Br differ by 2 mass units; each Br contributes M, M+2, M+4 possibilities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "M+2 arises when one $^{79}$Br is replaced by $^{81}$Br → m/z = 110.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "M+4 arises when both Br atoms are $^{81}$Br → m/z = 112.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both m/z values.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Recognise each Br adds 2 to the mass of the heavier isotope peak.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 110; (b) 112",
            commonErrors: [
              "Giving only M+2 — two bromines also produce an M+4 peak.",
            ],
          },
        },
        {
          id: "chemhl-u6-irms-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Ethanol, C$_2$H$_6$O, has M$^+$ = 46. It commonly loses H$_2$O (18) and CH$_3$ (15) as neutral fragments. (a) State the m/z of the M−18 fragment. (b) State the m/z of the M−15 fragment.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 28 },
              { label: "b", answer: 31 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fragmentation",
                statement:
                  "Fragment m/z = M$^+$ − mass of lost neutral fragment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "M − 18 = 46 − 18 = 28 (loss of H$_2$O gives C$_2$H$_4^+$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "M − 15 = 46 − 15 = 31 (loss of CH$_3$ gives CH$_2$OH$^+$).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both m/z values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 28; (b) 31",
            commonErrors: ["Adding instead of subtracting the neutral mass."],
          },
        },
      ],
    },
    {
      id: "chemhl-u6-nmr",
      title: "Nuclear magnetic resonance spectroscopy",
      skill:
        "Interpret 1H and 13C NMR spectra to determine molecular structure, including chemical shifts, integration and splitting patterns.",
      lesson: {
        sections: [
          {
            heading: "1H NMR basics",
            body: "1H NMR detects hydrogen nuclei in different chemical environments. Each environment gives a signal at a characteristic chemical shift ($\\delta$, in ppm). Common shifts: alkane CH$_3$/CH$_2$ ~0.9–1.5; CH next to C=O ~2.0–2.5; CH next to O ~3.3–4.0; alkene CH ~4.5–6.5; aromatic CH ~6.5–8.5; OH/NH ~1–5 (variable); aldehyde CH ~9–10; carboxylic acid OH ~10–13. The integration (area under peak) gives the ratio of hydrogens; splitting gives the number of neighbouring hydrogens (n+1 rule).",
          },
          {
            heading: "13C NMR",
            body: "13C NMR detects carbon nuclei — each chemically distinct carbon gives one signal. This is simpler than 1H NMR because there's no splitting (usually broadband decoupled). Common shifts: alkane C ~10–30; C next to C=O ~30–50; C=O ~160–220; aromatic C ~110–160; alkene C ~100–150. The number of signals tells you how many distinct carbon environments exist.",
          },
          {
            heading: "Using NMR for structure determination",
            body: "Combine chemical shift (what type of H/C), integration (how many H), and splitting (neighbouring H count) to deduce structure. Example: a compound with 1H NMR showing triplet at $\\delta$ 1.2 (3H), quartet at $\\delta$ 2.4 (2H), singlet at $\\delta$ 2.1 (3H) → CH$_3$CH$_2$COCH$_3$ (butanone). The triplet-quartet pattern shows adjacent CH$_3$–CH$_2$; the singlet shows isolated CH$_3$ next to C=O.",
          },
        ],
        keyFormulas: [
          {
            name: "Chemical shifts",
            statement:
              "Alkane ~1; C=O adjacent ~2–2.5; C–O ~3.5–4; alkene ~5–6; aromatic ~7; aldehyde ~9–10; COOH ~11–13.",
          },
          {
            name: "n+1 rule",
            statement:
              "Signal splits into n+1 peaks where n = neighbouring H count.",
          },
          {
            name: "13C NMR",
            statement:
              "One signal per distinct carbon environment; no splitting.",
          },
        ],
        workedExample: {
          problem:
            "A compound shows 1H NMR: triplet $\\delta$ 1.3 (3H), quartet $\\delta$ 4.1 (2H), singlet $\\delta$ 2.1 (3H). Deduce the structure.",
          solution:
            "Triplet 3H = CH$_3$ next to CH$_2$; quartet 2H = CH$_2$ next to CH$_3$ and O; singlet 3H = CH$_3$ next to C=O. Structure: CH$_3$CH$_2$OCOCH$_3$ (ethyl ethanoate).",
        },
      },
      questions: [
        {
          id: "chemhl-u6-nmr-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In 1H NMR, a triplet signal indicates the proton has how many neighbouring protons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "n+1 rule",
                statement:
                  "Signal splits into n+1 peaks where n = neighbouring H count.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Triplet = 3 peaks = n+1 → n = 2 neighbouring protons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** 2",
            commonErrors: ["Choosing 3 — that's a quartet (n+1=4 needs n=3)."],
          },
        },
        {
          id: "chemhl-u6-nmr-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A compound shows two signals in its 13C NMR spectrum at $\\delta$ 30 and $\\delta$ 210. Explain what this tells you about the structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "13C NMR",
                statement:
                  "One signal per distinct carbon environment; chemical shift indicates carbon type.",
              },
            ],
            steps: [
              {
                reasoning: "Two signals → two distinct carbon environments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "\\delta 210 → C=O carbon (aldehyde or ketone); \\delta 30 → alkyl carbon adjacent to C=O.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Most likely propanone (CH$_3$COCH$_3$) — two environments: CH$_3$ and C=O.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two C environments; likely propanone.",
            commonErrors: [
              "Saying 'two carbons total' — signals show environments, not total C count.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Deduce the structure of a compound with molecular formula C$_3$H$_6$O$_2$ and 1H NMR showing only two singlets: 3H at $\\delta$ 2.0 and 3H at $\\delta$ 3.7.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NMR structure deduction",
                statement:
                  "Chemical shift + integration + splitting → structural fragments.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Two singlets → two CH$_3$ groups with no neighbouring hydrogens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "\\delta 2.0 (3H) → CH$_3$ next to C=O; \\delta 3.7 (3H) → CH$_3$ next to O.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "C$_3$H$_6$O$_2$ with CH$_3$CO and CH$_3$O fragments → methyl ethanoate.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Structure: CH$_3$COOCH$_3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Methyl ethanoate (CH$_3$COOCH$_3$)",
            commonErrors: [
              "Choosing ethanoic acid — it would show a COOH proton around $\\delta$ 11, not a singlet at 3.7.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "An unknown compound Y has molecular formula C$_4$H$_8$O. Its 1H NMR shows: triplet $\\delta$ 1.1 (3H), quartet $\\delta$ 2.4 (2H), singlet $\\delta$ 2.1 (3H).",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the structural fragments indicated by each signal.",
              marks: 3,
            },
            { label: "b", prompt: "Deduce the structure of Y.", marks: 2 },
            {
              label: "c",
              prompt:
                "Explain why the CH$_3$ and CH$_2$ signals show splitting.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NMR analysis",
                statement:
                  "Triplet = CH$_3$ next to CH$_2$; quartet = CH$_2$ next to CH$_3$; singlet = isolated CH$_3$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Triplet 1.1 (3H) → CH$_3$ next to CH$_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Quartet 2.4 (2H) → CH$_2$ next to CH$_3$ and C=O.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Singlet 2.1 (3H) → CH$_3$ next to C=O (no neighbours).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Structure: CH$_3$CH$_2$COCH$_3$ (butanone).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "C$_4$H$_8$O matches; ketone confirmed by C=O adjacent CH$_3$ and CH$_2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "CH$_3$ (triplet) has 2 neighbouring H (CH$_2$) → n+1 = 3.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "CH$_2$ (quartet) has 3 neighbouring H (CH$_3$) → n+1 = 4.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "CH$_3$ singlet has no neighbouring H → n+1 = 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) CH$_3$–CH$_2$–CO–CH$_3$ fragments. (b) Butanone. (c) n+1 rule explains splitting.",
            commonErrors: [
              "Misassigning quartet — quartet means 3 neighbours (CH$_3$), not 2.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a 1H NMR spectrum, a signal at δ ≈ 11–13 ppm most likely indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alkane protons" },
              { id: "b", text: "The O–H proton of a carboxylic acid" },
              { id: "c", text: "Alkene protons" },
              { id: "d", text: "Aldehyde protons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chemical shifts",
                statement:
                  "COOH protons resonate furthest downfield at δ ≈ 10–13 ppm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The carboxylic acid proton is highly deshielded by the adjacent C=O and O atoms.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The O–H proton of a carboxylic acid",
            commonErrors: [
              "Choosing aldehyde — aldehyde H appears near δ 9–10, not 11–13.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A quartet signal in a 1H NMR spectrum means the proton has how many neighbouring protons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "n+1 rule",
                statement:
                  "A signal splits into n+1 peaks where n = number of neighbouring protons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quartet = 4 peaks = n + 1 → n = 3 neighbouring protons.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 3",
            commonErrors: [
              "Confusing quartet with triplet — triplet has 2 neighbours, quartet has 3.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A 13C NMR spectrum gives one signal for each:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon atom in the molecule" },
              { id: "b", text: "Distinct carbon environment" },
              { id: "c", text: "Hydrogen atom" },
              { id: "d", text: "Chemical bond" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "13C NMR",
                statement:
                  "Each chemically distinct carbon environment gives one signal — equivalent carbons share a signal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Symmetry-equivalent carbons resonate at the same frequency and give one combined signal.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Distinct carbon environment",
            commonErrors: [
              "Choosing carbon atom — the signal count can be less than the total carbon count.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Protons on a carbon adjacent to a C=O group typically resonate at a chemical shift of approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "δ ≈ 0.9" },
              { id: "b", text: "δ ≈ 2.1" },
              { id: "c", text: "δ ≈ 5.5" },
              { id: "d", text: "δ ≈ 11" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chemical shifts",
                statement:
                  "Protons α to C=O are deshielded and resonate at δ ≈ 2.0–2.5.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The electron-withdrawing C=O group deshields the adjacent protons, shifting them downfield from alkane values (~1).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** δ ≈ 2.1",
            commonErrors: [
              "Choosing 0.9 — that is a typical alkane shift far from a functional group.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A compound shows 4 signals in its 13C NMR spectrum. It must have at least how many distinct carbon environments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "4" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "13C NMR signal count",
                statement:
                  "Number of signals = number of distinct carbon environments.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Four signals require at least four distinct carbon environments — equivalent carbons cannot give separate signals.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 4",
            commonErrors: [
              "Thinking signals < carbons is impossible — equivalent carbons always share a signal.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The reference compound used to calibrate NMR chemical shifts (δ = 0) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Tetramethylsilane (TMS)" },
              { id: "c", text: "Ethanol" },
              { id: "d", text: "Benzene" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "NMR reference",
                statement: "TMS (Si(CH$_3$)$_4$) is the standard at δ = 0 ppm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "TMS is chemically inert and its 12 equivalent protons give a single sharp reference peak.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tetramethylsilane (TMS)",
            commonErrors: [
              "Choosing water — its shift varies with conditions and it exchanges, making it unsuitable.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Consider the ethyl group CH$_3$CH$_2$– in a 1H NMR spectrum. (a) State the number of neighbouring protons seen by the CH$_3$ protons. (b) State the number of neighbouring protons seen by the CH$_2$ protons (on the methyl side).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "n+1 rule",
                statement:
                  "Signal multiplicity = n + 1 where n = adjacent protons on neighbouring carbon.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CH$_3$ is adjacent to CH$_2$ (2 protons) → triplet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CH$_2$ is adjacent to CH$_3$ (3 protons) → quartet.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2; (b) 3",
            commonErrors: [
              "Reversing the counts — CH$_3$ sees the 2 CH$_2$ protons, not 3.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Butanone, CH$_3$COCH$_2$CH$_3$, is analysed by NMR. (a) State the number of signals in its 1H NMR spectrum. (b) State the number of signals in its 13C NMR spectrum.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NMR environments",
                statement:
                  "1H signals count proton environments; 13C signals count carbon environments.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protons: COCH$_3$ (s), CH$_2$ (q), CH$_3$ (t) → 3 proton environments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Carbons: C=O, CH$_3$CO, CH$_2$, CH$_3$ → 4 distinct carbon environments.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3; (b) 4",
            commonErrors: [
              "Giving the same number for both — 13C sees carbon environments, not proton environments.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q13",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Ethyl ethanoate, CH$_3$COOCH$_2$CH$_3$. State the number of distinct proton environments and the number of distinct carbon environments.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NMR environments",
                statement:
                  "Equivalent nuclei share a signal; count chemically distinct environments.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protons: CH$_3$CO (s), OCH$_2$ (q), CH$_3$ (t) → 3 environments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Carbons: C=O, CH$_3$CO, OCH$_2$, CH$_3$ → 4 environments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 3; (b) 4",
            commonErrors: [
              "Counting 5 proton environments — the two CH$_3$ groups are NOT equivalent (one is acetyl, one is ethyl).",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Propanone, (CH$_3$)$_2$CO. (a) State the number of signals in its 1H NMR spectrum. (b) State the number of signals in its 13C NMR spectrum.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Symmetry in NMR",
                statement:
                  "The two CH$_3$ groups of propanone are equivalent → one proton signal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both methyl groups are chemically equivalent → a single 1H signal (singlet, 6H).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Carbons: two equivalent CH$_3$ carbons give one signal + C=O gives a second → 2 signals.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1; (b) 2",
            commonErrors: [
              "Answering 2 for 1H NMR — the two methyl groups are equivalent by symmetry.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A compound with formula C$_4$H$_8$O shows a 1H NMR spectrum with three signals: triplet δ 1.1 (3H), quartet δ 2.4 (2H), singlet δ 2.1 (3H). (a) State the total number of proton environments. (b) Calculate the molecular mass of C$_4$H$_8$O.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 72 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molecular mass",
                statement: "M = 4(12) + 8(1) + 16 = 72.",
              },
            ],
            steps: [
              {
                reasoning: "Three distinct signals → 3 proton environments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate M = 48 + 8 + 16.",
                working: "M = 72",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "The spectrum is consistent with butanone CH$_3$CH$_2$COCH$_3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 3; (b) 72",
            commonErrors: [
              "Counting 8 proton environments — equivalent protons in each group share one signal.",
            ],
          },
        },
        {
          id: "chemhl-u6-nmr-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Methyl ethanoate, CH$_3$COOCH$_3$, shows two singlets in its 1H NMR: δ ≈ 2.0 (3H) and δ ≈ 3.7 (3H). (a) State the number of proton environments. (b) State the approximate chemical shift of the OCH$_3$ protons.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3.7, tolerance: 0.3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chemical shifts",
                statement:
                  "Protons on carbon bonded to oxygen resonate at δ ≈ 3.3–4.0.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Two singlets → 2 proton environments: CH$_3$CO and OCH$_3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "OCH$_3$ protons appear downfield near δ ≈ 3.7 due to the adjacent oxygen.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2; (b) δ ≈ 3.7",
            commonErrors: [
              "Assigning δ 2.0 to OCH$_3$ — the acetyl CH$_3$ is the upfield singlet.",
            ],
          },
        },
      ],
    },
  ],
};
