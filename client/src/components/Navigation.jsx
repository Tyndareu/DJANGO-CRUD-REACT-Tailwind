
import { Link } from "react-router-dom"
export function Navigation() {
  return (
    <div>
        <h1>Task APP</h1>
        <Link to="/tasks-create">Create Task /</Link>
        <Link to="/tasks"> Tasks List</Link>
    </div>
  )
}
