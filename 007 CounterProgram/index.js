{/* <label id="countLabel">0</label><br>
    <div id="btn_container">
        <button id="decrease_btn" class="buttons">Decrease</button>
        <button id="reset_btn" class="buttons">Reset</button>
        <button id="increase_btn" class="buttons">Increase</button>
    </div> */}

    const decrease_btn = document.getElementById("decrease_btn");
    const reset_btn = document.getElementById("reset_btn");
    const increase_btn = document.getElementById("increase_btn");
    const countLabel = document.getElementById("countLabel");
    let count = 0;

    increase_btn.onclick = function(){
        count++;
        countLabel.textContent = count;
    }

    decrease_btn.onclick = function(){
        count--;
        countLabel.textContent = count;
    }

    reset_btn.onclick = function(){
        count = 0;
        countLabel.textContent = count;
    }


    