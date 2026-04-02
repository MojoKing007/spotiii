// ─── Helpers ────────────────────────────────────────────────────────────────

const el = id => document.getElementById(id);
const setText = (id, val) => { const e = el(id); if (e) e.textContent = val; };
const setStyle = (id, prop, val) => { const e = el(id); if (e) e.style[prop] = val; };
const toggleClass = (id, cls, force) => { const e = el(id); if (e) e.classList.toggle(cls, force); };
const fmt = s => (!s || isNaN(s)) ? '0:00' : Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');

// ─── Song list ───────────────────────────────────────────────────────────────
// Add a `lyrics` field (plain text, use \n for line breaks)

const songs = [
    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025537/Doja_Cat_-_Kiss_Me_More_ft._SZA_d8lluj.mp3",
        thumb: "img/t1.jpg",
        title: "Kiss Me More ft. SZA",
        artist: "Doja Cat",
        genre: "pop",
        lyrics: `[Verse 1: Doja Cat]
We hug and, yes, we make love
And always just say goodnight (La-la-la-la-la-la)
And we cuddle, sure, I do love it
But I need your lips on mine

[Chorus: Doja Cat]
Can you kiss me more?
We're so young, boy, we ain't got nothin' to lose, oh-oh
It's just principle
Baby, hold me 'cause I like the way you groove, oh-oh

[Post-Chorus: Doja Cat]
Boy, you write your name, I can do the same
Oh, I love the taste, la-la-la-la-la-la
All on my tongue, I want it (La-la-la-la-la-la)
Boy, you write your name, I can do the same
Oh, I love the taste, la-la-la-la-la-la
All on my tongue, I want it (La-la-la-la-la-la)

[Verse 2: Doja Cat]
I, I feel like fuckin' somethin'
But we could be corny, fuck it
Sugar, I ain't no dummy, dummy
I likе to say, "What if?" But if
We could kiss and just cut the rubbish
Then I might bе onto somethin'
I ain't givin' you one in public
I'm givin' you hundreds, fuck it
Somethin' we just gotta get into
Sign first, middle, last on the wisdom tooth
Niggas wishin' that the pussy was a kissin' booth
Taste breakfast, lunch, and gin and juice
And that dinner just like dessert too
And when we French, refresh, give me two
When I bite that lip, come get me too
He want lipstick, lip gloss, hickeys too, huh
See Doja Cat Live
Get tickets as low as $60
You might also like
Love Language
SZA
Blind
SZA
Fuck the Girls (FTG)
Doja Cat
[Chorus: Doja Cat]
Can you kiss me more?
We're so young, boy, we ain't got nothin' to lose, oh-oh
It's just principle
Baby, hold me 'cause I like the way you groove, oh-oh

[Post-Chorus: Doja Cat]
Boy, you write your name, I can do the same
Oh, I love the taste, la-la-la-la-la-la
All on my tongue, I want it (La-la-la-la-la-la)
Boy, you write your name, I can do the same
Oh, I love the taste, la-la-la-la-la-la
All on my tongue, I want it

[Verse 3: SZA]
Say give me a buck, need that gushy stuff
Push the limit, no, you ain't good enough
All your niggas say that you lost without me
All my bitches feel like I dodged the county
Fuckin' with you feel like jail, nigga (Feel like jail)
I can't even exhale, nigga (Can't exhale)
Pussy like holy grail, you know that (Holy grail)
You gon' make me need bail, you know that
Caught dippin' with your friend
You ain't even half, man, lyin' on your ****, you know that
Got me a bag full of brick, you know that
Control, don't slow the pace if I throw back
All this ass for real (All this ass)
Drama make you feel (It make you feel)
Fantasy and whip appeal is all I can give you
[Chorus: Doja Cat, SZA, Both]
Can you kiss me more?
We're so young, boy, we ain't got nothin' to lose, oh-oh
It's just principle
Baby, hold me 'cause I like the way you groove, oh-oh
Oh, darlin'

[Post-Chorus: SZA, Doja Cat]
Boy, you write your name, I can do the same
Ooh, I love the taste, oh-la-la-la-la-la
All on my tongue, I want it
Boy, you write your name, I can do the same
Ooh, I love the taste, oh-la-la-la-la-la
All on my tongue, I want it`


    },

    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775031570/The_Weeknd_Ariana_Grande_-_Die_For_You_Remix_Lyric_Video_u294g9.mp3",
        thumb: "img/t15.jpg",
        title: "The Weeknd, Ariana Grande - Die For You ",
        artist: "The Weeknd",
        genre: "Pop",
        lyrics: `[Verse 1: The Weeknd]
I'm findin' ways to articulate the feelin' I'm goin' through
I just can't say I don't love you (Yeah)
'Cause I love you, yeah
It's hard for me to communicate the thoughts that I hold
But tonight, I'm gon' let you know
Let me tell the truth
Baby, let me tell the truth, yeah
                
[Pre-Chorus: The Weeknd]
You know what I'm thinkin', see it in your eyes
You hate that you want me, hate it when you cry
You're scared to be lonely, 'specially in the night
I'm scared that I'll miss you, happens every time
I don't want this feelin', I can't afford love
I try to find a reason to pull us apart
It ain't workin' 'cause you're perfеct
And I know that you're worth it
I can't walk away, oh

[Chorus: Both, Ariana Grande, The Weeknd]
Even though we'rе goin' through it (Ah)
And it makes you feel alone
Just know that I would die for you (Ooh, ooh)
Baby, I would die for you, yeah
The distance and the time between us (Distance and the time)
It'll never change my mind 'cause
Baby, I would die for you (I would die for you)
Baby, I would die for you, yeah
See The Weeknd Live
Get tickets as low as $57
You might also like
TQG
KAROL G & Shakira
Red Ruby Da Sleeze
Nicki Minaj
Elevate
Jeff Grecia
[Verse 2: Ariana Grande]
I'm findin' ways to stay concentrated on what I gotta do
But, baby boy, it's so hard 'round you
And yes, I'm blamin' you
And you know I can't fake it, now or never
And you insinuatin' that you think we might be better
Better me and you
Yeah, I know you do

[Pre-Chorus: Ariana Grande]
You know what I'm thinkin', see it in your eyes
You hate that you want me, hate it when you cry
It ain't workin' 'cause you're perfect (Mm)
And I know you deserve it
I can't walk away

[Chorus: Both, Ariana Grande, The Weeknd]
Even though we're goin' through it
And it makes you (Me) feel alone
Just know that I would die for you (I would die for you)
Baby, I would die for you, yeah
The distance and the time between us
It'll never change my mind 'cause
Baby, I would die for you (I would die for you, uh)
Baby, I would die for you, yeah (I would die for you)
[Bridge: The Weeknd]
I would die for you, I would lie for you
Keep it real with you, I would kill for you, my baby
I'm just sayin', yeah
I would die for you, I would lie for you
Keep it real with you, I would kill for you, my baby
Na-na-na, na-na-na, na-na-na

[Chorus: The Weeknd]
Even though we're goin' through it (Ooh)
And it makes you feel alone (No, no)
Just know that I would die for you (No)
Baby, I would die for you, yeah
The distance and the time between us (Ooh)
It'll never change my mind 'cause (No, no)
Baby, I would die for you (No)
Baby, I would die for you, yeah (Oh, babe)`

    },

    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775030958/Kendrick_Lamar_SZA_-_All_The_Stars_l05usr.mp3",
        thumb: "img/t13.jpg",
        title: "Kendrick Lamar, SZA - All The Stars",
        artist: "Kendrick Lamar, SZA",
        genre: "Pop",
        lyrics: `[Pre-Chorus: Kendrick Lamar]
Love, let's talk about love
Is it anything and everything you hoped for?
Or do the feeling haunt you? (Haunt)
I know the feeling haunt you (Haunt)

[Chorus: SZA]
This may be the night that my dreams might let me know
All the stars approach you
All the stars approach you
All the stars approach you
This may be the night that my dreams might let me know
All the stars are closer
All the stars are closer
All the stars are closer

[Verse 1: Kendrick Lamar]
Tell me what you gon' do to me (Do to me)
Confrontation ain't nothin' new to me (New to me)
You can bring a bullet, bring a sword, bring a morgue
But you can't bring the truth to me (Truth to me)
Fuck you and all your expectations (Expectations)
I don't even want your congratulations (Congratulations)
I recognize your false confidence and calculated promises
All in your conversation (Conversation)
I hate people that feel entitled (Entitled)
Look at me crazy 'cause I didn't invite you (Invite you)
Oh, you important? You the moral to the story? You endorsin'?
Mothafucka, I don't even like you (Like you)
Corrupt a man's heart with a gift (With a gift)
That's how you find out who you dealin' with (Dealin' with)
A small percentage who I'm buildin' with (Buildin' with)
I want the credit if I'm losin' or I'm winnin'
On my mama, that's the realest shit
You might also like
THE HEART PART 6
Drake
6:16 in LA
Kendrick Lamar
So Long, London
Taylor Swift
[Pre-Chorus: Kendrick Lamar]
Love, let's talk about love
Is it anything and everything you hoped for?
Or do the feeling haunt you? (Haunt)
I know the feeling haunt you (Haunt)

[Chorus: SZA]
This may be the night that my dreams might let me know
All the stars approach you
All the stars approach you
All the stars approach you
This may be the night that my dreams might let me know
All the stars are closer
All the stars are closer
All the stars are closer

[Verse 2: SZA]
Skin covered in ego
Get to talkin' like ya involved
Like a rebound, no control
No off switch in the way that you bringin' me down
It's a turn on, get it away from me
Know you mean wrong, keep away from me
And it's all wrong, get it away from me, yeah, yeah
I just cry for no reason
I just pray for no reason
I just thank for the life, for the day
For the hours and another life breathin'
How did it all go to feel good?
You'd leave it all if it feel bad
Better live your life
We been runnin' out of time
[Pre-Chorus: Kendrick Lamar, SZA]
Love, let's talk about love (Let's talk about love, is)
Is it anything and everything you hoped for? (Anything, oh, oh, this)
Or do the feeling haunt you? (Haunt; haunt, haunt)
I know the feeling haunt you (Haunt)

[Chorus: SZA]
This may be the night that my dreams might let me know
All the stars approach you
All the stars approach you
All the stars approach you
This may be the night that my dreams might let me know
All the stars are closer
All the stars are closer
All the stars are closer`

    },



    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775031284/Ariana_Grande_-_positions_official_video_pfdjkk.mp3",
        thumb: "img/t14.jpg",
        title: "Ariana Grande - positions",
        artist: "Ariana Grande",
        genre: "Pop",
        lyrics: `[Verse 1]
Heaven sent you to me
I'm just hopin’ I don't repeat history

[Pre-Chorus]
Boy, I'm tryna meet your mama on a Sunday
Then make a lotta love on a Monday (Ah, ah)
Never need no (No), no one else, babe
’Cause I'll be

[Chorus]
Switchin' them positions for you
Cookin' in the kitchen and I'm in the bedroom
I'm in the Olympics, way I'm jumpin' through hoops
Know my love infinite, nothin’ I wouldn’t do
That I won't do, switchin’ for you

[Verse 2]
Perfect, perfect
You're too good to be true (You're too good to be true)
But I get tired of runnin', fuck it
Now, I’m runnin' with you (With you)

[Pre-Chorus]
Said, boy, I'm tryna meet your mama on a Sunday
Then make a lotta love on a Monday (Ah, ah)
Never need no (No), no onе else, babe
'Causе I'll be
See Ariana Grande Live
Get tickets as low as $261
You might also like
don’t wanna break up again
Ariana Grande
bye
Ariana Grande
dandelion
Ariana Grande
[Chorus]
Switchin' them positions for you
Cookin' in the kitchen and I'm in the bedroom
I'm in the Olympics, way I'm jumpin' through hoops
Know my love infinite, nothin' I wouldn't do
That I won't do, switchin' for you
Cookin' in the kitchen and I'm in the bedroom
I'm in the Olympics, way I'm jumpin' through hoops
Know my love infinite, nothin' I wouldn't do (Nothin')
That I won't do, switchin' for you

[Bridge]
This some shit that I usually don't do (Yeah)
But for you, I kinda, kinda want to (Mmm)
'Cause you're down for me and I'm down too (And I'm down too)
Yeah, I'm down too
Switchin' the positions for you
This some shit that I (Yeah) usually don't do (Don't do)
But for you, I kinda, kinda want to (Mmm)
'Cause you're down for me and I'm down too ('Cause you're down for me)

[Chorus]
Switchin' them positions for you
Cookin' in the kitchen and I'm in the bedroom
I'm in the Olympics, way I'm jumpin' through hoops (Jumpin', jumpin')
Know my love infinite, nothin' I wouldn't do
That I won't do, switchin' for you (Ooh woah)
Cookin' in the kitchen and I'm in the bedroom
I'm in the Olympics, way I'm jumpin' through hoops
Know my love infinite, nothin' I wouldn't do (I wouldn't do)
That I won't do, switchin' for you
[Outro]
Yeah
Ah, yeah
Ah (Ah), yeah`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025559/The_Weeknd_Lana_Del_Rey_-_The_Abyss_gc9zkt.mp3",
        thumb: "img/t2.jpg",
        title: "The Weeknd - The Abyss",
        artist: "The Weeknd",
        genre: "pop",
        lyrics: `[Verse 1: The Weeknd]
I tried my best to not let you go
I don't like the view from halfway down
Just promise me that it won't be slow
Will I feel the impact of the ground?
I tried to be something that I'll never be
Why waste another precious hour?
Why waste another precious ounce?
I'd rather leave somewhat of a legacy
Familiar
A thought that's so familiar

[Chorus: The Weeknd]
Let me close my eyes with dignity
Let's end it all, the world's not far behind
So what's the point of staying?
It's going up in flames, I know
Yes, I know, ooh
Oh-oh-oh

[Segue: Lana Del Rey]
Hey-hey
Oh-oh
(Hey)

[Verse 2: The Weeknd]
Just hold my heartbeat close to you
Remember how it always beats for you
I'm falling at the speed of light
I'm staring at your shrinking face, don't cry
You know my heart belongs to you
One last time, say that you want me too
The only words that gave me life
Now I'll see you on the other side
See The Weeknd Live
Get tickets as low as $57
You might also like
Squad
The Weeknd
Hold Your Heart (Demo)
The Weeknd
After Hours
The Weeknd
[Bridge: The Weeknd]
Oh-oh, oh-oh, oh-oh
Oh-oh, oh-oh, oh-oh
Oh-oh, oh-oh, oh-oh
Oh-oh, oh-oh, oh-oh

[Outro: Lana Del Rey & The Weeknd]
Oh, mama, I'll pray
I'm running away
Oh-oh
Hey-hey (Oh, no)
Oh-oh
Hey-hey
Is a threat not a promise? (Mmm)
If you're looking for rage (Mmm, oh)
If you're looking for ragin'
Quiet for days
Baby you're running away
Ayy-yeah
It's a threat, not a promise
It's a threat, not a promise
Yeah-yeah
Ah-ha (Oh)
Ah-ha (Oh)
Ah-ha
Ah-ha
Mama, I'll pray
Mama, I'll pray`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025558/Travis_Scott_-_STARGAZING_rrxa9l.mp3",
        thumb: "img/t3.jpg",
        title: "Travis Scott - STARGAZING",
        artist: "Travis Scott",
        genre: "Hip-Hop",
        lyrics: `[Part I]

[Intro]
Ah

[Chorus]
Rollin', rollin', rollin', got me stargazin' (Yeah)
Sippin' on purp, feelin' like the Barre Baby (It's lit)
Whatever I downed, it got me goin' crazy (Yeah)
Psychedelics got me goin' crazy (Alright)

[Post-Chorus]
I was hot as hell out in the heat (Yeah, yeah)
Then a storm came in and saved my life
Head up to the sky, down on my knees (Straight up)
Out of nowhere, you came here to save the night
In the nighttime (Woo, yeah)

[Verse]
Rollin', rollin', rollin', got me stargazin' (Roll)
Psychedelics got me goin' crazy (Oh, no)
Niggas femalin', they excellin' (Yeah)
Are they intellin'? (What you tellin'?)
We propellin', up top with Ellen, uh (With the choppers)
Kill the jealous with propane repellent
Got me goin' crazy (It's lit)
On tour, we'll tell 'em, we brought the section (Gang)
They keep on callin' up, it's getting hectic (Brrt)
Like we projected
So we cut the plug, he's interjected (Got me goin' crazy)
See Travis Scott Live
Get tickets as low as $254
You might also like
TOPIA TWINS
Travis Scott
MODERN JAM
Travis Scott
K-POP
Travis Scott
[Chorus]
Rollin', rollin', rollin', got me stargazin' (Yeah)
Sippin' on purp, feelin' like the Barre Baby (It's lit)
Whatever I downed, it got me goin' crazy (Yah)
Psychedelics got me goin' crazy (Alright)

[Post-Chorus]
I was hot as hell out in the heat (Yeah, yeah)
Then the storm came in and saved my life
Head up to the sky, down on my knees (Straight up)
Out of nowhere, you came here to save the night
In the nighttime (Woo, yeah)

[Segue]
Got me goin' crazy

[Part II]

[Verse: Travis Scott & MC E]
Okay, I been up for some days, I ain't got time to lay
Just to drown out all these thoughts, I tried all kind of things
If I take you to my past, you will be traumatized
Got a thousand kids outside that's tryna come alive
'99, took AstroWorld, it had to relocate
Told the dawgs I'd bring it back, it was a seal of faith
Before no car notes, baby girl, she played the tourist guide
Got the keys into my city, now she know the rides
Got new money, got new problems, got new enemies
When you make it to the top, that's the amenities
Packin' out Toyota like I'm in the league
And it ain't a mosh pit if ain't no injuries
I got 'em stage divin' out the nosebleeds (Alright, alright, alright)
And she hit that booger sugar 'til her nose bleed (Alright, alright, alright)
Bounce that shit forever, she on both knees
She was talkin' 'bout forever, got a whole week (Alright, alright, alright)
Plus, she know my baby mama is a trophy
She be throwin' up them B's, feel like we both bleed
She keep my dick jumpin' up, feel like I'm Moby
I'm way too gold for this beef, feel like I'm Kobe, yeah
This right here is astronomical
I see you picked up all my ways, I feel responsible
They tryna say that all my problems is improbable
They keep itchin' at my spirit, I'm diabolical, you feel me?`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025558/ROSALI%CC%81A_-_TUYA_hpez02.mp3",
        thumb: "img/t4.jpg",
        title: "ROSALÍA - TUYA",
        artist: "ROSALÍA",
        genre: "Latin",
        lyrics: `[Verso 1]
Lo que quiero lo tengo sin perdón y sin permiso
Bebé, tú ten cuida'o, no sé si tú estás listo
Es que tengo el talento de hacer que lo que me imagine se dé, yeah
Yo de diez soy un cien, lo haré demasia'o bien pa' que no se olvide

[Estribillo]
Solo esta noche soy tuya, tuya
Solo esta noche ere' mío, mío
Tú me quiere' ver desnu'a, uh-ah
Yo a ti debajo 'e mi ombligo, yeah
Solo еsta noche soy tuya, tuya
Solo esta noche еre' mío, mío
Sin remedio ni cura, uh-ah
Somos dos loquito', yeah

[Verso 2]
Yo sé que te gusto más que un primer día de verano (De verano)
Ya sé que me viste, no se puede tapar el sol con la mano (Eso e')
Se va calentando mi piel, eso va a tu favor
Un trozo de cielo, ese es mi sabor

[Estribillo]
Solo esta noche soy tuya, tuya
Solo esta noche ere' mío, mío
Sin remedio ni cura, uh-ah
Somos dos loquito', yeah
See ROSALÍA Live
Get tickets as low as $55
You might also like
The Show
Niall Horan
Ansiedades
Mora
Dial Drunk
Noah Kahan
[Puente]
El sexo conmigo es de altura
Del Renacimiento soy una escultura
Tú a mí me encanta', tú ere' una hermosura
Soy tu diablilla en tus noches de diablura
Soy suavecita como el cachemir
Toca esta guitarra bien, acierta el traste
Intervención divina, soy tu porvenir (Tú el mío)
Tú ere' un hijo 'e puta con suerte porque me encontraste
Pégate a mí para que te dé buena suerte
Abrázame y no me sueltes
Pégate a mí, que te doy suerte
Soy tu número siete

[Estribillo]
Solo esta noche soy tuya, tuya
Solo esta noche ere' mío, mío
Tú me quiere' ver desnu'a, uh-ah
Yo a ti debajo 'e mi ombligo, yeah
Solo esta noche soy tuya, tuya
Solo esta noche ere' mío, mío
Sin remedio ni cura, uh-ah
Somos dos loquito', yeah

[Outro]
Solo esta noche soy tuya, tuya
Solo esta noche ere' mío, mío
Sin remedio ni cura, uh-ah
Somos dos loquito', yeah`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025667/Bad_Bunny_-_Moscow_Mule_La_Letra_Lyrics_l23eup.mp3",
        thumb: "img/t5.jpg",
        title: "Bad Bunny - Moscow Mule",
        artist: "Bad Bunny",
        genre: "Latin",
        lyrics: `[Intro]
If I don't text you, you don't text me, ayy
If you want me to, I'll pick you up
I know where you live
Perhaps today you're upset
But you have happiness inside

[Chorus]
If you want, I'll pull it out
Two drinks and you know I get horny
We're not a thing, but we've been entangled for a while, oh-oh
WhatsApp with no profile picture, you don't save my number (Ayy, ayy, ayy, ayy)
But I pull it out
Two drinks and you know I get horny
We're not a thing, but we've been entangled for a while, oh-oh
WhatsApp with no profile picture, you don't save my number

[Verse 1]
Everything is underwater
Baby, let's go for the fourth quarter
On the Urus ignoring the stop signs
I'll give it hard to you so I'll be beyond comparison
Ayy, careful with those jeans, 'cause they'll rip (Ayy)
That booty will rip them (Ayy)
I don't know if I'll see you again
Or if I'll get lost tomorrow
You're a player, you gave me a crossover
This time you played me, you gave me a game over
Eh-eh, 'cause I can't forget
That dancing of yours that went viral
Let me know if you'll stay tomorrow
After the alarm goes off I'll give it to you
Ayy, today you won't go to work, he, no
You might also like
Burn, Burn, Burn
Zach Bryan
Running Up That Hill (A Deal with God)
Kate Bush
because i liked a boy
Sabrina Carpenter
[Chorus]
If you want, I'll pull it out
Two drinks and you know I get horny
We're not a thing, but we've been entangled for a while, oh-oh
WhatsApp with no profile picture, you don't save my number
But I pull it out
Two drinks and you know I get horny
We're not a thing, but we've been entangled for a while, oh-oh
WhatsApp with no profile picture, you don't save my number

[Verse 2]
I like them like that, styled up
Mami, how delicious you look naked
Maybe you didn't feel what I felt
But I still owe you a night in a suite
To give it to you rough, come on, mami, speak
You're the devil, stop pretending
To give it to you rough, come on, mami, speak
You're the devil, stop pretending

[Bridge]
No, no, no, no (No, no, no, no)
No, no, no, no (No, no, no, no)
No, no, no, no (No, no, no, no)
Ayy, I don't know 'bout you, but I'd like to wake up naked
At a beach near Bali, or else, Cancun
Order another Moscow mule (Ayy)
[Verse 3]
'Cause I'm high, high
Come and crash with me, fuck it
Baby, you're a grown-up
But today I'm high
Come and crash with me, fuck it, eh
Fuck it, ayy

[Outro]
Mami, you want grinding (You want grinding)
You want grinding (You want grinding)
You want foreplay (You want foreplay)
You want foreplay (You want foreplay)
Mami, you want grinding (You want grinding)
You want grinding (You want grinding)
You want foreplay (You want foreplay)
You want foreplay (You want foreplay)`
    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775027821/Nonstop_e8xkgh.mp3",
        thumb: "img/t6.jpg",
        title: "Drake - Nonstop",
        artist: "Drake",
        genre: "Hip-Hop",
        lyrics: `[Intro]
(Tay Keith, fuck these niggas up)

[Verse 1: Drake]
Look, I just flipped a switch (Flipped, flipped)
I don't know nobody else that's doin' this
Bodies start to drop, ayy (Hit the floor)
Now they wanna know me since I hit the top, ayy
This a Rollie, not a stopwatch, shit don't ever stop
This the flow that got the block hot, shit got super hot, ayy
Give me my respect (Give me my respect)
I just took it left like I'm ambidex'
Bitch, I move through London with the Eurostep (Two)
Got a sneaker deal and I ain't break a sweat
Catch me 'cause I'm gone (Outta there, I’m gone)
How I go from 6 to 23 like I'm LeBron?
Servin' up a pack (Servin' up a pack)
Niggas pullin' gimmicks 'cause they scared to rap, ayy
Funny how they shook, ayy, got these niggas shook
Pullin' back the curtain by myself, take a look, ayy
I'm a bar spitta, I’m a hard hitta
Yeah, I’m light-skinned, but I'm still a dark nigga
I'm a wig splitta, I'm a tall figure
I'm an unforgivin' wild-ass dog nigga
Somethin' wrong with 'em, got 'em all bitter
I'm a bill printer, I'm a gravedigger
Yeah, I am what I am
I don't have no time for no misunderstandings again

[Chorus: Lil Sko & Drake]
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin'
This a Rollie, not a stopwatch, shit don't ever stop
From smokin' the chicken, the bass is kickin'
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is–

[Verse 2: Drake]
Future took the business and ran it for me
I let Ollie take the owl, told him brand it for me
I get 2 million a pop and that’s standard for me
Like I went blind, dog, you gotta hand it to me
(Gotta gimme that shit, dog)
Prayed, then I prayed again (Amen, Lord)
Had a moment but it came and went
(They don't love you no more)
You don’t wanna play with him (Nah, nah, nah)
They’ll be mournin' you like 8 a.m. (R.I.P.)
Pinky ring 'til I get a wedding ring (Woah, yeah)
Love my brothers, cut 'em in on anything (Big slice)
And you know it's King Slime Drizzy, damn (Woo, yeah)
She just said I'm bae, I hit the thizzle dance (Mac Dre shit)
Either hand is the upper hand (Oh, yeah, shit)
Got a bubba on my other hand (Woah, yeah, shit, yeah)
This shit ain't no hundred bands (Nah, nah, nah, nah)
Palace look like Buckingham
Bills so big, I call 'em Williams, for real
Reasons to go crazy, got a trillion, for real
They been tryin' me but I'm resilient, for real
I can't go in public like civilian, for real
And I hardly take offense
Money for revenge, man, that’s hardly an expense
Al Haymon checks off of all of my events
I like all the profit, man, I hardly do percents (I don't do that shit)
A big part of me resents
Niggas that I knew from when I started in this shit
They see what I got and, man, it's hard to be content
Fuck what they got goin' on, I gotta represent (Ayy)
[Chorus: Lil Sko & Drake]
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin'
This a Rollie, not a stopwatch, shit don't ever stop
From smokin' the chicken, the bass is kickin'
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin', from smokin' the chicken, the bass is kickin'
My head is spinnin'
This the flow that got the block hot, shit got super hot`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775028323/Future_-_I_M_ON_ONE_Official_Audio_ft._Drake_xnjkyi.mp3",
        thumb: "img/t7.jpg",
        title: "Future - I'M ON ONE ft. Drake",
        artist: "Future",
        genre: "Hip-Hop",
        lyrics: `[Intro: Future]
Hol' up, wait
That's that bitch
(Torey, I know what to do with it)
That's that gas, that global high
Yeah, yeah, yeah, yeah
I'm on one, yeah, yeah, yeah, yeah
I'm on one, I'm on one
Yeah, yeah, yeah, yeah
I'm on one, I'm on one

[Verse 1: Future]
My lil' one sprayed the clip and threw his arm out of place
We too damn rich to worry 'bout a murder case
Tellin' on yourself is the only way you wanna escape
Call me Michael Phelps for swimmin' in your bitch face
Pop a Adderall so I can focus, count this cake
Skinny nigga, but my pockets out of shape
ATL nigga, all the cars California plates
Fight for my niggas, they gon' gеt it brack-brackin'
4 Tray gangsters, they gon' get it crack-crackin'
ABK gon' walk a nigga down, straightjackеt
Niggas go psychotic 'bout this shit, ain't just rappin'
Niggas pullin' robberies in this bitch, we ain't just trappin'
If another body drop, the feds might just snatch me
Man down, I'ma be overseas when it happen
Word around town, got them Ps in the attic
I'm applyin' pressure in the field, John Madden
Hundred thou' vacuumed sealed up, I'm just stackin' it
Finessin' is a sport, caught me a yellow one like Fabolous
Four-twenty-five, two stone, check the clarity
You might also like
Running Up That Hill (A Deal with God)
Kate Bush
Doja
Central Cee
because i liked a boy
Sabrina Carpenter
[Chorus: Future & Drake]
I'm on one, I'm on one, yeah
Hold up, slow down, wait, catch up (Catch up)
I'm on one, yeah, yeah, yeah, yeah
I'm on one, I'm on one
I got a different type of body built
(Ayy)

[Verse 2: Drake & Future]
All my hoes rockin' Audemar (Hold up)
All my hoes rockin' Rollie, Audemar, Patek (Hold up)
Bustdown thotiana, bustdown thotiana
Bust down a thotty with a bustdown, yeah
I hate bein' in my feels, I hate twenty dollar bills
We too famous to be goin' on no drills, nah, for real
Never been up to my record label, never knew the deal
Said she wanna see the world and she tired of sittin' still
I'ma take her ass to Paris, fuck her on that Ferris wheel
Take her to see Cristiano, fuck her in that Benz Viano
Champions League shit, there'll be a driver for you on arrival
When I finally see ya, all I wanna see is
Right hand, right knee, left hand, left knee
Make that ass wave, make that ass jet-ski, what
I don't know why the fuck niggas tryna test me, what
I'm just all about my goals like Ovechkin, what
I'm just all about my goals like I'm Messi, what
Bein' messy, shit do not impress me, what
I could never be your man, I'm your bestie, what
And I never liked you niggas, so don't text me
[Chorus: Future & Drake]
I'm on one, I'm on one (Okay, okay)
Outside my body, I'm on one (Okay, okay)
Yeah, hold up, wait, slow down, catch up (Okay, okay)
Yeah

[Outro: Drake]
All my hoes rockin' Audemar
All my hoes rockin' Rollie, Audemar, Patek
Bustdown thotiana, bustdown thotiana
Bust down a thotty with a bustdown
Okay, okay
Grrr`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775058747/Sin_Pijama_m1sjff.mp3",
        thumb: "img/t21.jpg",
        title: "Becky G, Natti Natasha - Sin Pijama",
        artist: "Becky G, Natti Natasha",
        genre: "Latin",
        lyrics: `[Intro: Becky G & Natti Natasha]
Solo, solito en la habitación
Busca, que busca de mi calor, uoh-oh, no-no
Quiere' remedio pa' tu dolor
Nadie te lo hace mejor que yo, uoh-oh, no-no

[Pre-Coro: Natti Natasha & Becky G]
Que no se te apague la situación
Tú sabe' que yo no te dejo planta'o
Calma'o, que yo voy en camino, amor
Calma'o, que yo quiero contigo

[Coro: Natti Natasha & Becky G]
Si tú me llama'
No' vamo' pa' tu casa
No' quedamo' en la cama
Sin pijama, sin pijama
Si tú me llamas
No' vamo' pa' tu casa
No' quedamo' en la cama
Sin pijama, sin pijama (Yo, yo, yo)

[Verso 1: Becky G]
Voy a contarle mis secretos a tu almohada
Mientras tanto hagamo' videollamada
Me manda foto, fotico, mostrando todo, todito
Cuando llegue desbaratamo' la cama
You might also like
Becky G & NATTI NATASHA - Sin Pijama (English Translation)
Genius English Translations
So Long, London
Taylor Swift
MALA SANTA
Becky G
[Refrán: Becky G]
Baby, hoy no vamo' a dormir (No)
Baby, hoy no vamo' a dormir (Shiuf-shiuf-shiuf)
Que no traje pijama porque no me dio la gana
Baby, hoy no vamo' a dormir
Baby, hoy no vamo' a dormir (No)
Baby, hoy no vamo' a dormir (Shiuf-shiuf-shiuf)
Que no traje pijama porque no me dio la gana
Baby, hoy no vamo' a dormir

[Coro: Natti Natasha & Becky G]
Si tú me llama'
No' vamo' pa' tu casa
No' quedamo' en la cama
Sin pijama, sin pijama
Si tú me llamas
No' vamo' pa' tu casa
No' quedamo' en la cama
Sin pijama, sin pijama (Rude gyal)

[Verso 2: Natti Natasha]
Si no hay teatro, deja el drama, enciéndeme la llama
Como yo vine al mundo, ese es mi mejor pijama
Hoy hay toque de queda
Seré tuya hasta la mañana
La pasamo' romantic sin piloto automatic
Botamos el manual, 'tamos viajando en cannabis
Siempre he sido una dama (Rude gyal)
Pero soy una perra en la cama
[Puente: Natti Natasha & Becky G]
Así que dale pom-pom-pom-pom-pom
Ponle carne a mi sazón-zón-zón-zón-zón
Choca to' eso con mi bon-bon-bon-bon-bon
Perdemo' el control pa' ganar los do'
Así que dale pom-pom-pom-pom-pom
Ponle fuego a mi sazón-zón-zón-zón-zón
Choca to' eso con mi bon-bon-bon-bon-bon
Espero tu call, vente, dame el gol

[Coro: Natti Natasha & Becky G]
Si tú me llama'
No' vamo' pa' tu casa
No' quedamo' en la cama
Sin pijama, sin pijama
Si tú me llamas
No' vamo' pa' tu casa
Fumamo' marihuana
Sin pijama, sin pijama

[Outro: Becky G & Natti Natasha]
(Baby, hoy no vamo' a dormir)
Natti Nat (Baby, hoy no vamo' a dormir)
Natti Nat, yeah-yeah
(Que no traje pijama porque no me dio la gana)
Becky G, baby (Baby, hoy no vamo' a dormir)`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775028907/A_AP_Rocky_-_L_D_Explicit_-_Official_Video_mesrof.mp3",
        thumb: "img/t8.jpg",
        title: "A$AP Rocky - L$D",
        artist: "A$AP Rocky",
        genre: "Hip-Hop",
        lyrics: `[Intro]
Uh
Uh

[Verse]
I know I dream about her all day (Uh)
I think about her with her clothes off (Uh, uh)
I'm ridin' 'round with my system bumpin' LSD (Uh, uh)
I look for ways to say, "I love you" (Uh)
But I ain't into makin' love songs (Uh)
Baby, I'm just rappin' to this LSD (Uh, uh)
She ain't a stranger to the city life
I introduced her to this hippy life
We make love under pretty lights, LSD (Acid, uh)
I get a feelin' it's a trippy night (Uh, uh)
Them other drugs just don't fit me right (Uh, uh)
Girl, I really fuckin' want love, sex, dream (Uh, uh, uh, uh)
Another quarter to the face system (Uh, uh)
Make no mistakes, it's all, a leap of faith for love (Acid)
It takes a place in, feelin' that you crave doin' love, sex, dreams (Uh, acid, uh)

[Chorus]
It started in Hollywood
Dreamin' of sharin' love
My tongue at a loss for words
'Cause my feelings just said it all
Party just started up
Dreamin' of sharin' worlds
Held this feelin' for way too long
Said, "I really wanna let it go"
See A$AP Rocky Live
Get tickets as low as $71
You might also like
STAY HERE 4 LIFE
A$AP Rocky
STOLE YA FLOW
A$AP Rocky
PUNK ROCKY
A$AP Rocky
[Bridge]
I've been gettin' fly 'cause the gimmick's so dope
I've been gettin' high 'cause I figured Lord told me
I've been drinkin', drivin', now we'll never go home
I gon' stay in doubt 'cause the weather's so cold, oh
Feelin' low sometime when the light shines down
Makes me high
Can you feel it?
Can you feel it?
Feelin' low sometime when the light shines down
Makes me high
Can you feel it?
Can you feel it?

[Chorus]
It started in Hollywood
Duh, duh-duh
Dreamin' of sharin' love
Duh, duh-duh
My tongue at a loss for words
'Cause my feelings just said it all

[Outro]
I look for ways to say, "I love you"
But I ain't into makin' love songs
Baby, I'm just rappin' to this LSD`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775028584/Future_-_PUFFIN_ON_ZOOTIEZ_Official_Music_Video_kdqetm.mp3",
        thumb: "img/t7.jpg",
        title: "Future - PUFFIN ON ZOOTIEZ",
        artist: "Future",
        genre: "Hip-Hop",
        lyrics: `[Intro]
G5 the flight, man, I'm way in the sky
She finna tell me "No way" and it's cap
Nigga, can't even see me, I'm way in the sky
G5 the flight, nigga way in the sky
G5 the flight, man, I'm way outta here

[Chorus]
G5 the flight, nigga, can't even see me
I'm way outta here, I'm too far in the sky
Hermès ashtray to dump my ashes
Bitch so pretty, look better than Cassie
Puffin' on zooties and she callin' me daddy
Walkin' on shit, turn it up and I gas it
Came out the gutter, it ain't nothin' for me to swag it
Secure the bag, got a bitch, I'ma bag it
Turnin' it up, gotta make sure shit good
Park it, two mil' in the middle of my hood
Drinkin' on mud, I made it out of thе sewer
Chrome Hеart accessories, whatever, I'm good
Lot of these niggas, they lookin' the same
They copy my lingo, they bitin' my chain
Championship, championship, Range just gon' amp this shit
Bitch break her neck just to look at the kid

[Verse 1]
Dirty the Fanta but make it in Canada
Bro get this money like it's my religion
It's gon' be a mad day, a sad day for any of these niggas
That try to compare whatever I did
Damn near touched a hundred, it just off the gig
I came out the jungle, they kidnapped a kid
I trap out a bando, spent ten on a crib
I look at the ocean to spot thirty M's
Pin it where I'm at, the city I'm in
I give you my fully, no matter where I'm in
Her hair touch her ass, she gon' think she Korean
You fuckin' me good, bitch, you helpin' me win
Niggas can't see me, ain't no competition
Too many bracelets, need a whole 'nother wrist
I'm never sober, don't think I'ma quit
I pop the E, I can feel when it kick
You might also like
Running Up That Hill (A Deal with God)
Kate Bush
Doja
Central Cee
The Black Slim Shady
The Game
[Chorus]
G5 the flight, nigga, can't even see me
I'm way outta here, I'm too far in the sky
Hermès ashtray to dump my ashes
Bitch so pretty, look better than Cassie
Puffin' on zooties and she callin' me daddy
Walkin' on shit, turn it up and I gas it
Came out the gutter, it ain't nothin' for me to swag it
Secure the bag, got a bitch, I'ma bag it
Turnin' it up, gotta make sure shit good
Park it, two mil' in the middle of my hood
Drinkin' on mud, I made it out of the sewer
Chrome Heart accessories, whatever, I'm good
Lot of these niggas, they lookin' the same
They copy my lingo, they bitin' my chain
Championship, championship, Range just gon' amp this shit
Bitch break her neck just to look at the kid

[Verse 2]
Count up some millions then take some more drugs
Been stuck in my memory, they wasn't showing love
Ain't matching my fly, bitch, you know you a dub
I started this wave and ain't using a brush
Stopped taking molly, I'm back on the E
Flying commercial, you ain't high as me
Driving a spaceship, the one with the wings
Cross up the trap, I done broke down a key
Ain't let no fuck nigga holdin' me back
Put a switch on it, these lil' niggas whack
After I hit your bitch, givin' her back
Ain't got no roof, put her heart on a strap
Go to the moon, ain't gon' show you no slatt
Pluto tycoon, ain't no regular 'Cat
Took a few shrooms, I forget where I'm at
Poppin' a Tesla, I feel when it kick
[Chorus]
G5 the flight, nigga, can't even see me
I'm way outta here, I'm too far in the sky
Hermès ashtray to dump my ashes
Bitch so pretty, look better than Cassie
Puffin' on zooties and she callin' me daddy
Walkin' on shit, turn it up and I gas it
Came out the gutter, it ain't nothin' for me to swag it
Secure the bag, got a bitch, I'ma bag it
Turnin' it up, gotta make sure shit good
Park it, two mil' in the middle of my hood
Drinkin' on mud, I made it out of the sewer
Chrome Heart accessories, whatever, I'm good
Lot of these niggas, they lookin' the same
They copy my lingo, they bitin' my chain
Championship, championship, Range just gon' amp this shit
Bitch break her neck just to look at the kid`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775029178/Domino_Dancing_pfzyd7.mp3",
        thumb: "img/t9.jpg",
        title: "Pet Shop Boys - Domino Dancing",
        artist: "Pet Shop Boys",
        genre: "80s Pop",
        lyrics: `[Intro: The Voice In Fashion]
All day, all day

[Instrumental Break]

[Verse 1: Neil Tennant]
I don't know why, I don't know how
I thought I loved you, but I'm not sure now
I've seen you look at strangers too many times
The love you want is of a, a different kind

[Verse 2: Neil Tennant]
Remember when we felt the sun?
A love like paradise, how hot it burned
A threat of distant thunder, the sky was red
And when you walked, you always turned every head

[Chorus: The Voice In Fashion & Neil Tennant]
All day, all day
Watch them all fall down
All day, all day
Domino dancing
All day, all day
Watch them all fall down
All day, all day
Domino dancing
See Pet Shop Boys Live
Get tickets as low as $92
You might also like
thanK you aIMee
Taylor Swift
How Did It End?
Taylor Swift
Where the Streets Have No Name (I Can’t Take My Eyes Off You)
Pet Shop Boys
[Instrumental Break]

[Verse 3: Neil Tennant]
I thought that when we fought, I was to blame
Now I know you play a different game
I've watched you dance with danger, still wanting more
Add another number to the score

[Chorus: The Voice In Fashion & Neil Tennant]
All day, all day
Watch them all fall down
All day, all day
Domino dancing
All day, all day
Watch them all fall down
All day, all day
Domino dancing

[Bridge: Neil Tennant]
When you look around, you wonder
Do you play to win or are you just a bad loser?

[Instrumental Break]

[Refrain: The Voice In Fashion]
All day, all day
All day, all day
[Trumpet Solo]

[Chorus: The Voice In Fashion & Neil Tennant]
All day, all day
Watch them all fall down
All day, all day
Domino dancing
All day, all day
All day, all day

[Verse 4: Neil Tennant]
I don't know why, I don't know how
I thought I loved you, but I'm not sure now
I hear the thunder crashing, the sky is dark
And now a storm is breaking within my heart

[Chorus: The Voice In Fashion & Neil Tennant]
All day, all day
Watch them all fall down
All day, all day
Domino dancing
All day, all day
Watch them all fall down
All day, all day
Domino dancing
[Refrain: The Voice In Fashion]
All day, all day
All day, all day

[Instrumental Break]

[Chorus: The Voice In Fashion & Neil Tennant]
All day, all day
All day, all day
Domino dancing
All day, all day
All day, all day
All day, all day
Watch them all fall down
All day, all day
Domino dancing
All day, all day
Watch them all fall down
All day, all day
Domino dancing

[Outro: The Voice In Fashion & Neil Tennant]
All day, all day
Watch them all fall down
All day, all day`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775029734/Michael_Jackson_-_Billie_Jean_Official_Video_mirehv.mp3",
        thumb: "img/t10.jpg",
        title: "Michael Jackson - Billie Jean",
        artist: "Michael Jackson",
        genre: "80s Pop",
        lyrics: `[Verse 1]
She was more like a beauty queen from a movie scene, uh
I said, "Don't mind, but what do you mean, I am the one?
Who will dance on the floor in the round?"
She said I am the one
Who will dance on the floor in the round?
She told me her name was Billie Jean as she caused a scene
Then every head turned with eyes that dreamed of bein' the one, uh
Who will dance on the floor in the round?

[Pre-Chorus]
People always told me, "Be careful of what you do," uh
"And don't go around breakin' young girls' hearts" (Hee-hee)
And mother always told me, "Be careful of who you love
And be careful of what you do (Oh, oh)
'Cause the lie becomes the truth" (Oh, oh), hey

[Chorus]
Billie Jean is not my lover, uh
She's just a girl who claims that I am the one (Oh, baby)
But the kid is not my son (Woo)
Uh, she says I am the one (Oh, baby)
But the kid is not my son (Hee-hee-hee; no, no)
(Hee-hee-hee, woo)

[Verse 2]
For forty days and for forty nights, the law was on her side
But who can stand when she's in demand? Her schemes and plans
'Cause we danced on the floor in the round (Hee, uh, uh)
So take my strong advice
Just remember to always think twice (Don't think twice)
Do think twice (A-hoo)
She told my baby we danced 'til three, then she looked at me
Then showed a photo of a baby cryin', his eyes were like mine (Oh, no)
'Cause we danced on the floor in the round, baby (Ooh, hee-hee-hee)
You might also like
Beat It
Michael Jackson
Smooth Criminal
Michael Jackson
Family Matters
Drake
[Pre-Chorus]
People always told me, "Be careful of what you do," uh
"And don't go around breakin' young girls' hearts" (Don't break no hearts; hee-hee)
But she came and stood right by me
Just the smell of sweet perfume (Ha-oh)
This happened much too soon (Ha-oh, ha-ooh)
She called me to her room (Ha-oh, hoo), hey

[Chorus]
Billie Jean is not my lover (Woo)
She's just a girl who claims that I am the one, uh
But the kid is not my son, uh
No-no-no, uh, no-no-no, no-no-no (Woo)
Billie Jean is not my lover, uh
She's just a girl who claims that I am the one
But the kid is not my son (No, no)
She says I am the one (Oh, baby)
But the kid is not my son (No, hee-hee-hee)
(Ah-hee-hee-hee)

[Interlude]
Hee, hoo
(Chicka-boom, chicka-boom, chicka-boom, chicka-boom)

[Chorus]
She says I am the one, uh
But the kid is not my son (No-no-no, woo, uh)
Billie Jean is not my lover, uh
She's just a girl who claims that I am the one (You know what you did to me, baby)
But the kid is not my son
No-no-no (No-no-no, ah), no-no-no-no (No-no-no)
She says I am the one (No, baby)
But the kid is not my son (No-no-no-no; woo, uh)
[Outro]
She says I am the one (You know what you did)
She says he is my son (Breakin' my heart, babe)
She says I am the one
Yeah, yeah, Billie Jean is not my lover, uh
Yeah, Billie Jean is not my lover, uh
Yeah, Billie Jean is not my lover, uh (She is just a girl)
Yeah, Billie Jean is not my lover, uh (She is just a girl; don't call me Billie Jean, hoo)
Billie Jean is not my lover, uh (She is just a girl; she's not at the scene)
Billie Jean is not (Hee), aaow, ooh
Yeah, Billie Jean is`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775030084/Eminem_-_Mockingbird_Official_Music_Video_jal444.mp3",
        thumb: "img/t11.jpg",
        title: "Eminem - Mockingbird",
        artist: "Eminem",
        genre: "Hip-Hop",
        lyrics: `[Intro]
Yeah
I know sometimes
Things may not always make sense to you right now
But hey
What Daddy always tell you?
Straighten up, little soldier
Stiffen up that upper lip
What you cryin' about?
You got me

[Verse 1]
Hailie, I know you miss your mom, and I know you miss your dad
When I'm gone, but I'm tryin' to give you the life that I never had
I can see you're sad, even when you smile, even when you laugh
I can see it in your eyes, deep inside, you wanna cry
'Cause you're scared, I ain't there, Daddy's wit' you in your prayers
No more cryin', wipe them tears, Daddy's here, no more nightmares
We gon' pull together through it, we gon' do it
Lainie, Uncle's crazy, ain't he? Yeah, but he loves you, girl, and you better know it
We're all we got in this world when it spins, when it swirls
When it whirls, when it twirls, two little beautiful girls
Lookin' puzzled, in a daze, I know it's confusin' you
Daddy's always on the move, Mama's always on the news
I try to keep you sheltered from it, but somehow it seems
The harder that I try to do that, the more it backfires on me
All the things growin' up as Daddy that he had to see
Daddy don't want you to see, but you see just as much as he did
We did not plan it to be this way, your mother and me
But things have got so bad between us, I don't see us ever bein'
Together ever again, like we used to be when we was teenagers
But then, of course, everything always happens for a reason
I guess it was never meant to be
But it's just somethin' we have no control over, and that's what destiny is
But no more worries, rest your head and go to sleep
Maybe one day we'll wake up and this'll all just be a dream
You might also like
She Knows
J. Cole
The Tortured Poets Department
Taylor Swift
Family Matters
Drake
[Chorus]
Now hush, little baby, don't you cry
Everything's gonna be alright
Stiffen that upper lip up, little lady, I told ya
Daddy's here to hold ya through the night
I know Mommy's not here right now, and we don't know why
We feel how we feel inside
It may seem a little crazy, pretty baby
But I promise Mama's gon' be alright

[Verse 2]
Heh, it's funny
I remember back one year when Daddy had no money
Mommy wrapped the Christmas presents up and stuck 'em under the tree
And said some of 'em were from me 'cause Daddy couldn't buy 'em
I'll never forget that Christmas; I sat up the whole night crying
'Cause Daddy felt like a bum—see, Daddy had a job
But his job was to keep the food on the table for you and Mom
And at the time, every house that we lived in
Either kept gettin' broken into and robbed or shot up on the block
And your Mom was savin' money for you in a jar
Tryin' to start a piggy bank for you so you could go to college
Almost had a thousand dollars 'til someone broke in and stole it
And I know it hurt so bad it broke your Mama's heart
And it seemed like everything was just startin' to fall apart
Mom and Dad was arguin' a lot
So Mama moved back onto Chalmers in the flat, one-bedroom apartment
And Dad moved back to the other side of 8 Mile on Novara
And that's when Daddy went to California with his CD
And met Dr. Dre, and flew you and Mama out to see me
But Daddy had to work, you and Mama had to leave me
Then you started seein' Daddy on the TV
And Mama didn't like it
And you and Lainie were too young to understand it
Papa was a rolling stone, Mama developed a habit
And it all happened too fast for either one of us to grab it
I'm just sorry you were there and had to witness it firsthand
'Cause all I ever wanted to do was just make you proud
Now I'm sittin' in this empty house just reminiscin'
Lookin' at your baby pictures, it just trips me out
To see how much you both have grown, it's almost like you're sisters now
Wow, guess you pretty much are, and Daddy's still here
Lainie, I'm talkin' to you too, Daddy's still here
I like the sound of that, yeah, it's got a ring to it, don't it?
Shh, Mama's only gone for the moment
[Chorus]
Now hush, little baby, don't you cry
Everything's gonna be alright
Stiffen that upper lip up, little lady, I told ya
Daddy's here to hold ya through the night
I know Mommy's not here right now and we don't know why
We feel how we feel inside
It may seem a little crazy, pretty baby
But I promise Mama's gon' be alright

[Outro]
And if you ask me to, Daddy's gonna buy you a mockingbird
I'ma give you the world
I'ma buy a diamond ring for you, I'ma sing for you
I'll do anything for you to see you smile
And if that mockingbird don't sing and that ring don't shine
I'ma break that birdie's neck
I'll go back to the jeweler who sold it to ya
And make him eat every carat, don't fuck with Dad (Haha)`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775030668/Kendrick_Lamar_-_luther_Official_Audio_jtdzka.mp3",
        thumb: "img/t12.jpg",
        title: "Kendrick Lamar - luther",
        artist: "Kendrick Lamar",
        genre: "Hip-Hop",
        lyrics: `[Intro]
If this world were mine

[Verse 1: Kendrick Lamar]
Hey, Roman numeral seven, bae, drop it like it's hot
If this world was mine, I'd take your dreams and make 'em multiply
If this world was mine, I'd take your enemies in front of God
Introduce 'em to that light, hit them strictly with that fire
Fah-fah, fah-fah-fah, fah-fah, fah
Hey, Roman numeral seven, bae, drop it like it's hot
If this world was mine, I'd take your dreams and make 'em multiply
If this world was mine, I'd take your enemies in front of God
Introduce 'em to that light, hit them strictly with that fire
It's a vibe, do your dance, let 'em watch
She a fan, he a flop, they just wanna kumbaya, nah

[Chorus: SZA, SZA & Kendrick Lamar]
In this world, concrete flowers grow
Heartache, she only doin' what she know
Weekends, get it poppin' on the low
Better days comin' for sure
If this world were—
If it was up to me
I wouldn't give these nobodies no sympathy
I'd take away the pain, I'd give you everything
I just wanna see you win, wanna see
If this world were mine
You might also like
YUKON
Justin Bieber
GOOD CREDIT
Playboi Carti & Kendrick Lamar
30 For 30
SZA & Kendrick Lamar
[Verse 2: Kendrick Lamar & SZA]
It go in (When you), out (Ride it), do it real slow (Slide)
Baby, you a star, strike, pose
When I'm (When you), with you (With me), everything goes (Slow)
Come and (Put that), put that (On my), on my (Titi), soul (Soul)
'Rari (Red), crown (Stack), wrist (Stay), froze (Really)
Drip (Tell me), pound (If you), on the way home (Love me)

[Chorus: Kendrick Lamar & SZA]
In this world, concrete flowers grow
Heartache, she only doin' what she know
Weekends, get it poppin' on the low
Better days comin' for sure
If this world were—
If it was up to me
I wouldn't give these nobodies no sympathy
I'd take away the pain, I'd give you everything
I just wanna see you win, wanna see
If this world were mine

[Verse 3: Kendrick Lamar & SZA]
I can't lie
I trust you, I love you, I won't waste your time
I turn it off just so I can turn you on
I'ma make you say it loud
I'm not even trippin', I won't stress you out
I might even settle down for you, I'ma show you I'm a pro
I'ma take my time and turn it off
Just so I can turn you on, baby
Weekends, get it poppin' on the low
Better days comin' for sure
[Outro: SZA]
I know you're comin' for
Better days
If this world were mine`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775055543/Bananarama_-_Cruel_Summer_sbfjyz.mp3",
        thumb: "img/t16.jpg",
        title: "Bananarama - Cruel Summer",
        artist: "Bananarama",
        genre: "80s Pop",
        lyrics: `[Verse 1]
Hot summer streets and the pavements are burning, I sit around
Trying to smile, but the air is so heavy and dry
Strange voices are saying (What did they say?)
Things I can't understand
It's too close for comfort, this heat has got right out of hand

[Chorus]
It's a cruel (Cruel), cruel summer
Leaving me here on my own
It's a cruel (It's a cruel), cruel summer
Now you're gone

[Verse 2]
The city is crowded, my friends are away, and I'm on my own
It's too hot to handle, so I gotta get up and go

[Chorus]
It's a cruel (Cruel), cruel summer
Leaving me here on my own
It's a cruel (It's a cruel), cruel summer
Now you're gone
You're not the only one
It's a cruel (Cruel), cruel summer (Leaving me)
Leaving me here on my own
It's a cruel (It's a cruel), cruel summer
Now you're gone
You might also like
Total Eclipse of the Heart
Bonnie Tyler
Evil
Eminem
THE HEART PART 6
Drake
[Instrumental Break]

[Chorus]
It's a cruel, cruel summer
Leaving me here on my own
It's a cruel, cruel summer
Now you're gone
You're not the only one
It's a cruel (Cruel), cruel summer (Leaving me)
Leaving me here on my own
It's a cruel (It's a cruel), cruel summer
Now you're gone
You're not the only one
It's a cruel (Cruel), cruel summer (Leaving me)
Leaving me here on my own
It's a cruel (It's a cruel), cruel summer
Now you're gone
You're not the only one
It's a cruel (Cruel)—`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775056214/90210_p9gubd.mp3",
        thumb: "img/t17.jpg",
        title: "Travis Scott - 90210",
        artist: "Travis Scott",
        genre: "Hip-Hop",
        lyrics: `[Part I]

[Intro: Travis Scott, Chantel Jeffries & Kacy Hill]
(Dean, what's poppin'? Hahahahaha. Yo, Travis)
Mhm, ooh-ooh-ooh-ooh-ooh-ooh-ooh-ooh-ooh
Mama's mailin' out that blow, cravin' 9021—
Ooh-ooh-ooh-ooh-ooh

[Verse 1: Travis Scott & Chantel Jeffries]
She a porn star girl, ah, from the valley
(Honestly, God bless)
Who left her hometown world all for that alley
Ooh, created Lake Tahoe all from her panties
(I hope it was wet like my jumper, though)
Ooh, used to take the long way home
Long way home, all for that candy (Hahahahaha, mhm)

[Chorus: Kacy Hill]
Baby's hooked on feeling low-ow
Do, do, do
Do, do

[Verse 2: Travis Scott]
Jacques turned La Flame, now he rollin' on an Addy
Fifty on a chain, 'nother fifty on a Caddy
Ooh, he might pop him a pill, pop him a seal
Pop anyone, pop anything
Pop anything to find that alley
Mhm, yeah, to find that alley (Mhm)
See Travis Scott Live
Get tickets as low as $254
You might also like
TOPIA TWINS
Travis Scott
THE HEART PART 6
Drake
MODERN JAM
Travis Scott
[Chorus: Kacy Hill]
Baby's hooked on feeling low-ow
Do, do, do
Do, do

[Segue: Travis Scott, Kacy Hill & Chantel Jeffries]
In the 90210, 90210, lookin' for that alley
In the 90210, 90210, lookin' for that alley, ooh
It's the superstar girl, superstar girl, roamin' in that alley
(Baby's hooked on feeling low-ow)
Ooh, in the 90210, 90210, somewhere in that alley
(Do, do, do)
(Do, do)
Ooh, ahh
(I gotta tell ya)

[Part II]

[Intro: Travis Scott]
(Ooh-ooh-ooh-ooh)
(Ooh-ooh-ooh-ooh)
(Ooh-ooh-ooh-ooh)
Ooh-ooh
(Ball, ball, ball in, in)
(Ball, ball, ball in, in)
Ooh-ooh-ooh-ooh-ooh
(Ball, ball, ball in, in)
(Ball, ball, ball in, in)
Yeah
[Verse: Travis Scott]
My granny called, she said, "Travvy, you work too hard
I'm worried you forget about me" (Ball, ball, ball)
I'm fallin' in and out of clouds
Don't worry, I'ma get it, Granny, uh
What happened? Now my daddy happy
Mama called me up, that money comin' and she love me (Ball, ball, ball in, in)
I done made it now, I done found life's meanin' now (Ball, ball, ball in, in)
All them days her heart'd break, her heart not in pieces now
Friends turnin' into fraud niggas
Practicin' half the passion, you niggas packaged different (Ball, ball, ball in, in)
All you niggas, you niggas want the swag, you can't have it (Ball, ball, ball in, in)
I'ma sell it, your niggas salary, we 'bout to cap, bitch
Youngest nigga out of Houston at the Grammys
Smilin' at 'em laughin' at me
I passed the rock to Ye, he pump faked, then passed it back, bitch (Ball, ball, ball in, in)
All of this off of rappin', should've wrote this in Latin (Ball, ball, ball in, in)
Yeah-yeah
Mmm, I know, I know, I know, I know, I know
I know, I know, I know, I know, I know
Cuzzo said we hit the store, yeah, we 'bout to drop a four
He passed the cigarette, I choke, woo
Told my auntie, "Put them 'Ports down, them 'Ports down"
Now you know you love your own now
Hit the stage, they got their hands up, don't put your nose down
I ain't knockin', nigga, I knocked the door down, for sure now
Whole crew, I swear they countin' on me
Gold chains, gold rings, I got an island on me
Houses on me, he got them ounces on him
Holy Father, come save these niggas, I'm stylin' on 'em
Good Lord, I see my good fortune in all these horses
I'm drivin' too fast to stop, so all these signs, I ignore them
Just this guy from north of the border, my chips is in order
My mom's biggest supporter, so now a nigga support a nigga
[Outro: Travis Scott]
(Ooh-ooh-ooh-ooh-ooh-ooh-ooh)
(Ooh-ooh-ooh-ooh-ooh-ooh-ooh)`
    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775056894/JAY-Z_-_Empire_State_Of_Mind_ft._Alicia_Keys_pncuzj.mp3",
        thumb: "img/t18.jpg",
        title: "JAŸ-Z - Empire State Of Mind ft. Alicia Keys",
        artist: "JAŸ-Z",
        genre: "Hip-Hop",
        lyrics: `[Intro: JAY-Z]
Yeah

[Verse 1: JAY-Z & Alicia Keys]
Yeah, I'm out that Brooklyn, now I'm down in Tribeca
Right next to De Niro, but I'll be hood forever
I'm the new Sinatra, and since I made it here
I can make it anywhere, yeah, they love me everywhere
I used to cop in Harlem, hola, my Dominicanos (Dímelo)
Right there up on Broadway, brought me back to that McDonald's
Took it to my stash spot, 560 State Street
Catch me in the kitchen, like a Simmons whippin' pastry
Cruisin' down 8th Street, off-white Lexus
Drivin' so slow, but BK is from Texas
Me? I'm out that Bed-Stuy, home of that boy Biggie
Now I live on Billboard and I brought my boys with me
Say "What up?" to Ty Ty, still sippin' Mai Tais
Sittin' courtside, Knicks and Nets give me high fives
Nigga, I be spiked out (Come on), I could trip a referee (Come on)
Tell by my attitude (Come on) that I'm most definitely from

[Chorus: Alicia Keys & JAY-Z]
In New York (Ayy, uh, yeah; aha)
Concrete jungle (Yeah) where dreams are made of
There's nothin' you can't do (Yeah, okay)
Now you're in New York (Aha, aha, aha; uh, yeah)
These streets will make you feel brand-new (New)
Big lights will inspire you (Come on, okay)
Let's hear it for New York (You welcome, OG; uh)
New York (Yeah), New York (Uh, I made you hot, nigga)
You might also like
Why Why Why
Shawn Mendes
Watch the Party Die
Kendrick Lamar
The Tortured Poets Department
Taylor Swift
[Verse 2: JAY-Z & Alicia Keys]
Catch me at the X with OG at a Yankee game
Shit, I made the Yankee hat more famous than a Yankee can
You should know I bleed blue, but I ain't a Crip though
But I got a gang of niggas walkin' with my clique though
Welcome to the meltin' pot, corners where we sellin' rock
Afrika Bambaataa shit, home of the hip-hop
Yellow cab, gypsy cab, dollar cab, holla back
For foreigners, it ain't fair, they act like they forgot how to add
Eight million stories out there in the naked
City, it's a pity half of y'all won't make it
Me? I gotta plug Special Ed, "I Got It Made"
If Jeezy's payin' LeBron, I'm payin' Dwyane Wade
Three dice, Cee-lo, Three Card Monte
Labor Day Parade, rest in peace, Bob Marley
Statue of Liberty, long live the World Trade (Come on, come on)
Long live the king, yo (Come on), I'm from the Empire State, that's

[Chorus: Alicia Keys & JAY-Z]
In New York (Ayy; uh, yeah)
Concrete jungle where dreams are made of
There's nothin' you can't do (That boy good, okay)
Now you're in New York (Uh, yeah, welcome to the bright lights, baby)
These streets will make you feel brand-new
Big lights will inspire you (Okay)
Let's hear it for New York (Uh)
New York (Yeah), New York (Uh)
[Verse 3: JAY-Z & Alicia Keys]
Lights is blinding, girls need blinders
Or they could step out of bounds quick, the side lines is
Lined with casualties who sip the life casually
Then gradually become worse, don't bite the apple, Eve
Caught up in the in-crowd, now you're in-style
Into the winter gets cold, en vogue with your skin out
City of sin is a pity on a whim
Good girls gone bad, the city's filled with them
Mami took a bus trip, now she got her bust out
Everybody ride her, just like a bus route
"Hail Mary" to the city, you're a virgin
And Jesus can't save you, life starts when the church end
Came here for school, graduated to the high life
Ball players, rap stars, addicted to the limelight
MDMA (Come on) got you feelin' like a champion (Come on)
The city never sleeps (Come on), better slip you a Ambien

[Chorus: Alicia Keys & JAY-Z]
In New York (Ayy, ow, uh, yeah)
Concrete jungle where dreams are made of
There's nothin' you can't do (Okay)
Now you're in New York (Uh, yeah)
These streets will make you feel brand-new
Big lights will inspire you (Okay)
Let's hear it for New York (Uh)
New York (Yeah), New York (Uh)
[Bridge: Alicia Keys]
One hand in the air for the big city (Oh)
Street lights, big dreams, all lookin' pretty (Oh)
No place in the world that could compare (Nah)
Put your lighters in the air, everybody say
"Yeah, yeah" (Come on, come on)
"Yeah, yeah" (Come on)

[Chorus: Alicia Keys]
In New York (Uh, yeah, oh)
Concrete jungle where dreams are made of
There's nothin' you can't do (Okay)
Now you're in New York (Uh, yeah, yeah)
These streets will make you feel brand-new
Big lights will inspire you (Okay)
Let's hear it for New York (Uh)
New York (Yeah), New York (Uh)`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775057528/Beyonce%CC%81_-_Halo_mwhql8.mp3",
        thumb: "img/t19.jpg",
        title: "Beyoncé - Halo",
        artist: "Beyoncé",
        genre: "Pop",
        lyrics: `[Verse 1]
Remember those walls I built?
Well, baby, they're tumblin' down
And they didn't even put up a fight
They didn't even make a sound
I found a way to let you in
But I never really had a doubt
Standin' in the light of your halo
I got my angel now

[Pre-Chorus]
It's like I've been awakened
Every rule, I had you breakin'
It's the risk that I'm takin'
I ain't ever gonna shut you out

[Chorus]
Everywhere I'm lookin' now
I'm surrounded by your embrace
Baby, I can see your halo
You know you're my savin' grace
You're everything I need and more
It's written all over your face
Baby, I can feel your halo
Pray it won't fade away
You might also like
Timeless (Taylor’s Version) [From The Vault]
Taylor Swift
The Tortured Poets Department
Taylor Swift
So Long, London
Taylor Swift
[Post-Chorus]
I can feel your halo, halo, halo
I can see your halo, halo, halo
I can feel your halo, halo, halo
I can see your halo, halo, halo, ooh

[Verse 2]
Hit me like a ray of sun
Burnin' through my darkest night
You're the only one that I want
Think I'm addicted to your light
I swore I'd never fall again
But this don't even feel like fallin'
Gravity can't begin
To pull me back to the ground again

[Pre-Chorus]
It's like I've been awakened
Every rule, I had you breakin'
The risk that I'm takin'
I'm never gonna shut you out

[Chorus]
Everywhere I'm lookin' now
I'm surrounded by your embrace
Baby, I can see your halo
You know you're my savin' grace
You're everything I need and more
It's written all over your face
Baby, I can feel your halo
Pray it won't fade away
[Post-Chorus]
I can feel your halo, halo, halo
I can see your halo, halo, halo
I can feel your halo, halo, halo
I can see your halo, halo, halo, ooh
I can feel your halo, halo, halo
I can see your halo, halo, halo
I can feel your halo, halo, halo
I can see your halo, halo, halo, ooh

[Bridge]
Halo, ooh
Halo, ooh
Ooh

[Chorus]
Everywhere I'm lookin' now
I'm surrounded by your embrace
Baby, I can see your halo
You know you're my savin' grace
You're everything I need and more
It's written all over your face
Baby, I can feel your halo
Pray it won't fade away

[Post-Chorus]
I can feel your halo, halo, halo
I can see your halo, halo, halo
I can feel your halo, halo, halo
I can see your halo, halo, halo, ooh
I can feel your halo, halo, halo
I can see your halo, halo, halo
I can feel your halo, halo, halo
I can see your halo, halo, halo, ooh`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775057838/The_Weeknd_-_Save_Your_Tears_Official_Audio_z4hkzt.mp3",
        thumb: "img/t20.jpg",
        title: "The Weeknd - Save Your Tears",
        artist: "The Weeknd",
        genre: "Pop",
        lyrics: `[Intro]
Ooh
Na-na, yeah

[Verse 1]
I saw you dancing in a crowded room (Uh)
You look so happy when I'm not with you
But then you saw me, caught you by surprise
A single teardrop falling from your eye

[Refrain]
I don't know why I run away
I make you cry when I run away

[Verse 2]
You could've asked me why I broke your heart
You could've told me that you fell apart
But you walked past me like I wasn't there
And just pretended like you didn't care

[Refrain]
I don't know why I run away
I make you cry when I run away

[Pre-Chorus]
Take me back 'cause I wanna stay
Save your tears for another
See The Weeknd Live
Get tickets as low as $57
You might also like
When Emma Falls in Love (Taylor’s Version) [From the Vault]
Taylor Swift
Castles Crumbling (Taylor’s Version) [From The Vault]
Taylor Swift
All I Want for Christmas Is You
Mariah Carey
[Chorus]
Save your tears for another day
Save your tears for another day (So)

[Verse 3]
I made you think that I would always stay
I said some things that I should never say
Yeah, I broke your heart like someone did to mine
And now you won't love me for a second time

[Refrain]
I don't know why I run away, oh, girl
Said, I make you cry when I run away

[Pre-Chorus]
Girl, take me back 'cause I wanna stay
Save your tears for another
I realize that I'm much too late
And you deserve someone better

[Chorus]
Save your tears for another day (Oh yeah)
Save your tears for another day (Yeah)

[Refrain]
I don't know why I run away
I'll make you cry when I run away
[Chorus]
Save your tears for another day
Ooh, girl, I said (Ah)
Save your tears for another day (Ah)

[Outro]
Save your tears for another day (Ah)
Save your tears for another day (Ah)`
    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775058275/The_Weeknd_-_Snowchild_Audio_nq20t8.mp3",
        thumb: "img/t20.jpg",
        title: "The Weeknd - Snowchild",
        artist: "The Weeknd",
        genre: "Pop",
        lyrics: `[Verse 1]
I used to pray when I was sixteen
If I didn't make it, then I'd probably make my wrist bleed
Not to mislead, turned my nightmares into big dreams
Whole squad mobbin' even though we only six deep
I was singing notes while my niggas played with six keys
Walking in the snow before I ever made my wrist freeze
I was blowing smoke, had me dizzy like Gillespie
Niggas had no homes, we were living in the dead streets
You couldn't find me like I'm Hoffa
Cover girls jumpin' out the page like they pop-ups
Spending all my money on these niggas that I brought up
Taking care of families for my brothers when they locked up
And I had nothing to believe in
Double cup leanin', couldn't even breathe and
For that money, I was fiending
Cali was the mission but now a nigga leaving

[Chorus]
Leaving, leaving into the night
Now a nigga leaving, leaving
Leaving into the night, oh

[Verse 2]
She like my futuristic sounds in the new spaceship
Futuristic sex, give her Philip K. dick
She never need a man, she what a man need
So I keep on falling for her daily
We was at Coachella going brazy
Stack a couple M's like I was Shady
Now I'm in Tribeca like I'm Jay-Z
Rockin' Sorayama like he pay me
I just signed a new deal with Mercedes
Got me movin' dirty like I'm Swayze
All my diamonds dancing like they Swayze
All my diamonds hitting like they Swae Lee
Jet so big got a business and a coach
Always livin' on the road, rockin' Louis à la mode, nigga
And for that money, I been fiending
Cali was the mission, but now a nigga leaving
See The Weeknd Live
Get tickets as low as $57
You might also like
Reflections Laughing
The Weeknd, Travis Scott & Florence + the Machine
Enjoy The Show
The Weeknd & Future
Take Me Back to LA
The Weeknd
[Chorus]
Leaving, leaving into the night
Now a nigga leaving, leaving
Leaving into the night, oh

[Bridge]
Twenty-mil' mansion, never lived in it
Zero-edge pool, never dipped in it
Superstar, neighbor in my business
Paparazzi tryna catch me slippin' and
Goin' on tour is my vacation
Every month, another accusation
Only thing I'm phobic of is failing
I was never blessed with any patience

[Chorus]
So a nigga leaving, leaving, leaving into the night
Now a nigga leaving, leaving
Leaving into the night, oh`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775059446/Shakira_-_Chantaje_Audio_ft._Maluma_lcpvyx.mp3",
        thumb: "img/t22.jpg",
        title: "Shakira - Chantaje ft. Maluma",
        artist: "Shakira",
        genre: "Latin",
        lyrics: `[Letra de "Chantaje" ft. Maluma]

[Intro]
(Rudeboyz)

[Verso 1: Maluma]
Cuando estás bien, te alejas de mí
Te sientes sola y siempre 'toy ahí
Es una guerra de toma y dame
Pues dame de eso que tiene' ahí
Oye, baby, no seas mala (Oh, no)
No me dejes con la' gana'
Se escucha en la calle que ya no me quieres
Ven y dímelo en la cara

[Pre-Coro: Shakira & Maluma]
Pregúntale a quien tú quieras
Vida, te juro que eso no es así
Yo nunca tuve una mala intención
Yo nunca quise burlarme de ti
Conmigo ves, nunca se sabe
Un día digo que no y otro que sí
Yo soy masoquista
Con mi cuerpo, un egoísta

[Coro: Shakira, Maluma & Ambos]
Tú eres puro, puro chantaje
Puro, puro chantaje
Siempre es a tu manera
Yo te quiero aunque no quiera
Tú eres puro, puro chantaje
Puro, puro chantaje
Vas libre como el aire
No soy de ti ni de nadie
See Shakira Live
Get tickets as low as $22
You might also like
Shakira - Chantaje ft. Maluma (English Translation)
Genius English Translations
Waka Waka (Esto es África)
Shakira
But Daddy I Love Him
Taylor Swift
[Verso 2: Maluma & Shakira]
Como tú me tientas cuando tú te mueves
Esos movimientos sexys, siempre me entretienen
Sabes manipularme bien con tus caderas
No sé por qué me tienes en lista de espera
Te dicen por ahí que voy haciendo y deshaciendo
Que salgo cada noche, que te tengo ahí sufriendo
Que en esta relación soy yo la que manda
No pares bola' a toda esa mala propaganda

[Puente: Shakira & Maluma]
Pa', pa' que te digo na', te comen el oído
No vaya a enderezar lo que no se ha torcido
Y como un loco sigo tras de ti, muriendo por ti
Dime qué hay pa' mí, bebé (¿Qué?)

[Pre-Coro: Shakira & Maluma]
Pregúntale a quien tú quieras
Vida, te juro que eso no es así
Yo nunca tuve una mala intención
Yo nunca quise burlarme de ti
Conmigo ves, nunca se sabe
Un día digo que no, y otro que sí
Yo soy masoquista
Con mi cuerpo, un egoísta
[Coro: Shakira, Maluma & Ambos]
Tú eres puro, puro chantaje
Puro, puro chantaje
Siempre es a tu manera
Yo te quiero aunque no quiera
Tú eres puro, puro chantaje
Puro, puro chantaje
Vas libre como el aire
No soy de ti ni de nadie

[Post-Coro: Shakira & Ambos]
Eh-eh-eh, nadie
Eh-eh-eh, nadie
Eh-eh-eh, nadie
Con mi cuerpo, un egoísta

[Coro: Shakira, Maluma & Ambos]
Tú eres puro, puro chantaje
Puro, puro chantaje
Siempre es a tu manera
Yo te quiero aunque no quiera
Tú eres puro, puro chantaje
Puro, puro chantaje
Vas libre como el aire
No soy de ti ni de nadie
[Post-Coro: Shakira & Ambos]
Eh-eh-eh, nadie
Eh-eh-eh, nadie
Eh-eh-eh, nadie
Eh-eh-eh-eh-eh-eh

[Outro: Shakira & Maluma]
(Alright, alright, baby, Shakira, Maluma)
Pretty boy
(You're my baby loba, Colombia, Rudeboyz, you feel me?)
Pretty boy`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775058791/Bad_Bunny_ft._Bomba_Este%CC%81reo_-_Ojitos_Lindos_Video_Oficial_Un_Verano_Sin_Ti_sehimp.mp3",
        thumb: "img/t5.jpg",
        title: "Bad Bunny ft. Bomba Estéreo - Ojitos Lindos",
        artist: "Bad Bunny",
        genre: "Latin",
        lyrics: `[Letra de "Ojitos Lindos"]

[Verso 1: Li Saumet]
Hace mucho tiempo le hago caso al corazón
Y pasan los día', los mese’ pensando en tu olor (En tu olor, en tu olor)
Ha llegado el tiempo para usar la razón
Ante' que sea tarde y sin querer me parta en do' (Parta en do’)

[Pre-Coro: Li Saumet]
Ante' de que salga el sol, hunde el acelerador
Aunque vaya sin freno' y pierda el control
Nada má' seremos do', tú y yo acariciándono'
En medio del tiempo, sin decir adió'

[Coro: Li Saumet]
Y solo mírame (Mírame) con esos ojito' lindo’ (Lindo’)
Que con еso yo estoy bien (-toy bien), hoy hе vuelto a nacer (Nacer)

[Verso 2: Bad Bunny]
Hace tiempo (Tiempo) que no agarro a nadie de la mano (Mano)
Hace tiempo (Tiempo) que no envío "Buenos días, te amo" (Te amo)
Pero, tú me tiene' enreda’o (Enreda'o), me envolví (Envolví)
Iba por mi camino y me perdí (Ey, ey)
Mi mirada cambió cuando tus ojos vi (Tus ojos vi)
Bye-bye a los culo', ni me despedí
Yo no te busqué (-qué), no (No), chocamo' en el trayecto
Con tu alma es la que yo conecto (-necto)
Tranquila, no tiene que ser perfecto, no
Aquí no existe el pecado (-cado) y equivocarse es bonito
Los errore’ son placere' (-cere'), igual que to' tus besito'
See Bad Bunny Live
Get tickets as low as $155
You might also like
Bad Bunny & Bomba Estéreo - Ojitos Lindos (English Translation)
Genius English Translations
GOD DID
DJ Khaled
The 30th
Billie Eilish
[Coro: Li Saumet, Bad Bunny & Li Saumet]
Y solo mírame (Mírame) con esos ojito' lindo' (Lindo')
Que con eso yo estoy bien (-toy bien), hoy he vuelto a nacer (Nacer)
Y solo mírame (Mírame) con esos ojito' lindo' (Lindo')
Que con eso yo estoy bien (-toy bien), hoy he vuelto a nacer (Nacer)

[Interludio: Li Saumet & Bad Bunny]
Tú y yo, tú y yo, tú y yo
Tú y yo, tú y yo
Tú y yo, tú y yo, tú y yo
Tú y yo, tú y yo
Tú y yo, tú y yo
Tú y yo, tú y yo

[Verso 3: Bad Bunny]
Yo no me dejo llevar de nadie
Yo solo me dejo llevar de tu sonrisa (-risa)
Y del lunar cerquita de tu boca (Boca)
Si yo estoy loco, tú estás loquita (-quita)
Pero, baby, como tú no hay otra, no (No)
Quiero regalarte girasole' (-sole')
Ir pa' la playa y buscarte caracole'
Cuando estoy contigo, yo no miro el Role' (Role')
Vamo' a bailar doscientas cancione' (-cione')
Nadie me pone como tú me pone' (Pone')
Mm-mmm, mm-mmm-mmm-mmm
Mm-mmm, mm-mmm-mmm-mmm
Yo le hablo a Dio' y tú ere' su respuesta
Aprendí que los momento' lindo' nunca cuestan
Como cuando me regalas tu mirada
Y el sol su puesta, y el sol su puesta
Ey, ey, cuando estoy encima de ti, de ti
Mami, yo me olvido de to', de to'
No hace falta nadie aquí
Solamente tú y yo
[Pre-Coro: Li Saumet]
Ante' de que salga el sol, hunde el acelerador
Aunque vaya sin freno' y pierda el control
Nada má' seremos do', tú y yo acariciándono'
En medio del tiempo, sin decir adió'

[Coro: Li Saumet]
Y solo mírame (Mírame) con esos ojito' lindo' (Lindo')
Que con eso yo estoy bien (-toy bien), hoy he vuelto a nacer (Nacer)
Y solo mírame (Mírame) con esos ojito' lindo' (Lindo')
Que con eso yo estoy bien (-toy bien), hoy he vuelto a nacer (Nacer)`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775059851/Tum_Ho_-_Rockstar_Full_Song_Audio_Ranbir_Kapoor_Mohit_Chauhan_AR_Rahman_Imtiaz_Ali_Nargis_Fakhri_ajycpt.mp3",
        thumb: "img/t23.jpg",
        title: "Mohit Chauhan, AR Rahman - Tum Ho",
        artist: "Mohit Chauhan, AR Rahman",
        genre: "Hindi",
        lyrics: `Oo-oho
Oo-oho-ho
Oo-oho
Tum ho

Tum ho paas mere
Saath mere, ho tum yoon
Jitnaa mehsoos karun tumko, utna hi paa bhi lun
Tum ho mere liye
Mere liye, ho tum yoon
Khud ko mein haar gaya tumko, tumko main jeeta hoon

Oo-oho
Oo-oho-ho
Oo-oho
Tum ho

Kahin se, kahin ko bhi
Aao bewajah chale
Pooche bina kisi se, hum mile
Oo-oho, bandishein naa rahin
Koi baaki, tum ho

Tum ho paas mere
Saath mere, ho tum yoon
Jitnaa mehsoos karun tumko, utna hi paa bhi lun

Oo-oho
Oo-oho-ho
Oo-oho

Kis tarah chhenega
Mujhse yeh jahaan tumhe
Tum bhi ho main
Kya fikar, ab hume

Tum ho mere liye
Mere liye, ho tum yoon
Khud ko mein haar gaya tumko, tumko main jeeta hoon

Oo-oho
Oo-oho-ho
Oo-oho
Tum ho`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775060119/Yeh_Fitoor_Mera_grgtqe.mp3",
        thumb: "img/t24.jpg",
        title: "Arjit Singh - Yeh Fitoor Mera",
        artist: "Arjit Singh",
        genre: "Hindi",
        lyrics: `Zindagi ne ki hai kaisi saazishein
Poori hui dil ki wo farmaishein
Maangi duaa ek tujh tak jaa pahunchi
Parvardigara, parvardigara
Kaisi suni tune meri khamoshi
O parvardigara

Ye fitoor mera laaya mujhko hai tere kareeb
Ye fitoor mera rehmat teri
Ye fitoor mera maine badla re mera naseeb
Ye fitoor mera chaahat teri
O parvardigara, parvardigara

Dheeme dheeme jal rahi thi khwaishein
Dil mein dabi, ghut rahi farmaaishein

Banke dhuaan wo
Tujh tak jaa pahunchi, parvardigara..
Deewangi ki hadd maine nochi o parvardigara

Ye fitoor mera laaya mujhko hai tere kareeb
Ye fitoor mera rehmat teri
Ye fitoor mera maine badla re mera naseeb
Ye fitoor mera chahat teri
O parvardigara, parvardigara

Ye fitoor mera laaya mujhko hai tere kareeb
Ye fitoor mera rehmat teri
Ye fitoor mera maine badla re mera naseeb
Ye fitoor mera chahat teri
Parvardigara…`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775060317/Tera_Hone_Laga_Hoon_Lyrics_-_Ajab_Prem_Ki_Gazab_Kahaani_Pritam_Atif_Aslam_Alisha_Chinai_euvjnk.mp3",
        thumb: "img/t25.jpg",
        title: "Atif Aslam - Tera Hone Laga Hoon Lyrics Pritam",
        artist: "Atif Aslam",
        genre: "Hindi",
        lyrics: `Shining in the setting sun like a pearl upon the ocean
Come and feel me, o feel me
Shining in the setting sun like a pearl upon the ocean
Come and heal me, o heal me

Thinking about the love we making and a life we sharing
Come and feel me, o feel me
Shining in the setting sun like a pearl up on the ocean
Come and feel me, come on heal me

Hua jo tu bhi mera mera
Tera jo ikraar hua
To kyun na main bhi, keh doon keh doon
Hua mujhe bhi pyaar hua

Tera hone laga hoon, khone laga hoon
Jab se mila hoon
Tera hone laga hoon, khone laga hoon
Jab se mila hoon

Shining in the setting sun like a pearl up on the ocean
Come and feel me, o feel me
Shining in the setting sun like a pearl up on the ocean
Come and heal me, o heal me

Waise toh mann mera
Pehle bhi raaton mein
Aksar hi chahat ke haan
Sapne sanjota tha
Pehle bhi dhadkan yeh
Dhun koi gaati thi
Par ab jo hota hai woh
Pehle na hota tha

Hua hai tujhe jo bhi jo bhi
Mujhe bhi iss baar hua
Toh kyun na main bhi keh doon keh doon
Hua mujhe bhi pyaar hua

Tera hone laga hoon, khone laga hoon
Jab se mila hoon
Tera hone laga hoon, khone laga hoon
Jab se mila hoon

Ankhon se chhu loon ke baahein tarasti hain
Dil ne pukara hai haan
Ab toh chale aao
Aao ke shabnam ki boonde barasti hain
Mausam ishara hai haan
Ab toh chale aao

Baahon mein daale baahein baahein
Baahon ka jaise haar hua
Haan maana maine maana maana
Hua mujhe bhi pyaar hua

Tera hone laga hoon, khone laga hoon
Jab se mila hoon
Tera hone laga hoon, khone laga hoon
Jab se mila hoon

Shining in the setting sun like a pearl up on the ocean
Come and feel me, o feel me
Shining in the setting sun like a pearl up on the ocean
Come and heal me, o heal me

Thinking about the love we making and a life we sharing
Come and feel me, o feel me
Shining in the setting sun like a pearl up on the ocean
Come and feel me, come on heal me`

    },


    {
        mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775061545/ROSALI%CC%81A_Ozuna_-_Yo_x_Ti_Tu_x_Mi_Official_Video_1_qdqgrw.mp3",
        thumb: "img/t4.jpg",
        title: "ROSALÍA, Ozuna - Yo x Ti, Tu x Mi",
        artist: "ROSALÍA",
        genre: "Latin",
        lyrics: `[Estribillo: ROSALÍA, Ozuna, El Guincho]
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí, hmm-hmm, hmm-hmm
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí (Woh, oh, oh; pongan lo' grillete')
Mami

[Verso 1: ROSALÍA]
Colgando del cuello los juguete' (Del cuello los juguete')
Rodeá' de flores y billete' (De flores y billete')
'Tamos worldwide a machete (Sí, sí)
Y mira, "bang-bang" si con nosotro' te entrometes (Pa-pa-pa), eh
No quieres que lo aprete (Yeah)
Me da igual si tu amor me compromete (Nah; me da igual)
Contigo apuesto to' al número siete (Siete, siete)
Si me caigo, que tú me sujetes (Eh, please)
Yo por ti, tú por mí, que me pongan los grillete' (Los grillete')

[Pre-Estribillo: ROSALÍA, Ozuna, Ambos]
Somos dos cantantes como los de ante'
El respeto e' en boletos y diamante'
Se me para el cora solo con mirarte
Porque a ti te canto pa' que tú me cante'
Somos dos cantantes como los de ante'
El respeto en boletos y diamante'
Se me para el cora solo con mirarte
Porque a ti te canto pa' que tú me cante'
See ROSALÍA Live
Get tickets as low as $55
You might also like
A&W
Lana Del Rey
Take Your Mask Off
Tyler, The Creator
THE DINER
Billie Eilish
[Estribillo: ROSALÍA & El Guincho]
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí, hmm-hmm, hmm-hmm
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí (Pongan lo' grillete')
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí, hmm-hmm, hmm-hmm
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí (Pongan lo' grillete')

[Verso 2: Ozuna]
(Woh-oh, oh-oh)
Y yo por ti, tú por mí, ¿quién lo diría? (Woh, oh, oh)
Eres única, mamacita Rosalía (Rosalía)
Tiene' el poder que mi mente desvía (Desvía)
Yo por ti por ahí me tiraría
Tienes lo que otra no tenía (Woh, oh)
Muy diferente a lo que de ti me decían (Woh, oh)
Choqué con tu química, qué suerte la mía (Woh, oh)
Lo que tengo lo gastaría porque tus ojos, mai', brillarían
Y es que, ¿quién lo diría
Que hasta en la esquina esta sazón sonaría?
Choqué con tu química, qué suerte la mía
Lo que tengo lo gastaría porque tus ojos, mai', brillarían, yeah

[Pre-Estribillo: ROSALÍA, Ozuna, Ambos]
Somos dos cantantes como los de ante'
El respeto e' en boletos y diamante'
Se me para el cora solo con mirarte
Porque a ti te canto pa' que tú me cante'
Somos dos cantantes como los de ante'
El respeto en boletos y diamante'
Se me para el cora solo con mirarte
Porque a ti te canto pa' que tú me cante'
[Estribillo: ROSALÍA & El Guincho]
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí, hmm-hmm, hmm-hmm
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí (Pongan lo' grillete')
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí, hmm-hmm, hmm-hmm
Yo por ti, tú por mí, yo por ti, tú por mí
Yo por ti, tú por mí (Pongan lo' grillete')
Yo por ti, tú por mí, yo por ti, tú por mí
(Que me pongan lo' grillete')
Yo por ti, tú por mí, hmm-hmm, hmm-hmm
(Que me pongan lo' grillete')
Yo por ti, tú por mí, yo por ti, tú por mí
(Que me pongan lo' grillete')
Yo por ti, tú por mí

[Outro: ROSALÍA]
La Rosalía
Mira, ¿quién lo diría (¿Qué?), que hasta en la esquina esta sazón sonaría?
Ozuna
¿Quién lo diría que hasta en la esquina esta sazón sonaría por ti?
¿Quién lo diría que hasta en la esquina esta sazón sonaría? (Hmm)
¿Quién lo diría? (Hmm)`

    },


];

// ─── State ───────────────────────────────────────────────────────────────────

const audio = el('audioPlayer');
let currentIdx = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let isSeeking = false;

audio.volume = 0.75;

// ─── Player UI ───────────────────────────────────────────────────────────────

function updatePlayerUI(s) {
    // Mini player
    const thumbSm = el('playerThumbSm');
    if (thumbSm) thumbSm.src = s.thumb;
    setText('nowTitleSm', s.title);
    setText('nowArtistSm', s.artist);

    // Fullscreen panel
    const npThumb = el('npThumb');
    if (npThumb) npThumb.src = s.thumb;
    setText('npTitle', s.title);
    setText('npArtist', s.artist);

    // Lyrics
    const lyricsEl = el('npLyrics');
    if (lyricsEl) {
        if (s.lyrics && s.lyrics !== 'Add lyrics here...') {
            lyricsEl.innerHTML = s.lyrics
                .split('\n')
                .map(line => `<p style="margin:0 0 8px">${line || '&nbsp;'}</p>`)
                .join('');
        } else {
            lyricsEl.innerHTML = '<p class="lyrics-placeholder">♪ No lyrics added yet ♪</p><p style="color:rgba(255,255,255,0.3);font-size:13px">Add a <code>lyrics</code> field to this song in script.js</p>';
        }
    }
}

function setPlayingState(playing) {
    isPlaying = playing;
    toggleClass('playBtnSm', 'playing', playing);
    toggleClass('npPlayBtn', 'playing', playing);
    toggleClass('playerMobile', 'is-playing', playing);
}

// ─── Playback ────────────────────────────────────────────────────────────────

function playSong(idx) {
    if (!songs.length) return;
    currentIdx = ((idx % songs.length) + songs.length) % songs.length;
    const s = songs[currentIdx];
    audio.src = s.mp3;
    audio.play().catch(e => console.warn('Audio play error:', e));
    setPlayingState(true);
    updatePlayerUI(s);
    renderShelves();
    buildSidebar();
}

function togglePlay() {
    if (currentIdx < 0) { playSong(0); return; }
    if (isPlaying) audio.pause(); else audio.play();
}

function nextSong() {
    playSong(isShuffle ? Math.floor(Math.random() * songs.length) : (currentIdx + 1) % songs.length);
}

function prevSong() {
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    playSong((currentIdx - 1 + songs.length) % songs.length);
}

function shuffleAll() {
    isShuffle = true;
    playSong(Math.floor(Math.random() * songs.length));
}

// ─── Audio events ────────────────────────────────────────────────────────────

audio.addEventListener('timeupdate', () => {
    if (!audio.duration || isSeeking) return;
    const ratio = audio.currentTime / audio.duration;
    // Mini bar
    setStyle('miniProgressFill', 'width', (ratio * 100) + '%');
    // Panel seek
    updateSeekUI(ratio);
    setText('npCurrentTime', fmt(audio.currentTime));
});

audio.addEventListener('loadedmetadata', () => {
    setText('npTotalTime', fmt(audio.duration));
});

audio.addEventListener('ended', () => {
    if (isRepeat) { audio.currentTime = 0; audio.play().catch(() => { }); }
    else nextSong();
});

audio.addEventListener('play', () => setPlayingState(true));
audio.addEventListener('pause', () => setPlayingState(false));
audio.addEventListener('error', () => {
    console.error('Audio failed to load:', audio.src);
    setPlayingState(false);
});

// ─── Draggable seek bar ───────────────────────────────────────────────────────

const npTrack = el('npTrack');
const npFill = el('npFill');
const npDot = el('npThumbDot');

function updateSeekUI(ratio) {
    const pct = (Math.max(0, Math.min(1, ratio)) * 100).toFixed(2) + '%';
    if (npFill) npFill.style.width = pct;
    if (npDot) npDot.style.left = pct;
}

function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}

function ratioFromEvent(e) {
    if (!npTrack) return 0;
    const r = npTrack.getBoundingClientRect();
    return Math.max(0, Math.min(1, (getClientX(e) - r.left) / r.width));
}

function onSeekStart(e) {
    if (!audio.duration) return;
    isSeeking = true;
    npTrack.classList.add('dragging');
    updateSeekUI(ratioFromEvent(e));
    setText('npCurrentTime', fmt(ratioFromEvent(e) * audio.duration));
}

function onSeekMove(e) {
    if (!isSeeking) return;
    e.preventDefault();
    const ratio = ratioFromEvent(e);
    updateSeekUI(ratio);
    setText('npCurrentTime', fmt(ratio * (audio.duration || 0)));
}

function onSeekEnd(e) {
    if (!isSeeking) return;
    isSeeking = false;
    npTrack.classList.remove('dragging');
    const ratio = ratioFromEvent(e.changedTouches
        ? { touches: e.changedTouches }
        : e);
    if (audio.duration) audio.currentTime = ratio * audio.duration;
}

if (npTrack) {
    // Touch (mobile)
    npTrack.addEventListener('touchstart', onSeekStart, { passive: true });
    npTrack.addEventListener('touchmove', onSeekMove, { passive: false });
    npTrack.addEventListener('touchend', onSeekEnd);

    // Mouse (desktop)
    npTrack.addEventListener('mousedown', e => {
        onSeekStart(e);
        const onMove = ev => onSeekMove(ev);
        const onUp = ev => { onSeekEnd(ev); window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    });
}

// ─── Fullscreen panel open / close ───────────────────────────────────────────

const npPanel = el('npPanel');
const npBackdrop = el('npBackdrop');

function openPanel() {
    if (!npPanel) return;
    npPanel.classList.add('open');
    if (npBackdrop) npBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePanel() {
    if (!npPanel) return;
    npPanel.classList.remove('open');
    if (npBackdrop) npBackdrop.classList.remove('open');
    document.body.style.overflow = '';
}

// Swipe down to close
if (npPanel) {
    let swipeStartY = 0;
    npPanel.addEventListener('touchstart', e => {
        swipeStartY = e.touches[0].clientY;
    }, { passive: true });
    npPanel.addEventListener('touchend', e => {
        if (e.changedTouches[0].clientY - swipeStartY > 80) closePanel();
    }, { passive: true });
}

// ─── Cards & shelves ─────────────────────────────────────────────────────────

function cardHTML(s, ri) {
    return `<div class="card ${ri === currentIdx ? 'playing' : ''}" id="card-${ri}" onclick="playSong(${ri})">
        <div class="card-art">
            <img src="${s.thumb}" alt="" onerror="this.style.opacity='0'">
            <div class="card-play">
                <svg width="12" height="12" fill="#000" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
        </div>
        <div class="card-body">
            <div class="card-title">${s.title}</div>
            <div class="card-desc">${s.artist}</div>
        </div>
    </div>`;
}

const GENRE_SECTIONS = [
    { label: 'Hip-Hop', genres: ['hip-hop'] },
    { label: 'Pop', genres: ['pop', 'indie pop', 'latin pop', 'dream pop'] },
    { label: 'Rock', genres: ['rock', 'indie rock', 'alt rock', 'soft rock', 'pop rock', 'alternative rock'] },
    { label: 'Alternative Rock', genres: ['alternative rock', 'synth-pop', 'alt rock'] },
    { label: 'Jazz', genres: ['jazz'] },
    { label: 'Latin', genres: ['latin', 'latin pop', 'reggaeton'] },
    { label: '80s Pop', genres: ['80s pop', 'synth-pop'] },
    { label: 'Hindi', genres: ['Hindi'] },

];

function renderShelves() {
    const rowAll = el('rowAll');
    if (rowAll) {
        rowAll.innerHTML = songs.length
            ? songs.map((s, i) => cardHTML(s, i)).join('')
            : '<div class="no-results">No songs yet</div>';
    }

    const genreContainer = el('genreSections');
    if (!genreContainer) return;
    genreContainer.innerHTML = '';

    GENRE_SECTIONS.forEach(section => {
        const matches = songs.filter(s =>
            section.genres.map(g => g.toLowerCase()).includes((s.genre || '').toLowerCase())
        );
        if (!matches.length) return;

        const rowId = `genre-row-${section.label.toLowerCase().replace(/\s+/g, '-')}`;
        const sectionEl = document.createElement('section');
        sectionEl.className = 'shelf';
        sectionEl.setAttribute('data-genre', section.label.toLowerCase());
        sectionEl.innerHTML = `
            <div class="shelf-header"><h2 class="shelf-title">${section.label}</h2></div>
            <div class="shelf-scroll-wrap">
                <div class="shelf-row" id="${rowId}">
                    ${matches.map(s => cardHTML(s, songs.indexOf(s))).join('')}
                </div>
            </div>`;
        genreContainer.appendChild(sectionEl);
    });
}

function renderTracks() { renderShelves(); }

function buildSidebar() {
    const sidebar = el('sidebarList');
    if (!sidebar) return;
    sidebar.innerHTML = songs.map((s, i) => `
        <div class="sb-item ${i === currentIdx ? 'active' : ''}" onclick="playSong(${i})">
            <div class="sb-thumb"><img src="${s.thumb}" alt="" onerror="this.parentElement.textContent='🎵'"></div>
            <div style="min-width:0"><div class="sb-name">${s.title}</div><div class="sb-meta">${s.artist}</div></div>
        </div>`).join('');
}

// ─── Chip filter → scroll to section ─────────────────────────────────────────

document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const label = chip.textContent.trim();
        if (label === 'All') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
        const target = document.querySelector(`.shelf[data-genre="${label.toLowerCase()}"]`);
        if (target) {
            const y = target.getBoundingClientRect().top + window.scrollY - 108;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// ─── Init ────────────────────────────────────────────────────────────────────

buildSidebar();
renderShelves();