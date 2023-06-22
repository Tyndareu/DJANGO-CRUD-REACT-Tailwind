import { useEffect, useState } from 'react'
import { GetAllTasks } from '../api/tasks.api'
import { TaskCard } from './TaskCard'

export function TaskList () {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getTasks () {
      const res = await GetAllTasks()
      setTasks(res.data)
      setIsLoading(false)
    }
    getTasks()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="grid grid-cols-4 gap-3 ">
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    )
  }
}
