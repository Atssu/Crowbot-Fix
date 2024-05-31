const {
    readdirSync
} = require('fs');

const login = (client) => {
    const Discord = require("discord.js")
    const logs = require('discord-logs');
    logs(client)
    const disbut = require('discord-buttons');
    disbut(client);
    const tempo = require("./gestion/tempo.js");
    tempo(client)

    client.config = require("../config.json")
    client.cooldown = new Array();
    client.interaction = {}
    client.guildInvites = new Map();
    client.queue = new Map();
    client.commands = new Discord.Collection()
    client.aliases = new Discord.Collection()
    client.snipes = new Map()
    client.inter = new Array()

    client.login(MTIzOTk3MjgzNzQxOTEyNjc4NA.GiMfTx.X8uc-2rn1STGd-PGqcgQj2pYqmJUnGjlQMinz0);
}

module.exports = {
    login
}
