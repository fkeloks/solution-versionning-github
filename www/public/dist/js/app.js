var sidebarButton=document.getElementById("sidebar-button");sidebarButton&&sidebarButton.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".sidebar .sidebar-sections"),n=document.querySelector(".sidebar");t.classList.toggle("sidebar-open"),n.classList.toggle("display-xs-none"),n.classList.toggle("display-sm-none"),n.classList.toggle("display-md-block")});var addModuleInput=document.getElementById("add-module"),addModuleButton=document.getElementById("add-module-button");addModuleInput&&addModuleButton&&addModuleButton.addEventListener("click",function(e){e.preventDefault(),document.location.href=e.currentTarget.getAttribute("data-url")+"&add-module="+addModuleInput.value});var addModuleChildrenButtons=document.querySelectorAll(".form .add-module-children");addModuleChildrenButtons&&addModuleChildrenButtons.forEach(function(e){return e.addEventListener("click",function(e){var t=e.currentTarget.previousElementSibling,n=t.cloneNode(!0);e.currentTarget.parentNode.insertBefore(n,t);var r=Number(n.querySelector("legend").innerText)+1;n.nextElementSibling.querySelectorAll("input, textarea").forEach(function(e){return e.value=""}),n.nextElementSibling.querySelector("legend").innerText=String(r),n.nextElementSibling.querySelectorAll("label, input, textarea").forEach(function(e){if("LABEL"===e.tagName){var t=e.getAttribute("for").slice(0,-1)+(r-1);e.setAttribute("for",t)}else{var n=e.id.slice(0,-1)+(r-1);e.name=n,e.id=n}})})});var removeModuleChildrenButtons=document.querySelectorAll(".form .remove-module-children");removeModuleChildrenButtons&&removeModuleChildrenButtons.forEach(function(e){return e.addEventListener("click",function(e){var t=e.currentTarget.parentNode;t.parentNode.removeChild(t)})});var deleteButtons=document.querySelectorAll('a.link[href*="/suppression"]');deleteButtons&&deleteButtons.forEach(function(e){return e.addEventListener("click",function(e){e.preventDefault(),confirm("Confirmez-vous la suppression de cet élément ?")&&(window.location.href=e.currentTarget.getAttribute("href"))})});