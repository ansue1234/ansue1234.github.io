---
title: "Gitlet"
category: "projects"
tags: ["Academic", "Software"]
toc: true
priority: 10
description: "A watered down version of the Github version control system"
---

## Description
This is a class project for Berkeley's data structures class CS61B. 

In this project we are required to create a local version control system that is capable of doing most of the important functions of git such as add, commit and merge on files in a directory. This is a very unique project in that we are given almost no template from the instructors, and basically have to design the entire software and put them together by ourselves. 

## Approach
The approach I took is to create my own nodes that point to each other in a one way linked list. For every node there are "blobs" which are the serialized and hashed contents of the files that the user wanted to check and the files in a "stage." In my implementation, that is essentially just a list of the blobs that are not yet committed but added using commands like (_gitlet add_ [analogous to _git add_]). Unlike many of my classmates who create a seperate node for "commits", I just made sure the stage of the head node is no longer editable and created a new node as the head. 

## Reflection
Through out the process of this project, I unsurprisingly learned a lot of things, both technical and more importantly the entire process of software design. From the technical aspect, I gained a deep understanding of the concept of persistance, serialization, hashing and Github workflow. On the design aspect I personally experience the amount of thought and planning is needed for a project of this scale. Especially the importance of planning, as I had to do a lot of work throughout the project that is actually avoidable if I plan and flush out my idea a lot more in the beginning.  

## Topics:
- Github workflow, Software Design Process, Hashing, Serialization, Persistence