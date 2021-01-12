---
title: "Quick Therm"
category: "projects"
tags: ["Personal", "Hardware", "Software"]
toc: true
priority: 1
description: "A remote health status monitoring system"
---

## Description

_Collaborators_: Fred Hua, [Daniel Zou](dlzou.github.io)

_Full Info_: 

This project is a remote health status monitoring system of which we named "Quick Therm." The goal is to allow certain personnelles, organizations such as hospitals and senior homes, and entities to easily monitor the health status for a group of people. This project was submitted for State of California COVID-19 Technology Solutions. The project aimed to help protect health workers distance from potiential COVID patients when gathering their health informations. As of now, Quick Therm is able to measure temperature data, with the ability to measure blood oxygen level and heart rate planned for the future.

Here is a video on this project (feat. Fred Hua)

_insert video here_

## Approach
Quick therm system consists of 2 main parts. The hardware module, which is used to detect user health status and transmit the data to the user's phone to be processed by the software, a mobile app. 

The hardware module is essentially an armband, or a chest strap that the user wear. On the strap there is the actual module. The prototype module is built with ATtiny85 for main computation and control, a temperature sensor or thermistor to detect user temperature, and a bluetooth chip to communicate with the user's phone. 

_insert picture_

Since the project is geared toward organizations, the software interface is organized in hierarchies. there are 3 different roles a user can be. The director, manager and ordinary users(residents). Ordinary users is asked to wear the hardware module so their health status can be monitored by their respective manager. The director then is able to see the status of everyone in the organization, through the ability to see all the managers.

Ordinary users have the ability to measure their own temperature by tapping on a button in the app, or they can allow the app to run in the background constantly monitor their temperature change. If a user's health status is abnormal, then their profile would be color coded base on the severity and can be easily recognized by their higher ups. The app also have a lot of other convenient features such as seeing a history of temperature takings, etc. as seen in the video on top.

The app is written with Dart using Flutter for the frontend and Google Cloud Firestore as the backend.

## Topic
- Flutter, mobile app development, Dart, Google cloud Firestore
