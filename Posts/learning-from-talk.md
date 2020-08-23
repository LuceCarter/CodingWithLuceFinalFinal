--- 
title: Lot's went wrong during my last talk. This is what I learned...
date: 2019-10-30
---


![Heavy Breathing photo](../../../mages/learning-from-talk/sheldon.png)
### Breathing heavily into a paper bag through panic

Last Friday, 25th October 2019, I was lucky enough to speak at [Xamarin Expert Day](https://expertday.forxamarin.com/) in Cologne again. This event happens twice a year in Germany. I also spoke at the June event in Munich. So I know from experience that this is always a great event!

This Cologne edition was no different. Their afternoon keynote speaker was none other than my friend, and hero, [James Montemagno](https://twitter.com/JamesMontemagno)! But as well James, it had lots of my other friends I love catching up with including [Mark Allibone](https://twitter.com/mallibone), [Gerald Versluis](https://twitter.com/jfversluis) and [Glenn Versweyveld](https://twitter.com/depechie)!

I was on in the afternoon, straight after James in fact (pressure much!) and my talk issues helped me learn a few valuable lessons. Some were my fault, some not! So I thought I would share that experience here so that maybe you too can learn!

## Powerpoint for Mac has a bug!

So this issue will only be temporary. In fact, by the time you read this, it may already be resolved!

But what is the issue I hear you ask? Well, notes don't display properly in presenter view. A total nightmare for a public speaker! I really wanted to use Powerpoint for Mac as it supports really pretty animated backgrounds.

I was lucky enough that both James, [Steven Thewissen](https://twitter.com/devnl) and others took a look with me. It didn't solve the issue but it confirmed that something was broken that wasn't me going crazy.

In the end, I printed my notes and tried not to need them. No notes was always the intention but I feel bad for the environment. So I started my talk with an apology to the trees! 😀

At the airport on Saturday morning, as I waited to board my flight, I received a Tweet from someone at Microsoft who acknowledged the bug and said a fix is in the works, woo!!

## Don't update Visual Studio before a talk!

Ok, this one may seem super obvious. But over the years, I have seen Microsoft employees on Twitter showing their laptops updating right before a conference. So if they can do it, why can't I?!

The update was a total success in terms of installation. However when I opened a project up, it said I couldn't use Xamarin.iOS as it required Xcode 11.1. Ugh! I went on the App Store, expecting to see an update. I know Xcode is quite large, but the event was in a Microsoft office, so knew the internet would be up to the job, with 2 hours to go. Except the update wasn't there, uh oh!

By this point, I didn't have time to spend ages investigating. But Visual Studio for Mac mentioned linker. So I went into my iOS Project options -> iOS Build and changed the linker from Don't Link to SDK's only. This meant Hot Reload no longer worked but iOS would run again, yay! I could have used Android but I had a lot to demo and Android takes ages!

## When all else fails, completely quit and restart Visual Studio

After solving the issues with running on iOS, and pre-starting the Android emulator so I could demo Hot Reload if required, it was time for my talk.

The talk started off well enough. People in the audience were engaged and I didn't need notes. Then it was live demo time. I opened up an app I had demo'd at last year's event, an app to help me translate written text in foreign languages. It wasn't using Shell already so it was the perfect candidate for implementing Shell as it used tabbed pages.

Intellisense was dead, oh god! To those who don't know, Intellisense is the autocomplete system built into the various versions of Visual Studio. So for example in Xamarin, if you type <But it will suggest you want <Button. You can then press Tab and it will write it out for you. Time saver!

Most of the code I knew how to write off the top off my head from rehearsal/muscle memory. In the end though, I got frustrated with the lack of Intellisense, and an attendee kindly mentioned that I had closed and restarted VS, but not actually done a full on Quit. So I did and Intellisense was back, huzzah!

I had already added an xml namespace declaration at the top for my views and started to write the Shell scaffolding code, but it wouldn't recognise my page! I never was able to solve this issue during my talk :(. After my talk I did some troubleshooting. If I moved the views out of the Views folder in my project structure, it would see them. Odd I thought.

In the end I deleted the xmlns declaration for views, and got Intellisense to autocomplete it. That is when I spotted what I was missing. When you declare an xmlns, it has to be written like this xmlns:views="clr-namespace:TravelLanguageAssistant.Views". I was missing the clr-namespace bit. Ooops! But we are human and Intellisense was created for a reason, so lesson learned!

If you are wondering why it worked when I moved it out of the Views folder, it is because it was then in the same namespace as the AppShell.xaml file so didn't need a new declaration.

## Xcode 11.1 weirdness

As I mentioned earlier, I wasn't able to get an update for Xcode. I had tried checking the App Store, opening Xcode itself and even logging in to the Apple Developer Portal where you can get Beta versions of OS's and software. The Xcode beta available on there was 11.2 so I thought I must have to get it on the App Store and it was having an issue.

In the end, I just searched for Xcode on the App Store and it had the little blue lined cloud symbol with an arrow pointing down. I believe this means you already own it, but it is not installed. This is different to the Get button you see, or a button with the price on, if you don't. So I told it to download and problem solved!

I was still baffled why it didn't think I had Xcode installed, especially as I am on Mojave so it's not like I have just discovered weirdness with Catalina (the latest Beta version of MacOS).

Looking back, I wiped my Macbook Pro a couple of months ago, to escape what I nicknamed Crashtalina, and I might have got Xcode 11 when it was Beta from the Developer Portal. Which is why I didn't see an update in the App Store. Not completely sure, without a time machine, but it fits the symptoms!

## In Summary..

Lots went wrong but I did the standard British thing of "keep calm and carry on", oh and make some jokes. The Powerpoint issue wasn't my fault so that one I can just call bad luck.

I couldn't have predicted the rest but if you take one piece of advice from this blog, let it be; give yourself at least 12 hours before a talk if you are going to update! Of course, it may be best to leave it even longer. Certainly don't do what I did which is click Restart and Update, as soon as the box pops up.

![Me during my talk at Xamarin Expert Day](../../../mages/learning-from-talk/talking.jpg)