"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ruth",
    role: "Client",
    title: "Healing in My Own Space: How Online Therapy Helped Me Heal",
    shortQuote: "When I lost my job, I thought the toughest struggle I would face would be financial. I couldn't have been more wrong! While it was a challenge, the loss of autonomy and private living space led to the decline of my mental health faster than the loss of income.",
    fullStory: `When I lost my job, I thought the toughest struggle I would face would be financial. I couldn't have been more wrong! While it was a challenge, the loss of autonomy and private living space led to the decline of my mental health faster than the loss of income. The living arrangement I found myself in almost broke me.

Like many youths, unemployment meant moving back to the village and moving in with my mother in what I had previously considered to be a big house. However, I soon found out that it was a cage. Here I was at 25, unable to make my own decisions about even the simplest of matters. Things like what clothes I could or could not wear, who I could or could not be friends with, my eating habits, my fitness, and what I did in my free time suddenly became up for debate.

At first I was mad. I would put up a fight every time my mom interfered with my autonomy. While she backed down some times, most times I found myself in unending screaming matches that left me drained. The one place that I should have felt safe to be myself, my own mind, was taken over by conversations that I did not consent to.

I'm ashamed to say that despite all these struggles, seeking help was one thing I never considered. I was afraid of judgment and was already struggling with the shame of feeling like a failure. What I was experiencing felt like something I couldn't talk about openly. I was afraid that I would come off as spoilt and ungrateful. Because, let's be real, I was privileged to live in a safe place for free, I was fed three times a day, and I was afforded a life of comfort for the most part.

When I came across e-poster for Everyday Resilience Counselling Kenya, I was at the end of my rope. I needed someone to talk to without judgment. Someone who would hopefully understand what I was going through. Having virtual therapy sessions offered two main benefits: they did not know who I was, and they could not see me. That anonymity allowed me to pour everything out.

I still remember the relief I felt after the first session. Someone finally listened to my frustration about my living arrangement without invalidating my feelings. Turns out, I was not crazy, I was paying for free housing with my mental health! While I would love to say that I was magically fixed after the first session, it would be a lie, and as someone who has gotten the help I needed, I would hate to mislead someone else. It took a couple of sessions, but gradually, I was equipped with tools and coping mechanisms to navigate my situation.

I will always recommend therapy to anyone struggling with a dysfunctional family dynamic. For me, having access to virtual therapy sessions was a blessing. It made it easier to talk about my feelings, especially as someone who hates opening up. I am in a better place now. I got a new job and moved into my own space, but I cannot imagine how I would have navigated that season of unemployment without therapy. I believe it would have broken me.`,
    avatar: "/profile.png",
    hasFullStory: true,
  },
  {
    name: "Dan",
    role: "University Student",
    title: "I Found My Sense of Belonging",
    shortQuote: "I was about ten when my parents divorced. I tried to act like it didn't bother me, but deep down, it felt like my world was falling apart. My dad remarried almost immediately, and suddenly, there were new faces at his house, step-siblings calling him Dad, a new woman, and new family photos on the wall.",
    fullStory: `I was about ten when my parents divorced. I tried to act like it didn't bother me, but deep down, it felt like my world was falling apart. My dad remarried almost immediately, and suddenly, there were new faces at his house, step-siblings calling him Dad, a new woman, and new family photos on the wall. I felt like an outsider. I stopped visiting as often because I didn't know where I fit anymore. The one thing that made it a little better was having my mom. I told myself that as long as I had my mom, I would be fine. I felt like we were a team, just the two of us against the world.

And then, just when I thought I'd gotten used to the new dynamic, my mom started dating. I didn't expect the wave of emotions that came with it: anger, confusion, sadness, jealousy. For years, it had been just us. Part of me wanted her to be happy, but another part of me felt betrayed. It felt like everyone was moving on while I still felt stuck.

I started feeling anxious all the time. I couldn't sleep well. I kept thinking "What about me?" Everyone was moving on, building new lives, and I felt stuck somewhere in the middle, unsure where I belonged. I couldn't focus in school, and I often felt sad for no clear reason. It wasn't until I began therapy that I realized what was really happening: I was afraid of losing my place in my own family.

Therapy changed everything for me. At first, I went because my parents insisted I go as they were worried about me. But gradually, I began to see things differently. My parents were not leaving me behind; they were expanding our family. I wasn't losing them, they were simply building new lives that I could also be part of.

Once that clicked, everything began to change. I started reaching out more, spending time with my dad's wife and my step-siblings, and even talking to my mom's husband about things like university. I began to feel at home in both places. Now, instead of feeling left behind, I feel supported. I have more people who care about me, more adults I can turn to when I need advice or help. It's not perfect, but I am at peace. I know I don't have to choose sides, I belong in both homes.

It hasn't been an easy journey, but I'm proud of how far I've come.`,
    avatar: "/profile.png",
    hasFullStory: true,
  },
  {
    name: "Julie",
    role: "Client",
    title: "A Journey Back to Myself",
    shortQuote: "When it comes to misfortune, I believe, like everyone else, I've had my fair share. I remember the ups and downs of growing up in a dysfunctional household. I remember sleeping on the cold, hard floor of our pit latrine when one of my stepmothers decided she didn't want me in the house that night.",
    fullStory: `When it comes to misfortune, I believe, like everyone else, I've had my fair share.

I remember the ups and downs of growing up in a dysfunctional household. I remember sleeping on the cold, hard floor of our pit latrine when one of my stepmothers, the one my father had married at the time, decided she didn't want me in the house that night. I remember sleeping outside, sometimes in neighbors' homes, and nights of going hungry. I even remember once the police had to be called.

But this was just a chaotic childhood, one I know many African kids can relate to. I kept telling myself that if I prayed hard enough, life would eventually turn around.

But it didn't.

As an adult, I became known as "the smiling machine." My school principal once pulled me aside and told me I had a pretty smile, that I should smile less because it might land me in trouble. He was right about one thing: I did have a pretty smile. I discovered that if I smiled long enough and wide enough, people would like me. And I wanted to be liked. So I smiled through heartbreak.

Through pain. Through the nights I wanted to disappear.

I went against my principles more times than I can count just to keep that illusion alive. Behind that smile, though, life felt like a living hell. I still remember my first suicide attempt, the horror, the pain, and the crushing question that followed me for years: "Why is my life filled with so much misfortune?"

I couldn't explain it, though I desperately wanted to.

Then a friend recommended therapy and offered to cover the cost. At first, I wanted the therapist to fix me. After all, wasn't that the whole point of therapy? To solve your problems?

It took a few sessions to realize how wrong I was.

Therapy was beyond anything I expected. It changed the way I saw myself and my life. The way I defined my principles and grounded myself in them. Therapy reminded me that I am powerful beyond measure. That I had agency over my life. That I am gorgeous, talented, fabulous, and strong enough to live and thrive. Just when I thought I had lost the will to go on, I was reminded that all I needed to do was let my light shine.

And here's the most beautiful part: as I learned to free myself from fear and the pressure to be something, to please, to feel worthy, I began to liberate the people around me, including my own child!

I can't say I'll never need therapy again. I'm still a work in progress, aren't we all? But I can say this with certainty: my life is now much better. My mind, my spirit, my entire outlook on life have transformed.

Everyday Resilience Kenya saw me through the darkest moments of my life and helped me find myself again.`,
    avatar: "/profile.png",
    hasFullStory: true,
  },
  {
    name: "Peninah W.",
    role: "Client",
    shortQuote: "When my relationship ended, I felt like my world had fallen apart. Counselling gave me a safe space to express my pain and rediscover who I am beyond the relationship. I've learned to love myself again, make independent decisions, and focus on my and child's well-being. I'm finally at peace with my past.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Wang'ombe",
    role: "Client",
    shortQuote: "My counsellor helped me see how unhealthy my work environment had become. I had been holding on out of fear and self-doubt. Through therapy, I gained clarity and courage and finally left the toxic workplace, took time to heal, and now I'm working in a place where I'm respected and valued.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Amina K.",
    role: "Client",
    shortQuote: "I did not understand how growing up in a chaotic family had affected my life until I looked around and realized that I did not have any stable relationships. Counselling has taught me how to set healthy boundaries and give people a chance to prove themselves instead of projecting my desires unto them. The result has been stronger, calmer relationships that I can rely on.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Ochieng K.",
    role: "Client",
    shortQuote: "Before counselling, social situations used to terrify me. I would replay encounters in my mind days after and cringe at all the things that I figured I had done wrong. I missed out on networking events and social activities that I might have enjoyed. My therapist helped me challenge the voice in my head and accept that I cannot be perfect in every situation. She also encouraged me to expose myself to more social encounters, which to my relief has helped a lot and helped in building my social network.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Wambui",
    role: "Client",
    shortQuote: "I sought counselling after a really bad breakup thinking that I just had to get over it. However, my counsellor helped me understand my patterns in love, my fear about being alone, and helped me understand what a healthy connection looks like. Learning this has improved my dating life tremendously. Now, I can walk away in the early stages instead of setting myself up for a world of pain.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Winnie",
    role: "Client",
    shortQuote: "After losing my dad, I was consumed by grief for such a long time. Talking through my grief with a professional has helped me navigate my pain and face it instead of burying it. While I'm not over it, and don't think I will be for a long time, I have learnt to live with the loss without letting it consume me.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const total = testimonials.length;
  
  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile: 1 card
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 3; // Default for SSR
  };
  
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(total - itemsPerView, 0);

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goTo = (index: number) => {
    resetTimer();
    if (itemsPerView >= total) {
      setCurrent(0);
      return;
    }

    const boundedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrent(boundedIndex);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return; // Don't auto-advance when hovered
    
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => {
        if (itemsPerView >= total) {
          return 0;
        }

        const next = prev + 1;
        if (next > maxIndex) {
          return 0;
        }
        return next;
      });
    }, 6000);

    return resetTimer;
  }, [current, total, maxIndex, isHovered, itemsPerView]);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Stories of healing</p>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 sm:text-4xl">
            Real stories from our clients
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Discover how trauma-informed counselling has helped individuals overcome challenges, heal from past experiences, and build resilience for a brighter future.
          </p>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="flex w-full flex-col gap-3 px-2 py-4 text-left sm:gap-4 sm:px-3 sm:py-6 md:px-4 md:px-5"
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div className="flex h-full flex-col rounded-[24px] border border-slate-100 bg-white p-4 shadow-sm sm:rounded-[28px] sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10 sm:h-12 sm:w-12">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="leading-tight">
                        <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                        <p className="text-xs text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                      {testimonial.title && (
                        <h3 className="text-sm font-semibold text-slate-900">{testimonial.title}</h3>
                      )}
                      <p className="text-sm leading-relaxed text-slate-600">
                        {testimonial.shortQuote}
                        {testimonial.hasFullStory && testimonial.shortQuote.length > 150 && "..."}
                      </p>
                      {testimonial.hasFullStory && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto p-0 text-xs font-medium text-primary hover:text-primary/80 hover:bg-transparent"
                            >
                              Read full story
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-lg font-semibold text-slate-900">
                                {testimonial.title}
                              </DialogTitle>
                              <div className="flex items-center gap-3 pt-2">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                                  <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                                </div>
                              </div>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="prose prose-sm max-w-none text-slate-700">
                                {testimonial.fullStory?.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className="mb-4 leading-relaxed">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Previous testimonial"
            >
              Prev
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: itemsPerView >= total ? 1 : maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full bg-slate-300 transition-all duration-300 hover:bg-slate-400",
                    idx === current && "scale-125 bg-primary"
                  )}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Next testimonial"
            >
              Next
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400">Swipe or use the controls to view more stories.</p>
      </div>
    </section>
  );
}

