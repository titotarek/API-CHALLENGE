function getPost(userId) {
	let req = new XMLHttpRequest();

	req.open(
		"GET",
		"https://jsonplaceholder.typicode.com/posts?userId=" + userId
	);

	req.responseType = "json";
	req.send();
	req.onload = function () {
		if (req.status >= 200 && req.status < 300) {
			let posts = req.response;
			document.getElementById("posts").innerHTML = "";

			for (post of posts) {
				let content = `
        <div id="post">
            <h3>${post.title}</h3>
            <hr>
            <h4>${post.body}</h4>
        </div> `;

				document.getElementById("posts").innerHTML += content;
			}
		}
	};
}

function getUsers() {
	let req = new XMLHttpRequest();

	req.open("GET", "https://jsonplaceholder.typicode.com/users");
	req.responseType = "json";
	req.send();
	req.onload = function () {
		if (req.status >= 200 && req.status < 300) {
			let users = req.response;
			document.getElementById("users").innerHTML = "";

			for (user of users) {
				let content = `
                <div id="user" onclick=userClick(${user.id},this)>
						<h1>${user.name}</h1>	
						<h1>${user.email}</h1>	
					</div>`;

				document.getElementById("users").innerHTML += content;
			}
		}
	};
}

// call the getPOst function
getPost(1);

// call the getUser function
getUsers();

//  get user info when is clicked
function userClick(id, el) {
	getPost(id);
	let selectedElement = document.getElementsByClassName("selected");
	for (element of selectedElement) {
		element.classList.remove("selected");
	}
	el.classList.add("selected");
}
