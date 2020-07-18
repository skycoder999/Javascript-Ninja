function rightTriangle(n) {
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= n; j++) {
            if (j >= i) console.log('*');
            else console.log('&nbsp&nbsp');
        }
        console.log('<br>');
    }
}
rightTriangle(5);