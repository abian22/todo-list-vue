<template>
  <div class="todo">
    <div class="taskContainer">
      <br />
      <strong>Tasks:</strong>
      <button class="iconButton" @click="addTask()">
        <img src="../assets/plus.svg" class="icon" />
      </button>
      <div class="todoContainer">
        <div
          v-for="(task, taskIndex) in tasks"
          :key="taskIndex"
          class="taskItem"
        >
          <div class="taskItemContent">
            <br />
            <div class="inputContainer">
              <input type="time" class="time" v-model="task.time" />
              <input type="text" class="task" v-model="task.task" />
            </div>
            <div class="buttonContainer">
              <div class="leftContainer">
                <label :for="'done-' + taskIndex">Done</label>
                <input
                  type="checkbox"
                  :id="'done-' + taskIndex"
                  v-model="task.isDone"
                  @change="updateStatus(task)"
                />
              </div>
              <div class="centerContainer">
                <button class="doneButton" @click="saveTask(task)">Post</button>
                <button class="updateButton" @click="updateTask(task)">
                  Update
                </button>
              </div>
              <div class="rightContainer">
                <button class="trashButton" @click="deleteTask(task._id)">
                  <img src="../assets/trash.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskServices"

export default {
  data() {
    return {
      tasks: [{ id: "", time: "", task: "", isDone: false }]
    }
  },
  created() {
    console.log("Componente creado")
    this.loadTasks()
  },
  methods: {
    addTask() {
      const newTask = { id: "", time: "", task: "", isDone: false }
      this.tasks.push(newTask)
    },
    async loadTasks() {
      try {
        console.log("Cargando tareas...")
        const tasks = await getTask()
        console.log("Tareas cargadas:", tasks)

        this.tasks = tasks.map((task) => ({
          ...task,
          isDone: task.status === "Done",
        }))
      } catch (error) {
        console.error("Error cargando los datos:", error)
      }
    },
    async saveTask(task) {
      try {
        if (!task.task || !task.time) {
          console.error("Error: Los campos task y time son obligatorios")
          return
        }

        const newTask = {
          task: task.task,
          time: task.time,
          status: task.isDone ? "Done" : "Not done",
        }

        const response = await createTask(newTask)

        if (response) {
          console.log("Tarea creada con éxito")
          task.id = response._id
          await this.loadTasks()
        } else {
          console.error("Error al crear la tarea")
        }
      } catch (error) {
        console.error("Error al guardar la tarea:", error)
      }
    },
    async updateTask(task) {
      console.log("Update task clicked", task)
      console.log("Task to update:", task)

      try {
        let updatedStatus = ""

        if (task.updated) {
          updatedStatus = task.isDone ? "Done" : "Not done"
        } else {
          updatedStatus = task.isDone ? "Done" : ""
          task.isDone = false
        }

        const updatedTask = {
          id: task._id,
          time: task.time,
          task: task.task,
          status: updatedStatus,
        }

        const response = await updateTask(updatedTask)

        if (response) {
          console.log("Tarea actualizada con éxito")
          await this.loadTasks()
        } else {
          console.error("Error al actualizar la tarea")
        }
      } catch (error) {
        console.error("Error al guardar la tarea:", error)
      }
    },
    async deleteTask(taskId) {
      try {
        const response = await deleteTask(taskId)

        if (response) {
          console.log("Tarea eliminada con éxito")
          await this.loadTasks()
        } else {
          console.error("Error al eliminar la tarea")
        }
      } catch (error) {
        console.error("Error al eliminar la tarea:", error)
      }
    }
  }
}
</script>

<style scoped>
.todo {
  display: flex;
  gap: 20px;
}

.taskContainer {
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px;
  min-width: 400px;
}

.taskItemContent {
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
}

.task {
  width: 250px;
  margin-left: 5px;
}

input {
  border-radius: 20px;
}

button {
  border: 1px solid;
  border-radius: 20px;
}

.iconButton {
  margin-left: 10px;
}

.inputContainer {
  display: flex;
  align-items: center;
}

.buttonContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.leftContainer {
  margin-right: auto;
}

.rightContainer {
  margin-left: auto;
}

.updateButton {
  margin-left: 10px;
}
</style>
