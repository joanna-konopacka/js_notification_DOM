var e=function(e,t,n,i,a){var o=document.createElement("div");o.classList.add("notification","".concat(a));var s=document.createElement("h2");s.classList.add("title"),s.textContent="".concat(n),o.appendChild(s);var c=document.createElement("p");c.textContent="".concat(i),o.appendChild(c),document.body.appendChild(o),o.style.top=e+"px",o.style.right=t+"px",setTimeout(function(){o.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.be1d4859.js.map
