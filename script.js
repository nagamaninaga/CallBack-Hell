let $Counter = document.querySelector(".count");

//Adding call back hell event listener to generate counter by adding set timeout

$Counter.addEventListener("click", function (event) {
	event.preventDefault();
	$Counter.innerText = 100;

	setTimeout(function () {
		$Counter.innerText = 90;

		setTimeout(function () {
			$Counter.innerText = 80;

			setTimeout(function () {
				$Counter.innerText = 70;

				setTimeout(function () {
					$Counter.innerText = 60;

					setTimeout(function () {
						$Counter.innerText = 50;

						setTimeout(function () {
							$Counter.innerText = 40;

							setTimeout(function () {
								$Counter.innerText = 30;

								setTimeout(function () {
									$Counter.innerText = 20;

									setTimeout(function () {
										$Counter.innerText = 10;

										setTimeout(function () {
											$Counter.classList.add("colorChange");

											$Counter.innerText =
												"!!!!!!!!!!!!!!!!Happy Independence Day!!!!!!!!!!!!!!!!!!";
										}, 2000);
									}, 2000);
								}, 2000);
							}, 2000);
						}, 2000);
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
});