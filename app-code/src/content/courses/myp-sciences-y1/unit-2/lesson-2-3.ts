import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "myps1-u2-lesson-2-3",
  code: "2-3",
  title: "Ecosystems",
  goal: "I CAN interpret food chains and food webs, predict the effects of changes, and evaluate how human activities affect ecosystems and what can be done about them.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
    "Criterion D: Reflecting on the impacts of science",
    "Key concept: Systems",
    "Related concept: Interaction",
    "Global context: Globalization and sustainability",
  ],
  vocabulary: [
    { term: "Producer", definition: "An organism that makes its own food, usually by photosynthesis, such as a plant or algae." },
    { term: "Consumer", definition: "An organism that gets its energy by eating other organisms." },
    { term: "Decomposer", definition: "An organism, such as a fungus or bacterium, that breaks down dead material and returns nutrients to the soil." },
    { term: "Food web", definition: "A diagram of several linked food chains in an ecosystem." },
    { term: "Interdependence", definition: "The way organisms in an ecosystem rely on each other to survive." },
    { term: "Deforestation", definition: "The removal of large areas of forest." },
  ],
  concepts: [
    {
      id: "myps1-u2-food-chains-webs",
      title: "Food chains and food webs",
      skill: "Identify producers, consumers and decomposers in food chains and webs and predict the effects of changes in a food web.",
      lesson: {
        sections: [
          {
            heading: "Food chains",
            body: "A **food chain** shows how energy passes from one organism to the next. The **arrows** point in the direction of energy transfer, from the organism that is eaten to the organism that eats it.\n\n- A **producer** makes its own food by photosynthesis. Every food chain starts with a producer.\n- A **primary consumer** eats the producer, a **secondary consumer** eats the primary consumer, and so on.\n- **Decomposers** (fungi and bacteria) break down dead organisms and waste, returning nutrients to the soil for producers to use.\n\nExample: grass $\\rightarrow$ rabbit $\\rightarrow$ fox. Grass is the producer, the rabbit is the primary consumer and the fox is the secondary consumer.",
          },
          {
            heading: "Food webs and changes",
            body: "Most organisms eat more than one thing and are eaten by more than one thing, so food chains join into a **food web**. An ecosystem is a **system**: a change to one population affects others.\n\nTo predict the effect of a change, follow the arrows.\n\n- If a **prey** population falls, its predators have less food and may decrease, or eat more of another food source.\n- If a **predator** population falls, its prey are eaten less and may increase.\n- If a **consumer** population falls, the food it ate may increase.",
          },
        ],
        keyFormulas: [
          { name: "Food chain arrow", statement: "Points from the organism that is eaten to the organism that eats it (direction of energy transfer)" },
          { name: "Start of a food chain", statement: "A producer, which makes its own food by photosynthesis" },
        ],
        workedExample: {
          problem: "In a food web, owls and foxes both eat mice. Disease kills many foxes. Predict what happens to the number of mice and owls.",
          solution: "Fewer foxes means fewer mice are eaten, so the mouse population increases. More mice means more food for owls, so the owl population may increase too.",
        },
      },
      questions: [
        {
          id: "myps1-u2-food-chains-webs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do the arrows in a food chain show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The direction in which energy passes, from the organism that is eaten to the organism that eats it" },
              { id: "b", text: "The direction in which a predator chases its prey" },
              { id: "c", text: "Which organism in the chain is the largest" },
              { id: "d", text: "How long each organism takes to digest its food" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Food chain arrows", statement: "Arrows show the transfer of energy, pointing from the food to the feeder." },
            ],
            steps: [
              { reasoning: "The arrow points to the organism that gains the energy by eating the other organism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The direction in which energy passes, from the organism that is eaten to the organism that eats it",
            commonErrors: ["Thinking the arrow means 'eats', so drawing it from the predator to its prey."],
            examinerNote: "B1 for energy transfer from eaten to eater.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A food chain is:\n\nlettuce $\\rightarrow$ snail $\\rightarrow$ thrush $\\rightarrow$ hawk\n\nName (i) the producer and (ii) the secondary consumer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producers and consumers", statement: "The producer makes its own food; the primary consumer eats the producer; the secondary consumer eats the primary consumer." },
            ],
            steps: [
              { reasoning: "The producer is the first organism in the chain: lettuce, which photosynthesises.", marks: 1, markCode: "B" },
              { reasoning: "The snail is the primary consumer (it eats the lettuce), so the thrush, which eats the snail, is the secondary consumer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(i) Lettuce (ii) Thrush",
            commonErrors: ["Naming the snail as the secondary consumer; it is the first consumer, so it is the primary consumer.", "Naming the hawk, which is the tertiary consumer."],
            examinerNote: "B1 lettuce. B1 thrush. Reject snail and hawk for (ii).",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a woodland food web, grass is eaten by rabbits and mice. Foxes eat rabbits and mice. Owls eat mice only.\n\nA disease kills most of the rabbits.\n\nPredict the effect on the number of (i) grass plants, (ii) mice and (iii) owls. Give a reason for each prediction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food web interactions", statement: "A change in one population affects the populations that eat it and the populations it eats." },
            ],
            steps: [
              { reasoning: "Grass increases (at least at first) because fewer rabbits are eating it.", marks: 1, markCode: "R" },
              { reasoning: "Mice decrease because foxes, with fewer rabbits to eat, eat more mice.", marks: 1, markCode: "R" },
              { reasoning: "Owls decrease because there are fewer mice for them to eat (they eat mice only).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(i) Grass increases: fewer rabbits eating it (ii) Mice decrease: foxes eat more mice (iii) Owls decrease: less food (mice)",
            commonErrors: ["Saying mice increase because there are fewer rabbits competing for the grass, ignoring the foxes.", "Giving a prediction without a reason."],
            examinerNote: "Each mark needs the prediction and the reason. Allow 'mice increase' for the second mark only if reasoned from less competition for grass and the answer to (iii) is consistent (ecf).",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In a pond, algae are eaten by water fleas and by tadpoles. Small fish eat both water fleas and tadpoles. A heron eats the small fish.",
          parts: [
            { label: "a", prompt: "Name the producer in this food web.", marks: 1 },
            { label: "b", prompt: "Write a food chain with four organisms from this web.", marks: 1 },
            { label: "c", prompt: "Explain why every food chain must begin with a producer.", marks: 2 },
            { label: "d", prompt: "Explain the role of decomposers in the pond.", marks: 2 },
            { label: "e", prompt: "A chemical washes into the pond and kills most of the water fleas. Predict **three** effects on the pond ecosystem, giving a reason for each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producer", statement: "A producer makes its own food by photosynthesis, using light energy." },
              { kind: "definition", name: "Decomposer", statement: "Decomposers break down dead organisms and waste and return nutrients to the environment." },
              { kind: "principle", name: "Food web interactions", statement: "A change in one population affects the populations that eat it and the populations it eats." },
            ],
            steps: [
              { part: "a", reasoning: "Algae make their own food by photosynthesis.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A correct chain with arrows in the right direction, for example algae $\\rightarrow$ water fleas $\\rightarrow$ small fish $\\rightarrow$ heron.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Producers capture light energy and make food by photosynthesis, so they bring energy into the food chain.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "All consumers depend on producers, directly or indirectly, for their energy.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Decomposers break down dead plants, animals and waste.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "This returns nutrients to the water, which algae (producers) can use to grow.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Algae increase because fewer water fleas eat them.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Small fish have less food, so they eat more tadpoles and the number of tadpoles falls, or the number of small fish falls.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Herons decrease because there are fewer small fish to eat.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Algae (b) Algae $\\rightarrow$ water fleas $\\rightarrow$ small fish $\\rightarrow$ heron (c) Producers bring light energy into the chain by photosynthesis; consumers depend on them (d) Break down dead material and waste, returning nutrients for algae (e) Algae increase; small fish eat more tadpoles or decrease; herons decrease",
            commonErrors: ["Drawing arrows from the predator to the prey.", "In (d) saying decomposers 'eat' dead things without returning nutrients.", "In (e) predicting only the water fleas, which is stated in the question."],
            examinerNote: "(b) Allow any valid four-organism chain. (e) Allow any three valid linked predictions with reasons, ecf if consistent. Reject 'water fleas decrease' as it is given.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a food chain, what do the arrows show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Which organism is bigger" },
              { id: "b", text: "The direction of energy transfer, from the organism that is eaten to the organism that eats it" },
              { id: "c", text: "The order in which organisms were born" },
              { id: "d", text: "Which organism moves faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Food chain arrows", statement: "Arrows show the transfer of energy, pointing from the food to the feeder." },
            ],
            steps: [
              { reasoning: "The arrow points from the organism that is eaten to the organism that eats it, showing energy transfer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The direction of energy transfer, from the organism that is eaten to the organism that eats it",
            commonErrors: ["Thinking arrows point from predator to prey."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A food chain is: grass $\\rightarrow$ caterpillar $\\rightarrow$ robin $\\rightarrow$ cat.\n\nWhich organism is the producer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Caterpillar" },
              { id: "b", text: "Robin" },
              { id: "c", text: "Cat" },
              { id: "d", text: "Grass" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producer", statement: "A producer makes its own food by photosynthesis, using light energy." },
            ],
            steps: [
              { reasoning: "Grass makes its own food by photosynthesis, so it is the producer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Grass",
            commonErrors: ["Choosing the caterpillar, which is a consumer."],
            examinerNote: "B1 for grass.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the food chain grass $\\rightarrow$ rabbit $\\rightarrow$ fox, what is the rabbit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producer" },
              { id: "b", text: "Primary consumer" },
              { id: "c", text: "Secondary consumer" },
              { id: "d", text: "Decomposer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Consumers", statement: "The primary consumer eats the producer; the secondary consumer eats the primary consumer." },
            ],
            steps: [
              { reasoning: "The rabbit eats grass (the producer), so it is the primary consumer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Primary consumer",
            commonErrors: ["Choosing secondary consumer, which is the fox."],
            examinerNote: "B1 for primary consumer.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of decomposers in an ecosystem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decomposer", statement: "Decomposers break down dead organisms and waste and return nutrients to the environment." },
            ],
            steps: [
              { reasoning: "Decomposers break down dead plants, animals and waste.", marks: 1, markCode: "B" },
              { reasoning: "This returns nutrients to the soil or water, which producers can use to grow.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Decomposers break down dead organisms and waste, returning nutrients to the environment for producers to use.",
            commonErrors: ["Saying decomposers 'eat' living things.", "Saying they produce food by photosynthesis."],
            examinerNote: "B1 for breaking down dead material. R1 for returning nutrients oe.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a food web, foxes eat rabbits and mice. If all the foxes are removed, what is the most likely immediate effect on the rabbit population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It decreases because rabbits lose their food" },
              { id: "b", text: "It increases because fewer rabbits are eaten" },
              { id: "c", text: "It stays the same" },
              { id: "d", text: "It decreases because there is no food web" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food web interactions", statement: "A change in one population affects the populations that eat it and the populations it eats." },
            ],
            steps: [
              { reasoning: "With fewer predators, more rabbits survive, so the rabbit population increases (at least initially).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It increases because fewer rabbits are eaten",
            commonErrors: ["Thinking predators 'help' prey by keeping numbers low in the short term only; the immediate effect is an increase."],
            examinerNote: "B1 for increase. Accept 'more rabbits survive'.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is a food web a better model of an ecosystem than a single food chain?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food webs", statement: "In a food web, organisms eat and are eaten by several different organisms, showing the many feeding relationships." },
            ],
            steps: [
              { reasoning: "A food web shows that most organisms eat several different foods and are eaten by several predators.", marks: 1, markCode: "B" },
              { reasoning: "This shows what happens if one organism is lost: others can switch to different food, which a single chain cannot show.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "A food web shows the many feeding relationships; if one food source is lost, organisms can feed on others, which a single chain cannot show.",
            commonErrors: ["Saying a web is 'bigger' or 'more detailed' without explaining the multiple feeding links."],
            examinerNote: "B1 for multiple feeding relationships. R1 for resilience / effect of losing one organism oe.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A food chain is: algae $\\rightarrow$ water flea $\\rightarrow$ small fish $\\rightarrow$ heron.\n\nHow many organisms are in this food chain?",
          response: { type: "numeric", parts: [{ label: "Number of organisms", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food chain", statement: "A food chain is a sequence of organisms linked by feeding relationships." },
            ],
            steps: [
              { reasoning: "Count the organisms separated by arrows.", working: "algae, water flea, small fish, heron = 4", marks: 1, markCode: "M" },
              { reasoning: "State the count.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ organisms",
            commonErrors: ["Counting the arrows (3) instead of the organisms."],
            examinerNote: "M1 for counting the four organisms. A1 for 4.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A food chain has 5 organisms.\n\nHow many arrows are there in the food chain?",
          response: { type: "numeric", parts: [{ label: "Number of arrows", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food chain", statement: "Each arrow links one organism to the next, so a chain with $n$ organisms has $n-1$ arrows." },
            ],
            steps: [
              { reasoning: "Each arrow connects two neighbouring organisms, so the number of arrows is one fewer than the number of organisms.", working: "5-1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ arrows",
            commonErrors: ["Answering 5 by counting organisms instead of links."],
            examinerNote: "M1 for 5-1. A1 for 4.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A food chain is: grass $\\rightarrow$ grasshopper $\\rightarrow$ frog $\\rightarrow$ snake $\\rightarrow$ hawk $\\rightarrow$ fox.\n\nCalculate (i) the number of producers, (ii) the number of consumers, and (iii) the number of arrows.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of producers", answer: 1 },
              { label: "Number of consumers", answer: 5 },
              { label: "Number of arrows", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producer and consumers", statement: "The producer makes its own food; all the other organisms in the chain are consumers." },
            ],
            steps: [
              { reasoning: "Only grass makes its own food, so there is 1 producer.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "The other five organisms all eat other organisms, so there are 5 consumers.", working: "6-1=5", marks: 1, markCode: "M" },
              { reasoning: "Each arrow links two organisms: 6 organisms give 5 arrows.", working: "6-1=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$, $5$, $5$",
            commonErrors: ["Counting grass as a consumer too.", "Counting arrows as 6."],
            examinerNote: "M1 for each correct count. A1 for 5 arrows.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A food web contains two food chains:\n\nChain 1: algae $\\rightarrow$ water flea $\\rightarrow$ fish $\\rightarrow$ heron\nChain 2: algae $\\rightarrow$ tadpole $\\rightarrow$ fish $\\rightarrow$ heron",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of arrows in chain 1", answer: 3 },
              { label: "Number of arrows in chain 2", answer: 3 },
              { label: "Total number of arrows in both chains", answer: 6 },
              { label: "Number of organisms that appear in both chains", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food chains", statement: "Each chain with $n$ organisms has $n-1$ arrows; shared organisms appear in more than one chain." },
            ],
            steps: [
              { reasoning: "Chain 1 has 4 organisms, so 3 arrows.", working: "4-1=3", marks: 1, markCode: "M" },
              { reasoning: "Chain 2 has 4 organisms, so 3 arrows.", working: "4-1=3", marks: 1, markCode: "M" },
              { reasoning: "Add the arrows from both chains.", working: "3+3=6", marks: 1, markCode: "M" },
              { reasoning: "Algae, fish and heron appear in both chains.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$, $3$, $6$, $3$",
            commonErrors: ["Counting 4 arrows per chain.", "Missing that algae, fish and heron are shared."],
            examinerNote: "M1 for each arrow count. M1 for the total. A1 for 3 shared organisms.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student is comparing a single food chain with a food web for the same pond ecosystem.",
          parts: [
            { label: "a", prompt: "State **two** differences between a food chain and a food web.", marks: 2 },
            { label: "b", prompt: "Explain why a food web gives a more realistic picture of the ecosystem.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food webs", statement: "A food web shows many feeding relationships; most organisms eat and are eaten by several different organisms." },
            ],
            steps: [
              { part: "a", reasoning: "A food chain is a single straight line of feeding relationships; a food web shows many linked chains.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "In a chain each organism has only one food source and one predator; in a web each has several.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "In a real ecosystem most organisms eat several foods and are eaten by several predators.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A web shows what happens when one organism is lost — others can switch food — so it predicts effects more accurately.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Chain: single line, one food source/predator; web: many linked chains, several foods and predators (b) More realistic because real organisms have multiple feeding relationships and can switch food if one is lost.",
            commonErrors: ["In (a) giving differences that are not about feeding relationships."],
            examinerNote: "(a) B1 for each distinct difference. (b) Allow 'shows the effect of losing one species' oe.",
          },
        },
        {
          id: "myps1-u2-food-chains-webs-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a woodland, oak trees are eaten by caterpillars and by squirrels. Blue tits eat caterpillars. Foxes eat squirrels and blue tits. Owls eat blue tits.",
          parts: [
            { label: "a", prompt: "Name the producer in this food web.", marks: 1 },
            { label: "b", prompt: "Write two different food chains, each with four organisms, from this web.", marks: 2 },
            { label: "c", prompt: "A disease kills most of the caterpillars. Predict the effect on the number of (i) oak trees and (ii) blue tits, giving a reason for each.", marks: 2 },
            { label: "d", prompt: "Explain why the number of foxes might not fall as much as the number of blue tits.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producer", statement: "A producer makes its own food by photosynthesis, using light energy." },
              { kind: "principle", name: "Food web interactions", statement: "A change in one population affects the populations that eat it and the populations it eats." },
            ],
            steps: [
              { part: "a", reasoning: "Oak trees make their own food by photosynthesis.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Any two valid four-organism chains with correct arrow direction, for example oak $\\rightarrow$ caterpillar $\\rightarrow$ blue tit $\\rightarrow$ fox and oak $\\rightarrow$ caterpillar $\\rightarrow$ blue tit $\\rightarrow$ owl.", marks: 2, markCode: "B" },
              { part: "c", reasoning: "(i) Oak trees increase because fewer caterpillars are eating them.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "(ii) Blue tits decrease because they have less food (fewer caterpillars).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Foxes also eat squirrels, so they have another food source when blue tits are fewer.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A food web gives organisms alternative foods, so one loss does not remove all their food.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Therefore the fox population can be supported by squirrels even as blue tit numbers fall.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Oak trees (b) e.g. oak $\\rightarrow$ caterpillar $\\rightarrow$ blue tit $\\rightarrow$ fox; oak $\\rightarrow$ caterpillar $\\rightarrow$ blue tit $\\rightarrow$ owl (c) (i) Oaks increase — fewer caterpillars eat them (ii) Blue tits decrease — less food (d) Foxes also eat squirrels, so they have an alternative food source.",
            commonErrors: ["In (b) drawing arrows backwards or giving chains with fewer than four organisms.", "In (c) predicting oak trees decrease.", "In (d) ignoring that foxes eat squirrels too."],
            examinerNote: "(b) Award 1 mark per valid four-organism chain with correct arrow direction, e.g. oak-caterpillar-blue tit-fox or oak-caterpillar-blue tit-owl.",
          },
        },
      ],
    },
    {
      id: "myps1-u2-human-impact",
      title: "Habitats, interdependence and human impact",
      skill: "Explain interdependence in habitats and evaluate how human activities such as deforestation and plastic pollution affect ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Habitats and interdependence",
            body: "A **habitat** is the place where an organism lives. A **community** is all the living things in a habitat, and an **ecosystem** is the community together with the non-living parts such as water, light and soil.\n\nOrganisms are **interdependent**: they rely on each other for food, shelter and reproduction. For example, bees feed on nectar from flowers, and in doing so they carry pollen between flowers, which helps the plants to reproduce.",
          },
          {
            heading: "Human impact",
            body: "Human activities can damage ecosystems.\n\n- **Deforestation** removes trees. Animals lose their habitat and food, so some move away or die, and **biodiversity** (the number of different species) falls. Soil is also washed away without tree roots.\n- **Plastic pollution** harms animals that become tangled in it or eat it, and plastic breaks down very slowly, so it builds up in oceans and soils.\n\nSolutions include laws and charges, recycling, replanting forests and clean-up projects. To **evaluate** a solution, give its advantages and its limitations, and decide how effective it is. Many problems cross borders, so cooperation between countries is often needed.",
          },
        ],
        keyFormulas: [
          { name: "Habitat", statement: "The place where an organism lives" },
          { name: "Percentage change", statement: "$\\dfrac{\\text{change}}{\\text{original value}}\\times100$" },
          { name: "Evaluating a solution", statement: "Advantages, limitations, then a judgement" },
        ],
        workedExample: {
          problem: "The number of plastic bags found on a beach falls from 200 to 150 after a charge is introduced. Calculate the percentage decrease.",
          solution: "Decrease $=200-150=50$. Percentage decrease $=\\dfrac{50}{200}\\times100=25\\%$.",
        },
      },
      questions: [
        {
          id: "myps1-u2-human-impact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a habitat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All the living things in an area" },
              { id: "b", text: "The place where an organism lives" },
              { id: "c", text: "The food that an organism eats" },
              { id: "d", text: "The job an organism does in a food chain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Habitat", statement: "A habitat is the place where an organism lives." },
            ],
            steps: [
              { reasoning: "A habitat is a place, such as a pond or woodland, where an organism lives.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The place where an organism lives",
            commonErrors: ["Choosing (a), which describes a community."],
            examinerNote: "B1 for the place where an organism lives.",
          },
        },
        {
          id: "myps1-u2-human-impact-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Bees and flowering plants are interdependent.\n\nDescribe how each organism depends on the other.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interdependence", statement: "Interdependence is when organisms rely on each other for food, shelter or reproduction." },
            ],
            steps: [
              { reasoning: "Bees depend on flowers for food (nectar and pollen).", marks: 1, markCode: "B" },
              { reasoning: "Flowering plants depend on bees to carry pollen between flowers (pollination) so they can reproduce.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Bees get food (nectar) from the flowers; the plants are pollinated by the bees so they can reproduce.",
            commonErrors: ["Saying only that bees live on flowers.", "Describing one direction of the relationship only."],
            examinerNote: "B1 for bees' food from the plant. B1 for pollination by bees. Both directions are needed for 2 marks.",
          },
        },
        {
          id: "myps1-u2-human-impact-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Large areas of rainforest are cleared for farming.\n\nExplain how this deforestation can reduce the number of different species in the area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Habitat loss", statement: "Removing a habitat removes the shelter and food that species depend on." },
            ],
            steps: [
              { reasoning: "Cutting down trees destroys the habitat of the animals and plants that live there.", marks: 1, markCode: "B" },
              { reasoning: "Animals lose their shelter and their food, including the plants and the animals that depend on those plants.", marks: 1, markCode: "B" },
              { reasoning: "Species that cannot move to another habitat die out, so the number of species falls.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Trees are removed so habitats are destroyed; animals lose food and shelter; those that cannot move away die, reducing the number of species.",
            commonErrors: ["Only saying that trees are cut down without explaining the effect on other organisms.", "Saying animals 'choose' to leave."],
            examinerNote: "B1 habitat destroyed. B1 loss of food or shelter (interdependence). B1 species die out / biodiversity falls. Allow soil erosion as an extra valid point only in place of the food or shelter mark.",
          },
        },
        {
          id: "myps1-u2-human-impact-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A coastal town surveyed a 100 m stretch of its beach. In 2022 the survey found 480 pieces of plastic litter. In 2025, after the town introduced a charge for plastic bags, the survey found 300 pieces. Sea turtles sometimes mistake floating plastic bags for jellyfish and eat them.",
          parts: [
            { label: "a", prompt: "State **one** way in which plastic litter can harm sea animals.", marks: 1 },
            { label: "b", prompt: "Calculate the percentage decrease in plastic litter between 2022 and 2025.", marks: 2 },
            { label: "c", prompt: "Two solutions are suggested: **A** a ban on single-use plastic bags, and **B** volunteers who clean the beach each month. Evaluate the two solutions.", marks: 4 },
            { label: "d", prompt: "Explain why action by one town alone may not solve the problem of plastic in the oceans.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "$\\text{percentage decrease}=\\dfrac{\\text{decrease}}{\\text{original value}}\\times100$" },
              { kind: "principle", name: "Evaluation", statement: "To evaluate, give advantages and limitations of each option, then reach a judgement." },
            ],
            steps: [
              { part: "a", reasoning: "For example: animals eat it and it blocks their gut, they become tangled in it, or it breaks into small pieces that enter the food chain.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find the decrease and divide by the original value.", working: "\\frac{480-300}{480}=\\frac{180}{480}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply by 100.", working: "\\frac{180}{480}\\times100=37.5\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Advantage of A: stops plastic being made and used in the first place, so it tackles the cause.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Limitation of A: it only covers bags, not other plastics such as bottles, and needs laws that people follow.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Advantage of B or limitation of B: removes existing litter quickly, but does not stop new litter arriving, and relies on volunteers.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A justified judgement, for example A is more effective in the long term, ideally combined with B.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Ocean currents carry plastic between places and countries, so litter from elsewhere washes onto the beach.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Other countries and towns would also need to reduce plastic use, so international cooperation is needed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Eaten, tangled or blocks the gut (b) $37.5\\%$ (c) A tackles the cause but covers few items; B removes litter but does not stop new litter; judgement that A is better long term, best combined (d) Plastic travels in ocean currents and many countries must cooperate",
            commonErrors: ["In (b) dividing by 300 instead of 480, giving 60%.", "In (c) describing the solutions without evaluating them (no limitation or judgement).", "In (d) blaming only the town's residents."],
            examinerNote: "(b) M1 for 180 / 480 (oe). A1 for 37.5. Allow 38 or 37.5 only if the working is shown. (c) Allow any valid advantage or limitation; the final mark needs a judgement supported by a reason. (d) Allow 'plastic comes from other countries / rivers'.",
          },
        },
        {
          id: "myps1-u2-human-impact-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a **habitat**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All the living things in a place" },
              { id: "b", text: "The place where an organism lives" },
              { id: "c", text: "The community plus the non-living parts" },
              { id: "d", text: "The number of different species" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Habitat", statement: "A habitat is the place where an organism lives." },
            ],
            steps: [
              { reasoning: "A habitat is the place where an organism lives; a community is all the living things there, and an ecosystem includes the non-living parts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The place where an organism lives",
            commonErrors: ["Confusing habitat with community or ecosystem."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u2-human-impact-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does **biodiversity** mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total number of animals in an area" },
              { id: "b", text: "The number of different species in an area" },
              { id: "c", text: "The size of the habitat" },
              { id: "d", text: "The amount of plastic in the ocean" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodiversity", statement: "Biodiversity is the number of different species in an area." },
            ],
            steps: [
              { reasoning: "Biodiversity counts the variety of species, not the total number of individuals.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The number of different species in an area",
            commonErrors: ["Confusing biodiversity with population size."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u2-human-impact-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Bees and flowering plants are interdependent.\n\nDescribe how each organism depends on the other.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interdependence", statement: "Interdependence is when organisms rely on each other for food, shelter or reproduction." },
            ],
            steps: [
              { reasoning: "The bee depends on the flower for food (nectar and pollen).", marks: 1, markCode: "B" },
              { reasoning: "The flower depends on the bee for pollination, which helps it to reproduce.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The bee gets nectar/pollen (food) from the flower; the flower gets pollinated by the bee, which helps it reproduce.",
            commonErrors: ["Describing only one direction of the dependence."],
            examinerNote: "B1 for each direction. Accept 'bee spreads pollen' oe.",
          },
        },
        {
          id: "myps1-u2-human-impact-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give **two** ways in which plastic litter can harm sea animals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plastic pollution", statement: "Plastic can be eaten or tangled around animals, and it breaks down very slowly so it builds up in the environment." },
            ],
            steps: [
              { reasoning: "Any one valid harm: animals eat it and it blocks their gut, they become tangled in it, or small pieces enter the food chain.", marks: 1, markCode: "B" },
              { reasoning: "A second different valid harm, or the point that plastic breaks down very slowly so the problem builds up.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Any two of: eaten and blocks the gut; tangled in it; small pieces enter the food chain; it breaks down very slowly.",
            commonErrors: ["Repeating the same point twice.", "Saying plastic 'poisons' the water chemically without evidence."],
            examinerNote: "B1 for each distinct valid point.",
          },
        },
        {
          id: "myps1-u2-human-impact-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Large areas of rainforest are cleared for farming. What is the most direct effect on biodiversity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biodiversity increases because there is more farmland" },
              { id: "b", text: "Biodiversity falls because habitats are destroyed and species lose food and shelter" },
              { id: "c", text: "Biodiversity stays the same" },
              { id: "d", text: "Only the trees are affected" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Habitat loss", statement: "Removing a habitat removes the shelter and food that species depend on, so biodiversity falls." },
            ],
            steps: [
              { reasoning: "Deforestation destroys habitats, so animals lose food and shelter and many species die out or leave, reducing biodiversity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Biodiversity falls because habitats are destroyed and species lose food and shelter",
            commonErrors: ["Thinking more open land means more species."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u2-human-impact-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A town wants to reduce plastic pollution in the long term. Which solution tackles the problem at its source?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation", statement: "The most effective solutions tackle the cause of a problem, not just its symptoms." },
            ],
            steps: [
              { reasoning: "Reducing plastic production and use (for example banning or charging for single-use plastics) tackles the cause, so less plastic enters the environment.", marks: 1, markCode: "B" },
              { reasoning: "Clean-up alone only removes existing litter and does not stop new plastic arriving, so it treats the symptom.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Reducing plastic production and use at the source (bans, charges, alternatives) is most effective long term; beach clean-ups only treat the symptom.",
            commonErrors: ["Choosing beach cleaning as the main long-term solution."],
            examinerNote: "B1 for reducing plastic use/production. R1 for clean-up being a symptom treatment oe.",
          },
        },
        {
          id: "myps1-u2-human-impact-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A beach survey found 200 pieces of plastic litter in 2023 and 150 pieces in 2024.\n\nCalculate the percentage decrease in litter.",
          response: { type: "numeric", parts: [{ label: "Percentage decrease", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "$\\text{percentage decrease}=\\dfrac{\\text{decrease}}{\\text{original value}}\\times100$" },
            ],
            steps: [
              { reasoning: "Find the decrease, divide by the original value and multiply by 100.", working: "\\frac{200-150}{200}\\times100=\\frac{50}{200}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Dividing by 150 instead of 200.", "Forgetting to multiply by 100."],
            examinerNote: "M1 for 50/200 x 100. A1 for 25%.",
          },
        },
        {
          id: "myps1-u2-human-impact-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A survey found 400 pieces of litter in 2021 and 250 pieces in 2024.\n\nCalculate (i) the decrease in litter and (ii) the percentage decrease.",
          response: {
            type: "numeric",
            parts: [
              { label: "Decrease in litter", answer: 150, unit: "pieces" },
              { label: "Percentage decrease", answer: 37.5, tolerance: 0.1, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "$\\text{percentage decrease}=\\dfrac{\\text{decrease}}{\\text{original value}}\\times100$" },
            ],
            steps: [
              { reasoning: "Subtract the new value from the original.", working: "400-250=150", marks: 1, markCode: "M" },
              { reasoning: "Divide the decrease by the original value and multiply by 100.", working: "\\frac{150}{400}\\times100=37.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150$ pieces, $37.5\\%$",
            commonErrors: ["Dividing by 250 instead of 400.", "Substituting the decrease for the original value."],
            examinerNote: "M1 for 400-250. A1 for 37.5%.",
          },
        },
        {
          id: "myps1-u2-human-impact-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A survey of plastic litter on a beach found 500 pieces in 2020 and 300 pieces in 2023.\n\nCalculate (i) the decrease in litter, (ii) the percentage decrease, and (iii) the number of pieces found in 2023 as a percentage of the 2020 value.",
          response: {
            type: "numeric",
            parts: [
              { label: "Decrease in litter", answer: 200, unit: "pieces" },
              { label: "Percentage decrease", answer: 40, unit: "%" },
              { label: "2023 value as a percentage of 2020", answer: 60, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "$\\text{percentage decrease}=\\dfrac{\\text{decrease}}{\\text{original value}}\\times100$" },
            ],
            steps: [
              { reasoning: "Subtract the new value from the original.", working: "500-300=200", marks: 1, markCode: "M" },
              { reasoning: "Divide the decrease by the original value and multiply by 100.", working: "\\frac{200}{500}\\times100=40\\%", marks: 1, markCode: "M" },
              { reasoning: "Divide the 2023 value by the 2020 value and multiply by 100.", working: "\\frac{300}{500}\\times100=60\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200$ pieces, $40\\%$, $60\\%$",
            commonErrors: ["Dividing by 300 instead of 500.", "Giving 40 for part (iii) instead of 60."],
            examinerNote: "M1 for each correct method. A1 for 60%.",
          },
        },
        {
          id: "myps1-u2-human-impact-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A town recorded plastic litter on its beach each year: 600 pieces in 2020, 480 pieces in 2021, 420 pieces in 2022 and 360 pieces in 2023.\n\nCalculate (i) the total decrease from 2020 to 2023, (ii) the percentage decrease over the whole period, (iii) the average decrease per year, and (iv) the percentage of the 2020 litter still present in 2023.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total decrease from 2020 to 2023", answer: 240, unit: "pieces" },
              { label: "Percentage decrease over the whole period", answer: 40, unit: "%" },
              { label: "Average decrease per year", answer: 80, unit: "pieces/year" },
              { label: "Percentage of 2020 litter still present in 2023", answer: 60, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "$\\text{percentage decrease}=\\dfrac{\\text{decrease}}{\\text{original value}}\\times100$" },
            ],
            steps: [
              { reasoning: "Subtract the 2023 value from the 2020 value.", working: "600-360=240", marks: 1, markCode: "M" },
              { reasoning: "Divide the decrease by the 2020 value and multiply by 100.", working: "\\frac{240}{600}\\times100=40\\%", marks: 1, markCode: "M" },
              { reasoning: "Divide the total decrease by the number of years (3).", working: "\\frac{240}{3}=80\\text{ pieces per year}", marks: 1, markCode: "M" },
              { reasoning: "Divide the 2023 value by the 2020 value and multiply by 100.", working: "\\frac{360}{600}\\times100=60\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$240$ pieces, $40\\%$, $80$ pieces per year, $60\\%$",
            commonErrors: ["Dividing the total decrease by 4 years instead of 3.", "Using 360 as the original value for percentages."],
            examinerNote: "M1 for each correct method. A1 for 60%. Allow ecf for parts that use earlier answers.",
          },
        },
        {
          id: "myps1-u2-human-impact-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "A town is deciding between two ways to reduce plastic pollution: **A** a charge on single-use plastic bags, and **B** monthly beach clean-ups by volunteers.",
          parts: [
            { label: "a", prompt: "Give **one** advantage of solution A.", marks: 1 },
            { label: "b", prompt: "Give **one** limitation of solution A.", marks: 1 },
            { label: "c", prompt: "Give **one** advantage and **one** limitation of solution B.", marks: 2 },
            { label: "d", prompt: "State which solution you think is more effective in the long term and justify your choice.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation", statement: "To evaluate, give advantages and limitations of each option, then reach a justified judgement." },
            ],
            steps: [
              { part: "a", reasoning: "Any valid advantage, for example it reduces the amount of plastic produced and used, tackling the cause of pollution.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Any valid limitation, for example it only covers bags, not bottles or other plastics, and relies on people following the charge.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Advantage of B: removes litter that is already there, quickly improving the beach.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Limitation of B: does not stop new litter arriving, and depends on volunteers continuing to take part.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A clear choice, for example A is more effective because it reduces plastic at the source.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A justification linked to the evidence, for example B only removes existing litter while A prevents new litter; ideally both together.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Reduces plastic use at source (b) Covers only bags / needs enforcement (c) Advantage: removes existing litter; limitation: does not stop new litter / relies on volunteers (d) A is better long term because it tackles the cause; best combined with B.",
            commonErrors: ["Repeating the same point as both advantage and limitation.", "Describing the solutions without evaluating them.", "Choosing a solution without giving a reason."],
            examinerNote: "(d) Accept either choice if justified; B alone is unlikely to be the best long-term answer without a strong reason.",
          },
        },
        {
          id: "myps1-u2-human-impact-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A company plans to clear a large area of forest to plant oil palms. The forest is home to many species of birds, insects and mammals. Local people use the forest for food, medicine and fuel.",
          parts: [
            { label: "a", prompt: "Define the term biodiversity.", marks: 1 },
            { label: "b", prompt: "Explain how clearing the forest could reduce biodiversity.", marks: 2 },
            { label: "c", prompt: "Explain how clearing the forest could affect the local people who use it.", marks: 2 },
            { label: "d", prompt: "The company claims planting oil palms will 'replace' the forest. Evaluate this claim.", marks: 2 },
            { label: "e", prompt: "Suggest **two** ways the company could reduce the environmental damage of its plan.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodiversity", statement: "Biodiversity is the number of different species in an area." },
              { kind: "principle", name: "Habitat loss", statement: "Removing a habitat removes the shelter and food that species depend on." },
              { kind: "principle", name: "Evaluation", statement: "To evaluate, weigh advantages against disadvantages using evidence, then reach a justified decision." },
            ],
            steps: [
              { part: "a", reasoning: "The number of different species in an area.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Clearing removes the habitat, so animals lose food and shelter.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Species that cannot move away die out, so the number of different species falls.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Local people lose sources of food, medicine and fuel from the forest.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "They may have to travel further or pay more for these resources.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Oil palms are a single species, so they cannot replace the variety of plants and animals in the forest.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Biodiversity would still be much lower, and the new habitat supports far fewer species.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Any two sensible measures, for example planting only on already-cleared land, leaving buffer strips of forest, replanting native trees, or protecting areas for wildlife.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) Number of different species (b) Habitat destroyed → species lose food/shelter → biodiversity falls (c) People lose food, medicine, fuel (d) Not a true replacement: one species vs many; biodiversity still falls (e) Any two: use cleared land, buffer strips, replant natives, protect wildlife areas.",
            commonErrors: ["In (d) accepting the claim without evaluation.", "In (e) suggesting measures unrelated to reducing damage."],
            examinerNote: "(e) B1 for each valid measure. (d) Allow 'partly replaces' only if biodiversity loss is acknowledged.",
          },
        },
      ],
    },
  ],
};
