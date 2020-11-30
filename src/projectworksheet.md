# Little Black Book - Capstone

Little Black Book is a personal blog/journal that I've made showcasing unique animations and is an ode to one of my instructors who's been a huge support and a mentor to me. It'll be a medium for you to house your all of your thoughts, personal and professional.

# Project Overview

For my Capstone project I'm going to be building a blog/journal application that utilizes Next.js, D3/SVG Animations, and SCSS to create a unique, visually appealing application.

## Project Links

- [Little Black Book - Github](https://github.com/GSometimes/LBB-Frontend.git)
- [Little Black Book](https://72cef.csb.app/)

## Project Description

The application will be a collection of thoughts throughout this cohort and my thoughts looking beyond.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project.

- [Contentful](https://cdn.contentful.com/spaces/aj2z11014ie9/environments/master/content_types?access_token=E-WVKhMtADWilyoTTIu4Pv76EX0gC53hkLIDTBX7h1c)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile Mockup](https://i.imgur.com/W9C7vsC.png)
- [Tablet Mockup](https://i.imgur.com/qLa2UiL.png)
- [Desktop Mockup](https://i.imgur.com/E7eLNwz.png)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Execute unique page transitions and animations
- Render blog entries on the page
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Create backend API to add entries from multiple users
- Implement Google Authentication with permissions

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                                     Description                                     |
| --------- | :---------------------------------------------------------------------------------: |
| App       | This will be the component that houses all of the components and renders animations |
| Header    |          This will render the component routes in mobile and tablet views           |
| Entries   |                          This will render the blog entries                          |
| About     |              This will render information about me and my inspiration               |
| Contact   |                This will render contact form and social media links                 |
| Projects  |              This will render an about page showing previous projects               |
| Footer    |               This will render "Designs By Sometimes" Copyright 2020                |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component                | Priority | Estimated Time | Actual Time |
| ------------------------ | :------: | :------------: | :---------: |
| Documentation            |    H     |     5 hrs      |    5 hrs    |
| Research                 |    H     |     8 hrs      |   10 hrs    |
| Animations               |    H     |     50 hrs     |   30 hrs    |
| Setup Routing            |    H     |     4 hrs      |    4 hrs    |
| Blog Components          |    H     |     6 hrs      |    6 hrs    |
| About/Contact Components |    H     |     6 hrs      |    4 hrs    |
| Projects Component       |    H     |     6 hrs      |    2 hrs    |
| CMS Setup - Contentful   |    H     |     4 hrs      |    6 hrs    |
| Styling                  |    H     |     4 hrs      |    6 hrs    |
| Deployment               |    H     |     4 hrs      |    4 hrs    |
| Total Hours              |    H     |    97 hours    |  77 hours   |

## Additional Libraries

- ReactStrap
- SVG
- Next.js
- Framer Motion
- CSS Styled Components

## Code Snippet

This code snippet was the function used to execute the circles animation.

```
  const handleClick = (color, route) => {
    console.log("circle clicked", color);
    activeCircle.current = color;
    setTransition(!transition);
    setTimeout(() => {
      color === "black"
        ? props.history.push("/")
        : props.history.push(`/${route}`);
    }, 1000);
  };

```
