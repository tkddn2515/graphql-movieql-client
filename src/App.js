import {
  useQuery,
  gql
} from "@apollo/client";

const App = () => {
  const GET_DOGS = gql`
  query {
    movies(rating:8.5){
      id
      title
      rating
    }
}
`
;

function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log("data", data);
}

Dogs(true);
  return (
    <div className="App">
    </div>
  );
}

export default App;
