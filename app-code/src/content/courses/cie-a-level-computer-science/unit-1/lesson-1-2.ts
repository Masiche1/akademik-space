import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "ciealc-u1-lesson-1-2",
  code: "1-2",
  title: "Data Representation: Text, Images, Sound",
  goal: "I CAN explain how text, images and sound are represented as binary and calculate file sizes.",
  standards: [
    "Cambridge A Level Computer Science 9618: data representation",
    "9618 topic 1",
  ],

  vocabulary: [
    {
      term: "Character encoding",
      definition: "Rules mapping characters to binary codes.",
    },
    {
      term: "ASCII",
      definition: "7-bit encoding for basic English characters.",
    },
    {
      term: "Unicode",
      definition: "Universal encoding for all languages/symbols.",
    },
    { term: "Pixel", definition: "Smallest picture element — coloured dot." },
    { term: "Resolution", definition: "Number of pixels in an image." },
    {
      term: "Colour depth",
      definition: "Bits per pixel — determines colour range.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u1-s2-media",
      title: "Media data representation",
      skill: "Explain binary encoding and file size calculations at A Level.",
      lesson: {
        sections: [
          {
            heading: "Text and image encoding",
            body: "Text: ASCII (7-bit, 128 chars) or Unicode (more bits, all languages). File size = characters × bits per character ÷ 8. Images: pixel grid, each pixel stores colour values. File size = pixels × colour depth ÷ 8.",
          },
          {
            heading: "Sound encoding",
            body: "Sound sampled at intervals; amplitude stored as binary. File size = sample rate × bit depth × duration × channels. Higher rates = better quality, bigger files.",
          },
        ],
        keyFormulas: [
          { name: "Text size", statement: "chars × bits ÷ 8" },
          { name: "Image size", statement: "pixels × colour depth ÷ 8" },
          { name: "Sound size", statement: "rate × depth × time × channels" },
        ],
        workedExample: {
          problem:
            "Calculate file size of a 1000×800 image at 24-bit colour depth.",
          solution:
            "Pixels = 1000×800 = 800,000. Bits = 800,000 × 24 = 19,200,000. Bytes = 19,200,000 ÷ 8 = 2,400,000 bytes ≈ 2.4 MB.",
        },
      },
      questions: [
        {
          id: "ciealc-u1-md-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is character encoding?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A network protocol",
              },
              {
                id: "b",
                text: "Rules mapping characters to binary codes",
              },
              {
                id: "c",
                text: "A type of font",
              },
              {
                id: "d",
                text: "A file format",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Character encoding",
                statement: "Char→binary mapping.",
              },
            ],
            steps: [
              {
                reasoning: "Encoding = char↔binary rules.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Char→binary rules",
          },
        },
        {
          id: "ciealc-u1-md-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate file size of 'Hello' stored as ASCII (7 bits per character).",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "File size",
                statement: "Chars × bits ÷ 8.",
              },
            ],
            steps: [
              {
                reasoning: "5 chars × 7 bits = 35 bits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "35 ÷ 8 = 4.375 bytes ≈ 4.4 bytes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "~4.4 bytes",
          },
        },
        {
          id: "ciealc-u1-md-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate file size of a 500×400 image at 16-bit colour depth.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Image file size",
                statement: "Pixels × depth ÷ 8.",
              },
            ],
            steps: [
              {
                reasoning: "Pixels = 500×400 = 200,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bits = 200,000 × 16 = 3,200,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bytes = 3,200,000 ÷ 8 = 400,000 bytes = 400 KB.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "400 KB",
          },
        },
        {
          id: "ciealc-u1-md-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define character encoding, ASCII, Unicode, pixel, resolution, colour depth, sound sampling. (b) Why is Unicode needed? (c) How many characters can ASCII represent? (d) What is a pixel? (e) How does colour depth affect image size? (f) What is 24-bit colour? (g) Why do emojis need Unicode? (h) Calculate size of 2000×1500 image at 32-bit colour depth.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Media representation",
                statement: "Encoding and file size.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All seven definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Covers all languages/symbols.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 128 (2^7).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Smallest image element.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) More bits/pixel = bigger file.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) 24 bits/pixel = 16.7M colours.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Emojis are symbols beyond ASCII.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) 2000×1500×32÷8 = 12,000,000 bytes = 12 MB.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Media encoding and file size calculations.",
          },
        },
        {
          id: "ciealc-u1-md-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which encoding is most suitable for text containing many emoji and non-Latin scripts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unicode" },
              { id: "b", text: "ASCII only" },
              { id: "c", text: "Run-length encoding" },
              { id: "d", text: "A bitmap font" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unicode",
                statement: "Universal character encoding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unicode covers emoji and non-Latin scripts; ASCII is limited.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Unicode",
          },
        },
        {
          id: "ciealc-u1-md-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A message contains 80 characters encoded using 8 bits per character. Calculate the file size in bytes. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Text file size",
                statement: "Characters × bits ÷ 8.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "80 × 8 = 640 bits; 640 ÷ 8 = 80 bytes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "80 bytes",
          },
        },
        {
          id: "ciealc-u1-md-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 640 × 480 image uses 24-bit colour depth. Calculate the uncompressed image size in bytes. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 921600 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Image file size",
                statement: "Pixels × colour depth ÷ 8.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "640 × 480 × 24 ÷ 8 = 921,600 bytes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "921600 bytes",
          },
        },
        {
          id: "ciealc-u1-md-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why can a text file encoded in UTF-8 have a different byte length for different characters?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "UTF-8 uses a variable number of bytes per character",
              },
              { id: "b", text: "UTF-8 compresses the file with lossy coding" },
              { id: "c", text: "UTF-8 only works for English text" },
              { id: "d", text: "UTF-8 stores each character as one pixel" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UTF-8",
                statement: "Variable-length Unicode encoding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "UTF-8 assigns 1-4 bytes depending on the character.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Variable bytes per character",
          },
        },
        {
          id: "ciealc-u1-md-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 30-second stereo sound sample is recorded at 44,100 Hz with 16-bit samples. Calculate the uncompressed data size in bytes. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5292000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sound file size",
                statement: "Rate × depth × time × channels ÷ 8.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "44,100 × 16 × 30 × 2 ÷ 8 = 5,292,000 bytes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5292000 bytes",
          },
        },
        {
          id: "ciealc-u1-md-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change most increases the uncompressed file size of a digital photograph?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Increasing the colour depth from 16 to 24 bits",
              },
              { id: "b", text: "Changing the file extension only" },
              { id: "c", text: "Saving it in a folder" },
              { id: "d", text: "Renaming the file" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Image size",
                statement: "More bits per pixel increases size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher colour depth increases bits per pixel and therefore file size.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Higher colour depth",
          },
        },
        {
          id: "ciealc-u1-md-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An image file is reduced from 2,400,000 bytes to 600,000 bytes. Calculate the percentage reduction in file size. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Compression saving",
                statement: "(Original − compressed) ÷ original × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "(2,400,000 − 600,000) ÷ 2,400,000 × 100 = 75%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "ciealc-u1-md-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A music file is sampled at a higher rate and with more bits per sample. What is the main effect on quality and file size?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither quality nor file size changes" },
              { id: "b", text: "File size increases but quality decreases" },
              { id: "c", text: "Both quality and file size increase" },
              { id: "d", text: "Quality increases but file size decreases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sampling trade-off",
                statement: "Higher fidelity requires more data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "More samples and more bits per sample improve fidelity and increase size.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Quality and size increase",
          },
        },
        {
          id: "ciealc-u1-md-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A school wants to store many photos online. Explain how changing resolution and colour depth affects file size and image quality, and recommend one change that reduces storage without greatly harming quality.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Media trade-offs",
                statement: "Resolution and depth control size and quality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resolution is the pixel count; more pixels increase detail and size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Colour depth is bits per pixel; more bits increase colour range and size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reducing either lowers file size but may reduce perceived quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A valid recommendation, e.g. modestly lower resolution or lossy compression.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lower resolution/depth or compress to reduce storage with acceptable quality loss.",
          },
        },
        {
          id: "ciealc-u1-md-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the minimum whole-number colour depth needed to represent 256 distinct colours?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4 bits" },
              { id: "b", text: "24 bits" },
              { id: "c", text: "16 bits" },
              { id: "d", text: "8 bits" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Colour depth",
                statement: "2^n colours for n bits.",
              },
            ],
            steps: [
              {
                reasoning: "2^8 = 256, so 8 bits per pixel is sufficient.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** 8 bits",
          },
        },
        {
          id: "ciealc-u1-md-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A display has resolution 1920 × 1080. (a) How many pixels does it contain? (b) What is the uncompressed size in bytes at 24-bit colour depth? Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2073600 },
              { label: "b", answer: 6220800 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Image calculations",
                statement:
                  "Pixels = width × height; bytes = pixels × depth ÷ 8.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "1920 × 1080 = 2,073,600 pixels.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "2,073,600 × 24 ÷ 8 = 6,220,800 bytes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2073600 pixels; 6220800 bytes",
          },
        },
        {
          id: "ciealc-u1-md-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which option gives the smallest uncompressed image file while still storing colour information for every pixel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower resolution and lower colour depth" },
              { id: "b", text: "Same colour depth but higher resolution" },
              { id: "c", text: "Higher resolution and higher colour depth" },
              { id: "d", text: "Same resolution but higher colour depth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "File size factors",
                statement: "Size grows with pixels and bits per pixel.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reducing both pixel count and bits per pixel gives the smallest file.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Lower resolution and colour depth",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u1-md-notes",
      title: "Media representation — notes",
      summary:
        "Text=chars×bits÷8; images=pixels×depth÷8; sound=rate×depth×time. Higher quality=more bits=bigger files.",
      sections: [
        {
          heading: "Key idea",
          body: "File size calculations are exam-relevant — practise formula application.",
        },
        {
          heading: "Size",
          body: "More resolution or colour depth = bigger files.",
        },
      ],
    },
  ],
};
