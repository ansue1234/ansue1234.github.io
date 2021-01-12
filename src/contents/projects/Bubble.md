---
title: "Bubble"
category: "projects"
tags: ["Personal", "Software"]
toc: true
priority: 6
description: "An app that helps track who you met in your social circle."
---


## Description

_Collaborator_: [Raymond Lui](www.raymond-lui.com)

This is a mobile app that aids contact tracing by having the user log down interactions they have in their social bubble, hence the project name "Bubble". 

## Approach
This project is built using React Native as the frontend, and Google Cloud Firestore as the backend. 

The idea is that as people, we like to socialize. However, it is really hard for us to remember who we met up with say a week ago. This app helps you log down who you met up with. You first sign up by putting your information into the app. Then every time when you meet a friend, given that your friend also uses this app, you can scan their generated QR code in the app to get their status such as name, their latest COVID test result, their latest COVID test time etc. All of these information would be logged down and easily accessible to aid contact tracing in the future.

There are 2 main interface in this app. The first is when the user uses the app the first time:

_video here_

The second is when the user already registered. In this interface, the user can scan other user's QR Code, generate their own QR code, update their most recent test results etc.

_video here_

## Reflection
The project seems deceptively simple in the beginning, however, since we used the declarative format of React, the isn't quite what we are use to in class. In addition, because this is an mobile application, it requires quite a bit of asynchronous programming. The asynchronous aspect is really hard to grasp in the beginning. Almost all programs I have written up to this project are not asynchronous. In all my CS classes, I was never taught anything like that. This different way of thinking I believe is the most difficult part of the project. Finally understanding how it works at the end is extremely rewarding, which is a lot more than what I expected to learn from this project in the beginning.


## Topic
- React Native, Google Cloud Firestore