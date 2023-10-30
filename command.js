const { REST, Routes } = require("discord.js");
const commands = [{ name: "ping", description: "replies with pong!" }];
const rest= new REST({ version:'10'}).setToken("<token>");
(async()=>{
    try{
        console.log("started refreshing application (/) commands.");
        await rest.put(Routes.applicationCommands('<client-id>'), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();