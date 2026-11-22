import type { Lesson } from "../../../types.ts";

export const lesson222: Lesson = {
  id: "ecs10-u3-lesson-3-2",
  code: "3-2",
  title: "Data Representation in Practice",
  goal: "I CAN calculate file sizes and represent data in binary.",
  standards: [
    "Pearson Edexcel IGCSE Computer Science 4CP1 — Data Representation",
  ],
  vocabulary: [
    {
      term: "Colour depth",
      definition: "Bits per pixel — determines colours available.",
    },
    { term: "Resolution", definition: "Number of pixels (width × height)." },
    { term: "Sample rate", definition: "Samples per second in audio." },
    { term: "Bit rate", definition: "Bits processed per second." },
    { term: "Metadata", definition: "Data about data — file properties." },
  ],
  concepts: [
    {
      id: "ecs10-u3-images",
      title: "Image and Sound Representation",
      skill: "Calculate image/audio file sizes from parameters.",
      lesson: {
        sections: [
          {
            heading: "Image calculations",
            body: "**File size** = width × height × colour depth ÷ 8 (bytes). **Colour depth**: 1-bit (2 colours), 8-bit (256), 24-bit (16.7m). **Higher depth** = more colours but larger file.\n\n**Example**: 1024×768 image, 24-bit = 1024×768×24 ÷ 8 = 2,359,296 bytes ≈ 2.25 MB.",
          },
          {
            heading: "Sound calculations",
            body: "**File size** = sample rate × bit depth × duration ÷ 8. **Sample rate**: 44.1kHz CD quality. **Bit depth**: 16-bit typical. **Mono vs stereo**: stereo = 2 channels.\n\n**Example**: 3 min stereo audio, 44.1kHz, 16-bit = 44100×16×2×180 ÷ 8 ≈ 31.7 MB.",
          },
        ],
        keyFormulas: [
          {
            name: "Image size",
            statement: "(width × height × colour depth) ÷ 8 bytes.",
          },
          {
            name: "Audio size",
            statement:
              "(sample rate × bit depth × duration × channels) ÷ 8 bytes.",
          },
        ],
        workedExample: {
          problem: "800×600 image, 8-bit colour. Size?",
          solution: "800×600×8÷8 = 480,000 bytes ≈ 469 KB.",
        },
      },
      questions: [
        {
          id: "ecs10-u3-images-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does colour depth measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bits per pixel" },
              { id: "b", text: "Number of images" },
              { id: "c", text: "File size" },
              { id: "d", text: "Image width" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Colour depth",
                statement: "Bits per pixel.",
              },
            ],
            steps: [
              {
                reasoning: "Colour depth = bits/pixel.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Bits per pixel",
            commonErrors: ["Resolution confused."],
          },
        },
        {
          id: "ecs10-u3-images-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Calculate file size: 640×480 image, 24-bit colour depth.",
          response: {
            type: "numeric",
            parts: [{ label: "bytes", answer: 921600 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Image size",
                statement: "w×h×depth÷8.",
              },
            ],
            steps: [
              {
                reasoning: "640×480×24 = 7,372,800 bits.",
                marks: 2,
                markCode: "M",
              },
              { reasoning: "÷8 = 921,600 bytes.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "921,600 bytes (~900 KB)",
            commonErrors: ["Forgot ÷8.", "Wrong formula."],
          },
        },
        {
          id: "ecs10-u3-images-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why increasing colour depth increases file size.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Colour depth",
                statement: "More bits per pixel.",
              },
            ],
            steps: [
              {
                reasoning: "Each pixel needs more bits to store colour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total bits = pixels × colour depth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More bits → larger file size.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Trade-off: quality vs file size.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "More bits/pixel → more total bits → bigger file.",
            commonErrors: ["No mechanism.", "No trade-off."],
          },
        },
        {
          id: "ecs10-u3-images-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare storing a photo as JPEG vs BMP.",
          parts: [
            { label: "a", prompt: "Explain size difference.", marks: 3 },
            { label: "b", prompt: "Explain quality difference.", marks: 3 },
            { label: "c", prompt: "Recommend one for web use.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JPEG vs BMP",
                statement: "Compressed vs raw.",
              },
            ],
            steps: [
              {
                reasoning: "(a) BMP uncompressed — much larger file.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) JPEG lossy compression — significantly smaller.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) BMP exact pixels — best quality.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) JPEG loses some detail — 'artifacts'.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) JPEG for web — smaller downloads.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) BMP bigger (b) BMP exact/JPEG lossy (c) JPEG",
            commonErrors: ["No comparison.", "Wrong recommendation."],
          },
        },
      ],
    },
    {
      id: "ecs10-u3-dataquality",
      title: "Data Quality and Ethics",
      skill: "Evaluate data quality issues and ethical considerations.",
      lesson: {
        sections: [
          {
            heading: "Data quality",
            body: "**Accuracy**: data correct. **Completeness**: no missing values. **Consistency**: same format throughout. **Timeliness**: up-to-date. **Validity**: meets rules.\n\n**Problems**: missing data, duplicates, outliers, inconsistent formats ('01/02' ambiguity), outdated info.",
          },
          {
            heading: "Ethical issues",
            body: "**Privacy**: personal data protection — GDPR. **Accuracy**: algorithms with biased data → unfair outcomes. **Ownership**: who owns collected data? **Transparency**: how data used? **Consent**: informed permission needed.\n\n**Example**: facial recognition — privacy concerns, accuracy bias against certain groups.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Survey has 20% missing responses. Quality issue?",
          solution: "Completeness — missing data affects analysis.",
        },
      },
      questions: [
        {
          id: "ecs10-u3-dataquality-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is data accuracy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Data is correct and error-free" },
              { id: "b", text: "Data is large" },
              { id: "c", text: "Data is private" },
              { id: "d", text: "Data is fast" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accuracy",
                statement: "Correct data.",
              },
            ],
            steps: [
              { reasoning: "Accuracy = correct.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Correct/error-free",
            commonErrors: ["Size confused."],
          },
        },
        {
          id: "ecs10-u3-dataquality-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two data quality issues with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data quality",
                statement: "Missing, inconsistent, outdated.",
              },
            ],
            steps: [
              {
                reasoning: "Missing data — blank fields.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inconsistent format — '01/02/2024' vs '1/2/24'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Outdated — old addresses, changed phone numbers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Missing, inconsistent, outdated data.",
            commonErrors: ["Only one.", "No examples."],
          },
        },
        {
          id: "ecs10-u3-dataquality-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one ethical issue with collecting personal data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data ethics",
                statement: "Privacy, consent, bias.",
              },
            ],
            steps: [
              {
                reasoning: "Privacy — personal data could be leaked/misused.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consent — data collected without permission.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Bias — algorithms trained on biased data give unfair results.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Laws like GDPR protect individuals.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Privacy, consent, bias — protected by laws.",
            commonErrors: ["No issue.", "No example."],
          },
        },
        {
          id: "ecs10-u3-dataquality-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company collects customer data for targeted advertising.",
          parts: [
            { label: "a", prompt: "Give two ethical concerns.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest two responsible practices.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data ethics",
                statement: "Consent + responsibility.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Privacy — tracking without clear consent.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Data sharing with third parties — breach risk.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Obtain explicit consent; clear privacy policy.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Secure storage; limit data retention.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) privacy+sharing (b) consent+security",
            commonErrors: ["No concerns.", "No practices."],
          },
        },
      ],
    },
  ],
};
