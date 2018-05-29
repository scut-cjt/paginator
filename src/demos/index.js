import './index.css'

var tos = document.querySelectorAll('.to')
for (var i = 0; i < tos.length; i++) {
    var to = tos[i]
    to.onclick = function() {
        var name = this.getAttribute('data-name')
        window.location.href = name + '.html'
    }
}