<<<<<<< HEAD
export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
=======
export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
>>>>>>> 8e1d339117836a655bf4cb9e8708f980e631c015
