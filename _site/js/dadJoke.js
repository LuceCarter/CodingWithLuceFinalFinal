 console.log("Fetching a Dad joke... ");

  const myHeaders = new Headers();
  myHeaders.append("Accept", "text/plain");
  myHeaders.append("User-Agent", "CodingWithLuceBlog");
  myHeaders.append(
    "Cookie",
    "__cfduid=d0222b48113a0cf0066ef0a9dd6572a2e1598302507"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://icanhazdadjoke.com/", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result)
      document.getElementById("dadJoke").innerText = result;
    })
    .catch((error) => console.log("error", error));
