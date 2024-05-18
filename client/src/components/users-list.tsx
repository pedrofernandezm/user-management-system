import { User } from '../definitions';

type UserListProps = {
  users: User[];
  deleteUser: (id: string) => void;
}

export default function UsersList({ users, deleteUser }: UserListProps) {

  const userFullName = (firstName: string, lastName: string): string => {
    return `${lastName} ${firstName}`;
  }

  return (
    <table className='users-table'>
      <thead>
        <tr>
          <th>Fullname</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user) => {
          const { id, firstName, lastName, email, gender, shortDescription } = user;
          return (
            <tr key={id}>
              <td>{userFullName(firstName, lastName)}</td>
              <td>{ email }</td>
              <td>{ gender }</td>
              <td>{ shortDescription }</td>
              <td><button onClick={() => deleteUser(id)}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
