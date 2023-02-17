#!/bin/bash
#I advise you to install the screen package (sudo apt-get install screen)

# -------------------------------------------------
# Script that starts the BOT
# -------------------------------------------------

SCREEN="Bot"  #name used for the screen

COMMAND="npx nodemon" #command to start the server (on a raspberry)
#for the command there are several options (node .), (node index.js), (npx nodemon)

# ------------------------------------------------

echo "Launching the Bot";

screen -AmdS $SCREEN $COMMAND;

exit 0
