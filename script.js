//ブロックimgの取得
let box = document.getElementById("box");
box.style.visibility = 'collapse';
//ブロックimgの親要素の取得
let block_box = document.getElementById("block_box");
//ステージのidの取得
let stage = document.getElementById("stage");
let stage_block = document.getElementById("stage_block");
let field_stage = document.getElementById("field_stage");

let stage_block_x = box.offsetLeft;
let stage_block_y = box.offsetTop;

//ステージのコマ数
const stage_width = 10;
const stage_height = 22;

//ステージ背景
for (let stage_x = 0; stage_x < stage_width; stage_x++) {
    for (let stage_y = 0; stage_y < stage_height; stage_y++) {
        //クローンを作る
        let clone_stage = stage_block.cloneNode(true);
        stage_block.after(clone_stage);
        //座標の移動
        clone_stage.style.left = stage_block_x + stage_x * 35 + 'px';
        clone_stage.style.top = stage_block_y + stage_y * 35 + 'px';
    }
}

//ブロック総数は4コマ
const block_tile = 4;

//座標の取得
let box_tile = box.getBoundingClientRect();

//ブロックの配列
let tile = [
    [0,0,0,0],
    [1,1,0,0],
    [0,1,1,0],
    [0,0,0,0]
];

//console.log(tile[2][2]);

//ブロック配列のx、yの取得
let x = box.offsetLeft;
let y = box.offsetTop;

let i = 0;

for (let tile_x = 0; tile_x < block_tile; tile_x++) {
    for (let tile_y = 0; tile_y < block_tile; tile_y++) {
        box.id = "box" + i;
        //クローンを作る
        let clone_box = box.cloneNode(true);
        box.after(clone_box);
        //box[i] = clone_box;
        //box[i].style.visibility = 'hidden';
        //座標の移動
        clone_box.style.left = x + tile_x * 35 + 'px';
        clone_box.style.top = y + tile_y * 35 + 'px';
        block_box.insertBefore(box,box[i]);
        i++;
        //clone_box = clone_box + [i];
        //16回取得したかの確認
        //let clone_box_tile = clone_box.getBoundingClientRect();
        //console.log(clone_box_tile);
        if (tile[tile_y][tile_x] === 1) {
            clone_box.style.visibility = 'visible';
        }
    }
}


//オリジナルを消す処理
box.id = "box" + i;
box16.style.visibility = 'collapse';



//ブロック配列のx、yの再取得(おまけ)
x = box.offsetLeft;
y = box.offsetTop;
//座標の表示
console.log(box_tile);
console.log("要素の座標はx:" + x + "、y:" + y + "です。");

//当たり判定
let card = document.getElementById("block_box");
let card_x = card.offsetLeft;
let card_y = card.offsetTop;
console.log("card要素の座標はx:" + card_x + "、y:" + card_y + "です。");

//おじゃまブロック
let wall_block = document.getElementById("wall_block");
let wall_x = box.offsetLeft;
let wall_y = box.offsetTop;

for (let i = 0; i <= 3; i++) {
    wall_block.id = "wall_block" + i;
    //クローンを作る
    let clone_wall = wall_block.cloneNode(true);
    wall_block.after(clone_wall);
    //座標の移動
    block_box.insertBefore(clone_wall,clone_wall[i]);
}

//clone_wall.style.left = wall_x + 9 * 35 + 'px';
//clone_wall.style.top = wall_y + 21 * 35 + 'px';

/*let field_block = [];
let field_left = 10;
let field_top = 22;*/



//drawField();




//ブロックの移動(アロー関数)
const push_move = () => {
    card_x = card.offsetLeft;
    card_y = card.offsetTop;
}

document.addEventListener ("keydown", (e) => {
    if (e.keyCode === 37) {
        //左
        //if (check_move === turu) {
            push_move();
            card.style.left = card_x - 35 + 'px';
            console.log(card_x);
        //}
    }
    if (e.keyCode === 38) {
        //上
        push_move();
        card.style.top = card_y - 35 + 'px';
    }
    if (e.keyCode === 39) {
        //右
        push_move();
        card.style.left = card_x + 35 + 'px';
    }
    if (e.keyCode === 40) {
        //下
        push_move();
        card.style.top = card_y + 35 + 'px';
    }
    if (e.keyCode === 32) {
        //回転
        push_move();
        card.style.top = card_y + 35 + 'px';
    }
});



/*
//ブロックの配列
let tile = [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]
];

//console.log(tile[2][2]);

//ブロック配列のx、yの取得
let x = box.offsetLeft;
let y = box.offsetTop;

let i = 0;

for (let tile_x = 0; tile_x < block_tile; tile_x++) {
    for (let tile_y = 0; tile_y < block_tile; tile_y++) {
        box.id = "box" + i;
        //クローンを作る
        let clone_box = box.cloneNode(true);
        box.after(clone_box);
        //box[i] = clone_box;
        //box[i].style.visibility = 'hidden';
        //座標の移動
        clone_box.style.left = x + tile_x * 35 + 'px';
        clone_box.style.top = y + tile_y * 35 + 'px';
        block_box.insertBefore(box,box[i]);
        i++;
        //clone_box = clone_box + [i];
        //16回取得したかの確認
        //let clone_box_tile = clone_box.getBoundingClientRect();
        //console.log(clone_box_tile);
        if (tile[tile_y][tile_x] === 1) {
            clone_box.style.visibility = 'visible';
        }
    }
}
*/




/*document.addEventListener ("keydown", (e) => {
    if (e.keyCode === 37) {
        //左
        for (i = 0; i < block_tile * block_tile; i++) {
            push_move();
            box[i].style.left = x - 35 + 'px';
        }
    }
    if (e.keyCode === 38) {
        //上
        for (i = 0; i < block_tile * block_tile; i++) {
            push_move();
            box[i].style.top = y - 35 + 'px';
        }
    }
    if (e.keyCode === 39) {
        //右
        for (i = 0; i < block_tile * block_tile; i++) {
            push_move();
            box[i].style.left = x + 35 + 'px';
        }
    }
    if (e.keyCode === 40) {
        //上
        for (i = 0; i < block_tile * block_tile; i++) {
            push_move();
            box[i].style.top = y + 35 + 'px';
        }
    }
    if (e.keyCode === 32) {
        //上
        for (i = 0; i < block_tile * block_tile; i++) {
            push_move();
            box[i].style.top = y + 35 + 'px';
        }
    }
});*/









/*const move_x = (push_x) => {
    for (i = 0; i < block_tile * block_tile; i++) {
        push_move();
        box[i].style.left = push_x + 'px';
    }
}

const move_y = (push_y) => {
    for (i = 0; i < block_tile * block_tile; i++) {
        push_move();
        box[i].style.top = push_y + 'px';
    }
}

document.addEventListener ("keydown", (e) => {
    if (e.keyCode === 37) {
        //左
        move_x(x - 35);
    }
    if (e.keyCode === 38) {
        //上
        move_y(y - 35);
    }
    if (e.keyCode === 39) {
        //右
        move_x(x + 35);
    }
    if (e.keyCode === 40) {
        //上
        move_y(y + 35);
    }
});*/




/*const push_direction = (push_x,push_y) => {
    document.addEventListener ("keydown", (e) => {
        if (e.keyCode === 37,e.keyCode === 39) {
            for (i = 0; i < block_tile * block_tile; i++) {
                push_move();
                box[i].style.left = push_x + 'px';
            }
        }
        if (e.keyCode === 38,e.keyCode === 40) {
            for (i = 0; i < block_tile * block_tile; i++) {
                push_move();
                box[i].style.top = push_y + 'px';
            }
        }
    });
}*/



//ブロックの移動
/*document.addEventListener ("keydown", (e) => {
    if (e.keyCode === 37) {
        for (i = 0; i < block_tile * block_tile; i++) {
            //左
            x = box[i].offsetLeft;
            y = box[i].offsetTop;
            box[i].style.left = x - 35 + 'px';
            //console.log(box[i]);
        }
    }
    if (e.keyCode === 38) {
        //上
        for (i = 0; i < block_tile * block_tile; i++) {
            x = box[i].offsetLeft;
            y = box[i].offsetTop;
            box[i].style.top = y - 35 + 'px';
        }
    }
    if (e.keyCode === 39) {
        //右
        for (i = 0; i < block_tile * block_tile; i++) {
            x = box[i].offsetLeft;
            y = box[i].offsetTop;
            box[i].style.left = x + 35 + 'px';
            //console.log(box[i]);
        }
    }
    if (e.keyCode === 40) {
        //下
        for (i = 0; i < block_tile * block_tile; i++) {
            x = box[i].offsetLeft;
            y = box[i].offsetTop;
            box[i].style.top = y + 35 + 'px';
        }
    }
});*/



