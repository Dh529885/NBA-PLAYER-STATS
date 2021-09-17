let NBAData;

const $firstName = $("#firstName");
const $lastName = $("#lastName");
const $age = $("#age");
const $dateOfBirth = $("#dateOfBirth");
const $height = $("#height");
const $weight = $("#weight");
const $team = $("#team");
const $position= $("#position");
const $jerseyNumber = $("#jerseyNumber");
const $careerPoints = $("#careerPoints");
const $carrerAssists = $("#carrerAssists");
const $careerRebounds = $("#careerRebounds");
const $careerBlocks = $("#careerBlocks");
const $careerTurnovers = $("#careerTurnovers");
const $careerPercentageThree = $("#careerPercentageThree");
const $careerPercentageFreethrow = $("#careerPercentageFreethrow");
const $careerPercentageFieldGoal = $("#careerPercentageFieldGoal");
const $headShotUrl = $("#headShotUrl");
const $input = $("input[type=text]");

function handleGetData(event) {
	event.preventDefault();

	userInput = $input.val();

	
	fetch("https://nba-player-individual-stats.p.rapidapi.com/players/fullname?name=" + userInput.replace(" ", "_"), {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
			"x-rapidapi-key": "3d522557d6msh570a017fbfe633dp1d95a0jsna09f56371221"
		}
	})
 .then(data => data.json())
		.then(
			(data) => {
				console.log(data);
				NBAData = data;
				render(data);

			},
			(error) => {
				console.log("Oops something went wrong: ", error);
			}
		);
}

$('form').on('submit', handleGetData);

function render(data) {
	$firstName.text(data.firstName);
	$lastName.text(data.lastName);
	$age.text(data.age);
	$dateOfBirth.text(data.dateOfBirth);
	$height.text(data.height);
	$weight.text(data.weight);
	$team.text(data.team);
	$position.text(data.position);
	$jerseyNumber.text(data.jerseyNumber);
	$careerPoints.text(data.careerPoints)
	$carrerAssists.text(data.carrerAssists)
	$careerRebounds.text(data.careerRebounds)
	$careerBlocks.text(data.careerBlocks)
$careerTurnovers.text(data.careerTurnovers)
$careerPercentageThree.text(data.careerPercentageThree)
$careerPercentageFreethrow.text(data.careerPercentageFreethrow)
$careerPercentageFieldGoal.text(data.careerPercentageFieldGoal)
$headShotUrl.attr('src', NBAData.headShotUrl)
}

