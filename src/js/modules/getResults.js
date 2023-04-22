export default function getResults() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  return query;
}
