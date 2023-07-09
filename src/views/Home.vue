<template>
    <div class="todo">
      <strong>Select day:</strong> <input type="date" class="date">
      <button class="iconButton">
        <img src="../assets/plus.svg" class="icon" />
      </button>
      <div>
        <br>
        <strong>Tasks:</strong>
        <button class="iconButton">
          <img src="../assets/plus.svg" class="icon" />
        </button>
        <div class="todoContainer">
          <br><input type="time" class="time"> <input type="text" class="task">
          <div class="doneButtonContainer">
            <div class="centerContainer">
              <button class="doneButton">
                done
              </button>
            </div>
            <button class="trashButton">
              <img src="../assets/trash.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .todo {
    border: solid;
    width: 350px;
  }
  
  input {
    width: 235px;
  }
  
  .task {
    width: 230px;
  }
  
  .time {
    width: 70px;
  }
  
  .todoContainer {
    border: solid;
    height: auto;
  }
  
  .icon {
    height: 22px;
    vertical-align: middle;
    margin-left: 2px;
  }
  
  .iconButton {
    margin-left: 10px;
    margin-top: 5px;
  }
  
  .date {
    width: 200px;
  }
  
  .todoContainer {
    margin-top: 10px;
  }
  
  .doneButton {
    height: 23px;
  }
  
  .doneButtonContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .centerContainer {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  
  </style>
  