# Building a Headless WordPress Site with Gatsby
This is the repository for the LinkedIn Learning course Building a Headless WordPress Site with Gatsby. The full course is available from [LinkedIn Learning][lil-course-url].

![Building a Headless WordPress Site with Gatsby][lil-thumbnail-url] 

View Morten's LinkedIn Newsletter

WordPress, the powerful publishing platform, powers much of the web. Gatsby allows developers to build performance-focused, modern websites and applications with React. In this course, discover how to combine this dynamic duo to get a web publishing powerhouse. Join instructor Morten Rand-Hendriksen as he explains how to use WordPress to populate a Gatsby site. He shows you the plugins you need to use WordPress data in a Gatsby site, then demonstrates how to connect WordPress and Gatsby. He covers how to create a variety of custom menus, including a nested menu and a footer menu. He demonstrates how Gatsby can be configured to generate new pages based on WordPress posts. Morten goes over how you can query categories and tags, as well as how to generate index pages for each category of the WordPress site. He walks you through how to access custom data through GraphQL and use it in your Gatsby site, then concludes by explaining how to deal with WordPress blocks when working in Gatsby.

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing

1. To use these exercise files, you must have the following installed:
   - [Node.js](https://nodejs.org/en/)
   - [Gatsby CLI](https://www.gatsbyjs.com/docs/quick-start/)
2. To pull data from a WordPress site, you need a WordPress site (preferably a local WordPress development environment using [local](https://localwp.com/) or similar) with the following installed:
   - [WordPress Theme Unit Test](https://codex.wordpress.org/Theme_Unit_Test) data or other prototype content.
   - [WPGatsby](https://wordpress.org/plugins/wp-gatsby/) plugin
   - [WPGraphQL](https://wordpress.org/plugins/wp-graphql/)
3. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
4. In terminal, while on the `main` branch, navigate to the project folder and run the command `npm install`.
5. Configure the `url` option for `gatsby-source-wordpress` in `./gatsby-config.js`.
6. To start developing, run the command `gatsby develop`.


### Instructor

Morten Rand-Hendriksen 
                            
Developer and Senior Staff Instructor

                            

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/morten-rand-hendriksen).

[lil-course-url]: https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541
[lil-thumbnail-url]: https://cdn.lynda.com/course/3022691/3022691-1647886026320-16x9.jpg


