---
layout: single
title:  "5 common Wii Homebrew mistakes to avoid when modding your console"
date:   2024-10-05 20:58:39 +0100
categories: blog
---
For quite a while now, I've been giving people support with installing homebrew on their Wii consoles. In that time, I've been able to pick up on some of the most common mistakes people make when installing homebrew on their consoles. Therefore, in this article, I'm going to talk through the top 5 most common mistakes people make when homebrewing their console.

## 1. Video guides

Starting with the big one - homebrew video guides. Regardless of the uploader, video guides on how to homebrew consoles are some of the worst things I've ever seen. Almost all video guides on how to homebrew your console skip critical brick prevention steps, like installing Priiloader and BootMii, and creating a NAND backup. There are some video guides which aren't egregious like this, however Wii homebrew is constantly evolving despite the console being 18 years old, which is problematic as videos uploaded to sites like YouTube can't be updated retroactively, so these guides that were correct at the time of creation all inevitably become outdated. Therefore, the community has collaborated to create [wii.hacks.guide](https://wii.hacks.guide), which is constantly updated with new information, and is the only guide anybody should follow when modding their console.

## 2. Skipping installing Priiloader

Another common mistake I see people make all the time is skipping the installation of Priiloader. For those who don't know, Priiloader is an awesome piece of homebrew for the Wii that is made by DacoTaco, which allows people to fix the majority of bricks, alongside some QoL features for the system menu, like allowing people on vWii to use WiiConnect24. This is obviously a no-brainer for anyone with a modded console to install, yet I still see people all the time without Priiloader installed. If that's you, install it **now** by following the guide [here](https://wii.hacks.guide/priiloader).

## 3. Skipping installing BootMii

Now, this one isn't as clear-cut as the first two, but it's still something I see a lot in circumstances where it can - and should - be installed. BootMii is another brick prevention utility, that allows you to do things like create and restore NAND backups. On all consoles, it can be launched through Priiloader, but it can also be installed as boot2 on some earlier consoles, making it the most effective brick recovery tool for those consoles. Now, the problem with BootMii is that it requires an SD card, which not all people have. I understand people might not have an SD card and are thus unable to use BootMii, and that's ok. However, I see lots of people who have everything they need for BootMii - even a boot2 compatible Wii - yet don't have it installed, or only have it as IOS, despite having a console that can install it as boot2. If you're reading this and know you don't have BootMii installed, while having an SD card, make sure to install it ASAP following [these instructions from wii.hacks.guide](https://wii.hacks.guide/hackmii) to relaunch the HackMii installer.

## 4. Using USB flash drives

Now, this being an issue doesn't make sense to most people when they first hear about it, but it is a major issue. Due to the amount of read-write cycles when playing game backups using apps like USB Loader GX, it causes flash drives to die ridiculously quickly. Additionally, soome flash drives straight-up don't work, and get corrupted when you try to use them. Save yourself the headache, and just use a USB HDD or an SD card instead.

## 5. Installing themes made for other system menu versions / regions

Last, but not least, is this. Theming your Wii in the modern day, following the guide over at [wii.hacks.guide](https://wii.hacks.guide/themes) is a simple and safe process, thanks to tools like Priiloader. However, it is still common to see people install pre-made CSMs with outdated tools like MyMenuify, bricking their consoles. Furthermore, CSM files are illegal to distribute, as they contain copyrighted Nintendo code. If you want to theme your console, please avoid using themes outside of the safe sources linked on wii.hacks.guide. If you do get them from elsewhere, ensure to install them with modern tools like csm-installer with Priiloader installed, to be able to recover your console if you do end up bricking it.

---

And that's it for today! I hope you learned something new about the Wii, and now know how to keep your beloved console safe from bricks.