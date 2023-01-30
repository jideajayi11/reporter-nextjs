const fetchFunction = async ({ url, method="GET", body=null, ...others }) => {
  try {
    const res = await fetch(url, { method, body, ...others });
    const data = await res.json();

    return { data };
  } catch (err) {
    return { error: err.message };
  }
}

export default fetchFunction;
