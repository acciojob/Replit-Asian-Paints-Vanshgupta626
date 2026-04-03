//your JS code here. If required.
const blockInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

const allBlocks = document.querySelectorAll(".grid-item");

// function to reset all colors
function resetGrid() {
  allBlocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });
}

// Change color button
changeBtn.addEventListener("click", () => {
  const blockId = blockInput.value;
  const color = colorInput.value;

  // sabko reset karo pehle
  resetGrid();

  // specific block ko color do
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  }
});

// Reset button
resetBtn.addEventListener("click", () => {
  resetGrid();
});
