const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("reset_button");

const blockInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");

const blocks = document.querySelectorAll(".grid-item");

function resetAll() {
  blocks.forEach(block => {
    block.style.backgroundColor = "white";
  });
}

changeBtn.addEventListener("click", () => {
  const id = blockInput.value;
  const color = colorInput.value;

  resetAll();

  const target = document.getElementById(id);

  if (!target) return;

  target.style.backgroundColor = color;
});