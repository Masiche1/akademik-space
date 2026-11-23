import type { Lesson } from "../../../types.ts";

export const lesson352: Lesson = {
  id: "ecs11-u9-lesson-9-2",
  code: "9-2",
  title: "Representing Text, Sound and Images",
  goal: "I CAN explain how bitmap and vector images and digital sound are represented and calculate their file sizes.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data Representation", "4CP1: bitmap/vector images, sound sampling, resolution, colour depth, file size"],
  
  vocabulary: [
    { term: "Bitmap image", definition: "An image stored as a grid of pixels, each with a colour value." },
    { term: "Vector graphic", definition: "An image stored as mathematical descriptions of shapes, lines and curves." },
    { term: "Pixel", definition: "The smallest element of a bitmap image — one coloured square." },
    { term: "Colour depth", definition: "The number of bits used to store the colour of each pixel." },
    { term: "Resolution", definition: "The number of pixels in an image, e.g. width x height." },
    { term: "Sample rate", definition: "The number of sound samples captured per second, measured in Hz or kHz." },
    { term: "Bit depth (sound)", definition: "The number of bits used to store each sound sample." },
  ],
  concepts: [
    {
      id: "ecs11-u9-bitmap-sound",
      title: "Bitmap images, vector graphics and sound",
      skill: "Compare bitmap and vector graphics and explain how sound is sampled at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Bitmap vs vector images",
            body: "A bitmap image stores a grid of pixels; each pixel holds a colour value. File size depends on resolution and colour depth. Bitmaps are ideal for photographs because they capture continuous tone, but they lose quality when enlarged because pixels become visible.\n\nA vector graphic stores shapes as mathematical objects — lines, curves and fills with coordinates. It scales to any size without distortion and typically has small files, making it ideal for logos, icons and diagrams. It cannot easily represent photographic detail.",
          },
          {
            heading: "Representing sound digitally",
            body: "Sound is an analogue wave; digitising it means sampling its amplitude at regular intervals. The sample rate is how many samples are taken per second — the CD standard is 44,100 Hz. The bit depth (or sample depth) is how many bits store each sample's amplitude, affecting dynamic range and quality.\n\nFile size = sample rate x duration x bit depth x number of channels. Higher sample rates and bit depths give better quality but much larger files. Stereo (2 channels) doubles the size of mono.",
          },
        ],
        keyFormulas: [
          { name: "Sound file size", statement: "bits = sample rate x seconds x bit depth x channels" },
          { name: "Bitmap file size", statement: "bytes = width x height x colour depth / 8" },
        ],
        workedExample: {
          problem: "A mono sound clip lasts 10 seconds, sampled at 8000 Hz with 8-bit samples. What is its size in bits and bytes?",
          solution: "Samples = 8000 x 10 = 80,000. Bits = 80,000 x 8 = 640,000 bits. Bytes = 640,000 / 8 = 80,000 bytes.",
        },
      },
      questions: [
        {
          id: "ecs11-u9-bms-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which type of image stores a picture as a grid of pixels, each with its own colour value?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bitmap"
                    },
                    {
                              "id": "b",
                              "text": "Vector"
                    },
                    {
                              "id": "c",
                              "text": "Both bitmap and vector"
                    },
                    {
                              "id": "d",
                              "text": "Neither — images are not stored digitally"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bitmap image",
                              "statement": "Grid of coloured pixels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bitmaps store a grid of pixels; vectors store mathematical shapes.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Bitmap"
},
        },
        {
          id: "ecs11-u9-bms-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sound clip is sampled 8000 times per second. How many samples are recorded in a 5-second clip?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Samples",
                              "answer": 40000
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sampling",
                              "statement": "samples = rate x duration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8000 samples per second x 5 seconds.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "8000 x 5 = 40,000 samples.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "40000"
},
        },
        {
          id: "ecs11-u9-bms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State what is meant by sample rate and bit depth in sound recording, and how each affects quality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sampling parameters",
                              "statement": "Rate and precision of digitisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sample rate = number of samples taken per second; it determines how much of the sound's detail (especially high frequencies) is captured.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Bit depth = number of bits storing each sample's amplitude; it determines dynamic range and precision.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Higher values of either give better quality but produce larger files.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Rate captures frequency detail; depth captures amplitude precision; both trade quality for size."
},
        },
        {
          id: "ecs11-u9-bms-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare bitmap and vector graphics, giving one advantage of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Bitmap vs vector",
                              "statement": "Pixels vs shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A bitmap stores a grid of pixels with colour values for each.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Bitmap advantage: it can represent photographic images with continuous tone and subtle colour variation.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A vector graphic stores shapes defined by mathematical equations and coordinates.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Vector advantage: it scales to any size without losing quality and typically has a much smaller file size.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Bitmap = pixels, good for photos; vector = equations, scales cleanly, small files."
},
        },
        {
          id: "ecs11-u9-bms-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A mono sound clip lasts 10 seconds, is sampled at 8000 Hz and uses 8-bit samples.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the total number of samples.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the total size of the clip in bits.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the size in bytes.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound file size",
                              "statement": "rate x time x depth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) samples = 8000 x 10 = 80,000.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) bits = 80,000 x 8 = 640,000.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) bytes = 640,000 / 8 = 80,000 bytes.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) 80,000 samples (b) 640,000 bits (c) 80,000 bytes"
},
        },
        {
          id: "ecs11-u9-bms-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company logo is stored as a 200x150 pixel bitmap image with 8-bit colour depth, but will be printed at many sizes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the total number of pixels.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the total number of bits needed to store the image.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the file size in bytes.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how storing the logo as a vector graphic would differ and why it might be preferred.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Bitmap file size",
                              "statement": "pixels x colour depth / 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) pixels = 200 x 150 = 30,000.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) bits = 30,000 x 8 = 240,000.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) bytes = 240,000 / 8 = 30,000 bytes.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) A vector stores the logo as shapes and curves with mathematical definitions, not pixels.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) It can be scaled to any print size without pixelation or loss of sharpness.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) The file is typically far smaller because only shape data is stored.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) It is preferred for logos and diagrams; a bitmap would be better for a photograph.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) 30,000 pixels (b) 240,000 bits (c) 30,000 bytes (d) vector scales cleanly, smaller file"
},
        },
      ],
    },
    {
      id: "ecs11-u9-file-size",
      title: "Image resolution, colour depth and file size",
      skill: "Calculate image file sizes and explain the effect of resolution and colour depth at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Resolution and colour depth",
            body: "An image's resolution is its width x height in pixels — more pixels means more detail but a larger file. Colour depth is the number of bits used to store each pixel's colour: 1-bit gives 2 colours, 8-bit gives 256 colours, 16-bit gives 65,536 and 24-bit gives over 16 million ('true colour').\n\nUncompressed bitmap file size in bytes = (width x height x colour depth) / 8.",
          },
          {
            heading: "Why file sizes matter",
            body: "High-resolution photos with 24-bit colour produce very large files — a 1024x768 photo needs about 2.3 MB uncompressed — so cameras and websites rely on compression (covered in lesson 9-3).\n\nTrade-offs: increasing resolution or colour depth improves quality but increases storage needs, upload/download time and processing cost. Choosing the right balance matters for web images, where small files load faster.",
          },
        ],
        keyFormulas: [
          { name: "Image file size", statement: "bytes = width x height x colour depth / 8" },
          { name: "Colours available", statement: "colours = 2^(colour depth)" },
        ],
        workedExample: {
          problem: "A 512x512 pixel image uses 8-bit colour depth. What is its size in bytes and KB?",
          solution: "512 x 512 x 8 = 2,097,152 bits. / 8 = 262,144 bytes. / 1024 = 256 KB.",
        },
      },
      questions: [
        {
          id: "ecs11-u9-fsd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does colour depth measure in a bitmap image?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number of bits used to store each pixel's colour"
                    },
                    {
                              "id": "b",
                              "text": "The number of pixels per inch of the image"
                    },
                    {
                              "id": "c",
                              "text": "The total number of bytes in the file"
                    },
                    {
                              "id": "d",
                              "text": "The number of samples taken per second"
                    }
          ],
          "correctChoiceId": "a"
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
                              "reasoning": "Colour depth = bits per pixel; it determines how many colours can be represented.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Bits used per pixel"
},
        },
        {
          id: "ecs11-u9-fsd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 100x100 pixel image has a colour depth of 4 bits. Calculate the total number of bits needed to store it.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Bits",
                              "answer": 40000
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Image size",
                              "statement": "pixels x colour depth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pixels = 100 x 100 = 10,000.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Bits = 10,000 x 4 = 40,000.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "40000 bits"
},
        },
        {
          id: "ecs11-u9-fsd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many different colours can be represented with an 8-bit colour depth? Show your calculation.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Colours",
                              "answer": 256
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Colours from depth",
                              "statement": "colours = 2^depth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each pixel has 8 bits, each 0 or 1.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Number of combinations = 2^8.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "2^8 = 256 colours.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "256"
},
        },
        {
          id: "ecs11-u9-fsd-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how increasing an image's resolution affects both its quality and its file size.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Resolution trade-off",
                              "statement": "More pixels = more detail and more data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher resolution means more pixels, so finer detail can be captured and displayed.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "More pixels also means more colour values must be stored.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "File size grows in proportion to the pixel count (and colour depth).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "So quality improves but storage, upload time and processing demands increase.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "More pixels = sharper image but larger files."
},
        },
        {
          id: "ecs11-u9-fsd-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two images have the same resolution of 640x480 pixels. Image A uses 8-bit colour depth; image B uses 24-bit colour depth.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the file size of image A in bytes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the file size of image B in bytes.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why image B is larger.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Image file size",
                              "statement": "w x h x depth / 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) pixels = 640 x 480 = 307,200; bytes = 307,200 x 8 / 8 = 307,200 bytes.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) bytes = 307,200 x 24 / 8 = 921,600 bytes.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Image B stores 3 bytes of colour per pixel instead of 1, giving far more colours per pixel.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) 307,200 bytes (b) 921,600 bytes (c) 3x the colour depth"
},
        },
        {
          id: "ecs11-u9-fsd-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A digital photograph has a resolution of 1024x768 pixels and 24-bit colour depth (3 bytes per pixel).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the total number of pixels.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the file size in bits.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Convert the file size to megabytes (1 MB = 1,048,576 bytes).",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why photographs produce such large files and how compression helps.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Image file size",
                              "statement": "pixels x bits per pixel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) pixels = 1024 x 768 = 786,432.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) bits = 786,432 x 24 = 18,874,368.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) bytes = 18,874,368 / 8 = 2,359,296; MB = 2,359,296 / 1,048,576 = 2.25 MB.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Every pixel stores a 24-bit colour value, and photos have high resolution to capture detail.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) 24-bit colour gives over 16 million colours per pixel — essential for realistic photos.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) The result is millions of bytes per image, which is slow to store and transmit.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) Compression reduces the file size, making photos practical to share and store.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) 786,432 pixels (b) 18,874,368 bits (c) 2.25 MB (d) high resolution x deep colour = large files; compression reduces size"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u9-media-representation-notes",
      title: "Representing text, sound and images — notes",
      summary: "Bitmaps store pixels; vectors store shapes; sound is sampled; file size = resolution x colour depth (images) or rate x time x depth (sound).",
      sections: [
        { heading: "Key idea", body: "Every media type is reduced to binary numbers: pixels for images, samples for sound, codes for text." },
        { heading: "Images", body: "Bitmap file size = width x height x colour depth / 8 bytes. Vector files store shapes, not pixels." },
        { heading: "Sound", body: "File size in bits = sample rate x duration x bit depth x channels. Stereo doubles mono." },
        { heading: "Trade-offs", body: "Higher resolution, colour depth, sample rate and bit depth all improve quality but increase file size." },
      ],
    },
  ],
};
