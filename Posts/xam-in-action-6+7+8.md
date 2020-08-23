--- 
title: Xamarin in Action — Chapters 6, 7 + 8
date: 2018-03-14
---

Would you believe it? Part 2 of the book already! I have really enjoyed the book so far and can’t wait to see what Part 2 brings.

Part 2 is all about building apps using concepts learnt in Part 1. and it will take you through building 2 example apps. The Square Root calculator from earlier in the book and a Counter app which will be slightly more complex as it will take advantage of multiple screens, multithreading and local storage. Each chapter will go through one of the layers in MVVM and help you build up those layers in your apps. But these will leave you with the tools required to do it for any apps that you make in future.

There are 7 chapters in this part of the book and I will be splitting them up over 3 posts. This post will cover the cross-platform parts of your applications which are covered in Chapters 6,7 and 8. Chapters 9 and 10, in the next post will cover the view and application layers on Android. The final post on Part 2 will cover Chapters 11 and 12 which as you may have guessed is the view and application layers on iOS. So let’s set off on our trip down mobile lane!

![Starting the quest to build apps](../../ Images/xam-in-action/quest.jpeg)
### Time to set off on my quest to build apps

## Chapter 6 — DESIGNING MVVM CROSS-PLATFORM APPS

When I read the “This chapter covers” section for Chapter 6 I got quite excited. One of the things I struggle with most when deciding to make a new app once I have picked what platform(s) to target is how to get started. I don’t mean the File -> New Solution kind of getting started but more how to design the app and design not just the UI but the architecture in such a way that you can actually start coding and be safe in the knowledge that you are creating something sensible and well written. This is what Chapter 6 is about.

Section 1 covers designing an app that is intended to be cross-platform. It uses great examples of apps you have no doubt used yourself such as Facebook and Gmail and how they look different on both iOS and Android. This is due to the different design guidelines and interaction patterns between these platforms and is something you have to bear in mind when designing your application.

Section 2 contains the first bit of what I have been craving for so long, a guide to designing your application. This section covers the UI and user flows. The UI is what the screens will look like but the user flows is the way the user interacts with the app whether that be typing in text, clicking buttons or any other possibilities. It talks you through the screens and interaction patterns that will be found in the 2 example apps too, using flow diagrams to help you see how that might help direct the UI creation.

Subsection 2 is the flows and UI for the Countr app which is slightly more complex. It has the ability to count anything the user wishes so they need to be able to see existing counters including their values from last time the app was open, increment the values, add new counters and delete existing counters.

Subsection 3 moves on to how to define the user flows and UI’s for any app that you may want to create. I really appreciated this section as it takes away the mental effort in future of picking out the techniques used to come up with the flows and UI for the two examples and instead just gives it to you on a plate as it were.

Section 3 is about how to architect the app. This is where you start considering where in the MVVM and two thread world you want your code to live. It is important to consider not just the fact you have these MVVM layers but also work that may or may not need to be run in the background. The rule introduced earlier in the book is usually a good start, if the job is expected to take longer than 200ms then consider doing this work on a background thread as the lag on the UI will be noticeable to the user. Subsection 2 shares some useful tips on how to work out whether the task should be run on the UI thread or the background thread.

Subsection 3 contains a diagram you are free to photocopy or print out with each of the layers you might have to help you plan your application and what tasks or flows will go where. I thought this was super helpful and plan to print out quite a few copies to help with some app ideas I have.

Section 4 is very brief and simply talks you through setting up your new project for SqrRt (steps can be repeated for Countr).
Section 5 discusses application properties. This is a key area to edit and understand as it is how you name your app, set your app icons, requested permissions for features on Android and version numbers amongst other things. These are publicly visibly on app stores and can’t be changed so make sure this is right!

If you want your app to be published to the App Store/Play Store it is vital you understand this stuff otherwise it will most likely get rejected or users will be suspicious and not install. For example you might find nobody installs your SqrRt app if it requests permission to access your contacts and camera. This is not required and would make people suspicious. This is different for both platforms so this is split up to cover them. I also learnt something new, iOS Springboard. Turns out it is the sort of home screen of your app icons and a name for Springboard is what users will see on iOS on certain screens, so don’t make it too long!

Section 6 triggers bad memories for me and probably you too if you are not new to this stuff, SDK versions. Apple make this part easy but Android not so much. There is SDK version, Platform Tools, Build Tools, Target Version and a whole heap of other things to consider. Thankfully Jim explains this well but having self taught myself in this area I know I have got into a right mess in the past. As Jim himself says in the book, if you don’t just stick to the latest tools on your machine you can sometimes find some weird errors with Xamarin. Been there, done that, got the T-Shirt!

Section 7 is on linking which is a concept in mobile app building of making sure your app is optimised to be as small as possible due to the limits of mobiles compared to something like desktop computers. This includes storage space and mobile (cellular to my American friends) data limits. Nobody wants to download a huge file on mobile data as you only have so much to use per month.

Subsection 1 has a great analogy for this using our coffee shop scenario. If the coffee shop wants to move to new premises you only want to take the minimum required to set up elsewhere, things like the carpets and the blinds can stay behind.

Thankfully, the Xamarin tool has an equivalent of the removal people, the part that will only gather up the bare minimum to make your app work and keep it small, is built in and run automatically. In terms of code, the linker will look through your code (including properties, fields and methods) and strip out anything from the underlying libraries that you don’t use. For example you may well have lots of strings in your classes, but if you never use the Substring method, that will go. Why include what is never used? Subsection 2 explains how to configure the linker settings on your iOS and Android projects.

Subsection 3 talks about making sure it doesn’t do too much as with reflection and MVVM, sometimes a property will be used in binding but not anywhere else and the linker can get confused and remove it causing crashes. There are a few options you have for how to do this depending on your project type including the MVVMCross technique of explicitly using a property, field or method or using a special class attribute called Preserve. This attribute can also be applied to a single member instead of the whole class which may be used in scenarios where your property is only used in binding.

## Chapter 7 — BUILDING CROSS-PLATFORM MODELS

As the name suggests, this chapter focuses on the model layer of your application. This includes the actual development of data models, services and repositories as well as unit tests to test your models. It also touches on the concept of REST services and JSON and how to access web services.

Section 1 begins to build up the required classes. For the SquareRt app, this is just one model, the SquareRtCalculator class that was decided on in Chapter 6. But as we learned about earlier in the book, even in an app as simple as this, it is always useful to have an interface and implement Inversion of Control (IoC), so as well as creating the class you will also be talked through creating the interface, getting your calculator class to implement this interface and register it in the MVVMCross IoC container. This is ahead of creating the view model later in the book and taking advantage of Dependency Injection.

Section 2 moves onto unit testing. Unit testing is important to test the expected behaviour and results of your models. For example, helping to design and develop your square root calculator model to ensure you get the result you expect when calculating a square root. The main thing with unit testing is to do it as you go along and run regularly, not just as an after thought when the app is complete. Jim again uses the coffee example to explain how some parts of the testing would be automated by the coffee machine such as checking the water pressure or that there are enough beans but that it is still important these tests are done to ensure quality. He also mentions a book I actually own myself to explain the large topic of Unit Testing, The Art of Unit Testing by Roy Osherove.

Unit Testing requires a framework for running the tests and luckily for us, .NET supports a variety of options including NUnit and XUnit. Subsection 1 involves creating a test project for the app. You put this in a separate project to avoid it being shipped with the app itself as it is not technically a feature of the app but a developer quality control tool. Jim as usual uses a mixture of instructions and screenshots to show you what to make and how, in both Visual Studio for Mac and Visual Studio on Windows. This works out of the box on VS for Mac but requires a bit more configuration on Windows.

Subsection 2 is your first unit test of the book and the app. You will create a test class for the SquareRtCalculator and follow the AAA pattern (Arrange, Act Assert). This is well explained in the book with instructions and associated explanations that we have come to expect in the book.

Section 3 moves on to more complex model layers and as you can guess, our more complex example is the Countr app. Subsection 1 considers the services, data models and repositories we will need and breaking those down into entities, storage and manipulators. This book explains it all better than I could.

Subsection 2 is about accessing databases. In the case of our Countr app, this database will be what stores our list of counters. The database Nuget package recommended to use is SQLite-Net from the great Frank Krueger. I am lucky enough to know Frank from my fandom of the podcast Merge Conflict and being their first Patreon supporter and this really is a fantastic library!

Subsection 3 is long and covers adding a service layer which will act as a messenger between the view model layer and the repository created in subsection 2. It also covers unit testing this layer using a technique called mocking. It takes time to go through all the new code you have to write but Jim guides you through it and it is all useful stuff to learn to help you create better apps and be a better developer.

Subsection 4 is about accessing web services. Stuff like REST (a stateless CRUD service over HTTP/HTTPS in simple terms) is something that almost every app takes advantage of. My day job at the BBC is actually all about creating RESTful HTTPS endpoints that upstream teams can use to request data they need for audience facing products. The activity to help you learn in this subsection involves using Azure and the Bing Search API to request the square root of a number. This is totally OTT for how you would normally do this but is a nice way of learning how to do REST calls and use Azure.

Piece of advice, follow what Jim suggests when it comes to setting up your new Azure resource, I tried to save money by picking a different pricing tier and it failed with 403 Forbidden. I thought the requests per second for S1 was more than I needed and wanted to pick between the identical looking S2 and S3 tiers. But as soon as I actually did as I was told and used S1 the problem went away. Don’t worry about cost, you only use it for a few requests then you can delete it. It is just to show you how to get started in future. Plus if you are a new Azure user, you get $200 free (at time of writing).

You will install a package for interacting with JSON objects and make your first call to the Bing Search API with your square root query. Jim touches on HTTP Status Codes which is responses you get when you make a call to an HTTP Endpoint. Anything in the 200 range means OK, 400 range error, except for 418. My go to websites for all HTTP codes when I want to know what one means or what one I want is [http.cat](http.cat) or [https://httpstatusdogs.com/] (depending on my mood). There should honestly be no other way to look up codes, you’re welcome ;)!

Once you have set all that up and run your tests (only required a simple change to reflect the web calls being async) that is Chapter 7 complete. We have learned a lot! We now have the model layers built for both applications complete with calls to relevant data stores where required. Still a long way to go towards a finished app but we are one step closer! The summary in Section 5 shows just how much was covered in the chapter.

![SqrRt solution at the end of Chapter 7](../../ Images/xam-in-action/sqrt-solution-7.png)
### SqrRt solution at the end of Chapter 7

![Countr solution at the end of Chapter 7](../../ Images/xam-in-action/counter-solution-7.png)
### Countr solution at the end of Chapter 7

## Chapter 8 — BUILDING CROSS-PLATFORM VIEW MODELS

Next up is the view model layer of MMVM. It starts by talking through what the goals of the chapter are where the view model is concerned. This is where it covers the things learned from earlier in the book; state, behaviour and value conversion.

Section 1 is a technical high-level overview of what view models will be needed for both apps. SqrRt as you can imagine will only require one view model to handle two properties and property changed events on them. Countr will be more complicated and require two view models. One for the list of counters and one for adding a new counter.

Section 2 moves on to beginning to add the necessary view models identified in Section 1, starting with SqrRt app. This isn’t just about adding in some code though, there is stuff to consider that Jim talks you through. As you can imagine, there is more than one way to do things and you need to understand what these options are and when to use them.

One of these options you have to consider is around how to handle the value conversion of your data. Views will want one data type, usually strings and the view models may require something else. This applies to our square root calculating app. The view deals with strings but the calculations will use numbers. There are two places you could do this conversion; inside the properties or in a specially written value converter. Time to try them both.

I hit an issue when testing that a property changed event is raised when the number value changes on the view model, which was caused by a missing reference to MVVMCross. The solution was to add MVVMCross Nuget package to the test project so be aware of that if you hit the same.

Where Subsection 1 was all about state on your view model, Subsection 2 is about exposing behaviour. With the square root calculator, there is no need to have any kind of manual trigger as it is so simple. However you do want to make use of property changed events. When a user enters a value to be converted, it should just calculate immediately and update the result. By the end of this section the app has been built up to have a view model with properties that reflect property changed events and value conversion and have associated unit tests.

![Sqrt solution at the end of Section 2](../../ Images/xam-in-action/sqrt-solution-7-s2.png)
### Project files for SqrRt at the end of Section 2

Section 3 moves on to carry out the state and behaviour configuration on Countr rather than SqrRt.

It starts with single value properties such as the name of the counter or the number that the count is at. This lives in the CounterViewModel and as the name suggests, is the view model for individual counters. Subsection 1 talks you through creating this with the correct properties and then unit testing. It quickly introduces a new concept from MVVMCross, the MvxViewModel<T> base class. This is to help with the fact that the view model will have two purposes, to act as an existing counter in a list of counters for Master page and then a new counter when viewing the Details page. Doing this with MVVMCross means you can’t have two constructors for the two scenarios due to how it works, which Jim assures is covered later in the chapter.

Subsection 2 is for collections. This is about the CountersViewModel which represents the list of all counters. This introduces the use of observable collections (lists with INotifyPropertyChanged support). Once you have created your class and associated tests following the well written and clear instructions, you will have achieved one of the flows identified for this app, “user wants to see a list of counters”. The book helps you write all the code and explains how the result at the end is that you have used the service which was created in Chapter 7, which we know will call the repository on a background thread.

Subsection 3, exposing the behaviour. The behaviour required in the counter app is a bit more complex than SqrRt. It will take advantage of Commands that we learnt about in Chapter 3. It starts with the most simple one which is to increment the count on the counter. The book gets you to create the required Command and associated properties and also tests around that.

One of the fun things you will learn to do as part of this book, when implementing the delete counter command, is how to also add a piece of functionality we are all used to on a list, swiping to delete. I know I do it on my iPad to delete email all the time.

Subsection 4 covers messaging. This comes up now because in the last section, the delete command was implemented. This deletes it from the backing data store repository but doesn’t actually tell the observable collection bound to the UI to delete that also. This is where messaging, or publish-subscribe model plays a part. After implementing messaging using an MVVMCross plugin, you have officially completed 3 of the user flows identified for Countr, woo!

Subsection 5 is about navigation. The final user flow for the app is about adding a new counter. As mentioned earlier on, the new counter page will be a separate screen. But that is no use if you don’t know how to navigate to it!

Step 1 uses the built in MVVMCross Navigation Service for triggering a view-model first pattern. If you can’t remember what that means, have a look at my post covering Chapter 3 which discussed this. In this section you will tell MVVMCross which view-model you want to load first and this will find the namesake view (MyFirstViewModel would look for a view MyFirstView for example) to know what to display.

**NB. One thing I have learned doing this is that by default, Visual Studio for Mac does not add the folder to the namespace of your class**

```csharp
    namespace Countr.Core
```

**even if your code was put in a View Models folder. Be aware of this when changing the app code, you may need to remove the ViewModels part of <ViewsModels.CountersViewModel>.**

Over the course of Chapter 8, the book takes you through how to add a new command for navigating to a new view model and carrying out relevant unit tests to ensure the correct view model is called to be created.

![Countr solution at the end of Chapter 8](../../ Images/xam-in-action/countr-solution-8.png)
### The list of files in your Countr project at the end of Chapter 8

WOW! That was a lot of code. I know this post has turned out quite long, but I have tried to keep it as brief but informative as possible. The chapters I have just discussed cover a lot of the main chunks of the example apps you will get to build following this book. As usual Jim does a great job of explaining things and using the continued analogies of the coffee shop and the email app.

Hopefully it has given you a taste for what you can achieve with this book. Next post will cover Chapters 9 and 10 where you will build the views for your Android version of the apps.