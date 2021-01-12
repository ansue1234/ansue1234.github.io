---
title: "Drunk Driving Prevention Key Housing"
category: "projects"
tags: ["Personal", "Hardware"]
toc: true
priority: 3
description: "A car key accessory that can help prevent drunk driving"
---

## Description

_Full documentation_: [Click Here!]()

This is a car key housing that is designed to help with preventing drunk driving. In contrary to many of the similar device on market where the user have to install the device in the engine of the vehicle, the basic idea is for this device is to blocks the teeth of the key from inserting into the ignition. When a car key is not fully inserted into the ignition , the car would not start. Thus, as long as when the key housing prevents full insertion when the user is detected as drunk, the user can't drive the car.

_insert image_

This project was submitted for the 2018 Golden Gate STEM Science Fair and won first place in engineering category.

## Approach
The device is built using an ATMega328 chip, an alcohol sensor (MQ-3), a microphone, and a solenoid. When a user speaks into the device, the microphone captures the sound level and activates the alcohol sensor to start sensing the urronding air for alcohol. If the user drank alcohol, the alcohol would be detected as people breath out the speaking. If the alcohol level detected is above a certain threshold, the solenoid dosen't retract, and thus blocks the key sleeve and preventing full insertion. If the alcohol level is not above the threshold, the solenoid would retract allowing key sleeve to retract too. This means full insertion in ignition is possible and the normal startup process of a vehicle is not prohibitted.

Here is a video detailing the process:



## Topics
- Arduino, analog circuit design