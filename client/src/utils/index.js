import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

// The selected code is a function that generates a random prompt from a list of prompts. 
//The function uses the Math.random() method to generate a random number between 0 and 1 (inclusive), and then uses Math.floor() to round the number down to the nearest integer. It then uses the random integer as an index into the surpriseMePrompts array, which contains a list of prompts.
// The function checks if the randomly selected prompt is the same as the given prompt (by using the === operator). If it is, the function is called recursively (by calling itself with the same prompt) until it finds a different prompt.
// The function also includes an async function called downloadImage(), which saves a given photo to the user's computer using the FileSaver library. The function uses the saveAs() method to save the photo with a filename that includes the given _id.