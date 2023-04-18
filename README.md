# Javascript Random Password Generator 

## Description

This project utilizes JavaScript in order to create a unique and randomized password based on the user's input on length of password and specific character sets to use in generating the password. The password generator requires at least one set of characters to use in order to create the password (lowercase letters, uppercase letters, numbers, or OWASP Foundation recommended special characters) and that the password be between 8 and 128 characters in length.   

## Usage

The site is currently deployed for review on [github pages](#). 

![Password Generator Screenshot](https://user-images.githubusercontent.com/123843930/232893495-8b6b7904-5824-41fe-a78a-5732a3e45c5d.gif)

1. To generate a random password with specified character sets, first click `Generate Password` on the `index.html`.
2. You will be prompted to select a length for you password. The lengtho of the password must be between 8 and 128 characters in length. 
3. Next you will be prompted if you wish to use lowercase letters to create the password. `Ok` will use lowercase letters, `Cancel` will not. 
4. Next you will be prompted if you wish to use uppercase letters to create the password. `Ok` will use uppercase letters, `Cancel` will not.
5. Next you will be prompted if you wish to use numbers to create the password. `Ok` will use numbers, `Cancel` will not. 
6. Next you will be prompted if you wish to use a set of special characters as specified by the OWASP Foundation to create the password. `Ok` will use special characters, `Cancel` will not.
7. You must choose at least one set of these characters to use to create the password. 
8. The random password will be generated in the text area of the `index.html` and can be copied and used as needed. 


## Credits

The following tutorials were used for refrence:
- [Random Password Generator using Javascript](https://dev.to/code_mystery/random-password-generator-using-javascript-6a)
- [OWASP password special characters](https://github.com/OWASP/www-community/blob/master/pages/password-special-characters.md)
- [How to Generate a Random Password using JavaScript?](https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/)

## License

MIT License

Copyright (c) [2023] [Travis Hoffman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
