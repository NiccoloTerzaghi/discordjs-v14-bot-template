const chalk = require("chalk");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);

      if (!command) return;

      try {
        await command.execute(interaction, client);

        // LOG
        console.log(
          `\n` +
            chalk.white(`Command: `) +
            chalk.white.bold.underline(`${commandName}`) +
            chalk.white(`   |   status: `) +
            chalk.green(`successful✅`) +
            chalk.white(`   |   user: `) +
            chalk.white.underline(`${interaction.user.tag}`) +
            `.`
        );
      } catch (error) {
        // LOG
        console.log(
          `\n` +
            chalk.white(`Command: `) +
            chalk.white.bold.underline(`${commandName}`) +
            chalk.white(`   |   status:`) +
            chalk.red(` failed❌`) +
            chalk.white(`   |   user:`) +
            chalk.white.underline(`${interaction.user.tag}`) +
            `.`
        );
        console.error(error);

        await interaction.reply({
          content: `Something went wrong while executing this command...`,
          ephemeral: true,
        });
      }
    }
  },
};
