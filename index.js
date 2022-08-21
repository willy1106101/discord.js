const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('./command.js');
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });


client.on('interactionCreate', async (interaction,user) => {
  if (!interaction.isChatInputCommand()) return;
  if(!interaction.guild) return;
  if (interaction.commandName === 'pong') {
    await interaction.reply('Pong!');
  }
  if (interaction.commandName === 'hi') {
    await interaction.reply('HI');
  }
  if (interaction.commandName === 'website') {
    await interaction.reply("網址:"+"https://willyhsu.rf.gd");
  }
  if (interaction.commandName === 'a') {
    const cat = interaction.guild.roles.cache.find(role => role.name === "cat");
    await interaction.reply(`${interaction.user.tag}`);
    await interaction.guild.members.cache.get(`${interaction.user.id}`).roles.add(cat);
  }
  if (interaction.commandName === 'r') {
    const cat = interaction.guild.roles.cache.find(role => role.name === "cat");
    await interaction.reply(`${interaction.user.tag}`);
    await interaction.guild.members.cache.get(`${interaction.user.id}`).roles.remove(cat);
  }
});

client.login(token);