# Movember Donation Scraper

This is a basic Node JS scraper to take the total donation amount for a Movember campaign and place it in a text file. Primarily made for use as a text input for streaming software like OBS.

There is a Movember campaign on [Tiltify](https://tiltify.com/movember) which provides better functionality for streaming, but this doesn't integrate with your "Mospace" campaign on the Movember website. So if you're like me, this is a way to integrate with that better.

## Getting Started

Please follow these steps to try the app out and feel free to send feedback.

## Prerequisites

* [NodeJS](https://nodejs.org)
* (optional) A decent text editor such as Notepad++ or Atom

## Installation

### Download the App

[movember-donation-scraper.zip](https://github.com/BeatnikAU/movember-donation-scraper/archive/master.zip)

Download the above zip file and extract.

### Update the Config File

All customisation can be made in the file `config.json`.

1. Paste your Mospace page in the URL space (this should look like https://au.movember.com/mospace/12345678)
2. Add any text you want to display in the text file before the donation amount in the Prefix space (eg. "Amount raised ")
3. Add any text you want to display in the text file after the donation amount in the Suffix space (eg. " towards $100 target")
4. Set your refresh interval in minutes (default is 5 minutes)
5. Save and close the file

### Install Dependencies

#### Automated (Windows)

* Double click the included `install.bat`

#### Manual

* Open command prompt or terminal
* Change directory to the folder you extracted the zip file to
* Run the following command to install all dependencies
 `npm install`

### Run App

#### Automated (Windows)

* Double click the included `start.bat` file (or create a shortcut to it elsewhere)

#### Manual

* Change directory to the folder you extracted the zip file to
* Run the following command to start the app
 `node app.js`
* This should display your amount raised so far and generate a text file in the directory you've run the app from called "donated.txt"
