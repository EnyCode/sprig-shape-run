/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "a"
const playerR = "b"
const playerU = "c"
const playerL = "d"
const spike = "e"
const block = "f"
const ping = "g"
const floorSpike = "h"
const smallSpike = "i"
const blockTwo = "j"
const floorPurple = "w"
const backgroundPurple = "x"
const floorBlue = "y"
const backgroundBlue = "z"

setLegend(
  [ player, bitmap`
0000000000000000
0333333333333330
0330000330000330
0330660330660330
0330660330660330
0330000330000330
0333333333333330
0330000330000330
0330..0330..0330
0000..0000..0000
................
................
0000000000000000
0333333333333330
0333333333333330
0000000000000000` ],
  [ playerR, bitmap`
0000..0000000000
0330..0333333330
0330..0333333330
0330..0003000030
0330....03066030
0330....03066030
0330..0003000030
0330..0333333330
0330..0333333330
0330..0003000030
0330....03066030
0330....03066030
0330..0003000030
0330..0333333330
0330..0333333330
0000..0000000000` ],
  [ playerU, bitmap`
0000000000000000
0333333333333330
0333333333333330
0000000000000000
................
................
0000..0000..0000
0330..0330..0330
0330000330000330
0333333333333330
0330000330000330
0330660330660330
0330660330660330
0330000330000330
0333333333333330
0000000000000000` ],
  [ playerL, bitmap`
0000000000..0000
0333333330..0330
0333333330..0330
0300003000..0330
03066030....0330
03066030....0330
0300003000..0330
0333333330..0330
0333333330..0330
0300003000..0330
03066030....0330
03066030....0330
0300003000..0330
0333333330..0330
0333333330..0330
0000000000..0000` ],
  [ spike, bitmap`
.......22.......
.......22.......
......2002......
......2002......
.....200002.....
.....200002.....
....20000002....
....20000002....
...2000000002...
...2000000002...
..200000000002..
..200000000002..
.20000000000002.
.20000000000002.
2000000000000002
2222222222222222` ],
  [ block, bitmap`
2222222222222222
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2222222222222222` ],
  [ ping, bitmap`
................
................
......777.......
.....77777......
.....77777......
.....77777......
......777.......
.......0........
.......0........
.......0........
.......0........
.......0........
.......0........
.......0........
.......0........
.......0........` ],
  [ floorSpike, bitmap`
................
................
................
................
................
............D...
......D.....DD..
......DD....DD..
.....DDD.0.DDDD.
.D...DDDD0.DDDD.
.DDD.DDD000DDD0.
.D0DDD0D000DD00.
DD0DD00D0000D00.
D000000000000000
D000000000000000
0000000000000000` ],
  [ smallSpike, bitmap`
................
................
................
................
................
................
................
................
.......22.......
......2002......
.....200002.....
....20000002....
...2000000002...
..200000000002..
.20000000000002.
2222222222222222` ],
  [ blockTwo, bitmap `
0000020000200000
0000020000200000
0000020000200000
0000020000200000
0000020000200000
2222222222222222
0000020000200000
0000020000200000
0000020000200000
0000020000200000
2222222222222222
0000020000200000
0000020000200000
0000020000200000
0000020000200000
0000020000200000` ],
  [ floorPurple, bitmap`
2222222222222222
8888888888888888
8888888888888888
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH` ],
  [ backgroundPurple, bitmap`
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH` ],
  [ floorBlue, bitmap`
2222222222222222
7777777777777777
7777777777777777
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555` ],
  [ backgroundBlue, bitmap`
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555` ],
)

const mapSprites = [floorBlue, floorPurple, spike, block, ping, floorSpike, smallSpike, blockTwo]
const collision = [block, blockTwo, floorBlue, floorPurple]
const playerSprites = [player, playerR, playerU, playerL]
const evilSprites = [spike, floorSpike, block, blockTwo]


const levels = [
  map`
..........
..........
..........
..........
..........
..........
.a........
yyyyyyyyyy`
]

setSolids([])
setMap(levels[0])

setPushables({
  [ player ]: []
})

onInput("w", () => {
  let onGround = false
  let player
  for (let x = 0; x < playerSprites.length; x++) {
    player = getFirst(playerSprites[x])
    if (player) {
      break
    }
  }
  getTile(player.x, player.y + 1).forEach((t) => {
    console.log(t.type)
    if (collision.indexOf(t.type) >= 0) {
      onGround = true
    }
  })
  
  if (onGround) {
    velocity = -1.5
  }
})

afterInput(() => {
  
})

let monoCraziness = [bitmap`
........................................
........................................
........................................
............................9...........
.........................9..0...........
......................9..0..0...........
.......3.....83.....330CC0CC0......33...
55555555555555555555HHHHHHHHHHHHHHHHHHHH
55555555555555555555HHHHHHHHHHHHHHHHHHHH
55555555555555555555HHHHHHHHHHHHHHHHHHHH
55555555555555555555HHHHHHHHHHHHHHHHHHHH
55555555555555555555HHHHHHHHHHHHHHHHHHHH
55555555555555555555HHHHHHHHHHHHHHHHHHHH
55555555555555555555HHHHHHHHHHHHHHHHHHHH
55555555555555555555HHHHHHHHHHHHHHHHHHHH
55555555555555555555HHHHHHHHHHHHHHHHHHHH`, bitmap`
........................................
........................................
........................................
........................................
..............................3.........
..................3......LLLLLLLLL......
....LLLLLLLLCCLLLLLLLLLCCLLLLLLLLL......
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH` ]

const elementMap = {
  "3": spike,
  "0": block,
  "9": ping,
  "C": floorSpike,
  "8": smallSpike,
  "L": blockTwo,
}

const backgroundMap = {
  "5": backgroundBlue,
  "H": backgroundPurple,
}

const floorMap = {
  "5": floorBlue,
  "H": floorPurple,
}

function parseLevel(level, first) {
  let lines = level.split("\n")
  let color = lines[16].charAt(0)
  if (first) {setBackground(backgroundMap[color])}
  let map = []
  lines.splice(-8)

  lines.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      if (!map[i]) {
        map[i] = []
      }
      map[i].push(line[i])
    }
  })
  return map
}

let level = new Array()
for (let i = 0; i < monoCraziness.length; i++) {
  level = level.concat(parseLevel(monoCraziness[i], i == 0))
}
let line = 3

const gravity = 1
let velocity = 0
let playerHeight = 0

function placeMap() {
  let current = level[line]
  if (current) {
    for (let x = 0; x < 8; x++) {
      let t = current[x]
      if (x < 7) {
        if (t == ".") {
          continue
        }
        addSprite(9, x, elementMap[t])
      } else {
        addSprite(9, 7, floorMap[t])
        setTimeout(() => {setBackground(backgroundMap[t])}, 5000)
      }
    }
    line += 1
  }
}

function moveMap() {
  let player
  for (let x = 0; x < playerSprites.length; x++) {
    player = getFirst(playerSprites[x])
    if (player) {
      break
    }
  }
  
  let sprites = new Array()
  mapSprites.forEach((s) => {
    sprites = sprites.concat(getAll(s))
  })

  sprites.forEach((s) => {
    if (evilSprites.indexOf(s.type) >= 0) {
      if (s.x == player.x && s.y == player.y) {
        console.log("Game Over!")
      }
    }
    if (s.x == 0) {
      s.remove()
    }
    s.x -= 1
  })
}

function movePlayer() {
  let player
  for (let x = 0; x < playerSprites.length; x++) {
    player = getFirst(playerSprites[x])
    if (player) {
      break
    }
  }

  let newY = player.y + Math.round(velocity)
  let collide = false
  getTile(player.x, newY).forEach((t) => {
    if (t.type == block || t.type == blockTwo) {
      collide = true
    }
  })
  if (newY < 7 && !collide) {
    player.y = newY
  }
  if (velocity < 1) {
    velocity += 0.5
  }
  
  
  setTimeout(movePlayer, 250)
}

function gameLoop() {
  moveMap()
  placeMap()

  setTimeout(gameLoop, 500)
}

gameLoop()
movePlayer()
