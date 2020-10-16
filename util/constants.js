const MESSAGES = {
    COMMANDS: {
        ADMIN: {
            EVAL: {
                name: "eval",
                aliases: ['e', 'ev'],
                category: 'admin',
                description: "Return a tested JavaScript code.",
                cooldown: 10,
                usage: "<code_to_test>",
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            CONFIG: {
                name: "config",
                aliases: ['conf'],
                category: 'admin',
                description: "Modify database.",
                cooldown: 10,
                usage: "<key_to_modify> <value>",
                isUserAdmin: false,
                permissions: true,
                args: true,
            },

            RELOAD: {
                name: "reload",
                aliases: ['rload', 'break', 'restart'],
                category: 'admin',
                description: "Restart the bot.",
                cooldown: 5,
                usage: "",
                isUserAdmin: false,
                permissions: true,
                args: false
            }
        },

        ECONOMY: {
            DAILY: {
                name: "daily",
                aliases: ['daypay'],
                category: 'economy',
                description: "Add money daily.",
                cooldown: 1,
                usage: "",
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            ADDBALANCE: {
                name: "addbalance",
                aliases: ['addb', 'abalance'],
                category: 'economy',
                description: "Add money to a user.",
                cooldown: 10,
                usage: "<@user> <balance>",
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            REMOVEBALANCE: {
                name: "removebalance",
                aliases: ['removeb', 'rbalance'],
                category: 'economy',
                description: "Remove money to a user.",
                cooldown: 10,
                usage: "<@user> <balance>",
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            SHOP: {
                name: "shop",
                aliases: ['buy'],
                category: 'economy',
                description: "The shop.",
                cooldown: 5,
                usage: "[<objet>]",
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            USERBALANCE: {
                name: "userbalance",
                aliases: ['ubalance', 'userb', 'money'],
                category: 'economy',
                description: "Return a user balance.",
                cooldown: 10,
                usage: "[<@user>]",
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            PAY: {
                name: "pay",
                aliases: ['give'],
                category: 'economy',
                description: "Pay a user.",
                cooldown: 10,
                usage: "<@user> <balance>",
                isUserAdmin: false,
                permissions: false,
                args: true
            },
        },

        EXPERIENCE: {
            USEREXPERIENCE: {
                name: "userexperience",
                aliases: ['userxp', 'expuser', 'uexp'],
                category: 'experience',
                description: "Return a user experience.",
                cooldown: 10,
                usage: "",
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            LEADERBOARD: {
                name: "leaderboard",
                aliases: ['classement', 'top', 'leadxp'],
                category: 'experience',
                description: "Top 10 users (by xp) in the guild.",
                cooldown: 10,
                usage: "",
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            ADDEXPERIENCE: {
                name: "addexperience",
                aliases: ['addexp', 'addxp'],
                category: 'experience',
                description: "Add experience to a user.",
                cooldown: 5,
                usage: "<@user> <exp_to_add>",
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            REMOVEEXPERIENCE: {
                name: "removeexperience",
                aliases: ['removeexp', 'removexp', 'rexp'],
                category: 'experience',
                description: "Remove experience to a user.",
                cooldown: 5,
                usage: "<@user> <exp_to_remove>",
                isUserAdmin: false,
                permissions: true,
                args: true
            }
        },

        MISC: {
            SAY: {
                name: "say",
                aliases: ['repeat', 'rep'],
                category: 'misc',
                description: "Repeat your message.",
                cooldown: 10,
                usage: "<message>",
                isUserAdmin: false,
                permissions: false,
                args: true
            },

            EIGHTBALL: {
                name: "8ball",
                aliases: ['eightball', 'ask'],
                category: 'misc',
                description: "Answer a closed-ended question.",
                cooldown: 10,
                usage: "<question>",
                isUserAdmin: false,
                permissions: false,
                args: true
            },

            POLL: {
                name: "poll",
                aliases: ['sondage'],
                category: 'misc',
                description: "Create a poll.",
                cooldown: 10,
                usage: "<question>",
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            PING: {
                name: "ping",
                aliases: ['banane', "test"],
                category: 'misc',
                description: "Return the ping of the bot and the API.",
                cooldown: 10,
                usage: "",
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            HELP: {
                name: "help",
                aliases: ['h'],
                category: 'misc',
                description: "Return the list of commands or informations about a specified one.",
                cooldown: 5,
                usage: "[<command_name>]",
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            SERVERINFO: {
                name: "serverinfo",
                aliases: ['sinfo', 'server-i'],
                category: 'misc',
                description: "Return informations about the guild.",
                cooldown: 7,
                usage: "",
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            BOTINFO: {
                name: "botinfo",
                aliases: ['binfo', 'bot-i', 'clientinfo'],
                category: 'misc',
                description: "Return informations about the client (bot).",
                cooldown: 7,
                usage: "",
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            USERINFO: {
                name: "userinfo",
                aliases: ['uinfo', 'user-i'],
                category: 'misc',
                description: "Return informations about a user.",
                cooldown: 7,
                usage: "[<@user>]",
                isUserAdmin: false,
                permissions: false,
                args: false
            },
        },

        MODERATION: {
            BAN: {
                name: "ban",
                aliases: ['b'],
                category: 'moderation',
                description: "Ban a user.",
                cooldown: 5,
                usage: "<@user> <reason>",
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            KICK: {
                name: "kick",
                aliases: ['k'],
                category: 'moderation',
                description: "Kick a user.",
                cooldown: 5,
                usage: "<@user> <reason>",
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            LOCK: {
                name: "lock",
                aliases: ['l'],
                category: 'moderation',
                description: "Lock all channels for a role.",
                cooldown: 10,
                usage: "<role_id> <TRUE/FALSE/NULL>",
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            MUTE: {
                name: "mute",
                aliases: ['m'],
                category: 'moderation',
                description: "Mute a user.",
                cooldown: 5,
                usage: "<@user> <time>",
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            PRUNE: {
                name: "prune",
                aliases: ['prune'],
                category: 'moderation',
                description: "Purge a number of messages of a user.",
                cooldown: 10,
                usage: "<@user> <messages_nmbr>",
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            PURGE: {
                name: "purge",
                aliases: ['clear', 'supp'],
                category: 'moderation',
                description: "Purge a number of messages.",
                cooldown: 10,
                usage: "<messages_nmbr>",
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            UNBAN: {
                name: "unban",
                aliases: ['ub'],
                category: 'moderation',
                description: "Unban a user.",
                cooldown: 5,
                usage: "<user_id>",
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            UNMUTE: {
                name: "unmute",
                aliases: ['um'],
                category: 'moderation',
                description: "Unmute a user.",
                cooldown: 5,
                usage: "<@user>",
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            REPORT: {
                name: "report",
                aliases: ['rport', 'signaler'],
                category: 'moderation',
                description: "Report a user.",
                cooldown: 2,
                usage: "<@user> [<message_id>] <reason>",
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            RENAMEALL: {
                name: "renameall",
                aliases: ['rnameall', 'renomeral'],
                category: 'moderation',
                description: "Rename all the users by the given nickname.",
                cooldown: 5,
                usage: "<new_nickname>",
                isUserAdmin: false,
                permissions: true,
                args: true
            },
        },

        REACTIONS: {
            EMOJI: {
                name: "emoji",
                aliases: ['emo'],
                category: 'reactions',
                description: "Return emojis on your message.",
                cooldown: 0.1,
                usage: "",
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        },

        RPG: {
            SETUP: {
                name: "setup",
                aliases: ['set'],
                category: 'rpg',
                description: "Create your character.",
                cooldown: 5,
                usage: "",
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            PROFILE: {
                name: "profile",
                aliases: ['profil'],
                category: 'rpg',
                description: "Return a user profile.",
                cooldown: 1,
                usage: "",
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        }
    }
}

exports.MESSAGES = MESSAGES;