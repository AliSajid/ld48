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
        <p>It is a dark and stormy knight. Wait a minute, that's not right. Well, it is, indeed a dark night, and you are lying in your bedroom, thinking about tomorrow. Tomorrow is your Final, you see? And if you fail it, then it is Goodbye, Engineering, and Hello, Burger Flipping. You ponder over your life. It seems too mundane. Too simple for your comfort. You are lost in your thoughts when you hear a small crash in the lounge outside. It is <a = href='./check-time'>Quite Late</a></p>\
        <p>Maybe you should <a href='lounge'> Investigate the noise.</a></p>"
        
		actions: {
                'check-time': "<p>You look at your watch. Damn it. It's 4 am already?</p>"
		}
    ),
    
    lounge: new undum.SimpleSituation(
        "<p>You Decide to get up and check where this noise is coming from. The lounge is neat and tidy. You see nothing that might have crashed. Before you you go back to your room, a small humming noise starts coming from your <a href='dining-room'>dining room.</a></p>\
        \
        <p class='transient'> You should definitely investigate the <a href= 'dining-room'>dining room.</a> Who knows what might have broken into your home.</p>",
    ),
    
    dining-room: new undum.SimpleSituation(
        "<p>As you move towaards the dining room, the humming turns into a hiss. As if a Vacuum Cleaner has been turned on. And suddently, it seems that your whole room may be moving with you. In the fraction of a second, before you can even think what has happened, everything around you seems to converge and be sucked off into the dining room. And then the dining room itself disappears into a small rift.</p>\
        <p><a href='rift-engine-room'>You feel like you're falling through a hole, weightless...</a> </p>"
    ),
    
    rift-engine-room: new undum.SimpleSituation(
        "<h1>The Rift</h1>\
        <p>While falling through the rift, your whole life flashes in front of your eyes. Is this the end? Your answer comes when you hit solid ground. It is not. </p>\
        <h1>The Rift Engine Room</h1>\
        <p>You are in some sort of huge room, which is littered with the most random collection of stuff you have ever seen. You see an old and busted, complicated looking machine. A sign is next to the machine.</p>\
        <p> Maybe you should <a href='lounge'> Investigate the noise.</a> </p>"
        {
            actions: {
                'check-sign': "<p><strong>Rift Engine Room</strong></p><p>Please wear hard hats to avoid falling debris.</p>"
                'check-machine': "<p>The machine looks complicated. And it also looks silent. There are wires going out of it.</p>"
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

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {

};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
