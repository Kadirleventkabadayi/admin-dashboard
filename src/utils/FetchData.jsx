async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to retrieve data");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Failed to retrieve data");
  }
}

export default fetchData;
