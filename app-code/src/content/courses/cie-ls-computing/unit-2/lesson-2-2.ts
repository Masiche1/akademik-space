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
                              "text": "A network protocol"
                    },
                    {
                              "id": "b",
                              "text": "Rules mapping characters to binary codes"
                    },
                    {
                              "id": "c",
                              "text": "A screen setting"
                    },
                    {
                              "id": "d",
                              "text": "A type of file"
                    }
          ],
          "correctChoiceId": "b"
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
        {
          id: "cils-c-u2-dr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a pixel?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A file format"
                    },
                    {
                              "id": "b",
                              "text": "A character code"
                    },
                    {
                              "id": "c",
                              "text": "The smallest picture element with a colour value"
                    },
                    {
                              "id": "d",
                              "text": "A type of screen"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pixel",
                              "statement": "Image dot with colour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Images are grids of pixels.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Smallest image element"
},
        },
        {
          id: "cils-c-u2-dr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bits does standard ASCII use per character?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 7 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ASCII",
                              "statement": "7-bit English encoding."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "ASCII uses 7 bits → 2^7 = 128 characters.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "7"
},
        },
        {
          id: "cils-c-u2-dr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many different characters can 7-bit ASCII represent?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 128 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Encoding capacity",
                              "statement": "2^bits characters."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "2^7 = 128.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "128"
},
        },
        {
          id: "cils-c-u2-dr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is Unicode needed when ASCII already exists? Give two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unicode",
                              "statement": "Universal multi-language encoding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ASCII covers only English characters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unicode covers all world languages and symbols.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. emojis and accented characters need Unicode.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Covers all languages/symbols"
},
        },
        {
          id: "cils-c-u2-dr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'resolution' of an image describe?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The file size on disk"
                    },
                    {
                              "id": "b",
                              "text": "The screen brightness"
                    },
                    {
                              "id": "c",
                              "text": "The colour depth"
                    },
                    {
                              "id": "d",
                              "text": "The number of pixels in the image"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Resolution",
                              "statement": "Pixel count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resolution = how many pixels the image has.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Number of pixels"
},
        },
        {
          id: "cils-c-u2-dr-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An image uses 8-bit colour depth (8 bits per pixel). How many colours can each pixel show?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 256 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Colour depth",
                              "statement": "2^bits colours."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "2^8 = 256 colours.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "256"
},
        },
        {
          id: "cils-c-u2-dr-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is a 4K photo file much bigger than a small thumbnail of the same photo?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It has far more pixels, so more binary data"
                    },
                    {
                              "id": "b",
                              "text": "It is stored uncompressed always"
                    },
                    {
                              "id": "c",
                              "text": "It has fewer colours"
                    },
                    {
                              "id": "d",
                              "text": "It uses a different encoding"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Image size",
                              "statement": "Pixels × colour bits = file size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More pixels and/or more colour bits means more data.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "More pixels = more data"
},
        },
        {
          id: "cils-c-u2-dr-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define character encoding, ASCII, Unicode, pixel, colour depth. (b) How many characters can ASCII hold and why? (c) What does 24-bit colour depth mean? (d) How do resolution and colour depth each affect file size? (e) Why might an emoji fail to display in old software?",
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
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 128 — 7 bits gives 2^7 combinations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 24 bits per pixel → 16.7 million colours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) More pixels or more bits per pixel = bigger file.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Emojis are symbols outside ASCII/older encodings.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Encoding, capacity, file size."
},
        },
        {
          id: "cils-c-u2-dr-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'colour depth'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number of pixels in an image"
                    },
                    {
                              "id": "b",
                              "text": "A type of image file"
                    },
                    {
                              "id": "c",
                              "text": "The brightness of the screen"
                    },
                    {
                              "id": "d",
                              "text": "The number of bits used per pixel"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Colour depth",
                              "statement": "Bits per pixel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Colour depth = bits used for each pixel's colour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Bits per pixel"
},
        },
        {
          id: "cils-c-u2-dr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many colours can a 4-bit colour depth represent?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 16 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Colour depth",
                              "statement": "2^bits colours."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "2^4 = 16 colours.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "16"
},
        },
        {
          id: "cils-c-u2-dr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the key difference between ASCII and Unicode?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ASCII is faster than Unicode"
                    },
                    {
                              "id": "b",
                              "text": "ASCII covers English only; Unicode covers all languages and symbols"
                    },
                    {
                              "id": "c",
                              "text": "Unicode only works on phones"
                    },
                    {
                              "id": "d",
                              "text": "There is no difference"
                    }
          ],
          "correctChoiceId": "b"
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
                              "reasoning": "Unicode extends coverage to all scripts and symbols.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "English-only vs universal"
},
        },
        {
          id: "cils-c-u2-dr-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define pixel, resolution, colour depth, ASCII, Unicode. (b) Why do computers store text as binary codes at all? (c) An image is 1000 × 800 pixels at 24-bit depth — how many bits of colour data? (d) Why does doubling resolution roughly quadruple file size? (e) When would ASCII be sufficient? (f) Compare storing the word 'Hi' as text versus as a tiny image.",
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
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Computers store everything as binary; encoding gives it meaning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 1000 × 800 × 24 = 19,200,000 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Doubling both dimensions → 4× pixels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Plain English text with no special symbols.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Text = 2 character codes (tiny); image = pixel grid (much larger).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Encoding, capacity, file size."
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
