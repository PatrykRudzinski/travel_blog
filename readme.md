# Travel Blog
> Work in progress... 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [API Documentation](APIDocumentation)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Educational purpose application. Simple travel blog with content manage system.


## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* React.js
* Next.js
* Node.js
* Express.js
* MongoDB
* Mongoose
* Styled Components

## Setup
Clone repo and run
```
npm run build
npm run dev 
```

## API Documentation
`api/article` -> all articles _done_

`api/article/id` -> chosen article content

`api/article/last=x` -> last x articles

`api/article/tags=[...]` -> articles with tags

`api/article/author=x(id)` -> articles written by x

-------------------

`api/blogger` -> all bloggers

`api/blogger/id` -> blogger info

## Features
List of features ready and TODOs for future development
* Primitive CRUD in MongoDB

To-do list:
* Configure endpoints
* Fetching between collections
* Filter requests

## Status
Project is: _in progress_

## Inspiration
I like travel and code, so...

## Contact
[patrykrudzinski@gmail.com](patrykrudzinski@gmail.com)
