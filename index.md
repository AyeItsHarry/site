---
layout: splash
title: "Home"
header:
    overlay_image: /assets/images/homepage-banner.jpg
    overlay_filter: 0.2
    caption: "Duffy Lake, Canada"
excerpt: "Welcome to harrywalker.uk!"
intro:
    -   excerpt: "Hi everyone! My name is Harry, I'm a 16 year old college student in the North East of England. Currently, I'm studying Maths, Physics and Computer Science."
wiilink:
    -   image_path: /assets/images/wiilink.jpg
        alt: "WiiLink Logo"
        title: "WiiLink"
        excerpt: "In my spare time, I contribute to the WiiLink project, which revives WiiConnect24 and Nintendo WFC services. WiiLink also translates and makes some Japanese exclusive Wii channels available once again. My favourite of these is Wii Room (Wiiの間)."
        url: "https://wiilink.ca"
        btn_label: "Learn more"
        btn_class: "btn--primary"
photography:
    -   image_path: /assets/images/photography.jpg
        image_caption: "Beauvert Lake, Canada"
        alt: "Image of Beauvert Lake in Canada"
        title: "Photography"
        excerpt: "One of my favourite past times is exploring the beautiful world we live in, to take breathtaking photos like this."
        url: /photos
        btn_label: "Check them out!"
        btn_class: "btn--primary"
---
{% include feature_row id="intro" type="center" %}
{% include feature_row type="right" id="photography" %}
{% include feature_row type="left" id="wiilink" %}