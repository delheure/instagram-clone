const btnTxtMore = document.querySelector(".btn_txt_more");
const feedTxt = document.querySelector(".feeds_txt p");

btnTxtMore.addEventListener("click", () => {
  feedTxt.classList.add("all");
  btnTxtMore.remove();
});

const likes = document.querySelectorAll(".btn_heart");
const likeCount = document.querySelector(".like_count span");

for (const like of likes) {
  let num = 0;
  like.addEventListener("click", function () {
    this.classList.toggle("on");
    num += 1;
    likeCount.innerHTML = `${num}개`;
  });
}

const cmtBox = document.querySelector(".cmt_list");
const cmtInput = document.querySelector(".cmt_write input");
const cmtBtn = document.querySelector(".btn_submit");

cmtBtn.addEventListener("click", e => {
  e.preventDefault();
  if (!cmtInput.value) {
    return;
  } else {
    cmtBox.insertAdjacentHTML(
      "afterbegin",
      `<li>
        <p>
            <strong class="user_id">${"delheure"}</strong>
            ${cmtInput.value}
        </p>
        <button class="btn_heart btn_small btn_com">Like</button>
    </li>`
    );
    cmtInput.value = "";
  }
});
