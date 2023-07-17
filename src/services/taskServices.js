import api from './serviceConfig'

 async function getTask() {
    const result = await api.get(`task`,
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
    return result.data
}

 async function createTask(taskData) {
    const userId = localStorage.getItem('userId')
  
    const result = await api.post("task", {
      task: taskData.task,
      time: taskData.time,
      userId: userId
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
  
    return result.data
  }

  // async function updateTask(updatedTask) {
  //   try {
  //     const response = await api.put(`/task/${updatedTask.id}`, updatedTask, {
  //       headers: {
  //         token: localStorage.getItem("token"),
  //       },
  //     })
  
  //     return response.data
  //   } catch (error) {
  //     console.error("Error al actualizar la tarea:", error)
  //     throw error
  //   }
  // }

  async function updateTask(updatedTask) {
      const response = await api.put(`/task/${updatedTask.id}`, updatedTask, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      return response.data

  }


  async function deleteTask(taskId) {
 
      const response = await api.delete(`/task/${taskId}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
  
      return response.data
    }

  export {
    getTask,
    createTask,
    updateTask,
    deleteTask
  }