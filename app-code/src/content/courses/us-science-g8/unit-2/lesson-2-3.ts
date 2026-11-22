import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "s8-u2-lesson-2-3",
  code: "2-3",
  title: "Digital Signals",
  goal: "I CAN explain the difference between analog and digital signals, encode information in binary, and evaluate how reliably different designs transmit digital information.",
  standards: ["MS-PS4-3", "SEP: Obtaining, Evaluating, and Communicating Information", "SEP: Engaging in Argument from Evidence"],
  vocabulary: [
    { term: "Analog signal", definition: "A signal that varies continuously, so it can take any value within a range." },
    { term: "Digital signal", definition: "A signal that has only a limited set of values, usually two (on and off) represented as 1 and 0." },
    { term: "Bit", definition: "A binary digit, either 0 or 1. It is the smallest unit of digital information." },
    { term: "Byte", definition: "A group of 8 bits." },
    { term: "Noise", definition: "Unwanted random changes to a signal that can cause errors." },
    { term: "Sampling", definition: "Measuring an analog signal at regular time intervals so that it can be stored as numbers." },
    { term: "Error checking", definition: "Extra bits added to data so the receiver can detect whether a transmission error happened." },
  ],
  concepts: [
    {
      id: "s8-u2-analog-digital-encoding",
      title: "Analog and digital signals and encoding information",
      skill: "Distinguish analog from digital signals and encode information using binary numbers.",
      lesson: {
        sections: [
          {
            heading: "Analog and digital",
            body: "An **analog signal** changes smoothly and can have any value in a range, like the position of a dimmer switch or the groove of a vinyl record. A **digital signal** has only a few set values, most often two: **on (1)** and **off (0)**.\n\nWaves can carry both kinds of signal. A digital signal is a series of pulses of light, electricity or radio waves that stand for 1s and 0s. Digital signals are used by computers, phones, the internet and digital TV.",
          },
          {
            heading: "Binary numbers",
            body: "Computers store information as **binary** numbers. Each place value is double the one to its right: $\\dots, 16, 8, 4, 2, 1$.\n\nTo convert, add the place values that have a 1. For example, $1101_2 = 8 + 4 + 0 + 1 = 13$.\n\n**n bits** can represent $2^n$ different values. 3 bits give $2^3 = 8$ values (0 to 7). One byte (8 bits) gives $2^8 = 256$ values. Text, colors, pictures and sound can all be encoded as binary numbers.",
          },
          {
            heading: "Digitizing an analog signal",
            body: "To store a sound digitally, a device **samples** the wave: it measures the amplitude many times per second and records each measurement as a binary number. The more often it samples, and the more bits it uses for each measurement, the closer the digital copy is to the original wave, but the larger the file.",
          },
        ],
        keyFormulas: [
          { name: "Values with n bits", statement: "$2^n$ different values" },
          { name: "Place values", statement: "$\\dots, 32, 16, 8, 4, 2, 1$" },
          { name: "Byte", statement: "$1\\text{ byte} = 8\\text{ bits}$" },
        ],
        workedExample: {
          problem: "Convert the binary number $10110$ to a decimal number.",
          solution: "Write the place values: 16, 8, 4, 2, 1 above the digits 1, 0, 1, 1, 0. Add the places with a 1: $16 + 4 + 2 = 22$. So $10110_2 = 22$.",
        },
      },
      questions: [
        {
          id: "s8-u2-analog-digital-encoding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes a **digital** signal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It can have any value within a range" },
              { id: "b", text: "It uses a limited set of values, usually 0 and 1" },
              { id: "c", text: "It always has a higher frequency than an analog signal" },
              { id: "d", text: "It can only be carried by electricity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Digital signal", statement: "A digital signal has a limited set of values, usually two, written as 1 and 0." },
            ],
            steps: [
              { reasoning: "Digital signals use set values such as on and off, representing 1 and 0.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It uses a limited set of values, usually 0 and 1",
            commonErrors: ["Choosing (a), which describes an analog signal.", "Thinking digital signals can only be electrical; light and radio waves also carry them."],
            examinerNote: "B1 for limited set of values / 0 and 1.",
          },
        },
        {
          id: "s8-u2-analog-digital-encoding-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A computer stores a number as the binary code $1101$.\n\nWhat is this number in decimal?",
          response: { type: "numeric", parts: [{ label: "Decimal value", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Binary place values", statement: "Place values double each step to the left: 1, 2, 4, 8, 16, ..." },
            ],
            steps: [
              { reasoning: "Add the place values where there is a 1: 8, 4 and 1.", working: "8 + 4 + 0 + 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["Reading the code as one thousand one hundred and one.", "Counting the number of 1s to give 3."],
            examinerNote: "M1 for 8 + 4 + 1 (oe). A1 for 13.",
          },
        },
        {
          id: "s8-u2-analog-digital-encoding-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A designer wants to store the color of each pixel in an image. She plans to give every pixel one of 64 different colors.\n\nCalculate the smallest number of bits needed for each pixel.",
          response: { type: "numeric", parts: [{ label: "Bits per pixel", answer: 6, unit: "bits" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Values with n bits", statement: "n bits can represent $2^n$ different values." },
            ],
            steps: [
              { reasoning: "Find n such that $2^n$ is at least 64. Test: $2^5 = 32$ is too few.", working: "2^5 = 32 < 64", marks: 1, markCode: "M" },
              { reasoning: "Test the next value.", working: "2^6 = 64", marks: 1, markCode: "M" },
              { reasoning: "State the number of bits.", working: "n = 6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ bits",
            commonErrors: ["Dividing 64 by 8 to give 8.", "Answering 32 bits because $2^5 = 32$ is the nearest power."],
            examinerNote: "M1 for showing 5 bits is not enough. M1 for 2^6 = 64. A1 for 6. Full marks for the correct answer with sensible working.",
          },
        },
        {
          id: "s8-u2-analog-digital-encoding-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A music app converts a recording of a singer, an analog sound wave, into a digital file.",
          parts: [
            { label: "a", prompt: "Describe **one** difference between an analog signal and a digital signal.", marks: 1 },
            { label: "b", prompt: "The device measures the wave $44{,}000$ times each second, and each measurement uses 16 bits. Calculate the number of bits needed for 1 second of sound.", marks: 2 },
            { label: "c", prompt: "A short code is sent as $10110$. Convert it to a decimal number.", marks: 2 },
            { label: "d", prompt: "How many different values can 4 bits represent? Show your working.", marks: 2 },
            { label: "e", prompt: "Explain how increasing the sampling rate changes the quality and the file size of the recording.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Analog and digital", statement: "Analog signals vary continuously; digital signals use a limited set of values such as 0 and 1." },
              { kind: "formula", name: "Values with n bits", statement: "n bits can represent $2^n$ different values." },
              { kind: "principle", name: "Sampling", statement: "More samples give a closer copy of the wave but need more data." },
            ],
            steps: [
              { part: "a", reasoning: "Analog signals vary continuously over a range; digital signals have only set values (0 or 1).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply samples per second by bits per sample.", working: "44\\,000 \\times 16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "= 704\\,000\\text{ bits}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the place values with a 1: 16, 4 and 2.", working: "16 + 0 + 4 + 2 + 0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "= 22", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Each bit doubles the number of values, so use $2^n$ with $n = 4$.", working: "2^4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "= 16", marks: 1, markCode: "A" },
              { part: "e", reasoning: "More samples per second follow the original wave more closely, so the recording is higher quality.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "But there is more data to store, so the file is larger.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Analog varies continuously, digital uses set values (b) $704\\,000$ bits (c) $22$ (d) $16$ values (e) Higher quality but larger file.",
            commonErrors: ["In (b) adding 44 000 and 16.", "In (d) calculating $4^2 = 16$ by coincidence of method; the rule is $2^4$.", "In (e) saying a larger file means better quality in all cases."],
            examinerNote: "(a) Allow any valid difference. (b) Allow 704 kbit. (d) Allow list of 0000 to 1111 for both marks.",
          },
        },
      ],
    },
    {
      id: "s8-u2-digital-reliability-design",
      title: "Reliability of digital transmission and evaluating designs",
      skill: "Explain why digital signals are more reliable than analog signals and evaluate transmission designs using evidence.",
      lesson: {
        sections: [
          {
            heading: "Noise and signal quality",
            body: "As a signal travels it gets weaker and picks up **noise**, random unwanted changes. An analog signal carries information in its exact shape, so noise changes the information, and amplifying the signal also amplifies the noise. The errors build up with distance.\n\nA digital signal only has to be recognized as 1 or 0. If noise is small the receiver can still tell which it is, and a repeater can **regenerate** a clean copy of the original pulses. So digital signals can be sent long distances and copied with little or no loss of quality.",
          },
          {
            heading: "Error checking",
            body: "If noise is large, a bit can flip from 0 to 1. Systems add extra data to detect this. A **parity bit** is an extra bit added so that the total number of 1s is always even (or always odd). If the receiver counts the wrong number of 1s, it knows an error happened and asks for the data again.\n\nExample with even parity: the data 1011001 has four 1s, so the parity bit is 0. The data 1011101 has five 1s, so the parity bit is 1 to make six.",
          },
          {
            heading: "Evaluating designs",
            body: "Engineers compare ways of sending a signal using **criteria** such as speed (bits per second), range, cost, reliability, and security.\n\n- **Optical fiber** sends pulses of light: very fast, little noise, long range, higher cost to install.\n- **Copper cable** sends electrical pulses: cheaper, but more noise and signal loss over distance.\n- **Wireless** (radio or microwaves): convenient and flexible, but can suffer interference and is easier to intercept.\n\nTransmission time is $t = \\dfrac{\\text{data size}}{\\text{data rate}}$. A good evaluation uses evidence for each criterion, then reaches a justified conclusion.",
          },
        ],
        keyFormulas: [
          { name: "Transmission time", statement: "$t = \\dfrac{\\text{data size (bits)}}{\\text{data rate (bits/s)}}$" },
          { name: "Even parity", statement: "Parity bit makes the total number of 1s even" },
          { name: "Digital advantage", statement: "Signals can be regenerated, so noise does not build up" },
        ],
        workedExample: {
          problem: "A file of $48\\,000\\,000$ bits is sent over a connection with a data rate of $12\\,000\\,000$ bits per second. How long does it take?",
          solution: "Use $t = \\dfrac{\\text{data size}}{\\text{data rate}} = \\dfrac{48\\,000\\,000}{12\\,000\\,000} = 4\\text{ s}$.",
        },
      },
      questions: [
        {
          id: "s8-u2-digital-reliability-design-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why can a digital signal be copied or sent over a long distance with little loss of quality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Digital signals have a larger amplitude than analog signals" },
              { id: "b", text: "Digital signals are not affected by noise at all" },
              { id: "c", text: "Digital signals travel faster than the speed of light" },
              { id: "d", text: "The receiver only has to decide between 1 and 0, so a clean signal can be regenerated" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regeneration", statement: "A digital signal can be recognized as 1 or 0 and rebuilt cleanly, so noise does not accumulate." },
            ],
            steps: [
              { reasoning: "Only two values need to be distinguished, so small noise can be ignored and a clean copy can be made.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The receiver only has to decide between 1 and 0, so a clean signal can be regenerated",
            commonErrors: ["Choosing (a): digital signals can be affected by noise, but small errors can be corrected.", "Choosing (b): no signal travels faster than light."],
            examinerNote: "B1 for recognizing 1 or 0 / regeneration.",
          },
        },
        {
          id: "s8-u2-digital-reliability-design-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A photo file is $60\\,000\\,000$ bits in size. It is sent over a connection with a data rate of $15\\,000\\,000$ bits per second.\n\nCalculate the time to send the photo.",
          response: { type: "numeric", parts: [{ label: "Time", answer: 4, unit: "s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transmission time", statement: "$t = \\dfrac{\\text{data size}}{\\text{data rate}}$" },
            ],
            steps: [
              { reasoning: "Divide the data size by the data rate.", working: "t = \\frac{60\\,000\\,000}{15\\,000\\,000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "t = 4\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\text{ s}$",
            commonErrors: ["Dividing the rate by the size to get 0.25.", "Multiplying the two numbers."],
            examinerNote: "M1 for 60 000 000 / 15 000 000 (oe). A1 for 4 s.",
          },
        },
        {
          id: "s8-u2-digital-reliability-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A system uses **even parity**: a parity bit is added so that the total number of 1s, including the parity bit, is even. The receiver gets the 8-bit message $10110101$ (7 data bits followed by the parity bit).\n\nDetermine whether an error has occurred and explain how you know. State what the receiver should do next.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Even parity", statement: "With even parity the total number of 1s in the message, including the parity bit, must be even." },
            ],
            steps: [
              { reasoning: "Count the 1s in 10110101: 1, 0, 1, 1, 0, 1, 0, 1 gives five 1s.", working: "1+0+1+1+0+1+0+1 = 5", marks: 1, markCode: "M" },
              { reasoning: "Five is odd, so the parity rule is broken.", marks: 1, markCode: "A" },
              { reasoning: "So at least one bit was changed in transmission (an error occurred).", marks: 1, markCode: "R" },
              { reasoning: "The receiver should discard the message and request that the data is sent again.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Yes, there is an error: the message has five 1s, which is odd, but even parity needs an even number. The receiver should ask for the message to be resent.",
            commonErrors: ["Counting the 0s instead of the 1s.", "Saying the receiver can tell exactly which bit is wrong; a single parity bit only detects an error."],
            examinerNote: "M1 for counting five 1s. A1 for odd / not even. R1 for error detected. B1 for request resend.",
          },
        },
        {
          id: "s8-u2-digital-reliability-design-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school must choose how to connect two buildings $800\\text{ m}$ apart. The options are:\n\n| Option | Data rate (Mbit/s) | Relative noise | Cost |\n|---|---|---|---|\n| Copper cable | 100 | Medium | Low |\n| Optical fiber | 1000 | Very low | High |\n| Wireless link | 300 | High | Medium |",
          parts: [
            { label: "a", prompt: "Identify the option with the lowest noise.", marks: 1 },
            { label: "b", prompt: "A $2400$ megabit video is sent over the wireless link. Calculate the time taken.", marks: 2 },
            { label: "c", prompt: "Explain why noise is less of a problem for a digital signal than for an analog signal.", marks: 2 },
            { label: "d", prompt: "Evaluate the three options and recommend one for the school. Use data from the table.", marks: 4 },
            { label: "e", prompt: "State **one** way the school could detect errors in the data sent.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transmission time", statement: "$t = \\dfrac{\\text{data size}}{\\text{data rate}}$" },
              { kind: "principle", name: "Regeneration", statement: "Digital signals only need to be recognized as 1 or 0, so noise can be removed by regenerating the signal." },
              { kind: "skill", name: "Evaluating designs", statement: "Compare options against criteria using evidence, then justify a recommendation." },
            ],
            steps: [
              { part: "a", reasoning: "The table shows optical fiber has very low noise.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide data size by data rate.", working: "t = \\frac{2400}{300}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "t = 8\\text{ s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A digital receiver only has to decide between two values (1 or 0), so small noise does not change the data.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The signal can be regenerated as a clean copy, so noise does not build up, unlike in analog signals.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Fiber: fastest (1000 Mbit/s) and lowest noise, but highest cost.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Copper: cheapest but slowest (100 Mbit/s) with medium noise.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Wireless: moderate speed and cost, but highest noise so less reliable.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A justified recommendation that links to the school's needs, for example fiber for reliability and speed if the budget allows, or copper if cost matters most.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Use a parity bit (or checksum) so the receiver can detect an error and request the data again.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Optical fiber (b) $8\\text{ s}$ (c) A digital signal only needs to be read as 1 or 0 and can be regenerated, so noise does not accumulate (d) Compare speed, noise and cost, and justify a recommendation (e) Parity bit.",
            commonErrors: ["In (b) multiplying 2400 by 300.", "In (d) listing facts without comparing or concluding.", "In (d) recommending wireless while ignoring its high noise."],
            examinerNote: "(d) Accept any recommendation supported by data from the table. Award the final mark only if the recommendation matches the reasoning. (e) Allow checksum or sending data twice.",
          },
        },
      ],
    },
  ],
};
