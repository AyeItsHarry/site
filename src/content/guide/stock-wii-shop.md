---
title:  "How to restore the stock Wii Shop Channel"
description:  "This will easily allow you to remove any modifications to the Wii Shop Channel on your console."
pubDatetime:   2025-03-21T17:02:58-04:00
---

# Section I - Reinstalling stock IOS56 and Wii Shop Channel
You'll want to restore the original IOS56 and Wii Shop Channel which was replaced in the process of installing the patched Wii Shop Channel. We can use a great application called [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases) to do this. Download NUSGet from this link, and open it up.
- Navigate to `System Channels` > `Shopping Channel` > `World`, and double click on `v21`.
- If you're on a Wii, set the options to match this: ![Screenshot of NUSGet options for packing the IOS for Wii](/assets/guide/unshoplifting/Wii.png)
- If you're on a vWii, set the options to match this:![Screenshot of NUSGet options for packing the IOS for vWii](/assets/guide/unshoplifting/vWii.png)
- Now, choose `Start Download`.
- Navigate to `IOS` > `IOS 56` > `World`, and double click on `v5662`.
- Now, choose `Start Download`.
- Once the downloads are complete, you'll find it in:
    ```
    Downloads/NUSGet Downloads/0000000100000038/5662
    Downloads/NUSGet Downloads/0001000248414241/21
    ```
    Copy the WAD files over to the `WAD` folder on your SD card or USB drive.

- Boot up ([yawmME](<https://oscwii.org/library/app/yawmme>)) and click on the Wii Shop Channel WAD, then press right to **UNINSTALL** it. Once it is uninstalled, install it again and also reinstall the stock IOS56. 

## Section II - WiiUnShoplifter
Download and run the [WiiUnShoplifter](https://github.com/WiiLink24/WiiUnShoplifter/releases) application. This will remove all of the tickets installed to your console by a Shop Revival.

## Section III - Restoring tickets
The WiiUnShoplifter may have caught some genuine tickets and deleted them by mistake. You can rectify this by running the [Wii Shop Ticket Restorer](https://oscwii.org/library/app/WiiShopTicketRestorer), which will restore all your legitimate tickets from past Wii Shop purchases.

![A WiiLink PSA telling people to take caution when running homebrew apps](/assets/guide/unshoplifting/danbo-psa.png)