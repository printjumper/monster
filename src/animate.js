export function animate() {
	const logo = document.getElementById('logo');
	const screenWidth = window.screen.width - 120;
	const screenHeight = window.screen.height - 350;
	const horizontalStepPxls = 10;
	const verticalStepPxls = 10;
	const horizontalStepsQuantity = Math.floor(screenWidth / horizontalStepPxls);
	const verticalStepsQuantity = Math.floor(screenHeight / verticalStepPxls);
	const horizontalAnimationTime = 800;
	const verticalAnimationTime = 700;
	const horizontalStepTimeLen = horizontalAnimationTime / horizontalStepsQuantity;
	const verticalStepTimeLen = verticalAnimationTime / verticalStepsQuantity;
	setTimeout(() => {
		for (let i = 1; i <= horizontalStepsQuantity; i++) {
			setTimeout(() => {
				logo.style.marginRight = `${i * horizontalStepPxls}px`;
				if (i === horizontalStepsQuantity) {
					setTimeout(() => {
						animateVertical(logo, verticalStepsQuantity, verticalStepPxls, verticalStepTimeLen);
					}, horizontalStepTimeLen);
				}
			}, i * horizontalStepTimeLen);
		}
	}, 1000)


}

function animateVertical(element, stepsV, stepPxls, stepTimeLen) {
	for (let i = 1; i <= stepsV; i++) {
		setTimeout(() => {
			element.style.marginBottom = `${i * stepPxls}px`;
			if (i === stepsV) {
				element.classList.add('Paused');
			}
		}, i * stepTimeLen);
	}
}


		