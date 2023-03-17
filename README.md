# p5js-esbuild-typescript

A template designed for developing a p5js project using esbuild and typescript (or javascript).

## Structure

    o (root directory)
    |
    |- src (source code files)
    |- public (directory serving project)
    |- public/dist (esbuild compiled source and map)


## Important Files

**sketch.ts**

In a typical p5js project, this is where your setup and draw functions are
located.

*One thing to remember: all p5js functions called inside these functions
will need to be prefixed with "this." See the note example below or refer
to the example sketch.ts file in the project*

    function draw() {
      this.createCanvas(1000, 1000)
    }


## Getting Started

This project expects a version of node and npm are installed on a POSIX
environment. The TL/DR of this is if you are on a Mac or Linux, your all set. 
If you are using a Windows environment, life is a little harder. I do not
cover the Windows setup. If you are interested in using it, reach out and we
can collaborate on how it can be added.

To account for different versions of node, this project uses [Node Version
Manager (nvm)](https://github.com/nvm-sh/nvm#installing-and-updating) to
target a specific version of node. The version of node installed and tested
is currently 16.19.1.

Alright, let's get started!


**Install modules**

    npm install

This installs all packages required for the project. At present, there are
two dependencies, esbuild and p5. Additional dependencies may be add later,
but for now this will do.


## NPM Scripts

**dev**

    npm run dev

This command compiles the typescript related files and starts a web server
to view the project. Plan to leave this command running when you are editing
your source code. The process serves the project to your web browser and
watches for changes in your source code. If changes are found, esbuild will
automatically recompile the source code.

*Note: changes to the source code still require a refresh in the browser*

**build**

    npm run build

This command compiles and minifies the typescript source code. The output
file is placed into [public/dist](http://localhost:8080/dist). Keep in mind
the public/dist link requires the environment to have been already started
in dev mode.


## Keyboard Interaction

Included in the project are commands that can be taken on a canvas.

Below you will find a description of the commands and movements available.
More can be added within the structure if you desire.


### Commands

These commands help with anything from drawing an x/y axis over the canvas,
drawing a border over the canvas, changing the dimensions of the canvas,
exporting an image of the canvas, or even exporting the configuration of the
specific canvas.

| Key       | Description                                         |
| --------- | --------------------------------------------------- |
| *`` ` ``* | Toggle debugging output in console                  |
| *a*       | Toggle x / y debugging axis                         |
| *b*       | Toggle a border around the canvas                   |
| *c*       | Print the unique seed to the console                |
| *n*       | Generate new seed and redraw canvas                 |
| *p*       | Export canvas at minimum dimensions (1000 / 1000)   |
| *P*       | Export canvas at current dimensions                 |
| *r*       | Reset canvas, running setup and draw                |
| *s*       | Export configuration of current canvas              |
| *ESCAPE*  | Cancel movement multiplier                          |


### Movements

Movements are a combination of a number and a command. One movement that
is implemented is changing the dimensions of the canvas.

| Key      | Description                                    | Example | Min  | Max  |
| -------- | ---------------------------------------------- | ------- | ---- | ---- |
| N + *d*  | Change dimensions (w / h x 1000 increments)    | 4d      | 1000 | 8000 |

