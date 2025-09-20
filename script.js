const snacks = [
    ["コリスのフエラムネ", 60],
    ["明治のヤンヤンつけボー", 220],
    ["西島製菓のきなこ棒", 30],
    ["ブルボンのアルフォート", 150],
    ["フィリックスフーセンガム", 10],
    ["チュッパチャップス", 50],
    ["ヤマザキビスケットのエアリアル", 140],
    ["明治チューンガムのガブリチュウ", 30],
    ["ねるねるねるね", 140],
    ["宮田製菓のヤングドーナツ", 50],
    ["蒲焼さん太郎", 10],
    ["どら焼き", 110],
    ["東豊製菓のポテトフライ", 40],
    ["もぎもぎフルーツ", 70],
    ["オリオンのミニコーラ", 20]
]

// DOMContentLoadedイベントでページ読み込み後に実行
document.addEventListener('DOMContentLoaded', function() {
    let div = document.getElementById('div-snacks');

    // forループでスナック一覧を動的に生成
    for (let i = 0; i < snacks.length; i++) {
        let snack = snacks[i];
        let snackName = snack[0];
        let snackPrice = snack[1];

        // チェックボックス要素を作成
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'snacks';
        input.id = 'snacks-' + i;
        input.value = snackPrice;

        // ラベル要素を作成
        let label = document.createElement('label');
        label.setAttribute('for', 'snacks-' + i);
        label.textContent = snackName;

        // 改行要素を作成
        let br = document.createElement('br');

        // div要素に追加
        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(br);
    }

    let button = document.getElementById('submitButton');
    let header = document.getElementById('header');
    let description = document.getElementById('description');
    let image_girl = document.getElementById('image-girl');
    let image_boy =document.getElementById('image-boy');
    button.addEventListener('click', function() {
        let total = 0;
        for (let i = 0; i < snacks.length; i++) {
            let input = document.getElementById('snacks-'+i);
            if (input.checked) {
                total += parseInt(input.value);
            }
        };
        console.log(total);

        if (total > 300) {
            header.textContent = 'バースト！！！';
            description.textContent = 'あなたは先生に怒られてしまった...';
            image_girl.src='./image/sensei_okoru.png';
            image_boy.src='./image/sensei_okoru.png';
        } else if (total === 300) {
            header.textContent = 'ブラックジャック';
            description.textContent = 'あなたは完璧なおやつの組み合わせを編み出した！';
            image_girl.src='./image/oishii6_woman.png';
            image_boy.src='./image/oishii2_man.png';
        } else if (total > 250) {
            header.textContent = 'ほぼジャスト';
            description.textContent = 'あともうちょっとで完璧！！';
            image_girl.src='./image/sweets_peropero_candy_girl.png';
            image_boy.src='./image/sweets_peropero_candy_boy.png';
        } else if (total > 150) {
            header.textContent = '足りなすぎ';
            description.textContent = 'もう少し食べたいなぁ';
            image_girl.src='./image/sweets_okashi_erabu_girl.png';
            image_boy.src='./image/sweets_okashi_erabu_boy.png';
        } else if (total <= 150) {
            header.textContent = '飢餓状態';
            description.textContent = 'あなたは空腹で倒れてしまった...';
            image_girl.src='./image/necchuusyou_taoreru_girl.png';
            image_boy.src='./image/necchuusyou_taoreru_boy.png';
        };
    });
});