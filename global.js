module.exports = {
    Config: {
        URL: 'https://wahlinfastigheter.se/lediga-objekt/lagenhet/',
        INTERVAL_IN_MS: 300000 // every five minutes
    },
    
    // Naming this Disc instead of Discord to avoid name collisions with discord.js
    Disc: {
        CHANNEL_ID: '385206081594327042'
    },
    
    Message: {
        READY: 'I will now look for newly added apartments at Wåhlins Fastigheter. Beep Boop.',
    },
    
    Status: {
        IDLE: 'Idle',
        RUNNING: 'Running',
        ERROR: 'Error'
    },

    Wahlins: {
        NO_NEW_APARTMENTS: 'Just nu har vi tyvärr inga lediga lägenheter att förmedla här.'
    },
};