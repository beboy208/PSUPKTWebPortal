const truncateTextEllipsis = (text = "", n = 100, symbol = "...") => {
  return text.length > n ? text.substr(0, n - 1) + symbol : text;
};

export default truncateTextEllipsis;
