import { useQuery, gql } from '@apollo/client';
const query = gql`
   query GetAllTodos {
  getTodos {
        id
        title
        user {
          name
        }
      }
}
`
function App() {
  const { loading, error, data } = useQuery(query);
  if (loading) return <h1>hi i'm loading data</h1>
  if (error) return <h1>error while fetching data</h1>
  console.log(data);
  return (
    <div className="App">
      <table>
        <tbody>
          {
            data?.getTodos.map(data => {
              return <tr key={data.id}>

                <td>{data.title}</td>
                <td>{data?.user?.name}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
