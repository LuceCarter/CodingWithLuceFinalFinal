--- 
title: Xamarin In Action - Chapter 16 - Distribution
date: 2018-04-25
---

ALERT - FINAL CHAPTER!!

Yes you read that right, after a long and fun adventure together, being expertly guided by Jim, we are on the final chapter of the book. We have a working app on both iOS and Android that has both unit tests and UITests. We have used App Center to set up build, test and analytics for our app so now it is the final step in the lifecycle - distribute.

Distribution can be done to two different groups - beta testers and the stores themselves. In this chapter the book covers both, starting with beta testers. Again this is slightly different per platform.

Section 1 is how to distribute the app to beta testers on Android. It is important to do this before pushing to Play Store since you want to pick up as many bugs or issues as possible before it is available to everyone in the world with an Android device.

As you would expect, App Center makes it very easy to create a new group and add users by email. This way when you release a new version for testing, they will be sent an email with a link to download. I have experienced this from both sides in my time with Xamarin and it is really easy as a user to do. Note however that when downloading updates for my friend [Mitch](https://twitter.com/mobilerez)'s app it told me to use Chrome on my Android phone.

Subsection 1 describes enabling app distribution on Android. This is very easy and involves setting up the users and them making a small tweak to the settings on their device. Then you can decide if you just want to distribute automatically on each build or manually when you deem a release ready for review.

When you register users, there are three types of roles they can have which dictates the amount of power they have:

- Manager - This is the equivalent of administrator on computers. Complete control over the app from settings to users to distribution to analytics.

- Developer - They can create builds against branches and run tests.

- Viewer - Equivalent of read-only. They can see and download versions of the app. As you can imagine, this is what role beta testers need.

The next part of this subsection talks you through adding a collaborator for Android and what they need to do to allow apps from non Play Store sources to be installed and open otherwise they won't be able to test for you.

Creating distribution groups is really easy and involves grouping a bunch of collaborators together. This is either by adding existing users or inviting by email.

Once you have these groups organised, you can choose how to distribute. Automatic distribution is the easiest way and can be achieved from the Build tab for the Android app, selecting a branch (by default this is Master usually), clicking the spanner icon to configure it and turn on the Distribute builds switch.

Manual distribution involves more effort on your part but gives you more control over distribution. To distribute it this way, you can create an APK (Android's app file) and upload it to App Center.

Inside the Distribute tab on App Center you will find a Releases section. This allows you to manage your releases. This is a useful section with links to all versions and information such as app size. If you need a previous version of the app for testing and don't have it locally, you can get it from here.

Subsection 2 covers auto updates. It's all well and good sending people an email with an update link to download and install an update, but that is time consuming and relies on users wanting to do that. It would be much better to configure your app in App Center to notify users of an update and allow them to update from inside the app. Thankfully this is possible and really easy.

This requires adding an additional Distribute Nuget pacakge and adding it to the Countr app (or any others going forward). You can then add typeof(Distribute) to the end of your AppCenter.Start code inside your SplashScreen class. The next time the app is run at the version with this new code in, the in-app updates will be enabled.

Just enabling this isn't enough to then update in future however. Building a new version is important but how will it know the version is newer? The answer is the version number. This is not automatically done for you however so when you want a new update to be available, you will need to increment this number manually within your manifest file and then the next time the app is started, it will carry out this check and see a new version is available.

Section 2 moves on the best part, publishing your app on the Play Store. Once you are happy that all feedback from beta testers is positive, it is time to get it out there to a wider audience.

So time for Subsection 1 and setting up your account. Before you can publish, you need to set up an account and pay a small registration fee ($25 at time of writing). Unlike Apple however this is a one-off fee and once you are a paid developer, you are that for life.

Once you have followed through the steps on the website, you will be taken to the console. From here you can click Pubish an Android App on Google Play button, fill in the details for your app name (doesn't have to be unique but it is recommended, fewer than 50 characters and no profanities) and click Create..tada!

Now you need to actually add your APK since an app with no APK is just a name and totally useless! This is done in App Releases from the Play Store console. Here you can select a production release and create it using the APK you downloaded from App Center.

Next is setting an appropriate content rating which not only affects who may decide to install your app, but if it is a certain rating may find it not included in the Play Store in some countries. This is done using a questionnaire you fill out.

You can also add product details that will appear on the store listing. This is stuff like text descriptions, screenshots and some information. Some fields are required and Jim covers this as well as a brief description of what they mean.

The final step ahead of publishing your app is to set the pricing and how it should be distributed. There is a Pricing & Distribution tab in the Play Store console to help with this. You can set up a merchant account if you wish to charge for your apps but of course with a simple example like Countr it will be free.

Again Jim talks you excellently through the list of fields you need to fill out at this stage. Once you have provided these details you can publish the app. Once you submit everything, it will be reviewed and analysed by Google just to ensure your app is working, doing what it says on the tin and not secretly up to no good.

Woop released app! Now it is out there, users can start leaving star ratings and reviews. If you wish to update your app in future, you will have to go through the same proces you did before in terms of getting an APK from App Center and uploading manually to the Play Store.

Section 3 is the same again but for iOS. So Subsection 1 is all about enabling app distribution. As mentioned in an earlier chapter, you need a different provisioning profile for distributing to the App Store. Creating groups for your beta testers is the same as on Anroid except requiring a bit more info from testers so you can create provisioning profiles that include their devices.

There is a bit of work involved in provisioning iOS users. In Chapter 13 you created a developer provisioning profile but now you need one for Ad Hoc and one for App Store. But before you can make these new provisioning profiles, you need a new certificate for distribution. This can be done in the same way as your developer one. Jim reminds you how to achieve this.

Next up is setting up the ad hoc build to distribute to beta testers. Follow Jim's guidance and you will be ready to go. It is very similar to Android so will feel familiar. However the install will be slightly different. Users will need to install an App Center provisioning profile to adhere to Apple's security policy. There is lots of instructions to help with this so fear not!

Like with Android you will want auto updates. However the setup is a bit more complicated. The process starts off the same with the Nuget package and adding that line to AppCenter.Start. After this you need to change your info.plist file to tell it how to open the App Center updater. This involves adding an additional value to the list. You will also need to configure the version number inside the file each time you update a version of your app.

Subsection 1 of Section 4 is about provisioning your app for publishing. In Chapter 13, we created a wildcard app Id but in order to publish it to the App Store you will need a specific one for your app. Once that is done from the Apple Developer Portal, you can go ahead and create an App Store provisioning profile. Now go ahead and set up the Build in App Center.

Subsection 2 is about setting up your app. This is similar to Android and the Play Store; create an app, set up some metadata, upload a file and await approval.

The Apple Developer Portal is actually not where you configure apps for release. It is instead done on something called iTunes Connect. Like with Android, Jim talks you through the steps for creating a new app for release in iTunes Connect complete with pictures. The complicated part comes when you want to upload an IPA (the iOS application file) as you can't do this through iTunes connect. There is a tool that comes with Xcode called Application Loader that you can launch from Spotlight (cmd + space).
Jim then resumes the helpful instructions to upload your IPA and continue on the iTunes Connect page.

Like with Android, there are lots of pieces of information you need to fill out about your application and required fields that Jim talks you through. This includes app information including the version data,  Images and any keywords for searching. Once you have filled all of this out, go ahead and click Save and then click Submit for Review.

Three more questions then bam, it is queued up for review! This takes a lot longer than Android but only a few days and you should get either approval or suggestions on what needs to change with links to the relevant guideline sections. Once it is approved you have succesfully got your app on both stores with a successful cross-platform app, well done!

Ratings and reviews also happen on the App Store as well and you can access this information from iTunes Connect. This is on the Activity tab and Ratings and Reviews section.

Section 6 is about 'Where to next?' It summarises what you have learned and achieved over the course of the book as well as some information about Xamarin and Microsoft and reasons why it is so great. Jim then finishes off with some links to useful content so you can go forth and build apps.

In the next post I will summarise all my posts from this series with links to each to act as a single source of reference for getting started. All that is left is for you to go and buy the book since my series is very high level, it by no means replaces the book! Honestly this book has been the best textbook I have read in a long time and I thoroughly enjoyed going from zero to hero so big shout to Jim for that.

As Looney Tunes says - That's all folks!

