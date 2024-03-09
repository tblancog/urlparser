// Just an util function to parse to integer
const toStrOrNumber = (value) =>
  !isNaN(value) ? Number.parseInt(value) : value;

// function that does all the parsing
const urlparser = (url) => {
  const urlFormat = "/:version/api/:collection/:id";
  const pathParams = {};
  let output = {};

  // Extract segments by splitting by / until ? char
  if (url.includes("/")) {
    let arrUrl = url
      .substr(0, url.indexOf("?"))
      .split("/")
      .filter((el) => el);

    // Split url and extract variable names if they include colons
    const arrFormat = urlFormat.split("/").filter((el) => el);
    arrFormat.forEach((segment, index) => {
      if (segment.includes(":")) {
        // Extract properties and values
        const property = segment.match(/\w+/gm);
        pathParams[property] = toStrOrNumber(arrUrl[index]);
      }
    });
  }

  // Extract url parameters
  const urlParams = {};
  if (url.includes("?")) {
    params = url.substring(url.indexOf("?") + 1, url.length).split("&");
    params.forEach((param) => {
      const p = param.split("=");
      urlParams[p[0]] = toStrOrNumber(p[1]);
    });
  }

  // Merge two objects
  output = { ...pathParams, ...urlParams };
  return output;
};

module.exports = urlparser;
