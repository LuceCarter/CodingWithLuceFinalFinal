---
title: How to achieve a pixellated secrets scene in OBS for Windows
date: 2020-12-17
---

So my  good friend [MadhouseSteve](https://twitch.tv/madhousesteve) recently showed me a  super cool secrets screen in OBS that he shows when wanting to hide something like API keys and app  secrets. 

It's a pixellated version of the current screen you can see below:

![pixellated-scene](../../Images/obs-secret-scene/pixels.png)

A few people have agreed it is super cool and asked how it was done, so let me show you!

1. In OBS, add another Display Capture source, set to your main screen you share
2. Right-click on the source and select Filters
3. Click the + button in the window and add a 'Scaling/Aspect Ratio' filter
4. Set Scale Filtering to Point, and Resolution to 160x90 (or 10% of your screen resolution)

    [![filter-settings](../../Images/obs-secret-scene/filter.png)]

5. Right-click on the display capture source again, select Scale Filtering -> Point
    [![scale-filtering](../../Images/obs-secret-scene/point.png)]
6. The source may be a small screen in your preview window so drag it to cover the whole page
7. Enjoy your new secrets screen and be sure to show appreciate to MadhouseSteve by giving him a follow!


So there you go, a super cool secrets screen! Because it is your main screen just pixellated, users  can  even tell you are typing stuff on it just no idea what, how cool!!

