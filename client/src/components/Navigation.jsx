import { Link, useLocation } from 'react-router-dom'

export function Navigation () {
  const { pathname } = useLocation()

  return (
    <>
      <h1 className="font-bold text-3xl mb-4">Task APP</h1>
      <div className="flex justify-center gap-3 py3 mt-3 mb-4">
        <button className="bg-indigo-500 px-3 py-2 rounded-lg">
          <Link to={pathname === '/tasks-create' ? '/tasks' : '/tasks-create'}>
            {pathname === '/tasks-create' ? 'Tasks List' : 'Create Task'}
          </Link>
        </button>
      </div>
    </>
  )
}
