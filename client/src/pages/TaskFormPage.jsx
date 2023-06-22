import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CreateTask, DeleteTask, UpdateTask, GetTask } from '../api/tasks.api'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

export default function TasksFormPage () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const getTask = async () => {
        const {
          data: { title, description }
        } = await GetTask(id)
        setValue('title', title)
        setValue('description', description)
      }
      getTask()
    }
  }, [])

  const onSubmit = handleSubmit(async (data) => {
    if (id) {
      await UpdateTask(id, data)
      toast.success('Task updated successfully', {
        position: 'top-center',
        style: {
          backgroundColor: '#101010',
          color: '#fff'
        }
      })
    } else {
      await CreateTask(data)
      toast.success('Task created successfully', {
        position: 'top-center',
        style: {
          backgroundColor: '#101010',
          color: '#fff'
        }
      })
    }
    navigate('/tasks')
  })

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
        />
        {errors.tittle && <span>This field is required</span>}
        <textarea
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          rows="3"
          placeholder="Description"
          {...register('description', { required: true })}
        />
        {errors.description && <span>This field is required</span>}
        <button
          className="bg-indigo-500 p-3 rounded-lg block w-full mt-3"
          type="submit"
        >
          {id ? 'Update' : 'Create'}
        </button>
      </form>
    <div className='flex justify-end'>
    <button
        className="bg-red-500 p-3 rounded-lg w48 mt-3"
        hidden={!id}
        onClick={async () => {
          const accepted = window.confirm('Are you sure?')
          if (accepted) {
            DeleteTask(id)
            toast.success('Task deleted successfully', {
              position: 'top-center',
              style: {
                backgroundColor: '#101010',
                color: '#fff'
              }
            })
            navigate('/tasks')
          }
        }}
      >
        Delete
      </button>
    </div>
    </div>
  )
}
