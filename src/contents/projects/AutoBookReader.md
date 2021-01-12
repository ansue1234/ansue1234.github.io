---
title: "Automatic Book Reader"
category: "projects"
tags: ["Personal", "Software", "Hardware"]
priority: 8
toc: true
description: "A device that automatically reads book out loud and flips pages."
---

## Description
This is a device that will automatically flip pages and read the contents of a paper book out loud. This project was for a summer camp back in high school where we get to design and create our own engineering projects.

The inspiration of this comes from my clarinet playing experience. The problem that really bothered me was that no one flips pages for me when I am in the middle of playing because there are an odd number of clarinet players in my row. Hence I really wanted to have something that will automatically flip pages. Also I was horrible at sight reading, so I wanted something that can read printed sheet music and play it out loud too. 

The idea of having a working page flipper/music reader might be a bit too much back then, so I decided to create a machine that can read books as a stepping stone, and create the full scale music reader in the future. The two machines are essentially identical, except one reads books, the other reads music.

_insert image_

## Approach
There two main components of the device. The mechanical page flipper and the OCR. The mecanical page flipper consists of a 360 degree servo with a long arm and a motorized wheel. When a page turn action is initiated, the motorized wheel would turn and wrinkle the page, and then the long arm would go into the wrinkle of the page and swipe to turn the page.

For the OCR, I used the Tesseract OCR package. I first take a picture of the page from a Raspberry Pi camera, and then the picture is sent to the Tesseract OCR engine to convert it into words. The words are then sent into a Text to Speech Engine(Espeak) which then broadcast the audio to a speaker or an earphone of your choice.


## Topics
- Raspberry Pi, OCR, Mechanical Design