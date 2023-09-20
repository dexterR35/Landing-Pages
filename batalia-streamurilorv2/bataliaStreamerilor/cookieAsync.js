$(document).ready(async function () {
    // Function to get the value of a cookie
    function getCookie(nameCookie) {
        return new Promise((resolve) => {
            let value = "; " + document.cookie;
            let parts = value.split("; " + nameCookie + "=");
            if (parts.length === 2) {
                resolve(parts.pop().split(";").shift());
            } else {
                resolve(null);
            }
        });
    }

    // Function to set a cookie with an expiration date
    function setCookieWithExpiration(name, value, expirationDate) {
        document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
        localStorage.setItem(name, value);
    }

    async function isAuthenticated() {
        // Check if the user is authenticated using cookies // 
        const username = await getCookie("username");
        return typeof username === "string" && username.trim() !== "";
    }
       
    async function hasVoted() {
        const votedCookie = await getCookie("voted");
        return votedCookie === "true";
    }

    async function hasRegistered() {
        const registeredCookie = await getCookie("registered");
        return registeredCookie === "true";
    }

    async function hasJoinedBattle() {
        const joinedBattleCookie = await getCookie("joined_battle");
        return joinedBattleCookie === "true";
    }

    let cookieValue = await getCookie("username");

    if (await isAuthenticated()) {
        const username = cookieValue;
        console.log(username);
        if (!(await hasRegistered())) {

            $("#registerForm").show();

            console.log(`${username.toUpperCase()} is not registered. Show register form.`);
            $("#registerForm").submit(async function (event) {
                event.preventDefault();
                let username = $("#usernameInput").val();
                // Set username and other flags using the reusable function
                setCookieWithExpiration("username", username, new Date("Thu, 18 Dec 2023 14:08:00 UTC"));
                setCookieWithExpiration("registered", "true", new Date("Thu, 18 Dec 2023 14:08:00 UTC"));
                setCookieWithExpiration("joined_battle", "false", new Date("Thu, 18 Dec 2023 14:08:00 UTC"));
                setCookieWithExpiration("voted", "false", new Date("Thu, 18 Dec 2023 14:08:00 UTC"));

                location.reload();
            });
        } else {
            if (!(await hasJoinedBattle())) {
                $("#joinBattle").show();
                $("#content").text(`${username.toUpperCase()} is Registered, But is not in Battle / optIn.`);
                if (!(await hasVoted())) {
                    $("#joinBattle").click(async function () {
                        setCookieWithExpiration("joined_battle", "true", new Date("Thu, 18 Dec 2023 14:08:00 UTC"));
                        localStorage.setItem("joined_battle", "true");

                        $("#joinBattle").hide();

                        if (!(await hasVoted())) {
                            $("#voteButton").show();
                            $("#content").text(`${username.toUpperCase()} has joined the battle but has not voted yet. vote your streamer`);
                            $("#voteButton").click(async function () {
                                setCookieWithExpiration("voted", "true", new Date("Thu, 18 Dec 2023 14:08:00 UTC"));
                                localStorage.setItem("voted", "true");
                                $("#voteButton").hide();
                                if (
                                    (await hasRegistered()) &&
                                    (await hasJoinedBattle()) &&
                                    (await hasVoted())
                                ) {
                                    $("#content").text(
                                        "Congratulations! registered,joinBattle,voted cookie check before refresh."
                                    );
                                    $("#clearDataButton").show();
                                } else {
                                    $("#content").text("not good");
                                }
                            });
                        }
                    });
                }
            } else {
                if (!(await hasVoted())) {
                    $("#voteButton").show();
                    $("#content").text(`check : ${username.toUpperCase()} is in battle/optin but has not voted yet. vote your streamer`);
                    $("#voteButton").click(async function () {
                        setCookieWithExpiration("voted", "true", new Date("Thu, 18 Dec 2023 14:08:00 UTC"));
                        localStorage.setItem("voted", "true");
                        $("#voteButton").hide();

                        if (
                            (await hasRegistered()) &&
                            (await hasJoinedBattle()) &&
                            (await hasVoted())
                        ) {
                            $("#content").text(
                                "Congratulations! registered, joinBattle,voted. cookie set"
                            );
                            $("#clearDataButton").show();
                        }
                    });
                } else if (
                    (await hasRegistered()) &&
                    (await hasJoinedBattle()) &&
                    (await hasVoted())
                ) {
                    $("#content").text(
                        "check: All good,The page holds your data, Enjoy"
                    );
                    $("#clearDataButton").show();
                } else {
                    console.log("else");
                }
            }
        }
    } else {
        $("#registerForm").show();
        $("#content").text(`Register / Login. Show offer.`);

        $("#registerForm").submit(async function (event) {
            event.preventDefault();

            let username = $("#usernameInput").val();

            setCookieWithExpiration("username", username, new Date("Thu, 18 Dec 2023 14:08:00 UTC"));
            setCookieWithExpiration("registered", "true", new Date("Thu, 18 Dec 2023 14:08:00 UTC"));
            setCookieWithExpiration("joined_battle", "false", new Date("Thu, 18 Dec 2023 14:08:00 UTC"));
            setCookieWithExpiration("voted", "false", new Date("Thu, 18 Dec 2023 14:08:00 UTC"));

            location.reload();
        });
    }

    function clearData() {
        const cookiesToDelete = ["registered", "username", "voted", "joined_battle"];

        // Clear specific local storage items
        for (const item of cookiesToDelete) {
            localStorage.removeItem(item);
        }

        // Clear specific cookies by setting their expiration date to the past
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const nameCk = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

            // Check if the cookie name matches any of the items to delete and delete it
            if (cookiesToDelete.includes(nameCk)) {
                document.cookie = `${nameCk}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            }
        }

        alert("all data will be cleared.");
    }

    // // Add a click event handler to the button
    $("#clearDataButton").click(function () {
        clearData();
        location.reload();
    });
});