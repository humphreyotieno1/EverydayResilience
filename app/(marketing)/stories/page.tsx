import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const clientStories = [
  {
    id: "ruth-story",
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
    avatar: "/stories/ruthavatar.jpeg",
    category: "Family Dynamics",
    image: "/stories/ruth.jpg",
  },
  {
    id: "dan-story",
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
    avatar: "/stories/danavatar.jpeg",
    category: "Family Transitions",
    image: "/stories/dan.jpg",
  },
  {
    id: "julie-story",
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
    avatar: "/stories/julieavatar.jpeg",
    category: "Trauma Recovery",
    image: "/stories/julie.jpg",
  },
];

export const metadata: Metadata = {
  title: "Stories of Healing | Everyday Resilience Counselling Kenya",
  description:
    "Read inspiring stories of healing and recovery from our clients. Discover how trauma-informed counselling transforms lives and builds resilience.",
  openGraph: {
    title: "Stories of Healing | Everyday Resilience Counselling Kenya",
    description:
      "Real stories of transformation and healing from our clients, showing the power of trauma-informed counselling.",
  },
};

export default function StoriesPage() {
  return (
    <div className="space-y-20 pb-16">
      <Script
        id="stories-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Stories of Healing",
            description: "Real stories of transformation and healing from our clients, showing the power of trauma-informed counselling.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: clientStories.map((story, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Article",
                  headline: story.title,
                  author: {
                    "@type": "Person",
                    name: story.name,
                  },
                  description: story.shortQuote,
                },
              })),
            },
          }),
        }}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/background3.jpg')] bg-cover bg-center opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/40" aria-hidden />
        <div className="container relative z-10 mx-auto space-y-8 px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Stories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Stories of hope</p>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Real stories of healing and transformation
            </h1>
            <p className="text-base text-white/80">
              We honour the brave individuals who allow us to witness their transformation. Names and identifying details are adapted to protect privacy, but the stories remain true to the resilience we see every day.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-16 px-4">
        {clientStories.map((story, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={story.id}
              className={cn("grid items-center gap-12", isEven ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]")}
            >
              <div className={cn("space-y-5", !isEven && "lg:order-2 lg:pl-10")}>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Story 0{index + 1}</span>
                <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">{story.title}</h2>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                    <Image
                      src={story.avatar}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{story.name}</p>
                    <p className="text-xs text-muted-foreground">{story.role}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {story.category}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">{story.shortQuote}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      Read Full Story
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-semibold text-slate-900">
                        {story.title}
                      </DialogTitle>
                      <div className="flex items-center gap-3 pt-2">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                          <Image
                            src={story.avatar}
                            alt={story.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{story.name}</p>
                          <p className="text-xs text-slate-500">{story.role}</p>
                        </div>
                        <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {story.category}
                        </span>
                      </div>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="prose prose-sm max-w-none text-slate-700">
                        {story.fullStory.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div
                className={cn(
                  "relative overflow-hidden rounded-[36px] border border-muted/30 bg-muted/30 shadow-xl",
                  !isEven && "lg:order-1"
                )}
              >
                <div className="relative h-72 w-full overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/20 sm:h-80 lg:h-[22rem]">
                  <Image src={story.image} alt={story.title} fill className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
          );
        })}
      </section>

      <section className="container mx-auto rounded-3xl border border-muted/30 bg-background p-8 shadow-sm">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground">Share your story or partnership idea</h2>
          <p className="text-base text-muted-foreground">
            If Everyday Resilience has impacted you or your organisation, we would love to hear from you. Your story encourages others to seek help and helps us ensure our services remain responsive to community needs.
          </p>
          <p className="text-sm text-muted-foreground">
            Email us at <span className="font-semibold text-foreground">info@everydayresiliencekenya.org</span> or include a note in the contact form.
          </p>
        </div>
      </section>
    </div>
  );
}

