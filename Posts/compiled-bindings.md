--- 
title: Compiled Bindings In Xamarin.Forms
date: 2018-02-25
---

When it comes to new features in Xamarin, especially Xamarin.Forms I can be a bit like an excited puppy. Xamarin gets me so excited!

Now being the founder and organiser of [Manchester Xamarin User Group](https://www.meetup.com/Manchester-Xamarin-User-Group/) allows me the opportunity to speak to and also invite to speak, a lot of really knowledgable people. Some of them are enthusiasts, some professional users, some make awesome tools for the platform and in the case of the event on Thursday 22nd February 2018, Microsoft employees themselves.

The Microsoft employee in question is [David Britch](https://twitter.com/BritchDavid), Developer and Writer for the Xamarin team. He gave a talk titled “What’s new in Xamarin.Forms?” and it was full of lots of little gems of things already available, available in the pre-preview nightly builds or coming in 2018.

As the title suggests, one feature he mentioned that I really got excited about is something called Compiled Bindings. Now be aware that this is in the Nightly Builds as they are called, which is pre-preview and not supported so I would not recommend using it in your enterprise projects yet. But one day!

Question for you lovely reader, do you use Data Bindings? I bet the answer is yes! Bindings is a fantastic way of linking two or more properties that might need to be informed of changes to each other. The problem is, it doesn’t tell you if you have made a mistake with the binding value either in code or XAML so you will just find it not doing what you expect with no obvious reason.

CompiledBindings aims to fix this by throwing a compile time error so you get fast feedback of the issue. The following example is using code David Britch demo’d at the user group and can be found on [Github](https://github.com/davidbritch/xamarin-forms/tree/master/CompiledBindings):

<iframe width="720" height="405" src="https://www.youtube.com/embed/6JTVkkbkNi4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

As you can see from the above clip, when there is an issue with the binding, it throws a compile error instead of letting you build. Yay fast feedback!

You will notice in that video that although you get an error thrown, it is not a clear message and has no line numbers. Fear not reader/developer! This is a known issue Microsoft are working on and it may even be resolved by the time you read this.

So there you have it, a new up and coming feature for Xamarin.Forms to allow you to get fast feedback at compile time for errors in a piece of functionality we probably all use!