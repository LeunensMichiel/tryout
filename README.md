# Technical tryout

First of all, thank you for your interest in Codeer. We must be doing something good if you want to work with us ;)

Second, this is a small test for us to get an understanding of your technical level. **Don't worry**, we are not looking for a senior developer.
We are looking for people that are eager to learn, not afraid of a challenge and enjoy bringing a smile to our end-users faces.

We would like for you to try to complete below tasks as you see fit. To limit losing too much time, try to limit yourself to a maximum of 4 hours of work.

# Introduction

For this test, we will be build a fullstack application to manage our very own PokeDex! For simplicity sake we won't be using a database but a json collection is available for in memory use.

# Setup

This project consists of a **frontend** and a **server** folder. The frontend is built using React and a UI component library Antd.
For the server we use NestJs, a Node.js framework built on express.
If you feel more comfortable with other JS/TS libraries or frameworks, feel free to switch it up.
In each folder you will find another README.md which tells you how to get started.

PS:

- Don't forget to install your packages
- Frontend is accessible on http://localhost:3000
- Server on http://localhost:4000
  - Swagger docs are accessible on http://localhost:4000/docs

# Tasks

- A list endpoint is provided to get you started, the first task would be to get the list of Pokemons and visualize it on the pokemon.list.tsx page.
  - Try to fetch the data first
  - Once you have the data, try to add the antd table. Display the:
    - id
    - name
    - type (this is an array of strings. Try to display it using [Tags](https://ant.design/components/tag/))

Here are some links that could help:
[antd](https://ant.design/components/table)
[axios](https://github.com/axios/axios)

- Once we have the table, make it possible to click a row and navigate to the pokemon.detail page.
  On this page the detail information of a Pokemon should get fetch and displayed. This means a new endpoint on the server will have to be created that accepts an id.
  Since we don't have a database, the Pokemons are loaded form the JSON in an array. I suggest to look for the correct Pokemon in the array.
  - Create a new findOne endpoint which accepts an id
  - Search for the corresponding Pokemon in the array and return it

## Extra:

- If you really want to show off, you could make it possible to create our own Pokemon by providing a form.
- Make it possible to delete Pokemons
- Show of your CSS skills by making it a beauty
