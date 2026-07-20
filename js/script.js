// メイン（左のでかい）画像と小さな六つの画像のdocumentを取得する
const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".placeholder-thumb img");

// 選択された画像の切り替えとかかる時間設定
for(let i = 0; i < thumbnails.length;i++){
  thumbnails[i].addEventListener("mouseover",(event) =>{
    mainImage.src = event.target.src;
    mainImage.animate({opacity:[0,1]},500);
  });
}

// フワッとした感じで切り替わるようにする設定
thumbnails.forEach((thumbnail)=>{
  thumbnail.addEventListener("mouseover",(event) =>{
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0,1]},500);
  });
});