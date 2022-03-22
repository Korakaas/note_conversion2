window.onload = function() {
    var button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', function() {
        function conversion() {
            var select = document.getElementById('note');
            select.addEventListener('change', function() {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.addEventListener('readystatechange', function(event) {
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status == 200) {
                            result.innerHTML = xmlhttp.responseText;
                        } else {
                            alert('error code ' + xmlhttp.status + ' : ' + xmlhttp.statusText);
                        }
                    }
                });
                xmlhttp.open("POST", 'note2.php', true);
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
                xmlhttp.send("note_classique=" + notes[this.value].c);



            });

        }
        button.style.display = "none";
        var notes = new Array({
            c: "Do",
            a: "C"
        }, {
            c: "Ré",
            a: "D"
        }, {
            c: "Mi",
            a: "E"
        }, {
            c: "Fa",
            a: "F"
        }, {
            c: "Sol",
            a: "G"
        }, {
            c: "La",
            a: "A"
        }, {
            c: "Si",
            a: "B"
        });
        var form = document.getElementsByTagName('form')[0];
        if (!form) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.addEventListener('readystatechange', function(event) {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        var div = document.createElement('div');
                        document.getElementsByTagName('body')[0].insertBefore(div, result);
                        div.innerHTML = xmlhttp.responseText;
                        conversion();
                    } else {
                        alert('error code ' + xmlhttp.status + ' : ' + xmlhttp.statusText);
                    }
                }
            });
            xmlhttp.open("GET", 'note2.php', true);
            xmlhttp.send();
        } else {
            form.style.display = "block";
        }

        var result = document.createElement('p');
        document.body.appendChild(result);
        result.innerHTML = "Choissisez une note pour voir sa correspondance.";
        var close = document.createElement('button');
        var closeT = document.createTextNode('Close');
        close.appendChild(closeT);
        document.body.appendChild(close);
        close.onclick = function() {
            var form = document.getElementsByTagName('form')[0];
            close.style.display = "none";
            form.style.display = "none";
            result.style.display = "none";
            button.style.display = "block";
        }
        conversion();

    });
}