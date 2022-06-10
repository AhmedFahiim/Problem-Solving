function checkCaps(string) {
  if (string.length == 1) {
    console.log(string.toLowerCase());
  } else {
    let changed = `${string[0].toUpperCase()}`;
    for (let i = 1; i < string.length; i++) {
      changed += string[i].toLowerCase();
    }
    console.log(changed);
  }
}
checkCaps("A");
