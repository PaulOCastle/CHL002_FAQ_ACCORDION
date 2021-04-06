# Frontend Mentor - FAQ Accordion Card
# By Pau Ferrer

![Design preview for the FAQ Accordion Card coding challenge](./design/desktop-preview.jpg)

I wanted to create a FAQ card that would be versatile and reusable, this is why I used SASS and Webpack to compile all my code.

I am here adding my own approach so anybody that wanted to give me feedback have as much information as possible. As code is only one part od coding!!

## Project structure

The structure of the project is simple, there is a "src" folder that contains all the folders and files of the project, and a "dist" folder that contains the end product of the project.

One thing I didn't manage to achieve here is to get read of the creation of the folder "images" on compilation. I am using Webpack, so as there is a background image used in the project, Webpack requires to manage the assets, and creates a new folder. Please, I'll be more that happy to get some feedback on my "webpack.config.js" file.

## SASS folder

I like to divide my "sass" folders in meaningful folders and one main file named "styles.scss". These folders contain the files that create the styles once compiled, and all of these files are imported into the main file.

The folders are:

* helpers: containing the mixins and variables. I also include here the functions if any, but not for this project.
* globals: containing the resets and commons of the project.
* components: containing all the separate files per component. In this challenge I got identified 3 different potential components
  * _cards.scss: containing the styles for the card
  * _accordions.scss: containing the styles for the accordion
  * _collapsibles.scss: containing the styles for the collapsible elements. I thought it could be much more versitail if I divided the accordion in 2, accordion and collapsibles, so in a real life project I could reuse this collapsibles styles in other elements (e.g. dropdown)

## JS folder

Alike in the "sass" folder, I like having separate folders and import these into the main file, this time named "scripts.js".

I am not very good on JS, so I am a little lost when creating meaningful folders, so I created a custom folder with my only JS file, "_collapsibles.js". Please, I would be very happy to receive some feedback on this particular part of the project.

I tried to achieve good transitions on the expanding and collapsing events, but also the possibility to close the opened element on a second click. I am looking forward to getting some feedback and to learn what I am missing or have wrong in my code.

## Conclusion

I really enjoyed with this challenge and learned so much!! Really recommend connecting with Frontend Mentor's community and to try their challenges!!

Thanks for all your help and feedback!!

Pau Ferrer