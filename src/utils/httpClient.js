const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTY0MzEyNGE1YTAzZjQ0M2ViZmNjYWI5MzA5ZjQyMiIsInN1YiI6IjY0NzY3OGQ1MWY5OGQxMDI4NzdkZmM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vBwL1FZzQ0RbRQtPEUjudKhV-uc42DBn-5Dzgc-O8BM",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
