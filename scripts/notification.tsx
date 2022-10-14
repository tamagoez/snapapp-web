export function requestPermission() {
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
  } else {
    Notification.requestPermission().then(function (result) {
      console.log(result);
    });
  }
}

export function makeNotify(title, body, img) {
  const notification = new Notification(title, {
    body: body,
    icon: img,
  });
}
