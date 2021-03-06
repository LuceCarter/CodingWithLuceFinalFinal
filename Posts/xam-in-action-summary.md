--- 
title: Xamarin In Action - Blog Post Series Summary
date: 2018-04-25
---

So as you may or may not know, I recently completed a front -> back read through and review series on Xamarin in Action by Jim Bennett (now Senior Cloud Developer Advocate at Microsoft).

As part of the series, I wrote posts covering one or a group of chapters, sharing my experiences of coding along and how I found the content to understand. Overall Grade - A*!

Now one of the things I promised my readers/Twitter followers I would do is write a table of contents type post, so here we are! The aim of this post is to give links to each post and a rough summary of what it covers to allow you to use this as a sort of cheat sheet to know which post might be of use for what specific thing you need to know or where in the book itself you might want to jump to. Let's go!

- [Chapter1](http://lucecarter.co.uk/xamarin-in-action-by-jim-bennett-chapter-1/)
    - This is all about explaining what Xamarin is, what tools you need and how to get started.
    - It has a comparison between Xamarin and some of the alternatives such as Cordova and React Native.


- [Chapters 2 + 3](http://lucecarter.co.uk/xamarin-in-action-chapters-2-3/)
    - Chapter 2 has you creating your first Hello World application, using the MVVM architecture.
    - There is lots of useful information about what all this stuff means and diagrams to help more visual learners.
    - Chapter 3 is a further deep-dive into MVVM or Model-View-ViewModel and what that really means and how it works.


- [Chapters 4 + 5](http://lucecarter.co.uk/xamarin-in-action-chapters-4-5/)
    - Chapter 4 builds on the example you created in Chapter 2 by introducing a framework into your MVVM life called MVVMCross.
    - You also get to start writing code after learning about the principles of MVVM and how this applies to the example apps that will be built throughout the book.
    - You also learn a concept called Bait and Switch and learn how to use that to have your app speak to you.
    - Chapter 5 has a great pun for a chapter title and moves on to cover an important concept in mobile applications; async and await.
    - You will learn about multithreading, Tasks and the different tpyes of threads.

    - [Chapters 6, 7 + 8](http://lucecarter.co.uk/xamarin-in-action-chapters-6-7-8/)
        - This is the start of Part 2 in the book so the direction moves on to applying the concepts you learned in Part 1 by starting to build 2 example apps; one simple and one more complex.
        - Chapter 6 is about designing MVVM apps. This contains the gold dust I really appreciated on how to approach getting started and some little exercises you can do to help identify what work belongs in what layer.
        - You will also start to plan the design of the Countr and SqrRt example apps you will be making.
        - Chapter 7 starts to look at and build the Model layer of MVVM.
        - This is also where you start to write your first unit tests. Testing is just as important as coding in app development.
        - Also covered is using a database in your application for storing data; both local and remote.
        - A local store will be used to store the counters created in the Countr app.
        - You will also learn how to take advantage of RESTful API's, in this instance trying out the Bing Search API.
        - Chapter 8 moves onto the View Model layer.
        - You will get a high-level overview of how to apply it in your app examples.
        - An important topic covered in this chapter as well is value conversion as often a component on the UI will expect a certain data type (usually string) but this is not helpful when you want a number. There is a way around this explained in this part of the book.
        - You also learn about collections, messaging (not SMS or email) and page navigation.

- [Chapters 9 + 10](http://lucecarter.co.uk/xamarin-in-action-chapters-9-10/)
    - This part of the book is all about Views and specifically in Android.
    - Chapter 9 builds up the simple View you will need for the simple square root calculator app.
    - Along the way you learn about Material Design which is Google's design guidelines and Layouts in Android which is their concept of pages.
    - Chapter 10 moves onto the slightly more complex view you will need for the counters application.
    - You will learn about the master-detail view which allows you to display a list and on selecting it, get more details about the item clicked. You will have seen this in action in plenty of apps.
    - You also play with other features you will have seen such as a floating action button and menu items.
    - The next section of this chapter explains about how to use and add  Images and app icons on Android.

- [Chapters 11 + 12](http://lucecarter.co.uk/xamarin-in-action-chapters-11-12/)
    - This follows the same pattern as the last post except this time the content is about views in iOS.
    - Chapter 11 implements the simpler UI on iOS and starts with Apple Human Interface Guidelines.
    - You will start to play with Storyboards which is the iOS screens. Technically a Storyboard is actually a collection of screens with segues between them but you can also just make one screen.
    - Afer learning how to connect the View and ViewController, you will have a working square root calculator app, hazaa!
    - Chapter 12 is about the more complex UI example in iOS and will introduce more advanced features including tables and navigation.
    - Like in the Android section, you will learn about app icons and  Images. 

- [Chapter 13 - Physical Devices](Chapter 13 - Physical Devices)
    - Part 3 time! Chapter 13 covers running the app on a physical device. This requires a bit of configuration on both platforms.
    - You will learn how to enable USB Debugging on an Android device and how to 'hack' on iOS to allow temporary provisioning for a physical device without paying the $99 a year fee (purely for development not distribution) .
    - Chapter 13 also covers the keystore in Android and signing your build to identify it as created by you.

- [Chapter 14 - UI Test](http://lucecarter.co.uk/xamarin-in-action-chapter-14/)
    - UITest is the testing tool for testing the view part of your applications. Unit tests cannot cover the UI, only the business logic but it is just as important.
    - Throughout this chapter you will be setting up and running your UITests on the more complex Countr app.
    - You can run these tests either on a simulator or a physical device which is pretty cool!
    - You will learn how to query the visual tree for components and how to interact with them such as entering text or tapping a button.

- [Chapter 15 - App Center](http://lucecarter.co.uk/xamarin-in-action-chapter-15-app-center/)
    - This chapter covers App Center which is like a mission control for your application
    - Here you can configure builds, set up beta testers and UITesting, set up analytics and other things.
    - In this chapter you will set up the test and analyse part of the lifecycle image I share at the top of that post.

- [Chapter 16 - Distribution](http://lucecarter.co.uk/xamarin-in-action-chapter-16-distribution/)
    - Time to distribute your app to the relevant app store for the two platforms.
    - The process is similar in some ways between both and differs in others but Jim has you covered and you will know how to submit an app for the store.
    - After that, BOOM! You are done hopefully with a working app on the Play Store and App Store.

I hope you have enjoyed this series as much as I have. Honestly this book is fantastic. Jim has a great way of explaining things and I really like the use of  Images and instructions to help people with differing learning styles. I would actively encourage anyone reading this to [buy the book](http://xam.jbb.io/) using discount code ssbennett. My series does not even scratch the surface of the goodies inside.

I also want to take a minute to write a thank you to Jim himself. I was feeling a bit lost just before I found this book. I wasn't sure what side projects I wanted to work on and my Imposter Syndrome was making me worry I wouldn't be able to work on a topic enough to write a quality blog post, even though I really enjoy blogging. But finding this book and reviewing it has really helped me get back into mobile development, help me learn so many new skills and actually finish something so thank you Jim.