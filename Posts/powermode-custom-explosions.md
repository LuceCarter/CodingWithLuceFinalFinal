---
title: How to set custom explosions in Powermode for VS Code
date: 2021-01-23
---

[Visual Studio Code](https://code.visualstudio.com) is one of the most popular free, open-source code editors in the world for developers. In fact I am using it to write this very blog post right now!

One of the things that makes it great is extensions. Extensions allow Microsoft and the community to create extra, optional functionality on top of the basic editor. These features are specific to a certain scenario you might face such as your langauge of choice, Azure services, themes, linter, even syntax highlighting and more! You name it, someone has probably made an extension for it!

One of the extensions I discovered in 2020 is called [power mode](https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-power-mode). This is purely aestehtic but really cool and fun and adds little 'explosions' each time you type.

The following GIF is taken from the VS Code Marketplace entry for power mode linked above:
![Custom explosions in power mode demo](../../Images/custom-powermode-explosions/particles.gif).

Now one of the cool things you can do with power mode is add your own custom explosions. There are some fun choices out of the box, like the one you saw in the GIF above, but maybe you have an idea for something cool you want to try! So this post aims to show you how, let's begin...


For my example, I will talk though how I added a spinning panther explosion, as my favourite streamer [whitep4nth3r](https://twitch.tv/whitep4nth3r) has some super cool panther emotes so it seems like a sily and fun thing to do.

The image is static however, so the first thing to do is use an online tool to animate the png file and turn it into a GIF to be used. For this I used [loading.io](https://loading.io/animation/icon/) that I found from searching. It seemed to do what I wanted and it generated the spinning PNG, yay!

![Spinning panther](../../Images/custom-powermode-explosions/panther.gif)

I saved this GIF somewhere easy to find and reference and then it was time to apply the settings.

One of the things I like about power mode is how easy it is to configure. 

Press F1 or Ctrl/Cmd + Shift + P (depending on your OS) to open Command Pallette. From here select ``` Preferences: Open Settings (JSON) ```.

At the bottom of your settings, paste the following information:

```json
    "powermode.customExplosions": ["YOUR FILE PATH HERE"],
    "powermode.backgroundMode": "image",
    "powermode.gifMode": "continue", 
    "powermode.explosionSize": 4,
```

* powermode.customExplosions - this is the path to the GIF you want to use in the custom explosion.

* powermode.backgroundMode - we set this to image otherwise it doesn't work. The other option is mask if you find that image doesn't work for you.

* powermode.gifMode - this controls how the gif is displayed. Continue will cause the explosion to continue where you left off if you stop typing. The other option is restart which will cause the gif to start from the beginning each time you start typing again. This is purely personal preference

* powermode.explosionSize - this controls the size of the explosion, you may want to tweak this depending on the size of the image that you want

There are other options you can tweak such as explosion order if you use multiple gifs, and custom css to make changes but that is beyond the scope of what I tried.
However you can read more on the [github repo](https://github.com/hoovercj/vscode-power-mode) for the power mode.

After applying these settings, this is what my VS Code looks like:

This is what it looks like when in action:

![Gif showing custom explosion in action](../../Imagescustom-powermode-explosions/spinning.gif).

The gif I used of course isn't perfect as it covers the text, you would want something more subtle. But now you've learned how to do it, the world is your oyster!