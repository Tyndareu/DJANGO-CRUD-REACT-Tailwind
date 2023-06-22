import { useNavigate } from 'react-router-dom'
export function TaskCard ({ task }) {
  const navigate = useNavigate()

  return (
    <div
    className='bgzin800 p-3 hover:bg-zinc-700 border-radius-md border-2 border-slate-400'
    style={{ cursor: 'pointer' }}
    onClick={() => navigate(`/tasks/${task.id}`)}>
      <h2 className='font-bold uppercase'>{task.title}</h2>
      <p className='text-slate-400'>{task.description}</p>
    </div>
  )
}
