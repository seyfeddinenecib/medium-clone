export function signin({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return fetcher("signin", { username, password });
}

export function fetcher(url: string, data: {} | undefined) {
  return fetch(`${window.location.origin}/api/${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((e) => {});
}
