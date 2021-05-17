import {colorNoise} from './noise.js';
//Screen size calculation
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;
//Canvas implementation
let canvas = document.getElementById("draw_zone");
let canvasContext = canvas.getContext("2d");
//Draw
canvasContext.imageSmoothingEnabled = false;
colorNoise(canvasContext, screenWidth, screenHeight);