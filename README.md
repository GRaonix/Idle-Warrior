# Idle-Warrior

It's an Opensource incremental game where you could upgrade your character by spending ressources brought by combats.\
Ressourcs like experience, gold, etc ...

Screenshots examples :
[Warrior Journey](https://warriorsjourney.sixbytesunder.com/)
![Screen 1](screen01.png)

![Screen 2](screen02.png)


This project will use Vue.js. (a tech that I need to learn).

## Other examples of Idle/incremental games : 

![Screen 3](nguidle.jpg)

![Screen 4](yourchronicles.jpg)

# Stats/variables :
Character :
=========
HP/life
Level -> More HP, Attack, Defense, Speed, \
Gold -> buy basic items.\
Weapon -> speed, attack value (dps), crit % chance.(double atck or a value that you could upgrade).
Armor -> defense (hit reduction). HP -= (ennemy damage - defense)\ 
:> (maybe an inventory system afterwards.)

Experience -> To level up. give new abilities.\
Diamonds -> Shop for special items. Like idle combat after death, ...

Zones or levels :
===============
Ennemies : Normal and Bosses (at the end of each levels)
HP, Attack, Defense, Speed.
Loot : gold, experience, research (experience for pets), 

Training :
========
Dummy to hit at max reached zone level, to test abilities and upgrade a skill.
&nbsp;
Offline progress : experience, ennmies defeated, ...

Shop :
====
Gold to spend in level access/keys, basic upgrades like training and others like a house producing facilities to gain more passive gold.\
Weapons upgrades, armor upgrades & pets bonuses (food/...).

(Pets :)
====
Little attack and def bonus, passive mostly. Some will be available in the shop, others by defeating end level bosses.


Combat UI :
===========

Health and Swing bars on top of the player and ennemy.\
(Green and red);
The player will move a bit with each hit/swing and the ennemy too.\
Fade out animation when someone gets defeated.\
Scrolling hit damage on top of player head (done and received), experience and gold earned.\
Top bar with HP / Gold / Experience / (Diamonds).

Main UI :
========
Where the characters stats will be shown.\
A link to the shop,\
A link to the combat UI,\
A link to the forge where you could craft new weapons / buy weapons.


Level landscapes :
================

Random & procedural generation of stages, with night/day cycles (with a nice gradient and a starry sky), a ground line, mountains in the background.\
Sun & Moon following the time of the day.\
Scrolling clouds. (maybe scrolling mountains)\
Animations from stages to stages, with a parallax scrolling.

![Landscape](landscape.png)

Session storage :
==============
Session storage & game save export in json txt format.
Or using a SQLite DB ...
Maybe then a login system to keep the saves. With an email verification process. (maybe later).
