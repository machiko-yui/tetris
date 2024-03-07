//ブロックimgの取得
let box = document.getElementById("box");
box.style.visibility = 'hidden';
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

for (let tile_x = 0; tile_x < block_tile; tile_x++) {
    for (let tile_y = 0; tile_y < block_tile; tile_y++) {
        //クローンを作る
        let clone_box = box.cloneNode(true);
        box.after(clone_box);
        //座標の移動
        clone_box.style.left = x + tile_x * 35 + 'px';
        clone_box.style.top = y + tile_y * 35 + 'px';
        //clone_box = clone_box + [i];
        //16回取得したかの確認
        //let clone_box_tile = clone_box.getBoundingClientRect();
        //console.log(clone_box_tile);
        if (tile[tile_y][tile_x] === 1) {
            clone_box.style.visibility = 'visible';
        }
    }
}

//ブロック配列のx、yの再取得
x = box.offsetLeft;
y = box.offsetTop;

//座標の表示
console.log(box_tile);
console.log("要素の座標はx:" + x + "、y:" + y + "です。");