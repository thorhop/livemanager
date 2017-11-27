# livemanager

## Description
Ableton Live is a great DAW! So great it's productivity has left me with a HUGE collection of projects that I have no control over.

Solution? Make a database with all the projects, containing tempo, signature, common keys and scales. When you have several hundred projets in your folder and decide to start this process: you've got a whole lot of work ahead of you.

## Why would you need this?
There are several reasons. Maybe you're working on a project that has similar scales or keys and decide to scavage for sounds or MIDI sequences in other projects. Maybe you've received criteria from someone you're working with and need a specific mood or theme. Maybe you're lazy and forgot to label all of your clips and populate your project with relative information. Even still; maybe you need to have a curated list of your projects to send to clients or to publish online. For these and many other reasons you should have a list of your projects that you can use to easily find what you're looking for.

## Goals
1. Parse ALS project
2. Extract BPM (highest BPM and lowest BPM, including automation)
3. Extract signature
4. Automagically estimate which scales and keys are being used
5. Do this for all projects inside a folder
6. Create a spreadsheet, database, JSON or even an HTML file that contains the information
7. (Maybe) add a sync function so that the list can be maintained
8. (Maybe) setup a nodejs server to act as an "app" inside your browse
9. (Maybe) rake in the accolades from fellow Live users and get hired by Ableton
