export const imageListLoader = (page, limit) => {
  return new Promise((resolve, reject) => {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
