x<script type="text/javascript">

function play_game() 

{

var level = 160; // Game level, by decreasing will speed up

var rect_w = 45; // Width 

var rect_h = 30; // Height

var inc_score = 50; // Score

var snake_color = "#006699"; // Snake Color

var ctx; // Canvas attributes

var tn = []; // temp directions storage

var x_dir = [-1, 0, 1, 0]; // position adjusments

var y_dir = [0, -1, 0, 1]; // position adjusments

var queue = []; 

var frog = 1; // defalut food

var map = [];

var MR = Math.random; 

var X = 5 + (MR() * (rect_w - 10))|0; // Calculate positions

var Y = 5 + (MR() * (rect_h - 10))|0; // Calculate positions

var direction = MR() * 3 | 0; 

var interval = 0;

var score = 0;

var sum = 0, easy = 0;

var i, dir;

// getting play area 

var c = document.getElementById('playArea');

ctx = c.getContext('2d');

// Map positions

for (i = 0; i < rect_w; i++)

{

map[i] = [];

}

// random placement of snake food

function rand_frog() 

{

var x, y;

do 

{

x = MR() * rect_w|0;

y = MR() * rect_h|0;

} 

while (map[x][y]);

map[x][y] = 1;

ctx.fillStyle = snake_color;

ctx.strokeRect(x * 10+1, y * 10+1, 8, 8);

}

// Default somewhere placement 

rand_frog();

function set_game_speed() 

{

if (easy) 

{

X = (X+rect_w)%rect_w;

Y = (Y+rect_h)%rect_h;

}

--inc_score;

if (tn.length) 

{

dir = tn.pop();

if ((dir % 2) !== (direction % 2)) 

{

direction = dir;

}

}

if ((easy || (0 <= X && 0 <= Y && X < rect_w && Y < rect_h)) && 2 !== map[X][Y]) 

{

if (1 === map[X][Y]) 

{

score+= Math.max(5, inc_score);

inc_score = 50;

rand_frog();

frog++;

}

￼

￼

Simple Snake Game | HTML5 canvas & javascript

 August 11, 2017  admin  HTML 5 & CSS3, Java script, Tutorials

Simple Snake Game HTML5 canvas & javascript

I had executed a snake amusement with HTML5 canvas + Javascript. Simply investigate this live demo, it’s straightforward and light weight code you can utilize this content in 404 blunder pages and site down upkeep.

This code contains three capacities play_game(), rand_frog() and set_game_speed(). On the off chance that you need to change the amusement topic, adjust these five variable esteems, for example, level, rect_w, rect_h, inc_score and snake_color.

 Live Demo   Download Source Code

Script.js

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

58

59

60

61

62

63

64

65

66

67

68

69

70

71

72

73

74

75

76

77

78

79

80

81

82

83

84

85

86

87

88

89

90

91

92

93

94

95

96

97

98

99

100

101

102

103

104

105

106

107

108

109

110

111

112

113

114

115

116

117

118

119

120

121

122

<script type="text/javascript">

function play_game() 

{

var level = 160; // Game level, by decreasing will speed up

var rect_w = 45; // Width 

var rect_h = 30; // Height

var inc_score = 50; // Score

var snake_color = "#006699"; // Snake Color

var ctx; // Canvas attributes

var tn = []; // temp directions storage

var x_dir = [-1, 0, 1, 0]; // position adjusments

var y_dir = [0, -1, 0, 1]; // position adjusments

var queue = []; 

var frog = 1; // defalut food

var map = [];

var MR = Math.random; 

var X = 5 + (MR() * (rect_w - 10))|0; // Calculate positions

var Y = 5 + (MR() * (rect_h - 10))|0; // Calculate positions

var direction = MR() * 3 | 0; 

var interval = 0;

var score = 0;

var sum = 0, easy = 0;

var i, dir;

// getting play area 

var c = document.getElementById('playArea');

ctx = c.getContext('2d');

// Map positions

for (i = 0; i < rect_w; i++)

{

map[i] = [];

}

// random placement of snake food

function rand_frog() 

{

var x, y;

do 

{

x = MR() * rect_w|0;

y = MR() * rect_h|0;

} 

while (map[x][y]);

map[x][y] = 1;

ctx.fillStyle = snake_color;

ctx.strokeRect(x * 10+1, y * 10+1, 8, 8);

}

// Default somewhere placement 

rand_frog();

function set_game_speed() 

{

if (easy) 

{

X = (X+rect_w)%rect_w;

Y = (Y+rect_h)%rect_h;

}

--inc_score;

if (tn.length) 

{

dir = tn.pop();

if ((dir % 2) !== (direction % 2)) 

{

direction = dir;

}

}

if ((easy || (0 <= X && 0 <= Y && X < rect_w && Y < rect_h)) && 2 !== map[X][Y]) 

{

if (1 === map[X][Y]) 

{

score+= Math.max(5, inc_score);

inc_score = 50;

rand_frog();

frog++;

}

//ctx.fillStyle("#ffffff");

ctx.fillRect(X * 10, Y * 10, 9, 9);

map[X][Y] = 2;

queue.unshift([X, Y]);

X+= x_dir[direction];

Y+= y_dir[direction];

if (frog < queue.length) 

{

dir = queue.pop()

map[dir[0]][dir[1]] = 0;

ctx.clearRect(dir[0] * 10, dir[1] * 10, 10, 10);

}

} 

else if (!tn.length) 

{

var msg_score = document.getElementById("msg");

msg_score.innerHTML = "Thank you for playing game.<br /> Your Score : <b>"+score+"</b><br /><br /><input type='button' value='Play Again' onclick='window.location.reload();' />";

document.getElementById("playArea").style.display = 'none';

window.clearInterval(interval);

}

}

interval = window.setInterval(set_game_speed, level);

document.onkeydown = function(e) {

var code = e.keyCode - 37;

if (0 <= code && code < 4 && code !== tn[0]) 

{

tn.unshift(code);

} 

else if (-5 == code) 

{

if (interval) 

{

window.clearInterval(interval);

interval = 0;

} 

else 

{

interval = window.setInterval(set_game_speed, 60);

}

}

else 

{ 

dir = sum + code;

if (dir == 44||dir==94||dir==126||dir==171) {

sum+= code

} else if (dir === 218) easy = 1;

}

}

}
