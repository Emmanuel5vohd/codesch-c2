let joke_button = document.getElementById("joke-button");

let avatar_img = document.getElementById("avatar-image");
let joke_text = document.getElementById("joke-text");
let joke_footer = document.getElementById("joke-footer");

// this adds an event liostener to our joke button, when the joke button is clicked the fetch data function is called
joke_button.addEventListener("click", fetchdata);

async function fetchdata() {
  const url = "https://api.chucknorris.io/jokes/random";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("an error occured");
    }

    const response_json = await response.json();
    console.log(response_json);

    let api_data_value = response_json?.value;
    let api_data_created_at = response_json?.created_at;
    let api_data_icon_url = response_json?.icon_url;

    joke_text.textContent = api_data_value;

  } catch (error) {
    console.log("error message is " + error.message);
  }
}
