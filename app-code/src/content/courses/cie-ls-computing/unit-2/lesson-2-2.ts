import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cils-c-u2-lesson-2-2",
  code: "2-2",
  title: "Stage 7 — Data Representation",
  goal: "I CAN explain how text, numbers and images are represented as binary data.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: managing data", "Cambridge Lower Secondary Computing 0860 strand: Managing data"],
  stage: 7,
  vocabulary: [
    { term: "Character encoding", definition: "Rules mapping characters to binary codes (ASCII, Unicode)." },
    { term: "ASCII", definition: "7-bit encoding for English characters." },
    { term: "Unicode", definition: "Universal encoding covering all languages/symbols." },
    { term: "Pixel", definition: "Smallest picture element — has colour values." },
    { term: "Resolution", definition: "Number of pixels in an image." },
    { term: "Colour depth", definition: "Bits per pixel — more bits = more colours." },
  ],
  concepts: [
    {
      id: "cils-c-u2-s2-rep",
      title: "Data representation",
      skill: "Explain text/image binary encoding at Stage 7 level.",
      lesson: {
        sections: [
          {
            heading: "Text encoding",
            body: "Characters are stored as binary codes. ASCII uses 7 bits (128 chars) for English; Unicode uses more bits to cover all world languages and symbols. 'A' might be 1000001 in ASCII.",
          },
          {
            heading: "Image encoding",
            body: "Images are grids of pixels. Each pixel stores colour values as binary numbers. Resolution = pixel count (more = sharper, bigger files). Colour depth = bits per pixel (24-bit = 16.7 million colours).",
          },
        ],
        keyFormulas: [
          { name: "ASCII", statement: "7-bit English encoding" },
          { name: "Unicode", statement: "universal multi-language encoding" },
          { name: "Pixel", statement: "image dot with colour values" },
        ],
        workedExample: {
          problem: "Why does a 4K photo file bigger than a thumbnail?",
          solution: "More pixels (resolution) × more colour bits per pixel = more binary data = bigger file.",
        },
      },
      questions: [
        {
          id: "cils-c-u2-dr-q1",
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
                              "text": "A type of file"
                    },
                    {
                              "id": "c",
                              "text": "A screen setting"
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
                              "reasoning": "Encoding = rules for char↔binary.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Char→binary rules"
},
        },
        {
          id: "cils-c-u2-dr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between ASCII and Unicode?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ASCII vs Unicode",
                              "statement": "English vs universal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ASCII=7-bit English only.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unicode=all languages/symbols.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "English-only vs universal"
},
        },
        {
          id: "cils-c-u2-dr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a digital image is stored as data. What affects file size?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Image encoding",
                              "statement": "Pixels and colour depth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grid of pixels, each with colour binary values.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resolution + colour depth determine size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More pixels/bits = bigger file.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pixels+colour; size=resolution×depth"
},
        },
        {
          id: "cils-c-u2-dr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define character encoding, ASCII, Unicode, pixel, resolution, colour depth. (b) Why is Unicode needed? (c) How many characters can ASCII represent? (d) What is a pixel? (e) How does resolution affect image quality/size? (f) What is 24-bit colour? (g) Why do emojis need Unicode? (h) Compare storing 'Hi' as text vs image.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Data representation",
                              "statement": "Text/image encoding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
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
                              "reasoning": "(d) Smallest image element with colour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) More pixels=sharper but bigger.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) 24 bits/pixel=16.7M colours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Emojis are symbols beyond ASCII.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Text=tiny char codes; image=thousands of pixels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Character and image encoding."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u2-dr-notes",
      title: "Data representation — notes",
      summary: "Text=char codes (ASCII/Unicode); images=pixel grids. Size depends on resolution and colour depth.",
      sections: [
        { heading: "Key idea", body: "All data is binary — encoding rules map it to meaning." },
        { heading: "Images", body: "More pixels + more colour bits = better quality, bigger files." },
      ],
    },
  ],
};
