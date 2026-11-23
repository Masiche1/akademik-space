import type { Concept, Course, Lesson, Question, Unit } from "./types.ts";
import { algebra1 } from "./courses/algebra-1/index.ts";
import { geometry } from "./courses/geometry/index.ts";
import { algebra2 } from "./courses/algebra-2/index.ts";
import { precalculus } from "./courses/precalculus/index.ts";
import { ibAaSl1 } from "./courses/ib-aa-sl-1/index.ts";
import { ibAaSl2 } from "./courses/ib-aa-sl-2/index.ts";
import { ibAaHl1 } from "./courses/ib-aa-hl-1/index.ts";
import { ibAaHl2 } from "./courses/ib-aa-hl-2/index.ts";
import { ibAiSl1 } from "./courses/ib-ai-sl-1/index.ts";
import { ibAiSl2 } from "./courses/ib-ai-sl-2/index.ts";
import { ibAiHl1 } from "./courses/ib-ai-hl-1/index.ts";
import { ibAiHl2 } from "./courses/ib-ai-hl-2/index.ts";
import { ibBioSl1 } from "./courses/ib-bio-sl-1/index.ts";
import { ibBioSl2 } from "./courses/ib-bio-sl-2/index.ts";
import { ibBioHl1 } from "./courses/ib-bio-hl-1/index.ts";
import { ibBioHl2 } from "./courses/ib-bio-hl-2/index.ts";
import { ibChemSl1 } from "./courses/ib-chem-sl-1/index.ts";
import { ibChemSl2 } from "./courses/ib-chem-sl-2/index.ts";
import { ibChemHl1 } from "./courses/ib-chem-hl-1/index.ts";
import { ibChemHl2 } from "./courses/ib-chem-hl-2/index.ts";
import { ibPhysSl1 } from "./courses/ib-phys-sl-1/index.ts";
import { ibPhysSl2 } from "./courses/ib-phys-sl-2/index.ts";
import { ibPhysHl1 } from "./courses/ib-phys-hl-1/index.ts";
import { ibPhysHl2 } from "./courses/ib-phys-hl-2/index.ts";
import { ibHisSl1 } from "./courses/ib-his-sl-1/index.ts";
import { ibHisSl2 } from "./courses/ib-his-sl-2/index.ts";
import { ibGeoSl1 } from "./courses/ib-geo-sl-1/index.ts";
import { ibGeoSl2 } from "./courses/ib-geo-sl-2/index.ts";
import { ibEconSl1 } from "./courses/ib-econ-sl-1/index.ts";
import { ibEconSl2 } from "./courses/ib-econ-sl-2/index.ts";
import { ibBusSl1 } from "./courses/ib-bus-sl-1/index.ts";
import { ibBusSl2 } from "./courses/ib-bus-sl-2/index.ts";
import { ibPsychSl1 } from "./courses/ib-psych-sl-1/index.ts";
import { ibPsychSl2 } from "./courses/ib-psych-sl-2/index.ts";
import { ibLangASl1 } from "./courses/ib-lang-a-sl-1/index.ts";
import { ibLangASl2 } from "./courses/ib-lang-a-sl-2/index.ts";
import { ibLangBSl1 } from "./courses/ib-lang-b-sl-1/index.ts";
import { ibLangBSl2 } from "./courses/ib-lang-b-sl-2/index.ts";
import { ibLangAbSl1 } from "./courses/ib-lang-ab-sl-1/index.ts";
import { ibLangAbSl2 } from "./courses/ib-lang-ab-sl-2/index.ts";
import { ibVaSl1 } from "./courses/ib-va-sl-1/index.ts";
import { ibVaSl2 } from "./courses/ib-va-sl-2/index.ts";
import { ibMusicSl1 } from "./courses/ib-music-sl-1/index.ts";
import { ibMusicSl2 } from "./courses/ib-music-sl-2/index.ts";
import { ibTheatreSl1 } from "./courses/ib-theatre-sl-1/index.ts";
import { ibTheatreSl2 } from "./courses/ib-theatre-sl-2/index.ts";
import { ibTok } from "./courses/ib-tok/index.ts";
import { ibEe } from "./courses/ib-ee/index.ts";
import { ibCas } from "./courses/ib-cas/index.ts";
import { edxMathsY7 } from "./courses/edx-maths-y7/index.ts";
import { edxMathsY8 } from "./courses/edx-maths-y8/index.ts";
import { edxMathsY9 } from "./courses/edx-maths-y9/index.ts";
import { edxMathsY10 } from "./courses/edx-maths-y10/index.ts";
import { edxMathsY11 } from "./courses/edx-maths-y11/index.ts";
import { edxIasMaths } from "./courses/edx-ias-maths/index.ts";
import { edxIalMaths } from "./courses/edx-ial-maths/index.ts";
import { edxIasFurtherMaths } from "./courses/edx-ias-further-maths/index.ts";
import { edxIalFurtherMaths } from "./courses/edx-ial-further-maths/index.ts";
import { edxIasPureMaths } from "./courses/edx-ias-pure-maths/index.ts";
import { edxIalPureMaths } from "./courses/edx-ial-pure-maths/index.ts";
import { edxIasBiology } from "./courses/edx-ias-biology/index.ts";
import { edxIalBiology } from "./courses/edx-ial-biology/index.ts";
import { edxIasChemistry } from "./courses/edx-ias-chemistry/index.ts";
import { edxIalChemistry } from "./courses/edx-ial-chemistry/index.ts";
import { edxIasPhysics } from "./courses/edx-ias-physics/index.ts";
import { edxIalPhysics } from "./courses/edx-ial-physics/index.ts";
import { edxIasBusiness } from "./courses/edx-ias-business/index.ts";
import { edxIasEconomics } from "./courses/edx-ias-economics/index.ts";
import { edxIasPsychology } from "./courses/edx-ias-psychology/index.ts";
import { edxIasSociology } from "./courses/edx-ias-sociology/index.ts";
import { edxIasComputerScience } from "./courses/edx-ias-computerscience/index.ts";
import { edxIasAccounting } from "./courses/edx-ias-accounting/index.ts";
import { edxPrimaryMathsY1 } from "./courses/edx-primary-maths-y1/index.ts";
import { edxPrimaryMathsY2 } from "./courses/edx-primary-maths-y2/index.ts";
import { edxPrimaryMathsY3 } from "./courses/edx-primary-maths-y3/index.ts";
import { edxPrimaryMathsY4 } from "./courses/edx-primary-maths-y4/index.ts";
import { edxPrimaryMathsY5 } from "./courses/edx-primary-maths-y5/index.ts";
import { edxPrimaryMathsY6 } from "./courses/edx-primary-maths-y6/index.ts";
import { edxPrimaryEnglishY1 } from "./courses/edx-primary-english-y1/index.ts";
import { edxPrimaryEnglishY2 } from "./courses/edx-primary-english-y2/index.ts";
import { edxPrimaryEnglishY3 } from "./courses/edx-primary-english-y3/index.ts";
import { edxPrimaryEnglishY4 } from "./courses/edx-primary-english-y4/index.ts";
import { edxPrimaryEnglishY5 } from "./courses/edx-primary-english-y5/index.ts";
import { edxPrimaryEnglishY6 } from "./courses/edx-primary-english-y6/index.ts";
import { edxPrimaryScienceY1 } from "./courses/edx-primary-science-y1/index.ts";
import { edxPrimaryScienceY2 } from "./courses/edx-primary-science-y2/index.ts";
import { edxPrimaryScienceY3 } from "./courses/edx-primary-science-y3/index.ts";
import { edxPrimaryScienceY4 } from "./courses/edx-primary-science-y4/index.ts";
import { edxPrimaryScienceY5 } from "./courses/edx-primary-science-y5/index.ts";
import { edxPrimaryScienceY6 } from "./courses/edx-primary-science-y6/index.ts";
import { edxPrimaryComputing } from "./courses/edx-primary-computing/index.ts";
import { edxPrimaryGeography } from "./courses/edx-primary-geography/index.ts";
import { edxPrimaryHistory } from "./courses/edx-primary-history/index.ts";
import { edxBtecEngineering } from "./courses/edx-btec-engineering/index.ts";
import { edxBtecHealthSocialCare } from "./courses/edx-btec-health-social-care/index.ts";
import { edxBtecInformationTechnology } from "./courses/edx-btec-information-technology/index.ts";
import { edxEngLangY7 } from "./courses/edx-englang-y7/index.ts";
import { edxEngLangY8 } from "./courses/edx-englang-y8/index.ts";
import { edxEngLangY9 } from "./courses/edx-englang-y9/index.ts";
import { edxEngLangY10 } from "./courses/edx-englang-y10/index.ts";
import { edxEngLangY11 } from "./courses/edx-englang-y11/index.ts";
import { edxEngLitY8 } from "./courses/edx-englit-y8/index.ts";
import { edxEngLitY9 } from "./courses/edx-englit-y9/index.ts";
import { edxEngLitY10 } from "./courses/edx-englit-y10/index.ts";
import { edxEngLitY11 } from "./courses/edx-englit-y11/index.ts";
import { edxScienceY7 } from "./courses/edx-science-y7/index.ts";
import { edxScienceY8 } from "./courses/edx-science-y8/index.ts";
import { edxScienceY9 } from "./courses/edx-science-y9/index.ts";
import { edxBiologyY10 } from "./courses/edx-biology-y10/index.ts";
import { edxBiologyY11 } from "./courses/edx-biology-y11/index.ts";
import { edxChemistryY10 } from "./courses/edx-chemistry-y10/index.ts";
import { edxChemistryY11 } from "./courses/edx-chemistry-y11/index.ts";
import { edxPhysicsY10 } from "./courses/edx-physics-y10/index.ts";
import { edxPhysicsY11 } from "./courses/edx-physics-y11/index.ts";
import { edxScienceY10 } from "./courses/edx-science-y10/index.ts";
import { edxScienceY11 } from "./courses/edx-science-y11/index.ts";
import { edxBusinessY10 } from "./courses/edx-business-y10/index.ts";
import { edxBusinessY11 } from "./courses/edx-business-y11/index.ts";
import { edxEconomicsY10 } from "./courses/edx-economics-y10/index.ts";
import { edxEconomicsY11 } from "./courses/edx-economics-y11/index.ts";
import { edxComputerScienceY10 } from "./courses/edx-computerscience-y10/index.ts";
import { edxComputerScienceY11 } from "./courses/edx-computerscience-y11/index.ts";
import { usMathPreK } from "./courses/us-math-prek/index.ts";
import { usMathG0 } from "./courses/us-math-g0/index.ts";
import { usElaPreK } from "./courses/us-ela-prek/index.ts";
import { usElaG0 } from "./courses/us-ela-g0/index.ts";
import { usSciencePreK } from "./courses/us-science-prek/index.ts";
import { usScienceG0 } from "./courses/us-science-g0/index.ts";
import { usMathG1 } from "./courses/us-math-g1/index.ts";
import { usElaG1 } from "./courses/us-ela-g1/index.ts";
import { usScienceG1 } from "./courses/us-science-g1/index.ts";
import { usMathG2 } from "./courses/us-math-g2/index.ts";
import { usElaG2 } from "./courses/us-ela-g2/index.ts";
import { usScienceG2 } from "./courses/us-science-g2/index.ts";
import { usMathG3 } from "./courses/us-math-g3/index.ts";
import { usElaG3 } from "./courses/us-ela-g3/index.ts";
import { usScienceG3 } from "./courses/us-science-g3/index.ts";
import { usMathG4 } from "./courses/us-math-g4/index.ts";
import { usElaG4 } from "./courses/us-ela-g4/index.ts";
import { usScienceG4 } from "./courses/us-science-g4/index.ts";
import { usMathG5 } from "./courses/us-math-g5/index.ts";
import { usElaG5 } from "./courses/us-ela-g5/index.ts";
import { usScienceG5 } from "./courses/us-science-g5/index.ts";
import { usMathG6 } from "./courses/us-math-g6/index.ts";
import { usElaG6 } from "./courses/us-ela-g6/index.ts";
import { usScienceG6 } from "./courses/us-science-g6/index.ts";
import { usMathG7 } from "./courses/us-math-g7/index.ts";
import { usScienceG7 } from "./courses/us-science-g7/index.ts";
import { usElaG7 } from "./courses/us-ela-g7/index.ts";
import { usMathG8 } from "./courses/us-math-g8/index.ts";
import { usScienceG8 } from "./courses/us-science-g8/index.ts";
import { usElaG8 } from "./courses/us-ela-g8/index.ts";
import { usBiologyG9 } from "./courses/us-biology-g9/index.ts";
import { usEarthSpaceG9 } from "./courses/us-earth-space-g9/index.ts";
import { usElaG9 } from "./courses/us-ela-g9/index.ts";
import { usMathG9 } from "./courses/us-math-g9/index.ts";
import { usMathG10 } from "./courses/us-math-g10/index.ts";
import { usMathG11 } from "./courses/us-math-g11/index.ts";
import { usMathG12 } from "./courses/us-math-g12/index.ts";
import { usChemistryG10 } from "./courses/us-chemistry-g10/index.ts";
import { usBiologyG10 } from "./courses/us-biology-g10/index.ts";
import { usElaG10 } from "./courses/us-ela-g10/index.ts";
import { usPhysicsG11 } from "./courses/us-physics-g11/index.ts";
import { usElaG11 } from "./courses/us-ela-g11/index.ts";
import { usChemistryG11 } from "./courses/us-chemistry-g11/index.ts";
import { usPhysicsG12 } from "./courses/us-physics-g12/index.ts";
import { usElaG12 } from "./courses/us-ela-g12/index.ts";
import { usPhysicsG10 } from "./courses/us-physics-g10/index.ts";
import { usBiologyG11 } from "./courses/us-biology-g11/index.ts";
import { usChemistryG12 } from "./courses/us-chemistry-g12/index.ts";
import { usEarthSpaceG12 } from "./courses/us-earth-space-g12/index.ts";
import { apCalculusAb } from "./courses/ap-calculus-ab/index.ts";
import { apCalculusBc } from "./courses/ap-calculus-bc/index.ts";
import { apStatistics } from "./courses/ap-statistics/index.ts";
import { apBiology } from "./courses/ap-biology/index.ts";
import { apChemistry } from "./courses/ap-chemistry/index.ts";
import { apPhysics1 } from "./courses/ap-physics-1/index.ts";
import { apPhysics2 } from "./courses/ap-physics-2/index.ts";
import { apEnglishLanguage } from "./courses/ap-english-language/index.ts";
import { apEnglishLiterature } from "./courses/ap-english-literature/index.ts";
import { apComputerScienceA } from "./courses/ap-computer-science-a/index.ts";
import { apUsHistory } from "./courses/ap-us-history/index.ts";
import { apWorldHistory } from "./courses/ap-world-history/index.ts";
import { apGovernmentPolitics } from "./courses/ap-government-politics/index.ts";
import { apPsychology } from "./courses/ap-psychology/index.ts";
import { apHumanGeography } from "./courses/ap-human-geography/index.ts";
import { apSeminar } from "./courses/ap-seminar/index.ts";
import { apResearch } from "./courses/ap-research/index.ts";
import { apArtHistory } from "./courses/ap-art-history/index.ts";
import { apMusicTheory } from "./courses/ap-music-theory/index.ts";
import { apSpanishLanguageCulture } from "./courses/ap-spanish-language-culture/index.ts";
import { apFrenchLanguageCulture } from "./courses/ap-french-language-culture/index.ts";
import { apGermanLanguageCulture } from "./courses/ap-german-language-culture/index.ts";
import { apItalianLanguageCulture } from "./courses/ap-italian-language-culture/index.ts";
import { apJapaneseLanguageCulture } from "./courses/ap-japanese-language-culture/index.ts";
import { apLatinLanguageCulture } from "./courses/ap-latin-language-culture/index.ts";
import { apChineseLanguageCulture } from "./courses/ap-chinese-language-culture/index.ts";
import { apStudioArt } from "./courses/ap-studio-art/index.ts";
import { satReadingWriting } from "./courses/sat-reading-writing/index.ts";
import { satMath } from "./courses/sat-math/index.ts";
import { satPracticeStrategy } from "./courses/sat-practice-strategy/index.ts";
import { statistics } from "./courses/statistics/index.ts";
import { mypMathsY1 } from "./courses/myp-maths-y1/index.ts";
import { mypSciencesY1 } from "./courses/myp-sciences-y1/index.ts";
import { mypMathsY2 } from "./courses/myp-maths-y2/index.ts";
import { mypSciencesY2 } from "./courses/myp-sciences-y2/index.ts";
import { mypMathsY3 } from "./courses/myp-maths-y3/index.ts";
import { mypSciencesY3 } from "./courses/myp-sciences-y3/index.ts";
import { mypMathsStdY4 } from "./courses/myp-maths-std-y4/index.ts";
import { mypMathsExtY4 } from "./courses/myp-maths-ext-y4/index.ts";
import { mypMathsStdY5 } from "./courses/myp-maths-std-y5/index.ts";
import { mypMathsExtY5 } from "./courses/myp-maths-ext-y5/index.ts";
import { mypBiologyY4 } from "./courses/myp-biology-y4/index.ts";
import { mypChemistryY4 } from "./courses/myp-chemistry-y4/index.ts";
import { mypPhysicsY4 } from "./courses/myp-physics-y4/index.ts";
import { mypBiologyY5 } from "./courses/myp-biology-y5/index.ts";
import { mypChemistryY5 } from "./courses/myp-chemistry-y5/index.ts";
import { mypPhysicsY5 } from "./courses/myp-physics-y5/index.ts";
import { pypLanguage } from "./courses/pyp-language/index.ts";
import { pypMaths } from "./courses/pyp-maths/index.ts";
import { pypScience } from "./courses/pyp-science/index.ts";
import { pypSocialStudies } from "./courses/pyp-social-studies/index.ts";
import { pypArts } from "./courses/pyp-arts/index.ts";
import { pypPspe } from "./courses/pyp-pspe/index.ts";
import { mypLangLitY1 } from "./courses/myp-lang-lit-y1/index.ts";
import { mypLangLitY2 } from "./courses/myp-lang-lit-y2/index.ts";
import { mypLangLitY3 } from "./courses/myp-lang-lit-y3/index.ts";
import { mypLangLitY4 } from "./courses/myp-lang-lit-y4/index.ts";
import { mypLangLitY5 } from "./courses/myp-lang-lit-y5/index.ts";
import { mypLangAcqY1 } from "./courses/myp-lang-acq-y1/index.ts";
import { mypLangAcqY2 } from "./courses/myp-lang-acq-y2/index.ts";
import { mypLangAcqY3 } from "./courses/myp-lang-acq-y3/index.ts";
import { mypLangAcqY4 } from "./courses/myp-lang-acq-y4/index.ts";
import { mypLangAcqY5 } from "./courses/myp-lang-acq-y5/index.ts";
import { cieIgcseEnglish } from "./courses/cie-igcse-english/index.ts";
import { cieIgcseMaths } from "./courses/cie-igcse-maths/index.ts";
import { cieIgcseMathsCore } from "./courses/cie-igcse-maths-core/index.ts";
import { cieIgcseBiology } from "./courses/cie-igcse-biology/index.ts";
import { cieIgcseChemistry } from "./courses/cie-igcse-chemistry/index.ts";
import { cieIgcsePhysics } from "./courses/cie-igcse-physics/index.ts";
import { ciePrimaryMaths } from "./courses/cie-primary-maths/index.ts";
import { ciePrimaryEnglish } from "./courses/cie-primary-english/index.ts";
import { ciePrimaryScience } from "./courses/cie-primary-science/index.ts";
import { ciePrimaryComputing } from "./courses/cie-primary-computing/index.ts";
import { ciePrimaryGlobalPerspectives } from "./courses/cie-primary-global-perspectives/index.ts";
import { cieLsEnglish } from "./courses/cie-ls-english/index.ts";
import { cieLsMaths } from "./courses/cie-ls-maths/index.ts";
import { cieLsScience } from "./courses/cie-ls-science/index.ts";
import { cieLsComputing } from "./courses/cie-ls-computing/index.ts";
import { cieLsGlobalPerspectives } from "./courses/cie-ls-global-perspectives/index.ts";
import { cieOLEnglishLanguage } from "./courses/cie-o-level-english-language/index.ts";
import { cieOLEnglishFirstLanguage } from "./courses/cie-o-level-english-first-language/index.ts";
import { cieOLevelMaths } from "./courses/cie-o-level-maths/index.ts";
import { cieOLevelBiology } from "./courses/cie-o-level-biology/index.ts";
import { cieOLevelChemistry } from "./courses/cie-o-level-chemistry/index.ts";
import { cieOLevelPhysics } from "./courses/cie-o-level-physics/index.ts";
import { cieOLevelAdditionalMaths } from "./courses/cie-o-level-additional-maths/index.ts";
import { cieOLEnglishESL } from "./courses/cie-o-level-english-as-a-second-language/index.ts";
import { cieALevelMaths } from "./courses/cie-a-level-maths/index.ts";
import { cieALevelFurtherMaths } from "./courses/cie-a-level-further-maths/index.ts";
import { cieALevelEnglish } from "./courses/cie-a-level-english/index.ts";
import { cieALevelBiology } from "./courses/cie-a-level-biology/index.ts";
import { cieALevelChemistry } from "./courses/cie-a-level-chemistry/index.ts";
import { cieALevelPhysics } from "./courses/cie-a-level-physics/index.ts";
import { cieIgcseAdditionalMaths } from "./courses/cie-igcse-additional-maths/index.ts";
import { cieIgcseComputerScience } from "./courses/cie-igcse-computer-science/index.ts";
import { cieIgcseIct } from "./courses/cie-igcse-ict/index.ts";
import { cieIgcseGlobalPerspectives } from "./courses/cie-igcse-global-perspectives/index.ts";
import { cieOLevelComputerScience } from "./courses/cie-o-level-computer-science/index.ts";
import { cieOLevelICT } from "./courses/cie-o-level-ict/index.ts";
import { cieOLevelAccounting } from "./courses/cie-o-level-accounting/index.ts";
import { cieOLevelBusiness } from "./courses/cie-o-level-business/index.ts";
import { cieOLevelEconomics } from "./courses/cie-o-level-economics/index.ts";
import { cieALevelComputerScience } from "./courses/cie-a-level-computer-science/index.ts";
import { cieALevelBusiness } from "./courses/cie-a-level-business/index.ts";
import { cieALevelEconomics } from "./courses/cie-a-level-economics/index.ts";
import { cieALevelGeography } from "./courses/cie-a-level-geography/index.ts";
import { cieALevelHistory } from "./courses/cie-a-level-history/index.ts";
import { cieALevelPsychology } from "./courses/cie-a-level-psychology/index.ts";
import { cieIgcseBusinessStudies } from "./courses/cie-igcse-business-studies/index.ts";
import { cieIgcseEconomics } from "./courses/cie-igcse-economics/index.ts";
import { cieIgcseGeography } from "./courses/cie-igcse-geography/index.ts";
import { cieIgcseHistory } from "./courses/cie-igcse-history/index.ts";
import { cieALevelSociology } from "./courses/cie-a-level-sociology/index.ts";
import { ciePreUMaths } from "./courses/cie-pre-u-maths/index.ts";
import { cieIgcseAccounting } from "./courses/cie-igcse-accounting/index.ts";
import { cieIgcseSociology } from "./courses/cie-igcse-sociology/index.ts";
import { cieIgcsePsychology } from "./courses/cie-igcse-psychology/index.ts";
import { cieIgcseDevelopmentStudies } from "./courses/cie-igcse-development-studies/index.ts";
import { cieIgcseLiterature } from "./courses/cie-igcse-literature/index.ts";
import { cieOLevelGeography } from "./courses/cie-o-level-geography/index.ts";
import { cieOLevelHistory } from "./courses/cie-o-level-history/index.ts";
import { cieOLevelPsychology } from "./courses/cie-o-level-psychology/index.ts";
import { ciePreUBiology } from "./courses/cie-pre-u-biology/index.ts";
import { ciePreUChemistry } from "./courses/cie-pre-u-chemistry/index.ts";
import { ciePreUPhysics } from "./courses/cie-pre-u-physics/index.ts";

export const COURSES: Course[] = [
  usMathPreK,
  usMathG0,
  usElaPreK,
  usElaG0,
  usSciencePreK,
  usScienceG0,
  usMathG1,
  usElaG1,
  usScienceG1,
  usMathG2,
  usElaG2,
  usScienceG2,
  usMathG3,
  usElaG3,
  usScienceG3,
  usMathG4,
  usElaG4,
  usScienceG4,
  usMathG5,
  usElaG5,
  usScienceG5,
  usMathG6,
  usElaG6,
  usScienceG6,
  usMathG7,
  usScienceG7,
  usElaG7,
  usMathG8,
  usScienceG8,
  usElaG8,
  usBiologyG9,
  usEarthSpaceG9,
  usElaG9,
  usMathG9,
  usMathG10,
  usMathG11,
  usMathG12,
  usChemistryG10,
  usBiologyG10,
  usElaG10,
  usPhysicsG11,
  usElaG11,
  usChemistryG11,
  usPhysicsG12,
  usElaG12,
  usPhysicsG10,
  usBiologyG11,
  usChemistryG12,
  usEarthSpaceG12,
  apCalculusAb,
  apCalculusBc,
  apStatistics,
  apBiology,
  apChemistry,
  apPhysics1,
  apPhysics2,
  apEnglishLanguage,
  apEnglishLiterature,
  apComputerScienceA,
  apUsHistory,
  apWorldHistory,
  apGovernmentPolitics,
  apPsychology,
  apHumanGeography,
  apSeminar,
  apResearch,
  apArtHistory,
  apMusicTheory,
  apSpanishLanguageCulture,
  apFrenchLanguageCulture,
  apGermanLanguageCulture,
  apItalianLanguageCulture,
  apJapaneseLanguageCulture,
  apLatinLanguageCulture,
  apChineseLanguageCulture,
  apStudioArt,
  satReadingWriting,
  satMath,
  satPracticeStrategy,
  algebra1,
  geometry,
  algebra2,
  precalculus,
  statistics,
  ibAaSl1,
  ibAaSl2,
  ibAaHl1,
  ibAaHl2,
  ibAiSl1,
  ibAiSl2,
  ibAiHl1,
  ibAiHl2,
  ibBioSl1,
  ibBioSl2,
  ibBioHl1,
  ibBioHl2,
  ibChemSl1,
  ibChemSl2,
  ibChemHl1,
  ibChemHl2,
  ibPhysSl1,
  ibPhysSl2,
  ibPhysHl1,
  ibPhysHl2,
  ibHisSl1,
  ibHisSl2,
  ibGeoSl1,
  ibGeoSl2,
  ibEconSl1,
  ibEconSl2,
  ibBusSl1,
  ibBusSl2,
  ibPsychSl1,
  ibPsychSl2,
  ibLangASl1,
  ibLangASl2,
  ibLangBSl1,
  ibLangBSl2,
  ibLangAbSl1,
  ibLangAbSl2,
  ibVaSl1,
  ibVaSl2,
  ibMusicSl1,
  ibMusicSl2,
  ibTheatreSl1,
  ibTheatreSl2,
  ibTok,
  ibEe,
  ibCas,
  mypMathsY1,
  mypSciencesY1,
  mypMathsY2,
  mypSciencesY2,
  mypMathsY3,
  mypSciencesY3,
  mypMathsStdY4,
  mypMathsExtY4,
  mypMathsStdY5,
  mypMathsExtY5,
  mypBiologyY4,
  mypChemistryY4,
  mypPhysicsY4,
  mypBiologyY5,
  mypChemistryY5,
  mypPhysicsY5,
  pypLanguage,
  pypMaths,
  pypScience,
  pypSocialStudies,
  pypArts,
  pypPspe,
  mypLangLitY1,
  mypLangLitY2,
  mypLangLitY3,
  mypLangLitY4,
  mypLangLitY5,
  mypLangAcqY1,
  mypLangAcqY2,
  mypLangAcqY3,
  mypLangAcqY4,
  mypLangAcqY5,
  edxMathsY7,
  edxMathsY8,
  edxMathsY9,
  edxMathsY10,
  edxMathsY11,
  edxIasMaths,
  edxIalMaths,
  edxIasFurtherMaths,
  edxIalFurtherMaths,
  edxIasPureMaths,
  edxIalPureMaths,
  edxIasBiology,
  edxIalBiology,
  edxIasChemistry,
  edxIalChemistry,
  edxIasPhysics,
  edxIalPhysics,
  edxIasBusiness,
  edxIasEconomics,
  edxIasPsychology,
  edxIasSociology,
  edxIasComputerScience,
  edxIasAccounting,
  edxPrimaryMathsY1,
  edxPrimaryMathsY2,
  edxPrimaryMathsY3,
  edxPrimaryMathsY4,
  edxPrimaryMathsY5,
  edxPrimaryMathsY6,
  edxPrimaryEnglishY1,
  edxPrimaryEnglishY2,
  edxPrimaryEnglishY3,
  edxPrimaryEnglishY4,
  edxPrimaryEnglishY5,
  edxPrimaryEnglishY6,
  edxPrimaryScienceY1,
  edxPrimaryScienceY2,
  edxPrimaryScienceY3,
  edxPrimaryScienceY4,
  edxPrimaryScienceY5,
  edxPrimaryScienceY6,
  edxPrimaryComputing,
  edxPrimaryGeography,
  edxPrimaryHistory,
  edxBtecEngineering,
  edxBtecHealthSocialCare,
  edxBtecInformationTechnology,
  edxEngLangY7,
  edxEngLangY8,
  edxEngLangY9,
  edxEngLangY10,
  edxEngLangY11,
  edxEngLitY8,
  edxEngLitY9,
  edxEngLitY10,
  edxEngLitY11,
  edxScienceY7,
  edxScienceY8,
  edxScienceY9,
  edxBiologyY10,
  edxBiologyY11,
  edxChemistryY10,
  edxChemistryY11,
  edxPhysicsY10,
  edxPhysicsY11,
  edxScienceY10,
  edxScienceY11,
  edxBusinessY10,
  edxBusinessY11,
  edxEconomicsY10,
  edxEconomicsY11,
  edxComputerScienceY10,
  edxComputerScienceY11,
  cieIgcseMaths,
  cieIgcseMathsCore,
  cieIgcseAdditionalMaths,
  cieIgcseComputerScience,
  cieIgcseIct,
  cieIgcseGlobalPerspectives,
  cieIgcseEnglish,
  cieIgcseBiology,
  cieIgcseChemistry,
  cieIgcsePhysics,
  ciePrimaryMaths,
  ciePrimaryEnglish,
  ciePrimaryScience,
  ciePrimaryComputing,
  ciePrimaryGlobalPerspectives,
  cieLsEnglish,
  cieLsMaths,
  cieLsScience,
  cieLsComputing,
  cieLsGlobalPerspectives,
  cieOLEnglishLanguage,
  cieOLEnglishFirstLanguage,
  cieOLevelMaths,
  cieOLevelBiology,
  cieOLevelChemistry,
  cieOLevelPhysics,
  cieOLevelAdditionalMaths,
  cieOLEnglishESL,
  cieOLevelComputerScience,
  cieOLevelICT,
  cieOLevelAccounting,
  cieOLevelBusiness,
  cieOLevelEconomics,
  cieALevelMaths,
  cieALevelFurtherMaths,
  cieALevelEnglish,
  cieALevelBiology,
  cieALevelChemistry,
  cieALevelPhysics,
  cieALevelComputerScience,
  cieALevelBusiness,
  cieALevelEconomics,
  cieALevelGeography,
  cieALevelHistory,
  cieALevelPsychology,
  cieIgcseBusinessStudies,
  cieIgcseEconomics,
  cieIgcseGeography,
  cieIgcseHistory,
  cieIgcseAccounting,
  cieIgcseSociology,
  cieIgcsePsychology,
  cieIgcseDevelopmentStudies,
  cieIgcseLiterature,
  cieOLevelGeography,
  cieOLevelHistory,
  cieOLevelPsychology,
  cieALevelSociology,
  ciePreUMaths,
  ciePreUBiology,
  ciePreUChemistry,
  ciePreUPhysics,
];

export const US_COURSES = COURSES.filter(
  (c) => !c.ib && !c.edexcel && !c.myp && !c.pyp && !c.cie,
);
export const IB_COURSES = COURSES.filter((c) => c.ib);
export const MYP_COURSES = COURSES.filter((c) => c.myp);
export const PYP_COURSES = COURSES.filter((c) => c.pyp);
export const EDEXCEL_COURSES = COURSES.filter((c) => c.edexcel);
export const CIE_COURSES = COURSES.filter((c) => c.cie);

export type QuestionLocation = {
  course: Course;
  unit: Unit;
  lesson: Lesson;
  concept: Concept;
  question: Question;
};

export type ConceptLocation = Omit<QuestionLocation, "question">;

const questionIndex = new Map<string, QuestionLocation>();
const conceptIndex = new Map<string, ConceptLocation>();
/** Question ids in curriculum order per lesson, so next/previous flows through the lesson. */
const lessonSequence = new Map<string, string[]>();

for (const course of COURSES) {
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      const sequence: string[] = [];
      for (const concept of lesson.concepts) {
        conceptIndex.set(concept.id, { course, unit, lesson, concept });
        for (const question of concept.questions) {
          questionIndex.set(question.id, {
            course,
            unit,
            lesson,
            concept,
            question,
          });
          sequence.push(question.id);
        }
      }
      lessonSequence.set(lesson.id, sequence);
    }
  }
}

export function getCourse(courseId: string): Course | undefined {
  return COURSES.find((c) => c.id === courseId);
}

export function getQuestion(questionId: string): QuestionLocation | undefined {
  return questionIndex.get(questionId);
}

export function getConcept(conceptId: string): ConceptLocation | undefined {
  return conceptIndex.get(conceptId);
}

export function getNeighbors(
  loc: QuestionLocation,
  include: (q: Question) => boolean = () => true,
): { prev?: string; next?: string; position: number; total: number } {
  // The current question always stays in the sequence so position is meaningful.
  const seq = (lessonSequence.get(loc.lesson.id) ?? []).filter((id) => {
    const q = questionIndex.get(id)?.question;
    return id === loc.question.id || (q !== undefined && include(q));
  });
  const i = seq.indexOf(loc.question.id);
  return {
    prev: seq[i - 1],
    next: seq[i + 1],
    position: i + 1,
    total: seq.length,
  };
}

/** Similar questions: same concept first, then the rest of the lesson. */
export function getMoreLikeThis(
  loc: QuestionLocation,
  limit = 6,
): QuestionLocation[] {
  const sameConcept = loc.concept.questions.filter(
    (q) => q.id !== loc.question.id,
  );
  const sameLesson = loc.lesson.concepts
    .filter((c) => c.id !== loc.concept.id)
    .flatMap((c) => c.questions);
  return [...sameConcept, ...sameLesson]
    .slice(0, limit)
    .map((q) => questionIndex.get(q.id))
    .filter((q): q is QuestionLocation => q !== undefined);
}

export function countQuestions(course: Course): number {
  return course.units.reduce(
    (sum, u) =>
      sum +
      u.lessons.reduce(
        (s, l) => s + l.concepts.reduce((c, k) => c + k.questions.length, 0),
        0,
      ),
    0,
  );
}

export function firstQuestionId(
  concept: Concept,
  include: (q: Question) => boolean = () => true,
): string | undefined {
  return (concept.questions.find(include) ?? concept.questions[0])?.id;
}

/** Strip math/markup for short plain-text previews. */
export function plainPreview(text: string, max = 110): string {
  const plain = text
    .replaceAll("\\$", "DOLLARSIGN")
    .replaceAll("\\{", "LBRACE")
    .replaceAll("\\}", "RBRACE")
    .replace(/\$\$?([^$]+)\$\$?/g, "$1")
    .replaceAll("DOLLARSIGN", "$")
    .replace(/\\(dfrac|frac)\{([^}]*)\}\{([^}]*)\}/g, "$2/$3")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/[{}*]/g, "")
    .replaceAll("LBRACE", "{")
    .replaceAll("RBRACE", "}")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > max ? `${plain.slice(0, max).trimEnd()}...` : plain;
}
