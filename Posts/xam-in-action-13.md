--- 
title: Xamarin in Action — Chapter 13 — Deploying to a physical device
date: 2018-04-10
---

We are here! Part 3 of the book. This is all about getting you from a working app to the store. Obviously having a working application is a good start but that is not everything to get it app store ready.

In this post we will cover the first chapter in Part 3. Chapter 13 looks at running the app on a real device and not just simulators. This is not as easy as you might think. Android devices by default hide a menu required to turn on USB Debugging and iOS is just a world of pain with provisioning profiles and all sorts. But that is why we have our great author to take us through it all! In the next post we will look at Chapter 14 which looks at UI testing. This is a set of automated tests to ensure that the app reacts in the way you expect when interacted with like a user. This will make the posts quite short but they are not directly related so makes more sense.

![Look what I made!](../../Images/xam-in-action/happy-with-app.jpeg)
### Woo look what I made!

### Chapter 13 — RUNNING MOBILE APPS ON PHYSICAL DEVICES

Section 1 is all about setting up to run apps on a real Android device. The easiest way is to put the phone in developer mode and run it using a cable. There is a fun trick to enabling Developer Options menu on Android. Finding the Build Number setting in the Settings menu and tapping it 7 times. Why 7? No idea but it has been the same on every Android device I have owned since I started making Android apps many years ago.

Now you will have a new menu in Settings that you can go into to enable USB Debugging amongst other things. You can even use this menu to change your phone UI to monochrome because you know, why not? ;)

Section 2 moves on to signing your Android apps for publishing. You need three parts to make your app ready for the Play Store. The package name, the version number and a signing keystore. These are what the store uses to identify who has your app installed and what version so their phone can download an update if you release one.

Subsection 1 covers what we learned about in Chapter 6, setting the package name. So for this reason it is more of a recap section but good to refresh the memory as that was over 6 chapters ago!

Subsection 2 looks at the keystore. This is what uniquely identifies your app along with the package name and version number. This keystore is a set of one or more private keys that uniquely identifies you to the Play Store. For this reason you ALWAYS need to use the same keystore for subsequent updates to an app. If you don’t, it will be rejected as it cannot be proved you have the right to update the app.

I actually learnt something new while working through this. Even when debugging, an Android app requires signing. But you don’t notice because Xamarin takes care of this with a default keystore. This can’t be used for release but it works for debugging. Who knew!

Subsection 3 is where you will actually create a keystore and sign your first build. Jim gives really helpful instructions with screenshots to help you achieve this then voila, you are done with Android!

Section 3 as you can guess is now running iOS apps on a real device. This is not as simple as Android sadly and involves the dreaded provisioning profiles.

Subsection 1 explains what exactly provisioning profiles are. They are used to tie together three bits of information; signing certificate, app ID, and unique device ID of the app you are trying to deploy to when not a Store deploy.

In the past you needed a paid Apple Developer Account ($99 per year at time of writing) to create provisioning profiles even for local development but this is now not the case. Instead you can create a temporary profile inside Xcode for your device for development and testing. There are a few steps needed to do this and Jim talks you through it all clearly so you should be fine.

Section 4 covers creating iOS provisioning profiles. In this case it is real ones including for Store distribution and not just a temporary profile for one local device. This starts with certificates in subsection 1.

They are very similar to Android keystores except with a few differences. One of these differences is that you have a different certificate for different purposes so one for debugging on devices, one for App Store distribution, one for push notifications and so on. There are actually a few things you can do that require their own certificate. You also don’t have to worry about losing them as Apple saves them in the Apple Developer Portal so that stress is taken away for you.

Certificates can be created in 3 ways; Xcode, Apple Developer Portal online or Visual Studio for Mac using the tool Fastlane. Jim gives a neat explanation of how to do this in all 3 options.

Once that is done using one of the options of your choosing, you can move on to Subsection 2 and App ID’s. They are unique values used to identify an app as the name suggests but also tie the apps to your signing certificate. These can be created in the Apple Developer Portal. There are two types of app ID that you can create, explicit and wildcard. Explicit is for a specific app and uses the same value as the bundle identifier. In wildcard you can use the app Id for multiple apps as long as they share the same base domain name (com.companyname.*). There are limitations to wildcards as you cannot use some services such as push notifications but for our example apps this doesn’t matter. Jim will talk you through how to create your app ID we will use.

App IDs can either be associated with one or more devices for development or for app distribution. Since app distribution is covered in Chapter 16, for now we will focus on devices and this is the topic for Subsection 3.

Now that you have a development certificate, app ID and hopefully an actual device, it is time for Subsection 4 and provisioning profiles. This is again done from the Developer Portal. Jim as ever does a great job of taking you through what to do. Once that is done and you have your profile downloaded and installed, it is time for Subsection 5 and running it on your device.

Subsection 6 is a really valuable section, troubleshooting! As hard as we might pray for an easy life, in software development stuff goes wrong. Having a reference for common errors is fantastic.