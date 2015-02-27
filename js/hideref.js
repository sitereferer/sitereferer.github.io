var protected_links = "";
var a_to_va = 0;
var a_to_vb = 0;
var a_to_vc = "";

function auto_hide() {
    var a = window.location.hostname;
    if (protected_links != "" && !protected_links.match(a)) {
        protected_links += ", " + a
    } else if (protected_links == "") {
        protected_links = a
    }
    var b = "";
    var c = new Array;
    var d = 0;
    b = document.getElementsByTagName("a");
    a_to_va = b.length;
    c = a_to_fa();
    d = c.length;
    var e = false;
    var j = 0;
    var f = "";
    for (var i = 0; i < a_to_va; i++) {
        e = false;
        j = 0;
        while (e == false && j < d) {
            f = b[i].href;
            if (f.match(c[j]) || !f || !f.match("http://")) {
                e = true
            }
            j++
        }
        if (e == false) {
            b[i].href = "http://sitereferer.github.io/url.html?" + f;
            a_to_vb++;
            a_to_vc += i + ":::" + b[i].href + "\n"
        }
    }
    var g = document.getElementById("anonyminized");
    var h = document.getElementById("found_links");
    if (g) {
        g.innerHTML += a_to_vb
    }
    if (h) {
        h.innerHTML += a_to_va
    }
}

function a_to_fa() {
    var a = new Array;
    protected_links = protected_links.replace(" ", "");
    a = protected_links.split(",");
    return a
}