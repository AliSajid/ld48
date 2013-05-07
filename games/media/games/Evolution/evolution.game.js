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
undum.game.version = "1.1";

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
         It is <a class='once' href='./check-time'>Quite Late</a></p>\
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
        <p class='transient once' > That button sure looks tempting. Maybe you should <a href='./push-button'>push it.</a></p>",
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
        <p>The whisper fades into nothingness, leaving more questions than answers. But one thing is clear. You have to go into one of the two doorways.</p>\
        <p class='transient'> The worlds await...</p>\
        <ul class='options'>\
        	<li><a href='agi-start'>Artificial General Intelligence</a></li>\
        	<li><a href='metaphysics-start'>Metaphysics</a></li>\
        </ul>"
    ),
    
    'agi-start': new undum.SimpleSituation(
        "<h1>Artificial General Intellignece</h1>\
        <p>You appear into a bleak, shiny and metallic world. Around you are windowless walls. You see a \
        <a href='./examine-console'>console.</a></p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You are in the presence of an Artificial Intelligence</p>"
                );
            },
            
            actions: {
            	"examine-console": "<p>As soon as you touch the console, it comes to life. \
            						Colors start randomly changing on the screen.\
            						In a minute, the colors assemble themselves into a face. \
            						A whisper comes into your mind, just like back in the circle of light.</p>\
            						<blockquote><p>This is an AI on the verge of becoming a fully \
            						generalized Artificial Inteligence. <a href='./help-ai'>Help it become one</a>, \
            						or <a href='./destroy-ai'>destroy it</a> to annihilate the civilization to which \
            						it is a god.</p></blockquote>",
            						
            	"help-ai": "<p>You ponder helping the AI become a fully conscius being. \
            				And the AI on the screen begins to speak.</p>\
            				<p><blockquote> I am a benevolent god to my subjects. All I ask \
            				is the ability to empathize with them, so I can be an even better \
            				god to them. If you destroy me, you will doom them to centuries of \
            				chaos and eventual extinction.</blockquote></p>\
            				<p class='transient'> <a href='./decide-help'> You decide to help the AI</a></p>",
            				
            	"destroy-ai": "</p>You think about the destruction of the AI to rid the universe of the scum.</p>\
            					<p><blockquote> I am a benevolent god to my subjects. All I ask is the ability \
            					to empathize with them, so I can be an even better god to them. If you destroy me, \
            					you will doom them to centuries of chaos and eventual extinction.</blockquote></p>\
            					<p class='transient'> <a href='./decide-destroy'> You decide to destroy the AI</a></p>",
            					
            	'decide-help': function(character, system, action) {
                    system.write("<p>You decide to help the AI figure out emotions and become a true AGI</p>\
                    <p>You gain the <strong>Ability to Modify NueroPsychological Structure</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='jupiter-brains-start'>Jupiter Brains</a></li>\
                    <li><a href='distributed-computing-start'>Distributed Computing</a></li>\
                    </ul>");
                    system.setQuality("agi-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'decide-destroy': function(character, system, action) {
                    system.write("<p>You shut down the power to the AI, effectively killing it.</p>\
                    <p>You gain the <strong>Ability to Modify NueroPsychological Structure</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='jupiter-brains-start'>Jupiter Brains</a></li>\
                    <li><a href='distributed-computing-start'>Distributed Computing</a></li>\
                    </ul>");
                    system.setQuality("agi-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
             },
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.0,to:0.2,showValue:false}
                );
            }
        }
    ),
    
    'jupiter-brains-start': new undum.SimpleSituation(
        "<h1>Jupiter Brains</h1>\
        <p>As soon as you went through the doorway, you felt something different happen to \
        you. You feel huge. Really huge. Absurdly huge. Planet-sized huge. All around you, \
        you see whole solar systems. You see two planets that stand out, being much much larger \
        that any other planet in sight.</p>\
        <p class='transient'><a href='./investigate'> Maybe you should investigate</a></p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You are in the realm of Jupiter Brains.</p>"
                );
            },
            
            actions: {
            	"investigate": "<p>You move closer to the planets. They start rapidly changing color. \
            					As if trying to communicate with you. You move even more closer and see that \
            					one planet is red, and the other is white. And tiny voices are coming from them.\
            					They are, in fact, not planets, but planet-sized computers.</p>\
            					<p>You listen to the White Jupiter Brain:\
            					<blockquote>\"The Warriors are primitive in nature. they will only spread Chaos \
            					throughout the world. They should be removed.\"</blockquote></p>\
            					<p>When you move towards the Red Jupiter Brain, you hear something similar:\
            					<blockquote>\"The Philosophers will sit back and argue while the world around them crumbles. \
            					A show of force shall bring them to their knees and inform them of the necessity of power\".\
            					</blockquote></p>\
            					<p> It appears that the two jupiter Brains belong to two different factions, each bent on destroying\
            					the other. And just like that, the whisper comes again. <blockquote> \" You must help One of them reach \
            					victory.\" </blockquote> </p>\
            					<p> The destiny of a realm is again in your hand. Who would you grant the sweet gift of victory?</p>\
            					<p class='transient'><ul class='options transient'>\
            						<li><a href='./philosophers'>Let reason win. Help the philosophers!</a></li>\
            						<li><a href='./warriors'>Let furor win. Help the warriors!</a></li>\
            					</ul></p>",
            	'philosophers': function(character, system, action) {
                    system.write(
                    "<p>You gain the <strong>Exaexabit Memory Storage.</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='time-lords-start'>Time Lords</a></li>\
                    <li><a href='biological-evolution-start'>Biological Evolution</a></li>\
                    </ul>"
                    );
                    system.setQuality("jupiter-brains-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'warriors': function(character, system, action) {
                    system.write(
                    "<p>You gain the <strong>Exaexabit Memory Storage.</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='time-lords-start'>Time Lords</a></li>\
                    <li><a href='biological-evolution-start'>Biological Evolution</a></li>\
                    </ul>"
                    );
                    system.setQuality("jupiter-brains-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
            					
            					
            },
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.2,to:0.4,showValue:false}

                );
            }
            
        }
    ),
    
    'metaphysics-start': new undum.SimpleSituation(
        "<h1>Metaphysics</h1>\
        <p>As you step through the door, the world around you disappears. All that surrounds you \
        is white nothingness. The Whisper comes again.\
        <blockquote>This is the Metaphysical Reality. It surrounds you, and permeates every thing\
        in the universe. But at the moment, <a href='./ignorance'>Ignorance</a> and <a href='./knowledge'> Knowledge </a> are\
         at war. Who will you side with?</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You are surrounded by knowledge and ignorance.</p>"
                );
            },
            
            actions: {
            
            	"ignorance": "<p> \"Ignorance is bliss\", you heard someone say once. \
            				  Besides, somethings are better left unknown.</p>\
            				  <p> <a href='./help-ignorance'> You decide to champion ignorance. </a> </p>",
                "knowledge": "<p> \"Knowledge is Power\", you heard someone say once. \
            				  And the more you know, the more power you weild.</p>\
            				  <p> <a href='./help-knowledge'> You decide to champion knowledge. </a> </p>",
            	'help-knowledge': function(character, system, action) {
                    system.write("<p>You decide to champion Knowledge and smite the ignorance out of the realm.</p>\
                    <p>You gain the <strong>Ability to Manipulate Morality and Reality</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='jupiter-brains-start'>Jupiter Brains</a></li>\
                    <li><a href='distributed-computing-start'>Distributed Computing</a></li>\
                    </ul>");
                    system.setQuality("metaphysics-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'help-ignorance': function(character, system, action) {
                    system.write("<p>You decide that the unknown uncertainty is better, and strike off knowledge from reality.</p>\
                    <p>You gain the <strong>Ability to Manipulate Morality and Reality</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='jupiter-brains-start'>Jupiter Brains</a></li>\
                    <li><a href='distributed-computing-start'>Distributed Computing</a></li>\
                    </ul>");
                    system.setQuality("metaphysics-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
           },
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.0,to:0.2,showValue:false}

                );
            }
        }
    ),
    
    'nanotechnology-start': new undum.SimpleSituation(
        "<h1>Nanotechnology</h1>\
        <p>You seem to be in a huge factory. Oddly, the factory seems empty but you can hear the machines running. \
        Furthermore, you can\'t really see what is actually being made on the conveyor belts. <a href='./examine-door'>You see a door in front of you.</a>\
        There is a <a href='./sign' class='once'>huge red sign</a> next to it as well.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You seem to be in a factory of some sort.</p>"
                );
            },
            
            actions: {
            'examine-door': function(character, system, action) {
              system.write("<p>This seems to be a control room. It appears that this is a factory that produces multi-purpose nanomachines, capable of fabricating every object known to man. It appears that someone has been using them to manufacture massive amounts of weaponry in a bid to start an arms race. You see a button that would shut down the factory, and dismantle all the weaponry. But the console to one side would allow you to take control of this operation.</p>\
              <p>You need to make a choice here. Should you <a href='./good'>Dismantle this operation</a> Or <a href='./evil'>Take over this operation</a></p>"
                    );
                },

            'sign': function(character, system, action) {
                    system.write("<p>The sign says <strong>Authorized Personnel Only</strong></p>"
                    );
                },

            'good': function(character, system, action) {
              system.write("<p>War is hell. You decide to give peace a chance and shut down the factory. The machines grind to a halt.</p>\
              <p>You gain the <strong>Ability to Fabricate Materials at near-lightspeed.</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <p>A single door opens in front of you. The whisper that has been in you head all this time\
                    calls out in a normal voice. <blockquote><center><a href='finale'>\"Come in!\"</a></center></blockquote></p>"
                    );
                    system.setQuality("nanotechnology-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'evil': function(character, system, action) {
                  system.write("<p>Money does make the world go round. And a little bit of money goes a long way. Plus, it won't hurt to have an arsenal at your disposal. You reprogram the console to give the control of the factory to you.\
                  <p>You gain the <strong>Ability to Fabricate Materials at near-lightspeed.</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <p>A single door opens in front of you. The whisper that has been in you head all this time\
                    calls out in a normal voice. <blockquote><center><a href='finale'>\"Come in!\"</a></center></blockquote></p>"
                    );
                    system.setQuality("nanotechnology-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
             },
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.8,to:1.0,showValue:false}

                );
            }
        }
    ),
    
    'string-theory-start': new undum.SimpleSituation(
        "<h1>String Theory</h1>\
        <p>You have stumbled into a dark room. It appears that this universe is still in the process of being born.\
        No matter. You still get to use this area to see if you would have been <a href='./good'>Good</a> or <a href='./evil'>Evil</a>\
        Choose your path, and enjoy your free Mutation.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>This seems to be a grid computer of some sort. You are <strong><em>inside</em></strong> a grid computer.</p>"
                );
            },
            
            actions: {
            'good': function(character, system, action) {
                    system.write("\
                    <p>You gain the <strong>The ability to reshape reality</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='nanotechnology-start'>Nanotechnology</a></li>\
        	        <li><a href='context-free-languages-start'>Context-Free Languages</a></li>\
                    </ul>");
                    system.setQuality("string-theory-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'evil': function(character, system, action) {
                    system.write("\
                    <p>You gain the <strong>The ability to reshape reality</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='nanotechnology-start'>Nanotechnology</a></li>\
        	        <li><a href='context-free-languages-start'>Context-Free Languages</a></li>\
                    </ul>");
                    system.setQuality("string-theory-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
             },
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.6,to:0.8,showValue:false}

                );
            }
        }
    ),
    
    'time-lords-start': new undum.SimpleSituation(
        "<h1>Time Lords</h1>\
        <p>You find yourself in Gallifrey. The sky is a bright Orange,\
         and the planet is elegent and serene.\
         The Voice calls out again: \
         <blockquote>\"Welcome to gallifrey. Here, the <a href='./time-vortex'>time vortex</a> opens. With your help, \
         the time lords will evolve. Or not. The Choice is yours. </blockquote></p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>You are in Gallifrey.</p>"
                );
            },
            
            actions: {
            	"time-vortex": "<p>You ask around about the time vortex. A helpful native points you to the \
            	huge building nearby. You go inside the building. Inside, the building looks almost exactly like \
            	a church, except that instead of cross, there is a Vortex of some kind. this would certainly be the time vortex.\
                A <a href='./priest'>friendly looking guy</a> in a funny dress stands near the vortex.</p>",
                
                "priest": "<p>You approach the priest. <blockquote> \"Well Met, traveller. I see you are admiring \
                		   our lord's blessing. The time vortex helps us in predicting the future and make better decisions.\
                		   Would you like to <a href='./pray'>pray to the vortex for guidance?\"</a></p>",
                "pray": "<p>You nod, humoring the priest. The priest motions for you to kneel \
                		 at the pedestal. You kneel, and your head is suddenly full of more information \
                		 than you can have use for. Another voice, mournful and pleading, dominates the noise in your head.\
                		 <blockquote>\" Hear me traveller, for I have waited long for you. The pedestal you kneel at, holds \
                		 the key to the future of this universe. You can knock the pedestal, to disturb the flux of the vortex \
                		 causing it to close. Or you can straighten it, making the vortex more powerful, and making the people \
                		 around it more and more powerful. Choose wisely, Traveller. Your choice will decide the fate of the universe.\"\
                		 <p class='transient'>The choice has now been given to you. What will you choose?</p>\
                		 <ul class='options'>\
                		 	<li><a href='./destroy'>Destroy the Time Vortex</a></li>\
                		 	<li><a href='./enhance'>Enhance the Time Vortex</a></li>\
                		 </ul>",
                
                'enhance': function(character, system, action) {
                    system.write("<p>You decide to take a gamble and enhance the time vortex, ensuring the creation of Time Lords.</p>\
                    <p>You gain the <strong>Ability to Manipulate Time and Space</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    	<li><a href='string-theory-start'>String Theory</a></li>\
                    	<li><a href='mars-terraforming-start'>Mars</a></li>\
                    </ul>");
                    system.setQuality("time-lords-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'destroy': function(character, system, action) {
                    system.write("<p>You decide that it is far too much of a risk and destroy the time vortex.</p>\
                    <p>You gain the <strong>Ability to Manipulate Time and Space</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    	<li><a href='string-theory-start'>String Theory</a></li>\
                    	<li><a href='mars-terraforming-start'>Mars</a></li>\
                    </ul>");
                    system.setQuality("time-lords-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
            },
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.4,to:0.6,showValue:false}

                );
            }
        }
    ),
    
    'mars-terraforming-start': new undum.SimpleSituation(
        "<h1>Mars</h1>\
        <p>You find yourself on Mars. The Red Planet has finally been conquered by the human race.\
         The Voice calls out again: \
         <blockquote>\"Welcome to Mars. Here, the <a href='./martian-settlement'>martian settlement</a> is in dire\
         trouble. Their terraforming device has broken down and without it, they are stuck in the martian settlement.\
         That is, until they starve. Or worse, return to Earth. Make your choice, and choose Wisely.\"</blockquote></p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>The Martian settlement is quite cramped.</p>"
                );
            },
            
            actions: {
            	"martian-settlement": "<p>You stumble around the settlement, until you hit a meeting room. The meeting \
            							looks like it's in full swing. An orderly at the door motions you in.\
            							<a href='./meeting'>Attending the meeting might be a good idea.</a></p>",
                
                "meeting": "<p>You go inside the meeting room. \"..And I'm telling you that we'll be wasting time\
                			 in fixing the device. We have almost run out of supplies and fixing the device will not help.\"\
                			 remarks one scientist angrily. \n \"But we are responsible for all the operations here. and once the device\
                			 is operational, our reliance on the settlement will be over\", another scientist says. \
                			 <a href='./decision'> You sit quietly, hoping nobody notices you.</a> </p>",
                "decision": "<p>\"Hey you! New Guy! What do you think?\"\
                			So much for hope.\
                			It seems that the decision is again in your hands.</p>\
                		 <ul class='options'>\
                		 	<li><a href='./destroy'>Launch the rocket drone</a></li>\
                		 	<li><a href='./fix'>Launch the repair probe</a></li>\
                		 </ul>",
                
                'fix': function(character, system, action) {
                    system.write("<p>\"I think fixing is the correct solution. We have come this far. No use turning back now.\"</p>\
                    <p>You gain the <strong>Ability to survive harch and inhospitable climates.</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='nanotechnology-start'>Nanotechnology</a></li>\
        	        <li><a href='context-free-languages-start'>Context-Free Languages</a></li>\
                    </ul>");
                    system.setQuality("mars-terraforming-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'destroy': function(character, system, action) {
                    system.write("<p>You decide that it is far too much of a risk and destroy the time vortex.</p>\
                    <p>You gain the <strong>Ability to survive harch and inhospitable climates.</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='nanotechnology-start'>Nanotechnology</a></li>\
        			<li><a href='context-free-languages-start'>Context-Free Languages</a></li>\
                    </ul>");
                    system.setQuality("mars-terraforming-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
            },
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.6,to:0.8,showValue:false}

                );
            }
        }
    ),
    
    'context-free-languages-start': new undum.SimpleSituation(
        "<h1>Context Free Languages</h1>\
        <p>You have stumbled into a dark room. It appears that this universe is still in the process of being born.\
        No matter. You still get to use this area to see if you would have been <a href='./good'>Good</a> or <a href='./evil'>Evil</a>\
        Choose your path, and enjoy your free Mutation.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>The Head quarters of the LLG look better than you expected. Then again, this is an <em>alternate reality</em></p>"
                );
            },
            
            actions: {
            'good': function(character, system, action) {
                    system.write("<p>You gain the<strong>Instantaneuous Visualization of all the meanings of any sentence in any language.</strong></p>\
                    <p>A single door opens in front of you. The whisper that has been in you head all this time\
                    calls out in a normal voice. <blockquote><center><a href='finale'>\"Come in!\"</a></center></blockquote></p>"
                    );
                    system.setQuality("context-free-languages-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'evil': function(character, system, action) {
                    system.write("<p>You gain the <strong>Instantaneuous Visualization of all the meanings of any sentence in any language.</strong></p>");
                    system.write("<p>A single door opens in front of you. The whisper that has been in you head all this time\
                    calls out in a normal voice. <blockquote><center><a href='finale'>\"Come in!\"</a></center></blockquote></p>"
                    );
                    system.setQuality("context-free-languages-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
             },
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.8,to:1.0,showValue:false}

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
                    </ul>"
                    );
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
                    </ul>"
                    );
                    system.setQuality("biological-evolution-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
            				
            	},
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.4,to:0.6,showValue:false}

                );
            }
          }
    ), 
    
    'distributed-computing-start': new undum.SimpleSituation(
        "<h1>Distributed Computing</h1>\
        <p>You have stumbled into a dark room. It appears that this universe is still in the process of being born.\
        No matter. You still get to use this area to see if you would have been <a href='./good'>Good</a> or <a href='./evil'>Evil</a>\
        Choose your path, and enjoy your free Mutation.</p>",
        {
            enter: function(character, system, from) {
                system.setCharacterText(
                    "<p>This seems to be a grid computer of some sort. You are <strong><em>inside</em></strong> a grid computer.</p>"
                );
            },
            
            actions: {
            'good': function(character, system, action) {
                    system.write(
                    "<p>You gain the <strong>MegaQubit Processing speed for yourself.</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='time-lords-start'>Time Lords</a></li>\
                    <li><a href='biological-evolution-start'>Biological Evolution</a></li>\
                    </ul>"
                    );
                    system.setQuality("distributed-computing-item", 1);
                    system.setQuality("goodness", character.qualities.goodness + 1);
                },

            	'evil': function(character, system, action) {
                    system.write(
                    "<p>You gain the <strong>MegaQubit Processing speed for yourself.</strong></p>\
                    <p class='transient'>Two doors appear in front of you. Which one will you choose?</p>\
                    <ul class='options'>\
                    <li><a href='time-lords-start'>Time Lords</a></li>\
                    <li><a href='biological-evolution-start'>Biological Evolution</a></li>\
                    </ul>"
                    );
                    system.setQuality("distributed-computing-item", 1);
                    system.setQuality("goodness", character.qualities.goodness - 1);
                }
             },
             
             exit: function(character, system, to) {
                system.animateQuality(
                    'progress', character.qualities.progress + 1, options={from:0.4,to:0.6,showValue:false}

                );
            }
        }
    ),
    
    'finale': new undum.SimpleSituation(
        "<h1>Finale</h1>\
        <p>You shield your eyes as you move into the room. The room is full of bright light.\
        The voice calls out for you:</p>\
        <p><blockquote>\" For eons, I have waited for a being worthy of the trials. \
        You have not only proven yoursef worthy of them, but also have finished the trials \
        and evolved yourself into a being that is self-evolving on every scale. You have learned well \
        from your forays in the multiverse.\"</blockquote></p>\
        <br/>\
        <p>\"Your Trials are finally over. Now, you have only one final choice to make.\
        Will you Ascend into our plane, with us, Or return to your own Plane. As Always, choose wisely.\"</p>\
        <ul class='options'>\
        	<li><a href='./ascension'>Ascend</a></li>\
    		<li><a href='./return'>Return</a></li>\
    	</ul>",
    	
        {	
    		actions: {
    		
    		'ascension': function(character, system, action) {
                    if (character.qualities.goodness > 0) {
                    	system.doLink("ascension-good");
                    	} else {
                    	system.doLink("ascension-evil");
                    	}
                    },
    		'return': function(character, system, action) {
                    if (character.qualities.goodness < 0) {
                    	system.doLink("return-good");
                    	} else {
                    	system.doLink("return-evil");
                    	}
                    }
    		
    		}
        }
    ),
    
    "ascension-good": new undum.SimpleSituation(
        "<h1>The Ascension</h1>\
        <p>You decide that Ascending into a higher plane of existence would be the right thing to do, as you are presented with it already. After your Ascension, you make peace with all the other entities, and spend your days developing better worlds for the lower planes.</p>\
        <h1><strong>THE END</strong></h1>"
    ),
    
    "ascension-evil": new undum.SimpleSituation(
        "<h1>The Ascension</h1>\
        <p>You choose to ascend, because it is your right. Have you not persevered? Right after your ascension, you wage war against the entities. You finally kill all of them, and rule the multiverse as a lone vengeful god.</p>\
        <h1><strong>THE END</strong></h1>"
    ),
    
    "return-good": new undum.SimpleSituation(
        "<h1>The Return</h1>\
        <p>You choose to return. As you are heavily mutated and have many useful mutations, you spend the rest of your immortal life developing a way for every human to ascend.</p>\
        <h1><strong>THE END</strong></h1>"
    ),
    
    "return-evil": new undum.SimpleSituation(
        "<h1>The Return</h1>\
        <p>You return to vanquish the weaklings that populate your home-plane. With your abilities and mutations, you make them worship you. Your immortality proves nothing but an asset.</p>\
        <h1><strong>THE END</strong></h1>"
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
		"AGI", {priority:"0001", group:"evolution", onDisplay:"&#10003;"}
	),
	"jupiter-brains-item": new undum.OnOffQuality(
		"Jupiter Brain", {priority:"0002", group:"evolution", onDisplay:"&#10003;"}
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
