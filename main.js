document.addEventListener('keypress', function (event) {
  var cin = document.getElementById('path').value;
  if (event.key === 'Enter'){
    document.body.innerHTML += '<a href="/repository/'+cin+'" id="a"></a>';
    document.getElementById('a').click();
  }
})
