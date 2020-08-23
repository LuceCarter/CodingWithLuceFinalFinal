---  
title: Why there is some recent content missing right now
date: 2019-06-30
---


So first of all, thanks for visiting my blog!
You may notice it is lacking my 3 most recent posts right now. That is 100% my fault.

This blog is hosted on Azure App Service. I was trying to test out a basic ASP.NET Core backend I am making for a mobile app I am working on, but the App Service I created for it wasn't showing up. I just wanted to test what I was making so I just picked the service that was showing up for now while I fix the other issue..BAD IDEA.

I hadn't thought about what the existing one does and the consequences so yes you guessed it...I overwrote my blog! *facepalm*

Now if you are here then you can see I got it live again fine. However the json file where I exported my posts when I was migrating from hosted Ghost to Azure is missing the most recent posts.

Sorry and I will try and get all the posts back asap.

If you are looking for slightly older content, most can be found on [Medium](https://medium.com/@LuceCarter).

NB. If you use a minimum tier of Standard for your Azure App Service, it backs up your website. I was on Basic as I didn't think I needed more but this upgrade will probably save me pain in future.

As an extra, I am considering looking into some kind of cron job that exports my contents json file to blob storage every day so if something happens again, I can rollback to the previous version and if that doesn't have the content, I can just grab the backup from storage. Watch this space for a blog post about that ;)
