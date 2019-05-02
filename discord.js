require('dotenv').config();
const Discord = require('discord.js');

const CHANNEL_ID = '385206081594327042';
const Status = {
    NOT_CONNECTED: 'Not connected',
    RUNNING: 'Running',
    ERROR: 'Error'
};

class DiscordClient {
    constructor() {
        this.client = new Discord.Client();
        this.status = Status.NOT_CONNECTED;
    }

    // login and connect to discord server
    init(onMessage, onReady) {
        this.client.on('ready', () => {
            this.status = Status.RUNNING;
            this.sendMessage('Client connected');
            onReady();
        });
        
        this.client.on('error', (error) => {
            this.status = Status.ERROR;
            this.sendMessage(`Client error ${error}`);
        });
        
        this.client.on('disconnect', () => {
            this.status = Status.NOT_CONNECTED;
            this.sendMessage('Client disconnected');
        });
        
        this.client.on('message', onMessage);
        this.client.login(process.env.DISCORD_BOT_TOKEN);
    }

    // send message to Discord channel
    sendMessage(message) {
        if (this.status === Status.NOT_CONNECTED) {
            return;
        }

        const channel = this.client.channels.find(c => c.id === Disc.CHANNEL_ID);
        if (! channel) {
            console.log(`Couldn't find channel with id ${CHANNEL_ID}`);
            return;
        }

        channel.send(message);
    }

    setStatus(status) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }
}

const discordClient = new DiscordClient();
module.exports = discordClient;