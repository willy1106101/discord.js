const { REST, Routes } = require('discord.js');
require('./index.js');
const commands = [
    {
      name: 'pong',
      description: 'Replies with Pong!',
    },
    {
      name: 'website',
      description: '我的網站網址!',
    },
    {
      name: 'hi',
      description: '跟您說hi!',
    },
    {
        name: 'a',
        description: '給予身分組!',
    },
    {
        name: 'r',
        description: '移除身分組!',
    },
  ];

const rest = new REST({ version: '10' }).setToken('OTg1NTAxNjg4NzU0NDcwOTUy.GUfm2b.x7q5VqnDUQUsamHKdOGunzITeodK4rorG6MRjA');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('985501688754470952'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();