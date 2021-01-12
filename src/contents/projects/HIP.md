---
title: "Hot Interior Protection System (HIP)"
category: "projects"
tags: ["Personal", "Hardware"]
toc: true
priority: 5
description: "A system to remind parents of their child if left alone in car"
---

## Description 
_Collaborators_: [Daniel Zou](dlzou.github.io), Fred Hua 

_Full Info_: <https://github.com/dlzou/hip-system/>

_Note*:_ This project is unfinished as of now, more information will be updated in the future

This is a project that is aimed to remind parents if they accidentally left their child in their vehicle. I am in charged of the hardware portion, so basically the wiring of the sensors and the communication with vehicle via CAN.

_insert photo_

## Approach
 The system is composed of 3 main parts. the sensor module, detection module and an mobile app. In principle, the driver and child sit on pressure pads. If there is no pressure on driver's pressure pad, but there is pressure on the child pressure pad, an object/facial recognition script is triggered to see if the object is indeed a child on the pressure pad. If so, the vehicle window would be rolled down, alarm and honks will activate to attract the attentions of bystanders and notify the parents on their phone via a mobile app with information such as the in vehicle temperature. 

 To achieve the functions above, we basically connect an Arduino and a Raspberry Pi together so that when the sensor data indicates a child alone, the Arduino will trigger the Raspberry Pi module to start the recognition script. The Arduino is also used as an interface to communicate commands such as honk horns, roll down windows, etc. when appropriate.

 _insert schematic_

 ## Topics:
- Arduino, Raspberry Pi, CAN 