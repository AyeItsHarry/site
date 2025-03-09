---
title:  "How to remove the Wii Shoplift Channel"
description:  "The worst piracy tool of all time"
pubDatetime:   2025-03-09T13:17:58+00:00
---

## Section I - WiiUnShoplifter
Download and run the [WiiUnShoplifter](https://github.com/WiiLink24/WiiUnShoplifter/releases) application. This will remove all of the tickets installed to your console by the Shoplift Channel
## Section II - Restoring tickets
The WiiUnShoplifter may have caught some genuine tickets and deleted them by mistake. You can rectify this by running the [Wii Shop Ticket Restorer](https://oscwii.org/library/app/WiiShopTicketRestorer), which will restore all your legitimate tickets from past Wii Shop purchases.
## Section III - Reinstalling stock IOS56
Finally, you'll want to restore the original IOS56 which was replaced in the process of installing the Shoplift Channel. We can use a great application called [NUSGet](https://github.com/NinjaCheetah/NUSGet/releases) to do this. Download NUSGet from this link, and open it up.
- Navigate to `IOS` > `IOS 56` > `World`, and double click on `v5662`.
- If you're on a Wii, set the options to match this: ![Screenshot of NUSGet options for packing the IOS for Wii](/assets/guide/unshoplifting/Wii.png)
- If you're on a vWii, set the options to match this:![Screenshot of NUSGet options for packing the IOS for vWii](/assets/guide/unshoplifting/vWii.png)
- Now, choose `Start Download`.
- Once the download is complete, you'll find it in:
    ```
    Downloads/NUSGet Downloads/0000000100000038/5662
    ```
    Copy the WAD file over to the `WAD` folder on your SD card or USB drive.
- Boot up your favourite WAD manager (I recommend [yawmME](<https://oscwii.org/library/app/yawmme>)), and install the WAD.

Finally, your console is Unshoplifted! In the future take more care when running apps that modify your NAND.

![A WiiLink PSA telling people to take caution when running homebrew apps](/assets/guide/unshoplifting/danbo-psa.png)