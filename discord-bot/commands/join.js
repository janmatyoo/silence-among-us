const { requireLobby } = require('./_helpers');
const User = require('../../classes/User');

module.exports = async function joinCommand(message, arguments) {
    const lobby = await requireLobby(message);

    const user = await User.load(message.author.id);
    if (arguments) await user.updateAmongUsName(arguments);
    if (!user.amongUsName) throw new Error("I don't know your in-game name yet, so you need to provide it to join.")

    await lobby.guildMemberJoin(message.member, user.amongUsName)
};