<html>
	<body>
		<div id="content">
			<div id="questions">
			</div>
		</div>
	</body>
	<script>
		//mimick as the response from server
		var questions = '[{"question":"What is something?","options":["answer1","answer2"],"answer":"answer1"},{"question":"What is something2?","options":["answer1","answer2"],"answer":"answer2"}]'

		var dataModel = JSON.parse(questions);

		console.log(dataModel)

		for(i=0 ; i < dataModel.length ; i++) {
			console.log(dataModel[i].question)

			var div = document.createElement('div');
			div.innerHTML = dataModel[i].question;

			document.getElementById("questions").append(div);
		}
	</script>
</html>