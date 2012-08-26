// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "37a5effc-51df-4a48-991b-2dd43ff2fab4";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "0.1";

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {   
    bedroom: new undum.SimpleSituation(
        "<h1>The Bedroom, or So It Begins....</h1>\
         <p>It is a dark and stormy knight. Wait a minute, that's not right.\
         Well, it is, indeed a dark night, and you are lying in your bedroom,\
         thinking about tomorrow. Tomorrow is your Final, you see? And if you fail it, \
         then it is Goodbye, Engineering, and Hello, Burger Flipping. You ponder over \
         your life. It seems too mundane. Too simple for your comfort. \
         You are lost in your thoughts when you hear a small crash in the lounge outside. \
         It is <a = href='./check-time'>Quite Late</a></p>\
         <p class='transient'>Maybe you should go to the <a href='lounge'> Investigate the noise.</a></p>",
         {
            actions: {
                'check-time': "<p>You look at your watch. Damn it. It's 4 am already?</p>"
            }
        }
    ),
    
    lounge: new undum.SimpleSituation(
        "<p>You Decide to get up and check where this noise is coming from. \
        The lounge is neat and tidy. You see nothing that might have crashed. \
        Before you you go back to your room, a small humming noise starts coming \
        from your <a href='dining-room'>dining room.</a></p>\
        \
        <p class='transient'> You should definitely investigate the <a href='dining-room'>dining room.</a> \
        Who knows what might have broken into your home.</p>"
    ),
    
    "dining-room": new undum.SimpleSituation(
        "<p>As you move towards the dining room, the humming turns into a hiss. \
        As if a Vacuum Cleaner has been turned on. And suddently, it seems that your \
        whole room may be moving with you. In the fraction of a second, before you can \
        even think what has happened, everything around you seems to converge and be \
        sucked off into the dining room. And then the dining room itself disappears into \
        a small rift.</p>\
        \
        <p><a href='rift-engine-room' class='once'>You feel like you're falling through a hole, weightless...</a> </p>"
    ),
    
    "rift-engine-room": new undum.SimpleSituation(
        "<h1>The Rift</h1>\
        <p>While falling through the rift, your whole life flashes in front of your eyes. Is this the end? Your answer comes when you hit solid ground. It is not. </p>\
        <h1>The Rift Engine Room</h1>\
        <p>You are in some sort of huge room, which is littered with the most random collection of stuff you have ever seen. You see an <a href='./check-machine' class='once'>old and busted, complicated looking machine</a>. A <a href='./check-sign' class='once'>sign</a> is next to the machine.</p>",
        
        {
            actions: {
                "check-sign": "<p><strong>Rift Engine Room</strong></p>\
                			   <p>Please wear hard hats to avoid falling debris.</p>",
                "check-machine": "<p>The machine looks complicated. And it also looks silent. There are wires going out of it.\
                				  It seems this machine was recently in use. It may have something to do with the rift that \
                				  brought you here. There are some <a href='./examine-wires'> wires</a> going out of it.</p>",
                "examine-wires": "<p>There are two pairs of wires here. The large, white, wires seem to be connecteing the \
                				  different components of the machine. The smaller, <a href='rift-generator-room'>red wires</a> seem to be\ 								  leading out of the room.</p>",
            }
        }
    ),
    
    "rift-generator-room": new undum.SimpleSituation(
        "<h1>The Rift Generator.</h1>\
        <p>You follow the red wires to the edge of the room. The wires seem to disappear into the wall.\
        You notice a button on the wall.</p>\
        <p class='transient'> That button sure looks tempting. Maybe you should <a href='./push-button'>push it.</a></p>",
        {
            actions: {
                "push-button": "<p>You push the button. You here a grumbling sound and the walls in front of you split open.\
                				You are staring into a large control room of sorts. There is a <a href='./examine-generator'>large generator</a>\
                				. There is also a <a href='./examine-socket'>socket</a> nearby that the red wires seem to be leading to.</p>",
                "examine-generator": "<p>This generator looks like it could use some dusting. It looks really old and beat up.\
                					  The generator is running. But it seems that it is not supplying energy to the Rift Engine outside.\
                					  There is a plug coming from the generator.</p>",
                "examine-socket": "<p>The socket is quite huge. It looks like it is connected to the Rift Engine outside through the\
                				   red wires. \
                				   <a href='./plug-in-generator' class=transient> Maybe, if it were to be supplied with power, the rift generator would turn on.</a></p>",
                "plug-in-generator":  "<p>You carefully plug the generator into the socket. A rumbling noise comes from the \
                					   room outside.</p>\
                					   <p>An circle seems to have materialized in the center of the room. The circle seems to be emanating\
                					   a column of intense white light. <a href='central-portal'>The circle of light seems to be pulling \
                					   you towards it.</a></p>"
            }
        }
    ),
    
    "central-portal": new undum.SimpleSituation(
        "<h1>The Circle of Light</h1>\
        <p>You keep moving towards the circle of light, as if your body is not in your control.\
        As soon as you reach the circle, you feel your body jerk and then lift off the ground. In front of you, you see ten different doorways. A voice in your head whispers \"You are the chosen one. You shall bring light or darkness to the worlds of Mool.\"</p>\
        <p>The whisper fades into nothingness, leaving more questions than answers. But one thing is clear. You have to go into one of the ten doorways.</p>\
        <p class='transient'> The worlds await...</p>\
        <ul class='options'>\
        	<li><a href='agi-start'>Artificial General Intelligence</a></li>\
        	<li><a href='jupiter-brains-start'>Jupiter Brains</a></li>\
        	<li><a href='metaphysics-start'>Metaphysics</a></li>\
        	<li><a href='nanotechnology-start'>Nanotechnology</a></li>\
        	<li><a href='time-lords-start'>Time Lords</a></li>\
        	<li><a href='distributed-computing-start'>Distributed Computing</a></li>\
        	<li><a href='context-free-languages-start'>Context-Free Languages</a></li>\
        	<li><a href='biological-evolution-start'>Biological Evolution</a></li>\
        </ul>"
    ),
    
    'agi-start': new undum.SimpleSituation(
        "<h1>Artificial General Intellignece</h1>\
        <p>From here it is just a <a href='central-portal'>short step</a> to the\
        final bits of content.</p>",
        {
            enter: function(character, system, from) {
                system.setQuality("agi-item", 1);
                system.setCharacterText(
                    "<p>You are in the presence of an Artificial Intelligence</p>"
                );
            }
        }
    ),
    
    'jupiter-brains-start': new undum.SimpleSituation(
        "<h1>Jupiter Brains</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You are in the realm of Jupiter Brains.</p>"
                );
            }
        }
    ),
    
    'metaphysics-start': new undum.SimpleSituation(
        "<h1>Metaphysics</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You are surrounded by knowledge and ignorance.</p>"
                );
            }
        }
    ),
    
    'nanotechnology-start': new undum.SimpleSituation(
        "<h1>Nanotechnology</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You are in a factory of some sort.</p>"
                );
            }
        }
    ),
    
    'string-theory-start': new undum.SimpleSituation(
        "<h1>String Theory</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>It seems you are back in the university. Well, <em>A</em> University.</p>"
                );
            }
        }
    ),
    
    'time-lords-start': new undum.SimpleSituation(
        "<h1>Time Lords</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You are in Gallifrey.</p>"
                );
            }
        }
    ),
    
    'mars-terraforming-start': new undum.SimpleSituation(
        "<h1>Mars</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>This is a Mars Colony, and it sure looks comfortable.</p>"
                );
            }
        }
    ),
    
    'context-free-languages-start': new undum.SimpleSituation(
        "<h1>Context-Free Languages</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>The Headquarters of LLG are better than you have imagined. Of course, this is a parallel reality.</p>"
                );
            }
        }
    ),
    

    'biological-evolution-start': new undum.SimpleSituation(
        "<h1>Biological Evolution</h1>\
        <p class='once'>You move through the door into another world.\
        Curiously, you feel lightheaded and dizzy. As if, you are everywhere.\
        You are looking over a wold that is lush green. You see a few peaceful <a href='./examine-herbivores'>herbivores</a>\
        grazing in the distance.</p>\
        <p class='once'>Before you know it, a pack of carnivores descends onto the herbivores, tearing them apart and devouring them without mercy. Once they are satiated, the return to their lair.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You feel like god, overseeing a world and messing with biology.</p>"
                );
            },
            
            actions: {
            	"examine-herbivores": "<p>The herbivores look peaceful and peace-loving. They seem to be a bit slow in speed.</p>\
            		<p class='transient'>You should now take a look at the <a href='./examine-carnivores'>carnivores</a>.</p>",

            	"examine-carnivores": "<p>The carnivores look violent and violence-loving. They seem to be a bit fast in speed.</p>\
            						   <p><a href='fate-of-evolution'>Having examined both species, you are ready to make your decision about their fate.</a></p>"
            				
           }
      }
    ),
    
    "fate-of-evolution": new undum.SimpleSituation(
        "<p>You are now face with a decision.\
        You can either help the prey, become better evaders, Or you can help the predators, become better hunters.\
        Make your decision carefully.</p>\
        <p>Before you know it, a pack of carnivores descends onto the herbivores, tearing them apart and devouring them without mercy. Once they are satiated, the return to their lair.</p>\
        <p class='transient'> The world awaits your decision...</p>\
        <ul class='options'>\
        	<li><a href='./enhance-herbivores'> Give power to the Herbivores</a></li>\
        	<li><a href='./enhance-carnivores'> Give power to the Carnivores</a></li>\
        </ul>",
        {
            actions: {
            	'enhance-herbivores': function(character, system, action) {
                    system.write("<p>You kill of the weaker, slower herbivores, while strengthening the stronger, faster ones.</p>\
                    <p>You gain the <strong>Ability to rewrite Own Genetics</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='string-theory-start'>String Theory</a></li>\
                    <li><a href='mars-terraforming-start'>Mars</a></li>\
                    </ul>");
                    system.setQuality("biological-evolution-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'enhance-carnivores': function(character, system, action) {
                    system.write("<p>You kill of the weaker, less hungry carniivores, while strengthening the stronger, faster ones.</p>\
                    <p>You gain the <strong>Ability to rewrite Own Genetics</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='string-theory-start'>String Theory</a></li>\
                    <li><a href='mars-terraforming-start'>Mars</a></li>\
                    </ul>");
                    system.setQuality("biological-evolution-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                },
            				
            	}
          }
    ), 
    
    'distributed-computing-start': new undum.SimpleSituation(
        "<h1>Distributed Computing</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>This seems to be a grid computer of some sort. You are <strong><em>inside</em></strong> a grid computer.</p>"
                );
            }
        }
    ),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "bedroom";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
	goodness: new undum.IntegerQuality(
		"Morality", {priority:"0001", group:'stats'}
	),
	progress: new undum.IntegerQuality(
		"Progress", {priority:"0002", group:'stats'}
	),
	"agi-item": new undum.OnOffQuality(
		"agi", {priority:"0001", group:"evolution", onDisplay:"&#10003;"}
	),
	"jupiter-brains-item": new undum.OnOffQuality(
		"jupiter brain", {priority:"0002", group:"evolution", onDisplay:"&#10003;"}
	),
	"metaphysics-item": new undum.OnOffQuality(
		"Metaphysics", {priority:"0003", group:"evolution", onDisplay:"&#10003;"}
	),
	"nanotechnology-item": new undum.OnOffQuality(
		"Nanotechnology", {priority:"0004", group:"evolution", onDisplay:"&#10003;"}
	),
	"string-theory-item": new undum.OnOffQuality(
		"String Theory", {priority:"0005", group:"evolution", onDisplay:"&#10003;"}
	),
	"time-lords-item": new undum.OnOffQuality(
		"Time Lords", {priority:"0006", group:"evolution", onDisplay:"&#10003;"}
	),
	"distributed-computing-item": new undum.OnOffQuality(
		"Distributed Computing", {priority:"0007", group:"evolution", onDisplay:"&#10003;"}
	),
	"mars-terraforming-item": new undum.OnOffQuality(
		"Mars Terraforming", {priority:"0008", group:"evolution", onDisplay:"&#10003;"}
	),
	"context-free-language-item": new undum.OnOffQuality(
		"Context Free Language", {priority:"0009", group:"evolution", onDisplay:"&#10003;"}
	),
	"biological-evolution-item": new undum.OnOffQuality(
		"Biological Evolution", {priority:"0010", group:"evolution", onDisplay:"&#10003;"}
	)

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
	stats: new undum.QualityGroup(null, {priority:"0001"}),
	evolution: new undum.QualityGroup("Evolution", {priority:"0002"}),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setCharacterText("<p>You are at home, trying to sleep.</p>");
    character.qualities.goodness = 0;
    character.qualities.progress = 0;
};
