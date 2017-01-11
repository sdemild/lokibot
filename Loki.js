var Discord = require('discord.io');
var bot = new Discord.Client({
    token: "MjY4NjI1ODExMjA3MDk0Mjcz.C1dgzg.EN1kK0alXdxl1CRDsKNr0-7sPyw",
    autorun: true
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === ">spawn") {
        bot.sendMessage({
            to: channelID,
            message: "Spawn bitches"
        });
    };
    if (message === ">dogs") {
        bot.sendMessage({
            to: channelID,
            message: "WHERE ARE THE FUCKING DOGS???"
        });
    };
    if (message === ">150") {
        bot.sendMessage({
            to: channelID,
            message: "We aren't at 150. Someone didn't press THEIR FUCKING BUTTON!!!"
        });
    };
	if (message === ">fc") {
        bot.sendMessage({
            to: channelID,
            message: "This raid is a flustercuck."
        });
    };
	if (message === ">twss") {
        bot.sendMessage({
            to: channelID,
            message: "That's what she said."
        });
    };
	if (message === ">loki") {
    	myArray = ["push your button and level your OBor you have to dress like a school boy and we give you to Merc to play priest with"
					,"alright fuck stains","summon your balls, fondle em real good","Push your fucking buttons","push your god damned buttons"
					,"get in fucking voicechat","Half the reason I tolerate people is because I can't hear them","Merc is Hokage's priest"
					,"It's always Zamu's fault","Zamu is in a pile of bodies"];
    	var rand = myArray[Math.floor(Math.random() * myArray.length)];
        bot.sendMessage({
            to: channelID,
            message: rand
        });
    }
    if (message === ">help") {
        bot.sendMessage({
            to: channelID,
            message: "Commands: spawn, dogs, 150, fc, twss, only, loki.\n" +
            "Mention Commands: button, vc, bitch, leech, insult, curse, praise, mercy."
        });
    };
	if (message === "<@268625811207094273>") {
        bot.sendMessage({
            to: channelID,
            message: "Fuck off"
        });
    };
});

bot.on('message', function(user, userID, channelID, message, event) {
	var re1 = new RegExp(">leech");
    if (/>leech/.test(message)) {
    	content = event.d.content;
    	mention = content.replace(">leech", " ");
        bot.sendMessage({
            to: channelID,
            message: mention +  " stop fucking leeching!"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
	var re1 = new RegExp(">only");
    if (/>only/.test(message)) {
    	content = event.d.content;
		percent = content.replace(">only", "");
		if ( percent ) {
			percent = parseInt(percent);
			if (percent === 150) {
					bot.sendMessage({
						to: channelID,
						message: "Wow, everyone actually pressed their fucking button."
				});
			}
			else if (percent > 150) {
				bot.sendMessage({
					to: channelID,
					message: "How the fuck did we even get that high!?!"
				});
			}
			else if (5 < percent && percent <= 150) {
				number = percent / 5;
				bot.sendMessage({
					to: channelID,
					message: "There aren't only " + number + " people in the party." 
							+ "Why the fuck aren't we at 150 yet?!?"
				});
			}
			else if (percent === 5) {
				bot.sendMessage({
					to: channelID,
					message: "Jesus fucking christ. Am I the only one that presses my god dammned button?!?"
				});
			}
		}
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
	var re1 = new RegExp(">bitch");
    if (/>bitch/.test(message)) {
    	content = event.d.content;
    	mention = content.replace(">bitch", " ");
        bot.sendMessage({
            to: channelID,
            message: mention +  " bitch"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
	var re1 = new RegExp(">mercy");
    if (/>mercy/.test(message)) {
    	content = event.d.content;
    	mention = content.replace(">mercy", " ");
        bot.sendMessage({
            to: channelID,
            message: mention +  " where's my mercy?"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
	var re1 = new RegExp(">button");
    if (/>button/.test(message)) {
    	content = event.d.content;
    	mention = content.replace(">button", " ");
        bot.sendMessage({
            to: channelID,
            message: mention +  " press your fucking button!"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
	var re1 = new RegExp(">vc");
    if (/>vc/.test(message)) {
    	content = event.d.content;
    	mention = content.replace(">vc", " ");
        bot.sendMessage({
            to: channelID,
            message: mention +  " take the dick out of your mouth and get on vc."
        });
    }
});

/*bot.on('message', function(user, userID, channelID, message, event) {
    if (message === ">leo") {
    	myArray = ['are you even in the party?','stfu you piece of shit','your mother never loved you','kys','your medals are shit'
    	,'the spawn hoes were more useful than you','faggot','my left nut is better at this game that you','no wonder your dad left you'
    	,'when are you going to kill yourself?','no one loves you','uninstall','you were a failed abortion','your life is trash just like your setup'
    	, "you're a waste of a sperm", 'your voice gives me cancer', 'i love you', "you're worse than michy's puns", "you look like a struck match"]
    	var rand = myArray[Math.floor(Math.random() * myArray.length)];
        bot.sendMessage({
            to: channelID,
            message: "<@!148688609715814400>" + ' ' + rand
        });
    }
});*/

bot.on('message', function(user, userID, channelID, message, event) {
	var re1 = new RegExp(">insult");
    if (/>insult/.test(message)) {
    	content = event.d.content;
    	mention = content.replace(">insult", " ");
    	myArray = ["take the dick out of your mouth.","your mother should've swallowed.","you look like Hokage's mom."
					,"have you been taking spelling lessons from Jamie?", "you incompetent fuckstain"
					,"I'm going to take your mother out for a nice seafood dinner, and never call her again"];
    	var rand = myArray[Math.floor(Math.random() * myArray.length)];
        bot.sendMessage({
            to: channelID,
            message: mention + ' ' + rand
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
	var re1 = new RegExp(">praise");
    if (/>praise/.test(message)) {
    	content = event.d.content;
    	mention = content.replace(">praise", " ");
    	myArray = ["I have nothing to say to you"];
    	var rand = myArray[Math.floor(Math.random() * myArray.length)];
        bot.sendMessage({
            to: channelID,
            message: mention + ' ' + rand
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
	var re1 = new RegExp(">curse");
    if (/>curse/.test(message)) {
    	content = event.d.content;
    	mention = content.replace(">curse", " ");
    	myArray = ["FUCKING COCK SHIT RUSTY BALL SACK"];
    	var rand = myArray[Math.floor(Math.random() * myArray.length)];
        bot.sendMessage({
            to: channelID,
            message: mention + ' ' + rand
        });
    }
});

