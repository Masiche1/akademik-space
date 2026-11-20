import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "ciealc-u1-lesson-1-2",
  code: "1-2",
  title: "Data Representation: Text, Images, Sound",
  goal: "I CAN explain how text, images and sound are represented as binary and calculate file sizes.",
  standards: ["Cambridge A Level Computer Science 9618: data representation", "9618 topic 1"],
  
  vocabulary: [
    { term: "Character encoding", definition: "Rules mapping characters to binary codes." },
    { term: "ASCII", definition: "7-bit encoding for basic English characters." },
    { term: "Unicode", definition: "Universal encoding for all languages/symbols." },
    { term: "Pixel", definition: "Smallest picture element — coloured dot." },
    { term: "Resolution", definition: "Number of pixels in an image." },
    { term: "Colour depth", definition: "Bits per pixel — determines colour range." },
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
          problem: "Calculate file size of a 1000×800 image at 24-bit colour depth.",
          solution: "Pixels = 1000×800 = 800,000. Bits = 800,000 × 24 = 19,200,000. Bytes = 19,200,000 ÷ 8 = 2,400,000 bytes ≈ 2.4 MB.",
        },
      },
      questions: [
        {
          id: "ciealc-u1-md-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is character encoding?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rules mapping characters to binary codes"
                    },
                    {
                              "id": "b",
                              "text": "A file format"
                    },
                    {
                              "id": "c",
                              "text": "A type of font"
                    },
                    {
                              "id": "d",
                              "text": "A network protocol"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Character encoding",
                              "statement": "Char→binary mapping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Encoding = char↔binary rules.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Char→binary rules"
},
        },
        {
          id: "ciealc-u1-md-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate file size of 'Hello' stored as ASCII (7 bits per character).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "File size",
                              "statement": "Chars × bits ÷ 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 chars × 7 bits = 35 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "35 ÷ 8 = 4.375 bytes ≈ 4.4 bytes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "~4.4 bytes"
},
        },
        {
          id: "ciealc-u1-md-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate file size of a 500×400 image at 16-bit colour depth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Image file size",
                              "statement": "Pixels × depth ÷ 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pixels = 500×400 = 200,000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bits = 200,000 × 16 = 3,200,000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bytes = 3,200,000 ÷ 8 = 400,000 bytes = 400 KB.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "400 KB"
},
        },
        {
          id: "ciealc-u1-md-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define character encoding, ASCII, Unicode, pixel, resolution, colour depth, sound sampling. (b) Why is Unicode needed? (c) How many characters can ASCII represent? (d) What is a pixel? (e) How does colour depth affect image size? (f) What is 24-bit colour? (g) Why do emojis need Unicode? (h) Calculate size of 2000×1500 image at 32-bit colour depth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Media representation",
                              "statement": "Encoding and file size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Covers all languages/symbols.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 128 (2^7).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Smallest image element.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) More bits/pixel = bigger file.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) 24 bits/pixel = 16.7M colours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Emojis are symbols beyond ASCII.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) 2000×1500×32÷8 = 12,000,000 bytes = 12 MB.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Media encoding and file size calculations."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u1-md-notes",
      title: "Media representation — notes",
      summary: "Text=chars×bits÷8; images=pixels×depth÷8; sound=rate×depth×time. Higher quality=more bits=bigger files.",
      sections: [
        { heading: "Key idea", body: "File size calculations are exam-relevant — practise formula application." },
        { heading: "Size", body: "More resolution or colour depth = bigger files." },
      ],
    },
  ],
};
