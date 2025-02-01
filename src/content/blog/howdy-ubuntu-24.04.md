---
title:  "How to use Howdy face recognition on Ubuntu 24.04"
description:  "this was painful"
pubDatetime: 2025-02-01T17:57:20+00:00
featured: true
tags: [linux, howdy, ubuntu, tech]
---

[Skip to the tutorial](#how-to-install-howdy)

So picture this. Your Windows 11 install just wiped your SSD, deleting every file, after you turned off BitLocker encryption. Well, my friend does not have to imagine as this happened to him.

Because of this situation, he switched to Linux (he was disabling BitLocker in the first place to be able to install it on dual-boot). However, one feature of his laptop wasn't working - the Windows Hello IR face scanner.

Being the Linux user I am, I looked into this for him, finding a project on GitHub that seems to do exactly what he needs - [Howdy](https://github.com/boltgolt/howdy).

I assumed this would be a simple task - just install Howdy from their official PPA and install it. However, of course it wasn't that simple. Nothing's ever that simple.

You see, the Howdy package on the official PPA tries to install Python libraries system-wide via pip - something which is a bad idea, and is in fact blocked by newer versions of pip, stopping the package from installing. This frustrated me so I fixed it in the best way I knew - modify the deb package to pass the `--break-system-packages` argument to pip (never do this, it's a really bad idea).

And you'll never believe it, that still didn't work. Fortunately, the solution became clear - compile Howdy from source instead. Yet this also didn't work. In fact, nothing I could come up with would work. And then, I found a fix.

## How to install Howdy

Fortunately the fix had been found for me, in an article I ended up finding by [UbuntuHandboook](https://ubuntuhandbook.org/index.php/2024/10/howdy-ubuntu-2404/) - use a PPA maintained by them that includes Slimbook's fixed fork of Howdy. And wouldn't you believe it, it worked perfectly!

I'll mirror the instructions here incase that site goes down in the future for whatever reason (all credit for this goes to them):

## Part One: Installing Howdy

Add the PPA:

```
sudo add-apt-repository ppa:ubuntuhandbook1/howdy
```

Refresh software lists:

```
sudo apt update
```

Install Howdy and its dependencies:

```
sudo apt install howdy python3-numpy python3-opencv python3-dlib libpam-python dlib-models libinireader0
```

## Part Two: Finding your video device

Make sure you have `ffmpeg` and `v4l-utils` installed by running:

```
sudo apt install v4l-utils ffmpeg
```

Then, list your video devices with:

```
v4l2-ctl --list-devices
```

Go through the `/dev/videoX` devices one by one until you find the correct one for your (IR) camera, opening them with:

```
ffplay /dev/videoX
```

Once you have identified the correct device, make a note of the device path.

## Part Three: Configuring Howdy

Now that you know your video device, run:

```
sudo howdy config
```

Scroll down in the Howdy configuration file until you find the line beginning with `device_path`. Remove the default value of `none`, and replace it with your video device (`/dev/videoX`). Save and exit the file (`CTRL+O`, `ENTER`, `CTRL+X`).

Finally, you're ready to add your face!

## Part Three: Registering your face

To register the face foor the current logged in user, run:

```
sudo howdy add
```

Set the name for the model, and look into the camera as it scans your face. And that's it! You're good to go with Howdy!