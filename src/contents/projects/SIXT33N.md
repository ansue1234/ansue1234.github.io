---
title: "SIXT33N"
category: "projects"
tags: ["Academic", "Hardware", "Software"]
toc: true
priority: 2
description: "A voice controlled robotics car."
---

## Description

This is the final project(group) for the Berkeley's Electrical Engineering class EE16B. The project is a voice controlled robotics car built using common electrical components such as op-amps, power regulator ICs, resistors, capacitors and the TI-LaunchPad for control and calculations.

_insert image_

## Approach
There are two main parts of the project. The actual wiring of the car including the microphone, filters, power regulation and motor control circuitry and the software portion that is used to detect which word the users said and the motor control algorithm.

### _Software_
The software command detection portion is implemented using PCA. We first record our commands for the car individually a bunch of time. We then "vectorize" the recordings and perform PCA on it to extract the principle components. Then when a certain command is spoken, it will match the spoken command with the principle components of the recorded commands to see which one is the closest. 

For the control algorithm, we implemented a closed loop one that is very similar to the P portion of the well known PID algorithm. Essentially, we control the motor by proportionally increasing or decreasing the current through the motor base on how badly we are off from a set velocity with our actual velocity measured through a simple rotary encoder(wheel with spokes through a photogate).

### _Hardware_
The wiring of the circuit can be split into a few components. The power regulator module, the signal processing module and motor control module.

The entire car is powered on 9V batteries. However, many components require voltage less than 9V such as the TI-LaunchPad. The step down conversion is done through chips such as L7805 and LM317 for a 5V and 3.3V output. 

The signal processing part consist of a mic board that includes a microphone and an op-amp to amplify the voice signals. The signal is then sent onto a band pass filter to "clean up" the noise, essentially getting rid of extreme high and low frequencies that are not necessarily produced by the human users. The signal is then sent into the TI-LaunchPad for analysis.

The motor controller is just 2 Bijunction Transistors with their base terminal connected to the TI-LaunchPad and a diode across the motor to prevent voltage spikes the could be created by the motors from harming everything else.

_insert image_

## Reflection
This project is a cool project in that it used everything that is taught to use through out the course from abstract linear algebra concepts to op-amp usage. It is amazing to see that the theory we studied is actually backed by reality and that the things learned from the class is not utterly useless (unfortunately many things in the class do feel useless when first learned). As a plus, I gained a lot more experience handson with all the hardware and more practice using tools such as function generators and oscilloscopes.

## Topics
- Analog Circuit Design, Signal Processing, Control Algorithms, Principle Component Analysis(PCA), Singlar Value Decomposition(SVD)