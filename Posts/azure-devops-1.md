--- 
title: Azure DevOps with Xamarin Part 1
date: 2018-09-28
---

I wanted to write this series a while ago but knew DevOps was in the works so now it is out, here we are! :)

This is Part 1 in a series I am writing about Azure DevOps with Xamarin and how you too can set up your projects to enjoy all the goodness it provides. In this first part we will get started setting up our first project to build whenever we push code up to the repository.

I first discovered how fun/useful CI/CD can be when I worked at BBC where they use Jenkins and their own 'bakery' solution that works with AWS. There are a lot of areas of the DevOps concept, not the product (which CI/CD falls under) I still don't fully understand like containers. I get the basics just bad at finding use cases and implementing. But CI I love!

I really enjoy the peace of mind of knowing that when I push the code up, the whole solution will get built including any tests and I will know if something is wrong. Plus as someone who struggles with focus issues, the chance to guilt free pursue distractions while it compiles in the cloud is very nice indeed!

That is why I love Azure DevOps which is Microsoft's solution for CI/CD. But there is more to DevOps than just CI/CD. It also has many other features including Code Repository and Release Management.

Now as a Xamarin developer, many people will probably think of App Center as their end-to-end option of choice. App Center and DevOps are not quite the same thing but do have some similarites and play well together. When I found out that VSTS (as it used to be called) supported Xamarin I gave it a go and have "rubbed a little DevOps on it" for nearly every project since!

So in this post I want to go over a bit of DevOps in terms of getting started and try and cover some of the questions that often get asked when I discuss the subject.

## Getting Started

So now you have learned that DevOps is an option, how do you get started creating projects?

1. Head to [Visual Studio Online homepage](https://lucecarter.co.uk/visual-studio-team-services-with-xamarin/visualstudio.com) and click the button to head into Azure DevOps.

2. Click Create Project in the top right and give your project a name

3. You can leave all the other options under Advanced as defaults if you wish
    1.. The Git option just selects which version control technology you will use. In 2018 I think most of us use something Git based but you do also have Team Foundation Version Control.
    2. Work Item Process controls the style of the work tracking board. Agile is like Kanban. You can click the ? button to the right of the dropdown box to learn more about the options.

4. Click the Create button and wait for it to create your project and navigate to the project dashboard.

5. It will then give you options on what to do next:
    - New-Project-Dashboard
        - Click 'Repos' to move on to actually providing it with some code to do it's magic with.

6. I imagine you already have a project in mind for this so ensure it is initialised by running *git init* from the root directory of the project.

7. Now you need to add the files with *git add .* then commit with *git commit -m "YOUR COMMIT MESSAGE GOES HERE"*
    - This ensures that all the files are ready to be included in the first push.

8. Now you can go ahead and run those two commands from your DevOps dashboard that it gave you for setting the remote URL and pushing everything up.

9. Once successfully uploaded, you can now refresh the page and you should see your code there.

10. Time to make that CI magic happen. Click the button to set up a build pipeline then click to create a new pipeline.

11. Go ahead and click New Pipeline to set up a new build definition. It will already know about your code thanks to it being inside DevOps Repos so you can just click continue on the page that asks you to select a source.
    - Now it is time to select from the template options you are given. You will need to repeat some of these steps as we will need two definitions, one for iOS and one for Android.
    - We will start with Android first so ensure you select Xamarin.Android as the template and click Apply.
12. This will present you with a set of steps it will run and you may notice that some are crossed out

    This is nothing to worry about at all. It just recognises that certain things are not configured or present in your project at the start potentially such as test projects, testing in App Center and deploying. This may well change later if you decide to add these in.


13. We don't have to do much else here, except for selecting the Triggers tab that you will see above the Pipeline definition and below the project name. We want to ensure that the Enable Continuous Integration box is ticked on the right hand side otherwise it won't build on code push which is the whole point of CI.

14. All done for Android, just click Save & Queue -> Save & Queue (a popup window appears you don't need to worry about) and it will go off and run a build, woop!

15. For iOS you can repeat steps 10 to 16 with some additional tweaks. Of course instead of Android you will want **Xamarin.iOS**. The triggers stuff says the same. The only other difference is to how it is built.

16. You will want to select the Build Xamarin.iOS Solution step and ensure that on the right-hand side, a box for Build for iOS Simulator is ticked. This will change later on if you want to also deploy to real devices as you will want to also provide a signing identity and provisoning profile but don't worry about that for now.


17. I found when setting up a project for this blog that the pipeline definition didn't have an Agent Pool selected by default. If this happens and it asks for one, you will want **Hosted MacOS**.

18. You can now go back to Build under the Build and release section and see how the build went or is going.

19. If you want to watch it happening you can go ahead and click the ... next to the definition on this page and click View Build Results.

Woo congratulations, you have your first project setup in DevOps for CI! :)