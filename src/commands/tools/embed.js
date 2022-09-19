const roomID = ""; // RoomID in which you want to send the embed

const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("embed").setDescription("Send embed"),
  async execute(interaction, client) {
    const newMessage = ``;

    const embed = new EmbedBuilder().setTitle(newMessage).setColor(0xff0000);

    client.channels.cache.get(roomID).send({
      embeds: [embed],
    });
  },
};

//! Embed example

// const embed = new EmbedBuilder()
//   .setTitle("Belandi")
//   .setDescription("")
//   .addFields([
//     {
//       name: "",
//       value: newMessage,
//     },
//   ])
//   .setColor(0x18e1ee)
//   .setThumbnail(client.user.displayAvatarURL())
//   .setImage(
//     ""
//   )
//   .setTimestamp()
//   .setFooter({
//     iconURL: client.user.displayAvatarURL(),
//     text: client.user.tag,
//   });
