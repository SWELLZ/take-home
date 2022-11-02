const chatApi = new ChatApi(handleMessageReceived);

function handleMessageReceived(message) {
  console.log(message);
}
