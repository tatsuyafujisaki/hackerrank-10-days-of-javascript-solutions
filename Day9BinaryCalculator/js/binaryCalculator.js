function onButton(e) {
  const btn = e.target || e.srcElement;
  const action = document.getElementById(btn.id).innerHTML;
  const res = document.getElementById('res');

  switch (action) {
    case '0':
    case '1':
    case '+':
    case '-':
    case '*':
    case '/':
      res.innerHTML += action;
      break;
    case 'C':
      res.innerHTML = '';
      break;
    case '=':
      var expr = res.innerHTML;
      res.innerHTML = eval(expr.replace(/(\d+)/g, (match) => parseInt(match, 2))).toString(2);
      break;
    default:
      console.error('should not be executed');
      break;
  }
}
const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
  button.onclick = onButton;
}
