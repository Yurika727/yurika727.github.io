(function() { // Add event listener
    document.addEventListener("mousemove", parallax);
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.05}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.09}% ${50 - (_mouseY - _h) * 0.09}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        document.querySelector("body").style.backgroundPosition = x;
    }

})();
