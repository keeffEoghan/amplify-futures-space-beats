# Amplify Futures SpaceBeats

## AI Music Co-Creation

Prototype exploring collaborative co-creation of music mediated by AI with inputs from artist and audience.

## An Amplify Futures Prototype Drop

A sonic spatial AI - allowing artists and fans to co-create music, using movement as a prompt.

Our prototype allows a musician to place melodies in space using GPS, as fans move between points a new track is generated based on their co-ordinates. Different guests can play various musical roles and collaborate in new ways - however, this newly generated music all comes from the artist's vision, but is mediated by AI.

[Explore the Prototype Drops: open-source experiments](https://www.weareamplify.com/prototypes).

## How to use this prototype

1. Install tools:
    1. Install [`node`](https://nodejs.org/) at a supported version (this project was built with `v22.x`).
    1. Download the code using [`git`](https://git-scm.com/) or by downloading the latest code archive from [the prototype repository](https://github.com/keeffEoghan/amplify-futures-space-beats).
1. Open a terminal console and navigate to the location of the code on your filesystem.
1. Run `npm i` to download and install all the dependencies.
1. Run the code:
    1. To run the code in production mode, run `npm start`.
    1. To run the code in development mode run, `npm run dev`, which will auto-update whenever you change the code.
1. Open the prototype on your device:
    1. Open an internet browser to `https://127.0.0.1:8080` (for production mode) `https://127.0.0.1:1234` (for development mode) to play with the running prototype.
    1. Join with multiple devices with good GPS support for best results.
    1. If you're using a separate device to run the code than to open the prototype, you'll need to share the local server address so it's accessible from other devices - you can try a tool like [`ngrok`](https://ngrok.com/) or [`localtunnel`](https://localtunnel.me/).
1. Play with the prototype:
    1. Press `join` to start, allow the requested permissions, and turn up your volume.
    1. The pulsating dot represents your current device location in the space between the four corner-points (`1`, `2`, `3`, `4`).
    1. With your GPS-enabled devices, move to a location, open any corner-point, select a human-made `preset` or an AI-generated `random` musical score, and `save` that score at your current location to the corner-point.
    1. Repeat step `3` at different locations each time, for `2` or `4` of the corner-points.
    1. Move around the space with your devices to hear the AI blend between the human-or-AI-made scores at each corner-point.
    1. Change the `role` and `instrument` to experiment with different sounds, and change `splits` for more or less blending divisions between the corner-points.
    1. Try it out with multiple devices and people at once, to experiment with the AI mediating composition of music between the lead artists composing the main scores and locations, and the wandering audience exploring the space of scores between the corner-points.
1. When you're done:
    1. End any running commands with `ctrl+c`.
    1. End any running background server with `npm run server:dev:stop`.
