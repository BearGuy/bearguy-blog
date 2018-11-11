---
path: "/blog/dsas-and-bitcoin"
date: "2018-07-17T12:30:30.000Z"
title: "Domain Specific Architectures, Bitcoin, and the Future of Computing"
slug: "/blog/dsas-and-bitcoin"
image: "https://www.massuniting.org/wp-content/uploads/2017/11/mining1-1000x600.jpg"
medium:
- Cryptocurrency
- Blockchain
- Decentralized
- Computing
- Futurist
steem:
- crypto
- blockchain
- decentralized
- development
- programming
---

## Thesis
In order for the future of computing to meet demands, modern computer systems (including blockchains) will need to trend towards Bitcoin's design and more specifically to implementing Domaiun Specific Architecture and Domain Specific Languages.

This is predominantly an argument for those who are against utilizing custom hardware to run decentralized networks.

### Introduction
*This blog post is inspired by the John Hennessy's Talk at io18 about the future of computing. You can get a much stronger explanation of his talk [here](https://www.youtube.com/watch?v=Azt8Nc-mtKM): For more in depth converage of computer architecture history, [this](https://www.eejournal.com/article/fifty-or-sixty-years-of-processor-developmentfor-this/) article proves to be quite helpful*

People are quick to criticise that Bitcoin mining is taking up an immense amount of power (30 TW/hr). I don't know anyone who would say that this is ideal, however the Bitcoin network is flagging an important change to how industrial compute is evolving in regards to energy consumption. Along with the rise of industrial bitcoin mining, many people have taken a very reactionary position towards these new implementations of computing architecture. However, this is a regressive mindset that is ultimately Ludditian in it's analysis and greater foresight on computing in general. Here's why industrial Bitcoin mining showcases the future of computing, and why it's become necessary.

## How will you show this?
### 1. The End of Computing Axioms
![END OF AN ERA](https://www.eejournal.com/wp-content/uploads/2018/03/Death-of-Dennard-Scaling-and-Moores-Law.png)
I'm sure that you've heard of [Moore's Law]() and how that the logarithmic increase of transistor's per processor has been leveling out the last couple of decades. Specifically, processor-performance improvement since 2015 has fallen to only 3% per year. It used to be the case that we could expect processors to double in speed every 1.5 to 3 years, now it takes 20 years

However, this isn't not the only wall that computing has been running into the last couple of years. Before that, another axiom that is already not applicable is called [Dennard Scaling](). The law states that as transistors get smaller their power density stays constant, so that the power use stays in proportion with area. This meant for a long time that power wasn't a concern in chip design, you could use the same amount of power as it would be spread equally around the extra transistors you've added to your chip.

![the end of dennard scaling](https://www.researchgate.net/profile/Luke_Shulenburger/publication/301650491/figure/fig24/AS:355250444750853@1461709714584/The-end-of-Dennard-Scaling-44.png)

As I said, this law is no longer applicable in modern day chip design. As the requirements for compute power rise, we're seeing that the amount of power needed by the chip is generally increasing. Today, you're standard i86 Intel processor will actually slow it's compute power down in order not to burn out! This was unheard of some years ago, but now it's a fairly common phenomena. Generally, energy usage has become a _*massive*_ issue in today's modern cloud computing systems. Everyone likes to point the finger at Bitcoin's massive usage of energy, but not a lot of people know that approximately _*25%*_ of computation done in parallel on your standard Intel chip is wasted. 

![](https://images.slideplayer.com/26/8678317/slides/slide_31.jpg)
It's gotten to the point where as a software developer, if you're running a program on a 64 core machine and only 1% runs sequentially (i.e. not in parallel), it's equivalent of running your program on only a 40 core system! As well, there's a tremendous amount of wasted energy that comes along with such a costly mistake. Without even factoring in [Amdahl's law]() to this equation, it should be clear that we're not only hitting limits with energy but also with parallelism's compute architecture. How are we supposed to meet the rising demands of compute power?

### 2. The Rise of Domain Specific Architecture
Generally the response to this question has been the assertion that our hardware can't do *everything* as effectively as a machine that only does a couple of things very well. We can take a look at two examples of modern networks with an enormous demand of compute in order to showcase this.

As mentioned earlier, Bitcoin has had an huge increase in it's network usage over the past decade.
In order to compete, miners have needed to create better and better hardware to mine blocks and receive the reward. Miners have created custom ASIC (application specific integrate circuits) that are capable of compute the Bitcoin hash algorithm (double SHA256) at extreme rates. Critics might cynically label this innovation solely based on selfishness, but in light of limitations to modern computing, it is the only solution to allow for the Bitcoin network to handle the financial services of millions of people globally. 

ASIC architecture works effectively for something simple like hashing, but what about for more complicated computation? Google's compute needs are perhaps the most complex in the world, let alone for optimizing a hashing algorithm. Most of their products have become more and more reliant on AI, thus their biggest challenge has become handling machine learning at scale. 

with Deep Neural Networks using their TensorFlow framework. Thus, they have created the Tensor Processing Unit (TPU). These puppies are pump out a whopping 92 tera opterations per second, which operates at speeds up to 30x faster than modern CPUs and 15x more than GPUs, while still using less power than either.

![Google's TPU](https://regmedia.co.uk/2018/05/08/tpu.jpg)

Both of these designs are an example of the rise of Domain Specific Architecture as a change to computer systems that has become necessary to push the compute industry further. Due to the limitations in hardware advances, the only path left in improvement comes from limiting the scope of the hardware's operations in order to see increased performance. For blockchain networks, this are even greater incentives to increase performance to not only showcase the validity of emerging decentralized networks, but for the self-interest of those participating in the networks in the first place. 


### Conclusion
For many in the decentralized space, there are critics who will point to Bitcoin Mining ASICs as an attack on the very notion of a decentralized networks. From the changes we've seen over the past few years of computer architecture, any serious about improving performance of computer systems has to face the reality that domain specific architectures are a necessity. These performance gains are a necessity to meet the demand as blockchain networks continue to compete over providing the best service, and scale to meet the demand of the more than 3.2 billion people who are online. It would be impossible to meet this demand with generalized systems that don't allow for custom hardware to be created to meet demand.


## Outline

Basically
  * Energy per transistor goes down as transistor # goes up
  * However, this is falling apart as computation requirements are increasing (processor has to slow itself down in order not to burn out. (no more free lunch)
  * what does this mean?
    * Power becomes the key limiter to computing
    * Needs there's a shift that's required.

  * Energy Efficiency is a MASSIVE Issue in large clouds
    * Capital costs of Power + Cooling are THE EXACT SAME as the actual price of the servers and the cost of the hardware!

  * Amdahl's Law gets in the way of things
  * Parallelism is expected to be happening at the software level
    * Huge issues even if 1% of the code is expected to be handled sequentially
      * Means that a 64-core has the same performance as a 40 core processor
      * Tons of wasted energy

### 2. The Future of Computing
  * Bitcoin is on the right path but Proof of Work is inherently limited
  * Domain Specific Architectures are the future
    * Narrower range of applicability (better performance, lower flexibilty)
    * Better match to what the application demands
  * In order for blockchain networks to scale appropriately, this is necessary 

### 3. What's Old is New Again
  * We're seeing a return to systems of the past
    * application --> language --> architecture
    * Vertical teams working in union to achieve a common goal
    * Perhaps like how Miners and Devs are working with Bitcoin

## Conclusion
Arguing against customized hardware to run blockchain networks refuses to not only understand the incentive structure these networks provide, but also fails to understand the context of where we are in terms of global compute.


# NOTES

* Dennard Scaling is Ending
  * Energy per transistor goes down as transistor # goes up
  * However, this is falling apart as computation requirements are increasing (processor has to slow itself down in order not to burn out. (no more free lunch)
  * what does this mean?
    * Power becomes the key limiter to computing
    * Needs there's a shift that's required.

  * Energy Efficiency is a MASSIVE Issue in large clouds
    * Capital costs of Power + Cooling are THE EXACT SAME as the actual price of the servers and the cost of the hardware!

  * Amdahl's Law gets in the way of things
  * Parallelism is expected to be happening at the software level
    * Huge issues even if 1% of the code is expected to be handled sequentially
      * Means that a 64-core has the same performance as a 40 core processor
      * Tons of wasted energy

  * Programmer's are responsible for this mess as they LOVE to code in dynamically typed langauges that increase productivity and time to market

* How do we combat this?
  * Instruction Level Parallelism is hitting its limits.
    * 25% of Intel chips are computing *bad* data as it's attempting to guess what the next exectuion is supposed to be
    * More wasted energy by attempting this!
  * DSL's
    * Sound familiar?

  * For HW
    * Domain Specific Architecture's are a necessary future
    * Check out paper "There's plenty of room at the top"

  * Domain Specific Architecture's
    * Achieve higher efficiency by tailoring architecture to characterstics of domain
    * "From ASIC to ASIP: The Next Design Discontinuity" Paper
      * Not quite Bitcoin (More advanceed platforms will require specific programability)
    * Requires more domain specific knowledge than most processors need
    * 

  * In order for blockchain's to fix the problem's with Bitcoin, they are going to 
    * Lose their dependence on Proof of Work to solve security
    * Become EVEN MORE hardware and domain specific
      * Less inclusionary and more exclusive in order to run these networks more energy efficiently



### Why the Switch To DSL's?
* DSL's aren't more complicated
* Narrower range of applicability
* Better match to what the applciation demands
* Risk in COMP Architecture
* you needed to target the compiler output for higher level language

* Domain Specific Architecture's
  * VR/AR it will be necessary
  * AI
  * Still need to advance the general specific languages

* Why DSA's Can Win
  * More effective use of parallelism
    * MIMD --> SIMD
    * One set of instructions, whole set of functional usage (tradeoff, flexibility)
    * Speculative OoO, VLIW --> Compiler has decided a set of functions can run in parallel
    * Ditch cacheing --> when there's low spacial and low temporal locality caching slows things down
    * Switch to user controlled memory, again more work for the compiler and software dev
    * Switch to FP and lower accuracy data types in order to optimize compute


* Need Domain Specific Language to map to Domain Specific Architecture
  * Need high level info to compile and run on th architecture
  * Challenge will come with compilers needing to map across multiple architecture's across different platforms
  * Everything old is new again!
    * application --> language --> architecture

* Update to DRAMs
  * phase change memory
    * longer life-line
  * Important for IO
  * Replacement for flash and disk mostly then 

* Society needs to be more computing savvy
  * Educating young people to be more computing savvy (looking at you Meghan)
