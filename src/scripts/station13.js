function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let checkbox = document.getElementById('check').checked;
  if (checkbox) {
    document.getElementById("text").style.backgroundColor = "red";
  } else if (checkbox == false) {
    document.getElementById("text").style.backgroundColor = "transparent";
  }
}
