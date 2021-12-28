const hello = (cb) => {
  const text = "Hello!";
  cb(text);
};

hello((messages) => console.log(messages));
