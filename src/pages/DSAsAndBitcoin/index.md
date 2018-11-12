---
path: "/blog/dsas-and-bitcoin"
date: "2018-11-11T12:30:30.000Z"
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
- futurist
- programming
---

*This blog post is inspired by the John Hennessy's Talk at io18 about the future of computing. You can get a much stronger explanation of his talk [here](https://www.youtube.com/watch?v=Azt8Nc-mtKM): For more in depth converage of computer architecture history, [this](https://www.eejournal.com/article/fifty-or-sixty-years-of-processor-developmentfor-this/) article proves to be quite helpful*

People are quick to criticise that Bitcoin mining is taking up an immense amount of power globally (30 TW/hr). I don't know anyone who would say that this is ideal, however the Bitcoin network is flagging an important change to how industrial compute is evolving generally in regards to energy consumption. With the rise of industrial bitcoin mining, many people have taken a very reactionary position towards these new implementations of computing architecture, denouncing it's inclusivity and perceived "centralization" as a negative for open access, decentralized networks. However, this is a regressive mindset which I perceive as lacking a wider analysis and understanding of the modern compute landscape. Here's why industrial Bitcoin mining showcases what the future of computing will look like, and why it's becoming increasingly necessary.

## The End of Computing Axioms
![END OF AN ERA](https://www.eejournal.com/wp-content/uploads/2018/03/Death-of-Dennard-Scaling-and-Moores-Law.png)
I'm sure that many of you have heard that [Moore's Law](https://en.wikipedia.org/wiki/Moore%27s_law) has been leveling out the last couple of decades. Specifically, processor-performance improvement since 2015 has fallen to only 3% per year. It used to be the case that we could expect processors to double in speed every 1.5 to 3 years, now it takes 20 years. However, this is just the most recent wall that compute innovation has been running into the last couple of years. Before that, another rule that is already much less applicable is called [Dennard Scaling](https://en.wikipedia.org/wiki/Dennard_scaling). The law states that as transistors get smaller their power density stays constant, so that the power use of the processor stays in proportion with the area of said processor. This meant for a long time that power wasn't a concern in chip design, power usage remained constant as it would be spread equally around the extra transistors.

![the end of dennard scaling](https://www.researchgate.net/profile/Luke_Shulenburger/publication/301650491/figure/fig24/AS:355250444750853@1461709714584/The-end-of-Dennard-Scaling-44.png)

This law is becoming less and less applicable in modern day chip design. As the requirements for compute power rise, we're seeing that the amount of power needed by the chip is generally increasing. Today, you're standard i86 Intel processor will actually slow it's compute power down in order not to burn out! This was unheard of some years ago, but now it's a fairly common phenomena. Generally, energy usage has become a _*massive*_ issue in today's modern cloud computing systems. Everyone likes to point the finger at Bitcoin's massive usage of energy, but not a lot of people know that approximately _*25%*_ of computation done in parallel on your standard Intel chip is wasted.

![](https://images.slideplayer.com/26/8678317/slides/slide_31.jpg)
It's gotten to the point where as a software developer, if you're running a program on a 64 core machine and only 1% runs sequentially (i.e. not in parallel), it's equivalent of running your program on only a 40 core system! There's a tremendous amount of wasted energy that comes along with such a costly mistake. Without even factoring in [Amdahl's law](https://en.wikipedia.org/wiki/Amdahl%27s_law) to this equation, it should be clear that we're not only hitting limits with power but also with using parallelism as a trump card for performance. With these techniques becoming less effective, how are we supposed to meet the rising demands of compute power?

### The Rise of Domain Specific Architecture
The solution many have come up with has been the assertion that our hardware shouldn't be attempting to do *everything* effectively in comparison to a machine that only does a couple of things very well. We can take a look at two examples of modern networks with an enormous demand of compute in order to showcase this.

As mentioned earlier, Bitcoin has had an huge increase in it's network usage over the past decade.
In order to compete, miners have needed to create optimized hardware to mine blocks and receive the block reward. Miners have created custom ASIC (application specific integrate circuits) that are capable of computing the Bitcoin hash algorithm (double SHA256) at extreme rates. Critics might cynically label this innovation solely inspired by the selfishness of the miners, but in the light of today's limitations to modern computing, it is one of the few solutions that allow for the Bitcoin network to handle the financial services of millions of people globally.

ASIC architecture works effectively for something simple like hashing, but what about for more complicated computation? Google's compute needs are perhaps the most complex in the world, let alone for optimizing a hashing algorithm. Most of their products have become more and more reliant on AI, thus their biggest challenge has become handling machine learning at scale. In response, Google has created the TPU (Tensor Processing Unit), which accelerates DNN (Deep Neural Network) execution using a massive array of 65,536 multiply/accumulate (MAC) units on one piece of silicon. These puppies are pump out a whopping 92 tera opterations per second, which operates at speeds up to 30x faster than modern CPUs and 15x more than GPUs, while still using less power than either of them.

![Google's TPU](https://regmedia.co.uk/2018/05/08/tpu.jpg)

Both of these designs are an example of the rise of Domain Specific Architecture as a change to computer systems that has become necessary to push the compute industry further. Due to the limitations in hardware advances, the only path left in improvement comes from limiting the scope of the hardware's operations in order to see increased performance. For blockchain networks, this are even greater incentives to increase performance to not only showcase the validity of emerging decentralized networks, but for the self-interest of those participating in the networks in the first place.


### Conclusion
For many in the decentralized space, there are critics who will point to Bitcoin Mining ASICs as an attack on the very notion of a decentralized networks. From the changes we've seen over the past few years of computer architecture, any serious about improving performance of computer systems has to face the reality that domain specific architectures are a necessity. These performance gains are a necessity to meet the demand as blockchain networks continue to compete over providing the best service, and scale to meet the demand of the more than 3.2 billion people who are online. It would be impossible to meet this demand with generalized systems that don't allow for custom hardware to be created to meet demand.

