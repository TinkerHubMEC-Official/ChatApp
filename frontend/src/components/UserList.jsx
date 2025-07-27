function UserList({ users, selectedUser, setSelectedUser }) {
  return (
    <div className="w-72 bg-neutral-900 text-white py-4 flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {users.map(u => (
          <div
            key={u._id}
            className={`p-2 pl-8 cursor-pointer text-left ${selectedUser === u.username ? 'bg-black/20 text-white' : 'hover:bg-neutral-800'}`}
            onClick={() => setSelectedUser(u.username)}
          >
            {u.username}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList
